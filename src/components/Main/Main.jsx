import React, { Component } from 'react';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/Navbar';
import AddButton from '../AddButton/AddButton';
class Main extends Component {
    render() { 
        return (
            <>
                <div className='Todo_body d-flex justify-content-center align-items-center'>
                    <div className='todo-container bg-light mx-3 ps-3 ps-md-0 pe-md-3 mx-md-0'>
                        <Navbar />
                        <AddButton />
                    </div>
                </div>            

            </>
        );
    }
}
//  TaskForm()
export default Main;