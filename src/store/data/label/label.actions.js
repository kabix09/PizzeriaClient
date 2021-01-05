import * as labelActions from './label.constants';

export const initLabel = () => ({
    type: labelActions.INIT_LABEL
});

// Action creator
export const setLabel = label => ({
    type: labelActions.SET_LABEL,
    payload: label
});