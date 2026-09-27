/* ==========================================================================
   3D FRIENDLY LOANS & EMI VISUALIZER ENGINE (mockup-studio.js)
   100% Local Instant High-DPI 3D Canvas Renderer (Zero External Network URLs)
   Powers 6 Loan Programs × 3 Interactive 3D Views + Live 3D EMI Calculator
   ========================================================================== */

const LOAN_PROGRAMS_SPEC = {
  "loan-personal": {
    code: "01 · PERSONAL INSTANT LOAN",
    client: "Instant FlexiCash 3D",
    rate: "8.9% p.a.",
    maxAmount: "$50,000",
    approvalTime: "15 Minutes",
    palette: ["#0b131e", "#10b981", "#38bdf8"],
    shots: [
      {
        label: "View 1 · 3D Loan Card & Limit",
        lens: "Instant Digital Disbursal · Zero Collateral Needed",
        badge: "UP TO $50,000 · 8.9% FIXED APR",
        docs: "1. National ID / Passport · 2. Last 3 Months Bank Statement · 3. Selfie Verification",
        scene: "card-personal"
      },
      {
        label: "View 2 · Monthly EMI Breakdown",
        lens: "Sample $10,000 for 24 Months = $456/mo",
        badge: "ZERO HIDDEN CHARGES · FREE PRE-CLOSURE",
        docs: "Principal: $10,000 (91%) · Total Interest: $944 (9%) · Processing Fee: $0",
        scene: "emi-breakdown"
      },
      {
        label: "View 3 · 3-Document Checklist",
        lens: "100% Paperless Upload in 3 Minutes",
        badge: "ONLY 3 DOCUMENTS REQUIRED",
        docs: "No physical branch visit required. Instant AI verification & direct bank transfer.",
        scene: "doc-checklist"
      }
    ]
  },
  "loan-home": {
    code: "02 · HOME & MORTGAGE LOAN",
    client: "DreamHome 3D Mortgage",
    rate: "6.5% p.a.",
    maxAmount: "$1,000,000",
    approvalTime: "24 Hours",
    palette: ["#0c1424", "#38bdf8", "#6366f1"],
    shots: [
      {
        label: "View 1 · 3D Home Financing Plan",
        lens: "Up to 90% Property Value Financed · 30-Yr Tenure",
        badge: "UP TO $1,000,000 · LOWEST 6.5% APR",
        docs: "1. ID & Income Proof · 2. Property Sale Agreement · 3. 6-Month Bank Statement",
        scene: "card-home"
      },
      {
        label: "View 2 · Monthly EMI Breakdown",
        lens: "Sample $150,000 for 20 Years = $1,118/mo",
        badge: "TAX BENEFIT ELIGIBLE · FIXED OR FLOATING",
        docs: "Flexible part-payment options anytime with $0 prepayment penalty.",
        scene: "emi-breakdown"
      },
      {
        label: "View 3 · 3-Document Checklist",
        lens: "Doorstep Legal & Property Valuation Included",
        badge: "DEDICATED HOME LOAN ADVISOR",
        docs: "We handle all property title checks and digital sanction letters in 24 hours.",
        scene: "doc-checklist"
      }
    ]
  },
  "loan-business": {
    code: "03 · BUSINESS & STARTUP LOAN",
    client: "BizScale 3D Capital",
    rate: "8.4% p.a.",
    maxAmount: "$500,000",
    approvalTime: "4 Hours",
    palette: ["#12101e", "#f59e0b", "#10b981"],
    shots: [
      {
        label: "View 1 · 3D Business Credit Line",
        lens: "Pay Interest Only on What You Use · Revolving Limit",
        badge: "UP TO $500,000 · COLLATERAL-FREE",
        docs: "1. Business Registration / GST · 2. 6-Month Current Account PDF · 3. Owner KYC",
        scene: "card-business"
      },
      {
        label: "View 2 · Monthly EMI Breakdown",
        lens: "Sample $50,000 for 36 Months = $1,576/mo",
        badge: "100% TAX DEDUCTIBLE INTEREST",
        docs: "Boost inventory, hire staff, or upgrade machinery with predictable monthly EMIs.",
        scene: "emi-breakdown"
      },
      {
        label: "View 3 · 3-Document Checklist",
        lens: "No Property Security Required up to $250K",
        badge: "INSTANT GST & BANK PDF APPROVAL",
        docs: "Upload PDF bank statement for automated cash-flow limit sanction in 4 hours.",
        scene: "doc-checklist"
      }
    ]
  },
  "loan-auto": {
    code: "04 · AUTO & EV CAR LOAN",
    client: "TurboDrive 3D Auto",
    rate: "7.2% p.a.",
    maxAmount: "$150,000",
    approvalTime: "30 Minutes",
    palette: ["#091518", "#06b6d4", "#10b981"],
    shots: [
      {
        label: "View 1 · 3D Showroom Pass",
        lens: "100% On-Road Price Financing · New & Pre-Owned",
        badge: "UP TO $150,000 · 7.2% GREEN EV RATE",
        docs: "1. Driving License & ID · 2. Proforma Car Invoice · 3. 3-Month Salary/Bank Slip",
        scene: "card-auto"
      },
      {
        label: "View 2 · Monthly EMI Breakdown",
        lens: "Sample $30,000 for 60 Months = $597/mo",
        badge: "0.50% EXTRA DISCOUNT ON ELECTRIC VEHICLES",
        docs: "Walk into any dealership with a pre-approved digital sanction letter in 30 mins.",
        scene: "emi-breakdown"
      },
      {
        label: "View 3 · 3-Document Checklist",
        lens: "Instant Hypothecation & Fastag Setup",
        badge: "SAME-DAY SHOWROOM DELIVERY",
        docs: "Direct disbursement to car dealer so you drive home the same day.",
        scene: "doc-checklist"
      }
    ]
  },
  "loan-education": {
    code: "05 · EDUCATION & STUDY ABROAD",
    client: "ScholarGlobal 3D Loan",
    rate: "5.9% p.a.",
    maxAmount: "$200,000",
    approvalTime: "12 Hours",
    palette: ["#111122", "#8b5cf6", "#38bdf8"],
    shots: [
      {
        label: "View 1 · 3D University Sanction",
        lens: "Covers Tuition, Living, Flights & Laptop",
        badge: "UP TO $200,000 · PAY AFTER GRADUATION",
        docs: "1. University Offer Letter · 2. Student & Co-Applicant ID · 3. Academic Transcripts",
        scene: "card-education"
      },
      {
        label: "View 2 · Monthly EMI Breakdown",
        lens: "0 EMI During Study Period + 1 Year Grace",
        badge: "VISA-READY EMBASSY SANCTION LETTER",
        docs: "EMIs start 6-12 months after completing your degree. 100% pre-visa disbursement letter.",
        scene: "emi-breakdown"
      },
      {
        label: "View 3 · 3-Document Checklist",
        lens: "Accepted by 1,400+ Global Universities",
        badge: "FAST-TRACK EMBASSY FINANCIAL PROOF",
        docs: "Instant verifiable digital solvency certificate for US, UK, Canada, Germany & Australia.",
        scene: "doc-checklist"
      }
    ]
  },
  "loan-refinance": {
    code: "06 · DEBT CONSOLIDATION LOAN",
    client: "ClearSlate 3D Refinance",
    rate: "7.8% p.a.",
    maxAmount: "$100,000",
    approvalTime: "2 Hours",
    palette: ["#0d1616", "#14b8a6", "#f59e0b"],
    shots: [
      {
        label: "View 1 · 3D Single-EMI Merger",
        lens: "Combine 36% Credit Card Debt into 1 Low 7.8% EMI",
        badge: "SAVE UP TO 45% ON MONTHLY OUTFLOW",
        docs: "1. ID Proof · 2. Existing Credit Card / Loan Statements · 3. 3-Month Bank PDF",
        scene: "card-refinance"
      },
      {
        label: "View 2 · Monthly EMI Breakdown",
        lens: "Cut Monthly Payments from $1,150/mo → $540/mo",
        badge: "BOOST YOUR CREDIT SCORE BY +65 PTS",
        docs: "We pay off your high-interest cards directly and leave you with one easy monthly EMI.",
        scene: "emi-breakdown"
      },
      {
        label: "View 3 · 3-Document Checklist",
        lens: "Zero Balance-Transfer Fee",
        badge: "AUTOMATED CARD PAYOFF ENGINE",
        docs: "Stop juggling 5 different due dates—manage everything from one clear 3D dashboard.",
        scene: "doc-checklist"
      }
    ]
  }
};

