import {Pipe,PipeTransform, Injectable} from '@angular/core'

@Pipe({
    name:"limitSize"
})
@Injectable({
    providedIn: 'root'
  })
export class ShortenPipe implements PipeTransform{
    transform(value:any){
        return value.substr(0,15)+"....";
    }
}