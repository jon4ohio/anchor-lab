# GitHub Setup

The local repository is ready. Create the remote and enable Pages manually (API token could not create the repository automatically).

---

## 1. Create repository

On GitHub, create a new public repository:

- **Name:** `anchor-lab`
- **Owner:** `jon4ohio`
- **Do not** initialize with README (local repo already has content)

Or, if your token has `repo` scope:

```bash
gh repo create jon4ohio/anchor-lab --public --source=. --remote=origin --push
```

---

## 2. Push local repo

From `/Users/mac/Downloads/anchor-lab`:

```bash
git remote add origin git@github.com:jon4ohio/anchor-lab.git
git push -u origin main
```

---

## 3. Enable GitHub Pages

1. Repository **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Push to `main` triggers [.github/workflows/pages.yml](../.github/workflows/pages.yml)

---

## 4. Verify

After the workflow completes:

**https://jon4ohio.github.io/anchor-lab/**

Test locally first:

```bash
cd lesson-v0
python3 -m http.server 8765
# open http://127.0.0.1:8765
```

---

## 5. Optional — Anchor README link

After Pages is live, add to the Anchor README (editorial, Evidence Window–safe):

```markdown
**Try Anchor (Experimental):** [Responsibility classification lesson](https://jon4ohio.github.io/anchor-lab/)
```

Do not add Anchor `evidence.md` citations until [experiment-001-synthesis.md](../research/experiment-001-synthesis.md) is complete.
