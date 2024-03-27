import * as React from 'react'
type TChildren = {
    children: React.ReactNode;
}
export default function Container({ children } : TChildren) {
    return (
        <div className='container'>
            {children}
        </div>
    )
}