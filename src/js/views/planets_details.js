import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'
import { useParams } from "react-router-dom";

export const Planets_details = () => {
    const { store, actions } = (useContext(Context))
    const { planet_id } = useParams()

    const remove_data = () => {
        store.planet = false
        console.log(store.planet)
    }

    useEffect(() => {
        console.log(planet_id)
        actions.getPlanet(planet_id)
    }, [])

    if (store.planet.properties) {
        return (
            <div className='container jumbo'>
            <div className="article d-flex">
                <div>
                    <img className="img" src="https://i.pinimg.com/originals/f1/32/5b/f1325b3cdab3eb40103dbd498545519d.jpg"></img>
                </div>
                <div className="text-center">
                    <h1 className="title">{store.planet.properties.name}</h1>
                    <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-between">
                <p className="text-dark">
                    <strong>Diameter:</strong>{" "}<br/>
                    {store.planet.properties.diameter}
                </p>
                <p className="text-dark">
                    <strong>Gravity:</strong>{" "}<br/>
                    {store.planet.properties.gravity}
                </p>
                <p className="text-dark">
                    <strong>Orbital period:</strong>{" "}<br/>
                    {store.planet.properties.orbital_period}
                </p>
                <p className="text-dark">
                    <strong>Terrain:</strong>{" "}<br/>
                    {store.planet.properties.terrain}
                </p>
                <p className="text-dark">
                    <strong>Population:</strong>{" "}<br/>
                    {store.planet.properties.population}
                </p>
                <p className="text-dark">
                    <strong>Surface water:</strong>{" "}<br/>
                    {store.planet.properties.surface_water}
                </p>
            </div>
            <br />
            <div className="button-back d-flex justify-content-around">
                <Link to="/" className="btn btn-dark" onClick={remove_data}>Back</Link>
                <button className="btn btn-dark" onClick={()=>{actions.addFavorites(store.planet.properties.name)}}>Like</button>
            </div>
            <br />
        </div>
        )
    } else {
        return (
            <div className='container loading'>
                <p>Loading...</p>
            </div>
        )
    }
}