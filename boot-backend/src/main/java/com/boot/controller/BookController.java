package com.boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.boot.domain.Book;
import com.boot.service.BookService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class BookController {
	
	@Autowired
	private BookService bookService;
	
//	?는 어떤형태든 받아준다 + findAll() 목록조회
	/*
	@GetMapping("/")
	public ResponseEntity<?> findAll() {
		log.info("@# findAll()");
//		return new ResponseEntity<String>("ok", HttpStatus.OK);
//		return new ResponseEntity<String>("ok", HttpStatus.NOT_FOUND);
		//200번 , 404
		return new ResponseEntity<>(bookService.getBookAll(), HttpStatus.OK);
//		<>여기안에 string 빼면 알아서 타입 판단해서처리함 + 전체 책 데이터 가져온다
	}
	*/
	
	//책정보 전체 목록조회
	@GetMapping("/book")
	public ResponseEntity<?> findAll() {
		log.info("@# findAll()");

		return new ResponseEntity<>(bookService.getBookAll(), HttpStatus.OK);
	}
	
	//책 정보 저장 , <Book>로 설정 @RequestBody json 형태라 null값받아온거 고침
	@PostMapping("/save")
//	public ResponseEntity<Book> saveBook(Book book) {
		public ResponseEntity<Book> saveBook(@RequestBody Book book) {
		log.info("@# saveBook()");
		log.info("@# book()=>"+book);
		
		//콘솔에 메소드상태보는거 201번 + 저장은 post
		return new ResponseEntity<>(bookService.saveBook(book), HttpStatus.CREATED);
	}
	
	//하나의 책 정보 조회
	@GetMapping("/book/{id}")
	public ResponseEntity<Book> getBook(@PathVariable(name = "id") Long id) {
		log.info("@# getBook()");

		return new ResponseEntity<>(bookService.getBookOne(id), HttpStatus.OK);
	}
	
	//하나의 책 정보 수정
	@PutMapping("/book/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable(name = "id") Long id,@RequestBody Book book) {
		log.info("@# updateBook()");
		log.info("@# id=>()"+id);
		log.info("@# book=>()"+book);
//		id별로 book 받아와야함

		return new ResponseEntity<>(bookService.modifyBook(id,book), HttpStatus.OK);
	}
	
	//하나의 책 정보 삭제 / ?또는 String 사용 / 서비스에서 String으로 보내니까
	@DeleteMapping("/book/{id}")
	public ResponseEntity<?> delBook(@PathVariable(name = "id") Long id) {
		log.info("@# delBook()");
		log.info("@# id=>()"+id);
//		id별로 삭제

		return new ResponseEntity<>(bookService.delBook(id), HttpStatus.OK);
	}
	
	

		
}
	
	
	

	

