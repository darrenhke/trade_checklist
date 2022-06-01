import {Divider, Grid,GridColumn,Segment} from 'semantic-ui-react'
import Trend from '../components/trading_checklist/Trend'
import FibRetracement from '../components/trading_checklist/FibRetracement'
import Volatilty from '../components/trading_checklist/Volatility'
import Closure from '../components/trading_checklist/Closure'
import Correlation from '../components/trading_checklist/Correlation'
import Rsp from '../components/trading_checklist/Rsp'
import Volume from '../components/trading_checklist/Volume'
import SaveTrade from '../components/trading_checklist/SaveTrade'
import { useRouter } from 'next/router'

import { useState } from 'react'
 const Home = () => {
  
  interface Trend {fourhourly: string;oneday: string;}
  interface FibRetracement {retracement: number}
  interface RSP{value: boolean}
  interface Volatility{minfifteen:boolean;hourone:boolean;hourfour:boolean;}
  interface Closure{close: string}
  interface Correlation{value: boolean}
  interface Volume {level:number}


  const [trend,setTrend] = useState<Trend> ({
    "fourhourly": "",
    "oneday":""
  })
  const [retracement,setRetracement] = useState<FibRetracement> ({"retracement": 0})
  const [rsp,setRSP] = useState<RSP>({"value":false})
  const [volatility,setVolatility] = useState<Volatility>({"minfifteen":false,"hourone":false,"hourfour":false})
  const [closure,setClosure] = useState<Closure>({"close":""})
  const [correlation,setCorrelation] = useState<Correlation>({"value":false})
  const [volume,setVolume] = useState<Volume>({level: 0 })

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
  const setClosureHandler = (closure: string) =>{
    setClosure({"close":closure})
  }
  const setCorrelationHandler = (value: boolean) =>{
    setCorrelation({"value":value})
  }
  const setVolumeHandler = (volume: number) =>{
    setVolume({"level":volume})
  }
  
  const handleSubmit = async (e: React.SyntheticEvent ) =>{ 
    e.preventDefault()
    const router = useRouter()
    const data = {
      "trend":
      {          
          "fourHourTrend": trend.fourhourly,
          "oneDayTrend":trend.oneday
      },
      "fibRetracement":retracement.retracement,
      "restSwingPoint":rsp.value,
      "volatility":{
          "minfifteen":volatility.minfifteen,
          "hourone":volatility.hourone,
          "hourfour": volatility.hourfour
      },
      "close":closure.close,
      "correlation":correlation.value,
      "volume": volume.level

    } 
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/trade'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)
    const result = await response.json()
    const currentTime = new Date().toLocaleString();
    alert(`Trade has been submitted at ${currentTime}`)
    router.push('/list_trade')
  }

  return (
  <div>
      <h1 className="ui center aligned header">Trading Checklist</h1>
      <form className='ui form' onSubmit={handleSubmit} >
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
               <Grid columns={2} stackable textAlign='center'>
                 <Divider vertical> -></Divider>
                 <Grid.Row>
                   <Grid.Column>
                    <Volatilty volatility = {volatility} volatility15MMSetter = {set15MVolatilityHandler} volatility1HSetter = {set1HVolatilityHandler} volatility4HSetter = {set4HMVolatilityHandler}/>
                   </Grid.Column>
                   <Grid.Column>
                   </Grid.Column>
                 </Grid.Row>
               </Grid>
                
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Closure close = {closure} setClosureHandler = {setClosureHandler}/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
                <Correlation cor = {correlation} setCor = {setCorrelationHandler}/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
                <Volume volume = {volume} setVolume = {setVolumeHandler}/>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <SaveTrade/>
      </Grid>
    </div>
    </form>
  </div>
  )
}

export default Home
