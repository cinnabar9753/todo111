import { Link, Outlet } from "react-router-dom";
import "./Layout.css"
function Layout() {
    return(
        <div className="todo">
            <h1>MY TODO</h1>
            <nav>
                <Link to="/">Home</Link>
                <br></br>
                <Link to="/about">About</Link>
                <br></br>
                <Link to="/done">Done</Link>
            </nav>
            <div className="content">
                <Outlet></Outlet>
            </div>
        </div>
    )
    
}



export default Layout;