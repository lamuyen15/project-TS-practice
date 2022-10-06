import { Contact } from './Contact';
import { IDoSinhVienTask } from './IDoSinhVienTask';

export class SinhVien extends Contact implements IDoSinhVienTask {
  masinhvien: number | undefined;
  CC!: number;
  GK!: number;
  CK!: number;

  constructor(i: number, n: string, m: number) {
    super();
    this.name = n;
    this.id = i;
    this.masinhvien = m;
  }
  diemChuyenCan(): number {
    return this.CC * 0.2;
  }
  diemTieuLuan(): number {
    return this.GK * 0.3;
  }
  diemCuoiKy(): number {
    return this.CK * 0.3;
  }
  // tongdiem(TK: number): number {
  //   return (TK = numberOne + numberTwo + numberThree);
  // }
  getName() {
    return this.name;
  }

  setName(a: string) {
    if (a.length > 15) {
      this.thongBao('Ten qua dai');
    } else {
      this.name = a;
      this.thongBao('Ten moi la:' + a);
    }
  }
  private thongBao(tb: string) {
    console.log('Xin thong bao ' + tb);
  }
}
let s = new SinhVien(1, 'uyen', 123);
console.log(`${s.id},${s.name},${s.masinhvien}`);
s.setName('lamuyen');
console.log(s.diemChuyenCan(5));
