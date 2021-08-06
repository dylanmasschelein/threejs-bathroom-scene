import * as THREE from "three";

const Handle = ({ position, toggle }) => {
  const radiusTop = 0.05;
  const radiusBottom = 0.05;
  const height = 1;
  const radialSegments = 12;

  const handle = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments
  );

  const mount = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height / 3.5,
    radialSegments
  );

  return (
    <group position={position}>
      <mesh
        rotation={[-Math.PI / -2, 0, -Math.PI / -2]}
        geometry={handle}
        position={[0, 2, 0]}
        castShadow
      >
        <meshStandardMaterial
          color={toggle ? "gold" : "black"}
          metalness={0.5}
        />
      </mesh>
      <mesh
        rotation={[-Math.PI / -2, 0, 0]}
        geometry={mount}
        position={[-0.4, 2, -0.12]}
        castShadow
      >
        <meshStandardMaterial
          color={toggle ? "gold" : "black"}
          metalness={0.5}
        />
      </mesh>
      <mesh
        rotation={[-Math.PI / -2, 0, 0]}
        geometry={mount}
        position={[0.4, 2, -0.12]}
        castShadow
      >
        <meshStandardMaterial
          color={toggle ? "gold" : "black"}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
};
export default Handle;
