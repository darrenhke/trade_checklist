import React, { useEffect, useState } from "react";
import { Header, Table, Rating } from 'semantic-ui-react'





const LogTable = () => {
    const [data,setData] = useState()

    useEffect(() =>{
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
    // <Table celled padded>
    // <Table.Header>
    //     <Table.Row>
    //       <Table.HeaderCell>Date</Table.HeaderCell>
    //       <Table.HeaderCell>Time Executed</Table.HeaderCell>
    //       <Table.HeaderCell>Pair</Table.HeaderCell>
    //       <Table.HeaderCell>Status</Table.HeaderCell>
    //       <Table.HeaderCell>Outcome</Table.HeaderCell>
    //       <Table.HeaderCell>Confluences</Table.HeaderCell>
    //       <Table.HeaderCell>Details</Table.HeaderCell>
    //     </Table.Row>
    //   </Table.Header>
  
    //   <Table.Body>
          
            //  <p> {data[0].dateExecuted} </p>
              data?.map((trade) =>  {
               <Table.Row>
                    <Table.Cell>
                        <Header as='h2' textAlign='center'>
                            {trade.close}
                        </Header>
                    </Table.Cell>
                </Table.Row>
               
              })

          
        
    //   </Table.Body>
    // </Table>
    )
    
}

export default LogTable