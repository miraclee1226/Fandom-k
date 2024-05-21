# Fandom-k

## 소개 및 개요

  - 프로젝트 기간: 2024.04.30 ~ 2024.05.17
  - 배포 URL: [🔗 Fandom-K](https://fandom-k.netlify.app/)

### [프로젝트 설명]
  - 'Fandom-K'는 **아이돌 조공 플랫폼**입니다.
  - 크레딧을 충전하여 아이돌에게 후원과 인기 투표를 할 수 있습니다.
  - 모금된 크레딧과 아이돌 인기 순위를 실시간으로 확인 할 수 있습니다.
  - 관심있는 아이돌을 마이페이지에서 팔로잉 할 수 있습니다.

<details>
<summary>목차</summary>
<div>

1. [팀 소개](#teamintro)
2. [기술 및 개발 환경](#stack)
3. [개발 기간 및 작업 문화](#task)
4. [주요 기능](#mainfeat)
5. [프로젝트 구조](#structure)
6. [역할분담](#role)
7. [UI](#ui)
8. [페이지 기능](#pageinfo)
9. [핵심 기능](#issue)
10. [느낀점](#impression)
</div>
</details>

## <span id="teamintro">1. 팀 소개</span>

|                                                                   **👑 소혜린**                                                                   |                                                                  **📜 은동혁**                                                                   |                                                                    **💻 천권희**                                                                     |                                                              **🎨 이율**                                                              |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
|                               <img src="https://github.com/miraclee1226/Fandom-k/assets/96684473/f894545e-c24d-4143-96c2-dff866dfd38e" height=180 width=180>                               |     <img src="https://github.com/miraclee1226/Fandom-k/assets/96684473/5e912514-8a79-4d3f-b577-eabd703b18bd" height=180 width=180>      |       <img src="https://github.com/miraclee1226/Fandom-k/assets/96684473/00bc8f70-b9f6-4873-9cf9-2b51b031e315" height=180 width=180>        | <img src="https://github.com/miraclee1226/Fandom-k/assets/96684473/eb53a275-0937-4817-8c77-b568760ddf45" height=180 width=180> |
|                 **blog**: [Rynn](https://codingtoddlerr.tistory.com/) </br> **github**: [miraclee1226](https://github.com/miraclee1226)                 |      **blog**: [Eun_Frontend](https://edongdong.tistory.com/) </br> **github**: [edhcoding](https://github.com/edhcoding)       |                  **blog**: [alexgoni](https://problem-solver-blog.web.app/) </br> **github**: [alexgoni](https://github.com/alexgoni?tab=overview&from=2024-04-01&to=2024-04-30)                  |       **github**: [yulrang](https://github.com/yulrang)        |

## <span id="stack">2. 기술 및 개발 환경</span>
### [사용 기술]
<img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/sass-CC6699?style=flat-square&logo=sass&logoColor=black">

### [개발 환경]
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"/>
- [GitHub Projects](https://github.com/users/miraclee1226/projects/5): 진행 상황을 공유하고자  GitHub Issues에서 각자 맡은 업무를 이슈 템플릿에 체크리스트 형식으로 공유했습니다.
- [Figma](https://www.figma.com/design/lccVqOCzq7XCUYztyC7KlQ/[AAA]Fandom-K?t=Ru1KypPK1WrrfGHP-0): 디자인 시안을 참고했습니다.
- Discord: 원활한 의사소통을 위해 디스코드에서 영상 및 음성통화를 적극 활용했습니다.

### [git 흐름 전략]
기능 별로 담당하여 프로젝트를 진행하고자 Git Flow 방식을 사용했습니다. 기능 별 브랜치를 만들고 각자 작업 브랜치를 따로 생성하여 develop 브랜치로 PR 및 Merge를 진행합니다.

![gitflow](https://github.com/miraclee1226/Fandom-k/assets/96684473/cf65452c-328c-4bad-9036-faa03e21075b)

### [커밋 컨벤션]
```
- Feat : 새로운 기능을 추가하는 경우
- Fix : 버그를 고친경우
- Docs : 문서를 수정한 경우
- Style : 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우
- Refactor : 코드 리펙토링
- Test : 테스트 코드. 리펙토링 테스트 코드를 추가했을 때
- Chore : 빌드 업무 수정, 패키지 매니저 수정
- Design : CSS 등 사용자가 UI 디자인을 변경했을 때
- Rename : 파일명(or 폴더명) 을 수정한 경우
- Remove : 코드(파일)을 삭제한 경우
```
### [코드 컨벤션]
통일성 있는 코드 작성을 위해 다양한 코드 컨벤션을 정해 사용했습니다.

- <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/> 

```
{
  "printWidth": 80,
  "singleQuote": false,
  "jsxSingleQuote": false,
  "tabWidth": 2,
  "semi": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "crlf"
}
```

- <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/>

```
{
  "extends": ["react-app", "react-app/jest", "naver", "prettier"],
  "rules": {
    "no-console": 1,
    "react-hooks/exhaustive-deps": 0,
    "no-unused-expression": 0,
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "arrow-body-style": "off"
  }
}
```
### [배포 서비스]
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=white"/>

## <span id='task'>3. 개발 기간 및 작업 문화 </span>
### [프로젝트 기간] : 2024.04.30 ~ 2024.05.17

### [작업 문화]
#### ✅ GitHub Project
각자 맡은 업무를 이슈 템플릿에 체크리스트 형식으로 공유했습니다. 
![GitHub Project](https://github.com/miraclee1226/Fandom-k/assets/96684473/9cee8716-e203-457a-839c-c04ba9a17227)

#### ✅ Discord
Discord 스레드에 데일리 스크럼 내용을 정리해 업로드 했습니다.
![Discord](https://github.com/miraclee1226/Fandom-k/assets/96684473/7436c27c-7426-450f-b230-f43cec7c1045)

#### ✅ VSCode Live Share
- 페어 프로그래밍을 진행하거나 전체 상의가 필요한 작업을 할 때, VSCode의 Live Share 확장 기능을 적극 활용했습니다.

## <span id='mainfeat'>4. 주요 기능</span>
### 💰 크레딧 충전하기
- localStorage
### 🎁 후원하기
- 후원 시 크레딧 차감
### 📊 투표하기
- 투표 시 크레딧 차감
### 🙋 프로필
- 관심있는 아이돌 추가
- 무한 스크롤

## <span id='structure'>5. 프로젝트 구조</span>

### [폴더 구조]
- api/ : 외부 API 통신
- assets/ : 이미지, 아이콘
- components/ : 공통 컴포넌트
- pages/ : 생성한 컴포넌트들을 조합해 개별 기능 구현
- context/ : 전역 상태 관리
- styles/ : 공통 스타일, reset.scss
- utils/ : util 함수

```
📦src
 ┣ 📂api
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂Button
 ┃ ┣ 📂Card
 ┃ ┣ 📂ChartItem
 ┃ ┣ 📂Image
 ┃ ┣ 📂Layout
 ┃ ┣ 📂Modal
 ┃ ┣ 📂Navbar
 ┃ ┣ 📂Skeleton
 ┃ ┣ 📂Tab
 ┃ ┣ 📂TouchArea
 ┃ ┗ 📂WebpLoader
 ┣ 📂context
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📂Landing
 ┃ ┣ 📂List
 ┃ ┗ 📂MyPage
 ┣ 📂styles
 ┣ 📂utils
 ┣ 📜App.jsx
 ┗ 📜index.js
```
## <span id="role">6. 역할 분담</span>

![역할 분담](https://github.com/miraclee1226/Fandom-k/assets/96684473/0353dd58-da83-4484-9f89-3fddde3bd1e7)

## <span id="ui">7. UI</span>
![UI png](https://github.com/miraclee1226/Fandom-k/assets/96684473/e0840845-ec09-4a42-a4a6-9d5aeee3896c)

## <span id="pageinfo">8. 페이지 기능</span>
### 1. 랜딩 페이지
<img src="https://github.com/miraclee1226/Fandom-k/assets/96684473/22c218a8-7869-4c6b-b5f1-0310c249217d">
<details>
<summary>상세기능</summary>
<div>

- '로고 버튼'을 클릭하면 `/`페이지로 이동합니다.
- '지금 시작하기' 버튼을 클릭 시 localStorage를 초기화하고  `/list` 페이지로 이동합니다.
</div>
</details>

### 2. 목록페이지
<img src="https://github.com/miraclee1226/Fandom-k/assets/96684473/071ad064-bbb2-40e8-b324-8fae811d22d1">
<img src="https://github.com/miraclee1226/Fandom-k/assets/96684473/af59e1a4-fc7d-4477-8b23-88c442fb16d1">

#### 목록 페이지의 후원을 기다리는 조공
<details>
<summary>상세기능</summary>
<div>
  
  - '로고' 버튼을 클릭하면 `/list` 페이지로 이동합니다. ( 현재는 새로 고침 )
  - 내 크레딧은 localstorage로 관리합니다.
  - '충전하기' 버튼을 클릭 시 충전하기 모달창이 나타납니다.
  - 상단의 프로필 이미지를 클릭시 `/mypage` 로 이동합니다.
  - 프로필 이미지는 자유롭게 선택해주세요.
  - PC에서 후원을 기다리는 조공 리스트는 좌/우측 버튼 클릭 시 다음 순서의 조공 카드들이 보입니다.
  - PC에서 후원을 기다리는 조공 리스트 첫 순서일 때는 좌측 버튼이 보이지 않고, 마지막 순서일 때는 우측 버튼이 보이지 않습니다.
  - Tablet에서 후원을 기다리는 조공 리스트 목록 영역이 화면의 너비를 넘어갈 경우 터치로 좌우 스크롤 가능합니다.
  - Mobile에서 후원을 기다리는 조공 리스트 목록 영역이 화면의 너비를 넘어갈 경우 터치로 좌우 스크롤 가능합니다.
  - 후원을 기다리는 조공에서 원하는 아이돌 카드의 '후원하기' 버튼을 누르면 해당 아이돌을 후원할 수 있는 모달창이 나타납니다.
</div>
</details>


#### 크레딧 충전 모달창
<details>
<summary>상세기능</summary>
<div>
  
  - 충전할 금액을 선택후 ”충전하기” 버튼을 누르면 localstorage로 관리되는 내 크레딧이 충전됩니다.
</div>
</details>

#### 후원하기 모달창
<details>
<summary>상세기능</summary>
<div>

- 내 크레딧 보다 부족한 크레딧을 입력을 했을때  “후원하기" 버튼이 활성화 됩니다.
- 활성화 된 “후원하기” 버튼을 클릭하면 후원이 완료됩니다.
- 후원한 만큼 localstorage에서 관리되는 크레딧이 줄어듭니다.
</div>
</details>

#### 목록 페이지의 이달의 차트(/list)
<details>
<summary>상세기능</summary>
<div>

- 내 크레딧은 localstorage로 관리합니다.
- 이달의 여자 아이돌 탭을 클릭하면 투표가 많은 순으로 여자 아이돌을 보여줍니다.
- 이달의 남자 아이돌 탭을 클릭하면 투표가 많은 순으로 남자 아이돌을 보여줍니다.
- '차트 투표하기' 버튼을 클릭 시 투표하기 모달창이 나타납니다. 
</div>
</details>

#### 투표 모달창
<details>
<summary>상세기능</summary>
<div>

- 투표하는 데 1000 크레딧이 소모됩니다.
- 원하는 아이돌에게 무한으로 투표할 수 있습니다.
- 투표한 만큼 localstorage에서 관리되는 크레딧이 줄어듭니다.
</div>
</details>

### 3. 마이페이지
<img src="https://github.com/miraclee1226/Fandom-k/assets/96684473/6d364e9f-e833-4e5d-9c5c-4f28b0b7ae0c">
<details>
<summary>상세기능</summary>
<div>
  
- 관심 있는 아이돌로 추가하고 싶은 카드를 중복으로 선택을 할 수 있습니다.
- 선택된 카드는 체크표시가 됩니다.
- '추가하기' 버튼을 누르면 선택된 카드들이 내가 관심있는 아이돌에 추가가 됩니다.
</div>
</details>

## <span id="issue">9. 핵심 기능</span>
### [Axios 모듈화]
axios로 서버와 통신하는 모든 부분에서 서버 주소와 코드가 반복되어 이를 줄이기 위해 custom axios를 사용하였습니다.

```
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const dispatcher = async (options) => {
  const client = axiosInstance({ ...options });

  await client;
  return client;
};

export default dispatcher;
```

### [비동기 요청 관리]
비동기 요청을 관리하는 커스텀 훅을 사용하여 로딩 상태, 에러 상태 등을 쉽게 처리할 수 있도록 했습니다.

```
import { useState, useEffect } from "react";
import dispatcher from "api/dispatcher";

// @ts-check

/**
 * RequestConfig
 * @typedef {Object} RequestConfig
 * @property {AxiosRequestConfig} options - axios instance에 전달할 options
 * @property {boolean} skip - true: 마운트될 때 data fetching 금지
 * @property {any[]} deps - useEffect 의존성 배열
 */

/**
 * @param {RequestConfig} params
 * @returns {Object} Object - { data, isLoading, error, requestFunc  }
 */

export default function useRequest({ options, skip = false, deps = [] }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestFunc = async (...args) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await dispatcher({ ...options, ...args });

      setData(() => response);
      return response;
    } catch (err) {
      setError(() => err);
      return err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (skip) return;
    requestFunc();
  }, deps);

  return { data, isLoading, error, requestFunc };
}
```

### [합성 컴포넌트 패턴]
확장성 있고 읽기 쉬운 코드를 작성하기 위해 합성 컴포넌트 패턴을 사용하였습니다.

```
const Button = Object.assign(DefaultButton, {
  Border: BorderButton,
  Arrow: ArrowButton,
  Round: RoundButton,
  Radio: RadioButton,
  Text: TextButton,
  Link: LinkButton,
});

export default Button;
```
```
import Button from 'components/Button';

export default function ExampleComponent() {
  return (
    <>
      <Button.Arrow />
      <Button.Round />
    </>
  )
}
```

### [전역 상태 관리]
Jotai를 사용하여 atom단에서 localStorage를 관리하여 코드 중복을 해결했습니다.

```
import { atom } from "jotai";

const storedCreditAtom = atom(localStorage.getItem("Credit") || 0);

const creditAtomWithPersistence = atom(
  (get) => get(storedCreditAtom),
  (get, set, newCredit) => {
    set(storedCreditAtom, newCredit);
    localStorage.setItem("Credit", newCredit);
  },
);

export default creditAtomWithPersistence;
```
### [이미지 최적화]
페이지 내에 사용되는 모든 이미지를 Webp 확장자로 변환했습니다. 

또한 Intersection Observer API를 사용해 Lazy Loading 기법을 적용하여 목록 페이지와 마이페이지의 이미지가 viewport 내에 들어오는 순간 로딩되도록 변경했습니다.

```
import { useEffect, useRef, useState } from "react";

export default function useLazyImageObserver({ src }) {
  const [imgSrc, setImgSrc] = useState("");
  const imgRef = useRef(null);

  useEffect(() => {
    let observer;

    if (imgRef && !imgSrc) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImgSrc(src);
              if (imgRef.current) observer.unobserve(imgRef.current);
            }
          });
        },
        { threshold: 0.25 },
      );
      observer.observe(imgRef.current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [imgRef, imgSrc, src]);

  return { imgSrc, imgRef };
}
```

### [Skeleton UI]
네트워크가 속도가 느린 환경에서 접속했을 경우, 로딩 중에 컨텐츠 윤곽을 나타내는 UI를 구현했습니다.
<img src="https://github.com/miraclee1226/Fandom-k/assets/96684473/3ced6ac8-9537-4756-8ea1-f08cd04a0517">

## <span id="impression">10. 느낀 점</span>
### 혜린
- 이번 협업으로 개발 능력도 중요하지만 협업 능력도 중요하다는 것을 느꼈습니다. 또 정말 좋은 팀원분들을 만나서 큰 성장을 할 수 있어서 팀원들에게 감사합니다:)
### 동혁
- 처음으로 팀 프로젝트를 진행하면서  좋은 팀원들을 만나 값진 경험과 좋은 추억을 얻게 되었습니다. 다양한 기술들을 보면서 부족한 부분을 파악하기 쉬웠고 이를 통해 스스로 문제점을 찾고 해결하는 능력이 향상되었습니다.🥰
### 권희
- 팀 협업 개발이 처음이였는데 좋은 팀원들과 할 수 있어서 운이 좋았던 것 같습니다. 투명하게 소통하는 것이 정말 중요하다는 것과 협업에서의 git 관리를 배웠고, 또 프로젝트 진행하면서 서로 성장을 많이 할 수 있었던 시간이였다고 생각합니다. 🙂
### 율
- 협업을 통해 제 부족한 점을 느낄 수 있었고, 또 발전할 수 있는 기회가 되었습니다. 새로운 것에 주저하지말고 도전해야겠습니다 😊
