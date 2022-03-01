import './FilterForQuiz.css';
function FilterForQuiz(props) {
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
    return (
    <div>
        <label for="dropdown" class = "labelPadding">Select a publisher for doing a quiz : </label>
        <select class="filterPadding">{renderFilteredData()}
        </select>
    </div>
    )
}
export default FilterForQuiz