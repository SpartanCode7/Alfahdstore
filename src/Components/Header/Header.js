import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
        <div className="brand__icon">
            <Link to="">
                {/* <img src="https://alfahdstore.com/wp-content/uploads/2022/06/new-logo-1.png" alt="Logo" /> */}
            </Link>
        </div>
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/bedding">Bedding</Link>
            <Link to="/cushions">Cushions</Link>
            <Link to="/sofacovers">Sofa Covers</Link>
            <Link to="/chaircover">Chair Cover</Link>
            <Link to="/waterproof">Waterproof</Link>
            <Link to="/storagebags">Storage Bags</Link>
            <Link to="/accessories">Accessories</Link>
        </div>
        <div className="header__right">
            <Link to="/login">Login</Link>
            <Link to="/search">Search</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </div>
  )
}

export default Header