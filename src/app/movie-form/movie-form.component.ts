import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  constructor() { }


  onFormSubmit(form: NgForm) {
      console.log(form.value);
      console.log('Name:' + form.controls['name'].value);
      console.log('Form Valid:' + form.valid);
      console.log('Form Submitted:' + form.submitted);
  }
  ngOnInit() {

  }

}
