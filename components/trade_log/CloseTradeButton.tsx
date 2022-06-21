import React, { SetStateAction, useEffect } from 'react'
import {Button} from 'semantic-ui-react'

interface IProps{
    tradeId: string,
    tradeStatus: string,
    closeStateHandler: (...args: string[]) => void
}

const CloseTradeButton = ({tradeId,tradeStatus,closeStateHandler}: IProps) => {
   
    const handleCloseTrade = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let selectedButton = e.currentTarget.value
        console.log(`Closed Type value = ${selectedButton}`)
        closeStateHandler(tradeId,selectedButton)
   }

    if( tradeStatus === "ONGOING"){
        return(
            <>
            {/* <button className="ui inverted primary button" onClick = {handleCloseTrade}>Close Won</button> */}
             <Button.Group className="closeTypeButtons" color='blue'>
                 <Button value={"Closed Won"} onClick= {handleCloseTrade}>Closed Won</Button>
                 <Button.Or />
                 <Button value={"Closed Lost"} onClick= {handleCloseTrade}>Closed Lost</Button>
            </Button.Group>
            </>
        )
    }
    else{
        return(
            <>
            <button className="ui inverted secondary button disabled">Closed</button>
            </>
        )

    }


}

export default CloseTradeButton