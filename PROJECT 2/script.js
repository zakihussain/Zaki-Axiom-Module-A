// get dom elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count= document.getElementById('count');
const total=document.getElementById('total');
const selectmovie = document.getElementById('movie');

// get the ticket price from dropdown
let ticketprice = +selectmovie.value;

updateUI();


//function to update count
function updateCount() {
    const selectedSeats= document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...selectedSeats].map( seat =>  [...seats].indexOf(seat));
    const selectedSeatsCount= selectedSeats.length;
    count.innerText= selectedSeatsCount;
    total.innerText= selectedSeatsCount * ticketprice;
    localStorage.setItem('.selectedSeats',JSON.stringify(seatIndex));
};

//fuction to save selected movie data
function saveMovieData(movieIndex,movieprice) {
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('movieprice',movieprice);
};

//fuction to get data update UI
function updateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if ( selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach( (seat,index) => {
            if ( selectedSeats.indexOf(index) > -1 ) {
                seat.classList.add('selected');
            }
        } )
    }

    const movieIndex= localStorage.getItem('movieIndex');
    if ( movieIndex !== nulll) {
        selectmovie.selectedIndex = movieIndex;
    }

    updateCount();
};

// event listner
// 1. listen for click on container
container.addEventListener('click', e => {
    if ( e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        // update the count
        updateCount();
    }
} );

//2. listen for change in movie selection
selectmovie.addEventListener('change', e => {
    ticketprice= +e.target.value;
    updateCount();
    saveMovieData(e.target.selectedIndex, e.target.value);
})