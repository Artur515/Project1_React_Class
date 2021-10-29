export const customCountLength = (array) => {
    return array.map(product => product.product.quantity).reduce((current, accum) => current + accum, 0)
}


export const countTotal = (array) => {
    return array.map((product) => product.product.quantity * product.product.price)
        .reduce((current, accum) => current + accum, 0)
}