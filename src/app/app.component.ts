import { CommonModule } from '@angular/common';
import { JokeService } from './service/joke.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'joke-telling-bot-app';
  jokes:any=[]=[]
  constructor(private  JokeService:JokeService){}

  getJoke(){
    this.JokeService.getJoke().subscribe((data)=>{
      this.jokes=data;
    })
  }
  ngOnInit(): void {
    this.getJoke()
  }
}
