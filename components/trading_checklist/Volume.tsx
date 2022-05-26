import React from 'react'
import { Button } from 'semantic-ui-react'


interface IProps{
    volume: {level: number};
    setVolume: (value: number) => void;
}

const Volume = ({volume,setVolume}: IProps) => {

    const volumeValues: number[] = [1,2,3,4]


    const volButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newValue = parseInt(e.currentTarget.value)
        console.log(`Volume : ${newValue}`);
        
        return volume.level === newValue ?  setVolume(0): setVolume(newValue)

    }

    return(
        <>
        <h2 className="ui blue header">Volume</h2>
        <h4 className="ui header">4H</h4>
        <Button.Group>
            {volumeValues.map(item => {
                return  <Button key={item} className= {`${volume.level === item ?'active' : undefined}`} onClick = {volButtonHandler}  value = {item}> {item} </Button>
            })}
        </Button.Group>
        </>
    )

}
export default Volume
