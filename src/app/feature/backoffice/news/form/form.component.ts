import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IActivity } from '@core/models/activity';
import { ICategory } from '@core/models/category';
import { INew } from '@core/models/new';
import { Subscription } from 'rxjs';
@Component({
  selector: 'alk-create',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public categoriesList!: ICategory[];

  public inewSuscription!: Subscription;
  public isNew: boolean;
  
  public ckeditor;
  public title!: string;
  public isEditing: boolean = false;
  public inew: INew = {
    name:'',
    image:'',
    content: '' ,
    category_id: 0,
    updated_at: ''
  };

  newsForm = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    category: new FormControl('', { validators: [Validators.required] }),
    imageUrl: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    content: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
  });

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.isNew = true;
    this.setCategoriesList();
    this.ckeditor = ClassicEditor;
  }

  ngOnInit(): void {
    /* If recive a new for edit */
    this.activatedRoute.params.subscribe(
      (params) => {
        if (params['id']) {
          this.getInew(params['id']);
          this.title = 'Editar Novedad';
          this.isEditing = true;
        } else this.title = 'Crear Novedad';
      },
      (error) => console.log(error)
    );
  }

  /**
   * Set the inew variable and call the function that change the form
   * @param id inew Id
   */
  getInew(id: number) {}

  /**
   * this function patch the new form with a existing new objet
   * @param inew new for edit in form
   */
  patchForm(inew: INew) {
    this.newsForm.setValue({
      title: inew.name,
      category: inew.category_id ? inew.category_id : '',
      imageUrl: inew.image,
      content: inew.content,
    });
  }

  /**
   * set the internal variable categoryList
   */
  async setCategoriesList(): Promise<void> {
    this.categoriesList = [
      {
        id: 1177,
        name: 'mkpli',
        description: '<p><em><strong>njkolp</strong></em></p>',
        image: 'http://ongapi.alkemy.org/storage/DsEKBli0ct.html',
        parent_category_id: null,
        created_at: '2021-11-24T01:21:14.000000Z',
        updated_at: '2021-12-11T04:50:16.000000Z',
        deleted_at: null,
        group_id: null,
      },
      {
        id: 1180,
        name: 'fewfewfewfwef',
        description: '<p>few</p>',
        image: 'http://ongapi.alkemy.org/storage/PK3YlyU93j.png',
        parent_category_id: null,
        created_at: '2021-11-24T02:37:26.000000Z',
        updated_at: '2021-11-24T02:37:26.000000Z',
        deleted_at: null,
        group_id: null,
      },
      {
        id: 1181,
        name: 'CategoriaDos',
        description: '<p>fewfw</p>',
        image: 'http://ongapi.alkemy.org/storage/aHQgeVzhs5.png',
        parent_category_id: null,
        created_at: '2021-11-24T02:48:16.000000Z',
        updated_at: '2021-12-08T19:02:10.000000Z',
        deleted_at: null,
        group_id: null,
      },
      {
        id: 1182,
        name: 'freifnei',
        description: null,
        image: null,
        parent_category_id: null,
        created_at: '2021-11-24T03:12:16.000000Z',
        updated_at: '2021-11-24T03:12:16.000000Z',
        deleted_at: null,
        group_id: null,
      },
    ];
  }

  /**
   * Form submit, if create new, call post service, else call patch
   */
  onSubmit() {
    if (this.newsForm.dirty && this.newsForm.valid) {
      this.setterInew();
      if (this.isNew) {
        this.inew.created_at = new Date().toUTCString();
      }
    }
    this.inew ? alert('guardado') : alert('no se pudo modificar');
    console.log(this.newsForm.value);
  }

  /**
   * patch the inew local variable with the changes from form
   */
  setterInew() {
    this.inew.name = this.newsForm.value.title;
    this.inew.image = this.newsForm.value.imageUrl;
    this.inew.category_id = this.categoriesList
      .filter((ctg) => ctg.name == this.newsForm.value.category.name)
      .map((ctg) => ctg.id)[0];
    this.inew.content = this.newsForm.value.content;

    this.inew.updated_at = new Date().toUTCString();
  }
}
