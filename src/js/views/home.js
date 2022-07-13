import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'

export const Home = () => {
    const { store, actions } = useContext(Context)

    useEffect(()=>{

    })

    return (
        <div className="home">
            <h1 className="m-3 type-title">Characters</h1>
            <div className="container-fluid box-cards">
                {store.characters.map((e, i) => {
                    return (
                        <div className="card m-3 character" key={i} style={{ width: '18rem' }}>
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0013/9716/2041/articles/sw-img-e1517371385732_1024x1024.jpg?v=1525123749" alt="Card image cap" />
                            <div className="card-body text-center">
                                <h5 className="card-title m-4 name-character">{e.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up.</p>
                                <Link to={`character_details/${e.uid}`} className="btn btn-dark button btn-details">Qualities</Link>
                                <button className="btn btn-dark favorites-card-btn button btn-like"><img className="like" src="https://images.emojiterra.com/google/android-10/512px/1f5a4.png" onClick={()=>{actions.addFavorites(e.name)}}/></button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h1 className="m-3 type-title">Planets</h1>
            <div className="container-fluid box-cards">
                {store.planets.map((e, i) => {
                    return (
                        <div className="card m-3 planets" key={i} style={{ width: '18rem' }}>
                            <img className="card-img-top" src="https://img1.goodfon.com/wallpaper/nbig/0/9a/star-wars-battlefront-igry-electronic-arts-dice-kosmos-space.jpg" alt="Card image cap" />
                            <div className="card-body text-center">
                                <h5 className="card-title m-4 name-planet">{e.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up.</p>
                                <Link to={`planet_details/${e.uid}`} className="btn btn-dark button btn-details">Qualities</Link>
                                <button className="btn btn-dark favorites-card-btn button btn-like"><img className="like" src="https://images.emojiterra.com/google/android-10/512px/1f5a4.png" onClick={()=>{actions.addFavorites(e.name)}}/></button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <br/>
            <br/>
            <br/>
        </div>

    )
};
