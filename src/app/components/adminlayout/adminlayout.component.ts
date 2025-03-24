import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminnavComponent } from "../adminnav/adminnav.component";

@Component({
  selector: 'app-adminlayout',
  standalone: true,
  imports: [RouterOutlet, AdminnavComponent],
  templateUrl: './adminlayout.component.html',
  styleUrl: './adminlayout.component.css'
})
export class AdminlayoutComponent {

}
