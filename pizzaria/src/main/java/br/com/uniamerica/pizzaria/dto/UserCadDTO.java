package br.com.uniamerica.pizzaria.dto;

import br.com.uniamerica.pizzaria.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCadDTO {
    private Long id;
    private String username;
    private String password;
    private String role;

    public UserCadDTO(User user){
        id = user.getId();
        username = user.getUsername();
        password = user.getPassword();
        role = user.getRole();
    }

    public UserCadDTO(Long id, String username, String password, String role){
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
