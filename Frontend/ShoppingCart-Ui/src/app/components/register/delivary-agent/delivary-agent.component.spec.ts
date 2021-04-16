import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivaryAgentComponent } from './delivary-agent.component';

describe('DelivaryAgentComponent', () => {
  let component: DelivaryAgentComponent;
  let fixture: ComponentFixture<DelivaryAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivaryAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivaryAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
