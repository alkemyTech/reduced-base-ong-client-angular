import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { IContact } from '@core/models/contact';
import { IDataDialog } from '@core/models/dataDialog';

@Component({
  selector: 'alk-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
})
export class FormContactComponent implements OnInit {
  public contact!: IContact;
  public contactForm!: FormGroup;
  public dataDialog!: IDataDialog;
  public send!: boolean;
  private __emailValidator: ValidatorFn = Validators.pattern(
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
  );

  constructor(private formBuilder: FormBuilder) {
    this.dataDialog = {
      title: '',
      message: '',
      type: '',
    };
  }

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * @function buildForm
   * Generate contact form with validations
   */
  private buildForm() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        this.__emailValidator
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.min(8),
        Validators.pattern(/[0-9]/g),
      ]),
      message: new FormControl('', [Validators.required]),
    });
  }

  /**
   * @function setDataDialog
   * Load the dataDialog with the corresponding values if it is of type error or information
   * @param {string} type Value to identify the type of message
   */
  setDataDialog(type: string) {
    let dialog;

    if (type === 'info') {
      dialog = {
        title: 'Mensaje',
        type: 'info',
        message:
          'El mensaje se envió correctamente. Estaremos en contacto a la brevedad',
      };
    } else {
      dialog = {
        title: 'Mensaje',
        type: 'error',
        message: 'Error de envío. Verifique sus datos',
      };
    }
    this.dataDialog = dialog;
  }

  /**
   * @function onSubmit
   * Make the request to send the contact form
   */
  onSubmit() {
    if (this.contactForm.valid) {
      this.contact = this.contactForm.value;
      localStorage.setItem(
        `Message-${this.contact.name}`,
        JSON.stringify(this.contact)
      );
      this.setDataDialog('info');
      this.send = true;
    } else {
      this.setDataDialog('error');
      this.send = true;
    }
  }
}
