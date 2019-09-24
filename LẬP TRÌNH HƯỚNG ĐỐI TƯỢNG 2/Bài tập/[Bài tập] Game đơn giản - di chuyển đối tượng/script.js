/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function(){
    this.top += this.speed;
  }
  this.moveTop = function(){
    this.top -= this.speed;
  }
  this.moveLeft = function(){
    this.left -= this.speed;
  }
}

var hero = new Hero('pikachu.png', 5,20, 200,100);

function start(){
  if(hero.left<window.innerWidth-hero.size&&hero.top<0+hero.size){
    hero.moveRight();
  }else if(hero.top<window.innerHeight-hero.size && hero.left>window.innerWidth-hero.size){
    hero.moveDown();
    
  } else if(hero.left>0+hero.size && hero.top>window.innerHeight-hero.size){
    hero.moveLeft();
  } else if(hero.top>0 && hero.left<hero.size){
    hero.moveTop();
  }
  
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();