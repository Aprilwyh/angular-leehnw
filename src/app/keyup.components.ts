/* tslint:disable:class-name component-class-suffix */
import { Component } from '@angular/core';

@Component({
  selector: 'app-key-up1',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v1 {
  values = '';

  
  onKey(event: KeyboardEvent) { // without type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
/*   onKey(event: any) { // with type info
    // this.values += (<HTMLInputElement>event.target).value + ' | ';
    // 显示当前输入框内的值
    // this.values += event.target.value + ' | ';
    // 显示每次输入的值
    this.values += event.key + ' | ';
  } */
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up3',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v3 {
  value = '';
  onEnter(value: string) { this.value = value; }
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up4',
  template: `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v4 {
  value = '';
  update(value: string) { this.value = value; }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/