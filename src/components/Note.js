import React, { createElement, useState } from 'react';
import list from '../data/note.json';

export default function Note(props) {
    var notes = list.notes;
    var deleted = list.deleted;
    const [isActive, setIsActive] = useState('none');

    const [dev, setDev] = useState();


    /* ///[Delete note] */
    function Delete(e) {
        setIsActive(current => !current);
        let item = e.target.id;
        /* console.log(item) */
        const regex = "|b";
        let id = item.replace(regex, '');

        if (notes.includes(String(id))) {
            let index = notes.indexOf(String(id));
            notes.splice(index, 1);
            deleted.push(id);
            console.log(notes, id);
        }
        else if (deleted.includes(String(id))) {
            let index = deleted.indexOf(String(id));
            deleted.splice(index, 1);
            notes.push(id);
            console.log(deleted, id);
        }
        else { console.log('item not found') };
        console.log(notes, deleted);
    }

    /* ///[Edit note] */
    /*     async function Edit(e) {
            let element = e.target.id;
            const regex = "|e";
            let id = element.replace(regex, '');
            let text = document.getElementById(`${id}|t`);
            let index = notes.indexOf(String(id));
            console.log('step1');
            var edited = await changeDev();
            console.log('setp 2');
            notes[index] = await edited;
            console.log(element, id, notes, text);
        }; */

    return (
        <li className="note bg-dark" id={`${props.txt}`}>
            {createElement(`${dev ? 'input' : 'p'}`, { id: `${props.txt}|t`, style: { textDecorationLine: isActive ? 'none' : 'line-through' }, default: dev ? props.txt : null }, dev ? null : props.txt)}
            <div>
                <button class="delete " onClick={Delete} id={`${props.txt}|b`} key={`${props.key_}|b`}>x</button>
                {/* <button className="edit" onClick={Edit} id={`${props.txt}|e`}>Edit</button> */}
            </div>
        </li>
    )
}