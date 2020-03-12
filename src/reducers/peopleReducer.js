import { FETCH_PEOPLE } from "../actions/types";

const initialState = {
    people: [],
    count: 0,
    status: "retrieving",
    message: "Retrieving people data..."
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PEOPLE:
            return {
                ...state,
                people: action.payload.people,
                count: action.payload.count,
                status: action.payload.status,
                message: action.payload.message
            };
        default:
            return state;
    }

}

