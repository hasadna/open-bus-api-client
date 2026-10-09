export function normalizeSpec(spec) {
  let updated = normalizeSchemaExamples(spec);
  // Match the generator's existing fallback names to preserve client methods.
  const operationIds = {
    "/": { get: "rootGet" },
    "/issues/create": { post: "issuesCreatePost" },
    "/complaints/send": { post: "complaintsSendPost" },
  };
  const used = new Set(
    Object.values(spec.paths ?? {}).flatMap((path) =>
      Object.values(path).map((operation) => operation?.operationId),
    ),
  );
  for (const [path, methods] of Object.entries(operationIds)) {
    for (const [method, id] of Object.entries(methods)) {
      const operation = spec.paths?.[path]?.[method];
      if (operation && !operation.operationId && !used.has(id)) {
        operation.operationId = id;
        used.add(id);
        updated = true;
      }
    }
  }
  return updated;
}

// OpenAPI 3.0 Schema Objects support `example`, not JSON Schema's `examples`.
export function normalizeSchemaExamples(spec) {
  if (!spec.openapi?.startsWith("3.0.")) return false;

  let updated = false;
  function visit(schema) {
    if (!schema || typeof schema !== "object") return;

    if (Array.isArray(schema.examples)) {
      if (!Object.hasOwn(schema, "example") && schema.examples.length) {
        schema.example = schema.examples[0];
      }
      delete schema.examples;
      updated = true;
    }

    for (const child of Object.values(schema.properties ?? {})) visit(child);
    for (const key of ["items", "additionalProperties", "not"]) visit(schema[key]);
    for (const key of ["allOf", "anyOf", "oneOf"]) {
      for (const child of schema[key] ?? []) visit(child);
    }
  }

  for (const schema of Object.values(spec.components?.schemas ?? {})) visit(schema);
  return updated;
}
