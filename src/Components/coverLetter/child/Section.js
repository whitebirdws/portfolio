import styles from "./styles/Section.module.css";

const Section = () => {
  return (
    <>
      <section>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionMenu}>
            <span>2022</span>
            <span>
              CoverLetter<p>Section</p>
            </span>
            <span>WooSeok_Choi</span>
            <span>whitebirdws@gmail.com</span>
          </div>
          <div className={styles.coverLetterSection}>
            <div className={styles.coverLetterSection_desc}>
              <div className={styles.coverLetterTitle}>
                안녕하세요 웹프론트엔드 지원자 최우석입니다.
              </div>
              <div className={styles.coverLetterButton}>
                # 웹개발에 관심을 가지게 된 계기
              </div>
              <br />
              - 우연히 JavaScript 를 접하게 되었습니다.
              <br />
              <br />
              -프론트엔드(바닐라 JavaScript를 시작으로 React,NodeJS (Express)를
              학습하게 되었으며,또한 진행형이기도 합니다.)를 지향하게 되면서
              학습된 기술 스택으로 토이 프로젝트 를 진행하게 되었습니다.
              진행하면서 마주하게 되는 이슈와 그러한 이슈를 해결하고 결과물을
              얻었을때 성취감을 느꼈습니다.
              <br />
              <br />
              <div className={styles.coverLetterButton}># 기억나는 이슈</div>
              <br />
              - 이슈중 하나는 React를 사용할 때 데이터를 반영할 때 한 턴 늦게
              나오는 이슈였습니다.
              <br />
              <br />- 구체적으로 이야기하면 페이지에서 데이터를 입력하는
              페이지와 기록된 페이지가 구분되어 있을경우 기존 데이터와 새로
              입력된 데이터사이에 반응이 한 턴 늦게 나오는 이슈였습니다.
              <br />
              <br />
              -이러함을 해결하기 위해 useEffect를 활용하여 초기화면
              설정(초기화면을 담당하는 부분의 그룹(함수화)을 지정 )과,이후 값의
              변경되어지는 데이터를 감지하는 설정(업데이트되어지는 부분의 그룹을
              지정(함수화)) 을 구분하여 이슈를 해결했던 경험이 있습니다.
              <br />
              <br />
              - 주로 이러한 사례가 발생한 경우를 살펴보면 서버와 데이터를 주고
              받기 위한 상황이었습니다.
              <br />
              <br />
              -(프로젝트의 다양성을 높이기 위해 Nodejs를 이용하여 웹서버 및
              API를 개설하여 MYSQL의 데이터를 저장하여 데이터의 보관성을
              높였으며 이러한 MYSQL의 데이터를 NodeJS 에서 사용하기 위해
              Sequelize를 사용했었습니다.)
              <br />
              <br />
              -이슈는 아니지만 개인적으로 프로젝트를 진행해보면서 컴포넌트 및
              css의 재사용성에 대해서 고민은 깊어졌습니다.
              <br />
              -css의 재사용성 및 도구로서의 방법들을 찾고자 하였던 이유는 기존의
              기본 css방식으로 클래스명 지정등 속성을 지정해줄때 구조가 깊게
              들어가지는 경우 생산성 및 가독성이 떨어진다는 것을 많이 느꼈고
              scss와 같은 방식을 통해서 해결될수 있다는 것을 체감 할 수 있었기
              때문입니다.
              <br />
              <br />
              <div className={styles.coverLetterButton}># 글을 마치며</div>
              <br />
              - 토이프로젝트를 진행했던 경험은 웹 개발에 대한 흐름을 파악하고
              인지할 수 있었던 시간이었습니다.
              <br />
              <br /> - 저의 시간이 귀사와 앞으로 나아갈 시간의 토대가 되길
              바라며 소중한 시간을 내주시어 감사의 인사를 드립니다.
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
