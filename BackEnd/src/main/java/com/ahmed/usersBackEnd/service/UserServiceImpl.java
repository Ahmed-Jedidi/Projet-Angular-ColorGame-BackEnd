package com.ahmed.usersBackEnd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.ahmed.usersBackEnd.UserRepository;
import com.ahmed.usersBackEnd.entities.User;

@Service
public class UserServiceImpl implements UserService{
	
	//odonné à sprint Injection une implementation des dependances 
		@Autowired
		
		//objet pour CRUD
		UserRepository userRepository;
		//RoleRepository roleRepository;
		
	@Override
	public User saveUser(User u) {
		return userRepository.save(u);
	}
	
	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

}
