// METER TO KILOMETER
export const meterToKm = (meter) => {
    const km = Math.round(meter / 100) / 10;
    return km;
};

// SECONDS TO HOURS: MINUTES: SECONDS
export const secondsToHours = (seconds) => {
    const date = new Date(null);
    date.setSeconds(seconds);
    const hhmmssFormat = date.toISOString().substr(11, 8);

    return hhmmssFormat;
};

// CALCULATE COVERED DISTANCE
export const calculateCoveredDistance = (array = []) => {
    const totalDistance = array.reduce((accumulator, currentValue) => accumulator + currentValue?.covered_distance, 0);

    const result = (meterToKm(totalDistance) / array?.length).toFixed(2);

    return result;
}

// FIND TOP 5 MOST POPULAR RETURN STATION
export const getMostPopularReturnStation = (array = [], stationName) => {
    //return_station_name
    // const topStation = array.filter((s) => s.return_station_name     )
    // const popularStation = array.reduce((acc, item) =>
    //       array.filter((v) => v === acc).length >=
    //       array.filter((v) => v === item).length
    //         ? acc
    //         : item,
    //     null
    //   );

    //   console.log("popularStation", popularStation)
}