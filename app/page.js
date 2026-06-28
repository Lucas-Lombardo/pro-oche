import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/components/Icon";
import Accordion from "@/app/components/Accordion";
import { GALLERY, BASE_PRICE } from "@/app/lib/products";
import { gbp } from "@/app/lib/format";

const features = [
  {
    icon: "fold",
    title: "Folds flat in seconds",
    text: "A genuine two-piece folding frame — set up for a match, fold it away when you’re done. No tools, no fuss.",
  },
  {
    icon: "sparkles",
    title: "Fully personalised",
    text: "Your club, crest, colours or nickname. Every oche is printed to order so no two are quite the same.",
  },
  {
    icon: "hammer",
    title: "Built to last",
    text: "Premium black melamine board with durable 2mm PVC edging, hand-built by a time-served cabinet maker.",
  },
  {
    icon: "light",
    title: "Optional LED lighting",
    text: "Add a colour-changing RGB edge with remote control to light up your games room in style.",
  },
];

const steps = [
  {
    n: "01",
    title: "Choose your base",
    text: "Pick a theme and finish, then set your size and oche distance for steel or soft tip.",
  },
  {
    n: "02",
    title: "Make it yours",
    text: "Add a name, club or slogan — or send us your own artwork and we’ll design it for you.",
  },
  {
    n: "03",
    title: "We craft & deliver",
    text: "Your oche is hand-built to order in Stockton-on-Tees and shipped flat-packed across the UK.",
  },
];

const reviews = [
  {
    text: "Absolute quality. The folding frame is so solid and it looks unreal in the games room. Took pride of place next to the board.",
    by: "Daz M.",
    where: "Newcastle",
  },
  {
    text: "Got our pub team’s name and crest on it and the lads love it. Folds away behind the sofa when the wife’s had enough of darts night.",
    by: "Steph R.",
    where: "Stockton-on-Tees",
  },
  {
    text: "The LED lighting is a proper touch. Fast turnaround and the finish is miles better than anything else I found online.",
    by: "Connor B.",
    where: "Glasgow",
  },
];

