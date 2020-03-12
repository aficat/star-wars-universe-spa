import { FETCH_PEOPLE } from "../actions/types";

const initialState = { people: [], results: [], next: null, previous: null, count: 0 };
export default function (state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case FETCH_PEOPLE:
            return { ...state, people: action.payload.people, next: action.payload.next };
        default:
            return state;
    }

}

