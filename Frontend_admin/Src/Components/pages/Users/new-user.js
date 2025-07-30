import React, { useEffect, useState } from "react";

const NewUser = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");

    useEffect(() => {
        console.log("Username = " + username);
        console.log("Password = " + password);
        console.log("Email = " + email);
        console.log("Firstname = " + firstname);
        console.log("Lastname = " + lastname);
    }, [username, password, email, firstname, lastname]);

    return (
        <>
            <h1>I am New User</h1>
            <form onSubmit={async (event) => {
                event.preventDefault();
                
                console.log("Username = " + username);
                console.log("Password = " + password);
                console.log("Email = " + email);
                console.log("Firstname = " + firstname);
                console.log("Lastname = " + lastname);

                const data = {
                    username: username,
                    password: password,
                    email: email,
                    first_name: firstname,
                    last_name: lastname,
                };

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body : JSON.stringify(data),
                };

                const response = await fetch ("http://localhost:3004/users" , requestOptions);
                const responseJSON = await response.json();
                console.log("data entered " , responseJSON);
            }}>
                <label for="username">UserName : </label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }} /> <br />
                <label for="password">Password : </label>
                <input
                    id="password"
                    name="password"
                    type="text"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }} /><br />
                <label for="email">Email : </label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }} /> <br />
                <label for="first-name">First-Name : </label>
                <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    onChange={(event) => {
                        setFirstName(event.target.value);
                    }} /> <br />
                <label for="last-name">Last-Name : </label>
                <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    onChange={(event) => {
                        setLastName(event.target.value);
                    }} /> <br />
                <input type="submit" value="submit" />
            </form>
        </>
    );
}

export default NewUser;