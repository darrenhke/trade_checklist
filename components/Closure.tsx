import React from 'react'
import {Dropdown} from'semantic-ui-react'


const type_options = [
    {
        key: "type_1",
        text: "Type 1 Close",
        value: "type_1"
    },
    {
        key: "type_2",
        text: "Type 2 Close",
        value: "type_2"
    },
    {
        key: "type_3",
        text: "Type 3 Close",
        value: "type_3"
    }
]

const Closure = () => {
    return(
        <>
        <h2 className="ui blue header">Closure</h2>
        <h4 className="ui header">4H</h4>
        <Dropdown
            placeholder='Select closure type'
            fluid
            selection
            options={type_options}
        />
    </>
    )


}


export default Closure