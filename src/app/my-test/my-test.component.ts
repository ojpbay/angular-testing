import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTestComponent implements OnInit {

  public elements:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddElement() {
    const now = new Date();
    this.elements.push(now.toUTCString());
  }
}
