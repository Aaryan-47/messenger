import React from 'react';
import {List,Icon} from 'semantic-ui-react';
import Link from 'next/link';
import {useRouter} from "next/router";
import {logOut} from '../../utils/authUser'

function SideBar({user:{unreadNotification,email,unreadMessage,username}})
{
    const router=useRouter();
    const isActive=route=>router.pathname===route

    return(
        <>
        <List
        style={{paddingTop:"2rem"}}
        size="big" verticalAlign="middle" selection>
        <Link href="/">
            <List.Item active={isActive('/')}>
              <Icon name="home" size="large" color={isActive('/')&&"teal"}/>
              <List.Content>
                <List.Header content="Home"/>
              </List.Content>
            </List.Item>
        </Link>
        <Link href="/messages">
            <List.Item active={isActive('/messages')}>
              <Icon name={unreadMessage?"hand point right":"mail outline"} size="large" color={isActive('/messages')&&"teal"}/>
              <List.Content>
                <List.Header content="Messages"/>
              </List.Content>
            </List.Item>
        </Link>

        <Link href="/notifications">
            <List.Item active={isActive('/notifications')}>
              <Icon name={unreadNotification?"hand point right":"bell outline"} size="large" color={isActive('/notifications')&&"teal"}/>
              <List.Content>
                <List.Header content="Notifications"/>
              </List.Content>
            </List.Item>
        </Link>

        <Link href={`/${username}`}>
            <List.Item active={router.query.username===username}>
              <Icon name="user" size="large" color={router.query.username===username&&"teal"}/>
              <List.Content>
                <List.Header content="Account"/>
              </List.Content>
            </List.Item>
        </Link>

        <List.Item onClick={()=>logOut(email)}>
            <Icon name="sign-out" size="large"/>
            <List.Content>
                <List.Header content="Logout">

                </List.Header>
            </List.Content>
        </List.Item>
        </List>
        </>
    )
}

export default SideBar;
