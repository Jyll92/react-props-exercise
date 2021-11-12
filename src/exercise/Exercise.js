function Exercise({good = `Great`, bad = `Not Great`}){
    return (
        <div>
            <h2>{good}</h2>
            <h2>{bad}</h2>
        </div>
    )
}

export default Exercise;