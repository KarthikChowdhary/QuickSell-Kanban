import React from 'react';
import './Card.css';
import UserCircle from './UserCircle';
import { MdOutlineSignalCellularAlt, MdOutlineSignalCellularAlt2Bar,  MdOutlineSignalCellularAlt1Bar} from 'react-icons/md';
import {BsThreeDots} from 'react-icons/bs';
import {TfiSignal} from 'react-icons/tfi';
import {FcCancel} from 'react-icons/fc';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import {BiSolidErrorCircle,} from 'react-icons/bi';
import {FaCircleNotch} from 'react-icons/fa';
import {BiCircle} from 'react-icons/bi';
import {BsFillCircleFill} from 'react-icons/bs';
import avatar from './avatar.png';

function Card(props) {
    
    const checkMarkIconstyle = {
        color: "4895ef",
        fontSize: "1.3em",
        marginTop: "0.15em"
    }
    
    const circleNotchIconstyle = {
        color: "ffb703",
        fontSize: "1.1em",
        marginTop: "0.15em"
    }
    
    const todostyle = {
        marginTop: "0.15em"
    }
    
    const errorCirclestyle = {
        color: "fb8500",
        fontSize: "1.3em",
        marginTop: "0.15em"
    }

    const cancelstyle = {
        fontSize: "1.3em",
        marginTop: "0.15em"
    }


    let change = props.data;
    let topic = props.topic;
    let op = props.op;

    let icons = {
        "0": [<BiSolidErrorCircle style={errorCirclestyle}/>,<BiCircle style={todostyle}/>, <FaCircleNotch style={circleNotchIconstyle}/>, <IoIosCheckmarkCircle style={checkMarkIconstyle}/>,<FcCancel style={cancelstyle}/>],
        "1":[<UserCircle />, <UserCircle />, <UserCircle />, <UserCircle />, <UserCircle />],
        "2": [<BsThreeDots/>, <TfiSignal/>, <MdOutlineSignalCellularAlt />, <MdOutlineSignalCellularAlt2Bar />, <MdOutlineSignalCellularAlt1Bar />]
    }
    
  return (
    <>
    <div className="container">
    {
        change &&
        change.map((item, index) => {
            if(item.length > 0) {
                return (
                    <>
                    <div className='cards'>
                    <p className='title' key={index}><span className='iconv'>{icons[op][index]}</span>  {topic[index]} &nbsp;&nbsp; <span className='length'>{item.length}</span></p>
                    {
                        item.map(i => 
                            <div key={i.id} className="card">
                                <div className="main">
                                    <div className="one">
                                        <p className='titleId'>{i.id}</p>
                                        <p className='titlename'>{i.title}</p>
                                    </div>
                                    {(op !== "1") && <div className="two">
                                        <img src={avatar} alt="" />
                                    </div>}
                                </div>
                                <span className='tags'><span className='icontag'><BsFillCircleFill className="circleIcon"/></span> {i.tag[0]}</span>
                            </div>
                            )
                    }
                    </div>
                    </>
                )
            } else {
                return <div className='cards'><p className='title' key={index}><span className='iconv'>{icons[op][index]}</span> {topic[index]} &nbsp;&nbsp; <span className='length'>0</span></p></div>;
            }
        })
    }
    </div>
    </>
  )
}

export default Card;