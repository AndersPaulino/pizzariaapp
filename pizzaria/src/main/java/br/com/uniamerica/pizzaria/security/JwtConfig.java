package br.com.uniamerica.pizzaria.security;

import io.jsonwebtoken.SignatureAlgorithm;

public class JwtConfig {
    public static final String SECRET_KEY = "6A576D5A7134743777217A25432A462D4A614E645267556B5870327235753878";
    public static final SignatureAlgorithm ALGORITMO_ASSINATURA = SignatureAlgorithm.HS256;
    public static final int HORAS_EXPIRACAO_TOKEN = 1;
}
