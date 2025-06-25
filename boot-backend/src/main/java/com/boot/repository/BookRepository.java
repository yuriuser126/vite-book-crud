package com.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.domain.Book;

//	Long 은 아이디 타입 pk 에 있는거
public interface BookRepository extends JpaRepository<Book, Long> {
	

}
