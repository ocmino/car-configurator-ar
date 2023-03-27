import { OrbitControls } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import Retro from "../Retro";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Retro />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </>
  );
};

export default Experience;
