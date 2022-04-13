export const START_UP = '@startup/request';
export const START_UP_SUCCESS = '@startup/success';

export const startupRequest = () => ({type: START_UP});
export const startupSuccess = () => ({type: START_UP_SUCCESS});
