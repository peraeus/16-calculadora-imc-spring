package br.fiap.calculadora_imc_spring.Service;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class CalculadoraImcService {

    public double calcularImc(double altura, double peso) {


        return peso / (altura * altura);
    }

}
