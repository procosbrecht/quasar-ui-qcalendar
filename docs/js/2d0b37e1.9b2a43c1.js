(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0b37e1"],{2937:function(e,r,a){"use strict";a.r(r);var o=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"row justify-left",staticStyle:{width:"100%"}},[a("q-dialog",{model:{value:e.displayLocale,callback:function(r){e.displayLocale=r},expression:"displayLocale"}},[a("q-card",{staticStyle:{"min-width":"300px"}},[a("q-toolbar",{staticClass:"bg-blue-8 text-grey-1"},[a("q-toolbar-title",[e._v("\n          Current local: "),a("strong",[e._v(e._s(e.displayedLocale))])])],1),a("q-card-section",{staticClass:"text-caption"},[e._v("\n        Enter a new locale:\n      ")]),a("q-card-section",[a("q-input",{attrs:{autofocus:"",label:"Locale"},model:{value:e.locale,callback:function(r){e.locale=r},expression:"locale"}})],1)],1)],1),a("div",{staticClass:"col-12 q-px-md q-pb-sm"},[a("q-btn",{staticClass:"full-width",attrs:{dense:"",label:"Change locale"},on:{click:function(r){e.displayLocale=!0}}}),a("div",{staticClass:"col-12 q-px-md q-pb-sm"},[a("span",{staticClass:"text-body2"},[e._v("Max days (custom)")]),a("q-slider",{attrs:{min:1,max:31,label:""},model:{value:e.maxDays,callback:function(r){e.maxDays=r},expression:"maxDays"}})],1),a("q-toggle",{staticClass:"col-12",attrs:{label:"5 day work week"},model:{value:e.fiveDayWorkWeek,callback:function(r){e.fiveDayWorkWeek=r},expression:"fiveDayWorkWeek"}}),a("q-toggle",{staticClass:"col-12",attrs:{label:"Week starts on Monday"},model:{value:e.firstDayMonday,callback:function(r){e.firstDayMonday=r},expression:"firstDayMonday"}}),a("q-toggle",{staticClass:"col-12",attrs:{label:"Short month label"},model:{value:e.shortMonthLabel,callback:function(r){e.shortMonthLabel=r},expression:"shortMonthLabel"}}),a("q-toggle",{staticClass:"col-12",attrs:{label:"Short weekday label"},model:{value:e.shortWeekdayLabel,callback:function(r){e.shortWeekdayLabel=r},expression:"shortWeekdayLabel"}}),a("q-toggle",{staticClass:"col-12",attrs:{label:"Short interval label"},model:{value:e.shortIntervalLabel,callback:function(r){e.shortIntervalLabel=r},expression:"shortIntervalLabel"}}),a("q-toggle",{staticClass:"col-12",attrs:{label:"24hr interval labels"},model:{value:e.hour24Format,callback:function(r){e.hour24Format=r},expression:"hour24Format"}}),a("q-toggle",{staticClass:"col-12",attrs:{label:"Show work weeks"},model:{value:e.showWorkWeeks,callback:function(r){e.showWorkWeeks=r},expression:"showWorkWeeks"}}),a("q-toggle",{staticClass:"col-12",attrs:{label:"Hide header"},model:{value:e.hideHeader,callback:function(r){e.hideHeader=r},expression:"hideHeader"}}),a("q-toggle",{staticClass:"col-12",attrs:{label:"No scroll"},model:{value:e.noScroll,callback:function(r){e.noScroll=r},expression:"noScroll"}}),a("q-toggle",{staticClass:"col-12",attrs:{label:"Show month label"},model:{value:e.showMonthLabel,callback:function(r){e.showMonthLabel=r},expression:"showMonthLabel"}}),a("q-toggle",{staticClass:"col-12",attrs:{label:"Show Day of Year Label"},model:{value:e.showDayOfYearLabel,callback:function(r){e.showDayOfYearLabel=r},expression:"showDayOfYearLabel"}}),a("div",{staticClass:"col-12 q-px-md"},[a("span",{staticClass:"text-body2"},[e._v("Interval Range (daily)")]),a("q-range",{attrs:{min:0,max:24,step:e.intervalRangeStep,label:"","left-label-value":e.leftLabelRange,"right-label-value":e.rightLabelRange},model:{value:e.intervalRange,callback:function(r){e.intervalRange=r},expression:"intervalRange"}})],1),a("div",{staticClass:"col-12 q-px-md q-pb-sm"},[a("span",{staticClass:"text-body2"},[e._v("Interval Step")]),a("div",{staticClass:"q-gutter-sm"},[a("q-radio",{attrs:{val:1,label:"60 min"},model:{value:e.intervalRangeStep,callback:function(r){e.intervalRangeStep=r},expression:"intervalRangeStep"}}),a("q-radio",{attrs:{val:.5,label:"30 min"},model:{value:e.intervalRangeStep,callback:function(r){e.intervalRangeStep=r},expression:"intervalRangeStep"}}),a("q-radio",{attrs:{val:.25,label:"15 min"},model:{value:e.intervalRangeStep,callback:function(r){e.intervalRangeStep=r},expression:"intervalRangeStep"}})],1)]),a("div",{staticClass:"col-12 q-px-md q-pb-sm"},[a("span",{staticClass:"text-body2"},[e._v("Interval height (daily)")]),a("q-slider",{attrs:{min:20,max:100,label:"","label-value":e.intervalHeight+"px"},model:{value:e.intervalHeight,callback:function(r){e.intervalHeight=r},expression:"intervalHeight"}})],1),a("div",{staticClass:"col-12 q-px-md q-pb-sm"},[a("span",{staticClass:"text-body2"},[e._v("Day height (monthly)")]),a("q-slider",{attrs:{min:0,max:200,label:"","label-value":e.dayHeight+"px"},model:{value:e.dayHeight,callback:function(r){e.dayHeight=r},expression:"dayHeight"}})],1),a("div",{staticClass:"col-12 q-px-md q-pb-sm"},[a("span",{staticClass:"text-body2"},[e._v("Resource height (scheduler)")]),a("q-slider",{attrs:{min:20,max:100,label:"","label-value":e.resourceHeight+"px"},model:{value:e.resourceHeight,callback:function(r){e.resourceHeight=r},expression:"resourceHeight"}})],1),a("q-toggle",{staticClass:"col-12",attrs:{label:"Enable themes"},model:{value:e.enableThemes,callback:function(r){e.enableThemes=r},expression:"enableThemes"}}),a("q-select",{staticClass:"col-12",attrs:{outlined:"",dense:"","emit-value":"","map-options":"",label:"Change theme",options:e.themesList,disable:!0!==e.enableThemes},model:{value:e.theme,callback:function(r){e.theme=r},expression:"theme"}})],1)],1)},t=[],l=a("02fa"),n=a.n(l),u=(a("7f7f"),a("c5f6"),a("0967")),c=[{name:"default"},{name:"dark",colorBody:"grey-2",backgroundBody:"blue-grey-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"blue-grey-8",colorBodyPast:"grey-11",backgroundBodyPast:"blue-grey-6",colorBodyCurrent:"blue-grey-2",backgroundBodyCurrent:"blue-grey-10",colorBodyFuture:"blue-grey-2",backgroundBodyFuture:"blue-grey-10",colorHeader:"blue-grey-2",backgroundHeader:"blue-grey-10",colorHeaderOutside:"blue-grey-2",backgroundHeaderOutside:"blue-grey-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"blue-grey-6",colorHeaderCurrent:"blue-grey-2",backgroundHeaderCurrent:"blue-grey-10",colorHeaderFuture:"blue-grey-2",backgroundHeaderFuture:"blue-grey-10",colorWorkWeekPast:"blue-grey-8",backgroundWorkWeekPast:"blue-grey-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"blue-grey-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"blue-grey-10",colorDayLabelOutside:"blue-grey-2",backgroundDayLabelOutside:"blue-grey-8",colorDayLabelPast:"grey-11",backgroundDayLabelPast:"blue-grey-6",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"blue-grey-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"blue-grey-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"blue-grey-8",colorIntervalBody:"grey-2",backgroundIntervalBody:"blue-grey-8",colorIntervalText:"grey-2",backgroundIntervalText:"blue-grey-8"},{name:"teal",colorBody:"grey-2",backgroundBody:"teal-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"teal-8",colorBodyPast:"grey-11",backgroundBodyPast:"teal-6",colorBodyCurrent:"teal-2",backgroundBodyCurrent:"teal-10",colorBodyFuture:"teal-2",backgroundBodyFuture:"teal-10",colorHeader:"teal-2",backgroundHeader:"teal-10",colorHeaderOutside:"teal-2",backgroundHeaderOutside:"teal-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"teal-6",colorHeaderCurrent:"teal-2",backgroundHeaderCurrent:"teal-10",colorHeaderFuture:"teal-2",backgroundHeaderFuture:"teal-10",colorWorkWeekPast:"teal-8",backgroundWorkWeekPast:"teal-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"teal-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"teal-10",colorDayLabelOutside:"teal-2",backgroundDayLabelOutside:"teal-8",colorDayLabelPast:"grey-11",backgroundDayLabelPast:"teal-6",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"teal-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"teal-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"teal-8",colorIntervalBody:"grey-2",backgroundIntervalBody:"teal-8",colorIntervalText:"grey-2",backgroundIntervalText:"teal-8"},{name:"brown",colorBody:"brown-2",backgroundBody:"brown-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"brown-8",colorBodyPast:"grey-11",backgroundBodyPast:"brown-6",colorBodyCurrent:"brown-2",backgroundBodyCurrent:"brown-10",colorBodyFuture:"brown-2",backgroundBodyFuture:"brown-10",colorHeader:"brown-2",backgroundHeader:"brown-10",colorHeaderOutside:"brown-2",backgroundHeaderOutside:"brown-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"brown-6",colorHeaderCurrent:"brown-2",backgroundHeaderCurrent:"brown-10",colorHeaderFuture:"brown-2",backgroundHeaderFuture:"brown-10",colorWorkWeekPast:"brown-8",backgroundWorkWeekPast:"brown-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"brown-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"brown-10",colorDayLabelOutside:"brown-2",backgroundDayLabelOutside:"brown-8",colorDayLabelPast:"grey-11",backgroundDayLabelPast:"brown-6",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"brown-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"brown-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"brown-8",colorIntervalBody:"grey-2",backgroundIntervalBody:"brown-8",colorIntervalText:"grey-2",backgroundIntervalText:"brown-8"},{name:"deep purple",colorBody:"grey-2",backgroundBody:"deep-purple-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"deep-purple-8",colorBodyPast:"grey-11",backgroundBodyPast:"deep-purple-6",colorBodyCurrent:"deep-purple-2",backgroundBodyCurrent:"deep-purple-10",colorBodyFuture:"deep-purple-2",backgroundBodyFuture:"deep-purple-10",colorHeader:"deep-purple-2",backgroundHeader:"deep-purple-10",colorHeaderOutside:"deep-purple-2",backgroundHeaderOutside:"deep-purple-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"deep-purple-6",colorHeaderCurrent:"deep-purple-2",backgroundHeaderCurrent:"deep-purple-10",colorHeaderFuture:"deep-purple-2",backgroundHeaderFuture:"deep-purple-10",colorWorkWeekPast:"deep-purple-8",backgroundWorkWeekPast:"deep-purple-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"deep-purple-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"deep-purple-10",colorDayLabelOutside:"deep-purple-2",backgroundDayLabelOutside:"deep-purple-8",colorDayLabelPast:"grey-11",backgroundDayLabelPast:"deep-purple-6",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"deep-purple-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"deep-purple-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"deep-purple-8",colorIntervalBody:"grey-2",backgroundIntervalBody:"deep-purple-8",colorIntervalText:"grey-2",backgroundIntervalText:"deep-purple-8"},{name:"indigo",colorBody:"grey-2",backgroundBody:"indigo-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"indigo-8",colorBodyPast:"grey-11",backgroundBodyPast:"indigo-6",colorBodyCurrent:"indigo-2",backgroundBodyCurrent:"indigo-10",colorBodyFuture:"indigo-2",backgroundBodyFuture:"indigo-10",colorHeader:"indigo-2",backgroundHeader:"indigo-10",colorHeaderOutside:"indigo-2",backgroundHeaderOutside:"indigo-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"indigo-6",colorHeaderCurrent:"indigo-2",backgroundHeaderCurrent:"indigo-10",colorHeaderFuture:"indigo-2",backgroundHeaderFuture:"indigo-10",colorWorkWeekPast:"indigo-8",backgroundWorkWeekPast:"indigo-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"indigo-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"indigo-10",colorDayLabelOutside:"indigo-2",backgroundDayLabelOutside:"indigo-8",colorDayLabelPast:"grey-11",backgroundDayLabelPast:"indigo-6",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"indigo-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"indigo-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"indigo-8",colorIntervalBody:"grey-2",backgroundIntervalBody:"indigo-8",colorIntervalText:"grey-2",backgroundIntervalText:"indigo-8"},{name:"blue",colorBody:"grey-2",backgroundBody:"blue-8",colorBodyOutside:"grey-6",backgroundBodyOutside:"blue-8",colorBodyPast:"grey-11",backgroundBodyPast:"blue-6",colorBodyCurrent:"blue-2",backgroundBodyCurrent:"blue-10",colorBodyFuture:"blue-2",backgroundBodyFuture:"blue-10",colorHeader:"blue-2",backgroundHeader:"blue-10",colorHeaderOutside:"blue-2",backgroundHeaderOutside:"blue-10",colorHeaderPast:"grey-11",backgroundHeaderPast:"blue-6",colorHeaderCurrent:"blue-2",backgroundHeaderCurrent:"blue-10",colorHeaderFuture:"blue-2",backgroundHeaderFuture:"blue-10",colorWorkWeekPast:"blue-8",backgroundWorkWeekPast:"blue-6",colorWorkWeekCurrent:"orange-4",backgroundWorkWeekCurrent:"blue-10",colorWorkWeekFuture:"yellow-4",backgroundWorkWeekFuture:"blue-10",colorDayLabelOutside:"blue-2",backgroundDayLabelOutside:"blue-8",colorDayLabelPast:"grey-11",backgroundDayLabelPast:"blue-6",colorDayLabelCurrent:"orange-4",backgroundDayLabelCurrent:"blue-10",colorDayLabelFuture:"yellow-4",backgroundDayLabelFuture:"blue-10",colorIntervalHeader:"grey-2",backgroundIntervalHeader:"blue-8",colorIntervalBody:"grey-2",backgroundIntervalBody:"blue-8",colorIntervalText:"grey-2",backgroundIntervalText:"blue-8"}],d={name:"Playground",data:function(){return{displayLocale:!1}},mounted:function(){u["a"].is.mobile&&(this.shortMonthLabel=!0,this.shortWeekdayLabel=!0,this.shortIntervalLabel=!0,this.hour24Format=!0)},computed:{leftLabelRange:function(){var e=Math.floor(this.intervalRange.min),r=Number((this.intervalRange.min%1).toFixed(2)),a=60*r;return e+":"+(a<10?a+"0":a)},rightLabelRange:function(){var e=Math.floor(this.intervalRange.max),r=Number((this.intervalRange.max%1).toFixed(2)),a=60*r;return e+":"+(a<10?a+"0":a)},displayedLocale:function(){return void 0===this.locale||""===this.locale?"en-US":this.locale},locale:{get:function(){return this.$store.state.calendar.locale},set:function(e){this.$store.commit("calendar/locale",e)}},maxDays:{get:function(){return this.$store.state.calendar.maxDays},set:function(e){this.$store.commit("calendar/maxDays",e)}},fiveDayWorkWeek:{get:function(){return this.$store.state.calendar.fiveDayWorkWeek},set:function(e){this.$store.commit("calendar/fiveDayWorkWeek",e)}},firstDayMonday:{get:function(){return this.$store.state.calendar.firstDayMonday},set:function(e){this.$store.commit("calendar/firstDayMonday",e)}},shortMonthLabel:{get:function(){return this.$store.state.calendar.shortMonthLabel},set:function(e){this.$store.commit("calendar/shortMonthLabel",e)}},showDayOfYearLabel:{get:function(){return this.$store.state.calendar.showDayOfYearLabel},set:function(e){this.$store.commit("calendar/showDayOfYearLabel",e)}},shortWeekdayLabel:{get:function(){return this.$store.state.calendar.shortWeekdayLabel},set:function(e){this.$store.commit("calendar/shortWeekdayLabel",e)}},shortIntervalLabel:{get:function(){return this.$store.state.calendar.shortIntervalLabel},set:function(e){this.$store.commit("calendar/shortIntervalLabel",e)}},hour24Format:{get:function(){return this.$store.state.calendar.hour24Format},set:function(e){this.$store.commit("calendar/hour24Format",e)}},hideHeader:{get:function(){return this.$store.state.calendar.hideHeader},set:function(e){this.$store.commit("calendar/hideHeader",e)}},noScroll:{get:function(){return this.$store.state.calendar.noScroll},set:function(e){this.$store.commit("calendar/noScroll",e)}},showMonthLabel:{get:function(){return this.$store.state.calendar.showMonthLabel},set:function(e){this.$store.commit("calendar/showMonthLabel",e)}},showWorkWeeks:{get:function(){return this.$store.state.calendar.showWorkWeeks},set:function(e){this.$store.commit("calendar/showWorkWeeks",e)}},intervalRange:{get:function(){return this.$store.state.calendar.intervalRange},set:function(e){this.$store.commit("calendar/intervalRange",e)}},intervalRangeStep:{get:function(){return this.$store.state.calendar.intervalRangeStep},set:function(e){this.$store.commit("calendar/intervalRangeStep",e)}},intervalHeight:{get:function(){return this.$store.state.calendar.intervalHeight},set:function(e){this.$store.commit("calendar/intervalHeight",e)}},resourceHeight:{get:function(){return this.$store.state.calendar.resourceHeight},set:function(e){this.$store.commit("calendar/resourceHeight",e)}},dayHeight:{get:function(){return this.$store.state.calendar.dayHeight},set:function(e){this.$store.commit("calendar/dayHeight",e)}},enableThemes:{get:function(){return this.$store.state.calendar.enableThemes},set:function(e){this.$store.commit("calendar/enableThemes",e)}},themes:{get:function(){return c}},theme:{get:function(){return this.$store.state.calendar.theme},set:function(e){this.$store.commit("calendar/theme",e)}},themesList:function(){var e=[];return this.themes.forEach(function(r){e.push({label:r.name,value:n()({},r)})}),e}},watch:{intervalRangeStep:function(e){var r=function(r){var a=Number((r%1).toFixed(2)),o=a%e;return o>0?r+o:r},a=function(r){var a=Number((r%1).toFixed(2)),o=a%e;return o>0?r-o:r};this.intervalRange.min=r(this.intervalRange.min),this.intervalRange.max=a(this.intervalRange.max)}}},s=d,i=a("2877"),b=Object(i["a"])(s,o,t,!1,null,null,null);r["default"]=b.exports}}]);