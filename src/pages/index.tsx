import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import SocialIcons from "../components/SocialIcons";

const IndexPage = () => {
  return (
    <Layout>
      <div className="relative w-full h-full">
        <div className="absolute right-5 md:right-6 top-[40%] z-[3] h-40">
          <SocialIcons />
        </div>
        <div
          id="background"
          className="absolute left-0 right-0 top-0 w-full h-full bg-[url('../images/background.svg')] bg-no-repeat [background-position:-2px_0.5rem] bg-cover"
        >
          <div
            id="rocket"
            className="absolute left-0 top-0 md:right-[5rem] md:left-auto w-[345px] h-[488px] bg-[url('../images/rocket.svg')] bg-no-repeat [animation:liftoff_10s_ease-in-out_infinite] scale-[0.6] z-[2]"
          >
            <div
              id="fire"
              className="absolute bottom-0 left-0 w-[146px] h-[156px] bg-[url('../images/fire.gif')] bg-no-repeat bg-cover rotate-[210deg] bg-[center_center] translate-y-[5.8rem] translate-x-[-2rem] scale-110"
            />
          </div>
        </div>
        <div className="absolute left-0 right-0 top-0 w-full h-full bg-[url('../images/star.svg')] bg-no-repeat [background-position:0_8.5rem] animate-[twinkle_5s_ease-in-out_infinite]" />

        <div className="absolute bottom-3 left-3 md:left-8 text-white leading-[2.5rem] md:leading-[3rem]">
          <h1 className="text-[2rem] md:text-[2.3rem] font-light">
            INNOVATION AND ENTREPRENEURSHIP <br />
            DEVELOPMENT CENTRE (IEDC)
          </h1>
          <h2 className="text-base md:text-2xl font-extralight">
            SULLAMUSSALAM SCIENCE COLLEGE, AREEKODE
          </h2>
        </div>
        <div className="absolute animate-[floating_3s_ease-in-out_infinite] w-16 h-16 md:w-24 md:h-24 bg-pink-300 top-[40%] left-1/4 md:left-[15%] rounded-full" />
        <div className="absolute animate-[floating-reverse_3s_ease-in-out_infinite] w-12 h-12 bg-pink-300 top-[63%] left-[65%] rounded-full" />
        <div className="absolute animate-[floating_3s_ease-in-out_infinite] hidden md:block w-16 h-16 bg-[#690f74] top-[78%] right-[10%] rounded-full" />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
