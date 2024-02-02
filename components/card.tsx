import './card.sass'
export default function Card(props: { key: number, title: string, description: string, date: string, detail: string }) {
    const title = props.title?props.title:"N/A";
    const description = props.description?props.description:"N/A";
    const date = props.date?props.date:"N/A";
    const detail = props.detail?props.detail:"N/A";

    return (
        <div className="card bg-white p-2 m-2 mx-auto radius rounded-xl">
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