package com.ahmed.usersBackEnd;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.ahmed.usersBackEnd.entities.User;

//faire toute les operation à travers ça
public interface UserRepository extends JpaRepository<User, Long>{
	User findByUsername(String username);
	User findByEmail(String email);
	//List<User> findByEmail(String email);
	
	
	/*	List<Livre> findByTitreLivre(String titre);
	List<Livre> findByTitreLivreContains(String titre);
	
	
	
	@Query("select l from Livre l where l.genre = ?1")
	List<Livre> findByGenre(Genre genre);
	
	List<Livre> findByGenreIdGen(Long id);*/
	
	
	
	/*List<Genre> getAllLivresGenre();*/

}

