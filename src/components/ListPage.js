import React, {useState} from 'react';
import AddForm from './AddForm';
import List from './List';
import styled from 'styled-components';

const StyleDiv = styled.div`
    width:300px;
    background:#fff;
    margin:0 auto;
    flex-direction:column;
    align-items: center;
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    padding:20px;
`;

const Button = styled.button`
    width: 80px;
    margin:0 auto;
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

const ListPage = () => {

    const [lists, setLists] = useState([])

    const onAddEvent = ({text, key}) => {
        if(text === ''){
            return alert('Please type some content.');
        }

        const newItem = {text: text, key: key};

        setLists([...lists, newItem])
    }

    const onRemoveEvent = key => {
        const finishLists =  lists.filter(list => list.key !== key);
        setLists(finishLists);
    }

    return (
        <StyleDiv>

            <AddForm onAddEvent={onAddEvent}/>
            <List lists={lists} onRemoveEvent={onRemoveEvent}/>
        </StyleDiv>
    )
}

export default ListPage;