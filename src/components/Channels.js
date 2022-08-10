import React, { useState } from 'react';
import { Header, Divider } from 'semantic-ui-react';
import '../App.css';

const Channels = () => {
    const [name, setName] = useState('circle');
    const startRotation = () => {
    setName('circle start-rotate');
    setTimeout(() => {
        setName('circle start-rotate stop-rotate');
    }, Math.floor(Math.random() * 10000) + 1);
    };

    return (
        <div
            className = "Channels">
            <Header as='h2'>Channels</Header>
            <Divider style={{ width: '60%', margin: 'auto', marginBottom: '20px' }}/>
            <div className="arrow"></div>
      
            <ul className={name}>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">1</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">2</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">3</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">4</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">5</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">6</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">7</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">8</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">9</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">10</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">11</div>
                </li>
                <li>
                <div className="text" contentEditable="true" spellCheck="false">12</div>
                </li>
            </ul>
            <button className="spin-button" onClick={startRotation}>SPIN</button>
      {/* <section>
        <SearchBars onSubmit={fetchRestaurants}/>
      </section>
      <span>Your destination:</span> */}
      </div>
    );
}


export default Channels;