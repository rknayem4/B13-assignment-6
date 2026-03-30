
import "./app.css";
import Banner from "./component/Banner/Banner";
import Nevber from "./component/Navbar/Nevber";
import Status from "./component/Status/Status";
import Steps from "./component/Steps/Steps";

export function App() {
  return (
    <>
      <Nevber></Nevber>
      <Banner></Banner>
      <Status></Status>

      <Steps></Steps>
      
    </>
  );
}
