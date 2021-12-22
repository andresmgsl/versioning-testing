import { Component } from '@angular/core';
import { libraryOne } from '@testing-versioning/library-one';

@Component({
  selector: 'testing-versioning-root',
  template: `
    <section>
      <h2>
        {{ title }}
      </h2>
      <div>
        {{ bodyFromLib }}
      </div>
    </section>
  `,
  styles: [],
})
export class AppComponent {
  title = 'app-two';
  bodyFromLib = libraryOne().sayHello();
  breakingChange = libraryOne().breakingChanges();
}
