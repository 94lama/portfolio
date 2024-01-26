import React from "react";
import { Text } from "@chakra-ui/react";
import { displayW } from "./CV"

export default class Project extends React.Component {
    render() {
        return (
            <article style={this.props.class} key={this.props.id} id={this.props.id} className="card">
                <img src={`./projects/${this.props.img}`} alt={this.props.name} display={displayW?'none':'block'} />
                <div style={{ margin: this.props.margin, background: displayW ? 'transparent' : this.props.color }} >
                    <h3>{this.props.name}</h3>
                    <Text noOfLines={10} className={'p'}>{this.props.desc}</Text>
                </div>
            </article>
        )
    }
}