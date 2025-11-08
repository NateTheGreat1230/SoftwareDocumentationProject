--- 
sidebar_position: 1
author: Nora Meeker
---

# Keyboard Shortcuts Overview

## What are Keyboard Shortcuts?
Keyboard shortcuts are combinations of keys that let you perform common actions quickly without using the mouse. They make it faster to navigate, edit, and manage your workspace - saving time and improving productivity.

Keyboard shortcuts are customizable in VSCode. You can modify, remove, or add new shortcuts to match your workflow through the **Keyboard Shortcuts editor**, or by editing the underlying keybindings.json file directly.

Using keyboard shortcuts effectively helps you stay focused on your code and reduces the need to switch between tools or menus. 




## Keyboard Shortcuts Editor
The **Keyboard Shortcuts Editor** in Visual Studio Code provides an easy way to view, search, and customize all key bindings without manually editing configuration files. It displays every command available in VS Code along with its assigned keyboard shortcut (if any), allowing you to tailor the editor to your preferred workflow. 

You can open the Keyboard SHortcuts Editor by pressing:
* Ctrl+K followed by Ctrl+S (Windows/Linux)
* Cmd+K followed by Cmd+S (macOS)


**Features**
* **Search for commands**: Use the search bar at the top to quickly find commands by name, function, or key binding.
* **Edit shortcuts**: Double-click a command or select the pencil icon next to it to assign a new key combination.
* **Remove shortcuts**: Click the trash can icon to delete an existing shortcut.
* **Record keybindings**: When assigning a shortcut, you can press the key combination you want to use, and VS Code will record it automatically.
* **View conflicts**: If a keybinding is already in use, VS Code highlights the conflict so you can resolve it easily.
* **Open keybindings.json**: For advanced customization, you can open the under;ying JSON file directly by selecting the {} icon in the upper-right corner of the editor.


**Why Use It**
The Keyboard Shortcuts Editor offers a balance between convenience and control, letting you experiment and adjust shortcuts visually while still supporting full manual configuration through keybindings.json. 




## Keymap Extensions
**Keymap extension** let you import keyboard shortcuts from the other editors into Visual Studio Code. They help you keep familiar keybindings when transitioning from another development environment, so you can start coding productively right away. 

For example, if you're used to shortcuts from editors like Atom, Vim, or IntelliJ IDEA, you can install a matching keymap extension to make VS Code respond to those same key combinations.

**Installing a Keymap Extension**
1. Open the **Extension View** by pressing:
   * Ctrl+Shift+X (Windows/Linux) 
   * Cmd+Shift+X (macOS)
2. Search for "keymap" to see available options.
3. Select the desired keymap (for example, **IntelliJ Keymap**) and click **Install**.

Once installed, the extension automatically spplies its predefined shortcuts to your workspace. You can view and customie them further in the **Keyboard Shortcuts Editor** or keybinding.json.

**Common Keymap Extensions**
* Vim Keymap - Emulates Vim's modal editing experience.
* Sublime Test Keymap - Maps VS Code commands to Sublime Text's default shortcuts.
* Atom Keymap - Makes VS Code behave like Atom in terms of keybindings.
* Visual Studio Keymap - Brings over familiar shortcuts from Visual Studio.
* IntelliJ IDEA Keymap - Matches IntelliJ's default keyboard layout and actions.

**Managing Keymap Conflicts**
If multiple keymaps are installed, conflicts can occur between overlapping shortcuts. You can resolve these conflicts by modifying bindings in the **Keyboard Shortcuts Editor** or removing an extension you no longer use. 




## Customize Keyboard Shortcuts
Visual Studio Code allows you to fully customize your keyboard shortcuts to match your personal workflow or to align with shortcuts from other tools you use. Whether you're changing a few key combinations or completely redesigning your key layout, VS Code gives you the flexibility to make the editor work exactly the way you want. 

**How to Customize Keyboard Shortcuts**
You can customize shortcuts in two main ways:

1\. **Using the Keyboard Shortcuts Editor** 
   1. Open the editor with:
      Ctrl+K then Ctrl+S (Windows/Linux)
      Cmd+K then  Cmd+S (macOS)
    2. Search for the command you want to modify.
    3. Click the pencil icon next to it and press the new key combination.
    4. Confirm the change - VS Code automatically saves the new shortcut.

2\. **Editing keybindings.json Directly**
   1. Open the file by selecting the Open Keyboard Shortcuts (JSON) icon {} in the upper-right corner of the editor.
   2. Add or modify entries in the JSON array using the following format:
    ```json
    {
      "key": "ctrl+alt+r",
      "command": "workbench.action.reloadWindow",
      "when": "editorTextFocus"
    }
    ```
    3. Save the file - changes take effect immediately.
    This method gives you advanced control, including the ability to define context conditions (the "when" clause) that specify when shortcuts are active. 

**Why Customize Shortcuts?**
Customizing keyboard shortcuts can make your workflow faster, smoother, and more comfortable. Common reasons include:
* **Consistency**: Align VS Code shortcuts with other editors or IDEs you use.
* **Accessiblitity**: Reassign keys to make themm easier to reach on your keyboard or device.
* **Efficiency**: Bind frequently used commands to simpler key combinations to reduce effort.
* **Conflict resolution**: Resolve ovverlapping shortcuts caused by extensions or keymaps.
* **Personal preference**: Create shortcuts that match your habits and coding style.

**Tips for Effective Customization**
* Use unique combinations to avoid overwriting important defaulot bindings.
* Add comments in keybindings.json to track why a shortcut was changed.
* Export your keybindings for use on other machines via the **Settings Sync** feature.

Customizing your shortcuts turns VS Code into a more personal and efficient development environment, tailoring it exactly to how you work. 