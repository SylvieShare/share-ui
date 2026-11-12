import { A as e, At as t, B as n, Bt as r, C as i, Ct as a, D as o, Dt as s, Et as ee, F as c, Ft as te, G as ne, H as re, I as ie, K as ae, L as oe, Mt as l, Nt as se, O as ce, Ot as le, P as u, Pt as d, R as ue, S as de, St as f, T as fe, Tt as p, V as pe, W as me, _ as m, a as h, b as g, bt as he, c as _, ct as ge, d as v, f as _e, ft as y, g as ve, h as ye, i as b, it as be, j as xe, jt as Se, k as x, kt as Ce, l as S, lt as we, m as C, n as Te, o as w, p as T, pt as Ee, q as De, r as Oe, rt as ke, s as E, t as D, u as O, ut as k, v as Ae, w as je, wt as A, x as j, xt as Me, y as Ne, z as M, zt as N } from "./StarRating-BE9Cs8MP.js";
import { Fragment as P, createBlock as F, createCommentVNode as I, createElementBlock as L, createElementVNode as R, createTextVNode as z, createVNode as B, h as V, normalizeClass as Pe, openBlock as H, reactive as Fe, ref as U, renderList as W, toDisplayString as G, unref as Ie, withCtx as K, withModifiers as Le } from "vue";
//#region src/gallery/ChoiceCardGalleryExample.vue
var Re = { class: "choice-gallery-options" }, ze = /*#__PURE__*/ r({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = U("First option"), n = U(!0), r = ["Centered icon", "Long caption wraps below the icon"], i = U(r[0]), a = ["First option", "Second option"];
		return (e, o) => (H(), L("article", null, [o[4] ||= R("h2", null, "ChoiceCard", -1), R("div", Re, [
			(H(), L(P, null, W(a, (e) => B(N, {
				key: e,
				label: e,
				description: "Exclusive, optional selection",
				"model-value": t.value === e,
				"onUpdate:modelValue": (n) => t.value = n ? e : ""
			}, {
				icon: K(() => [...o[1] ||= [R("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [R("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, [
				"label",
				"model-value",
				"onUpdate:modelValue"
			])), 64)),
			B(N, {
				label: "Unavailable",
				description: "Disabled option",
				disabled: ""
			}),
			B(N, {
				label: "Compact",
				layout: "inline",
				description: "Inline choice",
				modelValue: n.value,
				"onUpdate:modelValue": o[0] ||= (e) => n.value = e
			}, {
				icon: K(() => [...o[2] ||= [R("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [R("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			(H(), L(P, null, W(r, (e) => B(N, {
				key: e,
				label: e,
				layout: "icon",
				"model-value": i.value === e,
				"onUpdate:modelValue": (t) => i.value = e
			}, {
				icon: K(() => [...o[3] ||= [R("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [R("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, [
				"label",
				"model-value",
				"onUpdate:modelValue"
			])), 64)),
			B(N, {
				label: "Unavailable icon choice",
				layout: "icon",
				disabled: ""
			})
		])]));
	}
}, [["__scopeId", "data-v-8c1e8a27"]]), Be = { class: "blur-gallery-scene" }, Ve = { class: "blur-gallery-label" }, He = /*#__PURE__*/ r({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = U(8);
		return (e, n) => (H(), L("article", null, [
			n[2] ||= R("h2", null, "BlurBackdrop", -1),
			B(j, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: K(() => [B(g, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			R("div", Be, [
				n[1] ||= R("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				B(te, { radius: Number(t.value) }, null, 8, ["radius"]),
				R("strong", Ve, "Sharp foreground · " + G(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-34aec14d"]]), Ue = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = U(null), n = k(640), r = Fe(v());
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
		return (e, a) => (H(), L(P, null, [B(C, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: K(() => [...a[0] ||= [z("Показать обучение", -1)]]),
			_: 1
		}, 512), B(_e, {
			tour: r,
			mobile: Ie(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, q = { class: "drawer-gallery" }, J = { class: "drawer-gallery__actions" }, Y = { class: "drawer-gallery__content" }, X = ["onClick"], We = /*#__PURE__*/ r({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = U(!1), r = U(!1), i = U(!1), a = U(!1);
		return (e, o) => (H(), L("div", q, [
			o[16] ||= R("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			R("div", J, [
				R("button", {
					type: "button",
					onClick: o[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				R("button", {
					type: "button",
					onClick: o[1] ||= (e) => i.value = !0
				}, "Embedded AppSidebar"),
				B(he, {
					modelValue: a.value,
					"onUpdate:modelValue": o[2] ||= (e) => a.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			B(u, {
				modelValue: t.value,
				"onUpdate:modelValue": o[4] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": a.value
			}, {
				title: K(() => [...o[10] ||= [R("strong", null, "AppDrawer", -1)]]),
				footer: K(({ close: e }) => [R("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, X)]),
				default: K(() => [R("div", Y, [
					o[11] ||= R("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					R("button", {
						type: "button",
						onClick: o[3] ||= (e) => r.value = !0
					}, "Nested drawer"),
					(H(), L(P, null, W(24, (e) => R("p", { key: e }, "Example row " + G(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			B(u, {
				modelValue: r.value,
				"onUpdate:modelValue": o[5] ||= (e) => r.value = e,
				"aria-label": "Nested drawer",
				width: "min(360px, 90vw)",
				"z-index": 3100
			}, {
				title: K(() => [...o[12] ||= [R("strong", null, "Nested drawer", -1)]]),
				default: K(() => [o[13] ||= R("p", { class: "drawer-gallery__content" }, "Escape закрывает только верхний drawer; scroll остаётся заблокирован.", -1)]),
				_: 1
			}, 8, ["modelValue"]),
			B(u, {
				modelValue: i.value,
				"onUpdate:modelValue": o[9] ||= (e) => i.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-close": a.value
			}, {
				default: K(() => [B(re, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: K(() => [B(pe, {
						as: "div",
						label: "share-ui"
					}, {
						icon: K(() => [...o[14] ||= [z("◆", -1)]]),
						_: 1
					}), R("button", {
						type: "button",
						"aria-label": "Close navigation",
						onClick: o[6] ||= (e) => i.value = !1
					}, "×")]),
					account: K(() => [B(Ee, { title: "Account actions" }, {
						trigger: K(() => [B(ne, {
							label: "Example account",
							expanded: ""
						})]),
						default: K(() => [B(y, null, {
							default: K(() => [...o[15] ||= [z("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: K(() => [
						B(n, { label: "Navigation" }),
						B(M, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[7] ||= (e) => i.value = !1
						}),
						B(M, {
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
}, [["__scopeId", "data-v-51dc5ffe"]]), Ge = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = U("star"), n = U(!1), r = U([]), i = U(null), a = U(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => V("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => V("span", "●") }
		}], s = U([{
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
		return (e, c) => (H(), L(P, null, [B(_, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: K(() => [
				B(O, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				B(O, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				B(O, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				B(O, {
					percent: 100,
					label: "Полное значение"
				}),
				B(S, {
					modelValue: t.value,
					"onUpdate:modelValue": c[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				B(S, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				B(E, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: c[1] ||= (e) => n.value = !n.value
				}, {
					icon: K(() => [...c[8] ||= [z("✦", -1)]]),
					trailing: K(() => [...c[9] ||= [z("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				B(E, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				B(h, {
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
				B(w, {
					options: s.value,
					label: "Варианты",
					onSelect: c[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				B(w, {
					options: [],
					label: "Пустой список"
				}),
				R("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: c[4] ||= (e) => a.value = !0,
					onMouseleave: c[5] ||= (e) => a.value = !1,
					onFocus: c[6] ||= (e) => a.value = !0,
					onBlur: c[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (H(), F(b, {
					key: 0,
					anchor: i.value
				}, {
					default: K(() => [...c[10] ||= [z("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : I("", !0)
			]),
			_: 1
		}), B(_, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: K(() => [...c[11] ||= [z("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Ke = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.ChoiceCard.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), Z = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), qe = { class: "share-component-gallery" }, Je = { class: "share-component-gallery__header" }, Ye = { class: "share-component-gallery__eyebrow" }, Xe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, Ze = {
	class: "share-component-gallery__section",
	"data-share-gallery": "ChoiceCard"
}, Qe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, $e = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, et = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, tt = { class: "share-component-gallery__section" }, nt = { class: "share-component-gallery__grid" }, rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, it = { class: "share-component-gallery__glass-surfaces" }, at = { class: "share-component-gallery__tile-row" }, ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, st = { class: "share-component-gallery__row" }, ct = { class: "share-component-gallery__row" }, lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, pt = { class: "share-component-gallery__row" }, mt = { class: "share-component-gallery__row" }, ht = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, gt = { class: "share-component-gallery__section" }, _t = { class: "share-component-gallery__grid" }, vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, yt = { class: "share-component-gallery__stack" }, bt = { class: "share-component-gallery__checkbox-row" }, xt = { class: "share-component-gallery__checkbox-row" }, St = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Ct = { class: "share-component-gallery__stack" }, wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, Tt = { class: "share-component-gallery__stack" }, Et = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Dt = ["d"], Ot = {
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
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Nt = { class: "share-component-gallery__slider" }, Pt = { class: "share-component-gallery__section" }, Ft = { class: "share-component-gallery__grid" }, It = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Lt = { class: "share-component-gallery__form-grid" }, Rt = { class: "share-component-gallery__section" }, zt = { class: "share-component-gallery__grid" }, Bt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Vt = { class: "share-component-gallery__stack" }, Ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Gt = { class: "share-component-gallery__section" }, Kt = { class: "share-component-gallery__grid" }, qt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, Jt = ["onMousedown"], Yt = ["onMousedown"], Xt = { class: "share-component-gallery__preview" }, Zt = { class: "share-component-gallery__rich-node" }, Qt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, $t = { class: "share-component-gallery__section" }, en = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, tn = { class: "share-component-gallery__chrome" }, nn = { class: "share-component-gallery__section" }, rn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, an = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, on = { class: "share-component-gallery__row" }, Q = /*#__PURE__*/ r({
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
		let te = Ke.length, u = U(3), h = U(!0), _ = U(!0), v = U(!0), _e = U("md"), b = U("preview"), S = U("build"), w = [
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
		], E = U(62), O = U("rare"), k = U("#7c5ce2"), N = U("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), P = U(!0), V = U(!0), W = U(!1), Re = U(null), Be = U(null), Ve = U(null), q = U(!1), J = U(!1), Y = U(!1), X = U(!1), Z = U(!1), Q = U(0), sn = U(!1), cn = U(null), ln = [
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
		], un = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], dn = [
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
		], fn = [
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
		], $ = Fe({
			date: "",
			name: "Новый элемент",
			count: 3,
			fraction: 1.25,
			type: "base",
			description: ""
		});
		function pn(e) {
			return `${e} МБ`;
		}
		function mn() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Fe, U) => (H(), L("div", qe, [
			R("header", Je, [R("div", null, [
				R("p", Ye, "share-ui · " + G(Ie(te)) + " компонентов", 1),
				R("h1", null, G(r.title), 1),
				R("p", null, G(r.description), 1)
			]), U[47] ||= R("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			R("section", Xe, [B(He)]),
			R("section", Ze, [B(ze)]),
			R("section", Qe, [
				B(D, {
					modelValue: u.value,
					"onUpdate:modelValue": U[0] ||= (e) => u.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				B(D, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				B(D, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			R("section", $e, [B(Ge)]),
			R("section", et, [U[48] ||= R("h2", null, "GuidedTour", -1), B(Ue)]),
			R("section", tt, [B(A, {
				title: "Поверхности и действия",
				border: ""
			}), R("div", nt, [
				R("article", rt, [
					U[63] ||= R("h2", null, "BaseTile", -1),
					R("div", it, [B(d, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: K(() => [...U[49] ||= [z("Glass frame", -1)]]),
						_: 1
					}), B(d, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: K(() => [...U[50] ||= [z("Glass interactive", -1)]]),
						_: 1
					})]),
					B(C, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: K(() => [...U[51] ||= [z("✦", -1)]]),
						_: 1
					}),
					R("div", at, [
						B(d, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [
								B(Se),
								U[52] ||= R("strong", null, "Акцентная плитка", -1),
								U[53] ||= R("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						B(d, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...U[54] ||= [R("strong", null, "Рамка", -1), R("span", null, "framed", -1)]]),
							_: 1
						}),
						B(d, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...U[55] ||= [R("strong", null, "Усиленная рамка", -1), R("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						B(l, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: U[1] ||= (e) => Q.value++
						}, {
							aside: K(() => [R("span", null, G(Q.value), 1)]),
							default: K(() => [U[56] ||= R("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						B(l, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: K(() => [...U[57] ||= [R("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						B(l, { title: "Только просмотр" }, {
							default: K(() => [...U[58] ||= [R("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						B(l, {
							title: "Редактирование по заголовку",
							"show-edit": "",
							"show-edit-icon": !1,
							"edit-label": "Редактировать",
							onEdit: U[2] ||= (e) => Q.value++
						}, {
							aside: K(() => [R("span", null, G(Q.value), 1)]),
							default: K(() => [U[59] ||= R("span", null, "Нажмите название", -1)]),
							_: 1
						}),
						B(l, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: K(() => [...U[60] ||= [R("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						B(l, null, {
							default: K(() => [...U[61] ||= [R("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						B(l, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: K(() => [...U[62] ||= [R("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						B(se, { title: "Общий заголовок" })
					])
				]),
				R("article", ot, [
					U[64] ||= R("h2", null, "Загрузка", -1),
					B(ye, { label: "Открываем раздел…" }),
					B(ye, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					B(x, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					R("div", st, [
						B(x, {
							label: "Загрузка",
							size: "sm"
						}),
						B(x, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						B(x, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					R("div", ct, [B(ve, {
						width: "36px",
						height: "36px",
						round: ""
					}), B(ve, { width: "60%" })])
				]),
				R("article", lt, [
					U[65] ||= R("h2", null, "InlineEdit", -1),
					B(m, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					B(m, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					B(m, {
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
				R("article", ut, [
					U[73] ||= R("h2", null, "TimelineGroup", -1),
					B(A, {
						title: "История",
						line: ""
					}, {
						actions: K(() => [...U[66] ||= [R("span", null, "2", -1)]]),
						_: 1
					}),
					B(Te, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: K(() => [...U[67] ||= [R("strong", null, "Участник", -1)]]),
						default: K(() => [U[68] ||= R("strong", null, "Запись события", -1), U[69] ||= R("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					B(Te, { color: "var(--success)" }, {
						identity: K(() => [...U[70] ||= [R("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: K(() => [B(j, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: K(() => [B(i, { value: "Черновик" })]),
							_: 1
						})]),
						default: K(() => [U[71] ||= R("strong", null, "Компактная запись", -1), U[72] ||= R("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				R("article", dt, [
					U[77] ||= R("h2", null, "SectionList", -1),
					B(t, { title: "Записи" }, {
						footer: K(() => [B(Ce, { label: "Добавить запись" })]),
						default: K(() => [U[74] ||= R("div", { style: { padding: "12px 0" } }, "Первая запись", -1), U[75] ||= R("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					B(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: K(() => [...U[76] ||= [R("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), R("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				R("article", ft, [
					U[91] ||= R("h2", null, "Кнопки элементов", -1),
					R("div", pt, [
						B(T, {
							modelValue: h.value,
							"onUpdate:modelValue": U[3] ||= (e) => h.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: K(() => [...U[78] ||= [R("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [R("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}, 8, ["modelValue"]),
						B(T, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: K(() => [...U[79] ||= [R("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [R("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}),
						B(T, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: K(() => [...U[80] ||= [R("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [R("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						})
					]),
					B(A, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					B(A, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					R("div", mt, [
						B(C, null, {
							default: K(() => [...U[81] ||= [z("Основное действие", -1)]]),
							_: 1
						}),
						B(C, { variant: "secondary" }, {
							default: K(() => [...U[82] ||= [z("Вторичное", -1)]]),
							_: 1
						}),
						B(C, { variant: "quiet" }, {
							default: K(() => [...U[83] ||= [z("Тихое", -1)]]),
							_: 1
						}),
						B(C, { variant: "dashed" }, {
							default: K(() => [...U[84] ||= [z("Пунктирная рамка", -1)]]),
							_: 1
						}),
						B(C, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: K(() => [...U[85] ||= [z("✦", -1)]]),
							default: K(() => [U[86] ||= z("Действие", -1)]),
							_: 1
						}),
						B(C, {
							layout: "stacked",
							variant: "dashed",
							style: { "--action-button-height": "96px" }
						}, {
							icon: K(() => [...U[87] ||= [z("+", -1)]]),
							default: K(() => [U[88] ||= z("Добавить превью", -1)]),
							_: 1
						}),
						B(C, { disabled: "" }, {
							default: K(() => [...U[89] ||= [z("Недоступно", -1)]]),
							_: 1
						}),
						B(C, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: K(() => [...U[90] ||= [z("Загрузка", -1)]]),
							_: 1
						}),
						B(Ce, { label: "Добавить элемент" }),
						B(Ce, {
							label: "Добавить",
							variant: "icon"
						}),
						B(p, { label: "Удалить" }),
						B(p, {
							label: "Удалить",
							variant: "boxed"
						}),
						B(p, {
							label: "Удалить запись",
							icon: "trash"
						}),
						B(p, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						B(p, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				R("article", ht, [U[92] ||= R("h2", null, "SegmentDonutChart", -1), B(a, {
					segments: fn,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": pn
				})])
			])]),
			R("section", gt, [B(A, {
				title: "Переключатели",
				border: ""
			}), R("div", _t, [
				R("article", vt, [U[95] ||= R("h2", null, "Boolean controls", -1), R("div", yt, [
					B(he, {
						modelValue: _.value,
						"onUpdate:modelValue": U[4] ||= (e) => _.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					R("label", bt, [B(s, {
						modelValue: v.value,
						"onUpdate:modelValue": U[5] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), U[93] ||= z(" Выбрать элемент ", -1)]),
					R("label", xt, [B(s, {
						modelValue: v.value,
						"onUpdate:modelValue": U[6] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), U[94] ||= z(" Крупный выбор (24px) ", -1)])
				])]),
				R("article", St, [U[98] ||= R("h2", null, "Segmented controls", -1), R("div", Ct, [
					B(ee, {
						modelValue: _e.value,
						"onUpdate:modelValue": U[7] ||= (e) => _e.value = e,
						options: ln,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					B(Me, {
						modelValue: b.value,
						"onUpdate:modelValue": U[8] ||= (e) => b.value = e,
						variant: "chips",
						tabs: un,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": K(({ tab: e }) => [B(C, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: K(() => [...U[96] ||= [z("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					B(Me, {
						modelValue: b.value,
						"onUpdate:modelValue": U[9] ||= (e) => b.value = e,
						tabs: un,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": K(({ tab: e }) => [B(C, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: K(() => [...U[97] ||= [z("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				R("article", wt, [U[101] ||= R("h2", null, "IconNavigation", -1), R("div", Tt, [
					B(f, {
						modelValue: S.value,
						"onUpdate:modelValue": U[10] ||= (e) => S.value = e,
						items: w,
						label: "Horizontal sections"
					}, {
						icon: K(({ item: e }) => [(H(), L("svg", Et, [R("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Dt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					B(f, {
						modelValue: S.value,
						"onUpdate:modelValue": U[11] ||= (e) => S.value = e,
						items: w,
						pill: "",
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections"
					}, {
						icon: K(({ item: e }) => [(H(), L("svg", Ot, [R("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, kt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					B(f, {
						modelValue: S.value,
						"onUpdate:modelValue": U[12] ||= (e) => S.value = e,
						items: w,
						pill: "",
						layout: "inline",
						"icon-size": 28,
						height: 56,
						label: "Inline sections"
					}, {
						icon: K(() => [...U[99] ||= [R("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [R("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					B(f, {
						modelValue: S.value,
						"onUpdate:modelValue": U[13] ||= (e) => S.value = e,
						items: w,
						pill: "",
						layout: "compact",
						size: 44,
						height: 48,
						radius: "var(--r-md)",
						label: "Compact sections"
					}, {
						icon: K(() => [...U[100] ||= [R("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [R("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					B(f, {
						modelValue: S.value,
						"onUpdate:modelValue": U[14] ||= (e) => S.value = e,
						items: w,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: K(({ item: e }) => [(H(), L("svg", At, [R("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, jt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				R("article", Mt, [U[102] ||= R("h2", null, "AppSlider", -1), R("div", Nt, [B(le, {
					modelValue: E.value,
					"onUpdate:modelValue": U[15] ||= (e) => E.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), R("strong", null, G(E.value), 1)])])
			])]),
			R("section", Pt, [B(A, {
				title: "Формы",
				border: ""
			}), R("div", Ft, [R("article", It, [
				U[104] ||= R("h2", null, "Form primitives", -1),
				U[105] ||= R("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				R("div", Lt, [
					B(j, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: K(() => [B(i, {
							value: $.name,
							"onUpdate:value": U[16] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					B(j, {
						label: "Дата",
						vertical: ""
					}, {
						default: K(() => [B(Oe, {
							modelValue: $.date,
							"onUpdate:modelValue": U[17] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), B(Oe, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					B(j, {
						label: "Количество",
						vertical: ""
					}, {
						default: K(() => [B(g, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: U[18] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					B(j, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: K(() => [B(g, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: U[19] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					B(j, {
						label: "Тип",
						vertical: ""
					}, {
						default: K(() => [B(Ne, {
							value: $.type,
							"onUpdate:value": U[20] ||= (e) => $.type = e
						}, {
							default: K(() => [...U[103] ||= [R("option", { value: "base" }, "Основной", -1), R("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					B(j, {
						label: "Описание",
						vertical: ""
					}, {
						default: K(() => [B(Ae, {
							value: $.description,
							"onUpdate:value": U[21] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				B(je, {
					"submit-text": "Сохранить",
					onCancel: mn
				})
			])])]),
			R("section", Rt, [B(A, {
				title: "Выбор значений и floating UI",
				border: ""
			}), R("div", zt, [
				R("article", Bt, [U[106] ||= R("h2", null, "Selectors", -1), R("div", Vt, [
					B(ke, {
						modelValue: O.value,
						"onUpdate:modelValue": U[22] ||= (e) => O.value = e,
						options: dn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					B(ke, {
						modelValue: O.value,
						"onUpdate:modelValue": U[23] ||= (e) => O.value = e,
						options: dn,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					B(be, {
						modelValue: k.value,
						"onUpdate:modelValue": U[24] ||= (e) => k.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					B(be, {
						modelValue: k.value,
						"onUpdate:modelValue": U[25] ||= (e) => k.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				R("article", Ht, [
					U[108] ||= R("h2", null, "BasePopover", -1),
					R("button", {
						ref_key: "popoverAnchor",
						ref: Re,
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[26] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					B(we, {
						open: W.value,
						anchor: Re.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": U[27] ||= (e) => W.value = e
					}, {
						default: K(() => [...U[107] ||= [R("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				R("article", Ut, [
					U[115] ||= R("h2", null, "ActionMenu", -1),
					B(Ee, {
						title: "Действия",
						heading: "Выбранная запись",
						related: ""
					}, {
						default: K(() => [
							B(y, { tone: "accent" }, {
								default: K(() => [...U[109] ||= [z("Редактировать", -1)]]),
								_: 1
							}),
							B(ge, { label: "Перемещение" }, {
								trigger: K(({ open: e }) => [B(y, {
									submenu: "",
									"submenu-open": e
								}, {
									default: K(() => [...U[110] ||= [z("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: K(() => [B(y, null, {
									default: K(() => [...U[111] ||= [z("В начало", -1)]]),
									_: 1
								}), B(y, null, {
									default: K(() => [...U[112] ||= [z("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							B(y, { tone: "danger" }, {
								default: K(() => [...U[113] ||= [z("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					R("button", {
						ref_key: "actionMenuAnchor",
						ref: Be,
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[28] ||= (e) => Ve.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					B(Ee, {
						ref_key: "anchoredActionMenu",
						ref: Ve,
						anchor: Be.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: K(({ close: e }) => [B(y, { onClick: e }, {
							default: K(() => [...U[114] ||= [z("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				R("article", Wt, [U[118] ||= R("h2", null, "AccountMenu", -1), B(ne, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: K(({ close: e }) => [B(y, { onClick: e }, {
						default: K(() => [...U[116] ||= [z("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), B(y, {
						tone: "danger",
						onClick: e
					}, {
						default: K(() => [...U[117] ||= [z("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			R("section", Gt, [B(A, {
				title: "Редакторы и rich text",
				border: ""
			}), R("div", Kt, [R("article", qt, [
				U[119] ||= R("h2", null, "Rich text", -1),
				B(ae, {
					ref: "richEditor",
					modelValue: N.value,
					"onUpdate:modelValue": U[29] ||= (e) => N.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: K(({ editor: e, insertRichNode: t }) => [R("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Le((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, Jt), R("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Le((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Yt)]),
					_: 1
				}, 8, ["modelValue"]),
				R("div", Xt, [B(De, { html: N.value }, {
					node: K(({ node: e }) => [R("strong", Zt, G(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), R("article", Qt, [U[122] ||= R("h2", null, "Editor composition", -1), B(d, null, {
				default: K(() => [B(ue, { title: "Параметры" }, {
					default: K(() => [B(ie, { title: "Основное" }, {
						default: K(() => [B(oe, { title: "Значение" }, {
							actions: K(() => [...U[120] ||= [R("span", null, "12", -1)]]),
							_: 1
						}), B(le, {
							modelValue: E.value,
							"onUpdate:modelValue": U[30] ||= (e) => E.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), B(c, null, {
						default: K(() => [U[121] ||= z("Итого: ", -1), R("strong", null, G(E.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			R("section", $t, [B(A, {
				title: "Каркас приложения",
				border: ""
			}), R("article", en, [
				U[128] ||= R("h2", null, "Navigation composition", -1),
				B(he, {
					modelValue: V.value,
					"onUpdate:modelValue": U[31] ||= (e) => V.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				R("div", tn, [B(me, {
					class: Pe(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": P.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: K(() => [B(re, {
						modelValue: P.value,
						"onUpdate:modelValue": U[32] ||= (e) => P.value = e,
						elevated: V.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: K(() => [B(pe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: K(() => [...U[123] ||= [R("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: K(() => [
							B(M, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: K(() => [...U[124] ||= [R("span", null, "⌂", -1)]]),
								_: 1
							}),
							B(n, { label: "Примеры" }),
							B(M, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: K(() => [...U[125] ||= [R("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: K(() => [...U[126] ||= [R("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: K(() => [U[127] ||= R("div", { class: "share-component-gallery__chrome-content" }, [
						R("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						R("strong", null, "AppShell + AppSidebar"),
						R("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			R("section", nn, [
				B(A, {
					title: "Оверлеи и morph",
					border: ""
				}),
				R("article", rn, [U[129] ||= R("h2", null, "AppDrawer + embedded navigation", -1), B(We)]),
				R("article", an, [U[130] ||= R("h2", null, "Интерактивные примеры", -1), R("div", on, [
					R("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[33] ||= (e) => q.value = !0
					}, "AppModal"),
					R("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[34] ||= (e) => J.value = !0
					}, "AppModalFrame"),
					R("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[35] ||= (e) => Y.value = !0
					}, "ModalShell"),
					R("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[36] ||= (e) => X.value = !0
					}, "ConfirmDialog"),
					R("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[37] ||= (e) => Z.value = !0
					}, "TextPromptDialog"),
					R("button", {
						ref_key: "morphOrigin",
						ref: cn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[38] ||= (e) => sn.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			q.value ? (H(), F(xe, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: U[39] ||= (e) => q.value = !1
			}, {
				default: K(() => [...U[131] ||= [R("div", { class: "share-component-gallery__overlay-content" }, [R("h2", null, "AppModal"), R("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : I("", !0),
			J.value ? (H(), F(e, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: U[42] ||= (e) => J.value = !1
			}, {
				footer: K(() => [B(je, {
					onCancel: U[40] ||= (e) => J.value = !1,
					onSubmit: U[41] ||= (e) => J.value = !1
				})]),
				default: K(() => [U[132] ||= R("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : I("", !0),
			B(o, {
				open: Y.value,
				"aria-label": "Пример ModalShell",
				onClose: U[43] ||= (e) => Y.value = !1
			}, {
				default: K(() => [...U[133] ||= [R("div", { class: "share-component-gallery__overlay-content" }, [R("h2", null, "ModalShell"), R("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			B(ce, {
				open: X.value,
				"onUpdate:open": U[44] ||= (e) => X.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			B(de, {
				open: Z.value,
				"onUpdate:open": U[45] ||= (e) => Z.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			sn.value ? (H(), F(fe, {
				key: 2,
				"origin-el": cn.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: U[46] ||= (e) => sn.value = !1
			}, {
				head: K(() => [...U[134] ||= [R("div", { class: "share-component-gallery__morph-head" }, [R("strong", null, "MorphSheet")], -1)]]),
				default: K(() => [U[135] ||= R("div", { class: "share-component-gallery__overlay-content" }, [R("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : I("", !0)
		]));
	}
}, [["__scopeId", "data-v-13192513"]]);
//#endregion
export { Z as COMPONENT_GALLERY_ALIASES, Ke as COMPONENT_GALLERY_COMPONENTS, Q as ComponentGallery };
