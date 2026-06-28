"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/components/Icon";
import MatPreview from "@/app/components/MatPreview";
import Accordion from "@/app/components/Accordion";
import { useCart } from "@/app/components/CartProvider";
import {
  BASE_PRICE,
  LED_ADDON,
  DESIGNS,
  SIZES,
  getDesign,
  getSize,
} from "@/app/lib/products";
import { gbp } from "@/app/lib/format";

const PHOTOS = [
  { src: "/images/oche-wine.jpg", alt: "Wine-red folding oche, folded flat" },
  { src: "/images/asp.jpg", alt: "The Asp pro-red custom oche, top down" },
  { src: "/images/chelsea.jpg", alt: "Chelsea FC full-length custom oche" },
  { src: "/images/newcastle.jpg", alt: "Newcastle United custom oche with LED" },
  { src: "/images/rangers.jpg", alt: "Rangers FC custom oche standing up" },
];

const MAX_TEXT = 18;

const specItems = [
  {
    q: "Specifications",
    a: (
      <ul style={{ display: "grid", gap: 8 }}>
        <li>• Premium black melamine board with 2mm PVC edging</li>
        <li>• Two-piece folding frame — stores and transports flat</li>
        <li>• Standard size: 290 × 60 cm (compact option available)</li>
        <li>• Steel-tip (7ft 9¼in) or soft-tip (8ft) oche markings</li>
        <li>• Optional RGB LED edge lighting with remote</li>
        <li>• Hand-built to order by a time-served cabinet maker</li>
      </ul>
    ),
  },
  {
    q: "Delivery & returns",
    a: (
      <p>
        Free flat-packed delivery across mainland UK, typically 2–3 weeks as each
        oche is made to order. Bespoke and personalised items are
        non-returnable unless faulty. (This is a demo store — no real orders are
        placed.)
      </p>
    ),
  },
  {
    q: "Care",
    a: (
      <p>
        Wipe the surface with a damp cloth and mild detergent. Store flat or
        folded away from direct heat. The PVC edging keeps the frame protected
        for years of play.
      </p>
    ),
  },
];

