import { useState, type JSX } from "react";

import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

export function RouteElement({ path }: { path: string }) {
  const [pathsAllowed] = useState(["/login", "/gallery", "/home"]);

  const paths: { [key: string]: JSX.Element } = {
    "/login": <Login />,
    "/gallery": <Gallery />,
    "/home": <Home />,
  };

  const pathF: string =
    pathsAllowed.find((rota) => `/${path}`.includes(rota)) || "";
  if (!pathF) {
    return <Navigate to="/login" />;
  } else {
    return paths[pathF];
  }
}

export function Redirect() {
  return <Navigate to="/home" />;
}
