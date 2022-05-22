import Banner from "./Banner"
import Footer from "./Footer"
import PreviewMusic from "./PreviewMusic"
import PreviewVideos from "./PreviewVideos"
import PreviewShop from "./PreviewShop"
import Subscribe from "./Subscribe";

function AppIndex() {

  return (
    <>
    <Banner />
    <PreviewMusic />
    <PreviewShop />
    <PreviewVideos />
    <Subscribe />
    <Footer />
    </>
  );
}

export default AppIndex;