const faqs = [
  {
    q: "How customisable is the oche?",
    a: "Completely. Choose from our ready-made themes, add your own text, or send us a club crest, logo or photo and we’ll create a bespoke full-length design for you.",
  },
  {
    q: "How does the folding work?",
    a: "Each oche is a two-section frame that folds flat for storage and transport. It sets up in seconds with no tools and lies perfectly flat when in use.",
  },
  {
    q: "What is it made from?",
    a: "Premium black melamine board finished with durable 2mm PVC edging — not the unfinished CLS or painted plywood used by many others. Every oche is built by hand by a time-served cabinet maker.",
  },
  {
    q: "Which oche distances do you offer?",
    a: "Standard steel-tip (7ft 9¼in) and soft-tip (8ft) markings are available, plus a compact size for smaller spaces. You choose at checkout.",
  },
  {
    q: "Do you deliver across the UK?",
    a: "Yes — oches ship flat-packed across mainland UK. (This site is a demo, so no real orders are placed.)",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div className="reveal">
              <p className="eyebrow">Handmade in Stockton-on-Tees</p>
              <h1>
                Your oche. Your colours. <em>Your game.</em>
              </h1>
              <p className="hero__sub">
                Premium folding darts oches, built to order and personalised
                however you like — from your club crest to your own artwork.
              </p>
              <div className="hero__cta">
                <Link href="/product" className="btn btn--primary btn--lg">
                  Customise yours <Icon name="arrow" size={18} />
                </Link>
                <Link href="/custom-designs" className="btn btn--ghost btn--lg">
                  See custom builds
                </Link>
              </div>
              <div className="hero__price">
                <span>From</span>
                <strong>{gbp(BASE_PRICE)}</strong>
                <span>· free UK delivery</span>
              </div>
            </div>

            <div className="hero__media reveal" style={{ animationDelay: "0.1s" }}>
              <Image
                src="/images/asp-led.jpg"
                alt="A custom My Oche folding oche with LED lighting set up in front of a dartboard"
                fill
                sizes="(max-width: 980px) 100vw, 560px"
                priority
              />
              <div className="hero__badge">
                <span className="dot">
                  <Icon name="star" size={18} />
                </span>
                <div>
                  <b>Loved by players</b>
                  <span>Rated 4.9/5 by darts fans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust">
        <div className="container">
          <div className="trust__row">
            <div className="trust__item">
              <Icon name="fold" size={22} /> Folds flat for storage
            </div>
            <div className="trust__item">
              <Icon name="hammer" size={22} /> Hand-built, premium melamine
            </div>
            <div className="trust__item">
              <Icon name="sparkles" size={22} /> Personalised to order
            </div>
            <div className="trust__item">
              <Icon name="truck" size={22} /> Free UK delivery
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why My Oche</p>
            <h2>Made for the way you really play</h2>
            <p>
              A serious bit of kit that still tucks away when the game’s over —
              and looks the part however you set it up.
            </p>
          </div>
          <div className="grid-features">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <div className="feature__icon">
                  <Icon name={f.icon} size={24} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHT */}
      <section className="section section--soft" id="oche">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <Image
                src="/images/oche-wine.jpg"
                alt="The signature wine-red My Oche folding oche, shown folded in two sections"
                fill
                sizes="(max-width: 980px) 100vw, 560px"
              />
            </div>
            <div>
              <p className="eyebrow">The oche</p>
              <h2>The highest-quality folding oche on the market</h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Unlike frames made from unfinished CLS or painted plywood, every
                My Oche is crafted from premium black melamine board and finished
                with durable 2mm PVC edging for a superior look and long-lasting
                performance.
              </p>
              <ul className="spec-list">
                <li>
                  <Icon name="check" size={20} /> Two-piece folding frame — sets
                  up in seconds, stores flat
                </li>
                <li>
                  <Icon name="check" size={20} /> Built by hand by a time-served
                  cabinet maker
                </li>
                <li>
                  <Icon name="check" size={20} /> Official steel-tip & soft-tip
                  oche distances
                </li>
                <li>
                  <Icon name="check" size={20} /> Optional RGB LED edge lighting
                </li>
              </ul>
              <div className="hero__cta" style={{ marginTop: 28 }}>
                <Link href="/product" className="btn btn--dark btn--lg">
                  Build your oche — {gbp(BASE_PRICE)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" id="gallery">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Custom builds</p>
            <h2>One product, endless designs</h2>
            <p>
              From football crests to bespoke club branding — here’s what players
              have created with My Oche.
            </p>
          </div>
          <div className="gallery">
            {GALLERY.slice(0, 6).map((g) => (
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
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/custom-designs" className="btn btn--ghost btn--lg">
              View the full gallery <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--warm" id="how">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">How it works</p>
            <h2>From idea to oche in three steps</h2>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="step__num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href="/product" className="btn btn--primary btn--lg">
              Start customising <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" id="reviews">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Reviews</p>
            <h2>Players can’t get enough</h2>
          </div>
          <div className="reviews">
            {reviews.map((r) => (
              <div className="review" key={r.by}>
                <div className="stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" size={18} />
                  ))}
                </div>
                <p>“{r.text}”</p>
                <div className="review__by">
                  {r.by}
                  <span>{r.where}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft" id="faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">FAQ</p>
            <h2>Good to know</h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner__text">
              <h2>Ready to build your oche?</h2>
              <p>
                Design it your way and see it come to life — it only takes a
                minute.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link href="/product" className="btn btn--primary btn--lg">
                Customise yours <Icon name="arrow" size={18} />
              </Link>
              <Link href="/custom-designs" className="btn btn--light btn--lg">
                See the gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
