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
       
          src="./Models/zis101asport1938.gltf"
          ar
          environment-image="shared-assets/environments/moon_1k.hdr"
          poster="shared-assets/models/NeilArmstrong.webp"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
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
