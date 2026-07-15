# Recipes

## How to clean build artifacts

This guide explains how to execute the cleanup process to remove leftover build artifacts.

Genie Clean enables this task by registering a command with the Genie task runner that triggers a Masonry pipeline, which safely deletes the `build` directory. 

1. Navigate to the root directory of your project in a terminal.
2. Ensure that `@dashkite/genie-clean` is imported and applied to your Genie configuration.
3. Execute the `clean` task using the Genie CLI.

```bash
# Execute the cleanup task
npx genie clean
```

Running this command clears out the `build` directory, ensuring a clean slate for subsequent build processes.
