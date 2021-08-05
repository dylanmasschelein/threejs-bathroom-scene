import React from "react";
import Base from "./Base";
import Drawer from "./Drawer";
import VanityHandles from "./VanityHandles";
import Sink from "./Sink";
import Facet from "./Facet";

const Vanity = () => {
  return (
    <>
      <Base />
      <Drawer position={[-5.5, 3, -2.5]} />
      <Drawer position={[-5.5, 1.3, -2.5]} />

      <Facet position={[-5.5, 2.9, -4.8]} />

      <VanityHandles />

      <Sink />
    </>
  );
};

export default Vanity;
