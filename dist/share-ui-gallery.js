import { $ as e, A as t, B as n, C as r, Ct as i, D as a, Dt as o, E as s, Et as c, F as l, H as ee, I as te, L as ne, M as re, N as ie, Ot as u, P as ae, Q as oe, St as se, T as d, Tt as ce, V as le, _ as f, _t as ue, a as p, at as m, b as h, bt as de, c as g, ct as fe, d as pe, f as _, g as me, gt as he, h as ge, ht as _e, i as v, it as ve, j as ye, kt as y, l as b, m as be, n as x, o as S, p as C, r as w, rt as xe, s as T, st as E, t as D, u as O, v as Se, vt as k, w as Ce, wt as we, x as Te, xt as A, y as Ee, yt as j, z as De } from "./FloatingTooltip-DY8BJmrB.js";
import { Fragment as M, createBlock as N, createCommentVNode as P, createElementBlock as F, createElementVNode as I, createTextVNode as L, createVNode as R, h as z, normalizeClass as Oe, openBlock as B, reactive as V, ref as H, toDisplayString as U, unref as W, withCtx as G, withModifiers as K } from "vue";
//#region src/gallery/TourGalleryExample.vue
var ke = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = H(null), n = m(640), r = V(g());
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
		return (e, a) => (B(), F(M, null, [R(O, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: G(() => [...a[0] ||= [L("Показать обучение", -1)]]),
			_: 1
		}, 512), R(b, {
			tour: r,
			mobile: W(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, Ae = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = H("star"), n = H(!1), r = H([]), i = H(null), a = H(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => z("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => z("span", "●") }
		}], s = H([{
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
		return (e, l) => (B(), F(M, null, [R(p, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: G(() => [
				R(T, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				R(T, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				R(T, {
					percent: 100,
					label: "Полное значение"
				}),
				R(S, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				R(S, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				R(v, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: G(() => [...l[8] ||= [L("✦", -1)]]),
					trailing: G(() => [...l[9] ||= [L("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				R(v, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				R(x, {
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
				R(w, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				R(w, {
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
				a.value ? (B(), N(D, {
					key: 0,
					anchor: i.value
				}, {
					default: G(() => [...l[10] ||= [L("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : P("", !0)
			]),
			_: 1
		}), R(p, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: G(() => [...l[11] ||= [L("Содержимое после раскрытия", -1)]]),
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
	setup(p) {
		let m = je.length, g = H(!0), v = H(!0), y = H("md"), b = H("preview"), x = H(62), S = H("rare"), w = H("#7c5ce2"), T = H("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), D = H(!0), M = H(!1), z = H(null), q = H(!1), J = H(!1), Y = H(!1), X = H(!1), Z = H(!1), At = H(0), Q = H(!1), jt = H(null), Mt = [
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
		], $ = V({
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
		return (V, H) => (B(), F("div", Me, [
			I("header", Ne, [I("div", null, [
				I("p", Pe, "share-ui · " + U(W(m)) + " компонентов", 1),
				I("h1", null, U(p.title), 1),
				I("p", null, U(p.description), 1)
			]), H[32] ||= I("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			I("section", Fe, [R(Ae)]),
			I("section", Ie, [H[33] ||= I("h2", null, "GuidedTour", -1), R(ke)]),
			I("section", Le, [R(k, {
				title: "Поверхности и действия",
				border: ""
			}), I("div", Re, [
				I("article", ze, [
					H[43] ||= I("h2", null, "BaseTile", -1),
					R(O, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: G(() => [...H[34] ||= [L("✦", -1)]]),
						_: 1
					}),
					I("div", Be, [
						R(u, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [
								R(ce),
								H[35] ||= I("strong", null, "Акцентная плитка", -1),
								H[36] ||= I("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						R(u, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[37] ||= [I("strong", null, "Рамка", -1), I("span", null, "framed", -1)]]),
							_: 1
						}),
						R(c, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: H[0] ||= (e) => At.value++
						}, {
							aside: G(() => [I("span", null, U(At.value), 1)]),
							default: G(() => [H[38] ||= I("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						R(c, {
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...H[39] ||= [I("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						R(c, { title: "Только просмотр" }, {
							default: G(() => [...H[40] ||= [I("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						R(c, null, {
							default: G(() => [...H[41] ||= [I("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						R(c, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...H[42] ||= [I("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						R(o, { title: "Общий заголовок" })
					])
				]),
				I("article", Ve, [
					H[44] ||= I("h2", null, "Загрузка", -1),
					R(pe, { label: "Открываем раздел…" }),
					R(pe, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					R(d, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					I("div", He, [
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
					I("div", Ue, [R(_, {
						width: "36px",
						height: "36px",
						round: ""
					}), R(_, { width: "60%" })])
				]),
				I("article", We, [
					H[45] ||= I("h2", null, "InlineEdit", -1),
					R(C, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					R(C, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					R(C, {
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
				I("article", Ge, [
					H[49] ||= I("h2", null, "SectionList", -1),
					R(we, { title: "Записи" }, {
						footer: G(() => [R(i, { label: "Добавить запись" })]),
						default: G(() => [H[46] ||= I("div", { style: { padding: "12px 0" } }, "Первая запись", -1), H[47] ||= I("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					R(we, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: G(() => [...H[48] ||= [I("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), I("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				I("article", Ke, [H[55] ||= I("h2", null, "Кнопки элементов", -1), I("div", qe, [
					R(O, null, {
						default: G(() => [...H[50] ||= [L("Основное действие", -1)]]),
						_: 1
					}),
					R(O, { variant: "secondary" }, {
						default: G(() => [...H[51] ||= [L("Вторичное", -1)]]),
						_: 1
					}),
					R(O, { variant: "quiet" }, {
						default: G(() => [...H[52] ||= [L("Тихое", -1)]]),
						_: 1
					}),
					R(O, { disabled: "" }, {
						default: G(() => [...H[53] ||= [L("Недоступно", -1)]]),
						_: 1
					}),
					R(O, {
						loading: "",
						"loading-label": "Загрузка"
					}, {
						default: G(() => [...H[54] ||= [L("Загрузка", -1)]]),
						_: 1
					}),
					R(i, { label: "Добавить элемент" }),
					R(i, {
						label: "Добавить",
						variant: "icon"
					}),
					R(j, { label: "Удалить" }),
					R(j, {
						label: "Удалить",
						variant: "boxed"
					}),
					R(j, {
						label: "Удалить запись",
						icon: "trash"
					}),
					R(j, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					R(j, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				I("article", Je, [H[56] ||= I("h2", null, "SegmentDonutChart", -1), R(ue, {
					segments: Ft,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": It
				})])
			])]),
			I("section", Ye, [R(k, {
				title: "Переключатели",
				border: ""
			}), I("div", Xe, [
				I("article", Ze, [H[59] ||= I("h2", null, "Boolean controls", -1), I("div", Qe, [
					R(_e, {
						modelValue: g.value,
						"onUpdate:modelValue": H[1] ||= (e) => g.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					I("label", $e, [R(A, {
						modelValue: v.value,
						"onUpdate:modelValue": H[2] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), H[57] ||= L(" Выбрать элемент ", -1)]),
					I("label", et, [R(A, {
						modelValue: v.value,
						"onUpdate:modelValue": H[3] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), H[58] ||= L(" Крупный выбор (24px) ", -1)])
				])]),
				I("article", tt, [H[60] ||= I("h2", null, "Segmented controls", -1), I("div", nt, [R(de, {
					modelValue: y.value,
					"onUpdate:modelValue": H[4] ||= (e) => y.value = e,
					options: Mt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), R(he, {
					modelValue: b.value,
					"onUpdate:modelValue": H[5] ||= (e) => b.value = e,
					tabs: Nt,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				I("article", rt, [H[61] ||= I("h2", null, "AppSlider", -1), I("div", it, [R(se, {
					modelValue: x.value,
					"onUpdate:modelValue": H[6] ||= (e) => x.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), I("strong", null, U(x.value), 1)])])
			])]),
			I("section", at, [R(k, {
				title: "Формы",
				border: ""
			}), I("div", ot, [I("article", st, [
				H[63] ||= I("h2", null, "Form primitives", -1),
				I("div", ct, [
					R(f, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: G(() => [R(Ee, {
							value: $.name,
							"onUpdate:value": H[7] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(f, {
						label: "Количество",
						vertical: ""
					}, {
						default: G(() => [R(me, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: H[8] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(f, {
						label: "Тип",
						vertical: ""
					}, {
						default: G(() => [R(ge, {
							value: $.type,
							"onUpdate:value": H[9] ||= (e) => $.type = e
						}, {
							default: G(() => [...H[62] ||= [I("option", { value: "base" }, "Основной", -1), I("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					R(f, {
						label: "Описание",
						vertical: ""
					}, {
						default: G(() => [R(be, {
							value: $.description,
							"onUpdate:value": H[10] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				R(h, {
					"submit-text": "Сохранить",
					onCancel: Lt
				})
			])])]),
			I("section", lt, [R(k, {
				title: "Выбор значений и floating UI",
				border: ""
			}), I("div", ut, [
				I("article", dt, [H[64] ||= I("h2", null, "Selectors", -1), I("div", ft, [R(oe, {
					modelValue: S.value,
					"onUpdate:modelValue": H[11] ||= (e) => S.value = e,
					options: Pt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), R(e, {
					modelValue: w.value,
					"onUpdate:modelValue": H[12] ||= (e) => w.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				I("article", pt, [
					H[66] ||= I("h2", null, "BasePopover", -1),
					I("button", {
						ref_key: "popoverAnchor",
						ref: z,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[13] ||= (e) => M.value = !M.value
					}, " Открыть popover ", 512),
					R(ve, {
						open: M.value,
						anchor: z.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": H[14] ||= (e) => M.value = e
					}, {
						default: G(() => [...H[65] ||= [I("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				I("article", mt, [H[72] ||= I("h2", null, "ActionMenu", -1), R(fe, { title: "Действия" }, {
					default: G(() => [
						R(E, { tone: "accent" }, {
							default: G(() => [...H[67] ||= [L("Редактировать", -1)]]),
							_: 1
						}),
						R(xe, { label: "Перемещение" }, {
							trigger: G(({ open: e }) => [R(E, {
								submenu: "",
								"submenu-open": e
							}, {
								default: G(() => [...H[68] ||= [L("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: G(() => [R(E, null, {
								default: G(() => [...H[69] ||= [L("В начало", -1)]]),
								_: 1
							}), R(E, null, {
								default: G(() => [...H[70] ||= [L("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						R(E, { tone: "danger" }, {
							default: G(() => [...H[71] ||= [L("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				I("article", ht, [H[75] ||= I("h2", null, "AccountMenu", -1), R(n, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: G(({ close: e }) => [R(E, { onClick: e }, {
						default: G(() => [...H[73] ||= [L("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), R(E, {
						tone: "danger",
						onClick: e
					}, {
						default: G(() => [...H[74] ||= [L("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			I("section", gt, [R(k, {
				title: "Редакторы и rich text",
				border: ""
			}), I("div", _t, [I("article", vt, [
				H[76] ||= I("h2", null, "Rich text", -1),
				R(le, {
					ref: "richEditor",
					modelValue: T.value,
					"onUpdate:modelValue": H[15] ||= (e) => T.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: G(({ editor: e, insertRichNode: t }) => [I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: K((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, yt), I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: K((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, bt)]),
					_: 1
				}, 8, ["modelValue"]),
				I("div", xt, [R(ee, { html: T.value }, {
					node: G(({ node: e }) => [I("strong", St, U(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), I("article", Ct, [H[79] ||= I("h2", null, "Editor composition", -1), R(u, null, {
				default: G(() => [R(ie, { title: "Параметры" }, {
					default: G(() => [R(ye, { title: "Основное" }, {
						default: G(() => [R(re, { title: "Значение" }, {
							actions: G(() => [...H[77] ||= [I("span", null, "12", -1)]]),
							_: 1
						}), R(se, {
							modelValue: x.value,
							"onUpdate:modelValue": H[16] ||= (e) => x.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), R(t, null, {
						default: G(() => [H[78] ||= L("Итого: ", -1), I("strong", null, U(x.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			I("section", wt, [R(k, {
				title: "Каркас приложения",
				border: ""
			}), I("article", Tt, [H[85] ||= I("h2", null, "Navigation composition", -1), I("div", Et, [R(De, {
				class: Oe(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": D.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: G(() => [R(ne, {
					modelValue: D.value,
					"onUpdate:modelValue": H[17] ||= (e) => D.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: G(() => [R(te, {
						as: "div",
						label: "share-ui"
					}, {
						icon: G(() => [...H[80] ||= [I("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: G(() => [
						R(ae, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: G(() => [...H[81] ||= [I("span", null, "⌂", -1)]]),
							_: 1
						}),
						R(l, { label: "Примеры" }),
						R(ae, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: G(() => [...H[82] ||= [I("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: G(() => [...H[83] ||= [I("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: G(() => [H[84] ||= I("div", { class: "share-component-gallery__chrome-content" }, [
					I("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					I("strong", null, "AppShell + AppSidebar"),
					I("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			I("section", Dt, [R(k, {
				title: "Оверлеи и morph",
				border: ""
			}), I("article", Ot, [H[86] ||= I("h2", null, "Интерактивные примеры", -1), I("div", kt, [
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[18] ||= (e) => q.value = !0
				}, "AppModal"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[19] ||= (e) => J.value = !0
				}, "AppModalFrame"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[20] ||= (e) => Y.value = !0
				}, "ModalShell"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[21] ||= (e) => X.value = !0
				}, "ConfirmDialog"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[22] ||= (e) => Z.value = !0
				}, "TextPromptDialog"),
				I("button", {
					ref_key: "morphOrigin",
					ref: jt,
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[23] ||= (e) => Q.value = !0
				}, "MorphSheet", 512)
			])])]),
			q.value ? (B(), N(a, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: H[24] ||= (e) => q.value = !1
			}, {
				default: G(() => [...H[87] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "AppModal"), I("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : P("", !0),
			J.value ? (B(), N(s, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: H[27] ||= (e) => J.value = !1
			}, {
				footer: G(() => [R(h, {
					onCancel: H[25] ||= (e) => J.value = !1,
					onSubmit: H[26] ||= (e) => J.value = !1
				})]),
				default: G(() => [H[88] ||= I("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : P("", !0),
			R(r, {
				open: Y.value,
				"aria-label": "Пример ModalShell",
				onClose: H[28] ||= (e) => Y.value = !1
			}, {
				default: G(() => [...H[89] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "ModalShell"), I("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			R(Ce, {
				open: X.value,
				"onUpdate:open": H[29] ||= (e) => X.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			R(Se, {
				open: Z.value,
				"onUpdate:open": H[30] ||= (e) => Z.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (B(), N(Te, {
				key: 2,
				"origin-el": jt.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: H[31] ||= (e) => Q.value = !1
			}, {
				head: G(() => [...H[90] ||= [I("div", { class: "share-component-gallery__morph-head" }, [I("strong", null, "MorphSheet")], -1)]]),
				default: G(() => [H[91] ||= I("div", { class: "share-component-gallery__overlay-content" }, [I("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : P("", !0)
		]));
	}
}, [["__scopeId", "data-v-b30040d7"]]);
//#endregion
export { q as COMPONENT_GALLERY_ALIASES, je as COMPONENT_GALLERY_COMPONENTS, J as ComponentGallery };
