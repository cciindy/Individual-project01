import styled, { css } from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductSwiper from './ProductSwiper';
import { customMedia } from '../styles/GlobalStyle';

function ImageMap() {
  const [data, setData] = useState([]);
  const products = data?.productList;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        'https://cdn.ggumim.co.kr/test/image_product_link.json'
      ).then(res => res.json());
      setData(res);
    };
    getData();
  }, []);

  const [showToolTip, setShowToolTip] = useState([false]);

  const handleToolTip = idx => {
    const newArr = Array(products.length).fill(false);
    if (!showToolTip[idx]) {
      newArr[idx] = true;
    }
    setShowToolTip(newArr);
  };

  return (
    <Container>
      <Image src={data.imageUrl} />
      {products?.map((el, idx) => {
        return (
          <>
            <Tag
              onClick={() => handleToolTip(idx)}
              key={idx}
              pointX={el.pointX}
              pointY={el.pointY}
            >
              {!showToolTip[idx] ? (
                <TagIcon type="button">
                  <img
                    src="https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
                    alt="tagIcon"
                  />
                </TagIcon>
              ) : (
                <CloseIcon type="button">
                  <img
                    src="https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
                    alt="closeIcon"
                  />
                  <ToolTipBox pointX={el.pointY}>
                    <img src={el.imageUrl} alt="productImg" />
                    <Desc>
                      <ProductName>{el.productName}</ProductName>
                      {el.discountRate > 0 ? (
                        <>
                          <ProductPrice>
                            <DiscountRate>{el.discountRate}%</DiscountRate>
                            {el.priceDiscount
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </ProductPrice>
                        </>
                      ) : (
                        <>
                          <ProductPrice>
                            {el.outside && <Outside>예상가</Outside>}
                            {el.priceOriginal
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </ProductPrice>
                        </>
                      )}
                    </Desc>
                    <MoveIconWrapper>
                      <img
                        src="https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
                        alt="상품보기"
                      />
                    </MoveIconWrapper>
                  </ToolTipBox>
                </CloseIcon>
              )}
            </Tag>
          </>
        );
      })}
      <ProductSwiper
        products={products}
        handleToolTip={handleToolTip}
        showToolTip={showToolTip}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 800px;
  padding: 40px 0;
  margin: 0 auto;
  ${customMedia.lessThan('mobile')`
		width: 100%;
	`}
`;
const Image = styled.img`
  position: relative;
  width: 800px;
`;
const Tag = styled.div`
  position: absolute;
  left: -20px;
  width: 40px;
  height: 40px;
  top: ${props => props.pointX * 1.6}px;
  left: ${props => props.pointY * 1.6}px;
  ${customMedia.lessThan('mobile')`
    top: ${props => props.pointX * 1.2}px;
    left: ${props => props.pointY * 1.2}px;
	`}
`;
const TagIcon = styled.button``;
const CloseIcon = styled.button``;

const ToolTipBox = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 28px;
  left: -20px;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  -webkit-box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #4a4a4a;
  cursor: pointer;
  z-index: 10;
  img {
    border-radius: 4px;
    margin-right: 8px;
  }
  ::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-align: left;
  padding-bottom: 2px;
`;

const DiscountRate = styled.span`
  color: ${({ theme }) => theme.pointColor};
  margin-right: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const ProductName = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: initial;
  line-height: 1.3em;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-size: 17px;
  font-weight: bold;
`;

const Outside = styled.span`
  color: #898f94;
  font-size: 12px;
  margin-right: 5px;
  font-weight: bold;
  text-align: left;
`;

const MoveIconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export default ImageMap;
