import { Provider, atom, createStore, useAtom } from "jotai";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "pages/Landing";
import List from "pages/List";
import MyPage from "pages/MyPage";
import "styles/common.scss";
import "styles/reset.scss";

export const creditAtom = atom(3000000);

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
