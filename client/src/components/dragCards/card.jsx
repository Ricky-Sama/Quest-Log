import Draggable from 'react-draggable';
import { useState } from 'react';

const Card = (props) => {
    const [text, setText] = useState('II');
    const [header, setHeader] = useState('I');
    const [isEditingContent, setIsEditingContent] = useState(false);
    const [isEditingHeader, setIsEditingHeader] = useState(false);
    const [font, setFont] = useState('Arial');
    const [alignment, setAlignment] = useState('left');
    // const [textDirection, setTextDirection] = useState('horizontal');
    const [highlight, setHighlight] = useState('none');
    const [textColor, setTextColor] = useState('Grey');

    const cardStyle = {
        fontFamily: font,
        textAlign: alignment,
        // textOrientation: textDirection,
        backgroundColor: highlight,
        color: textColor
    };

    return (
        <Draggable>
            <div className="card" style={cardStyle}>
                <button className="delete-button rounded-lg px-4 bg-transparent text-white hover:bg-red-600 hover:text-white" onClick={props.onDelete}>x</button>
                <div className="header">
                    {isEditingHeader ? 
                        <div className='flex'>
                            <input type="text" value={header} onChange={(e) => setHeader(e.target.value)} />
                            <button onClick={() => setIsEditingHeader(false)}>Save</button>
                        </div> 
                        : 
                        <p onClick={() => setIsEditingHeader(true)}>{header}</p>
                    }
                </div>
                <div className="content">
                    {isEditingContent ? 
                        <div>
                            <textarea 
                                className="text-input" value={text} 
                                onChange={(e) => setText(e.target.value)} 
                                onDoubleClick={() => setText('')} 
                                rows={text.split('\n').length + 1}
                            />
                            <button onClick={() => setIsEditingContent(false)}>Save</button>
                        </div> 
                        : 
                        <p onClick={() => setIsEditingContent(true)}>{text}</p>
                    }
                </div>
                {isEditingContent && 
                    <div className="formatting-controls">
                        <select value={font} onChange={(e) => setFont(e.target.value)}>
                            <option value="Arial">Arial</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Courier New">Courier New</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Comic Sans MS">Comic Sans MS</option>
                            <option value="Impact">Impact</option>
                            <option value="Lucida Console">Lucida Console</option>
                        </select>
                        <select value={alignment} onChange={(e) => setAlignment(e.target.value)}>
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                        </select>
                        <select value={highlight} onChange={(e) => setHighlight(e.target.value)}>
                            <option value="none">None</option>
                            <option value="yellow">Yellow</option>
                            <option value="lightgreen">Light Green</option>
                            <option value="lightblue">Light Blue</option>
                            <option value="pink">Pink</option>
                            <option value="lightgrey">Light Grey</option>
                        </select>
                        <select value={textColor} onChange={(e) => setTextColor(e.target.value)}>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="red">Red</option>
                            <option value="orange">Orange</option>
                            <option value="yellow">Yellow</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="purple">Purple</option>
                        </select>
                        
                    </div>
                }
            </div>
        </Draggable>
    );
}

export default Card;