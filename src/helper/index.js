export const addQuantityToBasketProduct = (array, obj, func) => {
    const itemIndex = array.findIndex((orderItem) => orderItem.id === obj.id);
    //in here we find or include index
    if (itemIndex < 0) {
        //in here if we not find add new key quantity
        const newItem = {
            ...obj,
            quantity: 1,
        }
        func([...array, newItem]);
    } else {
        const newOrder = array.map((orderItem, index) => {
            if (index === itemIndex) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                };
            } else {
                return orderItem;
            }
        });
        func(newOrder);
    }
};