import React from "react";
import { Table } from "semantic-ui-react";
import moment from 'moment'

const ViewState = ({trade})=> {
    
    const dateExecuted = moment(trade.dateExecuted).format('DD/MM/YYYY, HH:mm:ss')
    const dateCompleted = moment(trade.dateClosed).format('DD/MM/YYYY, HH:mm:ss')
    const duration = trade.status === "ONGOING"? moment(trade.dateExecuted).fromNow(): moment.utc(moment(dateCompleted,"DD/MM/YYYY HH:mm:ss").diff(moment(dateExecuted,"DD/MM/YYYY HH:mm:ss"))).format("HH \\hr mm \\min ss \\s\\ec")
    const volatility4H = trade.volatility.hourfour == true ?  "HIGH" : "LOW"
    return(
    <>
        <div className = "ui container grid">
        <table className="ui celled padded table">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Pair</Table.HeaderCell>
                    <Table.HeaderCell>Executed</Table.HeaderCell>
                    <Table.HeaderCell>Duration</Table.HeaderCell>
                    <Table.HeaderCell>Closed</Table.HeaderCell>
                    <Table.HeaderCell> Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body> 
                <Table.Row key = {trade._id}>
                    <Table.Cell >PlaceHolder Value</Table.Cell>
                    <Table.Cell >{dateExecuted}</Table.Cell>
                    <Table.Cell >{duration}</Table.Cell>
                    <Table.Cell >{dateCompleted}</Table.Cell>
                    <Table.Cell >{trade.status}</Table.Cell>
                </Table.Row>       
            </Table.Body>
        </table>
        <table className="ui celled padded table">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell><b>4H</b></Table.HeaderCell>
                    <Table.HeaderCell><b>1D</b></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body> 
                <Table.Row>
                    <Table.Cell ><b>Trend</b></Table.Cell>
                    <Table.Cell >{trade.trend.fourHourTrend}</Table.Cell>
                    <Table.Cell >{trade.trend.oneDayTrend}</Table.Cell>
                </Table.Row>
                <Table.Row >
                    <Table.Cell ><b>Fib Retracement</b></Table.Cell>
                    <Table.Cell >{trade.fibRetracement}</Table.Cell>
                    <Table.Cell ></Table.Cell>
                </Table.Row> 
                <Table.Row >
                    <Table.Cell ><b>RSP</b></Table.Cell>
                    <Table.Cell >{trade.restSwingPoint}</Table.Cell>
                    <Table.Cell ></Table.Cell>
                </Table.Row>
                <Table.Row >
                    <Table.Cell ><b>Price Closure</b></Table.Cell>
                    <Table.Cell >{trade.close}</Table.Cell>
                    <Table.Cell ></Table.Cell>
                </Table.Row>
                <Table.Row >
                    <Table.Cell ><b>Volume</b></Table.Cell>
                    <Table.Cell >{trade.volume}</Table.Cell>
                    <Table.Cell ></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell ><b>Volatility</b></Table.Cell>
                    <Table.Cell >{volatility4H}</Table.Cell>
                    <Table.Cell ></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell ><b>Confluences</b></Table.Cell>
                    <Table.Cell ><i>To fill up</i></Table.Cell>
                    <Table.Cell ></Table.Cell>
                </Table.Row>                   
            </Table.Body>
        </table>
    </div>
    </>)


}

export default ViewState