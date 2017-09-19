
export const GET_INITIAL_DATA = 'GET_INITIAL_DATA';

export function getInitialData() {
  const payload = [];
  return {
    type: GET_INITIAL_DATA,
    payload: payload
  }
}

export const START_VIDEO = 'START_VIDEO';

export function startVideo() {
  const payload = true;
  return {
    type: START_VIDEO,
    payload: payload
  }
}


export const END_VIDEO = 'END_VIDEO';

export function endVideo() {
  const payload = false;
  return {
    type: END_VIDEO,
    payload: payload
  }
}


export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export function toggleNavigation() {
  const payload = [];
  return {
    type: TOGGLE_NAVIGATION,
    payload: payload
  }
}

export const MINIMIZE_VIDEO = 'MINIMIZE_VIDEO';

export function minimizeVideo() {
  const payload = true;
  return {
    type: MINIMIZE_VIDEO,
    payload: payload
  }
}

export const MAXIMIZE_VIDEO = 'MAXIMIZE_VIDEO';

export function maximizeVideo() {
  const payload = false;
  return {
    type: MAXIMIZE_VIDEO,
    payload: payload
  }
}

export const SELECT_DOCUMENT = 'SELECT_DOCUMENT';

export function selectDocument(document) {
  const payload = document;
  return {
    type: SELECT_DOCUMENT,
    payload: payload
  }
}
