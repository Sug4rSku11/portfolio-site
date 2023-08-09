import React from 'react';

function Button({button, filter}) {
    return (
        <div className='buttons'>
            {
                button.map((cat, i) =>{
                    return <button type="button" onClick={()=> filter(cat)} className='cat-btn'>{cat}</button>
                })
            }
        </div>
    )
}

export default Button;