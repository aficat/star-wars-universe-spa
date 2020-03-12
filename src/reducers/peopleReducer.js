import { FETCH_PEOPLE } from "../actions/types";

const initialState = {
    people: [],
    count: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PEOPLE:
            return {
                ...state,
                people: action.payload.people,
                count: action.payload.count
            };
        default:
            return state;
    }

}

