import {useEffect, useState} from 'react'
import './App.css'
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
    const [feedback, setFeedback] = useState(() => {
        const lsValue = localStorage.getItem('feedback');
        return lsValue ? JSON.parse(lsValue) : {good: 0, neutral: 0, bad: 0};
    })

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback))
    }, [feedback]);

    const updateFeedback = (feedbackType) => {
        setFeedback({
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1
        })
    }

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0
        })
    }
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback  = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    return (
        <>
            <Description></Description>
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback}
                     totalFeedback={totalFeedback}></Options>
            {
                totalFeedback > 0 ?
                    <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}></Feedback> :
                    <Notification></Notification>
            }
        </>
    )
}

export default App
