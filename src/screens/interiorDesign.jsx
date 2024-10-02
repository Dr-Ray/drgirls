import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";

const InteriorDesign = () => {
  return (
    <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  )
}

export default InteriorDesign