const __loanRenderCache = {};

/**
 * Renders a crisp 1040×650 Photorealistic 3D Financial Studio Scene locally on HTML5 Canvas
 * so every loan card shows crystal-clear visual information (3D Card, EMI Chart, Document Checklist).
 */
function renderLoanStudioMockup(projectKey, shotIndex) {
  const cacheKey = `${projectKey}_${shotIndex}`;
  if (__loanRenderCache[cacheKey]) return __loanRenderCache[cacheKey];

  const loan = LOAN_PROGRAMS_SPEC[projectKey] || LOAN_PROGRAMS_SPEC["loan-personal"];
  const shot = loan.shots[shotIndex] || loan.shots[0];
  const canvas = document.createElement("canvas");
  canvas.width = 1040;
  canvas.height = 650;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const [bgDark, accent1, accent2] = loan.palette;

  // 1. 3D Financial Studio Backdrop with Volumetric Grid & Rim Lighting
  const bgGrad = ctx.createRadialGradient(520, 250, 40, 520, 325, 680);
  bgGrad.addColorStop(0, "#1d283a");
  bgGrad.addColorStop(0.55, bgDark);
  bgGrad.addColorStop(1, "#05080f");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1040, 650);

  // Perspective 3D Floor Grid
  ctx.strokeStyle = "rgba(255,255,255,0.045)";
  ctx.lineWidth = 1;
  for (let x = 0; x <= 1040; x += 80) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 650);
    ctx.stroke();
  }
  for (let y = 0; y <= 650; y += 65) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1040, y);
    ctx.stroke();
  }

  // Studio Rim Light Glow
  const rim = ctx.createRadialGradient(780, 140, 20, 780, 140, 420);
  rim.addColorStop(0, accent1 + "44");
  rim.addColorStop(0.5, accent2 + "22");
  rim.addColorStop(1, "transparent");
  ctx.fillStyle = rim;
  ctx.fillRect(0, 0, 1040, 650);

  // Soft Contact Floor Shadow
  const floorShadow = ctx.createRadialGradient(520, 470, 30, 520, 470, 380);
  floorShadow.addColorStop(0, "rgba(0,0,0,0.82)");
  floorShadow.addColorStop(0.65, "rgba(0,0,0,0.34)");
  floorShadow.addColorStop(1, "transparent");
  ctx.fillStyle = floorShadow;
  ctx.beginPath();
  ctx.ellipse(520, 470, 370, 48, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  if (shotIndex === 0) {
    // =========================================================================
    // VIEW 1: 3D TITANIUM LOAN SANCTION CARD + INSTANT APPROVAL HUD
    // =========================================================================
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.shadowBlur = 44;
    ctx.shadowOffsetY = 26;

    // Main 3D Metallic Credit/Sanction Slab
    const cardGrad = ctx.createLinearGradient(130, 95, 640, 425);
    cardGrad.addColorStop(0, "#1e293b");
    cardGrad.addColorStop(0.5, "#0f172a");
    cardGrad.addColorStop(1, "#090d16");
    ctx.fillStyle = cardGrad;
    ctx.strokeStyle = accent1;
    ctx.lineWidth = 2.5;
    roundRect(ctx, 125, 95, 515, 330, 22, true, true);

    // Gold EMV Smart Chip
    const chipGrad = ctx.createLinearGradient(165, 145, 225, 190);
    chipGrad.addColorStop(0, "#fde047");
    chipGrad.addColorStop(1, "#ca8a04");
    ctx.fillStyle = chipGrad;
    roundRect(ctx, 165, 145, 58, 42, 8, true, false);

    // Approved Limit & APR Display on 3D Card
    ctx.fillStyle = accent1;
    ctx.font = "700 12px 'JetBrains Mono', monospace";
    ctx.fillText(loan.code + " · PRE-APPROVED LIMIT", 165, 222);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 44px 'Syne', sans-serif";
    ctx.fillText("UP TO " + loan.maxAmount, 165, 274);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "600 14px 'JetBrains Mono', monospace";
    ctx.fillText(`FIXED RATE: ${loan.rate}  |  APPROVAL: ${loan.approvalTime}`, 165, 308);

    // Verified Green Pill inside Card
    ctx.fillStyle = accent1;
    roundRect(ctx, 165, 336, 265, 38, 19, true, false);
    ctx.fillStyle = "#04080e";
    ctx.font = "800 12px 'JetBrains Mono', monospace";
    ctx.fillText("✓ 0% HIDDEN FEES GUARANTEED", 185, 360);

    // Right Floating 3D Eligibility & Disbursal Widget
    const hudGrad = ctx.createLinearGradient(580, 150, 915, 445);
    hudGrad.addColorStop(0, "#172030");
    hudGrad.addColorStop(1, "#0b101b");
    ctx.fillStyle = hudGrad;
    ctx.strokeStyle = accent2;
    ctx.lineWidth = 2;
    roundRect(ctx, 580, 150, 335, 285, 20, true, true);

    // Circular 3D Approval Gauge
    ctx.beginPath();
    ctx.arc(748, 248, 56, 0, Math.PI * 2);
    ctx.fillStyle = accent1 + "22";
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = accent1;
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 20px 'Syne', sans-serif";
    ctx.fillText("99.2%", 715, 255);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 18px 'Syne', sans-serif";
    ctx.fillText("Instant AI Eligibility", 640, 342);
    ctx.fillStyle = accent2;
    ctx.font = "700 12px 'JetBrains Mono', monospace";
    ctx.fillText("NO CREDIT SCORE IMPACT", 650, 368);

  } else if (shotIndex === 1) {
    // =========================================================================
    // VIEW 2: 3D MONTHLY EMI & PRINCIPAL VS INTEREST VISUAL BREAKDOWN
    // =========================================================================
    ctx.shadowColor = "rgba(0,0,0,0.82)";
    ctx.shadowBlur = 45;
    ctx.shadowOffsetY = 26;

    ctx.fillStyle = "#111827";
    ctx.strokeStyle = accent1;
    ctx.lineWidth = 2.5;
    roundRect(ctx, 140, 90, 760, 350, 22, true, true);

    // 3D Donut Ring Chart on Left
    const cx = 310, cy = 265, radius = 98;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.lineWidth = 26;
    ctx.strokeStyle = accent2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, radius, -Math.PI / 2, Math.PI * 1.15);
    ctx.lineWidth = 26;
    ctx.strokeStyle = accent1;
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 20px 'Syne', sans-serif";
    ctx.fillText(loan.rate, cx - 42, cy + 7);

    // Right Side Clear Breakdown Bars
    ctx.fillStyle = accent1;
    ctx.font = "700 12px 'JetBrains Mono', monospace";
    ctx.fillText("TRANSPARENT REPAYMENT BREAKDOWN", 465, 155);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 26px 'Syne', sans-serif";
    ctx.fillText(shot.lens, 465, 195);

    // Principal Bar
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "600 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("Principal Loan Amount (91%)", 465, 238);
    ctx.fillStyle = accent1;
    roundRect(ctx, 465, 248, 360, 14, 7, true, false);

    // Interest Bar
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText("Low Fixed Interest (" + loan.rate + ")", 465, 292);
    ctx.fillStyle = accent2;
    roundRect(ctx, 465, 302, 110, 14, 7, true, false);

    // $0 Prepayment Penalty Tag
    ctx.fillStyle = "rgba(16, 185, 129, 0.16)";
    roundRect(ctx, 465, 342, 370, 42, 10, true, false);
    ctx.fillStyle = "#10b981";
    ctx.font = "700 12px 'JetBrains Mono', monospace";
    ctx.fillText("✓ $0 HIDDEN FEES · $0 PRE-CLOSURE PENALTY", 485, 368);

  } else {
    // =========================================================================
    // VIEW 3: 3-DOCUMENT PAPERLESS CHECKLIST (ZERO CUSTOMER CONFUSION)
    // =========================================================================
    ctx.shadowColor = "rgba(0,0,0,0.82)";
    ctx.shadowBlur = 45;
    ctx.shadowOffsetY = 26;

    ctx.fillStyle = "#111827";
    ctx.strokeStyle = accent1;
    ctx.lineWidth = 2.5;
    roundRect(ctx, 140, 90, 760, 350, 22, true, true);

    ctx.fillStyle = accent1;
    ctx.font = "700 13px 'JetBrains Mono', monospace";
    ctx.fillText("SIMPLE 3-DOCUMENT CHECKLIST · 100% DIGITAL UPLOAD", 185, 148);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 28px 'Syne', sans-serif";
    ctx.fillText("What You Need to Apply (Takes 3 Mins)", 185, 188);

    const docParts = shot.docs.split("·");
    [0, 1, 2].forEach((i) => {
      const bx = 185 + i * 230;
      const by = 220;
      ctx.fillStyle = "#1e293b";
      ctx.strokeStyle = i === 0 ? accent1 : "rgba(255,255,255,0.15)";
      ctx.lineWidth = 1.5;
      roundRect(ctx, bx, by, 210, 165, 14, true, true);

      ctx.fillStyle = accent1;
      ctx.font = "800 22px 'Syne', sans-serif";
      ctx.fillText(`STEP 0${i + 1}`, bx + 20, by + 42);

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 14px 'Plus Jakarta Sans', sans-serif";
      const label = (docParts[i] || `Fast Digital Check ${i + 1}`).trim();
      ctx.fillText(label.substring(0, 24), bx + 20, by + 82);
      if (label.length > 24) {
        ctx.fillText(label.substring(24, 48), bx + 20, by + 104);
      }

      ctx.fillStyle = "#10b981";
      ctx.font = "700 11px 'JetBrains Mono', monospace";
      ctx.fillText("✓ INSTANT VERIFY", bx + 20, by + 140);
    });
  }
  ctx.restore();

  const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
  __loanRenderCache[cacheKey] = dataUrl;
  return dataUrl;
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

