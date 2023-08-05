import "./App.css";



//router
import { Routes, Route } from "react-router-dom";
import Homepages from "./pages/home/Homepages";
import Viewpages from "./pages/view/Viewpages"
import Shoppages from "./pages/shop/Shoppages"
import Bookingpages from "./pages/booking/Bookingpages"
import Newspages from "./pages/news/Newspages"

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponents from "./components/navbar/Navbarcomponents";
import Footercomponents from "./components/footer/Footercomponents";

function App() {

  return (
    <>
    <Navbarcomponents/>
      <Routes>
        <Route path="/" element={<Homepages />}/>
        <Route path="/view" element={<Viewpages />}/>
        <Route path="/shop" element={<Shoppages />}/>
        <Route path="/booking" element={<Bookingpages />}/>
        <Route path="/news" element={<Newspages />}/>
      </Routes>
    <Footercomponents/>
    </>
  );
}

export default App;
