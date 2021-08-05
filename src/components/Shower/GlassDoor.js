const GlassDoor = () => {
  return (
    <mesh position={[3, 4, -2.5]}>
      <boxGeometry args={[0, 8, 5]} />
      <meshPhongMaterial
        attach='material'
        color='0xffffff'
        opacity={0.5}
        transparent={true}
      />
    </mesh>
  );
};

export default GlassDoor;
