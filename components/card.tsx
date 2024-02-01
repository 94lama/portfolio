'use client'
import './card.sass'
export default function Card(props: { title: string, description: string, date: string, detail: string }) {
    const title = props.title?props.title:"";
    const description = props.description?props.description:"";
    const date = props.date?props.date:"";
    const detail = props.detail?props.detail:"";

    return (
        <div className="card bg-white p-2 m-2 radius rounded-md">
            <div className='flex justify-between'>
                <h3>{title}</h3>
                <p>{date}</p>
            </div>
            <hr />
            <div className='flex flex-col content-between'>
                <p>{description}</p>
                <p className='text-right'>{detail}</p>
            </div>
        </div>
    )
}