import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {
  FirstAttemptAngularDashboardModule,
  FirstAttemptAngularStatusBarModule,
  FirstAttemptAngularDragDropModule,
  FirstAttemptAngularProgressBarModule,
  FirstAttemptAngularDashboardModalModule,
} from '@FirstAttempt' +
  /angular'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FirstAttemptAngularDashboardModule,
    FirstAttemptAngularStatusBarModule,
    FirstAttemptAngularDashboardModalModule,
    FirstAttemptAngularDragDropModule,
    FirstAttemptAngularProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
