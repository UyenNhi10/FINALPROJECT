import Head from "next/head";
import CourseDetailsMain from "../components/CourseDetails/CourseDetailsMain";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header";

export default function CourseDetails() {
  return (
    <>
      <Head>
        <title>Product Details</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>

      <Header />
      <CourseDetailsMain />
      <Footer />
    </>
  );
}
