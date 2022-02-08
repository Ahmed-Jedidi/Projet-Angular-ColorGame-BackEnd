package com.ahmed.usersBackEnd.RestControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ahmed.usersBackEnd.UserRepository;
import com.ahmed.usersBackEnd.entities.User;
import com.ahmed.usersBackEnd.service.UserService;

@RestController
@CrossOrigin(origins = "*")

public class UserRESTController {
	
	@Autowired
	UserRepository userRep;
	
	@RequestMapping(value ="/login/{username}", method = RequestMethod.GET)
	public User getUserByUsername(@PathVariable("username") String username) {
		return userRep.findByUsername(username);
	}
	
	@RequestMapping(value ="/logino/{email}", method = RequestMethod.GET)
	public User getUserByEmail(@PathVariable("email") String email) {
		return userRep.findByEmail(email);
	}
	
//////////////////////////////////////Service	
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value ="/all", method = RequestMethod.GET)
	public List<User> getAllUsers() {
		return userService.getAllUsers();
		
	}
	
	
	@RequestMapping(method = RequestMethod.POST)
	public User create(@RequestBody User u) {
		return userService.saveUser(u);
	}
	
	
	
	

}

