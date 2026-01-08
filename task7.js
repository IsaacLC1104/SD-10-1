export function rubricPerfect(points) {
    if (points >= 11) {
        return "Perfect";
    }
    if (points > 8) {
        return "Excellent";
    }
    if (points > 4) {
        return "Pass";
    } else {
        return "Fail";
    }

}