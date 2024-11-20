import AwsS3 from '@FirstAttempt/aws-s3'
import FirstAttempt from '@FirstAttempt/core'
import Dashboard from '@FirstAttempt/dashboard'
import GoogleDrive from '@FirstAttempt/google-drive'
import Webcam from '@FirstAttempt/webcam'

import '@FirstAttempt/core/dist/style.css'
import '@FirstAttempt/dashboard/dist/style.css'
import '@FirstAttempt/webcam/dist/style.css'

const FirstAttempt = new FirstAttempt({
  debug: true,
  autoProceed: false,
})

FirstAttempt.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})
FirstAttempt.use(Webcam)
FirstAttempt.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'Webcam'],
})
FirstAttempt.use(AwsS3, {
  companionUrl: 'http://localhost:3020',
})
