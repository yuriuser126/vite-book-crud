import React, { useEffect, useState } from 'react'
import BookItem from '../components/BookItem'
import Axios from 'axios' //axios 비동기 사용 , npm install axios

const Home = () => {
    //상태변수를 정의(books : 현재상태 ,setBooks : 상태를업데이트하기위한함수)
    const [books, setBooks] = useState([]);
    // const res = books

    //컴포넌트가 처음 렌더링될때 실행(상태값 변경시 실행)
    useEffect(() => {

        console.log("@# useEffect호출 ")

        //컴포넌트가 제거 될때(unmount)될때
        // return () => {
        //     console.log("@#  useEffect unmount 호출 ")
        // }

        /*
        // 비동기함수
        fetch("http://localhost:8383/book"
            // ,{method:"GET"} 이건(GET방식) 생략가능

        )
        .then((res)=>res.json()) //응답res 결과를 json형태로 반환하는것. / json() 오타유의
        .then((res)=> {//json 변환된 데이터 처리
            console.log(1,res);
        
            // 가져온 데이터를 book 상태에 저장(화면 다시 렌더링)
            setBooks(res)

        })
        ;
        */

        //    기본적인 get 요청 
        Axios.get("http://localhost:8383/book")
            .then(response => {
                // 성공적인 응답처리
                console.log(11, response.data)
                setBooks(response.data)
            })
            .catch(error => {
                // 오류처리
                console.error("Request failed:", error)
            })



        //초기값으로 빈 배열([])
        //컴포넌트가 처음 렌더링될때 실행

    }, []);



    return (
        <div>
            {/* <h1>책리스트보기</h1> */}
            {books.map(book => (

                // <BookItem />
                <BookItem key={book.id} book={book} />
            ))}
        </div>
    )
}

export default Home