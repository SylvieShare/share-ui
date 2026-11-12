import { A as e, At as t, B as n, Bt as r, C as i, Ct as a, D as o, Dt as s, Et as ee, F as c, Ft as te, G as ne, H as re, I as ie, K as ae, L as oe, Mt as l, Nt as se, O as ce, Ot as le, P as u, Pt as d, R as ue, S as de, St as f, T as fe, Tt as p, V as pe, W as me, _ as m, a as he, b as ge, bt as h, c as g, ct as _e, d as ve, f as _, ft as v, g as ye, h as be, i as y, it as xe, j as Se, jt as Ce, k as b, kt as x, l as S, lt as we, m as C, n as Te, o as w, p as Ee, pt as De, q as Oe, r as ke, rt as Ae, s as T, t as E, u as D, ut as O, v as je, w as Me, wt as k, x as A, xt as Ne, y as Pe, z as j, zt as M } from "./StarRating-Cz5y-xN3.js";
import { Fragment as N, createBlock as P, createCommentVNode as F, createElementBlock as I, createElementVNode as L, createTextVNode as R, createVNode as z, h as B, normalizeClass as Fe, openBlock as V, reactive as Ie, ref as H, renderList as U, toDisplayString as W, unref as Le, withCtx as G, withModifiers as Re } from "vue";
//#region src/gallery/ChoiceCardGalleryExample.vue
var K = { class: "choice-gallery-options" }, ze = /*#__PURE__*/ r({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = H("First option"), n = H(!0), r = ["Centered icon", "Long caption wraps below the icon"], i = H(r[0]), a = ["First option", "Second option"];
		return (e, o) => (V(), I("article", null, [o[4] ||= L("h2", null, "ChoiceCard", -1), L("div", K, [
			(V(), I(N, null, U(a, (e) => z(M, {
				key: e,
				label: e,
				description: "Exclusive, optional selection",
				"model-value": t.value === e,
				"onUpdate:modelValue": (n) => t.value = n ? e : ""
			}, {
				icon: G(() => [...o[1] ||= [L("svg", {
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
				"onUpdate:modelValue": o[0] ||= (e) => n.value = e
			}, {
				icon: G(() => [...o[2] ||= [L("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [L("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			(V(), I(N, null, U(r, (e) => z(M, {
				key: e,
				label: e,
				layout: "icon",
				"model-value": i.value === e,
				"onUpdate:modelValue": (t) => i.value = e
			}, {
				icon: G(() => [...o[3] ||= [L("svg", {
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
			})
		])]));
	}
}, [["__scopeId", "data-v-8c1e8a27"]]), q = { class: "blur-gallery-scene" }, Be = { class: "blur-gallery-label" }, Ve = /*#__PURE__*/ r({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = H(8);
		return (e, n) => (V(), I("article", null, [
			n[2] ||= L("h2", null, "BlurBackdrop", -1),
			z(A, {
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
				z(te, { radius: Number(t.value) }, null, 8, ["radius"]),
				L("strong", Be, "Sharp foreground · " + W(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-f06d0545"]]), He = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = H(null), n = O(640), r = Ie(ve());
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
		return (e, a) => (V(), I(N, null, [z(C, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: G(() => [...a[0] ||= [R("Показать обучение", -1)]]),
			_: 1
		}, 512), z(_, {
			tour: r,
			mobile: Le(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, Ue = { class: "drawer-gallery" }, We = { class: "drawer-gallery__actions" }, J = { class: "drawer-gallery__content" }, Y = ["onClick"], Ge = /*#__PURE__*/ r({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = H(!1), r = H(!1), i = H(!1), a = H(!1);
		return (e, o) => (V(), I("div", Ue, [
			o[16] ||= L("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			L("div", We, [
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
			z(u, {
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
			z(u, {
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
			z(u, {
				modelValue: i.value,
				"onUpdate:modelValue": o[9] ||= (e) => i.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-close": a.value
			}, {
				default: G(() => [z(re, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: G(() => [z(pe, {
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
					account: G(() => [z(De, { title: "Account actions" }, {
						trigger: G(() => [z(ne, {
							label: "Example account",
							expanded: ""
						})]),
						default: G(() => [z(v, null, {
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
}, [["__scopeId", "data-v-8cf1614e"]]), Ke = {
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
		function ee(e) {
			let t = String(s.value.length);
			s.value.push({
				value: t,
				label: e
			}), r.value = [...r.value, t];
		}
		return (e, c) => (V(), I(N, null, [z(g, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: G(() => [
				z(D, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				z(D, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				z(D, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				z(D, {
					percent: 100,
					label: "Полное значение"
				}),
				z(S, {
					modelValue: t.value,
					"onUpdate:modelValue": c[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				z(S, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				z(T, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: c[1] ||= (e) => n.value = !n.value
				}, {
					icon: G(() => [...c[8] ||= [R("✦", -1)]]),
					trailing: G(() => [...c[9] ||= [R("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				z(T, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				z(he, {
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
				z(w, {
					options: s.value,
					label: "Варианты",
					onSelect: c[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				z(w, {
					options: [],
					label: "Пустой список"
				}),
				L("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: c[4] ||= (e) => a.value = !0,
					onMouseleave: c[5] ||= (e) => a.value = !1,
					onFocus: c[6] ||= (e) => a.value = !0,
					onBlur: c[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (V(), P(y, {
					key: 0,
					anchor: i.value
				}, {
					default: G(() => [...c[10] ||= [R("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : F("", !0)
			]),
			_: 1
		}), z(g, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: G(() => [...c[11] ||= [R("Содержимое после раскрытия", -1)]]),
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
		let te = qe.length, u = H(3), he = H(!0), g = H(!0), ve = H(!1), _ = H(!1), y = H(!0), S = H("md"), w = H("preview"), T = H("build"), D = [
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
		], O = H(62), M = H("rare"), N = H("#7c5ce2"), B = H("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), U = H(!0), K = H(!0), q = H(!1), Be = H(null), Ue = H(null), We = H(null), J = H(!1), Y = H(!1), X = H(!1), Z = H(!1), ln = H(!1), Q = H(0), un = H(!1), dn = H(null), fn = [
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
		], $ = Ie({
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
		return (Ie, H) => (V(), I("div", Je, [
			L("header", Ye, [L("div", null, [
				L("p", Xe, "share-ui · " + W(Le(te)) + " компонентов", 1),
				L("h1", null, W(r.title), 1),
				L("p", null, W(r.description), 1)
			]), H[49] ||= L("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			L("section", Ze, [z(Ve)]),
			L("section", Qe, [z(ze)]),
			L("section", $e, [
				z(E, {
					modelValue: u.value,
					"onUpdate:modelValue": H[0] ||= (e) => u.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				z(E, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				z(E, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			L("section", et, [z(Ke)]),
			L("section", tt, [H[50] ||= L("h2", null, "GuidedTour", -1), z(He)]),
			L("section", nt, [z(k, {
				title: "Поверхности и действия",
				border: ""
			}), L("div", rt, [
				L("article", it, [
					H[65] ||= L("h2", null, "BaseTile", -1),
					L("div", at, [z(d, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: G(() => [...H[51] ||= [R("Glass frame", -1)]]),
						_: 1
					}), z(d, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: G(() => [...H[52] ||= [R("Glass interactive", -1)]]),
						_: 1
					})]),
					z(C, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: G(() => [...H[53] ||= [R("✦", -1)]]),
						_: 1
					}),
					L("div", ot, [
						z(d, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [
								z(Ce),
								H[54] ||= L("strong", null, "Акцентная плитка", -1),
								H[55] ||= L("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						z(d, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[56] ||= [L("strong", null, "Рамка", -1), L("span", null, "framed", -1)]]),
							_: 1
						}),
						z(d, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[57] ||= [L("strong", null, "Усиленная рамка", -1), L("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						z(l, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: H[1] ||= (e) => Q.value++
						}, {
							aside: G(() => [L("span", null, W(Q.value), 1)]),
							default: G(() => [H[58] ||= L("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						z(l, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...H[59] ||= [L("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						z(l, { title: "Только просмотр" }, {
							default: G(() => [...H[60] ||= [L("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						z(l, {
							title: "Редактирование по заголовку",
							"show-edit": "",
							"show-edit-icon": !1,
							"edit-label": "Редактировать",
							onEdit: H[2] ||= (e) => Q.value++
						}, {
							aside: G(() => [L("span", null, W(Q.value), 1)]),
							default: G(() => [H[61] ||= L("span", null, "Нажмите название", -1)]),
							_: 1
						}),
						z(l, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: G(() => [...H[62] ||= [L("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						z(l, null, {
							default: G(() => [...H[63] ||= [L("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						z(l, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...H[64] ||= [L("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						z(se, { title: "Общий заголовок" })
					])
				]),
				L("article", st, [
					H[66] ||= L("h2", null, "Загрузка", -1),
					z(be, { label: "Открываем раздел…" }),
					z(be, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					z(b, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					L("div", ct, [
						z(b, {
							label: "Загрузка",
							size: "sm"
						}),
						z(b, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						z(b, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					L("div", lt, [z(ye, {
						width: "36px",
						height: "36px",
						round: ""
					}), z(ye, { width: "60%" })])
				]),
				L("article", ut, [
					H[67] ||= L("h2", null, "InlineEdit", -1),
					z(m, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					z(m, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					z(m, {
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
				L("article", dt, [
					H[75] ||= L("h2", null, "TimelineGroup", -1),
					z(k, {
						title: "История",
						line: ""
					}, {
						actions: G(() => [...H[68] ||= [L("span", null, "2", -1)]]),
						_: 1
					}),
					z(Te, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: G(() => [...H[69] ||= [L("strong", null, "Участник", -1)]]),
						default: G(() => [H[70] ||= L("strong", null, "Запись события", -1), H[71] ||= L("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					z(Te, { color: "var(--success)" }, {
						identity: G(() => [...H[72] ||= [L("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: G(() => [z(A, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: G(() => [z(i, { value: "Черновик" })]),
							_: 1
						})]),
						default: G(() => [H[73] ||= L("strong", null, "Компактная запись", -1), H[74] ||= L("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				L("article", ft, [
					H[79] ||= L("h2", null, "SectionList", -1),
					z(t, { title: "Записи" }, {
						footer: G(() => [z(x, { label: "Добавить запись" })]),
						default: G(() => [H[76] ||= L("div", { style: { padding: "12px 0" } }, "Первая запись", -1), H[77] ||= L("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					z(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: G(() => [...H[78] ||= [L("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), L("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				L("article", pt, [
					H[93] ||= L("h2", null, "Кнопки элементов", -1),
					L("div", mt, [
						z(Ee, {
							modelValue: he.value,
							"onUpdate:modelValue": H[3] ||= (e) => he.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: G(() => [...H[80] ||= [L("svg", {
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
						z(Ee, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: G(() => [...H[81] ||= [L("svg", {
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
						z(Ee, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: G(() => [...H[82] ||= [L("svg", {
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
					z(k, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					z(k, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					L("div", ht, [
						z(C, null, {
							default: G(() => [...H[83] ||= [R("Основное действие", -1)]]),
							_: 1
						}),
						z(C, { variant: "secondary" }, {
							default: G(() => [...H[84] ||= [R("Вторичное", -1)]]),
							_: 1
						}),
						z(C, { variant: "quiet" }, {
							default: G(() => [...H[85] ||= [R("Тихое", -1)]]),
							_: 1
						}),
						z(C, { variant: "dashed" }, {
							default: G(() => [...H[86] ||= [R("Пунктирная рамка", -1)]]),
							_: 1
						}),
						z(C, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: G(() => [...H[87] ||= [R("✦", -1)]]),
							default: G(() => [H[88] ||= R("Действие", -1)]),
							_: 1
						}),
						z(C, {
							layout: "stacked",
							variant: "dashed",
							style: { "--action-button-height": "96px" }
						}, {
							icon: G(() => [...H[89] ||= [R("+", -1)]]),
							default: G(() => [H[90] ||= R("Добавить превью", -1)]),
							_: 1
						}),
						z(C, { disabled: "" }, {
							default: G(() => [...H[91] ||= [R("Недоступно", -1)]]),
							_: 1
						}),
						z(C, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: G(() => [...H[92] ||= [R("Загрузка", -1)]]),
							_: 1
						}),
						z(x, { label: "Добавить элемент" }),
						z(x, {
							label: "Добавить",
							variant: "icon"
						}),
						z(p, { label: "Удалить" }),
						z(p, {
							label: "Удалить",
							variant: "boxed"
						}),
						z(p, {
							label: "Удалить запись",
							icon: "trash"
						}),
						z(p, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						z(p, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				L("article", gt, [H[94] ||= L("h2", null, "SegmentDonutChart", -1), z(a, {
					segments: hn,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": gn
				})])
			])]),
			L("section", _t, [z(k, {
				title: "Переключатели",
				border: ""
			}), L("div", vt, [
				L("article", yt, [H[98] ||= L("h2", null, "Boolean controls", -1), L("div", bt, [
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
					L("div", xt, [z(h, {
						modelValue: _.value,
						"onUpdate:modelValue": H[6] ||= (e) => _.value = e,
						surface: "raised",
						block: "",
						"track-placement": "end",
						label: "Приподнятая поверхность"
					}, {
						default: G(() => [...H[95] ||= [R(" Приподнятая поверхность — вся строка переключает значение ", -1)]]),
						_: 1
					}, 8, ["modelValue"])]),
					L("label", St, [z(s, {
						modelValue: y.value,
						"onUpdate:modelValue": H[7] ||= (e) => y.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), H[96] ||= R(" Выбрать элемент ", -1)]),
					L("label", Ct, [z(s, {
						modelValue: y.value,
						"onUpdate:modelValue": H[8] ||= (e) => y.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), H[97] ||= R(" Крупный выбор (24px) ", -1)])
				])]),
				L("article", wt, [H[101] ||= L("h2", null, "Segmented controls", -1), L("div", Tt, [
					z(ee, {
						modelValue: S.value,
						"onUpdate:modelValue": H[9] ||= (e) => S.value = e,
						options: fn,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					z(Ne, {
						modelValue: w.value,
						"onUpdate:modelValue": H[10] ||= (e) => w.value = e,
						variant: "chips",
						tabs: pn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": G(({ tab: e }) => [z(C, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: G(() => [...H[99] ||= [R("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					z(Ne, {
						modelValue: w.value,
						"onUpdate:modelValue": H[11] ||= (e) => w.value = e,
						tabs: pn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": G(({ tab: e }) => [z(C, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: G(() => [...H[100] ||= [R("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				L("article", Et, [H[104] ||= L("h2", null, "IconNavigation", -1), L("div", Dt, [
					z(f, {
						modelValue: T.value,
						"onUpdate:modelValue": H[12] ||= (e) => T.value = e,
						items: D,
						label: "Horizontal sections"
					}, {
						icon: G(({ item: e }) => [(V(), I("svg", Ot, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, kt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					z(f, {
						modelValue: T.value,
						"onUpdate:modelValue": H[13] ||= (e) => T.value = e,
						items: D,
						pill: "",
						"content-sized": "",
						"label-size": 12,
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections sized by caption"
					}, {
						icon: G(({ item: e }) => [(V(), I("svg", At, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, jt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					z(f, {
						modelValue: T.value,
						"onUpdate:modelValue": H[14] ||= (e) => T.value = e,
						items: D,
						pill: "",
						layout: "inline",
						"icon-size": 28,
						height: 56,
						label: "Inline sections"
					}, {
						icon: G(() => [...H[102] ||= [L("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [L("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					z(f, {
						modelValue: T.value,
						"onUpdate:modelValue": H[15] ||= (e) => T.value = e,
						items: D,
						pill: "",
						layout: "compact",
						size: 44,
						height: 48,
						radius: "var(--r-md)",
						label: "Compact sections"
					}, {
						icon: G(() => [...H[103] ||= [L("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [L("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					z(f, {
						modelValue: T.value,
						"onUpdate:modelValue": H[16] ||= (e) => T.value = e,
						items: D,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: G(({ item: e }) => [(V(), I("svg", Mt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Nt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				L("article", Pt, [H[105] ||= L("h2", null, "AppSlider", -1), L("div", Ft, [z(le, {
					modelValue: O.value,
					"onUpdate:modelValue": H[17] ||= (e) => O.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), L("strong", null, W(O.value), 1)])])
			])]),
			L("section", It, [z(k, {
				title: "Формы",
				border: ""
			}), L("div", Lt, [L("article", Rt, [
				H[107] ||= L("h2", null, "Form primitives", -1),
				H[108] ||= L("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				L("div", zt, [
					z(A, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: G(() => [z(i, {
							value: $.name,
							"onUpdate:value": H[18] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(A, {
						label: "Дата",
						vertical: ""
					}, {
						default: G(() => [z(ke, {
							modelValue: $.date,
							"onUpdate:modelValue": H[19] ||= (e) => $.date = e,
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
					z(A, {
						label: "Количество",
						vertical: ""
					}, {
						default: G(() => [z(ge, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: H[20] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(A, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: G(() => [z(ge, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: H[21] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(A, {
						label: "Тип",
						vertical: ""
					}, {
						default: G(() => [z(Pe, {
							value: $.type,
							"onUpdate:value": H[22] ||= (e) => $.type = e
						}, {
							default: G(() => [...H[106] ||= [L("option", { value: "base" }, "Основной", -1), L("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					z(A, {
						label: "Описание",
						vertical: ""
					}, {
						default: G(() => [z(je, {
							value: $.description,
							"onUpdate:value": H[23] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				z(Me, {
					"submit-text": "Сохранить",
					onCancel: _n
				})
			])])]),
			L("section", Bt, [z(k, {
				title: "Выбор значений и floating UI",
				border: ""
			}), L("div", Vt, [
				L("article", Ht, [H[109] ||= L("h2", null, "Selectors", -1), L("div", Ut, [
					z(Ae, {
						modelValue: M.value,
						"onUpdate:modelValue": H[24] ||= (e) => M.value = e,
						options: mn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					z(Ae, {
						modelValue: M.value,
						"onUpdate:modelValue": H[25] ||= (e) => M.value = e,
						options: mn,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					z(xe, {
						modelValue: N.value,
						"onUpdate:modelValue": H[26] ||= (e) => N.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					z(xe, {
						modelValue: N.value,
						"onUpdate:modelValue": H[27] ||= (e) => N.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				L("article", Wt, [
					H[111] ||= L("h2", null, "BasePopover", -1),
					L("button", {
						ref_key: "popoverAnchor",
						ref: Be,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[28] ||= (e) => q.value = !q.value
					}, " Открыть popover ", 512),
					z(we, {
						open: q.value,
						anchor: Be.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": H[29] ||= (e) => q.value = e
					}, {
						default: G(() => [...H[110] ||= [L("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				L("article", Gt, [
					H[118] ||= L("h2", null, "ActionMenu", -1),
					z(De, {
						title: "Действия",
						heading: "Выбранная запись",
						related: ""
					}, {
						default: G(() => [
							z(v, { tone: "accent" }, {
								default: G(() => [...H[112] ||= [R("Редактировать", -1)]]),
								_: 1
							}),
							z(_e, { label: "Перемещение" }, {
								trigger: G(({ open: e }) => [z(v, {
									submenu: "",
									"submenu-open": e
								}, {
									default: G(() => [...H[113] ||= [R("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: G(() => [z(v, null, {
									default: G(() => [...H[114] ||= [R("В начало", -1)]]),
									_: 1
								}), z(v, null, {
									default: G(() => [...H[115] ||= [R("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							z(v, { tone: "danger" }, {
								default: G(() => [...H[116] ||= [R("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					L("button", {
						ref_key: "actionMenuAnchor",
						ref: Ue,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[30] ||= (e) => We.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					z(De, {
						ref_key: "anchoredActionMenu",
						ref: We,
						anchor: Ue.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: G(({ close: e }) => [z(v, { onClick: e }, {
							default: G(() => [...H[117] ||= [R("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				L("article", Kt, [H[121] ||= L("h2", null, "AccountMenu", -1), z(ne, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: G(({ close: e }) => [z(v, { onClick: e }, {
						default: G(() => [...H[119] ||= [R("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), z(v, {
						tone: "danger",
						onClick: e
					}, {
						default: G(() => [...H[120] ||= [R("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			L("section", qt, [z(k, {
				title: "Редакторы и rich text",
				border: ""
			}), L("div", Jt, [L("article", Yt, [
				H[122] ||= L("h2", null, "Rich text", -1),
				z(ae, {
					ref: "richEditor",
					modelValue: B.value,
					"onUpdate:modelValue": H[31] ||= (e) => B.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: G(({ editor: e, insertRichNode: t }) => [L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Re((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, Xt), L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Re((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Zt)]),
					_: 1
				}, 8, ["modelValue"]),
				L("div", Qt, [z(Oe, { html: B.value }, {
					node: G(({ node: e }) => [L("strong", $t, W(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), L("article", en, [H[125] ||= L("h2", null, "Editor composition", -1), z(d, null, {
				default: G(() => [z(ue, { title: "Параметры" }, {
					default: G(() => [z(ie, { title: "Основное" }, {
						default: G(() => [z(oe, { title: "Значение" }, {
							actions: G(() => [...H[123] ||= [L("span", null, "12", -1)]]),
							_: 1
						}), z(le, {
							modelValue: O.value,
							"onUpdate:modelValue": H[32] ||= (e) => O.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), z(c, null, {
						default: G(() => [H[124] ||= R("Итого: ", -1), L("strong", null, W(O.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			L("section", tn, [z(k, {
				title: "Каркас приложения",
				border: ""
			}), L("article", nn, [
				H[131] ||= L("h2", null, "Navigation composition", -1),
				z(h, {
					modelValue: K.value,
					"onUpdate:modelValue": H[33] ||= (e) => K.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				L("div", rn, [z(me, {
					class: Fe(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": U.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: G(() => [z(re, {
						modelValue: U.value,
						"onUpdate:modelValue": H[34] ||= (e) => U.value = e,
						elevated: K.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: G(() => [z(pe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: G(() => [...H[126] ||= [L("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: G(() => [
							z(j, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: G(() => [...H[127] ||= [L("span", null, "⌂", -1)]]),
								_: 1
							}),
							z(n, { label: "Примеры" }),
							z(j, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: G(() => [...H[128] ||= [L("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: G(() => [...H[129] ||= [L("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: G(() => [H[130] ||= L("div", { class: "share-component-gallery__chrome-content" }, [
						L("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						L("strong", null, "AppShell + AppSidebar"),
						L("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			L("section", an, [
				z(k, {
					title: "Оверлеи и morph",
					border: ""
				}),
				L("article", on, [H[132] ||= L("h2", null, "AppDrawer + embedded navigation", -1), z(Ge)]),
				L("article", sn, [H[133] ||= L("h2", null, "Интерактивные примеры", -1), L("div", cn, [
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[35] ||= (e) => J.value = !0
					}, "AppModal"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[36] ||= (e) => Y.value = !0
					}, "AppModalFrame"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[37] ||= (e) => X.value = !0
					}, "ModalShell"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[38] ||= (e) => Z.value = !0
					}, "ConfirmDialog"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[39] ||= (e) => ln.value = !0
					}, "TextPromptDialog"),
					L("button", {
						ref_key: "morphOrigin",
						ref: dn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[40] ||= (e) => un.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			J.value ? (V(), P(Se, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: H[41] ||= (e) => J.value = !1
			}, {
				default: G(() => [...H[134] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "AppModal"), L("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : F("", !0),
			Y.value ? (V(), P(e, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: H[44] ||= (e) => Y.value = !1
			}, {
				footer: G(() => [z(Me, {
					onCancel: H[42] ||= (e) => Y.value = !1,
					onSubmit: H[43] ||= (e) => Y.value = !1
				})]),
				default: G(() => [H[135] ||= L("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : F("", !0),
			z(o, {
				open: X.value,
				"aria-label": "Пример ModalShell",
				onClose: H[45] ||= (e) => X.value = !1
			}, {
				default: G(() => [...H[136] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "ModalShell"), L("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			z(ce, {
				open: Z.value,
				"onUpdate:open": H[46] ||= (e) => Z.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			z(de, {
				open: ln.value,
				"onUpdate:open": H[47] ||= (e) => ln.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			un.value ? (V(), P(fe, {
				key: 2,
				"origin-el": dn.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: H[48] ||= (e) => un.value = !1
			}, {
				head: G(() => [...H[137] ||= [L("div", { class: "share-component-gallery__morph-head" }, [L("strong", null, "MorphSheet")], -1)]]),
				default: G(() => [H[138] ||= L("div", { class: "share-component-gallery__overlay-content" }, [L("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : F("", !0)
		]));
	}
}, [["__scopeId", "data-v-192720e8"]]);
//#endregion
export { X as COMPONENT_GALLERY_ALIASES, qe as COMPONENT_GALLERY_COMPONENTS, Z as ComponentGallery };
