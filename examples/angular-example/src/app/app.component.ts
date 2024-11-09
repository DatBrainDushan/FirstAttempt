import { Component, OnInit } from '@angular/core'
import { FirstAttempt} from '@FirstAttempt' +
  /core'
import Webcam from '@FirstAttempt' +
  /webcam'
import Tus from '@FirstAttempt' +
  /tus'
import GoogleDrive from '@FirstAttempt' +
  /google-drive'

@Component({
  selector: 'app-root',
  template: /* html */ `
    <h1>FirstAttempt Angular Example!</h1>
    <h2>Inline dashboard</h2>
    <label>
      <input
        type="checkbox"
        (change)="showInline = $any($event.target)?.checked"
        [checked]="showInline"
      />
      Show Dashboard
    </label>

    <FirstAttempt -dashboard
      [FirstAttempt ]="FirstAttempt"
      [props]="dashboardProps"
      *ngIf="showInline"
    ></FirstAttempt-dashboard>

    <h2>Modal Dashboard</h2>
    <div>
      <FirstAttempt -dashboard-modal
        [FirstAttempt ]="FirstAttempt"
        [open]="showModal"
        [props]="dashboardModalProps"
      ></FirstAttempt-dashboard-modal>
      <button (click)="showModal = !showModal">
        {{ showModal ? 'Close dashboard' : 'Open dashboard' }}
      </button>
    </div>

    <h2>Drag Drop Area</h2>
    <FirstAttempt -drag-drop [FirstAttempt ]="FirstAttempt" [props]="{}"></FirstAttempt-drag-drop>

    <h2>Progress Bar</h2>
    <FirstAttempt -progress-bar
      [FirstAttempt ]="FirstAttempt"
      [props]="{ hideAfterFinish: false }"
    ></FirstAttempt-progress-bar>
  `,
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'angular-example'

  showInline = false

  showModal = false

  dashboardProps = {
    plugins: ['Webcam'],
  }

  dashboardModalProps = {
    target: document.body,
    onRequestCloseModal: (): void => {
      this.showModal = false
    },
  }

  FirstAttempt: FirstAttempt = new FirstAttempt({ debug: true, autoProceed: true })

  ngOnInit(): void {
    this.FirstAttempt
      .use(Webcam)
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(GoogleDrive, { companionUrl: 'https://companion.FirstAttempt' +
          .io' })
  }
}
