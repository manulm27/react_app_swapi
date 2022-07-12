import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'
import { useParams } from "react-router-dom";

export const Planets_details = () => {
    const { store, actions } = (useContext(Context))
    const { planet_id } = useParams()

    useEffect(() => {
        console.log(planet_id)
        actions.getplanet(planet_id)
    }, [])

    const remove_data = () => {
        console.log(store.planet)
        store.planet = false
    }

    if (store.planet) {
        return (
            <div className='container'>
                <div class="jumbotron">
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4" />
                    <p>{store.planet._id}</p>
                    <p class="lead">
                        <Link to="/" className="btn btn-primary" onClick={remove_data}>Back</Link>
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <p>Loading...</p>
        )
    }
}