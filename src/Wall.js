import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import wallTiles from "./assets/images/wallTiles.jpg";

const Wall = ({ position, args, rotation }) => {
  const texture = useLoader(THREE.TextureLoader, wallTiles);
  return (
    <mesh rotation={rotation} position={position}>
      <planeBufferGeometry attach='geometry' args={args} />
      <meshBasicMaterial attach='material' map={texture} />
    </mesh>
  );
};

export default Wall;
