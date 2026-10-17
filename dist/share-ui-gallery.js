import { A as e, At as t, B as n, C as r, Ct as i, D as a, Dt as o, E as s, Et as c, F as l, G as ee, H as te, I as ne, L as re, Mt as u, N as ie, O as d, Ot as ae, P as oe, R as se, S as ce, St as f, Tt as le, U as ue, W as de, _ as fe, a as p, b as m, bt as pe, c as h, ct as g, d as _, dt as me, f as v, g as y, h as he, i as b, jt as x, k as ge, kt as S, l as C, m as _e, n as ve, nt as ye, o as w, ot as be, p as T, r as E, s as D, st as xe, t as O, tt as Se, u as k, ut as A, v as Ce, vt as we, w as Te, wt as Ee, x as De, xt as j, y as Oe, yt as ke, z as Ae } from "./TimelineGroup-j6dE6thv.js";
import { Fragment as M, createBlock as N, createCommentVNode as P, createElementBlock as F, createElementVNode as I, createTextVNode as L, createVNode as R, h as z, normalizeClass as je, openBlock as B, reactive as Me, ref as V, toDisplayString as H, unref as Ne, withCtx as U, withModifiers as Pe } from "vue";
//#region src/gallery/TourGalleryExample.vue
var Fe = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = V(null), n = g(640), r = Me(k());
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
		return (e, a) => (B(), F(M, null, [R(T, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: U(() => [...a[0] ||= [L("Показать обучение", -1)]]),
			_: 1
		}, 512), R(_, {
			tour: r,
			mobile: Ne(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, Ie = {
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
		function c(e) {
			let t = String(s.value.length);
			s.value.push({
				value: t,
				label: e
			}), r.value = [...r.value, t];
		}
		return (e, l) => (B(), F(M, null, [R(D, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: U(() => [
				R(C, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				R(C, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				R(C, {
					percent: 100,
					label: "Полное значение"
				}),
				R(h, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				R(h, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				R(w, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: U(() => [...l[8] ||= [L("✦", -1)]]),
					trailing: U(() => [...l[9] ||= [L("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				R(w, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				R(b, {
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
				R(p, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				R(p, {
					options: [],
					label: "Пустой список"
				}),
				I("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: l[4] ||= (e) => a.value = !0,
					onMouseleave: l[5] ||= (e) => a.value = !1,
					onFocus: l[6] ||= (e) => a.value = !0,
					onBlur: l[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (B(), N(E, {
					key: 0,
					anchor: i.value
				}, {
					default: U(() => [...l[10] ||= [L("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : P("", !0)
			]),
			_: 1
		}), R(D, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: U(() => [...l[11] ||= [L("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Le = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), W = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Re = { class: "share-component-gallery" }, ze = { class: "share-component-gallery__header" }, Be = { class: "share-component-gallery__eyebrow" }, Ve = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, He = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, Ue = { class: "share-component-gallery__section" }, We = { class: "share-component-gallery__grid" }, Ge = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, Ke = { class: "share-component-gallery__tile-row" }, qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, Je = { class: "share-component-gallery__row" }, Ye = { class: "share-component-gallery__row" }, Xe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, Ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, Qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, $e = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, et = { class: "share-component-gallery__row" }, tt = { class: "share-component-gallery__row" }, nt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, rt = { class: "share-component-gallery__section" }, it = { class: "share-component-gallery__grid" }, at = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, ot = { class: "share-component-gallery__stack" }, st = { class: "share-component-gallery__checkbox-row" }, ct = { class: "share-component-gallery__checkbox-row" }, lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, ut = { class: "share-component-gallery__stack" }, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, ft = { class: "share-component-gallery__slider" }, pt = { class: "share-component-gallery__section" }, mt = { class: "share-component-gallery__grid" }, ht = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, gt = { class: "share-component-gallery__form-grid" }, _t = { class: "share-component-gallery__section" }, vt = { class: "share-component-gallery__grid" }, yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, bt = { class: "share-component-gallery__stack" }, xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, St = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, wt = { class: "share-component-gallery__section" }, Tt = { class: "share-component-gallery__grid" }, Et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, Dt = ["onMousedown"], Ot = ["onMousedown"], kt = { class: "share-component-gallery__preview" }, At = { class: "share-component-gallery__rich-node" }, jt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, Mt = { class: "share-component-gallery__section" }, Nt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, Pt = { class: "share-component-gallery__chrome" }, Ft = { class: "share-component-gallery__section" }, It = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, Lt = { class: "share-component-gallery__row" }, G = /*#__PURE__*/ u({
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
	setup(u) {
		let p = Le.length, h = V(!0), g = V(!0), _ = V(!0), b = V("md"), C = V("preview"), w = V(62), E = V("rare"), D = V("#7c5ce2"), k = V("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), M = V(!0), z = V(!0), W = V(!1), G = V(null), Rt = V(null), zt = V(null), K = V(!1), q = V(!1), J = V(!1), Y = V(!1), X = V(!1), Bt = V(0), Z = V(!1), Q = V(null), Vt = [
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
		], Ht = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Ut = [
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
		], Wt = [
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
		], $ = Me({
			date: "",
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function Gt(e) {
			return `${e} МБ`;
		}
		function Kt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Me, V) => (B(), F("div", Re, [
			I("header", ze, [I("div", null, [
				I("p", Be, "share-ui · " + H(Ne(p)) + " компонентов", 1),
				I("h1", null, H(u.title), 1),
				I("p", null, H(u.description), 1)
			]), V[37] ||= I("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			I("section", Ve, [R(Ie)]),
			I("section", He, [V[38] ||= I("h2", null, "GuidedTour", -1), R(Fe)]),
			I("section", Ue, [R(j, {
				title: "Поверхности и действия",
				border: ""
			}), I("div", We, [
				I("article", Ge, [
					V[48] ||= I("h2", null, "BaseTile", -1),
					R(T, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: U(() => [...V[39] ||= [L("✦", -1)]]),
						_: 1
					}),
					I("div", Ke, [
						R(x, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [
								R(ae),
								V[40] ||= I("strong", null, "Акцентная плитка", -1),
								V[41] ||= I("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						R(x, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...V[42] ||= [I("strong", null, "Рамка", -1), I("span", null, "framed", -1)]]),
							_: 1
						}),
						R(S, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: V[0] ||= (e) => Bt.value++
						}, {
							aside: U(() => [I("span", null, H(Bt.value), 1)]),
							default: U(() => [V[43] ||= I("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						R(S, {
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: U(() => [...V[44] ||= [I("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						R(S, { title: "Только просмотр" }, {
							default: U(() => [...V[45] ||= [I("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						R(S, null, {
							default: U(() => [...V[46] ||= [I("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						R(S, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: U(() => [...V[47] ||= [I("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						R(t, { title: "Общий заголовок" })
					])
				]),
				I("article", qe, [
					V[49] ||= I("h2", null, "Загрузка", -1),
					R(_e, { label: "Открываем раздел…" }),
					R(_e, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					R(d, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					I("div", Je, [
						R(d, {
							label: "Загрузка",
							size: "sm"
						}),
						R(d, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						R(d, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					I("div", Ye, [R(he, {
						width: "36px",
						height: "36px",
						round: ""
					}), R(he, { width: "60%" })])
				]),
				I("article", Xe, [
					V[50] ||= I("h2", null, "InlineEdit", -1),
					R(y, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					R(y, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					R(y, {
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
				I("article", Ze, [
					V[58] ||= I("h2", null, "TimelineGroup", -1),
					R(j, {
						title: "История",
						line: ""
					}, {
						actions: U(() => [...V[51] ||= [I("span", null, "2", -1)]]),
						_: 1
					}),
					R(O, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: U(() => [...V[52] ||= [I("strong", null, "Участник", -1)]]),
						default: U(() => [V[53] ||= I("strong", null, "Запись события", -1), V[54] ||= I("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					R(O, { color: "var(--success)" }, {
						identity: U(() => [...V[55] ||= [I("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: U(() => [R(m, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: U(() => [R(ce, { value: "Черновик" })]),
							_: 1
						})]),
						default: U(() => [V[56] ||= I("strong", null, "Компактная запись", -1), V[57] ||= I("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				I("article", Qe, [
					V[62] ||= I("h2", null, "SectionList", -1),
					R(o, { title: "Записи" }, {
						footer: U(() => [R(c, { label: "Добавить запись" })]),
						default: U(() => [V[59] ||= I("div", { style: { padding: "12px 0" } }, "Первая запись", -1), V[60] ||= I("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					R(o, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: U(() => [...V[61] ||= [I("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), I("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				I("article", $e, [
					V[72] ||= I("h2", null, "Кнопки элементов", -1),
					I("div", et, [
						R(v, {
							modelValue: h.value,
							"onUpdate:modelValue": V[1] ||= (e) => h.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: U(() => [...V[63] ||= [I("svg", {
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
						R(v, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: U(() => [...V[64] ||= [I("svg", {
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
						R(v, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: U(() => [...V[65] ||= [I("svg", {
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
					R(j, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					R(j, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					I("div", tt, [
						R(T, null, {
							default: U(() => [...V[66] ||= [L("Основное действие", -1)]]),
							_: 1
						}),
						R(T, { variant: "secondary" }, {
							default: U(() => [...V[67] ||= [L("Вторичное", -1)]]),
							_: 1
						}),
						R(T, { variant: "quiet" }, {
							default: U(() => [...V[68] ||= [L("Тихое", -1)]]),
							_: 1
						}),
						R(T, { variant: "dashed" }, {
							default: U(() => [...V[69] ||= [L("Пунктирная рамка", -1)]]),
							_: 1
						}),
						R(T, { disabled: "" }, {
							default: U(() => [...V[70] ||= [L("Недоступно", -1)]]),
							_: 1
						}),
						R(T, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: U(() => [...V[71] ||= [L("Загрузка", -1)]]),
							_: 1
						}),
						R(c, { label: "Добавить элемент" }),
						R(c, {
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
				I("article", nt, [V[73] ||= I("h2", null, "SegmentDonutChart", -1), R(pe, {
					segments: Wt,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Gt
				})])
			])]),
			I("section", rt, [R(j, {
				title: "Переключатели",
				border: ""
			}), I("div", it, [
				I("article", at, [V[76] ||= I("h2", null, "Boolean controls", -1), I("div", ot, [
					R(we, {
						modelValue: g.value,
						"onUpdate:modelValue": V[2] ||= (e) => g.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					I("label", st, [R(Ee, {
						modelValue: _.value,
						"onUpdate:modelValue": V[3] ||= (e) => _.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), V[74] ||= L(" Выбрать элемент ", -1)]),
					I("label", ct, [R(Ee, {
						modelValue: _.value,
						"onUpdate:modelValue": V[4] ||= (e) => _.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), V[75] ||= L(" Крупный выбор (24px) ", -1)])
				])]),
				I("article", lt, [V[77] ||= I("h2", null, "Segmented controls", -1), I("div", ut, [R(i, {
					modelValue: b.value,
					"onUpdate:modelValue": V[5] ||= (e) => b.value = e,
					options: Vt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), R(ke, {
					modelValue: C.value,
					"onUpdate:modelValue": V[6] ||= (e) => C.value = e,
					tabs: Ht,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				I("article", dt, [V[78] ||= I("h2", null, "AppSlider", -1), I("div", ft, [R(le, {
					modelValue: w.value,
					"onUpdate:modelValue": V[7] ||= (e) => w.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), I("strong", null, H(w.value), 1)])])
			])]),
			I("section", pt, [R(j, {
				title: "Формы",
				border: ""
			}), I("div", mt, [I("article", ht, [
				V[80] ||= I("h2", null, "Form primitives", -1),
				I("div", gt, [
					R(m, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: U(() => [R(ce, {
							value: $.name,
							"onUpdate:value": V[8] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(m, {
						label: "Дата",
						vertical: ""
					}, {
						default: U(() => [R(ve, {
							modelValue: $.date,
							"onUpdate:modelValue": V[9] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), R(ve, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					R(m, {
						label: "Количество",
						vertical: ""
					}, {
						default: U(() => [R(Oe, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: V[10] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(m, {
						label: "Тип",
						vertical: ""
					}, {
						default: U(() => [R(Ce, {
							value: $.type,
							"onUpdate:value": V[11] ||= (e) => $.type = e
						}, {
							default: U(() => [...V[79] ||= [I("option", { value: "base" }, "Основной", -1), I("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					R(m, {
						label: "Описание",
						vertical: ""
					}, {
						default: U(() => [R(fe, {
							value: $.description,
							"onUpdate:value": V[12] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				R(r, {
					"submit-text": "Сохранить",
					onCancel: Kt
				})
			])])]),
			I("section", _t, [R(j, {
				title: "Выбор значений и floating UI",
				border: ""
			}), I("div", vt, [
				I("article", yt, [V[81] ||= I("h2", null, "Selectors", -1), I("div", bt, [
					R(Se, {
						modelValue: E.value,
						"onUpdate:modelValue": V[13] ||= (e) => E.value = e,
						options: Ut,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					R(ye, {
						modelValue: D.value,
						"onUpdate:modelValue": V[14] ||= (e) => D.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					R(ye, {
						modelValue: D.value,
						"onUpdate:modelValue": V[15] ||= (e) => D.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				I("article", xt, [
					V[83] ||= I("h2", null, "BasePopover", -1),
					I("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[16] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					R(xe, {
						open: W.value,
						anchor: G.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": V[17] ||= (e) => W.value = e
					}, {
						default: U(() => [...V[82] ||= [I("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				I("article", St, [
					V[90] ||= I("h2", null, "ActionMenu", -1),
					R(me, {
						title: "Действия",
						related: ""
					}, {
						default: U(() => [
							R(A, { tone: "accent" }, {
								default: U(() => [...V[84] ||= [L("Редактировать", -1)]]),
								_: 1
							}),
							R(be, { label: "Перемещение" }, {
								trigger: U(({ open: e }) => [R(A, {
									submenu: "",
									"submenu-open": e
								}, {
									default: U(() => [...V[85] ||= [L("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: U(() => [R(A, null, {
									default: U(() => [...V[86] ||= [L("В начало", -1)]]),
									_: 1
								}), R(A, null, {
									default: U(() => [...V[87] ||= [L("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							R(A, { tone: "danger" }, {
								default: U(() => [...V[88] ||= [L("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					I("button", {
						ref_key: "actionMenuAnchor",
						ref: Rt,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[18] ||= (e) => zt.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					R(me, {
						ref_key: "anchoredActionMenu",
						ref: zt,
						anchor: Rt.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: U(({ close: e }) => [R(A, { onClick: e }, {
							default: U(() => [...V[89] ||= [L("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				I("article", Ct, [V[93] ||= I("h2", null, "AccountMenu", -1), R(ue, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: U(({ close: e }) => [R(A, { onClick: e }, {
						default: U(() => [...V[91] ||= [L("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), R(A, {
						tone: "danger",
						onClick: e
					}, {
						default: U(() => [...V[92] ||= [L("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			I("section", wt, [R(j, {
				title: "Редакторы и rich text",
				border: ""
			}), I("div", Tt, [I("article", Et, [
				V[94] ||= I("h2", null, "Rich text", -1),
				R(de, {
					ref: "richEditor",
					modelValue: k.value,
					"onUpdate:modelValue": V[19] ||= (e) => k.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: U(({ editor: e, insertRichNode: t }) => [I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Pe((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, Dt), I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Pe((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Ot)]),
					_: 1
				}, 8, ["modelValue"]),
				I("div", kt, [R(ee, { html: k.value }, {
					node: U(({ node: e }) => [I("strong", At, H(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), I("article", jt, [V[97] ||= I("h2", null, "Editor composition", -1), R(x, null, {
				default: U(() => [R(ne, { title: "Параметры" }, {
					default: U(() => [R(oe, { title: "Основное" }, {
						default: U(() => [R(l, { title: "Значение" }, {
							actions: U(() => [...V[95] ||= [I("span", null, "12", -1)]]),
							_: 1
						}), R(le, {
							modelValue: w.value,
							"onUpdate:modelValue": V[20] ||= (e) => w.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), R(ie, null, {
						default: U(() => [V[96] ||= L("Итого: ", -1), I("strong", null, H(w.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			I("section", Mt, [R(j, {
				title: "Каркас приложения",
				border: ""
			}), I("article", Nt, [
				V[103] ||= I("h2", null, "Navigation composition", -1),
				R(we, {
					modelValue: z.value,
					"onUpdate:modelValue": V[21] ||= (e) => z.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				I("div", Pt, [R(te, {
					class: je(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": M.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: U(() => [R(n, {
						modelValue: M.value,
						"onUpdate:modelValue": V[22] ||= (e) => M.value = e,
						elevated: z.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: U(() => [R(Ae, {
							as: "div",
							label: "share-ui"
						}, {
							icon: U(() => [...V[98] ||= [I("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: U(() => [
							R(re, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: U(() => [...V[99] ||= [I("span", null, "⌂", -1)]]),
								_: 1
							}),
							R(se, { label: "Примеры" }),
							R(re, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: U(() => [...V[100] ||= [I("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: U(() => [...V[101] ||= [I("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: U(() => [V[102] ||= I("div", { class: "share-component-gallery__chrome-content" }, [
						I("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						I("strong", null, "AppShell + AppSidebar"),
						I("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			I("section", Ft, [R(j, {
				title: "Оверлеи и morph",
				border: ""
			}), I("article", It, [V[104] ||= I("h2", null, "Интерактивные примеры", -1), I("div", Lt, [
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[23] ||= (e) => K.value = !0
				}, "AppModal"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[24] ||= (e) => q.value = !0
				}, "AppModalFrame"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[25] ||= (e) => J.value = !0
				}, "ModalShell"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[26] ||= (e) => Y.value = !0
				}, "ConfirmDialog"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[27] ||= (e) => X.value = !0
				}, "TextPromptDialog"),
				I("button", {
					ref_key: "morphOrigin",
					ref: Q,
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[28] ||= (e) => Z.value = !0
				}, "MorphSheet", 512)
			])])]),
			K.value ? (B(), N(e, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: V[29] ||= (e) => K.value = !1
			}, {
				default: U(() => [...V[105] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "AppModal"), I("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : P("", !0),
			q.value ? (B(), N(ge, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: V[32] ||= (e) => q.value = !1
			}, {
				footer: U(() => [R(r, {
					onCancel: V[30] ||= (e) => q.value = !1,
					onSubmit: V[31] ||= (e) => q.value = !1
				})]),
				default: U(() => [V[106] ||= I("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : P("", !0),
			R(s, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: V[33] ||= (e) => J.value = !1
			}, {
				default: U(() => [...V[107] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "ModalShell"), I("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			R(a, {
				open: Y.value,
				"onUpdate:open": V[34] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			R(De, {
				open: X.value,
				"onUpdate:open": V[35] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (B(), N(Te, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: V[36] ||= (e) => Z.value = !1
			}, {
				head: U(() => [...V[108] ||= [I("div", { class: "share-component-gallery__morph-head" }, [I("strong", null, "MorphSheet")], -1)]]),
				default: U(() => [V[109] ||= I("div", { class: "share-component-gallery__overlay-content" }, [I("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : P("", !0)
		]));
	}
}, [["__scopeId", "data-v-1c5df69d"]]);
//#endregion
export { W as COMPONENT_GALLERY_ALIASES, Le as COMPONENT_GALLERY_COMPONENTS, G as ComponentGallery };
