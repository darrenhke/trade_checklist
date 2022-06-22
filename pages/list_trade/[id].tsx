import React, { useState,useEffect } from "react"
import {useRouter} from 'next/router'
import NavigationBar from "../../components/navigation_bar/NavigationBar"
import ViewStats from "../../components/view_trade/ViewStats"

const ViewTrade = () => {
    const [trade,setTrade] = useState()
    const router = useRouter()
    const pathName = router.pathname
    const asPath = router.asPath
    console.log(pathName)
    console.log(asPath)
    useEffect(()=>{
        fetch(`http://localhost:3000/api/trade?id=${queryId}`,{
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            //Set retrevied values as trade
            console.log(data.trade)
            setTrade(data.trade)
            
        })

    },[])

    return(
    <>
        <NavigationBar/>
        {/* <ViewStats trade = {trade}/> */}
        
    </>    
    )
}

export default ViewTrade


