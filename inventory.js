
document.addEventListener('DOMContentLoaded', function () {
    // Gets type of car through querySelector and gets seats as well 
    const typeCheckboxes = document.querySelectorAll('input[name="car-type"]');
    const seatCheckboxes = document.querySelectorAll('input[name="seats"]');
    // getting cars by class car
    const cars = document.querySelectorAll('.car');
  
    function filterCars() {
      const activeTypes = Array.from(typeCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
      const activeSeats = Array.from(seatCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
  
      cars.forEach(car => {
          //displaying only the boxes that are checked off hence "cb"
        const matchesType = activeTypes.length === 0 || activeTypes.some(type => car.classList.contains(type));
        const matchesSeats = activeSeats.length === 0 || activeSeats.some(seat => car.classList.contains(seat));
        //displaying other cars div as none instead of hidding them due to the gaps using ? to check if exists like an if-else
        //car.style.display = (matchesType && matchesSeats) ? 'block' : 'none';
        car.classList.toggle('hidden', !(matchesType && matchesSeats));

      });
    }
  
    typeCheckboxes.forEach(cb => cb.addEventListener('change', filterCars));
    seatCheckboxes.forEach(cb => cb.addEventListener('change', filterCars));
  });
  