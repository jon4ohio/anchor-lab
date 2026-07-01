# GitHub Setup

Deployment status for [jon4ohio/anchor-lab](https://github.com/jon4ohio/anchor-lab).

---

## Completed

| Step | Status |
|------|--------|
| Create repository | Done — [jon4ohio/anchor-lab](https://github.com/jon4ohio/anchor-lab) |
| Push `main` | Done — HTTPS remote |
| Deploy workflow | Done — [.github/workflows/pages.yml](../.github/workflows/pages.yml) publishes `lesson-v0/` to `gh-pages` on every push |

Latest successful workflow deploys lesson assets to the `gh-pages` branch.

---

## One manual step — enable GitHub Pages

The deploy workflow cannot enable Pages site creation (token permission). Enable once in the repository UI:

1. Open [Settings → Pages](https://github.com/jon4ohio/anchor-lab/settings/pages)
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: **`gh-pages`** · Folder: **`/ (root)`**
4. Save

Pages URL (live after enablement, ~1 minute):

**https://jon4ohio.github.io/anchor-lab/**

---

## Verify

After enabling Pages:

- [ ] https://jon4ohio.github.io/anchor-lab/ loads (not 404)
- [ ] Welcome screen shows Tasklight framing
- [ ] All 6 questions advance with feedback
- [ ] Results screen shows knowledge map + contract reveal

Test locally anytime:

```bash
cd lesson-v0
python3 -m http.server 8765
# open http://127.0.0.1:8765
```

Verify deployed branch content (before Pages enablement):

```bash
curl -s "https://raw.githubusercontent.com/jon4ohio/anchor-lab/gh-pages/index.html" | head -5
```

---

## Anchor README link

Added to [Anchor README](https://github.com/jon4ohio/agentic-workflow/blob/main/README.md) (editorial, Evidence Window–safe):

**Try Anchor (Experimental):** https://jon4ohio.github.io/anchor-lab/

Do not add Anchor `evidence.md` citations until [experiment-001-synthesis.md](../research/experiment-001-synthesis.md) is complete.
