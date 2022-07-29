import React, { useEffect } from "react";
import Router from "next/router";

const Tools = () => {
  //...
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/tools") {
      Router.push("/tools/neumorphism");
    }
  });
  //...
};

export default Tools;