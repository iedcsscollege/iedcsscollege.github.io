import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import SocialIcons from "../components/SocialIcons";

const AhchievementsPage = () => {
  return (
    <Layout>
      <div className="relative w-full h-full">
        <div className="absolute right-5 md:right-6 top-[40%] z-[3] h-40">
          <SocialIcons />
        </div>
        <section className="hero" id="hero">
          <div className="container">
            <h2 className="sub-headline">WELCOME</h2>
            <h1 className="headline">IEDC</h1>
            <div className="headline-description">
              <div className="separator">
                <div className="line line-left"></div>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="line line-right"></div>
              </div>
              <div className="single-animation">
                <h5>SULLAMUSSALAM SCIENCE COLLEGE AREEKODE</h5>
                <a target="_blank" href="#news" className="btn cta-btn">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AhchievementsPage;

export const Head: HeadFC = () => <title>Achievements</title>;
