import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Components/Experience";
import Configurator from "./Components/Configurator";
import {  Button, Group } from "@mantine/core";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function ModelViewer() {
  return (
    <model-viewer
      src="./Models/zis101asport1938.gltf"
      alt="A 3D model of a car"
      auto-rotate
      camera-controls
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="auto"
      style={{ width: "100vw", height: "80vh" }}
    ></model-viewer>
  );
}

function CarShow() {
  return (
    <div className="App">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" args={["#101010"]} />
        <fog attach="fog" args={["#101010", 10, 20]} />
        <Environment preset="sunset" />
        <Experience />
      </Canvas>
      <Configurator />

      <Group position="center">
        <Link to="/modelviewer">
          <Button
            style={{
              position: "fixed",
              top: "95%",
              left: "10%",
              transform: "translate(-50%, -50%)",
            }}
          >
            AR
          </Button>
        </Link>
      </Group>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CarShow />} />
          <Route path="/modelviewer" element={<ModelViewer />} />
        </Routes>
      </Router>
    </div>
  );
}
