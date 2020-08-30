import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { EducationComponent } from './education/education.component';
import { SummaryComponent } from './summary/summary.component';
import { WorkComponent } from './work/work.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SkillComponent } from './skill/skill.component';
import { FooterComponent } from './footer/footer.component';
import { SignatureComponent } from './signature/signature.component';
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    SummaryComponent,
    EducationComponent,
    WorkComponent,
    SkillComponent,
    FooterComponent,
    SignatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    AccordionModule.forRoot(),
    ChartsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
