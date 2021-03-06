import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {PluralizePipe, TimeAgoPipe} from "./pipes";
import {GravatarComponent} from "./gravatar/gravatar.component";
import {PagerComponent} from "./pager/pager.component";
import {FollowBtnModule} from "./follow-btn/follow-btn.module";
import {FollowBtnComponent} from "./follow-btn/follow-btn.component";


@NgModule({
  imports: [
    CommonModule,
    FollowBtnModule,
  ],
  declarations: [
    GravatarComponent,
    PagerComponent,

    PluralizePipe,
    TimeAgoPipe,
  ],
  exports: [
    GravatarComponent,
    PagerComponent,
    FollowBtnComponent,

    PluralizePipe,
    TimeAgoPipe,
  ]
})
export class SharedModule {
}
