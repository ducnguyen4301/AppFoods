import {StartupState} from '@store/types/startupType';

export const getStartUpLoading = (state: {startup: StartupState}) =>
  state.startup.isLoading;
