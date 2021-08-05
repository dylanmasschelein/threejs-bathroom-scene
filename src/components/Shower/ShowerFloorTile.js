import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
// import floor from "./assets/images/floor.jpg";
import showerFloorTile from "../../assets/images/showerFloorTile.jpg";

const ShowerFloorTile = () => {
  const texture = useLoader(THREE.TextureLoader, showerFloorTile);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[5.25, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[4.5, 10]} />
      <meshBasicMaterial attach='material' map={texture} />
    </mesh>
  );
};

export default ShowerFloorTile;
