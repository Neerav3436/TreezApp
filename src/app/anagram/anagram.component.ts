import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {
private validateAnagram: FormGroup;
private initialTest : boolean=true;

  constructor() { }

  ngOnInit() {
    this.validateAnagram=new FormGroup({
      'inputA' : new FormControl("abc a",[Validators.maxLength(10),Validators.required]),
      'inputB' : new FormControl("cb a a",[Validators.maxLength(10),Validators.required])
    });
  }

  public testPalindrome(){
    this.initialTest=this.anagrams(this.validateAnagram.get('inputA').value,this.validateAnagram.get('inputB').value);
  }

  public anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase()

    const charMapA = this.getCharMap(stringA)
    const charMapB = this.getCharMap(stringB)

    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }
    return true
}

public getCharMap(string) {
    let charMap = {}
    for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
  }
}
