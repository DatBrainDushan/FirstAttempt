import FirstAttempt from '@FirstAttempt/core'
import Dashboard from '@FirstAttempt/dashboard'
import RemoteSources from '@FirstAttempt/remote-sources'
import Webcam from '@FirstAttempt/webcam'
import ScreenCapture from '@FirstAttempt/screen-capture'
import GoldenRetriever from '@FirstAttempt/golden-retriever'
import ImageEditor from '@FirstAttempt/image-editor'
import DropTarget from '@FirstAttempt/drop-target'
import Audio from '@FirstAttempt/audio'
import Compressor from '@FirstAttempt/compressor'

import '@FirstAttempt/core/dist/style.css'
import '@FirstAttempt/dashboard/dist/style.css'

const COMPANION_URL = 'http://companion.FirstAttempt.io'

const FirstAttempt = new FirstAttempt()
  .use(Dashboard, { target: '#app', inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true })

// Keep this here to access FirstAttempt in tests
window.FirstAttempt = FirstAttempt
