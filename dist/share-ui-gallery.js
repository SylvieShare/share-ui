import { A as e, At as t, B as n, Bt as r, C as i, Ct as a, D as o, Dt as s, Et as c, F as l, Ft as ee, G as te, H as ne, I as re, K as ie, L as ae, Mt as u, Nt as oe, O as se, Ot as ce, P as d, Pt as f, R as le, S as ue, St as p, T as de, Tt as m, V as fe, W as pe, _ as h, a as me, b as he, bt as g, c as _, ct as ge, d as _e, f as ve, ft as v, g as ye, h as be, i as y, it as xe, j as Se, jt as Ce, k as b, kt as we, l as x, lt as Te, m as S, n as Ee, o as C, p as De, pt as Oe, q as ke, r as Ae, rt as je, s as w, t as Me, u as T, ut as E, v as Ne, w as Pe, wt as D, x as O, xt as Fe, y as Ie, z as k, zt as A } from "./StarRating-BdyxpNe8.js";
import { Fragment as j, createBlock as M, createCommentVNode as N, createElementBlock as P, createElementVNode as F, createTextVNode as I, createVNode as L, h as R, normalizeClass as Le, normalizeStyle as Re, openBlock as z, reactive as ze, ref as B, renderList as V, toDisplayString as H, unref as Be, withCtx as U, withModifiers as Ve } from "vue";
//#region src/gallery/ChoiceCardGalleryExample.vue
var W = { class: "choice-gallery-options" }, He = /*#__PURE__*/ r({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = B("First option"), n = B(!0), r = B(!0), i = B(!1), a = ["Centered icon", "Long caption wraps below the icon"], o = B(a[0]), s = ["First option", "Second option"];
		return (e, c) => (z(), P("article", null, [c[10] ||= F("h2", null, "ChoiceCard", -1), F("div", W, [
			(z(), P(j, null, V(s, (e) => L(A, {
				key: e,
				label: e,
				description: "Exclusive, optional selection",
				"model-value": t.value === e,
				"onUpdate:modelValue": (n) => t.value = n ? e : ""
			}, {
				icon: U(() => [...c[4] ||= [F("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [F("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, [
				"label",
				"model-value",
				"onUpdate:modelValue"
			])), 64)),
			L(A, {
				label: "Unavailable",
				description: "Disabled option",
				disabled: ""
			}),
			L(A, {
				label: "Compact",
				layout: "inline",
				description: "Inline choice",
				modelValue: n.value,
				"onUpdate:modelValue": c[0] ||= (e) => n.value = e
			}, {
				icon: U(() => [...c[5] ||= [F("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [F("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			(z(), P(j, null, V(a, (e) => L(A, {
				key: e,
				label: e,
				layout: "icon",
				"model-value": o.value === e,
				"onUpdate:modelValue": (t) => o.value = e
			}, {
				icon: U(() => [...c[6] ||= [F("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [F("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, [
				"label",
				"model-value",
				"onUpdate:modelValue"
			])), 64)),
			L(A, {
				label: "Unavailable icon choice",
				layout: "icon",
				disabled: ""
			}),
			L(A, {
				label: "Centered inline choice",
				layout: "inline",
				centered: "",
				"selection-indicator": "outline",
				modelValue: n.value,
				"onUpdate:modelValue": c[1] ||= (e) => n.value = e
			}, {
				icon: U(() => [...c[7] ||= [F("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [F("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			L(A, {
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
				icon: U(() => [...c[8] ||= [F("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [F("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			L(A, {
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
				icon: U(() => [...c[9] ||= [F("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [F("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"])
		])]));
	}
}, [["__scopeId", "data-v-0276b94d"]]), G = { class: "blur-gallery-scene" }, Ue = { class: "blur-gallery-label" }, We = /*#__PURE__*/ r({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = B(8);
		return (e, n) => (z(), P("article", null, [
			n[2] ||= F("h2", null, "BlurBackdrop", -1),
			L(O, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: U(() => [L(he, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			F("div", G, [
				n[1] ||= F("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				L(ee, { radius: Number(t.value) }, null, 8, ["radius"]),
				F("strong", Ue, "Sharp foreground · " + H(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-34aec14d"]]), Ge = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = B(null), n = E(640), r = ze(_e());
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
		return (e, a) => (z(), P(j, null, [L(S, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: U(() => [...a[0] ||= [I("Показать обучение", -1)]]),
			_: 1
		}, 512), L(ve, {
			tour: r,
			mobile: Be(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, Ke = { class: "drawer-gallery" }, qe = { class: "drawer-gallery__actions" }, K = { class: "drawer-gallery__content" }, q = ["onClick"], Je = /*#__PURE__*/ r({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = B(!1), r = B(!1), i = B(!1), a = B(!1);
		return (e, o) => (z(), P("div", Ke, [
			o[16] ||= F("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			F("div", qe, [
				F("button", {
					type: "button",
					onClick: o[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				F("button", {
					type: "button",
					onClick: o[1] ||= (e) => i.value = !0
				}, "Embedded AppSidebar"),
				L(g, {
					modelValue: a.value,
					"onUpdate:modelValue": o[2] ||= (e) => a.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			L(d, {
				modelValue: t.value,
				"onUpdate:modelValue": o[4] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": a.value
			}, {
				title: U(() => [...o[10] ||= [F("strong", null, "AppDrawer", -1)]]),
				footer: U(({ close: e }) => [F("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, q)]),
				default: U(() => [F("div", K, [
					o[11] ||= F("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					F("button", {
						type: "button",
						onClick: o[3] ||= (e) => r.value = !0
					}, "Nested drawer"),
					(z(), P(j, null, V(24, (e) => F("p", { key: e }, "Example row " + H(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			L(d, {
				modelValue: r.value,
				"onUpdate:modelValue": o[5] ||= (e) => r.value = e,
				"aria-label": "Nested drawer",
				width: "min(360px, 90vw)",
				"z-index": 3100
			}, {
				title: U(() => [...o[12] ||= [F("strong", null, "Nested drawer", -1)]]),
				default: U(() => [o[13] ||= F("p", { class: "drawer-gallery__content" }, "Escape закрывает только верхний drawer; scroll остаётся заблокирован.", -1)]),
				_: 1
			}, 8, ["modelValue"]),
			L(d, {
				modelValue: i.value,
				"onUpdate:modelValue": o[9] ||= (e) => i.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-close": a.value
			}, {
				default: U(() => [L(ne, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: U(() => [L(fe, {
						as: "div",
						label: "share-ui"
					}, {
						icon: U(() => [...o[14] ||= [I("◆", -1)]]),
						_: 1
					}), F("button", {
						type: "button",
						"aria-label": "Close navigation",
						onClick: o[6] ||= (e) => i.value = !1
					}, "×")]),
					account: U(() => [L(Oe, { title: "Account actions" }, {
						trigger: U(() => [L(te, {
							label: "Example account",
							expanded: ""
						})]),
						default: U(() => [L(v, null, {
							default: U(() => [...o[15] ||= [I("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: U(() => [
						L(n, { label: "Navigation" }),
						L(k, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[7] ||= (e) => i.value = !1
						}),
						L(k, {
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
}, [["__scopeId", "data-v-51dc5ffe"]]), Ye = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = B("star"), n = B(!1), r = B([]), i = B(null), a = B(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => R("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => R("span", "●") }
		}], s = B([{
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
		return (e, l) => (z(), P(j, null, [L(_, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: U(() => [
				L(T, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				L(T, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				L(T, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				L(T, {
					percent: 100,
					label: "Полное значение"
				}),
				L(x, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				L(x, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				L(w, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: U(() => [...l[8] ||= [I("✦", -1)]]),
					trailing: U(() => [...l[9] ||= [I("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				L(w, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				L(me, {
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
				L(C, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				L(C, {
					options: [],
					label: "Пустой список"
				}),
				F("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: l[4] ||= (e) => a.value = !0,
					onMouseleave: l[5] ||= (e) => a.value = !1,
					onFocus: l[6] ||= (e) => a.value = !0,
					onBlur: l[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (z(), M(y, {
					key: 0,
					anchor: i.value
				}, {
					default: U(() => [...l[10] ||= [I("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : N("", !0)
			]),
			_: 1
		}), L(_, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: U(() => [...l[11] ||= [I("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Xe = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.ChoiceCard.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), J = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Ze = { class: "share-component-gallery" }, Qe = { class: "share-component-gallery__header" }, $e = { class: "share-component-gallery__eyebrow" }, et = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, tt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "ChoiceCard"
}, nt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, rt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, it = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, at = { class: "share-component-gallery__section" }, ot = { class: "share-component-gallery__grid" }, st = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, ct = { class: "share-component-gallery__glass-surfaces" }, lt = { class: "share-component-gallery__tile-row" }, ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, dt = { class: "share-component-gallery__row" }, ft = { class: "share-component-gallery__row" }, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, _t = { class: "share-component-gallery__row" }, vt = { class: "share-component-gallery__row" }, yt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, bt = { class: "share-component-gallery__section" }, xt = { class: "share-component-gallery__grid" }, St = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Ct = { class: "share-component-gallery__stack" }, wt = { style: {
	background: "var(--surface-raised)",
	padding: "8px",
	"border-radius": "var(--r-md)"
} }, Tt = { class: "share-component-gallery__checkbox-row" }, Et = { class: "share-component-gallery__checkbox-row" }, Dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Ot = { class: "share-component-gallery__stack" }, kt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, At = { class: "share-component-gallery__stack" }, jt = {
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
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, It = ["d"], Lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Rt = { class: "share-component-gallery__slider" }, zt = { class: "share-component-gallery__section" }, Bt = { class: "share-component-gallery__grid" }, Vt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Ht = { class: "share-component-gallery__form-grid" }, Ut = { class: "share-component-gallery__section" }, Wt = { class: "share-component-gallery__grid" }, Gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Kt = { class: "share-component-gallery__stack" }, qt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Jt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Xt = { class: "share-component-gallery__section" }, Zt = { class: "share-component-gallery__grid" }, Qt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, $t = ["onMousedown"], en = ["onMousedown"], tn = { class: "share-component-gallery__preview" }, nn = { class: "share-component-gallery__rich-node" }, rn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, an = { class: "share-component-gallery__section" }, on = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, sn = { class: "share-component-gallery__chrome" }, cn = { class: "share-component-gallery__section" }, ln = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, un = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, dn = { class: "share-component-gallery__row" }, Y = /*#__PURE__*/ r({
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
		let ee = Xe.length, d = B(3), me = B(!0), _ = B(!0), _e = B(!1), ve = B(!1), y = B(!0), x = B("md"), C = B("preview"), w = B("build"), T = [
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
		], E = B(62), A = B("rare"), j = B("#7c5ce2"), R = B("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), V = B(!0), W = B(!0), G = B(!1), Ue = B(null), Ke = B(null), qe = B(null), K = B(!1), q = B(!1), J = B(!0), Y = B(!1), fn = B(!1), X = B(!1), pn = B(!1), Z = B(0), mn = B(!1), hn = B(null), gn = [
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
		], Q = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], _n = [
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
		], vn = [
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
		function yn(e) {
			return `${e} МБ`;
		}
		function bn() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (ze, B) => (z(), P("div", Ze, [
			F("header", Qe, [F("div", null, [
				F("p", $e, "share-ui · " + H(Be(ee)) + " компонентов", 1),
				F("h1", null, H(r.title), 1),
				F("p", null, H(r.description), 1)
			]), B[52] ||= F("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			F("section", et, [L(We)]),
			F("section", tt, [L(He)]),
			F("section", nt, [
				L(Me, {
					modelValue: d.value,
					"onUpdate:modelValue": B[0] ||= (e) => d.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				L(Me, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				L(Me, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			F("section", rt, [L(Ye)]),
			F("section", it, [B[53] ||= F("h2", null, "GuidedTour", -1), L(Ge)]),
			F("section", at, [L(D, {
				title: "Поверхности и действия",
				border: ""
			}), F("div", ot, [
				F("article", st, [
					B[73] ||= F("h2", null, "BaseTile", -1),
					F("div", ct, [L(f, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: U(() => [...B[54] ||= [I("Glass frame", -1)]]),
						_: 1
					}), L(f, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: U(() => [...B[55] ||= [I("Glass interactive", -1)]]),
						_: 1
					})]),
					L(S, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: U(() => [...B[56] ||= [I("✦", -1)]]),
						_: 1
					}),
					L(S, {
						"icon-only": "",
						variant: "quiet",
						style: { "--action-button-icon-size": "36px" },
						"aria-label": "Компактное действие"
					}, {
						icon: U(() => [...B[57] ||= [I("✦", -1)]]),
						_: 1
					}),
					F("div", lt, [
						L(f, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [
								L(Ce),
								B[58] ||= F("strong", null, "Акцентная плитка", -1),
								B[59] ||= F("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						L(f, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...B[60] ||= [F("strong", null, "Рамка", -1), F("span", null, "framed", -1)]]),
							_: 1
						}),
						L(f, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...B[61] ||= [F("strong", null, "Усиленная рамка", -1), F("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						L(f, {
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...B[62] ||= [F("strong", null, "Приподнятая поверхность", -1), F("span", null, "elevated", -1)]]),
							_: 1
						}),
						L(f, {
							surface: "popover",
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...B[63] ||= [F("strong", null, "Поверхность меню", -1), F("span", null, "surface=popover · elevated", -1)]]),
							_: 1
						}),
						L(f, {
							elevated: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...B[64] ||= [F("strong", null, "Тень с обводкой", -1), F("span", null, "elevated · outlined · interactive", -1)]]),
							_: 1
						}),
						L(f, {
							elevated: "",
							framed: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...B[65] ||= [F("strong", null, "Тень с рамкой", -1), F("span", null, "elevated · framed · interactive", -1)]]),
							_: 1
						}),
						L(u, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: B[1] ||= (e) => Z.value++
						}, {
							aside: U(() => [F("span", null, H(Z.value), 1)]),
							default: U(() => [B[66] ||= F("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						L(u, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: U(() => [...B[67] ||= [F("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						L(u, { title: "Только просмотр" }, {
							default: U(() => [...B[68] ||= [F("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						L(u, {
							title: "Редактирование по заголовку",
							"show-edit": "",
							"show-edit-icon": !1,
							"edit-label": "Редактировать",
							onEdit: B[2] ||= (e) => Z.value++
						}, {
							aside: U(() => [F("span", null, H(Z.value), 1)]),
							default: U(() => [B[69] ||= F("span", null, "Нажмите название", -1)]),
							_: 1
						}),
						L(u, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: U(() => [...B[70] ||= [F("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						L(u, null, {
							default: U(() => [...B[71] ||= [F("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						L(u, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: U(() => [...B[72] ||= [F("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						L(oe, { title: "Общий заголовок" })
					])
				]),
				F("article", ut, [
					B[74] ||= F("h2", null, "Загрузка", -1),
					L(be, { label: "Открываем раздел…" }),
					L(be, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					L(b, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					F("div", dt, [
						L(b, {
							label: "Загрузка",
							size: "sm"
						}),
						L(b, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						L(b, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					F("div", ft, [L(ye, {
						width: "36px",
						height: "36px",
						round: ""
					}), L(ye, { width: "60%" })])
				]),
				F("article", pt, [
					B[75] ||= F("h2", null, "InlineEdit", -1),
					L(h, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					L(h, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					L(h, {
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
				F("article", mt, [
					B[83] ||= F("h2", null, "TimelineGroup", -1),
					L(D, {
						title: "История",
						line: ""
					}, {
						actions: U(() => [...B[76] ||= [F("span", null, "2", -1)]]),
						_: 1
					}),
					L(Ee, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: U(() => [...B[77] ||= [F("strong", null, "Участник", -1)]]),
						default: U(() => [B[78] ||= F("strong", null, "Запись события", -1), B[79] ||= F("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					L(Ee, { color: "var(--success)" }, {
						identity: U(() => [...B[80] ||= [F("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: U(() => [L(O, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: U(() => [L(i, { value: "Черновик" })]),
							_: 1
						})]),
						default: U(() => [B[81] ||= F("strong", null, "Компактная запись", -1), B[82] ||= F("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				F("article", ht, [
					B[87] ||= F("h2", null, "SectionList", -1),
					L(t, { title: "Записи" }, {
						footer: U(() => [L(we, { label: "Добавить запись" })]),
						default: U(() => [B[84] ||= F("div", { style: { padding: "12px 0" } }, "Первая запись", -1), B[85] ||= F("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					L(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: U(() => [...B[86] ||= [F("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), F("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				F("article", gt, [
					B[101] ||= F("h2", null, "Кнопки элементов", -1),
					F("div", _t, [
						L(De, {
							modelValue: me.value,
							"onUpdate:modelValue": B[3] ||= (e) => me.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: U(() => [...B[88] ||= [F("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [F("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}, 8, ["modelValue"]),
						L(De, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: U(() => [...B[89] ||= [F("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [F("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}),
						L(De, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: U(() => [...B[90] ||= [F("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [F("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						})
					]),
					L(D, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					L(D, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					F("div", vt, [
						L(S, null, {
							default: U(() => [...B[91] ||= [I("Основное действие", -1)]]),
							_: 1
						}),
						L(S, { variant: "secondary" }, {
							default: U(() => [...B[92] ||= [I("Вторичное", -1)]]),
							_: 1
						}),
						L(S, { variant: "quiet" }, {
							default: U(() => [...B[93] ||= [I("Тихое", -1)]]),
							_: 1
						}),
						L(S, { variant: "dashed" }, {
							default: U(() => [...B[94] ||= [I("Пунктирная рамка", -1)]]),
							_: 1
						}),
						L(S, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: U(() => [...B[95] ||= [I("✦", -1)]]),
							default: U(() => [B[96] ||= I("Действие", -1)]),
							_: 1
						}),
						L(S, {
							layout: "stacked",
							variant: "dashed",
							style: { "--action-button-height": "96px" }
						}, {
							icon: U(() => [...B[97] ||= [I("+", -1)]]),
							default: U(() => [B[98] ||= I("Добавить превью", -1)]),
							_: 1
						}),
						L(S, { disabled: "" }, {
							default: U(() => [...B[99] ||= [I("Недоступно", -1)]]),
							_: 1
						}),
						L(S, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: U(() => [...B[100] ||= [I("Загрузка", -1)]]),
							_: 1
						}),
						L(we, { label: "Добавить элемент" }),
						L(we, {
							label: "Добавить",
							variant: "icon"
						}),
						L(m, { label: "Удалить" }),
						L(m, {
							label: "Удалить",
							variant: "boxed"
						}),
						L(m, {
							label: "Удалить запись",
							icon: "trash"
						}),
						L(m, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						L(m, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				F("article", yt, [B[102] ||= F("h2", null, "SegmentDonutChart", -1), L(a, {
					segments: vn,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": yn
				})])
			])]),
			F("section", bt, [L(D, {
				title: "Переключатели",
				border: ""
			}), F("div", xt, [
				F("article", St, [B[106] ||= F("h2", null, "Boolean controls", -1), F("div", Ct, [
					L(g, {
						modelValue: _.value,
						"onUpdate:modelValue": B[4] ||= (e) => _.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					L(g, {
						modelValue: _e.value,
						"onUpdate:modelValue": B[5] ||= (e) => _e.value = e,
						label: "Обычная поверхность"
					}, null, 8, ["modelValue"]),
					F("div", wt, [L(g, {
						modelValue: ve.value,
						"onUpdate:modelValue": B[6] ||= (e) => ve.value = e,
						surface: "raised",
						block: "",
						"track-placement": "end",
						label: "Приподнятая поверхность"
					}, {
						default: U(() => [...B[103] ||= [I(" Приподнятая поверхность — вся строка переключает значение ", -1)]]),
						_: 1
					}, 8, ["modelValue"])]),
					F("label", Tt, [L(s, {
						modelValue: y.value,
						"onUpdate:modelValue": B[7] ||= (e) => y.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), B[104] ||= I(" Выбрать элемент ", -1)]),
					F("label", Et, [L(s, {
						modelValue: y.value,
						"onUpdate:modelValue": B[8] ||= (e) => y.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), B[105] ||= I(" Крупный выбор (24px) ", -1)])
				])]),
				F("article", Dt, [B[109] ||= F("h2", null, "Segmented controls", -1), F("div", Ot, [
					L(c, {
						modelValue: x.value,
						"onUpdate:modelValue": B[9] ||= (e) => x.value = e,
						options: gn,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					L(Fe, {
						modelValue: C.value,
						"onUpdate:modelValue": B[10] ||= (e) => C.value = e,
						variant: "chips",
						tabs: Q,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": U(({ tab: e }) => [L(S, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: U(() => [...B[107] ||= [I("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					L(Fe, {
						modelValue: C.value,
						"onUpdate:modelValue": B[11] ||= (e) => C.value = e,
						variant: "plain",
						tabs: Q,
						"aria-label": "Режим с собственной подложкой"
					}, {
						decoration: U(({ active: e }) => [F("span", {
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
					L(Fe, {
						modelValue: C.value,
						"onUpdate:modelValue": B[12] ||= (e) => C.value = e,
						tabs: Q,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": U(({ tab: e }) => [L(S, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: U(() => [...B[108] ||= [I("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				F("article", kt, [B[112] ||= F("h2", null, "IconNavigation", -1), F("div", At, [
					L(p, {
						modelValue: w.value,
						"onUpdate:modelValue": B[13] ||= (e) => w.value = e,
						items: T,
						label: "Horizontal sections"
					}, {
						icon: U(({ item: e }) => [(z(), P("svg", jt, [F("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Mt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					L(p, {
						modelValue: w.value,
						"onUpdate:modelValue": B[14] ||= (e) => w.value = e,
						items: T,
						pill: "",
						"content-sized": "",
						"label-size": 12,
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections sized by caption"
					}, {
						icon: U(({ item: e }) => [(z(), P("svg", Nt, [F("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Pt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					L(p, {
						modelValue: w.value,
						"onUpdate:modelValue": B[15] ||= (e) => w.value = e,
						items: T,
						pill: "",
						layout: "inline",
						"icon-size": 28,
						height: 56,
						label: "Inline sections"
					}, {
						icon: U(() => [...B[110] ||= [F("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [F("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					L(p, {
						modelValue: w.value,
						"onUpdate:modelValue": B[16] ||= (e) => w.value = e,
						items: T,
						pill: "",
						layout: "compact",
						size: 44,
						height: 48,
						radius: "var(--r-md)",
						label: "Compact sections"
					}, {
						icon: U(() => [...B[111] ||= [F("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [F("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					L(p, {
						modelValue: w.value,
						"onUpdate:modelValue": B[17] ||= (e) => w.value = e,
						items: T,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: U(({ item: e }) => [(z(), P("svg", Ft, [F("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, It)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				F("article", Lt, [B[113] ||= F("h2", null, "AppSlider", -1), F("div", Rt, [L(ce, {
					modelValue: E.value,
					"onUpdate:modelValue": B[18] ||= (e) => E.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), F("strong", null, H(E.value), 1)])])
			])]),
			F("section", zt, [L(D, {
				title: "Формы",
				border: ""
			}), F("div", Bt, [F("article", Vt, [
				B[115] ||= F("h2", null, "Form primitives", -1),
				B[116] ||= F("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				F("div", Ht, [
					L(O, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: U(() => [L(i, {
							value: $.name,
							"onUpdate:value": B[19] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					L(O, {
						label: "Дата",
						vertical: ""
					}, {
						default: U(() => [L(Ae, {
							modelValue: $.date,
							"onUpdate:modelValue": B[20] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), L(Ae, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					L(O, {
						label: "Количество",
						vertical: ""
					}, {
						default: U(() => [L(he, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: B[21] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					L(O, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: U(() => [L(he, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: B[22] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					L(O, {
						label: "Тип",
						vertical: ""
					}, {
						default: U(() => [L(Ie, {
							value: $.type,
							"onUpdate:value": B[23] ||= (e) => $.type = e
						}, {
							default: U(() => [...B[114] ||= [F("option", { value: "base" }, "Основной", -1), F("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					L(O, {
						label: "Описание",
						vertical: ""
					}, {
						default: U(() => [L(Ne, {
							value: $.description,
							"onUpdate:value": B[24] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				L(Pe, {
					"submit-text": "Сохранить",
					onCancel: bn
				})
			])])]),
			F("section", Ut, [L(D, {
				title: "Выбор значений и floating UI",
				border: ""
			}), F("div", Wt, [
				F("article", Gt, [B[117] ||= F("h2", null, "Selectors", -1), F("div", Kt, [
					L(je, {
						modelValue: A.value,
						"onUpdate:modelValue": B[25] ||= (e) => A.value = e,
						options: _n,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					L(je, {
						modelValue: A.value,
						"onUpdate:modelValue": B[26] ||= (e) => A.value = e,
						options: _n,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					L(xe, {
						modelValue: j.value,
						"onUpdate:modelValue": B[27] ||= (e) => j.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					L(xe, {
						modelValue: j.value,
						"onUpdate:modelValue": B[28] ||= (e) => j.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				F("article", qt, [
					B[119] ||= F("h2", null, "BasePopover", -1),
					F("button", {
						ref_key: "popoverAnchor",
						ref: Ue,
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[29] ||= (e) => G.value = !G.value
					}, " Открыть popover ", 512),
					L(Te, {
						open: G.value,
						anchor: Ue.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": B[30] ||= (e) => G.value = e
					}, {
						default: U(() => [...B[118] ||= [F("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				F("article", Jt, [
					B[126] ||= F("h2", null, "ActionMenu", -1),
					L(Oe, {
						title: "Действия",
						heading: "Выбранная запись",
						width: 340,
						"follow-anchor": "",
						related: ""
					}, {
						default: U(() => [
							L(v, { tone: "accent" }, {
								default: U(() => [...B[120] ||= [I("Редактировать", -1)]]),
								_: 1
							}),
							L(ge, { label: "Перемещение" }, {
								trigger: U(({ open: e }) => [L(v, {
									submenu: "",
									"submenu-open": e
								}, {
									default: U(() => [...B[121] ||= [I("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: U(() => [L(v, null, {
									default: U(() => [...B[122] ||= [I("В начало", -1)]]),
									_: 1
								}), L(v, null, {
									default: U(() => [...B[123] ||= [I("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							L(v, { tone: "danger" }, {
								default: U(() => [...B[124] ||= [I("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					F("button", {
						ref_key: "actionMenuAnchor",
						ref: Ke,
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[31] ||= (e) => qe.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					L(Oe, {
						ref_key: "anchoredActionMenu",
						ref: qe,
						anchor: Ke.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: U(({ close: e }) => [L(v, { onClick: e }, {
							default: U(() => [...B[125] ||= [I("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				F("article", Yt, [B[129] ||= F("h2", null, "AccountMenu", -1), L(te, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: U(({ close: e }) => [L(v, { onClick: e }, {
						default: U(() => [...B[127] ||= [I("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), L(v, {
						tone: "danger",
						onClick: e
					}, {
						default: U(() => [...B[128] ||= [I("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			F("section", Xt, [L(D, {
				title: "Редакторы и rich text",
				border: ""
			}), F("div", Zt, [F("article", Qt, [
				B[130] ||= F("h2", null, "Rich text", -1),
				L(ie, {
					ref: "richEditor",
					modelValue: R.value,
					"onUpdate:modelValue": B[32] ||= (e) => R.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: U(({ editor: e, insertRichNode: t }) => [F("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ve((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, $t), F("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ve((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, en)]),
					_: 1
				}, 8, ["modelValue"]),
				F("div", tn, [L(ke, { html: R.value }, {
					node: U(({ node: e }) => [F("strong", nn, H(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), F("article", rn, [B[133] ||= F("h2", null, "Editor composition", -1), L(f, null, {
				default: U(() => [L(le, { title: "Параметры" }, {
					default: U(() => [L(re, { title: "Основное" }, {
						default: U(() => [L(ae, { title: "Значение" }, {
							actions: U(() => [...B[131] ||= [F("span", null, "12", -1)]]),
							_: 1
						}), L(ce, {
							modelValue: E.value,
							"onUpdate:modelValue": B[33] ||= (e) => E.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), L(l, null, {
						default: U(() => [B[132] ||= I("Итого: ", -1), F("strong", null, H(E.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			F("section", an, [L(D, {
				title: "Каркас приложения",
				border: ""
			}), F("article", on, [
				B[139] ||= F("h2", null, "Navigation composition", -1),
				L(g, {
					modelValue: W.value,
					"onUpdate:modelValue": B[34] ||= (e) => W.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				F("div", sn, [L(pe, {
					class: Le(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": V.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: U(() => [L(ne, {
						modelValue: V.value,
						"onUpdate:modelValue": B[35] ||= (e) => V.value = e,
						elevated: W.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: U(() => [L(fe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: U(() => [...B[134] ||= [F("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: U(() => [
							L(k, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: U(() => [...B[135] ||= [F("span", null, "⌂", -1)]]),
								_: 1
							}),
							L(n, { label: "Примеры" }),
							L(k, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: U(() => [...B[136] ||= [F("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: U(() => [...B[137] ||= [F("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: U(() => [B[138] ||= F("div", { class: "share-component-gallery__chrome-content" }, [
						F("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						F("strong", null, "AppShell + AppSidebar"),
						F("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			F("section", cn, [
				L(D, {
					title: "Оверлеи и morph",
					border: ""
				}),
				F("article", ln, [B[140] ||= F("h2", null, "AppDrawer + embedded navigation", -1), L(Je)]),
				F("article", un, [B[141] ||= F("h2", null, "Интерактивные примеры", -1), F("div", dn, [
					F("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[36] ||= (e) => K.value = !0
					}, "AppModal"),
					F("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[37] ||= (e) => {
							Y.value = !1, J.value = !0, q.value = !0;
						}
					}, "AppModalFrame"),
					F("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[38] ||= (e) => {
							Y.value = !1, J.value = !1, q.value = !0;
						}
					}, "AppModalFrame без обводки"),
					F("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[39] ||= (e) => {
							Y.value = !0, q.value = !0;
						}
					}, "AppModalFrame compact"),
					F("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[40] ||= (e) => fn.value = !0
					}, "ModalShell"),
					F("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[41] ||= (e) => X.value = !0
					}, "ConfirmDialog"),
					F("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[42] ||= (e) => pn.value = !0
					}, "TextPromptDialog"),
					F("button", {
						ref_key: "morphOrigin",
						ref: hn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[43] ||= (e) => mn.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			K.value ? (z(), M(Se, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: B[44] ||= (e) => K.value = !1
			}, {
				default: U(() => [...B[142] ||= [F("div", { class: "share-component-gallery__overlay-content" }, [F("h2", null, "AppModal"), F("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : N("", !0),
			q.value ? (z(), M(e, {
				key: 1,
				compact: Y.value,
				width: Y.value ? 360 : void 0,
				outlined: J.value,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: B[47] ||= (e) => q.value = !1
			}, {
				footer: U(() => [L(Pe, {
					onCancel: B[45] ||= (e) => q.value = !1,
					onSubmit: B[46] ||= (e) => q.value = !1
				})]),
				default: U(() => [B[143] ||= F("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			}, 8, [
				"compact",
				"width",
				"outlined"
			])) : N("", !0),
			L(o, {
				open: fn.value,
				"aria-label": "Пример ModalShell",
				onClose: B[48] ||= (e) => fn.value = !1
			}, {
				default: U(() => [...B[144] ||= [F("div", { class: "share-component-gallery__overlay-content" }, [F("h2", null, "ModalShell"), F("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			L(se, {
				open: X.value,
				"onUpdate:open": B[49] ||= (e) => X.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			L(ue, {
				open: pn.value,
				"onUpdate:open": B[50] ||= (e) => pn.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			mn.value ? (z(), M(de, {
				key: 2,
				"origin-el": hn.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: B[51] ||= (e) => mn.value = !1
			}, {
				head: U(() => [...B[145] ||= [F("div", { class: "share-component-gallery__morph-head" }, [F("strong", null, "MorphSheet")], -1)]]),
				default: U(() => [B[146] ||= F("div", { class: "share-component-gallery__overlay-content" }, [F("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : N("", !0)
		]));
	}
}, [["__scopeId", "data-v-52ee18a2"]]);
//#endregion
export { J as COMPONENT_GALLERY_ALIASES, Xe as COMPONENT_GALLERY_COMPONENTS, Y as ComponentGallery };
