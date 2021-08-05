import * as THREE from "three";

const Post = ({ position, rotation, postHeight }) => {
  const radiusTop = 0.1;
  const radiusBottom = 0.1;
  const height = postHeight;
  const radialSegments = 12;

  const post = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments
  );

  //   const mount = new THREE.CylinderGeometry(
  //     radiusTop,
  //     radiusBottom,
  //     height / 3.5,
  //     radialSegments
  //   );

  return (
    <>
      <mesh rotation={rotation} geometry={post} position={position} castShadow>
        <meshStandardMaterial color={"grey"} metalness={0.1} />
      </mesh>
    </>
  );
};
export default Post;
