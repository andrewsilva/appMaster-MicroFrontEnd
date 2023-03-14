import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appMaster';

  ngOnInit(){
    const script = document.createElement('script');
    script.src = 'http://localhost:8080/extrato/main.js';
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src =  'http://localhost:8080/pagamento/main.js';
    document.body.appendChild(script2);
  }
}
