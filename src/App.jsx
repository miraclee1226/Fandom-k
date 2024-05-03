import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "pages/Landing/Landing";
import List from "pages/List";
import MyPage from "pages/MyPage";
import "styles/common.scss";
import "styles/reset.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={<List />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/modal" element={<ModalTest />} />
      </Routes>
    </BrowserRouter>
  );
}
