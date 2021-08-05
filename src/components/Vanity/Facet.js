import * as THREE from "three";

const Handle = ({ position }) => {
  const radiusTop = 0.05;
  const radiusBottom = 0.05;
  const height = 1;
  const radialSegments = 12;

  const handle = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom * 3,
    height,
    radialSegments
  );

  const mount = new THREE.CylinderGeometry(
    radiusTop * 1.5,
    radiusBottom * 1.5,
    height / 2,
    radialSegments
  );

  return (
    <group position={position}>
      <mesh
        rotation={[-Math.PI / -10, 0, 0]}
        geometry={handle}
        position={[0, 2, 0]}
        castShadow
      >
        <meshStandardMaterial color={"gold"} metalness={0.1} />
      </mesh>
      <mesh
        rotation={[-Math.PI / 3, 0, 0]}
        geometry={mount}
        position={[0, 2.2, 0.2]}
        castShadow
      >
        <meshStandardMaterial color={"gold"} metalness={0.1} />
      </mesh>
    </group>
  );
};
export default Handle;
