import React from 'react';
import { Container } from '@material-ui/core';
import jagelLogo from '../../assets/img/jagelLogo.svg';
import mobile from '../../assets/img/mobile.png';

import './homepage.css'

export function Home(){
    return(
    <Container fixed>
    <div className="page">
        <div className="title">
            <h1>POINT OF SALE</h1>
        </div>
        <div className="header">
            <div className="header-content">
                <p><label>Web platform to increase performance and reduce response time</label></p>
                <p><small>Small application with big changes</small></p>
            </div>
            <div className="header-logo">
                <img src={mobile} />
            </div>
        </div>

        <div className="jagel fade-in">
            <div className="jagel-logo">
                <img src={jagelLogo} />
            </div>
            <div className="jagel-text">
                Jagel Technologies
            </div>
        </div>
    </div>
    </Container>
    );
}