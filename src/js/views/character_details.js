import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'
import { useParams } from "react-router-dom";

export const Character_details = () => {
    const { store, actions } = (useContext(Context))
    const { character_id } = useParams()

    useEffect(() => {
        console.log(character_id)
        actions.getpeople(character_id)
    }, [])

    const remove_data = () => {
        console.log(store.people)
        store.people = false
    }

    if (store.people) {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h1>{store.people.properties.name}</h1>
                    </div>
                    <p>{store.people._id}</p>
                    <div className='col-6'>
                        <Link to="/" className="btn btn-primary" onClick={remove_data}>Back</Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <p>Loading...</p>
        )
    }
}
