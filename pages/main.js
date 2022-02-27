import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Stack, ButtonGroup, Flex, Text, Spacer } from '@chakra-ui/react'
import { useUser } from "../util/auth"
import Router from 'next/router'
import { useEffect } from 'react'

const Loading = () => {
    return <p>Loading...</p>
}

export default function Main () {
    const user = useUser()

    useEffect(async () => {
        if(user.userCheck == 1) {
            console.log(user)
        }
    }, [])

    const handleSignout = async () => {
        await user.signout()
    }
    
    if(user.userCheck == 1) {
    return (
        <div>
            <Flex className="header-main">
                <Flex className="header-left">
                    <Text fontSize="3xl" fontWeight="bold">Pushlist</Text>
                </Flex>
                <Spacer />
                <Flex className="header-center">
                    <Flex flexDirection="column" alignContent={"center"}>
                        <Text fontSize="2xl">{user.user.email}</Text>
                        <Button colorScheme='teal' variant='solid' size="sm" maxWidth={"16"} onClick={handleSignout.bind(this)}>
                            Logout 
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
       </div>
    )
    }
    else {
        return <Loading />
    }
}
