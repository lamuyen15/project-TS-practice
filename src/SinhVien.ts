
export class SinhVien{
  id:number;
  name:string;

  constructor(i:number, n:string){
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
console.log(s.id);
console.log(s.name);
s.setName("nguyenthilamuyen");