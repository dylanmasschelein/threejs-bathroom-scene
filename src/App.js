import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Box from "./Box";
const App = () => {
  return (
    <div className='App'>
      <Canvas>
        <Box />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
