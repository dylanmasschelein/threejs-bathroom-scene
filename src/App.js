import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
// import { Physics } from "@react-three/cannon";
import Box from "./Box";
import Floor from "./Floor";
import Wall from "./Wall";

const App = () => {
  return (
    <div className='App'>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <pointLight intensity={1.12} position={[0, 0, 0]} />
        <Box />
        <Suspense fallback={null}>
          <Floor />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
