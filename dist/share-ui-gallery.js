import { A as e, At as t, B as n, Bt as r, C as i, Ct as a, D as o, Dt as s, Et as ee, F as c, Ft as te, G as ne, H as re, I as ie, K as ae, L as oe, Mt as l, Nt as se, O as ce, Ot as le, P as u, Pt as d, R as ue, S as de, St as fe, T as pe, Tt as f, V as me, W as he, _ as p, a as m, b as h, bt as g, c as _, ct as ge, d as v, f as y, ft as b, g as _e, h as ve, i as x, it as ye, j as be, jt as xe, k as S, kt as Se, l as C, lt as Ce, m as w, n as we, o as T, p as Te, pt as E, q as Ee, r as De, rt as Oe, s as D, t as O, u as k, ut as A, v as ke, w as Ae, wt as j, x as M, xt as je, y as Me, z as N, zt as P } from "./StarRating-DHlfPQ9L.js";
import { Fragment as F, createBlock as I, createCommentVNode as L, createElementBlock as R, createElementVNode as z, createTextVNode as B, createVNode as V, h as H, normalizeClass as Ne, openBlock as U, reactive as Pe, ref as W, renderList as G, toDisplayString as K, unref as Fe, withCtx as q, withModifiers as Ie } from "vue";
//#region src/gallery/ChoiceCardGalleryExample.vue
var Le = { class: "choice-gallery-options" }, Re = /*#__PURE__*/ r({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = W("First option"), n = ["First option", "Second option"];
		return (e, r) => (U(), R("article", null, [r[1] ||= z("h2", null, "ChoiceCard", -1), z("div", Le, [(U(), R(F, null, G(n, (e) => V(P, {
			key: e,
			label: e,
			description: "Exclusive, optional selection",
			"model-value": t.value === e,
			"onUpdate:modelValue": (n) => t.value = n ? e : ""
		}, {
			icon: q(() => [...r[0] ||= [z("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [z("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
			_: 1
		}, 8, [
			"label",
			"model-value",
			"onUpdate:modelValue"
		])), 64)), V(P, {
			label: "Unavailable",
			description: "Disabled option",
			disabled: ""
		})])]));
	}
}, [["__scopeId", "data-v-cb8bcf8d"]]), ze = { class: "blur-gallery-scene" }, Be = { class: "blur-gallery-label" }, Ve = /*#__PURE__*/ r({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = W(8);
		return (e, n) => (U(), R("article", null, [
			n[2] ||= z("h2", null, "BlurBackdrop", -1),
			V(M, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: q(() => [V(h, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			z("div", ze, [
				n[1] ||= z("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				V(te, { radius: Number(t.value) }, null, 8, ["radius"]),
				z("strong", Be, "Sharp foreground · " + K(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-34aec14d"]]), He = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = W(null), n = A(640), r = Pe(v());
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
		return (e, a) => (U(), R(F, null, [V(w, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: q(() => [...a[0] ||= [B("Показать обучение", -1)]]),
			_: 1
		}, 512), V(y, {
			tour: r,
			mobile: Fe(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, J = { class: "drawer-gallery" }, Y = { class: "drawer-gallery__actions" }, X = { class: "drawer-gallery__content" }, Z = ["onClick"], Ue = /*#__PURE__*/ r({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = W(!1), r = W(!1), i = W(!1), a = W(!1);
		return (e, o) => (U(), R("div", J, [
			o[16] ||= z("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			z("div", Y, [
				z("button", {
					type: "button",
					onClick: o[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				z("button", {
					type: "button",
					onClick: o[1] ||= (e) => i.value = !0
				}, "Embedded AppSidebar"),
				V(g, {
					modelValue: a.value,
					"onUpdate:modelValue": o[2] ||= (e) => a.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			V(u, {
				modelValue: t.value,
				"onUpdate:modelValue": o[4] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": a.value
			}, {
				title: q(() => [...o[10] ||= [z("strong", null, "AppDrawer", -1)]]),
				footer: q(({ close: e }) => [z("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, Z)]),
				default: q(() => [z("div", X, [
					o[11] ||= z("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					z("button", {
						type: "button",
						onClick: o[3] ||= (e) => r.value = !0
					}, "Nested drawer"),
					(U(), R(F, null, G(24, (e) => z("p", { key: e }, "Example row " + K(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			V(u, {
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
			V(u, {
				modelValue: i.value,
				"onUpdate:modelValue": o[9] ||= (e) => i.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-close": a.value
			}, {
				default: q(() => [V(re, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: q(() => [V(me, {
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
					account: q(() => [V(E, { title: "Account actions" }, {
						trigger: q(() => [V(ne, {
							label: "Example account",
							expanded: ""
						})]),
						default: q(() => [V(b, null, {
							default: q(() => [...o[15] ||= [B("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: q(() => [
						V(n, { label: "Navigation" }),
						V(N, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[7] ||= (e) => i.value = !1
						}),
						V(N, {
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
}, [["__scopeId", "data-v-51dc5ffe"]]), We = {
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
		return (e, c) => (U(), R(F, null, [V(_, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: q(() => [
				V(k, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				V(k, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				V(k, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				V(k, {
					percent: 100,
					label: "Полное значение"
				}),
				V(C, {
					modelValue: t.value,
					"onUpdate:modelValue": c[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				V(C, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				V(D, {
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
				V(D, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				V(m, {
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
				V(T, {
					options: s.value,
					label: "Варианты",
					onSelect: c[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				V(T, {
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
				a.value ? (U(), I(x, {
					key: 0,
					anchor: i.value
				}, {
					default: q(() => [...c[10] ||= [B("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : L("", !0)
			]),
			_: 1
		}), V(_, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: q(() => [...c[11] ||= [B("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Ge = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.ChoiceCard.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), Q = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Ke = { class: "share-component-gallery" }, qe = { class: "share-component-gallery__header" }, Je = { class: "share-component-gallery__eyebrow" }, Ye = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, Xe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "ChoiceCard"
}, Ze = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, Qe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, $e = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, et = { class: "share-component-gallery__section" }, tt = { class: "share-component-gallery__grid" }, nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, rt = { class: "share-component-gallery__glass-surfaces" }, it = { class: "share-component-gallery__tile-row" }, at = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, ot = { class: "share-component-gallery__row" }, st = { class: "share-component-gallery__row" }, ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, ft = { class: "share-component-gallery__row" }, pt = { class: "share-component-gallery__row" }, mt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, ht = { class: "share-component-gallery__section" }, gt = { class: "share-component-gallery__grid" }, _t = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, vt = { class: "share-component-gallery__stack" }, yt = { class: "share-component-gallery__checkbox-row" }, bt = { class: "share-component-gallery__checkbox-row" }, xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, St = { class: "share-component-gallery__stack" }, Ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, wt = { class: "share-component-gallery__stack" }, Tt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Et = ["d"], Dt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Ot = ["d"], kt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, At = ["d"], jt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Mt = { class: "share-component-gallery__slider" }, Nt = { class: "share-component-gallery__section" }, Pt = { class: "share-component-gallery__grid" }, Ft = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, It = { class: "share-component-gallery__form-grid" }, Lt = { class: "share-component-gallery__section" }, Rt = { class: "share-component-gallery__grid" }, zt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Bt = { class: "share-component-gallery__stack" }, Vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Wt = { class: "share-component-gallery__section" }, Gt = { class: "share-component-gallery__grid" }, Kt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, qt = ["onMousedown"], Jt = ["onMousedown"], Yt = { class: "share-component-gallery__preview" }, Xt = { class: "share-component-gallery__rich-node" }, Zt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, Qt = { class: "share-component-gallery__section" }, $t = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, en = { class: "share-component-gallery__chrome" }, tn = { class: "share-component-gallery__section" }, nn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, rn = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, an = { class: "share-component-gallery__row" }, on = /*#__PURE__*/ r({
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
		let te = Ge.length, u = W(3), m = W(!0), _ = W(!0), v = W(!0), y = W("md"), x = W("preview"), C = W("build"), T = [
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
		], D = W(62), k = W("rare"), A = W("#7c5ce2"), P = W("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), F = W(!0), H = W(!0), G = W(!1), Le = W(null), ze = W(null), Be = W(null), J = W(!1), Y = W(!1), X = W(!1), Z = W(!1), Q = W(!1), on = W(0), sn = W(!1), cn = W(null), ln = [
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
		], $ = Pe({
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
		return (Pe, W) => (U(), R("div", Ke, [
			z("header", qe, [z("div", null, [
				z("p", Je, "share-ui · " + K(Fe(te)) + " компонентов", 1),
				z("h1", null, K(r.title), 1),
				z("p", null, K(r.description), 1)
			]), W[43] ||= z("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			z("section", Ye, [V(Ve)]),
			z("section", Xe, [V(Re)]),
			z("section", Ze, [
				V(O, {
					modelValue: u.value,
					"onUpdate:modelValue": W[0] ||= (e) => u.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				V(O, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				V(O, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			z("section", Qe, [V(We)]),
			z("section", $e, [W[44] ||= z("h2", null, "GuidedTour", -1), V(He)]),
			z("section", et, [V(j, {
				title: "Поверхности и действия",
				border: ""
			}), z("div", tt, [
				z("article", nt, [
					W[58] ||= z("h2", null, "BaseTile", -1),
					z("div", rt, [V(d, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: q(() => [...W[45] ||= [B("Glass frame", -1)]]),
						_: 1
					}), V(d, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: q(() => [...W[46] ||= [B("Glass interactive", -1)]]),
						_: 1
					})]),
					V(w, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: q(() => [...W[47] ||= [B("✦", -1)]]),
						_: 1
					}),
					z("div", it, [
						V(d, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: q(() => [
								V(xe),
								W[48] ||= z("strong", null, "Акцентная плитка", -1),
								W[49] ||= z("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						V(d, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: q(() => [...W[50] ||= [z("strong", null, "Рамка", -1), z("span", null, "framed", -1)]]),
							_: 1
						}),
						V(d, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: q(() => [...W[51] ||= [z("strong", null, "Усиленная рамка", -1), z("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						V(l, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: W[1] ||= (e) => on.value++
						}, {
							aside: q(() => [z("span", null, K(on.value), 1)]),
							default: q(() => [W[52] ||= z("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						V(l, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: q(() => [...W[53] ||= [z("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						V(l, { title: "Только просмотр" }, {
							default: q(() => [...W[54] ||= [z("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						V(l, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: q(() => [...W[55] ||= [z("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						V(l, null, {
							default: q(() => [...W[56] ||= [z("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						V(l, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: q(() => [...W[57] ||= [z("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						V(se, { title: "Общий заголовок" })
					])
				]),
				z("article", at, [
					W[59] ||= z("h2", null, "Загрузка", -1),
					V(ve, { label: "Открываем раздел…" }),
					V(ve, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					V(S, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					z("div", ot, [
						V(S, {
							label: "Загрузка",
							size: "sm"
						}),
						V(S, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						V(S, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					z("div", st, [V(_e, {
						width: "36px",
						height: "36px",
						round: ""
					}), V(_e, { width: "60%" })])
				]),
				z("article", ct, [
					W[60] ||= z("h2", null, "InlineEdit", -1),
					V(p, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					V(p, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					V(p, {
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
				z("article", lt, [
					W[68] ||= z("h2", null, "TimelineGroup", -1),
					V(j, {
						title: "История",
						line: ""
					}, {
						actions: q(() => [...W[61] ||= [z("span", null, "2", -1)]]),
						_: 1
					}),
					V(we, {
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
					V(we, { color: "var(--success)" }, {
						identity: q(() => [...W[65] ||= [z("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: q(() => [V(M, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: q(() => [V(i, { value: "Черновик" })]),
							_: 1
						})]),
						default: q(() => [W[66] ||= z("strong", null, "Компактная запись", -1), W[67] ||= z("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				z("article", ut, [
					W[72] ||= z("h2", null, "SectionList", -1),
					V(t, { title: "Записи" }, {
						footer: q(() => [V(Se, { label: "Добавить запись" })]),
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
				z("article", dt, [
					W[84] ||= z("h2", null, "Кнопки элементов", -1),
					z("div", ft, [
						V(Te, {
							modelValue: m.value,
							"onUpdate:modelValue": W[2] ||= (e) => m.value = e,
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
						V(Te, {
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
						V(Te, {
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
					V(j, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					V(j, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					z("div", pt, [
						V(w, null, {
							default: q(() => [...W[76] ||= [B("Основное действие", -1)]]),
							_: 1
						}),
						V(w, { variant: "secondary" }, {
							default: q(() => [...W[77] ||= [B("Вторичное", -1)]]),
							_: 1
						}),
						V(w, { variant: "quiet" }, {
							default: q(() => [...W[78] ||= [B("Тихое", -1)]]),
							_: 1
						}),
						V(w, { variant: "dashed" }, {
							default: q(() => [...W[79] ||= [B("Пунктирная рамка", -1)]]),
							_: 1
						}),
						V(w, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: q(() => [...W[80] ||= [B("✦", -1)]]),
							default: q(() => [W[81] ||= B("Действие", -1)]),
							_: 1
						}),
						V(w, { disabled: "" }, {
							default: q(() => [...W[82] ||= [B("Недоступно", -1)]]),
							_: 1
						}),
						V(w, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: q(() => [...W[83] ||= [B("Загрузка", -1)]]),
							_: 1
						}),
						V(Se, { label: "Добавить элемент" }),
						V(Se, {
							label: "Добавить",
							variant: "icon"
						}),
						V(f, { label: "Удалить" }),
						V(f, {
							label: "Удалить",
							variant: "boxed"
						}),
						V(f, {
							label: "Удалить запись",
							icon: "trash"
						}),
						V(f, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						V(f, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				z("article", mt, [W[85] ||= z("h2", null, "SegmentDonutChart", -1), V(a, {
					segments: fn,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": pn
				})])
			])]),
			z("section", ht, [V(j, {
				title: "Переключатели",
				border: ""
			}), z("div", gt, [
				z("article", _t, [W[88] ||= z("h2", null, "Boolean controls", -1), z("div", vt, [
					V(g, {
						modelValue: _.value,
						"onUpdate:modelValue": W[3] ||= (e) => _.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					z("label", yt, [V(s, {
						modelValue: v.value,
						"onUpdate:modelValue": W[4] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), W[86] ||= B(" Выбрать элемент ", -1)]),
					z("label", bt, [V(s, {
						modelValue: v.value,
						"onUpdate:modelValue": W[5] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), W[87] ||= B(" Крупный выбор (24px) ", -1)])
				])]),
				z("article", xt, [W[91] ||= z("h2", null, "Segmented controls", -1), z("div", St, [
					V(ee, {
						modelValue: y.value,
						"onUpdate:modelValue": W[6] ||= (e) => y.value = e,
						options: ln,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					V(je, {
						modelValue: x.value,
						"onUpdate:modelValue": W[7] ||= (e) => x.value = e,
						variant: "chips",
						tabs: un,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": q(({ tab: e }) => [V(w, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: q(() => [...W[89] ||= [B("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					V(je, {
						modelValue: x.value,
						"onUpdate:modelValue": W[8] ||= (e) => x.value = e,
						tabs: un,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": q(({ tab: e }) => [V(w, {
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
				z("article", Ct, [W[92] ||= z("h2", null, "IconNavigation", -1), z("div", wt, [
					V(fe, {
						modelValue: C.value,
						"onUpdate:modelValue": W[9] ||= (e) => C.value = e,
						items: T,
						label: "Horizontal sections"
					}, {
						icon: q(({ item: e }) => [(U(), R("svg", Tt, [z("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Et)]))]),
						_: 1
					}, 8, ["modelValue"]),
					V(fe, {
						modelValue: C.value,
						"onUpdate:modelValue": W[10] ||= (e) => C.value = e,
						items: T,
						pill: "",
						label: "Pill sections"
					}, {
						icon: q(({ item: e }) => [(U(), R("svg", Dt, [z("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Ot)]))]),
						_: 1
					}, 8, ["modelValue"]),
					V(fe, {
						modelValue: C.value,
						"onUpdate:modelValue": W[11] ||= (e) => C.value = e,
						items: T,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: q(({ item: e }) => [(U(), R("svg", kt, [z("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, At)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				z("article", jt, [W[93] ||= z("h2", null, "AppSlider", -1), z("div", Mt, [V(le, {
					modelValue: D.value,
					"onUpdate:modelValue": W[12] ||= (e) => D.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), z("strong", null, K(D.value), 1)])])
			])]),
			z("section", Nt, [V(j, {
				title: "Формы",
				border: ""
			}), z("div", Pt, [z("article", Ft, [
				W[95] ||= z("h2", null, "Form primitives", -1),
				W[96] ||= z("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				z("div", It, [
					V(M, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: q(() => [V(i, {
							value: $.name,
							"onUpdate:value": W[13] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					V(M, {
						label: "Дата",
						vertical: ""
					}, {
						default: q(() => [V(De, {
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
						}, null, 8, ["modelValue"]), V(De, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					V(M, {
						label: "Количество",
						vertical: ""
					}, {
						default: q(() => [V(h, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: W[15] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					V(M, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: q(() => [V(h, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: W[16] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					V(M, {
						label: "Тип",
						vertical: ""
					}, {
						default: q(() => [V(Me, {
							value: $.type,
							"onUpdate:value": W[17] ||= (e) => $.type = e
						}, {
							default: q(() => [...W[94] ||= [z("option", { value: "base" }, "Основной", -1), z("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					V(M, {
						label: "Описание",
						vertical: ""
					}, {
						default: q(() => [V(ke, {
							value: $.description,
							"onUpdate:value": W[18] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				V(Ae, {
					"submit-text": "Сохранить",
					onCancel: mn
				})
			])])]),
			z("section", Lt, [V(j, {
				title: "Выбор значений и floating UI",
				border: ""
			}), z("div", Rt, [
				z("article", zt, [W[97] ||= z("h2", null, "Selectors", -1), z("div", Bt, [
					V(Oe, {
						modelValue: k.value,
						"onUpdate:modelValue": W[19] ||= (e) => k.value = e,
						options: dn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					V(ye, {
						modelValue: A.value,
						"onUpdate:modelValue": W[20] ||= (e) => A.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					V(ye, {
						modelValue: A.value,
						"onUpdate:modelValue": W[21] ||= (e) => A.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				z("article", Vt, [
					W[99] ||= z("h2", null, "BasePopover", -1),
					z("button", {
						ref_key: "popoverAnchor",
						ref: Le,
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[22] ||= (e) => G.value = !G.value
					}, " Открыть popover ", 512),
					V(Ce, {
						open: G.value,
						anchor: Le.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": W[23] ||= (e) => G.value = e
					}, {
						default: q(() => [...W[98] ||= [z("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				z("article", Ht, [
					W[106] ||= z("h2", null, "ActionMenu", -1),
					V(E, {
						title: "Действия",
						related: ""
					}, {
						default: q(() => [
							V(b, { tone: "accent" }, {
								default: q(() => [...W[100] ||= [B("Редактировать", -1)]]),
								_: 1
							}),
							V(ge, { label: "Перемещение" }, {
								trigger: q(({ open: e }) => [V(b, {
									submenu: "",
									"submenu-open": e
								}, {
									default: q(() => [...W[101] ||= [B("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: q(() => [V(b, null, {
									default: q(() => [...W[102] ||= [B("В начало", -1)]]),
									_: 1
								}), V(b, null, {
									default: q(() => [...W[103] ||= [B("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							V(b, { tone: "danger" }, {
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
					V(E, {
						ref_key: "anchoredActionMenu",
						ref: Be,
						anchor: ze.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: q(({ close: e }) => [V(b, { onClick: e }, {
							default: q(() => [...W[105] ||= [B("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				z("article", Ut, [W[109] ||= z("h2", null, "AccountMenu", -1), V(ne, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: q(({ close: e }) => [V(b, { onClick: e }, {
						default: q(() => [...W[107] ||= [B("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), V(b, {
						tone: "danger",
						onClick: e
					}, {
						default: q(() => [...W[108] ||= [B("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			z("section", Wt, [V(j, {
				title: "Редакторы и rich text",
				border: ""
			}), z("div", Gt, [z("article", Kt, [
				W[110] ||= z("h2", null, "Rich text", -1),
				V(ae, {
					ref: "richEditor",
					modelValue: P.value,
					"onUpdate:modelValue": W[25] ||= (e) => P.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: q(({ editor: e, insertRichNode: t }) => [z("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ie((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, qt), z("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ie((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Jt)]),
					_: 1
				}, 8, ["modelValue"]),
				z("div", Yt, [V(Ee, { html: P.value }, {
					node: q(({ node: e }) => [z("strong", Xt, K(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), z("article", Zt, [W[113] ||= z("h2", null, "Editor composition", -1), V(d, null, {
				default: q(() => [V(ue, { title: "Параметры" }, {
					default: q(() => [V(ie, { title: "Основное" }, {
						default: q(() => [V(oe, { title: "Значение" }, {
							actions: q(() => [...W[111] ||= [z("span", null, "12", -1)]]),
							_: 1
						}), V(le, {
							modelValue: D.value,
							"onUpdate:modelValue": W[26] ||= (e) => D.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), V(c, null, {
						default: q(() => [W[112] ||= B("Итого: ", -1), z("strong", null, K(D.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			z("section", Qt, [V(j, {
				title: "Каркас приложения",
				border: ""
			}), z("article", $t, [
				W[119] ||= z("h2", null, "Navigation composition", -1),
				V(g, {
					modelValue: H.value,
					"onUpdate:modelValue": W[27] ||= (e) => H.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				z("div", en, [V(he, {
					class: Ne(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": F.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: q(() => [V(re, {
						modelValue: F.value,
						"onUpdate:modelValue": W[28] ||= (e) => F.value = e,
						elevated: H.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: q(() => [V(me, {
							as: "div",
							label: "share-ui"
						}, {
							icon: q(() => [...W[114] ||= [z("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: q(() => [
							V(N, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: q(() => [...W[115] ||= [z("span", null, "⌂", -1)]]),
								_: 1
							}),
							V(n, { label: "Примеры" }),
							V(N, {
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
			z("section", tn, [
				V(j, {
					title: "Оверлеи и morph",
					border: ""
				}),
				z("article", nn, [W[120] ||= z("h2", null, "AppDrawer + embedded navigation", -1), V(Ue)]),
				z("article", rn, [W[121] ||= z("h2", null, "Интерактивные примеры", -1), z("div", an, [
					z("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[29] ||= (e) => J.value = !0
					}, "AppModal"),
					z("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[30] ||= (e) => Y.value = !0
					}, "AppModalFrame"),
					z("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[31] ||= (e) => X.value = !0
					}, "ModalShell"),
					z("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[32] ||= (e) => Z.value = !0
					}, "ConfirmDialog"),
					z("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[33] ||= (e) => Q.value = !0
					}, "TextPromptDialog"),
					z("button", {
						ref_key: "morphOrigin",
						ref: cn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: W[34] ||= (e) => sn.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			J.value ? (U(), I(be, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: W[35] ||= (e) => J.value = !1
			}, {
				default: q(() => [...W[122] ||= [z("div", { class: "share-component-gallery__overlay-content" }, [z("h2", null, "AppModal"), z("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : L("", !0),
			Y.value ? (U(), I(e, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: W[38] ||= (e) => Y.value = !1
			}, {
				footer: q(() => [V(Ae, {
					onCancel: W[36] ||= (e) => Y.value = !1,
					onSubmit: W[37] ||= (e) => Y.value = !1
				})]),
				default: q(() => [W[123] ||= z("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : L("", !0),
			V(o, {
				open: X.value,
				"aria-label": "Пример ModalShell",
				onClose: W[39] ||= (e) => X.value = !1
			}, {
				default: q(() => [...W[124] ||= [z("div", { class: "share-component-gallery__overlay-content" }, [z("h2", null, "ModalShell"), z("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			V(ce, {
				open: Z.value,
				"onUpdate:open": W[40] ||= (e) => Z.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			V(de, {
				open: Q.value,
				"onUpdate:open": W[41] ||= (e) => Q.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			sn.value ? (U(), I(pe, {
				key: 2,
				"origin-el": cn.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: W[42] ||= (e) => sn.value = !1
			}, {
				head: q(() => [...W[125] ||= [z("div", { class: "share-component-gallery__morph-head" }, [z("strong", null, "MorphSheet")], -1)]]),
				default: q(() => [W[126] ||= z("div", { class: "share-component-gallery__overlay-content" }, [z("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : L("", !0)
		]));
	}
}, [["__scopeId", "data-v-d0c12ffb"]]);
//#endregion
export { Q as COMPONENT_GALLERY_ALIASES, Ge as COMPONENT_GALLERY_COMPONENTS, on as ComponentGallery };
