package com.ahmed.usersBackEnd;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ahmed.usersBackEnd.entities.Role;
import com.ahmed.usersBackEnd.entities.User;
import com.ahmed.usersBackEnd.UserRepository;

@SpringBootTest
class BackEndApplicationTests {
	@Autowired
	//declaration depuis interface
	//permet de faire toute les operation sur les données JPA
	//Par injection des dependance
	private UserRepository userRepository;

	//@Test
	//jUnit
	/*void contextLoads() {
	}*/
	//public void testCreateUser() {
		/*private long iduser;
		private String username;
		private String email;
		private String password;
	
		private Role role;*/
		/*Role r = new Role();
		
		User u = new User("koko","koko@gmail.com","123456789", r);
		userRepository.save(u);
	}*/
	
	



	/*@Test
	public void getUserByEmailPassword(String e) {
	User getUserByEmailPassword(e String
			email) {
		return userRep.findByUsername(username);}
	//Search by email
	public void testFindUser() {
		//1L càd c'est un String
		User e = userRepositorry.findByEmail()
	}*/
	
	@Test
	//search  by email
	public void testFindUserByEmail() {
		User users = userRepository.findByEmail("ahmedjedidi@gmail.com");
		
			System.out.println(users);
		
	}
	/*public void testFindUserByEmail() {
		List<User> users = userRepository.findByEmail("ahmedjedidi@gmail.com");
		for (User u : users) {
			System.out.println(u);
		}
	}*/
	
	
	@Test
	public void testListerTousUsers()
	{
	List<User> usr = userRepository.findAll();
	for (User u : usr)
	{
	System.out.println(u);
	}
	}



}
