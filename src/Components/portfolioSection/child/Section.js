import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./style/Section.module.css";
import { data } from "../store/data";

const Section = () => {
  const sectionMenuRef = useRef(null);
  const imageBoxRef = useRef(null);
  const descRef = useRef(null);
  const gitHubLinkRef = useRef(null);
  const gitHubLinkRef2 = useRef(null);
  const websiteLinkRef = useRef(null);
  const projectNameRef = useRef(null);

  const [sectionName, setSectionName] = useState("01");
  const onClickMovePage = (val) => {
    setSectionName(val);
  };

  const excutePageInit = useCallback(() => {
    let result = data.map((value) => {
      const tempImg = value[sectionName].img;
      const tempLink = value[sectionName].link;
      const tempTitle = value[sectionName].projectTitle;
      const tempGitHubLink = value[sectionName].gitHubLink;
      websiteLinkRef.current.href = tempLink;
      gitHubLinkRef.current.href = tempGitHubLink;
      gitHubLinkRef2.current.href = tempGitHubLink;
      imageBoxRef.current.style.background = `url(${tempImg})`;
      imageBoxRef.current.style.backgroundSize = `cover`;
      imageBoxRef.current.style.backgroundPosition = `center`;
      projectNameRef.current.textContent = tempTitle;
    });
    return result;
  }, [sectionName]);

  const executeDescFunc = () => {
    let result = data.map((value, idx) => {
      return <ul key={value[sectionName].id}>{value[sectionName].desc()}</ul>;
    });
    return result;
  };

  const executeSkillUsedFunc = () => {
    let result = data.map((value, idx) => {
      return (
        <span key={value[sectionName].id}>{value[sectionName].skill}</span>
      );
    });
    return result;
  };
  const guideButtonInit = () => {
    const arr = [
      { id: 1, title: "01" },
      { id: 2, title: "02" },
      { id: 3, title: "03" },
      { id: 4, title: "04" },
    ];
    const result = arr.map((val) => {
      return (
        <ul className={styles.guideButton_manager} key={val.id}>
          <li
            className={styles.guideButton}
            onClick={(e) => onClickMovePage(val.title)}
          >
            {val.title}
          </li>
        </ul>
      );
    });
    return result;
  };
  useEffect(() => {
    excutePageInit();
  }, [excutePageInit]);
  return (
    <>
      <section>
        <div className={styles.sectionContainer}>
          <div ref={sectionMenuRef} className={styles.sectionMenu}>
            <span>2022</span>
            <span>
              PORTFOLIO<p>Section</p>
            </span>
            <span>WooSeok_Choi</span>
            <span>whitebirdws@gmail.com</span>
          </div>
          <div className={styles.instructionSectionMenu}>
            <div className={styles.instructionSectionMenu_subMenu}>
              <div className={styles.instructionSectionMenu_subMenu2}>
                <ul className={styles.instructionSectionMenu_webSiteBox}>
                  <li className={styles.webSiteBox_button}>
                    <a
                      ref={websiteLinkRef}
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Go to webiste
                    </a>
                  </li>
                </ul>
                <div className={styles.webSiteBox_guidButtonLayout}>
                  {guideButtonInit()}
                </div>
              </div>
              <ul className={styles.instructionSectionMenu_webSiteBoxImage}>
                <li
                  className={styles.webSiteBox_imageBox}
                  ref={imageBoxRef}
                ></li>
              </ul>
            </div>
            <ul className={styles.instructionSectionMenu_projectBox}>
              <li className={styles.projectBox_button}>프로젝트 개요</li>
              <li className={styles.projectBox_button}>
                <a
                  ref={gitHubLinkRef}
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ViewCode(Github)
                </a>
              </li>
            </ul>
            <ul className={styles.instructionSectionMenu_projectBox}>
              <li className={styles.projectBox_descBox}>
                <span>ProjectName:</span>
                <span ref={projectNameRef}></span>
                <br />
                <br />
                <hr />
                <br />
                <span>Skills used:</span>
                <br />
                <br />

                <span>{executeSkillUsedFunc()}</span>
                <br />
                <br />
                <hr />
                <br />
                <span>Description</span>
                <span>
                  <a
                    ref={gitHubLinkRef2}
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    자세히보기(Github)
                  </a>
                </span>
                <br />

                <br />
                <div className={styles.descBox_descrption} ref={descRef}>
                  {executeDescFunc()}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section;
