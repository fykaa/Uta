import { Route, Routes } from "react-router-dom";
import { Find, GetStarted } from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/find" element={<Find />} />
      </Routes>
    </>
  );
}
