import { Controller, Get, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { SeatsService } from './seats.service';
import { Seat } from './seats.interface'; // TODO

@Controller('api/v1/seats')
export class SeatsController {

    constructor(private readonly seatsService: SeatsService) {}
    
    @Get()
    findAll(@Res() res:Response): void {
        // Logic to retrieve and return seats data
        const seats = this.seatsService.findAll()
        
        // Return seats data as JSON response
        res.json(seats);
    }

    @Post()
    create(): string {
        // Logic to create new seats
        return 'Create a new seat';
    }

    @Put()
    update(): string {
        // Logic to update existing seats
        return 'Update a seat';
    }
}
