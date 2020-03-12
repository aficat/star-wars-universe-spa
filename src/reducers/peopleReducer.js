import { FETCH_PEOPLE } from "../actions/types";

const initialState = { people: [], results: [], next: null, previous: null, count: 0 };
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PEOPLE:
            return { ...state, people: action.payload.people, next: action.payload.next, previous: action.payload.previous, count: action.payload.count };
        default:
            return state;
    }

}

