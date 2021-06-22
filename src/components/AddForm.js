import React, {useState}from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
    padding-bottom:10px;
    border-bottom:1px solid #ccc;
`
const Form = styled.form`
    display:flex;
    width:400px;
    justify-content:space-between;
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
//////////////
const AddForm = ({onAddEvent}) => {

    const [newItem, setNewItem] = useState({text:'', key:''});

    const onAdd = e => {
        e.preventDefault();
        onAddEvent(newItem)
    }

    return (
        <StyleDiv>
            <Form onSubmit={e=>onAdd(e)}>
                <Input onChange={e => setNewItem({text:e.target.value, key:Date.now()})} />
                <AddButton type="submit">
                    Add
                </AddButton>
            </Form>
        </StyleDiv>
    )
}

export default AddForm;