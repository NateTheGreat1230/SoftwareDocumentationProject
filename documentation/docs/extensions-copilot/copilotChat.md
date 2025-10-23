---
sidebar_position: 1
---

# Copilot Chat

Chat is a Visual Studio feature that enables you to use regular English language for AI-powered coding assistance. You can ask questions about your code, get help understanding complex parts of it, generate new features, fix bugs, and more all in a conversational interface.

## Accessing chat in VS Code

VS Code has three ways to start an AI chat conversation, each of which will be described below. You can either use the Chat menu found to the right of the search bar in the top right as depicted in the following image or the associated keyboard shortcut.
![Chat Menu](/img/copilot-extensions/chat-menu.png)

#### Chat View

Press `Ctrl+Alt+I` to open the Chat view in a dedicated side panel. You can use the Chat view for ongoing and multi-turn chat conversations, switching between different chat modes, editing across files, and for planning/implementing more complex changes.

#### Inline Chat

Press `Ctrl+I` to start a chat conversation directly in the editor/terminal. The inline chat is for suggestions in the line right where you're working, understanding code in its immediate context, and getting help with terminal commands and output.

#### Quick Chat

Press `Ctrl+Shift+Alt+L` to open a lightweight chat overlay. This is perfect for quick questions that don't require extended conversation, getting answers without changing what you're currently looking at, and looking up information while maintaining focus on your work and without exiting the page.

## Switch between chat modes

Chat modes let the AI assume different roles for specified tasks and can be switched at any time during a chat session.
1. Open the Chat view by pressing `Ctrl+Alt+I` or selecting **Chat** from the VS Code title bar.
1. Select the desired mode from the chat mode dropdown list found at the bottom left of the light gray chat input field.
The following offers descriptions of each chat mode which are Agent, Ask, and Edit modes..

#### Agent Mode

Agent Mode is optimized for complex coding tasks. The AI operates autonomously, determining the relevant context and files to edit, planning the work needed, and iterating to resolve issues as they arise. VS Code directly applies code changes and asks you to review them after it completes the task.

#### Ask Mode

Ask Mode is optimized for answering questions. Whether they be about your codebase, code, or general technology concepts, ask mode helps you to understand how something works and explore ideas. Responses may contain code blocks that you would have to apply to your codebase, and typically works better for small single file edits.

#### Edit Mode

Edit Mode is optimized for making code edits across multiple files in your project. Edit mode is useful for tasks where you understand the changes you want to make and which files to edit. VS Code directly applies changes and asks you to review them after it completes the task.

## Submitting a chat prompt

To create a chat prompt, do the following:
1. Open the Chat view by pressing `Ctrl+Alt+I` or selecting **Chat** from the VS Code title bar.
1. Select **Agent** from the chat mode dropdown list found in the bottom left corner of the light gray box at the bottom. In agent mode, chat autonomously determines what needs to be done and makes the necessary changes to your workspace.
1. Type a prompt into the chat input field and press `Enter` to submit it. The agent applies changes directly to the workspace and may run terminal commands.
1. In the editor, review the suggested changes and choose to either keep or discard them.
You can ask follow-up questions as you need to enhance the program you're writing. VS Code uses the history of chat prompts and responses as context which allows you to have multi-turn conversations with chat.

## Using a different language model

VS Code offers different language models to choose from, each having different tasks best suited for. To better understand their strengths and weaknesses, search their individual documentations provided by their developers. Changing the language model can be done in the chat input field from within the Chat view as described below.

1. Open the Chat view by pressing `Ctrl+Alt+I` or selecting **Chat** from the VS Code title bar.
1. Next to the chat mode list, you'll find a model picker dropdown in the bottom left next to the chat mode dropdown list described earlier and shown below. Open the menu and select the model you wish to use.
![Chat Models](/img/copilot-extensions/chat-model.png)
These models may vary depending on your Copilot subscription and GitHub's policies. See GitHub Copilot's documentation for more information.