import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalDetailComponent } from './proposal-detail.component';

describe('ProposalDetailComponent', () => {
  let component: ProposalDetailComponent;
  let fixture: ComponentFixture<ProposalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
