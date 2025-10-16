
## ⚙️ Getting Started — Run the Project Locally

Once you’ve cloned the repository, follow these steps to set up and run the Docusaurus site.

### 1️⃣ Install Dependencies

If you haven’t already, install all required packages:

```bash
npm install
```

> This will download all dependencies listed in `package.json` (like React, Docusaurus, etc.).

---

### 2️⃣ Start the Development Server

Run the local dev server:

```bash
npm start
```

> This starts Docusaurus in development mode.
> The site will automatically open in your browser at:
> 👉 **[http://localhost:3000](http://localhost:3000)**

Every time you save a file, the site will reload automatically.

---

### 3️⃣ Build for Production

When you’re ready to create the final optimized version of the site:

```bash
npm run build
```

> Builds the static files into the `build/` directory (optimized for speed and deployment).

---

### 4️⃣ Preview the Production Build (Optional)

You can test your production build locally using:

```bash
npm run serve
```

> Serves the built files at **[http://localhost:3000](http://localhost:3000)** so you can verify everything looks correct.

---

## 🧭 Git Cheat Sheet — Commit & Push Workflow

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

If changes have been made and Git enters auto-merge mode (the default behavior), make sure the commit message is correct. The default message, such as `Merge branch 'main' ...`, is perfectly fine. Press `:wq` to save and exit the editor.

---

### 5️⃣ Push Your Changes

```bash
git push origin main
```

> Uploads your commits to GitHub.

---
