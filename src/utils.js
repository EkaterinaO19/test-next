export const calculateTotal = (cart) => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
        totalQuantity += item.quantity || 0;
        totalPrice += item.price * item.quantity || 0;
    });
    return { totalPrice, totalQuantity };
};