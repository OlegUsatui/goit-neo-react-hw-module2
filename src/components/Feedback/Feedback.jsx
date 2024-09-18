const Feedback = ({feedback, totalFeedback}) => {
    const {good, bad, neutral} = feedback;
    const positiveFeedback  = totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

    return (
        <>
            <p>Good {good}</p>
            <p>Bad {bad}</p>
            <p>Neutral {neutral}</p>
            <p>Total {totalFeedback }</p>
            <p>Positive {positiveFeedback }%</p>
        </>
    )
}

export default Feedback
