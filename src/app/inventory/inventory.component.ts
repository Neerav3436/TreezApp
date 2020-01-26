import { Component, OnInit } from '@angular/core';
import { ShortenPipe } from '../formatDataSize.pipe';
import { MatDialog } from '@angular/material';
import { InventoryDialogComponent } from '../inventory-dialog/inventory-dialog.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  name:String;
  animal:string;
  public inventoryDetails: any = [
    {
      name: "544352",
      description: "Sample Description 1",
      price: 23,
      quantity: 3
    },
    {
      name: "234352",
      description: "Sample Description 2",
      price: 23,
      quantity: 3
    },
    {
      name: "44952",
      description: "Sample Description 3",
      price: 23,
      quantity: 3
    },
    {
      name: "44952",
      description: "Sample Description 3",
      price: 23,
      quantity: 3
    },
    {
      name: "44952",
      description: "Sample Description 3",
      price: 23,
      quantity: 3
    },
    {
      name: "#44952",
      description: "Sample Description 3",
      price: 23,
      quantity: 3
    }
  ]


  constructor(private limitSize : ShortenPipe,public dialog: MatDialog) { }

  ngOnInit() {
  }

  onInventoryCreate(): void {
    const dialogRef = this.dialog.open(InventoryDialogComponent, {
      width: '450px',
      height: '450px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
