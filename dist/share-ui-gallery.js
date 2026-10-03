import { $ as e, At as t, B as n, Ct as r, D as i, Dt as a, E as o, Et as s, F as c, H as l, I as ee, L as te, M as ne, N as re, O as ie, Ot as ae, P as oe, R as se, S as ce, St as u, T as le, Tt as d, U as ue, V as de, _ as fe, _t as pe, a as f, at as me, b as he, bt as p, c as m, ct as h, d as g, et as ge, f as _, g as _e, gt as ve, h as ye, i as v, it as be, j as xe, kt as y, l as b, lt as Se, m as x, n as S, o as C, ot as w, p as Ce, r as T, s as E, t as D, u as O, v as k, vt as we, w as Te, wt as A, x as j, xt as Ee, y as De, yt as M } from "./DatePicker--fG2R9XN.js";
import { Fragment as N, createBlock as P, createCommentVNode as F, createElementBlock as I, createElementVNode as L, createTextVNode as R, createVNode as z, h as B, normalizeClass as Oe, openBlock as V, reactive as H, ref as U, toDisplayString as W, unref as ke, withCtx as G, withModifiers as Ae } from "vue";
//#region src/gallery/TourGalleryExample.vue
var je = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = U(null), n = w(640), r = H(b());
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
		return (e, a) => (V(), I(N, null, [z(g, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: G(() => [...a[0] ||= [R("Показать обучение", -1)]]),
			_: 1
		}, 512), z(O, {
			tour: r,
			mobile: ke(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, Me = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = U("star"), n = U(!1), r = U([]), i = U(null), a = U(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => B("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => B("span", "●") }
		}], s = U([{
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
		return (e, l) => (V(), I(N, null, [z(C, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: G(() => [
				z(m, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				z(m, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				z(m, {
					percent: 100,
					label: "Полное значение"
				}),
				z(E, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				z(E, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				z(f, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: G(() => [...l[8] ||= [R("✦", -1)]]),
					trailing: G(() => [...l[9] ||= [R("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				z(f, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				z(T, {
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
				z(v, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				z(v, {
					options: [],
					label: "Пустой список"
				}),
				L("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: l[4] ||= (e) => a.value = !0,
					onMouseleave: l[5] ||= (e) => a.value = !1,
					onFocus: l[6] ||= (e) => a.value = !0,
					onBlur: l[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (V(), P(S, {
					key: 0,
					anchor: i.value
				}, {
					default: G(() => [...l[10] ||= [R("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : F("", !0)
			]),
			_: 1
		}), z(C, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: G(() => [...l[11] ||= [R("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Ne = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), K = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Pe = { class: "share-component-gallery" }, Fe = { class: "share-component-gallery__header" }, Ie = { class: "share-component-gallery__eyebrow" }, Le = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, Re = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, ze = { class: "share-component-gallery__section" }, Be = { class: "share-component-gallery__grid" }, Ve = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, He = { class: "share-component-gallery__tile-row" }, Ue = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, We = { class: "share-component-gallery__row" }, Ge = { class: "share-component-gallery__row" }, Ke = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Je = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton"
}, Ye = { class: "share-component-gallery__row" }, Xe = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Ze = { class: "share-component-gallery__section" }, Qe = { class: "share-component-gallery__grid" }, $e = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, et = { class: "share-component-gallery__stack" }, tt = { class: "share-component-gallery__checkbox-row" }, nt = { class: "share-component-gallery__checkbox-row" }, rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, it = { class: "share-component-gallery__stack" }, at = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, ot = { class: "share-component-gallery__slider" }, st = { class: "share-component-gallery__section" }, ct = { class: "share-component-gallery__grid" }, lt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, ut = { class: "share-component-gallery__form-grid" }, dt = { class: "share-component-gallery__section" }, ft = { class: "share-component-gallery__grid" }, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, mt = { class: "share-component-gallery__stack" }, ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, _t = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, vt = { class: "share-component-gallery__section" }, yt = { class: "share-component-gallery__grid" }, bt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, xt = ["onMousedown"], St = ["onMousedown"], Ct = { class: "share-component-gallery__preview" }, wt = { class: "share-component-gallery__rich-node" }, Tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, Et = { class: "share-component-gallery__section" }, Dt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, Ot = { class: "share-component-gallery__chrome" }, kt = { class: "share-component-gallery__section" }, At = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, jt = { class: "share-component-gallery__row" }, q = /*#__PURE__*/ t({
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
	setup(t) {
		let f = Ne.length, m = U(!0), v = U(!0), b = U("md"), S = U("preview"), C = U(62), w = U("rare"), T = U("#7c5ce2"), E = U("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), O = U(!0), N = U(!1), B = U(null), K = U(!1), q = U(!1), J = U(!1), Y = U(!1), X = U(!1), Mt = U(0), Z = U(!1), Q = U(null), Nt = [
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
		], Pt = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Ft = [
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
		], It = [
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
		], $ = H({
			date: "",
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function Lt(e) {
			return `${e} МБ`;
		}
		function Rt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (H, U) => (V(), I("div", Pe, [
			L("header", Fe, [L("div", null, [
				L("p", Ie, "share-ui · " + W(ke(f)) + " компонентов", 1),
				L("h1", null, W(t.title), 1),
				L("p", null, W(t.description), 1)
			]), U[33] ||= L("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			L("section", Le, [z(Me)]),
			L("section", Re, [U[34] ||= L("h2", null, "GuidedTour", -1), z(je)]),
			L("section", ze, [z(M, {
				title: "Поверхности и действия",
				border: ""
			}), L("div", Be, [
				L("article", Ve, [
					U[44] ||= L("h2", null, "BaseTile", -1),
					z(g, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: G(() => [...U[35] ||= [R("✦", -1)]]),
						_: 1
					}),
					L("div", He, [
						z(y, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [
								z(s),
								U[36] ||= L("strong", null, "Акцентная плитка", -1),
								U[37] ||= L("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						z(y, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...U[38] ||= [L("strong", null, "Рамка", -1), L("span", null, "framed", -1)]]),
							_: 1
						}),
						z(a, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: U[0] ||= (e) => Mt.value++
						}, {
							aside: G(() => [L("span", null, W(Mt.value), 1)]),
							default: G(() => [U[39] ||= L("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						z(a, {
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...U[40] ||= [L("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						z(a, { title: "Только просмотр" }, {
							default: G(() => [...U[41] ||= [L("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						z(a, null, {
							default: G(() => [...U[42] ||= [L("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						z(a, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...U[43] ||= [L("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						z(ae, { title: "Общий заголовок" })
					])
				]),
				L("article", Ue, [
					U[45] ||= L("h2", null, "Загрузка", -1),
					z(_, { label: "Открываем раздел…" }),
					z(_, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					z(o, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					L("div", We, [
						z(o, {
							label: "Загрузка",
							size: "sm"
						}),
						z(o, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						z(o, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					L("div", Ge, [z(Ce, {
						width: "36px",
						height: "36px",
						round: ""
					}), z(Ce, { width: "60%" })])
				]),
				L("article", Ke, [
					U[46] ||= L("h2", null, "InlineEdit", -1),
					z(x, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					z(x, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					z(x, {
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
				L("article", qe, [
					U[50] ||= L("h2", null, "SectionList", -1),
					z(d, { title: "Записи" }, {
						footer: G(() => [z(A, { label: "Добавить запись" })]),
						default: G(() => [U[47] ||= L("div", { style: { padding: "12px 0" } }, "Первая запись", -1), U[48] ||= L("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					z(d, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: G(() => [...U[49] ||= [L("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), L("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				L("article", Je, [U[57] ||= L("h2", null, "Кнопки элементов", -1), L("div", Ye, [
					z(g, null, {
						default: G(() => [...U[51] ||= [R("Основное действие", -1)]]),
						_: 1
					}),
					z(g, { variant: "secondary" }, {
						default: G(() => [...U[52] ||= [R("Вторичное", -1)]]),
						_: 1
					}),
					z(g, { variant: "quiet" }, {
						default: G(() => [...U[53] ||= [R("Тихое", -1)]]),
						_: 1
					}),
					z(g, { variant: "dashed" }, {
						default: G(() => [...U[54] ||= [R("Пунктирная рамка", -1)]]),
						_: 1
					}),
					z(g, { disabled: "" }, {
						default: G(() => [...U[55] ||= [R("Недоступно", -1)]]),
						_: 1
					}),
					z(g, {
						loading: "",
						"loading-label": "Загрузка"
					}, {
						default: G(() => [...U[56] ||= [R("Загрузка", -1)]]),
						_: 1
					}),
					z(A, { label: "Добавить элемент" }),
					z(A, {
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
				])]),
				L("article", Xe, [U[58] ||= L("h2", null, "SegmentDonutChart", -1), z(we, {
					segments: It,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Lt
				})])
			])]),
			L("section", Ze, [z(M, {
				title: "Переключатели",
				border: ""
			}), L("div", Qe, [
				L("article", $e, [U[61] ||= L("h2", null, "Boolean controls", -1), L("div", et, [
					z(ve, {
						modelValue: m.value,
						"onUpdate:modelValue": U[1] ||= (e) => m.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					L("label", tt, [z(u, {
						modelValue: v.value,
						"onUpdate:modelValue": U[2] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), U[59] ||= R(" Выбрать элемент ", -1)]),
					L("label", nt, [z(u, {
						modelValue: v.value,
						"onUpdate:modelValue": U[3] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), U[60] ||= R(" Крупный выбор (24px) ", -1)])
				])]),
				L("article", rt, [U[62] ||= L("h2", null, "Segmented controls", -1), L("div", it, [z(Ee, {
					modelValue: b.value,
					"onUpdate:modelValue": U[4] ||= (e) => b.value = e,
					options: Nt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), z(pe, {
					modelValue: S.value,
					"onUpdate:modelValue": U[5] ||= (e) => S.value = e,
					tabs: Pt,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				L("article", at, [U[63] ||= L("h2", null, "AppSlider", -1), L("div", ot, [z(r, {
					modelValue: C.value,
					"onUpdate:modelValue": U[6] ||= (e) => C.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), L("strong", null, W(C.value), 1)])])
			])]),
			L("section", st, [z(M, {
				title: "Формы",
				border: ""
			}), L("div", ct, [L("article", lt, [
				U[65] ||= L("h2", null, "Form primitives", -1),
				L("div", ut, [
					z(k, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: G(() => [z(he, {
							value: $.name,
							"onUpdate:value": U[7] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(k, {
						label: "Дата",
						vertical: ""
					}, {
						default: G(() => [z(D, {
							modelValue: $.date,
							"onUpdate:modelValue": U[8] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), z(D, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					z(k, {
						label: "Количество",
						vertical: ""
					}, {
						default: G(() => [z(fe, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: U[9] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(k, {
						label: "Тип",
						vertical: ""
					}, {
						default: G(() => [z(_e, {
							value: $.type,
							"onUpdate:value": U[10] ||= (e) => $.type = e
						}, {
							default: G(() => [...U[64] ||= [L("option", { value: "base" }, "Основной", -1), L("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					z(k, {
						label: "Описание",
						vertical: ""
					}, {
						default: G(() => [z(ye, {
							value: $.description,
							"onUpdate:value": U[11] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				z(j, {
					"submit-text": "Сохранить",
					onCancel: Rt
				})
			])])]),
			L("section", dt, [z(M, {
				title: "Выбор значений и floating UI",
				border: ""
			}), L("div", ft, [
				L("article", pt, [U[66] ||= L("h2", null, "Selectors", -1), L("div", mt, [z(e, {
					modelValue: w.value,
					"onUpdate:modelValue": U[12] ||= (e) => w.value = e,
					options: Ft,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), z(ge, {
					modelValue: T.value,
					"onUpdate:modelValue": U[13] ||= (e) => T.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				L("article", ht, [
					U[68] ||= L("h2", null, "BasePopover", -1),
					L("button", {
						ref_key: "popoverAnchor",
						ref: B,
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[14] ||= (e) => N.value = !N.value
					}, " Открыть popover ", 512),
					z(me, {
						open: N.value,
						anchor: B.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": U[15] ||= (e) => N.value = e
					}, {
						default: G(() => [...U[67] ||= [L("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				L("article", gt, [U[74] ||= L("h2", null, "ActionMenu", -1), z(Se, {
					title: "Действия",
					related: ""
				}, {
					default: G(() => [
						z(h, { tone: "accent" }, {
							default: G(() => [...U[69] ||= [R("Редактировать", -1)]]),
							_: 1
						}),
						z(be, { label: "Перемещение" }, {
							trigger: G(({ open: e }) => [z(h, {
								submenu: "",
								"submenu-open": e
							}, {
								default: G(() => [...U[70] ||= [R("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: G(() => [z(h, null, {
								default: G(() => [...U[71] ||= [R("В начало", -1)]]),
								_: 1
							}), z(h, null, {
								default: G(() => [...U[72] ||= [R("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						z(h, { tone: "danger" }, {
							default: G(() => [...U[73] ||= [R("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				L("article", _t, [U[77] ||= L("h2", null, "AccountMenu", -1), z(de, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: G(({ close: e }) => [z(h, { onClick: e }, {
						default: G(() => [...U[75] ||= [R("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), z(h, {
						tone: "danger",
						onClick: e
					}, {
						default: G(() => [...U[76] ||= [R("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			L("section", vt, [z(M, {
				title: "Редакторы и rich text",
				border: ""
			}), L("div", yt, [L("article", bt, [
				U[78] ||= L("h2", null, "Rich text", -1),
				z(l, {
					ref: "richEditor",
					modelValue: E.value,
					"onUpdate:modelValue": U[16] ||= (e) => E.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: G(({ editor: e, insertRichNode: t }) => [L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ae((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, xt), L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Ae((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, St)]),
					_: 1
				}, 8, ["modelValue"]),
				L("div", Ct, [z(ue, { html: E.value }, {
					node: G(({ node: e }) => [L("strong", wt, W(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), L("article", Tt, [U[81] ||= L("h2", null, "Editor composition", -1), z(y, null, {
				default: G(() => [z(oe, { title: "Параметры" }, {
					default: G(() => [z(ne, { title: "Основное" }, {
						default: G(() => [z(re, { title: "Значение" }, {
							actions: G(() => [...U[79] ||= [L("span", null, "12", -1)]]),
							_: 1
						}), z(r, {
							modelValue: C.value,
							"onUpdate:modelValue": U[17] ||= (e) => C.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), z(xe, null, {
						default: G(() => [U[80] ||= R("Итого: ", -1), L("strong", null, W(C.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			L("section", Et, [z(M, {
				title: "Каркас приложения",
				border: ""
			}), L("article", Dt, [U[87] ||= L("h2", null, "Navigation composition", -1), L("div", Ot, [z(n, {
				class: Oe(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": O.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: G(() => [z(se, {
					modelValue: O.value,
					"onUpdate:modelValue": U[18] ||= (e) => O.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: G(() => [z(te, {
						as: "div",
						label: "share-ui"
					}, {
						icon: G(() => [...U[82] ||= [L("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: G(() => [
						z(c, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: G(() => [...U[83] ||= [L("span", null, "⌂", -1)]]),
							_: 1
						}),
						z(ee, { label: "Примеры" }),
						z(c, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: G(() => [...U[84] ||= [L("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: G(() => [...U[85] ||= [L("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: G(() => [U[86] ||= L("div", { class: "share-component-gallery__chrome-content" }, [
					L("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					L("strong", null, "AppShell + AppSidebar"),
					L("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			L("section", kt, [z(M, {
				title: "Оверлеи и morph",
				border: ""
			}), L("article", At, [U[88] ||= L("h2", null, "Интерактивные примеры", -1), L("div", jt, [
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[19] ||= (e) => K.value = !0
				}, "AppModal"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[20] ||= (e) => q.value = !0
				}, "AppModalFrame"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[21] ||= (e) => J.value = !0
				}, "ModalShell"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[22] ||= (e) => Y.value = !0
				}, "ConfirmDialog"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[23] ||= (e) => X.value = !0
				}, "TextPromptDialog"),
				L("button", {
					ref_key: "morphOrigin",
					ref: Q,
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[24] ||= (e) => Z.value = !0
				}, "MorphSheet", 512)
			])])]),
			K.value ? (V(), P(ie, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: U[25] ||= (e) => K.value = !1
			}, {
				default: G(() => [...U[89] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "AppModal"), L("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : F("", !0),
			q.value ? (V(), P(i, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: U[28] ||= (e) => q.value = !1
			}, {
				footer: G(() => [z(j, {
					onCancel: U[26] ||= (e) => q.value = !1,
					onSubmit: U[27] ||= (e) => q.value = !1
				})]),
				default: G(() => [U[90] ||= L("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : F("", !0),
			z(Te, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: U[29] ||= (e) => J.value = !1
			}, {
				default: G(() => [...U[91] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "ModalShell"), L("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			z(le, {
				open: Y.value,
				"onUpdate:open": U[30] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			z(De, {
				open: X.value,
				"onUpdate:open": U[31] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (V(), P(ce, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: U[32] ||= (e) => Z.value = !1
			}, {
				head: G(() => [...U[92] ||= [L("div", { class: "share-component-gallery__morph-head" }, [L("strong", null, "MorphSheet")], -1)]]),
				default: G(() => [U[93] ||= L("div", { class: "share-component-gallery__overlay-content" }, [L("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : F("", !0)
		]));
	}
}, [["__scopeId", "data-v-8c66d9f7"]]);
//#endregion
export { K as COMPONENT_GALLERY_ALIASES, Ne as COMPONENT_GALLERY_COMPONENTS, q as ComponentGallery };
