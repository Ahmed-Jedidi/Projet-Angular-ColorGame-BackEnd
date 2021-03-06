package com.ahmed.couleurs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ahmed.couleurs.Color;
import com.ahmed.couleurs.reos.ColorRepository;

@Service
public class ColorServiceImpl implements ColorService{
	@Autowired
	ColorRepository colorRepository;
	
	@Override
	public Color saveColor(Color c){
		return colorRepository.save(c);
	}
	@Override
	public List<Color> getAllColors(){
		return colorRepository.findAll();
	}

	

}
