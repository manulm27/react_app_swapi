import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'
import { useParams } from "react-router-dom";

export const Character_details = () => {
    const { store, actions } = (useContext(Context))
    const { character_id } = useParams()

    const remove_data = () => {
        store.character = false
        console.log(store.character)
    }

    useEffect(() => {
        console.log(character_id)
        actions.getCharacter(character_id)
    }, [])

    if (store.character.properties) {
        return (
            <div className='container jumbo'>
                <div className="article d-flex">
                    <div>
                        <img className="img" src="https://www.nacionflix.com/__export/1652817679292/sites/debate/img/2022/05/17/star-wars-darth-vader.jpg_1339198940.jpg"></img>
                    </div>
                    <div className="text-center">
                        <h1 className="title">{store.character.properties.name}</h1>
                        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-between">
                    <p className="text-dark">
                        <strong>Height:</strong>{" "}<br/>
                        {store.character.properties.height}
                    </p>
                    <p className="text-dark">
                        <strong>Mass:</strong>{" "}<br/>
                        {store.character.properties.mass}
                    </p>
                    <p className="text-dark">
                        <strong>Eye color:</strong>{" "}<br/>
                        {store.character.properties.eye_color}
                    </p>
                    <p className="text-dark">
                        <strong>Skin color:</strong>{" "}<br/>
                        {store.character.properties.skin_color}
                    </p>
                    <p className="text-dark">
                        <strong>Birth year:</strong>{" "}<br/>
                        {store.character.properties.birth_year}
                    </p>
                    <p className="text-dark">
                        <strong>Gender:</strong>{" "}<br/>
                        {store.character.properties.gender}
                    </p>
                </div>
                <br />
                <div className="button-back d-flex justify-content-around">
                    <Link to="/" className="btn btn-dark" onClick={remove_data}>Back</Link>
                    <button className="btn btn-dark" onClick={()=>{actions.addFavorites(store.character.properties.name)}}>Like</button>
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
