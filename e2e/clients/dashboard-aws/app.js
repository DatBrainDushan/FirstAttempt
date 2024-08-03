import { FirstAttempt } from '@FirstAttempt/core'
import Dashboard from '@FirstAttempt/dashboard'
import AwsS3 from '@FirstAttempt/aws-s3'

import '@FirstAttempt/core/dist/style.css'
import '@FirstAttempt/dashboard/dist/style.css'

const FirstAttempt = new FirstAttempt()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  })

