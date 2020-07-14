import Vue from "vue";
import VueI18n from "vue-i18n";
import translations from "./translations";
import dateTimeFormats from "./dateTimeFormats";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  messages: translations,
  dateTimeFormats
});

export default i18n;
