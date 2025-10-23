---
sidebar_position: 4
---

# Custom Theme

If you want a unique VS Code experience, you can customize the colors.

## Before You Start

Customization is much easier when you have a theme that mostly matches what you want. To make the customization process faster, consider finding a pre-built [Color Theme](color-themes.md#selecting-a-color-theme) that is close to what you want.

There are two main areas to edit when creating a custom theme:

- [Customize Workbench colors](#change-workbench-colors): controls the appearance of the environment.
- [Customize Editor colors](#change-syntax-highlighting): controls syntax highlighting in the code editor.

## Overview

You can customize your active color theme using the `workbench.colorCustomizations` and `editor.tokenColorCustomizations` settings in your **settings.json** file. To edit this file open the **Command Palette** (`Ctrl+Shift+P`) and run `Preferences: Open User Settings (JSON)`.

---

## Change Workbench Colors

You can customize colors for specific themes or for the entire profile. The syntax for each is slightly different.

### Change Profile Colors

For colors that you want to set across any theme you choose or if you are making a theme from scratch edit colors using the following.

```json title="settings.json"
"workbench.colorCustomizations": {
  "activityBar.foreground": "#ffffff",
  "activityBar.inactiveForeground": "#868686",
  "activityBar.background": "#000000",
  "activityBar.border": "#ffffff"
}
```

To reset a color to its original value, regardless of theme, use `default`:

```json
"workbench.colorCustomizations": {
  "activityBar.background": "default"
}
```

### Change Theme Colors

If you want to change specific colors within a theme (the easiest way to customize your VS Code environment) use this syntax.

_**Note:** Replace THEME NAME with the name of the theme you wish to customize._

```json title="settings.json"
"workbench.colorCustomizations": {
  "[THEME NAME]": {
    "activityBar.background": "#ffffff"
  }
}
```

To set the same color between multiple themes use this format.

```json title="settings.json"
"workbench.colorCustomizations": {
  "[THEME NAME 1][THEME NAME 2]": {
    "activityBar.background": "#ffffff"
  }
}
```

To set set the same color for a family of themes use the `*` as a wildcard.

```json title="settings.json"
"workbench.colorCustomizations": {
  "[THEME NAME *]": {
    "activityBar.background": "#ffffff"
  }
}
```

### Finding Customization Options

While editing VS Code provides IntelliSense for valid color keys. For a full list of possible options view the [official documentation](https://code.visualstudio.com/api/references/theme-color).

## Change Syntax Highlighting

You can customize how your code appears in the editor using the `editor.tokenColorCustomizations` and `editor.semanticTokenColorCustomizations` settings in your **settings.json** file. These control both syntax and semantic token colors.

### Change Profile Colors

To set syntax colors that apply across all themes or if you’re building a theme from scratch, use this syntax:

```json title="settings.json"
"editor.tokenColorCustomizations": {
  "comments": "#00ff99",
  "keywords": "#ff0077",
  "strings": "#ffee33"
}
```

### Change Theme Colors

If you want to modify syntax highlighting for a specific theme, include the theme name in brackets.

_**Note:** Replace THEME NAME with the name of the theme you wish to customize._

```json title="settings.json"
"editor.tokenColorCustomizations": {
  "[THEME NAME]": {
    "comments": "#00ff99",
    "keywords": "#ff0077",
    "strings": "#ffee33"
  }
}
```

_**Also Note:** You can use the same syntax for multiple themes as shown [here](#change-theme-colors)._

### Semantic Highlighting

Some languages (like JavaScript, TypeScript, and Java) also use **semantic highlighting**, which is powered by language services to improve accuracy.

You can control semantic highlighting globally or per theme using the following:

```json title="settings.json"
"editor.semanticTokenColorCustomizations": {
  "[THEME NAME]": {
    "enabled": true,
    "rules": {
      "*.declaration": { "bold": true },
      "variable.readonly": { "foreground": "#ffb347" }
    }
  }
}
```

This lets you apply specific styles (like bold, italic, or color overrides) for certain semantic token types such as variables, parameters, or functions.
