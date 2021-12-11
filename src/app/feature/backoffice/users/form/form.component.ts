import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IUser } from '@core/models/user';
@Component({
  selector: 'alk-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  public title
  public ckeditor;
  public userForm!: FormGroup;
  public photo!: string | ArrayBuffer| null;
  public isEditing: boolean = false;
  public user: IUser = {
    name: '',
    email: '',
    password: 'test',
    role_id: 0,
    profile_image: ''
  };

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
  ) { 

    this.ckeditor = ClassicEditor
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [
        Validators.required,
        Validators.pattern(/[a-zA-Z-._]+\@[a-zA-Z-._]+\.[a-zA-Z]+/g)
      ]],
      profile_image: [''],
      role_id: [null, [Validators.required]],
    })
    this.route.paramMap.subscribe(param => {
      if (param.has('id')) {
        const id = Number(param.get('id'));
        this.isEditing = true;
        this.title = 'Editar usuario'
      }
      else
        this.title = 'Crear usuario'
    });
  }

  /**
   * It submits the form. The performed action depends on the form type (editing or adding)
   */
  onSubmit() {
    if (this.isEditing) {
      const { name, email, profile_image, role_id } = this.userForm.value;
      this.user.name = name;
      this.user.email = email;
      this.user.profile_image = profile_image;
      this.user.role_id = role_id;
    }
    else {
      const { name, email, profile_image, role_id } = this.userForm.value;
      this.user.name = name;
      this.user.email = email;
      this.user.profile_image = profile_image;
      this.user.role_id = role_id;
    }
    this.user ? alert("guardado"):alert("no se pudo modificar")  
    console.log(this.user);
  }

  /**
   * It sets the user's profile picture when loaded with the file input.
   * @param event - The event that contains the file
   */
  onPhotoSelected(event): void {
    const reader = new FileReader()
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      reader.onload = () => {
        this.photo = reader.result;
        this.userForm.patchValue({
          profile_image: reader.result as string
        });
      }
      reader.readAsDataURL(file);
      this.cd.markForCheck();
    }
  }

}
