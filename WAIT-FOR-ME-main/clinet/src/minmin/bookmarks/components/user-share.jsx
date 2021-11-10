import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

// 引用用戶頭像照片
import Woman from './icon/woman.png';
import Male from './icon/male.png';
import Female from './icon/female.png';

// 連接資料
import Axios from 'axios';
// 星星
import { FaStar } from 'react-icons/fa';


const starDesign = {
    marign: "20px",

}









function Share() {

    const [movieReviewList, setMovieList] = useState([]);
    const stars = Array(5).fill();





    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setMovieList(response.data);
            console.log(response.data)
        });
    }, []);

    return (
        <div>
            &nbsp;



            <Container className=" d-flex flex-column "  >

                <Row className="border border-info p-2 " >
                    <Col className="border border-info p-1 bg-warning  " xs={3} xl={1}  >

                        <img src={Male} className='userphoto' />

                    </Col>
                    <Col xs={9} xl={11} >


                        <div className="text-dark text-align"   >
                            超級好吃~下次要帶家人來吃超級好吃~
                        </div>
                    </Col>

                </Row>


                <Row className="border border-info p-2 " >
                    <Col className="border border-info p-1 bg-warning  " xs={3} xl={1}  >

                        <img src={Woman} className='userphoto' />

                    </Col>
                    <Col xs={9} xl={11} >
                        <div className="text-dark text-align"   >
                            還不錯的咖啡廳，推薦黑糖卡布奇諾，早午餐份量十足，味道也很好，千層馬鈴薯值得一試，店裡貌似還可以看電影，如果是時間有餘裕，可以再來，因為出餐時間略久，著急的人不適合。
                        </div>
                    </Col>

                </Row>

                <Row className="border border-info p-2 " >
                    <Col className="border border-info p-1 bg-warning  " xs={3} xl={1}  >

                        <img src={Male} className='userphoto' />

                    </Col>
                    <Col xs={9} xl={11} >
                        <div className="text-dark text-align"   >
                            甜點可選自製可麗露、美翻天菊花豆腐等，可喫茶、食材跟甜點都很有質感的台北餐廳推薦
                        </div>
                    </Col>

                </Row>


                <Row className="border border-info p-2 " >
                    <Col className="border border-info p-1 bg-warning  " xs={3} xl={1}  >

                        <img src={Female} className='userphoto' />

                    </Col>
                    <Col xs={9} xl={11} >
                        <div className="text-dark text-align"   >

                            非常驚艷，餐點特別，裝潢時尚，特別推薦海鮮跟甜點鍋餅，紅酒🍷櫻桃鴨非常特別，滿滿的酒香
                        </div>
                    </Col>

                </Row>

                <Row className="border border-info p-2 " >
                    <Col className="border border-info p-1 bg-warning  " xs={3} xl={1}  >

                        <img src={Male} className='userphoto' />

                    </Col>
                    <Col xs={9} xl={11} >
                        {movieReviewList.map((val) => {
                            return <div className="text-dark text-align"   >
                                {val.movieReview}
                            </div>;
                        })}


                        <br />
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    style={starDesign}
                                    color={"#FFDC35"}
                                    size={30}
                                    key={index}
                                />
                            )
                        }

                        )}

                     




                    </Col>

                </Row>





            </Container>


            {/* {movieReviewList.map((val) => {
                return <h1>movieName:{val.movieName}|movieReview:{val.movieReview}</h1>;
            })} */}



















        </div>

    )
}

export default Share;
