import React, { useState, useEffect } from "react";
import getState from "./flux.js";


// No cambie, aquí es donde inicializamos nuestro contexto, por defecto será nulo.
export const Context = React.createContext(null);

// Esta función inyecta la tienda global en cualquier vista/componente donde desee usarla, inyectaremos el contexto en layout.js, puede verlo aquí:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
        );

		useEffect(() => {
			state.actions.getpeoples()
			state.actions.getpeople()
			state.actions.getplanets()
			state.actions.getplanet()

			console.log(state)
			/**
			 ¡EDITA ESTO!
			* Esta función es el equivalente a "window.onLoad", solo se ejecuta una vez durante toda la vida útil de la aplicación
			* debe hacer sus solicitudes de ajax o buscar solicitudes de API aquí. No use setState() para guardar datos en el
			* almacenar, en lugar de usar acciones, como esta:
			*
			* estado.acciones.loadSomeData(); <---- llamando a esta función desde las acciones flux.js
			*
			 **/
		}, []);

			// El valor inicial para el contexto ya no es nulo, sino el estado actual de este componente,
			// el contexto ahora tendrá disponibles las funciones getStore, getActions y setStore, porque fueron declaradas
			// sobre el estado de este componente
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
