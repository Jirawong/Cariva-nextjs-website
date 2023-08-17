import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navmenu.module.css";
import Image from "next/image";
import Logo from "../public/images/cariva-logo.svg";
import { useRouter } from "next/router";

const Navmenu = () => {
  const router = useRouter();
  // dropdown
  const [dropdownStates, setDropdownStates] = React.useState([false, false]);
  const [dropdownClicked, setDropdownClicked] = React.useState([false, false]);
  const toggleDropdown = (index) => {
    const newDropdownClicked = [...dropdownClicked];
    newDropdownClicked[index] = !newDropdownClicked[index];
    setDropdownClicked(newDropdownClicked);
  };

  const handleMouseEnter = (index) => {
    if (!dropdownClicked[index]) {
      const newDropdownStates = [...dropdownStates];
      newDropdownStates[index] = true;
      setDropdownStates(newDropdownStates);
    }
  };
  const handleMouseLeave = (index) => {
    if (!dropdownClicked[index]) {
      const newDropdownStates = [...dropdownStates];
      newDropdownStates[index] = false;
      setDropdownStates(newDropdownStates);
    }
  };

  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };
  const handleWindowClick = () => {
    setDropdownStates(Array(dropdownStates.length).fill(false));
    setDropdownClicked(Array(dropdownClicked.length).fill(false));
  };

  React.useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${styles.navbar} ${styles.navbar_dark} ${styles.bg_blue_nav} sticky top-0 p-0 m-0`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="lg:container px-5 mx-auto flex justify-between items-center">
        <Link href="/" className={styles.navbar_brand}>
          <Image
            src={Logo}
            alt="Cariva Logo"
            className="py-2 py-xxl-0 "
            width={200}
            height={100}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="2xl:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        <ul
          className={`${styles.navbar_nav} 2xl:flex justify-center hidden`}
        >
          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link} ${
                router.asPath === "/" ? styles.active : ""
              } block p-2`}
              aria-current="page"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link} ${
                router.asPath === "/about-us" ? styles.active : ""
              } block p-2`}
              href="/about-us"
            >
              About us
            </Link>
          </li>
          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link} ${
                router.asPath === "/building-blocks" ? styles.active : ""
              } block p-2`}
              href="/building-blocks"
            >
              Building Blocks
            </Link>
          </li>
          <li className={`${styles.nav_item} ${styles.dropdown} `}>
            <a
              className={`${styles.nav_link} ${
                router.asPath === "/arvic-product" ||
                router.asPath === "/beaut-product" ||
                router.asPath === "/next-cercise-product"
                  ? styles.active
                  : ""
              }  dropdown-toggle block p-2`}
              id="navbarDropdownMenuLink"
              role="button"
              aria-expanded="false"
              onClick={(event) => {
                toggleDropdown(0);
                handleDropdownClick(event);
              }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
              style={{ display: "inline-block" }}
            >
              Blocks Use Case
            </a>
            <ul
              className={
                (dropdownStates[0] ? "block " : "hidden ") +
                `${styles.dropdown_menu}`
              }
              aria-labelledby="navbarDropdownMenuLink"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <li>
                <Link
                  className={styles.dropdown_item}
                  href="/next-cercise-product"
                >
                  NextCercise Product
                </Link>
              </li>
              <li>
                <Link className={styles.dropdown_item} href="/beaut-product">
                  Beaut Product
                </Link>
              </li>
              <li>
                <Link className={styles.dropdown_item} href="/arvic-product">
                  Arvic Product
                </Link>
              </li>
            </ul>
          </li>

          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link}  ${
                router.asPath === "/data-network" ? styles.active : ""
              } block p-2`}
              href="/data-network"
            >
              Data Network
            </Link>
          </li>
          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link}  ${
                router.asPath === "/news-and-updates" ? styles.active : ""
              } block p-2`}
              href="/news-and-updates"
            >
              News and updates
            </Link>
          </li>
          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link}  ${
                router.asPath === "/contact-us" ? styles.active : ""
              } block p-2`}
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <ul
          className={`${styles.navbar_nav} mx-auto justify-center 2xl:hidden px-3  py-4`}
        >
          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link} ${styles.active} block py-2 px-3`}
              aria-current="page"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link} block py-2 px-3`}
              href="/about-us"
            >
              About us
            </Link>
          </li>
          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link} block py-2 px-3`}
              href="/building-blocks"
            >
              Building Blocks
            </Link>
          </li>
          <li className={`${styles.nav_item} ${styles.dropdown} `}>
            <a
              className={`${styles.nav_link} dropdown-toggle block w-full py-2 px-3`}
              id="navbarDropdownMenuLink"
              role="button"
              aria-expanded="false"
              onClick={(event) => {
                toggleDropdown(0);
                handleDropdownClick(event);
              }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
              style={{ display: "inline-block" }}
            >
              Blocks Use Case
            </a>
            <ul
              className={(dropdownStates[0] ? "block " : "hidden ") + ``}
              aria-labelledby="navbarDropdownMenuLink"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <li>
                <Link
                  className={styles.dropdown_item}
                  href="/next-cercise-product"
                >
                  NextCercise Product
                </Link>
              </li>
              <li>
                <a className={styles.dropdown_item} href="/beaut-product">
                  Beaut Product
                </a>
              </li>
              <li>
                <Link className={styles.dropdown_item} href="/arvic-product">
                  Arvic Product
                </Link>
              </li>
            </ul>
          </li>

          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link} block py-2 px-3`}
              href="data-network"
            >
              Data Network
            </Link>
          </li>
          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link} block py-2 px-3`}
              href="/news-and-updates"
            >
              News and updates
            </Link>
          </li>
          <li className={`${styles.nav_item}`}>
            <Link
              className={`${styles.nav_link} block py-2 px-3`}
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navmenu;
