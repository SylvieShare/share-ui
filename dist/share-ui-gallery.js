import { A as e, At as t, B as n, Bt as r, C as i, Ct as a, Dt as o, E as s, Et as c, F as l, Ft as u, G as ee, Gt as d, H as f, It as te, J as ne, Lt as p, M as re, Mt as ie, Nt as ae, O as oe, Ot as m, Pt as se, R as ce, Rt as le, S as h, T as ue, Tt as g, U as de, V as fe, W as pe, Wt as _, X as me, Y as he, _ as ge, a as _e, b as ve, c as v, d as y, dt as ye, f as be, ft as xe, g as Se, gt as Ce, h as b, ht as x, i as we, j as Te, jt as Ee, k as De, kt as Oe, l as S, m as ke, n as Ae, o as C, ot as je, p as w, pt as T, q as Me, r as Ne, s as E, st as Pe, t as D, u as O, v as Fe, w as Ie, wt as Le, x as Re, y as ze, z as Be, zt as k } from "./PageReport-CJ2XecZR.js";
import { Fragment as A, createBlock as j, createCommentVNode as M, createElementBlock as N, createElementVNode as P, createTextVNode as F, createVNode as I, h as L, normalizeClass as Ve, normalizeStyle as He, openBlock as R, reactive as Ue, ref as z, renderList as B, toDisplayString as V, unref as We, vModelText as H, withCtx as U, withDirectives as Ge, withModifiers as Ke } from "vue";
//#region src/gallery/PageReportExample.vue
var W = "gallery:page-report", qe = {
	__name: "PageReportExample",
	setup(e) {
		let t = {
			requestEvent: W,
			globalShortcuts: !1,
			viewportPlatform: (e) => e < 640 ? "mobile" : "desktop",
			async renderCanvas(e, { width: t, height: n, backgroundColor: r }) {
				let i = document.createElement("canvas");
				i.width = t, i.height = n;
				let a = i.getContext("2d");
				return a.fillStyle = r, a.fillRect(0, 0, t, n), i;
			},
			async submit() {}
		};
		function n() {
			window.dispatchEvent(new Event(W));
		}
		return (e, r) => (R(), N(A, null, [
			I(b, { onClick: n }, {
				default: U(() => [...r[0] ||= [F("Report an issue", -1)]]),
				_: 1
			}),
			r[1] ||= P("p", null, "Choose this paragraph to see the report form.", -1),
			I(D, { options: t })
		], 64));
	}
}, Je = { class: "choice-gallery-options" }, Ye = /*#__PURE__*/ d({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = z("First option"), n = z(!0), r = z(!0), i = z(!1), a = ["Centered icon", "Long caption wraps below the icon"], o = z(a[0]), s = ["First option", "Second option"];
		return (e, c) => (R(), N("article", null, [c[10] ||= P("h2", null, "ChoiceCard", -1), P("div", Je, [
			(R(), N(A, null, B(s, (e) => I(_, {
				key: e,
				label: e,
				description: "Exclusive, optional selection",
				"model-value": t.value === e,
				"onUpdate:modelValue": (n) => t.value = n ? e : ""
			}, {
				icon: U(() => [...c[4] ||= [P("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [P("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, [
				"label",
				"model-value",
				"onUpdate:modelValue"
			])), 64)),
			I(_, {
				label: "Unavailable",
				description: "Disabled option",
				disabled: ""
			}),
			I(_, {
				label: "Compact",
				layout: "inline",
				description: "Inline choice",
				modelValue: n.value,
				"onUpdate:modelValue": c[0] ||= (e) => n.value = e
			}, {
				icon: U(() => [...c[5] ||= [P("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [P("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			(R(), N(A, null, B(a, (e) => I(_, {
				key: e,
				label: e,
				layout: "icon",
				"model-value": o.value === e,
				"onUpdate:modelValue": (t) => o.value = e
			}, {
				icon: U(() => [...c[6] ||= [P("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [P("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, [
				"label",
				"model-value",
				"onUpdate:modelValue"
			])), 64)),
			I(_, {
				label: "Unavailable icon choice",
				layout: "icon",
				disabled: ""
			}),
			I(_, {
				label: "Centered inline choice",
				layout: "inline",
				centered: "",
				"selection-indicator": "outline",
				modelValue: n.value,
				"onUpdate:modelValue": c[1] ||= (e) => n.value = e
			}, {
				icon: U(() => [...c[7] ||= [P("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [P("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			I(_, {
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
				icon: U(() => [...c[8] ||= [P("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [P("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			I(_, {
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
				icon: U(() => [...c[9] ||= [P("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [P("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"])
		])]));
	}
}, [["__scopeId", "data-v-0276b94d"]]), G = { class: "blur-gallery-scene" }, K = { class: "blur-gallery-label" }, Xe = /*#__PURE__*/ d({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = z(8);
		return (e, n) => (R(), N("article", null, [
			n[2] ||= P("h2", null, "BlurBackdrop", -1),
			I(h, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: U(() => [I(Re, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			P("div", G, [
				n[1] ||= P("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				I(r, { radius: Number(t.value) }, null, 8, ["radius"]),
				P("strong", K, "Sharp foreground · " + V(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-34aec14d"]]), Ze = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = z(null), n = T(640), r = Ue(be());
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
		return (e, a) => (R(), N(A, null, [I(b, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: U(() => [...a[0] ||= [F("Показать обучение", -1)]]),
			_: 1
		}, 512), I(w, {
			tour: r,
			mobile: We(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, q = { class: "drawer-gallery" }, J = { class: "drawer-gallery__actions" }, Y = { class: "drawer-gallery__content" }, X = ["onClick"], Qe = /*#__PURE__*/ d({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = z(!1), n = z(!1), r = z(!1), i = z(!1), o = z(!1);
		return (e, s) => (R(), N("div", q, [
			s[17] ||= P("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			P("div", J, [
				P("button", {
					type: "button",
					onClick: s[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				P("button", {
					type: "button",
					onClick: s[1] ||= (e) => r.value = !0
				}, "Embedded AppSidebar"),
				I(a, {
					modelValue: i.value,
					"onUpdate:modelValue": s[2] ||= (e) => i.value = e,
					label: "Swipe from edge to open navigation"
				}, null, 8, ["modelValue"]),
				I(a, {
					modelValue: o.value,
					"onUpdate:modelValue": s[3] ||= (e) => o.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			I(l, {
				modelValue: t.value,
				"onUpdate:modelValue": s[5] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": o.value
			}, {
				title: U(() => [...s[11] ||= [P("strong", null, "AppDrawer", -1)]]),
				footer: U(({ close: e }) => [P("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, X)]),
				default: U(() => [P("div", Y, [
					s[12] ||= P("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					P("button", {
						type: "button",
						onClick: s[4] ||= (e) => n.value = !0
					}, "Nested drawer"),
					(R(), N(A, null, B(24, (e) => P("p", { key: e }, "Example row " + V(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			I(l, {
				modelValue: n.value,
				"onUpdate:modelValue": s[6] ||= (e) => n.value = e,
				"aria-label": "Nested drawer",
				width: "min(360px, 90vw)",
				"z-index": 3100
			}, {
				title: U(() => [...s[13] ||= [P("strong", null, "Nested drawer", -1)]]),
				default: U(() => [s[14] ||= P("p", { class: "drawer-gallery__content" }, "Escape закрывает только верхний drawer; scroll остаётся заблокирован.", -1)]),
				_: 1
			}, 8, ["modelValue"]),
			I(l, {
				modelValue: r.value,
				"onUpdate:modelValue": s[10] ||= (e) => r.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-open": i.value,
				"swipe-to-close": o.value
			}, {
				default: U(() => [I(ee, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: U(() => [I(pe, {
						as: "div",
						label: "share-ui"
					}, {
						icon: U(() => [...s[15] ||= [F("◆", -1)]]),
						_: 1
					}), P("button", {
						type: "button",
						"aria-label": "Close navigation",
						onClick: s[7] ||= (e) => r.value = !1
					}, "×")]),
					account: U(() => [I(Ce, { title: "Account actions" }, {
						trigger: U(() => [I(ne, {
							label: "Example account",
							expanded: ""
						})]),
						default: U(() => [I(x, null, {
							default: U(() => [...s[16] ||= [F("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: U(() => [
						I(de, { label: "Navigation" }),
						I(f, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: s[8] ||= (e) => r.value = !1
						}),
						I(f, {
							as: "button",
							label: "Components",
							onClick: s[9] ||= (e) => r.value = !1
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
}, [["__scopeId", "data-v-d3b27ea5"]]), $e = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = z("star"), n = z(!1), r = z([]), i = z(null), a = z(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => L("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => L("span", "●") }
		}], s = z([{
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
		return (e, l) => (R(), N(A, null, [I(S, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: U(() => [
				I(y, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				I(y, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				I(y, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				I(y, {
					percent: 100,
					label: "Полное значение"
				}),
				I(O, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				I(O, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				I(v, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: U(() => [...l[8] ||= [F("✦", -1)]]),
					trailing: U(() => [...l[9] ||= [F("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				I(v, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				I(C, {
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
				I(E, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				I(E, {
					options: [],
					label: "Пустой список"
				}),
				P("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: l[4] ||= (e) => a.value = !0,
					onMouseleave: l[5] ||= (e) => a.value = !1,
					onFocus: l[6] ||= (e) => a.value = !0,
					onBlur: l[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (R(), j(_e, {
					key: 0,
					anchor: i.value
				}, {
					default: U(() => [...l[10] ||= [F("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : M("", !0)
			]),
			_: 1
		}), I(S, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: U(() => [...l[11] ||= [F("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, et = { class: "avatar-examples" }, tt = /*#__PURE__*/ d({
	__name: "AvatarGalleryExample",
	setup(e) {
		let t = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%22160%22%3E%3Crect%20width%3D%2280%22%20height%3D%22160%22%20fill%3D%22slateblue%22%2F%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2235%22%20r%3D%2224%22%20fill%3D%22lavender%22%2F%3E%3C%2Fsvg%3E";
		return (e, n) => (R(), N(A, null, [n[2] ||= P("h2", null, "AvatarFrame", -1), P("div", et, [
			I(k, {
				src: t,
				size: 64,
				label: "Cropped portrait",
				position: "center top"
			}),
			I(k, {
				src: t,
				size: 48,
				fit: "contain",
				label: "Contained artwork"
			}),
			I(k, {
				size: 40,
				label: "Initial"
			}, {
				default: U(() => [...n[0] ||= [F("A", -1)]]),
				_: 1
			}),
			I(k, {
				src: "/unavailable-avatar.png",
				size: 32,
				label: "Unavailable image"
			}, {
				default: U(() => [...n[1] ||= [F("?", -1)]]),
				_: 1
			})
		])], 64));
	}
}, [["__scopeId", "data-v-b8f96491"]]), Z = { class: "fit-example" }, Q = { class: "fit-example__row" }, nt = /*#__PURE__*/ d({
	__name: "FitContentGalleryExample",
	setup(e) {
		let t = z(210);
		return (e, n) => (R(), N("div", Z, [
			P("label", null, [n[1] ||= F("Available width ", -1), Ge(P("input", {
				"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
				type: "range",
				min: "70",
				max: "360"
			}, null, 512), [[
				H,
				t.value,
				void 0,
				{ number: !0 }
			]])]),
			P("div", {
				style: He({ width: `${t.value}px` }),
				class: "fit-example__frame"
			}, [I(le, null, {
				default: U(() => [P("div", Q, [(R(), N(A, null, B(6, (e) => P("strong", { key: e }, V(e), 1)), 64))])]),
				_: 1
			})], 4),
			n[2] ||= P("small", null, "Scales to 50%, then wraps. Nested content shares the outer scale.", -1)
		]));
	}
}, [["__scopeId", "data-v-c6543351"]]), rt = Object.freeze(/* @__PURE__ */ "AvatarFrame.FitContent.PageReport.StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.ChoiceCard.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), it = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), at = { class: "share-component-gallery" }, ot = { class: "share-component-gallery__header" }, st = { class: "share-component-gallery__eyebrow" }, ct = {
	class: "share-component-gallery__section",
	"data-share-gallery": "AvatarFrame"
}, lt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "PageReport"
}, ut = {
	class: "share-component-gallery__section",
	"data-share-gallery": "FitContent"
}, dt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, ft = {
	class: "share-component-gallery__section",
	"data-share-gallery": "ChoiceCard"
}, pt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, mt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, ht = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, gt = { class: "share-component-gallery__section" }, _t = { class: "share-component-gallery__grid" }, vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, yt = { class: "share-component-gallery__glass-surfaces" }, bt = { class: "share-component-gallery__tile-row" }, xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, St = { class: "share-component-gallery__row" }, Ct = { class: "share-component-gallery__row" }, wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, Tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, Et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, Ot = { class: "share-component-gallery__row" }, kt = { class: "share-component-gallery__row" }, At = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, jt = { class: "share-component-gallery__section" }, Mt = { class: "share-component-gallery__grid" }, Nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Pt = { class: "share-component-gallery__stack" }, Ft = { style: {
	background: "var(--surface-raised)",
	padding: "8px",
	"border-radius": "var(--r-md)"
} }, It = { class: "share-component-gallery__checkbox-row" }, Lt = { class: "share-component-gallery__checkbox-row" }, Rt = { class: "share-component-gallery__checkbox-row" }, zt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Bt = { class: "share-component-gallery__stack" }, Vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, Ht = { class: "share-component-gallery__stack" }, Ut = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Wt = ["d"], Gt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Kt = ["d"], qt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Jt = ["d"], Yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Xt = { class: "share-component-gallery__slider" }, Zt = { class: "share-component-gallery__section" }, Qt = { class: "share-component-gallery__grid" }, $t = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, en = { class: "share-component-gallery__form-grid" }, tn = { class: "share-component-gallery__section" }, nn = { class: "share-component-gallery__grid" }, rn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, an = { class: "share-component-gallery__stack" }, on = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, sn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, cn = {
	"data-action-menu-size": "content",
	style: {
		display: "flex",
		gap: "8px"
	}
}, ln = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, un = { class: "share-component-gallery__section" }, dn = { class: "share-component-gallery__grid" }, fn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, pn = ["onMousedown"], mn = ["onMousedown"], hn = { class: "share-component-gallery__preview" }, gn = { class: "share-component-gallery__rich-node" }, _n = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, vn = { class: "share-component-gallery__section" }, yn = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, bn = { class: "share-component-gallery__chrome" }, xn = { class: "share-component-gallery__section" }, Sn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, Cn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, wn = { class: "share-component-gallery__row" }, Tn = /*#__PURE__*/ d({
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
	setup(r) {
		let l = rt.length, d = z(3), le = z(!0), _ = z(!0), _e = z(!1), v = z(!1), y = z(!0), be = z("md"), S = z("preview"), C = z("build"), w = [
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
		], T = z(62), E = z("rare"), D = z("#7c5ce2"), O = z("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), k = z(!0), L = z(!0), H = z(!1), Ge = z(null), W = z(null), Je = z(null), G = z(!1), K = z(!1), q = z(!0), J = z(!1), Y = z(!1), X = z(!1), et = z(!1), Z = z(0), Q = z(!1), it = z(null), Tn = [
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
		], En = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Dn = [
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
		], On = [
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
		], $ = Ue({
			date: "",
			name: "Новый элемент",
			count: 3,
			fraction: 1.25,
			type: "base",
			description: ""
		});
		function kn(e) {
			return `${e} МБ`;
		}
		function An() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Ue, z) => (R(), N("div", at, [
			P("header", ot, [P("div", null, [
				P("p", st, "share-ui · " + V(We(l)) + " компонентов", 1),
				P("h1", null, V(r.title), 1),
				P("p", null, V(r.description), 1)
			]), z[52] ||= P("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			P("section", ct, [I(tt)]),
			P("section", lt, [I(qe)]),
			P("section", ut, [z[53] ||= P("h2", null, "FitContent", -1), I(nt)]),
			P("section", dt, [I(Xe)]),
			P("section", ft, [I(Ye)]),
			P("section", pt, [
				I(Ae, {
					modelValue: d.value,
					"onUpdate:modelValue": z[0] ||= (e) => d.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				I(Ae, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				I(Ae, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			P("section", mt, [I($e)]),
			P("section", ht, [z[54] ||= P("h2", null, "GuidedTour", -1), I(Ze)]),
			P("section", gt, [I(o, {
				title: "Поверхности и действия",
				border: ""
			}), P("div", _t, [
				P("article", vt, [
					z[74] ||= P("h2", null, "BaseTile", -1),
					P("div", yt, [I(p, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: U(() => [...z[55] ||= [F("Glass frame", -1)]]),
						_: 1
					}), I(p, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: U(() => [...z[56] ||= [F("Glass interactive", -1)]]),
						_: 1
					})]),
					I(b, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: U(() => [...z[57] ||= [F("✦", -1)]]),
						_: 1
					}),
					I(b, {
						"icon-only": "",
						variant: "quiet",
						style: { "--action-button-icon-size": "36px" },
						"aria-label": "Компактное действие"
					}, {
						icon: U(() => [...z[58] ||= [F("✦", -1)]]),
						_: 1
					}),
					P("div", bt, [
						I(p, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [
								I(se),
								z[59] ||= P("strong", null, "Акцентная плитка", -1),
								z[60] ||= P("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						I(p, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...z[61] ||= [P("strong", null, "Рамка", -1), P("span", null, "framed", -1)]]),
							_: 1
						}),
						I(p, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...z[62] ||= [P("strong", null, "Усиленная рамка", -1), P("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						I(p, {
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...z[63] ||= [P("strong", null, "Приподнятая поверхность", -1), P("span", null, "elevated", -1)]]),
							_: 1
						}),
						I(p, {
							surface: "popover",
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...z[64] ||= [P("strong", null, "Поверхность меню", -1), P("span", null, "surface=popover · elevated", -1)]]),
							_: 1
						}),
						I(p, {
							elevated: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...z[65] ||= [P("strong", null, "Тень с обводкой", -1), P("span", null, "elevated · outlined · interactive", -1)]]),
							_: 1
						}),
						I(p, {
							elevated: "",
							framed: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...z[66] ||= [P("strong", null, "Тень с рамкой", -1), P("span", null, "elevated · framed · interactive", -1)]]),
							_: 1
						}),
						I(u, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: z[1] ||= (e) => Z.value++
						}, {
							aside: U(() => [P("span", null, V(Z.value), 1)]),
							default: U(() => [z[67] ||= P("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						I(u, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: U(() => [...z[68] ||= [P("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						I(u, { title: "Только просмотр" }, {
							default: U(() => [...z[69] ||= [P("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						I(u, {
							title: "Редактирование по заголовку",
							"show-edit": "",
							"show-edit-icon": !1,
							"edit-label": "Редактировать",
							onEdit: z[2] ||= (e) => Z.value++
						}, {
							aside: U(() => [P("span", null, V(Z.value), 1)]),
							default: U(() => [z[70] ||= P("span", null, "Нажмите название", -1)]),
							_: 1
						}),
						I(u, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: U(() => [...z[71] ||= [P("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						I(u, null, {
							default: U(() => [...z[72] ||= [P("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						I(u, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: U(() => [...z[73] ||= [P("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						I(te, { title: "Общий заголовок" })
					])
				]),
				P("article", xt, [
					z[75] ||= P("h2", null, "Загрузка", -1),
					I(Se, { label: "Открываем раздел…" }),
					I(Se, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					I(e, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					P("div", St, [
						I(e, {
							label: "Загрузка",
							size: "sm"
						}),
						I(e, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						I(e, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					P("div", Ct, [I(ge, {
						width: "36px",
						height: "36px",
						round: ""
					}), I(ge, { width: "60%" })])
				]),
				P("article", wt, [
					z[76] ||= P("h2", null, "InlineEdit", -1),
					I(Fe, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					I(Fe, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					I(Fe, {
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
				P("article", Tt, [
					z[84] ||= P("h2", null, "TimelineGroup", -1),
					I(o, {
						title: "История",
						line: ""
					}, {
						actions: U(() => [...z[77] ||= [P("span", null, "2", -1)]]),
						_: 1
					}),
					I(Ne, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: U(() => [...z[78] ||= [P("strong", null, "Участник", -1)]]),
						default: U(() => [z[79] ||= P("strong", null, "Запись события", -1), z[80] ||= P("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					I(Ne, { color: "var(--success)" }, {
						identity: U(() => [...z[81] ||= [P("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: U(() => [I(h, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: U(() => [I(Ie, { value: "Черновик" })]),
							_: 1
						})]),
						default: U(() => [z[82] ||= P("strong", null, "Компактная запись", -1), z[83] ||= P("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				P("article", Et, [
					z[88] ||= P("h2", null, "SectionList", -1),
					I(ae, { title: "Записи" }, {
						footer: U(() => [I(ie, { label: "Добавить запись" })]),
						default: U(() => [z[85] ||= P("div", { style: { padding: "12px 0" } }, "Первая запись", -1), z[86] ||= P("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					I(ae, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: U(() => [...z[87] ||= [P("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), P("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				P("article", Dt, [
					z[103] ||= P("h2", null, "Кнопки элементов", -1),
					P("div", Ot, [
						I(ke, {
							modelValue: le.value,
							"onUpdate:modelValue": z[3] ||= (e) => le.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: U(() => [...z[89] ||= [P("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [P("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}, 8, ["modelValue"]),
						I(ke, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: U(() => [...z[90] ||= [P("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [P("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}),
						I(ke, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: U(() => [...z[91] ||= [P("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [P("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						})
					]),
					I(o, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					I(o, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					P("div", kt, [
						I(b, null, {
							default: U(() => [...z[92] ||= [F("Основное действие", -1)]]),
							_: 1
						}),
						I(b, { variant: "secondary" }, {
							default: U(() => [...z[93] ||= [F("Вторичное", -1)]]),
							_: 1
						}),
						I(b, {
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
							icon: U(() => [...z[94] ||= [F("✦", -1)]]),
							_: 1
						}),
						I(b, { variant: "quiet" }, {
							default: U(() => [...z[95] ||= [F("Тихое", -1)]]),
							_: 1
						}),
						I(b, { variant: "dashed" }, {
							default: U(() => [...z[96] ||= [F("Пунктирная рамка", -1)]]),
							_: 1
						}),
						I(b, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: U(() => [...z[97] ||= [F("✦", -1)]]),
							default: U(() => [z[98] ||= F("Действие", -1)]),
							_: 1
						}),
						I(b, {
							layout: "stacked",
							variant: "dashed",
							style: { "--action-button-height": "96px" }
						}, {
							icon: U(() => [...z[99] ||= [F("+", -1)]]),
							default: U(() => [z[100] ||= F("Добавить превью", -1)]),
							_: 1
						}),
						I(b, { disabled: "" }, {
							default: U(() => [...z[101] ||= [F("Недоступно", -1)]]),
							_: 1
						}),
						I(b, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: U(() => [...z[102] ||= [F("Загрузка", -1)]]),
							_: 1
						}),
						I(ie, { label: "Добавить элемент" }),
						I(ie, {
							label: "Добавить",
							variant: "icon"
						}),
						I(m, { label: "Удалить" }),
						I(m, {
							label: "Удалить",
							variant: "boxed"
						}),
						I(m, {
							label: "Удалить запись",
							icon: "trash"
						}),
						I(m, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						I(m, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				P("article", At, [z[104] ||= P("h2", null, "SegmentDonutChart", -1), I(c, {
					segments: On,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": kn
				})])
			])]),
			P("section", jt, [I(o, {
				title: "Переключатели",
				border: ""
			}), P("div", Mt, [
				P("article", Nt, [z[109] ||= P("h2", null, "Boolean controls", -1), P("div", Pt, [
					I(a, {
						modelValue: _.value,
						"onUpdate:modelValue": z[4] ||= (e) => _.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					I(a, {
						modelValue: _e.value,
						"onUpdate:modelValue": z[5] ||= (e) => _e.value = e,
						label: "Обычная поверхность"
					}, null, 8, ["modelValue"]),
					P("div", Ft, [I(a, {
						modelValue: v.value,
						"onUpdate:modelValue": z[6] ||= (e) => v.value = e,
						surface: "raised",
						block: "",
						"track-placement": "end",
						label: "Приподнятая поверхность"
					}, {
						default: U(() => [...z[105] ||= [F(" Приподнятая поверхность — вся строка переключает значение ", -1)]]),
						_: 1
					}, 8, ["modelValue"])]),
					P("label", It, [I(t, {
						modelValue: y.value,
						"onUpdate:modelValue": z[7] ||= (e) => y.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), z[106] ||= F(" Выбрать элемент ", -1)]),
					P("label", Lt, [I(t, {
						modelValue: y.value,
						"onUpdate:modelValue": z[8] ||= (e) => y.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), z[107] ||= F(" Крупный выбор (24px) ", -1)]),
					P("label", Rt, [I(t, {
						"model-value": !1,
						indeterminate: "",
						size: 22,
						"hit-size": 48,
						label: "Частичный выбор"
					}), z[108] ||= F("Частичный выбор · touch 48", -1)])
				])]),
				P("article", zt, [z[112] ||= P("h2", null, "Segmented controls", -1), P("div", Bt, [
					I(Oe, {
						modelValue: be.value,
						"onUpdate:modelValue": z[9] ||= (e) => be.value = e,
						options: Tn,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					I(Le, {
						modelValue: S.value,
						"onUpdate:modelValue": z[10] ||= (e) => S.value = e,
						variant: "chips",
						tabs: En,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": U(({ tab: e }) => [I(b, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: U(() => [...z[110] ||= [F("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					I(Le, {
						modelValue: S.value,
						"onUpdate:modelValue": z[11] ||= (e) => S.value = e,
						variant: "plain",
						tabs: En,
						"aria-label": "Режим с собственной подложкой"
					}, {
						decoration: U(({ active: e }) => [P("span", {
							"aria-hidden": "true",
							style: He({
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
					I(Le, {
						modelValue: S.value,
						"onUpdate:modelValue": z[12] ||= (e) => S.value = e,
						tabs: En,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": U(({ tab: e }) => [I(b, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: U(() => [...z[111] ||= [F("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				P("article", Vt, [z[115] ||= P("h2", null, "IconNavigation", -1), P("div", Ht, [
					I(g, {
						modelValue: C.value,
						"onUpdate:modelValue": z[13] ||= (e) => C.value = e,
						items: w,
						label: "Horizontal sections"
					}, {
						icon: U(({ item: e }) => [(R(), N("svg", Ut, [P("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Wt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					I(g, {
						modelValue: C.value,
						"onUpdate:modelValue": z[14] ||= (e) => C.value = e,
						items: w,
						pill: "",
						"content-sized": "",
						"label-size": 12,
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections sized by caption"
					}, {
						icon: U(({ item: e }) => [(R(), N("svg", Gt, [P("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Kt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					I(g, {
						modelValue: C.value,
						"onUpdate:modelValue": z[15] ||= (e) => C.value = e,
						items: w,
						pill: "",
						layout: "inline",
						"icon-size": 28,
						height: 56,
						label: "Inline sections"
					}, {
						icon: U(() => [...z[113] ||= [P("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [P("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					I(g, {
						modelValue: C.value,
						"onUpdate:modelValue": z[16] ||= (e) => C.value = e,
						items: w,
						pill: "",
						layout: "compact",
						size: 44,
						height: 48,
						radius: "var(--r-md)",
						label: "Compact sections"
					}, {
						icon: U(() => [...z[114] ||= [P("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [P("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					I(g, {
						modelValue: C.value,
						"onUpdate:modelValue": z[17] ||= (e) => C.value = e,
						items: w,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: U(({ item: e }) => [(R(), N("svg", qt, [P("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Jt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				P("article", Yt, [z[116] ||= P("h2", null, "AppSlider", -1), P("div", Xt, [I(Ee, {
					modelValue: T.value,
					"onUpdate:modelValue": z[18] ||= (e) => T.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), P("strong", null, V(T.value), 1)])])
			])]),
			P("section", Zt, [I(o, {
				title: "Формы",
				border: ""
			}), P("div", Qt, [P("article", $t, [
				z[118] ||= P("h2", null, "Form primitives", -1),
				z[119] ||= P("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				P("div", en, [
					I(h, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: U(() => [I(Ie, {
							value: $.name,
							"onUpdate:value": z[19] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					I(h, {
						label: "Дата",
						vertical: ""
					}, {
						default: U(() => [I(we, {
							modelValue: $.date,
							"onUpdate:modelValue": z[20] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), I(we, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					I(h, {
						label: "Количество",
						vertical: ""
					}, {
						default: U(() => [I(Re, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: z[21] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					I(h, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: U(() => [I(Re, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: z[22] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					I(h, {
						label: "Тип",
						vertical: ""
					}, {
						default: U(() => [I(ve, {
							value: $.type,
							"onUpdate:value": z[23] ||= (e) => $.type = e
						}, {
							default: U(() => [...z[117] ||= [P("option", { value: "base" }, "Основной", -1), P("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					I(h, {
						label: "Описание",
						vertical: ""
					}, {
						default: U(() => [I(ze, {
							value: $.description,
							"onUpdate:value": z[24] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				I(ue, {
					"submit-text": "Сохранить",
					onCancel: An
				})
			])])]),
			P("section", tn, [I(o, {
				title: "Выбор значений и floating UI",
				border: ""
			}), P("div", nn, [
				P("article", rn, [z[120] ||= P("h2", null, "Selectors", -1), P("div", an, [
					I(je, {
						modelValue: E.value,
						"onUpdate:modelValue": z[25] ||= (e) => E.value = e,
						options: Dn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					I(je, {
						modelValue: E.value,
						"onUpdate:modelValue": z[26] ||= (e) => E.value = e,
						options: Dn,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					I(Pe, {
						modelValue: D.value,
						"onUpdate:modelValue": z[27] ||= (e) => D.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					I(Pe, {
						modelValue: D.value,
						"onUpdate:modelValue": z[28] ||= (e) => D.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				P("article", on, [
					z[122] ||= P("h2", null, "BasePopover", -1),
					P("button", {
						ref_key: "popoverAnchor",
						ref: Ge,
						type: "button",
						class: "share-component-gallery__button",
						onClick: z[29] ||= (e) => H.value = !H.value
					}, " Открыть popover ", 512),
					I(xe, {
						open: H.value,
						anchor: Ge.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": z[30] ||= (e) => H.value = e
					}, {
						default: U(() => [...z[121] ||= [P("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				P("article", sn, [
					z[130] ||= P("h2", null, "ActionMenu", -1),
					I(Ce, { title: "Компактные действия" }, {
						default: U(({ close: e }) => [P("div", cn, [(R(), N(A, null, B([
							"Открыть",
							"Изменить",
							"Удалить"
						], (t) => I(b, {
							key: t,
							layout: "stacked",
							variant: "secondary",
							onClick: e
						}, {
							icon: U(() => [...z[123] ||= [F("✦", -1)]]),
							default: U(() => [F(V(t), 1)]),
							_: 2
						}, 1032, ["onClick"])), 64))])]),
						_: 1
					}),
					I(Ce, {
						title: "Действия",
						heading: "Выбранная запись",
						width: 340,
						"follow-anchor": "",
						related: ""
					}, {
						default: U(() => [
							I(x, { tone: "accent" }, {
								default: U(() => [...z[124] ||= [F("Редактировать", -1)]]),
								_: 1
							}),
							I(ye, { label: "Перемещение" }, {
								trigger: U(({ open: e }) => [I(x, {
									submenu: "",
									"submenu-open": e
								}, {
									default: U(() => [...z[125] ||= [F("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: U(() => [I(x, null, {
									default: U(() => [...z[126] ||= [F("В начало", -1)]]),
									_: 1
								}), I(x, null, {
									default: U(() => [...z[127] ||= [F("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							I(x, { tone: "danger" }, {
								default: U(() => [...z[128] ||= [F("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					P("button", {
						ref_key: "actionMenuAnchor",
						ref: W,
						type: "button",
						class: "share-component-gallery__button",
						onClick: z[31] ||= (e) => Je.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					I(Ce, {
						ref_key: "anchoredActionMenu",
						ref: Je,
						anchor: W.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: U(({ close: e }) => [I(x, { onClick: e }, {
							default: U(() => [...z[129] ||= [F("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				P("article", ln, [z[133] ||= P("h2", null, "AccountMenu", -1), I(ne, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: U(({ close: e }) => [I(x, { onClick: e }, {
						default: U(() => [...z[131] ||= [F("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), I(x, {
						tone: "danger",
						onClick: e
					}, {
						default: U(() => [...z[132] ||= [F("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			P("section", un, [I(o, {
				title: "Редакторы и rich text",
				border: ""
			}), P("div", dn, [P("article", fn, [
				z[134] ||= P("h2", null, "Rich text", -1),
				I(he, {
					ref: "richEditor",
					modelValue: O.value,
					"onUpdate:modelValue": z[32] ||= (e) => O.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: U(({ editor: e, insertRichNode: t }) => [P("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ke((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, pn), P("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ke((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, mn)]),
					_: 1
				}, 8, ["modelValue"]),
				P("div", hn, [I(me, { html: O.value }, {
					node: U(({ node: e }) => [P("strong", gn, V(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), P("article", _n, [z[137] ||= P("h2", null, "Editor composition", -1), I(p, null, {
				default: U(() => [I(fe, { title: "Параметры" }, {
					default: U(() => [I(Be, { title: "Основное" }, {
						default: U(() => [I(n, { title: "Значение" }, {
							actions: U(() => [...z[135] ||= [P("span", null, "12", -1)]]),
							_: 1
						}), I(Ee, {
							modelValue: T.value,
							"onUpdate:modelValue": z[33] ||= (e) => T.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), I(ce, null, {
						default: U(() => [z[136] ||= F("Итого: ", -1), P("strong", null, V(T.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			P("section", vn, [I(o, {
				title: "Каркас приложения",
				border: ""
			}), P("article", yn, [
				z[143] ||= P("h2", null, "Navigation composition", -1),
				I(a, {
					modelValue: L.value,
					"onUpdate:modelValue": z[34] ||= (e) => L.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				P("div", bn, [I(Me, {
					class: Ve(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": k.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: U(() => [I(ee, {
						modelValue: k.value,
						"onUpdate:modelValue": z[35] ||= (e) => k.value = e,
						elevated: L.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: U(() => [I(pe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: U(() => [...z[138] ||= [P("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: U(() => [
							I(f, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: U(() => [...z[139] ||= [P("span", null, "⌂", -1)]]),
								_: 1
							}),
							I(de, { label: "Примеры" }),
							I(f, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: U(() => [...z[140] ||= [P("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: U(() => [...z[141] ||= [P("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: U(() => [z[142] ||= P("div", { class: "share-component-gallery__chrome-content" }, [
						P("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						P("strong", null, "AppShell + AppSidebar"),
						P("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			P("section", xn, [
				I(o, {
					title: "Оверлеи и morph",
					border: ""
				}),
				P("article", Sn, [z[144] ||= P("h2", null, "AppDrawer + embedded navigation", -1), I(Qe)]),
				P("article", Cn, [z[145] ||= P("h2", null, "Интерактивные примеры", -1), P("div", wn, [
					P("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: z[36] ||= (e) => G.value = !0
					}, "AppModal"),
					P("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: z[37] ||= (e) => {
							J.value = !1, q.value = !0, K.value = !0;
						}
					}, "AppModalFrame"),
					P("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: z[38] ||= (e) => {
							J.value = !1, q.value = !1, K.value = !0;
						}
					}, "AppModalFrame без обводки"),
					P("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: z[39] ||= (e) => {
							J.value = !0, K.value = !0;
						}
					}, "AppModalFrame compact"),
					P("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: z[40] ||= (e) => Y.value = !0
					}, "ModalShell"),
					P("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: z[41] ||= (e) => X.value = !0
					}, "ConfirmDialog"),
					P("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: z[42] ||= (e) => et.value = !0
					}, "TextPromptDialog"),
					P("button", {
						ref_key: "morphOrigin",
						ref: it,
						type: "button",
						class: "share-component-gallery__button",
						onClick: z[43] ||= (e) => Q.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			G.value ? (R(), j(re, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: z[44] ||= (e) => G.value = !1
			}, {
				default: U(() => [...z[146] ||= [P("div", { class: "share-component-gallery__overlay-content" }, [P("h2", null, "AppModal"), P("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : M("", !0),
			K.value ? (R(), j(Te, {
				key: 1,
				compact: J.value,
				width: J.value ? 360 : void 0,
				outlined: q.value,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: z[47] ||= (e) => K.value = !1
			}, {
				footer: U(() => [I(ue, {
					onCancel: z[45] ||= (e) => K.value = !1,
					onSubmit: z[46] ||= (e) => K.value = !1
				})]),
				default: U(() => [z[147] ||= P("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			}, 8, [
				"compact",
				"width",
				"outlined"
			])) : M("", !0),
			I(oe, {
				open: Y.value,
				"aria-label": "Пример ModalShell",
				onClose: z[48] ||= (e) => Y.value = !1
			}, {
				default: U(() => [...z[148] ||= [P("div", { class: "share-component-gallery__overlay-content" }, [P("h2", null, "ModalShell"), P("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			I(De, {
				open: X.value,
				"onUpdate:open": z[49] ||= (e) => X.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			I(i, {
				open: et.value,
				"onUpdate:open": z[50] ||= (e) => et.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (R(), j(s, {
				key: 2,
				"origin-el": it.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: z[51] ||= (e) => Q.value = !1
			}, {
				head: U(() => [...z[149] ||= [P("div", { class: "share-component-gallery__morph-head" }, [P("strong", null, "MorphSheet")], -1)]]),
				default: U(() => [z[150] ||= P("div", { class: "share-component-gallery__overlay-content" }, [P("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : M("", !0)
		]));
	}
}, [["__scopeId", "data-v-e3e251d3"]]);
//#endregion
export { it as COMPONENT_GALLERY_ALIASES, rt as COMPONENT_GALLERY_COMPONENTS, Tn as ComponentGallery };
