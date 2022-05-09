import React from 'react'
import { Checkbox } from 'semantic-ui-react'


interface IProps {
    rsp: {value: boolean};
    setRsp: (value: boolean) => void;
}

const Rsp = ({rsp,setRsp}: IProps) => {

    const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked)
        e.target.checked ===true ? setRsp(e.target.checked = false):setRsp(e.target.checked = true)
    }

return (
    
    <>
    <h3 className="ui blue header">Recent Swing Point</h3>
    <Checkbox toggle checked = {rsp.value} onChange={(e)=>checkBoxHandler(e)}/>
    </>
)

}

export default Rsp