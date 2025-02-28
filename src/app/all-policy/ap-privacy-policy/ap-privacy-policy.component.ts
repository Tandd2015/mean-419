import { Component } from '@angular/core';
@Component({
  selector: 'app-ap-privacy-policy',
  templateUrl: './ap-privacy-policy.component.html',
  styleUrls: ['./ap-privacy-policy.component.css']
})
export class ApPrivacyPolicyComponent {
  public sitePrivacy: string = 'this website';
  public businessPrivacy: string = '419 Paint & Body LLC';
  public effectiveDatePrivacy: string = '02-11-2025';
  public effectiveReviewDatePrivacy: string = '02-11-2025';
  public effectiveReviewDateCaliPrivacy: string = '02-11-2025';
  public effectiveDateCaliPrivacy: string = '02-11-2025';
  public emailPrivacy: string = '@gmail.com';
  public phonePrivacy: string = '1-419-789-8088';
  public phoneDisplayPrivacy: string = '1-419-789-8088';
  public mainAddress1Privacy: string ='4217 Rd 19';
  public mainAddress2Privacy: string ='Continental, OH, 45831';

  public idArrayPrivacy: string[] = ["definitionsPrivacy", "protectionPrivacy", "userDataPrivacy", "companyPrivacy", "companyUsePrivacy", "WhoPrivacy", "protocolsPrivacy", "childrenPrivacy", "contactPrivacy", "CaliforniaUserPrivacy", "EuropeanUserPrivacy", "modificationPrivacy", "disclosuresPrivacy", "datePrivacy"];
  public idArrayCaliforniaPrivacy: string[] = ["policyCaliforniaPrivacy", "linksCaliforniaPrivacy", "definitionsCaliforniaPrivacy", "userDataCaliforniaPrivacy", "companyDataCaliforniaPrivacy", "sharingDataCaliforniaPrivacy", "userRightsCaliforniaPrivacy", "otherRightsCaliforniaPrivacy", "modificationCaliforniaPrivacy", "contactCaliforniaPrivacy", "cookieCaliforniaPrivacy"];
  constructor() {};

  public toPrivacy(navClick: Event, id: string): void {
    navClick.preventDefault();
    document.getElementById(`${id}`)?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  };

}

