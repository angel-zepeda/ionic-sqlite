import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TasksServiceService } from './tasks-service.service';
import { SQLite } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public sqlite: SQLite,
    public tasksService: TasksServiceService
  ) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.createDB();
    });
  }
 
  private createDB() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    }).then((db) => {
      console.log(db);
    }).catch(error =>{
      console.error(error);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
