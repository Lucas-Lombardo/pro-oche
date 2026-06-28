"use client";

import { useRef, useState } from "react";
import Icon from "@/app/components/Icon";

function Item({ q, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div className="faq__item">
      <button
        type="button"
        className="faq__q"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {q}
        <Icon name="plus" size={20} />
      </button>
      <div
        className="faq__a"
        style={{ maxHeight: open ? `${ref.current?.scrollHeight || 0}px` : 0 }}
      >
        <div className="faq__a-inner" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items, variant }) {
  return (
    <div className={variant === "spec" ? "accordion" : "faq"}>
      {items.map((it, i) => (
        <Item key={i} q={it.q}>
          {it.a}
        </Item>
      ))}
    </div>
  );
}
