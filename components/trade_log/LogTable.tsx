import React, { useEffect, useState } from "react";
import { Header, Table, Rating } from 'semantic-ui-react'
import CloseTradeButton from "./CloseTradeButton";
import moment from 'moment'

const LogTable = () => {
    const [data,setData] = useState([])
    const [counter,setCounter] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3000/api/trade')
        .then( res => res.json())
        .then(data => {
            setData(data.trades)
        })
    },[counter])
    
    const handleCloseClickState = async (tradeId) => {
      const data = 
      {
          "_id": tradeId,
          "status": "CLOSED"
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
      setCounter(counter+1)
    }
    
    //TODO Create loading page when data is being fetched
    //const [isLoading,setLoading] = useState(false)
    interface Trade {
        dateExecuted: number;
    }
  
    return(
      <div className = "ui container grid">
    <Table celled padded>
    <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Open</Table.HeaderCell>
          <Table.HeaderCell>Trade Duration</Table.HeaderCell>
          <Table.HeaderCell>Closed</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          {/* <Table.HeaderCell>Outcome</Table.HeaderCell> */}
          {/* <Table.HeaderCell>Confluences</Table.HeaderCell> */}
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
              {data.map((trade) =>  {
                let dateExecuted = moment(trade.dateExecuted).format('DD/MM/YYY, HH:mm:ss')
                let dateCompleted = moment(trade.dateClosed).format('DD/MM/YYY, HH:mm:ss')
                let duration = trade.status === "ONGOING"? moment(trade.dateExecuted).fromNow(): moment.utc(moment(dateCompleted,"DD/MM/YYYY HH:mm:ss").diff(moment(dateExecuted,"DD/MM/YYYY HH:mm:ss"))).format("HH \\hr mm \\min ss \\s\\ec")
                
                return(
                  <Table.Row key = {trade._id}>
                  <Table.Cell >{dateExecuted}</Table.Cell>
                  <Table.Cell >{duration}</Table.Cell>
                  <Table.Cell >{trade.status === 'ONGOING'?'':dateCompleted}</Table.Cell>
                  <Table.Cell >{trade.status}</Table.Cell>
                  <Table.Cell ><CloseTradeButton tradeId = {trade._id} tradeStatus={trade.status} closeStateHandler = {handleCloseClickState}/></Table.Cell>
              </Table.Row>
                )

               
              })}
      </Table.Body>
    </Table>
    </div>
    )
    
}

export default LogTable