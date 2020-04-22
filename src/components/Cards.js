import React, { Fragment }from 'react';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed)
    return 'Loading...'
    return (
        <Fragment>
        <div className="cards infected">
            <p>Infected</p>
            <h3><CountUp start={0} end={confirmed.value} duration={2} separator={','}/></h3>
            <h4>{new Date(lastUpdate).toDateString()}</h4>
            <p>Active cases of COVID-19</p>
        </div>
        <div className="cards recovered">
            <p>Recovered</p>
            <h3><CountUp start={0} end={recovered.value} duration={2} separator={','}/></h3>
            <h4>{new Date(lastUpdate).toDateString()}</h4>
            <p>Recoveries from COVID-19</p>
        </div>
        <div className="cards deaths">
            <p>Deaths</p>
            <h3><CountUp start={0} end={deaths.value} duration={2} separator={','}/></h3>
            <h4>{new Date(lastUpdate).toDateString()}</h4>
            <p>Deaths from COVID-19</p>
        </div>
        </Fragment>
    )
};

export default Cards
