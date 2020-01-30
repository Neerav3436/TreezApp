import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShortenPipe } from '../service/formatDataSize.pipe';
import { MatDialog } from '@angular/material';
import { InventoryDialogComponent } from '../inventory-dialog/inventory-dialog.component';
import { InventoryService } from '../service/Inventory.service';
import { InventoryData } from '../Model/InventoryData';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
  name: String;
  animal: string;

  inventoryDetails: InventoryData[] = [];
  isFetching = false;
  error = null;
  public search: FormGroup;
  private errorSub: Subscription;
  constructor(private limitSize: ShortenPipe, public dialog: MatDialog, public inventoryService: InventoryService) { }

  ngOnInit() {
    this.getInventory();
    this.search = new FormGroup({
      'searchText': new FormControl(null, [Validators.required])
    });
  }

  getInventory() {
    this.errorSub = this.inventoryService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.inventoryService.fetchInventory().subscribe(
      posts => {
        this.isFetching = false;
        this.inventoryDetails = posts;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onInventoryCreate(): void {
    const dialogRef = this.dialog.open(InventoryDialogComponent, {
      width: '450px',
      height: '450px',
      // data: {name: this.name, animal: this.animal}
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventoryService.createInventory(result.iname, result.description, result.price, result.quantity);
        this.inventoryDetails.push(result);
      }
    });

  }

  onSearch() {
    this.inventoryService.fetchInventoryById();
  }

  onDelete(index:number){
    this.inventoryService.deleteInventoryById();
    this.inventoryDetails.splice(index,1);
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

}
