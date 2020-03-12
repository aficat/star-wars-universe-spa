import { FETCH_PEOPLE } from './types';

/**
 * @param {number} activePage - current page number
 * 
 * @return {} returns dispatch - action type and payload data 
 */
export const fetchPeople = (activePage) => (dispatch) => {
    fetch(`https://swapi.co/api/people/?page=${activePage}`).then(res => res.json())
        .then(data => {
            return dispatch({
                type: FETCH_PEOPLE,
                payload: {
                    people: data.results,
                    count: data.count,
                    status: data.count === 0 ? "" : "done",
                    message: data.count === 0 ? "There is no data." : "Successfully retrieved people data."
                }
            });
        })
        .catch(error => {
            return dispatch({
                type: FETCH_PEOPLE,
                payload: {
                    status: "error",
                    message: "Error had occured when retrieving people data."
                }
            });
        });
}