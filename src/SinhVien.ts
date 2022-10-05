interface Contact{
 id:number;
 name:string; 
 phone?:number;
 gender?:string;
}
const contacts:Contact[]=[];

export class SinhVien implements Contact{
   id:number;
   name:string;
   phone?:number;
   gender?:string;

  constructor(i:number, n:string,p?:number,g?:string){
    this.name=n;
    this.id=i;
  }

  getName (){
    return this.name;
  }
 
  setName(a:string){
    if(a.length > 15){ 
      this.thongBao("Ten qua dai")}
    else{
      this.name = a;
     this.thongBao("Ten moi la:");
  }
 }
 private thongBao(tb:string){
  console.log("Xin thong bao " + tb);
 }
}
let s = new SinhVien(1,"uyen");
console.log(`${s.id},${s.name}`);
s.setName("nguyenthilamuyen");