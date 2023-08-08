import React from 'react';


const Services = () => {
    return (
        <div>
            <div className='services-h4'>
                <h2>My Services</h2>
            </div>
            <div  className='services'>
                <div className='services-card'>
                <i class="fa-solid fa-palette"></i>
                  <h5>Website Design</h5>
                  <p>Design Static or multi-page applications</p>
                </div>
                <div className='services-card'>
                <i class="fa-solid fa-code"></i>
                <h5>Website Develpment</h5>
                  <p>Fullstack Web Development</p>
                </div>
                <div className='services-card'>
                <i class="fa-solid fa-icons"></i>
                <h5>Graphic Design</h5>
                  <p>Logo designs</p>
                </div>
            </div>


        </div>
        
    )
}
export default Services;