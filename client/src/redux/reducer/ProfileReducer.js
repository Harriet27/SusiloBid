import {
    PROFILE_START,
    PROFILE_SUCCESS,
    PROFILE_FINISH,
    PROFILE_FAILED,
    PROFILE_OLD,
    PROFILE_OLD_DONE,
} from '../Types';

const INITIAL_STATE = {
    id: 0,
    profile: [],
    oldPass: [],
    confirmed: false,
    loading: false,
};

export const ProfileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_START:
            return {
                ...state,
                loading: true,
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        case PROFILE_OLD:
            return {
                ...state,
                oldPass: action.oldpayload,
                loading: false,
            };
        case PROFILE_OLD_DONE:
            return {
                ...state,
                confirmed: true,
                loading: false,
            };
        case PROFILE_FINISH:
            return {
                ...state,
                loading: false,
            };
        case PROFILE_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};