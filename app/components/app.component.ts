import { Component} from '@angular/core';


@Component({
    selector: 'my-app',
    styles: [`
        .active:{
          color: green;
          text-decoration: none;
        }
      `],
    templateUrl: 'app/components/app.component.html',

})
export class AppComponent {}
