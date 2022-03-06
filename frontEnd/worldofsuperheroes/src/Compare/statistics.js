import "./statistics.css";

import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { Line } from "react-chartjs-2";
import { useHistory } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

let backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)"
];

let borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)"
];

const styles = {
  height: "500px",
  width: "500px"
}

export default function Statistics(props) {
    const history = useHistory();

    const loadCompare = () => {
        history.push('/compare');
    }
    const loadStats = () => {
        history.push('/statistics');
    }

      
      function showCompareStats(props) {
        const allHeroes = props.data;
        let male=0, female=0, other=0;
        let good=0, bad=0, neutral=0;
        let egoNo=0, egoYes=0;
        allHeroes.forEach(hero => {
            if(hero.appearance['gender']==="Male") {
                male++;
            } 
            else if(hero.appearance['gender']==="Female") {
                female++;
            } 
            else {
                console.log(hero['id'])
                other++;
            }

            if(hero.biography['alignment']==="good") {
                good++;
            } 
            else if(hero.biography['alignment']==="bad") {
                bad++;
            } 
            else {
                neutral++;
            }

            if(hero.biography["alterEgos"]==="No alter egos found.") {
                egoNo++;
            } 
            else {
                egoYes++;
            }
        })

        let intArray=[]
        let strengthArray=[]
        let speedArray=[]
        let durArray=[]
        let powerArray=[]
        let combatArray=[]
        let nameArray=[]

        allHeroes.forEach(element => {
            nameArray.push(element.biography['publisher'])
            
            intArray.push(element.powerstats['intelligence'])
            strengthArray.push(element.powerstats['strength'])
            speedArray.push(element.powerstats['speed'])
            durArray.push(element.powerstats['durability'])
            powerArray.push(element.powerstats['power'])
            combatArray.push(element.powerstats['combat'])
      });
      

        const intOccur = intArray.reduce((acc, e) => 
            acc.set(e, (acc.get(e) || 0) + 1), 
            new Map()
            );
        
        const strengthOccur = strengthArray.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
        const speedOccur = speedArray.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
        const durOccur = durArray.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
        const powerOccur = powerArray.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
        const combatOccur = combatArray.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

        const intOccur2 = new Map([...intOccur.entries()].sort(function(a,b){return a[0] - b[0]}));
        const strengthOccur2 = new Map([...strengthOccur.entries()].sort(function(a,b){return a[0] - b[0]}));
        const speedOccur2 = new Map([...speedOccur.entries()].sort(function(a,b){return a[0] - b[0]}));
        const durOccur2 = new Map([...durOccur.entries()].sort(function(a,b){return a[0] - b[0]}));
        const powerOccur2 = new Map([...powerOccur.entries()].sort(function(a,b){return a[0] - b[0]}));
        const combatOccur2 = new Map([...combatOccur.entries()].sort(function(a,b){return a[0] - b[0]}));

      let labelsForStats=[];
      
      for(let j=0;j<=100;j=j+1) {
          labelsForStats.push(j);
      }

      const statsData = {
        labels: labelsForStats,
        datasets: [
          {
            label: "Intelligence",
            data: [...intOccur2.entries()],
            fill: false,
            backgroundColor: "rgb(252, 70, 26)",
            borderColor: "rgba(252, 70, 26, 0.5)",
            labels: [...intOccur.values()]
          },
          {
            label: "Strength",
            data: [...strengthOccur2.entries()],
            fill: false,
            backgroundColor: "rgb(0, 109, 140)",
            borderColor: "rgba(0, 109, 140, 0.5)",
          },
          {
            label: "Speed",
            data: [...speedOccur2.entries()],
            fill: false,
            backgroundColor: "rgb(255, 159, 64)",
            borderColor: "rgba(255, 159, 64, 0.8)",
          },
          {
            label: "Durability",
            data: [...durOccur2.entries()],
            fill: false,
            backgroundColor: "rgb(199, 199, 199)",
            borderColor: "rgba(199, 199, 199, 0.5)",
          },
          {
            label: "Power",
            data: [...powerOccur2.entries()],
            fill: false,
            backgroundColor: "rgb(40, 159, 64)",
            borderColor: "rgba(40, 159, 64, 0.5)",
          },
          {
            label: "Combat",
            data: [...combatOccur2.entries()],
            fill: false,
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "rgba(75, 192, 192, 0.5)",
          }
        ]
      };

      const legend = {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: "#323130",
          fontSize: 14,
        },
    };
    const options = {
      legend: {
        labels: {
          fontColor:'blue'
        }
      },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              title: {
                display: true,
                text: "Frequency",
                font: {
                    size: 15
                }
            },
            },
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false,
                maxRotation: 180,
                minRotation: 180
              },
              scaleLabel: {
                display: true,
                labelString: 'Frequency'
              }
            },
            
          ],
        },
        tooltips: {
           callbacks: {
                labels: function(tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var index = tooltipItem.index;
                    return dataset.labels[index] + ': ' + dataset.data[index];
                }
                }
        },
        responsive: true,
        maintainAspectRatio: true,
      };

        return (
        <div>
            <div class="statstab">
                    <button type="button" class="statstatTabButton statstablinks" onClick={() => loadStats()}>Statistics</button>
                    <button type="button" class="statcompareTabButton statstablinks" onClick={() => loadCompare()}>Comparison</button>
                </div>
            <div class="allStatistics">
            <div class="row1">
                    <div class="genderDiv">
                        <h3>Gender</h3>
                        <div class="genderData">
                            <div class="gender">
                                <img class="genderImg" src="./icons/male.png" alt="Male count" height="52px" width="50px"></img>
                                <h4>{male}</h4>
                            </div>
                            <div class="gender">
                                <img class="genderImg" src="./icons/female.png" alt="Female count" height="52px" width="52px"></img>
                                <h4>{female}</h4>
                            </div>
                            <div class="gender">
                                <img class="genderImg" src="./icons/other.png" alt="Other count" height="52px" width="50px"></img>
                                <h4>{other}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="alignmentDiv">
                        <h3>Alignment</h3>
                        <PieChart class="pie"
                            label={(props) => { return props.dataEntry.title+" - "+props.dataEntry.value;}}
                            labelStyle={{
                                fill: 'white',
                                fontSize: '5px'
                            }}
                            labelPosition={65}
                            legend={(props) => {return props.dataEntry.color+" - "+props.dataEntry.value;}}
                            data={[
                                { title: 'Good', value: good, color: 'lightgreen',  },
                                { title: 'Bad', value: bad, color: 'lightcoral' },
                                { title: 'Neutral', value: neutral, color: 'wheat' },
                            ]}
                            viewBoxSize={[100,100]}
                        />
                    </div>
                    <div class="alterEgoDiv">
                        <h3>Alter Ego</h3>
                        <PieChart class="pie"
                            label={(props) => { return props.dataEntry.title+" - "+props.dataEntry.value;}}
                            labelStyle={{
                                fill: 'white',
                                fontSize: '5px'
                            }}
                            labelPosition={65}
                            legend={(props) => {return props.dataEntry.color+" - "+props.dataEntry.value;}}
                            data={[
                                { title: 'Yes', value: egoYes, color: 'darkgoldenrod',  },
                                { title: 'No', value: egoNo, color: 'brown' },
                            ]}
                            viewBoxSize={[100,100]}
                        />
                    </div>
                    </div>
                    <div class="row2">
                    <div class="powerDiv">
                        <h3>Super Power Stats</h3>
                        <Line  data={statsData} legend={legend} options={options} width={1000} height={500} ></Line>
                    </div>
                    </div>
                    </div>
                </div>);
    }
      
    return(
        <div>
            <div id="newCompareGraph">
                    {showCompareStats(props)}
            </div>
        </div>
    )
}