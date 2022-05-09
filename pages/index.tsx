import {Grid,Segment} from 'semantic-ui-react'
import Trend from '../components/Trend'
import FibRetracement from '../components/FibRetracement'
import Volatilty from '../components/Volatility'
import Clouse from '../components/Closure'
import Rsp from '../components/Rsp'
import { useState } from 'react'
import Closure from '../components/Closure'


 const Home = () => {


  interface Trend {fourhourly: string;oneday: string;}
  interface FibRetracement {retracement: number}
  interface RSP{value: boolean}
  interface Volatility{minfifteen:boolean;hourone:boolean;hourfour:boolean;}
  interface Closure{close: "type_1" |"type_2"| "typ3"}


  const [trend,setTrend] = useState<Trend> ({
    "fourhourly": "",
    "oneday":""
  })
  const [retracement,setRetracement] = useState<FibRetracement> ({"retracement": 0})
  const [rsp,setRSP] = useState<RSP>({"value":false})
  const [volatility,setVolatility] = useState<Volatility>({"minfifteen":false,"hourone":false,"hourfour":false})
  const [closure,setClosure] = useState<Closure>({"close":"type_1"})

  //Function Handlers
  const set4HTrendHandler = (item: string) => {
    setTrend({...trend,"fourhourly":item})
  }
  const set1DTrendHandler = (item: string) => {
    setTrend({...trend,"oneday":item})
  }
  const setFibHandler = (item: number) => {
    setRetracement({"retracement":item})
  }
  const setRSPHandler = (value: boolean) =>{
    setRSP({"value":value})

  }
  const set15MVolatilityHandler = (value: boolean) => {
    setVolatility({...volatility,"minfifteen":value})
  }
  const set1HVolatilityHandler = (value: boolean) => {
    setVolatility({...volatility,"hourone":value})
  }
  const set4HMVolatilityHandler = (value: boolean) => {
    setVolatility({...volatility,"hourfour":value})
  }

  

  return (
    <div>
      <h1 className="ui center aligned header">Trading Checklist</h1>
    
      <div className = "ui container grid">
        <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Trend trend = {trend} trend4HSetter = {set4HTrendHandler} trend1DSetter = {set1DTrendHandler}/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment> 
                <FibRetracement fib = {retracement} fibStateSetter = {setFibHandler}/>
              </Segment>
            <Segment>
                <Rsp rsp = {rsp} setRsp = {setRSPHandler} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
                <Volatilty volatility = {volatility} volatility15MMSetter = {set15MVolatilityHandler} volatility1HSetter = {set1HVolatilityHandler} volatility4HSetter = {set4HMVolatilityHandler}/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Closure/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
  )
}

export default Home
