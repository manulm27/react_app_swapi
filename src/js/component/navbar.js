import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 p-4">
			<Link to="/">
				<button className="btn btn-white"><img className="star-wars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7Qnqmx31pvLWIzANsh7MdEuxK-2nwMfol2aLVpVO5Y5WybPQYQ6P3KNeU38U_-2xiHw&usqp=CAU" /></button>
			</Link>
			<div className="dropdown">
				<button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites<span className="badge">{store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favorites.map((e, i) => (
						<li key={i} className="list-fav"><a className="dropdown-item item-fav">{e}</a></li>
					))
					}
				</ul>
			</div>
		</nav>
	);
};
