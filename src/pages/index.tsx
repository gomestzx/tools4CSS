import type { NextPage } from "next";
import { SEO } from "../components/SEO";
import React from "react";
import Hero from "../components/Sections/Hero/Hero";
import Tools from "../components/Sections/Tools/Tools";
import GithubStargazers from "@/components/GithubStargazers/GithubStargazers";

const Home: NextPage = () => {
  return (
    <div>
      <SEO
        shouldExcludeTitleSuffix
        title="Tools4CSS - Free CSS Generators"
        description="Free CSS Generators. Our tools are designed to help you streamline your code development with dynamic and intuitive CSS generators."
      />
      <Hero />
      <Tools />
      <GithubStargazers />
    </div>
  );
};

export default Home;
