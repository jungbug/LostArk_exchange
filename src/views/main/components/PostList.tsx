import { defineComponent } from "vue";
import useStore from "../index.store";

export const PostList = defineComponent({
  setup() {
    const store = useStore();
    return () => {
      const { postData } = store;
      return (
        <div class="max-w-[680px] mx-auto">
          <ul class="flex flex-col">
            {postData.map(({ img, title, desc, category, news, link }) => {
              return (
                <a href={link}>
                  <li class="list-none mt-10">
                    <img src={img} alt="" />
                    <div class="text-base font-bold text-[#000063]">
                      {title}
                    </div>
                    <div class="text-xs text-[#5e5e5e]">{desc}</div>
                    <div class="text-xs text-[#a0a4aa]">
                      {category}
                      {news}
                    </div>
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
