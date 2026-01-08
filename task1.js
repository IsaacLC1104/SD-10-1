export function costCalculator(num) {
    let n = Number(num);
    let comision = 3;
    let subtotal = n + comision;
    let interes = subtotal * 0.01;
    let total = subtotal + interes;
    return total;
}
