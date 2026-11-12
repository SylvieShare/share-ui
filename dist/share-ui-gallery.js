import { A as e, At as t, B as n, Bt as r, C as i, Ct as a, D as o, Dt as s, Et as ee, F as c, Ft as te, G as ne, H as re, I as ie, K as ae, L as oe, Mt as l, Nt as se, O as ce, Ot as le, P as u, Pt as d, R as ue, S as de, St as f, T as fe, Tt as p, V as pe, W as me, _ as m, a as h, b as he, bt as g, c as _, ct as ge, d as v, f as _e, ft as y, g as ve, h as ye, i as b, it as be, j as xe, jt as Se, k as x, kt as Ce, l as S, lt as we, m as C, n as Te, o as w, p as Ee, pt as De, q as Oe, r as ke, rt as Ae, s as T, t as je, u as E, ut as D, v as Me, w as Ne, wt as O, x as k, xt as Pe, y as Fe, z as A, zt as j } from "./StarRating-DfDHt1fU.js";
import { Fragment as M, createBlock as N, createCommentVNode as P, createElementBlock as F, createElementVNode as I, createTextVNode as L, createVNode as R, h as z, normalizeClass as Ie, openBlock as B, reactive as Le, ref as V, renderList as H, toDisplayString as U, unref as Re, withCtx as W, withModifiers as ze } from "vue";
//#region src/gallery/ChoiceCardGalleryExample.vue
var G = { class: "choice-gallery-options" }, Be = /*#__PURE__*/ r({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = V("First option"), n = V(!0), r = V(!1), i = ["Centered icon", "Long caption wraps below the icon"], a = V(i[0]), o = ["First option", "Second option"];
		return (e, s) => (B(), F("article", null, [s[6] ||= I("h2", null, "ChoiceCard", -1), I("div", G, [
			(B(), F(M, null, H(o, (e) => R(j, {
				key: e,
				label: e,
				description: "Exclusive, optional selection",
				"model-value": t.value === e,
				"onUpdate:modelValue": (n) => t.value = n ? e : ""
			}, {
				icon: W(() => [...s[2] ||= [I("svg", {
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
			R(j, {
				label: "Unavailable",
				description: "Disabled option",
				disabled: ""
			}),
			R(j, {
				label: "Compact",
				layout: "inline",
				description: "Inline choice",
				modelValue: n.value,
				"onUpdate:modelValue": s[0] ||= (e) => n.value = e
			}, {
				icon: W(() => [...s[3] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [I("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			(B(), F(M, null, H(i, (e) => R(j, {
				key: e,
				label: e,
				layout: "icon",
				"model-value": a.value === e,
				"onUpdate:modelValue": (t) => a.value = e
			}, {
				icon: W(() => [...s[4] ||= [I("svg", {
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
			R(j, {
				label: "Unavailable icon choice",
				layout: "icon",
				disabled: ""
			}),
			R(j, {
				label: "Outlined selection",
				layout: "icon",
				tinted: "",
				centered: "",
				"selection-indicator": "outline",
				color: "var(--success)",
				modelValue: r.value,
				"onUpdate:modelValue": s[1] ||= (e) => r.value = e,
				style: { "--choice-card-min-height": "88px" }
			}, {
				icon: W(() => [...s[5] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [I("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"])
		])]));
	}
}, [["__scopeId", "data-v-f926008d"]]), K = { class: "blur-gallery-scene" }, Ve = { class: "blur-gallery-label" }, He = /*#__PURE__*/ r({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = V(8);
		return (e, n) => (B(), F("article", null, [
			n[2] ||= I("h2", null, "BlurBackdrop", -1),
			R(k, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: W(() => [R(he, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			I("div", K, [
				n[1] ||= I("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				R(te, { radius: Number(t.value) }, null, 8, ["radius"]),
				I("strong", Ve, "Sharp foreground · " + U(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-f06d0545"]]), Ue = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = V(null), n = D(640), r = Le(v());
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
		return (e, a) => (B(), F(M, null, [R(C, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: W(() => [...a[0] ||= [L("Показать обучение", -1)]]),
			_: 1
		}, 512), R(_e, {
			tour: r,
			mobile: Re(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, q = { class: "drawer-gallery" }, We = { class: "drawer-gallery__actions" }, J = { class: "drawer-gallery__content" }, Y = ["onClick"], Ge = /*#__PURE__*/ r({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = V(!1), r = V(!1), i = V(!1), a = V(!1);
		return (e, o) => (B(), F("div", q, [
			o[16] ||= I("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			I("div", We, [
				I("button", {
					type: "button",
					onClick: o[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				I("button", {
					type: "button",
					onClick: o[1] ||= (e) => i.value = !0
				}, "Embedded AppSidebar"),
				R(g, {
					modelValue: a.value,
					"onUpdate:modelValue": o[2] ||= (e) => a.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			R(u, {
				modelValue: t.value,
				"onUpdate:modelValue": o[4] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": a.value
			}, {
				title: W(() => [...o[10] ||= [I("strong", null, "AppDrawer", -1)]]),
				footer: W(({ close: e }) => [I("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, Y)]),
				default: W(() => [I("div", J, [
					o[11] ||= I("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					I("button", {
						type: "button",
						onClick: o[3] ||= (e) => r.value = !0
					}, "Nested drawer"),
					(B(), F(M, null, H(24, (e) => I("p", { key: e }, "Example row " + U(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			R(u, {
				modelValue: r.value,
				"onUpdate:modelValue": o[5] ||= (e) => r.value = e,
				"aria-label": "Nested drawer",
				width: "min(360px, 90vw)",
				"z-index": 3100
			}, {
				title: W(() => [...o[12] ||= [I("strong", null, "Nested drawer", -1)]]),
				default: W(() => [o[13] ||= I("p", { class: "drawer-gallery__content" }, "Escape закрывает только верхний drawer; scroll остаётся заблокирован.", -1)]),
				_: 1
			}, 8, ["modelValue"]),
			R(u, {
				modelValue: i.value,
				"onUpdate:modelValue": o[9] ||= (e) => i.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-close": a.value
			}, {
				default: W(() => [R(re, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: W(() => [R(pe, {
						as: "div",
						label: "share-ui"
					}, {
						icon: W(() => [...o[14] ||= [L("◆", -1)]]),
						_: 1
					}), I("button", {
						type: "button",
						"aria-label": "Close navigation",
						onClick: o[6] ||= (e) => i.value = !1
					}, "×")]),
					account: W(() => [R(De, { title: "Account actions" }, {
						trigger: W(() => [R(ne, {
							label: "Example account",
							expanded: ""
						})]),
						default: W(() => [R(y, null, {
							default: W(() => [...o[15] ||= [L("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: W(() => [
						R(n, { label: "Navigation" }),
						R(A, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[7] ||= (e) => i.value = !1
						}),
						R(A, {
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
}, [["__scopeId", "data-v-8cf1614e"]]), Ke = {
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
		function ee(e) {
			let t = String(s.value.length);
			s.value.push({
				value: t,
				label: e
			}), r.value = [...r.value, t];
		}
		return (e, c) => (B(), F(M, null, [R(_, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: W(() => [
				R(E, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				R(E, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				R(E, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				R(E, {
					percent: 100,
					label: "Полное значение"
				}),
				R(S, {
					modelValue: t.value,
					"onUpdate:modelValue": c[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				R(S, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				R(T, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: c[1] ||= (e) => n.value = !n.value
				}, {
					icon: W(() => [...c[8] ||= [L("✦", -1)]]),
					trailing: W(() => [...c[9] ||= [L("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				R(T, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				R(h, {
					modelValue: r.value,
					"onUpdate:modelValue": c[2] ||= (e) => r.value = e,
					options: s.value,
					label: "Поиск и выбор",
					placeholder: "Поиск…",
					limit: 3,
					"allow-create": "",
					"create-label": "Добавить",
					onCreate: ee
				}, null, 8, ["modelValue", "options"]),
				R(w, {
					options: s.value,
					label: "Варианты",
					onSelect: c[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				R(w, {
					options: [],
					label: "Пустой список"
				}),
				I("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: c[4] ||= (e) => a.value = !0,
					onMouseleave: c[5] ||= (e) => a.value = !1,
					onFocus: c[6] ||= (e) => a.value = !0,
					onBlur: c[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (B(), N(b, {
					key: 0,
					anchor: i.value
				}, {
					default: W(() => [...c[10] ||= [L("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : P("", !0)
			]),
			_: 1
		}), R(_, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: W(() => [...c[11] ||= [L("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, qe = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.ChoiceCard.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), X = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Je = { class: "share-component-gallery" }, Ye = { class: "share-component-gallery__header" }, Xe = { class: "share-component-gallery__eyebrow" }, Ze = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, Qe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "ChoiceCard"
}, $e = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, et = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, tt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, nt = { class: "share-component-gallery__section" }, rt = { class: "share-component-gallery__grid" }, it = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, at = { class: "share-component-gallery__glass-surfaces" }, ot = { class: "share-component-gallery__tile-row" }, st = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, ct = { class: "share-component-gallery__row" }, lt = { class: "share-component-gallery__row" }, ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, mt = { class: "share-component-gallery__row" }, ht = { class: "share-component-gallery__row" }, gt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, _t = { class: "share-component-gallery__section" }, vt = { class: "share-component-gallery__grid" }, yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, bt = { class: "share-component-gallery__stack" }, xt = { style: {
	background: "var(--surface-raised)",
	padding: "8px",
	"border-radius": "var(--r-md)"
} }, St = { class: "share-component-gallery__checkbox-row" }, Ct = { class: "share-component-gallery__checkbox-row" }, wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Tt = { class: "share-component-gallery__stack" }, Et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, Dt = { class: "share-component-gallery__stack" }, Ot = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, kt = ["d"], At = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, jt = ["d"], Mt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Nt = ["d"], Pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Ft = { class: "share-component-gallery__slider" }, It = { class: "share-component-gallery__section" }, Lt = { class: "share-component-gallery__grid" }, Rt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, zt = { class: "share-component-gallery__form-grid" }, Bt = { class: "share-component-gallery__section" }, Vt = { class: "share-component-gallery__grid" }, Ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Ut = { class: "share-component-gallery__stack" }, Wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Kt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, qt = { class: "share-component-gallery__section" }, Jt = { class: "share-component-gallery__grid" }, Yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, Xt = ["onMousedown"], Zt = ["onMousedown"], Qt = { class: "share-component-gallery__preview" }, $t = { class: "share-component-gallery__rich-node" }, en = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, tn = { class: "share-component-gallery__section" }, nn = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, rn = { class: "share-component-gallery__chrome" }, an = { class: "share-component-gallery__section" }, on = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, sn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, cn = { class: "share-component-gallery__row" }, Z = /*#__PURE__*/ r({
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
		let te = qe.length, u = V(3), h = V(!0), _ = V(!0), v = V(!1), _e = V(!1), b = V(!0), S = V("md"), w = V("preview"), T = V("build"), E = [
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
		], D = V(62), j = V("rare"), M = V("#7c5ce2"), z = V("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), H = V(!0), G = V(!0), K = V(!1), Ve = V(null), q = V(null), We = V(null), J = V(!1), Y = V(!1), X = V(!1), Z = V(!1), ln = V(!1), Q = V(0), un = V(!1), dn = V(null), fn = [
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
		], pn = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], mn = [
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
		], hn = [
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
		function gn(e) {
			return `${e} МБ`;
		}
		function _n() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Le, V) => (B(), F("div", Je, [
			I("header", Ye, [I("div", null, [
				I("p", Xe, "share-ui · " + U(Re(te)) + " компонентов", 1),
				I("h1", null, U(r.title), 1),
				I("p", null, U(r.description), 1)
			]), V[49] ||= I("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			I("section", Ze, [R(He)]),
			I("section", Qe, [R(Be)]),
			I("section", $e, [
				R(je, {
					modelValue: u.value,
					"onUpdate:modelValue": V[0] ||= (e) => u.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				R(je, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				R(je, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			I("section", et, [R(Ke)]),
			I("section", tt, [V[50] ||= I("h2", null, "GuidedTour", -1), R(Ue)]),
			I("section", nt, [R(O, {
				title: "Поверхности и действия",
				border: ""
			}), I("div", rt, [
				I("article", it, [
					V[65] ||= I("h2", null, "BaseTile", -1),
					I("div", at, [R(d, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: W(() => [...V[51] ||= [L("Glass frame", -1)]]),
						_: 1
					}), R(d, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: W(() => [...V[52] ||= [L("Glass interactive", -1)]]),
						_: 1
					})]),
					R(C, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: W(() => [...V[53] ||= [L("✦", -1)]]),
						_: 1
					}),
					I("div", ot, [
						R(d, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [
								R(Se),
								V[54] ||= I("strong", null, "Акцентная плитка", -1),
								V[55] ||= I("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						R(d, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[56] ||= [I("strong", null, "Рамка", -1), I("span", null, "framed", -1)]]),
							_: 1
						}),
						R(d, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[57] ||= [I("strong", null, "Усиленная рамка", -1), I("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						R(l, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: V[1] ||= (e) => Q.value++
						}, {
							aside: W(() => [I("span", null, U(Q.value), 1)]),
							default: W(() => [V[58] ||= I("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						R(l, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...V[59] ||= [I("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						R(l, { title: "Только просмотр" }, {
							default: W(() => [...V[60] ||= [I("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						R(l, {
							title: "Редактирование по заголовку",
							"show-edit": "",
							"show-edit-icon": !1,
							"edit-label": "Редактировать",
							onEdit: V[2] ||= (e) => Q.value++
						}, {
							aside: W(() => [I("span", null, U(Q.value), 1)]),
							default: W(() => [V[61] ||= I("span", null, "Нажмите название", -1)]),
							_: 1
						}),
						R(l, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: W(() => [...V[62] ||= [I("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						R(l, null, {
							default: W(() => [...V[63] ||= [I("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						R(l, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...V[64] ||= [I("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						R(se, { title: "Общий заголовок" })
					])
				]),
				I("article", st, [
					V[66] ||= I("h2", null, "Загрузка", -1),
					R(ye, { label: "Открываем раздел…" }),
					R(ye, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					R(x, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					I("div", ct, [
						R(x, {
							label: "Загрузка",
							size: "sm"
						}),
						R(x, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						R(x, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					I("div", lt, [R(ve, {
						width: "36px",
						height: "36px",
						round: ""
					}), R(ve, { width: "60%" })])
				]),
				I("article", ut, [
					V[67] ||= I("h2", null, "InlineEdit", -1),
					R(m, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					R(m, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					R(m, {
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
				I("article", dt, [
					V[75] ||= I("h2", null, "TimelineGroup", -1),
					R(O, {
						title: "История",
						line: ""
					}, {
						actions: W(() => [...V[68] ||= [I("span", null, "2", -1)]]),
						_: 1
					}),
					R(Te, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: W(() => [...V[69] ||= [I("strong", null, "Участник", -1)]]),
						default: W(() => [V[70] ||= I("strong", null, "Запись события", -1), V[71] ||= I("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					R(Te, { color: "var(--success)" }, {
						identity: W(() => [...V[72] ||= [I("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: W(() => [R(k, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: W(() => [R(i, { value: "Черновик" })]),
							_: 1
						})]),
						default: W(() => [V[73] ||= I("strong", null, "Компактная запись", -1), V[74] ||= I("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				I("article", ft, [
					V[79] ||= I("h2", null, "SectionList", -1),
					R(t, { title: "Записи" }, {
						footer: W(() => [R(Ce, { label: "Добавить запись" })]),
						default: W(() => [V[76] ||= I("div", { style: { padding: "12px 0" } }, "Первая запись", -1), V[77] ||= I("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					R(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: W(() => [...V[78] ||= [I("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), I("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				I("article", pt, [
					V[93] ||= I("h2", null, "Кнопки элементов", -1),
					I("div", mt, [
						R(Ee, {
							modelValue: h.value,
							"onUpdate:modelValue": V[3] ||= (e) => h.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: W(() => [...V[80] ||= [I("svg", {
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
						R(Ee, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: W(() => [...V[81] ||= [I("svg", {
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
						R(Ee, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: W(() => [...V[82] ||= [I("svg", {
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
					R(O, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					R(O, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					I("div", ht, [
						R(C, null, {
							default: W(() => [...V[83] ||= [L("Основное действие", -1)]]),
							_: 1
						}),
						R(C, { variant: "secondary" }, {
							default: W(() => [...V[84] ||= [L("Вторичное", -1)]]),
							_: 1
						}),
						R(C, { variant: "quiet" }, {
							default: W(() => [...V[85] ||= [L("Тихое", -1)]]),
							_: 1
						}),
						R(C, { variant: "dashed" }, {
							default: W(() => [...V[86] ||= [L("Пунктирная рамка", -1)]]),
							_: 1
						}),
						R(C, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: W(() => [...V[87] ||= [L("✦", -1)]]),
							default: W(() => [V[88] ||= L("Действие", -1)]),
							_: 1
						}),
						R(C, {
							layout: "stacked",
							variant: "dashed",
							style: { "--action-button-height": "96px" }
						}, {
							icon: W(() => [...V[89] ||= [L("+", -1)]]),
							default: W(() => [V[90] ||= L("Добавить превью", -1)]),
							_: 1
						}),
						R(C, { disabled: "" }, {
							default: W(() => [...V[91] ||= [L("Недоступно", -1)]]),
							_: 1
						}),
						R(C, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: W(() => [...V[92] ||= [L("Загрузка", -1)]]),
							_: 1
						}),
						R(Ce, { label: "Добавить элемент" }),
						R(Ce, {
							label: "Добавить",
							variant: "icon"
						}),
						R(p, { label: "Удалить" }),
						R(p, {
							label: "Удалить",
							variant: "boxed"
						}),
						R(p, {
							label: "Удалить запись",
							icon: "trash"
						}),
						R(p, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						R(p, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				I("article", gt, [V[94] ||= I("h2", null, "SegmentDonutChart", -1), R(a, {
					segments: hn,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": gn
				})])
			])]),
			I("section", _t, [R(O, {
				title: "Переключатели",
				border: ""
			}), I("div", vt, [
				I("article", yt, [V[98] ||= I("h2", null, "Boolean controls", -1), I("div", bt, [
					R(g, {
						modelValue: _.value,
						"onUpdate:modelValue": V[4] ||= (e) => _.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					R(g, {
						modelValue: v.value,
						"onUpdate:modelValue": V[5] ||= (e) => v.value = e,
						label: "Обычная поверхность"
					}, null, 8, ["modelValue"]),
					I("div", xt, [R(g, {
						modelValue: _e.value,
						"onUpdate:modelValue": V[6] ||= (e) => _e.value = e,
						surface: "raised",
						block: "",
						"track-placement": "end",
						label: "Приподнятая поверхность"
					}, {
						default: W(() => [...V[95] ||= [L(" Приподнятая поверхность — вся строка переключает значение ", -1)]]),
						_: 1
					}, 8, ["modelValue"])]),
					I("label", St, [R(s, {
						modelValue: b.value,
						"onUpdate:modelValue": V[7] ||= (e) => b.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), V[96] ||= L(" Выбрать элемент ", -1)]),
					I("label", Ct, [R(s, {
						modelValue: b.value,
						"onUpdate:modelValue": V[8] ||= (e) => b.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), V[97] ||= L(" Крупный выбор (24px) ", -1)])
				])]),
				I("article", wt, [V[101] ||= I("h2", null, "Segmented controls", -1), I("div", Tt, [
					R(ee, {
						modelValue: S.value,
						"onUpdate:modelValue": V[9] ||= (e) => S.value = e,
						options: fn,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					R(Pe, {
						modelValue: w.value,
						"onUpdate:modelValue": V[10] ||= (e) => w.value = e,
						variant: "chips",
						tabs: pn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": W(({ tab: e }) => [R(C, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: W(() => [...V[99] ||= [L("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					R(Pe, {
						modelValue: w.value,
						"onUpdate:modelValue": V[11] ||= (e) => w.value = e,
						tabs: pn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": W(({ tab: e }) => [R(C, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: W(() => [...V[100] ||= [L("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				I("article", Et, [V[104] ||= I("h2", null, "IconNavigation", -1), I("div", Dt, [
					R(f, {
						modelValue: T.value,
						"onUpdate:modelValue": V[12] ||= (e) => T.value = e,
						items: E,
						label: "Horizontal sections"
					}, {
						icon: W(({ item: e }) => [(B(), F("svg", Ot, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, kt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					R(f, {
						modelValue: T.value,
						"onUpdate:modelValue": V[13] ||= (e) => T.value = e,
						items: E,
						pill: "",
						"content-sized": "",
						"label-size": 12,
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections sized by caption"
					}, {
						icon: W(({ item: e }) => [(B(), F("svg", At, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, jt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					R(f, {
						modelValue: T.value,
						"onUpdate:modelValue": V[14] ||= (e) => T.value = e,
						items: E,
						pill: "",
						layout: "inline",
						"icon-size": 28,
						height: 56,
						label: "Inline sections"
					}, {
						icon: W(() => [...V[102] ||= [I("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [I("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					R(f, {
						modelValue: T.value,
						"onUpdate:modelValue": V[15] ||= (e) => T.value = e,
						items: E,
						pill: "",
						layout: "compact",
						size: 44,
						height: 48,
						radius: "var(--r-md)",
						label: "Compact sections"
					}, {
						icon: W(() => [...V[103] ||= [I("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [I("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					R(f, {
						modelValue: T.value,
						"onUpdate:modelValue": V[16] ||= (e) => T.value = e,
						items: E,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: W(({ item: e }) => [(B(), F("svg", Mt, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Nt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				I("article", Pt, [V[105] ||= I("h2", null, "AppSlider", -1), I("div", Ft, [R(le, {
					modelValue: D.value,
					"onUpdate:modelValue": V[17] ||= (e) => D.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), I("strong", null, U(D.value), 1)])])
			])]),
			I("section", It, [R(O, {
				title: "Формы",
				border: ""
			}), I("div", Lt, [I("article", Rt, [
				V[107] ||= I("h2", null, "Form primitives", -1),
				V[108] ||= I("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				I("div", zt, [
					R(k, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: W(() => [R(i, {
							value: $.name,
							"onUpdate:value": V[18] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(k, {
						label: "Дата",
						vertical: ""
					}, {
						default: W(() => [R(ke, {
							modelValue: $.date,
							"onUpdate:modelValue": V[19] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), R(ke, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					R(k, {
						label: "Количество",
						vertical: ""
					}, {
						default: W(() => [R(he, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: V[20] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(k, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: W(() => [R(he, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: V[21] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(k, {
						label: "Тип",
						vertical: ""
					}, {
						default: W(() => [R(Fe, {
							value: $.type,
							"onUpdate:value": V[22] ||= (e) => $.type = e
						}, {
							default: W(() => [...V[106] ||= [I("option", { value: "base" }, "Основной", -1), I("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					R(k, {
						label: "Описание",
						vertical: ""
					}, {
						default: W(() => [R(Me, {
							value: $.description,
							"onUpdate:value": V[23] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				R(Ne, {
					"submit-text": "Сохранить",
					onCancel: _n
				})
			])])]),
			I("section", Bt, [R(O, {
				title: "Выбор значений и floating UI",
				border: ""
			}), I("div", Vt, [
				I("article", Ht, [V[109] ||= I("h2", null, "Selectors", -1), I("div", Ut, [
					R(Ae, {
						modelValue: j.value,
						"onUpdate:modelValue": V[24] ||= (e) => j.value = e,
						options: mn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					R(Ae, {
						modelValue: j.value,
						"onUpdate:modelValue": V[25] ||= (e) => j.value = e,
						options: mn,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					R(be, {
						modelValue: M.value,
						"onUpdate:modelValue": V[26] ||= (e) => M.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					R(be, {
						modelValue: M.value,
						"onUpdate:modelValue": V[27] ||= (e) => M.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				I("article", Wt, [
					V[111] ||= I("h2", null, "BasePopover", -1),
					I("button", {
						ref_key: "popoverAnchor",
						ref: Ve,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[28] ||= (e) => K.value = !K.value
					}, " Открыть popover ", 512),
					R(we, {
						open: K.value,
						anchor: Ve.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": V[29] ||= (e) => K.value = e
					}, {
						default: W(() => [...V[110] ||= [I("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				I("article", Gt, [
					V[118] ||= I("h2", null, "ActionMenu", -1),
					R(De, {
						title: "Действия",
						heading: "Выбранная запись",
						related: ""
					}, {
						default: W(() => [
							R(y, { tone: "accent" }, {
								default: W(() => [...V[112] ||= [L("Редактировать", -1)]]),
								_: 1
							}),
							R(ge, { label: "Перемещение" }, {
								trigger: W(({ open: e }) => [R(y, {
									submenu: "",
									"submenu-open": e
								}, {
									default: W(() => [...V[113] ||= [L("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: W(() => [R(y, null, {
									default: W(() => [...V[114] ||= [L("В начало", -1)]]),
									_: 1
								}), R(y, null, {
									default: W(() => [...V[115] ||= [L("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							R(y, { tone: "danger" }, {
								default: W(() => [...V[116] ||= [L("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					I("button", {
						ref_key: "actionMenuAnchor",
						ref: q,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[30] ||= (e) => We.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					R(De, {
						ref_key: "anchoredActionMenu",
						ref: We,
						anchor: q.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: W(({ close: e }) => [R(y, { onClick: e }, {
							default: W(() => [...V[117] ||= [L("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				I("article", Kt, [V[121] ||= I("h2", null, "AccountMenu", -1), R(ne, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: W(({ close: e }) => [R(y, { onClick: e }, {
						default: W(() => [...V[119] ||= [L("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), R(y, {
						tone: "danger",
						onClick: e
					}, {
						default: W(() => [...V[120] ||= [L("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			I("section", qt, [R(O, {
				title: "Редакторы и rich text",
				border: ""
			}), I("div", Jt, [I("article", Yt, [
				V[122] ||= I("h2", null, "Rich text", -1),
				R(ae, {
					ref: "richEditor",
					modelValue: z.value,
					"onUpdate:modelValue": V[31] ||= (e) => z.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: W(({ editor: e, insertRichNode: t }) => [I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: ze((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, Xt), I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: ze((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Zt)]),
					_: 1
				}, 8, ["modelValue"]),
				I("div", Qt, [R(Oe, { html: z.value }, {
					node: W(({ node: e }) => [I("strong", $t, U(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), I("article", en, [V[125] ||= I("h2", null, "Editor composition", -1), R(d, null, {
				default: W(() => [R(ue, { title: "Параметры" }, {
					default: W(() => [R(ie, { title: "Основное" }, {
						default: W(() => [R(oe, { title: "Значение" }, {
							actions: W(() => [...V[123] ||= [I("span", null, "12", -1)]]),
							_: 1
						}), R(le, {
							modelValue: D.value,
							"onUpdate:modelValue": V[32] ||= (e) => D.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), R(c, null, {
						default: W(() => [V[124] ||= L("Итого: ", -1), I("strong", null, U(D.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			I("section", tn, [R(O, {
				title: "Каркас приложения",
				border: ""
			}), I("article", nn, [
				V[131] ||= I("h2", null, "Navigation composition", -1),
				R(g, {
					modelValue: G.value,
					"onUpdate:modelValue": V[33] ||= (e) => G.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				I("div", rn, [R(me, {
					class: Ie(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": H.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: W(() => [R(re, {
						modelValue: H.value,
						"onUpdate:modelValue": V[34] ||= (e) => H.value = e,
						elevated: G.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: W(() => [R(pe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: W(() => [...V[126] ||= [I("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: W(() => [
							R(A, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: W(() => [...V[127] ||= [I("span", null, "⌂", -1)]]),
								_: 1
							}),
							R(n, { label: "Примеры" }),
							R(A, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: W(() => [...V[128] ||= [I("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: W(() => [...V[129] ||= [I("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: W(() => [V[130] ||= I("div", { class: "share-component-gallery__chrome-content" }, [
						I("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						I("strong", null, "AppShell + AppSidebar"),
						I("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			I("section", an, [
				R(O, {
					title: "Оверлеи и morph",
					border: ""
				}),
				I("article", on, [V[132] ||= I("h2", null, "AppDrawer + embedded navigation", -1), R(Ge)]),
				I("article", sn, [V[133] ||= I("h2", null, "Интерактивные примеры", -1), I("div", cn, [
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[35] ||= (e) => J.value = !0
					}, "AppModal"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[36] ||= (e) => Y.value = !0
					}, "AppModalFrame"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[37] ||= (e) => X.value = !0
					}, "ModalShell"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[38] ||= (e) => Z.value = !0
					}, "ConfirmDialog"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[39] ||= (e) => ln.value = !0
					}, "TextPromptDialog"),
					I("button", {
						ref_key: "morphOrigin",
						ref: dn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[40] ||= (e) => un.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			J.value ? (B(), N(xe, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: V[41] ||= (e) => J.value = !1
			}, {
				default: W(() => [...V[134] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "AppModal"), I("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : P("", !0),
			Y.value ? (B(), N(e, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: V[44] ||= (e) => Y.value = !1
			}, {
				footer: W(() => [R(Ne, {
					onCancel: V[42] ||= (e) => Y.value = !1,
					onSubmit: V[43] ||= (e) => Y.value = !1
				})]),
				default: W(() => [V[135] ||= I("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : P("", !0),
			R(o, {
				open: X.value,
				"aria-label": "Пример ModalShell",
				onClose: V[45] ||= (e) => X.value = !1
			}, {
				default: W(() => [...V[136] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "ModalShell"), I("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			R(ce, {
				open: Z.value,
				"onUpdate:open": V[46] ||= (e) => Z.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			R(de, {
				open: ln.value,
				"onUpdate:open": V[47] ||= (e) => ln.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			un.value ? (B(), N(fe, {
				key: 2,
				"origin-el": dn.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: V[48] ||= (e) => un.value = !1
			}, {
				head: W(() => [...V[137] ||= [I("div", { class: "share-component-gallery__morph-head" }, [I("strong", null, "MorphSheet")], -1)]]),
				default: W(() => [V[138] ||= I("div", { class: "share-component-gallery__overlay-content" }, [I("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : P("", !0)
		]));
	}
}, [["__scopeId", "data-v-192720e8"]]);
//#endregion
export { X as COMPONENT_GALLERY_ALIASES, qe as COMPONENT_GALLERY_COMPONENTS, Z as ComponentGallery };
