import { A as e, At as t, B as n, C as r, Ct as i, D as a, Dt as o, Et as s, F as ee, Ft as c, G as te, H as ne, I as re, It as l, K as ie, L as ae, Mt as u, Nt as oe, O as se, Ot as ce, P as d, Pt as f, R as le, S as ue, St as de, T as fe, Tt as p, V as pe, W as me, _ as m, a as h, b as g, bt as _, c as v, ct as he, d as y, f as b, ft as x, g as ge, h as _e, i as S, it as ve, j as ye, jt as be, k as C, kt as xe, l as w, lt as Se, m as T, n as Ce, o as E, p as D, pt as we, q as Te, r as Ee, rt as De, s as O, t as k, u as A, ut as j, v as Oe, w as ke, wt as M, x as N, xt as Ae, y as je, z as P } from "./StarRating-B7ONxg2I.js";
import { Fragment as F, createBlock as I, createCommentVNode as L, createElementBlock as R, createElementVNode as z, createTextVNode as B, createVNode as V, h as H, normalizeClass as Me, openBlock as U, reactive as Ne, ref as W, renderList as G, toDisplayString as K, unref as Pe, withCtx as q, withModifiers as Fe } from "vue";
//#region src/gallery/BlurGalleryExample.vue
var J = { class: "blur-gallery-scene" }, Ie = { class: "blur-gallery-label" }, Le = /*#__PURE__*/ l({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = W(8);
		return (e, n) => (U(), R("article", null, [
			n[2] ||= z("h2", null, "BlurBackdrop", -1),
			V(N, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: q(() => [V(g, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			z("div", J, [
				n[1] ||= z("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				V(c, { radius: Number(t.value) }, null, 8, ["radius"]),
				z("strong", Ie, "Sharp foreground · " + K(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-f06d0545"]]), Re = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = W(null), n = j(640), r = Ne(y());
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
		return (e, a) => (U(), R(F, null, [V(T, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: q(() => [...a[0] ||= [B("Показать обучение", -1)]]),
			_: 1
		}, 512), V(b, {
			tour: r,
			mobile: Pe(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, ze = { class: "drawer-gallery" }, Be = { class: "drawer-gallery__actions" }, Y = { class: "drawer-gallery__content" }, X = ["onClick"], Ve = /*#__PURE__*/ l({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = W(!1), r = W(!1), i = W(!1), a = W(!1);
		return (e, o) => (U(), R("div", ze, [
			o[16] ||= z("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			z("div", Be, [
				z("button", {
					type: "button",
					onClick: o[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				z("button", {
					type: "button",
					onClick: o[1] ||= (e) => i.value = !0
				}, "Embedded AppSidebar"),
				V(_, {
					modelValue: a.value,
					"onUpdate:modelValue": o[2] ||= (e) => a.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			V(d, {
				modelValue: t.value,
				"onUpdate:modelValue": o[4] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": a.value
			}, {
				title: q(() => [...o[10] ||= [z("strong", null, "AppDrawer", -1)]]),
				footer: q(({ close: e }) => [z("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, X)]),
				default: q(() => [z("div", Y, [
					o[11] ||= z("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					z("button", {
						type: "button",
						onClick: o[3] ||= (e) => r.value = !0
					}, "Nested drawer"),
					(U(), R(F, null, G(24, (e) => z("p", { key: e }, "Example row " + K(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			V(d, {
				modelValue: r.value,
				"onUpdate:modelValue": o[5] ||= (e) => r.value = e,
				"aria-label": "Nested drawer",
				width: "min(360px, 90vw)",
				"z-index": 3100
			}, {
				title: q(() => [...o[12] ||= [z("strong", null, "Nested drawer", -1)]]),
				default: q(() => [o[13] ||= z("p", { class: "drawer-gallery__content" }, "Escape закрывает только верхний drawer; scroll остаётся заблокирован.", -1)]),
				_: 1
			}, 8, ["modelValue"]),
			V(d, {
				modelValue: i.value,
				"onUpdate:modelValue": o[9] ||= (e) => i.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-close": a.value
			}, {
				default: q(() => [V(ne, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: q(() => [V(pe, {
						as: "div",
						label: "share-ui"
					}, {
						icon: q(() => [...o[14] ||= [B("◆", -1)]]),
						_: 1
					}), z("button", {
						type: "button",
						"aria-label": "Close navigation",
						onClick: o[6] ||= (e) => i.value = !1
					}, "×")]),
					account: q(() => [V(we, { title: "Account actions" }, {
						trigger: q(() => [V(te, {
							label: "Example account",
							expanded: ""
						})]),
						default: q(() => [V(x, null, {
							default: q(() => [...o[15] ||= [B("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: q(() => [
						V(n, { label: "Navigation" }),
						V(P, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[7] ||= (e) => i.value = !1
						}),
						V(P, {
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
}, [["__scopeId", "data-v-8cf1614e"]]), He = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = W("star"), n = W(!1), r = W([]), i = W(null), a = W(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => H("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => H("span", "●") }
		}], s = W([{
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
		return (e, c) => (U(), R(F, null, [V(v, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: q(() => [
				V(A, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				V(A, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				V(A, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				V(A, {
					percent: 100,
					label: "Полное значение"
				}),
				V(w, {
					modelValue: t.value,
					"onUpdate:modelValue": c[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				V(w, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				V(O, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: c[1] ||= (e) => n.value = !n.value
				}, {
					icon: q(() => [...c[8] ||= [B("✦", -1)]]),
					trailing: q(() => [...c[9] ||= [B("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				V(O, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				V(h, {
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
				V(E, {
					options: s.value,
					label: "Варианты",
					onSelect: c[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				V(E, {
					options: [],
					label: "Пустой список"
				}),
				z("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: c[4] ||= (e) => a.value = !0,
					onMouseleave: c[5] ||= (e) => a.value = !1,
					onFocus: c[6] ||= (e) => a.value = !0,
					onBlur: c[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (U(), I(S, {
					key: 0,
					anchor: i.value
				}, {
					default: q(() => [...c[10] ||= [B("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : L("", !0)
			]),
			_: 1
		}), V(v, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: q(() => [...c[11] ||= [B("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Ue = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), Z = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), We = { class: "share-component-gallery" }, Ge = { class: "share-component-gallery__header" }, Ke = { class: "share-component-gallery__eyebrow" }, qe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, Je = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, Ye = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, Xe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, Ze = { class: "share-component-gallery__section" }, Qe = { class: "share-component-gallery__grid" }, $e = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, et = { class: "share-component-gallery__glass-surfaces" }, tt = { class: "share-component-gallery__tile-row" }, nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, rt = { class: "share-component-gallery__row" }, it = { class: "share-component-gallery__row" }, at = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, st = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, lt = { class: "share-component-gallery__row" }, ut = { class: "share-component-gallery__row" }, dt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, ft = { class: "share-component-gallery__section" }, pt = { class: "share-component-gallery__grid" }, mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, ht = { class: "share-component-gallery__stack" }, gt = { class: "share-component-gallery__checkbox-row" }, _t = { class: "share-component-gallery__checkbox-row" }, vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, yt = { class: "share-component-gallery__stack" }, bt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, xt = { class: "share-component-gallery__stack" }, St = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Ct = ["d"], wt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Tt = ["d"], Et = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Dt = ["d"], Ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, kt = { class: "share-component-gallery__slider" }, At = { class: "share-component-gallery__section" }, jt = { class: "share-component-gallery__grid" }, Mt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Nt = { class: "share-component-gallery__form-grid" }, Pt = { class: "share-component-gallery__section" }, Ft = { class: "share-component-gallery__grid" }, It = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Lt = { class: "share-component-gallery__stack" }, Rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, zt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Bt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Vt = { class: "share-component-gallery__section" }, Ht = { class: "share-component-gallery__grid" }, Ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, Wt = ["onMousedown"], Gt = ["onMousedown"], Kt = { class: "share-component-gallery__preview" }, qt = { class: "share-component-gallery__rich-node" }, Jt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, Yt = { class: "share-component-gallery__section" }, Xt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, Zt = { class: "share-component-gallery__chrome" }, Qt = { class: "share-component-gallery__section" }, $t = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, en = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, tn = { class: "share-component-gallery__row" }, Q = /*#__PURE__*/ l({
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
	setup(c) {
		let l = Ue.length, d = W(3), h = W(!0), v = W(!0), y = W(!0), b = W("md"), S = W("preview"), w = W("build"), E = [
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
		], O = W(62), A = W("rare"), j = W("#7c5ce2"), F = W("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), H = W(!0), G = W(!0), J = W(!1), Ie = W(null), ze = W(null), Be = W(null), Y = W(!1), X = W(!1), Z = W(!1), Q = W(!1), nn = W(!1), rn = W(0), an = W(!1), on = W(null), sn = [
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
		], cn = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], ln = [
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
		], un = [
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
		], $ = Ne({
			date: "",
			name: "Новый элемент",
			count: 3,
			fraction: 1.25,
			type: "base",
			description: ""
		});
		function dn(e) {
			return `${e} МБ`;
		}
		function fn() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Ne, W) => (U(), R("div", We, [
			z("header", Ge, [z("div", null, [
				z("p", Ke, "share-ui · " + K(Pe(l)) + " компонентов", 1),
				z("h1", null, K(c.title), 1),
				z("p", null, K(c.description), 1)
			]), W[43] ||= z("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			z("section", qe, [V(Le)]),
			z("section", Je, [
				V(k, {
					modelValue: d.value,
					"onUpdate:modelValue": W[0] ||= (e) => d.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				V(k, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				V(k, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			z("section", Ye, [V(He)]),
			z("section", Xe, [W[44] ||= z("h2", null, "GuidedTour", -1), V(Re)]),
			z("section", Ze, [V(M, {
				title: "Поверхности и действия",
				border: ""
			}), z("div", Qe, [
				z("article", $e, [
					W[58] ||= z("h2", null, "BaseTile", -1),
					z("div", et, [V(f, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: q(() => [...W[45] ||= [B("Glass frame", -1)]]),
						_: 1
					}), V(f, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: q(() => [...W[46] ||= [B("Glass interactive", -1)]]),
						_: 1
					})]),
					V(T, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: q(() => [...W[47] ||= [B("✦", -1)]]),
						_: 1
					}),
					z("div", tt, [
						V(f, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: q(() => [
								V(be),
								W[48] ||= z("strong", null, "Акцентная плитка", -1),
								W[49] ||= z("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						V(f, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: q(() => [...W[50] ||= [z("strong", null, "Рамка", -1), z("span", null, "framed", -1)]]),
							_: 1
						}),
						V(f, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: q(() => [...W[51] ||= [z("strong", null, "Усиленная рамка", -1), z("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						V(u, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: W[1] ||= (e) => rn.value++
						}, {
							aside: q(() => [z("span", null, K(rn.value), 1)]),
							default: q(() => [W[52] ||= z("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						V(u, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: q(() => [...W[53] ||= [z("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						V(u, { title: "Только просмотр" }, {
							default: q(() => [...W[54] ||= [z("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						V(u, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: q(() => [...W[55] ||= [z("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						V(u, null, {
							default: q(() => [...W[56] ||= [z("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						V(u, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: q(() => [...W[57] ||= [z("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						V(oe, { title: "Общий заголовок" })
					])
				]),
				z("article", nt, [
					W[59] ||= z("h2", null, "Загрузка", -1),
					V(_e, { label: "Открываем раздел…" }),
					V(_e, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					V(C, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					z("div", rt, [
						V(C, {
							label: "Загрузка",
							size: "sm"
						}),
						V(C, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						V(C, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					z("div", it, [V(ge, {
						width: "36px",
						height: "36px",
						round: ""
					}), V(ge, { width: "60%" })])
				]),
				z("article", at, [
					W[60] ||= z("h2", null, "InlineEdit", -1),
					V(m, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					V(m, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					V(m, {
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
				z("article", ot, [
					W[68] ||= z("h2", null, "TimelineGroup", -1),
					V(M, {
						title: "История",
						line: ""
					}, {
						actions: q(() => [...W[61] ||= [z("span", null, "2", -1)]]),
						_: 1
					}),
					V(Ce, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: q(() => [...W[62] ||= [z("strong", null, "Участник", -1)]]),
						default: q(() => [W[63] ||= z("strong", null, "Запись события", -1), W[64] ||= z("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					V(Ce, { color: "var(--success)" }, {
						identity: q(() => [...W[65] ||= [z("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: q(() => [V(N, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: q(() => [V(r, { value: "Черновик" })]),
							_: 1
						})]),
						default: q(() => [W[66] ||= z("strong", null, "Компактная запись", -1), W[67] ||= z("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				z("article", st, [
					W[72] ||= z("h2", null, "SectionList", -1),
					V(t, { title: "Записи" }, {
						footer: q(() => [V(xe, { label: "Добавить запись" })]),
						default: q(() => [W[69] ||= z("div", { style: { padding: "12px 0" } }, "Первая запись", -1), W[70] ||= z("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					V(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: q(() => [...W[71] ||= [z("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), z("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				z("article", ct, [
					W[84] ||= z("h2", null, "Кнопки элементов", -1),
					z("div", lt, [
						V(D, {
							modelValue: h.value,
							"onUpdate:modelValue": W[2] ||= (e) => h.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: q(() => [...W[73] ||= [z("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [z("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}, 8, ["modelValue"]),
						V(D, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: q(() => [...W[74] ||= [z("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [z("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}),
						V(D, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: q(() => [...W[75] ||= [z("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [z("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						})
					]),
					V(M, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					V(M, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					z("div", ut, [
						V(T, null, {
							default: q(() => [...W[76] ||= [B("Основное действие", -1)]]),
							_: 1
						}),
						V(T, { variant: "secondary" }, {
							default: q(() => [...W[77] ||= [B("Вторичное", -1)]]),
							_: 1
						}),
						V(T, { variant: "quiet" }, {
							default: q(() => [...W[78] ||= [B("Тихое", -1)]]),
							_: 1
						}),
						V(T, { variant: "dashed" }, {
							default: q(() => [...W[79] ||= [B("Пунктирная рамка", -1)]]),
							_: 1
						}),
						V(T, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: q(() => [...W[80] ||= [B("✦", -1)]]),
							default: q(() => [W[81] ||= B("Действие", -1)]),
							_: 1
						}),
						V(T, { disabled: "" }, {
							default: q(() => [...W[82] ||= [B("Недоступно", -1)]]),
							_: 1
						}),
						V(T, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: q(() => [...W[83] ||= [B("Загрузка", -1)]]),
							_: 1
						}),
						V(xe, { label: "Добавить элемент" }),
						V(xe, {
							label: "Добавить",
							variant: "icon"
						}),
						V(p, { label: "Удалить" }),
						V(p, {
							label: "Удалить",
							variant: "boxed"
						}),
						V(p, {
							label: "Удалить запись",
							icon: "trash"
						}),
						V(p, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						V(p, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				z("article", dt, [W[85] ||= z("h2", null, "SegmentDonutChart", -1), V(i, {
					segments: un,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": dn
				})])
			])]),
			z("section", ft, [V(M, {
				title: "Переключатели",
				border: ""
			}), z("div", pt, [
				z("article", mt, [W[88] ||= z("h2", null, "Boolean controls", -1), z("div", ht, [
					V(_, {
						modelValue: v.value,
						"onUpdate:modelValue": W[3] ||= (e) => v.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					z("label", gt, [V(o, {
						modelValue: y.value,
						"onUpdate:modelValue": W[4] ||= (e) => y.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), W[86] ||= B(" Выбрать элемент ", -1)]),
					z("label", _t, [V(o, {
						modelValue: y.value,
						"onUpdate:modelValue": W[5] ||= (e) => y.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), W[87] ||= B(" Крупный выбор (24px) ", -1)])
				])]),
				z("article", vt, [W[91] ||= z("h2", null, "Segmented controls", -1), z("div", yt, [
					V(s, {
						modelValue: b.value,
						"onUpdate:modelValue": W[6] ||= (e) => b.value = e,
						options: sn,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					V(Ae, {
						modelValue: S.value,
						"onUpdate:modelValue": W[7] ||= (e) => S.value = e,
						variant: "chips",
						tabs: cn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": q(({ tab: e }) => [V(T, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: q(() => [...W[89] ||= [B("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					V(Ae, {
						modelValue: S.value,
						"onUpdate:modelValue": W[8] ||= (e) => S.value = e,
						tabs: cn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": q(({ tab: e }) => [V(T, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: q(() => [...W[90] ||= [B("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				z("article", bt, [W[92] ||= z("h2", null, "IconNavigation", -1), z("div", xt, [
					V(de, {
						modelValue: w.value,
						"onUpdate:modelValue": W[9] ||= (e) => w.value = e,
						items: E,
						label: "Horizontal sections"
					}, {
						icon: q(({ item: e }) => [(U(), R("svg", St, [z("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Ct)]))]),
						_: 1
					}, 8, ["modelValue"]),
					V(de, {
						modelValue: w.value,
						"onUpdate:modelValue": W[10] ||= (e) => w.value = e,
						items: E,
						pill: "",
						label: "Pill sections"
					}, {
						icon: q(({ item: e }) => [(U(), R("svg", wt, [z("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Tt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					V(de, {
						modelValue: w.value,
						"onUpdate:modelValue": W[11] ||= (e) => w.value = e,
						items: E,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: q(({ item: e }) => [(U(), R("svg", Et, [z("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Dt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				z("article", Ot, [W[93] ||= z("h2", null, "AppSlider", -1), z("div", kt, [V(ce, {
					modelValue: O.value,
					"onUpdate:modelValue": W[12] ||= (e) => O.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), z("strong", null, K(O.value), 1)])])
			])]),
			z("section", At, [V(M, {
				title: "Формы",
				border: ""
			}), z("div", jt, [z("article", Mt, [
				W[95] ||= z("h2", null, "Form primitives", -1),
				W[96] ||= z("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				z("div", Nt, [
					V(N, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: q(() => [V(r, {
							value: $.name,
							"onUpdate:value": W[13] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					V(N, {
						label: "Дата",
						vertical: ""
					}, {
						default: q(() => [V(Ee, {
							modelValue: $.date,
							"onUpdate:modelValue": W[14] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), V(Ee, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					V(N, {
						label: "Количество",
						vertical: ""
					}, {
						default: q(() => [V(g, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: W[15] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					V(N, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: q(() => [V(g, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: W[16] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					V(N, {
						label: "Тип",
						vertical: ""
					}, {
						default: q(() => [V(je, {
							value: $.type,
							"onUpdate:value": W[17] ||= (e) => $.type = e
						}, {
							default: q(() => [...W[94] ||= [z("option", { value: "base" }, "Основной", -1), z("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					V(N, {
						label: "Описание",
						vertical: ""
					}, {
						default: q(() => [V(Oe, {
							value: $.description,
							"onUpdate:value": W[18] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				V(ke, {
					"submit-text": "Сохранить",
					onCancel: fn
				})
			])])]),
			z("section", Pt, [V(M, {
				title: "Выбор значений и floating UI",
				border: ""
			}), z("div", Ft, [
				z("article", It, [W[97] ||= z("h2", null, "Selectors", -1), z("div", Lt, [
					V(De, {
						modelValue: A.value,
						"onUpdate:modelValue": W[19] ||= (e) => A.value = e,
						options: ln,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					V(ve, {
						modelValue: j.value,
						"onUpdate:modelValue": W[20] ||= (e) => j.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					V(ve, {
						modelValue: j.value,
						"onUpdate:modelValue": W[21] ||= (e) => j.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				z("article", Rt, [
					W[99] ||= z("h2", null, "BasePopover", -1),
					z("button", {
						ref_key: "popoverAnchor",
						ref: Ie,
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[22] ||= (e) => J.value = !J.value
					}, " Открыть popover ", 512),
					V(Se, {
						open: J.value,
						anchor: Ie.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": W[23] ||= (e) => J.value = e
					}, {
						default: q(() => [...W[98] ||= [z("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				z("article", zt, [
					W[106] ||= z("h2", null, "ActionMenu", -1),
					V(we, {
						title: "Действия",
						related: ""
					}, {
						default: q(() => [
							V(x, { tone: "accent" }, {
								default: q(() => [...W[100] ||= [B("Редактировать", -1)]]),
								_: 1
							}),
							V(he, { label: "Перемещение" }, {
								trigger: q(({ open: e }) => [V(x, {
									submenu: "",
									"submenu-open": e
								}, {
									default: q(() => [...W[101] ||= [B("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: q(() => [V(x, null, {
									default: q(() => [...W[102] ||= [B("В начало", -1)]]),
									_: 1
								}), V(x, null, {
									default: q(() => [...W[103] ||= [B("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							V(x, { tone: "danger" }, {
								default: q(() => [...W[104] ||= [B("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					z("button", {
						ref_key: "actionMenuAnchor",
						ref: ze,
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[24] ||= (e) => Be.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					V(we, {
						ref_key: "anchoredActionMenu",
						ref: Be,
						anchor: ze.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: q(({ close: e }) => [V(x, { onClick: e }, {
							default: q(() => [...W[105] ||= [B("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				z("article", Bt, [W[109] ||= z("h2", null, "AccountMenu", -1), V(te, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: q(({ close: e }) => [V(x, { onClick: e }, {
						default: q(() => [...W[107] ||= [B("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), V(x, {
						tone: "danger",
						onClick: e
					}, {
						default: q(() => [...W[108] ||= [B("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			z("section", Vt, [V(M, {
				title: "Редакторы и rich text",
				border: ""
			}), z("div", Ht, [z("article", Ut, [
				W[110] ||= z("h2", null, "Rich text", -1),
				V(ie, {
					ref: "richEditor",
					modelValue: F.value,
					"onUpdate:modelValue": W[25] ||= (e) => F.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: q(({ editor: e, insertRichNode: t }) => [z("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Fe((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, Wt), z("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Fe((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Gt)]),
					_: 1
				}, 8, ["modelValue"]),
				z("div", Kt, [V(Te, { html: F.value }, {
					node: q(({ node: e }) => [z("strong", qt, K(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), z("article", Jt, [W[113] ||= z("h2", null, "Editor composition", -1), V(f, null, {
				default: q(() => [V(le, { title: "Параметры" }, {
					default: q(() => [V(re, { title: "Основное" }, {
						default: q(() => [V(ae, { title: "Значение" }, {
							actions: q(() => [...W[111] ||= [z("span", null, "12", -1)]]),
							_: 1
						}), V(ce, {
							modelValue: O.value,
							"onUpdate:modelValue": W[26] ||= (e) => O.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), V(ee, null, {
						default: q(() => [W[112] ||= B("Итого: ", -1), z("strong", null, K(O.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			z("section", Yt, [V(M, {
				title: "Каркас приложения",
				border: ""
			}), z("article", Xt, [
				W[119] ||= z("h2", null, "Navigation composition", -1),
				V(_, {
					modelValue: G.value,
					"onUpdate:modelValue": W[27] ||= (e) => G.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				z("div", Zt, [V(me, {
					class: Me(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": H.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: q(() => [V(ne, {
						modelValue: H.value,
						"onUpdate:modelValue": W[28] ||= (e) => H.value = e,
						elevated: G.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: q(() => [V(pe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: q(() => [...W[114] ||= [z("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: q(() => [
							V(P, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: q(() => [...W[115] ||= [z("span", null, "⌂", -1)]]),
								_: 1
							}),
							V(n, { label: "Примеры" }),
							V(P, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: q(() => [...W[116] ||= [z("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: q(() => [...W[117] ||= [z("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: q(() => [W[118] ||= z("div", { class: "share-component-gallery__chrome-content" }, [
						z("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						z("strong", null, "AppShell + AppSidebar"),
						z("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			z("section", Qt, [
				V(M, {
					title: "Оверлеи и morph",
					border: ""
				}),
				z("article", $t, [W[120] ||= z("h2", null, "AppDrawer + embedded navigation", -1), V(Ve)]),
				z("article", en, [W[121] ||= z("h2", null, "Интерактивные примеры", -1), z("div", tn, [
					z("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[29] ||= (e) => Y.value = !0
					}, "AppModal"),
					z("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[30] ||= (e) => X.value = !0
					}, "AppModalFrame"),
					z("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[31] ||= (e) => Z.value = !0
					}, "ModalShell"),
					z("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[32] ||= (e) => Q.value = !0
					}, "ConfirmDialog"),
					z("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[33] ||= (e) => nn.value = !0
					}, "TextPromptDialog"),
					z("button", {
						ref_key: "morphOrigin",
						ref: on,
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[34] ||= (e) => an.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			Y.value ? (U(), I(ye, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: W[35] ||= (e) => Y.value = !1
			}, {
				default: q(() => [...W[122] ||= [z("div", { class: "share-component-gallery__overlay-content" }, [z("h2", null, "AppModal"), z("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : L("", !0),
			X.value ? (U(), I(e, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: W[38] ||= (e) => X.value = !1
			}, {
				footer: q(() => [V(ke, {
					onCancel: W[36] ||= (e) => X.value = !1,
					onSubmit: W[37] ||= (e) => X.value = !1
				})]),
				default: q(() => [W[123] ||= z("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : L("", !0),
			V(a, {
				open: Z.value,
				"aria-label": "Пример ModalShell",
				onClose: W[39] ||= (e) => Z.value = !1
			}, {
				default: q(() => [...W[124] ||= [z("div", { class: "share-component-gallery__overlay-content" }, [z("h2", null, "ModalShell"), z("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			V(se, {
				open: Q.value,
				"onUpdate:open": W[40] ||= (e) => Q.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			V(ue, {
				open: nn.value,
				"onUpdate:open": W[41] ||= (e) => nn.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			an.value ? (U(), I(fe, {
				key: 2,
				"origin-el": on.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: W[42] ||= (e) => an.value = !1
			}, {
				head: q(() => [...W[125] ||= [z("div", { class: "share-component-gallery__morph-head" }, [z("strong", null, "MorphSheet")], -1)]]),
				default: q(() => [W[126] ||= z("div", { class: "share-component-gallery__overlay-content" }, [z("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : L("", !0)
		]));
	}
}, [["__scopeId", "data-v-f8dc2670"]]);
//#endregion
export { Z as COMPONENT_GALLERY_ALIASES, Ue as COMPONENT_GALLERY_COMPONENTS, Q as ComponentGallery };
