import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/components/Icon";

const FB_URL = "https://www.facebook.com/share/1E8oiv7W3i/?mibextid=wwXIfr";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" className="brand">
              <Image
                src="/images/logo.jpg"
                alt="My Oche logo"
                width={42}
                height={42}
              />
              <span>
                My Oche
                <span className="brand__sub">Custom Darts Oches</span>
              </span>
            </Link>
            <p className="footer__about">
              Premium folding darts oches, handmade by a time-served cabinet
              maker in Stockton-on-Tees. Your colours, your club, your game.
            </p>
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-pill"
              style={{
                marginTop: 18,
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.18)",
              }}
            >
              <Icon name="facebook" size={15} /> Follow on Facebook
            </a>
          </div>

          <div className="footer__col">
            <h4>Shop</h4>
            <Link href="/product">Customise your oche</Link>
            <Link href="/custom-designs">Custom designs</Link>
            <Link href="/#oche">Specifications</Link>
            <Link href="/cart">Your cart</Link>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <Link href="/#how">How it works</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/#faq">FAQ</Link>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </div>

          <div className="footer__col">
            <h4>Visit</h4>
            <p>Stockton-on-Tees</p>
            <p>County Durham, UK</p>
            <p>Mon–Sat, 9am–6pm</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} My Oche. All rights reserved.</span>
          <span className="demo-pill">
            <Icon name="info" size={14} /> Demo store — no real orders or payments
          </span>
        </div>
      </div>
    </footer>
  );
}
