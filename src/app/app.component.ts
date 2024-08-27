import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SharedMessageBusService } from 'shared-message-bus';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'about';
  messageBus = inject(SharedMessageBusService);
  userAddress$ = new BehaviorSubject<string>('');

  ngOnInit() {
    this.messageBus.subscribe('address', this.showUserDetails.bind(this));
  }

  showUserDetails(data: any) {
    this.userAddress$.next(data);
  }
}
