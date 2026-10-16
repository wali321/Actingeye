"use client";

import { useState } from "react";

const amounts = [500, 1000, 2500, 5000];

export function DonationOptions() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number | null>(amounts[0]);

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
        <legend>Select an amount <span>Sample amount · INR</span></legend>
        <div className="amount-grid">
          {amounts.map((value) => <button className="amount-choice" type="button" key={value} aria-pressed={amount === value} onClick={() => setAmount(value)}>₹{value.toLocaleString("en-IN")}</button>)}
          <label className="custom-amount">Custom amount<input type="number" min="1" inputMode="numeric" placeholder="Enter amount" value={typeof amount === "number" ? amount : ""} onChange={(event) => setAmount(event.target.value ? Number(event.target.value) : null)} /></label>
        </div>
      </fieldset>
      <p className="donation-selection" aria-live="polite">
        Selected: {amount === null ? "No amount selected" : `₹${amount.toLocaleString("en-IN")}`} · {frequency === "once" ? "one time" : "monthly"}
      </p>
      <div className="donation-checkout">
        <p aria-live="polite">Live donations are not available in this hackathon demo.</p>
        <button type="button" disabled>Checkout unavailable</button>
      </div>
    </div>
  );
}
