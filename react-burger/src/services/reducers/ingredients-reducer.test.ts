
import {
    ingredientsReducer,
    ingredientsRequest, ingredientsRequestError,
    ingredientsSuccess, initialState,
} from "./ingredients-reducer";

const data = [
    {
        "_id":"60666c42cc7b410027a1a9b1",
        "name":"Краторная булка N-200i",
        "type":"bun",
        "proteins":80,
        "fat":24,
        "carbohydrates":53,
        "calories":420,
        "price":1255,
        "image":"https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v":0
    },
    {
        "_id":"60666c42cc7b410027a1a9b5",
        "name":"Говяжий метеорит (отбивная)",
        "type":"main",
        "proteins":800,
        "fat":800,
        "carbohydrates":300,
        "calories":2674,
        "price":3000,
        "image":"https://code.s3.yandex.net/react/code/meat-04.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
        "__v":0
    },

    {
        "_id":"60666c42cc7b410027a1a9b7",
        "name":"Соус Spicy-X",
        "type":"sauce",
        "proteins":30,
        "fat":20,
        "carbohydrates":40,
        "calories":30,
        "price":90,
        "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png",
        "__v":0
    },

]

describe('test-ingredients-reducer', () => {


        it('test-initial-state', () => {
            expect(ingredientsReducer(undefined, {type: null})).toEqual(
                initialState
            )
        });

    it('test-success', () => {
        expect(ingredientsReducer(initialState, ingredientsSuccess(data))).toEqual(
            {
                types: {
                    buns: [{
                        "_id":"60666c42cc7b410027a1a9b1",
                        "name":"Краторная булка N-200i",
                        "type":"bun",
                        "proteins":80,
                        "fat":24,
                        "carbohydrates":53,
                        "calories":420,
                        "price":1255,
                        "image":"https://code.s3.yandex.net/react/code/bun-02.png",
                        "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                        "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
                        "__v":0
                    }],
                    sauces: [{
                        "_id":"60666c42cc7b410027a1a9b7",
                        "name":"Соус Spicy-X",
                        "type":"sauce",
                        "proteins":30,
                        "fat":20,
                        "carbohydrates":40,
                        "calories":30,
                        "price":90,
                        "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
                        "image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
                        "image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png",
                        "__v":0
                    }],
                    mains: [{
                        "_id":"60666c42cc7b410027a1a9b5",
                        "name":"Говяжий метеорит (отбивная)",
                        "type":"main",
                        "proteins":800,
                        "fat":800,
                        "carbohydrates":300,
                        "calories":2674,
                        "price":3000,
                        "image":"https://code.s3.yandex.net/react/code/meat-04.png",
                        "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                        "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
                        "__v":0
                    }]
                },
                error: {
                    message: '',
                    hasError: false
                },
                hasLoading: false
            }
        )
    });

    it('test-request', () => {
        expect(ingredientsReducer(initialState, ingredientsRequest())).toEqual(
                initialState
        )
    });

    it('test-failure', () => {
        expect(ingredientsReducer(initialState, ingredientsRequestError('Error!'))).toEqual(
            {
                types: {
                    buns: [],
                    sauces: [],
                    mains: []
                },
                error: {
                    message: 'Error!',
                    hasError: true
                },
                hasLoading: false
            }
        )
    });

    }
)