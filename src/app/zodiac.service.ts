import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zodiac } from './zodiac/zodiac.model';

@Injectable({
  providedIn: 'root'
})
export class ZodiacService {
  
zodiacs: Zodiac[] = [{
  id:1,
  name:"Rat",
  description:"People born in this year are clever and charming. They are curious but are sometimes too motivated by money.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Rat.jpg"
},
{
  id:2,
  name:"Ox",
  description:"Those born under this sign are persistent and straightforward. They have strong faith and can be seen as stubborn in their old ways.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Ox.jpg"
},
{
  id:3,
  name:"Tiger",
  description:"Tiger people are thought to be brave and independent. They are respected for their deep thoughts and courageous actions, but sometimes show off when accomplishing something.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Tiger.jpg"
},
{
  id:4,
  name:"Rabbit",
  description:"People born under this sign are popular because they are sincere and avoid conflict. Though they are sensitive, they also hesitate, which makes them lose out on chances.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Rabbit.jpg"
},
{
  id:5,
  name:"Dragon",
  description:"The dragon is a powerful sign. People born under this year are energetic and excitable. They hate hypocrisy and gossip and can sometimes be a bit arrogant and impatient.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Dragon.jpg"
},
{
  id:6,
  name:"Snake",
  description:"Snakes are symbol of wisdom and wit, often seen as humorous and gifted in literature and art. However, snakes can be overly suspicious, which makes them a bit paranoid.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Snake.jpg"
},
{
  id:7,
  name:"Horse",
  description:"People born under this sign are seen as warm-hearted and easygoing. Independence is one of their greatest strengths, but sometimes they are overly frank with others.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Horse.jpg"
},
{
  id:8,
  name:"Goat",
  description:"The goat enjoys being alone with their thoughts. They are creative thinkers and appreciate the arts. Though they are economic and cautious, they can also be indecisive.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Goat.jpg"
},
{
  id:9,
  name:"Monkey",
  description:"People born in the year of the monkey love to make people laugh. they are generally energetic and upbeat, but sometimes lack self-control.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Monkey.jpg"
},
{
  id:10,
  name:"Rooster",
  description:"Rooster people are honest, observant and hard-workers. They seldom rely on other people in daily life which can make them impatient when dealing with others.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Rooster.jpg"
},
{
  id:11,
  name:"Dog",
  description:"Those born under this sign are fiercely loyal and can always keep a secret. They are not afraid of the hardships in life, but they also tend to worry too much sometimes.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Dog.jpg"
},
{
  id:12,
  name:"Pig",
  description:"People with this sign are nice and good-mannered. They are always forgiving of other people's mistakes, which at times can translate to naivete and gullibility.",
  image:"https://facts.net/wp-content/uploads/2020/10/Zodiac-Pig.jpg"
}];

  constructor() { }

  public getZodiacInfo():any{
    const zodiacObservable = new Observable(observer => {
      setTimeout(()=>{
        observer.next(this.zodiacs);
      },1000)
    });
    return zodiacObservable;
  }
}
