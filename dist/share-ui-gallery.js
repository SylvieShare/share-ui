import { $ as e, B as ee, C as te, D as t, E as n, F as r, O as ne, P as re, Q as ie, S as ae, T as oe, U as i, W as se, Z as ce, _ as a, a as o, at as s, b as c, c as l, d as u, et as d, f, g as le, i as p, it as m, n as ue, nt as de, o as fe, ot as h, p as pe, r as me, rt as he, s as g, st as _, t as ge, tt as v, u as _e, v as ve, x as ye, y as be, z as xe } from "./FormTextarea-DheaaOrx.js";
import { createBlock as y, createCommentVNode as b, createElementBlock as x, createElementVNode as S, createTextVNode as C, createVNode as w, normalizeClass as T, openBlock as E, reactive as D, ref as O, toDisplayString as k, unref as A, withCtx as j } from "vue";
//#region src/lib/componentGalleryCatalog.js
var M = Object.freeze(/* @__PURE__ */ "BaseTile.AddButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput".split(".")), N = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Se = { class: "share-component-gallery" }, Ce = { class: "share-component-gallery__header" }, we = { class: "share-component-gallery__eyebrow" }, Te = { class: "share-component-gallery__section" }, Ee = { class: "share-component-gallery__grid" }, De = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile SectionLabel"
}, Oe = { class: "share-component-gallery__tile-row" }, ke = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton"
}, P = { class: "share-component-gallery__row" }, Ae = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, je = { class: "share-component-gallery__section" }, Me = { class: "share-component-gallery__grid" }, Ne = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Pe = { class: "share-component-gallery__stack" }, Fe = { class: "share-component-gallery__checkbox-row" }, Ie = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Le = { class: "share-component-gallery__stack" }, Re = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, ze = { class: "share-component-gallery__slider" }, Be = { class: "share-component-gallery__section" }, Ve = { class: "share-component-gallery__grid" }, He = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Ue = { class: "share-component-gallery__form-grid" }, We = { class: "share-component-gallery__section" }, Ge = { class: "share-component-gallery__grid" }, Ke = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, qe = { class: "share-component-gallery__stack" }, Je = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Ye = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Xe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Ze = { class: "share-component-gallery__section" }, Qe = { class: "share-component-gallery__grid" }, $e = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, et = { class: "share-component-gallery__preview" }, tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, nt = { class: "share-component-gallery__section" }, rt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, it = { class: "share-component-gallery__chrome" }, at = { class: "share-component-gallery__section" }, ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, st = { class: "share-component-gallery__row" }, F = /*#__PURE__*/ _({
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
		let N = M.length, F = O(!0), I = O(!0), L = O("md"), R = O("preview"), z = O(62), B = O("rare"), V = O("#7c5ce2"), H = O("<p><strong>RichContent</strong> показывает очищенный результат редактора.</p>"), U = O(!0), W = O(!1), G = O(null), K = O(!1), q = O(!1), J = O(!1), Y = O(!1), X = O(!1), Z = O(!1), Q = O(null), ct = [
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
		], lt = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], ut = [
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
		], dt = [
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
		], $ = D({
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function ft(e) {
			return `${e} МБ`;
		}
		function pt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (D, O) => (E(), x("div", Se, [
			S("header", Ce, [S("div", null, [
				S("p", we, "share-ui · " + k(A(N)) + " компонентов", 1),
				S("h1", null, k(_.title), 1),
				S("p", null, k(_.description), 1)
			]), O[30] ||= S("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			S("section", Te, [w(d, {
				title: "Поверхности и действия",
				border: ""
			}), S("div", Ee, [
				S("article", De, [O[33] ||= S("h2", null, "BaseTile", -1), S("div", Oe, [w(h, {
					strip: "",
					tint: "",
					interactive: "",
					class: "share-component-gallery__tile"
				}, {
					default: j(() => [...O[31] ||= [S("strong", null, "Акцентная плитка", -1), S("span", null, "strip · tint · interactive", -1)]]),
					_: 1
				}), w(h, {
					framed: "",
					class: "share-component-gallery__tile"
				}, {
					default: j(() => [...O[32] ||= [S("strong", null, "Рамка", -1), S("span", null, "framed", -1)]]),
					_: 1
				})])]),
				S("article", ke, [O[34] ||= S("h2", null, "Кнопки элементов", -1), S("div", P, [
					w(s, { label: "Добавить элемент" }),
					w(s, {
						label: "Добавить",
						variant: "icon"
					}),
					w(v, { label: "Удалить" }),
					w(v, {
						label: "Удалить",
						variant: "boxed"
					})
				])]),
				S("article", Ae, [O[35] ||= S("h2", null, "SegmentDonutChart", -1), w(e, {
					segments: dt,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": ft
				})])
			])]),
			S("section", je, [w(d, {
				title: "Переключатели",
				border: ""
			}), S("div", Me, [
				S("article", Ne, [O[37] ||= S("h2", null, "Boolean controls", -1), S("div", Pe, [w(ce, {
					modelValue: F.value,
					"onUpdate:modelValue": O[0] ||= (e) => F.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), S("label", Fe, [w(he, {
					modelValue: I.value,
					"onUpdate:modelValue": O[1] ||= (e) => I.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), O[36] ||= C(" Выбрать элемент ", -1)])])]),
				S("article", Ie, [O[38] ||= S("h2", null, "Segmented controls", -1), S("div", Le, [w(de, {
					modelValue: L.value,
					"onUpdate:modelValue": O[2] ||= (e) => L.value = e,
					options: ct,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), w(ie, {
					modelValue: R.value,
					"onUpdate:modelValue": O[3] ||= (e) => R.value = e,
					tabs: lt,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				S("article", Re, [O[39] ||= S("h2", null, "AppSlider", -1), S("div", ze, [w(m, {
					modelValue: z.value,
					"onUpdate:modelValue": O[4] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), S("strong", null, k(z.value), 1)])])
			])]),
			S("section", Be, [w(d, {
				title: "Формы",
				border: ""
			}), S("div", Ve, [S("article", He, [
				O[41] ||= S("h2", null, "Form primitives", -1),
				S("div", Ue, [
					w(p, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: j(() => [w(fe, {
							value: $.name,
							"onUpdate:value": O[5] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					w(p, {
						label: "Количество",
						vertical: ""
					}, {
						default: j(() => [w(me, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: O[6] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					w(p, {
						label: "Тип",
						vertical: ""
					}, {
						default: j(() => [w(ue, {
							value: $.type,
							"onUpdate:value": O[7] ||= (e) => $.type = e
						}, {
							default: j(() => [...O[40] ||= [S("option", { value: "base" }, "Основной", -1), S("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					w(p, {
						label: "Описание",
						vertical: ""
					}, {
						default: j(() => [w(ge, {
							value: $.description,
							"onUpdate:value": O[8] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				w(g, {
					"submit-text": "Сохранить",
					onCancel: pt
				})
			])])]),
			S("section", We, [w(d, {
				title: "Выбор значений и floating UI",
				border: ""
			}), S("div", Ge, [
				S("article", Ke, [O[42] ||= S("h2", null, "Selectors", -1), S("div", qe, [w(re, {
					modelValue: B.value,
					"onUpdate:modelValue": O[9] ||= (e) => B.value = e,
					options: ut,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), w(r, {
					modelValue: V.value,
					"onUpdate:modelValue": O[10] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				S("article", Je, [
					O[44] ||= S("h2", null, "BasePopover", -1),
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
						default: j(() => [...O[43] ||= [S("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				S("article", Ye, [O[50] ||= S("h2", null, "ActionMenu", -1), w(se, { title: "Действия" }, {
					default: j(() => [
						w(i, { tone: "accent" }, {
							default: j(() => [...O[45] ||= [C("Редактировать", -1)]]),
							_: 1
						}),
						w(xe, { label: "Перемещение" }, {
							trigger: j(({ open: e }) => [w(i, {
								submenu: "",
								"submenu-open": e
							}, {
								default: j(() => [...O[46] ||= [C("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: j(() => [w(i, null, {
								default: j(() => [...O[47] ||= [C("В начало", -1)]]),
								_: 1
							}), w(i, null, {
								default: j(() => [...O[48] ||= [C("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						w(i, { tone: "danger" }, {
							default: j(() => [...O[49] ||= [C("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				S("article", Xe, [O[53] ||= S("h2", null, "AccountMenu", -1), w(n, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: j(({ close: e }) => [w(i, { onClick: e }, {
						default: j(() => [...O[51] ||= [C("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), w(i, {
						tone: "danger",
						onClick: e
					}, {
						default: j(() => [...O[52] ||= [C("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			S("section", Ze, [w(d, {
				title: "Редакторы и rich text",
				border: ""
			}), S("div", Qe, [S("article", $e, [
				O[54] ||= S("h2", null, "Rich text", -1),
				w(t, {
					modelValue: H.value,
					"onUpdate:modelValue": O[13] ||= (e) => H.value = e,
					placeholder: "Введите текст…"
				}, null, 8, ["modelValue"]),
				S("div", et, [w(ne, { html: H.value }, null, 8, ["html"])])
			]), S("article", tt, [O[57] ||= S("h2", null, "Editor composition", -1), w(h, null, {
				default: j(() => [w(be, { title: "Параметры" }, {
					default: j(() => [w(a, { title: "Основное" }, {
						default: j(() => [w(ve, { title: "Значение" }, {
							actions: j(() => [...O[55] ||= [S("span", null, "12", -1)]]),
							_: 1
						}), w(m, {
							modelValue: z.value,
							"onUpdate:modelValue": O[14] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), w(le, null, {
						default: j(() => [O[56] ||= C("Итого: ", -1), S("strong", null, k(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			S("section", nt, [w(d, {
				title: "Каркас приложения",
				border: ""
			}), S("article", rt, [O[63] ||= S("h2", null, "Navigation composition", -1), S("div", it, [w(oe, {
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
						icon: j(() => [...O[58] ||= [S("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: j(() => [
						w(c, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: j(() => [...O[59] ||= [S("span", null, "⌂", -1)]]),
							_: 1
						}),
						w(ye, { label: "Примеры" }),
						w(c, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: j(() => [...O[60] ||= [S("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: j(() => [...O[61] ||= [S("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: j(() => [O[62] ||= S("div", { class: "share-component-gallery__chrome-content" }, [
					S("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					S("strong", null, "AppShell + AppSidebar"),
					S("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			S("section", at, [w(d, {
				title: "Оверлеи и morph",
				border: ""
			}), S("article", ot, [O[64] ||= S("h2", null, "Интерактивные примеры", -1), S("div", st, [
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
			K.value ? (E(), y(pe, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: O[22] ||= (e) => K.value = !1
			}, {
				default: j(() => [...O[65] ||= [S("div", { class: "share-component-gallery__overlay-content" }, [S("h2", null, "AppModal"), S("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : b("", !0),
			q.value ? (E(), y(f, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: O[25] ||= (e) => q.value = !1
			}, {
				footer: j(() => [w(g, {
					onCancel: O[23] ||= (e) => q.value = !1,
					onSubmit: O[24] ||= (e) => q.value = !1
				})]),
				default: j(() => [O[66] ||= S("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : b("", !0),
			w(_e, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: O[26] ||= (e) => J.value = !1
			}, {
				default: j(() => [...O[67] ||= [S("div", { class: "share-component-gallery__overlay-content" }, [S("h2", null, "ModalShell"), S("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			w(u, {
				open: Y.value,
				"onUpdate:open": O[27] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			w(o, {
				open: X.value,
				"onUpdate:open": O[28] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (E(), y(l, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: O[29] ||= (e) => Z.value = !1
			}, {
				head: j(() => [...O[68] ||= [S("div", { class: "share-component-gallery__morph-head" }, [S("strong", null, "MorphSheet")], -1)]]),
				default: j(() => [O[69] ||= S("div", { class: "share-component-gallery__overlay-content" }, [S("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : b("", !0)
		]));
	}
}, [["__scopeId", "data-v-189aef6c"]]);
//#endregion
export { N as COMPONENT_GALLERY_ALIASES, M as COMPONENT_GALLERY_COMPONENTS, F as ComponentGallery };
