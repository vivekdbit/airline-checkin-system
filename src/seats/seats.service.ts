import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seats } from './entities/seat.entity';

@Injectable()
export class SeatsService {
    constructor(
    @InjectRepository(Seats)
        private readonly seatRepository: Repository<Seats>,
    ) {}

    async findAll(trip_id: number): Promise<Seats[]> {
        return await this.seatRepository.find({ where: { trip_id } });
    }

    // async findOne(id: number): Promise<Seat> {
    //     return await this.seatRepository.findOne(id);
    // }

    // async create(createSeatDto: CreateSeatDto): Promise<Seat> {
    // const seat = new Seat();
    // seat.seatNumber = createSeatDto.seatNumber;
    // seat.occupied = createSeatDto.occupied;

    // return await this.seatRepository.save(seat);
    // }

    // async update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    // const seat = await this.seatRepository.findOne(id);
    // seat.seatNumber = updateSeatDto.seatNumber || seat.seatNumber;
    // seat.occupied = updateSeatDto.occupied || seat.occupied;

    // return await this.seatRepository.save(seat);
    // }

    // async remove(id: number): Promise<void> {
    // await this.seatRepository.delete(id);
    // }
}
