package br.fiap.calculadora_imc_spring.Controller;

import br.fiap.calculadora_imc_spring.Service.CalculadoraImcService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Controller
public class CalculadoraImcController {

    private final CalculadoraImcService calculadoraImcService;

    public CalculadoraImcController(CalculadoraImcService calculadoraImcService) {
        this.calculadoraImcService = calculadoraImcService;
    }

    @PostMapping("/calcular")
    public String calcular(@RequestParam double altura, @RequestParam double peso, Model model) {
        double imc = calculadoraImcService.calcularImc(altura, peso);
        BigDecimal imcArredondado = new BigDecimal(imc).setScale(2, RoundingMode.HALF_UP);
        model.addAttribute("imc", imcArredondado);
        model.addAttribute("altura", altura);
        model.addAttribute("peso", peso);
        return "index";
    }
}
