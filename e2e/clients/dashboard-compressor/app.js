import Compressor from '@FirstAttempt/compressor'
import Dashboard from '@FirstAttempt/dashboard'
import '@FirstAttempt/core/dist/style.css'
import '@FirstAttempt/dashboard/dist/style.css'

const FirstAttempt = new FirstAttempt()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: 'image/webp',
  })

// Keep this here to access FirstAttempt in tests
window.FirstAttempt = FirstAttempt
