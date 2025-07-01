package com.boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.domain.Book;
import com.boot.repository.BookRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class BookService {
	
//	객체 사용하기위해 autowired 사용
	@Autowired
	private BookRepository bookRepository;
	
//	save(book) - 기본 메서드 
	
	public Book saveBook(Book book) {
		log.info("@# saveBook");
		return bookRepository.save(book);
//		책정보 저장하고 리턴을 한거임 
	}
	
//	orElseThrow - optional 처리 다르게 + 예외처리 합친거
	public Book getBookOne(Long id) {
		log.info("@# getBookOne");
		return bookRepository.findById(id).orElseThrow(()->new IllegalArgumentException("Id를 확인해주세요"));
		
	}
	
//	책정보 전체조회
	public List<Book> getBookAll() {
		log.info("@# getBookAll");
		return bookRepository.findAll();
		
	}
	
//	책정보 수정 , id별 북 정보
	public Book modifyBook(Long id, Book book) {
		log.info("@# modifyBook");
		log.info("@# book=>"+book);
		
//		옵셔널 쓰거나 .orElse 또는 예외처리 몽땅인거 붙여서 처리
		Book bookEntity = bookRepository.findById(id).orElseThrow(()->new IllegalArgumentException("Id를 확인해주세요"));
		
//		기존 id로 레파지에있는정보가져와서 타이틀 가져와서 get으로 입력받고 save 때림
		bookEntity.setTitle(book.getTitle());
		bookEntity.setAuthor(book.getAuthor());
		
		bookRepository.save(bookEntity);
//		아래는 변경된거 저장된거임
		
		return bookEntity;
		//리턴은 변경된거 저장된 book Entitiy
		
	}
	
//	string타입으로 delete 보내겠다 작동은 안쪽 id가져와서 지울거임
	public String delBook(Long id) {
		log.info("@# delBook()");
		log.info("@# id=>()"+id);
		bookRepository.deleteById(id);
		
		
		return "delete";
		
	}
}
