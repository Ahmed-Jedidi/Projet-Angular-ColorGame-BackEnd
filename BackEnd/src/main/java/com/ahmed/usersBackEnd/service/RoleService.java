package com.ahmed.usersBackEnd.service;

import java.util.List;

import com.ahmed.usersBackEnd.entities.Role;

public interface RoleService {

	/*Role saveUser(Role u); */
	List<Role> getAllRoles();
	
	Role getRole(Long id);
}




