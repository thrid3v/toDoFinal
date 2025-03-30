import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'aws-0-ap-south-1.pooler.supabase.com',
        port: 6543,
        username: 'postgres.zzcmxqeudpzvnuljpcbn',
        password: 'b3b3u7qnCY0mjjzA',
        database: 'postgres',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // Be careful with this in production
        ssl: {
          rejectUnauthorized: false
        },
        extra: {
          poolSize: 1,
          sslmode: 'require'
        }
      }),
      inject: [ConfigService],
    }),
    TodoModule,
    UserModule,
  ],
})
export class AppModule {} 