import { Contact } from './Contact';
import { IDoSinhVienTask } from './IDoSinhVienTask';

export class SinhVien extends Contact implements IDoSinhVienTask {
  masinhvien: number | undefined;

  constructor(i: number, n: string, m: number) {
    super();
    this.name = n;
    this.id = i;
    this.masinhvien = m;
  }
  diemChuyenCan(): void {
    throw new Error('Method not implemented.');
  }
  diemTieuLuan(): void {
    throw new Error('Method not implemented.');
  }
  diemCuoiKy(): void {
    throw new Error('Method not implemented.');
  }

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
