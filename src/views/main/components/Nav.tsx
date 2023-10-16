import { defineComponent } from "vue";
import useStore from "../index.store";

export const Navbar = defineComponent({
  setup() {
    // pinia 인스턴스는 <무조건> setup 안에 선언한다!!
    const store = useStore(); // pinia 호출
    const active = "font-bold !opacity-100"; // 이거는 동적으로 변하는게 아니면서 다른곳에서 사용안하니까 여기

    // 이렇게 구조 분해 할당을 하면 반응성을 잃음...!!!!!!!!!!!! (매우 중요)
    // const {navData, moveTab, currentIdx} = store

    return () => {
      const { navData, moveTab, currentIdx } = store; // 구조 분해 할당
      return (
        <div class="bg-[#A1C652]">
          <div class="max-w-[680px] mx-auto">
            <ul class="flex">
              {navData.map(({ label, loginRequired }, i, arr) => {
                return (
                  <li
                    class={`
                      px-3 py-5 cursor-pointer text-center text-sm text-white opacity-50
                      ${currentIdx === i && active}
                    `}
                    style={{
                      width: 100 / arr.length + '%' // tailwind css에선 적용 안되기 때문에 이렇게 생성
                    }}
                    onClick={() => {
                      moveTab(loginRequired, i); // 이거는 pinia에 있고 여기서는 호출만
                    }}
                  >
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    };
  },
});
