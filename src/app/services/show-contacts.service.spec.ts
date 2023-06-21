import { TestBed } from '@angular/core/testing';

import { ShowContactsService } from './show-contacts.service';

describe('ShowContactsService', () => {
  let service: ShowContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
