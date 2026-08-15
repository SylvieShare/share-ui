import { $ as e, B as ee, C as te, D as t, E as n, F as r, O as ne, P as re, Q as ie, S as ae, T as oe, U as i, W as se, Z as a, _ as o, a as s, at as c, b as l, c as u, d, et as f, f as p, g as ce, i as m, it as h, n as le, nt as ue, o as de, ot as g, p as fe, r as pe, rt as _, s as v, t as me, tt as he, u as ge, v as _e, x as ve, y as ye, z as be } from "./FormTextarea-B9qOJUye.js";
import { createBlock as y, createCommentVNode as b, createElementBlock as x, createElementVNode as S, createTextVNode as C, createVNode as w, normalizeClass as T, openBlock as E, reactive as D, ref as O, toDisplayString as k, unref as A, withCtx as j } from "vue";
//#region src/lib/componentGalleryCatalog.js
var M = Object.freeze(/* @__PURE__ */ "BaseTile.AddButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput".split(".")), N = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), xe = { class: "share-component-gallery" }, Se = { class: "share-component-gallery__header" }, Ce = { class: "share-component-gallery__eyebrow" }, we = { class: "share-component-gallery__section" }, Te = { class: "share-component-gallery__grid" }, P = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile SectionLabel"
}, Ee = { class: "share-component-gallery__tile-row" }, De = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton"
}, Oe = { class: "share-component-gallery__row" }, ke = { class: "share-component-gallery__section" }, Ae = { class: "share-component-gallery__grid" }, je = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Me = { class: "share-component-gallery__stack" }, Ne = { class: "share-component-gallery__checkbox-row" }, Pe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Fe = { class: "share-component-gallery__stack" }, Ie = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Le = { class: "share-component-gallery__slider" }, Re = { class: "share-component-gallery__section" }, ze = { class: "share-component-gallery__grid" }, Be = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Ve = { class: "share-component-gallery__form-grid" }, He = { class: "share-component-gallery__section" }, Ue = { class: "share-component-gallery__grid" }, We = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Ge = { class: "share-component-gallery__stack" }, Ke = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Je = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Ye = { class: "share-component-gallery__section" }, Xe = { class: "share-component-gallery__grid" }, Ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, Qe = { class: "share-component-gallery__preview" }, $e = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, et = { class: "share-component-gallery__section" }, tt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, nt = { class: "share-component-gallery__chrome" }, rt = { class: "share-component-gallery__section" }, it = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, at = { class: "share-component-gallery__row" }, F = /*#__PURE__*/ g({
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
	setup(g) {
		let N = M.length, F = O(!0), I = O(!0), L = O("md"), R = O("preview"), z = O(62), B = O("rare"), V = O("#7c5ce2"), H = O("<p><strong>RichContent</strong> показывает очищенный результат редактора.</p>"), U = O(!0), W = O(!1), G = O(null), K = O(!1), q = O(!1), J = O(!1), Y = O(!1), X = O(!1), Z = O(!1), Q = O(null), ot = [
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
		], st = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], ct = [
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
		], $ = D({
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function lt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (D, O) => (E(), x("div", xe, [
			S("header", Se, [S("div", null, [
				S("p", Ce, "share-ui · " + k(A(N)) + " компонентов", 1),
				S("h1", null, k(g.title), 1),
				S("p", null, k(g.description), 1)
			]), O[30] ||= S("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			S("section", we, [w(e, {
				title: "Поверхности и действия",
				border: ""
			}), S("div", Te, [S("article", P, [O[33] ||= S("h2", null, "BaseTile", -1), S("div", Ee, [w(c, {
				strip: "",
				tint: "",
				interactive: "",
				class: "share-component-gallery__tile"
			}, {
				default: j(() => [...O[31] ||= [S("strong", null, "Акцентная плитка", -1), S("span", null, "strip · tint · interactive", -1)]]),
				_: 1
			}), w(c, {
				framed: "",
				class: "share-component-gallery__tile"
			}, {
				default: j(() => [...O[32] ||= [S("strong", null, "Рамка", -1), S("span", null, "framed", -1)]]),
				_: 1
			})])]), S("article", De, [O[34] ||= S("h2", null, "Кнопки элементов", -1), S("div", Oe, [
				w(h, { label: "Добавить элемент" }),
				w(h, {
					label: "Добавить",
					variant: "icon"
				}),
				w(f, { label: "Удалить" }),
				w(f, {
					label: "Удалить",
					variant: "boxed"
				})
			])])])]),
			S("section", ke, [w(e, {
				title: "Переключатели",
				border: ""
			}), S("div", Ae, [
				S("article", je, [O[36] ||= S("h2", null, "Boolean controls", -1), S("div", Me, [w(a, {
					modelValue: F.value,
					"onUpdate:modelValue": O[0] ||= (e) => F.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), S("label", Ne, [w(ue, {
					modelValue: I.value,
					"onUpdate:modelValue": O[1] ||= (e) => I.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), O[35] ||= C(" Выбрать элемент ", -1)])])]),
				S("article", Pe, [O[37] ||= S("h2", null, "Segmented controls", -1), S("div", Fe, [w(he, {
					modelValue: L.value,
					"onUpdate:modelValue": O[2] ||= (e) => L.value = e,
					options: ot,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), w(ie, {
					modelValue: R.value,
					"onUpdate:modelValue": O[3] ||= (e) => R.value = e,
					tabs: st,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				S("article", Ie, [O[38] ||= S("h2", null, "AppSlider", -1), S("div", Le, [w(_, {
					modelValue: z.value,
					"onUpdate:modelValue": O[4] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), S("strong", null, k(z.value), 1)])])
			])]),
			S("section", Re, [w(e, {
				title: "Формы",
				border: ""
			}), S("div", ze, [S("article", Be, [
				O[40] ||= S("h2", null, "Form primitives", -1),
				S("div", Ve, [
					w(m, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: j(() => [w(de, {
							value: $.name,
							"onUpdate:value": O[5] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					w(m, {
						label: "Количество",
						vertical: ""
					}, {
						default: j(() => [w(pe, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: O[6] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					w(m, {
						label: "Тип",
						vertical: ""
					}, {
						default: j(() => [w(le, {
							value: $.type,
							"onUpdate:value": O[7] ||= (e) => $.type = e
						}, {
							default: j(() => [...O[39] ||= [S("option", { value: "base" }, "Основной", -1), S("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					w(m, {
						label: "Описание",
						vertical: ""
					}, {
						default: j(() => [w(me, {
							value: $.description,
							"onUpdate:value": O[8] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				w(v, {
					"submit-text": "Сохранить",
					onCancel: lt
				})
			])])]),
			S("section", He, [w(e, {
				title: "Выбор значений и floating UI",
				border: ""
			}), S("div", Ue, [
				S("article", We, [O[41] ||= S("h2", null, "Selectors", -1), S("div", Ge, [w(re, {
					modelValue: B.value,
					"onUpdate:modelValue": O[9] ||= (e) => B.value = e,
					options: ct,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), w(r, {
					modelValue: V.value,
					"onUpdate:modelValue": O[10] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				S("article", Ke, [
					O[43] ||= S("h2", null, "BasePopover", -1),
					S("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: O[11] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					w(ee, {
						open: W.value,
						anchor: G.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": O[12] ||= (e) => W.value = e
					}, {
						default: j(() => [...O[42] ||= [S("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				S("article", qe, [O[49] ||= S("h2", null, "ActionMenu", -1), w(se, { title: "Действия" }, {
					default: j(() => [
						w(i, { tone: "accent" }, {
							default: j(() => [...O[44] ||= [C("Редактировать", -1)]]),
							_: 1
						}),
						w(be, { label: "Перемещение" }, {
							trigger: j(({ open: e }) => [w(i, {
								submenu: "",
								"submenu-open": e
							}, {
								default: j(() => [...O[45] ||= [C("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: j(() => [w(i, null, {
								default: j(() => [...O[46] ||= [C("В начало", -1)]]),
								_: 1
							}), w(i, null, {
								default: j(() => [...O[47] ||= [C("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						w(i, { tone: "danger" }, {
							default: j(() => [...O[48] ||= [C("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				S("article", Je, [O[52] ||= S("h2", null, "AccountMenu", -1), w(n, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: j(({ close: e }) => [w(i, { onClick: e }, {
						default: j(() => [...O[50] ||= [C("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), w(i, {
						tone: "danger",
						onClick: e
					}, {
						default: j(() => [...O[51] ||= [C("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			S("section", Ye, [w(e, {
				title: "Редакторы и rich text",
				border: ""
			}), S("div", Xe, [S("article", Ze, [
				O[53] ||= S("h2", null, "Rich text", -1),
				w(t, {
					modelValue: H.value,
					"onUpdate:modelValue": O[13] ||= (e) => H.value = e,
					placeholder: "Введите текст…"
				}, null, 8, ["modelValue"]),
				S("div", Qe, [w(ne, { html: H.value }, null, 8, ["html"])])
			]), S("article", $e, [O[56] ||= S("h2", null, "Editor composition", -1), w(c, null, {
				default: j(() => [w(ye, { title: "Параметры" }, {
					default: j(() => [w(o, { title: "Основное" }, {
						default: j(() => [w(_e, { title: "Значение" }, {
							actions: j(() => [...O[54] ||= [S("span", null, "12", -1)]]),
							_: 1
						}), w(_, {
							modelValue: z.value,
							"onUpdate:modelValue": O[14] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), w(ce, null, {
						default: j(() => [O[55] ||= C("Итого: ", -1), S("strong", null, k(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			S("section", et, [w(e, {
				title: "Каркас приложения",
				border: ""
			}), S("article", tt, [O[62] ||= S("h2", null, "Navigation composition", -1), S("div", nt, [w(oe, {
				class: T(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": U.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: j(() => [w(te, {
					modelValue: U.value,
					"onUpdate:modelValue": O[15] ||= (e) => U.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: j(() => [w(ae, {
						as: "div",
						label: "share-ui"
					}, {
						icon: j(() => [...O[57] ||= [S("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: j(() => [
						w(l, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: j(() => [...O[58] ||= [S("span", null, "⌂", -1)]]),
							_: 1
						}),
						w(ve, { label: "Примеры" }),
						w(l, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: j(() => [...O[59] ||= [S("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: j(() => [...O[60] ||= [S("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: j(() => [O[61] ||= S("div", { class: "share-component-gallery__chrome-content" }, [
					S("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					S("strong", null, "AppShell + AppSidebar"),
					S("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			S("section", rt, [w(e, {
				title: "Оверлеи и morph",
				border: ""
			}), S("article", it, [O[63] ||= S("h2", null, "Интерактивные примеры", -1), S("div", at, [
				S("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[16] ||= (e) => K.value = !0
				}, "AppModal"),
				S("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[17] ||= (e) => q.value = !0
				}, "AppModalFrame"),
				S("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[18] ||= (e) => J.value = !0
				}, "ModalShell"),
				S("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[19] ||= (e) => Y.value = !0
				}, "ConfirmDialog"),
				S("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[20] ||= (e) => X.value = !0
				}, "TextPromptDialog"),
				S("button", {
					ref_key: "morphOrigin",
					ref: Q,
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[21] ||= (e) => Z.value = !0
				}, "MorphSheet", 512)
			])])]),
			K.value ? (E(), y(fe, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: O[22] ||= (e) => K.value = !1
			}, {
				default: j(() => [...O[64] ||= [S("div", { class: "share-component-gallery__overlay-content" }, [S("h2", null, "AppModal"), S("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : b("", !0),
			q.value ? (E(), y(p, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: O[25] ||= (e) => q.value = !1
			}, {
				footer: j(() => [w(v, {
					onCancel: O[23] ||= (e) => q.value = !1,
					onSubmit: O[24] ||= (e) => q.value = !1
				})]),
				default: j(() => [O[65] ||= S("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : b("", !0),
			w(ge, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: O[26] ||= (e) => J.value = !1
			}, {
				default: j(() => [...O[66] ||= [S("div", { class: "share-component-gallery__overlay-content" }, [S("h2", null, "ModalShell"), S("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			w(d, {
				open: Y.value,
				"onUpdate:open": O[27] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			w(s, {
				open: X.value,
				"onUpdate:open": O[28] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (E(), y(u, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: O[29] ||= (e) => Z.value = !1
			}, {
				head: j(() => [...O[67] ||= [S("div", { class: "share-component-gallery__morph-head" }, [S("strong", null, "MorphSheet")], -1)]]),
				default: j(() => [O[68] ||= S("div", { class: "share-component-gallery__overlay-content" }, [S("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : b("", !0)
		]));
	}
}, [["__scopeId", "data-v-58ad019e"]]);
//#endregion
export { N as COMPONENT_GALLERY_ALIASES, M as COMPONENT_GALLERY_COMPONENTS, F as ComponentGallery };
