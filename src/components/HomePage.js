import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {test} from '../database/db_init';

const Wrap = styled.div`
    display:flex;
    width:500px;
    margin:0 auto;
`

const HomepageWrap = styled.div`
    width:100%;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const Header = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background:rgb(121, 81, 255); 
    width:100%;
    height:50px;
    color:white;
    font-size:28px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
`

const Banner = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height:100px;
    background:rgb(115, 163, 163);
    color:white;
    margin-bottom: 20px;
    text-align: center;
`

const EnterBtn = styled.button`
    width: 150px;
    height: 30px;
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

const HomePage = () => {

    // db.collection('123').doc('0958').set({
    //     test:'111'
    // })


    return (
        <Wrap >
            <HomepageWrap>
                <Header>
                    Memome!
                </Header>
                <Content>
                    <Banner>
                        Welcome to Memome! <br/>Free to use a todo-list application.<br/> Enjoy it!
                    </Banner>

                <Link to="/list">
                    <EnterBtn >
                        Enter list
                    </EnterBtn>
                </Link>
                </Content>
            </HomepageWrap>
        </Wrap>
    )
}

export default HomePage;