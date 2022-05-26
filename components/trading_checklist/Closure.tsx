import React from 'react'
import {Button} from'semantic-ui-react'


interface IProps {
    close:{close:string}
    setClosureHandler: (close:string)=>void;
}

const Closure = ({close,setClosureHandler} : IProps) => {

    const closureValues: Array<string> = ["Type 1","Type 2","Type 3"]

    const closureHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        console.log(e.currentTarget.value)
        return close.close === e.currentTarget.value ?  setClosureHandler(""): setClosureHandler(e.currentTarget.value)
    }
    return(
        <>
        <h2 className="ui blue header">Price Closure</h2>
        <h4 className="ui header">4H</h4>
        <Button.Group >
            {closureValues.map((item) => {
             return <Button key={item} className= {`${close.close === item ?'active' : undefined}`} onClick = {closureHandler} value = {item}> {item} </Button>
            })}
        </Button.Group>
    </>
    )


}


export default Closure