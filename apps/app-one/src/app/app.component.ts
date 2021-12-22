import { Component } from '@angular/core';
import { libraryOne } from '@testing-versioning/library-one';
import { libraryTwo } from '@testing-versioning/library-two';

@Component({
  selector: 'testing-versioning-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-one';

  bodyFromLibrary = libraryTwo().sayHello();
  breakingChange = libraryOne().breakingChanges();
}