export default function ProductClient() {
  const { addItem } = useCart();

  const [designId, setDesignId] = useState("wine");
  const [sizeId, setSizeId] = useState("standard");
  const [customText, setCustomText] = useState("");
  const [led, setLed] = useState(false);
  const [qty, setQty] = useState(1);
  const [view, setView] = useState("preview"); // 'preview' | photo index
  const [added, setAdded] = useState(false);

  const design = getDesign(designId);
  const size = getSize(sizeId);
  const unitPrice = BASE_PRICE + (led ? LED_ADDON.price : 0) + size.price;

  function showPreview() {
    setView("preview");
  }

  function handleAdd() {
    addItem({
      designId,
      designName: design.name,
      sizeId,
      sizeName: size.name,
      sizeDetail: size.detail,
      customText: customText.trim(),
      led,
      quantity: qty,
      unitPrice,
      swatch: design.swatch,
      surface: design.surface,
      textColor: design.textColor,
      accent: design.accent,
      bespoke: !!design.bespoke,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 3500);
  }

  return (
    <div className="container">
      <p className="breadcrumb" style={{ paddingTop: 28 }}>
        <Link href="/">Home</Link> · <Link href="/product">Customise</Link>
      </p>

      <div className="product">
        {/* GALLERY / LIVE PREVIEW */}
        <div className="product__gallery">
          <div
            className={`product__main ${
              view === "preview" ? "product__main--preview" : ""
            }`}
          >
            {view === "preview" ? (
              <MatPreview design={design} customText={customText} led={led} />
            ) : (
              <Image
                src={PHOTOS[view].src}
                alt={PHOTOS[view].alt}
                fill
                sizes="(max-width: 980px) 100vw, 560px"
                priority
              />
            )}
          </div>

          <div className="product__thumbs">
            <button
              type="button"
              className={`product__thumb product__thumb--preview ${
                view === "preview" ? "active" : ""
              }`}
              onClick={showPreview}
              aria-label="Show live preview of your design"
              aria-pressed={view === "preview"}
            >
              Your design
            </button>
            {PHOTOS.map((p, i) => (
              <button
                key={p.src}
                type="button"
                className={`product__thumb ${view === i ? "active" : ""}`}
                onClick={() => setView(i)}
                aria-label={`Show photo: ${p.alt}`}
                aria-pressed={view === i}
              >
                <Image src={p.src} alt="" fill sizes="80px" />
              </button>
            ))}
          </div>
        </div>

        {/* DETAILS / CUSTOMISER */}
        <div>
          <p className="eyebrow">Custom folding oche</p>
          <h1 className="product__title">The My Oche Folding Oche</h1>
          <div className="product__rating">
            <span className="stars" aria-label="4.9 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" size={16} />
              ))}
            </span>
            4.9 · 128 reviews
          </div>

          <div className="product__price">
            <span className="now">{gbp(unitPrice)}</span>
            <span className="vat">incl. VAT · free UK delivery</span>
          </div>

          <p className="product__desc">
            Build your own premium folding oche. Choose a finish, add your name
            or club, set your distance and watch it update live on the left.
          </p>

          {/* DESIGN */}
          <div className="opt-group">
            <div className="opt-group__label">
              Theme <span>{design.tagline}</span>
            </div>
            <div className="swatches">
              {DESIGNS.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className={`swatch ${designId === d.id ? "active" : ""}`}
                  onClick={() => {
                    setDesignId(d.id);
                    showPreview();
                  }}
                  aria-pressed={designId === d.id}
                >
                  <span
                    className="swatch__dot"
                    style={{ background: d.surface }}
                  />
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* CUSTOM TEXT */}
          <div className="opt-group">
            <div className="field">
              <label htmlFor="customText">
                Personalise it{" "}
                <span style={{ fontWeight: 400, color: "var(--muted)" }}>
                  (name, club or slogan — optional)
                </span>
              </label>
              <input
                id="customText"
                className="input"
                type="text"
                maxLength={MAX_TEXT}
                placeholder="e.g. The Asp, or Daz’s Oche"
                value={customText}
                onChange={(e) => {
                  setCustomText(e.target.value);
                  showPreview();
                }}
              />
              <p className="field__hint">
                {design.bespoke
                  ? "Bespoke artwork: we’ll contact you after ordering to design it together."
                  : `${customText.length}/${MAX_TEXT} characters`}
              </p>
            </div>
          </div>

          {/* SIZE */}
          <div className="opt-group">
            <div className="opt-group__label">Size &amp; oche distance</div>
            <div className="choices">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`choice ${sizeId === s.id ? "active" : ""}`}
                  onClick={() => setSizeId(s.id)}
                  aria-pressed={sizeId === s.id}
                >
                  <span className="choice__main">
                    <b>{s.name}</b>
                    <span>{s.detail}</span>
                  </span>
                  <span className="choice__check">
                    {sizeId === s.id && <Icon name="check" size={14} />}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* LED ADD-ON */}
          <div className="opt-group">
            <div
              className={`toggle-card ${led ? "active" : ""}`}
            >
              <div className="toggle-card__info">
                <b>
                  {LED_ADDON.name}{" "}
                  <span style={{ color: "var(--red)" }}>
                    +{gbp(LED_ADDON.price)}
                  </span>
                </b>
                <p>{LED_ADDON.description}</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={led}
                aria-label="Add RGB LED edge lighting"
                className="switch"
                onClick={() => {
                  setLed((v) => !v);
                  showPreview();
                }}
              />
            </div>
          </div>

          {/* QTY + ADD */}
          <div className="addbar">
            <div className="qty" role="group" aria-label="Quantity">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <Icon name="minus" size={18} />
              </button>
              <span aria-live="polite">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.min(20, q + 1))}
                aria-label="Increase quantity"
              >
                <Icon name="plus" size={18} />
              </button>
            </div>
            <button
              type="button"
              className="btn btn--primary btn--lg"
              style={{ flex: 1 }}
              onClick={handleAdd}
            >
              {added ? (
                <>
                  <Icon name="check" size={18} /> Added to cart
                </>
              ) : (
                <>Add to cart · {gbp(unitPrice * qty)}</>
              )}
            </button>
          </div>

          {added && (
            <div
              className="demo-note"
              role="status"
              style={{ marginTop: 16, marginBottom: 0 }}
            >
              <Icon name="check" size={18} />
              <span>
                Added to your cart.{" "}
                <Link
                  href="/cart"
                  style={{ color: "var(--red)", fontWeight: 600 }}
                >
                  View cart &amp; checkout →
                </Link>
              </span>
            </div>
          )}

          <ul className="spec-list" style={{ marginTop: 26 }}>
            <li>
              <Icon name="truck" size={20} /> Free UK delivery, flat-packed
            </li>
            <li>
              <Icon name="hammer" size={20} /> Made to order in Stockton-on-Tees
            </li>
          </ul>

          <Accordion items={specItems} variant="spec" />
        </div>
      </div>
    </div>
  );
}
