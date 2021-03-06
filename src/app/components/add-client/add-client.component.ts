import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from '../../models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnAdd: boolean = false;
  @ViewChild('clientForm') form: any;

  constructor(private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }){
    if(this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if(!valid){
      //error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      console.log(value)
      //add client
    }
  }

}
