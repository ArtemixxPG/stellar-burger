import {
    initialState,
    userLogout,
    userReducer,
    userRefresh,
    userRequest,
    userRequestError,
    userSuccess
} from "./user-reducer";
import {IPayloadUser} from "../../utils/prop-types-constants";

const data : IPayloadUser = {
    user: {
        email: 'artemixplay@yandex.ru',
        name: 'test-user'
    },
    refreshToken: 'refresh-test-token',
    accessToken: 'access-token-token'
}



describe('test-user-reducer', () => {


        it('test-initial-state', () => {
            expect(userReducer(undefined, {type: null})).toEqual(
                initialState
            )
        });

        it('test-success', () => {
            expect(userReducer(initialState, userSuccess(data))).toEqual(
                {
                    user: data.user,
                    error: {
                        message: '',
                        hasError: false
                    },
                    hasLoading: false,
                    isLogIn: true
                }
            )
        });

    it('test-refresh', () => {
        expect(userReducer(initialState, userRefresh(data))).toEqual(
            {
                user: data.user,
                error: initialState.error,
                hasLoading: false,
                isLogIn: true
            }
        )
    });

    it('test-logout', () => {
        expect(userReducer(initialState, userLogout())).toEqual(
            {
                user: initialState.user,
                error: initialState.error,
                isLogIn: false,
                hasLoading: false
            }
        )
    });

        it('test-request', () => {
            expect(userReducer(initialState, userRequest())).toEqual(
                initialState
            )
        });

        it('test-failure', () => {
            expect(userReducer(initialState, userRequestError('Error!'))).toEqual(
                {
                  user: initialState.user,
                    error: {
                        message: 'Error!',
                        hasError: true
                    },
                    isLogIn: false,
                    hasLoading: false
                }
            )
        });

    }
)