# 사진과 가구 조합 컴포넌트 구현
<br>

### 🖼 집꾸미기 집소개 기능에 포함되어 있는 사진과 가구 정보를 조합하는 컴포넌트 구현하기
> 개발 기간 2022-08-01 ~ 2022-08-04
>> 참고: https://www.ggumim.co.kr/star/view/4582

<br>


## 💡 구현 기능

<img width="463" alt="스크린샷 2022-08-05 오후 5 37 23" src="https://user-images.githubusercontent.com/104499132/183037953-0087b515-a56d-4f14-b380-275302452533.png">




- 사진과 가구에 대한 정보를 API 통해서 호출
- 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
- 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
- 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
- tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출
- 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
- 선택된 가구는 선택되었으면 표시
- 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시
 <img width="663" alt="스크린샷 2022-08-05 오후 5 22 08" src="https://user-images.githubusercontent.com/104499132/183035039-199070f9-5130-4aeb-b6de-e5844a8d8f16.png">

- 가구 정보는 2가지 형식이 존재
    - 입점되어 있는 가구 (product 정보에 outside가 false 이 가구)
     <img width="213" alt="스크린샷 2022-08-05 오후 5 18 32" src="https://user-images.githubusercontent.com/104499132/183034359-2d422bd1-795c-4e96-bf57-05815c2d91fa.png">


        - 상품 이미지 (product 정보 imageUrl)
        - 상품명 (product 정보 name)
        - 할인율 (product 정보 discount)
        - 가격 (product 정보 priceDiscount)
        
    - 입점되지 않는 가구
    <img width="219" alt="스크린샷 2022-08-05 오후 5 20 08" src="https://user-images.githubusercontent.com/104499132/183034635-764dbbe3-2596-4fbe-93c1-4d17cb637fad.png">
        
        - 상품이미지 (product 정보 imageUrl)
        - 상품명 (product 정보 name)
        - 예상 가격 (product 정보 priceDiscount)

<br>

## 💻 Technlogies

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> 

<br>
