import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const newObservable = interval(1000);
   /*  newObservable.subscribe(number => {
      console.warn(number);
    }) */

    /* newObservable.subscribe(num => {
      if (num % 2 == 0) {
        console.warn("Even Number"+num);//for even
      }
    }) */

   /*  newObservable.pipe(filter(number => {
      return number%2===0
    })).subscribe(num => {
      console.warn(num)
    }) */
   /*  Pipes let you combine multiple functions into a single function.
     The pipe() function takes as its arguments the functions you want to combine, */
    
    
    
    /* newObservable.pipe(filter(num => {
      return num % 2 === 0;
    }),
      map((num:number) => {
        return 'Even Number' + num;///map is take and some modify the value
      })).subscribe(res => {
        console.warn(res);
    }) */
    
    //////////////////////
    const phones = [
      { brand: 'Apple', price: 30000 },
      { brand: 'LG', price: 50000 },
      { brand: 'Samsung', price: 20000 },
      { brand: 'iphone', price: 60000 }
    ];
    const d = phones.map(data => {
      return data.brand
    })
    console.warn(d);//newArray  of brands will get   ['Apple', 'LG', 'Samsung', 'iphone']

//forEach is used for itrate for every object in array and return newly individual
    
    const fe = phones.forEach(res => {
      //console.warn(res);//no return forEach
      console.warn(res.brand);
    })
  //filter is used to filterout based on condition and return newArray of objects 
    
    const fltr = phones.filter(res => {
      return res.price > 25000;
    })
    console.warn(fltr);

   //some is used to true/false it will return only boolean, it will check only one
    
    const sm = phones.some(res => {
      return res.price===20000
    })
    console.warn("some()" + sm);//some() true bcz exist price 20000  only once


  //every()  it will check every element every element must true then it will return true, if any single false then it will return false
    const evy = phones.every(res => {
      return res.price > 10000;
    })
    console.warn("every()" + evy);//true bcz every obj must be true

    //find() it will return only one object

    const fnd = phones.find(res => {
      return res.price > 30000;
    })
    console.warn(fnd);//{brand: 'LG', price: 50000} only first it will return 


  //includes()  is used to it consist of thet value or not it return  true/false
    const ar = [2, 4, 7, 4, 8, 4, 6, 88];
    const incl = ar.includes(40);
    console.warn("includes():" + incl);//true/false bcz 40 not exist
    

//slice() is take sub array from main array
    const fruits = ['Apple', 'Pomagranate', 'Mango', 'Banana', 'Grapes', 'Pineapple'];
    const inn = fruits.includes('Apple');
    console.warn("include():" + inn);
    
    const slc = fruits.slice(2, 5);
    console.warn(fruits);
    console.warn("slice():" + slc);

//splice() for delete
    
    const spl = fruits.splice(2, 1);
    console.warn("splice();" + spl)//splice(index,1);
    
    const arr = [2, 4, 6, 4, 7, 8];
   /*  arr.splice(2,1);//index,number of elements
    console.warn("splice():" + arr);//[2, 4, 4, 7, 8] */
    
    /* arr.splice(2, 3)//2index to 3 elements delete
    console.warn("2,3 splice():" + arr);//[2,4,8] */

    //insted of delete it will insert also

    arr.splice(0, 2, 10, 20, 30); //0th place to 2 elements deleted and 10,20,30 inserted
    console.warn(arr);//[10, 20, 30, 6, 4, 7, 8]

    arr.push(100)//add 100 end of array
    console.warn(arr);//[10, 20, 30, 6, 4, 7, 8, 100]

    arr.unshift(12)//add 12 at starting of array
    console.warn(arr);//[12, 10, 20, 30, 6, 4, 7, 8, 100]

    arr.pop();//delete last element of an array
    console.warn(arr);//[12, 10, 20, 30, 6, 4, 7, 8]  100 deleted

    arr.shift();//delete first element of an array
    console.warn(arr);//[10, 20, 30, 6, 4, 7, 8]  12 deleted

    let size=arr.indexOf(8);//it will give index value
    console.warn("indexOf():"+size);//-1 if not true  / 8 index value  form  [10, 20, 30, 6, 4, 7, 8] 


  }

}
