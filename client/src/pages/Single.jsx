import React from "react";
import Edit from '../img/edit.png'
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom';
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p> Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>title</h1>
        <p> You start ruminating about previous self-introductions when you got tongue-tied, when you forgot to mention something important, or worse, when you rambled on for too long. Then, you realize you’re not listening to what the others are sharing. If there was a quiz on everyone’s name, you would fail.</p>
      </div>
      <Menu />
    </div >
  );
}

export default Single;