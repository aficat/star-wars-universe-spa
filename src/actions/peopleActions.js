import { FETCH_PEOPLE } from './types';

/**
 * @param {number} activePage - current page number
 * 
 * @return {} returns dispatch - action type and payload data 
 */
export const fetchPeople = (activePage, refreshPageStatus = false) => (dispatch) => {
    fetch(`https://swapi.co/api/people/?page=${activePage}`).then(res => res.json())
        .then(data => {
            return dispatch({
                type: FETCH_PEOPLE,
                payload: {
                    people: data.results,
                    count: data.count,
                    status: data.count === 0 ? "" : "done",
                    activePage: activePage,
                    refreshPageStatus: refreshPageStatus
                }
            });
        })
        .catch(error => {
            return dispatch({
                type: FETCH_PEOPLE,
                payload: {
                    status: "error",
                }
            });
        });
}