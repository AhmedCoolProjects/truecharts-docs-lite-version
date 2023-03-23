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
import Users from "../components/Users";
import Love from "../components/Love";
import BackToTop from "../components/BackToTop";

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


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.container}>
      <div className={styles.header__container}>
        <div className={styles.left__container}>
          <div className={styles.logo__container}>
            {/* <div className={styles.logo__animated__lottie}>
              <Lottie
                options={defaultLogoOptions}
                isClickToPauseDisabled={true}
              />
            </div> */}
            <h1>{siteConfig.title}</h1>
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
    </header>
  );
}

export default function Home() {
  return (
    <Layout title={`TrueCharts`} description="TrueCharts Description here">
      <HomepageHeader />
      <main >
        <Love />
        <Users/>   
        <br/>
        <br/>
        <BackToTop/>     
      </main>
    </Layout>
  );
}
