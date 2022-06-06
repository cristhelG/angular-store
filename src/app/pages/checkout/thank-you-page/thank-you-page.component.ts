import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
  <div class="container">
    <h1 class="title">
        Thank you!
    </h1>
    <p class="content">
        Your order is on the way!
    </p>

    <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi velit voluptatem quasi magnam autem nulla. Aperiam illum sit quia.
    </span>
</div>
  `,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent {}
