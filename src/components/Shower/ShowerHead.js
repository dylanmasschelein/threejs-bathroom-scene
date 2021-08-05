import * as THREE from "three";

const ShowerHead = ({ position }) => {
  const height = 4;
  const radialSegments = 50;

  const radiusTop = 0.4;
  const radiusBottom = 3;

  const plumbing = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom / 7.5,
    height,
    radialSegments * 4.16
  );

  const mount = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments * 4.16
  );

  const points = [];
  for (let i = 0; i < 10; ++i) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 4, (i - 5) * 0.2));
  }
  const head = new THREE.LatheGeometry(points);

  return (
    <group position={position}>
      <mesh
        position={[0, 4.55, 0]}
        geometry={mount}
        scale={0.2}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial attach='material' color='gold' />
      </mesh>
      <mesh
        position={[0, 5.3, 0]}
        geometry={plumbing}
        scale={0.2}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial attach='material' color='gold' />
      </mesh>
      <mesh
        position={[0, 4, 0]}
        geometry={head}
        scale={0.15}
        rotation={[0, 0, -Math.PI]}
      >
        <meshStandardMaterial
          attach='material'
          color='gold'
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default ShowerHead;
