import { A as e, At as t, B as n, C as r, Ct as i, D as a, Dt as o, Et as s, F as c, Ft as l, G as ee, H as te, Ht as u, I as ne, It as d, K as re, L as ie, Lt as ae, Mt as f, Nt as oe, O as se, Ot as ce, P as p, Pt as m, R as le, S as ue, St as h, T as de, Tt as g, V as fe, Vt as _, W as pe, _ as me, a as he, b as ge, bt as v, c as y, ct as _e, d as ve, f as b, ft as x, g as ye, h as be, i as S, it as xe, j as Se, jt as Ce, k as C, kt as we, l as w, lt as Te, m as T, n as Ee, o as E, p as De, pt as D, q as Oe, r as ke, rt as Ae, s as O, t as je, u as k, ut as Me, v as Ne, w as Pe, wt as A, x as j, xt as Fe, y as Ie, z as M } from "./StarRating-DYJXrY0w.js";
import { Fragment as N, createBlock as P, createCommentVNode as F, createElementBlock as I, createElementVNode as L, createTextVNode as R, createVNode as z, h as B, normalizeClass as Le, normalizeStyle as Re, openBlock as V, reactive as ze, ref as H, renderList as U, toDisplayString as W, unref as Be, vModelText as G, withCtx as K, withDirectives as q, withModifiers as Ve } from "vue";
//#region src/gallery/ChoiceCardGalleryExample.vue
var He = { class: "choice-gallery-options" }, Ue = /*#__PURE__*/ u({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = H("First option"), n = H(!0), r = H(!0), i = H(!1), a = ["Centered icon", "Long caption wraps below the icon"], o = H(a[0]), s = ["First option", "Second option"];
		return (e, c) => (V(), I("article", null, [c[10] ||= L("h2", null, "ChoiceCard", -1), L("div", He, [
			(V(), I(N, null, U(s, (e) => z(_, {
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
			z(_, {
				label: "Unavailable",
				description: "Disabled option",
				disabled: ""
			}),
			z(_, {
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
			(V(), I(N, null, U(a, (e) => z(_, {
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
			z(_, {
				label: "Unavailable icon choice",
				layout: "icon",
				disabled: ""
			}),
			z(_, {
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
			z(_, {
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
			z(_, {
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
}, [["__scopeId", "data-v-0276b94d"]]), We = { class: "blur-gallery-scene" }, Ge = { class: "blur-gallery-label" }, Ke = /*#__PURE__*/ u({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = H(8);
		return (e, n) => (V(), I("article", null, [
			n[2] ||= L("h2", null, "BlurBackdrop", -1),
			z(j, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: K(() => [z(ge, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			L("div", We, [
				n[1] ||= L("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				z(ae, { radius: Number(t.value) }, null, 8, ["radius"]),
				L("strong", Ge, "Sharp foreground · " + W(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-34aec14d"]]), qe = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = H(null), n = Me(640), r = ze(ve());
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
		return (e, a) => (V(), I(N, null, [z(T, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: K(() => [...a[0] ||= [R("Показать обучение", -1)]]),
			_: 1
		}, 512), z(b, {
			tour: r,
			mobile: Be(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, J = { class: "drawer-gallery" }, Y = { class: "drawer-gallery__actions" }, Je = { class: "drawer-gallery__content" }, X = ["onClick"], Ye = /*#__PURE__*/ u({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = H(!1), r = H(!1), i = H(!1), a = H(!1);
		return (e, o) => (V(), I("div", J, [
			o[16] ||= L("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			L("div", Y, [
				L("button", {
					type: "button",
					onClick: o[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				L("button", {
					type: "button",
					onClick: o[1] ||= (e) => i.value = !0
				}, "Embedded AppSidebar"),
				z(v, {
					modelValue: a.value,
					"onUpdate:modelValue": o[2] ||= (e) => a.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			z(p, {
				modelValue: t.value,
				"onUpdate:modelValue": o[4] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": a.value
			}, {
				title: K(() => [...o[10] ||= [L("strong", null, "AppDrawer", -1)]]),
				footer: K(({ close: e }) => [L("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, X)]),
				default: K(() => [L("div", Je, [
					o[11] ||= L("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					L("button", {
						type: "button",
						onClick: o[3] ||= (e) => r.value = !0
					}, "Nested drawer"),
					(V(), I(N, null, U(24, (e) => L("p", { key: e }, "Example row " + W(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			z(p, {
				modelValue: r.value,
				"onUpdate:modelValue": o[5] ||= (e) => r.value = e,
				"aria-label": "Nested drawer",
				width: "min(360px, 90vw)",
				"z-index": 3100
			}, {
				title: K(() => [...o[12] ||= [L("strong", null, "Nested drawer", -1)]]),
				default: K(() => [o[13] ||= L("p", { class: "drawer-gallery__content" }, "Escape закрывает только верхний drawer; scroll остаётся заблокирован.", -1)]),
				_: 1
			}, 8, ["modelValue"]),
			z(p, {
				modelValue: i.value,
				"onUpdate:modelValue": o[9] ||= (e) => i.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-close": a.value
			}, {
				default: K(() => [z(te, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: K(() => [z(fe, {
						as: "div",
						label: "share-ui"
					}, {
						icon: K(() => [...o[14] ||= [R("◆", -1)]]),
						_: 1
					}), L("button", {
						type: "button",
						"aria-label": "Close navigation",
						onClick: o[6] ||= (e) => i.value = !1
					}, "×")]),
					account: K(() => [z(D, { title: "Account actions" }, {
						trigger: K(() => [z(ee, {
							label: "Example account",
							expanded: ""
						})]),
						default: K(() => [z(x, null, {
							default: K(() => [...o[15] ||= [R("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: K(() => [
						z(n, { label: "Navigation" }),
						z(M, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[7] ||= (e) => i.value = !1
						}),
						z(M, {
							as: "button",
							label: "Components",
							onClick: o[8] ||= (e) => i.value = !1
						})
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"])
		]));
	}
}, [["__scopeId", "data-v-51dc5ffe"]]), Xe = {
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
		return (e, l) => (V(), I(N, null, [z(y, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: K(() => [
				z(k, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				z(k, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				z(k, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				z(k, {
					percent: 100,
					label: "Полное значение"
				}),
				z(w, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				z(w, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				z(O, {
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
				z(O, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				z(he, {
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
				z(E, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				z(E, {
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
				a.value ? (V(), P(S, {
					key: 0,
					anchor: i.value
				}, {
					default: K(() => [...l[10] ||= [R("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : F("", !0)
			]),
			_: 1
		}), z(y, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: K(() => [...l[11] ||= [R("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Ze = { class: "avatar-examples" }, Qe = /*#__PURE__*/ u({
	__name: "AvatarGalleryExample",
	setup(e) {
		let t = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%22160%22%3E%3Crect%20width%3D%2280%22%20height%3D%22160%22%20fill%3D%22slateblue%22%2F%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2235%22%20r%3D%2224%22%20fill%3D%22lavender%22%2F%3E%3C%2Fsvg%3E";
		return (e, n) => (V(), I(N, null, [n[2] ||= L("h2", null, "AvatarFrame", -1), L("div", Ze, [
			z(d, {
				src: t,
				size: 64,
				label: "Cropped portrait",
				position: "center top"
			}),
			z(d, {
				src: t,
				size: 48,
				fit: "contain",
				label: "Contained artwork"
			}),
			z(d, {
				size: 40,
				label: "Initial"
			}, {
				default: K(() => [...n[0] ||= [R("A", -1)]]),
				_: 1
			}),
			z(d, {
				src: "/unavailable-avatar.png",
				size: 32,
				label: "Unavailable image"
			}, {
				default: K(() => [...n[1] ||= [R("?", -1)]]),
				_: 1
			})
		])], 64));
	}
}, [["__scopeId", "data-v-b8f96491"]]), $e = { class: "fit-example" }, Z = { class: "fit-example__row" }, et = /*#__PURE__*/ u({
	__name: "FitContentGalleryExample",
	setup(e) {
		let t = H(210);
		return (e, n) => (V(), I("div", $e, [
			L("label", null, [n[1] ||= R("Available width ", -1), q(L("input", {
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
				style: Re({ width: `${t.value}px` }),
				class: "fit-example__frame"
			}, [z(l, null, {
				default: K(() => [L("div", Z, [(V(), I(N, null, U(6, (e) => L("strong", { key: e }, W(e), 1)), 64))])]),
				_: 1
			})], 4),
			n[2] ||= L("small", null, "Scales to 50%, then wraps. Nested content shares the outer scale.", -1)
		]));
	}
}, [["__scopeId", "data-v-3d5b6709"]]), tt = Object.freeze(/* @__PURE__ */ "AvatarFrame.FitContent.StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.ChoiceCard.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), Q = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), nt = { class: "share-component-gallery" }, rt = { class: "share-component-gallery__header" }, it = { class: "share-component-gallery__eyebrow" }, at = {
	class: "share-component-gallery__section",
	"data-share-gallery": "AvatarFrame"
}, ot = {
	class: "share-component-gallery__section",
	"data-share-gallery": "FitContent"
}, st = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, ct = {
	class: "share-component-gallery__section",
	"data-share-gallery": "ChoiceCard"
}, lt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, ut = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, dt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, ft = { class: "share-component-gallery__section" }, pt = { class: "share-component-gallery__grid" }, mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, ht = { class: "share-component-gallery__glass-surfaces" }, gt = { class: "share-component-gallery__tile-row" }, _t = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, vt = { class: "share-component-gallery__row" }, yt = { class: "share-component-gallery__row" }, bt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, St = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, wt = { class: "share-component-gallery__row" }, Tt = { class: "share-component-gallery__row" }, Et = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Dt = { class: "share-component-gallery__section" }, Ot = { class: "share-component-gallery__grid" }, kt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, At = { class: "share-component-gallery__stack" }, jt = { style: {
	background: "var(--surface-raised)",
	padding: "8px",
	"border-radius": "var(--r-md)"
} }, Mt = { class: "share-component-gallery__checkbox-row" }, Nt = { class: "share-component-gallery__checkbox-row" }, Pt = { class: "share-component-gallery__checkbox-row" }, Ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, It = { class: "share-component-gallery__stack" }, Lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, Rt = { class: "share-component-gallery__stack" }, zt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Bt = ["d"], Vt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Ht = ["d"], Ut = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Wt = ["d"], Gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Kt = { class: "share-component-gallery__slider" }, qt = { class: "share-component-gallery__section" }, Jt = { class: "share-component-gallery__grid" }, Yt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Xt = { class: "share-component-gallery__form-grid" }, Zt = { class: "share-component-gallery__section" }, Qt = { class: "share-component-gallery__grid" }, $t = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, en = { class: "share-component-gallery__stack" }, tn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, nn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, rn = {
	"data-action-menu-size": "content",
	style: {
		display: "flex",
		gap: "8px"
	}
}, an = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, on = { class: "share-component-gallery__section" }, sn = { class: "share-component-gallery__grid" }, cn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, ln = ["onMousedown"], un = ["onMousedown"], dn = { class: "share-component-gallery__preview" }, fn = { class: "share-component-gallery__rich-node" }, pn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, mn = { class: "share-component-gallery__section" }, hn = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, gn = { class: "share-component-gallery__chrome" }, _n = { class: "share-component-gallery__section" }, vn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, yn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, bn = { class: "share-component-gallery__row" }, xn = /*#__PURE__*/ u({
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
	setup(l) {
		let u = tt.length, d = H(3), ae = H(!0), p = H(!0), _ = H(!1), he = H(!1), y = H(!0), ve = H("md"), b = H("preview"), S = H("build"), w = [
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
		], E = H(62), O = H("rare"), k = H("#7c5ce2"), Me = H("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), B = H(!0), G = H(!0), q = H(!1), He = H(null), We = H(null), Ge = H(null), J = H(!1), Y = H(!1), Je = H(!0), X = H(!1), Ze = H(!1), $e = H(!1), Z = H(!1), Q = H(0), xn = H(!1), Sn = H(null), Cn = [
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
		], $ = ze({
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
		return (ze, H) => (V(), I("div", nt, [
			L("header", rt, [L("div", null, [
				L("p", it, "share-ui · " + W(Be(u)) + " компонентов", 1),
				L("h1", null, W(l.title), 1),
				L("p", null, W(l.description), 1)
			]), H[52] ||= L("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			L("section", at, [z(Qe)]),
			L("section", ot, [H[53] ||= L("h2", null, "FitContent", -1), z(et)]),
			L("section", st, [z(Ke)]),
			L("section", ct, [z(Ue)]),
			L("section", lt, [
				z(je, {
					modelValue: d.value,
					"onUpdate:modelValue": H[0] ||= (e) => d.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				z(je, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				z(je, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			L("section", ut, [z(Xe)]),
			L("section", dt, [H[54] ||= L("h2", null, "GuidedTour", -1), z(qe)]),
			L("section", ft, [z(A, {
				title: "Поверхности и действия",
				border: ""
			}), L("div", pt, [
				L("article", mt, [
					H[74] ||= L("h2", null, "BaseTile", -1),
					L("div", ht, [z(m, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: K(() => [...H[55] ||= [R("Glass frame", -1)]]),
						_: 1
					}), z(m, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: K(() => [...H[56] ||= [R("Glass interactive", -1)]]),
						_: 1
					})]),
					z(T, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: K(() => [...H[57] ||= [R("✦", -1)]]),
						_: 1
					}),
					z(T, {
						"icon-only": "",
						variant: "quiet",
						style: { "--action-button-icon-size": "36px" },
						"aria-label": "Компактное действие"
					}, {
						icon: K(() => [...H[58] ||= [R("✦", -1)]]),
						_: 1
					}),
					L("div", gt, [
						z(m, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [
								z(Ce),
								H[59] ||= L("strong", null, "Акцентная плитка", -1),
								H[60] ||= L("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						z(m, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[61] ||= [L("strong", null, "Рамка", -1), L("span", null, "framed", -1)]]),
							_: 1
						}),
						z(m, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[62] ||= [L("strong", null, "Усиленная рамка", -1), L("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						z(m, {
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[63] ||= [L("strong", null, "Приподнятая поверхность", -1), L("span", null, "elevated", -1)]]),
							_: 1
						}),
						z(m, {
							surface: "popover",
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[64] ||= [L("strong", null, "Поверхность меню", -1), L("span", null, "surface=popover · elevated", -1)]]),
							_: 1
						}),
						z(m, {
							elevated: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[65] ||= [L("strong", null, "Тень с обводкой", -1), L("span", null, "elevated · outlined · interactive", -1)]]),
							_: 1
						}),
						z(m, {
							elevated: "",
							framed: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...H[66] ||= [L("strong", null, "Тень с рамкой", -1), L("span", null, "elevated · framed · interactive", -1)]]),
							_: 1
						}),
						z(f, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: H[1] ||= (e) => Q.value++
						}, {
							aside: K(() => [L("span", null, W(Q.value), 1)]),
							default: K(() => [H[67] ||= L("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						z(f, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: K(() => [...H[68] ||= [L("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						z(f, { title: "Только просмотр" }, {
							default: K(() => [...H[69] ||= [L("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						z(f, {
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
						z(f, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: K(() => [...H[71] ||= [L("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						z(f, null, {
							default: K(() => [...H[72] ||= [L("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						z(f, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: K(() => [...H[73] ||= [L("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						z(oe, { title: "Общий заголовок" })
					])
				]),
				L("article", _t, [
					H[75] ||= L("h2", null, "Загрузка", -1),
					z(be, { label: "Открываем раздел…" }),
					z(be, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					z(C, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					L("div", vt, [
						z(C, {
							label: "Загрузка",
							size: "sm"
						}),
						z(C, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						z(C, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					L("div", yt, [z(ye, {
						width: "36px",
						height: "36px",
						round: ""
					}), z(ye, { width: "60%" })])
				]),
				L("article", bt, [
					H[76] ||= L("h2", null, "InlineEdit", -1),
					z(me, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					z(me, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					z(me, {
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
				L("article", xt, [
					H[84] ||= L("h2", null, "TimelineGroup", -1),
					z(A, {
						title: "История",
						line: ""
					}, {
						actions: K(() => [...H[77] ||= [L("span", null, "2", -1)]]),
						_: 1
					}),
					z(Ee, {
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
					z(Ee, { color: "var(--success)" }, {
						identity: K(() => [...H[81] ||= [L("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: K(() => [z(j, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: K(() => [z(r, { value: "Черновик" })]),
							_: 1
						})]),
						default: K(() => [H[82] ||= L("strong", null, "Компактная запись", -1), H[83] ||= L("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				L("article", St, [
					H[88] ||= L("h2", null, "SectionList", -1),
					z(t, { title: "Записи" }, {
						footer: K(() => [z(we, { label: "Добавить запись" })]),
						default: K(() => [H[85] ||= L("div", { style: { padding: "12px 0" } }, "Первая запись", -1), H[86] ||= L("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					z(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: K(() => [...H[87] ||= [L("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), L("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				L("article", Ct, [
					H[103] ||= L("h2", null, "Кнопки элементов", -1),
					L("div", wt, [
						z(De, {
							modelValue: ae.value,
							"onUpdate:modelValue": H[3] ||= (e) => ae.value = e,
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
						z(De, {
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
						z(De, {
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
					z(A, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					z(A, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					L("div", Tt, [
						z(T, null, {
							default: K(() => [...H[92] ||= [R("Основное действие", -1)]]),
							_: 1
						}),
						z(T, { variant: "secondary" }, {
							default: K(() => [...H[93] ||= [R("Вторичное", -1)]]),
							_: 1
						}),
						z(T, {
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
						z(T, { variant: "quiet" }, {
							default: K(() => [...H[95] ||= [R("Тихое", -1)]]),
							_: 1
						}),
						z(T, { variant: "dashed" }, {
							default: K(() => [...H[96] ||= [R("Пунктирная рамка", -1)]]),
							_: 1
						}),
						z(T, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: K(() => [...H[97] ||= [R("✦", -1)]]),
							default: K(() => [H[98] ||= R("Действие", -1)]),
							_: 1
						}),
						z(T, {
							layout: "stacked",
							variant: "dashed",
							style: { "--action-button-height": "96px" }
						}, {
							icon: K(() => [...H[99] ||= [R("+", -1)]]),
							default: K(() => [H[100] ||= R("Добавить превью", -1)]),
							_: 1
						}),
						z(T, { disabled: "" }, {
							default: K(() => [...H[101] ||= [R("Недоступно", -1)]]),
							_: 1
						}),
						z(T, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: K(() => [...H[102] ||= [R("Загрузка", -1)]]),
							_: 1
						}),
						z(we, { label: "Добавить элемент" }),
						z(we, {
							label: "Добавить",
							variant: "icon"
						}),
						z(g, { label: "Удалить" }),
						z(g, {
							label: "Удалить",
							variant: "boxed"
						}),
						z(g, {
							label: "Удалить запись",
							icon: "trash"
						}),
						z(g, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						z(g, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				L("article", Et, [H[104] ||= L("h2", null, "SegmentDonutChart", -1), z(i, {
					segments: En,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Dn
				})])
			])]),
			L("section", Dt, [z(A, {
				title: "Переключатели",
				border: ""
			}), L("div", Ot, [
				L("article", kt, [H[109] ||= L("h2", null, "Boolean controls", -1), L("div", At, [
					z(v, {
						modelValue: p.value,
						"onUpdate:modelValue": H[4] ||= (e) => p.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					z(v, {
						modelValue: _.value,
						"onUpdate:modelValue": H[5] ||= (e) => _.value = e,
						label: "Обычная поверхность"
					}, null, 8, ["modelValue"]),
					L("div", jt, [z(v, {
						modelValue: he.value,
						"onUpdate:modelValue": H[6] ||= (e) => he.value = e,
						surface: "raised",
						block: "",
						"track-placement": "end",
						label: "Приподнятая поверхность"
					}, {
						default: K(() => [...H[105] ||= [R(" Приподнятая поверхность — вся строка переключает значение ", -1)]]),
						_: 1
					}, 8, ["modelValue"])]),
					L("label", Mt, [z(o, {
						modelValue: y.value,
						"onUpdate:modelValue": H[7] ||= (e) => y.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), H[106] ||= R(" Выбрать элемент ", -1)]),
					L("label", Nt, [z(o, {
						modelValue: y.value,
						"onUpdate:modelValue": H[8] ||= (e) => y.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), H[107] ||= R(" Крупный выбор (24px) ", -1)]),
					L("label", Pt, [z(o, {
						"model-value": !1,
						indeterminate: "",
						size: 22,
						"hit-size": 48,
						label: "Частичный выбор"
					}), H[108] ||= R("Частичный выбор · touch 48", -1)])
				])]),
				L("article", Ft, [H[112] ||= L("h2", null, "Segmented controls", -1), L("div", It, [
					z(s, {
						modelValue: ve.value,
						"onUpdate:modelValue": H[9] ||= (e) => ve.value = e,
						options: Cn,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					z(Fe, {
						modelValue: b.value,
						"onUpdate:modelValue": H[10] ||= (e) => b.value = e,
						variant: "chips",
						tabs: wn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": K(({ tab: e }) => [z(T, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: K(() => [...H[110] ||= [R("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					z(Fe, {
						modelValue: b.value,
						"onUpdate:modelValue": H[11] ||= (e) => b.value = e,
						variant: "plain",
						tabs: wn,
						"aria-label": "Режим с собственной подложкой"
					}, {
						decoration: K(({ active: e }) => [L("span", {
							"aria-hidden": "true",
							style: Re({
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
					z(Fe, {
						modelValue: b.value,
						"onUpdate:modelValue": H[12] ||= (e) => b.value = e,
						tabs: wn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": K(({ tab: e }) => [z(T, {
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
				L("article", Lt, [H[115] ||= L("h2", null, "IconNavigation", -1), L("div", Rt, [
					z(h, {
						modelValue: S.value,
						"onUpdate:modelValue": H[13] ||= (e) => S.value = e,
						items: w,
						label: "Horizontal sections"
					}, {
						icon: K(({ item: e }) => [(V(), I("svg", zt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Bt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					z(h, {
						modelValue: S.value,
						"onUpdate:modelValue": H[14] ||= (e) => S.value = e,
						items: w,
						pill: "",
						"content-sized": "",
						"label-size": 12,
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections sized by caption"
					}, {
						icon: K(({ item: e }) => [(V(), I("svg", Vt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Ht)]))]),
						_: 1
					}, 8, ["modelValue"]),
					z(h, {
						modelValue: S.value,
						"onUpdate:modelValue": H[15] ||= (e) => S.value = e,
						items: w,
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
					z(h, {
						modelValue: S.value,
						"onUpdate:modelValue": H[16] ||= (e) => S.value = e,
						items: w,
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
					z(h, {
						modelValue: S.value,
						"onUpdate:modelValue": H[17] ||= (e) => S.value = e,
						items: w,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: K(({ item: e }) => [(V(), I("svg", Ut, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Wt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				L("article", Gt, [H[116] ||= L("h2", null, "AppSlider", -1), L("div", Kt, [z(ce, {
					modelValue: E.value,
					"onUpdate:modelValue": H[18] ||= (e) => E.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), L("strong", null, W(E.value), 1)])])
			])]),
			L("section", qt, [z(A, {
				title: "Формы",
				border: ""
			}), L("div", Jt, [L("article", Yt, [
				H[118] ||= L("h2", null, "Form primitives", -1),
				H[119] ||= L("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				L("div", Xt, [
					z(j, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: K(() => [z(r, {
							value: $.name,
							"onUpdate:value": H[19] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(j, {
						label: "Дата",
						vertical: ""
					}, {
						default: K(() => [z(ke, {
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
						}, null, 8, ["modelValue"]), z(ke, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					z(j, {
						label: "Количество",
						vertical: ""
					}, {
						default: K(() => [z(ge, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: H[21] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(j, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: K(() => [z(ge, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: H[22] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(j, {
						label: "Тип",
						vertical: ""
					}, {
						default: K(() => [z(Ie, {
							value: $.type,
							"onUpdate:value": H[23] ||= (e) => $.type = e
						}, {
							default: K(() => [...H[117] ||= [L("option", { value: "base" }, "Основной", -1), L("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					z(j, {
						label: "Описание",
						vertical: ""
					}, {
						default: K(() => [z(Ne, {
							value: $.description,
							"onUpdate:value": H[24] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				z(Pe, {
					"submit-text": "Сохранить",
					onCancel: On
				})
			])])]),
			L("section", Zt, [z(A, {
				title: "Выбор значений и floating UI",
				border: ""
			}), L("div", Qt, [
				L("article", $t, [H[120] ||= L("h2", null, "Selectors", -1), L("div", en, [
					z(Ae, {
						modelValue: O.value,
						"onUpdate:modelValue": H[25] ||= (e) => O.value = e,
						options: Tn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					z(Ae, {
						modelValue: O.value,
						"onUpdate:modelValue": H[26] ||= (e) => O.value = e,
						options: Tn,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					z(xe, {
						modelValue: k.value,
						"onUpdate:modelValue": H[27] ||= (e) => k.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					z(xe, {
						modelValue: k.value,
						"onUpdate:modelValue": H[28] ||= (e) => k.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				L("article", tn, [
					H[122] ||= L("h2", null, "BasePopover", -1),
					L("button", {
						ref_key: "popoverAnchor",
						ref: He,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[29] ||= (e) => q.value = !q.value
					}, " Открыть popover ", 512),
					z(Te, {
						open: q.value,
						anchor: He.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": H[30] ||= (e) => q.value = e
					}, {
						default: K(() => [...H[121] ||= [L("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				L("article", nn, [
					H[130] ||= L("h2", null, "ActionMenu", -1),
					z(D, { title: "Компактные действия" }, {
						default: K(({ close: e }) => [L("div", rn, [(V(), I(N, null, U([
							"Открыть",
							"Изменить",
							"Удалить"
						], (t) => z(T, {
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
					z(D, {
						title: "Действия",
						heading: "Выбранная запись",
						width: 340,
						"follow-anchor": "",
						related: ""
					}, {
						default: K(() => [
							z(x, { tone: "accent" }, {
								default: K(() => [...H[124] ||= [R("Редактировать", -1)]]),
								_: 1
							}),
							z(_e, { label: "Перемещение" }, {
								trigger: K(({ open: e }) => [z(x, {
									submenu: "",
									"submenu-open": e
								}, {
									default: K(() => [...H[125] ||= [R("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: K(() => [z(x, null, {
									default: K(() => [...H[126] ||= [R("В начало", -1)]]),
									_: 1
								}), z(x, null, {
									default: K(() => [...H[127] ||= [R("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							z(x, { tone: "danger" }, {
								default: K(() => [...H[128] ||= [R("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					L("button", {
						ref_key: "actionMenuAnchor",
						ref: We,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[31] ||= (e) => Ge.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					z(D, {
						ref_key: "anchoredActionMenu",
						ref: Ge,
						anchor: We.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: K(({ close: e }) => [z(x, { onClick: e }, {
							default: K(() => [...H[129] ||= [R("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				L("article", an, [H[133] ||= L("h2", null, "AccountMenu", -1), z(ee, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: K(({ close: e }) => [z(x, { onClick: e }, {
						default: K(() => [...H[131] ||= [R("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), z(x, {
						tone: "danger",
						onClick: e
					}, {
						default: K(() => [...H[132] ||= [R("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			L("section", on, [z(A, {
				title: "Редакторы и rich text",
				border: ""
			}), L("div", sn, [L("article", cn, [
				H[134] ||= L("h2", null, "Rich text", -1),
				z(re, {
					ref: "richEditor",
					modelValue: Me.value,
					"onUpdate:modelValue": H[32] ||= (e) => Me.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: K(({ editor: e, insertRichNode: t }) => [L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ve((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, ln), L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ve((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, un)]),
					_: 1
				}, 8, ["modelValue"]),
				L("div", dn, [z(Oe, { html: Me.value }, {
					node: K(({ node: e }) => [L("strong", fn, W(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), L("article", pn, [H[137] ||= L("h2", null, "Editor composition", -1), z(m, null, {
				default: K(() => [z(le, { title: "Параметры" }, {
					default: K(() => [z(ne, { title: "Основное" }, {
						default: K(() => [z(ie, { title: "Значение" }, {
							actions: K(() => [...H[135] ||= [L("span", null, "12", -1)]]),
							_: 1
						}), z(ce, {
							modelValue: E.value,
							"onUpdate:modelValue": H[33] ||= (e) => E.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), z(c, null, {
						default: K(() => [H[136] ||= R("Итого: ", -1), L("strong", null, W(E.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			L("section", mn, [z(A, {
				title: "Каркас приложения",
				border: ""
			}), L("article", hn, [
				H[143] ||= L("h2", null, "Navigation composition", -1),
				z(v, {
					modelValue: G.value,
					"onUpdate:modelValue": H[34] ||= (e) => G.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				L("div", gn, [z(pe, {
					class: Le(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": B.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: K(() => [z(te, {
						modelValue: B.value,
						"onUpdate:modelValue": H[35] ||= (e) => B.value = e,
						elevated: G.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: K(() => [z(fe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: K(() => [...H[138] ||= [L("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: K(() => [
							z(M, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: K(() => [...H[139] ||= [L("span", null, "⌂", -1)]]),
								_: 1
							}),
							z(n, { label: "Примеры" }),
							z(M, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: K(() => [...H[140] ||= [L("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: K(() => [...H[141] ||= [L("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: K(() => [H[142] ||= L("div", { class: "share-component-gallery__chrome-content" }, [
						L("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						L("strong", null, "AppShell + AppSidebar"),
						L("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			L("section", _n, [
				z(A, {
					title: "Оверлеи и morph",
					border: ""
				}),
				L("article", vn, [H[144] ||= L("h2", null, "AppDrawer + embedded navigation", -1), z(Ye)]),
				L("article", yn, [H[145] ||= L("h2", null, "Интерактивные примеры", -1), L("div", bn, [
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[36] ||= (e) => J.value = !0
					}, "AppModal"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[37] ||= (e) => {
							X.value = !1, Je.value = !0, Y.value = !0;
						}
					}, "AppModalFrame"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[38] ||= (e) => {
							X.value = !1, Je.value = !1, Y.value = !0;
						}
					}, "AppModalFrame без обводки"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[39] ||= (e) => {
							X.value = !0, Y.value = !0;
						}
					}, "AppModalFrame compact"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[40] ||= (e) => Ze.value = !0
					}, "ModalShell"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[41] ||= (e) => $e.value = !0
					}, "ConfirmDialog"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[42] ||= (e) => Z.value = !0
					}, "TextPromptDialog"),
					L("button", {
						ref_key: "morphOrigin",
						ref: Sn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[43] ||= (e) => xn.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			J.value ? (V(), P(Se, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: H[44] ||= (e) => J.value = !1
			}, {
				default: K(() => [...H[146] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "AppModal"), L("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : F("", !0),
			Y.value ? (V(), P(e, {
				key: 1,
				compact: X.value,
				width: X.value ? 360 : void 0,
				outlined: Je.value,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: H[47] ||= (e) => Y.value = !1
			}, {
				footer: K(() => [z(Pe, {
					onCancel: H[45] ||= (e) => Y.value = !1,
					onSubmit: H[46] ||= (e) => Y.value = !1
				})]),
				default: K(() => [H[147] ||= L("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			}, 8, [
				"compact",
				"width",
				"outlined"
			])) : F("", !0),
			z(a, {
				open: Ze.value,
				"aria-label": "Пример ModalShell",
				onClose: H[48] ||= (e) => Ze.value = !1
			}, {
				default: K(() => [...H[148] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "ModalShell"), L("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			z(se, {
				open: $e.value,
				"onUpdate:open": H[49] ||= (e) => $e.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			z(ue, {
				open: Z.value,
				"onUpdate:open": H[50] ||= (e) => Z.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			xn.value ? (V(), P(de, {
				key: 2,
				"origin-el": Sn.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: H[51] ||= (e) => xn.value = !1
			}, {
				head: K(() => [...H[149] ||= [L("div", { class: "share-component-gallery__morph-head" }, [L("strong", null, "MorphSheet")], -1)]]),
				default: K(() => [H[150] ||= L("div", { class: "share-component-gallery__overlay-content" }, [L("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : F("", !0)
		]));
	}
}, [["__scopeId", "data-v-76dc7c84"]]);
//#endregion
export { Q as COMPONENT_GALLERY_ALIASES, tt as COMPONENT_GALLERY_COMPONENTS, xn as ComponentGallery };
