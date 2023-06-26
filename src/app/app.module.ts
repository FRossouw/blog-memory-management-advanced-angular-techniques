import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UnsubscribingFromObservablesAsyncPipeComponent } from './components/unsubscribing-from-observables-async-pipe/unsubscribing-from-observables-async-pipe.component';
import { UnsubscribingFromObservablesOnNgDestroyComponent } from './components/unsubscribing-from-observables-on-ng-destroy/unsubscribing-from-observables-on-ng-destroy.component';
import { UnregisterEventListenersComponent } from './components/unregister-event-listeners/unregister-event-listeners.component';
import { ManualSubscriptionManagementComponent } from './components/manual-subscription-management/manual-subscription-management.component';
import { RxjsTakeUntilComponent } from './components/rxjs-take-until/rxjs-take-until.component';
import { UnsubscribingFromObservablesPushPipeComponent } from './components/unsubscribing-from-observables-push-pipe/unsubscribing-from-observables-push-pipe.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AppComponent,
    
    UnsubscribingFromObservablesAsyncPipeComponent,
    UnsubscribingFromObservablesOnNgDestroyComponent,
    UnregisterEventListenersComponent,
    ManualSubscriptionManagementComponent,
    RxjsTakeUntilComponent,
    UnsubscribingFromObservablesPushPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
