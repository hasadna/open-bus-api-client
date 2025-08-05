const fs = require("fs");

function safeDelete(targetPath) {
  if (fs.existsSync(targetPath)) {
    const stat = fs.statSync(targetPath);
    if (stat.isDirectory()) {
      fs.rmSync(targetPath, { recursive: true, force: true });
      console.log(`Deleted directory: ${targetPath}`);
    } else {
      fs.unlinkSync(targetPath);
      console.log(`Deleted file: ${targetPath}`);
    }
  }
}

// Clean up
safeDelete("client/node_modules");
safeDelete("client/git_push.sh");
safeDelete("client/dist");
