import Navbar from "components/Navbar/Navbar";
import Layout from "components/Layout/Layout";
import CreditSection from "./CreditSection";
import SupportSection from "./SupportSection";
import ChartSection from "./ChartSection";

export default function List() {
  return (
    <>
      <Navbar />
      <Layout>
        <CreditSection />
        <SupportSection />
        <ChartSection />
      </Layout>
    </>
  );
}
