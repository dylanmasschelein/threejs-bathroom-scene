import * as THREE from "three";
const Ceiling = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 10, 0]}>
      <planeBufferGeometry attach='geometry' args={[15, 10]} />

      <meshBasicMaterial
        attach='material'
        color='white'
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Ceiling;
