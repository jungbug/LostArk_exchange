import {defineStore} from 'pinia'
import type * as T from './types'

export default defineStore('main.store', {
  state() {
    return {
      navData: [{
        label: '메인',
        loginRequired: false,
      }, {
        label: '영지 제작 효율',
        loginRequired: false,
      }, {
        label: '레이드 보상 정리',
        loginRequired: false,
      }, {
        label: '호감도 계산기',
        loginRequired: false, 
      }, {
        label: '달력',
        loginRequired: false,
      }] as T.NavData[],

      BossData: [{

      }] as T.BossData[],

      MainData: [{
        label: '영지 제작 효율',
        loginRequired: false,
        explain: '영지 제작 효율을 계산해주는 페이지입니다.'
      },{
        label: '레이드 보상 정리',
        loginRequired: false,
        explain: '레이드 보상을 정리해주는 페이지입니다.'
      },{
        label: '호감도 계산기',
        loginRequired: false,
        explain: '호감도 캐릭터의 유물 개수 등등을 계산해주는 페이지입니다.'
      },{
        label: '달력',
        loginRequired: false,
        explain: '로아 모험섬 및 이벤트 등을 보여주는 페이지입니다.'
      }
    ] as T.MainData[],

      WisdomProduceData: [{

      }] as T.WisdomProduceData[],

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