import React from 'react'
import logo from "../../assests/images/logo.svg"
import SearchForm from '../SearchForm/SearchForm'

const Nav = () => {
    return (
        <div className="nav">
            <img className="logo" src={logo} alt="lendsqr logo" />
            <SearchForm />
            <div>
                <span>Docs</span>
                <span>bellicon</span>
                <span>
                    <img className="logo" src={logo} alt="lendsqr logo" />
                    <span>Adedeji</span>
                    <span>dropdown icon</span>
                </span>
            </div>
        </div>
    )
}

export default Nav