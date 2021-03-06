import { FETCH_HOMEWORLD, FETCH_SPECIES, FETCH_VEHICLES, FETCH_STARSHIPS, FETCH_FILMS, RESET } from "../actions/types";

const initialState = {
    homeworld: "Retrieving...",
    species: ["Retrieving...", ""],
    films: ["Retrieving...", ""],
    starships: ["Retrieving...", ""],
    vehicles: ["Retrieving...", ""]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_HOMEWORLD:
            return { ...state, homeworld: action.payload.homeworld };
        case FETCH_SPECIES:
            return { ...state, species: action.payload.species };
        case FETCH_FILMS:
            return { ...state, films: action.payload.films };
        case FETCH_STARSHIPS:
            return { ...state, starships: action.payload.starships };
        case FETCH_VEHICLES:
            return { ...state, vehicles: action.payload.vehicles };
        case RESET:
            return initialState;
        default:
            return state;
    }

}

