import React from "react";
import Base from "./Base";
import Drawer from "./Drawer";
import VanityHandles from "./VanityHandles";
import Sink from "./Sink";
import Facet from "./Facet";
import { useState } from "react";

const Vanity = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Base />
      <Drawer
        open={open}
        setOpen={setOpen}
        position={!open ? [-5.5, 3, -3.2] : [-5.5, 3, -1]}
      />
      <Drawer open={open} setOpen={setOpen} position={[-5.5, 1.3, -3.3]} />

      <Facet position={[-5.5, 2.9, -4.8]} />

      <VanityHandles open={open} />

      <Sink />
    </>
  );
};

export default Vanity;
