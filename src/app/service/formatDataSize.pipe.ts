import {Pipe,PipeTransform, Injectable} from '@angular/core'

@Pipe({
    name:"limitSize"
})
@Injectable({
    providedIn: 'root'
  })
export class ShortenPipe implements PipeTransform{
    transform(value:any){
        return value.length > 15?value.substr(0,15)+"...." : value;
    }
}