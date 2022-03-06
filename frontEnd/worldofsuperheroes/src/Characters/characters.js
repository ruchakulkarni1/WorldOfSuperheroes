import "./characters.css"
import Loader from "react-loader-spinner";

function publisherFilter(props){
    if (document.getElementById("characterWrapper") != null) {
        document.getElementById("characterWrapper").remove();
    }
    if (document.getElementById("characterWrapper1") != null) {
        document.getElementById("characterWrapper1").remove();
    }
    if (document.getElementById("flip-card") != null) {
        document.getElementById("flip-card").remove();
    }
    if (document.getElementById("characterDetails1") != null) {
        document.getElementById("characterDetails1").remove();
    }
    if (document.querySelector(".details1") != null) {
        document.querySelector(".details1").remove();
    }
    let characterWrapper = document.querySelector(".characterWrapper");
    let superhero = {};
    let superheroD = {};
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
            superhero['name'] = hero.name;
            superhero['image'] = hero.images['md'];
            superheroD['name'] = hero.name;
            superheroD['fullName'] = hero.biography.fullName;
            superheroD['publisher'] = hero.biography.publisher;
            superheroD['height'] = hero.appearance['height'][0];
            superheroD['weight'] = hero.appearance['weight'][0];
            superheroD['alignment'] = hero.biography.alignment;
            
        
            for(const [key, val] of Object.entries(hero.powerstats)) {
                superhero[key] = val;
            }
        
        let figure = document.createElement('div');
        figure.className = "figure";
        figure.id = "figure";
        let image = document.createElement('img');
        image.src  = superhero['image'];
        image.className = "image";
        image.id = "image";
        figure.append(image);
        let figCap = document.createElement('div');
        figCap.className = "figCap";
        figCap.id = "figCap";
        figCap = superhero['name'];
        figure.append(figCap);
        let details1 = document.createElement('div');
        details1.className = "details1";
        for(const [key, val] of Object.entries(superhero)) {
            image.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
        }
        for(const [key, val] of Object.entries(superheroD)) {
            details1.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/><br/>";
        }
        
        
        let card = document.createElement('div');
        card.className = 'flip-card';
        card.id ="flip-card";
        let cardinner = document.createElement('div');
        cardinner.className = 'flip-card-inner';
        cardinner.id ="flip-card-inner";
        card.append(cardinner);
        let displayImage = document.createElement('div');
        cardinner.append(displayImage);
        displayImage.className = 'flip-card-front';
        displayImage.id ="flip-card-front";
        displayImage.append(figure);
        
        let characterDetails1 = document.createElement('div');
        cardinner.append(characterDetails1);
        characterDetails1.className = 'flip-card-back';
        characterDetails1.id = "flip-card-back"
        characterDetails1.append(details1);
        characterWrapper.appendChild(card);

    }
});  
}  

function displayCharacters(props){
    if (document.getElementById("characterWrapper") != null) {
        document.getElementById("characterWrapper").remove();
    }
    if (document.getElementById("displayImage") != null) {
        document.getElementById("displayImage").remove();
    }
    if (document.getElementById("characterDetails1") != null) {
        document.getElementById("characterDetails1").remove();
    }
    if (document.querySelector(".details1") != null) {
        document.querySelector(".details1").remove();
    }
    let characterWrapper1 = document.querySelector(".characterWrapper1");
    let superhero = {}
    let superheroD ={}
    const heroes = props.data;
    heroes.forEach(hero =>{
    superhero['name'] = hero.name;
    superhero['image'] = hero.images['md'];
    superheroD['name'] = hero.name;
    superheroD['fullName'] = hero.biography.fullName;
    superheroD['firstAppearance'] = hero.biography.firstAppearance;
    superheroD['publisher'] = hero.biography.publisher;
    superheroD['height'] = hero.appearance['height'][0];
    superheroD['weight'] = hero.appearance['weight'][0];
    superheroD['alignment'] = hero.biography.alignment;
    

    for(const [key, val] of Object.entries(hero.powerstats)) {
        superhero[key] = val;
    }

let figure = document.createElement('div');
figure.className = "figure";
figure.id = "figure";
let image = document.createElement('img');
image.src  = superhero['image'];
image.className = "image";
image.id = "image";
figure.append(image);
let figCap = document.createElement('div');
figCap.className = "figCap";
figCap.id = "figCap";
figCap = superhero['name'];
figure.append(figCap);
let details1 = document.createElement('div');
details1.className = "details1";
for(const [key, val] of Object.entries(superhero)) {
    image.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
}
for(const [key, val] of Object.entries(superheroD)) {
    details1.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/><br/>";
}


let card = document.createElement('div');
card.className = 'flip-card';
card.id ="flip-card";
let cardinner = document.createElement('div');
cardinner.className = 'flip-card-inner';
cardinner.id ="flip-card-inner";
card.append(cardinner);
let displayImage = document.createElement('div');
cardinner.append(displayImage);
displayImage.className = 'flip-card-front';
displayImage.id ="flip-card-front";
displayImage.append(figure);

let characterDetails1 = document.createElement('div');
cardinner.append(characterDetails1);
characterDetails1.className = 'flip-card-back';
characterDetails1.id = "flip-card-back"
characterDetails1.append(details1);
characterWrapper1.appendChild(card);
    //characterWrapper1.append(characterDetails1);
});  
}

