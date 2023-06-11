package fr.adama.traore.employeemanager;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class EmployeemanagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeemanagerApplication.class, args);
	}

	@Bean
	public CorsFilter corsFilter() {
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.setAllowCredentials(true); // permet d'envoyer des cookies
		corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200")); // permet d'envoyer des requetes depuis n'importe quelle origine
		corsConfiguration.addAllowedHeader("*"); // permet d'envoyer n'importe quel header
		corsConfiguration.addAllowedMethod("*"); // permet d'envoyer n'importe quelle methode
		UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
		urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration); // applique la configuration a toutes les routes
		return new CorsFilter(urlBasedCorsConfigurationSource);
		
	}

}
