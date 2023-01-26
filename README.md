# Hi there<img src="https://media.giphy.com/media/l4S95aLS28TNZDlzbX/giphy.gif" width="50" height="50"/>! Here goes below my Project information

<div>
<p align="center">Click hyperlinked Ci†yßîke below to see the app</p>

<div id="header" align="center">
 <img src="https://media.giphy.com/media/778doP94sNJjYitr5C/giphy.gif" width="35" height="35"/>
</div>
<h2 align="center"><a href="https://city-bike.onrender.com">Ci†yßîke :biking_man:</a></h2>
</div>

<div>
<h4 align="center"><a href="">Note: This app is underdevelopment...</a></h4>
</div>

---

<h1 align="center">Pre-assignment</h1>

<h3 align="left">Abstract: :speech_balloon:</h3>

<p align="left">The assignment required creating a UI by using a backend service for displaying data from journeys made with city bikes in the Helsinki Capital Area. The backend is allowed to use a DB, or it can be memory-based. I preferred to use MongoDB as the memory-based will be quite slow and gave priority to building and running the application smoothly to display the data to the end-to-end users.

During this application development, I decided to use Redux for state management, studied it's documentation deeply and implemented it. I observed how it behaves consistently across client, server, and native environments. The state of my application is kept in a store, and each component can access any state that it needs from this store. I used Redux with my React application to maintain and update data across application for multiple components to share, all while remaining independent of the components.
</p>

---

---
`Provided Data to be used with this assignment to complete.`

[City Bike Finland: data 1](https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv) <br />
[City Bike Finland: data 2](https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv) <br />
[City Bike Finland: data 3](https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv)

`Information about Helsinki Region Transport’s (HSL) city bicycle stations.`

[Dataset]( https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv) <br />
[License and information]( https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902)

---


<h3 align="left">Functional Requirements: :bookmark:</h3>

```
The above-mentioned requirements are given to submit this assignment. The below-mentioned tick-marked requirements that I met.

```

`Data Import:`

<h4 align="left" font="bold">Recommended</h4>

  - [x] Import data from the CSV files to a database or in-memory storage
  - [x] Validate data before importing
  - [x] Don't import journeys that lasted for less than ten seconds
  - [x] Don't import journeys that covered distances shorter than 10 meters

`Journey list view:`

<h4 align="left" font="bold">Recommended</h4>

  - [x] Journey list view
  - [x] For each journey show departure and return stations, covered  distance in kilometers and duration in minutes

<h4 align="left" font="bold">Additional</h4>

  - [x] Pagination
  - [x] Ordering per column
  - [x] Searching
  - [x] Filtering

`Station list:`

<h4 align="left" font="bold">Recommended</h4>

  - [x] List all the stations

<h4 align="left" font="bold">Additional</h4>

  - [x] Pagination
  - [x] Searching

`Single station view:`

<h4 align="left" font="bold">Recommended</h4>

  - [x] Station name
  - [x] Station address
  - [x] Total number of journeys starting from the station
  - [x] Total number of journeys ending at the station

<h4 align="left" font="bold">Additional</h4>

  - [x] Station location on the map
  - [x] The average distance of a journey starting from the station
  - [x] The average distance of a journey ending at the station
  - [x] Top 5 most popular return stations for journeys starting from the station
  - [x] Top 5 most popular departure stations for journeys ending at the station
  - &#x2610; Ability to filter all the calculations per month

---

`Surprise points:`

  - [x] Endpoints to store new journeys data or new bicycle stations
  - &#x2610; Running backend in Docker
  - [x] Running backend in Cloud
  - &#x2610; Implement E2E tests
  - [x] Added snapshots and integration tests instead of E2E tests
  - [x] Create UI for adding journeys or bicycle stations

---

---

`My edition:`

  - [x] Cycle Route with duration using `Mapbox`
  - [x] Travelling
  - [x] Contact form using `formcarry`
  - [x] Header
  - [x] Footer

<p align="left">N.B: Map & cNav[click any place in the map to display the trip duration]</p>

---

<h3 align="left">Technologies: :computer:</h3>

<h4 align="left" font="bold">Frontend</h4>

`./frontend`

`installation command react app:` `npx create-react-app frontend --template redux`

<ul>
<li>React</li>
<li>React Router DOM</li>
<li>React Redux</li>
<li>RTK Query(Redux JS Toolkit)</li>
<li>SASS</li>
<li>Styled Components</li>
<li>Material UI</li>
<li>Mapbox GL</li>
<li>formcarry</li>
<li>formik</li>
<li>yup</li>

</ul>

<h4 align="left" font="bold">Backend</h4>

 `./backend` <br />
`API documentation:` `https://documenter.getpostman.com/view/16481716/2s8Z6yYZD9`

<ul>
<li>Node</li>
<li>Express</li>
<li>Cors</li>
<li>Mongoose</li>
<li>Dotenv</li>
<li>path</li>
</ul>

<h4 align="left" font="bold">Environment Variables used in the frontend and backend</h4>

<ul>
<li>REACT_APP_ACCESS_TOKEN</li>
<li>REACT_APP_FORM_URL</li>
<li>NODE_ENV</li>
<li>MONGO_URL_DEV</li>
<li>PORT</li>
<li>CORS_ORIGIN</li>
<li>SERVER_URL</li>
<li>EMAIL_HOST_PASSWORD</li>
</ul>

