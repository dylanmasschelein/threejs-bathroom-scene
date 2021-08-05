import * as THREE from "three";

const Sink = () => {
  const points = [];
  for (let i = 0; i < 10; ++i) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * 0.8));
  }
  const sink = new THREE.LatheGeometry(points);
  return (
    <mesh geometry={sink} position={[-5.5, 4, -3.6]} scale={0.2}>
      <meshStandardMaterial
        color='#dedcdc'
        metalness={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Sink;
