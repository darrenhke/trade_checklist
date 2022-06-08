import React from "react";
import Link from "next/link";

const NavigationBar = () => {

    return(
     <div className="ui menu">
            <div className="header item">
                <Link href="/"><a>Trading Checklist</a></Link>
            </div>
            <Link href="/list_trade"><a className="right item">Trade Logs</a></Link>
            <a className="item">Dashboard</a>
            <a className="item">Trading Health</a>
            <a className="item">Settings</a>
    </div>
    )

}

export default NavigationBar