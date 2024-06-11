import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  birthday:Date = new Date(2003, 4 ,7);
  rightPassword:boolean=false;
  enteredPassword:'';
  password='1998';
  //manohara,nagila,roja,sakhi,sathiya,bombay,cheli,kannullo
   sounds =[
     new Howl({
    src: ['../../assets/photos/happtbirthdaay.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/manohara.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/sakhi.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/3movie.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/anaganagaokaooru.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/diya.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/hoyna.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/mehabooba.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/yemicheyamandhuve.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/mirchi.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/poove3.mpeg']
  }),
  new Howl({
    src: ['../../assets/photos/cheli.mpeg']
  })
]


 soundindex=0;
  ifWrong: boolean;
  
  constructor() {}
  ngOnInit(): void {

  }

  verifyUser():void{
    if(this.enteredPassword.trim().toString()===this.password){
      this.ifWrong=false;
      this.rightPassword=true;
      this.sounds[this.soundindex].play();


    // Change global volume.
    Howler.volume(1);
    }
    else {
      this.ifWrong=true;
    }
  }

  playAgain(){
    this.sounds.forEach(x=>{
      x.stop();
    })
    if(this.soundindex==this.sounds.length-1){ 
      this.soundindex=0;
    }
    this.sounds[++this.soundindex].play();
  }

}
