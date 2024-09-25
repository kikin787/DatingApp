import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_service/account.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private accountService = inject(AccountService)
  loggedIn = false;
  model: any = {};

  login(): void {
  this.accountService.login(this.model).subscribe({
    next: (response) => {
      console.log(response);
      this.loggedIn = true;
    },
    error: (error) => {
      console.log(error)
    }
  })  
}

}
