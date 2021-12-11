import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'alk-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent implements OnInit {
  public organizationForm: FormGroup;
  public ckeditor;
  public photo;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.organizationForm = this.fb.group({
      name: new FormControl('', Validators.required),
      shortDescription: new FormControl('', Validators.required),
      longDescription: new FormControl('', Validators.required),
      logo: new FormControl(''),
      facebookUrl: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
        ),
      ]),
      linkedinUrl: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
        ),
      ]),
      instagramUrl: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
        ),
      ]),
      twitterUrl: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
        ),
      ]),
    });

    this.ckeditor = ClassicEditor;
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.organizationForm.value)
    this.organizationForm.valid ? alert("guardado"):alert("no se pudo modificar")    
  }

  onPhotoSelected(event): void {
    const reader = new FileReader();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.onload = () => {
        this.photo = reader.result!;
        this.organizationForm.patchValue({
          logo: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
      this.cd.markForCheck();
    }
  }
}
