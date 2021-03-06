import { FETCH_HOMEWORLD, FETCH_SPECIES, FETCH_VEHICLES, FETCH_STARSHIPS, FETCH_FILMS} from './types';

/**
 * @param {string} url - /homeworld/:homeworldId url api call
 * 
 * @return {} returns dispatch - action type and payload data 
 */
export const fetchHomeworld = (url) => (dispatch) => {
    fetch(url).then(res => res.json())
        .then(data => {
            return dispatch({
                type: FETCH_HOMEWORLD,
                payload: {
                    homeworld: data.name
                }
            });
        })
        .catch(error => console.error(error));
}

/**
 * @param {string[]} urls - a list of /species/:speciesId urls api call
 * 
 * @return {} returns dispatch - action type and payload data 
 */
export const fetchSpecies = (urls) => (dispatch) => {
    let speciesNames = [];
    urls && urls.map(url => {
        fetch(url).then(res => res.json())
            .then(data => {
                speciesNames.push(data.name);
            })
            .catch(error => console.error(error));
        return dispatch({
            type: FETCH_SPECIES,
            payload: {
                species: speciesNames
            }
        })
    })
}

/**
 * @param {string[]} urls - a list of /vehicles/:vehicleId urls api call
 * 
 * @return {} returns dispatch - action type and payload data 
 */
export const fetchVehicles = (urls) => (dispatch) => {
    let vehiclesNames = [];
    urls && urls.map(url => {
        fetch(url).then(res => res.json())
            .then(data => {
                vehiclesNames.push(data.name);
            })
            .catch(error => console.error(error));
        return dispatch({
            type: FETCH_VEHICLES,
            payload: {
                vehicles: vehiclesNames
            }
        })
    })
}

/**
 * @param {string[]} urls - a list of /starships/:starshipId urls api call
 * 
 * @return {} returns dispatch - action type and payload data 
 */
export const fetchStarships = (urls) => (dispatch) => {
    let starshipsNames = [];
    urls && urls.map(url => {
        fetch(url).then(res => res.json())
            .then(data => {
                starshipsNames.push(data.name);
            })
            .catch(error => console.error(error));
        return dispatch({
            type: FETCH_STARSHIPS,
            payload: {
                starships: starshipsNames
            }
        })
    })
}

/**
 * @param {string[]} urls - a list of /film/:filmId urls api call
 * 
 * @return {} returns dispatch - action type and payload data 
 */
export const fetchFilms = (urls) => (dispatch) => {
    let filmsTitles = [];
    urls && urls.map(url => {
        fetch(url).then(res => res.json())
            .then(data => {
                filmsTitles.push(data.title);
            })
            .catch(error => console.error(error));
        return dispatch({
            type: FETCH_FILMS,
            payload: {
                films: filmsTitles
            }
        })
    })
}

export const resetStore = () => () => {return;}