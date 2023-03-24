import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Components/Experience";
import Configurator from "./Components/Configurator";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

function App() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="App">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" args={["#101010"]} />
        <fog attach="fog" args={["#101010", 10, 20]} />
        <Environment preset="sunset" />
        <Experience />
      </Canvas>
      <Configurator />
      <Modal opened={opened} onClose={close} fullScreen>
        <model-viewer
        style={{width: "100vw", height: "100vh"}}
          src="./Models/zis101asport1938.gltf"
          alt="A 3D model of a car"
          auto-rotate
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"
          >

          </model-viewer>
      </Modal>

      <Group position="center">
        <Button 
        style={
          {
            position: "fixed",
            top: "95%",
            left: "10%",
            transform: "translate(-50%, -50%)",
       

             }
        }
        onClick={open}>AR</Button>
      </Group>
    </div>
  );
}

export default App;
