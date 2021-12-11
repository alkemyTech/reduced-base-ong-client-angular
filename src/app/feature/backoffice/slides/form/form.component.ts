import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ISlide } from '@core/models/slides';
@Component({
  selector: 'alk-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public slide: ISlide = {
    name :'',
    image :'',
    order : null,
    description :'',
    updated_at :'',
  };
  public slideReturn: EventEmitter<ISlide>;
  public isNew: boolean;
  public error: any;
  public title ='';
  public isEditing = false;
  public ckeditor;

  slideForm = new FormGroup({
    name: new FormControl("", {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    order: new FormControl("", { validators: [Validators.required] }),
    imageUrl: new FormControl("", {
      validators: [
        Validators.required,
        Validators.pattern("https?://.*.(?:png|jpg|jpeg)"),
      ],
    }),
    description: new FormControl("", {
      validators: [Validators.required, Validators.minLength(4)],
    }),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.isNew = true;
    this.slideReturn = new EventEmitter();
    this.ckeditor = ClassicEditor
  }

  ngOnInit(): void {
    /* If recive a new for edit */
    this.activatedRoute.params.subscribe(
      (params) => {
        if (params["id"]) {
          this.getSlide(params["id"]);
          this.title = 'Editar slide'
        }
        else{
          this.title = 'Crear slide'
        }
      },
      (error) => console.log(error)
    );
  }

  /**
   * Set the slide variable and call the function that change the form
   * @param id slide Id
   */
  getSlide(id: number) {
  }
  
  /**
   * this function patch the new form with a existing new objet
   * @param slide new for edit in form
   */
  patchForm(slide: ISlide) {
    this.slideForm.setValue({
      name: slide.name,
      order: slide.order,
      imageUrl: slide.image,
      description: slide.description,
    });
  }

  /**
   * Form submit, if create new, call post service, else call patch
   */
  onSubmit() {
    if (this.slideForm.dirty && this.slideForm.valid) {
      this.setterSlide();
      if (this.isNew) {
        this.slide.created_at = new Date().toUTCString();
      }
      this.slideReturn.emit(this.slideForm.value)
    }

    this.slide ? alert('guardado') : alert('no se pudo modificar');
    console.log(this.slideForm.value);
  }

  /**
   * patch the slide local variable with the changes from form
   */
  setterSlide() {
    if(!this.slide) {
      this.slide = this.slideForm.value
    }
    this.slide.name = this.slideForm.value.name;
    this.slide.image = this.slideForm.value.imageUrl;
    this.slide.order = this.slideForm.value.order;
    this.slide.description = this.slideForm.value.description;

    this.slide.updated_at = new Date().toUTCString();
  }

}
