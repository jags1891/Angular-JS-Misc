import {LikeComponent} from './like.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log(`LikesCount is ${component.LikesCount} and isSelected: ${component.isSelected}`);


// class Point{

//     private x: number;
//     private y:number;

//     //private x: number;
//     //private y:number;
//     //constructor(private x?:number, private y?:number){ }
//      //constructor(public x?:number, public y?:number){ }

//     constructor(x?:number, y?:number)//? optional
//     {
//         this.x=x;
//         this.y=y;
//     }
//     draw(){
//         console.log('X:'+ this.x+' y:'+ this.y);
//     }

//     get X(){
//         return this.x;
//     }

//     set X(value){
//         if(value<0)
//             throw new Error('Value cannot be less than 0');
//         this.x=value;

//     }

// }

// let  p = new Point(1,2);

// p.draw(); 

// let temp:number= p.X;
// console.log('temp: '+temp);

// p.X=4;

// p.draw(); 