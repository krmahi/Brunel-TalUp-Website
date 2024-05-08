import React from "react";

import AccArrow from "../assets/accArrow.svg"
import Accordian from "./Accordian";
import "../styles/Faq.css";

const faqItems = [
  {
    question: "Do you offer freelancers?",
    answer: "Yes, we offer freelancers as part of our hiring solutions for clients.",
  },
  {
    question:
      "What’s the guarantee that I will be satisfied with the hired talent?",
    answer: "We strive to match you with talent that meets your requirements and expectations.",
  },
  {
    question: "Can I hire multiple talents at once?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    question: "Why should I not go to an agency directly?",
    answer: "Our platform streamlines the process and provides a wider pool of talent, saving you time and effort.",
  },
  {
    question: "Who can help me pick a right skillset and duration for me?",
    answer: "Our team can assist you in selecting the appropriate skillset and duration based on your project requirements and goals.",
  },
];

function Faq() {
  return(
    <div className="faqdiv">
        <div className="heading">
            <h1 className="heading1">What's on your mind</h1>
            <h1 className="heading2">Ask Questions</h1>
            <div className="accordianarrow">
                <img src={AccArrow} alt="Accordianarrow" />
            </div>
        </div>
        <div className="accordian">
            <Accordian items={faqItems}/>
        </div>
    </div>
  );
}

export default Faq;
