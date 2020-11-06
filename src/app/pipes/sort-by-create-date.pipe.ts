import { Pipe, PipeTransform } from '@angular/core';
import {Notice} from 'src/app/shared/models/tourism';
import { getLocaleDateFormat } from '@angular/common';

@Pipe({
  name: 'sortByCreateDate',
  pure: false
})
export class SortByCreateDatePipe implements PipeTransform {
  notice=Notice;
  transform(notice:any,args?:any): any {
 
    console.log('data',notice);

   let currentDate= new Date();
   console.log(currentDate);
  let createDate= new Date(notice.createdAt);
  let sorted = currentDate.valueOf() - createDate.valueOf();
  return sorted;


    
  }

}


/**
 *  
  sortBy() {

    this.notices.sort((c1: Notice, c2: Notice) => {
      if(c1.title>c2.title) return 1
      else if (c1.title===c2.title) return 0
      else return -1
      //return b.createdAt.valueOf() - a.createdAt.valueOf();
    })
  }
 */
