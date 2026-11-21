import { A as e, At as t, B as n, C as r, Ct as i, D as a, Dt as o, Et as s, Ft as c, H as l, It as u, J as ee, K as te, L as ne, Lt as re, Mt as ie, Nt as ae, O as oe, Ot as se, P as d, Pt as f, R as ce, Rt as p, S as le, St as m, T as ue, Tt as de, U as fe, Ut as h, V as g, W as pe, Wt as _, Y as me, _ as he, a as ge, at as _e, b as ve, c as v, d as y, dt as ye, f as be, ft as b, g as xe, h as Se, ht as x, i as S, j as Ce, jt as we, k as Te, kt as Ee, l as C, m as w, mt as T, n as De, o as E, ot as Oe, p as ke, q as Ae, r as je, s as D, t as Me, u as O, ut as Ne, v as Pe, w as Fe, wt as k, x as A, y as Ie, z as Le, zt as j } from "./StarRating-DiIkJ0YR.js";
import { Fragment as M, createBlock as N, createCommentVNode as P, createElementBlock as F, createElementVNode as I, createTextVNode as L, createVNode as R, h as z, normalizeClass as Re, normalizeStyle as ze, openBlock as B, reactive as Be, ref as V, renderList as H, toDisplayString as U, unref as Ve, vModelText as W, withCtx as G, withDirectives as K, withModifiers as He } from "vue";
//#region src/gallery/ChoiceCardGalleryExample.vue
var Ue = { class: "choice-gallery-options" }, We = /*#__PURE__*/ _({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = V("First option"), n = V(!0), r = V(!0), i = V(!1), a = ["Centered icon", "Long caption wraps below the icon"], o = V(a[0]), s = ["First option", "Second option"];
		return (e, c) => (B(), F("article", null, [c[10] ||= I("h2", null, "ChoiceCard", -1), I("div", Ue, [
			(B(), F(M, null, H(s, (e) => R(h, {
				key: e,
				label: e,
				description: "Exclusive, optional selection",
				"model-value": t.value === e,
				"onUpdate:modelValue": (n) => t.value = n ? e : ""
			}, {
				icon: G(() => [...c[4] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [I("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, [
				"label",
				"model-value",
				"onUpdate:modelValue"
			])), 64)),
			R(h, {
				label: "Unavailable",
				description: "Disabled option",
				disabled: ""
			}),
			R(h, {
				label: "Compact",
				layout: "inline",
				description: "Inline choice",
				modelValue: n.value,
				"onUpdate:modelValue": c[0] ||= (e) => n.value = e
			}, {
				icon: G(() => [...c[5] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [I("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			(B(), F(M, null, H(a, (e) => R(h, {
				key: e,
				label: e,
				layout: "icon",
				"model-value": o.value === e,
				"onUpdate:modelValue": (t) => o.value = e
			}, {
				icon: G(() => [...c[6] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [I("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, [
				"label",
				"model-value",
				"onUpdate:modelValue"
			])), 64)),
			R(h, {
				label: "Unavailable icon choice",
				layout: "icon",
				disabled: ""
			}),
			R(h, {
				label: "Centered inline choice",
				layout: "inline",
				centered: "",
				"selection-indicator": "outline",
				modelValue: n.value,
				"onUpdate:modelValue": c[1] ||= (e) => n.value = e
			}, {
				icon: G(() => [...c[7] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [I("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			R(h, {
				label: "Compact icon choice",
				layout: "icon",
				centered: "",
				modelValue: r.value,
				"onUpdate:modelValue": c[2] ||= (e) => r.value = e,
				style: {
					"--choice-card-min-height": "72px",
					"--choice-card-padding": "6px 8px",
					"--choice-card-gap": "4px"
				}
			}, {
				icon: G(() => [...c[8] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [I("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			R(h, {
				label: "Outlined selection",
				layout: "icon",
				tinted: "",
				centered: "",
				"selection-indicator": "outline",
				color: "var(--success)",
				modelValue: i.value,
				"onUpdate:modelValue": c[3] ||= (e) => i.value = e,
				style: { "--choice-card-min-height": "88px" }
			}, {
				icon: G(() => [...c[9] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [I("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"])
		])]));
	}
}, [["__scopeId", "data-v-0276b94d"]]), Ge = { class: "blur-gallery-scene" }, Ke = { class: "blur-gallery-label" }, qe = /*#__PURE__*/ _({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = V(8);
		return (e, n) => (B(), F("article", null, [
			n[2] ||= I("h2", null, "BlurBackdrop", -1),
			R(A, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: G(() => [R(ve, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			I("div", Ge, [
				n[1] ||= I("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				R(j, { radius: Number(t.value) }, null, 8, ["radius"]),
				I("strong", Ke, "Sharp foreground · " + U(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-34aec14d"]]), Je = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = V(null), n = b(640), r = Be(y());
		function i() {
			r.start([
				{
					id: "welcome",
					title: "Знакомство",
					body: "Центральная карточка без цели."
				},
				{
					id: "target",
					title: "Выделенный элемент",
					body: "Подсветка следует за элементом при прокрутке и изменении окна.",
					target: () => t.value?.$el
				},
				{
					id: "missing",
					title: "Недоступная цель",
					body: "Ошибка шага предлагает повторить попытку или завершить обучение.",
					target: () => null
				}
			]);
		}
		return (e, a) => (B(), F(M, null, [R(w, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: G(() => [...a[0] ||= [L("Показать обучение", -1)]]),
			_: 1
		}, 512), R(be, {
			tour: r,
			mobile: Ve(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, q = { class: "drawer-gallery" }, J = { class: "drawer-gallery__actions" }, Ye = { class: "drawer-gallery__content" }, Y = ["onClick"], Xe = /*#__PURE__*/ _({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = V(!1), n = V(!1), r = V(!1), i = V(!1), a = V(!1);
		return (e, o) => (B(), F("div", q, [
			o[17] ||= I("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			I("div", J, [
				I("button", {
					type: "button",
					onClick: o[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				I("button", {
					type: "button",
					onClick: o[1] ||= (e) => r.value = !0
				}, "Embedded AppSidebar"),
				R(m, {
					modelValue: i.value,
					"onUpdate:modelValue": o[2] ||= (e) => i.value = e,
					label: "Swipe from edge to open navigation"
				}, null, 8, ["modelValue"]),
				R(m, {
					modelValue: a.value,
					"onUpdate:modelValue": o[3] ||= (e) => a.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			R(d, {
				modelValue: t.value,
				"onUpdate:modelValue": o[5] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": a.value
			}, {
				title: G(() => [...o[11] ||= [I("strong", null, "AppDrawer", -1)]]),
				footer: G(({ close: e }) => [I("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, Y)]),
				default: G(() => [I("div", Ye, [
					o[12] ||= I("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					I("button", {
						type: "button",
						onClick: o[4] ||= (e) => n.value = !0
					}, "Nested drawer"),
					(B(), F(M, null, H(24, (e) => I("p", { key: e }, "Example row " + U(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			R(d, {
				modelValue: n.value,
				"onUpdate:modelValue": o[6] ||= (e) => n.value = e,
				"aria-label": "Nested drawer",
				width: "min(360px, 90vw)",
				"z-index": 3100
			}, {
				title: G(() => [...o[13] ||= [I("strong", null, "Nested drawer", -1)]]),
				default: G(() => [o[14] ||= I("p", { class: "drawer-gallery__content" }, "Escape закрывает только верхний drawer; scroll остаётся заблокирован.", -1)]),
				_: 1
			}, 8, ["modelValue"]),
			R(d, {
				modelValue: r.value,
				"onUpdate:modelValue": o[10] ||= (e) => r.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-open": i.value,
				"swipe-to-close": a.value
			}, {
				default: G(() => [R(pe, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: G(() => [R(fe, {
						as: "div",
						label: "share-ui"
					}, {
						icon: G(() => [...o[15] ||= [L("◆", -1)]]),
						_: 1
					}), I("button", {
						type: "button",
						"aria-label": "Close navigation",
						onClick: o[7] ||= (e) => r.value = !1
					}, "×")]),
					account: G(() => [R(x, { title: "Account actions" }, {
						trigger: G(() => [R(Ae, {
							label: "Example account",
							expanded: ""
						})]),
						default: G(() => [R(T, null, {
							default: G(() => [...o[16] ||= [L("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: G(() => [
						R(l, { label: "Navigation" }),
						R(g, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[8] ||= (e) => r.value = !1
						}),
						R(g, {
							as: "button",
							label: "Components",
							onClick: o[9] ||= (e) => r.value = !1
						})
					]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"modelValue",
				"swipe-to-open",
				"swipe-to-close"
			])
		]));
	}
}, [["__scopeId", "data-v-d3b27ea5"]]), Ze = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = V("star"), n = V(!1), r = V([]), i = V(null), a = V(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => z("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => z("span", "●") }
		}], s = V([{
			value: "first",
			label: "Первый"
		}, {
			value: "second",
			label: "Второй"
		}]);
		function c(e) {
			let t = String(s.value.length);
			s.value.push({
				value: t,
				label: e
			}), r.value = [...r.value, t];
		}
		return (e, l) => (B(), F(M, null, [R(v, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: G(() => [
				R(O, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				R(O, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				R(O, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				R(O, {
					percent: 100,
					label: "Полное значение"
				}),
				R(C, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				R(C, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				R(D, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: G(() => [...l[8] ||= [L("✦", -1)]]),
					trailing: G(() => [...l[9] ||= [L("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				R(D, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				R(ge, {
					modelValue: r.value,
					"onUpdate:modelValue": l[2] ||= (e) => r.value = e,
					options: s.value,
					label: "Поиск и выбор",
					placeholder: "Поиск…",
					limit: 3,
					"allow-create": "",
					"create-label": "Добавить",
					onCreate: c
				}, null, 8, ["modelValue", "options"]),
				R(E, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				R(E, {
					options: [],
					label: "Пустой список"
				}),
				I("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: l[4] ||= (e) => a.value = !0,
					onMouseleave: l[5] ||= (e) => a.value = !1,
					onFocus: l[6] ||= (e) => a.value = !0,
					onBlur: l[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (B(), N(S, {
					key: 0,
					anchor: i.value
				}, {
					default: G(() => [...l[10] ||= [L("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : P("", !0)
			]),
			_: 1
		}), R(v, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: G(() => [...l[11] ||= [L("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Qe = { class: "avatar-examples" }, $e = /*#__PURE__*/ _({
	__name: "AvatarGalleryExample",
	setup(e) {
		let t = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%22160%22%3E%3Crect%20width%3D%2280%22%20height%3D%22160%22%20fill%3D%22slateblue%22%2F%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2235%22%20r%3D%2224%22%20fill%3D%22lavender%22%2F%3E%3C%2Fsvg%3E";
		return (e, n) => (B(), F(M, null, [n[2] ||= I("h2", null, "AvatarFrame", -1), I("div", Qe, [
			R(p, {
				src: t,
				size: 64,
				label: "Cropped portrait",
				position: "center top"
			}),
			R(p, {
				src: t,
				size: 48,
				fit: "contain",
				label: "Contained artwork"
			}),
			R(p, {
				size: 40,
				label: "Initial"
			}, {
				default: G(() => [...n[0] ||= [L("A", -1)]]),
				_: 1
			}),
			R(p, {
				src: "/unavailable-avatar.png",
				size: 32,
				label: "Unavailable image"
			}, {
				default: G(() => [...n[1] ||= [L("?", -1)]]),
				_: 1
			})
		])], 64));
	}
}, [["__scopeId", "data-v-b8f96491"]]), et = { class: "fit-example" }, X = { class: "fit-example__row" }, tt = /*#__PURE__*/ _({
	__name: "FitContentGalleryExample",
	setup(e) {
		let t = V(210);
		return (e, n) => (B(), F("div", et, [
			I("label", null, [n[1] ||= L("Available width ", -1), K(I("input", {
				"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
				type: "range",
				min: "70",
				max: "360"
			}, null, 512), [[
				W,
				t.value,
				void 0,
				{ number: !0 }
			]])]),
			I("div", {
				style: ze({ width: `${t.value}px` }),
				class: "fit-example__frame"
			}, [R(re, null, {
				default: G(() => [I("div", X, [(B(), F(M, null, H(6, (e) => I("strong", { key: e }, U(e), 1)), 64))])]),
				_: 1
			})], 4),
			n[2] ||= I("small", null, "Scales to 50%, then wraps. Nested content shares the outer scale.", -1)
		]));
	}
}, [["__scopeId", "data-v-c6543351"]]), nt = Object.freeze(/* @__PURE__ */ "AvatarFrame.FitContent.StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.ChoiceCard.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), Z = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), rt = { class: "share-component-gallery" }, it = { class: "share-component-gallery__header" }, at = { class: "share-component-gallery__eyebrow" }, ot = {
	class: "share-component-gallery__section",
	"data-share-gallery": "AvatarFrame"
}, st = {
	class: "share-component-gallery__section",
	"data-share-gallery": "FitContent"
}, ct = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, lt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "ChoiceCard"
}, ut = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, dt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, ft = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, pt = { class: "share-component-gallery__section" }, mt = { class: "share-component-gallery__grid" }, ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, gt = { class: "share-component-gallery__glass-surfaces" }, _t = { class: "share-component-gallery__tile-row" }, vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, yt = { class: "share-component-gallery__row" }, bt = { class: "share-component-gallery__row" }, xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, St = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, Ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, Tt = { class: "share-component-gallery__row" }, Et = { class: "share-component-gallery__row" }, Dt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Ot = { class: "share-component-gallery__section" }, kt = { class: "share-component-gallery__grid" }, At = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, jt = { class: "share-component-gallery__stack" }, Mt = { style: {
	background: "var(--surface-raised)",
	padding: "8px",
	"border-radius": "var(--r-md)"
} }, Nt = { class: "share-component-gallery__checkbox-row" }, Pt = { class: "share-component-gallery__checkbox-row" }, Ft = { class: "share-component-gallery__checkbox-row" }, It = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Lt = { class: "share-component-gallery__stack" }, Rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, zt = { class: "share-component-gallery__stack" }, Bt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Vt = ["d"], Ht = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Ut = ["d"], Wt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Gt = ["d"], Kt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, qt = { class: "share-component-gallery__slider" }, Jt = { class: "share-component-gallery__section" }, Yt = { class: "share-component-gallery__grid" }, Xt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Zt = { class: "share-component-gallery__form-grid" }, Qt = { class: "share-component-gallery__section" }, $t = { class: "share-component-gallery__grid" }, en = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, tn = { class: "share-component-gallery__stack" }, nn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, rn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, an = {
	"data-action-menu-size": "content",
	style: {
		display: "flex",
		gap: "8px"
	}
}, on = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, sn = { class: "share-component-gallery__section" }, cn = { class: "share-component-gallery__grid" }, ln = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, un = ["onMousedown"], dn = ["onMousedown"], fn = { class: "share-component-gallery__preview" }, pn = { class: "share-component-gallery__rich-node" }, mn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, hn = { class: "share-component-gallery__section" }, gn = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, _n = { class: "share-component-gallery__chrome" }, vn = { class: "share-component-gallery__section" }, yn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, bn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, xn = { class: "share-component-gallery__row" }, Q = /*#__PURE__*/ _({
	__name: "ComponentGallery",
	props: {
		title: {
			type: String,
			default: "Компоненты share-ui"
		},
		description: {
			type: String,
			default: "Единая интерактивная витрина публичных визуальных компонентов в теме текущего приложения."
		}
	},
	setup(re) {
		let d = nt.length, p = V(3), h = V(!0), _ = V(!0), ge = V(!1), v = V(!1), y = V(!0), be = V("md"), b = V("preview"), S = V("build"), C = [
			{
				key: "build",
				label: "Build"
			},
			{
				key: "disabled",
				label: "Unavailable",
				disabled: !0
			},
			{
				key: "settings",
				label: "Настройки освещения",
				divider: !0,
				dividerLabel: "Tools"
			}
		], E = V(62), D = V("rare"), O = V("#7c5ce2"), j = V("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), z = V(!0), W = V(!0), K = V(!1), Ue = V(null), Ge = V(null), Ke = V(null), q = V(!1), J = V(!1), Ye = V(!0), Y = V(!1), Qe = V(!1), et = V(!1), X = V(!1), Z = V(0), Q = V(!1), Sn = V(null), Cn = [
			{
				value: "sm",
				label: "S"
			},
			{
				value: "md",
				label: "M"
			},
			{
				value: "lg",
				label: "L"
			}
		], wn = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Tn = [
			{
				value: "common",
				label: "Обычный"
			},
			{
				value: "rare",
				label: "Редкий"
			},
			{
				value: "legendary",
				label: "Легендарный"
			}
		], En = [
			{
				key: "images",
				label: "Изображения",
				value: 268,
				color: "var(--accent)"
			},
			{
				key: "video",
				label: "Видео",
				value: 142,
				color: "var(--info)"
			},
			{
				key: "audio",
				label: "Аудио",
				value: 74,
				color: "var(--success)"
			}
		], $ = Be({
			date: "",
			name: "Новый элемент",
			count: 3,
			fraction: 1.25,
			type: "base",
			description: ""
		});
		function Dn(e) {
			return `${e} МБ`;
		}
		function On() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Be, V) => (B(), F("div", rt, [
			I("header", it, [I("div", null, [
				I("p", at, "share-ui · " + U(Ve(d)) + " компонентов", 1),
				I("h1", null, U(re.title), 1),
				I("p", null, U(re.description), 1)
			]), V[52] ||= I("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			I("section", ot, [R($e)]),
			I("section", st, [V[53] ||= I("h2", null, "FitContent", -1), R(tt)]),
			I("section", ct, [R(qe)]),
			I("section", lt, [R(We)]),
			I("section", ut, [
				R(Me, {
					modelValue: p.value,
					"onUpdate:modelValue": V[0] ||= (e) => p.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				R(Me, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				R(Me, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			I("section", dt, [R(Ze)]),
			I("section", ft, [V[54] ||= I("h2", null, "GuidedTour", -1), R(Je)]),
			I("section", pt, [R(s, {
				title: "Поверхности и действия",
				border: ""
			}), I("div", mt, [
				I("article", ht, [
					V[74] ||= I("h2", null, "BaseTile", -1),
					I("div", gt, [R(u, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: G(() => [...V[55] ||= [L("Glass frame", -1)]]),
						_: 1
					}), R(u, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: G(() => [...V[56] ||= [L("Glass interactive", -1)]]),
						_: 1
					})]),
					R(w, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: G(() => [...V[57] ||= [L("✦", -1)]]),
						_: 1
					}),
					R(w, {
						"icon-only": "",
						variant: "quiet",
						style: { "--action-button-icon-size": "36px" },
						"aria-label": "Компактное действие"
					}, {
						icon: G(() => [...V[58] ||= [L("✦", -1)]]),
						_: 1
					}),
					I("div", _t, [
						R(u, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [
								R(ae),
								V[59] ||= I("strong", null, "Акцентная плитка", -1),
								V[60] ||= I("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						R(u, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...V[61] ||= [I("strong", null, "Рамка", -1), I("span", null, "framed", -1)]]),
							_: 1
						}),
						R(u, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...V[62] ||= [I("strong", null, "Усиленная рамка", -1), I("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						R(u, {
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...V[63] ||= [I("strong", null, "Приподнятая поверхность", -1), I("span", null, "elevated", -1)]]),
							_: 1
						}),
						R(u, {
							surface: "popover",
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...V[64] ||= [I("strong", null, "Поверхность меню", -1), I("span", null, "surface=popover · elevated", -1)]]),
							_: 1
						}),
						R(u, {
							elevated: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...V[65] ||= [I("strong", null, "Тень с обводкой", -1), I("span", null, "elevated · outlined · interactive", -1)]]),
							_: 1
						}),
						R(u, {
							elevated: "",
							framed: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...V[66] ||= [I("strong", null, "Тень с рамкой", -1), I("span", null, "elevated · framed · interactive", -1)]]),
							_: 1
						}),
						R(f, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: V[1] ||= (e) => Z.value++
						}, {
							aside: G(() => [I("span", null, U(Z.value), 1)]),
							default: G(() => [V[67] ||= I("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						R(f, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...V[68] ||= [I("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						R(f, { title: "Только просмотр" }, {
							default: G(() => [...V[69] ||= [I("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						R(f, {
							title: "Редактирование по заголовку",
							"show-edit": "",
							"show-edit-icon": !1,
							"edit-label": "Редактировать",
							onEdit: V[2] ||= (e) => Z.value++
						}, {
							aside: G(() => [I("span", null, U(Z.value), 1)]),
							default: G(() => [V[70] ||= I("span", null, "Нажмите название", -1)]),
							_: 1
						}),
						R(f, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: G(() => [...V[71] ||= [I("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						R(f, null, {
							default: G(() => [...V[72] ||= [I("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						R(f, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...V[73] ||= [I("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						R(c, { title: "Общий заголовок" })
					])
				]),
				I("article", vt, [
					V[75] ||= I("h2", null, "Загрузка", -1),
					R(Se, { label: "Открываем раздел…" }),
					R(Se, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					R(Te, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					I("div", yt, [
						R(Te, {
							label: "Загрузка",
							size: "sm"
						}),
						R(Te, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						R(Te, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					I("div", bt, [R(xe, {
						width: "36px",
						height: "36px",
						round: ""
					}), R(xe, { width: "60%" })])
				]),
				I("article", xt, [
					V[76] ||= I("h2", null, "InlineEdit", -1),
					R(he, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					R(he, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					R(he, {
						"model-value": "draft",
						label: "Статус",
						options: [{
							value: "draft",
							label: "Черновик"
						}, {
							value: "ready",
							label: "Готово"
						}],
						"display-value": "Черновик"
					})
				]),
				I("article", St, [
					V[84] ||= I("h2", null, "TimelineGroup", -1),
					R(s, {
						title: "История",
						line: ""
					}, {
						actions: G(() => [...V[77] ||= [I("span", null, "2", -1)]]),
						_: 1
					}),
					R(De, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: G(() => [...V[78] ||= [I("strong", null, "Участник", -1)]]),
						default: G(() => [V[79] ||= I("strong", null, "Запись события", -1), V[80] ||= I("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					R(De, { color: "var(--success)" }, {
						identity: G(() => [...V[81] ||= [I("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: G(() => [R(A, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: G(() => [R(r, { value: "Черновик" })]),
							_: 1
						})]),
						default: G(() => [V[82] ||= I("strong", null, "Компактная запись", -1), V[83] ||= I("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				I("article", Ct, [
					V[88] ||= I("h2", null, "SectionList", -1),
					R(ie, { title: "Записи" }, {
						footer: G(() => [R(we, { label: "Добавить запись" })]),
						default: G(() => [V[85] ||= I("div", { style: { padding: "12px 0" } }, "Первая запись", -1), V[86] ||= I("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					R(ie, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: G(() => [...V[87] ||= [I("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), I("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				I("article", wt, [
					V[103] ||= I("h2", null, "Кнопки элементов", -1),
					I("div", Tt, [
						R(ke, {
							modelValue: h.value,
							"onUpdate:modelValue": V[3] ||= (e) => h.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: G(() => [...V[89] ||= [I("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [I("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}, 8, ["modelValue"]),
						R(ke, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: G(() => [...V[90] ||= [I("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [I("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}),
						R(ke, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: G(() => [...V[91] ||= [I("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [I("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						})
					]),
					R(s, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					R(s, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					I("div", Et, [
						R(w, null, {
							default: G(() => [...V[92] ||= [L("Основное действие", -1)]]),
							_: 1
						}),
						R(w, { variant: "secondary" }, {
							default: G(() => [...V[93] ||= [L("Вторичное", -1)]]),
							_: 1
						}),
						R(w, {
							"icon-only": "",
							variant: "secondary",
							"aria-label": "Цветное действие",
							style: {
								"--action-button-bg": "var(--surface-active)",
								"--action-button-fg": "var(--warning)",
								"--action-button-hover-bg": "color-mix(in srgb,var(--warning) 7%,var(--surface-active))",
								"--action-button-hover-fg": "var(--warning)"
							}
						}, {
							icon: G(() => [...V[94] ||= [L("✦", -1)]]),
							_: 1
						}),
						R(w, { variant: "quiet" }, {
							default: G(() => [...V[95] ||= [L("Тихое", -1)]]),
							_: 1
						}),
						R(w, { variant: "dashed" }, {
							default: G(() => [...V[96] ||= [L("Пунктирная рамка", -1)]]),
							_: 1
						}),
						R(w, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: G(() => [...V[97] ||= [L("✦", -1)]]),
							default: G(() => [V[98] ||= L("Действие", -1)]),
							_: 1
						}),
						R(w, {
							layout: "stacked",
							variant: "dashed",
							style: { "--action-button-height": "96px" }
						}, {
							icon: G(() => [...V[99] ||= [L("+", -1)]]),
							default: G(() => [V[100] ||= L("Добавить превью", -1)]),
							_: 1
						}),
						R(w, { disabled: "" }, {
							default: G(() => [...V[101] ||= [L("Недоступно", -1)]]),
							_: 1
						}),
						R(w, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: G(() => [...V[102] ||= [L("Загрузка", -1)]]),
							_: 1
						}),
						R(we, { label: "Добавить элемент" }),
						R(we, {
							label: "Добавить",
							variant: "icon"
						}),
						R(o, { label: "Удалить" }),
						R(o, {
							label: "Удалить",
							variant: "boxed"
						}),
						R(o, {
							label: "Удалить запись",
							icon: "trash"
						}),
						R(o, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						R(o, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				I("article", Dt, [V[104] ||= I("h2", null, "SegmentDonutChart", -1), R(de, {
					segments: En,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Dn
				})])
			])]),
			I("section", Ot, [R(s, {
				title: "Переключатели",
				border: ""
			}), I("div", kt, [
				I("article", At, [V[109] ||= I("h2", null, "Boolean controls", -1), I("div", jt, [
					R(m, {
						modelValue: _.value,
						"onUpdate:modelValue": V[4] ||= (e) => _.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					R(m, {
						modelValue: ge.value,
						"onUpdate:modelValue": V[5] ||= (e) => ge.value = e,
						label: "Обычная поверхность"
					}, null, 8, ["modelValue"]),
					I("div", Mt, [R(m, {
						modelValue: v.value,
						"onUpdate:modelValue": V[6] ||= (e) => v.value = e,
						surface: "raised",
						block: "",
						"track-placement": "end",
						label: "Приподнятая поверхность"
					}, {
						default: G(() => [...V[105] ||= [L(" Приподнятая поверхность — вся строка переключает значение ", -1)]]),
						_: 1
					}, 8, ["modelValue"])]),
					I("label", Nt, [R(Ee, {
						modelValue: y.value,
						"onUpdate:modelValue": V[7] ||= (e) => y.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), V[106] ||= L(" Выбрать элемент ", -1)]),
					I("label", Pt, [R(Ee, {
						modelValue: y.value,
						"onUpdate:modelValue": V[8] ||= (e) => y.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), V[107] ||= L(" Крупный выбор (24px) ", -1)]),
					I("label", Ft, [R(Ee, {
						"model-value": !1,
						indeterminate: "",
						size: 22,
						"hit-size": 48,
						label: "Частичный выбор"
					}), V[108] ||= L("Частичный выбор · touch 48", -1)])
				])]),
				I("article", It, [V[112] ||= I("h2", null, "Segmented controls", -1), I("div", Lt, [
					R(se, {
						modelValue: be.value,
						"onUpdate:modelValue": V[9] ||= (e) => be.value = e,
						options: Cn,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					R(i, {
						modelValue: b.value,
						"onUpdate:modelValue": V[10] ||= (e) => b.value = e,
						variant: "chips",
						tabs: wn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": G(({ tab: e }) => [R(w, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: G(() => [...V[110] ||= [L("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					R(i, {
						modelValue: b.value,
						"onUpdate:modelValue": V[11] ||= (e) => b.value = e,
						variant: "plain",
						tabs: wn,
						"aria-label": "Режим с собственной подложкой"
					}, {
						decoration: G(({ active: e }) => [I("span", {
							"aria-hidden": "true",
							style: ze({
								position: "absolute",
								inset: "2px",
								zIndex: -1,
								pointerEvents: "none",
								borderRadius: "8px",
								background: e ? "var(--surface-active)" : "var(--surface)"
							})
						}, null, 4)]),
						_: 1
					}, 8, ["modelValue"]),
					R(i, {
						modelValue: b.value,
						"onUpdate:modelValue": V[12] ||= (e) => b.value = e,
						tabs: wn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": G(({ tab: e }) => [R(w, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: G(() => [...V[111] ||= [L("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				I("article", Rt, [V[115] ||= I("h2", null, "IconNavigation", -1), I("div", zt, [
					R(k, {
						modelValue: S.value,
						"onUpdate:modelValue": V[13] ||= (e) => S.value = e,
						items: C,
						label: "Horizontal sections"
					}, {
						icon: G(({ item: e }) => [(B(), F("svg", Bt, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Vt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					R(k, {
						modelValue: S.value,
						"onUpdate:modelValue": V[14] ||= (e) => S.value = e,
						items: C,
						pill: "",
						"content-sized": "",
						"label-size": 12,
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections sized by caption"
					}, {
						icon: G(({ item: e }) => [(B(), F("svg", Ht, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Ut)]))]),
						_: 1
					}, 8, ["modelValue"]),
					R(k, {
						modelValue: S.value,
						"onUpdate:modelValue": V[15] ||= (e) => S.value = e,
						items: C,
						pill: "",
						layout: "inline",
						"icon-size": 28,
						height: 56,
						label: "Inline sections"
					}, {
						icon: G(() => [...V[113] ||= [I("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [I("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					R(k, {
						modelValue: S.value,
						"onUpdate:modelValue": V[16] ||= (e) => S.value = e,
						items: C,
						pill: "",
						layout: "compact",
						size: 44,
						height: 48,
						radius: "var(--r-md)",
						label: "Compact sections"
					}, {
						icon: G(() => [...V[114] ||= [I("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [I("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					R(k, {
						modelValue: S.value,
						"onUpdate:modelValue": V[17] ||= (e) => S.value = e,
						items: C,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: G(({ item: e }) => [(B(), F("svg", Wt, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Gt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				I("article", Kt, [V[116] ||= I("h2", null, "AppSlider", -1), I("div", qt, [R(t, {
					modelValue: E.value,
					"onUpdate:modelValue": V[18] ||= (e) => E.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), I("strong", null, U(E.value), 1)])])
			])]),
			I("section", Jt, [R(s, {
				title: "Формы",
				border: ""
			}), I("div", Yt, [I("article", Xt, [
				V[118] ||= I("h2", null, "Form primitives", -1),
				V[119] ||= I("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				I("div", Zt, [
					R(A, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: G(() => [R(r, {
							value: $.name,
							"onUpdate:value": V[19] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Дата",
						vertical: ""
					}, {
						default: G(() => [R(je, {
							modelValue: $.date,
							"onUpdate:modelValue": V[20] ||= (e) => $.date = e,
							locale: "ru-RU",
							placeholder: "Выберите дату",
							"aria-label": "Выбрать дату",
							"today-label": "Сегодня",
							"previous-label": "Предыдущий месяц",
							"next-label": "Следующий месяц",
							"month-label": "Месяц",
							"year-label": "Год",
							"clear-label": "Очистить",
							"allow-clear": ""
						}, null, 8, ["modelValue"]), R(je, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					R(A, {
						label: "Количество",
						vertical: ""
					}, {
						default: G(() => [R(ve, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: V[21] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: G(() => [R(ve, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: V[22] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Тип",
						vertical: ""
					}, {
						default: G(() => [R(Ie, {
							value: $.type,
							"onUpdate:value": V[23] ||= (e) => $.type = e
						}, {
							default: G(() => [...V[117] ||= [I("option", { value: "base" }, "Основной", -1), I("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Описание",
						vertical: ""
					}, {
						default: G(() => [R(Pe, {
							value: $.description,
							"onUpdate:value": V[24] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				R(Fe, {
					"submit-text": "Сохранить",
					onCancel: On
				})
			])])]),
			I("section", Qt, [R(s, {
				title: "Выбор значений и floating UI",
				border: ""
			}), I("div", $t, [
				I("article", en, [V[120] ||= I("h2", null, "Selectors", -1), I("div", tn, [
					R(_e, {
						modelValue: D.value,
						"onUpdate:modelValue": V[25] ||= (e) => D.value = e,
						options: Tn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					R(_e, {
						modelValue: D.value,
						"onUpdate:modelValue": V[26] ||= (e) => D.value = e,
						options: Tn,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					R(Oe, {
						modelValue: O.value,
						"onUpdate:modelValue": V[27] ||= (e) => O.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					R(Oe, {
						modelValue: O.value,
						"onUpdate:modelValue": V[28] ||= (e) => O.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				I("article", nn, [
					V[122] ||= I("h2", null, "BasePopover", -1),
					I("button", {
						ref_key: "popoverAnchor",
						ref: Ue,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[29] ||= (e) => K.value = !K.value
					}, " Открыть popover ", 512),
					R(ye, {
						open: K.value,
						anchor: Ue.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": V[30] ||= (e) => K.value = e
					}, {
						default: G(() => [...V[121] ||= [I("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				I("article", rn, [
					V[130] ||= I("h2", null, "ActionMenu", -1),
					R(x, { title: "Компактные действия" }, {
						default: G(({ close: e }) => [I("div", an, [(B(), F(M, null, H([
							"Открыть",
							"Изменить",
							"Удалить"
						], (t) => R(w, {
							key: t,
							layout: "stacked",
							variant: "secondary",
							onClick: e
						}, {
							icon: G(() => [...V[123] ||= [L("✦", -1)]]),
							default: G(() => [L(U(t), 1)]),
							_: 2
						}, 1032, ["onClick"])), 64))])]),
						_: 1
					}),
					R(x, {
						title: "Действия",
						heading: "Выбранная запись",
						width: 340,
						"follow-anchor": "",
						related: ""
					}, {
						default: G(() => [
							R(T, { tone: "accent" }, {
								default: G(() => [...V[124] ||= [L("Редактировать", -1)]]),
								_: 1
							}),
							R(Ne, { label: "Перемещение" }, {
								trigger: G(({ open: e }) => [R(T, {
									submenu: "",
									"submenu-open": e
								}, {
									default: G(() => [...V[125] ||= [L("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: G(() => [R(T, null, {
									default: G(() => [...V[126] ||= [L("В начало", -1)]]),
									_: 1
								}), R(T, null, {
									default: G(() => [...V[127] ||= [L("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							R(T, { tone: "danger" }, {
								default: G(() => [...V[128] ||= [L("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					I("button", {
						ref_key: "actionMenuAnchor",
						ref: Ge,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[31] ||= (e) => Ke.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					R(x, {
						ref_key: "anchoredActionMenu",
						ref: Ke,
						anchor: Ge.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: G(({ close: e }) => [R(T, { onClick: e }, {
							default: G(() => [...V[129] ||= [L("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				I("article", on, [V[133] ||= I("h2", null, "AccountMenu", -1), R(Ae, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: G(({ close: e }) => [R(T, { onClick: e }, {
						default: G(() => [...V[131] ||= [L("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), R(T, {
						tone: "danger",
						onClick: e
					}, {
						default: G(() => [...V[132] ||= [L("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			I("section", sn, [R(s, {
				title: "Редакторы и rich text",
				border: ""
			}), I("div", cn, [I("article", ln, [
				V[134] ||= I("h2", null, "Rich text", -1),
				R(ee, {
					ref: "richEditor",
					modelValue: j.value,
					"onUpdate:modelValue": V[32] ||= (e) => j.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: G(({ editor: e, insertRichNode: t }) => [I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: He((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, un), I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: He((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, dn)]),
					_: 1
				}, 8, ["modelValue"]),
				I("div", fn, [R(me, { html: j.value }, {
					node: G(({ node: e }) => [I("strong", pn, U(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), I("article", mn, [V[137] ||= I("h2", null, "Editor composition", -1), R(u, null, {
				default: G(() => [R(n, { title: "Параметры" }, {
					default: G(() => [R(ce, { title: "Основное" }, {
						default: G(() => [R(Le, { title: "Значение" }, {
							actions: G(() => [...V[135] ||= [I("span", null, "12", -1)]]),
							_: 1
						}), R(t, {
							modelValue: E.value,
							"onUpdate:modelValue": V[33] ||= (e) => E.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), R(ne, null, {
						default: G(() => [V[136] ||= L("Итого: ", -1), I("strong", null, U(E.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			I("section", hn, [R(s, {
				title: "Каркас приложения",
				border: ""
			}), I("article", gn, [
				V[143] ||= I("h2", null, "Navigation composition", -1),
				R(m, {
					modelValue: W.value,
					"onUpdate:modelValue": V[34] ||= (e) => W.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				I("div", _n, [R(te, {
					class: Re(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": z.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: G(() => [R(pe, {
						modelValue: z.value,
						"onUpdate:modelValue": V[35] ||= (e) => z.value = e,
						elevated: W.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: G(() => [R(fe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: G(() => [...V[138] ||= [I("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: G(() => [
							R(g, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: G(() => [...V[139] ||= [I("span", null, "⌂", -1)]]),
								_: 1
							}),
							R(l, { label: "Примеры" }),
							R(g, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: G(() => [...V[140] ||= [I("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: G(() => [...V[141] ||= [I("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: G(() => [V[142] ||= I("div", { class: "share-component-gallery__chrome-content" }, [
						I("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						I("strong", null, "AppShell + AppSidebar"),
						I("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			I("section", vn, [
				R(s, {
					title: "Оверлеи и morph",
					border: ""
				}),
				I("article", yn, [V[144] ||= I("h2", null, "AppDrawer + embedded navigation", -1), R(Xe)]),
				I("article", bn, [V[145] ||= I("h2", null, "Интерактивные примеры", -1), I("div", xn, [
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[36] ||= (e) => q.value = !0
					}, "AppModal"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[37] ||= (e) => {
							Y.value = !1, Ye.value = !0, J.value = !0;
						}
					}, "AppModalFrame"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[38] ||= (e) => {
							Y.value = !1, Ye.value = !1, J.value = !0;
						}
					}, "AppModalFrame без обводки"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[39] ||= (e) => {
							Y.value = !0, J.value = !0;
						}
					}, "AppModalFrame compact"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[40] ||= (e) => Qe.value = !0
					}, "ModalShell"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[41] ||= (e) => et.value = !0
					}, "ConfirmDialog"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[42] ||= (e) => X.value = !0
					}, "TextPromptDialog"),
					I("button", {
						ref_key: "morphOrigin",
						ref: Sn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[43] ||= (e) => Q.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			q.value ? (B(), N(Ce, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: V[44] ||= (e) => q.value = !1
			}, {
				default: G(() => [...V[146] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "AppModal"), I("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : P("", !0),
			J.value ? (B(), N(e, {
				key: 1,
				compact: Y.value,
				width: Y.value ? 360 : void 0,
				outlined: Ye.value,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: V[47] ||= (e) => J.value = !1
			}, {
				footer: G(() => [R(Fe, {
					onCancel: V[45] ||= (e) => J.value = !1,
					onSubmit: V[46] ||= (e) => J.value = !1
				})]),
				default: G(() => [V[147] ||= I("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			}, 8, [
				"compact",
				"width",
				"outlined"
			])) : P("", !0),
			R(a, {
				open: Qe.value,
				"aria-label": "Пример ModalShell",
				onClose: V[48] ||= (e) => Qe.value = !1
			}, {
				default: G(() => [...V[148] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "ModalShell"), I("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			R(oe, {
				open: et.value,
				"onUpdate:open": V[49] ||= (e) => et.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			R(le, {
				open: X.value,
				"onUpdate:open": V[50] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (B(), N(ue, {
				key: 2,
				"origin-el": Sn.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: V[51] ||= (e) => Q.value = !1
			}, {
				head: G(() => [...V[149] ||= [I("div", { class: "share-component-gallery__morph-head" }, [I("strong", null, "MorphSheet")], -1)]]),
				default: G(() => [V[150] ||= I("div", { class: "share-component-gallery__overlay-content" }, [I("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : P("", !0)
		]));
	}
}, [["__scopeId", "data-v-76dc7c84"]]);
//#endregion
export { Z as COMPONENT_GALLERY_ALIASES, nt as COMPONENT_GALLERY_COMPONENTS, Q as ComponentGallery };
