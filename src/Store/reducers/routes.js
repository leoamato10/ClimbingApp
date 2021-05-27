import { ROUTES } from "../../data/data";
import { TOGGLE_DOWNLOADED, GET_ROUTES } from "../actions/routes";

const initialState = {
  routes: ROUTES,
  filteredRoutes: ROUTES,
  favoriteRoutes: [],
  downloadedRoutes: [],
  doneRoutes: [],
};

const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTES:
      return action.payload;
    case TOGGLE_DOWNLOADED:
      const existingIndex = state.downloadedRoutes.findIndex(
        (route) => route.id === action.routeId
      );
      if (existingIndex >= 0) {
        const updatedDownRoutes = [...state.downloadedRoutes];
        updatedDownRoutes.splice(existingIndex, 1);
        return { ...state, downloadedRoutes: updatedDownRoutes };
      } else {
        const route = state.routes.find((route) => route.id === action.routeId);
        return {
          ...state,
          downloadedRoutes: state.downloadedRoutes.concat(route),
        };
      }
    default:
      return state;
  }
};

export default routesReducer;
