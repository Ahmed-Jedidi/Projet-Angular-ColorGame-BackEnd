package com.ahmed.usersBackEnd;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ahmed.usersBackEnd.entities.Role;
import com.ahmed.usersBackEnd.entities.User;

public interface RoleRepository extends JpaRepository<Role, Long> {
	
	//List<Role> getAllLivresRole();
	
	
	//List<Role> findAll();

}
