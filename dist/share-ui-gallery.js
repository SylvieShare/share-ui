import { A as e, At as t, B as n, C as r, Ct as i, D as a, Dt as o, Et as s, F as ee, Ft as c, G as te, H as ne, I as re, K as ie, L as ae, Mt as l, Nt as oe, O as se, Ot as ce, P as u, Pt as d, R as le, S as ue, St as de, T as fe, Tt as f, V as pe, W as me, _ as p, a as m, b as he, bt as h, c as g, ct as ge, d as _, f as v, ft as y, g as _e, h as ve, i as b, it as ye, j as be, jt as xe, k as x, kt as S, l as C, lt as Se, m as w, n as Ce, o as T, p as we, pt as Te, q as Ee, r as De, rt as Oe, s as E, t as D, u as O, ut as ke, v as Ae, w as je, wt as k, x as A, xt as Me, y as Ne, z as j } from "./StarRating-BrHKY5b7.js";
import { Fragment as M, createBlock as N, createCommentVNode as P, createElementBlock as F, createElementVNode as I, createTextVNode as L, createVNode as R, h as z, normalizeClass as Pe, openBlock as B, reactive as Fe, ref as V, renderList as H, toDisplayString as U, unref as Ie, withCtx as W, withModifiers as Le } from "vue";
//#region src/gallery/TourGalleryExample.vue
var Re = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = V(null), n = ke(640), r = Fe(_());
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
		return (e, a) => (B(), F(M, null, [R(w, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: W(() => [...a[0] ||= [L("Показать обучение", -1)]]),
			_: 1
		}, 512), R(v, {
			tour: r,
			mobile: Ie(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, G = { class: "drawer-gallery" }, K = { class: "drawer-gallery__actions" }, q = { class: "drawer-gallery__content" }, J = ["onClick"], ze = /*#__PURE__*/ c({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = V(!1), r = V(!1), i = V(!1), a = V(!1);
		return (e, o) => (B(), F("div", G, [
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
				R(h, {
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
					account: W(() => [R(Te, { title: "Account actions" }, {
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
}, [["__scopeId", "data-v-8cf1614e"]]), Be = {
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
		return (e, c) => (B(), F(M, null, [R(g, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: W(() => [
				R(O, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				R(O, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				R(O, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				R(O, {
					percent: 100,
					label: "Полное значение"
				}),
				R(C, {
					modelValue: t.value,
					"onUpdate:modelValue": c[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				R(C, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				R(E, {
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
				R(E, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				R(m, {
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
				R(T, {
					options: s.value,
					label: "Варианты",
					onSelect: c[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				R(T, {
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
		}), R(g, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: W(() => [...c[11] ||= [L("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Ve = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), Y = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), He = { class: "share-component-gallery" }, Ue = { class: "share-component-gallery__header" }, We = { class: "share-component-gallery__eyebrow" }, Ge = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, Ke = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, qe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, Je = { class: "share-component-gallery__section" }, Ye = { class: "share-component-gallery__grid" }, Xe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, Ze = { class: "share-component-gallery__glass-surfaces" }, Qe = { class: "share-component-gallery__tile-row" }, $e = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, et = { class: "share-component-gallery__row" }, tt = { class: "share-component-gallery__row" }, nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, it = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, at = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, ot = { class: "share-component-gallery__row" }, st = { class: "share-component-gallery__row" }, ct = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, lt = { class: "share-component-gallery__section" }, ut = { class: "share-component-gallery__grid" }, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, ft = { class: "share-component-gallery__stack" }, pt = { class: "share-component-gallery__checkbox-row" }, mt = { class: "share-component-gallery__checkbox-row" }, ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, gt = { class: "share-component-gallery__stack" }, _t = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, vt = { class: "share-component-gallery__stack" }, yt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, bt = ["d"], xt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, St = ["d"], Ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, wt = { class: "share-component-gallery__slider" }, Tt = { class: "share-component-gallery__section" }, Et = { class: "share-component-gallery__grid" }, Dt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Ot = { class: "share-component-gallery__form-grid" }, kt = { class: "share-component-gallery__section" }, At = { class: "share-component-gallery__grid" }, jt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Mt = { class: "share-component-gallery__stack" }, Nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, It = { class: "share-component-gallery__section" }, Lt = { class: "share-component-gallery__grid" }, Rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, zt = ["onMousedown"], Bt = ["onMousedown"], Vt = { class: "share-component-gallery__preview" }, Ht = { class: "share-component-gallery__rich-node" }, Ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, Wt = { class: "share-component-gallery__section" }, Gt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, Kt = { class: "share-component-gallery__chrome" }, qt = { class: "share-component-gallery__section" }, Jt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, Yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, Xt = { class: "share-component-gallery__row" }, X = /*#__PURE__*/ c({
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
		let u = Ve.length, m = V(3), g = V(!0), _ = V(!0), v = V(!0), b = V("md"), C = V("preview"), T = V("build"), E = [
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
		], O = V(62), ke = V("rare"), M = V("#7c5ce2"), z = V("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), H = V(!0), G = V(!0), K = V(!1), q = V(null), J = V(null), Y = V(null), X = V(!1), Z = V(!1), Q = V(!1), Zt = V(!1), Qt = V(!1), $t = V(0), en = V(!1), tn = V(null), nn = [
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
		], rn = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], an = [
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
		], on = [
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
		function sn(e) {
			return `${e} МБ`;
		}
		function cn() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Fe, V) => (B(), F("div", He, [
			I("header", Ue, [I("div", null, [
				I("p", We, "share-ui · " + U(Ie(u)) + " компонентов", 1),
				I("h1", null, U(c.title), 1),
				I("p", null, U(c.description), 1)
			]), V[42] ||= I("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			I("section", Ge, [
				R(D, {
					modelValue: m.value,
					"onUpdate:modelValue": V[0] ||= (e) => m.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				R(D, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				R(D, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			I("section", Ke, [R(Be)]),
			I("section", qe, [V[43] ||= I("h2", null, "GuidedTour", -1), R(Re)]),
			I("section", Je, [R(k, {
				title: "Поверхности и действия",
				border: ""
			}), I("div", Ye, [
				I("article", Xe, [
					V[56] ||= I("h2", null, "BaseTile", -1),
					I("div", Ze, [R(d, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: W(() => [...V[44] ||= [L("Glass frame", -1)]]),
						_: 1
					}), R(d, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: W(() => [...V[45] ||= [L("Glass interactive", -1)]]),
						_: 1
					})]),
					R(w, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: W(() => [...V[46] ||= [L("✦", -1)]]),
						_: 1
					}),
					I("div", Qe, [
						R(d, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [
								R(xe),
								V[47] ||= I("strong", null, "Акцентная плитка", -1),
								V[48] ||= I("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						R(d, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[49] ||= [I("strong", null, "Рамка", -1), I("span", null, "framed", -1)]]),
							_: 1
						}),
						R(d, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[50] ||= [I("strong", null, "Усиленная рамка", -1), I("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						R(l, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: V[1] ||= (e) => $t.value++
						}, {
							aside: W(() => [I("span", null, U($t.value), 1)]),
							default: W(() => [V[51] ||= I("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						R(l, {
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...V[52] ||= [I("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						R(l, { title: "Только просмотр" }, {
							default: W(() => [...V[53] ||= [I("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						R(l, null, {
							default: W(() => [...V[54] ||= [I("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						R(l, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...V[55] ||= [I("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						R(oe, { title: "Общий заголовок" })
					])
				]),
				I("article", $e, [
					V[57] ||= I("h2", null, "Загрузка", -1),
					R(ve, { label: "Открываем раздел…" }),
					R(ve, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					R(x, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					I("div", et, [
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
					I("div", tt, [R(_e, {
						width: "36px",
						height: "36px",
						round: ""
					}), R(_e, { width: "60%" })])
				]),
				I("article", nt, [
					V[58] ||= I("h2", null, "InlineEdit", -1),
					R(p, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					R(p, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					R(p, {
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
				I("article", rt, [
					V[66] ||= I("h2", null, "TimelineGroup", -1),
					R(k, {
						title: "История",
						line: ""
					}, {
						actions: W(() => [...V[59] ||= [I("span", null, "2", -1)]]),
						_: 1
					}),
					R(Ce, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: W(() => [...V[60] ||= [I("strong", null, "Участник", -1)]]),
						default: W(() => [V[61] ||= I("strong", null, "Запись события", -1), V[62] ||= I("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					R(Ce, { color: "var(--success)" }, {
						identity: W(() => [...V[63] ||= [I("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: W(() => [R(A, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: W(() => [R(r, { value: "Черновик" })]),
							_: 1
						})]),
						default: W(() => [V[64] ||= I("strong", null, "Компактная запись", -1), V[65] ||= I("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				I("article", it, [
					V[70] ||= I("h2", null, "SectionList", -1),
					R(t, { title: "Записи" }, {
						footer: W(() => [R(S, { label: "Добавить запись" })]),
						default: W(() => [V[67] ||= I("div", { style: { padding: "12px 0" } }, "Первая запись", -1), V[68] ||= I("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					R(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: W(() => [...V[69] ||= [I("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), I("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				I("article", at, [
					V[82] ||= I("h2", null, "Кнопки элементов", -1),
					I("div", ot, [
						R(we, {
							modelValue: g.value,
							"onUpdate:modelValue": V[2] ||= (e) => g.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: W(() => [...V[71] ||= [I("svg", {
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
						R(we, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: W(() => [...V[72] ||= [I("svg", {
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
						R(we, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: W(() => [...V[73] ||= [I("svg", {
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
					I("div", st, [
						R(w, null, {
							default: W(() => [...V[74] ||= [L("Основное действие", -1)]]),
							_: 1
						}),
						R(w, { variant: "secondary" }, {
							default: W(() => [...V[75] ||= [L("Вторичное", -1)]]),
							_: 1
						}),
						R(w, { variant: "quiet" }, {
							default: W(() => [...V[76] ||= [L("Тихое", -1)]]),
							_: 1
						}),
						R(w, { variant: "dashed" }, {
							default: W(() => [...V[77] ||= [L("Пунктирная рамка", -1)]]),
							_: 1
						}),
						R(w, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: W(() => [...V[78] ||= [L("✦", -1)]]),
							default: W(() => [V[79] ||= L("Действие", -1)]),
							_: 1
						}),
						R(w, { disabled: "" }, {
							default: W(() => [...V[80] ||= [L("Недоступно", -1)]]),
							_: 1
						}),
						R(w, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: W(() => [...V[81] ||= [L("Загрузка", -1)]]),
							_: 1
						}),
						R(S, { label: "Добавить элемент" }),
						R(S, {
							label: "Добавить",
							variant: "icon"
						}),
						R(f, { label: "Удалить" }),
						R(f, {
							label: "Удалить",
							variant: "boxed"
						}),
						R(f, {
							label: "Удалить запись",
							icon: "trash"
						}),
						R(f, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						R(f, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				I("article", ct, [V[83] ||= I("h2", null, "SegmentDonutChart", -1), R(i, {
					segments: on,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": sn
				})])
			])]),
			I("section", lt, [R(k, {
				title: "Переключатели",
				border: ""
			}), I("div", ut, [
				I("article", dt, [V[86] ||= I("h2", null, "Boolean controls", -1), I("div", ft, [
					R(h, {
						modelValue: _.value,
						"onUpdate:modelValue": V[3] ||= (e) => _.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					I("label", pt, [R(o, {
						modelValue: v.value,
						"onUpdate:modelValue": V[4] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), V[84] ||= L(" Выбрать элемент ", -1)]),
					I("label", mt, [R(o, {
						modelValue: v.value,
						"onUpdate:modelValue": V[5] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), V[85] ||= L(" Крупный выбор (24px) ", -1)])
				])]),
				I("article", ht, [V[89] ||= I("h2", null, "Segmented controls", -1), I("div", gt, [
					R(s, {
						modelValue: b.value,
						"onUpdate:modelValue": V[6] ||= (e) => b.value = e,
						options: nn,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					R(Me, {
						modelValue: C.value,
						"onUpdate:modelValue": V[7] ||= (e) => C.value = e,
						variant: "chips",
						tabs: rn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": W(({ tab: e }) => [R(w, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: W(() => [...V[87] ||= [L("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					R(Me, {
						modelValue: C.value,
						"onUpdate:modelValue": V[8] ||= (e) => C.value = e,
						tabs: rn,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": W(({ tab: e }) => [R(w, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: W(() => [...V[88] ||= [L("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				I("article", _t, [V[90] ||= I("h2", null, "IconNavigation", -1), I("div", vt, [R(de, {
					modelValue: T.value,
					"onUpdate:modelValue": V[9] ||= (e) => T.value = e,
					items: E,
					label: "Horizontal sections"
				}, {
					icon: W(({ item: e }) => [(B(), F("svg", yt, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, bt)]))]),
					_: 1
				}, 8, ["modelValue"]), R(de, {
					modelValue: T.value,
					"onUpdate:modelValue": V[10] ||= (e) => T.value = e,
					items: E,
					orientation: "vertical",
					size: 64,
					label: "Vertical sections"
				}, {
					icon: W(({ item: e }) => [(B(), F("svg", xt, [I("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, St)]))]),
					_: 1
				}, 8, ["modelValue"])])]),
				I("article", Ct, [V[91] ||= I("h2", null, "AppSlider", -1), I("div", wt, [R(ce, {
					modelValue: O.value,
					"onUpdate:modelValue": V[11] ||= (e) => O.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), I("strong", null, U(O.value), 1)])])
			])]),
			I("section", Tt, [R(k, {
				title: "Формы",
				border: ""
			}), I("div", Et, [I("article", Dt, [
				V[93] ||= I("h2", null, "Form primitives", -1),
				I("div", Ot, [
					R(A, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: W(() => [R(r, {
							value: $.name,
							"onUpdate:value": V[12] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Дата",
						vertical: ""
					}, {
						default: W(() => [R(De, {
							modelValue: $.date,
							"onUpdate:modelValue": V[13] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), R(De, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					R(A, {
						label: "Количество",
						vertical: ""
					}, {
						default: W(() => [R(he, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: V[14] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: W(() => [R(he, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: V[15] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Тип",
						vertical: ""
					}, {
						default: W(() => [R(Ne, {
							value: $.type,
							"onUpdate:value": V[16] ||= (e) => $.type = e
						}, {
							default: W(() => [...V[92] ||= [I("option", { value: "base" }, "Основной", -1), I("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Описание",
						vertical: ""
					}, {
						default: W(() => [R(Ae, {
							value: $.description,
							"onUpdate:value": V[17] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				R(je, {
					"submit-text": "Сохранить",
					onCancel: cn
				})
			])])]),
			I("section", kt, [R(k, {
				title: "Выбор значений и floating UI",
				border: ""
			}), I("div", At, [
				I("article", jt, [V[94] ||= I("h2", null, "Selectors", -1), I("div", Mt, [
					R(Oe, {
						modelValue: ke.value,
						"onUpdate:modelValue": V[18] ||= (e) => ke.value = e,
						options: an,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					R(ye, {
						modelValue: M.value,
						"onUpdate:modelValue": V[19] ||= (e) => M.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					R(ye, {
						modelValue: M.value,
						"onUpdate:modelValue": V[20] ||= (e) => M.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				I("article", Nt, [
					V[96] ||= I("h2", null, "BasePopover", -1),
					I("button", {
						ref_key: "popoverAnchor",
						ref: q,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[21] ||= (e) => K.value = !K.value
					}, " Открыть popover ", 512),
					R(Se, {
						open: K.value,
						anchor: q.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": V[22] ||= (e) => K.value = e
					}, {
						default: W(() => [...V[95] ||= [I("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				I("article", Pt, [
					V[103] ||= I("h2", null, "ActionMenu", -1),
					R(Te, {
						title: "Действия",
						related: ""
					}, {
						default: W(() => [
							R(y, { tone: "accent" }, {
								default: W(() => [...V[97] ||= [L("Редактировать", -1)]]),
								_: 1
							}),
							R(ge, { label: "Перемещение" }, {
								trigger: W(({ open: e }) => [R(y, {
									submenu: "",
									"submenu-open": e
								}, {
									default: W(() => [...V[98] ||= [L("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: W(() => [R(y, null, {
									default: W(() => [...V[99] ||= [L("В начало", -1)]]),
									_: 1
								}), R(y, null, {
									default: W(() => [...V[100] ||= [L("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							R(y, { tone: "danger" }, {
								default: W(() => [...V[101] ||= [L("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					I("button", {
						ref_key: "actionMenuAnchor",
						ref: J,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[23] ||= (e) => Y.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					R(Te, {
						ref_key: "anchoredActionMenu",
						ref: Y,
						anchor: J.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: W(({ close: e }) => [R(y, { onClick: e }, {
							default: W(() => [...V[102] ||= [L("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				I("article", Ft, [V[106] ||= I("h2", null, "AccountMenu", -1), R(te, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: W(({ close: e }) => [R(y, { onClick: e }, {
						default: W(() => [...V[104] ||= [L("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), R(y, {
						tone: "danger",
						onClick: e
					}, {
						default: W(() => [...V[105] ||= [L("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			I("section", It, [R(k, {
				title: "Редакторы и rich text",
				border: ""
			}), I("div", Lt, [I("article", Rt, [
				V[107] ||= I("h2", null, "Rich text", -1),
				R(ie, {
					ref: "richEditor",
					modelValue: z.value,
					"onUpdate:modelValue": V[24] ||= (e) => z.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: W(({ editor: e, insertRichNode: t }) => [I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Le((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, zt), I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Le((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Bt)]),
					_: 1
				}, 8, ["modelValue"]),
				I("div", Vt, [R(Ee, { html: z.value }, {
					node: W(({ node: e }) => [I("strong", Ht, U(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), I("article", Ut, [V[110] ||= I("h2", null, "Editor composition", -1), R(d, null, {
				default: W(() => [R(le, { title: "Параметры" }, {
					default: W(() => [R(re, { title: "Основное" }, {
						default: W(() => [R(ae, { title: "Значение" }, {
							actions: W(() => [...V[108] ||= [I("span", null, "12", -1)]]),
							_: 1
						}), R(ce, {
							modelValue: O.value,
							"onUpdate:modelValue": V[25] ||= (e) => O.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), R(ee, null, {
						default: W(() => [V[109] ||= L("Итого: ", -1), I("strong", null, U(O.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			I("section", Wt, [R(k, {
				title: "Каркас приложения",
				border: ""
			}), I("article", Gt, [
				V[116] ||= I("h2", null, "Navigation composition", -1),
				R(h, {
					modelValue: G.value,
					"onUpdate:modelValue": V[26] ||= (e) => G.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				I("div", Kt, [R(me, {
					class: Pe(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": H.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: W(() => [R(ne, {
						modelValue: H.value,
						"onUpdate:modelValue": V[27] ||= (e) => H.value = e,
						elevated: G.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: W(() => [R(pe, {
							as: "div",
							label: "share-ui"
						}, {
							icon: W(() => [...V[111] ||= [I("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: W(() => [
							R(j, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: W(() => [...V[112] ||= [I("span", null, "⌂", -1)]]),
								_: 1
							}),
							R(n, { label: "Примеры" }),
							R(j, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: W(() => [...V[113] ||= [I("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: W(() => [...V[114] ||= [I("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: W(() => [V[115] ||= I("div", { class: "share-component-gallery__chrome-content" }, [
						I("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						I("strong", null, "AppShell + AppSidebar"),
						I("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			I("section", qt, [
				R(k, {
					title: "Оверлеи и morph",
					border: ""
				}),
				I("article", Jt, [V[117] ||= I("h2", null, "AppDrawer + embedded navigation", -1), R(ze)]),
				I("article", Yt, [V[118] ||= I("h2", null, "Интерактивные примеры", -1), I("div", Xt, [
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[28] ||= (e) => X.value = !0
					}, "AppModal"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[29] ||= (e) => Z.value = !0
					}, "AppModalFrame"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[30] ||= (e) => Q.value = !0
					}, "ModalShell"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[31] ||= (e) => Zt.value = !0
					}, "ConfirmDialog"),
					I("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[32] ||= (e) => Qt.value = !0
					}, "TextPromptDialog"),
					I("button", {
						ref_key: "morphOrigin",
						ref: tn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[33] ||= (e) => en.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			X.value ? (B(), N(be, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: V[34] ||= (e) => X.value = !1
			}, {
				default: W(() => [...V[119] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "AppModal"), I("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : P("", !0),
			Z.value ? (B(), N(e, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: V[37] ||= (e) => Z.value = !1
			}, {
				footer: W(() => [R(je, {
					onCancel: V[35] ||= (e) => Z.value = !1,
					onSubmit: V[36] ||= (e) => Z.value = !1
				})]),
				default: W(() => [V[120] ||= I("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : P("", !0),
			R(a, {
				open: Q.value,
				"aria-label": "Пример ModalShell",
				onClose: V[38] ||= (e) => Q.value = !1
			}, {
				default: W(() => [...V[121] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "ModalShell"), I("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			R(se, {
				open: Zt.value,
				"onUpdate:open": V[39] ||= (e) => Zt.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			R(ue, {
				open: Qt.value,
				"onUpdate:open": V[40] ||= (e) => Qt.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			en.value ? (B(), N(fe, {
				key: 2,
				"origin-el": tn.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: V[41] ||= (e) => en.value = !1
			}, {
				head: W(() => [...V[122] ||= [I("div", { class: "share-component-gallery__morph-head" }, [I("strong", null, "MorphSheet")], -1)]]),
				default: W(() => [V[123] ||= I("div", { class: "share-component-gallery__overlay-content" }, [I("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : P("", !0)
		]));
	}
}, [["__scopeId", "data-v-d47dc764"]]);
//#endregion
export { Y as COMPONENT_GALLERY_ALIASES, Ve as COMPONENT_GALLERY_COMPONENTS, X as ComponentGallery };
