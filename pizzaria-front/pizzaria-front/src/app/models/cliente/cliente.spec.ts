import { Cliente } from './cliente';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Cliente', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should create an instance', () => {
    const cliente = new Cliente();
    expect(cliente).toBeTruthy();
  });

});