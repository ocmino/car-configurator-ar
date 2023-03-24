import { PresentationControls, Stage } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import Car from "../Car";

const Experience = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage environment="city" intensity={0.5}>
        <Car />
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.64, 0]} receiveShadow>
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
    </PresentationControls>
  );
};

export default Experience;
