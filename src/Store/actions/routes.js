export const TOGGLE_DOWNLOADED = "TOGGLE_DOWNLOADED";

export const toggleDownloaded = (id) => {
  return { type: TOGGLE_DOWNLOADED, routeId: id };
};
