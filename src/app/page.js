import ModalHome from "@/components/module/modal/ModalHome";
import HomePage from "@/components/template/HomePage";

import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout>

    <div dir="rtl">
      
      <HomePage />
      <ModalHome />
    </div>
    </Layout>
  );
};

export default Home;
