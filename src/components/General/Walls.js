import Wall from "./Wall";
import wallTiles from "../../assets/images/wallTiles.jpg";
import ShowerTile from "../../assets/images/ShowerTile.jpg";

const Walls = () => {
  return (
    <>
      <Wall
        position={[-2.25, 5, -5]}
        rotation={[0, 0, 0]}
        args={[10.5, 10]}
        tiles={wallTiles}
      />
      <Wall
        position={[5.25, 5, -5]}
        rotation={[0, 0, 0]}
        args={[4.5, 10]}
        tiles={ShowerTile}
      />
      <Wall
        position={[-7.5, 5, 0]}
        rotation={[0, -Math.PI / -2, 0]}
        args={[10, 10]}
        tiles={wallTiles}
      />
      <Wall
        position={[7.5, 5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        args={[10, 10]}
        tiles={ShowerTile}
      />
    </>
  );
};
export default Walls;
