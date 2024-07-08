import * as dotenv from 'dotenv'
import { defineConfig } from 'drizzle-kit'

import 'dotenv/config'

dotenv.config({
  path: '.env.local',
})

export default defineConfig({
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  out: './server/migrations',
  schema: './server/schema.ts',
})
