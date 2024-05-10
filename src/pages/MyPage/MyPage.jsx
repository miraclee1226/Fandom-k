import Navbar from "components/Navbar";
import Layout from "components/Layout";
import AddFavoriteSection from "./AddFavoriteSection";
import AddedFavoriteSection from "./AddedFavoriteSection";

export default function MyPage() {
  return (
    <>
      <Navbar />
      <Layout page="myPage">
        <AddedFavoriteSection />
        <AddFavoriteSection />
      </Layout>
    </>
  );
}
