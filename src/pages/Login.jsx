import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { colors, TextField } from "@mui/material"
import { Button } from "@mui/material";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function saveData(data) {
        console.log(data)
    }


    return (
        <>


            <form onSubmit={handleSubmit(saveData)}>


                <TextField label="Email"

                    {...register("email", { required: true })} error={!!errors.email} />

                <TextField label="Password" type="password" {...register("password", { required: true })} error={!!errors.password}></TextField>

                <Button type="submit" >Submit</Button>

            </form>


            <Link to="/SignUp">SignUp </Link>
        </>

    )



}

export default Login 