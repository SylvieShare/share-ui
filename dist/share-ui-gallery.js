import { A as e, At as t, B as n, C as r, Ct as i, D as a, Dt as o, Et as s, F as ee, Ft as c, G as te, H as ne, I as re, K as ie, L as ae, Mt as l, Nt as oe, O as se, Ot as ce, P as u, Pt as d, R as le, S as ue, St as f, T as de, Tt as p, V as fe, W as pe, _ as me, a as m, b as he, bt as h, c as g, ct as ge, d as _, f as v, ft as y, g as _e, h as ve, i as b, it as ye, j as be, jt as xe, k as x, kt as S, l as C, lt as Se, m as w, n as Ce, o as T, p as we, pt as E, q as Te, r as Ee, rt as De, s as D, t as O, u as k, ut as A, v as Oe, w as ke, wt as j, x as M, xt as Ae, y as je, z as N } from "./StarRating-DkIIvjjp.js";
import { Fragment as P, createBlock as F, createCommentVNode as I, createElementBlock as L, createElementVNode as R, createTextVNode as z, createVNode as B, h as V, normalizeClass as Me, openBlock as H, reactive as Ne, ref as U, renderList as W, toDisplayString as G, unref as Pe, withCtx as K, withModifiers as Fe } from "vue";
//#region src/gallery/TourGalleryExample.vue
var Ie = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = U(null), n = A(640), r = Ne(_());
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
		return (e, a) => (H(), L(P, null, [B(w, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: K(() => [...a[0] ||= [z("Показать обучение", -1)]]),
			_: 1
		}, 512), B(v, {
			tour: r,
			mobile: Pe(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, q = { class: "drawer-gallery" }, J = { class: "drawer-gallery__actions" }, Y = { class: "drawer-gallery__content" }, X = ["onClick"], Le = /*#__PURE__*/ c({
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
				B(h, {
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
				default: K(() => [B(ne, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: K(() => [B(fe, {
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
					account: K(() => [B(E, { title: "Account actions" }, {
						trigger: K(() => [B(te, {
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
						B(N, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[7] ||= (e) => i.value = !1
						}),
						B(N, {
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
}, [["__scopeId", "data-v-8cf1614e"]]), Re = {
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
		return (e, c) => (H(), L(P, null, [B(g, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: K(() => [
				B(k, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				B(k, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				B(k, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				B(k, {
					percent: 100,
					label: "Полное значение"
				}),
				B(C, {
					modelValue: t.value,
					"onUpdate:modelValue": c[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				B(C, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				B(D, {
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
				B(D, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				B(m, {
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
				B(T, {
					options: s.value,
					label: "Варианты",
					onSelect: c[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				B(T, {
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
		}), B(g, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: K(() => [...c[11] ||= [z("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, ze = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), Be = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Ve = { class: "share-component-gallery" }, He = { class: "share-component-gallery__header" }, Ue = { class: "share-component-gallery__eyebrow" }, We = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, Ge = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, Ke = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, qe = { class: "share-component-gallery__section" }, Je = { class: "share-component-gallery__grid" }, Ye = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, Xe = { class: "share-component-gallery__glass-surfaces" }, Ze = { class: "share-component-gallery__tile-row" }, Qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, $e = { class: "share-component-gallery__row" }, et = { class: "share-component-gallery__row" }, tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, it = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, at = { class: "share-component-gallery__row" }, ot = { class: "share-component-gallery__row" }, st = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, ct = { class: "share-component-gallery__section" }, lt = { class: "share-component-gallery__grid" }, ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, dt = { class: "share-component-gallery__stack" }, ft = { class: "share-component-gallery__checkbox-row" }, pt = { class: "share-component-gallery__checkbox-row" }, mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, ht = { class: "share-component-gallery__stack" }, gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, _t = { class: "share-component-gallery__stack" }, vt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, yt = ["d"], bt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, xt = ["d"], St = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Ct = ["d"], wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Tt = { class: "share-component-gallery__slider" }, Et = { class: "share-component-gallery__section" }, Dt = { class: "share-component-gallery__grid" }, Ot = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, kt = { class: "share-component-gallery__form-grid" }, At = { class: "share-component-gallery__section" }, jt = { class: "share-component-gallery__grid" }, Mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Nt = { class: "share-component-gallery__stack" }, Pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, It = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Lt = { class: "share-component-gallery__section" }, Rt = { class: "share-component-gallery__grid" }, zt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, Bt = ["onMousedown"], Vt = ["onMousedown"], Ht = { class: "share-component-gallery__preview" }, Ut = { class: "share-component-gallery__rich-node" }, Wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, Gt = { class: "share-component-gallery__section" }, Kt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, qt = { class: "share-component-gallery__chrome" }, Jt = { class: "share-component-gallery__section" }, Yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, Xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, Zt = { class: "share-component-gallery__row" }, Z = /*#__PURE__*/ c({
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
		let u = ze.length, m = U(3), g = U(!0), _ = U(!0), v = U(!0), b = U("md"), C = U("preview"), T = U("build"), D = [
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
		], k = U(62), A = U("rare"), P = U("#7c5ce2"), V = U("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), W = U(!0), q = U(!0), J = U(!1), Y = U(null), X = U(null), Be = U(null), Z = U(!1), Q = U(!1), Qt = U(!1), $t = U(!1), en = U(!1), tn = U(0), nn = U(!1), rn = U(null), an = [
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
		], on = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], sn = [
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
		], cn = [
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
		function ln(e) {
			return `${e} МБ`;
		}
		function un() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Ne, U) => (H(), L("div", Ve, [
			R("header", He, [R("div", null, [
				R("p", Ue, "share-ui · " + G(Pe(u)) + " компонентов", 1),
				R("h1", null, G(c.title), 1),
				R("p", null, G(c.description), 1)
			]), U[43] ||= R("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			R("section", We, [
				B(O, {
					modelValue: m.value,
					"onUpdate:modelValue": U[0] ||= (e) => m.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				B(O, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				B(O, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			R("section", Ge, [B(Re)]),
			R("section", Ke, [U[44] ||= R("h2", null, "GuidedTour", -1), B(Ie)]),
			R("section", qe, [B(j, {
				title: "Поверхности и действия",
				border: ""
			}), R("div", Je, [
				R("article", Ye, [
					U[58] ||= R("h2", null, "BaseTile", -1),
					R("div", Xe, [B(d, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: K(() => [...U[45] ||= [z("Glass frame", -1)]]),
						_: 1
					}), B(d, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: K(() => [...U[46] ||= [z("Glass interactive", -1)]]),
						_: 1
					})]),
					B(w, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: K(() => [...U[47] ||= [z("✦", -1)]]),
						_: 1
					}),
					R("div", Ze, [
						B(d, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [
								B(xe),
								U[48] ||= R("strong", null, "Акцентная плитка", -1),
								U[49] ||= R("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						B(d, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...U[50] ||= [R("strong", null, "Рамка", -1), R("span", null, "framed", -1)]]),
							_: 1
						}),
						B(d, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...U[51] ||= [R("strong", null, "Усиленная рамка", -1), R("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						B(l, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: U[1] ||= (e) => tn.value++
						}, {
							aside: K(() => [R("span", null, G(tn.value), 1)]),
							default: K(() => [U[52] ||= R("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						B(l, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: K(() => [...U[53] ||= [R("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						B(l, { title: "Только просмотр" }, {
							default: K(() => [...U[54] ||= [R("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						B(l, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: K(() => [...U[55] ||= [R("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						B(l, null, {
							default: K(() => [...U[56] ||= [R("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						B(l, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: K(() => [...U[57] ||= [R("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						B(oe, { title: "Общий заголовок" })
					])
				]),
				R("article", Qe, [
					U[59] ||= R("h2", null, "Загрузка", -1),
					B(ve, { label: "Открываем раздел…" }),
					B(ve, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					B(x, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					R("div", $e, [
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
					R("div", et, [B(_e, {
						width: "36px",
						height: "36px",
						round: ""
					}), B(_e, { width: "60%" })])
				]),
				R("article", tt, [
					U[60] ||= R("h2", null, "InlineEdit", -1),
					B(me, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					B(me, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					B(me, {
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
				R("article", nt, [
					U[68] ||= R("h2", null, "TimelineGroup", -1),
					B(j, {
						title: "История",
						line: ""
					}, {
						actions: K(() => [...U[61] ||= [R("span", null, "2", -1)]]),
						_: 1
					}),
					B(Ce, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: K(() => [...U[62] ||= [R("strong", null, "Участник", -1)]]),
						default: K(() => [U[63] ||= R("strong", null, "Запись события", -1), U[64] ||= R("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					B(Ce, { color: "var(--success)" }, {
						identity: K(() => [...U[65] ||= [R("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: K(() => [B(M, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: K(() => [B(r, { value: "Черновик" })]),
							_: 1
						})]),
						default: K(() => [U[66] ||= R("strong", null, "Компактная запись", -1), U[67] ||= R("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				R("article", rt, [
					U[72] ||= R("h2", null, "SectionList", -1),
					B(t, { title: "Записи" }, {
						footer: K(() => [B(S, { label: "Добавить запись" })]),
						default: K(() => [U[69] ||= R("div", { style: { padding: "12px 0" } }, "Первая запись", -1), U[70] ||= R("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					B(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: K(() => [...U[71] ||= [R("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), R("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				R("article", it, [
					U[84] ||= R("h2", null, "Кнопки элементов", -1),
					R("div", at, [
						B(we, {
							modelValue: g.value,
							"onUpdate:modelValue": U[2] ||= (e) => g.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: K(() => [...U[73] ||= [R("svg", {
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
						B(we, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: K(() => [...U[74] ||= [R("svg", {
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
						B(we, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: K(() => [...U[75] ||= [R("svg", {
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
					B(j, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					B(j, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					R("div", ot, [
						B(w, null, {
							default: K(() => [...U[76] ||= [z("Основное действие", -1)]]),
							_: 1
						}),
						B(w, { variant: "secondary" }, {
							default: K(() => [...U[77] ||= [z("Вторичное", -1)]]),
							_: 1
						}),
						B(w, { variant: "quiet" }, {
							default: K(() => [...U[78] ||= [z("Тихое", -1)]]),
							_: 1
						}),
						B(w, { variant: "dashed" }, {
							default: K(() => [...U[79] ||= [z("Пунктирная рамка", -1)]]),
							_: 1
						}),
						B(w, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: K(() => [...U[80] ||= [z("✦", -1)]]),
							default: K(() => [U[81] ||= z("Действие", -1)]),
							_: 1
						}),
						B(w, { disabled: "" }, {
							default: K(() => [...U[82] ||= [z("Недоступно", -1)]]),
							_: 1
						}),
						B(w, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: K(() => [...U[83] ||= [z("Загрузка", -1)]]),
							_: 1
						}),
						B(S, { label: "Добавить элемент" }),
						B(S, {
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
				R("article", st, [U[85] ||= R("h2", null, "SegmentDonutChart", -1), B(i, {
					segments: cn,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": ln
				})])
			])]),
			R("section", ct, [B(j, {
				title: "Переключатели",
				border: ""
			}), R("div", lt, [
				R("article", ut, [U[88] ||= R("h2", null, "Boolean controls", -1), R("div", dt, [
					B(h, {
						modelValue: _.value,
						"onUpdate:modelValue": U[3] ||= (e) => _.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					R("label", ft, [B(o, {
						modelValue: v.value,
						"onUpdate:modelValue": U[4] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), U[86] ||= z(" Выбрать элемент ", -1)]),
					R("label", pt, [B(o, {
						modelValue: v.value,
						"onUpdate:modelValue": U[5] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), U[87] ||= z(" Крупный выбор (24px) ", -1)])
				])]),
				R("article", mt, [U[91] ||= R("h2", null, "Segmented controls", -1), R("div", ht, [
					B(s, {
						modelValue: b.value,
						"onUpdate:modelValue": U[6] ||= (e) => b.value = e,
						options: an,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					B(Ae, {
						modelValue: C.value,
						"onUpdate:modelValue": U[7] ||= (e) => C.value = e,
						variant: "chips",
						tabs: on,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": K(({ tab: e }) => [B(w, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: K(() => [...U[89] ||= [z("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					B(Ae, {
						modelValue: C.value,
						"onUpdate:modelValue": U[8] ||= (e) => C.value = e,
						tabs: on,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": K(({ tab: e }) => [B(w, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: K(() => [...U[90] ||= [z("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				R("article", gt, [U[92] ||= R("h2", null, "IconNavigation", -1), R("div", _t, [
					B(f, {
						modelValue: T.value,
						"onUpdate:modelValue": U[9] ||= (e) => T.value = e,
						items: D,
						label: "Horizontal sections"
					}, {
						icon: K(({ item: e }) => [(H(), L("svg", vt, [R("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, yt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					B(f, {
						modelValue: T.value,
						"onUpdate:modelValue": U[10] ||= (e) => T.value = e,
						items: D,
						pill: "",
						label: "Pill sections"
					}, {
						icon: K(({ item: e }) => [(H(), L("svg", bt, [R("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, xt)]))]),
						_: 1
					}, 8, ["modelValue"]),
					B(f, {
						modelValue: T.value,
						"onUpdate:modelValue": U[11] ||= (e) => T.value = e,
						items: D,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: K(({ item: e }) => [(H(), L("svg", St, [R("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Ct)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				R("article", wt, [U[93] ||= R("h2", null, "AppSlider", -1), R("div", Tt, [B(ce, {
					modelValue: k.value,
					"onUpdate:modelValue": U[12] ||= (e) => k.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), R("strong", null, G(k.value), 1)])])
			])]),
			R("section", Et, [B(j, {
				title: "Формы",
				border: ""
			}), R("div", Dt, [R("article", Ot, [
				U[95] ||= R("h2", null, "Form primitives", -1),
				U[96] ||= R("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				R("div", kt, [
					B(M, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: K(() => [B(r, {
							value: $.name,
							"onUpdate:value": U[13] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					B(M, {
						label: "Дата",
						vertical: ""
					}, {
						default: K(() => [B(Ee, {
							modelValue: $.date,
							"onUpdate:modelValue": U[14] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), B(Ee, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					B(M, {
						label: "Количество",
						vertical: ""
					}, {
						default: K(() => [B(he, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: U[15] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					B(M, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: K(() => [B(he, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: U[16] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					B(M, {
						label: "Тип",
						vertical: ""
					}, {
						default: K(() => [B(je, {
							value: $.type,
							"onUpdate:value": U[17] ||= (e) => $.type = e
						}, {
							default: K(() => [...U[94] ||= [R("option", { value: "base" }, "Основной", -1), R("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					B(M, {
						label: "Описание",
						vertical: ""
					}, {
						default: K(() => [B(Oe, {
							value: $.description,
							"onUpdate:value": U[18] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				B(ke, {
					"submit-text": "Сохранить",
					onCancel: un
				})
			])])]),
			R("section", At, [B(j, {
				title: "Выбор значений и floating UI",
				border: ""
			}), R("div", jt, [
				R("article", Mt, [U[97] ||= R("h2", null, "Selectors", -1), R("div", Nt, [
					B(De, {
						modelValue: A.value,
						"onUpdate:modelValue": U[19] ||= (e) => A.value = e,
						options: sn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					B(ye, {
						modelValue: P.value,
						"onUpdate:modelValue": U[20] ||= (e) => P.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					B(ye, {
						modelValue: P.value,
						"onUpdate:modelValue": U[21] ||= (e) => P.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				R("article", Pt, [
					U[99] ||= R("h2", null, "BasePopover", -1),
					R("button", {
						ref_key: "popoverAnchor",
						ref: Y,
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[22] ||= (e) => J.value = !J.value
					}, " Открыть popover ", 512),
					B(Se, {
						open: J.value,
						anchor: Y.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": U[23] ||= (e) => J.value = e
					}, {
						default: K(() => [...U[98] ||= [R("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				R("article", Ft, [
					U[106] ||= R("h2", null, "ActionMenu", -1),
					B(E, {
						title: "Действия",
						related: ""
					}, {
						default: K(() => [
							B(y, { tone: "accent" }, {
								default: K(() => [...U[100] ||= [z("Редактировать", -1)]]),
								_: 1
							}),
							B(ge, { label: "Перемещение" }, {
								trigger: K(({ open: e }) => [B(y, {
									submenu: "",
									"submenu-open": e
								}, {
									default: K(() => [...U[101] ||= [z("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: K(() => [B(y, null, {
									default: K(() => [...U[102] ||= [z("В начало", -1)]]),
									_: 1
								}), B(y, null, {
									default: K(() => [...U[103] ||= [z("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							B(y, { tone: "danger" }, {
								default: K(() => [...U[104] ||= [z("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					R("button", {
						ref_key: "actionMenuAnchor",
						ref: X,
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[24] ||= (e) => Be.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					B(E, {
						ref_key: "anchoredActionMenu",
						ref: Be,
						anchor: X.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: K(({ close: e }) => [B(y, { onClick: e }, {
							default: K(() => [...U[105] ||= [z("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				R("article", It, [U[109] ||= R("h2", null, "AccountMenu", -1), B(te, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: K(({ close: e }) => [B(y, { onClick: e }, {
						default: K(() => [...U[107] ||= [z("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), B(y, {
						tone: "danger",
						onClick: e
					}, {
						default: K(() => [...U[108] ||= [z("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			R("section", Lt, [B(j, {
				title: "Редакторы и rich text",
				border: ""
			}), R("div", Rt, [R("article", zt, [
				U[110] ||= R("h2", null, "Rich text", -1),
				B(ie, {
					ref: "richEditor",
					modelValue: V.value,
					"onUpdate:modelValue": U[25] ||= (e) => V.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: K(({ editor: e, insertRichNode: t }) => [R("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Fe((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, Bt), R("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Fe((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Vt)]),
					_: 1
				}, 8, ["modelValue"]),
				R("div", Ht, [B(Te, { html: V.value }, {
					node: K(({ node: e }) => [R("strong", Ut, G(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), R("article", Wt, [U[113] ||= R("h2", null, "Editor composition", -1), B(d, null, {
				default: K(() => [B(le, { title: "Параметры" }, {
					default: K(() => [B(re, { title: "Основное" }, {
						default: K(() => [B(ae, { title: "Значение" }, {
							actions: K(() => [...U[111] ||= [R("span", null, "12", -1)]]),
							_: 1
						}), B(ce, {
							modelValue: k.value,
							"onUpdate:modelValue": U[26] ||= (e) => k.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), B(ee, null, {
						default: K(() => [U[112] ||= z("Итого: ", -1), R("strong", null, G(k.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			R("section", Gt, [B(j, {
				title: "Каркас приложения",
				border: ""
			}), R("article", Kt, [
				U[119] ||= R("h2", null, "Navigation composition", -1),
				B(h, {
					modelValue: q.value,
					"onUpdate:modelValue": U[27] ||= (e) => q.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				R("div", qt, [B(pe, {
					class: Me(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": W.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: K(() => [B(ne, {
						modelValue: W.value,
						"onUpdate:modelValue": U[28] ||= (e) => W.value = e,
						elevated: q.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: K(() => [B(fe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: K(() => [...U[114] ||= [R("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: K(() => [
							B(N, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: K(() => [...U[115] ||= [R("span", null, "⌂", -1)]]),
								_: 1
							}),
							B(n, { label: "Примеры" }),
							B(N, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: K(() => [...U[116] ||= [R("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: K(() => [...U[117] ||= [R("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: K(() => [U[118] ||= R("div", { class: "share-component-gallery__chrome-content" }, [
						R("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						R("strong", null, "AppShell + AppSidebar"),
						R("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			R("section", Jt, [
				B(j, {
					title: "Оверлеи и morph",
					border: ""
				}),
				R("article", Yt, [U[120] ||= R("h2", null, "AppDrawer + embedded navigation", -1), B(Le)]),
				R("article", Xt, [U[121] ||= R("h2", null, "Интерактивные примеры", -1), R("div", Zt, [
					R("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[29] ||= (e) => Z.value = !0
					}, "AppModal"),
					R("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[30] ||= (e) => Q.value = !0
					}, "AppModalFrame"),
					R("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[31] ||= (e) => Qt.value = !0
					}, "ModalShell"),
					R("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[32] ||= (e) => $t.value = !0
					}, "ConfirmDialog"),
					R("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[33] ||= (e) => en.value = !0
					}, "TextPromptDialog"),
					R("button", {
						ref_key: "morphOrigin",
						ref: rn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[34] ||= (e) => nn.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			Z.value ? (H(), F(be, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: U[35] ||= (e) => Z.value = !1
			}, {
				default: K(() => [...U[122] ||= [R("div", { class: "share-component-gallery__overlay-content" }, [R("h2", null, "AppModal"), R("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : I("", !0),
			Q.value ? (H(), F(e, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: U[38] ||= (e) => Q.value = !1
			}, {
				footer: K(() => [B(ke, {
					onCancel: U[36] ||= (e) => Q.value = !1,
					onSubmit: U[37] ||= (e) => Q.value = !1
				})]),
				default: K(() => [U[123] ||= R("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : I("", !0),
			B(a, {
				open: Qt.value,
				"aria-label": "Пример ModalShell",
				onClose: U[39] ||= (e) => Qt.value = !1
			}, {
				default: K(() => [...U[124] ||= [R("div", { class: "share-component-gallery__overlay-content" }, [R("h2", null, "ModalShell"), R("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			B(se, {
				open: $t.value,
				"onUpdate:open": U[40] ||= (e) => $t.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			B(ue, {
				open: en.value,
				"onUpdate:open": U[41] ||= (e) => en.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			nn.value ? (H(), F(de, {
				key: 2,
				"origin-el": rn.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: U[42] ||= (e) => nn.value = !1
			}, {
				head: K(() => [...U[125] ||= [R("div", { class: "share-component-gallery__morph-head" }, [R("strong", null, "MorphSheet")], -1)]]),
				default: K(() => [U[126] ||= R("div", { class: "share-component-gallery__overlay-content" }, [R("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : I("", !0)
		]));
	}
}, [["__scopeId", "data-v-127ecc9c"]]);
//#endregion
export { Be as COMPONENT_GALLERY_ALIASES, ze as COMPONENT_GALLERY_COMPONENTS, Z as ComponentGallery };
