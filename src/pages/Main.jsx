import { useEffect, useState } from "react"
import styled from "styled-components"

const Container=styled.div`

display: grid;
    grid-template-columns: repeat(3, 250px);

gap:40px;
    justify-content: center;
align-items:center;
height:100vh

`

const Card = styled.div`
    border: 1px solid white;
    border-radius: 10px;
    padding: 15px;
    width: 250px;
`

function Main() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))



    }, [])
    return (
        <Container>
            {users.map(user =>
                <Card key={user.id}>
                    {user.name}
                </Card>
            )}
        </Container>
    )
}

export default Main