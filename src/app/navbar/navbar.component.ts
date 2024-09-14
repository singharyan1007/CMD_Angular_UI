import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
//   isSidebarOpen:boolean=true;
// toggleSidebar()
// {
//   this.isSidebarOpen=!this.isSidebarOpen
//   const sidebar = document.getElementById('sidebar');
//   if (sidebar) {
//     sidebar.classList.toggle('active');
//   }
// }


}

