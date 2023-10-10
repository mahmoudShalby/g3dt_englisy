import { Module } from '@nestjs/common'
import { LibModule } from './lib/lib.module'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [
    // Liberaries
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    // Project
    LibModule,
    AuthModule,
    UsersModule,
    SupabaseModule,
  ],
})
export class AppModule {}
