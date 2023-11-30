import { Venda } from './venda';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Venda', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should create an instance', () => {
    const venda = new Venda();
    expect(venda).toBeTruthy();
  });

});