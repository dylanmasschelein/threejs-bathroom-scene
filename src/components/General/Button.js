import * as THREE from "three";

const Button = ({ toggle, setToggle }) => {
  const radiusTop = 0.1;
  const radiusBottom = 0.1;
  const height = 0.6;
  const radialSegments = 12;

  const handle = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments
  );
  return (
    <group>
      <mesh position={[-7.4, 5, 4]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.2]} />
        <meshStandardMaterial attach='material' color='grey' />
      </mesh>
      <mesh
        onClick={() => setToggle(!toggle)}
        rotation={toggle ? [0, 0, Math.PI / 1.3] : [0, 0, Math.PI / 2.9]}
        geometry={handle}
        position={toggle ? [-7.2, 5.1, 4.1] : [-7.2, 4.9, 4.1]}
        castShadow
      >
        <meshStandardMaterial attach='material' color='red' />
      </mesh>
    </group>
  );
};

export default Button;
