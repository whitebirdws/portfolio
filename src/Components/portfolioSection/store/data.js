import image01 from "../../../img/image1.png";

import image02 from "../../../img/image2.png";
import image03 from "../../../img/image3.png";
import image04 from "../../../img/image4.png";

const momentdesc = () => {
  let res = (
    <li>
      # Moment-w는 웹사이트로 진행되어진 토이프로젝트 입니다.
      <br />
      <br />
      # 일기형식(메모)과 스케쥴 관리가 특징인 프로젝트입니다.
      <br />
      <br />
      # 웹사이트의 구성은 크게 Login, signUp 메뉴와 일기형식의 긴 글을 작성할수
      있는 write_your_story ,
      <br />
      <br />
      # 작성된 글을 관리 하는 read_your_story 메뉴, 그리고 스케쥴 데이터를
      관리하는 your_season 메뉴로 구성되어져 있습니다.
      <br />
      <br />
      # 상태관리는 Redux(ReduxToolkit)을 이용하여 절차의 복잡성을 낮추고 코드의
      가독성을 높이고자 하였습니다.
      <br />
      <br />
    </li>
  );
  return res;
};

const momentdesc2 = () => {
  let res = (
    <li>
      # 경기도 버스노선 조회 프로젝트는 공공데이터 api를 활용하여 제작되어진
      토이프로젝트입니다.
      <br />
      <br />
      # 프론트엔드를 담당하는 부분에서는 React를 사용하였으며 , 상태관리는
      ContextApi를 이용하였습니다.
      <br />
      <br />
      # 공공 API를 활용하기 위하여 백엔드를 담당하는 부분에서는 nodejs의
      express를 이용하여 웹서버를 구성하고 미들웨어로 구분하여 다수의 API로
      제작하게 되었습니다.
      <br />
      <br />
      # 공공데이터의 파일형식이 xml로 제공되어서 xml파일을 변환할수 있는
      라이브러리를 활용하여 데이터를 변환하였으며 변환된 데이터를 요청의
      조건에따라 응답해주는 방식으로 구성하였습니다.
      <br />
      <br />
    </li>
  );
  return res;
};
const momentdesc3 = () => {
  let res = (
    <li>
      # Sony_alpha홈페이지의 메인페이지의 이미지를 참고하여 만들었던
      사이트입니다.
      <br />
      <br />
      # 슬라이더 구성 및 레이아웃, 스크롤이벤트에 대해서 스터디를 목적으로
      진행했었습니다.
      <br />
      <br />
    </li>
  );
  return res;
};
const momentdesc4 = () => {
  let res = (
    <li>
      # 켈로그 프로젝트는 웹사이트 이미지만을 참고하여 제작한 결과물입니다.
      <br />
      <br />
      # React를 활용하여 다수의 페이지를 구현해보고자 진행하였던
      프로젝트였습니다.
      <br />
      <br />
      # 기능적인 구성으로는 슬라이더 구현, 검색 의 기능 등을 담고 있습니다.
      <br />
      <br />
    </li>
  );
  return res;
};

export let data = [
  {
    "01": {
      id: 1,
      img: image01,
      projectTitle: "Moment-w",
      desc: () => {
        return momentdesc();
      },
      link: "https://symphonious-eclair-bf59a4.netlify.app",
      skill: "html, css, JavaScript(React, NodeJs(Express)), MySql",
      gitHubLink: "https://github.com/whitebirdws/moment_front",
    },
    "02": {
      id: 2,
      img: image02,
      projectTitle: "경기도 버스 노선 조회 서비스",

      desc: () => {
        return momentdesc2();
      },
      link: "https://search-bus-station-w.herokuapp.com/",
      skill: "html, css, JavaScript(React, NodeJs(Express))",

      gitHubLink: "https://github.com/whitebirdws/searchBusNumber_front",
    },
    "03": {
      id: 3,
      img: image03,
      projectTitle: "Sony_alpha",
      desc: () => {
        return momentdesc3();
      },
      link: "https://singular-parfait-a8c0f3.netlify.app",
      skill: "html, css, JavaScript(React)",
      gitHubLink: "https://github.com/whitebirdws/alpha_react",
    },
    "04": {
      id: 4,
      img: image04,
      projectTitle: "Kellogg홈페이지",
      desc: () => {
        return momentdesc4();
      },
      link: "https://reliable-queijadas-d52bd7.netlify.app/",
      skill: "html, css, JavaScript(React)",
      gitHubLink: "https://github.com/whitebirdws/kellogg_react",
    },
  },
];
