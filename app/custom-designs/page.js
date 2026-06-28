import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/components/Icon";
import { GALLERY } from "@/app/lib/products";

export const metadata = {
  title: "Custom Designs",
  description:
    "Real My Oche custom builds — football crests, club branding and bespoke artwork on premium folding darts oches.",
};

export default function CustomDesignsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> · Custom designs
          </p>
          <div className="section-head">
            <p className="eyebrow">The gallery</p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
              Built for clubs, teams &amp; fans
            </h2>
            <p>
              Every oche is printed and built to order. Bring us a crest, a
              colour scheme or a full design idea — here’s a taste of what’s
              possible.
            </p>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="gallery">
            {GALLERY.map((g) => (
              <div className="gallery__card" key={g.title}>
                <Image
                  src={g.src}
                  alt={`${g.title} — ${g.caption}`}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 380px"
                />
                <div className="gallery__overlay">
                  <b>{g.title}</b>
                  <span>{g.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner__text">
              <h2>Got a design in mind?</h2>
              <p>
                Start with a theme and add your own text, or request fully
                bespoke artwork in the customiser.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link href="/product" className="btn btn--primary btn--lg">
                Customise yours <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
