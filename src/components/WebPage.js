import React, { useState } from "react";


export default function Page(props) {
    const [isActive, setIsActive] = useState('none');
    const ActivateBtn = () => {
        setIsActive(current => !current);
    }
    return (
        <section>
            <button id={props.name + '_btn'} onClick={ActivateBtn}>{props.name}</button>
            <div className='frames' style={{ display: isActive ? 'none' : 'grid' }}>
                <iframe src={props.web} title={props.name} id={props.name} style={{ 'width': '100%', 'heigth': '100%' }} />
                <button style={{ 'z-index': 15, 'position': 'relative', 'top': '.5vh', 'left': '5.5vw' }}>x</button>
            </div>
        </section>
    );
};