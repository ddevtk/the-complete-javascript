'use strict';

// prettier-ignore

// let map, mapEvent;
// CLASS Workout
class Workout {
  // date = new Date();
  // id = (Date.now() + '').slice(-10);
  // clicks = 0

  // constructor(coords, distance, duration) {
  //   this.coords = coords;
  //   this.distance = distance; // Km
  //   this.duration = duration; // min
  // }
  date = new Date()
  id = (Date.now() + '').slice(-10)
  clicks = 0

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration
  }
  _setDescription() {
    // Prettier-ignore
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // this.description = `${this.type[0].toUpperCase()}${this.type.slice(
    //   1
    // )} on ${months[this.date.getMonth()]}`;
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]}`
  }

  click() {
    this.clicks++
  }
}

class Running extends Workout {
  type = 'running';
  // constructor(coords, distance, duration, cadence) {
  //   super(coords, distance, duration);
  //   this.cadence = cadence;
  //   this.calcPace();
  //   this._setDescription();
  // }
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  // calcPace() {
  //   this.pace = this.distance / this.duration;
  //   return this.pace;
  // }
  calcPace() {
    this.pace = this.distance / this.duration;
    return this.pace;
  }
}

// const running = new Running([12, 23], 12, 12, 12);

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([20, 14], 5.3, 24, 178);
// const cycle1 = new Cycling([20, 14], 34, 82, 456);
// console.log(run1, cycle1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// CLASS APP
class App {
  // #map;
  // #mapEvent;
  // #workout = [];
  #map;
  #mapEvent;
  #workout = [];

  constructor() {
    // GET USER'S POSITION
    this._getPosition();

    // GET DATA FROM LOCAL STORAGE
    this._getLocalStorage();

    // ATTACH EVENT HANDLER
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationFields);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  _loadMap(position) {
    const { longitude } = position.coords;
    const { latitude } = position.coords;
    this.#map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#workout.forEach(work => {
      this._renderWorkoutMaker(work);
    });
  }

  // _loadMap(position) {
  //   const { longitude } = position.coords;
  //   const { latitude } = position.coords;
  //   // console.log(`https://www.google.com/maps/@${latitude},${longitude},5z`);

  //   const coords = [latitude, longitude];

  //   this.#map = L.map('map').setView(coords, 12);

  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution:
  //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //   }).addTo(this.#map);

  //   this.#map.on('click', this._showForm.bind(this));

  //   this.#workout.forEach(work => {
  //     this._renderWorkoutMaker(work);
  //   });
  // }

  // _showForm(mapE) {
  //   this.#mapEvent = mapE;
  //   form.classList.remove('hidden');
  //   inputDistance.focus();
  // }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    console.log(mapE);
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      '';
    form.classList.add('hidden');
  }

  _toggleElevationFields() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();
    // CHECK INPUT VALUE
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    // GET DATA FROM FORM
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // IF WORKOUT RUNNING, CREATE RUNNING OBJECT
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        alert('Inputs have to be positive numbers');
      }

      workout = new Running({ lat, lng }, distance, duration, cadence);
    }

    // IF WORKOUT CYCLING, CREATE CYCLING OBJECT
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration)
      ) {
        alert('Inputs have to be positive numbers');
      }
      workout = new Cycling({ lat, lng }, distance, duration, elevation);
    }

    // ADD NEW OBJECT TO WORKOUT ARRAY
    this.#workout.push(workout);

    // RENDER WORKOUT ON MAP AS MARKER
    this._renderWorkoutMaker(workout);

    // RENDER WORKOUT ON LIST
    this._renderWorkout(workout);

    // HIDE FORM AND CLEAR INPUT FIELDS
    this._hideForm();

    // FOCUS INPUT DISTANCE FIELD
    inputDistance.focus();

    // SET LOCAL STORAGE TO ALL WORKOUTS
    this._setLocalStorage();
  }

  // RENDER WORKOUT MAKER FUNCTION
  _renderWorkoutMaker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();

      L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div> 
    `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
        `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
        `;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this.#workout.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, 12.3, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workout));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);
    if (!data) return;

    this.#workout = data;
    this.#workout.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
