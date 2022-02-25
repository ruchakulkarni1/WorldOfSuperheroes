import "./compare.css"

function showCompare() {
    console.log("Comparing...")
}

export default function Compare() {
    return(
        <div class="compareDiv">
            <form class="text-center">
                <div class="form-row mt-5 inputRow">
                    <div class="col inputCol d-flex justify-content-center">
                        <input type="text" class="form-control w-50 m-5" placeholder="SuperHero 1"/>
                    </div>
                    
                    <div class="col inputCol d-flex justify-content-center">   
                        <input type="text" class="form-control w-50 m-5" placeholder="SuperHero 2"/>
                    </div>
                </div>
                <div class="form-row mt-5 buttonRow text-center">
                <button type="submit" class="compareButton" onClick={showCompare()}>Compare</button>
                </div>
            </form>  
        </div>
    );
}