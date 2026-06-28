"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/components/Icon";
import { useCart } from "@/app/components/CartProvider";

const links = [
  { href: "/#oche", label: "The Oche" },
  { href: "/custom-designs", label: "Custom Designs" },
  { href: "/#how", label: "How it works" },
  { href: "/#reviews", label: "Reviews" },
];

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/" className="brand" aria-label="My Oche — home">
            <Image
              src="/images/logo.jpg"
              alt="My Oche logo"
              width={42}
              height={42}
              priority
            />
            <span>
              My Oche
              <span className="brand__sub">Custom Darts Oches</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <Link
              href="/product"
              className="btn btn--primary header__cta-desktop"
            >
              Customise yours
            </Link>
            <Link
              href="/cart"
              className="cart-btn"
              aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
            >
              <Icon name="cart" size={21} />
              {count > 0 && <span className="cart-badge">{count}</span>}
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "x" : "menu"} size={22} />
            </button>
          </div>
        </div>

        <nav
          className={`mobile-nav ${open ? "open" : ""}`}
          aria-label="Mobile"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/product"
            className="btn btn--primary btn--block"
            style={{ marginTop: 8 }}
            onClick={() => setOpen(false)}
          >
            Customise yours
          </Link>
        </nav>
      </div>
    </header>
  );
}
