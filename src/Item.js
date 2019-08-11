import React from 'react';

const Item = (props) => (
    <div className="item">
        <div className="target-border">
            <div className="target-dot"></div>
        </div>
        <div className="titles">
            <h3 className="item-company-title">{props.companyTitle}</h3>
            <span className="item-personal-title">{props.jobTitle}</span>
        </div>
        <div className="item-date">{props.date}</div>
        <p className="item-key-tech">{props.techStack}</p>
        <ul className="item-personal-details">
            {
                props.jobDetails.map(item => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    </div>
);




{/* <div className="item">
<div className="target-border">
    <div className="target-dot"></div>
</div>
<div className="titles">
    <h3 className="item-company-title">Digital8</h3>
    <span className="item-personal-title">React Frontend Developer</span>
</div>
<div className="item-date">Jun 2017 - current</div>
<p className="item-key-tech">
    JavaScript (ES6), SASS, React, Redux
</p>
<ul className="item-personal-details">
    <li>Was brought in to finish off a project that was under a tight deadline</li>
    <li>Started with a single trial day to see if I could be productive from day one</li>
    <li>Now working with the front end team to get this project over the line ASAP</li>
</ul>
</div> */}

export default Item;
