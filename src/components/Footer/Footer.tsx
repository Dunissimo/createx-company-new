import { FC } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../../UI/SocialMedia/SocialMedia";
import Input from "../../UI/Form/Input/Input";
import clsx from "clsx";
import Button from "../../UI/Button/Button";

import styles from "./Footer.module.scss";

import logo from "../../assets/light-logo.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import love from "../../assets/icons/love.svg";

const Footer: FC = () => {
  const clickHandler = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.body, "container")}>
        <div className={styles.info}>
          <img src={logo} alt="" />
          <p>
            Createx Online School is a leader in online studying. Wehave lots
            ofcourses and programs from the main market experts. Weprovide
            relevant approaches toonline learning, internships and employment
            inthe largest companies inthe country.
          </p>
          <div className={styles.socialMedia}>
            <SocialMedia className="footer" social="facebook" />
            <SocialMedia className="footer" social="twitter" />
            <SocialMedia className="footer" social="youtube" />
            <SocialMedia className="footer" social="telegram" />
            <SocialMedia className="footer" social="instagram" />
            <SocialMedia className="footer" social="linkedIn" />
          </div>
        </div>

        <div className={styles.map}>
          <h2>Site map</h2>
          <nav>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </nav>
        </div>

        <div className={styles.courses}>
          <h2>Courses</h2>
          <ul>
            <li>
              <Link to="/courses?theme=marketing">Marketing</Link>
            </li>
            <li>
              <Link to="/courses?theme=management">Management</Link>
            </li>
            <li>
              <Link to="/courses?theme=recruting">HR & Recruting</Link>
            </li>
            <li>
              <Link to="/courses?theme=design">Design</Link>
            </li>
            <li>
              <Link to="/courses?theme=development">Development</Link>
            </li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2>Contact us</h2>
          <p>
            <img src={phone} alt="" /> (405) 555-0128
          </p>
          <p>
            <img src={email} alt="" /> hello@createx.com
          </p>
        </div>

        <div className={styles.news}>
          <h2>SIGN UP TO OUR NEWSLETTER</h2>
          <form action="post" onSubmit={(e) => e.preventDefault()}>
            <Input
              settings={{ isWithArrow: true, theme: "dark" }}
              props={{ placeholder: "Email address" }}
            />
          </form>
          <p>
            *Subscribe to our newsletter to receive communications and early{" "}
            <br />
            updates from Createx SEO Agency.
          </p>
        </div>
      </div>
      <div className={styles.footerFoot}>
        <div className={clsx("container", styles.footerContainer)}>
          <p>
            © All rights reserved. Made with <img src={love} alt="" /> by{" "}
            <Link target="_blank" to="https://github.com/Dunissimo">
              Dunissimo
            </Link>
          </p>
          <Button props={{ onClick: clickHandler }} settings={{ simple: true }}>
            GO TO TOP
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
