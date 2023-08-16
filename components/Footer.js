import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 flex items-center">
          <div className={`px-0 lg:px-1 ${styles.footerLink}`}>
            <ul>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/term-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="pt-2 lg:pt-0 text-center">
            <p>© 2023 Cariva (Thailand) Company Ltd. All Rights Reserved.</p>
          </div>
          <div className="px-0 lg:px-1 social-link">
            <Link
              href="https://www.facebook.com/CarivaTech"
              class="fa-brands fa-facebook-f facebook"
            ></Link>
            <Link
              href="https://www.linkedin.com/company/carivath"
              class="fa-brands fa-linkedin-in in"
            ></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
