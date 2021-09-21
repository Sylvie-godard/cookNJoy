import React from 'react'

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark mb-5">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar
