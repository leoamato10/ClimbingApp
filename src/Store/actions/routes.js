export const TOGGLE_DOWNLOADED = "TOGGLE_DOWNLOADED";
export const SEARCH_ROUTES = "SEARCH_ROUTES";

export const toggleDownloaded = (id) => {
  return { type: TOGGLE_DOWNLOADED, routeId: id };
};

export const searchRoutes = (searchResult) => {
  return { type: SEARCH_ROUTES, payload: searchResult };
};
