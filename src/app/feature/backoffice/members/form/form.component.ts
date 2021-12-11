import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IMember } from '@core/models/member';
@Component({
  selector: 'alk-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public ckeditor;
  public title!:string
  public isEditing = false;

  memberForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    imageUrl: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('https?://.*.(?:png|jpg|jpeg)'),
      ],
    }),
    facebookUrl: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(
          '^(?:(?:https?://)?(?:www.)?facebook.com/[0-9a-zA-Z\u00f1\u00d1\u00E0-\u00FC]{6,})$'
        ),
      ],
    }),
    linkedinUrl: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(
          '^(?:(?:https?://)?(?:www.)?linkedin.com/in/[0-9a-zA-Z\u00f1\u00d1\u00E0-\u00FC]{6,})$'
        ),
      ],
    }),
    description: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
  });

  public member:IMember = {
    name:'',
    description:'',
    image: '',
    facebookUrl:'',
    linkedinUrl: '',
    updated_at:''
  };
  isNew: boolean;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    this.isNew = true;
    this.ckeditor = ClassicEditor
  }

  ngOnInit(): void {
    /* if recibe a member for edit */
    this.activateRoute.params.subscribe(
      (params) => {
        if (params['id']) {
          this.getMember(params['id']);
          this.title = "Editar Miembro";
          this.isEditing = true
        }
        else{
          this.title = "Agregar Miembro"
        }
      },
      (error) => console.log(error)
    );
  }

  getMember(id: number) {}

  /**
   * this function patch the new form with a existing new objet
   * @param imember new for edit in form
   */
  patchForm(imember: IMember) {
    this.memberForm.setValue({
      name: imember.name,
      imageUrl: imember.image,
      facebookUrl: imember.facebookUrl,
      linkedinUrl: imember.linkedinUrl,
      description: imember.description,
    });
  }

  /**
   * Form submit, if create new, call post service, else call patch
   */
  onSubmit() {
    if (this.memberForm.dirty && this.memberForm.valid) {
      this.setterIMember();
      if (this.isNew) {
        this.member.created_at = new Date().toUTCString();
      } 
    }
    this.member ? alert("guardado"):alert("no se pudo modificar")    
    console.log(this.member);
  }

  /**
   * patch the imember local variable with the changes from form
   */
  setterIMember() {
    this.member.name = this.memberForm.value.name;
    this.member.image = this.memberForm.value.imageUrl;
    this.member.description = this.memberForm.value.description;
    this.member.facebookUrl = this.memberForm.value.facebookUrl;
    this.member.linkedinUrl = this.memberForm.value.linkedinUrl;

    this.member.updated_at = new Date().toUTCString();
  }
}
