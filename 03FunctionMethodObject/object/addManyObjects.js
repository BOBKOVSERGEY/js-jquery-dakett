// создание конструктора
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    }
}

var quayHotel = new Hotel('Тула', 40, 25);
var parkHotel = new Hotel('Пляж', 120, 77);

console.log("Осталось номеров" + quayHotel.checkAvailability());
console.log("Осталось номеров" + parkHotel.checkAvailability());