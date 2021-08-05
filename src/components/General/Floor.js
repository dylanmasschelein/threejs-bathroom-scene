import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
// import floor from "./assets/images/floor.jpg";
import floorTile from "../../assets/images/floorTile.jpg";

const Floor = () => {
  const texture = useLoader(THREE.TextureLoader, floorTile);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2.25, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[10.5, 10]} />
      <meshBasicMaterial attach='material' map={texture} />
    </mesh>
  );
};

export default Floor;
