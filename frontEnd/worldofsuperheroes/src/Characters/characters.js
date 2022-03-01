function showCharacters(props) {
    console.log("Showing...");
    let superhero = {};
    let input = document.getElementById("superhero");
    if(input){
        superhero['name'] = input.value;
    }
    
    console.log("--> ",superhero);
    const heroes = props.data;

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
    let details1 = document.createElement('div');
    details1.className = "details1Div";
    for(const [key, val] of Object.entries(superhero)) {
        image.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
    }
    for(const [key, val] of Object.entries(superhero)) {
        details1.innerHTML += " "+ key.toUpperCase() + ": " + val+"<br/>";
    }

    let compareWrapper = document.querySelector(".compareWrapper");
    compareWrapper.className = "compareWrapper";

    let displayImage = document.createElement('div');
    displayImage.className = 'displayImage';
    displayImage.append(image);
    console.log("test",document.getElementsByClassName("displayImage"));
    if(document.getElementsByClassName("compareWrapper") !== null){
        compareWrapper.replaceChild(displayImage, displayImage);
    }
    
        compareWrapper.appendChild(displayImage);
    

    let compareStats = document.createElement('div');
    compareStats.className = 'compareStats';
    compareStats.append(details1);
    if (document.getElementsByClassName("compareWrapper") !== null) {
        compareWrapper.replaceChild(compareStats, compareStats);
    }
   
        compareWrapper.appendChild(compareStats);
    
    
    
        
      
    
    
    console.log("--> ",superhero);
}

export default function Characters(props) {
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
                       <select className="form-control w-50 mt-5" id="superhero" defaultValue="Superhero" required>
                            <option value="Superhero" hidden >Superhero </option>
                            {showNames()}
                        </select>    
                    </div>
                    
                </div>
                <div class="form-row buttonRow text-center m-5">
                <button type="button" class="compareButton" onClick={() => showCharacters(props)}>Show Character</button>
                </div>
                </form>  
                </div>

                <div class="compareWrapper">

                </div>
            </div>
        );
    }
}
