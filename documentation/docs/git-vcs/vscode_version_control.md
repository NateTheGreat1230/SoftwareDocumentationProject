---
sidebar_position: 3
author: Ethan Hammons
---

# How do I use git with VSCode?

VSCode has built-in support for git repositories, all you need to do is run ```git init``` in your code repository, and VSCode will be able to handle the rest!

This will change your workflow, rather than switching to your terminal, you have all of your projects information avaliable to you as you are working.

## The status of your project

The VSCode interface for git is the "Source Control" view, which you can access through the left sidebar, or using ```Ctrl + Shift + G```.

![logo](/img/version-control/VCS.png)

After you click this button and select a git repository, you will be able to see the status of your project. You will be able to see all the changes you've made, as well as **Staged** changes that are ready to commit. There are 4 categories that a file's status can have.

| Status | Meaning |
|---|---|
| U (Unstaged) / M (Modified) | The file has been changed in the Working Directory. |
| A (Added) | A new file has been created. |
| D (Deleted) | The file has been deleted. |
| A (Staged) | Changes have been staged and are ready for the next commit. |

You can also see the status in the VSCode file explorer.

## Your VSCode Git workflow.

This will be how you use git through VSCode, for about 90% of your Git usage.

1. **Commit** (Staging and Recording Changes)

    The commit process moves changes from the Working Directory, through the Staging Area, and into the Local Repository.

    - Stage Changes (Add):

      - In the Changes section, hover over a file. Click the + icon next to it, or use the Stage All Changes button above the section header. The file will move to the Staged Changes section.

    - Create the Commit:

      - Type a descriptive commit message into the text box above the file list.

---

2. **Branch**
    Branches are essential for developing features or fixes without disrupting the main (often called main or master) branch.

    - Create a New Branch:

        - Look at the Status Bar (the blue bar at the bottom) and click the current Branch Name (e.g., main).

        - A command palette will open. Select + Create New Branch....

        - Enter the desired name for your new branch (e.g., feature/user-login).

        - Press Enter to create the branch and automatically switch (checkout) to it.

    - Switch Branches (Checkout):

        - Click the Branch Name in the Status Bar again.

        - Select the desired existing branch from the list.

---

3. **Push**
    Pushing updates the remote repository (e.g., on GitHub, GitLab) with your local commits.

    - Execute the Push: After you've made one or more local commits, look at the Status Bar. You may see a sync icon with numbers or arrows to indicate teh commit.
    - Click the Sync Changes button. VS Code will show a prompt asking to ```Push & Pull```.
    - Alternatively, click the ... (More Actions) menu in the Source Control view and select Push.

---

4. **Pull** (Getting Remote Changes)
    Pulling fetches new commits from the remote repository and automatically merges them into your current local branch.

    - Execute the Pull:

        - Click the Sync Changes button on the Status Bar and select Pull or Push & Pull.

        - Alternatively, click the ... menu in the Source Control view and select Pull.

        - This is typically done before starting work and before pushing your own changes to ensure you have the latest code.

---

5. **Merge**
    Merging combines the changes from one branch into another. This is often done after a feature is complete and ready to be integrated into the main branch.

    1. Switch to the Target Branch: Use the Status Bar to switch to the branch you want to receive the changes (e.g., main).

    2. Start the Merge: Click the ... (More Actions) menu in the Source Control view.

    3. Select Branch > Merge Branch....

    4. Choose the branch you want to merge from (e.g., feature/user-login) in the command palette.

    Using Merge can create something called a ```merge conflict```, when Git doesn't know what changes to make to your files. If this happens, you will need to manually correct your files so that the merge can be completed.


## Efficient Usage

There are two main practices to be able to use git efficiently, whether you are on a team, or by yourself.

- Concise Commits: Small, Focused commits that cover a change, like ```Fix Broken Header```. This makes your history easy to follow, and allows you to see what problem was actually solved with the commit.
- Clear Branching: Having an organized branch network will make large scale projects much easier to work with. Branching off to create new features, or for big code fixes, are great usages for a branch.