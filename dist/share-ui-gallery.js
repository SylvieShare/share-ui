import { $ as e, A as t, C as ee, D as te, E as ne, J as re, M as ie, N as ae, O as oe, Q as n, S as se, T as r, U as ce, W as le, Y as ue, _ as de, _t as i, a as fe, c as a, ct as pe, d as o, dt as s, f as c, ft as l, g as u, gt as d, h as me, ht as f, i as p, j as he, l as ge, lt as m, m as _e, mt as h, n as g, o as ve, ot as ye, pt as _, r as v, s as be, st as xe, t as y, u as Se, ut as b, v as Ce, w as we, x as Te } from "./ActionButton-p9h_jbCw.js";
import { createBlock as x, createCommentVNode as S, createElementBlock as Ee, createElementVNode as C, createTextVNode as w, createVNode as T, normalizeClass as E, openBlock as D, reactive as De, ref as O, toDisplayString as k, unref as Oe, withCtx as A, withModifiers as j } from "vue";
//#region src/lib/componentGalleryCatalog.js
var M = Object.freeze(/* @__PURE__ */ "LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.SectionList.AddButton.ActionButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), N = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), ke = { class: "share-component-gallery" }, Ae = { class: "share-component-gallery__header" }, je = { class: "share-component-gallery__eyebrow" }, Me = { class: "share-component-gallery__section" }, Ne = { class: "share-component-gallery__grid" }, Pe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile SectionLabel"
}, Fe = { class: "share-component-gallery__tile-row" }, Ie = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, Le = { class: "share-component-gallery__row" }, Re = { class: "share-component-gallery__row" }, ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, Be = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Ve = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton"
}, P = { class: "share-component-gallery__row" }, He = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Ue = { class: "share-component-gallery__section" }, We = { class: "share-component-gallery__grid" }, Ge = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Ke = { class: "share-component-gallery__stack" }, qe = { class: "share-component-gallery__checkbox-row" }, Je = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Ye = { class: "share-component-gallery__stack" }, Xe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Ze = { class: "share-component-gallery__slider" }, Qe = { class: "share-component-gallery__section" }, $e = { class: "share-component-gallery__grid" }, et = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, tt = { class: "share-component-gallery__form-grid" }, nt = { class: "share-component-gallery__section" }, rt = { class: "share-component-gallery__grid" }, it = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, at = { class: "share-component-gallery__stack" }, ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, st = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, lt = { class: "share-component-gallery__section" }, ut = { class: "share-component-gallery__grid" }, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, ft = ["onMousedown"], pt = ["onMousedown"], mt = { class: "share-component-gallery__preview" }, ht = { class: "share-component-gallery__rich-node" }, gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, _t = { class: "share-component-gallery__section" }, vt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, yt = { class: "share-component-gallery__chrome" }, bt = { class: "share-component-gallery__section" }, xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, St = { class: "share-component-gallery__row" }, F = /*#__PURE__*/ i({
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
	setup(i) {
		let N = M.length, F = O(!0), I = O(!0), L = O("md"), R = O("preview"), z = O(62), B = O("rare"), V = O("#7c5ce2"), H = O("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), U = O(!0), W = O(!1), G = O(null), K = O(!1), q = O(!1), J = O(!1), Y = O(!1), X = O(!1), Z = O(!1), Q = O(null), Ct = [
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
		], wt = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Tt = [
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
		], Et = [
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
		], $ = De({
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function Dt(e) {
			return `${e} МБ`;
		}
		function Ot() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (De, O) => (D(), Ee("div", ke, [
			C("header", Ae, [C("div", null, [
				C("p", je, "share-ui · " + k(Oe(N)) + " компонентов", 1),
				C("h1", null, k(i.title), 1),
				C("p", null, k(i.description), 1)
			]), O[30] ||= C("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			C("section", Me, [T(m, {
				title: "Поверхности и действия",
				border: ""
			}), C("div", Ne, [
				C("article", Pe, [O[33] ||= C("h2", null, "BaseTile", -1), C("div", Fe, [T(d, {
					strip: "",
					tint: "",
					interactive: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...O[31] ||= [C("strong", null, "Акцентная плитка", -1), C("span", null, "strip · tint · interactive", -1)]]),
					_: 1
				}), T(d, {
					framed: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...O[32] ||= [C("strong", null, "Рамка", -1), C("span", null, "framed", -1)]]),
					_: 1
				})])]),
				C("article", Ie, [
					O[34] ||= C("h2", null, "Загрузка", -1),
					T(g, { label: "Открываем раздел…" }),
					T(g, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					T(u, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					C("div", Le, [
						T(u, {
							label: "Загрузка",
							size: "sm"
						}),
						T(u, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						T(u, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					C("div", Re, [T(v, {
						width: "36px",
						height: "36px",
						round: ""
					}), T(v, { width: "60%" })])
				]),
				C("article", ze, [
					O[35] ||= C("h2", null, "InlineEdit", -1),
					T(p, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					T(p, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					T(p, {
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
				C("article", Be, [
					O[39] ||= C("h2", null, "SectionList", -1),
					T(f, { title: "Записи" }, {
						footer: A(() => [T(h, { label: "Добавить запись" })]),
						default: A(() => [O[36] ||= C("div", { style: { padding: "12px 0" } }, "Первая запись", -1), O[37] ||= C("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					T(f, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: A(() => [...O[38] ||= [C("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), C("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				C("article", Ve, [O[45] ||= C("h2", null, "Кнопки элементов", -1), C("div", P, [
					T(y, null, {
						default: A(() => [...O[40] ||= [w("Основное действие", -1)]]),
						_: 1
					}),
					T(y, { variant: "secondary" }, {
						default: A(() => [...O[41] ||= [w("Вторичное", -1)]]),
						_: 1
					}),
					T(y, { variant: "quiet" }, {
						default: A(() => [...O[42] ||= [w("Тихое", -1)]]),
						_: 1
					}),
					T(y, { disabled: "" }, {
						default: A(() => [...O[43] ||= [w("Недоступно", -1)]]),
						_: 1
					}),
					T(y, {
						loading: "",
						"loading-label": "Загрузка"
					}, {
						default: A(() => [...O[44] ||= [w("Загрузка", -1)]]),
						_: 1
					}),
					T(h, { label: "Добавить элемент" }),
					T(h, {
						label: "Добавить",
						variant: "icon"
					}),
					T(b, { label: "Удалить" }),
					T(b, {
						label: "Удалить",
						variant: "boxed"
					}),
					T(b, {
						label: "Удалить запись",
						icon: "trash"
					}),
					T(b, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					T(b, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				C("article", He, [O[46] ||= C("h2", null, "SegmentDonutChart", -1), T(pe, {
					segments: Et,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Dt
				})])
			])]),
			C("section", Ue, [T(m, {
				title: "Переключатели",
				border: ""
			}), C("div", We, [
				C("article", Ge, [O[48] ||= C("h2", null, "Boolean controls", -1), C("div", Ke, [T(ye, {
					modelValue: F.value,
					"onUpdate:modelValue": O[0] ||= (e) => F.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), C("label", qe, [T(l, {
					modelValue: I.value,
					"onUpdate:modelValue": O[1] ||= (e) => I.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), O[47] ||= w(" Выбрать элемент ", -1)])])]),
				C("article", Je, [O[49] ||= C("h2", null, "Segmented controls", -1), C("div", Ye, [T(s, {
					modelValue: L.value,
					"onUpdate:modelValue": O[2] ||= (e) => L.value = e,
					options: Ct,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), T(xe, {
					modelValue: R.value,
					"onUpdate:modelValue": O[3] ||= (e) => R.value = e,
					tabs: wt,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				C("article", Xe, [O[50] ||= C("h2", null, "AppSlider", -1), C("div", Ze, [T(_, {
					modelValue: z.value,
					"onUpdate:modelValue": O[4] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), C("strong", null, k(z.value), 1)])])
			])]),
			C("section", Qe, [T(m, {
				title: "Формы",
				border: ""
			}), C("div", $e, [C("article", et, [
				O[52] ||= C("h2", null, "Form primitives", -1),
				C("div", tt, [
					T(a, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: A(() => [T(Se, {
							value: $.name,
							"onUpdate:value": O[5] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					T(a, {
						label: "Количество",
						vertical: ""
					}, {
						default: A(() => [T(be, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: O[6] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					T(a, {
						label: "Тип",
						vertical: ""
					}, {
						default: A(() => [T(ve, {
							value: $.type,
							"onUpdate:value": O[7] ||= (e) => $.type = e
						}, {
							default: A(() => [...O[51] ||= [C("option", { value: "base" }, "Основной", -1), C("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					T(a, {
						label: "Описание",
						vertical: ""
					}, {
						default: A(() => [T(fe, {
							value: $.description,
							"onUpdate:value": O[8] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				T(o, {
					"submit-text": "Сохранить",
					onCancel: Ot
				})
			])])]),
			C("section", nt, [T(m, {
				title: "Выбор значений и floating UI",
				border: ""
			}), C("div", rt, [
				C("article", it, [O[53] ||= C("h2", null, "Selectors", -1), C("div", at, [T(ce, {
					modelValue: B.value,
					"onUpdate:modelValue": O[9] ||= (e) => B.value = e,
					options: Tt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), T(le, {
					modelValue: V.value,
					"onUpdate:modelValue": O[10] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				C("article", ot, [
					O[55] ||= C("h2", null, "BasePopover", -1),
					C("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: O[11] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					T(ue, {
						open: W.value,
						anchor: G.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": O[12] ||= (e) => W.value = e
					}, {
						default: A(() => [...O[54] ||= [C("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				C("article", st, [O[61] ||= C("h2", null, "ActionMenu", -1), T(e, { title: "Действия" }, {
					default: A(() => [
						T(n, { tone: "accent" }, {
							default: A(() => [...O[56] ||= [w("Редактировать", -1)]]),
							_: 1
						}),
						T(re, { label: "Перемещение" }, {
							trigger: A(({ open: e }) => [T(n, {
								submenu: "",
								"submenu-open": e
							}, {
								default: A(() => [...O[57] ||= [w("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: A(() => [T(n, null, {
								default: A(() => [...O[58] ||= [w("В начало", -1)]]),
								_: 1
							}), T(n, null, {
								default: A(() => [...O[59] ||= [w("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						T(n, { tone: "danger" }, {
							default: A(() => [...O[60] ||= [w("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				C("article", ct, [O[64] ||= C("h2", null, "AccountMenu", -1), T(he, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: A(({ close: e }) => [T(n, { onClick: e }, {
						default: A(() => [...O[62] ||= [w("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), T(n, {
						tone: "danger",
						onClick: e
					}, {
						default: A(() => [...O[63] ||= [w("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			C("section", lt, [T(m, {
				title: "Редакторы и rich text",
				border: ""
			}), C("div", ut, [C("article", dt, [
				O[65] ||= C("h2", null, "Rich text", -1),
				T(ie, {
					ref: "richEditor",
					modelValue: H.value,
					"onUpdate:modelValue": O[13] ||= (e) => H.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: A(({ editor: e, insertRichNode: t }) => [C("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: j((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, ft), C("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: j((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, pt)]),
					_: 1
				}, 8, ["modelValue"]),
				C("div", mt, [T(ae, { html: H.value }, {
					node: A(({ node: e }) => [C("strong", ht, k(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), C("article", gt, [O[68] ||= C("h2", null, "Editor composition", -1), T(d, null, {
				default: A(() => [T(we, { title: "Параметры" }, {
					default: A(() => [T(se, { title: "Основное" }, {
						default: A(() => [T(ee, { title: "Значение" }, {
							actions: A(() => [...O[66] ||= [C("span", null, "12", -1)]]),
							_: 1
						}), T(_, {
							modelValue: z.value,
							"onUpdate:modelValue": O[14] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), T(Te, null, {
						default: A(() => [O[67] ||= w("Итого: ", -1), C("strong", null, k(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			C("section", _t, [T(m, {
				title: "Каркас приложения",
				border: ""
			}), C("article", vt, [O[74] ||= C("h2", null, "Navigation composition", -1), C("div", yt, [T(t, {
				class: E(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": U.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: A(() => [T(oe, {
					modelValue: U.value,
					"onUpdate:modelValue": O[15] ||= (e) => U.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: A(() => [T(te, {
						as: "div",
						label: "share-ui"
					}, {
						icon: A(() => [...O[69] ||= [C("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: A(() => [
						T(r, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: A(() => [...O[70] ||= [C("span", null, "⌂", -1)]]),
							_: 1
						}),
						T(ne, { label: "Примеры" }),
						T(r, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: A(() => [...O[71] ||= [C("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: A(() => [...O[72] ||= [C("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: A(() => [O[73] ||= C("div", { class: "share-component-gallery__chrome-content" }, [
					C("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					C("strong", null, "AppShell + AppSidebar"),
					C("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			C("section", bt, [T(m, {
				title: "Оверлеи и morph",
				border: ""
			}), C("article", xt, [O[75] ||= C("h2", null, "Интерактивные примеры", -1), C("div", St, [
				C("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[16] ||= (e) => K.value = !0
				}, "AppModal"),
				C("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[17] ||= (e) => q.value = !0
				}, "AppModalFrame"),
				C("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[18] ||= (e) => J.value = !0
				}, "ModalShell"),
				C("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[19] ||= (e) => Y.value = !0
				}, "ConfirmDialog"),
				C("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[20] ||= (e) => X.value = !0
				}, "TextPromptDialog"),
				C("button", {
					ref_key: "morphOrigin",
					ref: Q,
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[21] ||= (e) => Z.value = !0
				}, "MorphSheet", 512)
			])])]),
			K.value ? (D(), x(Ce, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: O[22] ||= (e) => K.value = !1
			}, {
				default: A(() => [...O[76] ||= [C("div", { class: "share-component-gallery__overlay-content" }, [C("h2", null, "AppModal"), C("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : S("", !0),
			q.value ? (D(), x(de, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: O[25] ||= (e) => q.value = !1
			}, {
				footer: A(() => [T(o, {
					onCancel: O[23] ||= (e) => q.value = !1,
					onSubmit: O[24] ||= (e) => q.value = !1
				})]),
				default: A(() => [O[77] ||= C("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : S("", !0),
			T(_e, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: O[26] ||= (e) => J.value = !1
			}, {
				default: A(() => [...O[78] ||= [C("div", { class: "share-component-gallery__overlay-content" }, [C("h2", null, "ModalShell"), C("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			T(me, {
				open: Y.value,
				"onUpdate:open": O[27] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			T(ge, {
				open: X.value,
				"onUpdate:open": O[28] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (D(), x(c, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: O[29] ||= (e) => Z.value = !1
			}, {
				head: A(() => [...O[79] ||= [C("div", { class: "share-component-gallery__morph-head" }, [C("strong", null, "MorphSheet")], -1)]]),
				default: A(() => [O[80] ||= C("div", { class: "share-component-gallery__overlay-content" }, [C("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : S("", !0)
		]));
	}
}, [["__scopeId", "data-v-1ea5cc19"]]);
//#endregion
export { N as COMPONENT_GALLERY_ALIASES, M as COMPONENT_GALLERY_COMPONENTS, F as ComponentGallery };
