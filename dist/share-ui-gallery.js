import { C as e, D as t, E as ee, J as te, O as ne, R as n, S as r, T as i, U as re, W as ie, _ as ae, a as oe, at as a, b as o, c as se, ct as s, d as c, dt as l, f as u, ft as d, g as f, i as p, it as m, lt as h, n as ce, nt as le, o as ue, ot as de, p as fe, q as g, r as pe, rt as me, s as _, st as he, t as ge, tt as _e, u as ve, ut as v, v as ye, x as be, y as xe, z as Se } from "./FormTextarea-DfLz-IQJ.js";
import { createBlock as y, createCommentVNode as b, createElementBlock as Ce, createElementVNode as x, createTextVNode as S, createVNode as C, normalizeClass as w, openBlock as T, reactive as E, ref as D, toDisplayString as O, unref as k, withCtx as A, withModifiers as j } from "vue";
//#region src/lib/componentGalleryCatalog.js
var M = Object.freeze(/* @__PURE__ */ "BaseTile.SectionList.AddButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput".split(".")), N = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), we = { class: "share-component-gallery" }, Te = { class: "share-component-gallery__header" }, Ee = { class: "share-component-gallery__eyebrow" }, De = { class: "share-component-gallery__section" }, Oe = { class: "share-component-gallery__grid" }, ke = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile SectionLabel"
}, Ae = { class: "share-component-gallery__tile-row" }, je = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Me = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton"
}, Ne = { class: "share-component-gallery__row" }, Pe = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Fe = { class: "share-component-gallery__section" }, Ie = { class: "share-component-gallery__grid" }, Le = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, P = { class: "share-component-gallery__stack" }, Re = { class: "share-component-gallery__checkbox-row" }, ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Be = { class: "share-component-gallery__stack" }, Ve = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, He = { class: "share-component-gallery__slider" }, Ue = { class: "share-component-gallery__section" }, We = { class: "share-component-gallery__grid" }, Ge = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Ke = { class: "share-component-gallery__form-grid" }, qe = { class: "share-component-gallery__section" }, Je = { class: "share-component-gallery__grid" }, Ye = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Xe = { class: "share-component-gallery__stack" }, Ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, $e = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, et = { class: "share-component-gallery__section" }, tt = { class: "share-component-gallery__grid" }, nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, rt = ["onMousedown"], it = ["onMousedown"], at = { class: "share-component-gallery__preview" }, ot = { class: "share-component-gallery__rich-node" }, st = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, ct = { class: "share-component-gallery__section" }, lt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, ut = { class: "share-component-gallery__chrome" }, dt = { class: "share-component-gallery__section" }, ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, pt = { class: "share-component-gallery__row" }, F = /*#__PURE__*/ d({
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
	setup(d) {
		let N = M.length, F = D(!0), I = D(!0), L = D("md"), R = D("preview"), z = D(62), B = D("rare"), V = D("#7c5ce2"), H = D("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), U = D(!0), W = D(!1), G = D(null), K = D(!1), q = D(!1), J = D(!1), Y = D(!1), X = D(!1), Z = D(!1), Q = D(null), mt = [
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
		], ht = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], gt = [
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
		], _t = [
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
		function vt(e) {
			return `${e} МБ`;
		}
		function yt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (E, D) => (T(), Ce("div", we, [
			x("header", Te, [x("div", null, [
				x("p", Ee, "share-ui · " + O(k(N)) + " компонентов", 1),
				x("h1", null, O(d.title), 1),
				x("p", null, O(d.description), 1)
			]), D[30] ||= x("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			x("section", De, [C(m, {
				title: "Поверхности и действия",
				border: ""
			}), x("div", Oe, [
				x("article", ke, [D[33] ||= x("h2", null, "BaseTile", -1), x("div", Ae, [C(l, {
					strip: "",
					tint: "",
					interactive: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...D[31] ||= [x("strong", null, "Акцентная плитка", -1), x("span", null, "strip · tint · interactive", -1)]]),
					_: 1
				}), C(l, {
					framed: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...D[32] ||= [x("strong", null, "Рамка", -1), x("span", null, "framed", -1)]]),
					_: 1
				})])]),
				x("article", je, [
					D[37] ||= x("h2", null, "SectionList", -1),
					C(v, { title: "Записи" }, {
						footer: A(() => [C(h, { label: "Добавить запись" })]),
						default: A(() => [D[34] ||= x("div", { style: { padding: "12px 0" } }, "Первая запись", -1), D[35] ||= x("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					C(v, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: A(() => [...D[36] ||= [x("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), x("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				x("article", Me, [D[38] ||= x("h2", null, "Кнопки элементов", -1), x("div", Ne, [
					C(h, { label: "Добавить элемент" }),
					C(h, {
						label: "Добавить",
						variant: "icon"
					}),
					C(a, { label: "Удалить" }),
					C(a, {
						label: "Удалить",
						variant: "boxed"
					}),
					C(a, {
						label: "Удалить запись",
						icon: "trash"
					}),
					C(a, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					C(a, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				x("article", Pe, [D[39] ||= x("h2", null, "SegmentDonutChart", -1), C(me, {
					segments: _t,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": vt
				})])
			])]),
			x("section", Fe, [C(m, {
				title: "Переключатели",
				border: ""
			}), x("div", Ie, [
				x("article", Le, [D[41] ||= x("h2", null, "Boolean controls", -1), x("div", P, [C(_e, {
					modelValue: F.value,
					"onUpdate:modelValue": D[0] ||= (e) => F.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), x("label", Re, [C(he, {
					modelValue: I.value,
					"onUpdate:modelValue": D[1] ||= (e) => I.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), D[40] ||= S(" Выбрать элемент ", -1)])])]),
				x("article", ze, [D[42] ||= x("h2", null, "Segmented controls", -1), x("div", Be, [C(de, {
					modelValue: L.value,
					"onUpdate:modelValue": D[2] ||= (e) => L.value = e,
					options: mt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), C(le, {
					modelValue: R.value,
					"onUpdate:modelValue": D[3] ||= (e) => R.value = e,
					tabs: ht,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				x("article", Ve, [D[43] ||= x("h2", null, "AppSlider", -1), x("div", He, [C(s, {
					modelValue: z.value,
					"onUpdate:modelValue": D[4] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), x("strong", null, O(z.value), 1)])])
			])]),
			x("section", Ue, [C(m, {
				title: "Формы",
				border: ""
			}), x("div", We, [x("article", Ge, [
				D[45] ||= x("h2", null, "Form primitives", -1),
				x("div", Ke, [
					C(p, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: A(() => [C(ue, {
							value: $.name,
							"onUpdate:value": D[5] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					C(p, {
						label: "Количество",
						vertical: ""
					}, {
						default: A(() => [C(pe, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: D[6] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					C(p, {
						label: "Тип",
						vertical: ""
					}, {
						default: A(() => [C(ce, {
							value: $.type,
							"onUpdate:value": D[7] ||= (e) => $.type = e
						}, {
							default: A(() => [...D[44] ||= [x("option", { value: "base" }, "Основной", -1), x("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					C(p, {
						label: "Описание",
						vertical: ""
					}, {
						default: A(() => [C(ge, {
							value: $.description,
							"onUpdate:value": D[8] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				C(_, {
					"submit-text": "Сохранить",
					onCancel: yt
				})
			])])]),
			x("section", qe, [C(m, {
				title: "Выбор значений и floating UI",
				border: ""
			}), x("div", Je, [
				x("article", Ye, [D[46] ||= x("h2", null, "Selectors", -1), x("div", Xe, [C(n, {
					modelValue: B.value,
					"onUpdate:modelValue": D[9] ||= (e) => B.value = e,
					options: gt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), C(Se, {
					modelValue: V.value,
					"onUpdate:modelValue": D[10] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				x("article", Ze, [
					D[48] ||= x("h2", null, "BasePopover", -1),
					x("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: D[11] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					C(ie, {
						open: W.value,
						anchor: G.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": D[12] ||= (e) => W.value = e
					}, {
						default: A(() => [...D[47] ||= [x("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				x("article", Qe, [D[54] ||= x("h2", null, "ActionMenu", -1), C(te, { title: "Действия" }, {
					default: A(() => [
						C(g, { tone: "accent" }, {
							default: A(() => [...D[49] ||= [S("Редактировать", -1)]]),
							_: 1
						}),
						C(re, { label: "Перемещение" }, {
							trigger: A(({ open: e }) => [C(g, {
								submenu: "",
								"submenu-open": e
							}, {
								default: A(() => [...D[50] ||= [S("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: A(() => [C(g, null, {
								default: A(() => [...D[51] ||= [S("В начало", -1)]]),
								_: 1
							}), C(g, null, {
								default: A(() => [...D[52] ||= [S("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						C(g, { tone: "danger" }, {
							default: A(() => [...D[53] ||= [S("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				x("article", $e, [D[57] ||= x("h2", null, "AccountMenu", -1), C(ee, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: A(({ close: e }) => [C(g, { onClick: e }, {
						default: A(() => [...D[55] ||= [S("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), C(g, {
						tone: "danger",
						onClick: e
					}, {
						default: A(() => [...D[56] ||= [S("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			x("section", et, [C(m, {
				title: "Редакторы и rich text",
				border: ""
			}), x("div", tt, [x("article", nt, [
				D[58] ||= x("h2", null, "Rich text", -1),
				C(t, {
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
					}, "↗", 40, rt), x("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: j((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, it)]),
					_: 1
				}, 8, ["modelValue"]),
				x("div", at, [C(ne, { html: H.value }, {
					node: A(({ node: e }) => [x("strong", ot, O(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), x("article", st, [D[61] ||= x("h2", null, "Editor composition", -1), C(l, null, {
				default: A(() => [C(xe, { title: "Параметры" }, {
					default: A(() => [C(ae, { title: "Основное" }, {
						default: A(() => [C(ye, { title: "Значение" }, {
							actions: A(() => [...D[59] ||= [x("span", null, "12", -1)]]),
							_: 1
						}), C(s, {
							modelValue: z.value,
							"onUpdate:modelValue": D[14] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), C(f, null, {
						default: A(() => [D[60] ||= S("Итого: ", -1), x("strong", null, O(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			x("section", ct, [C(m, {
				title: "Каркас приложения",
				border: ""
			}), x("article", lt, [D[67] ||= x("h2", null, "Navigation composition", -1), x("div", ut, [C(i, {
				class: w(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": U.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: A(() => [C(e, {
					modelValue: U.value,
					"onUpdate:modelValue": D[15] ||= (e) => U.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: A(() => [C(r, {
						as: "div",
						label: "share-ui"
					}, {
						icon: A(() => [...D[62] ||= [x("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: A(() => [
						C(o, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: A(() => [...D[63] ||= [x("span", null, "⌂", -1)]]),
							_: 1
						}),
						C(be, { label: "Примеры" }),
						C(o, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: A(() => [...D[64] ||= [x("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: A(() => [...D[65] ||= [x("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: A(() => [D[66] ||= x("div", { class: "share-component-gallery__chrome-content" }, [
					x("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					x("strong", null, "AppShell + AppSidebar"),
					x("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			x("section", dt, [C(m, {
				title: "Оверлеи и morph",
				border: ""
			}), x("article", ft, [D[68] ||= x("h2", null, "Интерактивные примеры", -1), x("div", pt, [
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
				default: A(() => [...D[69] ||= [x("div", { class: "share-component-gallery__overlay-content" }, [x("h2", null, "AppModal"), x("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : b("", !0),
			q.value ? (T(), y(u, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: D[25] ||= (e) => q.value = !1
			}, {
				footer: A(() => [C(_, {
					onCancel: D[23] ||= (e) => q.value = !1,
					onSubmit: D[24] ||= (e) => q.value = !1
				})]),
				default: A(() => [D[70] ||= x("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : b("", !0),
			C(ve, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: D[26] ||= (e) => J.value = !1
			}, {
				default: A(() => [...D[71] ||= [x("div", { class: "share-component-gallery__overlay-content" }, [x("h2", null, "ModalShell"), x("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			C(c, {
				open: Y.value,
				"onUpdate:open": D[27] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			C(oe, {
				open: X.value,
				"onUpdate:open": D[28] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (T(), y(se, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: D[29] ||= (e) => Z.value = !1
			}, {
				head: A(() => [...D[72] ||= [x("div", { class: "share-component-gallery__morph-head" }, [x("strong", null, "MorphSheet")], -1)]]),
				default: A(() => [D[73] ||= x("div", { class: "share-component-gallery__overlay-content" }, [x("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : b("", !0)
		]));
	}
}, [["__scopeId", "data-v-cdb9710b"]]);
//#endregion
export { N as COMPONENT_GALLERY_ALIASES, M as COMPONENT_GALLERY_COMPONENTS, F as ComponentGallery };
