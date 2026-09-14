import { A as e, C as t, D as n, E as r, F as i, G as a, K as ee, M as te, N as ne, O as re, P as ie, Q as o, St as s, T as ae, X as oe, Z as se, _ as ce, _t as c, a as l, b as le, bt as ue, c as de, ct as fe, d as pe, dt as u, et as d, f as me, ft as f, g as he, gt as p, ht as ge, i as m, k as _e, l as ve, lt as ye, m as be, mt as xe, n as h, o as g, p as Se, pt as Ce, r as _, s as we, t as v, tt as Te, u as y, ut as Ee, v as b, vt as De, w as Oe, xt as x, y as ke, yt as S } from "./useGuidedTour-03a45KO2.js";
import { Fragment as C, createBlock as w, createCommentVNode as T, createElementBlock as E, createElementVNode as D, createTextVNode as O, createVNode as k, normalizeClass as Ae, openBlock as A, reactive as j, ref as M, toDisplayString as N, unref as P, withCtx as F, withModifiers as I } from "vue";
//#region src/gallery/TourGalleryExample.vue
var je = {
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
		}, 512), k(h, {
			tour: r,
			mobile: P(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, L = Object.freeze(/* @__PURE__ */ "GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), R = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Me = { class: "share-component-gallery" }, Ne = { class: "share-component-gallery__header" }, Pe = { class: "share-component-gallery__eyebrow" }, Fe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, Ie = { class: "share-component-gallery__section" }, Le = { class: "share-component-gallery__grid" }, Re = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, ze = { class: "share-component-gallery__tile-row" }, Be = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, Ve = { class: "share-component-gallery__row" }, He = { class: "share-component-gallery__row" }, Ue = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, We = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Ge = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton"
}, Ke = { class: "share-component-gallery__row" }, qe = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Je = { class: "share-component-gallery__section" }, Ye = { class: "share-component-gallery__grid" }, Xe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Ze = { class: "share-component-gallery__stack" }, Qe = { class: "share-component-gallery__checkbox-row" }, $e = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, et = { class: "share-component-gallery__stack" }, tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, nt = { class: "share-component-gallery__slider" }, rt = { class: "share-component-gallery__section" }, it = { class: "share-component-gallery__grid" }, at = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, ot = { class: "share-component-gallery__form-grid" }, st = { class: "share-component-gallery__section" }, ct = { class: "share-component-gallery__grid" }, lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, ut = { class: "share-component-gallery__stack" }, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, mt = { class: "share-component-gallery__section" }, ht = { class: "share-component-gallery__grid" }, gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, _t = ["onMousedown"], vt = ["onMousedown"], yt = { class: "share-component-gallery__preview" }, bt = { class: "share-component-gallery__rich-node" }, xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, St = { class: "share-component-gallery__section" }, Ct = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, wt = { class: "share-component-gallery__chrome" }, Tt = { class: "share-component-gallery__section" }, Et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, Dt = { class: "share-component-gallery__row" }, z = /*#__PURE__*/ s({
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
		let s = L.length, h = M(!0), v = M(!0), C = M("md"), R = M("preview"), z = M(62), B = M("rare"), V = M("#7c5ce2"), H = M("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), U = M(!0), W = M(!1), G = M(null), K = M(!1), q = M(!1), J = M(!1), Y = M(!1), X = M(!1), Z = M(0), Q = M(!1), Ot = M(null), kt = [
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
		], At = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], jt = [
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
		], Mt = [
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
		function Nt(e) {
			return `${e} МБ`;
		}
		function Pt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (j, M) => (A(), E("div", Me, [
			D("header", Ne, [D("div", null, [
				D("p", Pe, "share-ui · " + N(P(s)) + " компонентов", 1),
				D("h1", null, N(o.title), 1),
				D("p", null, N(o.description), 1)
			]), M[31] ||= D("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			D("section", Fe, [M[32] ||= D("h2", null, "GuidedTour", -1), k(je)]),
			D("section", Ie, [k(u, {
				title: "Поверхности и действия",
				border: ""
			}), D("div", Le, [
				D("article", Re, [
					M[41] ||= D("h2", null, "BaseTile", -1),
					k(_, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: F(() => [...M[33] ||= [O("✦", -1)]]),
						_: 1
					}),
					D("div", ze, [
						k(x, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: F(() => [
								k(De),
								M[34] ||= D("strong", null, "Акцентная плитка", -1),
								M[35] ||= D("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						k(x, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: F(() => [...M[36] ||= [D("strong", null, "Рамка", -1), D("span", null, "framed", -1)]]),
							_: 1
						}),
						k(S, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: M[0] ||= (e) => Z.value++
						}, {
							aside: F(() => [D("span", null, N(Z.value), 1)]),
							default: F(() => [M[37] ||= D("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						k(S, { title: "Только просмотр" }, {
							default: F(() => [...M[38] ||= [D("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						k(S, null, {
							default: F(() => [...M[39] ||= [D("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						k(S, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: F(() => [...M[40] ||= [D("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						k(ue, { title: "Общий заголовок" })
					])
				]),
				D("article", Be, [
					M[42] ||= D("h2", null, "Загрузка", -1),
					k(m, { label: "Открываем раздел…" }),
					k(m, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					k(b, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					D("div", Ve, [
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
					D("div", He, [k(l, {
						width: "36px",
						height: "36px",
						round: ""
					}), k(l, { width: "60%" })])
				]),
				D("article", Ue, [
					M[43] ||= D("h2", null, "InlineEdit", -1),
					k(g, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					k(g, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					k(g, {
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
				D("article", We, [
					M[47] ||= D("h2", null, "SectionList", -1),
					k(c, { title: "Записи" }, {
						footer: F(() => [k(p, { label: "Добавить запись" })]),
						default: F(() => [M[44] ||= D("div", { style: { padding: "12px 0" } }, "Первая запись", -1), M[45] ||= D("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					k(c, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: F(() => [...M[46] ||= [D("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), D("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				D("article", Ge, [M[53] ||= D("h2", null, "Кнопки элементов", -1), D("div", Ke, [
					k(_, null, {
						default: F(() => [...M[48] ||= [O("Основное действие", -1)]]),
						_: 1
					}),
					k(_, { variant: "secondary" }, {
						default: F(() => [...M[49] ||= [O("Вторичное", -1)]]),
						_: 1
					}),
					k(_, { variant: "quiet" }, {
						default: F(() => [...M[50] ||= [O("Тихое", -1)]]),
						_: 1
					}),
					k(_, { disabled: "" }, {
						default: F(() => [...M[51] ||= [O("Недоступно", -1)]]),
						_: 1
					}),
					k(_, {
						loading: "",
						"loading-label": "Загрузка"
					}, {
						default: F(() => [...M[52] ||= [O("Загрузка", -1)]]),
						_: 1
					}),
					k(p, { label: "Добавить элемент" }),
					k(p, {
						label: "Добавить",
						variant: "icon"
					}),
					k(f, { label: "Удалить" }),
					k(f, {
						label: "Удалить",
						variant: "boxed"
					}),
					k(f, {
						label: "Удалить запись",
						icon: "trash"
					}),
					k(f, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					k(f, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				D("article", qe, [M[54] ||= D("h2", null, "SegmentDonutChart", -1), k(Ee, {
					segments: Mt,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Nt
				})])
			])]),
			D("section", Je, [k(u, {
				title: "Переключатели",
				border: ""
			}), D("div", Ye, [
				D("article", Xe, [M[56] ||= D("h2", null, "Boolean controls", -1), D("div", Ze, [k(fe, {
					modelValue: h.value,
					"onUpdate:modelValue": M[1] ||= (e) => h.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), D("label", Qe, [k(xe, {
					modelValue: v.value,
					"onUpdate:modelValue": M[2] ||= (e) => v.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), M[55] ||= O(" Выбрать элемент ", -1)])])]),
				D("article", $e, [M[57] ||= D("h2", null, "Segmented controls", -1), D("div", et, [k(Ce, {
					modelValue: C.value,
					"onUpdate:modelValue": M[3] ||= (e) => C.value = e,
					options: kt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), k(ye, {
					modelValue: R.value,
					"onUpdate:modelValue": M[4] ||= (e) => R.value = e,
					tabs: At,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				D("article", tt, [M[58] ||= D("h2", null, "AppSlider", -1), D("div", nt, [k(ge, {
					modelValue: z.value,
					"onUpdate:modelValue": M[5] ||= (e) => z.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), D("strong", null, N(z.value), 1)])])
			])]),
			D("section", rt, [k(u, {
				title: "Формы",
				border: ""
			}), D("div", it, [D("article", at, [
				M[60] ||= D("h2", null, "Form primitives", -1),
				D("div", ot, [
					k(y, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: F(() => [k(me, {
							value: $.name,
							"onUpdate:value": M[6] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					k(y, {
						label: "Количество",
						vertical: ""
					}, {
						default: F(() => [k(ve, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: M[7] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					k(y, {
						label: "Тип",
						vertical: ""
					}, {
						default: F(() => [k(de, {
							value: $.type,
							"onUpdate:value": M[8] ||= (e) => $.type = e
						}, {
							default: F(() => [...M[59] ||= [D("option", { value: "base" }, "Основной", -1), D("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					k(y, {
						label: "Описание",
						vertical: ""
					}, {
						default: F(() => [k(we, {
							value: $.description,
							"onUpdate:value": M[9] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				k(Se, {
					"submit-text": "Сохранить",
					onCancel: Pt
				})
			])])]),
			D("section", st, [k(u, {
				title: "Выбор значений и floating UI",
				border: ""
			}), D("div", ct, [
				D("article", lt, [M[61] ||= D("h2", null, "Selectors", -1), D("div", ut, [k(a, {
					modelValue: B.value,
					"onUpdate:modelValue": M[10] ||= (e) => B.value = e,
					options: jt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), k(ee, {
					modelValue: V.value,
					"onUpdate:modelValue": M[11] ||= (e) => V.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				D("article", dt, [
					M[63] ||= D("h2", null, "BasePopover", -1),
					D("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: M[12] ||= (e) => W.value = !W.value
					}, " Открыть popover ", 512),
					k(se, {
						open: W.value,
						anchor: G.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": M[13] ||= (e) => W.value = e
					}, {
						default: F(() => [...M[62] ||= [D("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				D("article", ft, [M[69] ||= D("h2", null, "ActionMenu", -1), k(Te, { title: "Действия" }, {
					default: F(() => [
						k(d, { tone: "accent" }, {
							default: F(() => [...M[64] ||= [O("Редактировать", -1)]]),
							_: 1
						}),
						k(oe, { label: "Перемещение" }, {
							trigger: F(({ open: e }) => [k(d, {
								submenu: "",
								"submenu-open": e
							}, {
								default: F(() => [...M[65] ||= [O("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: F(() => [k(d, null, {
								default: F(() => [...M[66] ||= [O("В начало", -1)]]),
								_: 1
							}), k(d, null, {
								default: F(() => [...M[67] ||= [O("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						k(d, { tone: "danger" }, {
							default: F(() => [...M[68] ||= [O("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				D("article", pt, [M[72] ||= D("h2", null, "AccountMenu", -1), k(ne, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: F(({ close: e }) => [k(d, { onClick: e }, {
						default: F(() => [...M[70] ||= [O("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), k(d, {
						tone: "danger",
						onClick: e
					}, {
						default: F(() => [...M[71] ||= [O("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			D("section", mt, [k(u, {
				title: "Редакторы и rich text",
				border: ""
			}), D("div", ht, [D("article", gt, [
				M[73] ||= D("h2", null, "Rich text", -1),
				k(ie, {
					ref: "richEditor",
					modelValue: H.value,
					"onUpdate:modelValue": M[14] ||= (e) => H.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: F(({ editor: e, insertRichNode: t }) => [D("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: I((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, _t), D("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: I((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, vt)]),
					_: 1
				}, 8, ["modelValue"]),
				D("div", yt, [k(i, { html: H.value }, {
					node: F(({ node: e }) => [D("strong", bt, N(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), D("article", xt, [M[76] ||= D("h2", null, "Editor composition", -1), k(x, null, {
				default: F(() => [k(r, { title: "Параметры" }, {
					default: F(() => [k(Oe, { title: "Основное" }, {
						default: F(() => [k(ae, { title: "Значение" }, {
							actions: F(() => [...M[74] ||= [D("span", null, "12", -1)]]),
							_: 1
						}), k(ge, {
							modelValue: z.value,
							"onUpdate:modelValue": M[15] ||= (e) => z.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), k(t, null, {
						default: F(() => [M[75] ||= O("Итого: ", -1), D("strong", null, N(z.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			D("section", St, [k(u, {
				title: "Каркас приложения",
				border: ""
			}), D("article", Ct, [M[82] ||= D("h2", null, "Navigation composition", -1), D("div", wt, [k(te, {
				class: Ae(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": U.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: F(() => [k(e, {
					modelValue: U.value,
					"onUpdate:modelValue": M[16] ||= (e) => U.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: F(() => [k(_e, {
						as: "div",
						label: "share-ui"
					}, {
						icon: F(() => [...M[77] ||= [D("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: F(() => [
						k(n, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: F(() => [...M[78] ||= [D("span", null, "⌂", -1)]]),
							_: 1
						}),
						k(re, { label: "Примеры" }),
						k(n, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: F(() => [...M[79] ||= [D("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: F(() => [...M[80] ||= [D("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: F(() => [M[81] ||= D("div", { class: "share-component-gallery__chrome-content" }, [
					D("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					D("strong", null, "AppShell + AppSidebar"),
					D("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			D("section", Tt, [k(u, {
				title: "Оверлеи и morph",
				border: ""
			}), D("article", Et, [M[83] ||= D("h2", null, "Интерактивные примеры", -1), D("div", Dt, [
				D("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[17] ||= (e) => K.value = !0
				}, "AppModal"),
				D("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[18] ||= (e) => q.value = !0
				}, "AppModalFrame"),
				D("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[19] ||= (e) => J.value = !0
				}, "ModalShell"),
				D("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[20] ||= (e) => Y.value = !0
				}, "ConfirmDialog"),
				D("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[21] ||= (e) => X.value = !0
				}, "TextPromptDialog"),
				D("button", {
					ref_key: "morphOrigin",
					ref: Ot,
					type: "button",
					class: "share-component-gallery__button",
					onClick: M[22] ||= (e) => Q.value = !0
				}, "MorphSheet", 512)
			])])]),
			K.value ? (A(), w(le, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: M[23] ||= (e) => K.value = !1
			}, {
				default: F(() => [...M[84] ||= [D("div", { class: "share-component-gallery__overlay-content" }, [D("h2", null, "AppModal"), D("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : T("", !0),
			q.value ? (A(), w(ke, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: M[26] ||= (e) => q.value = !1
			}, {
				footer: F(() => [k(Se, {
					onCancel: M[24] ||= (e) => q.value = !1,
					onSubmit: M[25] ||= (e) => q.value = !1
				})]),
				default: F(() => [M[85] ||= D("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : T("", !0),
			k(he, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: M[27] ||= (e) => J.value = !1
			}, {
				default: F(() => [...M[86] ||= [D("div", { class: "share-component-gallery__overlay-content" }, [D("h2", null, "ModalShell"), D("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			k(ce, {
				open: Y.value,
				"onUpdate:open": M[28] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			k(pe, {
				open: X.value,
				"onUpdate:open": M[29] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (A(), w(be, {
				key: 2,
				"origin-el": Ot.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: M[30] ||= (e) => Q.value = !1
			}, {
				head: F(() => [...M[87] ||= [D("div", { class: "share-component-gallery__morph-head" }, [D("strong", null, "MorphSheet")], -1)]]),
				default: F(() => [M[88] ||= D("div", { class: "share-component-gallery__overlay-content" }, [D("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : T("", !0)
		]));
	}
}, [["__scopeId", "data-v-8e2b75e1"]]);
//#endregion
export { R as COMPONENT_GALLERY_ALIASES, L as COMPONENT_GALLERY_COMPONENTS, z as ComponentGallery };
