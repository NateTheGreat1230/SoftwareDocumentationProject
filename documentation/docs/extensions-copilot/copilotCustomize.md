---
sidebar_position: 3
---

# Customize Copilot

You can customize chat in VS Code to best suit your development styles. This can be done by setting up configurations that persist on your profile. It will automatically apply your preferences in every conversation you have with Copilot, saving time and ensuring consistent responses without manually providing the same information every time.

## Customization options

Five main ways exist to customize your chat in VS Code. These can work independently or hand-in-hand to create a comprehensive customization option. These are **Custom Instructions**, **Prompt Files**, **Chat Modes**, **Language Models**, and **Model Context Protocol/Tools**. Different methods work best for different scenarios, some suggestions are provided in the following table.

| Use-Case Scenario             | Customization Method |
|-------------------------------|----------------------|
| Project-wide standards        | Custom Instructions  |
| Language Rules                | Custom Instructions  |
| Reusable Tasks                | Prompt Files         |
| Using Chat in different modes | Custom Chat Modes    |
| Using Your Own AI Model       | Language Models      |
| Integrating External Services | MCP & Tools          |

Brief descriptions for each option and links to additional documentation for them are found below.

### Custom Instructions

Custom Instructions let you define common guidelines or rules. These instructions allow you to describe *how* a specific task should be performed. Custom instructions are automatically applied or can be included in specific chat requests. Additional documentation can be found [here](https://code.visualstudio.com/docs/copilot/customization/custom-instructions).

### Prompt Files

Prompt Files allow you to define reusable AI prompts. They are made to stand on their own as prompts, including guidelines on how the task should be performed, allowing for the task to be completed consistently when repeated. Additional documentation can be found [here](https://code.visualstudio.com/docs/copilot/customization/prompt-files).

### Chat Modes

Chat modes allow for you to create a specialist version of the AI for specific roles or tasks. You can describe its capabilities, what it's allowed to access, the preferred AI model, and ensure that it stays within the specialization it has been designated to. Additional documentation can be found [here](https://code.visualstudio.com/docs/copilot/customization/custom-chat-modes).

### Language Models

Language models make it so you can choose from different AI models. Language refers to the fact that AIs are typically Language-Learning-Models (LLMs), it doesn't actually change from the English language without further intervention. Certain models are specialized for different tasks, allowing for Copilot to be of better service for what you ask it to do. Additional documentation can be found [here](https://code.visualstudio.com/docs/copilot/customization/language-models).

### MCP & Tools

MCP & Tools allow you to connect external, or non-VS Code, services through the Model Context Protocol (MCP). This allows you to connect database tools without leaving your environment or integrate with external APIs to fetch different information. Additional documentation can be found [here](https://code.visualstudio.com/docs/copilot/customization/mcp-servers).

## Getting Started

The following are suggestions that you can try to make your Copilot chat customizations personalized to your needs. You can implement them incrementally, starting with what you view as simplest and adding more complexity as you need and/or learn.

1. Try different language models. You can learn more about how to do this on the [Copilot Chat](docs/extensions-copilot/copilotChat.md) page.
1. Set up basic guidelines. You can do this by creating a `.github/copilot-instructions.md` file with all your preferences and coding standards. This file should be placed at the root, or starting folder, of your VS Code project.
1. Add task automation. If you're repetitively doing the same task over and over again, try adding prompt files so that they can save you time and ensure consistency.
