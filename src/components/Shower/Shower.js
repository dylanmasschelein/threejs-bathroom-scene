import GlassDoor from "./GlassDoor";
import ShowerFloorTile from "./ShowerFloorTile";
import { Suspense } from "react";

const Shower = () => {
  return (
    <>
      <GlassDoor />
      <Suspense>
        <ShowerFloorTile />
      </Suspense>
    </>
  );
};

export default Shower;
