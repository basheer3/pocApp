import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BadgeComponent } from './badge/badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { BottomsheetoverviewComponent } from './bottomsheet/bottomsheetoverview/bottomsheetoverview.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ButtonComponent } from './button/button.component'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ButtontoggleComponent } from './buttontoggle/buttontoggle.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ChipsComponent } from './chips/chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { DatepickerComponent, ExampleHeader } from './datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogComponent, DialogContentSheet } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DividerComponent } from './divider/divider.component';
import {MatDividerModule} from '@angular/material/divider';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormfieldComponent } from './formfield/formfield.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { PaginatorComponent } from './paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressspinnerComponent } from './progressspinner/progressspinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import {MatRadioModule} from '@angular/material/radio';
import { RipplesComponent } from './ripples/ripples.component';
import {MatRippleModule} from '@angular/material/core';
import { SelectComponent } from './select/select.component';
import {MatSelectModule} from '@angular/material/select';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SliderComponent } from './slider/slider.component';
import {MatSliderModule} from '@angular/material/slider';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SortheaderComponent } from './sortheader/sortheader.component';
import {MatSortModule} from '@angular/material/sort';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TooltipComponent } from './tooltip/tooltip.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TreeComponent } from './tree/tree.component';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    BadgeComponent,
    BottomsheetComponent,
    BottomsheetoverviewComponent,
    ButtonComponent,
    ButtontoggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    ExampleHeader,
    DialogComponent,
    DialogContentSheet,
    DividerComponent,
    ExpansionpanelComponent,
    FormfieldComponent,
    GridlistComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressbarComponent,
    ProgressspinnerComponent,
    RadiobuttonComponent,
    RipplesComponent,
    SelectComponent,
    SidenavComponent,
    SlidetoggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortheaderComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgbModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
