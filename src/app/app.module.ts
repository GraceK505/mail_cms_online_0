import { NgModule } from '@angular/core';
import { AppRoutingModule, routes } from './app.routes';
import { App } from 'realm-web';
import { EffectsModule } from '@ngrx/effects';
import { ConvertService } from './services/mjml-converter.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CampaignFormComponent } from './components/campaign-form/campaign-form.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  imports: [AppRoutingModule, EffectsModule.forRoot(ConvertService), RouterModule.forRoot(routes, { enableViewTransitions: true, useHash: true }), FormsModule],
  providers: [{ provide: App, useValue: new App({ id: 'CleverGrace' }), useClass: HashLocationStrategy }],
})
export class AppModule { }
