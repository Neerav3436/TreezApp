import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { InventoryData } from '../Model/InventoryData';

@Injectable({ providedIn: 'root' })
export class InventoryService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    public createInventory(iname: string, description: string, price: number, quantity: number) {
        const InventoryData: InventoryData = { name:name, iname: iname, description: description, price: price, quantity: quantity };
        this.http
            .post<{ name: string }>('https://treezapp.firebaseio.com/inventory.json',InventoryData)
            .subscribe(
                responseData => {
                    console.log(responseData);
                },
                error => {
                    this.error.next(error.message);
                }
            );
    }

    public fetchInventory() {
        return this.http
            .get<{ [key: string]: InventoryData }>(
                'https://treezapp.firebaseio.com/inventory.json'
            )
            .pipe(
                map(responseData => {
                    const postsArray: InventoryData[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({ ...responseData[key], name: key });
                        }
                    }
                    return postsArray;
                }),
                catchError(errorRes => {
                    return throwError(errorRes);
                })
            );
    }

    public fetchInventoryById(){

    }

    public updateInventoryById(){

    }

    public deleteInventoryById() {
        return this.http
            .delete('https://treezapp.firebaseio.com/inventory.json')
    }
}
