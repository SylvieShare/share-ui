import { A as e, At as t, B as n, Bt as r, C as i, Ct as a, D as o, Dt as s, Et as c, F as l, Ft as ee, G as te, H as ne, I as re, K as ie, L as ae, Mt as u, Nt as oe, O as se, Ot as ce, P as d, Pt as f, R as le, S as ue, St as p, T as de, Tt as m, V as fe, W as pe, _ as me, a as he, b as ge, bt as h, c as g, ct as _e, d as ve, f as ye, ft as _, g as be, h as xe, i as v, it as Se, j as Ce, jt as we, k as y, kt as Te, l as b, lt as Ee, m as x, n as De, o as S, p as C, pt as Oe, q as ke, r as Ae, rt as je, s as w, t as T, u as E, ut as D, v as Me, w as Ne, wt as O, x as k, xt as A, y as Pe, z as j, zt as M } from "./StarRating-CZt7KeQR.js";
import { Fragment as N, createBlock as P, createCommentVNode as F, createElementBlock as I, createElementVNode as L, createTextVNode as R, createVNode as z, h as B, normalizeClass as Fe, normalizeStyle as Ie, openBlock as V, reactive as Le, ref as H, renderList as U, toDisplayString as W, unref as Re, withCtx as G, withModifiers as ze } from "vue";
//#region src/gallery/ChoiceCardGalleryExample.vue
var K = { class: "choice-gallery-options" }, Be = /*#__PURE__*/ r({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = H("First option"), n = H(!0), r = H(!0), i = H(!1), a = ["Centered icon", "Long caption wraps below the icon"], o = H(a[0]), s = ["First option", "Second option"];
		return (e, c) => (V(), I("article", null, [c[10] ||= L("h2", null, "ChoiceCard", -1), L("div", K, [
			(V(), I(N, null, U(s, (e) => z(M, {
				key: e,
				label: e,
				description: "Exclusive, optional selection",
				"model-value": t.value === e,
				"onUpdate:modelValue": (n) => t.value = n ? e : ""
			}, {
				icon: G(() => [...c[4] ||= [L("svg", {
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
			z(M, {
				label: "Unavailable",
				description: "Disabled option",
				disabled: ""
			}),
			z(M, {
				label: "Compact",
				layout: "inline",
				description: "Inline choice",
				modelValue: n.value,
				"onUpdate:modelValue": c[0] ||= (e) => n.value = e
			}, {
				icon: G(() => [...c[5] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [L("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			(V(), I(N, null, U(a, (e) => z(M, {
				key: e,
				label: e,
				layout: "icon",
				"model-value": o.value === e,
				"onUpdate:modelValue": (t) => o.value = e
			}, {
				icon: G(() => [...c[6] ||= [L("svg", {
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
			z(M, {
				label: "Unavailable icon choice",
				layout: "icon",
				disabled: ""
			}),
			z(M, {
				label: "Centered inline choice",
				layout: "inline",
				centered: "",
				"selection-indicator": "outline",
				modelValue: n.value,
				"onUpdate:modelValue": c[1] ||= (e) => n.value = e
			}, {
				icon: G(() => [...c[7] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [L("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			z(M, {
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
				icon: G(() => [...c[8] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [L("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			z(M, {
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
				icon: G(() => [...c[9] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [L("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"])
		])]));
	}
}, [["__scopeId", "data-v-0276b94d"]]), q = { class: "blur-gallery-scene" }, Ve = { class: "blur-gallery-label" }, He = /*#__PURE__*/ r({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = H(8);
		return (e, n) => (V(), I("article", null, [
			n[2] ||= L("h2", null, "BlurBackdrop", -1),
			z(k, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: G(() => [z(ge, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			L("div", q, [
				n[1] ||= L("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				z(ee, { radius: Number(t.value) }, null, 8, ["radius"]),
				L("strong", Ve, "Sharp foreground · " + W(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-34aec14d"]]), Ue = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = H(null), n = D(640), r = Le(ve());
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
		return (e, a) => (V(), I(N, null, [z(x, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: G(() => [...a[0] ||= [R("Показать обучение", -1)]]),
			_: 1
		}, 512), z(ye, {
			tour: r,
			mobile: Re(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, We = { class: "drawer-gallery" }, Ge = { class: "drawer-gallery__actions" }, J = { class: "drawer-gallery__content" }, Y = ["onClick"], Ke = /*#__PURE__*/ r({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = H(!1), r = H(!1), i = H(!1), a = H(!1);
		return (e, o) => (V(), I("div", We, [
			o[16] ||= L("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			L("div", Ge, [
				L("button", {
					type: "button",
					onClick: o[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				L("button", {
					type: "button",
					onClick: o[1] ||= (e) => i.value = !0
				}, "Embedded AppSidebar"),
				z(h, {
					modelValue: a.value,
					"onUpdate:modelValue": o[2] ||= (e) => a.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			z(d, {
				modelValue: t.value,
				"onUpdate:modelValue": o[4] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": a.value
			}, {
				title: G(() => [...o[10] ||= [L("strong", null, "AppDrawer", -1)]]),
				footer: G(({ close: e }) => [L("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, Y)]),
				default: G(() => [L("div", J, [
					o[11] ||= L("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					L("button", {
						type: "button",
						onClick: o[3] ||= (e) => r.value = !0
					}, "Nested drawer"),
					(V(), I(N, null, U(24, (e) => L("p", { key: e }, "Example row " + W(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			z(d, {
				modelValue: r.value,
				"onUpdate:modelValue": o[5] ||= (e) => r.value = e,
				"aria-label": "Nested drawer",
				width: "min(360px, 90vw)",
				"z-index": 3100
			}, {
				title: G(() => [...o[12] ||= [L("strong", null, "Nested drawer", -1)]]),
				default: G(() => [o[13] ||= L("p", { class: "drawer-gallery__content" }, "Escape закрывает только верхний drawer; scroll остаётся заблокирован.", -1)]),
				_: 1
			}, 8, ["modelValue"]),
			z(d, {
				modelValue: i.value,
				"onUpdate:modelValue": o[9] ||= (e) => i.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-close": a.value
			}, {
				default: G(() => [z(ne, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: G(() => [z(fe, {
						as: "div",
						label: "share-ui"
					}, {
						icon: G(() => [...o[14] ||= [R("◆", -1)]]),
						_: 1
					}), L("button", {
						type: "button",
						"aria-label": "Close navigation",
						onClick: o[6] ||= (e) => i.value = !1
					}, "×")]),
					account: G(() => [z(Oe, { title: "Account actions" }, {
						trigger: G(() => [z(te, {
							label: "Example account",
							expanded: ""
						})]),
						default: G(() => [z(_, null, {
							default: G(() => [...o[15] ||= [R("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: G(() => [
						z(n, { label: "Navigation" }),
						z(j, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[7] ||= (e) => i.value = !1
						}),
						z(j, {
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
}, [["__scopeId", "data-v-51dc5ffe"]]), qe = {
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
		return (e, l) => (V(), I(N, null, [z(g, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: G(() => [
				z(E, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				z(E, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				z(E, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				z(E, {
					percent: 100,
					label: "Полное значение"
				}),
				z(b, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				z(b, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				z(w, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: G(() => [...l[8] ||= [R("✦", -1)]]),
					trailing: G(() => [...l[9] ||= [R("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				z(w, {
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
				z(S, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				z(S, {
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
				a.value ? (V(), P(v, {
					key: 0,
					anchor: i.value
				}, {
					default: G(() => [...l[10] ||= [R("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : F("", !0)
			]),
			_: 1
		}), z(g, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: G(() => [...l[11] ||= [R("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Je = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.ChoiceCard.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), X = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Ye = { class: "share-component-gallery" }, Xe = { class: "share-component-gallery__header" }, Ze = { class: "share-component-gallery__eyebrow" }, Qe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, $e = {
	class: "share-component-gallery__section",
	"data-share-gallery": "ChoiceCard"
}, et = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, tt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, nt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, rt = { class: "share-component-gallery__section" }, it = { class: "share-component-gallery__grid" }, at = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, ot = { class: "share-component-gallery__glass-surfaces" }, st = { class: "share-component-gallery__tile-row" }, ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, lt = { class: "share-component-gallery__row" }, ut = { class: "share-component-gallery__row" }, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, ht = { class: "share-component-gallery__row" }, gt = { class: "share-component-gallery__row" }, _t = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, vt = { class: "share-component-gallery__section" }, yt = { class: "share-component-gallery__grid" }, bt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, xt = { class: "share-component-gallery__stack" }, St = { style: {
	background: "var(--surface-raised)",
	padding: "8px",
	"border-radius": "var(--r-md)"
} }, Ct = { class: "share-component-gallery__checkbox-row" }, wt = { class: "share-component-gallery__checkbox-row" }, Tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Et = { class: "share-component-gallery__stack" }, Dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, Ot = { class: "share-component-gallery__stack" }, kt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, At = ["d"], jt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Mt = ["d"], Nt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Pt = ["d"], Ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, It = { class: "share-component-gallery__slider" }, Lt = { class: "share-component-gallery__section" }, Rt = { class: "share-component-gallery__grid" }, zt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Bt = { class: "share-component-gallery__form-grid" }, Vt = { class: "share-component-gallery__section" }, Ht = { class: "share-component-gallery__grid" }, Ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Wt = { class: "share-component-gallery__stack" }, Gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Kt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, qt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Jt = { class: "share-component-gallery__section" }, Yt = { class: "share-component-gallery__grid" }, Xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, Zt = ["onMousedown"], Qt = ["onMousedown"], $t = { class: "share-component-gallery__preview" }, en = { class: "share-component-gallery__rich-node" }, tn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, nn = { class: "share-component-gallery__section" }, rn = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, an = { class: "share-component-gallery__chrome" }, on = { class: "share-component-gallery__section" }, sn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, cn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, ln = { class: "share-component-gallery__row" }, Z = /*#__PURE__*/ r({
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
		let ee = Je.length, d = H(3), he = H(!0), g = H(!0), ve = H(!1), ye = H(!1), v = H(!0), b = H("md"), S = H("preview"), w = H("build"), E = [
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
		], D = H(62), M = H("rare"), N = H("#7c5ce2"), B = H("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), U = H(!0), K = H(!0), q = H(!1), Ve = H(null), We = H(null), Ge = H(null), J = H(!1), Y = H(!1), X = H(!0), Z = H(!1), un = H(!1), dn = H(!1), Q = H(0), fn = H(!1), pn = H(null), mn = [
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
		], hn = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], gn = [
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
		], _n = [
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
		], $ = Le({
			date: "",
			name: "Новый элемент",
			count: 3,
			fraction: 1.25,
			type: "base",
			description: ""
		});
		function vn(e) {
			return `${e} МБ`;
		}
		function yn() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Le, H) => (V(), I("div", Ye, [
			L("header", Xe, [L("div", null, [
				L("p", Ze, "share-ui · " + W(Re(ee)) + " компонентов", 1),
				L("h1", null, W(r.title), 1),
				L("p", null, W(r.description), 1)
			]), H[51] ||= L("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			L("section", Qe, [z(He)]),
			L("section", $e, [z(Be)]),
			L("section", et, [
				z(T, {
					modelValue: d.value,
					"onUpdate:modelValue": H[0] ||= (e) => d.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				z(T, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				z(T, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			L("section", tt, [z(qe)]),
			L("section", nt, [H[52] ||= L("h2", null, "GuidedTour", -1), z(Ue)]),
			L("section", rt, [z(O, {
				title: "Поверхности и действия",
				border: ""
			}), L("div", it, [
				L("article", at, [
					H[72] ||= L("h2", null, "BaseTile", -1),
					L("div", ot, [z(f, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: G(() => [...H[53] ||= [R("Glass frame", -1)]]),
						_: 1
					}), z(f, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: G(() => [...H[54] ||= [R("Glass interactive", -1)]]),
						_: 1
					})]),
					z(x, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: G(() => [...H[55] ||= [R("✦", -1)]]),
						_: 1
					}),
					z(x, {
						"icon-only": "",
						variant: "quiet",
						style: { "--action-button-icon-size": "36px" },
						"aria-label": "Компактное действие"
					}, {
						icon: G(() => [...H[56] ||= [R("✦", -1)]]),
						_: 1
					}),
					L("div", st, [
						z(f, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [
								z(we),
								H[57] ||= L("strong", null, "Акцентная плитка", -1),
								H[58] ||= L("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						z(f, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[59] ||= [L("strong", null, "Рамка", -1), L("span", null, "framed", -1)]]),
							_: 1
						}),
						z(f, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[60] ||= [L("strong", null, "Усиленная рамка", -1), L("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						z(f, {
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[61] ||= [L("strong", null, "Приподнятая поверхность", -1), L("span", null, "elevated", -1)]]),
							_: 1
						}),
						z(f, {
							surface: "popover",
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[62] ||= [L("strong", null, "Поверхность меню", -1), L("span", null, "surface=popover · elevated", -1)]]),
							_: 1
						}),
						z(f, {
							elevated: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[63] ||= [L("strong", null, "Тень с обводкой", -1), L("span", null, "elevated · outlined · interactive", -1)]]),
							_: 1
						}),
						z(f, {
							elevated: "",
							framed: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[64] ||= [L("strong", null, "Тень с рамкой", -1), L("span", null, "elevated · framed · interactive", -1)]]),
							_: 1
						}),
						z(u, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: H[1] ||= (e) => Q.value++
						}, {
							aside: G(() => [L("span", null, W(Q.value), 1)]),
							default: G(() => [H[65] ||= L("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						z(u, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...H[66] ||= [L("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						z(u, { title: "Только просмотр" }, {
							default: G(() => [...H[67] ||= [L("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						z(u, {
							title: "Редактирование по заголовку",
							"show-edit": "",
							"show-edit-icon": !1,
							"edit-label": "Редактировать",
							onEdit: H[2] ||= (e) => Q.value++
						}, {
							aside: G(() => [L("span", null, W(Q.value), 1)]),
							default: G(() => [H[68] ||= L("span", null, "Нажмите название", -1)]),
							_: 1
						}),
						z(u, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: G(() => [...H[69] ||= [L("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						z(u, null, {
							default: G(() => [...H[70] ||= [L("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						z(u, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...H[71] ||= [L("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						z(oe, { title: "Общий заголовок" })
					])
				]),
				L("article", ct, [
					H[73] ||= L("h2", null, "Загрузка", -1),
					z(xe, { label: "Открываем раздел…" }),
					z(xe, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					z(y, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					L("div", lt, [
						z(y, {
							label: "Загрузка",
							size: "sm"
						}),
						z(y, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						z(y, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					L("div", ut, [z(be, {
						width: "36px",
						height: "36px",
						round: ""
					}), z(be, { width: "60%" })])
				]),
				L("article", dt, [
					H[74] ||= L("h2", null, "InlineEdit", -1),
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
				L("article", ft, [
					H[82] ||= L("h2", null, "TimelineGroup", -1),
					z(O, {
						title: "История",
						line: ""
					}, {
						actions: G(() => [...H[75] ||= [L("span", null, "2", -1)]]),
						_: 1
					}),
					z(De, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: G(() => [...H[76] ||= [L("strong", null, "Участник", -1)]]),
						default: G(() => [H[77] ||= L("strong", null, "Запись события", -1), H[78] ||= L("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					z(De, { color: "var(--success)" }, {
						identity: G(() => [...H[79] ||= [L("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: G(() => [z(k, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: G(() => [z(i, { value: "Черновик" })]),
							_: 1
						})]),
						default: G(() => [H[80] ||= L("strong", null, "Компактная запись", -1), H[81] ||= L("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				L("article", pt, [
					H[86] ||= L("h2", null, "SectionList", -1),
					z(t, { title: "Записи" }, {
						footer: G(() => [z(Te, { label: "Добавить запись" })]),
						default: G(() => [H[83] ||= L("div", { style: { padding: "12px 0" } }, "Первая запись", -1), H[84] ||= L("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					z(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: G(() => [...H[85] ||= [L("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), L("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				L("article", mt, [
					H[100] ||= L("h2", null, "Кнопки элементов", -1),
					L("div", ht, [
						z(C, {
							modelValue: he.value,
							"onUpdate:modelValue": H[3] ||= (e) => he.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: G(() => [...H[87] ||= [L("svg", {
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
						z(C, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: G(() => [...H[88] ||= [L("svg", {
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
						z(C, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: G(() => [...H[89] ||= [L("svg", {
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
					z(O, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					z(O, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					L("div", gt, [
						z(x, null, {
							default: G(() => [...H[90] ||= [R("Основное действие", -1)]]),
							_: 1
						}),
						z(x, { variant: "secondary" }, {
							default: G(() => [...H[91] ||= [R("Вторичное", -1)]]),
							_: 1
						}),
						z(x, { variant: "quiet" }, {
							default: G(() => [...H[92] ||= [R("Тихое", -1)]]),
							_: 1
						}),
						z(x, { variant: "dashed" }, {
							default: G(() => [...H[93] ||= [R("Пунктирная рамка", -1)]]),
							_: 1
						}),
						z(x, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: G(() => [...H[94] ||= [R("✦", -1)]]),
							default: G(() => [H[95] ||= R("Действие", -1)]),
							_: 1
						}),
						z(x, {
							layout: "stacked",
							variant: "dashed",
							style: { "--action-button-height": "96px" }
						}, {
							icon: G(() => [...H[96] ||= [R("+", -1)]]),
							default: G(() => [H[97] ||= R("Добавить превью", -1)]),
							_: 1
						}),
						z(x, { disabled: "" }, {
							default: G(() => [...H[98] ||= [R("Недоступно", -1)]]),
							_: 1
						}),
						z(x, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: G(() => [...H[99] ||= [R("Загрузка", -1)]]),
							_: 1
						}),
						z(Te, { label: "Добавить элемент" }),
						z(Te, {
							label: "Добавить",
							variant: "icon"
						}),
						z(m, { label: "Удалить" }),
						z(m, {
							label: "Удалить",
							variant: "boxed"
						}),
						z(m, {
							label: "Удалить запись",
							icon: "trash"
						}),
						z(m, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						z(m, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				L("article", _t, [H[101] ||= L("h2", null, "SegmentDonutChart", -1), z(a, {
					segments: _n,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": vn
				})])
			])]),
			L("section", vt, [z(O, {
				title: "Переключатели",
				border: ""
			}), L("div", yt, [
				L("article", bt, [H[105] ||= L("h2", null, "Boolean controls", -1), L("div", xt, [
					z(h, {
						modelValue: g.value,
						"onUpdate:modelValue": H[4] ||= (e) => g.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					z(h, {
						modelValue: ve.value,
						"onUpdate:modelValue": H[5] ||= (e) => ve.value = e,
						label: "Обычная поверхность"
					}, null, 8, ["modelValue"]),
					L("div", St, [z(h, {
						modelValue: ye.value,
						"onUpdate:modelValue": H[6] ||= (e) => ye.value = e,
						surface: "raised",
						block: "",
						"track-placement": "end",
						label: "Приподнятая поверхность"
					}, {
						default: G(() => [...H[102] ||= [R(" Приподнятая поверхность — вся строка переключает значение ", -1)]]),
						_: 1
					}, 8, ["modelValue"])]),
					L("label", Ct, [z(s, {
						modelValue: v.value,
						"onUpdate:modelValue": H[7] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), H[103] ||= R(" Выбрать элемент ", -1)]),
					L("label", wt, [z(s, {
						modelValue: v.value,
						"onUpdate:modelValue": H[8] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), H[104] ||= R(" Крупный выбор (24px) ", -1)])
				])]),
				L("article", Tt, [H[108] ||= L("h2", null, "Segmented controls", -1), L("div", Et, [
					z(c, {
						modelValue: b.value,
						"onUpdate:modelValue": H[9] ||= (e) => b.value = e,
						options: mn,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					z(A, {
						modelValue: S.value,
						"onUpdate:modelValue": H[10] ||= (e) => S.value = e,
						variant: "chips",
						tabs: hn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": G(({ tab: e }) => [z(x, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: G(() => [...H[106] ||= [R("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					z(A, {
						modelValue: S.value,
						"onUpdate:modelValue": H[11] ||= (e) => S.value = e,
						variant: "plain",
						tabs: hn,
						"aria-label": "Режим с собственной подложкой"
					}, {
						decoration: G(({ active: e }) => [L("span", {
							"aria-hidden": "true",
							style: Ie({
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
					z(A, {
						modelValue: S.value,
						"onUpdate:modelValue": H[12] ||= (e) => S.value = e,
						tabs: hn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": G(({ tab: e }) => [z(x, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: G(() => [...H[107] ||= [R("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				L("article", Dt, [H[111] ||= L("h2", null, "IconNavigation", -1), L("div", Ot, [
					z(p, {
						modelValue: w.value,
						"onUpdate:modelValue": H[13] ||= (e) => w.value = e,
						items: E,
						label: "Horizontal sections"
					}, {
						icon: G(({ item: e }) => [(V(), I("svg", kt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, At)]))]),
						_: 1
					}, 8, ["modelValue"]),
					z(p, {
						modelValue: w.value,
						"onUpdate:modelValue": H[14] ||= (e) => w.value = e,
						items: E,
						pill: "",
						"content-sized": "",
						"label-size": 12,
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections sized by caption"
					}, {
						icon: G(({ item: e }) => [(V(), I("svg", jt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Mt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					z(p, {
						modelValue: w.value,
						"onUpdate:modelValue": H[15] ||= (e) => w.value = e,
						items: E,
						pill: "",
						layout: "inline",
						"icon-size": 28,
						height: 56,
						label: "Inline sections"
					}, {
						icon: G(() => [...H[109] ||= [L("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [L("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					z(p, {
						modelValue: w.value,
						"onUpdate:modelValue": H[16] ||= (e) => w.value = e,
						items: E,
						pill: "",
						layout: "compact",
						size: 44,
						height: 48,
						radius: "var(--r-md)",
						label: "Compact sections"
					}, {
						icon: G(() => [...H[110] ||= [L("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [L("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					z(p, {
						modelValue: w.value,
						"onUpdate:modelValue": H[17] ||= (e) => w.value = e,
						items: E,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: G(({ item: e }) => [(V(), I("svg", Nt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Pt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				L("article", Ft, [H[112] ||= L("h2", null, "AppSlider", -1), L("div", It, [z(ce, {
					modelValue: D.value,
					"onUpdate:modelValue": H[18] ||= (e) => D.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), L("strong", null, W(D.value), 1)])])
			])]),
			L("section", Lt, [z(O, {
				title: "Формы",
				border: ""
			}), L("div", Rt, [L("article", zt, [
				H[114] ||= L("h2", null, "Form primitives", -1),
				H[115] ||= L("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				L("div", Bt, [
					z(k, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: G(() => [z(i, {
							value: $.name,
							"onUpdate:value": H[19] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(k, {
						label: "Дата",
						vertical: ""
					}, {
						default: G(() => [z(Ae, {
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
						}, null, 8, ["modelValue"]), z(Ae, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					z(k, {
						label: "Количество",
						vertical: ""
					}, {
						default: G(() => [z(ge, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: H[21] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(k, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: G(() => [z(ge, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: H[22] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(k, {
						label: "Тип",
						vertical: ""
					}, {
						default: G(() => [z(Pe, {
							value: $.type,
							"onUpdate:value": H[23] ||= (e) => $.type = e
						}, {
							default: G(() => [...H[113] ||= [L("option", { value: "base" }, "Основной", -1), L("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					z(k, {
						label: "Описание",
						vertical: ""
					}, {
						default: G(() => [z(Me, {
							value: $.description,
							"onUpdate:value": H[24] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				z(Ne, {
					"submit-text": "Сохранить",
					onCancel: yn
				})
			])])]),
			L("section", Vt, [z(O, {
				title: "Выбор значений и floating UI",
				border: ""
			}), L("div", Ht, [
				L("article", Ut, [H[116] ||= L("h2", null, "Selectors", -1), L("div", Wt, [
					z(je, {
						modelValue: M.value,
						"onUpdate:modelValue": H[25] ||= (e) => M.value = e,
						options: gn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					z(je, {
						modelValue: M.value,
						"onUpdate:modelValue": H[26] ||= (e) => M.value = e,
						options: gn,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					z(Se, {
						modelValue: N.value,
						"onUpdate:modelValue": H[27] ||= (e) => N.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					z(Se, {
						modelValue: N.value,
						"onUpdate:modelValue": H[28] ||= (e) => N.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				L("article", Gt, [
					H[118] ||= L("h2", null, "BasePopover", -1),
					L("button", {
						ref_key: "popoverAnchor",
						ref: Ve,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[29] ||= (e) => q.value = !q.value
					}, " Открыть popover ", 512),
					z(Ee, {
						open: q.value,
						anchor: Ve.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": H[30] ||= (e) => q.value = e
					}, {
						default: G(() => [...H[117] ||= [L("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				L("article", Kt, [
					H[125] ||= L("h2", null, "ActionMenu", -1),
					z(Oe, {
						title: "Действия",
						heading: "Выбранная запись",
						width: 340,
						related: ""
					}, {
						default: G(() => [
							z(_, { tone: "accent" }, {
								default: G(() => [...H[119] ||= [R("Редактировать", -1)]]),
								_: 1
							}),
							z(_e, { label: "Перемещение" }, {
								trigger: G(({ open: e }) => [z(_, {
									submenu: "",
									"submenu-open": e
								}, {
									default: G(() => [...H[120] ||= [R("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: G(() => [z(_, null, {
									default: G(() => [...H[121] ||= [R("В начало", -1)]]),
									_: 1
								}), z(_, null, {
									default: G(() => [...H[122] ||= [R("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							z(_, { tone: "danger" }, {
								default: G(() => [...H[123] ||= [R("Удалить", -1)]]),
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
					z(Oe, {
						ref_key: "anchoredActionMenu",
						ref: Ge,
						anchor: We.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: G(({ close: e }) => [z(_, { onClick: e }, {
							default: G(() => [...H[124] ||= [R("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				L("article", qt, [H[128] ||= L("h2", null, "AccountMenu", -1), z(te, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: G(({ close: e }) => [z(_, { onClick: e }, {
						default: G(() => [...H[126] ||= [R("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), z(_, {
						tone: "danger",
						onClick: e
					}, {
						default: G(() => [...H[127] ||= [R("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			L("section", Jt, [z(O, {
				title: "Редакторы и rich text",
				border: ""
			}), L("div", Yt, [L("article", Xt, [
				H[129] ||= L("h2", null, "Rich text", -1),
				z(ie, {
					ref: "richEditor",
					modelValue: B.value,
					"onUpdate:modelValue": H[32] ||= (e) => B.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: G(({ editor: e, insertRichNode: t }) => [L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: ze((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, Zt), L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: ze((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Qt)]),
					_: 1
				}, 8, ["modelValue"]),
				L("div", $t, [z(ke, { html: B.value }, {
					node: G(({ node: e }) => [L("strong", en, W(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), L("article", tn, [H[132] ||= L("h2", null, "Editor composition", -1), z(f, null, {
				default: G(() => [z(le, { title: "Параметры" }, {
					default: G(() => [z(re, { title: "Основное" }, {
						default: G(() => [z(ae, { title: "Значение" }, {
							actions: G(() => [...H[130] ||= [L("span", null, "12", -1)]]),
							_: 1
						}), z(ce, {
							modelValue: D.value,
							"onUpdate:modelValue": H[33] ||= (e) => D.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), z(l, null, {
						default: G(() => [H[131] ||= R("Итого: ", -1), L("strong", null, W(D.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			L("section", nn, [z(O, {
				title: "Каркас приложения",
				border: ""
			}), L("article", rn, [
				H[138] ||= L("h2", null, "Navigation composition", -1),
				z(h, {
					modelValue: K.value,
					"onUpdate:modelValue": H[34] ||= (e) => K.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				L("div", an, [z(pe, {
					class: Fe(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": U.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: G(() => [z(ne, {
						modelValue: U.value,
						"onUpdate:modelValue": H[35] ||= (e) => U.value = e,
						elevated: K.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: G(() => [z(fe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: G(() => [...H[133] ||= [L("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: G(() => [
							z(j, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: G(() => [...H[134] ||= [L("span", null, "⌂", -1)]]),
								_: 1
							}),
							z(n, { label: "Примеры" }),
							z(j, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: G(() => [...H[135] ||= [L("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: G(() => [...H[136] ||= [L("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: G(() => [H[137] ||= L("div", { class: "share-component-gallery__chrome-content" }, [
						L("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						L("strong", null, "AppShell + AppSidebar"),
						L("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			L("section", on, [
				z(O, {
					title: "Оверлеи и morph",
					border: ""
				}),
				L("article", sn, [H[139] ||= L("h2", null, "AppDrawer + embedded navigation", -1), z(Ke)]),
				L("article", cn, [H[140] ||= L("h2", null, "Интерактивные примеры", -1), L("div", ln, [
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[36] ||= (e) => J.value = !0
					}, "AppModal"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[37] ||= (e) => {
							X.value = !0, Y.value = !0;
						}
					}, "AppModalFrame"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[38] ||= (e) => {
							X.value = !1, Y.value = !0;
						}
					}, "AppModalFrame без обводки"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[39] ||= (e) => Z.value = !0
					}, "ModalShell"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[40] ||= (e) => un.value = !0
					}, "ConfirmDialog"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[41] ||= (e) => dn.value = !0
					}, "TextPromptDialog"),
					L("button", {
						ref_key: "morphOrigin",
						ref: pn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[42] ||= (e) => fn.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			J.value ? (V(), P(Ce, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: H[43] ||= (e) => J.value = !1
			}, {
				default: G(() => [...H[141] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "AppModal"), L("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : F("", !0),
			Y.value ? (V(), P(e, {
				key: 1,
				outlined: X.value,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: H[46] ||= (e) => Y.value = !1
			}, {
				footer: G(() => [z(Ne, {
					onCancel: H[44] ||= (e) => Y.value = !1,
					onSubmit: H[45] ||= (e) => Y.value = !1
				})]),
				default: G(() => [H[142] ||= L("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			}, 8, ["outlined"])) : F("", !0),
			z(o, {
				open: Z.value,
				"aria-label": "Пример ModalShell",
				onClose: H[47] ||= (e) => Z.value = !1
			}, {
				default: G(() => [...H[143] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "ModalShell"), L("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			z(se, {
				open: un.value,
				"onUpdate:open": H[48] ||= (e) => un.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			z(ue, {
				open: dn.value,
				"onUpdate:open": H[49] ||= (e) => dn.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			fn.value ? (V(), P(de, {
				key: 2,
				"origin-el": pn.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: H[50] ||= (e) => fn.value = !1
			}, {
				head: G(() => [...H[144] ||= [L("div", { class: "share-component-gallery__morph-head" }, [L("strong", null, "MorphSheet")], -1)]]),
				default: G(() => [H[145] ||= L("div", { class: "share-component-gallery__overlay-content" }, [L("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : F("", !0)
		]));
	}
}, [["__scopeId", "data-v-d1f6d569"]]);
//#endregion
export { X as COMPONENT_GALLERY_ALIASES, Je as COMPONENT_GALLERY_COMPONENTS, Z as ComponentGallery };
