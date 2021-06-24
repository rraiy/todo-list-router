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
const AddButton = styled.button`
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

const  GetUser = () => {

    const [findUser, setFindUser] = useState('');
    const [user, setUser] = useState('');

    function checkUserExist(user){
        return user === findUser;
    }

    const checkUserEvent = (e) => {
        e.preventDefault();
        const userArr = [];

        db.collection('users').get().then( doc => {
            doc.forEach( user => userArr.push(user.id));
            console.log(userArr)
            // setUser(userArr.find(checkUserExist));
        });

    }

    return (
        <Form onSubmit={e => checkUserEvent(e)}>
                <Input   
                    placeholder="type username or type a new user"
                    onChange={e => {setFindUser(e.target.value)}}
                    value={findUser}
                />
                <AddButton type="submit" >
                    get data
                </AddButton>
                
            </Form>
    )
}

export default GetUser;