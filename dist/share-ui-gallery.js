import { B as e, C as t, D as n, E as ee, G as te, J as r, O as ne, S as re, W as ie, Y as ae, _ as oe, a as i, at as a, b as o, c as s, ct as c, d as l, dt as u, f as se, ft as d, i as ce, it as le, k as ue, l as de, lt as f, m as fe, n as pe, nt as me, o as he, ot as p, p as ge, pt as m, r as _e, rt as ve, s as ye, st as h, t as g, ut as _, v as be, w as xe, x as v, y as Se, z as Ce } from "./InlineEdit-DXcHt4O2.js";
import { createBlock as y, createCommentVNode as b, createElementBlock as we, createElementVNode as x, createTextVNode as S, createVNode as C, normalizeClass as w, openBlock as T, reactive as E, ref as D, toDisplayString as O, unref as k, withCtx as A, withModifiers as j } from "vue";
//#region src/lib/componentGalleryCatalog.js
var M = Object.freeze(/* @__PURE__ */ "BaseTile.SectionList.AddButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), N = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Te = { class: "share-component-gallery" }, Ee = { class: "share-component-gallery__header" }, De = { class: "share-component-gallery__eyebrow" }, Oe = { class: "share-component-gallery__section" }, ke = { class: "share-component-gallery__grid" }, Ae = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile SectionLabel"
}, je = { class: "share-component-gallery__tile-row" }, Me = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, Ne = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Pe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton"
}, Fe = { class: "share-component-gallery__row" }, Ie = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Le = { class: "share-component-gallery__section" }, Re = { class: "share-component-gallery__grid" }, ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Be = { class: "share-component-gallery__stack" }, Ve = { class: "share-component-gallery__checkbox-row" }, He = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Ue = { class: "share-component-gallery__stack" }, We = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Ge = { class: "share-component-gallery__slider" }, Ke = { class: "share-component-gallery__section" }, qe = { class: "share-component-gallery__grid" }, Je = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, P = { class: "share-component-gallery__form-grid" }, Ye = { class: "share-component-gallery__section" }, Xe = { class: "share-component-gallery__grid" }, Ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Qe = { class: "share-component-gallery__stack" }, $e = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, nt = { class: "share-component-gallery__section" }, rt = { class: "share-component-gallery__grid" }, it = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, at = ["onMousedown"], ot = ["onMousedown"], st = { class: "share-component-gallery__preview" }, ct = { class: "share-component-gallery__rich-node" }, lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, ut = { class: "share-component-gallery__section" }, dt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, ft = { class: "share-component-gallery__chrome" }, pt = { class: "share-component-gallery__section" }, mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, ht = { class: "share-component-gallery__row" }, F = /*#__PURE__*/ m({
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
		let N = M.length, F = D(!0), I = D(!0), L = D("md"), R = D("preview"), z = D(62), B = D("rare"), V = D("#7c5ce2"), H = D("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), U = D(!0), W = D(!1), G = D(null), K = D(!1), q = D(!1), J = D(!1), Y = D(!1), X = D(!1), Z = D(!1), Q = D(null), gt = [
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
		], _t = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], vt = [
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
		], yt = [
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
		], $ = E({
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function bt(e) {
			return `${e} МБ`;
		}
		function xt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (E, D) => (T(), we("div", Te, [
			x("header", Ee, [x("div", null, [
				x("p", De, "share-ui · " + O(k(N)) + " компонентов", 1),
				x("h1", null, O(m.title), 1),
				x("p", null, O(m.description), 1)
			]), D[30] ||= x("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			x("section", Oe, [C(a, {
				title: "Поверхности и действия",
				border: ""
			}), x("div", ke, [
				x("article", Ae, [D[33] ||= x("h2", null, "BaseTile", -1), x("div", je, [C(d, {
					strip: "",
					tint: "",
					interactive: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...D[31] ||= [x("strong", null, "Акцентная плитка", -1), x("span", null, "strip · tint · interactive", -1)]]),
					_: 1
				}), C(d, {
					framed: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...D[32] ||= [x("strong", null, "Рамка", -1), x("span", null, "framed", -1)]]),
					_: 1
				})])]),
				x("article", Me, [
					D[34] ||= x("h2", null, "InlineEdit", -1),
					C(g, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					C(g, {
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
				x("article", Ne, [
					D[38] ||= x("h2", null, "SectionList", -1),
					C(u, { title: "Записи" }, {
						footer: A(() => [C(_, { label: "Добавить запись" })]),
						default: A(() => [D[35] ||= x("div", { style: { padding: "12px 0" } }, "Первая запись", -1), D[36] ||= x("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					C(u, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: A(() => [...D[37] ||= [x("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), x("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				x("article", Pe, [D[39] ||= x("h2", null, "Кнопки элементов", -1), x("div", Fe, [
					C(_, { label: "Добавить элемент" }),
					C(_, {
						label: "Добавить",
						variant: "icon"
					}),
					C(p, { label: "Удалить" }),
					C(p, {
						label: "Удалить",
						variant: "boxed"
					}),
					C(p, {
						label: "Удалить запись",
						icon: "trash"
					}),
					C(p, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					C(p, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				x("article", Ie, [D[40] ||= x("h2", null, "SegmentDonutChart", -1), C(le, {
					segments: yt,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": bt
				})])
			])]),
			x("section", Le, [C(a, {
				title: "Переключатели",
				border: ""
			}), x("div", Re, [
				x("article", ze, [D[42] ||= x("h2", null, "Boolean controls", -1), x("div", Be, [C(me, {
					modelValue: F.value,
					"onUpdate:modelValue": D[0] ||= (e) => F.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), x("label", Ve, [C(c, {
					modelValue: I.value,
					"onUpdate:modelValue": D[1] ||= (e) => I.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), D[41] ||= S(" Выбрать элемент ", -1)])])]),
				x("article", He, [D[43] ||= x("h2", null, "Segmented controls", -1), x("div", Ue, [C(h, {
					modelValue: L.value,
					"onUpdate:modelValue": D[2] ||= (e) => L.value = e,
					options: gt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), C(ve, {
					modelValue: R.value,
					"onUpdate:modelValue": D[3] ||= (e) => R.value = e,
					tabs: _t,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				x("article", We, [D[44] ||= x("h2", null, "AppSlider", -1), x("div", Ge, [C(f, {
					modelValue: z.value,
					"onUpdate:modelValue": D[4] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), x("strong", null, O(z.value), 1)])])
			])]),
			x("section", Ke, [C(a, {
				title: "Формы",
				border: ""
			}), x("div", qe, [x("article", Je, [
				D[46] ||= x("h2", null, "Form primitives", -1),
				x("div", P, [
					C(i, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: A(() => [C(ye, {
							value: $.name,
							"onUpdate:value": D[5] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					C(i, {
						label: "Количество",
						vertical: ""
					}, {
						default: A(() => [C(ce, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: D[6] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					C(i, {
						label: "Тип",
						vertical: ""
					}, {
						default: A(() => [C(_e, {
							value: $.type,
							"onUpdate:value": D[7] ||= (e) => $.type = e
						}, {
							default: A(() => [...D[45] ||= [x("option", { value: "base" }, "Основной", -1), x("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					C(i, {
						label: "Описание",
						vertical: ""
					}, {
						default: A(() => [C(pe, {
							value: $.description,
							"onUpdate:value": D[8] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				C(s, {
					"submit-text": "Сохранить",
					onCancel: xt
				})
			])])]),
			x("section", Ye, [C(a, {
				title: "Выбор значений и floating UI",
				border: ""
			}), x("div", Xe, [
				x("article", Ze, [D[47] ||= x("h2", null, "Selectors", -1), x("div", Qe, [C(Ce, {
					modelValue: B.value,
					"onUpdate:modelValue": D[9] ||= (e) => B.value = e,
					options: vt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), C(e, {
					modelValue: V.value,
					"onUpdate:modelValue": D[10] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				x("article", $e, [
					D[49] ||= x("h2", null, "BasePopover", -1),
					x("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: D[11] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					C(te, {
						open: W.value,
						anchor: G.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": D[12] ||= (e) => W.value = e
					}, {
						default: A(() => [...D[48] ||= [x("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				x("article", et, [D[55] ||= x("h2", null, "ActionMenu", -1), C(ae, { title: "Действия" }, {
					default: A(() => [
						C(r, { tone: "accent" }, {
							default: A(() => [...D[50] ||= [S("Редактировать", -1)]]),
							_: 1
						}),
						C(ie, { label: "Перемещение" }, {
							trigger: A(({ open: e }) => [C(r, {
								submenu: "",
								"submenu-open": e
							}, {
								default: A(() => [...D[51] ||= [S("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: A(() => [C(r, null, {
								default: A(() => [...D[52] ||= [S("В начало", -1)]]),
								_: 1
							}), C(r, null, {
								default: A(() => [...D[53] ||= [S("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						C(r, { tone: "danger" }, {
							default: A(() => [...D[54] ||= [S("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				x("article", tt, [D[58] ||= x("h2", null, "AccountMenu", -1), C(n, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: A(({ close: e }) => [C(r, { onClick: e }, {
						default: A(() => [...D[56] ||= [S("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), C(r, {
						tone: "danger",
						onClick: e
					}, {
						default: A(() => [...D[57] ||= [S("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			x("section", nt, [C(a, {
				title: "Редакторы и rich text",
				border: ""
			}), x("div", rt, [x("article", it, [
				D[59] ||= x("h2", null, "Rich text", -1),
				C(ne, {
					ref: "richEditor",
					modelValue: H.value,
					"onUpdate:modelValue": D[13] ||= (e) => H.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: A(({ editor: e, insertRichNode: t }) => [x("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: j((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, at), x("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: j((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, ot)]),
					_: 1
				}, 8, ["modelValue"]),
				x("div", st, [C(ue, { html: H.value }, {
					node: A(({ node: e }) => [x("strong", ct, O(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), x("article", lt, [D[62] ||= x("h2", null, "Editor composition", -1), C(d, null, {
				default: A(() => [C(o, { title: "Параметры" }, {
					default: A(() => [C(be, { title: "Основное" }, {
						default: A(() => [C(Se, { title: "Значение" }, {
							actions: A(() => [...D[60] ||= [x("span", null, "12", -1)]]),
							_: 1
						}), C(f, {
							modelValue: z.value,
							"onUpdate:modelValue": D[14] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), C(oe, null, {
						default: A(() => [D[61] ||= S("Итого: ", -1), x("strong", null, O(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			x("section", ut, [C(a, {
				title: "Каркас приложения",
				border: ""
			}), x("article", dt, [D[68] ||= x("h2", null, "Navigation composition", -1), x("div", ft, [C(ee, {
				class: w(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": U.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: A(() => [C(xe, {
					modelValue: U.value,
					"onUpdate:modelValue": D[15] ||= (e) => U.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: A(() => [C(t, {
						as: "div",
						label: "share-ui"
					}, {
						icon: A(() => [...D[63] ||= [x("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: A(() => [
						C(v, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: A(() => [...D[64] ||= [x("span", null, "⌂", -1)]]),
							_: 1
						}),
						C(re, { label: "Примеры" }),
						C(v, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: A(() => [...D[65] ||= [x("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: A(() => [...D[66] ||= [x("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: A(() => [D[67] ||= x("div", { class: "share-component-gallery__chrome-content" }, [
					x("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					x("strong", null, "AppShell + AppSidebar"),
					x("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			x("section", pt, [C(a, {
				title: "Оверлеи и morph",
				border: ""
			}), x("article", mt, [D[69] ||= x("h2", null, "Интерактивные примеры", -1), x("div", ht, [
				x("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: D[16] ||= (e) => K.value = !0
				}, "AppModal"),
				x("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: D[17] ||= (e) => q.value = !0
				}, "AppModalFrame"),
				x("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: D[18] ||= (e) => J.value = !0
				}, "ModalShell"),
				x("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: D[19] ||= (e) => Y.value = !0
				}, "ConfirmDialog"),
				x("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: D[20] ||= (e) => X.value = !0
				}, "TextPromptDialog"),
				x("button", {
					ref_key: "morphOrigin",
					ref: Q,
					type: "button",
					class: "share-component-gallery__button",
					onClick: D[21] ||= (e) => Z.value = !0
				}, "MorphSheet", 512)
			])])]),
			K.value ? (T(), y(fe, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: D[22] ||= (e) => K.value = !1
			}, {
				default: A(() => [...D[70] ||= [x("div", { class: "share-component-gallery__overlay-content" }, [x("h2", null, "AppModal"), x("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : b("", !0),
			q.value ? (T(), y(ge, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: D[25] ||= (e) => q.value = !1
			}, {
				footer: A(() => [C(s, {
					onCancel: D[23] ||= (e) => q.value = !1,
					onSubmit: D[24] ||= (e) => q.value = !1
				})]),
				default: A(() => [D[71] ||= x("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : b("", !0),
			C(l, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: D[26] ||= (e) => J.value = !1
			}, {
				default: A(() => [...D[72] ||= [x("div", { class: "share-component-gallery__overlay-content" }, [x("h2", null, "ModalShell"), x("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			C(se, {
				open: Y.value,
				"onUpdate:open": D[27] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			C(he, {
				open: X.value,
				"onUpdate:open": D[28] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (T(), y(de, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: D[29] ||= (e) => Z.value = !1
			}, {
				head: A(() => [...D[73] ||= [x("div", { class: "share-component-gallery__morph-head" }, [x("strong", null, "MorphSheet")], -1)]]),
				default: A(() => [D[74] ||= x("div", { class: "share-component-gallery__overlay-content" }, [x("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : b("", !0)
		]));
	}
}, [["__scopeId", "data-v-37a48c7c"]]);
//#endregion
export { N as COMPONENT_GALLERY_ALIASES, M as COMPONENT_GALLERY_COMPONENTS, F as ComponentGallery };
