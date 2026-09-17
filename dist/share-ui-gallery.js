import { $ as e, A as t, B as n, C as r, Ct as i, D as a, Dt as o, E as s, Et as c, F as l, H as ee, I as te, L as ne, M as re, N as ie, Ot as u, P as d, Q as ae, St as oe, T as f, Tt as se, V as ce, _ as p, _t as le, a as m, at as h, b as ue, bt as de, c as g, ct as fe, d as pe, f as _, g as me, gt as he, h as ge, ht as _e, i as v, it as ve, j as ye, kt as y, l as b, m as be, n as x, o as S, p as C, r as w, rt as xe, s as T, st as E, t as D, u as O, v as Se, vt as k, w as Ce, wt as A, x as we, xt as j, y as Te, yt as M, z as Ee } from "./FloatingTooltip-DYUOziSj.js";
import { Fragment as N, createBlock as P, createCommentVNode as F, createElementBlock as I, createElementVNode as L, createTextVNode as R, createVNode as z, h as B, normalizeClass as De, openBlock as V, reactive as H, ref as U, toDisplayString as W, unref as G, withCtx as K, withModifiers as Oe } from "vue";
//#region src/gallery/TourGalleryExample.vue
var ke = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = U(null), n = h(640), r = H(g());
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
		return (e, a) => (V(), I(N, null, [z(O, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: K(() => [...a[0] ||= [R("Показать обучение", -1)]]),
			_: 1
		}, 512), z(b, {
			tour: r,
			mobile: G(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, Ae = {
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
		return (e, l) => (V(), I(N, null, [z(m, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: K(() => [
				z(T, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				z(T, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				z(T, {
					percent: 100,
					label: "Полное значение"
				}),
				z(S, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				z(S, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				z(v, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: K(() => [...l[8] ||= [R("✦", -1)]]),
					trailing: K(() => [...l[9] ||= [R("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				z(v, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				z(x, {
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
				z(w, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				z(w, {
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
				a.value ? (V(), P(D, {
					key: 0,
					anchor: i.value
				}, {
					default: K(() => [...l[10] ||= [R("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : F("", !0)
			]),
			_: 1
		}), z(m, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: K(() => [...l[11] ||= [R("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, je = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), q = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Me = { class: "share-component-gallery" }, Ne = { class: "share-component-gallery__header" }, Pe = { class: "share-component-gallery__eyebrow" }, Fe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, Ie = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, Le = { class: "share-component-gallery__section" }, Re = { class: "share-component-gallery__grid" }, ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, Be = { class: "share-component-gallery__tile-row" }, Ve = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, He = { class: "share-component-gallery__row" }, Ue = { class: "share-component-gallery__row" }, We = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, Ge = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Ke = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton"
}, qe = { class: "share-component-gallery__row" }, Je = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Ye = { class: "share-component-gallery__section" }, Xe = { class: "share-component-gallery__grid" }, Ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Qe = { class: "share-component-gallery__stack" }, $e = { class: "share-component-gallery__checkbox-row" }, et = { class: "share-component-gallery__checkbox-row" }, tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, nt = { class: "share-component-gallery__stack" }, rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, it = { class: "share-component-gallery__slider" }, at = { class: "share-component-gallery__section" }, ot = { class: "share-component-gallery__grid" }, st = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, ct = { class: "share-component-gallery__form-grid" }, lt = { class: "share-component-gallery__section" }, ut = { class: "share-component-gallery__grid" }, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, ft = { class: "share-component-gallery__stack" }, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, gt = { class: "share-component-gallery__section" }, _t = { class: "share-component-gallery__grid" }, vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, yt = ["onMousedown"], bt = ["onMousedown"], xt = { class: "share-component-gallery__preview" }, St = { class: "share-component-gallery__rich-node" }, Ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, wt = { class: "share-component-gallery__section" }, Tt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, Et = { class: "share-component-gallery__chrome" }, Dt = { class: "share-component-gallery__section" }, Ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, kt = { class: "share-component-gallery__row" }, J = /*#__PURE__*/ y({
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
	setup(m) {
		let h = je.length, g = U(!0), v = U(!0), y = U("md"), b = U("preview"), x = U(62), S = U("rare"), w = U("#7c5ce2"), T = U("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), D = U(!0), N = U(!1), B = U(null), q = U(!1), J = U(!1), Y = U(!1), X = U(!1), Z = U(!1), At = U(0), Q = U(!1), jt = U(null), Mt = [
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
		], Nt = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Pt = [
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
		], Ft = [
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
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function It(e) {
			return `${e} МБ`;
		}
		function Lt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (H, U) => (V(), I("div", Me, [
			L("header", Ne, [L("div", null, [
				L("p", Pe, "share-ui · " + W(G(h)) + " компонентов", 1),
				L("h1", null, W(m.title), 1),
				L("p", null, W(m.description), 1)
			]), U[32] ||= L("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			L("section", Fe, [z(Ae)]),
			L("section", Ie, [U[33] ||= L("h2", null, "GuidedTour", -1), z(ke)]),
			L("section", Le, [z(k, {
				title: "Поверхности и действия",
				border: ""
			}), L("div", Re, [
				L("article", ze, [
					U[43] ||= L("h2", null, "BaseTile", -1),
					z(O, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: K(() => [...U[34] ||= [R("✦", -1)]]),
						_: 1
					}),
					L("div", Be, [
						z(u, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [
								z(se),
								U[35] ||= L("strong", null, "Акцентная плитка", -1),
								U[36] ||= L("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						z(u, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: K(() => [...U[37] ||= [L("strong", null, "Рамка", -1), L("span", null, "framed", -1)]]),
							_: 1
						}),
						z(c, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: U[0] ||= (e) => At.value++
						}, {
							aside: K(() => [L("span", null, W(At.value), 1)]),
							default: K(() => [U[38] ||= L("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						z(c, {
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: K(() => [...U[39] ||= [L("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						z(c, { title: "Только просмотр" }, {
							default: K(() => [...U[40] ||= [L("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						z(c, null, {
							default: K(() => [...U[41] ||= [L("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						z(c, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: K(() => [...U[42] ||= [L("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						z(o, { title: "Общий заголовок" })
					])
				]),
				L("article", Ve, [
					U[44] ||= L("h2", null, "Загрузка", -1),
					z(pe, { label: "Открываем раздел…" }),
					z(pe, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					z(f, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					L("div", He, [
						z(f, {
							label: "Загрузка",
							size: "sm"
						}),
						z(f, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						z(f, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					L("div", Ue, [z(_, {
						width: "36px",
						height: "36px",
						round: ""
					}), z(_, { width: "60%" })])
				]),
				L("article", We, [
					U[45] ||= L("h2", null, "InlineEdit", -1),
					z(C, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					z(C, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					z(C, {
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
				L("article", Ge, [
					U[49] ||= L("h2", null, "SectionList", -1),
					z(A, { title: "Записи" }, {
						footer: K(() => [z(i, { label: "Добавить запись" })]),
						default: K(() => [U[46] ||= L("div", { style: { padding: "12px 0" } }, "Первая запись", -1), U[47] ||= L("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					z(A, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: K(() => [...U[48] ||= [L("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), L("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				L("article", Ke, [U[56] ||= L("h2", null, "Кнопки элементов", -1), L("div", qe, [
					z(O, null, {
						default: K(() => [...U[50] ||= [R("Основное действие", -1)]]),
						_: 1
					}),
					z(O, { variant: "secondary" }, {
						default: K(() => [...U[51] ||= [R("Вторичное", -1)]]),
						_: 1
					}),
					z(O, { variant: "quiet" }, {
						default: K(() => [...U[52] ||= [R("Тихое", -1)]]),
						_: 1
					}),
					z(O, { variant: "dashed" }, {
						default: K(() => [...U[53] ||= [R("Пунктирная рамка", -1)]]),
						_: 1
					}),
					z(O, { disabled: "" }, {
						default: K(() => [...U[54] ||= [R("Недоступно", -1)]]),
						_: 1
					}),
					z(O, {
						loading: "",
						"loading-label": "Загрузка"
					}, {
						default: K(() => [...U[55] ||= [R("Загрузка", -1)]]),
						_: 1
					}),
					z(i, { label: "Добавить элемент" }),
					z(i, {
						label: "Добавить",
						variant: "icon"
					}),
					z(M, { label: "Удалить" }),
					z(M, {
						label: "Удалить",
						variant: "boxed"
					}),
					z(M, {
						label: "Удалить запись",
						icon: "trash"
					}),
					z(M, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					z(M, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				L("article", Je, [U[57] ||= L("h2", null, "SegmentDonutChart", -1), z(le, {
					segments: Ft,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": It
				})])
			])]),
			L("section", Ye, [z(k, {
				title: "Переключатели",
				border: ""
			}), L("div", Xe, [
				L("article", Ze, [U[60] ||= L("h2", null, "Boolean controls", -1), L("div", Qe, [
					z(_e, {
						modelValue: g.value,
						"onUpdate:modelValue": U[1] ||= (e) => g.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					L("label", $e, [z(j, {
						modelValue: v.value,
						"onUpdate:modelValue": U[2] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), U[58] ||= R(" Выбрать элемент ", -1)]),
					L("label", et, [z(j, {
						modelValue: v.value,
						"onUpdate:modelValue": U[3] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), U[59] ||= R(" Крупный выбор (24px) ", -1)])
				])]),
				L("article", tt, [U[61] ||= L("h2", null, "Segmented controls", -1), L("div", nt, [z(de, {
					modelValue: y.value,
					"onUpdate:modelValue": U[4] ||= (e) => y.value = e,
					options: Mt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), z(he, {
					modelValue: b.value,
					"onUpdate:modelValue": U[5] ||= (e) => b.value = e,
					tabs: Nt,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				L("article", rt, [U[62] ||= L("h2", null, "AppSlider", -1), L("div", it, [z(oe, {
					modelValue: x.value,
					"onUpdate:modelValue": U[6] ||= (e) => x.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), L("strong", null, W(x.value), 1)])])
			])]),
			L("section", at, [z(k, {
				title: "Формы",
				border: ""
			}), L("div", ot, [L("article", st, [
				U[64] ||= L("h2", null, "Form primitives", -1),
				L("div", ct, [
					z(p, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: K(() => [z(Te, {
							value: $.name,
							"onUpdate:value": U[7] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(p, {
						label: "Количество",
						vertical: ""
					}, {
						default: K(() => [z(me, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: U[8] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(p, {
						label: "Тип",
						vertical: ""
					}, {
						default: K(() => [z(ge, {
							value: $.type,
							"onUpdate:value": U[9] ||= (e) => $.type = e
						}, {
							default: K(() => [...U[63] ||= [L("option", { value: "base" }, "Основной", -1), L("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					z(p, {
						label: "Описание",
						vertical: ""
					}, {
						default: K(() => [z(be, {
							value: $.description,
							"onUpdate:value": U[10] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				z(ue, {
					"submit-text": "Сохранить",
					onCancel: Lt
				})
			])])]),
			L("section", lt, [z(k, {
				title: "Выбор значений и floating UI",
				border: ""
			}), L("div", ut, [
				L("article", dt, [U[65] ||= L("h2", null, "Selectors", -1), L("div", ft, [z(ae, {
					modelValue: S.value,
					"onUpdate:modelValue": U[11] ||= (e) => S.value = e,
					options: Pt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), z(e, {
					modelValue: w.value,
					"onUpdate:modelValue": U[12] ||= (e) => w.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				L("article", pt, [
					U[67] ||= L("h2", null, "BasePopover", -1),
					L("button", {
						ref_key: "popoverAnchor",
						ref: B,
						type: "button",
						class: "share-component-gallery__button",
						onClick: U[13] ||= (e) => N.value = !N.value
					}, " Открыть popover ", 512),
					z(ve, {
						open: N.value,
						anchor: B.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": U[14] ||= (e) => N.value = e
					}, {
						default: K(() => [...U[66] ||= [L("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				L("article", mt, [U[73] ||= L("h2", null, "ActionMenu", -1), z(fe, { title: "Действия" }, {
					default: K(() => [
						z(E, { tone: "accent" }, {
							default: K(() => [...U[68] ||= [R("Редактировать", -1)]]),
							_: 1
						}),
						z(xe, { label: "Перемещение" }, {
							trigger: K(({ open: e }) => [z(E, {
								submenu: "",
								"submenu-open": e
							}, {
								default: K(() => [...U[69] ||= [R("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: K(() => [z(E, null, {
								default: K(() => [...U[70] ||= [R("В начало", -1)]]),
								_: 1
							}), z(E, null, {
								default: K(() => [...U[71] ||= [R("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						z(E, { tone: "danger" }, {
							default: K(() => [...U[72] ||= [R("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				L("article", ht, [U[76] ||= L("h2", null, "AccountMenu", -1), z(n, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: K(({ close: e }) => [z(E, { onClick: e }, {
						default: K(() => [...U[74] ||= [R("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), z(E, {
						tone: "danger",
						onClick: e
					}, {
						default: K(() => [...U[75] ||= [R("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			L("section", gt, [z(k, {
				title: "Редакторы и rich text",
				border: ""
			}), L("div", _t, [L("article", vt, [
				U[77] ||= L("h2", null, "Rich text", -1),
				z(ce, {
					ref: "richEditor",
					modelValue: T.value,
					"onUpdate:modelValue": U[15] ||= (e) => T.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: K(({ editor: e, insertRichNode: t }) => [L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Oe((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, yt), L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Oe((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, bt)]),
					_: 1
				}, 8, ["modelValue"]),
				L("div", xt, [z(ee, { html: T.value }, {
					node: K(({ node: e }) => [L("strong", St, W(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), L("article", Ct, [U[80] ||= L("h2", null, "Editor composition", -1), z(u, null, {
				default: K(() => [z(ie, { title: "Параметры" }, {
					default: K(() => [z(ye, { title: "Основное" }, {
						default: K(() => [z(re, { title: "Значение" }, {
							actions: K(() => [...U[78] ||= [L("span", null, "12", -1)]]),
							_: 1
						}), z(oe, {
							modelValue: x.value,
							"onUpdate:modelValue": U[16] ||= (e) => x.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), z(t, null, {
						default: K(() => [U[79] ||= R("Итого: ", -1), L("strong", null, W(x.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			L("section", wt, [z(k, {
				title: "Каркас приложения",
				border: ""
			}), L("article", Tt, [U[86] ||= L("h2", null, "Navigation composition", -1), L("div", Et, [z(Ee, {
				class: De(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": D.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: K(() => [z(ne, {
					modelValue: D.value,
					"onUpdate:modelValue": U[17] ||= (e) => D.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: K(() => [z(te, {
						as: "div",
						label: "share-ui"
					}, {
						icon: K(() => [...U[81] ||= [L("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: K(() => [
						z(d, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: K(() => [...U[82] ||= [L("span", null, "⌂", -1)]]),
							_: 1
						}),
						z(l, { label: "Примеры" }),
						z(d, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: K(() => [...U[83] ||= [L("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: K(() => [...U[84] ||= [L("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: K(() => [U[85] ||= L("div", { class: "share-component-gallery__chrome-content" }, [
					L("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					L("strong", null, "AppShell + AppSidebar"),
					L("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			L("section", Dt, [z(k, {
				title: "Оверлеи и morph",
				border: ""
			}), L("article", Ot, [U[87] ||= L("h2", null, "Интерактивные примеры", -1), L("div", kt, [
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[18] ||= (e) => q.value = !0
				}, "AppModal"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[19] ||= (e) => J.value = !0
				}, "AppModalFrame"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[20] ||= (e) => Y.value = !0
				}, "ModalShell"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[21] ||= (e) => X.value = !0
				}, "ConfirmDialog"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[22] ||= (e) => Z.value = !0
				}, "TextPromptDialog"),
				L("button", {
					ref_key: "morphOrigin",
					ref: jt,
					type: "button",
					class: "share-component-gallery__button",
					onClick: U[23] ||= (e) => Q.value = !0
				}, "MorphSheet", 512)
			])])]),
			q.value ? (V(), P(a, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: U[24] ||= (e) => q.value = !1
			}, {
				default: K(() => [...U[88] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "AppModal"), L("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : F("", !0),
			J.value ? (V(), P(s, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: U[27] ||= (e) => J.value = !1
			}, {
				footer: K(() => [z(ue, {
					onCancel: U[25] ||= (e) => J.value = !1,
					onSubmit: U[26] ||= (e) => J.value = !1
				})]),
				default: K(() => [U[89] ||= L("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : F("", !0),
			z(r, {
				open: Y.value,
				"aria-label": "Пример ModalShell",
				onClose: U[28] ||= (e) => Y.value = !1
			}, {
				default: K(() => [...U[90] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "ModalShell"), L("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			z(Ce, {
				open: X.value,
				"onUpdate:open": U[29] ||= (e) => X.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			z(Se, {
				open: Z.value,
				"onUpdate:open": U[30] ||= (e) => Z.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (V(), P(we, {
				key: 2,
				"origin-el": jt.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: U[31] ||= (e) => Q.value = !1
			}, {
				head: K(() => [...U[91] ||= [L("div", { class: "share-component-gallery__morph-head" }, [L("strong", null, "MorphSheet")], -1)]]),
				default: K(() => [U[92] ||= L("div", { class: "share-component-gallery__overlay-content" }, [L("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : F("", !0)
		]));
	}
}, [["__scopeId", "data-v-982af0ca"]]);
//#endregion
export { q as COMPONENT_GALLERY_ALIASES, je as COMPONENT_GALLERY_COMPONENTS, J as ComponentGallery };
