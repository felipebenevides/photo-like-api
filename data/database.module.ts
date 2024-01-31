// src/database.module.ts
import { Module } from '@nestjs/common';
import { initDatabase, closeDatabase } from './database';
import mongoose from 'mongoose';



@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        await initDatabase();
        return mongoose.connection;
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
