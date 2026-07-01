# Capability Authority

anchor-lab intentionally composes independent capabilities. Invoke each at the appropriate stage. The **Research Brief** is the experimental protocol; it constrains every capability.

---

## Authority chain

```text
Research Brief  →  Anchor  →  UI/UX Pro Max  →  BMAD
```

| Capability | Responsibility | When to invoke |
|------------|----------------|----------------|
| **Research Brief** | Defines the experiment, constraints, and success criteria | **First** — constrains all other capabilities |
| **Anchor** | Defines what is true about the protocol | **Always** after brief — truth layer |
| **UI/UX Pro Max** | Designs how the protocol is learned | When designing the lesson interface |
| **BMAD** | Organizes how the prototype is delivered | When planning/building the prototype |

Separates **truth** (Anchor), **teaching** (UI/UX Pro Max), and **delivery** (BMAD), all bounded by **research** (Brief).

---

## Conflict resolution

The brief wins when capabilities suggest scope outside the experiment.

| Conflict | Winner | Reason |
|----------|--------|--------|
| BMAD suggests authentication | Research Brief | No accounts in Experiment 001 |
| UI/UX suggests drag-and-drop | Research Brief | Multiple choice only for Experiment 001 |
| UI/UX merges Decision + Spec into one card | Anchor | Distinct responsibilities — brief does not override protocol truth |
| BMAD suggests Next.js | Research Brief | Static HTML only for V0 |

---

## Build stages (Experiment 001)

| Stage | Capability | Output |
|-------|------------|--------|
| 0 | Research Brief | Constraints, success criteria, instrument scope |
| 1 | Anchor | Question content, responsibility labels, contract reveal rules |
| 2 | UI/UX Pro Max | Layout, typography, flow, feedback, accessibility |
| 3 | BMAD | File structure, acceptance criteria, build sequence |
| 4 | Implementation | Static HTML/CSS/JS in `lesson-v0/` |

---

## Future pattern (not extracted yet)

This orchestration model may generalize as **Capability Authority** across portfolio projects:

```text
Research Authority  →  Domain Authority  →  Design Authority  →  Delivery Authority
```

For anchor-lab: Research = Experiment Brief, Domain = Anchor, Design = UI/UX Pro Max, Delivery = BMAD.

Do not extract into a separate framework until repeated use earns it.
