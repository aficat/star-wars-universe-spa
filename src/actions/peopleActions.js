import { FETCH_PEOPLE } from './types';

export const fetchPeople = (activePage) => (dispatch) => {
    fetch(`https://swapi.co/api/people/?page=${activePage}`).then(res => res.json())
        .then(data => {
            return dispatch({
                type: FETCH_PEOPLE,
                payload: {
                    people: data.results,
                    count: data.count
                }
            });
        })
        .catch(error => console.error(error));
}