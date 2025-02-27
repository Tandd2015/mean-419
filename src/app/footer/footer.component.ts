import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() securitySwap: boolean = false;
  public businessFooter: string = '419 Paint & Body LLC';

  constructor() {};

}
