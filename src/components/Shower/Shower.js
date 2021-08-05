import GlassDoor from "./GlassDoor";
import Control from "./Control";
import ShowerFloorTile from "./ShowerFloorTile";
import ShowerHead from "./ShowerHead";
import { Suspense, useState } from "react";
import WaterDrops from "./WaterDrops";

const Shower = () => {
  const [water, setWater] = useState(true);
  return (
    <>
      <GlassDoor position={[3, 4, -2.5]} opacity={0.7} />
      <GlassDoor position={[3.1, 4, 0]} opacity={0.3} />
      <Control setWater={setWater} water={water} position={[5.5, 0.8, -4.6]} />
      <ShowerHead position={[5.5, 4.25, -1]} />
      {water && <WaterDrops />}
      <Suspense>
        <ShowerFloorTile />
      </Suspense>
    </>
  );
};

export default Shower;
