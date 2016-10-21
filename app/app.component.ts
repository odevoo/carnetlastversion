import { Component, Input} from '@angular/core';
import { NgModule } from '@angular/core';
import { friends } from './friends';
import { FRIENDS } from './friends-list';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

import {SearchPipe} from './search-pipe';
import {orderByPipe} from './orderByPipe';


@Component({
  selector: 'my-app',
  //pipes: [SearchPipe, orderByPipe],
  templateUrl: 'app/app.component.html'



})
export class AppComponent {
  title = "Carnet d'adresses";
  tabfriends = FRIENDS;
  newFriend:friends = {};




  details:Object;


  onSubmit(){
    var timestamp = Math.round(Date.now() / 1000) ;

    console.log(this.newFriend);
    // this.newFriend.isActive = false;
    // this.newFriend.cp = "75000";
    // this.newFriend.myRequest = false;
    // this.newFriend.timestamp = timestamp;
    // this.newFriend.image = "https://randomuser.me/api/portraits/thumb/men/5.jpg";
    // this.friends.push(this.newFriend);

  }

  showDetails(friend){

    this.details = friend;
  }

  hideDetails() {
    this.details = false;
  }

  deleteFriend (friend) {
    let index = this.tabfriends.indexOf(friend);
    this.tabfriends.splice(index, 1);
    this.details = false;
  }
  // |search: term
  //<div [term]="term" class="contactcontainer">
  //[(ngModel)]="newFriend.firstname"

}


//https://github.com/DenisVuyka/ng2samples-blank
