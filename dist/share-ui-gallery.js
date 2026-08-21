import { C as e, D as t, E as ee, J as te, O as n, R as r, S as i, T as a, U as ne, W as re, _ as ie, a as ae, at as o, b as s, c as oe, ct as c, d as l, dt as u, f as d, g as f, i as p, it as m, lt as h, n as se, nt as ce, o as le, ot as ue, p as de, q as g, r as fe, rt as pe, s as _, st as me, t as he, tt as ge, u as _e, ut as v, v as ve, x as ye, y as be, z as xe } from "./FormTextarea-3fN9Wty2.js";
import { createBlock as y, createCommentVNode as b, createElementBlock as Se, createElementVNode as x, createTextVNode as S, createVNode as C, normalizeClass as w, openBlock as T, reactive as E, ref as D, toDisplayString as O, unref as k, withCtx as A, withModifiers as j } from "vue";
//#region src/lib/componentGalleryCatalog.js
var M = Object.freeze(/* @__PURE__ */ "BaseTile.AddButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput".split(".")), N = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Ce = { class: "share-component-gallery" }, we = { class: "share-component-gallery__header" }, Te = { class: "share-component-gallery__eyebrow" }, Ee = { class: "share-component-gallery__section" }, De = { class: "share-component-gallery__grid" }, Oe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile SectionLabel"
}, ke = { class: "share-component-gallery__tile-row" }, P = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton"
}, Ae = { class: "share-component-gallery__row" }, je = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Me = { class: "share-component-gallery__section" }, Ne = { class: "share-component-gallery__grid" }, Pe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Fe = { class: "share-component-gallery__stack" }, Ie = { class: "share-component-gallery__checkbox-row" }, Le = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Re = { class: "share-component-gallery__stack" }, ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Be = { class: "share-component-gallery__slider" }, Ve = { class: "share-component-gallery__section" }, He = { class: "share-component-gallery__grid" }, Ue = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, We = { class: "share-component-gallery__form-grid" }, Ge = { class: "share-component-gallery__section" }, Ke = { class: "share-component-gallery__grid" }, qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Je = { class: "share-component-gallery__stack" }, Ye = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Xe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Qe = { class: "share-component-gallery__section" }, $e = { class: "share-component-gallery__grid" }, et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, tt = ["onMousedown"], nt = ["onMousedown"], rt = { class: "share-component-gallery__preview" }, it = { class: "share-component-gallery__rich-node" }, at = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, ot = { class: "share-component-gallery__section" }, st = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, ct = { class: "share-component-gallery__chrome" }, lt = { class: "share-component-gallery__section" }, ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, dt = { class: "share-component-gallery__row" }, F = /*#__PURE__*/ u({
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
		let N = M.length, F = D(!0), I = D(!0), L = D("md"), R = D("preview"), z = D(62), B = D("rare"), V = D("#7c5ce2"), H = D("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), U = D(!0), W = D(!1), G = D(null), K = D(!1), q = D(!1), J = D(!1), Y = D(!1), X = D(!1), Z = D(!1), Q = D(null), ft = [
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
		], pt = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], mt = [
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
		], ht = [
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
		function gt(e) {
			return `${e} МБ`;
		}
		function _t() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (E, D) => (T(), Se("div", Ce, [
			x("header", we, [x("div", null, [
				x("p", Te, "share-ui · " + O(k(N)) + " компонентов", 1),
				x("h1", null, O(u.title), 1),
				x("p", null, O(u.description), 1)
			]), D[30] ||= x("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			x("section", Ee, [C(m, {
				title: "Поверхности и действия",
				border: ""
			}), x("div", De, [
				x("article", Oe, [D[33] ||= x("h2", null, "BaseTile", -1), x("div", ke, [C(v, {
					strip: "",
					tint: "",
					interactive: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...D[31] ||= [x("strong", null, "Акцентная плитка", -1), x("span", null, "strip · tint · interactive", -1)]]),
					_: 1
				}), C(v, {
					framed: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...D[32] ||= [x("strong", null, "Рамка", -1), x("span", null, "framed", -1)]]),
					_: 1
				})])]),
				x("article", P, [D[34] ||= x("h2", null, "Кнопки элементов", -1), x("div", Ae, [
					C(h, { label: "Добавить элемент" }),
					C(h, {
						label: "Добавить",
						variant: "icon"
					}),
					C(o, { label: "Удалить" }),
					C(o, {
						label: "Удалить",
						variant: "boxed"
					})
				])]),
				x("article", je, [D[35] ||= x("h2", null, "SegmentDonutChart", -1), C(pe, {
					segments: ht,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": gt
				})])
			])]),
			x("section", Me, [C(m, {
				title: "Переключатели",
				border: ""
			}), x("div", Ne, [
				x("article", Pe, [D[37] ||= x("h2", null, "Boolean controls", -1), x("div", Fe, [C(ge, {
					modelValue: F.value,
					"onUpdate:modelValue": D[0] ||= (e) => F.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), x("label", Ie, [C(me, {
					modelValue: I.value,
					"onUpdate:modelValue": D[1] ||= (e) => I.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), D[36] ||= S(" Выбрать элемент ", -1)])])]),
				x("article", Le, [D[38] ||= x("h2", null, "Segmented controls", -1), x("div", Re, [C(ue, {
					modelValue: L.value,
					"onUpdate:modelValue": D[2] ||= (e) => L.value = e,
					options: ft,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), C(ce, {
					modelValue: R.value,
					"onUpdate:modelValue": D[3] ||= (e) => R.value = e,
					tabs: pt,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				x("article", ze, [D[39] ||= x("h2", null, "AppSlider", -1), x("div", Be, [C(c, {
					modelValue: z.value,
					"onUpdate:modelValue": D[4] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), x("strong", null, O(z.value), 1)])])
			])]),
			x("section", Ve, [C(m, {
				title: "Формы",
				border: ""
			}), x("div", He, [x("article", Ue, [
				D[41] ||= x("h2", null, "Form primitives", -1),
				x("div", We, [
					C(p, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: A(() => [C(le, {
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
						default: A(() => [C(fe, {
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
						default: A(() => [C(se, {
							value: $.type,
							"onUpdate:value": D[7] ||= (e) => $.type = e
						}, {
							default: A(() => [...D[40] ||= [x("option", { value: "base" }, "Основной", -1), x("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					C(p, {
						label: "Описание",
						vertical: ""
					}, {
						default: A(() => [C(he, {
							value: $.description,
							"onUpdate:value": D[8] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				C(_, {
					"submit-text": "Сохранить",
					onCancel: _t
				})
			])])]),
			x("section", Ge, [C(m, {
				title: "Выбор значений и floating UI",
				border: ""
			}), x("div", Ke, [
				x("article", qe, [D[42] ||= x("h2", null, "Selectors", -1), x("div", Je, [C(r, {
					modelValue: B.value,
					"onUpdate:modelValue": D[9] ||= (e) => B.value = e,
					options: mt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), C(xe, {
					modelValue: V.value,
					"onUpdate:modelValue": D[10] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				x("article", Ye, [
					D[44] ||= x("h2", null, "BasePopover", -1),
					x("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: D[11] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					C(re, {
						open: W.value,
						anchor: G.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": D[12] ||= (e) => W.value = e
					}, {
						default: A(() => [...D[43] ||= [x("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				x("article", Xe, [D[50] ||= x("h2", null, "ActionMenu", -1), C(te, { title: "Действия" }, {
					default: A(() => [
						C(g, { tone: "accent" }, {
							default: A(() => [...D[45] ||= [S("Редактировать", -1)]]),
							_: 1
						}),
						C(ne, { label: "Перемещение" }, {
							trigger: A(({ open: e }) => [C(g, {
								submenu: "",
								"submenu-open": e
							}, {
								default: A(() => [...D[46] ||= [S("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: A(() => [C(g, null, {
								default: A(() => [...D[47] ||= [S("В начало", -1)]]),
								_: 1
							}), C(g, null, {
								default: A(() => [...D[48] ||= [S("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						C(g, { tone: "danger" }, {
							default: A(() => [...D[49] ||= [S("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				x("article", Ze, [D[53] ||= x("h2", null, "AccountMenu", -1), C(ee, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: A(({ close: e }) => [C(g, { onClick: e }, {
						default: A(() => [...D[51] ||= [S("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), C(g, {
						tone: "danger",
						onClick: e
					}, {
						default: A(() => [...D[52] ||= [S("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			x("section", Qe, [C(m, {
				title: "Редакторы и rich text",
				border: ""
			}), x("div", $e, [x("article", et, [
				D[54] ||= x("h2", null, "Rich text", -1),
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
					}, "↗", 40, tt), x("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: j((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, nt)]),
					_: 1
				}, 8, ["modelValue"]),
				x("div", rt, [C(n, { html: H.value }, {
					node: A(({ node: e }) => [x("strong", it, O(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), x("article", at, [D[57] ||= x("h2", null, "Editor composition", -1), C(v, null, {
				default: A(() => [C(be, { title: "Параметры" }, {
					default: A(() => [C(ie, { title: "Основное" }, {
						default: A(() => [C(ve, { title: "Значение" }, {
							actions: A(() => [...D[55] ||= [x("span", null, "12", -1)]]),
							_: 1
						}), C(c, {
							modelValue: z.value,
							"onUpdate:modelValue": D[14] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), C(f, null, {
						default: A(() => [D[56] ||= S("Итого: ", -1), x("strong", null, O(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			x("section", ot, [C(m, {
				title: "Каркас приложения",
				border: ""
			}), x("article", st, [D[63] ||= x("h2", null, "Navigation composition", -1), x("div", ct, [C(a, {
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
					brand: A(() => [C(i, {
						as: "div",
						label: "share-ui"
					}, {
						icon: A(() => [...D[58] ||= [x("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: A(() => [
						C(s, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: A(() => [...D[59] ||= [x("span", null, "⌂", -1)]]),
							_: 1
						}),
						C(ye, { label: "Примеры" }),
						C(s, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: A(() => [...D[60] ||= [x("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: A(() => [...D[61] ||= [x("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: A(() => [D[62] ||= x("div", { class: "share-component-gallery__chrome-content" }, [
					x("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					x("strong", null, "AppShell + AppSidebar"),
					x("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			x("section", lt, [C(m, {
				title: "Оверлеи и morph",
				border: ""
			}), x("article", ut, [D[64] ||= x("h2", null, "Интерактивные примеры", -1), x("div", dt, [
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
			K.value ? (T(), y(de, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: D[22] ||= (e) => K.value = !1
			}, {
				default: A(() => [...D[65] ||= [x("div", { class: "share-component-gallery__overlay-content" }, [x("h2", null, "AppModal"), x("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : b("", !0),
			q.value ? (T(), y(d, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: D[25] ||= (e) => q.value = !1
			}, {
				footer: A(() => [C(_, {
					onCancel: D[23] ||= (e) => q.value = !1,
					onSubmit: D[24] ||= (e) => q.value = !1
				})]),
				default: A(() => [D[66] ||= x("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : b("", !0),
			C(_e, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: D[26] ||= (e) => J.value = !1
			}, {
				default: A(() => [...D[67] ||= [x("div", { class: "share-component-gallery__overlay-content" }, [x("h2", null, "ModalShell"), x("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			C(l, {
				open: Y.value,
				"onUpdate:open": D[27] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			C(ae, {
				open: X.value,
				"onUpdate:open": D[28] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (T(), y(oe, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: D[29] ||= (e) => Z.value = !1
			}, {
				head: A(() => [...D[68] ||= [x("div", { class: "share-component-gallery__morph-head" }, [x("strong", null, "MorphSheet")], -1)]]),
				default: A(() => [D[69] ||= x("div", { class: "share-component-gallery__overlay-content" }, [x("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : b("", !0)
		]));
	}
}, [["__scopeId", "data-v-248eced1"]]);
//#endregion
export { N as COMPONENT_GALLERY_ALIASES, M as COMPONENT_GALLERY_COMPONENTS, F as ComponentGallery };
