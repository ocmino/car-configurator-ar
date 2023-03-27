import { PresentationControls, Stage } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import Porsche from "../Porsche";

const Experience = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage environment="sunset" intensity={0.5}>
        <Porsche />
      </Stage>
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
    </PresentationControls>
  );
};

export default Experience;
