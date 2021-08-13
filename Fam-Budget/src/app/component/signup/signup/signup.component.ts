import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public fb: FormBuilder, private cd: ChangeDetectorRef, private authService: AuthService, private router: Router) {}

  myForm! : FormGroup;
  file: any[] = []
  ngOnInit(): void {
    this.reactiveForm()
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      gender: ['Male',[Validators.required]],
      mobile: ['',[Validators.required]],
      email: ['',[Validators.required]],
      pannumber: ['',[Validators.required]],
      age: ['',[Validators.required]],
      file: ['' ]

      // firstname: [''],
      // lastname: [''],
      // gender: ['Male'],
      // mobile: [''],
      // email: [''],
      // relationship: [''],
      // pannumber: [''],
      // age: [''],
      // file: [[]]
    })
  }
  submitForm(){
    console.log(this.myForm.value);
    
   this.authService.signup(this.myForm).subscribe( (data) => {
     console.log('response for signup ', data)
     this.router.navigate(['./'])
   })
  }

  onFileSelect($event: any){
                
            	    if ($event.target.files && $event.target.files.length) {
            	      const files : any[] =  $event.target.files;
                    this.file = []
                  // console.log(files)

                  for(let ind=0; ind<files.length; ind+=1){
                    const reader = new FileReader();
                    reader.readAsDataURL(files[ind]);
                    reader.onload = () => {
                      // console.log(reader.result)
                      this.file.push( {data: String(reader.result!).split(';base64,')[1], fileName: files[ind]?.name || `file-${ind}`, fileType: files[ind].type})
                     };
                  }
      
                  this.myForm.patchValue({
                    file : this.file,
                   });
                  //  console.log(this.myForm.value.file)
                  //  console.log(this.myForm. errors)
                  this.cd.markForCheck();
                  // console.log(reader.result)
            }
  }
}
