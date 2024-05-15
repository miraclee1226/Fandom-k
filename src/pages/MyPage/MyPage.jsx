import { useAtomValue } from "jotai";
import Navbar from "components/Navbar";
import Layout from "components/Layout";
import favoriteIdolsAtom from "context/favoriteIdols";
import AddFavoriteSection from "./AddFavoriteSection";
import AddedFavoriteSection from "./AddedFavoriteSection";

export default function MyPage() {
  const favoriteIdols = useAtomValue(favoriteIdolsAtom);

  return (
    <>
      <Navbar />
      <Layout page="myPage">
        {favoriteIdols.length !== 0 && <AddedFavoriteSection />}
        <AddFavoriteSection />
      </Layout>
    </>
  );
}
