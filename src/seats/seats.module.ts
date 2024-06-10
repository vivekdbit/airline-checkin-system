import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatsController } from './seats.controller';
import { SeatsService } from './seats.service';
import { Seat } from './entities/seat.entity'; // Assuming you have a seat entity

@Module({
    imports: [
        TypeOrmModule.forFeature([Seat]), // Import the seat entity
        // You can import other modules or services if needed
    ],
  controllers: [SeatsController], // Declare the controller(s)
  providers: [SeatsService], // Declare the service(s)
  exports: [SeatsService], // Export the service if needed by other modules
})
export class SeatsModule {}