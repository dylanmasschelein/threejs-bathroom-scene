import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
// import { Physics } from "@react-three/cannon";
import Vanity from "./components/Vanity";
import Floor from "./components/Floor";
import Wall from "./components/Wall";
import Drawer from "./components/Drawer";
import VanityHandles from "./components/VanityHandles";

const App = () => {
  return (
    <div className='App'>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <pointLight intensity={1.12} position={[0, 0, 0]} />
        <Vanity />

        <Drawer position={[-5.5, 3, -2.5]} />
        <Drawer position={[-5.5, 1.3, -2.5]} />

        <VanityHandles />

        <Suspense fallback={null}>
          <Floor />
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
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
