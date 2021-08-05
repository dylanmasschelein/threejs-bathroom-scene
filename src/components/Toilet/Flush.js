import * as THREE from "three";

const Flush = () => {
  const radiusTop = 0.05;
  const radiusBottom = 0.05;
  const height = 0.6;
  const radialSegments = 12;

  const handle = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments
  );
  return (
    <mesh
      rotation={[-Math.PI / -2, -Math.PI / -1.1, -Math.PI / -2]}
      geometry={handle}
      position={[-0.8, 2.2, -3.9]}
      castShadow
    >
      <meshStandardMaterial color={"gold"} metalness={0.1} />
    </mesh>
  );
};

export default Flush;
