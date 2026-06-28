"use client";

import Link from "next/link";
import Icon from "@/app/components/Icon";
import { useCart } from "@/app/components/CartProvider";
import { gbp } from "@/app/lib/format";

function lineText(item) {
  if (item.customText) return item.customText;
  if (item.bespoke) return "Your Design";
  return item.designName;
}

export default function CartPage() {
  const { items, hydrated, updateQty, removeItem, subtotal, count } = useCart();

  if (hydrated && items.length === 0) {
    return (
      <div className="container">
        <div className="empty">
          <div className="empty__icon">
            <Icon name="cart" size={32} />
          </div>
          <h2>Your cart is empty</h2>
          <p>
            Design your own folding oche — choose a theme, add your name and
            make it yours.
          </p>
          <Link href="/product" className="btn btn--primary btn--lg">
            Customise your oche <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <p className="breadcrumb" style={{ paddingTop: 28 }}>
        <Link href="/">Home</Link> · Cart
      </p>
      <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
        Your cart{" "}
        {hydrated && (
          <span style={{ color: "var(--muted)", fontSize: 20 }}>
            ({count} item{count === 1 ? "" : "s"})
          </span>
        )}
      </h1>

      <div className="cart">
        <div className="cart__items">
          {items.map((item) => (
            <div className="cart-line" key={item.lineId}>
              <div className="cart-line__thumb">
                <div
                  className="mini-mat"
                  style={{
                    background: item.surface,
                    color: item.bespoke ? item.accent : item.textColor,
                  }}
                >
                  {lineText(item)}
                </div>
              </div>

              <div className="cart-line__body">
                <b>The My Oche Folding Oche</b>
                <div className="cart-line__opts">
                  <span>Theme: {item.designName}</span>
                  <span>{item.sizeName}</span>
                  {item.customText && <span>Personalised: “{item.customText}”</span>}
                  {item.led && <span>+ RGB LED edge lighting</span>}
                  {item.bespoke && <span>Bespoke artwork (we’ll be in touch)</span>}
                </div>
                <div className="cart-line__foot">
                  <div className="qty" role="group" aria-label="Quantity">
                    <button
                      type="button"
                      onClick={() =>
                        updateQty(item.lineId, Math.max(1, item.quantity - 1))
                      }
                      aria-label="Decrease quantity"
                    >
                      <Icon name="minus" size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQty(item.lineId, Math.min(20, item.quantity + 1))
                      }
                      aria-label="Increase quantity"
                    >
                      <Icon name="plus" size={16} />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => removeItem(item.lineId)}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="cart-line__price">
                {gbp(item.unitPrice * item.quantity)}
                {item.quantity > 1 && (
                  <div
                    style={{
                      fontWeight: 400,
                      fontSize: 13,
                      color: "var(--muted)",
                    }}
                  >
                    {gbp(item.unitPrice)} each
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <aside className="summary">
          <h3>Order summary</h3>
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
          <Link
            href="/checkout"
            className="btn btn--primary btn--lg btn--block"
            style={{ marginTop: 20 }}
          >
            Checkout <Icon name="arrow" size={18} />
          </Link>
          <Link
            href="/product"
            className="btn btn--ghost btn--block"
            style={{ marginTop: 10 }}
          >
            Continue customising
          </Link>
          <p
            style={{
              marginTop: 16,
              fontSize: 13,
              color: "var(--muted)",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Icon name="lock" size={15} /> Demo checkout — no payment is taken.
          </p>
        </aside>
      </div>
    </div>
  );
}
