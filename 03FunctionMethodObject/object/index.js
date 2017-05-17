var hotel = {
    name: 'Тула',
    rooms: 40,
    booked: 25,
    gym: true,
    rumTypes: ['twin', 'double', 'suite'],
    checkAveilability: function () {
        return this.rooms - this.booked;
    }
}

var holtelName = hotel.name;
var roomsFree = hotel.checkAveilability();


document.write(holtelName + '<br>');
document.write(roomsFree + '<br>');