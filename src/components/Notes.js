import React, { useState } from "react";
import Note from "./Note";
import list from '../data/note.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
library.add(faPen);

export default function Notes() {
    /* ///[Variables] */
    var notes = list.notes;
    var del = list.del;
/*     var startX;
    var startY;
 */
    const [isActive, setIsActive] = useState('none');
    const [listItems, setlist] = useState([]);

    const WriteNotes = () => {
        setIsActive(current => !current);
    }

    /* ///[Write] */
    function AddNote() {
        var comment = document.getElementById('input').value;
        if (comment !== "") {
            notes.push(comment);
            setlist([...listItems]);
        };
        document.getElementById('input').value = null;
        console.log(notes, comment);
    };

    /* ///[Save] */
    function Save() {
        var textDoc = document.createElement('a');
        let newListPrint = notes.join(`;\r\n`);
        textDoc.href = 'data:attachment/text,' + encodeURI(newListPrint);
        textDoc.target = '_blank';
        textDoc.download = 'notes.txt';
        textDoc.click();
    };

    //Unfinished functions

    const [mousePos, setMousePos] = useState(`60px`);

    function EnterPress(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById("listElement").click();
        }
    }

    function GrabData(e) {
        setMousePos((start) => (start + e.clientY))
    };

    /*     function MouseDrag(e) {
            var y = e.clientY;
            var x = e.clientX;
            console.log(startY, y)
        } */

    return (
        <div id="takenotes">
            <button onClick={WriteNotes}>Notes</button>
            <div id='notepad' style={{ display: isActive ? 'none' : 'grid', top: mousePos }} draggable onDragEnter={GrabData} /* onDragEnd={MouseDrag}  */>
                <h2>Notes</h2>
                <ul id="list" >
                    {notes.map((element) => (<Note txt={element} key_={element + String(notes.length)}/*  display={{textDecorationLine: isActive? 'line-through' : 'none'}}  */ />))}
                    {del.map((element) => (<Note txt={element} key_={element + String(notes.length)} /* display={{textDecorationLine: isActive? 'line-through' : 'none'}} */ />))}
                </ul>
                <div>
                    <input type="text" id="input" placeholder="Add your notes (Enter)" onKeyDown={EnterPress} />
                    <button id='listElement' onClick={AddNote} >
                        Add
                    </button>
                </div>
                <button onClick={Save}>Save</button>
            </div>
        </div>
    )
}