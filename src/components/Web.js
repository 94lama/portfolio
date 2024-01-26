import Page from "./WebPage";
import array from '../data/websites.json';

export default function WebPages() {
    var proj = [];
    array.forEach(element => {
        proj.push(<Page name={element.name} web={element.web} />)
    })
    return (
        <div className="webArea">
            <h2>Web projects</h2>
            {proj}
        </div>
    )
}