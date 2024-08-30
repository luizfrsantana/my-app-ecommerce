import React from "react"
import "./dropdownlist.css"

export const DropDownList = (props: any) => {

    return (
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select required={props.required} onChange={event => props.updateValue(event.target.value)} >
                 {props.itens.map((item: any, index: number) =>{
                        return <option key={index}>{item}</option>
                })} 
            </select>
        </div>
    )


}