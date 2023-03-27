

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);


// const items = [
//     { id: 1, name: 'watch', price: 1 },
//     { id: 2, name: 'watch', price: 2 },
//     { id: 3, name: 'watch', price: 3 },
//     { id: 4, name: 'watch', price: 4 },
//     { id: 5, name: 'watch', price: 5 }
// ];



// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer, 0);



const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export {getTotalPrice as getTotal}