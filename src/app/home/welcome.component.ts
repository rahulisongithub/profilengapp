import { Component } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']

})
export class WelcomeComponent {
  public pageTitle = 'Welcome';

  public user = {
    ID:"TFL0524",
    Name:"Rahul Navale",
    Email:"rahulsn@alml.onmicrosoft.com",
    Phone:7757834953,
    Profession:"DevOps Engineer",
    AboutMe:"Rahul Navale is a Senior Consultant for Cloud Technologies and Microsoft Certified DevOps Engineer at C3IT Software Solutions Pvt Ltd and previously Technology Evangelist at Transflower Learning Private Limited with a background in infrastructure engineering and enterprise deployments of Office 365,Azure and SharePoint Products and Technologies."
  }
}
