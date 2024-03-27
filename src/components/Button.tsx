import * as React from 'react'
type IButton = {
    value: string;
    icon?: string ;
}

export default function Button({value, icon} : IButton){
    return(
        <button className='button'>
            <img src={icon} alt='icon'/>
            {value}
        </button>
    )
}