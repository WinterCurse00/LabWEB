import './App.css';
import MediaControlCard from "./musiccard";
import ColorButtons from "./navbuttons";
import * as React from "react";
import { useState } from "react";
import Input from "./input";
export default function App() {
    const [showCard, setShowCard] = useState(false);
    const [showInput, setShowInput] = useState(false);

    const handleShowCard = () => {
        setShowCard(!showCard);
        setShowInput(!showInput)
    };


    return (
        <div>
            <div>
                <nav>
                    <ColorButtons onClick={handleShowCard}/>
                </nav>
            </div>
            <div className="App">
                <h1>Agachi Daniel</h1>
            </div>
            <div className="cardbox">
                {showCard && <MediaControlCard />}
                {showCard && <MediaControlCard />}
                {showCard && <MediaControlCard />}
            </div>
            {showInput && <Input/>}
        </div>
    );
}
