import { FETCH_PEOPLE } from './types';

export const fetchPeople = () => (dispatch) => {
    fetch("https://swapi.co/api/people").then(res => res.json())
        .then(data => {
            return dispatch({
                type: FETCH_PEOPLE,
                payload: {
                    people: data.results,
                    next: data.next,
                    previous: data.previous,
                    count: data.count
                }
            });
        })
        .catch(error => console.error(error));
}