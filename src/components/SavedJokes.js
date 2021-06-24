
function SavedJokes({ jokes, callback }) {
    return (
        <div>
            <h2>Saved</h2>
            <ul>
                {
                    jokes.map((joke, index) => {
                        return <li key={index} onClick={() => callback(index)}>{joke}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default SavedJokes;