import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DocumentScanner} from '@ionic-native/document-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ScanidPage } from '../pages/scanid/scanid';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ForgotpasswordPage,
    ScanidPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ForgotpasswordPage,
    ScanidPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
