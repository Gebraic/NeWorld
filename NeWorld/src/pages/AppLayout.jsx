import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Home(){
  return (
    <>
      <Navbar />
      <div className="pt-[10rem] flex justify-center">
        <Outlet/>
      </div>
    </>
  );
}