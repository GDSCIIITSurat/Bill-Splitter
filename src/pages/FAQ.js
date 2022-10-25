import React from "react";
import "../styles/FAQ.css"
function FaqLayout(props){
    return <>
    <details className="FAQ-details">
    <summary className="FAQ-summary">{props.question}</summary>
    <p className="FAQ-p">{props.answer}</p>
    </details>
    </>
}
function FAQ(){
    return<div className="FAQ-box">
    <img id="FAQ-image" src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg?w=2000" alt=""></img>
    <div className="FAQ-container">
    <p className="FAQ-disclaimer">Frequently Asked Questions</p>
    <hr />
    <FaqLayout question="How do I create an Account ?" answer="Ans:-Go to home page,click on signup, enter details and  press signup button. As simple as that."/>
    <FaqLayout question="How do I Login ?" answer="Ans:-Go to home page, click on login ,enter email ID and password and press Login button .  As simple as that."/>
    <FaqLayout question="Is my data safe ?" answer="Ans:-Yes, no one except you can access your financial details"/>
    <FaqLayout question="Why should I use it ?" answer="Ans:-Bill-Splitter can help you to track your daily expenses and make you worry free about group expenses. "/>
    <FaqLayout question="How do I contact support team ?" answer="Ans:-You can reach us through email, phone or through post office. Any time, any day"/>
    </div>
    </div>
}
export default FAQ;