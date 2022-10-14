import { Card, Container, Group, Stack } from "@mantine/core"
import { useEffect, useState } from "react"
import request from "../../api"

const Home = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState({ isLoading: false, error: false })
    useEffect(() => {
        setLoading({ ...loading, isLoading: true })
        request.private.get('/product').then(res => {
            setProduct(res.data.data)
            setLoading({ ...loading, isLoading: false })
        }).catch(er => { setLoading({ ...loading, error: true }) })
    }, [])

    return (
        <Container my={30}>
            {!loading.error ? loading.isLoading ?
                <h2>Loading</h2> :
                <Group position={'center'}>
                    {product?.map((item: any) => {
                        return <Card shadow={"md"}>
                            <Stack>
                                <div>{item?.attachmentList?.map((itm: any) => {
                                    return <img width={30} src={`https://profitmodel-server.herokuapp.com/api/product/${item.id}/photo/${itm.id}`} />
                                })}</div>
                                <div>Name: {item?.name}</div>
                                <div>Brand: {item?.brand?.name}</div>
                                <div>Description: {item?.description}</div>
                                <div>Category: {item?.category.name}</div>
                            </Stack>
                        </Card>
                    })}
                </Group> : <h2>Error</h2>
            }
        </Container>
    )
}
export default Home