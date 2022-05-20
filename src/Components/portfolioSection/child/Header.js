import React from "react";
import styles from "./style/Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <nav>
            <ul>
              <li>
                <Link to="/coverLetter">CoverLetter </Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>

              <li>
                <a
                  href="https://amenable-latency-d26.notion.site/Web_Programming-ac5fd9981ad54fb1bd4143fef810cac4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Record
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
