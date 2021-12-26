import React from 'react'
import Link from 'next/link'

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark mb-5">
            <div className="container-fluid">
                <Link href={'/'}>
                    <a className="navbar-brand">Accueil</a>
                </Link>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar
