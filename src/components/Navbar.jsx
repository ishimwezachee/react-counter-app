import React, { Component } from 'react'

// stateless Functional Component
// u can use function when you are dealing with simple stateless component
const NavBar = (props) => {
    return (
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
            Navbar  
            <span className = "badge badge-pill badge-secondary" >
                {props.totalCounters}
            </span>
           </a>
</nav>
          );
}

// class NavBar extends Component {
//     render() { 
        
//     }
// }
 
export default NavBar;