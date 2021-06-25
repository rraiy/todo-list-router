import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import db from '../database/db_init'

const StyleDiv = styled.div`
    padding-bottom:10px;
    border-bottom:1px solid #ccc;
`
const Form = styled.form`
    display:flex;
    width:400px;
    justify-content:space-between;
    margin-bottom:20px;
`
const Input = styled.input`
    width:250px;
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    height:20px;
    
`
const GetButton = styled.button`
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    background: #fff;
    color:rgb(121, 81, 255);
    cursor:pointer;

    :hover {
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    background: rgb(121, 81, 255);
    color:#fff;
    }
`

const UserName = styled.p`
    line-height:1.5em;
    color:rgb(121, 81, 255);
`

const  GetUser = ({checkUser,oldList}) => {

    const [findUser, setFindUser] = useState('');


    const onCheckUser = (e) => {
        e.preventDefault();
        checkUser(findUser);
    }

    return (
        <>
        <Form onSubmit={e => onCheckUser(e)}>
                <Input   
                    placeholder="search username or create a new user"
                    onChange={e => {setFindUser(e.target.value)}}
                    value={findUser}
                />
                <GetButton type="submit" >
                    Submit
                </GetButton>
                
        </Form>
        </>
    )
}

export default GetUser;