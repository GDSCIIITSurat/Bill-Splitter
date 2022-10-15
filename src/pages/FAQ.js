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
    <FaqLayout question="How Do i create an Account ?" answer="Ans:-Go to Home page,Click on Signup ,enter details and  press Signup button . As simple as that."/>
    <FaqLayout question="How Do i Login ?" answer="Ans:-Go to Home page ,Click on login ,enter Email ID and Password and press Login button .  As simple as that."/>
    <FaqLayout question="Is my Data  safe ?" answer="Ans:-Yes , No one accept you can access your financial details ."/>
    <FaqLayout question="Why should i use it ?" answer="Ans:-Bill-Splitter Can help you to track your daily expenses and make you worry free about group expenses."/>
    <FaqLayout question="Why do i contact support team ?" answer="Ans:-You can reach us through Email , Phone or through Post office .Any time , Any Day"/>
    </div>
    </div>
}
export default FAQ;