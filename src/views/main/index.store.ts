import {defineStore} from 'pinia'
import type * as T from './types'

export default defineStore('main.store', {
  // 변수(데이터)를 저장하는 공간
  state() {
    return {
      navData: [{
        label: '스포츠 홈',
        loginRequired: false,
        emoji: '🥏'
      }, {
        label: '야구',
        loginRequired: false,
        emoji: '⚾️'
      }, {
        label: '해외야구',
        loginRequired: false,
        emoji: '⚾️⚾️'
      }, {
        label: '축구',
        loginRequired: true,
        emoji: '⚽️'
      }, {
        label: '해외축구',
        loginRequired: true,
        emoji: '⚽️⚽️'
      }] as T.NavData[],

      postData: [{
        img: "https://dthumb-phinf.pstatic.net?src=http://imgnews.naver.net/image/117/2023/01/18/202301171313794762_1_20230118000103534.jpg&type=nf160_95&service=sports",
        title: "EPL떠난 지 6년만에 독일 9부리그로→'충격적인 현실' 35살 전 풀럼스타",
        desc: "[마이데일리 = 김성호 기자]2014년 26살의 나이로 잉글랜드 프리미어 리그 풀럼으로 이적한 그는 앞길 창창한 축구 선수였다. 당시 이적료는 1200만 파...",
        category: "해외축구일반 ",
        news: "마이데일리",
        link: "https://sports.news.naver.com/news?oid=117&aid=0003688768"
      }, {
        img: "https://dthumb-phinf.pstatic.net?src=http://imgnews.naver.net/image/076/2023/01/18/2023011901001165600145651_20230118002503782.jpg&type=nf160_95&service=sports",
        title: "나폴리 김민재 대체자 물색 '336억 가치' 아약스 CB 놓고 유벤투스·인터밀란과 경쟁",
        desc: "페르 슈르스. AFP연합뉴스[스포츠조선 김진회 기자] 나폴리가 올 여름 잉글랜드 프리미어리그로 활동 무대를 옮길 것이 확실시 되고 있는 김민재(27)의 대체...",
        category: "스포츠조선 ",
        news: "프리미어리그",
        link: "https://sports.news.naver.com/news?oid=076&aid=0003961676"
      }, {
        img: "https://dthumb-phinf.pstatic.net?src=http://imgnews.naver.net/image/076/2023/01/18/2023011901001165400145631_20230118001605012.jpg&type=nf160_95&service=sports",
        title: "매번 돈으로 받았다…히어로즈 역사상 첫 보상선수 탄생하나",
        desc: "2022 KBO 준플레이오프 4차전 KT위즈와 키움 히어로즈의 경기가 20일 수원KT위즈파크에서 열렸다. 키움 한현희. 수원=박재만 기자 pjm@sports...",
        category: "스포츠조선 ",
        news: "KBO리그",
        link: "https://sports.news.naver.com/news?oid=076&aid=0003961675"
      }, {
        img: "https://dthumb-phinf.pstatic.net?src=http://imgnews.naver.net/image/025/2023/01/18/0003254082_001_20230118000416846.jpg&type=nf160_95&service=sports",
        title: "베트남과 5년 동행 마친 박항서 '감독으로 활동할 계획 없다'", // ""이거 안에 ""쓰니까 에러남 질문
        desc: "2019년 아시안컵 본선에서 교체 돼 벤치로 들어오는 응우옌 꽁푸엉과 포옹하는 박항서 감독. [연합뉴스] “우리 선수들과 함께 쌓은 추억들이 가장 기억에 남...",
        category: "중앙일보 ",
        news: "k리그",
        link: "https://sports.news.naver.com/news?oid=025&aid=0003254082"
      }, {
        img: "https://dthumb-phinf.pstatic.net?src=http://imgnews.naver.net/image/108/2023/01/18/0003122153_001_20230118000801254.jpg&type=nf160_95&service=sports",
        title: "벌써 사우디에 푹 빠진 '호날두' 가족들 '정말 아름답다'",
        desc: "조지나 로드리게스(왼쪽)와 크리스티아누 호날두. /사진=조지나 로드리게스 인스타그램 캡처크리스티아누 호날두(38·알 나스르) 가족들이 벌써 새로운 도시의 매...",
        category: "스타뉴스 ",
        news: "대표팀",
        link: "https://sports.news.naver.com/news?oid=108&aid=0003122153"
      }] as T.PostData[],
      
      postData1: [{
        img: "https://dthumb-phinf.pstatic.net?src=http://imgnews.naver.net/image/117/2023/01/18/202301171313794762_1_20230118000103534.jpg&type=nf160_95&service=sports",
        title: "EPL떠난 지 6년만에 독일 9부리그로→'충격적인 현실' 35살 전 풀럼스타",
        news: "마이데일리",
        link: "https://sports.news.naver.com/news?oid=117&aid=0003688768"
      }, {
        img: "https://dthumb-phinf.pstatic.net?src=http://imgnews.naver.net/image/076/2023/01/18/2023011901001165600145651_20230118002503782.jpg&type=nf160_95&service=sports",
        title: "나폴리 김민재 대체자 물색 '336억 가치' 아약스 CB 놓고 유벤투스·인터밀란과 경쟁",
        news: "프리미어리그",
        link: "https://sports.news.naver.com/news?oid=076&aid=0003961676"
      }, {
        img: "https://dthumb-phinf.pstatic.net?src=http://imgnews.naver.net/image/076/2023/01/18/2023011901001165400145631_20230118001605012.jpg&type=nf160_95&service=sports",
        title: "매번 돈으로 받았다…히어로즈 역사상 첫 보상선수 탄생하나",
        news: "KBO리그",
        link: "https://sports.news.naver.com/news?oid=076&aid=0003961675"
      }] as T.PostData1[],
      currentIdx: 0
    }
  },
  // 변수가 변할 때 변한 결과를 반환해주는 친구!!
  getters: {},
  // 이벤트, 함수
  actions: {
    moveTab(loginRequired:boolean, i:number){
      if (loginRequired) {
        alert('로그인이 필요합니다.')
        return
      }
      this.currentIdx = i
    }
  }
})