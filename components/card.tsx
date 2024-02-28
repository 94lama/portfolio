export default function Card(props: { key: number, title: string, description: string, date: string, detail: string }) {
    const title = props.title?props.title:"N/A";
    const description = props.description?props.description:"N/A";
    const date = props.date?props.date:"N/A";
    const detail = props.detail?props.detail:"N/A";

    return (
        <div className="bg-white p-2 m-2 radius rounded-xl min-w-[250px] md:w-80 shadow-md">
            <div className='flex flex-col-reverse md:flex-row justify-between'>
                <h3>{title}</h3>
                <p>{date}</p>
            </div>
            <hr />
            <div className='flex flex-col align-items-between'>
                <p>{description}</p>
                <p className='text-right font-bold'>{detail}</p>
            </div>
        </div>
    )
}