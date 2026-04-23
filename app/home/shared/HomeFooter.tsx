/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const asset = (path: string) => `/images/home/${path}`;

export default function HomeFooter() {
  return (
    <footer id="contact" className="ikh-footer">
      <div className="ikh-shell ikh-footer__grid">
        <div className="ikh-footer__brand">
          <img src={asset("2024/05/ImmigrantsKnowHow-Logo.svg")} alt="Immigrants KnowHow" />
          <p>
            Immigrant Knowhow is where real support meets real community. We help immigrants navigate life in a new
            country through trusted services, expert guidance, and meaningful human connection, starting in the U.S.,
            Canada, Great Britain and Europe.
          </p>
        </div>

        <div>
          <h3>Links</h3>
          <ul className="ikh-footer__links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="https://immigrantknowhow.com/community">Community</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="https://immigrantknowhow.com/blog/">Blog</a>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Promise</h3>
          <p>
            We&apos;re here to make immigration feel less isolating and more empowering. By combining practical tools,
            real human connection, and community-driven support, we help you take control of your journey, wherever it
            begins.
          </p>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="ikh-footer__contact">
            <li>
              <strong>Immigrant Knowhow</strong>
            </li>
            <li>767 Broadway #1627 Manhattan, NY 10003</li>
            <li>
              <a href="tel:+16464665505">(646) 466 5505</a>
            </li>
            <li>
              <a href="mailto:hi@immigrantknowhow.com">hi@immigrantknowhow.com</a>
            </li>
          </ul>
          <div className="ikh-socials" aria-label="Social links">
            <a href="https://www.facebook.com/immigrantknowhow" aria-label="Facebook">
              f
            </a>
            <a href="https://www.instagram.com/immigrantknowhow/" aria-label="Instagram">
              ig
            </a>
            <a href="https://www.linkedin.com/company/immigrant-knowhow/" aria-label="LinkedIn">
              in
            </a>
            <a href="https://www.youtube.com/@immigrantknowhow" aria-label="YouTube">
              yt
            </a>
          </div>
        </div>
      </div>

      <div className="ikh-shell ikh-footer__bottom">
        <span>© Immigrant Knowhow</span>
        <a href="https://immigrantknowhow.com/privacy-policy/">Terms</a>
        <a href="https://immigrantknowhow.com/privacy-policy/">Privacy</a>
      </div>
    </footer>
  );
}
