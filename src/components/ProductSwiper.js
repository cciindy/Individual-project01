import styled from 'styled-components';
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

function ProductSwiper({ products, handleToolTip, showToolTip }) {
  return (
    <StyleSwiper
      spaceBetween={0}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      loop={false}
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      {products?.map((el, idx) => (
        <SwiperSlide key={idx}>
          <ProductList>
            <div
              value={idx}
              onClick={() => handleToolTip(idx)}
              className={showToolTip[idx] ? 'active' : ''}
            >
              <img src={el.imageUrl} alt="productSwiperImg" />
              {el.discountRate > 0 && <span>{el.discountRate}%</span>}
            </div>
          </ProductList>
        </SwiperSlide>
      ))}
    </StyleSwiper>
  );
}

export default ProductSwiper;

const StyleSwiper = styled(Swiper)`
  position: relative;
  width: 800px;
`;
const ProductList = styled.div`
  position: relative;
  cursor: pointer;
  width: 800px;

  div {
    position: relative;
    margin: 28px 15px;
    width: fit-content;
    height: fit-content;
    border: 0.5px solid white;
  }
  .active {
    background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
    padding: 3px 3px 0;
    border-radius: 18px;
  }

  img {
    position: relative;
    width: 106px;
    height: 106px;
    border: 0.5px solid #aaafb9;
    border-radius: 16px;
  }
  span {
    position: absolute;
    top: 0;
    right: 8px;
    width: 24px;
    height: 28px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
    background-size: contain;
    font-size: 11px;
    font-weight: bold;
    line-height: 25px;
    color: white;
    text-align: center;
  }
`;
