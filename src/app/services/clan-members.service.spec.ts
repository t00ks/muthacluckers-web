import { TestBed } from '@angular/core/testing';

import { ClanMembersService } from './clan-members.service';

describe('ClanMembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClanMembersService = TestBed.get(ClanMembersService);
    expect(service).toBeTruthy();
  });
});
