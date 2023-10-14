import { defineComponent, ref } from "vue";
import useStore from "./index.store";
import { Navbar } from "./components/Nav";
import { PostList } from "./components/PostList";
import { PostList1 } from "./components/PostList1";

export default defineComponent({
  setup() {
    const store = useStore();
    const block = "!block";
    return () => {
      const { currentIdx } = store;
      return (
        <div>
          <Navbar />
          <PostList class={`hidden ${currentIdx === 0 && block}`} />
          <PostList1 class={`hidden ${currentIdx === 1 && block}`} />
        </div>
      );
    };
  },
});
