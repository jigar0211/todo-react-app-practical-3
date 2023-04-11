import React from 'react';
import './navbar.css';
function Navbar() {
    const d = new Date();
    const date = d.getDate();
    let dayName = new Date().toLocaleDateString('en-us', { weekday: "long" })
    const month = d.toLocaleString('default', { month: 'short' });
    const year = d.getFullYear();

    return (
        <>
            <div className='container bg-light pt-3 ps-0 ps-md-5 py-1'>
                <div className='row g-0'>
                    <div className='col-5 col-sm-4 bg-light nav-div'>
                        <div className='row g-0 bg-light'>
                            <div className='col-1 col-sm-1 ps-1 d-flex align-items-center justify-content-end div_date bg-light'>
                                <span className="display-2 bg-light">{date}</span>
                            </div>
                            <div className='col-8 col-sm-8 div_month_year align-items-center pt-2 bg-light'>
                                <span className="d-block  month bg-light">{month}</span>
                                <span className='bg-light year'>{year}</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-7 col-sm-8 d-flex align-items-center justify-content-end bg-light'>
                        <span className="dayName float-end bg-light">{dayName}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
