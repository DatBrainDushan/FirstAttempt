import FirstAttempt from '@FirstAttempt/core'
import GoogleDrive from '@FirstAttempt/google-drive'
import Tus from '@FirstAttempt/tus'
import Dashboard from '@FirstAttempt/dashboard'
import MyCustomProvider from './MyCustomProvider.jsx'

import '@FirstAttempt/core/dist/style.css'
import '@FirstAttempt/dashboard/dist/style.css'

const FirstAttempt = new FirstAttempt({
  debug: true,
})

FirstAttempt.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})

FirstAttempt.use(MyCustomProvider, {
  companionUrl: 'http://localhost:3020',
})

FirstAttempt.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'MyCustomProvider'],
})

FirstAttempt.use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
