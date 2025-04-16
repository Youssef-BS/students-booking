🏫 University Foyer Reservation System
A web-based application that allows university students to easily reserve a room in their university's foyer. The system helps manage room availability, student applications, and admin approvals in an organized and efficient manner.

🌟 Features
🔒 Student registration & login system

🏠 View available foyer rooms and facilities

📅 Reserve a room based on availability

⏳ Track reservation status (Pending / Approved / Rejected)

👨‍💼 Admin panel for managing rooms and approving reservations

📨 Email notifications for reservation updates

🗺️ Interactive map view of available rooms

## Google Maps API Setup
The Google Maps API is already configured with the following key: 
```AIzaSyDGaW_cPEW5NgmOMQY01BOQ09WtKt9kOXg```

This key has been added to the environment files:
- `src/environments/environment.ts` for development
- `src/environments/environment.prod.ts` for production

The Maps API has been enabled for this project. If you encounter any issues with the map functionality, please refer to the detailed setup guide in `google-maps-setup.md`.

## Additional APIs
The following APIs have been enabled for the Google Maps functionality:
- Maps JavaScript API
- Places API (for autocomplete features)
- Geocoding API (for address lookup)
