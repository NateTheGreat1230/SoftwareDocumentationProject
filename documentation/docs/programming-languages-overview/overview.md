--- 
sidebar_position: 1
author: Nora Meeker
---

# Programming Languages Overview

## Programming Languages


## Hundreds of programming languages supported

Visual Studio Code has support for almost every major programming language. Several ship in the box, for example, JavaScript, TypeScript, CSS, and HTML can be found in the VS Code Marketplace.
The eight most popular language extensions are
* Python
* C/C++
* Extension Pack for Java
* C#
* Go
* Dart
* PHP Extension Pack
* Ruby LSP

Go to the Marketplace or use the integrated **Extensions view** and search for your desired programming language to find snippets, code completion/IntelliSense providers, debuggers, and more. 




## Change the language for the selected file

In VS Code, the default language support for a file is based on its filename extension. However, at times you may want to change language modes, to do this click on the language indicator, which is located on the right hand of the Status Bar. This will bring up the **Select Language Mode** dropdown where you can select another language for the current file. 




## Language Identifier

VS Code associates a language mode with a specific language identifier so that various VS Code features can be enabled based on the current language mode. A language identifier is often the lowercased programming language name. Casing matters for the exact identifier matching.

You can see the list of currently installed languages and their identifiers in the **Change Language Mode** (Ctrl+K M) dropdown.




## Common questions
<!-- List questions and their answers -->
**Can I add my own language service?**

Yes you can!


**Can I map additional file extensions to a language?**

Yes, with the files.associations setting you can map file extensions to an existing language either globally or per workspace. 


**How do I set the default language for new files?**

Using the *files.defaultLanguage* setting, you can map all new files to a default language. Whenever a new blank file is opened, the editor will be configured for that language mode. 
This example will associate new files with the HTML language:
```json
    // The default language mode that is assigned to new files.
    "files.defaultLanguage": "html"
    ```


