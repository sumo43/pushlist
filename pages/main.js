import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Stack, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import { useUser } from "../util/auth"
import Router from 'next/router'
import { useEffect } from 'react'

export default function Main () {
    const user = useUser()

    useEffect(async () => {
    }, [])

    const handleSignout = async () => {
        await user.signout()
    }

    return (
        <div>
            <Flex className="header-main">
                <Flex className="header-left">
                    <Text fontSize="3xl">Pushlist</Text>
                </Flex>
                <Flex className="header-center">
                    <Text fontSize="3xl">You are logged in as </Text>
                    <Button colorScheme='teal' variant='outline' onClick={handleSignout.bind(this)}>
                        Logout 
                    </Button>
                </Flex>
            </Flex>
       </div>
    )
}
