package com.ahmed.couleurs;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Color {
	
	//primary key
	@Id
	//auto increment
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private long id_color;
	
	private String oldOne;
	private String newOne;
	private Date actionDate;
	public long getId_color() {
		return id_color;
	}
	public void setId_color(long id_color) {
		this.id_color = id_color;
	}
	public String getOldOne() {
		return oldOne;
	}
	public void setOldOne(String oldOne) {
		this.oldOne = oldOne;
	}
	public String getNewOne() {
		return newOne;
	}
	public void setNewOne(String newOne) {
		this.newOne = newOne;
	}
	public Date getActionDate() {
		return actionDate;
	}
	public void setActionDate(Date actionDate) {
		this.actionDate = actionDate;
	}
	
	
	public Color() {
		super();
	}
	
	
	@Override
	public String toString() {
		return "Color [id_color=" + id_color + ", oldOne=" + oldOne + ", newOne=" + newOne + ", actionDate="
				+ actionDate + "]";
	}
	public Color( String oldOne, String newOne, Date actionDate) {
		super();
		this.oldOne = oldOne;
		this.newOne = newOne;
		this.actionDate = actionDate;
	}
	
	
	public Color( String oldOne, String newOne) {
		super();
		this.oldOne = oldOne;
		this.newOne = newOne;
		this.actionDate = new Date();
	}
	
	
	
	
	

}
