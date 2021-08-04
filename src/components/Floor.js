import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
// import floor from "./assets/images/floor.jpg";
import hardwood from "../assets/images/hardwood.png";

const Floor = () => {
  const texture = useLoader(THREE.TextureLoader, hardwood);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[15, 10]} />
      <meshBasicMaterial attach='material' map={texture} />
    </mesh>
  );
};

export default Floor;
