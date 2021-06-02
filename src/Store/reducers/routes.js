import { ROUTES } from "../../data/data";
import { TOGGLE_DOWNLOADED } from "../actions/routes";

const initialState = {
  routes: ROUTES,
  filteredRoutes: ROUTES,
  favoriteRoutes: [],
  downloadedRoutes: [],
  doneRoutes: [],
};

const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DOWNLOADED:
      const existingIndex = state.downloadedRoutes.findIndex(
        (route) => route.id === action.routeId
      );
      if (existingIndex >= 0) {
        const updateDownloadedRoutes = [...state.downloadedRoutes];
        updateDownloadedRoutes.splice(existingIndex, 1);
        return { ...state, downloadedRoutes: updateDownloadedRoutes };
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
