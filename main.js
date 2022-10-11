// Recalculate the percentage of the gradient shown
function recalcPercentage(e) {
    console.log("Moved!");
    const decimal = e.clientX / e.target.offsetWidth;

    const basePercent = 50,
        percentRange = 35,
        adjustablePercent = percentRange * decimal;

    const percentage = basePercent + adjustablePercent;

    e.target.style.setProperty(
        "--gradient-percent",
        `${percentage}%`
    )
}