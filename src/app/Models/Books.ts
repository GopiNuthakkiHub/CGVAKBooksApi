export interface Books{
    id: number,
    title:string,
    description:string,
    isbn:string,
    author:string,
    listPrice:number,
    price:number,
    price50:number,
    price100:number,
    imageUrl:string,
    categoryID: 0,
    category: {
      id: 0,
      name:string,
      orderOfDisplay:number
    },
    coverTypeId: 0,
    coverType: {
      id: 0,
      name:string
    }
  


}

// export class SelectObject{
//     id:number = 0;
//     name:string ="";
//     // orderOfDisplay:number =0;
//     // myproperty:Date|string="";
    
//     constructor(value = {}){
//         Object.assign(this,value);
//     }

//   }