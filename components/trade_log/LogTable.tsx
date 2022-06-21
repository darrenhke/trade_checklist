import React, { useEffect, useState,useContext, createContext } from "react";
import Link from 'next/link'
//Components
import {Table } from 'semantic-ui-react'
import CloseTradeButton from "./CloseTradeButton";
//Lib
import moment from 'moment'

const LogTable = () => {
    const [data,setData] = useState([])
    const [counter,setCounter] = useState(0)
    const TradeContext = createContext('')
    useEffect(() => {
        fetch('http://localhost:3000/api/trades')
        .then( res => res.json())
        .then(data => {
            setData(data.trades)
        })
    },[counter])
    
    //Close Button Handler for single trade
    const handleCloseClickState = async (tradeId,typeClosed) => {
      const data = 
      {
          "_id": tradeId,
          "status": typeClosed
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
      <table className="ui celled padded table">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Open</Table.HeaderCell>
          <Table.HeaderCell>Trade Duration</Table.HeaderCell>
          <Table.HeaderCell>Closed</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          {/* <Table.HeaderCell>Confluences</Table.HeaderCell> */}
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>View</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
              {data.map((trade) =>  {
                let dateExecuted = moment(trade.dateExecuted).format('DD/MM/YYYY, HH:mm:ss')
                let dateCompleted = moment(trade.dateClosed).format('DD/MM/YYYY, HH:mm:ss')
                let duration = trade.status === "ONGOING"? moment(trade.dateExecuted).fromNow(): moment.utc(moment(dateCompleted,"DD/MM/YYYY HH:mm:ss").diff(moment(dateExecuted,"DD/MM/YYYY HH:mm:ss"))).format("HH \\hr mm \\min ss \\s\\ec")
                
                return(
                  <Table.Row key = {trade._id}>
                  <Table.Cell >{dateExecuted}</Table.Cell>
                  <Table.Cell >{duration}</Table.Cell>
                  <Table.Cell >{trade.status === 'ONGOING'?'':dateCompleted}</Table.Cell>
                  <Table.Cell >{trade.status}</Table.Cell>
                  <Table.Cell ><CloseTradeButton tradeId = {trade._id} tradeStatus={trade.status} closeStateHandler = {handleCloseClickState} /></Table.Cell>
                  <Table.Cell > 
                   <Link href = {{ pathname :'/list_trade/[id]', query: {id: trade._id}}}><a> View </a></Link>
                  </Table.Cell>
              </Table.Row>
                )

               
              })}
      </Table.Body>
    </table>
    </div>
    )
    
}

export default LogTable