import { useEffect, useState } from "react"

function Main() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))



    }, [])
    return (
        <>
            {users.map(user =>
                <div key={user.id}>
                    {user.name}
                </div>
            )}
        </>
    )
}

export default Main