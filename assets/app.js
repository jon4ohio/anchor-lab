(function () {
  "use strict";

  const state = {
    data: null,
    currentIndex: 0,
    answers: [],
    phase: "welcome",
  };

  const app = document.getElementById("app");

  async function loadData() {
    const response = await fetch("assets/data.json");
    if (!response.ok) {
      throw new Error("Failed to load lesson data");
    }
    state.data = await response.json();
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function renderWelcome() {
    app.innerHTML = `
      <header>
        <p class="eyebrow">Anchor Lab · Experiment 001</p>
        <h1>Classify project knowledge</h1>
        <p class="lead">
          You have a project called <strong>${escapeHtml(state.data.projectName)}</strong>.
          ${escapeHtml(state.data.projectDescription)}
        </p>
      </header>
      <div class="card">
        <p class="question-prompt">
          For each piece of knowledge, decide what <em>responsibility</em> it has —
          not where it lives in a folder.
        </p>
        <p style="color: var(--text-muted); margin: 0 0 1.5rem; font-size: 0.9375rem;">
          Six questions · about 5 minutes · no account required
        </p>
        <div class="actions">
          <button type="button" class="btn-primary" id="start-btn">Start</button>
        </div>
      </div>
    `;
    document.getElementById("start-btn").addEventListener("click", startLesson);
  }

  function startLesson() {
    state.phase = "question";
    state.currentIndex = 0;
    state.answers = [];
    renderQuestion();
  }

  function renderQuestion() {
    const question = state.data.questions[state.currentIndex];
    const total = state.data.questions.length;
    const progress = ((state.currentIndex) / total) * 100;

    const choicesHtml = question.choices
      .map(
        (choice, index) => `
        <label class="choice">
          <input type="radio" name="answer" value="${index}" />
          <span>${escapeHtml(choice.label)}</span>
        </label>
      `
      )
      .join("");

    app.innerHTML = `
      <header>
        <p class="eyebrow">Anchor Lab · Experiment 001</p>
        <h1>Classify project knowledge</h1>
      </header>
      <div class="progress" aria-hidden="true">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        <span class="progress-label">${state.currentIndex + 1} of ${total}</span>
      </div>
      <div class="card">
        <p class="snippet-label">Knowledge snippet</p>
        <blockquote class="snippet">${escapeHtml(question.snippet)}</blockquote>
        <p class="question-prompt">What responsibility does this knowledge have?</p>
        <fieldset class="choices" id="choices">
          <legend class="sr-only">Select a responsibility</legend>
          ${choicesHtml}
        </fieldset>
        <div class="feedback hidden" id="feedback" role="status" aria-live="polite"></div>
        <div class="actions">
          <button type="button" class="btn-primary" id="next-btn" disabled>
            ${state.currentIndex < total - 1 ? "Next" : "See results"}
          </button>
        </div>
      </div>
    `;

    const choices = document.getElementById("choices");
    const feedbackEl = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");
    let answered = false;

    choices.addEventListener("change", (event) => {
      if (answered) {
        return;
      }

      const selectedIndex = Number(event.target.value);
      const selected = question.choices[selectedIndex];
      answered = true;

      state.answers.push({
        questionId: question.id,
        correct: selected.correct,
        selected: selected.label,
      });

      const inputs = choices.querySelectorAll("input");
      inputs.forEach((input) => {
        input.disabled = true;
      });

      feedbackEl.classList.remove("hidden");
      feedbackEl.hidden = false;
      feedbackEl.className = `feedback ${selected.correct ? "correct" : "incorrect"}`;
      feedbackEl.textContent = selected.correct
        ? question.feedbackCorrect
        : question.feedbackIncorrect;

      nextBtn.disabled = false;
      nextBtn.focus();
    });

    nextBtn.addEventListener("click", () => {
      if (state.currentIndex < total - 1) {
        state.currentIndex += 1;
        renderQuestion();
      } else {
        renderResults();
      }
    });
  }

  function renderResults() {
    const correctCount = state.answers.filter((a) => a.correct).length;
    const total = state.data.questions.length;

    const mapHtml = state.data.responsibilityMap
      .map(
        (group) => `
        <div class="map-section">
          <h3>${escapeHtml(group.responsibility)}</h3>
          ${group.snippets
            .map(
              (snippet) =>
                `<div class="map-item"><span class="map-snippet">${escapeHtml(snippet)}</span></div>`
            )
            .join("")}
        </div>
      `
      )
      .join("");

    const contractHtml = state.data.responsibilityMap
      .map(
        (group) => `
        <div class="contract-row">
          <span class="responsibility">${escapeHtml(group.responsibility)}</span>
          <span class="contract-name">→ ${escapeHtml(group.contract)}</span>
        </div>
      `
      )
      .join("");

    app.innerHTML = `
      <header>
        <p class="eyebrow">Anchor Lab · Experiment 001</p>
        <h1>Your knowledge map</h1>
      </header>
      <div class="card">
        <div class="results-summary">
          <p class="score">${correctCount} / ${total}</p>
          <p class="score-label">classified correctly</p>
        </div>
        ${mapHtml}
        <div class="contract-reveal">
          <h2>Anchor names these owners</h2>
          <p>
            Knowledge has responsibilities. Contracts formalize responsibilities.
            You classified by responsibility — here is how Anchor maps them.
          </p>
          ${contractHtml}
        </div>
        <div class="footer-link">
          <a href="${escapeHtml(state.data.anchorRepoUrl)}" target="_blank" rel="noopener noreferrer">
            Learn more about Anchor →
          </a>
          <p>Ready to adopt on your own project? Start with the Anchor README.</p>
        </div>
      </div>
    `;
  }

  loadData()
    .then(renderWelcome)
    .catch((error) => {
      app.innerHTML = `
        <div class="card">
          <p>Unable to load the lesson. Please refresh the page.</p>
          <p style="color: var(--text-muted); font-size: 0.875rem;">${escapeHtml(error.message)}</p>
        </div>
      `;
    });
})();
