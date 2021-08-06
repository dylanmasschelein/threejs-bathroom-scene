import Drop from "./Drop";
import { useEffect, useState } from "react";

const WaterDrops = () => {
  let drops = [];
  const renderDrops = (num) => {
    for (let i = 0; i <= num; i++) {
      drops.push({ i });
    }
  };
  renderDrops(300);
  console.log(drops);
  return (
    <>
      <group position={[4, 5, -2]}>
        {drops.map((drop) => (
          <Drop key={drop.i} />
        ))}
      </group>
    </>
  );
};

export default WaterDrops;
