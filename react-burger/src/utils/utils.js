export const hashCode = (s) => {
    return s.split("").reduce(function(a, b) {
        a = ((a << 5) - a) + b.charCodeAt(0) + Math.floor(Math.random() * 10) + 1;
        return a & a;
    }, 0);
}

export const summaryOrder = (selectedIngredients) =>{
    const result = {
        sum: 0,
        listIds: []
    }

    selectedIngredients.stuff.forEach(ingredient => {
        result.sum += ingredient.price;
        result.listIds.push(ingredient._id);
})
    result.sum += selectedIngredients.bun.price;
    result.listIds.push(selectedIngredients.bun._id);

    return result;
}

export const sortArray = (dragIndex, hoverIndex, arr) => {
   const item = arr[dragIndex];
    const sortArr = [...arr]
    sortArr.splice(dragIndex, 1)
    sortArr.splice(hoverIndex, 0, item)

    return sortArr

}

export const checkResponse = (res) => {
    return  res?.ok ? res.json() : res.json().then(err => Promise.reject(err))
}

export const calculateTotalPrice = (selectedBun, selectedIngredients) => {
   return (selectedBun ? selectedBun.price : 0) * 2 + selectedIngredients
        .reduce((totalPrice, ingredient) => totalPrice + ingredient.price, 0)
}

