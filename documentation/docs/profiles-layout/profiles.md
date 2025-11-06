---
sidebar_position: 1
author: Nate Washburn
---

# Profiles

Guide to creating, managing, and using profiles in Visual Studio Code.

## What Are Profiles?

Profiles in VS Code allow you to create **separate environments** for different tasks or workflows. Each profile can include:

- Settings
- Keybindings
- Installed extensions
- UI layout and themes
- Snippets

Profiles help you keep **different configurations isolated**, so changes in one profile won’t affect others. This is especially useful for:

- Switching between **work and personal setups**.
- Managing **language-specific workflows** (e.g., Python vs. Web Development).
- Creating **clean profiles for debugging or demos**.
- Testing new extensions without affecting your main environment.

## Accessing the Profiles Editor

You can access the **Profiles editor** in VS Code in two main ways:

1. **Menu navigation**: Go to `File > Preferences > Profiles`.

2. **Activity Bar gear icon**: Click the **Manage gear icon** in the Activity Bar, then choose **Profiles**.

In the editor, you can see a list of all profiles and perform actions such as **create**, **duplicate**, **delete**, or **switch profiles**.

## Creating a New Profile

There are three ways to create a new profile:

1. **From scratch** Start with a blank profile with no pre-existing settings, keybindings, or extensions.

2. **From a template** VS Code offers built-in templates for common workflows, such as:

   - Python
   - Data Science
   - Node.js

   These templates include pre-configured settings and recommended extensions.

3. **By copying an existing profile** Duplicate an existing profile to preserve settings, extensions, and UI layout. This is useful when you want a slightly different version of your current setup.

## Switching Between Profiles

Once multiple profiles exist, you can easily switch between them:

1. Open the **Profiles editor**.
2. Click the profile you want to activate.
3. VS Code will automatically reload with that profile's settings, extensions, and layout.

_**Tip:** You can also launch VS Code from the command line with a specific profile using:_

```bash
code --profile "Profile Name"
```

This is useful for testing or working on projects that require a clean or specialized setup.

## Managing Extensions per Profile

Each profile can have its **own set of extensions**, meaning you can install and enable extensions independently per profile.

- Extensions installed in one profile will **not affect other profiles**.
- Use profiles to manage **language-specific extensions** or **temporary extensions for testing**.
- The **Extensions view** will show which extensions belong to the active profile.

## Settings and Keybindings

Profiles let you separate **settings and keybindings**:

- Each profile can have **unique user settings**, including themes, editor behavior, or terminal preferences.
- Keybindings can be customized **per profile** to match different workflows or languages.
- You can also **sync profiles across devices** using Settings Sync, keeping your setups consistent on multiple machines.

## Exporting and Importing Profiles

You can **share profiles** or move them to another machine:

1. Open the **Profiles editor**.
2. Click **Export Profile** to save the profile to a `.zip` file.
3. On a different machine, click **Import Profile** and select the exported file.

This ensures you have **identical development environments** across machines or teams.

## Summary

Profiles are a **powerful feature in VS Code** that let you tailor the editor for different projects, languages, or purposes. By learning to create, manage, and switch profiles, you can maintain multiple isolated environments without interfering with your main setup.
