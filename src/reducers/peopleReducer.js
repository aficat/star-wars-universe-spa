import { FETCH_PEOPLE } from "../actions/types";

const initialState = {
    people: [],
    count: 0,
    status: "retrieving",
    activePage: 1,
    refreshPageStatus: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PEOPLE:
            return {
                ...state,
                people: action.payload.people,
                count: action.payload.count,
                status: action.payload.status,
                activePage: action.payload.activePage,
                refreshPageStatus: action.payload.refreshPageStatus
            };
        default:
            return state;
    }

}

