import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'

export const Home = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        console.log(store.planets)
    })
    return (
        <div className="home">
            <h1 className="m-3 type">Characters</h1>
            <div className="container-fluid box-cards">
                {store.peoples.map((e, i) => {
                    return (
                        <div className="card m-3 character" key={i} style={{ width: '18rem' }}>
                            <img className="card-img-top" src="https://gritaradio.com/wp-content/uploads/2021/10/star-warsss.jpg" alt="Card image cap" />
                            <div className="card-body text-center">
                                <h5 className="card-title m-4 name-character">{e.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`character_details/${e.uid}`} className="btn btn-dark button btn-details ">Details</Link>
                                <button className="btn btn-dark favorites-card-btn button btn-like"><img className="like" src="https://images.emojiterra.com/google/android-10/512px/1f5a4.png" onClick={()=>{actions.addFavorites(e.name)}}/></button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h1 className="m-3 type">Planets</h1>
            <div className="container-fluid box-cards">
                {store.planets.map((e, i) => {
                    return (
                        <div className="card m-3 character" key={i} style={{ width: '18rem' }}>
                            <img className="card-img-top" src="https://gritaradio.com/wp-content/uploads/2021/10/star-warsss.jpg" alt="Card image cap" />
                            <div className="card-body text-center">
                                <h5 className="card-title m-4 name-planet">{e.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`planet_details/${e.uid}`} className="btn btn-dark button btn-details">Details</Link>
                                <button className="btn btn-dark favorites-card-btn button btn-like"><img className="like" src="https://images.emojiterra.com/google/android-10/512px/1f5a4.png" onClick={()=>{actions.addFavorites(e.name)}}/></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
};
