
import { useParams } from 'react-router-dom'//자동임포트
import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Detail = (props) => {

    let navigate = useNavigate();

    //useParams : React Router에서 제공하는 훅임.
    // URL 경로에있는 매개변수(파라미터)가져오는데 사용
    const propsParam = useParams();
    const id = propsParam.id;
    console.log(4, id);

    //상태변수를 정의(books : 현재상태 ,setBook : 상태를업데이트하기위한함수)
    const [books, setBook] = useState({
        id: "",

        author: ""
    });




    //useEffect: React의 생명주기 훅으로, 컴포넌트가 처음 렌더링될때 한번 실행(마운트 - 언마운트)
    useEffect(() => {
        console.log("@# Detail useEffect호출 ")
        //    기본적인 get 요청 


        /*
        // 비동기함수
        // ,{method:"GET"} 이건(GET방식) 생략가능
        fetch("http://localhost:8383/book/" + id)
            .then((res) => res.json()) //응답res 결과를 json형태로 반환하는것.
            .then((res) => {//json 변환된 데이터 처리
                console.log(42, res);

                // 가져온 데이터를 book 상태에 저장(화면 다시 렌더링)
                setBook(res)

            })
            ;
            */



        Axios.get("http://localhost:8383/book/" + id)
            .then(response => {
                // 성공적인 응답처리
                console.log(11, response.data);
                setBook(response.data);
            })
            .catch(error => {
                // 오류처리
                console.error("Request failed:", error);
            })


        //    []이거 안넣어주면 무한반복
    }, []);

    const updateBook = () => {
        console.log(43, id)
        navigate("/UpdateForm/" + id)
    }

    const deleteBook = () => {
        console.log(44, id)

        Axios.delete("http://localhost:8383/book/" + id)
            .then(response => {
                // 성공적인 응답처리
                console.log(11, response.data);

                if (response != null) {
                    alert("책 삭제에 성공했습니다")
                    navigate("/" + id)
                    // 삭제성공시 홈 이동 "/"
                } else {
                    alert("책 삭제에 실패했습니다")
                    
                }
                
                
            })
            .catch(error => {
                // 오류처리
                console.error("Request failed:", error);
                alert("예외 처리가 발생했습니다")
            })
    }



    return (
        <div>
            <h1>책 상세보기</h1>
            <Button variant="info" onClick={updateBook} >수정</Button>
            {' '}
            {/* {' '}이거 공백 */}
            <Button variant="danger" onClick={deleteBook} >삭제</Button>

            <hr />
            <h3>
                {books.title}
            </h3>
            <h3>
                {books.author}
            </h3>

        </div>



    )
}

export default Detail