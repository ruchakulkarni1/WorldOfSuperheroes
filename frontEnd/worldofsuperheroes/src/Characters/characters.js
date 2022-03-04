import "./characters.css"

function publisherFilter(props){
    if (document.getElementById("characterWrapper1") != null) {
        document.getElementById("characterWrapper1").remove();
    }
    if (document.getElementById("characterWrapper") != null) {
        document.getElementById("characterWrapper").remove();
    }
    let characterWrapper2 = document.querySelector(".characterWrapper2");
    let superhero = {};
    let input = document.getElementById("superhero1dd");
    if(input){
        superhero['publisher'] = input.value;
    }
    const heroes = props.data;
    console.log(heroes);
    heroes.forEach(hero => {
        console.log(hero.biography.publisher)
        console.log(superhero['publisher'])
        if(hero.biography.publisher === superhero['publisher']) {
            console.log("in loop")
            superhero['height'] = hero.appearance['height'][0];
            superhero['weight'] = hero.appearance['weight'][0];
            superhero['image'] = hero.images['md'];

            for(const [key, val] of Object.entries(hero.powerstats)) {
                superhero[key] = val;
            }
        
    
    let image = document.createElement('img');
    image.src  = superhero['image'];
    image.className = "image";
    image.id = "image";
    let details = document.createElement('div');
    details.className = "details";
    for(const [key, val] of Object.entries(superhero)) {
        image.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
    }
    for(const [key, val] of Object.entries(superhero)) {
        details.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
    }

    

    let displayImage = document.createElement('div');
    displayImage.className = 'displayImage';
    displayImage.id ="displayImage";
    displayImage.append(image);

    let characterDetails = document.createElement('div');
    characterDetails.className = 'characterDetails';
    characterDetails.id = "characterDetails"
    characterDetails.append(details);
        characterWrapper2.append(displayImage);
        characterWrapper2.append(characterDetails);
    }
});  
}  

function displayCharacters(props){
    if (document.getElementById("characterWrapper") != null) {
        document.getElementById("characterWrapper").remove();
    }
    if (document.getElementById("characterWrapper2") != null) {
        document.getElementById("characterWrapper2").remove();
    }
    let characterWrapper1 = document.querySelector(".characterWrapper1");
    let superhero = {}
    const heroes = props.data;
    heroes.forEach(hero =>{
    superhero['height'] = hero.appearance['height'][0];
    superhero['weight'] = hero.appearance['weight'][0];
    superhero['image'] = hero.images['md'];

    for(const [key, val] of Object.entries(hero.powerstats)) {
        superhero[key] = val;
    }

let image = document.createElement('img');
image.src  = superhero['image'];
image.className = "image";
image.id = "image";
let details = document.createElement('div');
details.className = "details";
for(const [key, val] of Object.entries(superhero)) {
    image.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
}
for(const [key, val] of Object.entries(superhero)) {
    details.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
}



let displayImage = document.createElement('div');
displayImage.className = 'displayImage';
displayImage.id ="displayImage";
displayImage.append(image);

let characterDetails = document.createElement('div');
characterDetails.className = 'characterDetails';
characterDetails.id = "characterDetails"
characterDetails.append(details);
    characterWrapper1.append(displayImage);
    characterWrapper1.append(characterDetails);


console.log("--> ",superhero);
});  
}

function showCharacters(props) {
    if (document.getElementById("characterWrapper1") != null) {
        document.getElementById("characterWrapper1").remove();
    }
    if (document.getElementById("displayImage") != null) {
        document.getElementById("displayImage").remove();
    }
    if (document.getElementById("characterDetails") != null) {
        document.getElementById("characterDetails").remove();
    }
    if (document.querySelector(".details") != null) {
        document.querySelector(".details").remove();
    }
    let characterWrapper = document.querySelector(".characterWrapper");
    let superhero = {};
    let input = document.getElementById("superheroName");
    if(input){
        superhero['name'] = input.value;
    }
    
    console.log("--> ",superhero);
    const heroes = props.data;
    console.log(heroes);
    heroes.forEach(hero => {
        
        if(hero.name === superhero['name']) {

            superhero['height'] = hero.appearance['height'][0];
            superhero['weight'] = hero.appearance['weight'][0];
            superhero['image'] = hero.images['md'];

            for(const [key, val] of Object.entries(hero.powerstats)) {
                superhero[key] = val;
            }
        }
    });
    
    let image = document.createElement('img');
    image.src  = superhero['image'];
    image.className = "image";
    image.id = "image";
    let details = document.createElement('div');
    details.className = "details";
    for(const [key, val] of Object.entries(superhero)) {
        image.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
    }
    for(const [key, val] of Object.entries(superhero)) {
        details.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
    }

    

    let displayImage = document.createElement('div');
    displayImage.className = 'displayImage';
    displayImage.id ="displayImage";
    displayImage.append(image);

    let characterDetails = document.createElement('div');
    characterDetails.className = 'characterDetails';
    characterDetails.id = "characterDetails"
    characterDetails.append(details);
        characterWrapper.append(displayImage);
        characterWrapper.append(characterDetails);
    
    
    console.log("--> ",superhero);
}

export default function Characters(props) {
    if(props.data) {
        const renderFilteredData = () => {
            if(props.data) {
                let publisherData = [];
                let countPerPublisher = {};
                props.data.forEach((data) => {
                    let publisherName = data.biography.publisher;
                    let cnt = countPerPublisher[publisherName];
                    if(cnt) {
                        countPerPublisher[publisherName] += 1;
                    } else {
                        countPerPublisher[publisherName] = 1;
                    }
                })
                for (const [key,value] of Object.entries(countPerPublisher)) {
                    if(value > 5 && key!=='null') {
                        publisherData.push(key);
                    }
                }
                const filterRows = publisherData.map((elem) => {
                    return <option value = {elem}>{elem}</option>
                })
            return filterRows;
        }
    }
        
        
        return(
            <div class="characterDiv">
                <div class="formDiv">
                <form class="text-center">
                <div class="form-row inputRow">
                    <div class="col inputCol d-flex justify-content-center">
                    <label for="dropdown" class = "labelPadding">Select a Publisher: </label>
                    <select className="form-control w-50 mt-5" id="superhero1dd" defaultValue="None Selected" onChange={() => publisherFilter(props)} required>
                            <option value="None Selected" hidden >None Selected</option>
                            {renderFilteredData()}
                        </select>     
                    </div>
                    
                </div>
                <div class="form-row inputRow">
                <div class="col inputCol d-flex justify-content-center">
                       <input className="form-control w-50 mt-5" id="superheroName" defaultValue="Superhero Name" required> 
                        </input>    
                    </div>
                </div>
                <div class="form-row buttonRow text-center m-5">
                <button type="button" class="characterButton" onClick={() => showCharacters(props)}>Show Character</button>
                </div>
                </form>  
                </div>
                
                <div class="characterWrapper1" id="characterWrapper1">{displayCharacters(props)}</div>
                <div class="characterWrapper2" id="characterWrapper2"></div>
                <div class="characterWrapper" >

                </div>
            </div>
        );
    }

}