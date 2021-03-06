import * as THREE from "three";

const Drops = () => {
  const radius = 7.2;
  const widthSegments = 28;
  const heightSegments = 30;
  const drop = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

  const randomDrop = () => {
    return Math.random() * 3;
  };

  return (
    <mesh
      position={[randomDrop(), randomDrop(), randomDrop()]}
      geometry={drop}
      scale={0.0075}
    >
      <meshStandardMaterial attach='material' color='blue' />
    </mesh>
  );
};

export default Drops;
