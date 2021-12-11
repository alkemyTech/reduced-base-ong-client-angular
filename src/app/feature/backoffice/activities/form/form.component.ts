import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IActivity } from '@core/models/activity';
@Component({
  selector: 'alk-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public ckeditor;
  public activityForm!: FormGroup;
  public photo!: string | ArrayBuffer;
  public isEditing: boolean = false;
  public activity: IActivity = {
    id: null,
    name: '',
    description: '',
    image: ''
  };
  public title!:string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.ckeditor = ClassicEditor;
  }

  ngOnInit(): void {
    this.activityForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });

    this.route.paramMap.subscribe((param) => {
      if (param.has('id')) {
        const id = Number(param.get('id'));
        this.setActivity(id);
        this.isEditing = true;
        this.title = 'Editar Actividad'
      }
      else{
        this.title = 'Crear Actividad'
      }
    });
  }

  onSubmit() {
    if (this.isEditing) {
      console.log('editing');
      const { name, description, image } = this.activityForm.value;
      this.activity.name = name;
      this.activity.description = description;
      this.activity.image = image;
    } else {
      console.log('adding');
      const { name, description, image } = this.activityForm.value;
      this.activity.name = name;
      this.activity.description = description;
      this.activity.image = image;
    }
    this.activity ? alert("guardado"):alert("no se pudo modificar")    
    console.log(this.activity);
  }

  /**
   * It sets the component's activity property with the given activity
   * @param id - The id of the activity
   */
  setActivity(id: number) {
 
  }

  /**
   * It sets the component's image property and the form's image value
   * @param event - The event containing the new image
   */
  onPhotoSelected(event): void {
    const reader = new FileReader();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.onload = () => {
        this.photo = reader.result!;
        this.activityForm.patchValue({
          image: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
      this.cd.markForCheck();
    }
  }
}
