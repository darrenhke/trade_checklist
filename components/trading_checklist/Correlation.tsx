import React from 'react'
import { Checkbox } from 'semantic-ui-react'

interface IProps {
    cor: {value: boolean};
    setCor: (value: boolean)=> void
}

 const Correlation = ({cor,setCor}: IProps) => {

    const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked ===true ? setCor(e.target.checked = false):setCor(e.target.checked = true)
        console.log(e.target.checked);
        
    }

    return(
        <>
            <h2 className="ui blue header">Correlation</h2>
            <br/><br/>
            <Checkbox checked = {cor.value} label="Is there a existing correlation with any index i.e. USD YEN index." onChange={(e)=>checkBoxHandler(e)}/>
        </>
    )
}
export default Correlation