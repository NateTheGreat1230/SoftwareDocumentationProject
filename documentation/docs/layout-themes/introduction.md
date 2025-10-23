---
sidebar_position: 1
---

# Customization Introduction & Profiles

VS Code is setup with a fantastic default layout and theme but here are some instructions on how to modify it to perfectly fit your needs.

## Default Layout and Theme

![Default VS Code profile](/img/layout-theme/defaultLayoutAndTheme.png)

## Profiles

Profiles in VS Code let you create and switch between sets of customizations, including settings, extensions, and UI layouts. You can access the Profiles editor from **File > Preferences > Profiles** or by using the **Manage gear icon** in the Activity Bar.

Each workspace uses the **Default Profile** unless you create a new one. You can build a new profile from scratch, copy from templates (like Python, Data Science, or Node.js), or duplicate an existing profile. Profiles can include unique configurations for features such as settings, keybindings, snippets, and extensions.

You can preview, edit, switch, or delete profiles in the Profiles editor, and associate specific profiles with folders or workspaces. Settings and extensions can be applied to all profiles or kept separate. Profiles can also be **exported** from your machine and **imported** on other machines or shared with others.

Using **Settings Sync**, you can synchronize profiles across devices, though extensions on remote windows aren’t synced. Profiles are useful for managing separate setups for different projects, languages, or purposes—such as demos, classrooms, or debugging issues with a clean environment.

You can also launch VS Code with a specific profile using the `--profile` command-line option. Profiles are stored in your user configuration directory and can be temporary for quick testing or experimentation.

## Custom Layout

Changing the layout is very easy and can be done for each [profile](#profiles) to make specific tasks easier. Follow our instructions here to [change the layout](custom-layout.md).

## Themes

You can also change the theme for each [profile](#profiles) to improve contrast, accessibility, or just to match your vibe. To do this you can choose from many fantastic pre built [Color Themes](color-themes.md). If you want a true custom experience you can also [customize a theme](custom-theme.md).
