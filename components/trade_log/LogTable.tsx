import React, { useEffect, useState } from "react";
import { Header, Table, Rating } from 'semantic-ui-react'
import CloseTradeButton from "./CloseTradeButton";

const LogTable = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/trade')
        .then( res => res.json())
        .then(data => {
            setData(data.trades)
        })
    },[])
    
    console.log(data)
    
    //TODO Create loading page when data is being fetched
    //const [isLoading,setLoading] = useState(false)
    interface Trade {
        dateExecuted: number;
    }
  
    return(
    <Table celled padded>
    <Table.Header>
        <Table.Row>
          <Table.HeaderCell>DateTime Executed</Table.HeaderCell>
          {/* <Table.HeaderCell>Pair</Table.HeaderCell> */}
          <Table.HeaderCell>Status</Table.HeaderCell>
          {/* <Table.HeaderCell>Outcome</Table.HeaderCell> */}
          {/* <Table.HeaderCell>Confluences</Table.HeaderCell> */}
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
              {data.map((trade) =>  {
                let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(trade.dateExecuted)
                return(
                  <Table.Row key = {trade._id}>
                  <Table.Cell >{date}</Table.Cell>
                  <Table.Cell >{trade.status}</Table.Cell>
                  <Table.Cell ><CloseTradeButton tradeId = {trade._id} tradeStatus={trade.status}/></Table.Cell>
              </Table.Row>
                )

               
              })}
      </Table.Body>
    </Table>
    )
    
}

export default LogTable