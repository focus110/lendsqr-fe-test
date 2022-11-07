import React from 'react'
import { Link } from 'react-router-dom'

const SearchForm = () => {
    const menu = [
        {
            title: "CUSTOMERS",
            menus: [{ name: "Users", icon: "user", path: "/" }]
        }
    ]
    return (
        <div>
            <div>
                <span></span>
                <span>Switch Organization</span>
                <span></span>
            </div>

            <div>
                <span></span>
                <span>Dashboard</span>
            </div>

            <div>
                <span>CUSTOMERS</span>
                {menu[0].menus.map((item, i) => {
                    return <div>
                        <Link className='' to={item.path}>
                            <span>{item.icon}</span>
                            <span>{item.name}</span>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SearchForm