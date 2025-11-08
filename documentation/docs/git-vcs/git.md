---
sidebar_position: 2
author: Ethan Hammons
---

# What is Git?
Git is a version control system that tracks changes in your code over time. It allows multiple people to work on the same project without overwriting each other’s work. Think of it as a timeline for your code, you can go back to old versions, compare differences, and merge changes.

## Core concepts
There are some background concepts that you need to be familiar with when using Git.
- Repository (repo) : A folder that Git tracks. It stores your files and the full history of changes through a ```.git``` file that is created automatically.
- Commit: A snapshot of your code at a given time. Each commit you make should have a quick message that shows what was changed.
- Branch: A seperate timeline of your codes development. You can experiment on branches without affecting your main timeline of code.
- Merge: Combines changes from one branch into another.
- Remote: A version of your repository hosted elsewhere (like GitHub, GitLab, or Bitbucket).
- Clone: A copy of a remote repository on your local machine.
- Pull: Downloads and merges changes from a remote repository.
- Push: Uploads your local commits to a remote repository.
- Stage / Index: The area where you prepare changes before committing them.

## Main git tools
|Command|Purpose|
|git init|Initializes a new local Git repository.|
|git clone [url]|Downloads a remote repository to your local machine.|
|git status|Shows the state of the working directory and staging area.|
|git add [file]|Puts changes from the Working Directory into the Staging Area.|
|"git commit -m ""[message]"""|Permanently records the staged changes to the Local Repository.|
|git branch [name]|Creates a new branch.|
|git checkout [branch]|Switches to a specified branch.|
|git pull|Fetches changes from the remote repository and merges them locally.|
|git push|Uploads local branch commits to the remote repository.|

## How does VSCode help?
VSCode can make the process of commiting and pushing your changes much simpler. The VSCode interface will allow you to easily see the status of Git projects, as well as add, commit, and push your code changes.

You can use git for things outside of software development as well, no more worrying about losing your changes.