package com.ahmed.couleurs;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ahmed.couleurs.reos.ColorRepository;

@SpringBootTest
class ColorsApplicationTests {
	
	@Autowired
	private ColorRepository colorRepository ;

	@Test
	public void testCreateColor() {
		Color col = new Color("blue", "red", new Date());
		colorRepository.save(col);
		
	}
	
	@Test
	public void testCreateColor1() {
		Color col = new Color("black", "yellow");
		colorRepository.save(col);
		
	}

}
