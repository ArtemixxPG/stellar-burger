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



