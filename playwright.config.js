import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/browser',
  testMatch: '**/*.browser.js',
  use: { baseURL: 'http://127.0.0.1:4178', headless: true },
  workers: 2,
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4178 --strictPort',
    url: 'http://127.0.0.1:4178/tests/browser/',
    timeout: 30000,
  },
})
