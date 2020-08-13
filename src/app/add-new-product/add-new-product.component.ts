import { Component, OnInit,DoCheck  } from '@angular/core';
import { MyTableComponent } from '../my-table/my-table.component'


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})

export class AddNewProductComponent implements OnInit ,DoCheck {
  idProduct:number; 
  nameProduct:string;
  priceProduct:number;
  categoryProduct:string="category1";
  
  constructor(private products:MyTableComponent) { }

  ngOnInit(): void {
    
  }
  ngDoCheck(){
    
  }
  onSave(){
    let productOne={
      id: this.idProduct,
      name:this.nameProduct,
      price: this.priceProduct,
      category:this.categoryProduct
    }
    for(let i=0 ; i<this.products.productsList.length;i++){
      
      if(productOne.id==this.products.productsList[i].id || productOne.id===undefined || productOne.id===null){
        productOne.id=Math.round(Math.random()*1000);
      }
      if(productOne.name==this.products.productsList[i].name || productOne.name===undefined || productOne.name===""){
        productOne.name="product"+productOne.id;
      }
      console.log(productOne.price)
      if(productOne.price===undefined ){
        alert("Enter Price!!!")
        return;
      }
     
    }
    
    this.products.productsList.push(productOne)
    
  }
  
  
}
