import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Seats {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 4
    })
    seat_number: string;

    @Column()
    trip_id: number;

    @Column()
    user_id: number;

    @UpdateDateColumn()
    booked_at: Date;

    @CreateDateColumn()
    created_at: Date;
        
    @UpdateDateColumn()
    updated_at: Date;
}
