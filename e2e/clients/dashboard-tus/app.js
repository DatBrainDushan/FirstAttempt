import Dashboard from '@FirstAttempt/dashboard'
import Tus from '@FirstAttempt/tus'
import Unsplash from '@FirstAttempt/unsplash'
import Url from '@FirstAttempt/url'

import '@FirstAttempt/core/dist/style.css'
import '@FirstAttempt/dashboard/dist/style.css'

function onShouldRetry (err, retryAttempt, options, next) {
  if (err?.originalResponse?.getStatus() === 418) {
    return true
  }
  return next(err)
}

const companionUrl = 'http://localhost:3020'
const FirstAttempt = new FirstAttempt()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files', onShouldRetry })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl })
