import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from "@ionic/angular";
import {RunbookService} from "../../services/runbook.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  auth = {username: '', password: ''};

  constructor(
      public navCtrl: NavController,
      public alertController: AlertController,
      private runbookService: RunbookService
  ) { }

  ngOnInit() {
  }

  async signin() {
    const alert = await this.alertController.create({
      mode: "ios",
      header: 'Error',
      message: 'Nombre de usuario o clave no existen, intentelo nuevamente.',
      buttons: ['OK']
    });

    this.runbookService.signIn(this.auth).subscribe(data => {
      if (data['token']) {
        this.navCtrl.navigateForward('runbook');
      }
      else {
        alert.present();
      }
    });
  }

}
