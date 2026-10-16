"use client";

import { useState } from "react";

const amounts = ["[Amount 1]", "[Amount 2]", "[Amount 3]", "[Amount 4]"];

export function DonationOptions() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number | string | null>(amounts[0]);

  return (
    <div className="donation-options">
      <fieldset className="donation-frequency">
        <legend>Choose a frequency</legend>
        <div className="segmented-control">
          <button type="button" aria-pressed={frequency === "once"} onClick={() => setFrequency("once")}>One time</button>
          <button type="button" aria-pressed={frequency === "monthly"} onClick={() => setFrequency("monthly")}>Monthly</button>
        </div>
      </fieldset>
      <fieldset className="donation-amounts">
        <legend>Select an amount <span>Currency and preset amounts to confirm</span></legend>
        <div className="amount-grid">
          {amounts.map((value) => <button className="amount-choice" type="button" key={value} aria-pressed={amount === value} onClick={() => setAmount(value)}>{value}</button>)}
          <label className="custom-amount">Custom amount<input type="number" min="1" inputMode="numeric" placeholder="Enter amount" value={typeof amount === "number" ? amount : ""} onChange={(event) => setAmount(event.target.value ? Number(event.target.value) : null)} /></label>
        </div>
        <p className="placeholder-note">[REPLACE: verified impact example for each amount. No giving impact is claimed here.]</p>
      </fieldset>
      <p className="donation-selection" aria-live="polite">
        Selected: {typeof amount === "number" ? amount.toLocaleString() : amount ?? "no amount"} · currency to confirm · {frequency === "once" ? "one time" : "monthly"}
      </p>
      <div className="donation-checkout">
        <p aria-live="polite">Checkout is not available yet. A verified payment provider and approved donation terms have not been configured.</p>
        <button type="button" disabled>Secure checkout coming soon</button>
      </div>
      <p className="donation-legal">No card or bank details are collected on this page. Confirm tax eligibility, receipts, refunds, and payment terms with the organization before launch.</p>
    </div>
  );
}
