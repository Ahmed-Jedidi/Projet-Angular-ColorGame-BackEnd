package com.ahmed.couleurs.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ahmed.couleurs.Color;
import com.ahmed.couleurs.service.ColorService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ColorRESTcontroller {
	
	@Autowired
	ColorService colorService;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Color> getAllColors(){
		return colorService.getAllColors();
	}
	
	
	@RequestMapping(method = RequestMethod.POST)
	public Color createColor(@RequestBody Color c){
		return colorService.saveColor(c);
	}

}
