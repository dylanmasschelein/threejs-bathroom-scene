import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Vanity from "./components/Vanity/Vanity";
import Shower from "./components/Shower/Shower";
import Floor from "./components/General/Floor";
import Ceiling from "./components/General/Cieling";
import Toilet from "./components/Toilet/Toilet";
import { Suspense, useState } from "react";
import Walls from "./components/General/Walls";
import TowelRack from "./components/TowelRack/TowlRack";
import PictureFrame from "./components/PictureFrame/PictureFrame";
import Button from "./components/General/Button";
import { PerspectiveCamera } from "@react-three/drei";
import ReactHowler from "react-howler";
import toiletFlush from "./assets/sound/zapsplat_household_toilet_modern_flush_62362.mp3";

const App = () => {
  const [flush, setFlush] = useState(false);
  const [toggle, setToggle] = useState(true);

  return (
    <div className='App'>
      <Canvas>
        <OrbitControls position={[10, 10, 10]} />
        <Stars />

        <spotLight position={[15, 15, 15]} angle={0.3} />
        <ambientLight intensity={0.2} />
        <pointLight intensity={1.12} position={[0, 0, 0]} />
        <Suspense fallback={null}>
          <Walls />
          <Ceiling />
          <Floor />
          <Vanity toggle={toggle} />
        </Suspense>
        <Button toggle={toggle} setToggle={setToggle} />
        <Shower toggle={toggle} />
        <Toilet toggle={toggle} flush={flush} setFlush={setFlush} />
        <TowelRack />
        <PictureFrame />
      </Canvas>
      {flush && <ReactHowler src={toiletFlush} playing={true} />}
    </div>
  );
};

export default App;
