import { Component} from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent{

  name:String;
  animal:string;
  public orderDetails: any = [
    {
      name: "544352",
      email: "Sample Description 1",
      orderTimestamp: "Sun Jan 26 2020 04:26:10 GMT-0500 (Eastern Standard Time)",
      status: 3
    },
    {
      name: "544352",
      email: "Sample Description 1",
      orderTimestamp: "Sun Jan 26 2020 04:26:10 GMT-0500 (Eastern Standard Time)",
      status: 3
    },
    {
      name: "544352",
      email: "Sample Description 1",
      orderTimestamp: "Sun Jan 26 2020 04:26:10 GMT-0500 (Eastern Standard Time)",
      status: 3
    }
  ]


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onOrderCreate(): void {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '450px',
      height: '350px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
