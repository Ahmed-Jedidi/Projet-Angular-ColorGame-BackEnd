package com.ahmed.usersBackEnd.service;

import java.util.List;

import com.ahmed.usersBackEnd.entities.User;

public interface UserService {
	
	
	User saveUser(User u); 
	List<User> getAllUsers();
	
}
