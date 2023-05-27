import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  acl = {
    view: true
  };
  cardNum = 0;
  cards = [];
  actions = [];
  cardContent = '';
  cardTitle = '';

  public addCard() {
    this.cardNum++
    this.cards.push({'id':this.cardNum, 'title': this.cardTitle, 'content': this.cardContent})
    this.actions.push({'info': 'Card id: ' + this.cardNum + ' created'})
    this.cardContent = ''
    this.cardTitle = ''
  }

  public removeCard(id) 
  {
    let arr = this.cards.filter(function(ele) {
      return ele.id != id
    });
    this.cards = arr

    this.actions.push({'info': 'Card id: ' + id + ' removed'})
  }
}
