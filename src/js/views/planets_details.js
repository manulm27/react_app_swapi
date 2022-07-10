import React, { useContext, useEffect} from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'
import { useParams } from "react-router-dom";

export const Planets_details = () => {
    const { store, actions } = (useContext(Context))
    const { planet_id } = useParams()

    useEffect(()=>{
        console.log(planet_id)
        actions.getplanet(planet_id)
    }, [])

    const remove_data = () =>{
        console.log(store.planet)
        store.planet = false
    }

    if(store.planet){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h1>{store.planet.properties.name}</h1>
                    </div>
                    <p>{store.planet._id }</p>
                    <div className='col-6'>
                        <Link to="/" className="btn btn-primary" onClick={remove_data}>Back</Link>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <p>Loading...</p>
        )
    }
}