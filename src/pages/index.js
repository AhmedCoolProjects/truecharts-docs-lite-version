import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageCard from "@site/src/components/HomepageCard";
import clsx from "clsx";
import Lottie from "react-lottie";
import animationLogoData from "../animations/logo-animation-1.json";
import animationData from "../animations/animation-1.json";

const defaultLogoOptions = {
  loop: true,
  autoplay: true,
  animationData: animationLogoData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const data = [
  {
    Svg: require("@site/static/img/easy-to-use-icon.svg").default,
    SvgHover: require("@site/static/img/easy-to-use-icon.svg").default,
    title: "Easy to Deploy",
    description:
      "TrueCharts features a neatly organized catalog of Apps for TrueNAS SCALE.",
    link: "",
  },
  {
    Svg: require("@site/static/img/file-settings-icon.svg").default,
    SvgHover: require("@site/static/img/file-settings-icon.svg").default,
    title: "Consistent Ecosystem",
    description:
      "All TrueCharts Apps, are build upon the same solid foundation. All featuring the same deployment experience",
    link: "",
  },
  {
    Svg: require("@site/static/img/shield-heart-icon.svg").default,
    SvgHover: require("@site/static/img/shield-heart-icon.svg").default,
    title: "Stability",
    description:
      "TrueCharts has stability as a prime importance: What is running, should stay running.",
    link: "",
  },
];

function HomepageHeader() {
  // const progressRef = useRef(null);
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const progressBar = progressRef.current.querySelector(".progress-bar");
  //   const progressValue = progressRef.current.querySelector(".progress-value");

  //   const updateProgress = () => {
  //     setProgress((prevProgress) => {
  //       const newProgress = prevProgress + 1;
  //       progressBar.style.width = `${newProgress}%`;
  //       progressValue.textContent = `Goal: €${newProgress + 430}`;

  //       if (newProgress === 70) {
  //         clearInterval(interval);
  //       }

  //       return newProgress;
  //     });
  //   };

  //   const interval = setInterval(updateProgress, 30);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header__container}>
          <div>
            <div className={styles.logo__container}>
              <div className={styles.logo__animated__lottie}>
                <Lottie
                  options={defaultLogoOptions}
                  isClickToPauseDisabled={true}
                />
              </div>
              <h1
                style={{
                  color: "#326EE6",
                }}
              >
                {siteConfig.title}
              </h1>
            </div>
            <p
              style={{
                textTransform: "capitalize",
              }}
            >
              discover our extensive collection of awesome Helm charts and scale
              apps, crafted to optimize your deployment experience!
            </p>

            <div className={styles.animated_button}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                to="/manual/guides/Important-MUST-READ"
              >
                <span></span>
                <h2>TrueNAS SCALE</h2>
              </Link>
            </div>
          </div>

          {/* animation */}
          <div className={styles.animated__lottie}>
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`TrueCharts`}
      description="Your source For TrueNAS SCALE Apps<head />"
    >
      <HomepageHeader />
      <main className={styles.container}>
        <div className={styles.grid}>
          {data.map((cardItem) => (
            <HomepageCard {...cardItem} key={cardItem.title} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
