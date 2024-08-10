import { FirstAttempt } from '@FirstAttempt/core'
import Dashboard from '@FirstAttempt/dashboard'
import Transloadit from '@FirstAttempt/transloadit'

import generateSignatureIfSecret from './generateSignatureIfSecret.js'

import '@FirstAttempt/core/dist/style.css'
import '@FirstAttempt/dashboard/dist/style.css'

// Environment variables:
// https://en.parceljs.org/env.html
const FirstAttempt = new FirstAttempt()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () => generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
      auth: { key: process.env.VITE_TRANSLOADIT_KEY },
      template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
    }),
  })

// Keep this here to access FirstAttempt in tests
window.FirstAttempt = FirstAttempt
