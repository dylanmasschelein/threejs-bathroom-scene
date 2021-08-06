import * as THREE from "three";
import Flush from "./Flush";

const Toilet = ({ flush, toggle, setFlush }) => {
  const points = [];
  for (let i = 0; i < 10; ++i) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * 0.4));
  }
  const bowl = new THREE.LatheGeometry(points);

  return (
    <>
      <group position={[0, 0, -3.3]}>
        <mesh
          rotation={[0, 0, 0]}
          geometry={bowl}
          position={[0, 1.5, 0.3]}
          scale={0.2}
        >
          <meshStandardMaterial
            attach='material'
            color='#dedcdc'
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh position={[0, 0.5, 0]}>
          <boxBufferGeometry attach='geometry' args={[1.5, 1, 1.4]} />
          <meshStandardMaterial attach='material' />
        </mesh>
        <mesh position={[0, 1, -1.2]}>
          <boxBufferGeometry attach='geometry' args={[2.5, 3, 1]} />
          <meshStandardMaterial attach='material' />
        </mesh>
        <mesh position={[0, 2.5, -1.2]}>
          <boxBufferGeometry attach='geometry' args={[2.8, 0.2, 1]} />
          <meshStandardMaterial attach='material' color='#dedcdc' />
        </mesh>
      </group>

      <Flush toggle={toggle} setFlush={setFlush} flush={flush} />
    </>
  );
};

export default Toilet;
