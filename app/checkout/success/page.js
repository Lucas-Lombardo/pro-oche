"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import { gbp } from "@/app/lib/format";

function lineText(item) {
  if (item.customText) return item.customText;
  if (item.bespoke) return "Your Design";
  return item.designName;
}

export default function SuccessPage() {
  const [order, setOrder] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("myoche.lastOrder");
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="container">
        <div className="success" style={{ minHeight: "40vh" }} />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container">
        <div className="empty">
          <div className="empty__icon">
            <Icon name="check" size={32} />
          </div>
          <h2>No recent order</h2>
          <p>Looks like there’s no order to show. Why not design one?</p>
          <Link href="/product" className="btn btn--primary btn--lg">
            Customise your oche
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="success">
        <div className="success__icon">
          <Icon name="check" size={40} strokeWidth={2.4} />
        </div>
        <h1>Order confirmed!</h1>
        <p>
          Thanks{order?.contact?.firstName ? `, ${order.contact.firstName}` : ""}.
          Your custom oche is on its way to being made.
        </p>

        {order && (
          <div className="success__card">
            <div className="success__order">
              <span>
                Order number
                <br />
                <b>{order.orderNo}</b>
              </span>
              <span style={{ textAlign: "right" }}>
                Total paid
                <br />
                <b>{gbp(order.total)}</b>
              </span>
            </div>

            <div className="order-mini">
              {order.items.map((item) => (
                <div className="order-mini__line" key={item.lineId}>
                  <span
                    className="order-mini__sw"
                    style={{ background: item.surface }}
                    aria-hidden="true"
                  />
                  <span>
                    <b>{lineText(item)}</b>
                    <span>
                      {item.designName} · {item.sizeName}
                      {item.led ? " · LED" : ""}
                    </span>
                  </span>
                  <span className="order-mini__qty">×{item.quantity}</span>
                </div>
              ))}
            </div>

            <div
              className="summary__row"
              style={{ borderTop: "1px solid var(--line)", paddingTop: 14 }}
            >
              <span>Delivering to</span>
              <span style={{ textAlign: "right", color: "var(--muted)" }}>
                {order.contact.address1}
                {order.contact.address2 ? `, ${order.contact.address2}` : ""}
                <br />
                {order.contact.city}, {order.contact.postcode}
              </span>
            </div>

            <p
              style={{
                marginTop: 18,
                fontSize: 14,
                color: "var(--muted)",
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
              }}
            >
              <Icon name="info" size={16} />
              <span>
                A confirmation would normally be emailed to{" "}
                <b>{order.contact.email}</b>. This is a demo store — no real
                order, payment or email is processed.
              </span>
            </p>
          </div>
        )}

        <div
          className="hero__cta"
          style={{ justifyContent: "center", marginTop: 32 }}
        >
          <Link href="/product" className="btn btn--dark btn--lg">
            Design another
          </Link>
          <Link href="/" className="btn btn--ghost btn--lg">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
