import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { useEffect } from "react";

const MainLayout = () => {

  // Dynamic title
  const loc = useLocation()
  useEffect(()=>{
    const path = loc.pathname;
    if(path === "/"){
      document.title = "Donation -Home"
    }
    else if(loc.state){
      document.title = `${loc.state}`
    }
    else if(path === "/donation"){
      document.title = "My -Donations"
    }
    else{
      document.title = `Donation ${path.replace("/", "-")}`
    }
  },[loc.pathname, loc.state])
  // Dynamic title End

  return (
    <div>
      <Header></Header>
      <div className="min-h-[75dvh]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
