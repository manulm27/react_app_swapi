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
        <>
            <div className="container-fluid box-cards">
                {store.peoples.map((e, i) => {
                    return (
                        <div className="card m-3 character" key={i} style={{ width: '18rem' }}>
                            <img className="card-img-top" src="https://gritaradio.com/wp-content/uploads/2021/10/star-warsss.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`character_details/${e.uid}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="container-fluid box-cards">
                {store.planets.map((e, i) => {
                    return (
                        <div className="card m-3 character" key={i} style={{ width: '18rem' }}>
                            <img className="card-img-top" src="https://gritaradio.com/wp-content/uploads/2021/10/star-warsss.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`planet_details/${e.uid}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    )
};
