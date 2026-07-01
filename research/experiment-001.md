# Experiment 001 — Responsibility Classification Lesson

**Status:** Active — recruitment open  
**Instrument:** [lesson-v0](https://jon4ohio.github.io/anchor-lab/)  
**Observations:** [experiment-001-observations.md](experiment-001-observations.md)  
**Synthesis:** [experiment-001-synthesis.md](experiment-001-synthesis.md) (pending data)

---

## Brief

**Capability Authority:** [docs/capability-authority.md](../docs/capability-authority.md) — precedence Research Brief → Anchor → UI/UX Pro Max → BMAD.

**Research question:** Can a newcomer classify project knowledge by responsibility without reading Project Entry or memorizing seven contracts?

**Broader claim (if supported):** A governance protocol can be learned experientially rather than document-first.

**Participants:** 3–5 independent users (not maintainer); no coaching during lesson.

**Instrument:** Static 6-question Tasklight lesson on GitHub Pages.

**Source material:** Fictional overloaded project from [John Session 1 CLAUDE.md](https://github.com/jon4ohio/agentic-workflow/blob/main/journey/john-ohio/sessions/01-understand/CLAUDE.md) and Anchor [Responsibilities ch.3](https://github.com/jon4ohio/agentic-workflow/blob/main/docs/experience/03-responsibilities.md).

### Instrument constraints (Research Brief wins)

- Multiple choice only — no drag-and-drop
- No accounts or persistence
- Static HTML/CSS/JS only
- Responsibility labels during questions; contract names revealed only on results screen
- ~5 minutes to complete

---

## Hypothesis (pre-registered)

Recorded before recruitment. Do not revise without noting change.

| Signal | Pass | Fail |
|--------|------|------|
| Completion | ≥4 of 5 finish | <3 of 5 |
| Unseen post-test (3 items) | ≥80% correct | <60% |
| Self-report | Unprompted "I get why docs exist" | "Still don't know where to start" |
| Coaching | Zero contract vocabulary before reveal | Needed Entry/Handoff explained mid-lesson |

---

## Protocol

1. Participant receives URL only (no README, Journey, or orient-project)
2. Complete lesson (~5 min)
3. Optional: adopt Anchor on any project they care about (facilitator observes, does not coach)
4. Facilitator logs raw notes in [experiment-001-observations.md](experiment-001-observations.md) using [observations-template.md](../docs/observations-template.md)

**Threats to validity:** maintainer-designed questions, Tasklight familiarity from Journey readers, demand characteristics from immediate feedback, small N.

**Stop condition:** 2 consecutive participants abandon before Q3 → pause and revise lesson.

**Label:** Maintainer-designed instrument — independent participants required for claims.

---

## Lesson content (Anchor semantics)

| # | Snippet | Correct responsibility | Key distractor |
|---|---------|------------------------|----------------|
| 1 | "Tasklight is a personal CLI for task lists." | Project identity | API documentation |
| 2 | "Why SQLite: single file, no server, good for a solo side project." | Decision | Project identity |
| 3 | "Export should write JSON to stdout." | Implementation scope | Session continuity |
| 4 | "Always run tests before commit." | Operating instruction | Project identity |
| 5 | "Yesterday we fixed the SQLite locking bug in storage.py." | Session continuity | Decision |
| 6 | "We're planning an export command next." | Session continuity | Implementation scope |

Q4 tests overlay adoption — not everything becomes a contract.

**Results contract mapping:**

```text
Project identity      → Entry
Decision              → ADR
Implementation scope  → Spec
Session continuity    → Handoff
Operating instruction → CLAUDE.md (trimmed, not duplicated)
```
