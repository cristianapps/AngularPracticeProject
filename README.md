# AngularPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

@@@@@ TECHNICAL SPECIFICATIONS @@@@@

@Initialize Angular CLI project

- ng new AngularPractice
- cd AngularPractice
- npm install

@Adaugare Angular material

- ng add @angular/material

@Adaugare grid si style Bootstrap

- npm install bootstrap / npm install bootstrap@next
- in angular.json
  "styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]
- in styles.scss @import "~bootstrap/scss/bootstrap";

"scripts": [
"./node_modules/bootstrap/dist/js/bootstrap.min.js"
]

@FlexLayout

- npm i -s @angular/flex-layout @angular/cdk
- import { FlexLayoutModule } from '@angular/flex-layout';

@Translations
SITE: https://medium.com/letsboot/translate-angular-4-apps-with-ngx-translate-83302fb6c10d

@ToggleShow
https://www.codegrepper.com/code-examples/javascript/hide+and+show+content+in+angular

@Active/inactive class
https://stackoverflow.com/questions/44535515/angular-ngclass-and-click-event-for-toggling-class

@ NgClass documentation
https://www.angularjswiki.com/angular/how-to-add-a-class-based-on-condition-in-angular/

@Fake database
https://blog.angulartraining.com/fake-your-angular-backend-until-you-make-it-8d145f713e14

/\***\*\*\*\*\***/

update de typescript

- npm i -D typescript@4.3.5

# pentru evitarea erorilor date de librarii:

"compilerOptions": {
"skipLibCheck": true
}

For active/inactive inline
(click)="state=!state" [ngClass]="state ? 'active' : 'inactive'"

For adding class on common div but on certain page
[ngClass]="{'about-wrapper' : router.url==='/about'}

For displaying only on one page
\*ngIf=router.url==='/about'

Fetch data from Json Server

<div \*ngFor="let team of teams$" style="text-align: left;">
<span>{{team.id}}</span>
<h3>{{team.name}}</h3>
<p>{{team.description}}</p>
</div>

RUN JSON SERVER COMMAND
npm run api

Version 1
teams$: Observable<any> = this.http.get("/api/teams");

Version 2 - service
constructor ( private team: DatabaseService)
teams$ = {}

    this.team.getDbData().subscribe((allData) => {
      console.log(allData);
      this.teams$ = allData;
    });
