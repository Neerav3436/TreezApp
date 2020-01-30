import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../Model/DialogData'
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { InventoryData } from '../Model/InventoryData';

@Component({
  selector: 'inventory-dialog',
  templateUrl: './inventory-dialog.component.html',
  styleUrls: ['./inventory-dialog.component.scss']
})
export class InventoryDialogComponent implements OnInit {
  public addInventory: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<InventoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.addInventory = new FormGroup({
      'iname': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required]),
      'quantity': new FormControl(null, [Validators.required])
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.addInventory.valid) {
      let postInventoryData: { name: string, iname: string, description: string, price: number, quantity: number } = {
        'name': null,
        'iname': this.addInventory.get('iname').value,
        'description': this.addInventory.get('description').value,
        'price': this.addInventory.get('price').value,
        'quantity': this.addInventory.get('quantity').value
      }
      console.log(postInventoryData);
      this.dialogRef.close(postInventoryData);
    }
  }
}
