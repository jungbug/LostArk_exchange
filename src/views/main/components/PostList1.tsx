import { defineComponent } from "vue";
import useStore from '../index.store'

export const PostList1 = defineComponent({
  setup() {
    const store = useStore(); // pinia 소환
    return () => {
      const { postData1 } = store;
      return (
        <div>
          <ul class="desktop:max-w-[30%] flex flex-col mt-10 ml-52">
            {postData1.map(({ img, title, news, link }) => {
              return (
                <a href={link}>
                  <li class="list-none mt-10">
                    <img src={img} alt="" />
                    <div class="text-base font-bold text-[#000063]">
                      {title}
                    </div>
                    <div class="text-xs text-[#a0a4aa]">{news}</div>
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      );
    };
  },
});