function showCharacters(props) {
    if (document.getElementById("characterWrapper1") != null) {
        document.getElementById("characterWrapper1").remove();
    }
    if (document.getElementById("profile") != null) {
        document.getElementById("profile").remove();
    }
    if (document.getElementById("characterWrapper") != null) {
        document.getElementById("characterWrapper").remove();
    }
    if (document.getElementById("displayImage") != null) {
        document.getElementById("displayImage").remove();
    }
    if (document.getElementById("characterDetails") != null) {
        document.getElementById("characterDetails").remove();
    }
    if (document.querySelector(".detailsChar") != null) {
        document.querySelector(".detailsChar").remove();
    }
    let characterWrapper = document.querySelector(".characterWrapper");
   
    let superhero = {};
    let superheroD = {};
    let input = document.getElementById("superheroName");
    if(input){
        superhero['name'] = input.value;
    }
    const heroes = props.data;
    console.log(heroes);
    heroes.forEach(hero => {
        
        if(hero.name.toLowerCase() === superhero['name'].toLowerCase()) {

            superhero['image'] = hero.images['md'];
            superheroD['name'] = hero.name;
            superheroD['fullName'] = hero.biography.fullName;
            superheroD['gender'] = hero.appearance.gender;
            superheroD['publisher'] = hero.biography.publisher;
            superheroD['alignment'] = hero.biography.alignment;
            superheroD['height'] = hero.appearance['height'][0];
            superheroD['weight'] = hero.appearance['weight'][0];
            superheroD['combat']  = hero.powerstats.combat;
            superheroD['durability']  = hero.powerstats.durability;
            superheroD['intelligence']  = hero.powerstats.intelligence;
            superheroD['power']  = hero.powerstats.power;
            superheroD['speed']  = hero.powerstats.speed;
            superheroD['strength']  = hero.powerstats.strength;
            

            for(const [key, val] of Object.entries(hero.powerstats)) {
                superhero[key] = val;
            }
        }
    });
    
    let image = document.createElement('img');
    image.src  = superhero['image'];
    image.className = "image";
    image.id = "image";
    let detailsChar = document.createElement('div');
    detailsChar.className = "detailsChar";
    for(const [key, val] of Object.entries(superhero)) {
        image.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
    }
    for(const [key, val] of Object.entries(superheroD)) {
        detailsChar.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/><br/>";
    }

    let profile = document.createElement('div');
    profile.id ='profile';
    profile.className='profile';
    let displayImage = document.createElement('div');
    displayImage.className = 'displayImage';
    displayImage.id ="displayImage";
    displayImage.append(image);
    profile.append(displayImage);
    let characterDetails = document.createElement('div');
    characterDetails.className = 'characterDetails';
    characterDetails.id = "characterDetails"
    characterDetails.append(detailsChar);
    profile.append(characterDetails);
    characterWrapper.append(profile);
        
    
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
                <div class="formDivChar">
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
                <div class="characterWrapper1" id="characterWrapper1"></div>
                <div class="characterWrapper" ></div>
            </div>
        );
    }

}