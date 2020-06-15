import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app-to-run-inside-docker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-to-run-inside-docker');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('app-to-run-inside-docker app is running!');
  });

  it('rxjs observable test', () => {
    let subs = null;
    const observable$ = new Observable(
      function subscribe(subscriber) {
        subs = subscriber;
        // return () => {};
      }
    );

    observable$.subscribe(x => console.log(`1stobs: ${x}`)
      , e => console.log(e)
      , () => console.log('1obs complete'));
    observable$.subscribe(x => console.log(`2ndobs: ${x}`)
      , e => console.log(e)
      , () => console.log('2obs complete'));

    subs.next('test');
  });

  it('rxjs subject test', () => {
    const subject = new Subject();
    subject.subscribe({
      next: (item) => console.log(`first subs: ${item}`)
    });
    subject.subscribe({
      next: (item) => console.log(`2nd subs: ${item}`)
    });
    subject.subscribe({
      next: (item) => console.log(`3rd subs: ${item}`)
    });
    subject.next('item publish');
    subject.next('item publish 2');
  });

  it('rxjs behaviorsubject test', () => {
    const subject = new BehaviorSubject('initial value');
    subject.subscribe({
      next: (item) => console.log(`behaviorsubject: ${item}`)
    });
    subject.subscribe({
      next: (item) => console.log(`behaviorsubject: ${item}`)
    });
    subject.subscribe({
      next: (item) => console.log(`behaviorsubject: ${item}`)
    });
    subject.next('item publish');
  });
});