/**
 * Interactive Live 3D EMI & Eligibility Calculator Engine
 */
function initLiveEMICalculator() {
  const amountInput = document.getElementById("loan-amount-slider");
  const tenureInput = document.getElementById("loan-tenure-slider");
  const rateSelect = document.getElementById("loan-type-select");

  const amountValEl = document.getElementById("calc-amount-val");
  const tenureValEl = document.getElementById("calc-tenure-val");
  const emiResultEl = document.getElementById("calc-emi-result");
  const interestResultEl = document.getElementById("calc-interest-result");
  const totalResultEl = document.getElementById("calc-total-result");
  const rateBadgeEl = document.getElementById("calc-rate-badge");
  const principalBarEl = document.getElementById("emi-bar-principal");

  // Hero SVG Live Readouts
  const svgEmiText = document.getElementById("svg-live-emi");
  const svgLoanText = document.getElementById("svg-live-amount");
  const svgRateText = document.getElementById("svg-live-rate");

  function updateCalculation() {
    if (!amountInput || !tenureInput) return;
    const P = parseFloat(amountInput.value) || 25000;
    const N = parseInt(tenureInput.value, 10) || 36;
    const annualRate = parseFloat(rateSelect?.value || "8.9");
    const r = annualRate / 12 / 100;

    const emi = r > 0 ? (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1) : P / N;
    const totalPayable = emi * N;
    const totalInterest = Math.max(0, totalPayable - P);
    const principalPct = Math.round((P / totalPayable) * 100);

    const fmt = (num) => "$" + Math.round(num).toLocaleString("en-US");

    if (amountValEl) amountValEl.textContent = fmt(P);
    if (tenureValEl) tenureValEl.textContent = `${N} Months (${(N / 12).toFixed(1)} Yrs)`;
    if (emiResultEl) emiResultEl.textContent = `${fmt(emi)} / mo`;
    if (interestResultEl) interestResultEl.textContent = fmt(totalInterest);
    if (totalResultEl) totalResultEl.textContent = fmt(totalPayable);
    if (rateBadgeEl) rateBadgeEl.textContent = `${annualRate}% Fixed APR`;
    if (principalBarEl) principalBarEl.style.width = `${principalPct}%`;

    if (svgEmiText) svgEmiText.textContent = `${fmt(emi)}/mo`;
    if (svgLoanText) svgLoanText.textContent = `LOAN AMOUNT: ${fmt(P)} (${N} MO)`;
    if (svgRateText) svgRateText.textContent = `INTEREST RATE: ${annualRate}% APR · $0 HIDDEN FEES`;
  }

  amountInput?.addEventListener("input", updateCalculation);
  tenureInput?.addEventListener("input", updateCalculation);
  rateSelect?.addEventListener("change", updateCalculation);

  // Quick Amount Preset Buttons
  document.querySelectorAll("[data-preset-amount]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-preset-amount");
      if (amountInput && val) {
        amountInput.value = val;
        updateCalculation();
      }
    });
  });

  // Quick Eligibility Checker on Home/Services
  const incomeInput = document.getElementById("elig-income");
  const obligationsInput = document.getElementById("elig-obligations");
  const eligOutput = document.getElementById("elig-max-limit");

  function updateEligibility() {
    if (!incomeInput || !eligOutput) return;
    const income = parseFloat(incomeInput.value) || 4500;
    const existingEmi = parseFloat(obligationsInput?.value || "400");
    const disposable = Math.max(250, income * 0.55 - existingEmi);
    const maxLoan = Math.round(disposable * 42);
    eligOutput.textContent = "$" + maxLoan.toLocaleString("en-US");
  }

  incomeInput?.addEventListener("input", updateEligibility);
  obligationsInput?.addEventListener("input", updateEligibility);

  updateCalculation();
  updateEligibility();
}

