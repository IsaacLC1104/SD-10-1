export function rubricExcellent(points) {

    if (points > 8) {
        return "Excellent";
    }
    if (points > 4) {
        return "Pass";
    } else {
        return "Fail";
    }

}