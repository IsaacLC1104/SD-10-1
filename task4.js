

export class FriendAge {


    constructor(name, anio, mes, dia) {
        this.name = name;
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
    }


    returnAge() {
        const fechaActual = new Date();
        const cumple = new Date(this.anio, this.mes , this.dia);

        let age = fechaActual.getFullYear() - cumple.getFullYear();

        const mesDiferente = fechaActual.getMonth() - cumple.getMonth();
        const diaDiferente = fechaActual.getDate() - cumple.getDate();

        if (mesDiferente < 0 || (mesDiferente === 0 && diaDiferente < 0)) {
            age--;
        }

        return `${this.name} is ${age} today!`;
    }



}