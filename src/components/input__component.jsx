import React from "react"
import { default as iconerror } from "../images/icon-error.svg"

class Input extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <>
                <div className="inputcon">
                    <input className="card__input" id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} />
                    <img id={this.props.idicon} className="card__iconerror" src={iconerror} />
                    <span id={this.props.idmsg} className="card__labelerror">{this.props.errormsg}</span>
                </div>
            </>
        );
    }
}


export default Input