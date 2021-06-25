import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AddForm from './AddForm';
import List from './List';
import GetUser from'./GetUser';
import styled from 'styled-components';
import db from '../database/db_init'

const StyleDiv = styled.div`
    width:500px;
    display:flex;
    background:#fff;
    margin:0 auto;
    flex-direction:column;
    align-items: center;
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    padding:20px;
`;
const BackBtn = styled.button`
    margin:0 auto;
    margin-top:10px;
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    background: #fff;
    color:rgb(121, 81, 255);
    cursor:pointer;
    height: 30px;

    :hover {
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    background: rgb(121, 81, 255);
    color:#fff;
    }
`

const ListPage = () => {

    const [lists, setLists] = useState([])
    const [user, setUser] = useState('')
    const [newUser, setNewUser] = useState(true)


    // add list
    const onAddEvent = ({text, key}) => {
        if(text === ''){
            return alert('Please type some content.');
        }
        db.collection('users').doc(user).set({test:null}).then(()=>{
            db.collection('users').doc(user).collection('lists').add({
                list: text,
                time: key,
            })
            const newItem = {text: text, key: key};
            setLists([...lists, newItem])
        }).then((err)=>console.log(err));
    }

    // remove list
    const onRemoveEvent = (text,key) => {
        const path = db.collection('users').doc(user).collection('lists');
        
        path.where('list', '==',text).get()
        .then((doc)=>{
            doc.forEach(list=>{
                path.doc(list.id).delete()
                .then(()=>{
                    const finishLists =  lists.filter(list => list.key !== key);
                    setLists(finishLists)
                })
            })
        })
        .catch((error)=> console.log(error))
    }


    // check user is new or old and get more list
    const checkUser = (username) => {
        setUser(username);
        const userArr = [];

        db.collection('users').get().then( doc => {
            doc.forEach( user => userArr.push(user.id));

            if(userArr.find(item => item === username)){
                setNewUser(false);
                const userLists = [];
                db.collection('users').doc(username).collection('lists').get().then(doc=>{
                    doc.forEach(list => {
                        userLists.push({
                            text:list.data().list,
                            key:list.data().time
                        })
                    });
                    setLists(userLists);
                })
            }else{setLists([]);}
        });
    }


    return (
        <StyleDiv >
            <GetUser checkUser={checkUser}  />
                {
                    user !== '' ? 
                    <>
                    <div>{user}'s memo</div>
                    <AddForm onAddEvent={onAddEvent}/>
                    <List lists={lists} onRemoveEvent={onRemoveEvent}/>
                    </>
                    : null
                }
                
            <Link to="/">
                <BackBtn >back to homepage</BackBtn>
            </Link>
        </StyleDiv>
    )
}

export default ListPage;