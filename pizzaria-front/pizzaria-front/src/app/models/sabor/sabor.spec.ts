import { Sabor } from './sabor';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Sabor', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should create an instance', () => {
    const sabor = new Sabor();
    expect(sabor).toBeTruthy();
  });

});