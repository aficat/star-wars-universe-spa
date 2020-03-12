import { FETCH_HOMEWORLD, FETCH_SPECIES, FETCH_VEHICLES, FETCH_STARSHIPS, FETCH_FILMS, FETCH_PERSON_BY_ID } from "../actions/types";

const initialState = {
    name: "",
    gender: "",
    height: 0,
    mass: 0,
    url: "",
    eyeColor: "",
    hairColor: "",
    skinColor: "",
    birthYear: "",
    homeworldURL: "",
    filmsURLs: [],
    speciesURLs: [],
    vehiclesURLs: [],
    starshipsURLs: [],
    createdDate: "",
    editedDate: "",
    homeworld: "",
    species: [],
    films: [],
    starships: [],
    vehicles: []
};
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PERSON_BY_ID:
            return { 
                ...state, 
                name: action.payload.name,
                gender: action.payload.gender,
                height: action.payload.height,
                mass: action.payload.mass,
                url: action.payload.url,
                eyeColor: action.payload.eye_color,
                hairColor: action.payload.hair_color,
                skinColor: action.payload.skin_color,
                birthYear: action.payload.birth_year,
                homeworldURL: action.payload.homeworldURL,
                filmsURLs: action.payload.filmsURLs,
                speciesURLs: action.payload.speciesURLs,
                vehiclesURLs: action.payload.vehiclesURLs,
                starshipsURLs: action.payload.starshipsURLs,
                createdDate: action.payload.created,
                editedDate: action.payload.edited
            };
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
        default:
            return state;
    }

}

