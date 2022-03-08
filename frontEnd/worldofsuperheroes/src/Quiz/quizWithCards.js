import './quizWithCards.css';
import { useHistory } from "react-router-dom";

function QuizWithCards(props) {
    const cardData = [
        'Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc.,formerly Marvel Publishing, Inc. and Marvel Comics Group',
        'Dark Horse Comics is an American comic book and manga publisher. It was founded in 1986 by Mike Richardson in Milwaukie, Oregon',
        'DC Comics, Inc. is an American comic book publisher and the flagship unit of DC Entertainment, a subsidiary of the Warner Bros',
        'NBC - Heroes are ordinary people around the world who discovered they have super powers. Their lives intertwine as they work together to prevent a catastrophic future.',
        'George Walton Lucas Jr. is an American film director, producer, screenwriter, and entrepreneur. Lucas is best known for creating the Star Wars and Indiana Jones franchises.',
        '"Star Trek: Discovery" begins roughly a decade before Captain Kirk five-year mission -- as portrayed in the original "Star Trek" from the 1960s -- and a century before the events of "Star Trek: Enterprise."'
    ]
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
            const populateQuiz = (selectedFilter) => {
                props.setFilteredQuiz(selectedFilter);
                history.push('/quiz');
            }
            const filterRows = publisherData.map((elem,index) => {
                const imgName = './images/comics'+index+'.png';
                return <li>
                        <h3>{elem}</h3>
                        <img class = "imageQuiz" src={imgName} alt=""/>
                        <p>{cardData[index]}</p>
                    <button value={elem} onClick = {(e) => populateQuiz(elem)}>Take A Quiz</button>
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