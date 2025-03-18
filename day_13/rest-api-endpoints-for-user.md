Here's the information in a table format:

REST API for User
| **Endpoint** | **Description** |
| --------------------------- | -------------------------------- |
| `GET /api/v1/users` | Get all users |
| `GET /api/v1/users/{id}` | Get user by ID |
| `POST /api/v1/users` | Create user |
| `PUT /api/v1/users/{id}` | Update all data of a user by ID |
| `PATCH /api/v1/users/{id}` | Update user data partially by ID |
| `DELETE /api/v1/users/{id}` | Delete user by ID |

REST API for Attendances of User

| **Endpoint**                                            | **Description**                    |
| ------------------------------------------------------- | ---------------------------------- |
| `GET /api/v1/users/{id}/attendances`                    | Get all attendance of a users      |
| `GET /api/v1/users/{id}/attendances/(attendance_id)`    | Get user attendance                |
| `POST /api/v1/users/{id}/attendances`                   | Create Attendance of User          |
| `PUT /api/v1/users/{id}/attendances/{attendance_id}`    | Update all data of user attandance |
| `PATCH /api/v1/users/{id}/attendances/{attendance_id}`  | Update user attendance partially   |
| `DELETE /api/v1/users/{id}/attendances/{attendance_id}` | Delete user attendance             |
|  |
