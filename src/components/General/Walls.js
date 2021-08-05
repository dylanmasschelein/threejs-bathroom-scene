import Wall from "./Wall";

const Walls = () => {
  return (
    <>
      <Wall position={[0, 5, -5]} rotation={[0, 0, 0]} args={[15, 10]} />
      <Wall
        position={[-7.5, 5, 0]}
        rotation={[0, -Math.PI / -2, 0]}
        args={[10, 10]}
      />
      <Wall
        position={[7.5, 5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        args={[10, 10]}
      />
    </>
  );
};
export default Walls;
