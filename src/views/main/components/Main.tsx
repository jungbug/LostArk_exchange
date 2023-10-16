import { defineComponent } from "vue";
import useStore from "../index.store";

export const Main = defineComponent({
  setup() {
    const store = useStore();
    const active = "font-bold !opacity-100";
    return () => {
      const { MainData, currentIdx, moveTab} = store;
      return (
        <div class="max-w-[680px] mx-auto">
          <ul class="flex">
            {MainData.map(({label, loginRequired, explain}, i, arr) => {
              return (
                <li
                class="mt-20 h-6 mx-2 "   
                style={{
                  width: 100 / arr.length + '%'
                }}
                onClick={() => {
                  moveTab(loginRequired, i+1); // 이거는 pinia에 있고 여기서는 호출만
                }}>
                    <div class="text-center w-full bg-white shadow-2xl shadow-slate-300 rounded-xl p-2">
                      <div>
                        <img src="" alt="" />
                      </div>
                      <div class="text-lg">
                        {label}
                      </div>
                      <div class="text-sm mt-2 text-gray-90z0">
                        {explain}
                      </div>
                    </div>
                  </li>
              );
            })}
          </ul>
        </div>
      );
    };
  },
}); 