# Transaction Dashboard: MERN Stack
A dashboard application to monitor transactions. You can search for a product and see its details whether it is sold or not and can see products based on month. You can see your results where you left off.

# Sample Images
![image](https://github.com/ritikprajapat21/transaction-dashboard/assets/112960100/02b457dc-9c42-4ef4-8771-96f965f4377d)
![image](https://github.com/ritikprajapat21/transaction-dashboard/assets/112960100/a481d390-2901-400e-93ff-19d2752fcdb5)

# Demo Video
[Screencast from 2024-06-22 15-08-29.webm](https://github.com/ritikprajapat21/transaction-dashboard/assets/112960100/2b60fb7f-d010-4bc0-b534-e3c754446d1c)

# Steps to setup

**__NOTE:__** I have used docker mongo image for mongodb so change the url as per your use in backend/db/index.js.
```
git clone https://github.com/ritikprajapat21/transaction-dashboard.git
```
For backend
```
cd transaction-dashboard/backend
npm install
```
After install you can fill mongodb with seed data by running
```
npm run seed
```
Now for frontend setup:
```
cd ../frontend
npm install
```
Now run both frontend and backend.
For frontend:
```npm run dev```
For backend:
```npm start```
