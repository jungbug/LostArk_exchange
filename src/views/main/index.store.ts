import {defineStore} from 'pinia'
import type * as T from './types'

export default defineStore('main.store', {
  // 변수(데이터)를 저장하는 공간
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

      Main: [{
        
      }] as T.MainData[],

      WisdomProduce: [{

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