<h4 align="left" font="bold">Development Environment</h4>

<ul>
<li>Nodemon</li>
<li>VS Code</li>
<li>Postman</li>
</ul>

<h4 align="left" font="bold">Testing</h4>

<ul>
<li>chai</li>
<li>chai-http</li>
<li>mocha</li>
<li>enzyme</li>
<li>enzyme-adapter-react-16</li>
<li>react-test-renderer</li>
</ul>

---

<h3 align="left"> Prerequisites: :gear:</h3>

```
To be able to set up and run the project needed to install it local computer and the required addresses to be used

```
<p align="left">Clone this repository</p>

`https://github.com/koushik80/city-bike`

<p align="left">Change the directory</p>

`cd frontend` <br />
`cd backend`

<p align="left">Install all dependencies</p>

`npm install`

<p align="left">Run the application</p>

`running frontend:` `npm start` <br />
`running backend in development environment with nodemon: npm run dev` <br />

<p align="left">Possible changes to run in the development and production mode</p>

`Go to frontend folder-->features-->api-->apiSlice.js`

`Development:`

```
const baseQuery = fetchBaseQuery({
 - [x]  baseUrl: `http://localhost:8080/api`, // for development
  baseUrl: `/api`,
  prepareHeaders: async (headers, {getState, endpoint}) => {

  }
})
 ```
<br />

`Production:`

```
 const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:8080/api`,
  - [x] baseUrl: `/api`,     // for production
  prepareHeaders: async (headers, {getState, endpoint}) => {

  }
})
 ```
`Go to backend folder-->app-->app.js`

`Development:`

```
app.get('/', (req, res) => {
    res.status(200).json({
        message: "This is JOURNEY REST API"
    });
});

```
<br />

`Production:`

```
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

```

<h4 align="left">addresses</h4>

`Home:` `http://localhost:3000`  <br />
`Journey:` `http://localhost:3000/journey`  <br />
`Stations:` `http://localhost:3000/station`  <br />
`Single Station:` `http://localhost:3000/station/:id`  <br />
`cNav(Cycle route & duration):` `http://localhost:3000/navigation` <br />
`Contact:` `http://localhost:3000/contact`

---

---

<div>
<h3 align="left">Project Gallery: :mountain_biking_man:</h3>

<div>
<img width="1791" alt="Screenshot 2023-01-14 at 12 53 04 AM" src="https://user-images.githubusercontent.com/89943976/212433709-7f1c073a-7511-4670-9742-40fc0dc7b3c5.png">
<img width="1698" alt="Screenshot 2022-12-19 at 9 44 45 PM" src="https://user-images.githubusercontent.com/89943976/208507419-21dd3c5f-9714-45b1-91d4-c224faf917bd.png">
<img width="1688" alt="Screenshot 2022-12-16 at 2 11 33 AM" src="https://user-images.githubusercontent.com/89943976/207993202-ce528140-909e-4af2-bb16-378bf933d206.png">
<img width="1688" alt="Screenshot 2022-12-16 at 2 13 27 AM" src="https://user-images.githubusercontent.com/89943976/207993206-443c42ad-b869-4a27-9fe9-1f2a259503d7.png">
<img width="1688" alt="Screenshot 2022-12-16 at 2 13 09 AM" src="https://user-images.githubusercontent.com/89943976/207993210-aae3c84d-3d3f-4564-b56c-2bab239d9497.png">
<img width="1690" alt="Screenshot 2022-12-16 at 4 44 36 PM" src="https://user-images.githubusercontent.com/89943976/208123375-b679258f-0a52-4269-99ea-fc6486bc5092.png">
<img width="1690" alt="Screenshot 2022-12-16 at 4 44 55 PM" src="https://user-images.githubusercontent.com/89943976/208123382-6973de01-6a72-47af-965a-f58c2eadd0aa.png">
<img width="1718" alt="Screenshot 2023-01-01 at 12 47 53 PM" src="https://user-images.githubusercontent.com/89943976/210168051-d51bb9db-c7a7-4cd2-9efc-6c18a83d6d20.png">
<img width="1216" alt="Screenshot 2022-12-27 at 2 39 01 PM" src="https://user-images.githubusercontent.com/89943976/209668318-718199b7-389b-4719-8a6d-625dfafe782b.png">
<img width="1216" alt="Screenshot 2022-12-27 at 2 41 41 PM" src="https://user-images.githubusercontent.com/89943976/209668322-8073c733-17bb-45b2-b1d9-0210a4570de4.png">
</div>

</div>

---

<h3 align="left">References: :paperclips:</h3>

[Full Stack Open 2022](https://fullstackopen.com/en/) <br />
[Mapbox | Docs](https://docs.mapbox.com/help/tutorials/) <br />
[Redux Toolkit](https://redux-toolkit.js.org/) <br />
[AVOINDATA.FI(HSL](https://www.avoindata.fi/data/en_GB/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902) <br />
[Digital Synopsis](https://digitalsynopsis.com/design/beautiful-color-gradient-palettes/) <br />
[formcarry](https://formcarry.com/) <br />
[HSL](https://www.hsl.fi/) <br />



