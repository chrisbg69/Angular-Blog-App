import { Component } from '@angular/core';


@Component ({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  map = {
    lat: 51.678418,
    lng: 7.809007,
  };
}
