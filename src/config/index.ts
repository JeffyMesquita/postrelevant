import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'imob',
  password: 'imob',
  database: 'imob',
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
} as TypeOrmModuleOptions;
