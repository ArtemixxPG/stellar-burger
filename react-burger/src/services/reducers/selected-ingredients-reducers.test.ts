
import {
    addBun, addIngredient,
    initialState,
    ISelectedIngredientsState,
    removeBun, removeIngredient,
    selectedIngredientsReducer
} from "./selected-ingredients-reducers";

const data = [
    {
        id: "098767hg89nbv12",
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
        id: "78543qwe453cfd6755gh",
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
        id: "60666c42cc7b410027a1s897hua",
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

const state: ISelectedIngredientsState = {
    selectedBun: null,
    selectedIngredients: data
}

describe('test-selected-ingredients-reducer', () => {


        it('test-initial-state', () => {
            expect(selectedIngredientsReducer(undefined, {type: null})).toEqual(
                initialState
            )
        });

        it('test-remove-bun', () => {
            expect(selectedIngredientsReducer(initialState, removeBun())).toEqual(
                initialState
            )
        });



        it('test-remove-ingredient', () => {
            expect(selectedIngredientsReducer(state, removeIngredient("60666c42cc7b410027a1s897hua"))).toEqual(
                {
                    selectedBun: null,
                    selectedIngredients: [
                            {
                                id: "098767hg89nbv12",
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
                                id: "78543qwe453cfd6755gh",
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
                            }

                    ]
                }
            )
        });



        it('test-add-bun', () => {

            expect(selectedIngredientsReducer(initialState, addBun(data[0]))).toEqual(
                {
                    selectedBun: data[0],
                    selectedIngredients: []
                }
            )
        });

    it('test-add-ingredient', () => {

        expect(selectedIngredientsReducer(initialState, addIngredient(data[1]))).toEqual(
            {
                selectedBun: null,
                selectedIngredients: [data[1]]
            }
        )
    });

    }
)