import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

const UpdateForm = (props) => {
    let navigate = useNavigate();
    //네비게이트 사용시 이동시킬거임 -> home으로 

    const { id } = useParams();

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

    //useEffect: React의 생명주기 훅으로, 컴포넌트가 처음 렌더링될때 한번 실행(마운트 - 언마운트)
        useEffect(() => {
            console.log("@# Detail useEffect호출 ")
            //    기본적인 get 요청 
      Axios.get("http://localhost:8383/book/" + id)
                .then(response => {
                    // 성공적인 응답처리
                    console.log(11, response.data)
                    setBook(response.data)
                })
                .catch(error => {
                    // 오류처리
                    console.error("Request failed:", error)
                })


            //    []이거 안넣어주면 무한반복
        }, []);
  

        const submitBook = (e) => {
            e.preventDefault(); //submitaction 금지
            console.log(77, book)


            //    기본적인 post 요청 
            Axios.put("http://localhost:8383/book/" + id, book)
                .then(response => {
                    // 성공적인 응답처리
                    console.log(11, response.data)
                    if (response != null) {
                        alert("책 수정에 성공하였습니다")
                        navigate("/")
                        //app.jsx에 있는 home "/"설정한 링크탐.
                    } else {
                        alert("책 수정에 실패하였습니다")
                    }
                })
                .catch(error => {
                    // 오류처리
                    console.error("Request failed:", error)
                    alert("예외처리발생")
                })

        }



        return (
            <Form onSubmit={submitBook}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={changeValue} name='title' value={book.title} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Author" onChange={changeValue} name='author' value={book.author} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }


export default UpdateForm


