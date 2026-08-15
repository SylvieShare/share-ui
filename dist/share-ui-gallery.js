import { $ as e, B as ee, C as te, D as t, E as n, F as r, O as ne, P as re, Q as ie, S as ae, T as oe, U as i, W as a, Z as o, _ as s, a as c, at as l, b as u, c as d, d as f, et as p, f as m, g as se, i as h, it as g, n as ce, nt as le, o as ue, ot as _, p as de, r as fe, rt as v, s as y, t as pe, tt as me, u as he, v as ge, w as _e, x as ve, y as ye, z as be } from "./FormTextarea-BD-jQnuU.js";
import { createBlock as b, createCommentVNode as x, createElementBlock as S, createElementVNode as C, createTextVNode as w, createVNode as T, openBlock as E, reactive as D, ref as O, toDisplayString as k, unref as A, withCtx as j } from "vue";
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
}, nt = { class: "share-component-gallery__chrome" }, rt = { class: "share-component-gallery__chrome-content" }, it = { class: "share-component-gallery__section" }, at = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, ot = { class: "share-component-gallery__row" }, F = /*#__PURE__*/ _({
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
	setup(_) {
		let N = M.length, F = O(!0), I = O(!0), L = O("md"), R = O("preview"), z = O(62), B = O("rare"), V = O("#7c5ce2"), H = O("<p><strong>RichContent</strong> показывает очищенный результат редактора.</p>"), U = O(!0), W = O(!1), G = O(null), K = O(!1), q = O(!1), J = O(!1), Y = O(!1), X = O(!1), Z = O(!1), Q = O(null), st = [
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
		], ct = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], lt = [
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
		function ut() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (D, O) => (E(), S("div", xe, [
			C("header", Se, [C("div", null, [
				C("p", Ce, "share-ui · " + k(A(N)) + " компонентов", 1),
				C("h1", null, k(_.title), 1),
				C("p", null, k(_.description), 1)
			]), O[31] ||= C("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			C("section", we, [T(e, {
				title: "Поверхности и действия",
				border: ""
			}), C("div", Te, [C("article", P, [O[34] ||= C("h2", null, "BaseTile", -1), C("div", Ee, [T(l, {
				strip: "",
				tint: "",
				interactive: "",
				class: "share-component-gallery__tile"
			}, {
				default: j(() => [...O[32] ||= [C("strong", null, "Акцентная плитка", -1), C("span", null, "strip · tint · interactive", -1)]]),
				_: 1
			}), T(l, {
				framed: "",
				class: "share-component-gallery__tile"
			}, {
				default: j(() => [...O[33] ||= [C("strong", null, "Рамка", -1), C("span", null, "framed", -1)]]),
				_: 1
			})])]), C("article", De, [O[35] ||= C("h2", null, "Кнопки элементов", -1), C("div", Oe, [
				T(g, { label: "Добавить элемент" }),
				T(g, {
					label: "Добавить",
					variant: "icon"
				}),
				T(p, { label: "Удалить" }),
				T(p, {
					label: "Удалить",
					variant: "boxed"
				})
			])])])]),
			C("section", ke, [T(e, {
				title: "Переключатели",
				border: ""
			}), C("div", Ae, [
				C("article", je, [O[37] ||= C("h2", null, "Boolean controls", -1), C("div", Me, [T(o, {
					modelValue: F.value,
					"onUpdate:modelValue": O[0] ||= (e) => F.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), C("label", Ne, [T(le, {
					modelValue: I.value,
					"onUpdate:modelValue": O[1] ||= (e) => I.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), O[36] ||= w(" Выбрать элемент ", -1)])])]),
				C("article", Pe, [O[38] ||= C("h2", null, "Segmented controls", -1), C("div", Fe, [T(me, {
					modelValue: L.value,
					"onUpdate:modelValue": O[2] ||= (e) => L.value = e,
					options: st,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), T(ie, {
					modelValue: R.value,
					"onUpdate:modelValue": O[3] ||= (e) => R.value = e,
					tabs: ct,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				C("article", Ie, [O[39] ||= C("h2", null, "AppSlider", -1), C("div", Le, [T(v, {
					modelValue: z.value,
					"onUpdate:modelValue": O[4] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), C("strong", null, k(z.value), 1)])])
			])]),
			C("section", Re, [T(e, {
				title: "Формы",
				border: ""
			}), C("div", ze, [C("article", Be, [
				O[41] ||= C("h2", null, "Form primitives", -1),
				C("div", Ve, [
					T(h, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: j(() => [T(ue, {
							value: $.name,
							"onUpdate:value": O[5] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					T(h, {
						label: "Количество",
						vertical: ""
					}, {
						default: j(() => [T(fe, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: O[6] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					T(h, {
						label: "Тип",
						vertical: ""
					}, {
						default: j(() => [T(ce, {
							value: $.type,
							"onUpdate:value": O[7] ||= (e) => $.type = e
						}, {
							default: j(() => [...O[40] ||= [C("option", { value: "base" }, "Основной", -1), C("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					T(h, {
						label: "Описание",
						vertical: ""
					}, {
						default: j(() => [T(pe, {
							value: $.description,
							"onUpdate:value": O[8] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				T(y, {
					"submit-text": "Сохранить",
					onCancel: ut
				})
			])])]),
			C("section", He, [T(e, {
				title: "Выбор значений и floating UI",
				border: ""
			}), C("div", Ue, [
				C("article", We, [O[42] ||= C("h2", null, "Selectors", -1), C("div", Ge, [T(re, {
					modelValue: B.value,
					"onUpdate:modelValue": O[9] ||= (e) => B.value = e,
					options: lt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), T(r, {
					modelValue: V.value,
					"onUpdate:modelValue": O[10] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				C("article", Ke, [
					O[44] ||= C("h2", null, "BasePopover", -1),
					C("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: O[11] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					T(ee, {
						open: W.value,
						anchor: G.value,
						"aria-label": "Пример popover",
						"onUpdate:open": O[12] ||= (e) => W.value = e
					}, {
						default: j(() => [...O[43] ||= [C("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				C("article", qe, [O[50] ||= C("h2", null, "ActionMenu", -1), T(a, { title: "Действия" }, {
					default: j(() => [
						T(i, { tone: "accent" }, {
							default: j(() => [...O[45] ||= [w("Редактировать", -1)]]),
							_: 1
						}),
						T(be, { label: "Перемещение" }, {
							trigger: j(({ open: e }) => [T(i, {
								submenu: "",
								"submenu-open": e
							}, {
								default: j(() => [...O[46] ||= [w("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: j(() => [T(i, null, {
								default: j(() => [...O[47] ||= [w("В начало", -1)]]),
								_: 1
							}), T(i, null, {
								default: j(() => [...O[48] ||= [w("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						T(i, { tone: "danger" }, {
							default: j(() => [...O[49] ||= [w("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				C("article", Je, [O[53] ||= C("h2", null, "AccountMenu", -1), T(n, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: j(({ close: e }) => [T(i, { onClick: e }, {
						default: j(() => [...O[51] ||= [w("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), T(i, {
						tone: "danger",
						onClick: e
					}, {
						default: j(() => [...O[52] ||= [w("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			C("section", Ye, [T(e, {
				title: "Редакторы и rich text",
				border: ""
			}), C("div", Xe, [C("article", Ze, [
				O[54] ||= C("h2", null, "Rich text", -1),
				T(t, {
					modelValue: H.value,
					"onUpdate:modelValue": O[13] ||= (e) => H.value = e,
					placeholder: "Введите текст…"
				}, null, 8, ["modelValue"]),
				C("div", Qe, [T(ne, { html: H.value }, null, 8, ["html"])])
			]), C("article", $e, [O[57] ||= C("h2", null, "Editor composition", -1), T(l, null, {
				default: j(() => [T(ye, { title: "Параметры" }, {
					default: j(() => [T(s, { title: "Основное" }, {
						default: j(() => [T(ge, { title: "Значение" }, {
							actions: j(() => [...O[55] ||= [C("span", null, "12", -1)]]),
							_: 1
						}), T(v, {
							modelValue: z.value,
							"onUpdate:modelValue": O[14] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), T(se, null, {
						default: j(() => [O[56] ||= w("Итого: ", -1), C("strong", null, k(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			C("section", et, [T(e, {
				title: "Каркас приложения",
				border: ""
			}), C("article", tt, [O[64] ||= C("h2", null, "Navigation composition", -1), C("div", nt, [T(oe, {
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: j(() => [T(te, {
					modelValue: U.value,
					"onUpdate:modelValue": O[15] ||= (e) => U.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: j(() => [T(ae, {
						as: "button",
						label: "share-ui"
					}, {
						icon: j(() => [...O[58] ||= [C("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: j(() => [
						T(u, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: j(() => [...O[59] ||= [C("span", null, "⌂", -1)]]),
							_: 1
						}),
						T(ve, { label: "Примеры" }),
						T(u, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: j(() => [...O[60] ||= [C("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: j(() => [...O[63] ||= [C("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: j(() => [C("div", rt, [
					T(_e, {
						expanded: U.value,
						onClick: O[16] ||= (e) => U.value = !U.value
					}, null, 8, ["expanded"]),
					O[61] ||= C("strong", null, "AppShell canvas", -1),
					O[62] ||= C("span", null, "Фон, точки, sidebar и rail образуют общий каркас.", -1)
				])]),
				_: 1
			})])])]),
			C("section", it, [T(e, {
				title: "Оверлеи и morph",
				border: ""
			}), C("article", at, [O[65] ||= C("h2", null, "Интерактивные примеры", -1), C("div", ot, [
				C("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[17] ||= (e) => K.value = !0
				}, "AppModal"),
				C("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[18] ||= (e) => q.value = !0
				}, "AppModalFrame"),
				C("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[19] ||= (e) => J.value = !0
				}, "ModalShell"),
				C("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[20] ||= (e) => Y.value = !0
				}, "ConfirmDialog"),
				C("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[21] ||= (e) => X.value = !0
				}, "TextPromptDialog"),
				C("button", {
					ref_key: "morphOrigin",
					ref: Q,
					type: "button",
					class: "share-component-gallery__button",
					onClick: O[22] ||= (e) => Z.value = !0
				}, "MorphSheet", 512)
			])])]),
			K.value ? (E(), b(de, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: O[23] ||= (e) => K.value = !1
			}, {
				default: j(() => [...O[66] ||= [C("div", { class: "share-component-gallery__overlay-content" }, [C("h2", null, "AppModal"), C("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : x("", !0),
			q.value ? (E(), b(m, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: O[26] ||= (e) => q.value = !1
			}, {
				footer: j(() => [T(y, {
					onCancel: O[24] ||= (e) => q.value = !1,
					onSubmit: O[25] ||= (e) => q.value = !1
				})]),
				default: j(() => [O[67] ||= C("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : x("", !0),
			T(he, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: O[27] ||= (e) => J.value = !1
			}, {
				default: j(() => [...O[68] ||= [C("div", { class: "share-component-gallery__overlay-content" }, [C("h2", null, "ModalShell"), C("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			T(f, {
				open: Y.value,
				"onUpdate:open": O[28] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			T(c, {
				open: X.value,
				"onUpdate:open": O[29] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (E(), b(d, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: O[30] ||= (e) => Z.value = !1
			}, {
				head: j(() => [...O[69] ||= [C("div", { class: "share-component-gallery__morph-head" }, [C("strong", null, "MorphSheet")], -1)]]),
				default: j(() => [O[70] ||= C("div", { class: "share-component-gallery__overlay-content" }, [C("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : x("", !0)
		]));
	}
}, [["__scopeId", "data-v-5aa53a2b"]]);
//#endregion
export { N as COMPONENT_GALLERY_ALIASES, M as COMPONENT_GALLERY_COMPONENTS, F as ComponentGallery };
