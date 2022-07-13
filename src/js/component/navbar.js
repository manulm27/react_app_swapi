import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const remove_data = () => {
		store.character = false
        store.planet = false
    }

	return (
		<nav className="navbar navbar-light bg-light mb-3 p-4">
			<Link to="/">
				<button className="btn btn-white"><img className="star-wars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7Qnqmx31pvLWIzANsh7MdEuxK-2nwMfol2aLVpVO5Y5WybPQYQ6P3KNeU38U_-2xiHw&usqp=CAU" onClick={remove_data}/></button>
			</Link>
			<div className="dropdown">
				<button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites<span className="badge">{store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
					{store.favorites.length === 0 ?
						(
							<li key={0} className="list-fav p-2">No hay elementos</li>
						)
						:
						(
							store.favorites.map((e, i) => (
								<li key={i} className="list-fav p-2"><a className="dropdown-item item-fav p-0">{!e ? "No hay elementos" : e}</a><span><i className="fa fa-trash" onClick={() => actions.removeFavorites(i)}></i></span></li>
							))
						)
					}
				</ul>
			</div>
		</nav>
	);
};
