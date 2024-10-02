import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { AnimatedWoman } from "./AnimatedWoman";
// import { MeshStandardMaterial, PlaneGeometry } from "three";

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <ContactShadows blur={2} />
      <OrbitControls />
      <mesh rotation-x={-Math.PI / 2} position-y={-0.001}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={'#f0f0f0'} />
      </mesh>
      <AnimatedWoman />
    </>
  );
};
