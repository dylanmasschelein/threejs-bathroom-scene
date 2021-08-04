import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = () => {
  const meshRef = useRef();
  useFrame(() => (meshRef.current.rotation.z += 0.01));
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <boxBufferGeometry attach='geometry' position={[10, 10, 10]} /> */}
      <meshLambertMaterial attach='material' color='blue' />
    </mesh>
  );
};
{
  /* <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 2, 3]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh> */
}

export default Box;
