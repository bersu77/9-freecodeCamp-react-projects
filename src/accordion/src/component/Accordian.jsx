import { useState } from "react";
import data from "./data";

const Accordion = () => {
    const [openId, setOpenId] = useState([]);

    const handleClick = (currentItemId) => {
        setOpenId((prevID)=>
            openId.includes(currentItemId)?
        prevID.filter(id=>id!==currentItemId):
        [...prevID,currentItemId]



        );
    };

    return (
        <div className="accordion">
            {data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div 
                        key={dataItem.id} 
                        className="accordion-content" // Corrected class name
                        onClick={() => handleClick(dataItem.id)}
                    >
                        <div className="question">
                            <h3>{dataItem.question}</h3>
                            <span>{openId.includes(dataItem.id) ? "-" : "+"}</span> {/* Fixed to use openId */}
                        </div>
                        {openId.includes(dataItem.id)  && (
                            <div className="answer">
                                <p>{dataItem.answer}</p>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div className="no-data">No Data Found</div>
            )}
        </div>
    );
};

export default Accordion;
