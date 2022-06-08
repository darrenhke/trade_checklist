import React from "react";
import Link from "next/link";

const NavigationBar = () => {

    return(
     <div className="ui menu">
            <div className="header item">
                <Link href="/"><a><h3>Trading Checklist</h3></a></Link>
            </div>
            <Link href="/"><a className="right item "><button className="ui primary button">New Trade</button></a></Link>
            <Link href="/list_trade"><a className="item">Trade Logs</a></Link>
            <a className="item">Dashboard</a>
            <a className="item">Trading Health</a>
            <a className="item">Settings</a>
    </div>
    )

}

export default NavigationBar