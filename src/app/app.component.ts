import { Component } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant.',
      loveIts: 1,
      created_at: new Date
    },
    {
      title: 'Mon deuxième post',
      content: 'Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant.',
      loveIts: -1,
      created_at: new Date
    },
    {
      title: 'Encore un post',
      content: 'Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant.',
      loveIts: 0,
      created_at: new Date
    }

  ];

}
