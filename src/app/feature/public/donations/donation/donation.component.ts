import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'alk-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
})
export class DonationComponent implements OnInit {
  @Input() text!: string;
 
  public donationForm = new FormGroup({
    amount: new FormControl('', Validators.required),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.text = 'cualquier aporte que puedas hacernos nos ayudará en verdad.'
  }

  onSubmit() {
    this.router.navigate(['/donaciones/gracias']);
  }
}
