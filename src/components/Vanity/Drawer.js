const Drawer = ({ position, open, setOpen }) => {
  return (
    <mesh
      position={position}
      rotation={[0, 0, 0]}
      onClick={() => setOpen(!open)}
    >
      <boxGeometry args={[3.5, 1.25, 2]} />
      <meshStandardMaterial attach='material' color='#dedcdc' />
    </mesh>
  );
};

export default Drawer;
