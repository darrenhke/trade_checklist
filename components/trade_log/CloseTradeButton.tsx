import React, { useEffect } from 'react'

interface IProps{
    tradeId: string,
    tradeStatus: string,
    closeStateHandler: (...args: string[]) => void
}

const CloseTradeButton = ({tradeId,tradeStatus,closeStateHandler}: IProps) => {
   
    const handleCloseTrade = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        closeStateHandler(tradeId)
   }

    if( tradeStatus === "ONGOING"){
        return(
            <>
            <button className="ui inverted primary button" onClick = {handleCloseTrade}>Close</button>
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