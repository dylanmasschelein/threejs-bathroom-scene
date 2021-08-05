const Base = (props) => {
  return (
    <mesh position={[-5.5, 2, -3.75]}>
      <boxGeometry args={[4, 4, 2.5]} />
      <meshStandardMaterial attach='material' color='white' />
    </mesh>
  );
};

export default Base;
