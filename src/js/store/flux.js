const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			character: [],
			planets: [],
			planet: [],
			favorites: []
		},
		actions: {
			addFavorites: (data)=>{
				const store = getStore()
				setStore({favorites: [...store.favorites, data]})
				console.log(store)
			},
			removeFavorites: (i) => {
				const store = getStore()
				store.favorites.splice(i, 1);
				setStore({ favorites: [...store.favorites]});
			},
			getCharacters: async () => {
				try {
					const getdata = await fetch('https://www.swapi.tech/api/people')
					const resdata = await getdata.json()
					setStore({ characters: resdata.results });
				}
				catch (err) {
					console.log(err)
				}
			},
			getCharacter: async (id) => {
				console.log(id)
				try {
					const getdata = await fetch(`https://www.swapi.tech/api/people/${id}`)
					const resdata = await getdata.json()
					setStore({ character: resdata.result });
				}
				catch (err) {
					console.log(err)
				}
			},
			getPlanets: async () => {
				try {
					const getdata = await fetch('https://www.swapi.tech/api/planets')
					const resdata = await getdata.json()
					setStore({ planets: resdata.results });
				}
				catch (err) {
					console.log(err)
				}
			},
			getPlanet: async (id) => {

				console.log(id)
				try {
					const getdata = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					const resdata = await getdata.json()
					setStore({ planet: resdata.result });
				}
				catch (err) {
					console.log(err)
				}
			}
			// Use establecer acciones para llamar a una función dentro de una función
		}
	};
};

export default getState;
