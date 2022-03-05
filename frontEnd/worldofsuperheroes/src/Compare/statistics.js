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

      const intCount={'10': 0, '30': 0, '50': 0, '70': 0, '90': 0};
      
      intArray.forEach(i => {
          if(i===0 && i<=20) {
              intCount['10']++;
          } 
          else if (i===21 && i<=40) {
              intCount['30']++;
          }
          else if (i===41 && i<=60) {
            intCount['50']++;
          }
          else if (i===61 && i<=80) {
            intCount['70']++;
          }
          else if (i===81 && i<=100) {
            intCount['90']++;
          }
      })
      console.log(intArray)
      
      const statsData = {

      
        labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
        datasets: [
          {
            label: "Intelligence",
            data: intArray,
            fill: false,
            backgroundColor: "rgb(252, 70, 26)",
            borderColor: "rgba(252, 70, 26, 0.5)",
            
          },
          {
            label: "Strength",
            data: strengthArray,
            fill: false,
            backgroundColor: "rgb(0, 109, 140)",
            borderColor: "rgba(0, 109, 140, 0.5)",
          },
          {
            label: "Speed",
            data: speedArray,
            fill: false,
            backgroundColor: "rgb(255, 159, 64)",
            borderColor: "rgba(255, 159, 64, 0.8)",
          },
          {
            label: "Durability",
            data: durArray,
            fill: false,
            backgroundColor: "rgb(199, 199, 199)",
            borderColor: "rgba(199, 199, 199, 0.5)",
          },
          {
            label: "Power",
            data: powerArray,
            fill: false,
            backgroundColor: "rgb(40, 159, 64)",
            borderColor: "rgba(40, 159, 64, 0.5)",
          },
          {
            label: "Combat",
            data: combatArray,
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
            },
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false,
                maxRotation: 180,
                minRotation: 180
              }
            }
          ],
        },
        tooltips: {
        },
        responsive: true,
        maintainAspectRatio: false,
      };

        return (
        <div>
            <div class="tab">
                    <button type="button" class="statTabButton tablinks"onClick={() => loadStats()}>Statistics</button>
                    <button type="button" class="compareTabButton tablinks" onClick={() => loadCompare()}>Comparison</button>
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
                    
                    </div>
                    </div>
                </div>);
    }
      
    return(
        <div>
            <div id="newCompareGraph">
-                    {showCompareStats(props)}
            </div>
        </div>
    )
}