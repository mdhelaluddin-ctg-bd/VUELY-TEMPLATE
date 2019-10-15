webpackJsonp([48],{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(2145)
/* template */
var __vue_template__ = __webpack_require__(2146)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/icons/Material.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3da8654a", Component.options)
  } else {
    hotAPI.reload("data-v-3da8654a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 2145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            icons: {
                'newIcons': ["group", "rss", "shape", "spinner", "ungroup", "500px", "8tracks", "amazon", "blogger", "delicious", "disqus", "flattr", "flickr", "github-alt", "google-old", "linkedin", "odnoklassniki", "outlook", "paypal-alt", "pinterest", "playstation", "reddit", "skype", "slideshare", "soundcloud", "tumblr", "twitch", "vimeo", "whatsapp", "xbox", "yahoo", "youtube-play", "youtube"],
                'webApplication': ["3d-rotation", "airplane-off", "airplane", "album", "archive", "assignment-account", "assignment-alert", "assignment-check", "assignment-o", "assignment-return", "assignment-returned", "assignment", "attachment-alt", "attachment", "audio", "badge-check", "balance-wallet", "balance", "battery-alert", "battery-flash", "battery-unknown", "battery", "bike", "block-alt", "block", "boat", "book-image", "book", "bookmark-outline", "bookmark", "brush", "bug", "bus", "cake", "car-taxi", "car-wash", "car", "card-giftcard", "card-membership", "card-travel", "card", "case-check", "case-download", "case-play", "case", "cast-connected", "cast", "chart-donut", "chart", "city-alt", "city", "close-circle-o", "close-circle", "close", "cocktail", "code-setting", "code-smartphone", "code", "coffee", "collection-bookmark", "collection-case-play", "collection-folder-image", "collection-image-o", "collection-image", "collection-item-1", "collection-item-2", "collection-item-3", "collection-item-4", "collection-item-5", "collection-item-6", "collection-item-7", "collection-item-8", "collection-item-9-plus", "collection-item-9", "collection-item", "collection-music", "collection-pdf", "collection-plus", "collection-speaker", "collection-text", "collection-video", "compass", "cutlery", "delete", "dialpad", "dns", "drink", "edit", "email-open", "email", "eye-off", "eye", "eyedropper", "favorite-outline", "favorite", "filter-list", "fire", "flag", "flare", "flash-auto", "flash-off", "flash", "flip", "flower-alt", "flower", "font", "fullscreen-alt", "fullscreen-exit", "fullscreen", "functions", "gas-station", "gesture", "globe-alt", "globe-lock", "globe", "graduation-cap", "group", "home", "hospital-alt", "hospital", "hotel", "hourglass-alt", "hourglass-outline", "hourglass", "http", "image-alt", "image-o", "image", "inbox", "truck", "turning-sign", "ungroup", "wallpaper", "washing-machine", "window-maximize", "window-minimize", "window-restore", "wrench", "zoom-in", "zoom-out"],
                'notifications': ["alert-circle-o", "alert-circle", "alert-octagon", "alert-polygon", "alert-triangle", "help-outline", "help", "info-outline", "info", "notifications-active", "notifications-add", "notifications-none", "notifications-off", "notifications-paused", "notifications"],
                'person': ["account-add", "account-box-mail", "account-box-o", "account-box-phone", "account-box", "account-calendar", "account-circle", "account-o", "account", "accounts-add", "accounts-alt", "accounts-list-alt", "accounts-list", "accounts-outline", "accounts", "face", "female", "male-alt", "male-female", "male", "mood-bad", "mood", "run", "walk"],
                'file': ["cloud-box", "cloud-circle", "cloud-done", "cloud-download", "cloud-off", "cloud-outline-alt", "cloud-outline", "cloud-upload", "cloud", "download", "file-plus", "file-text", "file", "folder-outline", "folder-person", "folder-star-alt", "folder-star", "folder", "gif", "upload"],
                'editor': ["border-all", "border-bottom", "border-clear", "border-color", "border-horizontal", "border-inner", "border-left", "border-outer", "border-right", "border-style", "border-top", "border-vertical", "copy", "crop", "format-align-center", "format-align-justify", "format-align-left", "format-align-right", "format-bold", "format-clear-all", "format-clear", "format-color-fill", "format-color-reset", "format-color-text", "format-indent-decrease", "format-indent-increase", "format-italic", "format-line-spacing", "format-list-bulleted", "format-list-numbered", "format-ltr", "format-rtl", "format-size", "format-strikethrough-s", "format-strikethrough", "format-subject", "format-underlined", "format-valign-bottom", "format-valign-center", "format-valign-top", "redo", "select-all", "space-bar", "text-format", "transform", "undo", "wrap-text"],
                'comment': ["comment-alert", "comment-alt-text", "comment-alt", "comment-edit", "comment-image", "comment-list", "comment-more", "comment-outline", "comment-text-alt", "comment-text", "comment-video", "comment", "comments"],
                'form': ["check-all", "check-circle-u", "check-circle", "check-square", "check", "circle-o", "circle", "dot-circle-alt", "dot-circle", "minus-circle-outline", "minus-circle", "minus-square", "minus", "plus-circle-o-duplicate", "plus-circle-o", "plus-circle", "plus-square", "plus", "square-o", "star-circle", "star-half", "star-outline", "star"],
                'hardware': ["bluetooth-connected", "bluetooth-off", "bluetooth-search", "bluetooth-setting", "bluetooth", "camera-add", "camera-alt", "camera-bw", "camera-front", "camera-mic", "camera-party-mode", "camera-rear", "camera-roll", "camera-switch", "camera", "card-alert", "card-off", "card-sd", "card-sim", "desktop-mac", "desktop-windows", "device-hub", "devices-off", "devices", "dock", "floppy", "gamepad", "gps-dot", "gps-off", "gps", "headset-mic", "headset", "input-antenna", "input-composite", "input-hdmi", "input-power", "input-svideo", "keyboard-hide", "keyboard", "laptop-chromebook", "laptop-mac", "laptop", "mic-off", "mic-outline", "mic-setting", "mic", "mouse", "network-alert", "network-locked", "network-off", "network-outline", "network-setting", "network", "phone-bluetooth", "phone-end", "phone-forwarded", "phone-in-talk", "phone-locked", "phone-missed", "phone-msg", "phone-paused", "phone-ring", "phone-setting", "phone-sip", "phone", "portable-wifi-changes", "portable-wifi-off", "portable-wifi", "usb", "videocam-off", "videocam-switch", "videocam", "watch", "wifi-alt-2", "wifi-alt", "wifi-info", "wifi-lock", "wifi-off", "wifi-outline", "wifi"],
                'directional': ["arrow-left-bottom", "arrow-left", "arrow-merge", "arrow-missed", "arrow-right-top", "arrow-right", "arrow-split", "arrows", "caret-down-circle", "caret-down", "caret-left-circle", "caret-left", "caret-right-circle", "caret-right", "caret-up-circle", "caret-up", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "forward", "long-arrow-down", "long-arrow-left", "long-arrow-return", "long-arrow-right", "long-arrow-tab", "long-arrow-up", "rotate-ccw", "rotate-cw", "rotate-left", "rotate-right", "square-down", "square-right", "swap-alt", "swap-vertical-circle", "swap-vertical", "swap", "trending-down", "trending-flat", "trending-up", "unfold-less", "unfold-more"],
                'mapAliases': ["subway", "layers-off", "layers", "airplane", "money-box", "store-24", "flower-alt", "shopping-cart", "washing-machine", "library", "mall", "movie-alt", "label", "parking", "pizza", "ticket-star", "print", "store", "car-taxi", "map", "gps-dot", "nature-people", "nature", "navigation", "pin-account", "pin-assistant", "pin-drop", "pin-help", "pin-off", "pin", "traffic"],
                'dateAndTime': ["alarm-check", "alarm-off", "alarm-plus", "alarm-snooze", "alarm", "calendar-alt", "calendar-check", "calendar-close", "calendar-note", "calendar", "time-countdown", "time-interval", "time-restore-setting", "time-restore", "time", "timer-off", "timer"]
            }
        };
    }
});

/***/ }),

/***/ 2146:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-xl": "", "pt-0": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            _vm._l(_vm.icons, function(icons, iconHeading, index) {
              return _c(
                "div",
                { key: index },
                [
                  _c(
                    "app-card",
                    {
                      attrs: {
                        heading: _vm.$t("message." + iconHeading),
                        colClasses: "xl12 lg12 md12 sm12 xs12"
                      }
                    },
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "", "icon-box": "" } },
                        _vm._l(icons, function(icon, key) {
                          return _c(
                            "v-flex",
                            {
                              key: key,
                              attrs: { xs12: "", sm6: "", md4: "", lg3: "" }
                            },
                            [
                              _c("span", { staticClass: "icon-style" }, [
                                _c("i", {
                                  staticClass: "zmdi",
                                  class: "zmdi-" + icon
                                })
                              ]),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(icon))])
                            ]
                          )
                        })
                      )
                    ],
                    1
                  )
                ],
                1
              )
            })
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3da8654a", module.exports)
  }
}

/***/ })

});