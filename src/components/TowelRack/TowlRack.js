import Post from "./Post";

const TowelRack = () => {
  return (
    <group position={[-6.9, 3, 2.5]} rotation={[0, Math.PI / 2, 0]}>
      {/* Verticals */}
      <Post rotation={[0, 0, 0]} position={[2, 2, 0]} postHeight={2.5} />
      <Post rotation={[0, 0, 0]} position={[0, 2, 0]} postHeight={2.5} />

      {/* Horizontals      */}
      <Post
        rotation={[0, 0, Math.PI / 2]}
        position={[1, 2, 0]}
        postHeight={2.5}
      />
      <Post
        rotation={[0, 0, Math.PI / 2]}
        position={[1, 1.1, 0]}
        postHeight={2.5}
      />
      <Post
        rotation={[0, 0, Math.PI / 2]}
        position={[1, 2.9, 0]}
        postHeight={2.5}
      />

      {/* Mounts */}
      <Post
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 2.9, -0.3]}
        postHeight={0.5}
      />
      <Post
        rotation={[Math.PI / 2, 0, 0]}
        position={[2, 2.9, -0.3]}
        postHeight={0.5}
      />
      <Post
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 1.1, -0.3]}
        postHeight={0.5}
      />
      <Post
        rotation={[Math.PI / 2, 0, 0]}
        position={[2, 1.1, -0.3]}
        postHeight={0.5}
      />
    </group>
  );
};
export default TowelRack;
