import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ICategory } from '@core/models/category';
@Component({
  selector: 'alk-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public category!: ICategory;
  public message!:string;
  public ckeditor;
  public categoryForm!: FormGroup;
  public isEditing = false;
  public title!:string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { 
      this.ckeditor = ClassicEditor;
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      if (param.has('id')) {
        const id = Number(param.get('id'));
        this.setCategory(id);
        this.isEditing = true;
        this.title = 'Editar Actividad'
      }
      else{
        this.title = 'Crear Actividad'
      }
    });
    this.buildForm();
  }

  setCategory(id:number){

  }


  private buildForm() {
    this.categoryForm = this.formBuilder.group({
        name: new FormControl(this.category ? this.category.name:'', [Validators.required, Validators.min(4)]),
        description: new FormControl(this.category ? this.category.description:'', Validators.required),
        image: new FormControl(this.category ? this.category.image:'', [Validators.required, Validators.pattern(/[^\s]+(?=\.(jpg|png))\./g)])
    })
  }

  onSubmit(){
    if(!this.category){
      this.category = this.categoryForm.value;
    } else {
      this.category.name = this.categoryForm.value.name;
      this.category.description = this.categoryForm.value.description;
      this.category.image = this.categoryForm.value.image;
    }
    this.category ? alert("guardado"):alert("no se pudo modificar")
    
  }
}
