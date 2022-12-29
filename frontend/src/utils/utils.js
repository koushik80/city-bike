// METER TO KILOMETER
export const meterToKm = (meter) => {
    const km = Math.round(meter / 100) / 10;
    return km;
};

// SECONDS TO HOURS MINUTES SECONDS
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
export const getMostPopularReturnStation = (array = []) => {
    const stations = Object.values(array.reduce((a, { return_station_name }) => {
        a[return_station_name] = a[return_station_name] || { return_station_name, count: 0 };
        a[return_station_name].count++;
        return a;
    }, Object.create(null)));

    const sortedArray = [...stations].sort((a, b) => b.count - a.count);

    return sortedArray?.slice(0, 5);
}

// FIND TOP 5 MOST POPULAR STARTING STATION
export const getMostPopularStartingStation = (array = []) => {
    console.log("array", array)
    const stations = Object.values(array.reduce((a, { departure_station_name }) => {
        a[departure_station_name] = a[departure_station_name] || { departure_station_name, count: 0 };
        a[departure_station_name].count++;
        return a;
    }, Object.create(null)));

    const sortedArray = [...stations].sort((a, b) => b.count - a.count);

    return sortedArray?.slice(0, 5);
}