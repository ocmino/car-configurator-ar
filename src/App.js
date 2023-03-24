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
          src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
          alt="A 3D model of a car"
          auto-rotate
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"
          ios-src="https://cdn.glitch.com/0e1b3b0e-3e1b-4b0f-9b1f-8b3f2f3f2f1a%2Fcar.usdz?v=1629200000000"
          style={{ width: "100vw", height: "80vh" }}
        ></model-viewer>
      </Modal>

      <Group position="center">
        <Button
          style={{
            position: "fixed",
            top: "95%",
            left: "10%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={open}
        >
          AR
        </Button>
      </Group>
    </div>
  );
}

export default App;
