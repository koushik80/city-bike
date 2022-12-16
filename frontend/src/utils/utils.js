export const meterToKm = (meter) => {
    const km = Math.round(meter / 100) / 10;
    return km;
};

export const secondsToHours = (seconds) => {
    const date = new Date(null);
    date.setSeconds(seconds);
    const hhmmssFormat = date.toISOString().substr(11, 8);

    return hhmmssFormat;
};