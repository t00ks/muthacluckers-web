import { Component, OnInit } from '@angular/core';
import { ClanMember } from 'src/app/models/clan-member';
import { ClanMembersService } from 'src/app/services/clan-members.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  clanMembers: ClanMember[] = [];

  constructor(
    clanMembersService: ClanMembersService
  ) {
    clanMembersService.getClanMembers().subscribe((results) => {
      results.forEach(m => {
        this.clanMembers.push(m);
      });

      this.clanMembers = this.clanMembers.sort((a, b) => {
        if (a.isOnline && !b.isOnline) { return -1; }
        if (b.isOnline && !a.isOnline) { return 1; }
        return 0;
      });
    });
  }

  ngOnInit() {
  }

}
