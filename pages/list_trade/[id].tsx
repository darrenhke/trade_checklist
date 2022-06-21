import React, { useState } from "react"
import { useEffect } from "react"
import {useRouter} from 'next/router'
import NavigationBar from "../../components/navigation_bar/NavigationBar"

const ViewTrade = () => {
    const [trade,setTrade] = useState({})
    const router = useRouter()
    const queryId = router.query.id
    console.log(queryId)
    
    useEffect(()=>{
        fetch(`http://localhost:3000/api/trade?id=${queryId}`,{
            method: "GET"
        })
        .then( res => res.json())
        .then(data => {
            console.log(data)
            setTrade(data.trade)
        })

    },[])

    return(
    <>
        <NavigationBar/>
            <p>{trade.fibRetracement}</p>
    </>
    )

}

export default ViewTrade


