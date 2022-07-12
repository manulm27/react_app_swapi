const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			people: [],
			planets: [],
			planet: [],
			favorites: []
		},
		actions: {
			getpeoples: async () => {
				try {
					const getdata = await fetch('https://www.swapi.tech/api/people')
					const resdata = await getdata.json()
					setStore({ peoples: resdata.results });
				}
				catch (err) {
					console.log(err)
				}
			},
			getpeople: async (id) => {
				console.log(id)
				try {
					const getdata = await fetch(`https://www.swapi.tech/api/people/${id}`)
					const resdata = await getdata.json()
					setStore({ people: resdata.result });
				}
				catch (err) {
					console.log(err)
				}
			},
			getplanets: async () => {
				try {
					const getdata = await fetch('https://www.swapi.tech/api/planets')
					const resdata = await getdata.json()
					setStore({ planets: resdata.results });
				}
				catch (err) {
					console.log(err)
				}
			},
			getplanet: async (id) => {

				console.log(id)
				try {
					const getdata = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					const resdata = await getdata.json()
					setStore({ planet: resdata.result });
				}
				catch (err) {
					console.log(err)
				}
			},
			addFavorites: (data)=>{
				const store = getStore()
				setStore({favorites: [...store.favorites, data]})
				console.log(store)
			}
			// Use establecer acciones para llamar a una función dentro de una función
		}
	};
};

export default getState;
