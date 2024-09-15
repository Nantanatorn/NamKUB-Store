import { Component } from '@angular/core';

@Component({
  selector: 'app-singha3',
  templateUrl: './singha3.component.html',
  styleUrl: './singha3.component.css'
})
export class Singha3Component {
  quantity: number = 1;  // เริ่มต้นเป็น 1
  maxQuantity: number = 99;  // กำหนดจำนวนสูงสุด (ตามตัวอย่างเป็น 99)

  // ฟังก์ชันเพิ่มจำนวนสินค้า
  increase() {
    if (this.quantity < this.maxQuantity) {
      this.quantity++;
    }
  }

  // ฟังก์ชันลดจำนวนสินค้า
  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // ฟังก์ชันเมื่อมีการเปลี่ยนแปลงจำนวนสินค้าจาก input
  onInputChange(event: any) {
    const value = event.target.value;
    if (value >= 1 && value <= this.maxQuantity) {
      this.quantity = value;
    } else if (value < 1) {
      this.quantity = 1;
    } else {
      this.quantity = this.maxQuantity;
    }
  }
}