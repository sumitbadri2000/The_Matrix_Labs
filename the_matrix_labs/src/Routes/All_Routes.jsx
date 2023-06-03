import { Routes, Route } from "react-router-dom";
import Home from "../Component/Home";
import Pair from "../Component/Pair";
import Token from "../Component/Token";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/token" element={<Token />}></Route>
        <Route path="/pair" element={<Pair />}></Route>
      </Routes>
    </>
  );
}
