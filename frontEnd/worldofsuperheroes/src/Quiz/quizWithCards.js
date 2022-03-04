import './quizWithCards.css';
import { useHistory } from "react-router-dom";

function QuizWithCards(props) {
    const history = useHistory();
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
            const dofunc = (selectedFilter) => {
                props.setFilteredQuiz(selectedFilter);
                history.push('/quiz');
            }
            const filterRows = publisherData.map((elem,index) => {
                const imgName = './images/comics'+index+'.png';
                return <li>
                        <h3>{elem}</h3>
                        <img class = "imageQuiz" src={imgName} alt={imgName}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting   
			industry. Lorem Ipsum has been the industry's standard dummy text ever 
			since the 1500s.</p>
                    <button value={elem} onClick = {(e) => dofunc(elem)}>Take A Quiz</button>
                </li>
            })
        return filterRows;
    }

}
    return( <div id = "main">
        <ul class = "tilesWrap" id = 'tiles'>
            {renderFilteredData()}
        </ul>
        
    </div>)
}
export default QuizWithCards;