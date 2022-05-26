import React from 'react'
import { Button} from 'semantic-ui-react'

   
interface IProps {
    trend:{fourhourly: string;oneday: string;};
    trend4HSetter: (value :string) => void;
    trend1DSetter: (value :string) => void;

}


 const Trend =({trend,trend4HSetter,trend1DSetter}: IProps) =>{

    const trend4hvalues: Array<string> = ["Down","Range","Up"]
    const trend1dvalues: Array<string> = ["Down","Range","Up"]

    const button4HClickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        console.log(e.currentTarget.value)
        return trend.fourhourly === e.currentTarget.value ?  trend4HSetter(""): trend4HSetter(e.currentTarget.value)
    }

    const button1DClickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        console.log(e.currentTarget.value)
        return trend.oneday === e.currentTarget.value ?  trend1DSetter(""): trend1DSetter(e.currentTarget.value)
    }

    return (
        <>
        <h2 className="ui blue header">Trend</h2>
        <h4 className="ui header">4H</h4>
        <Button.Group >
            {trend4hvalues.map((item) => {
             return <Button key={item} className= {`${trend.fourhourly === item ?'active' : undefined}`} onClick = {button4HClickHandler} value = {item}> {item} </Button>
            })}
        </Button.Group>
        <h4 className="ui header">1D</h4>
        <Button.Group>
            {trend1dvalues.map((item) => {
             return <Button key={item} className= {`${trend.oneday === item ?'active' : undefined}`} onClick = {button1DClickHandler} value = {item}> {item} </Button>
            })}
        </Button.Group>
        </>
    );
}

export default Trend
 