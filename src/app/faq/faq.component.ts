import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit{
  public isCollapsed = true;
  public isCollapsedtwo = true;
  public isCollapsedthree = true;
  public isCollapsedfour = true;
  public isCollapsedfive = true;
  
  inputQuestion: any;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitQuestion() {
    if (this.inputQuestion == "0" ) {
      Swal.fire({
        title: 'เกิดข้อผิดพลาด',
        text: 'กรุณากรอกคำถาม',
        icon: 'error',
        confirmButtonText: 'close'
      })
    } else {
      Swal.fire({
        title: 'บันทึกคำถามของคุณแล้ว',
        text: ' ขอบคุณค่ะ ',
        icon: 'success',
        confirmButtonText: 'close'
      })
    }
  }

}
