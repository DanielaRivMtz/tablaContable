import { CommonModule } from '@angular/common';
import { Component , Pipe } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgxCurrencyDirective } from "ngx-currency";

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxCurrencyDirective],
  templateUrl: './tabla.component.html',
  styles: ``
})
export default class TablaComponent {
  charges=[0,0,0,0,0];
  payments=[0,0,0,0,0];
  amountsType=['','','','',''];

  totalCharges=0;
  totalPayments=0;

  totalBalance=0;

  selectAmountType(type:string, index:number) {
    this.amountsType[index]=type;
    if (this.validData()) {
      this.totalCharges = this.addAmounts(this.charges);
      this.totalPayments = this.addAmounts(this.payments);
      this.totalBalance = this.totalCharges - this.totalPayments;
    }
  }

  validData(){
    let isValid = true;
    this.amountsType.forEach(type=>{
      if (type === '') {
        isValid = false;
      }
    })
    return isValid;
  }

  addAmounts(amounts:Array<number>){
    let total = 0;
    const failReference = NaN;
    amounts.forEach(amount=>{
      total += amount.toString()!=='' ? parseFloat(amount.toString()) : 0;
    })
    return total;

  }


}
