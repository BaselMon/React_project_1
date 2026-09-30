import { Link ,useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form"
import { TextField } from "@mui/material"
import { Button } from "@mui/material";
import styled from "styled-components"

const Container = styled.div
    `
    display:flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
    flex-direction: column;
    
    
    
    `
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap:10px;
    border:solid 1px blue;
    border-radius:10px;
    padding:10px;
    color:white;

`

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function saveData(data) {
        console.log(data);
        navigate("/Main");
    }


    return (
        <Container>


            <Form onSubmit={handleSubmit(saveData)}>


                <TextField label="Email"

                    {...register("email", { required: true })} error={!!errors.email} />

                <TextField label="Password" type="password" {...register("password", { required: true })} error={!!errors.password}></TextField>
                
                <Button type="submit" >Submit</Button>

            </Form>

            <br />
            <Link to="/SignUp">SignUp </Link>
        </Container>

    )



}

export default Login 