import { Link } from "react-router-dom";

export default function Nav(){
    return<>
<nav className="navbar p-0 navbar-expand-lg navbar-light bg-light">
<div className="container">
  <Link  className="navbar-brand" to="#">Task</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto"> 
      <li className="nav-item active">
        <Link  className="nav-link" to="/">Graph</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/table">Table</Link>
      </li>
    </ul>
    
  </div>
</div>
</nav>    
    
    </>
}