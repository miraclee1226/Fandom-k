import { useState } from "react";
import Navbar from "components/Navbar";
import Layout from "components/Layout";
import mockData from "mockData/femaleData.json";
import AddFavoriteSection from "./AddFavoriteSection";

export default function MyPage() {
  const [idols, setIdols] = useState(mockData);

  return (
    <>
      <Navbar />
      <Layout>
        <AddFavoriteSection idols={idols} />
      </Layout>
    </>
  );
}
