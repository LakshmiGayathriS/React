import { useEffect, useState } from 'react'

const Left = (props) => {
    const [contact, setContact] = useState('9790890165');
    
    
    const handleClick = () => {
        setContact('999999999');
    }
    useEffect(() => {
        setContact('1111111111');
    },[])

    return (
        <div className="introduction">
            <div className="name">
                <h3 className="n"> {props.name}</h3>
            </div>
            <div className="overview">
                <h4 className="left_head"> OVERVIEW</h4>
                <p className="para">
                    A dedicated, self motivated, organised person also capable of time management seeking for a position
                    where I can launch my career, learn new skills, expand my knowledge and leverage my learnings. </p>
            </div>
            <div className="contact">
                <h4 className="left_head">CONTACT</h4>
                <ul>
                    <li><i className="fa fa-phone-square" aria-hidden="true"></i> {contact}</li>
                    <li><i className="fa fa-envelope-square" aria-hidden="true"></i> gayathri25122001@gmail.com</li>
                    <li><i className="fa fa-linkedin-square" aria-hidden="true"></i><a
                        href="https://www.linkedin.com/in/lakshmi-gayathri-s-33864721b/"> LinkedIn</a></li>
                    <li><i className="fa fa-github-square" aria-hidden="true"></i> <a
                        href="https://github.com/gayathri-2501"> Github</a></li>
                </ul>
                <button className="click" onClick={handleClick}>Alternate contact</button>
            </div>
            <div className="skills">
                <h4 className="left_head">SKILLS</h4>
                <ul>
                    <li> C/C++</li>
                    <li> Python</li>
                    <li> Java</li>
                    <li> Front End (HTML, CSS, JS)</li>
                    <li> Back End (PHP, SQL)</li>
                </ul>
            </div>
        </div>
    );
}

export default Left;