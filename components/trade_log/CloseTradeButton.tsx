import React from 'react'

interface IProps{
    tradeId: string,
    tradeStatus: string
    
}

const CloseTradeButton = ({tradeId,tradeStatus}: IProps) => {

    const handleCloseTrade = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data = 
        {
            "_id": tradeId,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/trade'
        const options = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        console.log(result)

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