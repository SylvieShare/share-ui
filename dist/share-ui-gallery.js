import { A as e, C as t, E as ee, H as te, K as n, O as r, S as i, T as ne, V as re, X as a, Z as ie, a as ae, at as oe, b as se, c as ce, ct as o, d as le, dt as s, ft as c, g as l, h as u, ht as d, i as ue, it as de, j as fe, k as pe, l as me, lt as he, m as ge, mt as f, n as p, o as _e, ot as ve, p as ye, pt as m, q as be, r as h, s as g, st as _, t as v, u as y, ut as xe, w as Se, x as Ce, y as we } from "./SkeletonBlock-Bz0gRXPu.js";
import { createBlock as b, createCommentVNode as x, createElementBlock as Te, createElementVNode as S, createTextVNode as C, createVNode as w, normalizeClass as T, openBlock as E, reactive as D, ref as O, toDisplayString as k, unref as Ee, withCtx as A, withModifiers as j } from "vue";
//#region src/lib/componentGalleryCatalog.js
var M = Object.freeze(/* @__PURE__ */ "LoadingIndicator.SkeletonBlock.BaseTile.SectionList.AddButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), N = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), De = { class: "share-component-gallery" }, Oe = { class: "share-component-gallery__header" }, ke = { class: "share-component-gallery__eyebrow" }, Ae = { class: "share-component-gallery__section" }, je = { class: "share-component-gallery__grid" }, Me = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile SectionLabel"
}, Ne = { class: "share-component-gallery__tile-row" }, Pe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock"
}, Fe = { class: "share-component-gallery__row" }, Ie = { class: "share-component-gallery__row" }, Le = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, P = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Re = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton"
}, ze = { class: "share-component-gallery__row" }, Be = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Ve = { class: "share-component-gallery__section" }, He = { class: "share-component-gallery__grid" }, Ue = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, We = { class: "share-component-gallery__stack" }, Ge = { class: "share-component-gallery__checkbox-row" }, Ke = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, qe = { class: "share-component-gallery__stack" }, Je = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Ye = { class: "share-component-gallery__slider" }, Xe = { class: "share-component-gallery__section" }, Ze = { class: "share-component-gallery__grid" }, Qe = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, $e = { class: "share-component-gallery__form-grid" }, et = { class: "share-component-gallery__section" }, tt = { class: "share-component-gallery__grid" }, nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, rt = { class: "share-component-gallery__stack" }, it = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, at = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, st = { class: "share-component-gallery__section" }, ct = { class: "share-component-gallery__grid" }, lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, ut = ["onMousedown"], dt = ["onMousedown"], ft = { class: "share-component-gallery__preview" }, pt = { class: "share-component-gallery__rich-node" }, mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, ht = { class: "share-component-gallery__section" }, gt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, _t = { class: "share-component-gallery__chrome" }, vt = { class: "share-component-gallery__section" }, yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, bt = { class: "share-component-gallery__row" }, F = /*#__PURE__*/ d({
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
		let N = M.length, F = O(!0), I = O(!0), L = O("md"), R = O("preview"), z = O(62), B = O("rare"), V = O("#7c5ce2"), H = O("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), U = O(!0), W = O(!1), G = O(null), K = O(!1), q = O(!1), J = O(!1), Y = O(!1), X = O(!1), Z = O(!1), Q = O(null), xt = [
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
		], St = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Ct = [
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
		], wt = [
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
		function Tt(e) {
			return `${e} МБ`;
		}
		function Et() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (D, O) => (E(), Te("div", De, [
			S("header", Oe, [S("div", null, [
				S("p", ke, "share-ui · " + k(Ee(N)) + " компонентов", 1),
				S("h1", null, k(d.title), 1),
				S("p", null, k(d.description), 1)
			]), O[30] ||= S("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			S("section", Ae, [w(_, {
				title: "Поверхности и действия",
				border: ""
			}), S("div", je, [
				S("article", Me, [O[33] ||= S("h2", null, "BaseTile", -1), S("div", Ne, [w(f, {
					strip: "",
					tint: "",
					interactive: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...O[31] ||= [S("strong", null, "Акцентная плитка", -1), S("span", null, "strip · tint · interactive", -1)]]),
					_: 1
				}), w(f, {
					framed: "",
					class: "share-component-gallery__tile"
				}, {
					default: A(() => [...O[32] ||= [S("strong", null, "Рамка", -1), S("span", null, "framed", -1)]]),
					_: 1
				})])]),
				S("article", Pe, [
					O[34] ||= S("h2", null, "Загрузка", -1),
					S("div", Fe, [
						w(p, {
							label: "Загрузка",
							size: "sm"
						}),
						w(p, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						w(p, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					S("div", Ie, [w(v, {
						width: "36px",
						height: "36px",
						round: ""
					}), w(v, { width: "60%" })])
				]),
				S("article", Le, [
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
				S("article", P, [
					O[39] ||= S("h2", null, "SectionList", -1),
					w(m, { title: "Записи" }, {
						footer: A(() => [w(c, { label: "Добавить запись" })]),
						default: A(() => [O[36] ||= S("div", { style: { padding: "12px 0" } }, "Первая запись", -1), O[37] ||= S("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					w(m, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: A(() => [...O[38] ||= [S("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), S("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				S("article", Re, [O[40] ||= S("h2", null, "Кнопки элементов", -1), S("div", ze, [
					w(c, { label: "Добавить элемент" }),
					w(c, {
						label: "Добавить",
						variant: "icon"
					}),
					w(o, { label: "Удалить" }),
					w(o, {
						label: "Удалить",
						variant: "boxed"
					}),
					w(o, {
						label: "Удалить запись",
						icon: "trash"
					}),
					w(o, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					w(o, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				S("article", Be, [O[41] ||= S("h2", null, "SegmentDonutChart", -1), w(ve, {
					segments: wt,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Tt
				})])
			])]),
			S("section", Ve, [w(_, {
				title: "Переключатели",
				border: ""
			}), S("div", He, [
				S("article", Ue, [O[43] ||= S("h2", null, "Boolean controls", -1), S("div", We, [w(de, {
					modelValue: F.value,
					"onUpdate:modelValue": O[0] ||= (e) => F.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), S("label", Ge, [w(xe, {
					modelValue: I.value,
					"onUpdate:modelValue": O[1] ||= (e) => I.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), O[42] ||= C(" Выбрать элемент ", -1)])])]),
				S("article", Ke, [O[44] ||= S("h2", null, "Segmented controls", -1), S("div", qe, [w(he, {
					modelValue: L.value,
					"onUpdate:modelValue": O[2] ||= (e) => L.value = e,
					options: xt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), w(oe, {
					modelValue: R.value,
					"onUpdate:modelValue": O[3] ||= (e) => R.value = e,
					tabs: St,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				S("article", Je, [O[45] ||= S("h2", null, "AppSlider", -1), S("div", Ye, [w(s, {
					modelValue: z.value,
					"onUpdate:modelValue": O[4] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), S("strong", null, k(z.value), 1)])])
			])]),
			S("section", Xe, [w(_, {
				title: "Формы",
				border: ""
			}), S("div", Ze, [S("article", Qe, [
				O[47] ||= S("h2", null, "Form primitives", -1),
				S("div", $e, [
					w(g, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: A(() => [w(me, {
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
						default: A(() => [w(_e, {
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
						default: A(() => [w(ae, {
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
						default: A(() => [w(ue, {
							value: $.description,
							"onUpdate:value": O[8] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				w(y, {
					"submit-text": "Сохранить",
					onCancel: Et
				})
			])])]),
			S("section", et, [w(_, {
				title: "Выбор значений и floating UI",
				border: ""
			}), S("div", tt, [
				S("article", nt, [O[48] ||= S("h2", null, "Selectors", -1), S("div", rt, [w(re, {
					modelValue: B.value,
					"onUpdate:modelValue": O[9] ||= (e) => B.value = e,
					options: Ct,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), w(te, {
					modelValue: V.value,
					"onUpdate:modelValue": O[10] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				S("article", it, [
					O[50] ||= S("h2", null, "BasePopover", -1),
					S("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: O[11] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					w(be, {
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
				S("article", at, [O[56] ||= S("h2", null, "ActionMenu", -1), w(ie, { title: "Действия" }, {
					default: A(() => [
						w(a, { tone: "accent" }, {
							default: A(() => [...O[51] ||= [C("Редактировать", -1)]]),
							_: 1
						}),
						w(n, { label: "Перемещение" }, {
							trigger: A(({ open: e }) => [w(a, {
								submenu: "",
								"submenu-open": e
							}, {
								default: A(() => [...O[52] ||= [C("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: A(() => [w(a, null, {
								default: A(() => [...O[53] ||= [C("В начало", -1)]]),
								_: 1
							}), w(a, null, {
								default: A(() => [...O[54] ||= [C("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						w(a, { tone: "danger" }, {
							default: A(() => [...O[55] ||= [C("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				S("article", ot, [O[59] ||= S("h2", null, "AccountMenu", -1), w(pe, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: A(({ close: e }) => [w(a, { onClick: e }, {
						default: A(() => [...O[57] ||= [C("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), w(a, {
						tone: "danger",
						onClick: e
					}, {
						default: A(() => [...O[58] ||= [C("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			S("section", st, [w(_, {
				title: "Редакторы и rich text",
				border: ""
			}), S("div", ct, [S("article", lt, [
				O[60] ||= S("h2", null, "Rich text", -1),
				w(e, {
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
					}, "↗", 40, ut), S("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: j((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, dt)]),
					_: 1
				}, 8, ["modelValue"]),
				S("div", ft, [w(fe, { html: H.value }, {
					node: A(({ node: e }) => [S("strong", pt, k(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), S("article", mt, [O[63] ||= S("h2", null, "Editor composition", -1), w(f, null, {
				default: A(() => [w(i, { title: "Параметры" }, {
					default: A(() => [w(se, { title: "Основное" }, {
						default: A(() => [w(Ce, { title: "Значение" }, {
							actions: A(() => [...O[61] ||= [S("span", null, "12", -1)]]),
							_: 1
						}), w(s, {
							modelValue: z.value,
							"onUpdate:modelValue": O[14] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), w(we, null, {
						default: A(() => [O[62] ||= C("Итого: ", -1), S("strong", null, k(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			S("section", ht, [w(_, {
				title: "Каркас приложения",
				border: ""
			}), S("article", gt, [O[69] ||= S("h2", null, "Navigation composition", -1), S("div", _t, [w(r, {
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
					brand: A(() => [w(ne, {
						as: "div",
						label: "share-ui"
					}, {
						icon: A(() => [...O[64] ||= [S("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: A(() => [
						w(t, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: A(() => [...O[65] ||= [S("span", null, "⌂", -1)]]),
							_: 1
						}),
						w(Se, { label: "Примеры" }),
						w(t, {
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
			S("section", vt, [w(_, {
				title: "Оверлеи и morph",
				border: ""
			}), S("article", yt, [O[70] ||= S("h2", null, "Интерактивные примеры", -1), S("div", bt, [
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
			K.value ? (E(), b(l, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: O[22] ||= (e) => K.value = !1
			}, {
				default: A(() => [...O[71] ||= [S("div", { class: "share-component-gallery__overlay-content" }, [S("h2", null, "AppModal"), S("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : x("", !0),
			q.value ? (E(), b(u, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: O[25] ||= (e) => q.value = !1
			}, {
				footer: A(() => [w(y, {
					onCancel: O[23] ||= (e) => q.value = !1,
					onSubmit: O[24] ||= (e) => q.value = !1
				})]),
				default: A(() => [O[72] ||= S("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : x("", !0),
			w(ye, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: O[26] ||= (e) => J.value = !1
			}, {
				default: A(() => [...O[73] ||= [S("div", { class: "share-component-gallery__overlay-content" }, [S("h2", null, "ModalShell"), S("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			w(ge, {
				open: Y.value,
				"onUpdate:open": O[27] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			w(ce, {
				open: X.value,
				"onUpdate:open": O[28] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (E(), b(le, {
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
}, [["__scopeId", "data-v-9544469a"]]);
//#endregion
export { N as COMPONENT_GALLERY_ALIASES, M as COMPONENT_GALLERY_COMPONENTS, F as ComponentGallery };
