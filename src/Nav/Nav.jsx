import { Link } from "react-router-dom";

export default function Nav(){
    return<>
<nav class="navbar p-0 navbar-expand-lg navbar-light bg-light">
<div className="container">
  <a class="navbar-brand" href="#">Task</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/graph">Graph</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/table">Table</a>
      </li>
    </ul>
   
  </div>
</div>
</nav>    
    
    </>
}