const Drawer = ({ position }) => {
  return (
    <mesh position={position} rotation={[0, 0, 0]}>
      <boxGeometry args={[3.5, 1.25, 0.3]} />
      <meshStandardMaterial attach='material' color='#dedcdc' />
    </mesh>
  );
};

export default Drawer;
