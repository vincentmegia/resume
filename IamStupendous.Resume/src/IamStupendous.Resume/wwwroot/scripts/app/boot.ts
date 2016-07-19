///<reference path="../../../node_modules/typescript/lib/lib.es6.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { SkillComponent } from './skill/skill.component';
import { FooterComponent } from './footer/footer.component';
import { SignatureComponent } from './signature/signature.component';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators';

enableProdMode();
bootstrap(HeaderComponent, [HTTP_PROVIDERS]);
bootstrap(TitleComponent);
bootstrap(SummaryComponent);
bootstrap(EducationComponent);
bootstrap(WorkComponent);
bootstrap(SkillComponent);
bootstrap(FooterComponent);
bootstrap(SignatureComponent);