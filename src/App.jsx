import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "pages/Landing";
import List from "pages/List/List";
import MyPage from "pages/MyPage/MyPage";
import "styles/common.scss";
import "styles/reset.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={<List />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
