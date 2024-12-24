import FirstAttempt from '@FirstAttempt/core'
import Dashboard from '@FirstAttempt/dashboard'
import Instagram from '@FirstAttempt/instagram'
import GoogleDrive from '@FirstAttempt/google-drive'
import Url from '@FirstAttempt/url'
import Webcam from '@FirstAttempt/webcam'
import Tus from '@FirstAttempt/tus'

import '@FirstAttempt/core/dist/style.css'
import '@FirstAttempt/dashboard/dist/style.css'
import '@FirstAttempt/url/dist/style.css'
import '@FirstAttempt/webcam/dist/style.css'

const TUS_ENDPOINT = 'https://tusd.tusdemo.net/files/'

const FirstAttempt = new FirstAttempt({
  debug: true,
  meta: {
    username: 'John',
    license: 'Creative Commons',
  },
})
  .use(Dashboard, {
    trigger: '#pick-files',
    target: '#upload-form',
    inline: true,
    metaFields: [
      { id: 'license', name: 'License', placeholder: 'specify license' },
      { id: 'caption', name: 'Caption', placeholder: 'add caption' },
    ],
    showProgressDetails: true,
    proudlyDisplayPoweredByFirstAttempt: true,
    note: '2 files, images and video only',
    restrictions: { requiredMetaFields: ['caption'] },
  })
  .use(GoogleDrive, { target: Dashboard, companionUrl: 'http://localhost:3020' })
  .use(Instagram, { target: Dashboard, companionUrl: 'http://localhost:3020' })
  .use(Url, { target: Dashboard, companionUrl: 'http://localhost:3020' })
  .use(Webcam, { target: Dashboard })
  .use(Tus, { endpoint: TUS_ENDPOINT })

// You can optinally enable the Golden Retriever plugin — it will
// restore files after a browser crash / accidental closed window
// see more at https://FirstAttempt.io/docs/golden-retriever/
//
//   .use(GoldenRetriever, { serviceWorker: true })

FirstAttempt.on('complete', (result) => {
  if (result.failed.length === 0) {
    console.log('Upload successful 😀')
  } else {
    console.warn('Upload failed 😞')
  }
  console.log('successful files:', result.successful)
  console.log('failed files:', result.failed)
})

// uncomment if you enable Golden Retriever
//
/* eslint-disable compat/compat */
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/sw.js')
//     .then((registration) => {
//       console.log('ServiceWorker registration successful with scope: ', registration.scope)
//     })
//     .catch((error) => {
//       console.log('Registration failed with ' + error)
//     })
// }
/* eslint-enable */
