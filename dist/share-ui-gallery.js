import { A as e, C as t, D as ee, E as te, H as n, J as r, M as ne, Q as re, S as ie, T as ae, U as oe, Z as i, _ as se, a as ce, at as le, b as ue, c as de, ct as a, d as fe, dt as pe, ft as o, g as s, gt as c, h as l, ht as u, i as me, j as he, k as ge, l as _e, lt as d, m as ve, mt as f, n as p, o as ye, ot as be, p as xe, pt as m, q as Se, r as h, s as g, st as Ce, t as _, u as v, ut as we, w as y, x as Te } from "./LoadingState-40TpJtXp.js";
import { createBlock as b, createCommentVNode as x, createElementBlock as Ee, createElementVNode as S, createTextVNode as C, createVNode as w, normalizeClass as T, openBlock as E, reactive as D, ref as O, toDisplayString as k, unref as De, withCtx as A, withModifiers as j } from "vue";
//#region src/lib/componentGalleryCatalog.js
var M = Object.freeze(/* @__PURE__ */ "LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.SectionList.AddButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), N = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Oe = { class: "share-component-gallery" }, ke = { class: "share-component-gallery__header" }, Ae = { class: "share-component-gallery__eyebrow" }, je = { class: "share-component-gallery__section" }, Me = { class: "share-component-gallery__grid" }, Ne = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile SectionLabel"
}, Pe = { class: "share-component-gallery__tile-row" }, Fe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, Ie = { class: "share-component-gallery__row" }, Le = { class: "share-component-gallery__row" }, Re = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Be = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton"
}, Ve = { class: "share-component-gallery__row" }, P = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, He = { class: "share-component-gallery__section" }, Ue = { class: "share-component-gallery__grid" }, We = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Ge = { class: "share-component-gallery__stack" }, Ke = { class: "share-component-gallery__checkbox-row" }, qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Je = { class: "share-component-gallery__stack" }, Ye = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Xe = { class: "share-component-gallery__slider" }, Ze = { class: "share-component-gallery__section" }, Qe = { class: "share-component-gallery__grid" }, $e = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, et = { class: "share-component-gallery__form-grid" }, tt = { class: "share-component-gallery__section" }, nt = { class: "share-component-gallery__grid" }, rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, it = { class: "share-component-gallery__stack" }, at = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, st = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, ct = { class: "share-component-gallery__section" }, lt = { class: "share-component-gallery__grid" }, ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, dt = ["onMousedown"], ft = ["onMousedown"], pt = { class: "share-component-gallery__preview" }, mt = { class: "share-component-gallery__rich-node" }, ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, gt = { class: "share-component-gallery__section" }, _t = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, vt = { class: "share-component-gallery__chrome" }, yt = { class: "share-component-gallery__section" }, bt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, xt = { class: "share-component-gallery__row" }, F = /*#__PURE__*/ c({
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
	setup(c) {
		let N = M.length, F = O(!0), I = O(!0), L = O("md"), R = O("preview"), z = O(62), B = O("rare"), V = O("#7c5ce2"), H = O("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), U = O(!0), W = O(!1), G = O(null), K = O(!1), q = O(!1), J = O(!1), Y = O(!1), X = O(!1), Z = O(!1), Q = O(null), St = [
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
		], Ct = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], wt = [
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
		], Tt = [
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
		function Et(e) {
			return `${e} МБ`;
		}
		function Dt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (D, O) => (E(), Ee("div", Oe, [
			S("header", ke, [S("div", null, [
				S("p", Ae, "share-ui · " + k(De(N)) + " компонентов", 1),
				S("h1", null, k(c.title), 1),
				S("p", null, k(c.description), 1)
			]), O[30] ||= S("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			S("section", je, [w(a, {
				title: "Поверхности и действия",
				border: ""
			}), S("div", Me, [
				S("article", Ne, [O[33] ||= S("h2", null, "BaseTile", -1), S("div", Pe, [w(u, {
					strip: "",
					tint: "",
					interactive: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...O[31] ||= [S("strong", null, "Акцентная плитка", -1), S("span", null, "strip · tint · interactive", -1)]]),
					_: 1
				}), w(u, {
					framed: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...O[32] ||= [S("strong", null, "Рамка", -1), S("span", null, "framed", -1)]]),
					_: 1
				})])]),
				S("article", Fe, [
					O[34] ||= S("h2", null, "Загрузка", -1),
					w(_, { label: "Открываем раздел…" }),
					w(_, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					w(l, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					S("div", Ie, [
						w(l, {
							label: "Загрузка",
							size: "sm"
						}),
						w(l, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						w(l, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					S("div", Le, [w(p, {
						width: "36px",
						height: "36px",
						round: ""
					}), w(p, { width: "60%" })])
				]),
				S("article", Re, [
					O[35] ||= S("h2", null, "InlineEdit", -1),
					w(h, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					w(h, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					w(h, {
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
				S("article", ze, [
					O[39] ||= S("h2", null, "SectionList", -1),
					w(f, { title: "Записи" }, {
						footer: A(() => [w(m, { label: "Добавить запись" })]),
						default: A(() => [O[36] ||= S("div", { style: { padding: "12px 0" } }, "Первая запись", -1), O[37] ||= S("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					w(f, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: A(() => [...O[38] ||= [S("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), S("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				S("article", Be, [O[40] ||= S("h2", null, "Кнопки элементов", -1), S("div", Ve, [
					w(m, { label: "Добавить элемент" }),
					w(m, {
						label: "Добавить",
						variant: "icon"
					}),
					w(d, { label: "Удалить" }),
					w(d, {
						label: "Удалить",
						variant: "boxed"
					}),
					w(d, {
						label: "Удалить запись",
						icon: "trash"
					}),
					w(d, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					w(d, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				S("article", P, [O[41] ||= S("h2", null, "SegmentDonutChart", -1), w(Ce, {
					segments: Tt,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Et
				})])
			])]),
			S("section", He, [w(a, {
				title: "Переключатели",
				border: ""
			}), S("div", Ue, [
				S("article", We, [O[43] ||= S("h2", null, "Boolean controls", -1), S("div", Ge, [w(le, {
					modelValue: F.value,
					"onUpdate:modelValue": O[0] ||= (e) => F.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), S("label", Ke, [w(pe, {
					modelValue: I.value,
					"onUpdate:modelValue": O[1] ||= (e) => I.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), O[42] ||= C(" Выбрать элемент ", -1)])])]),
				S("article", qe, [O[44] ||= S("h2", null, "Segmented controls", -1), S("div", Je, [w(we, {
					modelValue: L.value,
					"onUpdate:modelValue": O[2] ||= (e) => L.value = e,
					options: St,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), w(be, {
					modelValue: R.value,
					"onUpdate:modelValue": O[3] ||= (e) => R.value = e,
					tabs: Ct,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				S("article", Ye, [O[45] ||= S("h2", null, "AppSlider", -1), S("div", Xe, [w(o, {
					modelValue: z.value,
					"onUpdate:modelValue": O[4] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), S("strong", null, k(z.value), 1)])])
			])]),
			S("section", Ze, [w(a, {
				title: "Формы",
				border: ""
			}), S("div", Qe, [S("article", $e, [
				O[47] ||= S("h2", null, "Form primitives", -1),
				S("div", et, [
					w(g, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: A(() => [w(_e, {
							value: $.name,
							"onUpdate:value": O[5] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					w(g, {
						label: "Количество",
						vertical: ""
					}, {
						default: A(() => [w(ye, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: O[6] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					w(g, {
						label: "Тип",
						vertical: ""
					}, {
						default: A(() => [w(ce, {
							value: $.type,
							"onUpdate:value": O[7] ||= (e) => $.type = e
						}, {
							default: A(() => [...O[46] ||= [S("option", { value: "base" }, "Основной", -1), S("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					w(g, {
						label: "Описание",
						vertical: ""
					}, {
						default: A(() => [w(me, {
							value: $.description,
							"onUpdate:value": O[8] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				w(v, {
					"submit-text": "Сохранить",
					onCancel: Dt
				})
			])])]),
			S("section", tt, [w(a, {
				title: "Выбор значений и floating UI",
				border: ""
			}), S("div", nt, [
				S("article", rt, [O[48] ||= S("h2", null, "Selectors", -1), S("div", it, [w(n, {
					modelValue: B.value,
					"onUpdate:modelValue": O[9] ||= (e) => B.value = e,
					options: wt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), w(oe, {
					modelValue: V.value,
					"onUpdate:modelValue": O[10] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				S("article", at, [
					O[50] ||= S("h2", null, "BasePopover", -1),
					S("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: O[11] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					w(r, {
						open: W.value,
						anchor: G.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": O[12] ||= (e) => W.value = e
					}, {
						default: A(() => [...O[49] ||= [S("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				S("article", ot, [O[56] ||= S("h2", null, "ActionMenu", -1), w(re, { title: "Действия" }, {
					default: A(() => [
						w(i, { tone: "accent" }, {
							default: A(() => [...O[51] ||= [C("Редактировать", -1)]]),
							_: 1
						}),
						w(Se, { label: "Перемещение" }, {
							trigger: A(({ open: e }) => [w(i, {
								submenu: "",
								"submenu-open": e
							}, {
								default: A(() => [...O[52] ||= [C("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: A(() => [w(i, null, {
								default: A(() => [...O[53] ||= [C("В начало", -1)]]),
								_: 1
							}), w(i, null, {
								default: A(() => [...O[54] ||= [C("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						w(i, { tone: "danger" }, {
							default: A(() => [...O[55] ||= [C("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				S("article", st, [O[59] ||= S("h2", null, "AccountMenu", -1), w(e, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: A(({ close: e }) => [w(i, { onClick: e }, {
						default: A(() => [...O[57] ||= [C("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), w(i, {
						tone: "danger",
						onClick: e
					}, {
						default: A(() => [...O[58] ||= [C("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			S("section", ct, [w(a, {
				title: "Редакторы и rich text",
				border: ""
			}), S("div", lt, [S("article", ut, [
				O[60] ||= S("h2", null, "Rich text", -1),
				w(he, {
					ref: "richEditor",
					modelValue: H.value,
					"onUpdate:modelValue": O[13] ||= (e) => H.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: A(({ editor: e, insertRichNode: t }) => [S("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: j((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, dt), S("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: j((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, ft)]),
					_: 1
				}, 8, ["modelValue"]),
				S("div", pt, [w(ne, { html: H.value }, {
					node: A(({ node: e }) => [S("strong", mt, k(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), S("article", ht, [O[63] ||= S("h2", null, "Editor composition", -1), w(u, null, {
				default: A(() => [w(t, { title: "Параметры" }, {
					default: A(() => [w(Te, { title: "Основное" }, {
						default: A(() => [w(ie, { title: "Значение" }, {
							actions: A(() => [...O[61] ||= [S("span", null, "12", -1)]]),
							_: 1
						}), w(o, {
							modelValue: z.value,
							"onUpdate:modelValue": O[14] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), w(ue, null, {
						default: A(() => [O[62] ||= C("Итого: ", -1), S("strong", null, k(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			S("section", gt, [w(a, {
				title: "Каркас приложения",
				border: ""
			}), S("article", _t, [O[69] ||= S("h2", null, "Navigation composition", -1), S("div", vt, [w(ge, {
				class: T(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": U.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: A(() => [w(ee, {
					modelValue: U.value,
					"onUpdate:modelValue": O[15] ||= (e) => U.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: A(() => [w(te, {
						as: "div",
						label: "share-ui"
					}, {
						icon: A(() => [...O[64] ||= [S("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: A(() => [
						w(y, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: A(() => [...O[65] ||= [S("span", null, "⌂", -1)]]),
							_: 1
						}),
						w(ae, { label: "Примеры" }),
						w(y, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: A(() => [...O[66] ||= [S("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: A(() => [...O[67] ||= [S("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: A(() => [O[68] ||= S("div", { class: "share-component-gallery__chrome-content" }, [
					S("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					S("strong", null, "AppShell + AppSidebar"),
					S("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			S("section", yt, [w(a, {
				title: "Оверлеи и morph",
				border: ""
			}), S("article", bt, [O[70] ||= S("h2", null, "Интерактивные примеры", -1), S("div", xt, [
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
			K.value ? (E(), b(se, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: O[22] ||= (e) => K.value = !1
			}, {
				default: A(() => [...O[71] ||= [S("div", { class: "share-component-gallery__overlay-content" }, [S("h2", null, "AppModal"), S("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : x("", !0),
			q.value ? (E(), b(s, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: O[25] ||= (e) => q.value = !1
			}, {
				footer: A(() => [w(v, {
					onCancel: O[23] ||= (e) => q.value = !1,
					onSubmit: O[24] ||= (e) => q.value = !1
				})]),
				default: A(() => [O[72] ||= S("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : x("", !0),
			w(xe, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: O[26] ||= (e) => J.value = !1
			}, {
				default: A(() => [...O[73] ||= [S("div", { class: "share-component-gallery__overlay-content" }, [S("h2", null, "ModalShell"), S("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			w(ve, {
				open: Y.value,
				"onUpdate:open": O[27] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			w(de, {
				open: X.value,
				"onUpdate:open": O[28] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (E(), b(fe, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: O[29] ||= (e) => Z.value = !1
			}, {
				head: A(() => [...O[74] ||= [S("div", { class: "share-component-gallery__morph-head" }, [S("strong", null, "MorphSheet")], -1)]]),
				default: A(() => [O[75] ||= S("div", { class: "share-component-gallery__overlay-content" }, [S("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : x("", !0)
		]));
	}
}, [["__scopeId", "data-v-21c5317b"]]);
//#endregion
export { N as COMPONENT_GALLERY_ALIASES, M as COMPONENT_GALLERY_COMPONENTS, F as ComponentGallery };
