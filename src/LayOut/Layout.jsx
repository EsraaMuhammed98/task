import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function LayOut(){
return <>
<Nav/>
<div className="container">

<Outlet></Outlet>
</div>


</>
}