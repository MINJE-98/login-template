# 개요

NextJS에서 "SSR, CSR를 사용하여 어떻게 사용자에게 좀 더 좋은 사용경험을 줄 수 있을까?" 라는 고민을 각 페이지 별로 적용해보고 상황에 맞게 로그인을 구현할 수 있도록 경험을 키우기 위한 레포지토리입니다.

# 설명

로그인 API EndPoint는 모두 NextJS의 Express를 사용합니다.

## PassPost

PassPort의 대부분의 로직은 [예제 코드](https://github.com/vercel/next.js/tree/canary/examples/with-passport)를 참고하여 구현하였습니다.

## 기본 라이브러리

| 이름         | 버전        |
| ------------ | ----------- |
| node         | **16.17.0** |
| typescript   | **4.8.2**   |
| next         | **12.2.5**  |
| react        | **18.2.0**  |
| react-dom    | **18.2.0**  |
| next-connect | **^0.13.0** |

## 코드 포멧터

| 이름                             | 버전        |
| -------------------------------- | ----------- |
| eslint-config-next               | **^12.2.5** |
| eslint                           | **8.23.0**  |
| @typescript-eslint/eslint-plugin | **^5.36.1** |
| @typescript-eslint/parser        | **^5.36.1** |
| prettier                         | **^2.7.1**  |
| eslint-plugin-react              | **^7.31.1** |
| eslint-plugin-prettier           | **^4.2.1**  |
| eslint-plugin-import             | **^2.26.0** |
| eslint-config-prettier           | **^8.5.0**  |
| eslint-config-airbnb             | **^19.0.4** |
| eslint-config-airbnb-typescript  | **^17.0.0** |

## 인증

| 이름            | 버전        |
| --------------- | ----------- |
| next-session    | **^4.0.5**  |
| express-session | **^1.17.3** |
| cookie          | **^0.5.0**  |
| passport        | **0.5.0**   |
| passport-local  | **1.0.0**   |
| mongodb         | **4.9.0**   |
| connect-mongo   | **^4.6.0**  |

## 서버 상태

| 이름        | 버전        |
| ----------- | ----------- |
| axios       | **^0.27.2** |
| react-query | **3.39.2**  |

## 암호

| 이름       | 버전       |
| ---------- | ---------- |
| @hapi/iron | **^7.0.0** |

# 구현

## ServerSide

로딩을 제거하고 pre-render를 통해 인증된 페이지와 인증되지 않은 페이지를 바로 사용자에게 서빙하는 방법을 적용해보자.

### 로그인 플로우

![Client-side Authentication](https://media.graphcms.com/Hu6FlVFSSpanSFdinFvF)

## ClientSide

로딩을 통해 사용자의 인증 상태를 확인하고, 확인된 사용자의 정보에 따라 페이지를 서빙하는 방법을 적용해보자.

### 로그인 플로우

![Server-side Authentication](https://media.graphcms.com/gSzIoRgtQ1y2x5CCRatb)

# 결론
