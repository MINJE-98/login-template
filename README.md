# 소개

세션을 이용하여 NextJS에서 로그인을 구현합니다.

SSR과 CSR을 하나의 페이지에서 구현하고 어떻게 사용자에게 보여지는지 알아봅니다.

구현경험을 통해 필요한 구현 방법을 상황에 맞게 적용할 수 있는 역량을 키우는 것이 목표입니다.

## 데모

https://login-template-one.vercel.app/

# 프로젝트 시작 방법

## 프로젝트 클론

```
git clone https://github.com/MINJE-98/login-template
```

## 의존성 설치

```
  cd login-template
  yarn install
```

## mongoDB 설정 및 클러스터 생성

https://www.youtube.com/watch?v=rPqRyYJmx2g

> 클러스터의 collection은 따로 추가하지 않아도 됩니다.

## 환경 변수 작성

```
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
KAKAO_CLIENT_ID=
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=

MONGODB_URI=
```

## 프로젝트 시작

```
yarn dev
```

## 프로젝트 빌드

배포 서버 URL 환경변수 추가

```
NEXT_PUBLIC_SERVER_URL= https://login-template-one.vercel.app/
```

```
yarn build
```

# 기술 스택

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
| axios         | **^0.27.2** |
| next-session  | **^4.0.5**  |
| passport      | **0.5.0**   |
| react-query   | **3.39.2**  |

# 구현 범위

## /index

로그인된 사용자를 표시합니다.
DataFetching 메서드를 통해 미리 HTML파일을 렌더링(SSR), 클라이언트측에서 렌더링(CSR)을 하나의 페이지에 구현하였습니다.

## /signin

로그인페이지

## /signup

회원가입 페이지

# 폴더 구조

```
.
├── environment
├── lib
│   ├── db
│   ├──  middleware
│   ├── passport
│   └──session
├── src
│   ├── components
│   ├── hooks
│   └── pages
└── ...
```

# 빌드 도구

## 번들러

WebPack(default)

<!-- 만약 추가 설정이나, 다른 번들러를 사용했다면 추가적으로 작성하자. -->

## 트렌스파일러

SWC(default)

<!-- 만약 추가 설정이나, 다른 트랜스파일러를 사용했다면 추가적으로 작성하자. -->

# 코드 컨벤션

<!-- github, 패키지 관리, 컴포넌트 관리, 네이밍 컨벤션, Typescript 작성해야합니다! -->

## eslint

Airbnb룰 준수

### rules

<!-- 추가된 룰이 있다면 반드시 작성 -->

### import

- order

  next, react 모듈 -> 외부 모듈 -> 내부 모듈 -> 타입

- prefer-default-export

  단일 메서드 export off

## 로그인 플로우

### Backend

![backend](https://login-template-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Floginflow1.0893af26.png&w=1200&q=75)

### Frontend

![frontend](https://login-template-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Floginflow2.661351cf.png&w=1080&q=75)

# 키울 수 있었는 역량

## 요구사항별로 구현이 달라질 수 있다.
요구사항에 맞게 유저 정보를 사전렌더링할지를 결정하는 것이 바람직하다.

Server Side DataFetching를 통해 SEO만 적용하는경우가 존재하고

미리 로그인된 유저 정보를 통해 사전렌더링을 적용해야하는 경우도 존재한다.


# 참고

https://hygraph.com/blog/nextjs-authentication

https://github.com/hoangvvo/nextjs-mongodb-app/blob/v2/pages/api/auth.js

https://github.com/vercel/next.js/tree/canary/examples/with-passport-and-next-connect
