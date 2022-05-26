import React from 'react'
import { Button } from 'semantic-ui-react'

interface IProps {
    fib:{retracement: number;};
    fibStateSetter: (value :number) => void;
}

 const FibRetracement =({fib,fibStateSetter}: IProps) =>{

    const fibValues: number[] = [38.2,50.0,61.8]

    const fibButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newValue = parseFloat(e.currentTarget.value)
        console.log(newValue);
        
        return fib.retracement === newValue ?  fibStateSetter(0): fibStateSetter(newValue)

    }
    return (
        <>
        <h2 className="ui blue header">Fib Retracement</h2>
        <h4 className="ui header">4H</h4>
        <Button.Group>
            {fibValues.map(item => {
                return  <Button key={item} className= {`${fib.retracement === item ?'active' : undefined}`} onClick = {fibButtonHandler}  value = {item}> {item} </Button>
            })}
        </Button.Group>
        </>
    );
}

export default FibRetracement
 