import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ITestimonial } from '@core/models/testimonial';
@Component({
  selector: 'alk-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public title!: string;
  public ckeditor;
  public isEditing = false;
  public testimonialForm: FormGroup;
  public testimonial: ITestimonial = {
    id:0,
    name: '',
    image: '',
    description: '',

  };
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.testimonialForm = this.fb.group({
      name: new FormControl('', [Validators.minLength(4), Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}[^\s]+(?=\.(jpg|png|jpeg))\./g
        ),
      ]),
    });

    this.ckeditor =  ClassicEditor;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      if (param.has('id')) {
        const id = Number(param.get('id'));
        this.setTestimonial(id);
        this.title = 'Editar testimonio';
        this.isEditing = true;
      } else {
        this.title = 'Crear testimonio';
      }
    });
  }

  async onSubmit() {
    console.log(this.testimonialForm.value);
    console.log(this.testimonial);

    const { name, description, image } = this.testimonialForm.value;
    this.testimonial.name = name;
    this.testimonial.description = description;
    this.testimonial.image = image;

    if (this.isEditing) {
      console.log('editing');

      // this.router.navigate(['/backoffice/testimonials']);
    } else {
      console.log('adding');
    }
    this.testimonial ? alert('guardado') : alert('no se pudo modificar');
    console.log(this.testimonialForm.value);
  }
  /**
   * It sets the component's testimonial property with the given testimonial
   * @param id - The id of the testimonial
   */
  setTestimonial(id: number){}
}
