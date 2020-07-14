import { shallowMount } from "@vue/test-utils";
import HelloWorld from "../../src/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.message when passed", () => {
    const message = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { message }
    });
    expect(wrapper.text()).toMatch(message);
  });
});
