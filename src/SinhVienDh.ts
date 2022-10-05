import { SinhVien } from './SinhVien';

class SinhVienDaiHoc extends SinhVien {
  soNamHoc() {
    console.log('4 nam');
  }
  tongDiem(numberOne: number, numberTwo: number) {
    return numberOne + numberTwo;
  }
}
let sv = new SinhVienDaiHoc(1, 'uyen');
sv.soNamHoc();
console.log(sv.tongDiem(12, 12));

class DuHS extends SinhVienDaiHoc {
  quocTich() {
    console.log(svnn.name + 'VietNam');
  }
  setName(n: string) {
    this.name = n;
  }
}
let svnn = new DuHS(2, 'mina ');
svnn.quocTich();
svnn.soNamHoc;
svnn.setName('Lam');
console.log(svnn.id);
console.log(svnn.getName());
