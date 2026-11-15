import { A as e, At as t, B as n, Bt as r, C as i, Ct as a, D as o, Dt as s, Et as ee, F as c, Ft as l, G as te, H as ne, I as re, It as ie, K as ae, L as oe, Mt as u, Nt as se, O as ce, Ot as le, P as d, Pt as f, R as ue, S as de, St as p, T as fe, Tt as m, V as pe, Vt as h, W as me, _ as he, a as ge, b as _e, bt as g, c as _, ct as ve, d as v, f as ye, ft as y, g as be, h as xe, i as b, it as Se, j as Ce, jt as we, k as x, kt as Te, l as S, lt as Ee, m as C, n as De, o as w, p as Oe, pt as ke, q as Ae, r as je, rt as Me, s as T, t as E, u as D, ut as O, v as Ne, w as Pe, wt as k, x as A, xt as Fe, y as Ie, z as j } from "./StarRating-t4lgX92M.js";
import { Fragment as M, createBlock as N, createCommentVNode as P, createElementBlock as F, createElementVNode as I, createTextVNode as L, createVNode as R, h as z, normalizeClass as Le, normalizeStyle as Re, openBlock as B, reactive as ze, ref as V, renderList as H, toDisplayString as U, unref as Be, withCtx as W, withModifiers as Ve } from "vue";
//#region src/gallery/ChoiceCardGalleryExample.vue
var G = { class: "choice-gallery-options" }, He = /*#__PURE__*/ h({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = V("First option"), n = V(!0), i = V(!0), a = V(!1), o = ["Centered icon", "Long caption wraps below the icon"], s = V(o[0]), ee = ["First option", "Second option"];
		return (e, c) => (B(), F("article", null, [c[10] ||= I("h2", null, "ChoiceCard", -1), I("div", G, [
			(B(), F(M, null, H(ee, (e) => R(r, {
				key: e,
				label: e,
				description: "Exclusive, optional selection",
				"model-value": t.value === e,
				"onUpdate:modelValue": (n) => t.value = n ? e : ""
			}, {
				icon: W(() => [...c[4] ||= [I("svg", {
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
			R(r, {
				label: "Unavailable",
				description: "Disabled option",
				disabled: ""
			}),
			R(r, {
				label: "Compact",
				layout: "inline",
				description: "Inline choice",
				modelValue: n.value,
				"onUpdate:modelValue": c[0] ||= (e) => n.value = e
			}, {
				icon: W(() => [...c[5] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [I("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			(B(), F(M, null, H(o, (e) => R(r, {
				key: e,
				label: e,
				layout: "icon",
				"model-value": s.value === e,
				"onUpdate:modelValue": (t) => s.value = e
			}, {
				icon: W(() => [...c[6] ||= [I("svg", {
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
			R(r, {
				label: "Unavailable icon choice",
				layout: "icon",
				disabled: ""
			}),
			R(r, {
				label: "Centered inline choice",
				layout: "inline",
				centered: "",
				"selection-indicator": "outline",
				modelValue: n.value,
				"onUpdate:modelValue": c[1] ||= (e) => n.value = e
			}, {
				icon: W(() => [...c[7] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [I("path", { d: "M5 12h14m-6-6 6 6-6 6" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			R(r, {
				label: "Compact icon choice",
				layout: "icon",
				centered: "",
				modelValue: i.value,
				"onUpdate:modelValue": c[2] ||= (e) => i.value = e,
				style: {
					"--choice-card-min-height": "72px",
					"--choice-card-padding": "6px 8px",
					"--choice-card-gap": "4px"
				}
			}, {
				icon: W(() => [...c[8] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [I("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			R(r, {
				label: "Outlined selection",
				layout: "icon",
				tinted: "",
				centered: "",
				"selection-indicator": "outline",
				color: "var(--success)",
				modelValue: a.value,
				"onUpdate:modelValue": c[3] ||= (e) => a.value = e,
				style: { "--choice-card-min-height": "88px" }
			}, {
				icon: W(() => [...c[9] ||= [I("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "1.75"
				}, [I("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
				_: 1
			}, 8, ["modelValue"])
		])]));
	}
}, [["__scopeId", "data-v-0276b94d"]]), Ue = { class: "blur-gallery-scene" }, We = { class: "blur-gallery-label" }, Ge = /*#__PURE__*/ h({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = V(8);
		return (e, n) => (B(), F("article", null, [
			n[2] ||= I("h2", null, "BlurBackdrop", -1),
			R(A, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: W(() => [R(_e, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			I("div", Ue, [
				n[1] ||= I("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				R(ie, { radius: Number(t.value) }, null, 8, ["radius"]),
				I("strong", We, "Sharp foreground · " + U(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-34aec14d"]]), Ke = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = V(null), n = O(640), r = ze(v());
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
		}, 512), R(ye, {
			tour: r,
			mobile: Be(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, qe = { class: "drawer-gallery" }, K = { class: "drawer-gallery__actions" }, q = { class: "drawer-gallery__content" }, J = ["onClick"], Je = /*#__PURE__*/ h({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = V(!1), r = V(!1), i = V(!1), a = V(!1);
		return (e, o) => (B(), F("div", qe, [
			o[16] ||= I("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			I("div", K, [
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
			R(d, {
				modelValue: t.value,
				"onUpdate:modelValue": o[4] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": a.value
			}, {
				title: W(() => [...o[10] ||= [I("strong", null, "AppDrawer", -1)]]),
				footer: W(({ close: e }) => [I("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, J)]),
				default: W(() => [I("div", q, [
					o[11] ||= I("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					I("button", {
						type: "button",
						onClick: o[3] ||= (e) => r.value = !0
					}, "Nested drawer"),
					(B(), F(M, null, H(24, (e) => I("p", { key: e }, "Example row " + U(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			R(d, {
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
			R(d, {
				modelValue: i.value,
				"onUpdate:modelValue": o[9] ||= (e) => i.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-close": a.value
			}, {
				default: W(() => [R(ne, {
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
					account: W(() => [R(ke, { title: "Account actions" }, {
						trigger: W(() => [R(te, {
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
						R(j, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[7] ||= (e) => i.value = !1
						}),
						R(j, {
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
				R(D, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				R(D, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				R(D, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				R(D, {
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
				R(ge, {
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
}, Y = { class: "avatar-examples" }, Xe = /*#__PURE__*/ h({
	__name: "AvatarGalleryExample",
	setup(e) {
		let t = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%22160%22%3E%3Crect%20width%3D%2280%22%20height%3D%22160%22%20fill%3D%22slateblue%22%2F%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2235%22%20r%3D%2224%22%20fill%3D%22lavender%22%2F%3E%3C%2Fsvg%3E";
		return (e, n) => (B(), F(M, null, [n[2] ||= I("h2", null, "AvatarFrame", -1), I("div", Y, [
			R(l, {
				src: t,
				size: 64,
				label: "Cropped portrait",
				position: "center top"
			}),
			R(l, {
				src: t,
				size: 48,
				fit: "contain",
				label: "Contained artwork"
			}),
			R(l, {
				size: 40,
				label: "Initial"
			}, {
				default: W(() => [...n[0] ||= [L("A", -1)]]),
				_: 1
			}),
			R(l, {
				src: "/unavailable-avatar.png",
				size: 32,
				label: "Unavailable image"
			}, {
				default: W(() => [...n[1] ||= [L("?", -1)]]),
				_: 1
			})
		])], 64));
	}
}, [["__scopeId", "data-v-60d0021f"]]), Ze = Object.freeze(/* @__PURE__ */ "AvatarFrame.StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.ChoiceCard.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), X = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Qe = { class: "share-component-gallery" }, $e = { class: "share-component-gallery__header" }, et = { class: "share-component-gallery__eyebrow" }, tt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "AvatarFrame"
}, nt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, rt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "ChoiceCard"
}, it = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, at = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, ot = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, st = { class: "share-component-gallery__section" }, ct = { class: "share-component-gallery__grid" }, lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, ut = { class: "share-component-gallery__glass-surfaces" }, dt = { class: "share-component-gallery__tile-row" }, ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, pt = { class: "share-component-gallery__row" }, mt = { class: "share-component-gallery__row" }, ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, _t = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, yt = { class: "share-component-gallery__row" }, bt = { class: "share-component-gallery__row" }, xt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, St = { class: "share-component-gallery__section" }, Ct = { class: "share-component-gallery__grid" }, wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Tt = { class: "share-component-gallery__stack" }, Et = { style: {
	background: "var(--surface-raised)",
	padding: "8px",
	"border-radius": "var(--r-md)"
} }, Dt = { class: "share-component-gallery__checkbox-row" }, Ot = { class: "share-component-gallery__checkbox-row" }, kt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, At = { class: "share-component-gallery__stack" }, jt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, Mt = { class: "share-component-gallery__stack" }, Nt = {
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
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Rt = ["d"], zt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Bt = { class: "share-component-gallery__slider" }, Vt = { class: "share-component-gallery__section" }, Ht = { class: "share-component-gallery__grid" }, Ut = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Wt = { class: "share-component-gallery__form-grid" }, Gt = { class: "share-component-gallery__section" }, Kt = { class: "share-component-gallery__grid" }, qt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Jt = { class: "share-component-gallery__stack" }, Yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Zt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Qt = { class: "share-component-gallery__section" }, $t = { class: "share-component-gallery__grid" }, en = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, tn = ["onMousedown"], nn = ["onMousedown"], rn = { class: "share-component-gallery__preview" }, an = { class: "share-component-gallery__rich-node" }, on = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, sn = { class: "share-component-gallery__section" }, cn = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, ln = { class: "share-component-gallery__chrome" }, un = { class: "share-component-gallery__section" }, dn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, fn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, pn = { class: "share-component-gallery__row" }, Z = /*#__PURE__*/ h({
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
		let l = Ze.length, ie = V(3), d = V(!0), h = V(!0), ge = V(!1), _ = V(!1), v = V(!0), ye = V("md"), b = V("preview"), S = V("build"), w = [
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
		], T = V(62), D = V("rare"), O = V("#7c5ce2"), M = V("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), z = V(!0), H = V(!0), G = V(!1), Ue = V(null), We = V(null), qe = V(null), K = V(!1), q = V(!1), J = V(!0), Y = V(!1), X = V(!1), Z = V(!1), mn = V(!1), Q = V(0), hn = V(!1), gn = V(null), _n = [
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
		], vn = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], yn = [
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
		], bn = [
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
		function xn(e) {
			return `${e} МБ`;
		}
		function Sn() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (ze, V) => (B(), F("div", Qe, [
			I("header", $e, [I("div", null, [
				I("p", et, "share-ui · " + U(Be(l)) + " компонентов", 1),
				I("h1", null, U(r.title), 1),
				I("p", null, U(r.description), 1)
			]), V[52] ||= I("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			I("section", tt, [R(Xe)]),
			I("section", nt, [R(Ge)]),
			I("section", rt, [R(He)]),
			I("section", it, [
				R(E, {
					modelValue: ie.value,
					"onUpdate:modelValue": V[0] ||= (e) => ie.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				R(E, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				R(E, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			I("section", at, [R(Ye)]),
			I("section", ot, [V[53] ||= I("h2", null, "GuidedTour", -1), R(Ke)]),
			I("section", st, [R(k, {
				title: "Поверхности и действия",
				border: ""
			}), I("div", ct, [
				I("article", lt, [
					V[73] ||= I("h2", null, "BaseTile", -1),
					I("div", ut, [R(f, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: W(() => [...V[54] ||= [L("Glass frame", -1)]]),
						_: 1
					}), R(f, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: W(() => [...V[55] ||= [L("Glass interactive", -1)]]),
						_: 1
					})]),
					R(C, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: W(() => [...V[56] ||= [L("✦", -1)]]),
						_: 1
					}),
					R(C, {
						"icon-only": "",
						variant: "quiet",
						style: { "--action-button-icon-size": "36px" },
						"aria-label": "Компактное действие"
					}, {
						icon: W(() => [...V[57] ||= [L("✦", -1)]]),
						_: 1
					}),
					I("div", dt, [
						R(f, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [
								R(we),
								V[58] ||= I("strong", null, "Акцентная плитка", -1),
								V[59] ||= I("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						R(f, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[60] ||= [I("strong", null, "Рамка", -1), I("span", null, "framed", -1)]]),
							_: 1
						}),
						R(f, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[61] ||= [I("strong", null, "Усиленная рамка", -1), I("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						R(f, {
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[62] ||= [I("strong", null, "Приподнятая поверхность", -1), I("span", null, "elevated", -1)]]),
							_: 1
						}),
						R(f, {
							surface: "popover",
							elevated: "",
							outlined: !1,
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[63] ||= [I("strong", null, "Поверхность меню", -1), I("span", null, "surface=popover · elevated", -1)]]),
							_: 1
						}),
						R(f, {
							elevated: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[64] ||= [I("strong", null, "Тень с обводкой", -1), I("span", null, "elevated · outlined · interactive", -1)]]),
							_: 1
						}),
						R(f, {
							elevated: "",
							framed: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[65] ||= [I("strong", null, "Тень с рамкой", -1), I("span", null, "elevated · framed · interactive", -1)]]),
							_: 1
						}),
						R(u, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: V[1] ||= (e) => Q.value++
						}, {
							aside: W(() => [I("span", null, U(Q.value), 1)]),
							default: W(() => [V[66] ||= I("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						R(u, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...V[67] ||= [I("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						R(u, { title: "Только просмотр" }, {
							default: W(() => [...V[68] ||= [I("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						R(u, {
							title: "Редактирование по заголовку",
							"show-edit": "",
							"show-edit-icon": !1,
							"edit-label": "Редактировать",
							onEdit: V[2] ||= (e) => Q.value++
						}, {
							aside: W(() => [I("span", null, U(Q.value), 1)]),
							default: W(() => [V[69] ||= I("span", null, "Нажмите название", -1)]),
							_: 1
						}),
						R(u, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: W(() => [...V[70] ||= [I("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						R(u, null, {
							default: W(() => [...V[71] ||= [I("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						R(u, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...V[72] ||= [I("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						R(se, { title: "Общий заголовок" })
					])
				]),
				I("article", ft, [
					V[74] ||= I("h2", null, "Загрузка", -1),
					R(xe, { label: "Открываем раздел…" }),
					R(xe, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					R(x, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					I("div", pt, [
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
					I("div", mt, [R(be, {
						width: "36px",
						height: "36px",
						round: ""
					}), R(be, { width: "60%" })])
				]),
				I("article", ht, [
					V[75] ||= I("h2", null, "InlineEdit", -1),
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
				I("article", gt, [
					V[83] ||= I("h2", null, "TimelineGroup", -1),
					R(k, {
						title: "История",
						line: ""
					}, {
						actions: W(() => [...V[76] ||= [I("span", null, "2", -1)]]),
						_: 1
					}),
					R(De, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: W(() => [...V[77] ||= [I("strong", null, "Участник", -1)]]),
						default: W(() => [V[78] ||= I("strong", null, "Запись события", -1), V[79] ||= I("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					R(De, { color: "var(--success)" }, {
						identity: W(() => [...V[80] ||= [I("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: W(() => [R(A, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: W(() => [R(i, { value: "Черновик" })]),
							_: 1
						})]),
						default: W(() => [V[81] ||= I("strong", null, "Компактная запись", -1), V[82] ||= I("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				I("article", _t, [
					V[87] ||= I("h2", null, "SectionList", -1),
					R(t, { title: "Записи" }, {
						footer: W(() => [R(Te, { label: "Добавить запись" })]),
						default: W(() => [V[84] ||= I("div", { style: { padding: "12px 0" } }, "Первая запись", -1), V[85] ||= I("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					R(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: W(() => [...V[86] ||= [I("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), I("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				I("article", vt, [
					V[102] ||= I("h2", null, "Кнопки элементов", -1),
					I("div", yt, [
						R(Oe, {
							modelValue: d.value,
							"onUpdate:modelValue": V[3] ||= (e) => d.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: W(() => [...V[88] ||= [I("svg", {
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
						R(Oe, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: W(() => [...V[89] ||= [I("svg", {
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
						R(Oe, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: W(() => [...V[90] ||= [I("svg", {
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
					R(k, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					R(k, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					I("div", bt, [
						R(C, null, {
							default: W(() => [...V[91] ||= [L("Основное действие", -1)]]),
							_: 1
						}),
						R(C, { variant: "secondary" }, {
							default: W(() => [...V[92] ||= [L("Вторичное", -1)]]),
							_: 1
						}),
						R(C, {
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
							icon: W(() => [...V[93] ||= [L("✦", -1)]]),
							_: 1
						}),
						R(C, { variant: "quiet" }, {
							default: W(() => [...V[94] ||= [L("Тихое", -1)]]),
							_: 1
						}),
						R(C, { variant: "dashed" }, {
							default: W(() => [...V[95] ||= [L("Пунктирная рамка", -1)]]),
							_: 1
						}),
						R(C, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: W(() => [...V[96] ||= [L("✦", -1)]]),
							default: W(() => [V[97] ||= L("Действие", -1)]),
							_: 1
						}),
						R(C, {
							layout: "stacked",
							variant: "dashed",
							style: { "--action-button-height": "96px" }
						}, {
							icon: W(() => [...V[98] ||= [L("+", -1)]]),
							default: W(() => [V[99] ||= L("Добавить превью", -1)]),
							_: 1
						}),
						R(C, { disabled: "" }, {
							default: W(() => [...V[100] ||= [L("Недоступно", -1)]]),
							_: 1
						}),
						R(C, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: W(() => [...V[101] ||= [L("Загрузка", -1)]]),
							_: 1
						}),
						R(Te, { label: "Добавить элемент" }),
						R(Te, {
							label: "Добавить",
							variant: "icon"
						}),
						R(m, { label: "Удалить" }),
						R(m, {
							label: "Удалить",
							variant: "boxed"
						}),
						R(m, {
							label: "Удалить запись",
							icon: "trash"
						}),
						R(m, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						R(m, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				I("article", xt, [V[103] ||= I("h2", null, "SegmentDonutChart", -1), R(a, {
					segments: bn,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": xn
				})])
			])]),
			I("section", St, [R(k, {
				title: "Переключатели",
				border: ""
			}), I("div", Ct, [
				I("article", wt, [V[107] ||= I("h2", null, "Boolean controls", -1), I("div", Tt, [
					R(g, {
						modelValue: h.value,
						"onUpdate:modelValue": V[4] ||= (e) => h.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					R(g, {
						modelValue: ge.value,
						"onUpdate:modelValue": V[5] ||= (e) => ge.value = e,
						label: "Обычная поверхность"
					}, null, 8, ["modelValue"]),
					I("div", Et, [R(g, {
						modelValue: _.value,
						"onUpdate:modelValue": V[6] ||= (e) => _.value = e,
						surface: "raised",
						block: "",
						"track-placement": "end",
						label: "Приподнятая поверхность"
					}, {
						default: W(() => [...V[104] ||= [L(" Приподнятая поверхность — вся строка переключает значение ", -1)]]),
						_: 1
					}, 8, ["modelValue"])]),
					I("label", Dt, [R(s, {
						modelValue: v.value,
						"onUpdate:modelValue": V[7] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), V[105] ||= L(" Выбрать элемент ", -1)]),
					I("label", Ot, [R(s, {
						modelValue: v.value,
						"onUpdate:modelValue": V[8] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), V[106] ||= L(" Крупный выбор (24px) ", -1)])
				])]),
				I("article", kt, [V[110] ||= I("h2", null, "Segmented controls", -1), I("div", At, [
					R(ee, {
						modelValue: ye.value,
						"onUpdate:modelValue": V[9] ||= (e) => ye.value = e,
						options: _n,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					R(Fe, {
						modelValue: b.value,
						"onUpdate:modelValue": V[10] ||= (e) => b.value = e,
						variant: "chips",
						tabs: vn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": W(({ tab: e }) => [R(C, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: W(() => [...V[108] ||= [L("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					R(Fe, {
						modelValue: b.value,
						"onUpdate:modelValue": V[11] ||= (e) => b.value = e,
						variant: "plain",
						tabs: vn,
						"aria-label": "Режим с собственной подложкой"
					}, {
						decoration: W(({ active: e }) => [I("span", {
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
					R(Fe, {
						modelValue: b.value,
						"onUpdate:modelValue": V[12] ||= (e) => b.value = e,
						tabs: vn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": W(({ tab: e }) => [R(C, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: W(() => [...V[109] ||= [L("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				I("article", jt, [V[113] ||= I("h2", null, "IconNavigation", -1), I("div", Mt, [
					R(p, {
						modelValue: S.value,
						"onUpdate:modelValue": V[13] ||= (e) => S.value = e,
						items: w,
						label: "Horizontal sections"
					}, {
						icon: W(({ item: e }) => [(B(), F("svg", Nt, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Pt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					R(p, {
						modelValue: S.value,
						"onUpdate:modelValue": V[14] ||= (e) => S.value = e,
						items: w,
						pill: "",
						"content-sized": "",
						"label-size": 12,
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections sized by caption"
					}, {
						icon: W(({ item: e }) => [(B(), F("svg", Ft, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, It)]))]),
						_: 1
					}, 8, ["modelValue"]),
					R(p, {
						modelValue: S.value,
						"onUpdate:modelValue": V[15] ||= (e) => S.value = e,
						items: w,
						pill: "",
						layout: "inline",
						"icon-size": 28,
						height: 56,
						label: "Inline sections"
					}, {
						icon: W(() => [...V[111] ||= [I("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [I("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					R(p, {
						modelValue: S.value,
						"onUpdate:modelValue": V[16] ||= (e) => S.value = e,
						items: w,
						pill: "",
						layout: "compact",
						size: 44,
						height: 48,
						radius: "var(--r-md)",
						label: "Compact sections"
					}, {
						icon: W(() => [...V[112] ||= [I("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"aria-hidden": "true"
						}, [I("path", { d: "M4 6h16M4 12h16M4 18h16" })], -1)]]),
						_: 1
					}, 8, ["modelValue"]),
					R(p, {
						modelValue: S.value,
						"onUpdate:modelValue": V[17] ||= (e) => S.value = e,
						items: w,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: W(({ item: e }) => [(B(), F("svg", Lt, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Rt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				I("article", zt, [V[114] ||= I("h2", null, "AppSlider", -1), I("div", Bt, [R(le, {
					modelValue: T.value,
					"onUpdate:modelValue": V[18] ||= (e) => T.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), I("strong", null, U(T.value), 1)])])
			])]),
			I("section", Vt, [R(k, {
				title: "Формы",
				border: ""
			}), I("div", Ht, [I("article", Ut, [
				V[116] ||= I("h2", null, "Form primitives", -1),
				V[117] ||= I("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				I("div", Wt, [
					R(A, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: W(() => [R(i, {
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
						default: W(() => [R(je, {
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
						default: W(() => [R(_e, {
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
						default: W(() => [R(_e, {
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
						default: W(() => [R(Ie, {
							value: $.type,
							"onUpdate:value": V[23] ||= (e) => $.type = e
						}, {
							default: W(() => [...V[115] ||= [I("option", { value: "base" }, "Основной", -1), I("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Описание",
						vertical: ""
					}, {
						default: W(() => [R(Ne, {
							value: $.description,
							"onUpdate:value": V[24] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				R(Pe, {
					"submit-text": "Сохранить",
					onCancel: Sn
				})
			])])]),
			I("section", Gt, [R(k, {
				title: "Выбор значений и floating UI",
				border: ""
			}), I("div", Kt, [
				I("article", qt, [V[118] ||= I("h2", null, "Selectors", -1), I("div", Jt, [
					R(Me, {
						modelValue: D.value,
						"onUpdate:modelValue": V[25] ||= (e) => D.value = e,
						options: yn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					R(Me, {
						modelValue: D.value,
						"onUpdate:modelValue": V[26] ||= (e) => D.value = e,
						options: yn,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					R(Se, {
						modelValue: O.value,
						"onUpdate:modelValue": V[27] ||= (e) => O.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					R(Se, {
						modelValue: O.value,
						"onUpdate:modelValue": V[28] ||= (e) => O.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				I("article", Yt, [
					V[120] ||= I("h2", null, "BasePopover", -1),
					I("button", {
						ref_key: "popoverAnchor",
						ref: Ue,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[29] ||= (e) => G.value = !G.value
					}, " Открыть popover ", 512),
					R(Ee, {
						open: G.value,
						anchor: Ue.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": V[30] ||= (e) => G.value = e
					}, {
						default: W(() => [...V[119] ||= [I("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				I("article", Xt, [
					V[127] ||= I("h2", null, "ActionMenu", -1),
					R(ke, {
						title: "Действия",
						heading: "Выбранная запись",
						width: 340,
						"follow-anchor": "",
						related: ""
					}, {
						default: W(() => [
							R(y, { tone: "accent" }, {
								default: W(() => [...V[121] ||= [L("Редактировать", -1)]]),
								_: 1
							}),
							R(ve, { label: "Перемещение" }, {
								trigger: W(({ open: e }) => [R(y, {
									submenu: "",
									"submenu-open": e
								}, {
									default: W(() => [...V[122] ||= [L("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: W(() => [R(y, null, {
									default: W(() => [...V[123] ||= [L("В начало", -1)]]),
									_: 1
								}), R(y, null, {
									default: W(() => [...V[124] ||= [L("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							R(y, { tone: "danger" }, {
								default: W(() => [...V[125] ||= [L("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					I("button", {
						ref_key: "actionMenuAnchor",
						ref: We,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[31] ||= (e) => qe.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					R(ke, {
						ref_key: "anchoredActionMenu",
						ref: qe,
						anchor: We.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: W(({ close: e }) => [R(y, { onClick: e }, {
							default: W(() => [...V[126] ||= [L("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				I("article", Zt, [V[130] ||= I("h2", null, "AccountMenu", -1), R(te, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: W(({ close: e }) => [R(y, { onClick: e }, {
						default: W(() => [...V[128] ||= [L("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), R(y, {
						tone: "danger",
						onClick: e
					}, {
						default: W(() => [...V[129] ||= [L("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			I("section", Qt, [R(k, {
				title: "Редакторы и rich text",
				border: ""
			}), I("div", $t, [I("article", en, [
				V[131] ||= I("h2", null, "Rich text", -1),
				R(ae, {
					ref: "richEditor",
					modelValue: M.value,
					"onUpdate:modelValue": V[32] ||= (e) => M.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: W(({ editor: e, insertRichNode: t }) => [I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ve((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, tn), I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ve((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, nn)]),
					_: 1
				}, 8, ["modelValue"]),
				I("div", rn, [R(Ae, { html: M.value }, {
					node: W(({ node: e }) => [I("strong", an, U(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), I("article", on, [V[134] ||= I("h2", null, "Editor composition", -1), R(f, null, {
				default: W(() => [R(ue, { title: "Параметры" }, {
					default: W(() => [R(re, { title: "Основное" }, {
						default: W(() => [R(oe, { title: "Значение" }, {
							actions: W(() => [...V[132] ||= [I("span", null, "12", -1)]]),
							_: 1
						}), R(le, {
							modelValue: T.value,
							"onUpdate:modelValue": V[33] ||= (e) => T.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), R(c, null, {
						default: W(() => [V[133] ||= L("Итого: ", -1), I("strong", null, U(T.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			I("section", sn, [R(k, {
				title: "Каркас приложения",
				border: ""
			}), I("article", cn, [
				V[140] ||= I("h2", null, "Navigation composition", -1),
				R(g, {
					modelValue: H.value,
					"onUpdate:modelValue": V[34] ||= (e) => H.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				I("div", ln, [R(me, {
					class: Le(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": z.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: W(() => [R(ne, {
						modelValue: z.value,
						"onUpdate:modelValue": V[35] ||= (e) => z.value = e,
						elevated: H.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: W(() => [R(pe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: W(() => [...V[135] ||= [I("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: W(() => [
							R(j, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: W(() => [...V[136] ||= [I("span", null, "⌂", -1)]]),
								_: 1
							}),
							R(n, { label: "Примеры" }),
							R(j, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: W(() => [...V[137] ||= [I("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: W(() => [...V[138] ||= [I("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: W(() => [V[139] ||= I("div", { class: "share-component-gallery__chrome-content" }, [
						I("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						I("strong", null, "AppShell + AppSidebar"),
						I("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			I("section", un, [
				R(k, {
					title: "Оверлеи и morph",
					border: ""
				}),
				I("article", dn, [V[141] ||= I("h2", null, "AppDrawer + embedded navigation", -1), R(Je)]),
				I("article", fn, [V[142] ||= I("h2", null, "Интерактивные примеры", -1), I("div", pn, [
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[36] ||= (e) => K.value = !0
					}, "AppModal"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[37] ||= (e) => {
							Y.value = !1, J.value = !0, q.value = !0;
						}
					}, "AppModalFrame"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[38] ||= (e) => {
							Y.value = !1, J.value = !1, q.value = !0;
						}
					}, "AppModalFrame без обводки"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[39] ||= (e) => {
							Y.value = !0, q.value = !0;
						}
					}, "AppModalFrame compact"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[40] ||= (e) => X.value = !0
					}, "ModalShell"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[41] ||= (e) => Z.value = !0
					}, "ConfirmDialog"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[42] ||= (e) => mn.value = !0
					}, "TextPromptDialog"),
					I("button", {
						ref_key: "morphOrigin",
						ref: gn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[43] ||= (e) => hn.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			K.value ? (B(), N(Ce, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: V[44] ||= (e) => K.value = !1
			}, {
				default: W(() => [...V[143] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "AppModal"), I("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : P("", !0),
			q.value ? (B(), N(e, {
				key: 1,
				compact: Y.value,
				width: Y.value ? 360 : void 0,
				outlined: J.value,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: V[47] ||= (e) => q.value = !1
			}, {
				footer: W(() => [R(Pe, {
					onCancel: V[45] ||= (e) => q.value = !1,
					onSubmit: V[46] ||= (e) => q.value = !1
				})]),
				default: W(() => [V[144] ||= I("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			}, 8, [
				"compact",
				"width",
				"outlined"
			])) : P("", !0),
			R(o, {
				open: X.value,
				"aria-label": "Пример ModalShell",
				onClose: V[48] ||= (e) => X.value = !1
			}, {
				default: W(() => [...V[145] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "ModalShell"), I("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			R(ce, {
				open: Z.value,
				"onUpdate:open": V[49] ||= (e) => Z.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			R(de, {
				open: mn.value,
				"onUpdate:open": V[50] ||= (e) => mn.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			hn.value ? (B(), N(fe, {
				key: 2,
				"origin-el": gn.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: V[51] ||= (e) => hn.value = !1
			}, {
				head: W(() => [...V[146] ||= [I("div", { class: "share-component-gallery__morph-head" }, [I("strong", null, "MorphSheet")], -1)]]),
				default: W(() => [V[147] ||= I("div", { class: "share-component-gallery__overlay-content" }, [I("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : P("", !0)
		]));
	}
}, [["__scopeId", "data-v-fa161027"]]);
//#endregion
export { X as COMPONENT_GALLERY_ALIASES, Ze as COMPONENT_GALLERY_COMPONENTS, Z as ComponentGallery };
