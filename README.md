
### 1️⃣ Check Your Current Status

```bash
git status
```

> See what files you’ve added, changed, or deleted.

---

### 2️⃣ Add Your Changes

```bash
git add .
```

> Adds **all modified and new files** to the next commit.
> *(You can also add specific files: `git add src/components/Authors/index.tsx`)*

---

### 3️⃣ Commit Your Work

```bash
git commit -m "Short, clear message about what you changed"
```

> Example:
>
> ```bash
> git commit -m "Add Authors section with VS Code theme styling"
> ```

📝 **Tips for good commit messages:**

* Use the **imperative mood** (e.g., *Add feature*, *Fix bug*, not *Added* or *Fixed*).
* Keep it under ~72 characters.
* Commit logical chunks — not your entire day’s work in one go.

---

### 4️⃣ Pull the Latest Changes

Before pushing, always make sure your local branch is up to date:

```bash
git pull origin main
```

> This merges the newest version of `main` into your local copy, preventing conflicts later.

---

### 5️⃣ Push Your Changes

```bash
git push origin main
```

> Uploads your commits to GitHub.

---

### 🏁 Summary of Common Commands

| Action           | Command                       |
| ---------------- | ----------------------------- |
| Check status     | `git status`                  |
| Add all files    | `git add .`                   |
| Commit           | `git commit -m "message"`     |
| Pull latest      | `git pull origin main`        |
| Push changes     | `git push origin main`        |
| Create branch    | `git checkout -b branch-name` |
| Switch branch    | `git checkout branch-name`    |
| See branches     | `git branch`                  |
| Merge branch     | `git merge branch-name`       |
| Undo last commit | `git reset HEAD~1`            |

---
