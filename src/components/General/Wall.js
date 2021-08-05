import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const Wall = ({ position, args, rotation, tiles }) => {
  const texture = useLoader(THREE.TextureLoader, tiles);
  return (
    <mesh rotation={rotation} position={position}>
      <planeBufferGeometry attach='geometry' args={args} />
      <meshBasicMaterial attach='material' map={texture} />
    </mesh>
  );
};

export default Wall;
