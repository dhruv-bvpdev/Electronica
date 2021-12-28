# Electrónica E-Commerce App

![Home Screen](/app_ss/home_page.png?raw=true)
![Profile Screen](/app_ss/profile_page.png?raw=true)
![Cart](/app_ss/cart_page.png?raw=true)
![Order Summary Screen](/app_ss/order_summary.png?raw=true)

### Live Deployment

http://electronica-ecom.herokuapp.com/

### Features

1. Full featured shopping cart
2. Product reviews and ratings
3. Top products carousel
4. Product pagination
5. Product search feature
6. User profile with orders
7. Admin product management
8. Admin user management
9. Admin Order details page
10. Mark orders as delivered option
11. Checkout process (shipping, payment method, etc)
12. Stripe payment integration
13. Database seeder (products & users)

### Note on Issues

For any bugs or errors in the project reach out to me on dhruv.gursahani@outlook.com

### Usage

#### Install Dependencies (frontend & backend)

- yarn install
- cd frontend
- yarn install

#### Run

##### Run frontend (:3000) & backend (:5000)

- yarn run dev

##### Run backend only

- yarn run server

### Build & Deploy

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

#### Import data

- yarn run data:import

#### Destroy data

- yarn run data:destroy

### License

The MIT License

Copyright (c) 2021 Dhruv Gursahani https://dhruv-gursahani.herokuapp.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
