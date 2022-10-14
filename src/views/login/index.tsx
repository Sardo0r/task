import { Button, Container, Input, Stack } from "@mantine/core"
import { useContext, useState } from "react"
import { Navigate, useLocation, useNavigation } from "react-router-dom"
import { Con } from "../.."
import request from "../../api"
import { saveState } from "../../utils/storage"

const Login = () => {
    const [state, setState] = useState({ phone: '', password: '' })
    // const location = useHistory()
    const { setValues, values } = useContext(Con().context)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        request.public.post('auth/login/', state).then((res) => {
            console.log({ res })
            localStorage.setItem('user', JSON.stringify({ isLoggedIn: true, token: res.data.data }))
            setValues({ isLoggedIn: true, token: res.data.data })

        })
    }
    return (
        <Container my={40} size={'xl'}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <Stack sx={{ width: '400px', margin: '20px auto' }}>
                    <Input placeholder="Username" value={state.phone} onChange={(e: any) => { setState({ ...state, phone: e.target.value }) }} />
                    <Input placeholder="Password" value={state.password} onChange={(e: any) => { setState({ ...state, password: e.target.value }) }} />
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </Container>
    )
}

export default Login