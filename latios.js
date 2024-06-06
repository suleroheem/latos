// Define Hotel object
const Hotel = {
    HotelID: 123,
    Name: "Hotel ABC",
    Address: "123 Main Street",
    Rating: 4.5
  };
  
  // Define Room object
  const Room = {
    RoomID: 456,
    Type: "Single",
    Price: 100,
    HotelID: Hotel.HotelID // Foreign key reference to Hotel
  };
  
  // Define Guest object
  const Guest = {
    GuestID: 789,
    Name: "John Doe",
    Email: "john@example.com"
  };
  
  // Define Reservation object
  const Reservation = {
    ReservationID: 101,
    RoomID: Room.RoomID, // Foreign key reference to Room
    GuestID: Guest.GuestID, // Foreign key reference to Guest
    CheckInDate: "2024-06-10",
    CheckOutDate: "2024-06-15"
  };
  