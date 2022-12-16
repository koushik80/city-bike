# Hi there<img src="https://media.giphy.com/media/l4S95aLS28TNZDlzbX/giphy.gif" width="50" height="50"/>! Here goes below my Project information

<div>
<h4 align="center"><a href="">Ci†yßîke :biking_man:</a></h4>
</div>

<div>
<h4 align="center"><a href="">Note: I started working on this app.... README will be updated during development and the app will be linked-up after deployment.</a></h4>
</div>

---

<h3 align="left">Abstract: :speech_balloon:</h3>

<p align="left">The assignment required creating a UI by using a backend service for displaying data from journeys made with city bikes in the Helsinki Capital Area. The backend is allowed to use a DB, or it can be memory-based. I preferred to use MongoDB as the memory-based will be quite slow and gave priority to building and running the application smoothly to display the data to the end-to-end users.<br>
</p>

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

  - &#x2610; Station name
  - &#x2610; Station address
  - &#x2610; Total number of journeys starting from the station
  - &#x2610; Total number of journeys ending at the station

<h4 align="left" font="bold">Additional</h4>

  - &#x2610; Station location on the map
  - &#x2610; The average distance of a journey starting from the station
  - &#x2610; The average distance of a journey ending at the station
  - &#x2610; Top 5 most popular return stations for journeys starting from the station
  - &#x2610; Top 5 most popular departure stations for journeys ending at the station
  - &#x2610; Ability to filter all the calculations per month

---

`Surprise points: :bust_in_silhouette:`

  - &#x2610; Endpoints to store new journeys data or new bicycle stations
  - &#x2610; Running backend in Docker
  - [x] Running backend in Cloud
  - &#x2610; Implement E2E tests
  - [x] Create UI for adding journeys or bicycle stations

---

---

`My edition: :point_down:`

  - [x] Cycle Route with duration using `Mapbox`

---

<h3 align="left">Technologies: :computer:</h3>

<h4 align="left" font="bold">Frontend</h4>

`./frontend`

<ul>
<li>React</li>
<li>React Router</li>
<li>React Redux</li>
<li>RTK Query(Redux JS Toolkit)</li>
<li>SASS</li>
<li>Styled Components</li>
<li>Material UI</li>
<li>Mapbox GL</li>

</ul>

<h4 align="left" font="bold">Backend</h4>

 `./backend`

<ul>
<li>Node</li>
<li>Express</li>
<li>Cors</li>
<li>Mongoose</li>
<li>Dotenv</li>
</ul>

<h4 align="left" font="bold">Development Environment</h4>

<ul>
<li>Nodemon</li>
<li>VS Code</li>
<li>Postman</li>
</ul>

---

<h3 align="left"> Prerequisites: :gear:</h3>
<p align="left">To be able to set up and run the project needed to install it local computer and the required addresses to be used</p>
<ul>
<li>install command: npm i</li>
<li>running frontend: npm start</li>
<li>Home: http://localhost:3000/</li>
<li>Journey: http://localhost:3000/journey</li>
<li>Stations: http://localhost:3000/station</li>
<li>Single Station: working on it</li>
<li>cNav(Cycle route & duration): http://localhost:3000/navigation</li>
<li>Contact: Working on it</li>
</ul>

---

<h3 align="left">Error-Handling: :gear:</h3>
<p align="left">will write....</p>


----

<div>
<h3 align="left">Project Gallery: :mountain_biking_man:</h3>

<div>
<img width="1688" alt="Screenshot 2022-12-16 at 2 11 33 AM" src="https://user-images.githubusercontent.com/89943976/207993202-ce528140-909e-4af2-bb16-378bf933d206.png">
<img width="1688" alt="Screenshot 2022-12-16 at 2 13 27 AM" src="https://user-images.githubusercontent.com/89943976/207993206-443c42ad-b869-4a27-9fe9-1f2a259503d7.png">
<img width="1688" alt="Screenshot 2022-12-16 at 2 13 09 AM" src="https://user-images.githubusercontent.com/89943976/207993210-aae3c84d-3d3f-4564-b56c-2bab239d9497.png">
<img width="1690" alt="Screenshot 2022-12-16 at 4 44 36 PM" src="https://user-images.githubusercontent.com/89943976/208123375-b679258f-0a52-4269-99ea-fc6486bc5092.png">
<img width="1690" alt="Screenshot 2022-12-16 at 4 44 55 PM" src="https://user-images.githubusercontent.com/89943976/208123382-6973de01-6a72-47af-965a-f58c2eadd0aa.png">
</div>

</div>

---

<h3 align="left">References: :paperclips:</h3>

<ul>
<li><a href="https://fullstackopen.com/en/" target="_blank">Full Stack Open 2022</a></li>
<li><a href="https://docs.mapbox.com/help/tutorials/" target="_blank">mapbox | Docs</a></li>
<li><a href="https://redux-toolkit.js.org/" target="_blank">Redux Toolkit</a></li>
<li><a href="https://www.avoindata.fi/data/en_GB/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902" target="_blank">AVOINDATA.FI(HSL)</a></li>
<li><a href="https://digitalsynopsis.com/design/beautiful-color-gradient-palettes/" target="_blank">Digital Synopsis</a></li>
<li><a href="" target="_blank">Will be added...</a></li>
<li><a href="" target="_blank">Will be added...</a></li>
</ul>


