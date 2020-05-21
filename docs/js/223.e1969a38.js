(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[223],{"0b70":function(e,n,t){"use strict";t.r(n),n["default"]="<template>\n  <div class=\"row justify-center full-width q-pa-md\">\n    <q-calendar\n      ref=\"calendar\"\n      v-model=\"selectedDate\"\n      view=\"day-resource\"\n      :resources=\"resources\"\n      :resource-height=\"50\"\n      :locale=\"locale\"\n      sticky\n      style=\"height: 200px; max-width: 800px; width: 100%;\"\n    >\n      <template #resource-header=\"scope\">\n        <div class=\"my-resource-header\">\n          {{ showDate(scope) }}\n        </div>\n      </template>\n    </q-calendar>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '2019-04-01',\n      locale: 'en-us',\n      resources: [\n        { label: 'John' },\n        { label: 'Mary' },\n        { label: 'Susan' },\n        { label: 'Olivia' },\n        { label: 'Board Room' },\n        { label: 'Room-1' },\n        { label: 'Room-2' }\n      ]\n    }\n  },\n\n  methods: {\n    showDate (scope) {\n      const date = new Date(scope.date)\n      return this.monthFormatter().format(date)\n    },\n\n    monthFormatter () {\n      try {\n        return new Intl.DateTimeFormat(this.locale || void 0, {\n          day: '2-digit',\n          month: 'long',\n          year: 'numeric',\n          timeZone: 'UTC'\n        })\n      } catch (e) {\n        //\n      }\n    }\n  }\n}\n<\/script>\n\n<style lang=\"sass\" scoped>\n.my-resource-header\n  display: flex\n  flex-direction: row\n  flex: 1\n  justify-content: center\n  align-items: center\n  position: relative\n  font-size: 10px\n  font-weight: 700\n</style>\n"}}]);