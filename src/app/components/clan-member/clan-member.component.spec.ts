import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanMemberComponent } from './clan-member.component';

describe('ClanMemberComponent', () => {
  let component: ClanMemberComponent;
  let fixture: ComponentFixture<ClanMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
