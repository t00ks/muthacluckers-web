import { Component, OnInit, Input } from '@angular/core';
import { ClanMember } from 'src/app/models/clan-member';

@Component({
  selector: 'app-clan-member',
  templateUrl: './clan-member.component.html',
  styleUrls: ['./clan-member.component.css']
})
export class ClanMemberComponent implements OnInit {


  @Input()
  member: ClanMember;

  constructor() { }

  ngOnInit() {
  }

}
