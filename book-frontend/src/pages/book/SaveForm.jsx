import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SaveForm = () => {
  let navigate = useNavigate();
  //네비게이트 사용시 이동시킬거임 -> home으로 

  const [book, setBook] = useState({
    title: "",
    author: ""
    // 초기값 0 상태함수
  });


  // 값체인지 e 이벤트로 받음 / target으로 뭘 받는지 .name으로 받는다
  const changeValue = (e) => {
    console.log("@# name=>" + e.target.name)
    console.log("@# value=>" + e.target.value)
    console.log("@# title=>" + book.title)
    console.log("@# author=>" + book.author)

    setBook({
      ...book,
      [e.target.name]: e.target.value
    });

  }

  const submitBook = (e) => {
    e.preventDefault(); //submitaction 금지
    console.log(77, book)

    /*
    fetch("http://localhost:8383/book"
      ,{method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
        , body: JSON.stringify(book)
      }
    )
      
  
      //응답 res를 json형태로 저장
      .then((res) => res.json())
      //JSON으로 변환된 데이터 받아와서처리
      .then((res) => {
        console.log(21, res)
        //21???
         setBook(res)
      })
         */

    //    기본적인 post 요청 
    Axios.post("http://localhost:8383/book",book)
      .then(response => {
        // 성공적인 응답처리
        console.log(11, response.data)
        if (response != null) {
          alert("책 등록에 성공하였습니다")
          navigate("/")
          //app.jsx에 있는 home "/"설정한 링크탐.
        } else {
          alert("책 등록에 실패하였습니다")
        }
      })
      .catch(error => {
        // 오류처리
        console.error("Request failed:", error)
        alert("예외처리발생")
      })

  }

  return (
    <div>
      <h1>
        <Form onSubmit={submitBook}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={changeValue} name='title' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Author" onChange={changeValue} name='author' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </h1>
    </div>
  )
}

export default SaveForm