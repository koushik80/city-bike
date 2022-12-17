class ApiFeatures {

    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    // station search by name
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {};
        this.query = this.query.find({...keyword});

        return this;
    }

    // journey search by departure_station_name
    journeySearch() {
        const keyword1 = this.queryStr.keyword ? {
            departure_station_name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {};

        this.query = this.query.find({...keyword1});

        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;

        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }

    validJourney() {
        const keyword = {
            duration: {$gte: 10},
            covered_distance: {$gte: 10}
        }

        this.query = this.query.find({...keyword});

        return this;
    }
}

module.exports = ApiFeatures;