import React from 'react';

function Menu({menuItem}) { 
    return ( 
        <div>
            {
                menuItem.map((item) =>{
                    return <div className='item-con' key={item.id}>
                            <div className='item-container'>
                                <img src={item.imgage} alt=""/>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                          </div>
                     </div>
                })
            }
        </div>
    )
}
export default Menu;