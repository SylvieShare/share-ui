import { A as e, C as t, D as n, E as r, F as i, G as a, K as ee, M as te, N as ne, O as re, P as ie, Q as o, T as ae, X as oe, Z as se, _ as ce, _t as s, a as le, b as ue, c as de, ct as fe, d as pe, dt as c, et as l, f as me, ft as u, g as he, gt as d, ht as f, i as p, k as ge, l as _e, lt as ve, m as ye, mt as be, n as m, o as h, p as g, pt as xe, r as _, s as Se, t as v, tt as Ce, u as y, ut as we, v as b, vt as x, w as Te, y as Ee, yt as S } from "./useGuidedTour-D4orezbt.js";
import { Fragment as C, createBlock as w, createCommentVNode as T, createElementBlock as E, createElementVNode as D, createTextVNode as O, createVNode as k, normalizeClass as De, openBlock as A, reactive as j, ref as M, toDisplayString as N, unref as P, withCtx as F, withModifiers as I } from "vue";
//#region src/gallery/TourGalleryExample.vue
var Oe = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = M(null), n = o(640), r = j(v());
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
		return (e, a) => (A(), E(C, null, [k(_, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: F(() => [...a[0] ||= [O("Показать обучение", -1)]]),
			_: 1
		}, 512), k(m, {
			tour: r,
			mobile: P(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, L = Object.freeze(/* @__PURE__ */ "GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.SectionList.AddButton.ActionButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), R = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), ke = { class: "share-component-gallery" }, Ae = { class: "share-component-gallery__header" }, je = { class: "share-component-gallery__eyebrow" }, Me = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, Ne = { class: "share-component-gallery__section" }, Pe = { class: "share-component-gallery__grid" }, Fe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile SectionLabel"
}, Ie = { class: "share-component-gallery__tile-row" }, Le = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, Re = { class: "share-component-gallery__row" }, ze = { class: "share-component-gallery__row" }, Be = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, Ve = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, He = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton"
}, Ue = { class: "share-component-gallery__row" }, We = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Ge = { class: "share-component-gallery__section" }, Ke = { class: "share-component-gallery__grid" }, qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Je = { class: "share-component-gallery__stack" }, Ye = { class: "share-component-gallery__checkbox-row" }, Xe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, Ze = { class: "share-component-gallery__stack" }, Qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, $e = { class: "share-component-gallery__slider" }, et = { class: "share-component-gallery__section" }, tt = { class: "share-component-gallery__grid" }, nt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, rt = { class: "share-component-gallery__form-grid" }, it = { class: "share-component-gallery__section" }, at = { class: "share-component-gallery__grid" }, ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, st = { class: "share-component-gallery__stack" }, ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, dt = { class: "share-component-gallery__section" }, ft = { class: "share-component-gallery__grid" }, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, mt = ["onMousedown"], ht = ["onMousedown"], gt = { class: "share-component-gallery__preview" }, _t = { class: "share-component-gallery__rich-node" }, vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, yt = { class: "share-component-gallery__section" }, bt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, xt = { class: "share-component-gallery__chrome" }, St = { class: "share-component-gallery__section" }, Ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, wt = { class: "share-component-gallery__row" }, z = /*#__PURE__*/ S({
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
	setup(o) {
		let m = L.length, v = M(!0), S = M(!0), C = M("md"), R = M("preview"), z = M(62), B = M("rare"), V = M("#7c5ce2"), H = M("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), U = M(!0), W = M(!1), G = M(null), K = M(!1), q = M(!1), J = M(!1), Y = M(!1), X = M(!1), Z = M(!1), Q = M(null), Tt = [
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
		], Et = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Dt = [
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
		], Ot = [
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
		], $ = j({
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function kt(e) {
			return `${e} МБ`;
		}
		function At() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (j, M) => (A(), E("div", ke, [
			D("header", Ae, [D("div", null, [
				D("p", je, "share-ui · " + N(P(m)) + " компонентов", 1),
				D("h1", null, N(o.title), 1),
				D("p", null, N(o.description), 1)
			]), M[30] ||= D("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			D("section", Me, [M[31] ||= D("h2", null, "GuidedTour", -1), k(Oe)]),
			D("section", Ne, [k(c, {
				title: "Поверхности и действия",
				border: ""
			}), D("div", Pe, [
				D("article", Fe, [M[34] ||= D("h2", null, "BaseTile", -1), D("div", Ie, [k(x, {
					strip: "",
					tint: "",
					interactive: "",
					class: "share-component-gallery__tile"
				}, {
					default: F(() => [...M[32] ||= [D("strong", null, "Акцентная плитка", -1), D("span", null, "strip · tint · interactive", -1)]]),
					_: 1
				}), k(x, {
					framed: "",
					class: "share-component-gallery__tile"
				}, {
					default: F(() => [...M[33] ||= [D("strong", null, "Рамка", -1), D("span", null, "framed", -1)]]),
					_: 1
				})])]),
				D("article", Le, [
					M[35] ||= D("h2", null, "Загрузка", -1),
					k(p, { label: "Открываем раздел…" }),
					k(p, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					k(b, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					D("div", Re, [
						k(b, {
							label: "Загрузка",
							size: "sm"
						}),
						k(b, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						k(b, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					D("div", ze, [k(le, {
						width: "36px",
						height: "36px",
						round: ""
					}), k(le, { width: "60%" })])
				]),
				D("article", Be, [
					M[36] ||= D("h2", null, "InlineEdit", -1),
					k(h, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					k(h, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					k(h, {
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
				D("article", Ve, [
					M[40] ||= D("h2", null, "SectionList", -1),
					k(s, { title: "Записи" }, {
						footer: F(() => [k(d, { label: "Добавить запись" })]),
						default: F(() => [M[37] ||= D("div", { style: { padding: "12px 0" } }, "Первая запись", -1), M[38] ||= D("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					k(s, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: F(() => [...M[39] ||= [D("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), D("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				D("article", He, [M[46] ||= D("h2", null, "Кнопки элементов", -1), D("div", Ue, [
					k(_, null, {
						default: F(() => [...M[41] ||= [O("Основное действие", -1)]]),
						_: 1
					}),
					k(_, { variant: "secondary" }, {
						default: F(() => [...M[42] ||= [O("Вторичное", -1)]]),
						_: 1
					}),
					k(_, { variant: "quiet" }, {
						default: F(() => [...M[43] ||= [O("Тихое", -1)]]),
						_: 1
					}),
					k(_, { disabled: "" }, {
						default: F(() => [...M[44] ||= [O("Недоступно", -1)]]),
						_: 1
					}),
					k(_, {
						loading: "",
						"loading-label": "Загрузка"
					}, {
						default: F(() => [...M[45] ||= [O("Загрузка", -1)]]),
						_: 1
					}),
					k(d, { label: "Добавить элемент" }),
					k(d, {
						label: "Добавить",
						variant: "icon"
					}),
					k(u, { label: "Удалить" }),
					k(u, {
						label: "Удалить",
						variant: "boxed"
					}),
					k(u, {
						label: "Удалить запись",
						icon: "trash"
					}),
					k(u, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					k(u, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				D("article", We, [M[47] ||= D("h2", null, "SegmentDonutChart", -1), k(we, {
					segments: Ot,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": kt
				})])
			])]),
			D("section", Ge, [k(c, {
				title: "Переключатели",
				border: ""
			}), D("div", Ke, [
				D("article", qe, [M[49] ||= D("h2", null, "Boolean controls", -1), D("div", Je, [k(fe, {
					modelValue: v.value,
					"onUpdate:modelValue": M[0] ||= (e) => v.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), D("label", Ye, [k(be, {
					modelValue: S.value,
					"onUpdate:modelValue": M[1] ||= (e) => S.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), M[48] ||= O(" Выбрать элемент ", -1)])])]),
				D("article", Xe, [M[50] ||= D("h2", null, "Segmented controls", -1), D("div", Ze, [k(xe, {
					modelValue: C.value,
					"onUpdate:modelValue": M[2] ||= (e) => C.value = e,
					options: Tt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), k(ve, {
					modelValue: R.value,
					"onUpdate:modelValue": M[3] ||= (e) => R.value = e,
					tabs: Et,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				D("article", Qe, [M[51] ||= D("h2", null, "AppSlider", -1), D("div", $e, [k(f, {
					modelValue: z.value,
					"onUpdate:modelValue": M[4] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), D("strong", null, N(z.value), 1)])])
			])]),
			D("section", et, [k(c, {
				title: "Формы",
				border: ""
			}), D("div", tt, [D("article", nt, [
				M[53] ||= D("h2", null, "Form primitives", -1),
				D("div", rt, [
					k(y, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: F(() => [k(me, {
							value: $.name,
							"onUpdate:value": M[5] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					k(y, {
						label: "Количество",
						vertical: ""
					}, {
						default: F(() => [k(_e, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: M[6] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					k(y, {
						label: "Тип",
						vertical: ""
					}, {
						default: F(() => [k(de, {
							value: $.type,
							"onUpdate:value": M[7] ||= (e) => $.type = e
						}, {
							default: F(() => [...M[52] ||= [D("option", { value: "base" }, "Основной", -1), D("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					k(y, {
						label: "Описание",
						vertical: ""
					}, {
						default: F(() => [k(Se, {
							value: $.description,
							"onUpdate:value": M[8] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				k(g, {
					"submit-text": "Сохранить",
					onCancel: At
				})
			])])]),
			D("section", it, [k(c, {
				title: "Выбор значений и floating UI",
				border: ""
			}), D("div", at, [
				D("article", ot, [M[54] ||= D("h2", null, "Selectors", -1), D("div", st, [k(a, {
					modelValue: B.value,
					"onUpdate:modelValue": M[9] ||= (e) => B.value = e,
					options: Dt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), k(ee, {
					modelValue: V.value,
					"onUpdate:modelValue": M[10] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				D("article", ct, [
					M[56] ||= D("h2", null, "BasePopover", -1),
					D("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: M[11] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					k(se, {
						open: W.value,
						anchor: G.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": M[12] ||= (e) => W.value = e
					}, {
						default: F(() => [...M[55] ||= [D("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				D("article", lt, [M[62] ||= D("h2", null, "ActionMenu", -1), k(Ce, { title: "Действия" }, {
					default: F(() => [
						k(l, { tone: "accent" }, {
							default: F(() => [...M[57] ||= [O("Редактировать", -1)]]),
							_: 1
						}),
						k(oe, { label: "Перемещение" }, {
							trigger: F(({ open: e }) => [k(l, {
								submenu: "",
								"submenu-open": e
							}, {
								default: F(() => [...M[58] ||= [O("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: F(() => [k(l, null, {
								default: F(() => [...M[59] ||= [O("В начало", -1)]]),
								_: 1
							}), k(l, null, {
								default: F(() => [...M[60] ||= [O("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						k(l, { tone: "danger" }, {
							default: F(() => [...M[61] ||= [O("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				D("article", ut, [M[65] ||= D("h2", null, "AccountMenu", -1), k(ne, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: F(({ close: e }) => [k(l, { onClick: e }, {
						default: F(() => [...M[63] ||= [O("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), k(l, {
						tone: "danger",
						onClick: e
					}, {
						default: F(() => [...M[64] ||= [O("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			D("section", dt, [k(c, {
				title: "Редакторы и rich text",
				border: ""
			}), D("div", ft, [D("article", pt, [
				M[66] ||= D("h2", null, "Rich text", -1),
				k(ie, {
					ref: "richEditor",
					modelValue: H.value,
					"onUpdate:modelValue": M[13] ||= (e) => H.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: F(({ editor: e, insertRichNode: t }) => [D("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: I((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, mt), D("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: I((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, ht)]),
					_: 1
				}, 8, ["modelValue"]),
				D("div", gt, [k(i, { html: H.value }, {
					node: F(({ node: e }) => [D("strong", _t, N(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), D("article", vt, [M[69] ||= D("h2", null, "Editor composition", -1), k(x, null, {
				default: F(() => [k(r, { title: "Параметры" }, {
					default: F(() => [k(Te, { title: "Основное" }, {
						default: F(() => [k(ae, { title: "Значение" }, {
							actions: F(() => [...M[67] ||= [D("span", null, "12", -1)]]),
							_: 1
						}), k(f, {
							modelValue: z.value,
							"onUpdate:modelValue": M[14] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), k(t, null, {
						default: F(() => [M[68] ||= O("Итого: ", -1), D("strong", null, N(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			D("section", yt, [k(c, {
				title: "Каркас приложения",
				border: ""
			}), D("article", bt, [M[75] ||= D("h2", null, "Navigation composition", -1), D("div", xt, [k(te, {
				class: De(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": U.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: F(() => [k(e, {
					modelValue: U.value,
					"onUpdate:modelValue": M[15] ||= (e) => U.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: F(() => [k(ge, {
						as: "div",
						label: "share-ui"
					}, {
						icon: F(() => [...M[70] ||= [D("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: F(() => [
						k(n, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: F(() => [...M[71] ||= [D("span", null, "⌂", -1)]]),
							_: 1
						}),
						k(re, { label: "Примеры" }),
						k(n, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: F(() => [...M[72] ||= [D("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: F(() => [...M[73] ||= [D("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: F(() => [M[74] ||= D("div", { class: "share-component-gallery__chrome-content" }, [
					D("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					D("strong", null, "AppShell + AppSidebar"),
					D("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			D("section", St, [k(c, {
				title: "Оверлеи и morph",
				border: ""
			}), D("article", Ct, [M[76] ||= D("h2", null, "Интерактивные примеры", -1), D("div", wt, [
				D("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[16] ||= (e) => K.value = !0
				}, "AppModal"),
				D("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[17] ||= (e) => q.value = !0
				}, "AppModalFrame"),
				D("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[18] ||= (e) => J.value = !0
				}, "ModalShell"),
				D("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[19] ||= (e) => Y.value = !0
				}, "ConfirmDialog"),
				D("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[20] ||= (e) => X.value = !0
				}, "TextPromptDialog"),
				D("button", {
					ref_key: "morphOrigin",
					ref: Q,
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[21] ||= (e) => Z.value = !0
				}, "MorphSheet", 512)
			])])]),
			K.value ? (A(), w(ue, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: M[22] ||= (e) => K.value = !1
			}, {
				default: F(() => [...M[77] ||= [D("div", { class: "share-component-gallery__overlay-content" }, [D("h2", null, "AppModal"), D("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : T("", !0),
			q.value ? (A(), w(Ee, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: M[25] ||= (e) => q.value = !1
			}, {
				footer: F(() => [k(g, {
					onCancel: M[23] ||= (e) => q.value = !1,
					onSubmit: M[24] ||= (e) => q.value = !1
				})]),
				default: F(() => [M[78] ||= D("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : T("", !0),
			k(he, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: M[26] ||= (e) => J.value = !1
			}, {
				default: F(() => [...M[79] ||= [D("div", { class: "share-component-gallery__overlay-content" }, [D("h2", null, "ModalShell"), D("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			k(ce, {
				open: Y.value,
				"onUpdate:open": M[27] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			k(pe, {
				open: X.value,
				"onUpdate:open": M[28] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Z.value ? (A(), w(ye, {
				key: 2,
				"origin-el": Q.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: M[29] ||= (e) => Z.value = !1
			}, {
				head: F(() => [...M[80] ||= [D("div", { class: "share-component-gallery__morph-head" }, [D("strong", null, "MorphSheet")], -1)]]),
				default: F(() => [M[81] ||= D("div", { class: "share-component-gallery__overlay-content" }, [D("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : T("", !0)
		]));
	}
}, [["__scopeId", "data-v-6121e869"]]);
//#endregion
export { R as COMPONENT_GALLERY_ALIASES, L as COMPONENT_GALLERY_COMPONENTS, z as ComponentGallery };
