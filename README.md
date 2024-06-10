# Airline Checkin System Design

## Problem Statement
When you book your tickets with an airline you are required to complete the payment and confirm your reservation. Once the reservation is complete then you can either optionally do a web check-in and confirm your seats or just before your departure do a physical check-in at the airport.

In this problem statement, let's design this web-check in system, where the passenger logs in to the system with the PNR, performs the seat selection and the gets the boarding pass. If the passenger tries to book a seat, already booked and assigned to the other passenger show an error message requesting passenger to re-select the seats.

## Functional Requirements
1. One seat can be assigned to only one passenger and once assigned the seat cannot be transferred
2. Assume all 100 people boarding the plane are trying to make a selection of their seat at the same time
3. The check-in should be as fast as possible
4. When one passenger is booking a seat it should not lead to other passengers waiting
5. If a passenger does not complete web check-in, automatically assign the remaining seats to the remaining passengers

## Non-Functional Requirements
1. Make your high-level components operate with high availability
2. Ensure that the data in your system is durable, not matter what happens
3. Define how your system would behave while scaling-up and scaling-down
4. Make your system cost-effective and provide a justification for the same
5. Describe how capacity planning helped you made a good design decision
6. Think about how other services will interact with your service

## Capacity Estimations

Approximately, Airline operates at

3000 flights per day

100 seats per flight

### QPS
```
3000*100 = 3*10^5 request per day
3*10^5 / 86400 ~ 10^5 (Query per Second)
3 QPS

Avg considering 1 month (30 Days) ahead customer do web-checkin
3*30 = 60 QPS

System checks for available seat and book the seat
So, Read:Write = 1:1
```

### Storage
```
Trips / Seats
- 1 flight having daily 1 trip
- 100 seats per flight
- 3000 flight per day
- approx. 1 record have 1KB data (simply consider for calculation)
- 100 (seats) * 3000 (flights) * 10^3 (KB) (Per Day)
- 3 * 10^5 * 10^3 = 300 * 10^6 = 300MB per Day
- 365 (Year Days) * 10 (Years) * 300 * 10^6 (MB)
- 365 * 3 * 10^9 = 1095 * 10 ^9
- 1.095 * 10^12 ~ 1TB
```

## Data Modeling


## High Level Design


## API Design
1. GET - /api/v1/seats/{trip_id} - Get all seats for trip
2. PUT - /api/v1/seats/{trip_id} - Web-Checkin, Book a seat
3. POST - /api/v1/seats - Auto-Checkin, Book remaining seats

## Low Level Design
1. Backend - NestJs
2. Database - MySQL

### NestJs
1. Setting up a new project for "airline-checkin-system" 
    ```
    npm i -g @nestjs/cli
    $ nest new airline-checkin-system
    ```
2. Setup Controller, Service and Module
    ```
    nest generate controller seats
    nest generate service seats
    nest generate module seats
    ```
3. Setup .env file
    ```
    npm i --save @nestjs/config
    ```
    For more details refer: https://docs.nestjs.com/techniques/configuration
4. Database Setup
    ```
    npm install --save @nestjs/typeorm typeorm mysql2
    ```
    For more details refer: https://docs.nestjs.com/techniques/database
5. Define the Entity
    ```
    nest generate class seat/entities/seat
    ```