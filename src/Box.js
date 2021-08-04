// import { useBox } from "@react-three/cannon";

const Box = (props) => {
  //   const meshRef = useRef();
  //   const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0], ...props }));
  //   useFrame(() => (meshRef.current.rotation.z += 0.01));
  return (
    <mesh
      //   onClick={() => {
      //     api.velocity.set(0, 2, 0);
      //   }}
      //   ref={ref}
      position={[0, 0.5, 0]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' color='blue' />
    </mesh>
  );
};

export default Box;
