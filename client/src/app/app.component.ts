import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //_inject part
  http = inject(HttpClient);
  title = 'DatingApp';
  users:any
  ngOnInit(): void {
    this.http.get('https://localhost:5198/api/users').subscribe({
      next:response => this.users = response,
      error:err=>console.log(err),
      complete:()=> console.log("completed"),
    })
  }
}
