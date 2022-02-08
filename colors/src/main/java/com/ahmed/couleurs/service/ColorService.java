package com.ahmed.couleurs.service;

import java.util.List;

import com.ahmed.couleurs.Color;

public interface ColorService {
	
	Color saveColor(Color c);
	List<Color> getAllColors();

}
