import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-deslogear',
  templateUrl: './deslogear.component.html',
  styleUrls: ['./deslogear.component.css']
})
export class DeslogearComponent implements OnInit {

  constructor(private data:AuthService,public router:Router) { 
    data.deslogear();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
