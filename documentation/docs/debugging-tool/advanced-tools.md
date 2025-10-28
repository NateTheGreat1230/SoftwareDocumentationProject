---
sidebar_position: 4
---

# Using Advanced Debugging Tools

VSCode offers more tools to be used for debugging, that help make the process easier for large-scale projects. This will allow you to setup automated run/debug workflows for your projects.

## Debug Configurations
A **debug configuration** tells VSCode how to run or debug your program; what file to execute, which interpreter or runtime to use, and what arguments or environment settings to apply.

Each configuration lives in a file named:

```.vscode/launch.json```

### Creating a configuration
1. Open your project folder in VSCode
2. Go to the **Run and Debug** button on the left sidebar (Ctrl+Shift+D)
3. Click **"Create a launch.json file"**
4. Choose the environment you are working with ( Python )
5. VSCode will automatically create a configuration

This configuration might look something like:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Current File",
      "type": "python",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal"
    }
  ]
}

```

Explanation:
- name: The label that appears in the Debug panel.
- type: The environment type (python, node, cppdbg, etc.).
- request: "launch" to start a program, "attach" to connect to a running one.
- program: The file or script to run.
- console: Where to show output (usually "integratedTerminal")

### Running a configuration
Once you have built a configuration, you can easily run it by:
1. Opening the **Run and Debug** panel
2. Select your configuration from the dropdown.
3. click **Start Debugging** or press F5.


### Adding arguments
You can further customize how you want your program to be run, by adding environment variables ```env``` and command line arguments ```args```.
```json
{
  "name": "Run with Arguments",
  "type": "python",
  "request": "launch",
  "program": "${workspaceFolder}/main.py",
  "args": ["--verbose", "test_mode"],
  "env": {
    "DEBUG": "true",
    "API_KEY": "12345"
  },
  "console": "integratedTerminal"
}
```

This will automatically run your program using different conditions and allow you to easily test all of the cases your program might encounter.

## Tasks
**Tasks** are commands that VSCode can run for you, these can include things like:
- Compiling your code.
- Running tests
- Building a project before debugging.

These live in a file:
```.vscode/tasks.json```

### Running a build task
Say I have the following task configuration to build a program:
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build Python Script",
      "type": "shell",
      "command": "python -m py_compile ${file}",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": []
    }
  ]
}
```
Explanation:
- label: Name shown in VSCode.
- type: "shell" or "process" (shell runs a terminal command).
- command: What gets executed.
- group: Organizes tasks (e.g., "build" or "test").

Then you can use the command pallet ```Ctrl+Shift+P``` -> "Run Task" -> select the label you created ( "Build Python Script" here ).


## Connecting Tasks to Debug Configurations
You can edit your debug configuration to run a task **before** starting your program, this is commonly used for building your project before running it.

You do this by adding a "preLaunchTask" field to your debug configuration:
```json
{
  "name": "Run App",
  "type": "python",
  "request": "launch",
  "program": "${workspaceFolder}/app.py",
  "preLaunchTask": "Build Python Script"
}
```
Now VSCode will run the "Build Python Script" task before debugging your program.

Here are some useful variables when setting up these configurations:
| Variable                     | Description                  |
| ---------------------------- | ---------------------------- |
| `${workspaceFolder}`         | The root of your project     |
| `${file}`                    | The currently open file      |
| `${fileBasename}`            | File name without path       |
| `${fileDirname}`             | Folder containing the file   |
| `${workspaceFolderBasename}` | Name of the workspace folder |


And here are some troubleshooting tips for starting out:
| Problem                              | Fix                                                                   |
| ------------------------------------ | --------------------------------------------------------------------- |
| "Could not find program"             | Check your `program` path or `${workspaceFolder}` usage               |
| Debugger doesn’t stop at breakpoints | Ensure you’re running in **Debug mode**, not just “Run”               |
| Task not found                       | Make sure `"label"` in `tasks.json` matches `"preLaunchTask"` exactly |
| Environment not recognized           | Check that you have the right **interpreter** selected in VSCode      |

There are plenty of different uses for these configurations, and will allow you to quickly test your program automatically. And ensure you don't miss any edge cases when adding features to your program.