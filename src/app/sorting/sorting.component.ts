import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

  private isGenerated: boolean = false;
  private randNumbers: number[] = [];
  private sortedNumbers: number[] = [];
  private tempArray:number[] = [];
  private isCleared:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public generateNumbers() {
    this.isGenerated = true;
    for (var i = 0; i < 100; i++) {
      this.randNumbers.push(Math.floor(Math.random() * 100));
    }
  }

  public sortNumbers() {
    console.log(this.randNumbers);
    this.sortedNumbers = this.quickSort(this.randNumbers, 0, this.randNumbers.length - 1);
    console.log(this.sortedNumbers);
    console.log(this.randNumbers);
    
  }

  public swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  public partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        this.swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  public quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
      index = this.partition(items, left, right);
      if (left < index - 1) {
        this.quickSort(items, left, index - 1);
      }
      if (index < right) {
        this.quickSort(items, index, right);
      }
    }
    return items;
  }

  public clear() {
    this.sortedNumbers = [];
    this.randNumbers = [];
    this.isGenerated=false;
  }

}
