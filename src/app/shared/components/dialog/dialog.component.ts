import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IDataDialog } from '@core/models/dataDialog';

@Component({
  selector: 'alk-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit, AfterViewInit {

  @ViewChild('info') infoDialog!: TemplateRef<any>;
  @ViewChild('error') warningDialog!: TemplateRef<any>;
  @ViewChild('confirm') confirmDialog!: TemplateRef<any>;

  @Input() dataDialog!: IDataDialog;
  @Output() response!: EventEmitter<boolean>;
  dialogConfig = new MatDialogConfig();

  constructor(public dialog: MatDialog) {
    this.response = new EventEmitter();
    this.dialogConfig.disableClose = true;
    this.dialogConfig.panelClass = ["bg-dialog-modal"];
    this.dialogConfig.minWidth = 100;
    this.dialogConfig.minHeight = 100;
    this.dialogConfig.maxWidth = 500;
    this.dialogConfig.maxHeight = 500;
  }

  ngOnInit(): void {
    if (!this.dataDialog.title) this.dataDialog.title = this.dataDialog.type
  }

  ngAfterViewInit(): void {
    switch (this.dataDialog.type) {
      case 'info':
        this.openDialogInfo()
        break;
      case 'error':
        this.openDialogError()
        break;
      case 'confirm':
        this.openDialogConfirm()
        break;
    }
  }

  /**
   * @function openDialogInfo
   * opens information dialog
   */
  openDialogInfo(): void {
    this.dialog.open(this.infoDialog, this.dialogConfig);
  }
  /**
   * @function openDialogWarning
   * opens error dialog
   */
   openDialogError(): void {
    this.dialog.open(this.warningDialog, this.dialogConfig);
  }
  /**
   * @function openDialogConfirm
   * opens confirmation dialog
   */
  openDialogConfirm(): void {
    this.dialog.open(this.confirmDialog, this.dialogConfig);
  }
  /**
   * @function returnRes
   * returns a boolean event
   */
  returnRes(event:any) {
    this.response.emit(event.target.value)
    this.dialog.closeAll();
  }
}

