import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menuItems = [
    { name: 'Dashboard', icon: 'dashboard'  },
    { name: 'Inventario', icon: 'library_books'  },
    { name: 'Productos', icon: 'list'  },
    { name: 'Movimientos', icon: 'compare_arrows'  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
