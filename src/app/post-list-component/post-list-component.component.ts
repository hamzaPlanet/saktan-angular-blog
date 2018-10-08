import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  myClassObject(){
    if(this.loveIts < 0){
      return {'list-group-item' : true,
      'list-group-item-danger':true
    };
    }else if(this.loveIts > 0){
      return {'list-group-item' : true,
      'list-group-item-success':true
    };
    }else if(this.loveIts === 0){
      return {'list-group-item' : true
    };
    }
  }

  loveIt(){
    this.loveIts++;
  }

  dontLoveIt(){
    this.loveIts--;
  }

  constructor() {}

  ngOnInit() {}

}
