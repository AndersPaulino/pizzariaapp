import { Login } from "./login";

describe('Login', () => {
    let login: Login;
  
    beforeEach(() => {
      login = new Login();
    });
  
    it('should create a Login instance', () => {
      expect(login).toBeTruthy();
    });
  
    it('should have username and password properties', () => {
      expect(login.username).toBeDefined();
      expect(login.password).toBeDefined();
    });
  
    it('should initialize username and password as strings', () => {
      expect(typeof login.username).toBe('string');
      expect(typeof login.password).toBe('string');
    });
})