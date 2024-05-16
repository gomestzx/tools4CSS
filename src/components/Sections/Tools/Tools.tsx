import React from "react";
import Card from "../../Card/Card";

const Tools = () => {
  return (
    <div className="w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap mb-4">
      <br />
      <div className="w-auto md:w-full mt-4 font-GilroyMedium text-lg lg:mx-0 mb-6">
        <span
          className="text-2xl text-center"
          style={{
            backgroundImage: "linear-gradient(80deg, #1D4ED8, #4972d8 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 0.25em",
            backgroundPosition: "0 120%",
          }}
        ></span>
        <h1
          className={` lg:leading-08 text-6xl xl:text-9xl lg:text-6xl text-center mt-0 lg:mt-6 gap-5 font-GilroyBold`}
          id="generators"
        >
          CSS Generators
        </h1>
        <h3 className=" text-slate-900 text-center text-xl md:text-2xl mt-2 font-GilroyMedium lg:pr-4 ">
          Discover a variety of CSS generators <br /> to simplify your
          development process
        </h3>
      </div>
      <div className="flex flex-wrap">
        <Card
          title="Background Gradient"
          slug="background-gradient"
          img="1.png?version="
        />
        <Card title="Text Gradient" slug="text-gradient" img="2.png?version=" />
        <Card
          title="Underline Gradient"
          slug="underline-gradient"
          img="3.png"
        />
        <Card
          title="Glassmorphism Generator"
          slug="glassmorphism"
          img="4.png"
        />
        <Card
          title="Neumorphism Generator"
          slug="neumorphism"
          img="5.png?version="
        />
        <Card
          title="Scrollbar Generator"
          slug="scrollbar-generator"
          img="scrollbar-generator.png?version=2"
        />
      </div>
      <div className="w-auto md:w-full mt-8 font-GilroyMedium text-lg lg:mx-0 mb-6">
        <h1 className="lg:leading-08 text-6xl xl:text-9xl lg:text-6xl text-center mt-0 lg:mt-6 gap-5 font-GilroyBold">
          CSS Tools
        </h1>
        <h3 className="text-slate-900 text-center text-xl md:text-2xl mt-2 font-GilroyMedium lg:pr-4">
          Explore powerful CSS tools to<br /> enhance your styling
          capabilities
        </h3>
      </div>
      <div className="flex flex-wrap w-full">
        <Card title="Gradient Pallete" slug="gradient-pallete" img="6.png" />
        <Card
          title="CSS Formatter"
          slug="css-formatter"
          img="css-formatter.png?version="
        />
      </div>
    </div>
  );
};

export default Tools;
