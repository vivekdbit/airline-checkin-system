import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatsModule } from './seats/seats.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        AppConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [AppConfigModule], // Import ConfigModule to access ConfigService
            inject: [ConfigService], // Inject ConfigService into the factory function
            useFactory: typeOrmConfig, // Pass the typeOrmConfig function as the factory
        }),
        SeatsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
