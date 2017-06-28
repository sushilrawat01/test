import { Component } from '@angular/core';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UnityInfluence';

  instaLogin(){

    window.location.href = `${env.INSTA_URI}=${env.CLIENT_ID}&redirect_uri=${env.REDIRECT_URI}&response_type=token`;

  }

  instaSignup(){

    window.location.href = `https://www.instagram.com/`;

  }


}
