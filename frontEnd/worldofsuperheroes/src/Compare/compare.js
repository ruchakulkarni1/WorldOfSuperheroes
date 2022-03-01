import "./compare.css"

function showCompare(props) {
    console.log("Comparing...");
    if (document.getElementById("CompareStats") != null) {
        document.getElementById("CompareStats").remove();
    }
    if (document.querySelector(".details1Div") != null) {
        document.querySelector(".details1Div").remove();
    }
    if (document.querySelector(".details2Div") != null) {
        document.querySelector(".details2Div").remove();
    }

    let superhero1 = {}, superhero2={};
    let input1 = document.getElementById("superhero1dd");
    if(input1){
        superhero1['name'] = input1.value;
    }
    let input2 = document.getElementById("superhero2dd");   
    if(input2){
        superhero2['name'] = input2.value;
    }
    //console.log("--> ",superhero1, superhero2);
    const heroes = props.data;
    let image1;
    let image2;

    heroes.forEach(hero => {
        if(hero.name === superhero1['name']) {
            //console.group("=== Superhero1 ===");
            //console.log(hero.powerstats); 

            superhero1['height'] = hero.appearance['height'][0];
            superhero1['weight'] = hero.appearance['weight'][0];
            image1 = hero.images['sm'];

            for(const [key, val] of Object.entries(hero.powerstats)) {
                superhero1[key] = val;
            }
        }
        if(hero.name === superhero2['name']) {
            //console.group("=== Superhero2 ===");
            //console.log(hero.powerstats);

            superhero2['height'] = hero.appearance['height'][0];
            superhero2['weight'] = hero.appearance['weight'][0];
            image2 = hero.images['sm'];

            for(const [key, val] of Object.entries(hero.powerstats)) {
                superhero2[key] = val;
            }
        }
    });

    let details1 = document.createElement('div');
    details1.className = "details1Div";

    details1.innerHTML = "<img alt=\"image1\" src="+image1+"></img>";

    for(const [key, val] of Object.entries(superhero1)) {
        if(key === 'name') {
            details1.innerHTML += "<h2> "+val+"</h2><br/>";
        }
        else {
            details1.innerHTML += " "+ key + ": " + val+"<br/>";
        }
    }

    let details2 = document.createElement('div');
    details2.className = "details2Div";

    details2.innerHTML = "<img alt=\"image2\" src="+image2+"></img>";

    for(const [key2, val2] of Object.entries(superhero2)) {
        if(key2 === 'name') {
            details2.innerHTML += "<h2> "+val2+"</h2><br/>";
        }
        else {
            details2.innerHTML += " "+ key2 + ": " + val2+"<br/>";
        }
    }

    let compareStats = document.createElement('div');
    compareStats.className = 'compareStats';
    
    //let compareStats = document.querySelector('.compareStats');
    compareStats.append(details1);
    compareStats.append(details2);
    
    let compareWrapper = document.querySelector(".compareWrapper"); 
    compareWrapper.append(compareStats);

    let comparisonHtmlString = `
    <div id="Comparison-card">
        <div id="Comparison-statbars" class="stat-bars">
            <div id="all-bars" class="stat-bars">

                <h3>Intelligence</h3>
                <div class="comparison-bar1" style="--bar-value:${superhero1['intelligence']}%;">${superhero1['intelligence']}</div>
                <div class="comparison-bar2" style="--bar-value:${superhero2['intelligence']}%;">${superhero2['intelligence']}</div>
            
                <h3>Strength</h3>
                <div class="comparison-bar1" style="--bar-value:${superhero1['strength']}%;">${superhero1['strength']}</div>
                <div class="comparison-bar2" style="--bar-value:${superhero2['strength']}%;">${superhero2['strength']}</div>

                <h3>Speed</h3>
                <div class="comparison-bar1" style="--bar-value:${superhero1['speed']}%;">${superhero1['speed']}</div>
                <div class="comparison-bar2" style="--bar-value:${superhero2['speed']}%;">${superhero2['speed']}</div>

                <h3>Durability</h3>
                <div class="comparison-bar1" style="--bar-value:${superhero1['durability']}%;">${superhero1['durability']}</div>
                <div class="comparison-bar2" style="--bar-value:${superhero2['durability']}%;">${superhero2['durability']}</div>

                <h3>Power</h3>
                <div class="comparison-bar1" style="--bar-value:${superhero1['power']}%;">${superhero1['power']}</div>
                <div class="comparison-bar2" style="--bar-value:${superhero2['power']}%;">${superhero2['power']}</div>

                <h3>Combat</h3>
                <div class="comparison-bar1" style="--bar-value:${superhero1['combat']}%;">${superhero1['combat']}</div>
                <div class="comparison-bar2" style="--bar-value:${superhero2['combat']}%;">${superhero2['combat']}</div>
            </div>
        </div>
    </div>
`
let comparisonCard = document.getElementById("Comparison-card");
if (comparisonCard != null) {
    comparisonCard.remove();
}
compareWrapper.insertAdjacentHTML("beforeend", comparisonHtmlString);
    
    console.log("--> ",superhero1, superhero2);
}

export default function Compare(props) {
    if(props.data) {
        const showNames = () => {
            if(props.data) {
                const names = props.data.map((elem) => {
                    return <option value = {elem.name}>{elem.name}</option>
                })
            return names;
            }
        }
        
        return(
            <div class="compareDiv">
                <div class="formDiv">
                <form class="text-center">
                <div class="form-row inputRow">
                    <div class="col inputCol d-flex justify-content-center">
                       <select className="form-control w-50 mt-5" id="superhero1dd" defaultValue="Superhero 1" required>
                            <option value="Superhero 1" hidden >Superhero 1</option>
                            {showNames()}
                        </select>    
                    </div>
                    
                    <div class="col inputCol d-flex justify-content-center">   
                        <select className="form-control w-50 mt-5" id="superhero2dd" defaultValue="Superhero 2" required>
                            <option value="Superhero 2" hidden>Superhero 2</option>
                            {showNames()}
                        </select> 
                    </div>
                </div>
                <div class="form-row buttonRow text-center m-5">
                <button type="button" class="compareButton" onClick={() => showCompare(props)}>Compare</button>
                </div>
                </form>  
                </div>
                <div class="compareWrapper">

                </div>
                <div class="compareGraph">

                </div>
            </div>
        );
    }
}