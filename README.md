# 개요

NextJS에서 Session을 이용하여 로그인을 구현합니다.

# 설명

DataBase MongoDB, NextJS를 사용하여 서버, 클라이언트를 구현하였습니다.

인증 모듈은 PassportJS를 사용하며, Next-Session(Peer | Express-Session)을 사용하여 세션을 생성하여 쿠키에 저장합니다. (로컬, 카카오, 깃허브, 페이스북 인증으로 구성되어있습니다.)

클라이언트측에서 DataFetching 메서드를 통해 미리 HTML파일을 렌더링(SSR)하는 방법과 클라이언트측에서 렌더링(CSR)하는 방법을 하나의 페이지에 구현하였습니다.

컴포넌트는 [컴포넌트 분리 기준 정하기](https://tilog.io/MINJE-98/72)를 준수하여 컴포넌트를 구성하였으며, CreateNextJS에서 제공하는 CssModules을 사용하여 스타일하였습니다.

## 기본 라이브러리

| 이름          | 버전        |
| ------------- | ----------- |
| node          | **16.17.0** |
| typescript    | **4.8.2**   |
| next          | **12.2.5**  |
| react         | **18.2.0**  |
| react-dom     | **18.2.0**  |
| next-connect  | **^0.13.0** |
| mongodb       | **4.9.0**   |
| connect-mongo | **^4.6.0**  |

## 코드 포멧터

코드 포멧터를 이용하여 모든 코드에서 동일한 코드 포멧 및 컨벤션을 유지합니다.

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

| 이름              | 버전        |
| ----------------- | ----------- |
| next-session      | **^4.0.5**  |
| express-session   | **^1.17.3** |
| cookie            | **^0.5.0**  |
| passport          | **0.5.0**   |
| passport-local    | **1.0.0**   |
| passport-facebook | **^3.0.0**  |
| passport-github   | **^1.1.0**  |
| passport-kakao    | **^1.0.1**  |

## 서버 상태 피처

| 이름        | 버전        |
| ----------- | ----------- |
| react-query | **3.39.2**  |
| axios       | **^0.27.2** |

## 로그인 플로우

### 로그인 플로우

![로그인 플로우](https://login-template-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Floginflow1.0893af26.png&w=1200&q=75)

![로그인 플로우](https://login-template-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Floginflow2.661351cf.png&w=1080&q=75)

# 참고

https://hygraph.com/blog/nextjs-authentication

https://github.com/hoangvvo/nextjs-mongodb-app/blob/v2/pages/api/auth.js

https://github.com/vercel/next.js/tree/canary/examples/with-passport-and-next-connect
