import Card from "./card";

const classGroups = "flex flex-col justify-center relative bg-purple-100 bg-opacity-75 rounded-3xl p-5 md:w-4/6 w-90 backdrop-blur";
const classCards = "flex md:flex-wrap align-center max-sm:overflow-x-scroll md:justify-center md:w-fit"; //each card occupies 20rem + 0.5 margin each side

export default function CardContainer(props: {title: string, items: any[]}) {
    return (
        <div id={props.title} className="py-5">
            <div className={classGroups}>
                <h2>{props.title}</h2>
                <div className={classCards}>
                    {
                        props.items.map((item: { title: string, description: string, date: string, detail: string }, i: number) => (
                            <Card title={item.title} description={item.description} date={item.date} detail={item.detail} key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}