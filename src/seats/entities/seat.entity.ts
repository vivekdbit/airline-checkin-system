import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    seatNumber: string;

    @Column({ default: false })
    occupied: boolean;
}
