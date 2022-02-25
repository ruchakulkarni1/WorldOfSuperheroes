import "./compare.css"

function showCompare(props) {
    console.log("Comparing...");
    let superhero1 = "", superhero2="";
    let input1 = document.getElementById("superhero1dd");
    if(input1){
        superhero1 = input1.value;
    }
    let input2 = document.getElementById("superhero2dd");   
    if(input2){
        superhero2 = input2.value;
    }
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
                <form class="text-center">
                <div class="form-row mt-5 inputRow">
                    <div class="col inputCol d-flex justify-content-center">
                       <select className="form-control w-50 m-5" id="superhero1dd" defaultValue="Superhero 1" required>
                            <option value="Superhero 1" hidden >Superhero 1</option>
                            {showNames()}
                        </select>    
                    </div>
                    
                    <div class="col inputCol d-flex justify-content-center">   
                        <select className="form-control w-50 m-5" id="superhero2dd" defaultValue="Superhero 2" required>
                            <option value="Superhero 2" hidden>Superhero 2</option>
                            {showNames()}
                        </select> 
                    </div>
                </div>
                <div class="form-row mt-5 buttonRow text-center">
                <button type="button" class="compareButton" onClick={() => showCompare(props)}>Compare</button>
                </div>
                </form>  
            </div>
        );
    }
}