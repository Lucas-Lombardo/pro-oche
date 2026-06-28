"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "@/app/components/Icon";
import { useCart } from "@/app/components/CartProvider";
import { gbp } from "@/app/lib/format";

const REQUIRED = ["firstName", "lastName", "email", "address1", "city", "postcode"];

function lineText(item) {
  if (item.customText) return item.customText;
  if (item.bespoke) return "Your Design";
  return item.designName;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, hydrated, subtotal, clearCart } = useCart();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function set(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const e = {};
    REQUIRED.forEach((f) => {
      if (!form[f].trim()) e[f] = "Required";
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address";
    }
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = REQUIRED.find((f) => e[f]) || Object.keys(e)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setSubmitting(true);
    const orderNo =
      "MO-" + Math.floor(100000 + Math.random() * 900000).toString();
    const order = {
      orderNo,
      placedAt: new Date().toISOString(),
      items,
      total: subtotal,
      contact: { ...form },
    };

    // Simulate processing, then complete (no real payment).
    setTimeout(() => {
      try {
        sessionStorage.setItem("myoche.lastOrder", JSON.stringify(order));
      } catch {
        /* ignore */
      }
      clearCart();
      router.push("/checkout/success");
    }, 900);
  }

  if (hydrated && items.length === 0) {
    return (
      <div className="container">
        <div className="empty">
          <div className="empty__icon">
            <Icon name="cart" size={32} />
          </div>
          <h2>Nothing to check out</h2>
          <p>Your cart is empty — design an oche to get started.</p>
          <Link href="/product" className="btn btn--primary btn--lg">
            Customise your oche
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <p className="breadcrumb" style={{ paddingTop: 28 }}>
        <Link href="/cart">Cart</Link> · Checkout
      </p>
      <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>Checkout</h1>

      <form className="checkout" onSubmit={handleSubmit} noValidate>
        <div>
          <div className="demo-note">
            <Icon name="info" size={18} />
            <span>
              This is a demonstration store. You can complete the whole flow, but{" "}
              <strong>no payment is taken and no order is placed.</strong>
            </span>
          </div>

          {/* CONTACT */}
          <div className="form-card">
            <h3>Contact details</h3>
            <p className="form-card__sub">
              We’ll use this to confirm your order and design.
            </p>
            <div className="form-grid">
              <Field
                id="firstName"
                label="First name"
                value={form.firstName}
                onChange={(v) => set("firstName", v)}
                error={errors.firstName}
                autoComplete="given-name"
              />
              <Field
                id="lastName"
                label="Last name"
                value={form.lastName}
                onChange={(v) => set("lastName", v)}
                error={errors.lastName}
                autoComplete="family-name"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => set("email", v)}
                error={errors.email}
                autoComplete="email"
                className="span-2"
              />
              <Field
                id="phone"
                label="Phone (optional)"
                type="tel"
                value={form.phone}
                onChange={(v) => set("phone", v)}
                autoComplete="tel"
                className="span-2"
                optional
              />
            </div>
          </div>

          {/* SHIPPING */}
          <div className="form-card">
            <h3>Delivery address</h3>
            <p className="form-card__sub">Your oche ships flat-packed, free.</p>
            <div className="form-grid">
              <Field
                id="address1"
                label="Address line 1"
                value={form.address1}
                onChange={(v) => set("address1", v)}
                error={errors.address1}
                autoComplete="address-line1"
                className="span-2"
              />
              <Field
                id="address2"
                label="Address line 2 (optional)"
                value={form.address2}
                onChange={(v) => set("address2", v)}
                autoComplete="address-line2"
                className="span-2"
                optional
              />
              <Field
                id="city"
                label="Town / city"
                value={form.city}
                onChange={(v) => set("city", v)}
                error={errors.city}
                autoComplete="address-level2"
              />
              <Field
                id="postcode"
                label="Postcode"
                value={form.postcode}
                onChange={(v) => set("postcode", v)}
                error={errors.postcode}
                autoComplete="postal-code"
              />
              <Field
                id="country"
                label="Country"
                value={form.country}
                onChange={(v) => set("country", v)}
                autoComplete="country-name"
                className="span-2"
              />
            </div>
          </div>

          {/* PAYMENT (demo) */}
          <div className="form-card">
            <h3>
              Payment{" "}
              <span className="demo-pill" style={{ marginLeft: 8 }}>
                <Icon name="lock" size={14} /> Demo only
              </span>
            </h3>
            <p className="form-card__sub">
              No card details are required or processed in this demo.
            </p>
            <div className="form-grid">
              <div className="field span-2">
                <label>Card number</label>
                <input
                  className="input"
                  placeholder="•••• •••• •••• ••••"
                  disabled
                />
              </div>
              <div className="field">
                <label>Expiry</label>
                <input className="input" placeholder="MM / YY" disabled />
              </div>
              <div className="field">
                <label>CVC</label>
                <input className="input" placeholder="•••" disabled />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn--primary btn--lg btn--block"
            disabled={submitting}
          >
            {submitting ? (
              "Placing your order…"
            ) : (
              <>
                Place order · {gbp(subtotal)}
              </>
            )}
          </button>
        </div>

        {/* SUMMARY */}
        <aside className="summary">
          <h3>Order summary</h3>
          <div className="order-mini">
            {items.map((item) => (
              <div className="order-mini__line" key={item.lineId}>
                <span
                  className="order-mini__sw"
                  style={{
                    background: item.surface,
                  }}
                  aria-hidden="true"
                />
                <span>
                  <b>{lineText(item)}</b>
                  <span>
                    {item.designName}
                    {item.led ? " · LED" : ""}
                  </span>
                </span>
                <span className="order-mini__qty">×{item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="summary__row">
            <span>Subtotal</span>
            <span>{gbp(subtotal)}</span>
          </div>
          <div className="summary__row">
            <span>Delivery</span>
            <span style={{ color: "var(--success)", fontWeight: 600 }}>Free</span>
          </div>
          <div className="summary__row summary__row--total">
            <span>Total</span>
            <span className="summary__total-val">{gbp(subtotal)}</span>
          </div>
        </aside>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  className = "",
  optional = false,
}) {
  return (
    <div className={`field ${className}`}>
      <label htmlFor={id}>
        {label}
        {!optional && <span style={{ color: "var(--red)" }}> *</span>}
      </label>
      <input
        id={id}
        type={type}
        className={`input ${error ? "input--error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p className="field__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
