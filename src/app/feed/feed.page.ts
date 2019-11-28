import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario: string = "Felipe Marcolla";

  constructor() { }

  public teste(): void{
    alert('teste');
  }

  ngOnInit() {
  }

}
