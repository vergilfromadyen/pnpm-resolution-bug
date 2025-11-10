import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "./app.vue";

test("displays message", () => {
  const wrapper = mount(App);
  expect(wrapper.find("h1").text()).toEqual("Hello world");
});
