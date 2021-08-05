import * as THREE from "three";

const Control = ({ position }) => {
  const radius = 2.0;
  const height = 3.4;
  const radialSegments = 50;
  const cone = new THREE.ConeGeometry(radius, height, radialSegments);

  const radiusTop = 0.4;
  const radiusBottom = 0.6;

  const handle = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments * 4.16
  );

  return (
    <group position={position}>
      <mesh
        position={[0, 4, 0]}
        geometry={cone}
        scale={0.2}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial attach='material' color='gold' />
      </mesh>
      <mesh
        position={[-0.1, 4.3, 0.25]}
        geometry={handle}
        scale={0.2}
        rotation={[0, 0, -Math.PI / 1.1]}
      >
        <meshStandardMaterial attach='material' color='black' />
      </mesh>
    </group>
  );
};

export default Control;
