import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'first';
  num: number = 1233;

  isActive: boolean = true;

  placeholderData = 'Inside Placeholder';

  getData() {
    return 'Some value';
  }

  changeTitle() {
    this.title = 'New title';
  }

  students = [
    {
      Name: 'Rahul',
      Age: 25,
      Place: 'Bangalore',
    },
    {
      Name: 'Rohit',
      Age: 28,
      Place: 'Noida',
    },
    {
      Name: 'Rohan',
      Age: 29,
      Place: 'Delhi',
    },
    {
      Name: 'Harsh',
      Age: 31,
      Place: 'Chennai',
    },
  ];
}
