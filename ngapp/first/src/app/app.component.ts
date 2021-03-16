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
  isSpecial: boolean = true;
  placeholderData = 'Inside Placeholder';

  getData() {
    return 'Some value';
  }

  getColor(place) {
    switch (place) {
      case 'Bangalore':
        return '#55efc4';
      case 'Noida':
        return '#0984e3';
      case 'Delhi':
        return '#fab1a0';
      default:
        return '#636e72';
    }
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
      Place: 'Delhi',
    },
    {
      Name: 'Harsh',
      Age: 31,
      Place: 'Chennai',
    },
  ];
}
