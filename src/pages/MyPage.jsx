import styles from "pages/MyPage.module.scss";
import Navbar from "components/Navbar/Navbar";
import Layout from "components/Layout/Layout";

export default function MyPage() {
  return (
    <>
      <Navbar />
      <Layout>
        <AddFavoriteSection />
        <AddFavoriteSection />
      </Layout>

      {/* <Button>후원하기</Button>
      <Button disabled>후원하기</Button>
      <Button size="sm">차트 투표하기</Button>
      <Button.Border>더 보기</Button.Border>
      <Button.Arrow direction="left" />
      <Button.Arrow direction="right" size="lg" />
      <Button.Round>+ 추가하기</Button.Round>
      <Button.Radio /> */}
    </>
  );
}

function AddFavoriteSection() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          관심 있는 아이돌을 추가해보세요.
        </h2>
        <div className={styles.sectionContent}></div>
      </section>
    </>
  );
}
