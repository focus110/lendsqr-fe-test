import React from 'react'

const Users = () => {
    return (
        <div>
            <h1>Users</h1>
            <div className=''>
                <div>
                    <span></span>
                    <h2>USERS</h2>
                    <p>2,453</p>
                </div>

                <div>
                    <span></span>
                    <h2>ACTIVE USERS</h2>
                    <p>2,453</p>
                </div>

                <div>
                    <span></span>
                    <h2>USERS WITH LOAD</h2>
                    <p>2,453</p>
                </div>

                <div>
                    <span></span>
                    <h2>USERS WITH SAVINGS</h2>
                    <p>2,453</p>
                </div>
            </div>

            <table>
                <tr>
                    <th>
                        <span>ORGANIZATION</span>
                        <span>icon</span>
                    </th>
                    <th>
                        <span>USERNAME</span>
                        <span>icon</span>
                    </th>
                    <th>
                        <span>EMAIL</span>
                        <span>icon</span>
                    </th>
                    <th>
                        <span>PHONE NUMBER</span>
                        <span>icon</span>
                    </th>
                    <th>
                        <span>DATE JOINED</span>
                        <span>icon</span>
                    </th>
                    <th>
                        <span>STATUS</span>
                        <span>icon</span>
                    </th>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08160780928</td>
                    <td>Apr 30, 2020 10:00 AM</td>
                    <td>Pending</td>
                    <td>more options icon</td>
                </tr>
            </table>

            <div>
                <div><p>Showing</p>
                    <div>
                        <span>100</span>
                        <span>dropdown icon</span>
                    </div>
                    <p>out of 100</p>
                </div>
                <div>
                    <span>left icon</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>...</span>
                    <span>15</span>
                    <span>16</span>
                    <span>right icon</span>
                </div>
            </div>
        </div>
    )
}

export default Users