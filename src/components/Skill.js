import React, { Component } from 'react';

const Skill = ({ skills }) => {

    const { name } = skills;
    console.log("skill", skills);


    return (
        <li className="list-inline-item mx-auto bg-white rounded" >
            <span>
                <div className="text-center skills-tile text-dark">
                    <i className={skills.class} style={{ fontSize: "500%" }}>
                        <p
                            className="text-center"
                            style={{ fontSize: "30%", marginTop: "4px" }}
                        >
                            {name}
                        </p>
                    </i>
                </div>
            </span>
        </li>
    );


}


export default Skill;


