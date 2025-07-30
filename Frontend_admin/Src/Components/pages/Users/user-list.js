import React, { useEffect, useState } from "react";
import styles from './user.module.css';
import { Link } from "react-router-dom";

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch("http://localhost:3002/users");
        const responseJSON = await response.json();
        console.log(responseJSON);
        setUsers(responseJSON);
    }

    return (
        <>
            <h1 style={{ marginTop: "10px" }}> I am User List</h1>
            <Link to="/New-Users">New User</Link>
           
                <table>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>Created</th>
                        <th>Modified</th>
                    </tr>
                    {users.map((user) => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{new Date("" + user.created).toDateString()}</td>
                                <td>{new Date("" + user.modified).toUTCString()}</td>
                            </tr>
                        );
                    })}
                    {/*  <tr></tr> */}
                </table>
           
        </>
    );
}

export default UserList;