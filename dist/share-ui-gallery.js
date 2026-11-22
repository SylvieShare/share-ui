import { A as e, At as t, B as n, Bt as r, C as i, Dt as a, E as o, F as s, Ft as c, G as l, H as ee, Ht as te, It as ne, J as re, Jt as u, K as ie, Lt as ae, M as oe, Mt as d, Nt as se, O as ce, Ot as le, Pt as ue, Rt as de, S as f, T as fe, U as p, Ut as m, V as pe, Vt as h, W as me, Wt as he, X as ge, Y as _e, Yt as g, Z as ve, _ as ye, _t as be, a as _, b as xe, bt as v, c as y, d as b, dt as Se, f as x, g as Ce, gt as we, h as S, ht as Te, i as Ee, j as De, jt as C, k as Oe, kt as w, l as T, m as ke, n as Ae, o as E, p as D, r as je, s as O, st as Me, t as k, u as A, v as Ne, w as Pe, x as Fe, y as Ie, yt as j, z as Le, zt as M } from "./PageReport-DblJBEY7.js";
import { Fragment as N, createBlock as P, createCommentVNode as F, createElementBlock as I, createElementVNode as L, createTextVNode as R, createVNode as z, h as B, normalizeClass as Re, normalizeStyle as ze, openBlock as V, reactive as Be, ref as H, renderList as U, toDisplayString as W, unref as Ve, vModelText as G, withCtx as K, withDirectives as He, withModifiers as Ue } from "vue";
//#region src/gallery/PageReportExample.vue
var q = "gallery:page-report", We = {
	__name: "PageReportExample",
	setup(e) {
		let t = {
			requestEvent: q,
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
			window.dispatchEvent(new Event(q));
		}
		return (e, r) => (V(), I(N, null, [
			z(S, { onClick: n }, {
				default: K(() => [...r[0] ||= [R("Report an issue", -1)]]),
				_: 1
			}),
			r[1] ||= L("p", null, "Choose this paragraph to see the report form.", -1),
			z(k, { options: t })
		], 64));
	}
}, Ge = { class: "choice-gallery-options" }, Ke = /*#__PURE__*/ g({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = H("First option"), n = H(!0), r = H(!0), i = H(!1), a = ["Centered icon", "Long caption wraps below the icon"], o = H(a[0]), s = ["First option", "Second option"];
		return (e, c) => (V(), I("article", null, [c[10] ||= L("h2", null, "ChoiceCard", -1), L("div", Ge, [
			(V(), I(N, null, U(s, (e) => z(u, {
				key: e,
				label: e,
				description: "Exclusive, optional selection",
				"model-value": t.value === e,
				"onUpdate:modelValue": (n) => t.value = n ? e : ""
			}, {
				icon: K(() => [...c[4] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [L("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, [
				"label",
				"model-value",
				"onUpdate:modelValue"
			])), 64)),
			z(u, {
				label: "Unavailable",
				description: "Disabled option",
				disabled: ""
			}),
			z(u, {
				label: "Compact",
				layout: "inline",
				description: "Inline choice",
				modelValue: n.value,
				"onUpdate:modelValue": c[0] ||= (e) => n.value = e
			}, {
				icon: K(() => [...c[5] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [L("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			(V(), I(N, null, U(a, (e) => z(u, {
				key: e,
				label: e,
				layout: "icon",
				"model-value": o.value === e,
				"onUpdate:modelValue": (t) => o.value = e
			}, {
				icon: K(() => [...c[6] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [L("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, [
				"label",
				"model-value",
				"onUpdate:modelValue"
			])), 64)),
			z(u, {
				label: "Unavailable icon choice",
				layout: "icon",
				disabled: ""
			}),
			z(u, {
				label: "Centered inline choice",
				layout: "inline",
				centered: "",
				"selection-indicator": "outline",
				modelValue: n.value,
				"onUpdate:modelValue": c[1] ||= (e) => n.value = e
			}, {
				icon: K(() => [...c[7] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [L("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			z(u, {
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
				icon: K(() => [...c[8] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [L("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			z(u, {
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
				icon: K(() => [...c[9] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [L("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"])
		])]));
	}
}, [["__scopeId", "data-v-0276b94d"]]), J = { class: "blur-gallery-scene" }, Y = { class: "blur-gallery-label" }, qe = /*#__PURE__*/ g({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = H(8);
		return (e, n) => (V(), I("article", null, [
			n[2] ||= L("h2", null, "BlurBackdrop", -1),
			z(f, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: K(() => [z(Fe, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			L("div", J, [
				n[1] ||= L("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				z(he, { radius: Number(t.value) }, null, 8, ["radius"]),
				L("strong", Y, "Sharp foreground · " + W(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-34aec14d"]]), Je = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = H(null), n = be(640), r = Be(x());
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
		return (e, a) => (V(), I(N, null, [z(S, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: K(() => [...a[0] ||= [R("Показать обучение", -1)]]),
			_: 1
		}, 512), z(D, {
			tour: r,
			mobile: Ve(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, X = { class: "drawer-gallery" }, Z = { class: "drawer-gallery__actions" }, Ye = { class: "drawer-gallery__content" }, Xe = ["onClick"], Ze = /*#__PURE__*/ g({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = H(!1), n = H(!1), r = H(!1), i = H(!1), o = H(!1);
		return (e, c) => (V(), I("div", X, [
			c[17] ||= L("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			L("div", Z, [
				L("button", {
					type: "button",
					onClick: c[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				L("button", {
					type: "button",
					onClick: c[1] ||= (e) => r.value = !0
				}, "Embedded AppSidebar"),
				z(a, {
					modelValue: i.value,
					"onUpdate:modelValue": c[2] ||= (e) => i.value = e,
					label: "Swipe from edge to open navigation"
				}, null, 8, ["modelValue"]),
				z(a, {
					modelValue: o.value,
					"onUpdate:modelValue": c[3] ||= (e) => o.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			z(s, {
				modelValue: t.value,
				"onUpdate:modelValue": c[5] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": o.value
			}, {
				title: K(() => [...c[11] ||= [L("strong", null, "AppDrawer", -1)]]),
				footer: K(({ close: e }) => [L("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, Xe)]),
				default: K(() => [L("div", Ye, [
					c[12] ||= L("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					L("button", {
						type: "button",
						onClick: c[4] ||= (e) => n.value = !0
					}, "Nested drawer"),
					(V(), I(N, null, U(24, (e) => L("p", { key: e }, "Example row " + W(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			z(s, {
				modelValue: n.value,
				"onUpdate:modelValue": c[6] ||= (e) => n.value = e,
				"aria-label": "Nested drawer",
				width: "min(360px, 90vw)",
				"z-index": 3100
			}, {
				title: K(() => [...c[13] ||= [L("strong", null, "Nested drawer", -1)]]),
				default: K(() => [c[14] ||= L("p", { class: "drawer-gallery__content" }, "Escape закрывает только верхний drawer; scroll остаётся заблокирован.", -1)]),
				_: 1
			}, 8, ["modelValue"]),
			z(s, {
				modelValue: r.value,
				"onUpdate:modelValue": c[10] ||= (e) => r.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-open": i.value,
				"swipe-to-close": o.value
			}, {
				default: K(() => [z(ie, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: K(() => [z(l, {
						as: "div",
						label: "share-ui"
					}, {
						icon: K(() => [...c[15] ||= [R("◆", -1)]]),
						_: 1
					}), L("button", {
						type: "button",
						"aria-label": "Close navigation",
						onClick: c[7] ||= (e) => r.value = !1
					}, "×")]),
					account: K(() => [z(v, { title: "Account actions" }, {
						trigger: K(() => [z(_e, {
							label: "Example account",
							expanded: ""
						})]),
						default: K(() => [z(j, null, {
							default: K(() => [...c[16] ||= [R("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: K(() => [
						z(me, { label: "Navigation" }),
						z(p, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: c[8] ||= (e) => r.value = !1
						}),
						z(p, {
							as: "button",
							label: "Components",
							onClick: c[9] ||= (e) => r.value = !1
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
}, [["__scopeId", "data-v-d3b27ea5"]]), Qe = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = H("star"), n = H(!1), r = H([]), i = H(null), a = H(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => B("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => B("span", "●") }
		}], s = H([{
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
		return (e, l) => (V(), I(N, null, [z(T, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: K(() => [
				z(b, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				z(b, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				z(b, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				z(b, {
					percent: 100,
					label: "Полное значение"
				}),
				z(A, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				z(A, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				z(y, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: K(() => [...l[8] ||= [R("✦", -1)]]),
					trailing: K(() => [...l[9] ||= [R("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				z(y, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				z(E, {
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
				z(O, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				z(O, {
					options: [],
					label: "Пустой список"
				}),
				L("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: l[4] ||= (e) => a.value = !0,
					onMouseleave: l[5] ||= (e) => a.value = !1,
					onFocus: l[6] ||= (e) => a.value = !0,
					onBlur: l[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (V(), P(_, {
					key: 0,
					anchor: i.value
				}, {
					default: K(() => [...l[10] ||= [R("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : F("", !0)
			]),
			_: 1
		}), z(T, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: K(() => [...l[11] ||= [R("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, $e = { class: "avatar-examples" }, et = /*#__PURE__*/ g({
	__name: "AvatarGalleryExample",
	setup(e) {
		let t = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%22160%22%3E%3Crect%20width%3D%2280%22%20height%3D%22160%22%20fill%3D%22slateblue%22%2F%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2235%22%20r%3D%2224%22%20fill%3D%22lavender%22%2F%3E%3C%2Fsvg%3E";
		return (e, n) => (V(), I(N, null, [n[2] ||= L("h2", null, "AvatarFrame", -1), L("div", $e, [
			z(m, {
				src: t,
				size: 64,
				label: "Cropped portrait",
				position: "center top"
			}),
			z(m, {
				src: t,
				size: 48,
				fit: "contain",
				label: "Contained artwork"
			}),
			z(m, {
				size: 40,
				label: "Initial"
			}, {
				default: K(() => [...n[0] ||= [R("A", -1)]]),
				_: 1
			}),
			z(m, {
				src: "/unavailable-avatar.png",
				size: 32,
				label: "Unavailable image"
			}, {
				default: K(() => [...n[1] ||= [R("?", -1)]]),
				_: 1
			})
		])], 64));
	}
}, [["__scopeId", "data-v-b8f96491"]]), Q = { class: "fit-example" }, tt = { class: "fit-example__row" }, nt = /*#__PURE__*/ g({
	__name: "FitContentGalleryExample",
	setup(e) {
		let t = H(210);
		return (e, n) => (V(), I("div", Q, [
			L("label", null, [n[1] ||= R("Available width ", -1), He(L("input", {
				"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
				type: "range",
				min: "70",
				max: "360"
			}, null, 512), [[
				G,
				t.value,
				void 0,
				{ number: !0 }
			]])]),
			L("div", {
				style: ze({ width: `${t.value}px` }),
				class: "fit-example__frame"
			}, [z(te, null, {
				default: K(() => [L("div", tt, [(V(), I(N, null, U(6, (e) => L("strong", { key: e }, W(e), 1)), 64))])]),
				_: 1
			})], 4),
			n[2] ||= L("small", null, "Scales to 50%, then wraps. Nested content shares the outer scale.", -1)
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
}, wn = { class: "share-component-gallery__row" }, Tn = /*#__PURE__*/ g({
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
	setup(s) {
		let te = rt.length, u = H(3), m = H(!0), he = H(!0), g = H(!1), be = H(!1), _ = H(!0), y = H("md"), b = H("preview"), x = H("build"), T = [
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
		], E = H(62), D = H("rare"), O = H("#7c5ce2"), k = H("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), A = H(!0), B = H(!0), G = H(!1), He = H(null), q = H(null), Ge = H(null), J = H(!1), Y = H(!1), X = H(!0), Z = H(!1), Ye = H(!1), Xe = H(!1), $e = H(!1), Q = H(0), tt = H(!1), it = H(null), Tn = [
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
		], $ = Be({
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
		return (Be, H) => (V(), I("div", at, [
			L("header", ot, [L("div", null, [
				L("p", st, "share-ui · " + W(Ve(te)) + " компонентов", 1),
				L("h1", null, W(s.title), 1),
				L("p", null, W(s.description), 1)
			]), H[52] ||= L("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			L("section", ct, [z(et)]),
			L("section", lt, [z(We)]),
			L("section", ut, [H[53] ||= L("h2", null, "FitContent", -1), z(nt)]),
			L("section", dt, [z(qe)]),
			L("section", ft, [z(Ke)]),
			L("section", pt, [
				z(Ae, {
					modelValue: u.value,
					"onUpdate:modelValue": H[0] ||= (e) => u.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				z(Ae, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				z(Ae, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			L("section", mt, [z(Qe)]),
			L("section", ht, [H[54] ||= L("h2", null, "GuidedTour", -1), z(Je)]),
			L("section", gt, [z(C, {
				title: "Поверхности и действия",
				border: ""
			}), L("div", _t, [
				L("article", vt, [
					H[74] ||= L("h2", null, "BaseTile", -1),
					L("div", yt, [z(h, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: K(() => [...H[55] ||= [R("Glass frame", -1)]]),
						_: 1
					}), z(h, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: K(() => [...H[56] ||= [R("Glass interactive", -1)]]),
						_: 1
					})]),
					z(S, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: K(() => [...H[57] ||= [R("✦", -1)]]),
						_: 1
					}),
					z(S, {
						"icon-only": "",
						variant: "quiet",
						style: { "--action-button-icon-size": "36px" },
						"aria-label": "Компактное действие"
					}, {
						icon: K(() => [...H[58] ||= [R("✦", -1)]]),
						_: 1
					}),
					L("div", bt, [
						z(h, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [
								z(de),
								H[59] ||= L("strong", null, "Акцентная плитка", -1),
								H[60] ||= L("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						z(h, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[61] ||= [L("strong", null, "Рамка", -1), L("span", null, "framed", -1)]]),
							_: 1
						}),
						z(h, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[62] ||= [L("strong", null, "Усиленная рамка", -1), L("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						z(h, {
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[63] ||= [L("strong", null, "Приподнятая поверхность", -1), L("span", null, "elevated", -1)]]),
							_: 1
						}),
						z(h, {
							surface: "popover",
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[64] ||= [L("strong", null, "Поверхность меню", -1), L("span", null, "surface=popover · elevated", -1)]]),
							_: 1
						}),
						z(h, {
							elevated: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[65] ||= [L("strong", null, "Тень с обводкой", -1), L("span", null, "elevated · outlined · interactive", -1)]]),
							_: 1
						}),
						z(h, {
							elevated: "",
							framed: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[66] ||= [L("strong", null, "Тень с рамкой", -1), L("span", null, "elevated · framed · interactive", -1)]]),
							_: 1
						}),
						z(M, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: H[1] ||= (e) => Q.value++
						}, {
							aside: K(() => [L("span", null, W(Q.value), 1)]),
							default: K(() => [H[67] ||= L("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						z(M, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: K(() => [...H[68] ||= [L("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						z(M, { title: "Только просмотр" }, {
							default: K(() => [...H[69] ||= [L("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						z(M, {
							title: "Редактирование по заголовку",
							"show-edit": "",
							"show-edit-icon": !1,
							"edit-label": "Редактировать",
							onEdit: H[2] ||= (e) => Q.value++
						}, {
							aside: K(() => [L("span", null, W(Q.value), 1)]),
							default: K(() => [H[70] ||= L("span", null, "Нажмите название", -1)]),
							_: 1
						}),
						z(M, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: K(() => [...H[71] ||= [L("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						z(M, null, {
							default: K(() => [...H[72] ||= [L("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						z(M, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: K(() => [...H[73] ||= [L("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						z(r, { title: "Общий заголовок" })
					])
				]),
				L("article", xt, [
					H[75] ||= L("h2", null, "Загрузка", -1),
					z(Ce, { label: "Открываем раздел…" }),
					z(Ce, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					z(e, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					L("div", St, [
						z(e, {
							label: "Загрузка",
							size: "sm"
						}),
						z(e, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						z(e, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					L("div", Ct, [z(ye, {
						width: "36px",
						height: "36px",
						round: ""
					}), z(ye, { width: "60%" })])
				]),
				L("article", wt, [
					H[76] ||= L("h2", null, "InlineEdit", -1),
					z(Ne, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					z(Ne, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					z(Ne, {
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
				L("article", Tt, [
					H[84] ||= L("h2", null, "TimelineGroup", -1),
					z(C, {
						title: "История",
						line: ""
					}, {
						actions: K(() => [...H[77] ||= [L("span", null, "2", -1)]]),
						_: 1
					}),
					z(je, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: K(() => [...H[78] ||= [L("strong", null, "Участник", -1)]]),
						default: K(() => [H[79] ||= L("strong", null, "Запись события", -1), H[80] ||= L("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					z(je, { color: "var(--success)" }, {
						identity: K(() => [...H[81] ||= [L("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: K(() => [z(f, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: K(() => [z(Pe, { value: "Черновик" })]),
							_: 1
						})]),
						default: K(() => [H[82] ||= L("strong", null, "Компактная запись", -1), H[83] ||= L("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				L("article", Et, [
					H[88] ||= L("h2", null, "SectionList", -1),
					z(ae, { title: "Записи" }, {
						footer: K(() => [z(ne, { label: "Добавить запись" })]),
						default: K(() => [H[85] ||= L("div", { style: { padding: "12px 0" } }, "Первая запись", -1), H[86] ||= L("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					z(ae, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: K(() => [...H[87] ||= [L("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), L("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				L("article", Dt, [
					H[103] ||= L("h2", null, "Кнопки элементов", -1),
					L("div", Ot, [
						z(ke, {
							modelValue: m.value,
							"onUpdate:modelValue": H[3] ||= (e) => m.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: K(() => [...H[89] ||= [L("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [L("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}, 8, ["modelValue"]),
						z(ke, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: K(() => [...H[90] ||= [L("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [L("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}),
						z(ke, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: K(() => [...H[91] ||= [L("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [L("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						})
					]),
					z(C, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					z(C, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					L("div", kt, [
						z(S, null, {
							default: K(() => [...H[92] ||= [R("Основное действие", -1)]]),
							_: 1
						}),
						z(S, { variant: "secondary" }, {
							default: K(() => [...H[93] ||= [R("Вторичное", -1)]]),
							_: 1
						}),
						z(S, {
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
							icon: K(() => [...H[94] ||= [R("✦", -1)]]),
							_: 1
						}),
						z(S, { variant: "quiet" }, {
							default: K(() => [...H[95] ||= [R("Тихое", -1)]]),
							_: 1
						}),
						z(S, { variant: "dashed" }, {
							default: K(() => [...H[96] ||= [R("Пунктирная рамка", -1)]]),
							_: 1
						}),
						z(S, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: K(() => [...H[97] ||= [R("✦", -1)]]),
							default: K(() => [H[98] ||= R("Действие", -1)]),
							_: 1
						}),
						z(S, {
							layout: "stacked",
							variant: "dashed",
							style: { "--action-button-height": "96px" }
						}, {
							icon: K(() => [...H[99] ||= [R("+", -1)]]),
							default: K(() => [H[100] ||= R("Добавить превью", -1)]),
							_: 1
						}),
						z(S, { disabled: "" }, {
							default: K(() => [...H[101] ||= [R("Недоступно", -1)]]),
							_: 1
						}),
						z(S, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: K(() => [...H[102] ||= [R("Загрузка", -1)]]),
							_: 1
						}),
						z(ne, { label: "Добавить элемент" }),
						z(ne, {
							label: "Добавить",
							variant: "icon"
						}),
						z(d, { label: "Удалить" }),
						z(d, {
							label: "Удалить",
							variant: "boxed"
						}),
						z(d, {
							label: "Удалить запись",
							icon: "trash"
						}),
						z(d, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						z(d, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				L("article", At, [H[104] ||= L("h2", null, "SegmentDonutChart", -1), z(t, {
					segments: On,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": kn
				})])
			])]),
			L("section", jt, [z(C, {
				title: "Переключатели",
				border: ""
			}), L("div", Mt, [
				L("article", Nt, [H[109] ||= L("h2", null, "Boolean controls", -1), L("div", Pt, [
					z(a, {
						modelValue: he.value,
						"onUpdate:modelValue": H[4] ||= (e) => he.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					z(a, {
						modelValue: g.value,
						"onUpdate:modelValue": H[5] ||= (e) => g.value = e,
						label: "Обычная поверхность"
					}, null, 8, ["modelValue"]),
					L("div", Ft, [z(a, {
						modelValue: be.value,
						"onUpdate:modelValue": H[6] ||= (e) => be.value = e,
						surface: "raised",
						block: "",
						"track-placement": "end",
						label: "Приподнятая поверхность"
					}, {
						default: K(() => [...H[105] ||= [R(" Приподнятая поверхность — вся строка переключает значение ", -1)]]),
						_: 1
					}, 8, ["modelValue"])]),
					L("label", It, [z(ue, {
						modelValue: _.value,
						"onUpdate:modelValue": H[7] ||= (e) => _.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), H[106] ||= R(" Выбрать элемент ", -1)]),
					L("label", Lt, [z(ue, {
						modelValue: _.value,
						"onUpdate:modelValue": H[8] ||= (e) => _.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), H[107] ||= R(" Крупный выбор (24px) ", -1)]),
					L("label", Rt, [z(ue, {
						"model-value": !1,
						indeterminate: "",
						size: 22,
						"hit-size": 48,
						label: "Частичный выбор"
					}), H[108] ||= R("Частичный выбор · touch 48", -1)])
				])]),
				L("article", zt, [H[112] ||= L("h2", null, "Segmented controls", -1), L("div", Bt, [
					z(se, {
						modelValue: y.value,
						"onUpdate:modelValue": H[9] ||= (e) => y.value = e,
						options: Tn,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					z(le, {
						modelValue: b.value,
						"onUpdate:modelValue": H[10] ||= (e) => b.value = e,
						variant: "chips",
						tabs: En,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": K(({ tab: e }) => [z(S, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: K(() => [...H[110] ||= [R("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					z(le, {
						modelValue: b.value,
						"onUpdate:modelValue": H[11] ||= (e) => b.value = e,
						variant: "plain",
						tabs: En,
						"aria-label": "Режим с собственной подложкой"
					}, {
						decoration: K(({ active: e }) => [L("span", {
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
					z(le, {
						modelValue: b.value,
						"onUpdate:modelValue": H[12] ||= (e) => b.value = e,
						tabs: En,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": K(({ tab: e }) => [z(S, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: K(() => [...H[111] ||= [R("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				L("article", Vt, [H[115] ||= L("h2", null, "IconNavigation", -1), L("div", Ht, [
					z(w, {
						modelValue: x.value,
						"onUpdate:modelValue": H[13] ||= (e) => x.value = e,
						items: T,
						label: "Horizontal sections"
					}, {
						icon: K(({ item: e }) => [(V(), I("svg", Ut, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Wt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					z(w, {
						modelValue: x.value,
						"onUpdate:modelValue": H[14] ||= (e) => x.value = e,
						items: T,
						pill: "",
						"content-sized": "",
						"label-size": 12,
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections sized by caption"
					}, {
						icon: K(({ item: e }) => [(V(), I("svg", Gt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Kt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					z(w, {
						modelValue: x.value,
						"onUpdate:modelValue": H[15] ||= (e) => x.value = e,
						items: T,
						pill: "",
						layout: "inline",
						"icon-size": 28,
						height: 56,
						label: "Inline sections"
					}, {
						icon: K(() => [...H[113] ||= [L("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [L("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					z(w, {
						modelValue: x.value,
						"onUpdate:modelValue": H[16] ||= (e) => x.value = e,
						items: T,
						pill: "",
						layout: "compact",
						size: 44,
						height: 48,
						radius: "var(--r-md)",
						label: "Compact sections"
					}, {
						icon: K(() => [...H[114] ||= [L("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [L("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					z(w, {
						modelValue: x.value,
						"onUpdate:modelValue": H[17] ||= (e) => x.value = e,
						items: T,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: K(({ item: e }) => [(V(), I("svg", qt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Jt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				L("article", Yt, [H[116] ||= L("h2", null, "AppSlider", -1), L("div", Xt, [z(c, {
					modelValue: E.value,
					"onUpdate:modelValue": H[18] ||= (e) => E.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), L("strong", null, W(E.value), 1)])])
			])]),
			L("section", Zt, [z(C, {
				title: "Формы",
				border: ""
			}), L("div", Qt, [L("article", $t, [
				H[118] ||= L("h2", null, "Form primitives", -1),
				H[119] ||= L("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				L("div", en, [
					z(f, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: K(() => [z(Pe, {
							value: $.name,
							"onUpdate:value": H[19] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(f, {
						label: "Дата",
						vertical: ""
					}, {
						default: K(() => [z(Ee, {
							modelValue: $.date,
							"onUpdate:modelValue": H[20] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), z(Ee, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					z(f, {
						label: "Количество",
						vertical: ""
					}, {
						default: K(() => [z(Fe, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: H[21] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(f, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: K(() => [z(Fe, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: H[22] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(f, {
						label: "Тип",
						vertical: ""
					}, {
						default: K(() => [z(xe, {
							value: $.type,
							"onUpdate:value": H[23] ||= (e) => $.type = e
						}, {
							default: K(() => [...H[117] ||= [L("option", { value: "base" }, "Основной", -1), L("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					z(f, {
						label: "Описание",
						vertical: ""
					}, {
						default: K(() => [z(Ie, {
							value: $.description,
							"onUpdate:value": H[24] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				z(fe, {
					"submit-text": "Сохранить",
					onCancel: An
				})
			])])]),
			L("section", tn, [z(C, {
				title: "Выбор значений и floating UI",
				border: ""
			}), L("div", nn, [
				L("article", rn, [H[120] ||= L("h2", null, "Selectors", -1), L("div", an, [
					z(Me, {
						modelValue: D.value,
						"onUpdate:modelValue": H[25] ||= (e) => D.value = e,
						options: Dn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					z(Me, {
						modelValue: D.value,
						"onUpdate:modelValue": H[26] ||= (e) => D.value = e,
						options: Dn,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					z(Se, {
						modelValue: O.value,
						"onUpdate:modelValue": H[27] ||= (e) => O.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					z(Se, {
						modelValue: O.value,
						"onUpdate:modelValue": H[28] ||= (e) => O.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				L("article", on, [
					H[122] ||= L("h2", null, "BasePopover", -1),
					L("button", {
						ref_key: "popoverAnchor",
						ref: He,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[29] ||= (e) => G.value = !G.value
					}, " Открыть popover ", 512),
					z(we, {
						open: G.value,
						anchor: He.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": H[30] ||= (e) => G.value = e
					}, {
						default: K(() => [...H[121] ||= [L("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				L("article", sn, [
					H[132] ||= L("h2", null, "ActionMenu", -1),
					z(v, { title: "Компактные действия" }, {
						default: K(({ close: e }) => [L("div", cn, [(V(), I(N, null, U([
							"Открыть",
							"Изменить",
							"Удалить"
						], (t) => z(S, {
							key: t,
							layout: "stacked",
							variant: "secondary",
							onClick: e
						}, {
							icon: K(() => [...H[123] ||= [R("✦", -1)]]),
							default: K(() => [R(W(t), 1)]),
							_: 2
						}, 1032, ["onClick"])), 64))])]),
						_: 1
					}),
					z(v, {
						title: "Действия",
						heading: "Выбранная запись",
						width: 340,
						"follow-anchor": "",
						related: ""
					}, {
						default: K(() => [
							z(j, { size: "large" }, {
								suffix: K(() => [...H[124] ||= [R("↵", -1)]]),
								default: K(() => [H[125] ||= R(" Открыть ", -1)]),
								_: 1
							}),
							z(j, { tone: "accent" }, {
								default: K(() => [...H[126] ||= [R("Редактировать", -1)]]),
								_: 1
							}),
							z(Te, { label: "Перемещение" }, {
								trigger: K(({ open: e }) => [z(j, {
									submenu: "",
									"submenu-open": e
								}, {
									default: K(() => [...H[127] ||= [R("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: K(() => [z(j, null, {
									default: K(() => [...H[128] ||= [R("В начало", -1)]]),
									_: 1
								}), z(j, null, {
									default: K(() => [...H[129] ||= [R("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							z(j, { tone: "danger" }, {
								default: K(() => [...H[130] ||= [R("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					L("button", {
						ref_key: "actionMenuAnchor",
						ref: q,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[31] ||= (e) => Ge.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					z(v, {
						ref_key: "anchoredActionMenu",
						ref: Ge,
						anchor: q.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: K(({ close: e }) => [z(j, { onClick: e }, {
							default: K(() => [...H[131] ||= [R("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				L("article", ln, [H[135] ||= L("h2", null, "AccountMenu", -1), z(_e, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: K(({ close: e }) => [z(j, { onClick: e }, {
						default: K(() => [...H[133] ||= [R("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), z(j, {
						tone: "danger",
						onClick: e
					}, {
						default: K(() => [...H[134] ||= [R("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			L("section", un, [z(C, {
				title: "Редакторы и rich text",
				border: ""
			}), L("div", dn, [L("article", fn, [
				H[136] ||= L("h2", null, "Rich text", -1),
				z(ge, {
					ref: "richEditor",
					modelValue: k.value,
					"onUpdate:modelValue": H[32] ||= (e) => k.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: K(({ editor: e, insertRichNode: t }) => [L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ue((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, pn), L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ue((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, mn)]),
					_: 1
				}, 8, ["modelValue"]),
				L("div", hn, [z(ve, { html: k.value }, {
					node: K(({ node: e }) => [L("strong", gn, W(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), L("article", _n, [H[139] ||= L("h2", null, "Editor composition", -1), z(h, null, {
				default: K(() => [z(ee, { title: "Параметры" }, {
					default: K(() => [z(n, { title: "Основное" }, {
						default: K(() => [z(pe, { title: "Значение" }, {
							actions: K(() => [...H[137] ||= [L("span", null, "12", -1)]]),
							_: 1
						}), z(c, {
							modelValue: E.value,
							"onUpdate:modelValue": H[33] ||= (e) => E.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), z(Le, null, {
						default: K(() => [H[138] ||= R("Итого: ", -1), L("strong", null, W(E.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			L("section", vn, [z(C, {
				title: "Каркас приложения",
				border: ""
			}), L("article", yn, [
				H[145] ||= L("h2", null, "Navigation composition", -1),
				z(a, {
					modelValue: B.value,
					"onUpdate:modelValue": H[34] ||= (e) => B.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				L("div", bn, [z(re, {
					class: Re(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": A.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: K(() => [z(ie, {
						modelValue: A.value,
						"onUpdate:modelValue": H[35] ||= (e) => A.value = e,
						elevated: B.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: K(() => [z(l, {
							as: "div",
							label: "share-ui"
						}, {
							icon: K(() => [...H[140] ||= [L("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: K(() => [
							z(p, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: K(() => [...H[141] ||= [L("span", null, "⌂", -1)]]),
								_: 1
							}),
							z(me, { label: "Примеры" }),
							z(p, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: K(() => [...H[142] ||= [L("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: K(() => [...H[143] ||= [L("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: K(() => [H[144] ||= L("div", { class: "share-component-gallery__chrome-content" }, [
						L("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						L("strong", null, "AppShell + AppSidebar"),
						L("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			L("section", xn, [
				z(C, {
					title: "Оверлеи и morph",
					border: ""
				}),
				L("article", Sn, [H[146] ||= L("h2", null, "AppDrawer + embedded navigation", -1), z(Ze)]),
				L("article", Cn, [H[147] ||= L("h2", null, "Интерактивные примеры", -1), L("div", wn, [
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[36] ||= (e) => J.value = !0
					}, "AppModal"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[37] ||= (e) => {
							Z.value = !1, X.value = !0, Y.value = !0;
						}
					}, "AppModalFrame"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[38] ||= (e) => {
							Z.value = !1, X.value = !1, Y.value = !0;
						}
					}, "AppModalFrame без обводки"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[39] ||= (e) => {
							Z.value = !0, Y.value = !0;
						}
					}, "AppModalFrame compact"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[40] ||= (e) => Ye.value = !0
					}, "ModalShell"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[41] ||= (e) => Xe.value = !0
					}, "ConfirmDialog"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[42] ||= (e) => $e.value = !0
					}, "TextPromptDialog"),
					L("button", {
						ref_key: "morphOrigin",
						ref: it,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[43] ||= (e) => tt.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			J.value ? (V(), P(oe, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: H[44] ||= (e) => J.value = !1
			}, {
				default: K(() => [...H[148] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "AppModal"), L("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : F("", !0),
			Y.value ? (V(), P(De, {
				key: 1,
				compact: Z.value,
				width: Z.value ? 360 : void 0,
				outlined: X.value,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: H[47] ||= (e) => Y.value = !1
			}, {
				footer: K(() => [z(fe, {
					onCancel: H[45] ||= (e) => Y.value = !1,
					onSubmit: H[46] ||= (e) => Y.value = !1
				})]),
				default: K(() => [H[149] ||= L("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			}, 8, [
				"compact",
				"width",
				"outlined"
			])) : F("", !0),
			z(ce, {
				open: Ye.value,
				"aria-label": "Пример ModalShell",
				onClose: H[48] ||= (e) => Ye.value = !1
			}, {
				default: K(() => [...H[150] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "ModalShell"), L("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			z(Oe, {
				open: Xe.value,
				"onUpdate:open": H[49] ||= (e) => Xe.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			z(i, {
				open: $e.value,
				"onUpdate:open": H[50] ||= (e) => $e.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			tt.value ? (V(), P(o, {
				key: 2,
				"origin-el": it.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: H[51] ||= (e) => tt.value = !1
			}, {
				head: K(() => [...H[151] ||= [L("div", { class: "share-component-gallery__morph-head" }, [L("strong", null, "MorphSheet")], -1)]]),
				default: K(() => [H[152] ||= L("div", { class: "share-component-gallery__overlay-content" }, [L("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : F("", !0)
		]));
	}
}, [["__scopeId", "data-v-0194f8b0"]]);
//#endregion
export { it as COMPONENT_GALLERY_ALIASES, rt as COMPONENT_GALLERY_COMPONENTS, Tn as ComponentGallery };
