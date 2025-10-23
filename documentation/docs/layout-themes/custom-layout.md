---
sidebar_position: 2
---

# Custom Layout

Guide to changing the layout in VS Code.

## Overview

You can change many parts of the VS Code user interface because of it's fully modular layout. Features like [Zen Mode](#zen-mode) or the VS Code [Panel](#the-panel) can make the development experience much more productive and enjoyable and features like the [sidebars](#sidebars) provide quick access to files, extensions, or tools like [Copilot](docs/extensions-copilot/copilotChat.md).

---

## Changing the Layout

VS Code’s layout is built from modular regions:

- [The Editor](#the-editor) — where you view and edit files.
- [The Sidebars](#sidebars) — panels for tools like Explorer, Source Control, and Copilot.
- [The Panel](#the-panel) — an area for Terminals, Problems, or Output.

You can toggle these regions on and off from the **View > Appearance** menu, or by using the **layout buttons** in the top-right corner of the window.

![Layout Controls](/img/layout-theme/layoutControls.png)

From the **Customize Layout** view, you can quickly enter layout modes like Full Screen, Centered Layout, or [Zen Mode](#zen-mode). Access the **Customize Layout** view by clicking the first button in the **layout buttons**.

![Layout Button](/img/layout-theme/layoutButton.png)

## The Editor

The **Editor region** is where you write and view code. You can open multiple editors side by side, create editor groups, or move files into new windows.

Editor Options:

- **Split Editors:** Drag a file tab to the desired part of the screen to open multiple views.
- **Grid Layout:** Arrange editors in rows and columns for flexible layouts. Access this via **View > Editor Layout**
- **Floating Windows:** Drag an editor out of the main window to open it separately. This works especially well for multi monitor setups.

## Sidebars

The **Sidebars** house important tools like the Explorer, Source Control, Search, and Extensions.

VS Code supports two sidebars:

- **Primary Sidebar:** by default on the left.
- **Secondary Sidebar:** opposite the primary, great for multitasking (e.g., Explorer on the left, [Copilot](docs/extensions-copilot/copilotChat.md) on the right).

To manage Sidebars:

- Toggle visibility: Use the **layout buttons** in the top right.
- Move the sidebars: Use the **Customize Layout** view via the **layout buttons**.

You can drag and drop views between sidebars or [the panel](#the-panel) to customize your experience. VS Code remembers your arrangement between sessions.

## The Panel

The **Panel** appears below the editor by default and contains tabs like **Terminal**, **Debug Console**, and **Problems**.

You can move or resize the Panel to meet your preferences:

- Change position (bottom, left, right, or top) via **View > Appearance > Panel Position**.
- Toggle visibility via the **layout buttons**.
- Maximize the Panel with the chevron button in the Panel corner.

You can also drag and drop views into the sidebars and vice versa for full flexibility.

## Zen Mode

**Zen Mode** is designed for distraction-free coding. When enabled, it hides all UI elements except the editor.

To activate Zen Mode:

- Open the **Customize Layout** view and toggle **Zen Mode**.

## Quick Tips

- You can also open the **Customize Layout** view from the **Command Palette** (`Ctrl+Shift+P`) by searching `customize layout`.
- You can reset all defaults from the **Customize Layout** view.
- Try pairing layouts with [Profiles](introduction.md#profiles) to save setups for different projects.
