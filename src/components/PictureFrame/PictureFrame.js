import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import Logo from "../../assets/images/Acoutera.png";
import mountains from "../../assets/images/mountains.jpg";

const PictureFrame = () => {
  const texture = useLoader(THREE.TextureLoader, mountains);
  return (
    <>
      <mesh rotation={[0, 0, 0]} position={[0, 6, -4.9]}>
        <planeBufferGeometry attach='geometry' args={[4.5, 2.5]} />
        <meshStandardMaterial attach='material' color='#3d0505' />
      </mesh>
      <mesh rotation={[0, 0, 0]} position={[0, 6, -4.8]}>
        <planeBufferGeometry attach='geometry' args={[4, 2]} />
        <meshBasicMaterial attach='material' map={texture} />
      </mesh>
    </>
  );
};

export default PictureFrame;
