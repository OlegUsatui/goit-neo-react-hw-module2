const Feedback = ({feedback, totalFeedback, positiveFeedback}) => {
    const {good, bad, neutral} = feedback;

    return (
        <>
            <p>Good {good}</p>
            <p>Bad {bad}</p>
            <p>Neutral {neutral}</p>
            <p>Total {totalFeedback}</p>
            <p>Positive {positiveFeedback}%</p>
        </>
    )
}

export default Feedback
