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

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');

elRooms.textContent = hotel.checkAveilability();


document.write(holtelName + '<br>');
document.write(roomsFree + '<br>');