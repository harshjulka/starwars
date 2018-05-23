import { Component, OnInit, OnDestroy, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { UserLoginService } from './user-login.service';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { Router } from '@angular/router';

@Component({
  selector: 'star-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {
    subscription: any;
    quote: any;
    errorMessage: string;
    userName: string;
    form: FormGroup;
    personInfo: any;
    password: string;
    constructor(private user: UserLoginService,
                private router: Router) {}

    ngOnChanges(changes: SimpleChanges) {
        // ngOnChnage Hook
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            userName: new FormControl('', Validators.compose([Validators.required])),
            password: new FormControl('', Validators.required)
        }, { updateOn: 'change' });
        console.log('Login Component init');
        this.form.valueChanges.subscribe((data) => this.formValidation(data));
    }

    formValidation(data) {
        console.log(data);
    }

    ngOnDestroy(): void {
        console.log('component exit');
    }

    memberLogIn() {
      this.errorMessage = '';
      this.userName = this.form.get('userName').value;
      this.password = this.form.get('password').value;
      this.user.signIn(this.userName).subscribe( (data) => {
        this.personInfo = data['results'];
        this.validate();
        console.log(data);
      });
      console.log(this.user.redirectUrl);
    }

    validate() {
      if (this.personInfo && this.personInfo.length > 0
        && this.password === this.personInfo[0].birth_year && this.userName.toLocaleLowerCase() ===
      this.personInfo[0].name.toLocaleLowerCase() ) {
        this.router.navigate(['search']);
      } else {
        this.errorMessage = 'Invalid character name or password';
      }
    }

    onFocus() {
      this.errorMessage = '';
    }
}
