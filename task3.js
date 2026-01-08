export function ageCalculator(anio, mes, dia) {
    const fechaActual = new Date();
    const cumple = new Date(anio, mes, dia);

    let edad = fechaActual.getFullYear() - cumple.getFullYear();

    const mesDiferente = fechaActual.getMonth() - cumple.getMonth();
    const diaDiferente = fechaActual.getDate() - cumple.getDate();

    if (mesDiferente < 0 || (mesDiferente === 0 && diaDiferente < 0)) {
        edad--;
    }

    return edad;

}