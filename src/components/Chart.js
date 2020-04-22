import React, { useState, useEffect } from 'react'
import { getDailyData} from '../api';
import { Line, Bar } from 'react-chartjs-2'


const Chart = ({data: { confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const getApi = async () => {
           setDailyData(await getDailyData()) 
        }
        getApi()
    }, []);

    const lineChart = (
        dailyData.length
            ? (
            <Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: 'rgb(245, 233, 61)',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'rgb(134, 129, 129)',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }]
            }}
        />) : null
    );

        const barChart = (
            confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgb(245, 233, 61)',
                                'rgb(86, 219, 33)',
                                'rgb(134, 129, 129)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        tittle: { display: true, text: `Current state in ${country}`}
                    }}
                />
            ) : null
        );

    return (
        <div className="chart">
           {country ? barChart : lineChart}
           
        </div>
    )
}

export default Chart
