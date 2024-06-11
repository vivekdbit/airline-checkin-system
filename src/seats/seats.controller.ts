import { Controller, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { SeatsService } from './seats.service';

@Controller('api/v1/seats')
export class SeatsController {

    constructor(private readonly seatsService: SeatsService) {}
    
    @Get(':id')
    async findAll(@Param('id') trip_id:number, @Res() res:Response): Promise<void> {
        try {
            const seats = await this.seatsService.findAll(trip_id);

            // Return seats data as JSON response
            res.status(HttpStatus.OK).json({data: seats});
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred while fetching seats data' });
        }
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
