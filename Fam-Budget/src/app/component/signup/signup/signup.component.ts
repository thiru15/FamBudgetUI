import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from 'src/app/service/auth/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public fb: FormBuilder, private cd: ChangeDetectorRef, private authService: AuthService) {}

  myForm! : FormGroup;
  file: any[] = []
  ngOnInit(): void {
    this.reactiveForm()
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      // firstname: ['',[Validators.required]],
      // lastname: ['',[Validators.required]],
      // gender: ['Male'],
      // mobile: ['',[Validators.required]],
      // email: ['',[Validators.required]],
      // relationship: ['',[Validators.required]],
      // pannumber: ['',[Validators.required]],
      // age: ['',[Validators.required]],
      // file: [[], [Validators.required]]

      firstname: [''],
      lastname: [''],
      gender: ['Male'],
      mobile: [''],
      email: [''],
      relationship: [''],
      pannumber: [''],
      age: [''],
      file: [[]]
    })
  }
  submitForm(){
    console.log("In submit");
    console.log(this.myForm.value);

   this.authService.signup(this.myForm).subscribe( (data) => {
     console.log('response for signup ', data)
   })
  }

  onFileSelect($event: any){
    	    // console.log($event.target.files);
          // const files = $event.target.files
          // this.fileUploadService.uploadFile(files[0], '1234').subscribe( (data) => {
          //   console.log('uploaded data ', data)
          // })

                const reader = new FileReader();
            	    if ($event.target.files && $event.target.files.length) {
            	      const files : any[] =  $event.target.files;
                  // console.log(files[0])

                  for(let ind=0; ind<files.length; ind+=1){
                    reader.readAsDataURL(files[ind]);
                    reader.onload = () => {
                      // console.log(reader.result)
                      this.file.push( {data: String(reader.result!).split(';base64,')[1], fileName: files[ind].name, fileType: files[ind].type})
                     };
                  }


                  this.myForm.patchValue({
                    file : this.file,
                   });
                  this.cd.markForCheck();
                  
                  // console.log(reader.result)
                  
          
            }
  }

}
