import * as THREE from "three";
import { useState } from "react";
import { useLoader } from "@react-three/fiber";
import Logo from "../../assets/images/Acoutera.png";
import mountains from "../../assets/images/mountains.jpg";

const PictureFrame = () => {
  const [toggle, setToggle] = useState(true);
  const texture = useLoader(THREE.TextureLoader, mountains);
  const logo = useLoader(THREE.TextureLoader, Logo);
  return (
    <>
      <mesh rotation={[0, 0, 0]} position={[0, 6, -4.9]}>
        <planeBufferGeometry attach='geometry' args={[4.5, 2.5]} />
        <meshStandardMaterial attach='material' color='#3d0505' />
      </mesh>
      <mesh
        onClick={() => setToggle(!toggle)}
        rotation={[0, 0, 0]}
        position={[0, 6, -4.8]}
      >
        <planeBufferGeometry attach='geometry' args={[4, 2]} />
        <meshBasicMaterial attach='material' map={toggle ? texture : logo} />
      </mesh>
    </>
  );
};

export default PictureFrame;
