import React from 'react'
import { Checkbox } from 'semantic-ui-react'


interface IProps {
    volatility: {minfifteen:boolean;hourone:boolean;hourfour:boolean;};
    volatility15MMSetter: (value: boolean) => void;
    volatility1HSetter: (value: boolean) => void;
    volatility4HSetter: (value: boolean) => void;
}

const Volatilty = ({volatility,volatility15MMSetter,volatility1HSetter,volatility4HSetter}: IProps) => {

    const checkBoxHandler15MM = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked ===true ? volatility15MMSetter(e.target.checked = false):volatility15MMSetter(e.target.checked = true)
        console.log(`15 Min : ${e.target.checked}`)
    }

    const checkBoxHandler1H = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked ===true ? volatility1HSetter(e.target.checked = false):volatility1HSetter(e.target.checked = true)
        console.log(`1 HR : ${e.target.checked}`)
    }

    const checkBoxHandler4H = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked ===true ? volatility4HSetter(e.target.checked = false):volatility4HSetter(e.target.checked = true)
        console.log(`4 HR : ${e.target.checked}`)
    }

return (
    
    <>
    <h3 className="ui blue header">Volatility</h3>
        <h4 className='ui header'> 15 Minute</h4>
        <Checkbox toggle checked = {volatility.minfifteen} onChange={(e)=>checkBoxHandler15MM(e)}/>
        <h4 className='ui header'> 1 Hour</h4>
        <Checkbox toggle checked = {volatility.hourone} onChange={(e)=>checkBoxHandler1H(e)}/>
        <h4 className='ui header'> 4 Hour</h4>
         <Checkbox toggle checked = {volatility.hourfour} onChange={(e)=>checkBoxHandler4H(e)}/>
    </>
)

}

export default Volatilty