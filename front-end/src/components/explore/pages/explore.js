import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import List_Projek from '../components/list-project';
import Navigation from '../../essential/navigation';
import './../../../styles/navigasi.css';



export default class explore extends Component {
    render() {
        return (
            <div>
                <Navigation selectedPage="explore" />
                <section>
                    <Container className="pt-4 pb-5">
                        <h1 style={{ fontWeight: "bold" }}>Welcome to my <i style={{ color: "lightseagreen" }} className="code">Goa</i></h1>
                        <h1 style={{ fontWeight: "bold" }}>have a <i style={{ color: "lightskyblue" }} className="code">nice</i> day 😁</h1>

                    </Container>
                </section>
                <List_Projek />
            </div >
        )
    }
}
