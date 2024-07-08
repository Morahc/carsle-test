import React from "react";
import ReactDOM from "react-dom/client";
import { RoomProvider } from "./context/RoomContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Room } from "./pages/Room.tsx";
import "./App.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoomProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>
      </RoomProvider>
    </BrowserRouter>
  </React.StrictMode>
);
