import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dating App';
  users: any;
  errorMessage: string;
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getUsers();
  }

  // tslint:disable-next-line: typedef
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error =>{
      console.log(error);
    });
  }
}