document.addEventListener("DOMContentLoaded", () => {
  initLiveEMICalculator();

  const cards = document.querySelectorAll(".portfolio-item[data-project-id]");
  cards.forEach((card) => {
    const projectId = card.getAttribute("data-project-id");
    const spec = LOAN_PROGRAMS_SPEC[projectId];
    if (!spec) return;

    const slides = card.querySelectorAll(".thumb-slide");
    const shotBtns = card.querySelectorAll(".shot-btn");

    shotBtns.forEach((btn, idx) => {
      if (spec.shots[idx]) {
        const shortName = spec.shots[idx].label.split("·")[1]?.trim() || `View ${idx + 1}`;
        btn.textContent = `${idx + 1}: ${shortName}`;
        btn.title = `${spec.shots[idx].label} — ${spec.shots[idx].lens}`;
      }
    });

    slides.forEach((slide, idx) => {
      const shotSpec = spec.shots[idx] || spec.shots[0];
      const img = slide.querySelector("img");

      if (img) {
        img.src = renderLoanStudioMockup(projectId, idx);
      }

      if (!slide.querySelector(".studio-mockup-hud")) {
        const hud = document.createElement("div");
        hud.className = "studio-mockup-hud";
        hud.innerHTML = `
          <div class="studio-hud-top">
            <span class="studio-client-stamp">✦ ${spec.client.toUpperCase()}</span>
            <span class="studio-render-tag">${spec.rate}</span>
          </div>
          <div class="studio-hud-bottom">
            <div class="studio-shot-meta">
              <strong>${shotSpec.label}</strong>
              <span>${shotSpec.badge} · ${shotSpec.lens}</span>
            </div>
          </div>
        `;
        slide.appendChild(hud);
      }
    });
  });
});

window.STUDIO_PROJECTS_SPEC = LOAN_PROGRAMS_SPEC;
