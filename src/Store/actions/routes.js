export const TOGGLE_DOWNLOADED = "TOGGLE_DOWNLOADED";
export const GET_ROUTES = "GET_ROUTES";

export const toggleDownloaded = (id) => {
  return { type: TOGGLE_DOWNLOADED, routeId: id };
};
