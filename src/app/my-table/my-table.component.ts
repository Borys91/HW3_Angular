import { Component, OnInit, Input , DoCheck, Injectable } from '@angular/core';
import {Products} from "./products";
import { toBase64String } from '@angular/compiler/src/output/source_map';
import {Options} from "./options";



const products:Products[] = [
  { id: 1, name : "product 1", price : 100 ,category:"category3"}, 
  { id: 2, name : "product 2", price : 200 ,category:"category2"}, 
  { id: 3, name : "product 3", price : 300 ,category:"category3"},
  { id: 4, name : "product 4", price : 400 ,category:"category1"},
  { id: 5, name : "product 5", price : 500 ,category:"category2"},
  { id: 6, name : "product 6", price : 600 ,category:"category1"},
  { id: 7, name : "product 7", price : 700 ,category:"category2"},
  { id: 8, name : "product 8", price : 800 ,category:"category3"},
  { id: 9, name : "product 9", price : 900 ,category:"category1"},
  { id: 10,name : "product 10", price :1000 ,category:"category3"}
]; 

const listOptions:Options[] = [
  { name: "Show All", value: "ShowAll" },
  { name: "Category1", value: "category1" },
  { name: "Category2", value: "category2" },
  { name: "Category3", value: "category3" },
];




@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
  
})

@Injectable()
export class MyTableComponent implements OnInit , DoCheck {
  productsList:Products[]=products;
  selectOptions:Options[]=listOptions;
  // @Input("rows") counter:number;
  
  constructor() {
   
  }
  
  ngOnInit(): void {
    
  }
  ngDoCheck():void{
    
    // if(this.counter>products.length){
    //   this.counter=products.length;
    // }
    // else if(this.counter<1){
    //   this.counter=1;
    // }
    // products.length=this.counter;
    

    
  }
  addClass(){ 
      let line=document.querySelectorAll("tr[id]");
      for( let i =0 ; i<line.length ;i++){
          if(this.productsList[i].price>500){
            line[i].classList.add("color")
          }
        }
  };
  
  delete(product){
    // let el = document.getElementById(product.id);
    // console.log(`ID удаленного компонента ${product.id}`)
    // el.parentNode.removeChild(el);
    
   for ( let i =0 ; i<products.length; i++){
     if(product.id==products[i].id){
       products.splice(i ,1)
     }
   }
   
  };
  onChange(value){ 
        let line=document.querySelectorAll("tr[id]");
        for( let i =0 ; i<line.length ;i++){
          line[i].classList.remove("hide")
          if(value=="ShowAll"){
            
          }
          else if(this.productsList[i].category==value){
            
          }
          else{
            line[i].classList.add("hide")
          }
        }
   
  };
  
}
