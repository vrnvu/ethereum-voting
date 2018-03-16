import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalFormComponent } from './proposal-form.component';

describe('ProposalFormComponent', () => {
  let component: ProposalFormComponent;
  let fixture: ComponentFixture<ProposalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
