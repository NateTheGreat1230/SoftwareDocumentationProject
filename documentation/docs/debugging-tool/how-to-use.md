---
sidebar_position: 2
---

# Using the Debug Tool

This will walk you through basic usage of the debugger tool, and how to interact with the interface.

## Breakpoints

A breakpoint is a marker on a line of code that tells the debugger to **pause execution** when it reaches that line.

To set a breakpoint on a line of code, you will need to click on the space next to the line number, this will place a red dot. You can click this red dot to disable the breakpoint at this location.

There are multiple types of breakpoints that you can use depending on the occasion:
| Breakpoint type | Purpose | How to set |
|---|---|---|
| Simple | Stops execution on the line | Click the area next to line number (red dot) |
| Conditional | Stops only when a specific expression is true | Right-click the breakpoint -> Edit Breakpoint... -> select Expression and enter the condition (e.g., i == 5) |
| Hit Count | Stops only after the breakpoint has been hit a specified number of times | Right-click the breakpoint -> Edit Breakpoint... -> select Hit Count and enter a number (e.g., 5)  |
| Logpoint | Logs an expression to the Debug Console but does not stop execution | Right-click the breakpoint -> Edit Breakpoint... -> select Log Message and enter the message with variables in curly braces (e.g., "Current value of i is \{i\}") |

### Simple breakpoint
Just click to toggle on and off.

![Breakpoint Off](/img/debugger/breakpointoff.png)
![Simple breakpoint on](/img/debugger/simpleBreakpoint.png)

### Complex breakpoint
Rightclick a breakpoint to change its type.

![Simple breakpoint on](/img/debugger/simpleBreakpoint.png)
![Edit Breakpoint](/img/debugger/conditionalBreakpoint.png)
![Logging Breakpoint](/img/debugger/logBreakpoint.png)

There is a dropdown of all the breakpoint types here.

### Start a debug session
In order to use the debug tool, you will have to run your program using a different interface than before. This will tell your editor to pause the excecution of your code at a breakpoint, and open the debug interface.

![Run and Debug button](/img/debugger/RunAndDebugButton.png)

This is the button you will use to start your program, or hit ```Ctrl + Shift + D```.

Doing this will ask you questions about how you want your debug mode to be run, we will talk about this later, for now you can just follow these commands.
```Run and Debug (left sidebar) -> Python Debugger (top middle)```

## Excecution Control

Once the excecution of the program is stopped, you will have access to the controls in the Debug Toolbar Interface. These are the commands that you will need to be familiar with when using the debug tool:

| Action       | Icon | Shortcut          | Description                                                                                                       |
|---------------|------|-------------------|-------------------------------------------------------------------------------------------------------------------|
| Continue      | ▶️   | F5                | Continues execution until the next breakpoint or the program ends.                                                |
| Step Over     | ↷    | F10               | Executes the current line of code and moves to the next. If the line is a function call, it executes the entire function without stopping inside it. |
| Step Into     | ↶    | F11               | Jumps inside the function call on the current line, pausing on the function's first executable line.              |
| Step Out      | ⤷    | Shift + F11       | Completes the execution of the current function and pauses at the statement following the original function call. |
| Restart       | 🔄   | Ctrl + Shift + F5 | Stops and immediately restarts the debugging session.                                                             |
| Stop          | ⏹️   | Shift + F5        | Stops the debugging session.                                                                                      |

### Continue
This will continue the excecution of your program normally, when it hits another breakpoint, it will stop.

![logo](/img/debugger/Continue0.png)

1. Before

![before usage](/img/debugger/Continue1.png)

2. After \( skips through for loop \)

![after usage](/img/debugger/Continue2.png)

If you are using a breakpoint inside of a loop, you can quickly skip through the current iteration using continue!

### Step Over
This will excecute the current line, but without showing any of the internal logic of function calls.

![logo](/img/debugger/StepOver0.png)

1. Before

![before usage](/img/debugger/StepOver1.png)

2. After \( skips the ".area\(\)" logic \)

![after usage](/img/debugger/StepOver2.png)

### Step into
This will excecute the current line, and any function calls that this line uses.

![logo](/img/debugger/StepInto0.png)

1. Before

![before usage](/img/debugger/StepOver1.png)

2. After \( shows us what happend in ".area\(\)" \)

![after usage](/img/debugger/StepInto1.png)

### Step Out
This will excecute the current function at a normal pace, then it will pause excecution after the line that called the function. This can be thought of as using 'Step Over' while your inside the function, it will speed up the internal logic and just give you the result.

![logo](/img/debugger/StepOut0.png)

1. Before

![before usage](/img/debugger/StepOut1.png)

2. After \( skips the ".area\(\)" logic, while we were in the function \)

![after usage](/img/debugger/StepOut1.png)

### Restart / Stop
Stops the current debug session, and quickly begins a new one.

![logo](/img/debugger/Restart0.png)

Stops the current debug session

![logo](/img/debugger/Stop0.png)