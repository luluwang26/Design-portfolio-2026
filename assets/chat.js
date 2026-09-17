/* ============================================================
   Portfolio Q&A — instant, client-side, no backend.
   Answers are canned and keyword-matched; edit the `topics`
   array below to change or add answers.
   ============================================================ */

(function () {
  var log = document.getElementById('chat-log');
  var chips = document.getElementById('chat-chips');
  var form = document.getElementById('chat-form');
  var input = document.getElementById('chat-input');
  if (!log || !form) return;

  var topics = [
    {
      keys: ['approach', 'philosophy', 'design process', 'how do you design', 'methodology', 'overall'],
      a: "Research-led, experiment-validated. I sit in the interviews myself rather than reading summaries, synthesize qual and survey data into a clear design direction, and ship as A/B tests measured in conversion, revenue, and trust. My core belief: comprehension drives behavior — my Basic first-time-use redesign lifted invoices created 30% mostly by answering “where's my money?” on the first screen."
    },
    {
      keys: ['start', 'new project', 'kick off', 'kickoff', 'begin', 'first step'],
      a: "I start by auditing the existing experience and sitting in the research — often deliberately with a messy, complex case instead of the happy path. For Vendor Credits I audited with an intentionally tangled scenario, which exposed inconsistencies the happy path would have hidden. I frame the open design questions before proposing anything, so the team aligns on the problem first."
    },
    {
      keys: ['role', 'team', 'collaborat', 'work with', 'cross-functional', 'stakeholder'],
      a: "I'm a Lead Product Designer who owns the problem end-to-end: framing with PM, partnering with research, designing flows and UI, building prototypes, writing acceptance criteria with engineering, and aligning Risk, Legal, and PMM when the work touches money movement. I've also presented work directly to BILL's CEO — who later recognized the duplicate-prevention results company-wide."
    },
    {
      keys: ['balance', 'business goal', 'user need', 'tension', 'tradeoff', 'trade-off'],
      a: "I look for the moments where user needs and business goals are the same thing. Answering “where's my money?” built user trust AND lifted TPV 22%. My “Start here” onboarding section guided users without gating them — +14% org conversion while preserving the self-serve path. And in the private ACH work, growth had to live inside a fraud-control flow without weakening it. When there's real tension, I name it explicitly and design for it."
    },
    {
      keys: ['impact', 'metric', 'result', 'outcome', 'numbers', 'wins', 'achievement'],
      a: "Some headline results: +30% invoices created and +$48M TPV from the Basic FTU redesign · ~30% fewer duplicate accounts per month · +14% org conversion and ~$2.1M projected annualized revenue from “Start here” · a deprecation-bound workflow rebuilt into 2× the volume in a quarter of the time. The case studies above have the full stories."
    },
    {
      keys: ['experience', 'background', 'years', 'career', 'where do you work', 'bill'],
      a: "I'm a Lead Product Designer at BILL, working across Network Growth, AP/AR Onboarding, and the AR network — growth, activation, and trust problems in B2B payments. This site has eight case studies covering research-led redesigns, experiment design, modernization rebuilds, and complex workflow design."
    },
    {
      keys: ['tool', 'figma', 'prototype', 'software', 'maze', 'analytics'],
      a: "Day to day: end-to-end flows and UI on BILL's Trinity design system, clickable prototypes for validation, unmoderated testing in Maze, and experiment readouts in Mixpanel and Tableau. But the tool I lean on most is the research itself — I sit in the interviews."
    },
    {
      keys: ['password', 'access', 'locked', 'case stud', 'protected'],
      a: "The case studies are password-protected because they include internal metrics. Email luluhefei@gmail.com and I'll happily share access."
    },
    {
      keys: ['contact', 'email', 'hire', 'hiring', 'reach', 'available', 'job', 'opportunit', 'interview', 'linkedin', 'resume', 'cv'],
      a: "I'd love to talk! Email me at luluhefei@gmail.com or connect on LinkedIn (linkedin.com/in/luluwangux). If you'd like case-study access or a resume, just ask."
    }
  ];

  var fallback = "That's a good one — and it deserves a real answer rather than a canned one. Email me at luluhefei@gmail.com or find me on LinkedIn (linkedin.com/in/luluwangux) and I'll get back to you quickly. Meanwhile, try one of the suggested questions!";

  function answerFor(text) {
    var q = text.toLowerCase();
    var best = null;
    var bestScore = 0;
    topics.forEach(function (t) {
      var score = 0;
      t.keys.forEach(function (k) {
        if (q.indexOf(k) !== -1) score += 1;
      });
      if (score > bestScore) { bestScore = score; best = t; }
    });
    return best ? best.a : fallback;
  }

  function addMsg(text, who) {
    var div = document.createElement('div');
    div.className = 'msg ' + who;
    div.textContent = text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
    return div;
  }

  function ask(question) {
    if (!question) return;
    addMsg(question, 'user');
    var typing = addMsg('…', 'bot typing');
    setTimeout(function () {
      typing.classList.remove('typing');
      typing.textContent = answerFor(question);
      log.scrollTop = log.scrollHeight;
    }, 450);
  }

  chips.addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (btn) {
      ask(btn.textContent.trim());
      btn.remove();
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var q = input.value.trim();
    input.value = '';
    ask(q);
  });
})();
