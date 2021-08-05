const GlassDoor = ({ position, opacity }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[0, 8, 5]} />
      <meshPhongMaterial
        attach='material'
        color='0xffffff'
        opacity={opacity}
        transparent={true}
      />
    </mesh>
  );
};

export default GlassDoor;
