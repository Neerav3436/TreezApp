import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent implements OnInit {
private palinMessage:String="Calculating..";
private palindromeLogs:string[] = [];
  constructor() { }

  ngOnInit() {
    this.palinMessage=this.prepareMessage();
  }

  public prepareMessage(): String{
    this.largestPalindrome();
    return "Largest Palindrome from Product of 3-digit numbers: "+this.palindromeLogs[this.palindromeLogs.length-1];
  }
  public largestPalindrome() {
    var x, y, product, max = 0;
    for (x = 100; x <= 999; x++) {
      for (y = x; y <= 999; y++) {
        product = x * y;
        if (this.Palindromic(product)) {
          if (max < product) { 
            max = product;
            this.palindromeLogs.push(x + '*' + y + '=' + product);
          }
        }
      }
    }
  }

  public Palindromic(x) {
    var pal = parseInt(x.toString().split('').reverse().join(''));
    if (pal === x)
      return true;
    else
      return false;
  }

}
