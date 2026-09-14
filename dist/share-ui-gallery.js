import { $ as e, A as t, B as n, C as r, Ct as i, D as a, Dt as o, E as s, Et as c, F as l, H as ee, I as te, L as ne, M as re, N as ie, Ot as u, P as ae, Q as oe, St as se, T as d, Tt as ce, V as le, _ as f, _t as ue, a as p, at as de, b as m, bt as fe, c as h, ct as pe, d as g, f as me, g as he, gt as ge, h as _e, ht as ve, i as _, it as ye, j as be, kt as v, l as y, m as xe, n as b, o as x, p as S, r as C, rt as Se, s as w, st as T, t as E, u as D, v as Ce, vt as O, w as we, wt as k, x as Te, xt as Ee, y as De, yt as A, z as Oe } from "./FloatingTooltip-DqHCJ5bD.js";
import { Fragment as j, createBlock as M, createCommentVNode as N, createElementBlock as P, createElementVNode as F, createTextVNode as I, createVNode as L, h as R, normalizeClass as ke, openBlock as z, reactive as B, ref as V, toDisplayString as H, unref as U, withCtx as W, withModifiers as G } from "vue";
//#region src/gallery/TourGalleryExample.vue
var Ae = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = V(null), n = de(640), r = B(h());
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
		return (e, a) => (z(), P(j, null, [L(D, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: W(() => [...a[0] ||= [I("Показать обучение", -1)]]),
			_: 1
		}, 512), L(y, {
			tour: r,
			mobile: U(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, je = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = V("star"), n = V(!1), r = V([]), i = V(null), a = V(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => R("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => R("span", "●") }
		}], s = V([{
			value: "first",
			label: "Первый"
		}, {
			value: "second",
			label: "Второй"
		}]);
		function c(e) {
			let t = String(s.value.length);
			s.value.push({
				value: t,
				label: e
			}), r.value = [...r.value, t];
		}
		return (e, l) => (z(), P(j, null, [L(p, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: W(() => [
				L(w, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				L(w, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				L(w, {
					percent: 100,
					label: "Полное значение"
				}),
				L(x, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				L(x, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				L(_, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: W(() => [...l[8] ||= [I("✦", -1)]]),
					trailing: W(() => [...l[9] ||= [I("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				L(_, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				L(b, {
					modelValue: r.value,
					"onUpdate:modelValue": l[2] ||= (e) => r.value = e,
					options: s.value,
					label: "Поиск и выбор",
					placeholder: "Поиск…",
					limit: 3,
					"allow-create": "",
					"create-label": "Добавить",
					onCreate: c
				}, null, 8, ["modelValue", "options"]),
				L(C, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				L(C, {
					options: [],
					label: "Пустой список"
				}),
				F("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: l[4] ||= (e) => a.value = !0,
					onMouseleave: l[5] ||= (e) => a.value = !1,
					onFocus: l[6] ||= (e) => a.value = !0,
					onBlur: l[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (z(), M(E, {
					key: 0,
					anchor: i.value
				}, {
					default: W(() => [...l[10] ||= [I("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : N("", !0)
			]),
			_: 1
		}), L(p, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: W(() => [...l[11] ||= [I("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, K = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), q = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Me = { class: "share-component-gallery" }, Ne = { class: "share-component-gallery__header" }, Pe = { class: "share-component-gallery__eyebrow" }, Fe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, Ie = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, Le = { class: "share-component-gallery__section" }, Re = { class: "share-component-gallery__grid" }, ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, Be = { class: "share-component-gallery__tile-row" }, Ve = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, He = { class: "share-component-gallery__row" }, Ue = { class: "share-component-gallery__row" }, We = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, Ge = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Ke = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton"
}, qe = { class: "share-component-gallery__row" }, Je = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Ye = { class: "share-component-gallery__section" }, Xe = { class: "share-component-gallery__grid" }, Ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, Qe = { class: "share-component-gallery__stack" }, $e = { class: "share-component-gallery__checkbox-row" }, et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, tt = { class: "share-component-gallery__stack" }, nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, rt = { class: "share-component-gallery__slider" }, it = { class: "share-component-gallery__section" }, at = { class: "share-component-gallery__grid" }, ot = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, st = { class: "share-component-gallery__form-grid" }, ct = { class: "share-component-gallery__section" }, lt = { class: "share-component-gallery__grid" }, ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, dt = { class: "share-component-gallery__stack" }, ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, ht = { class: "share-component-gallery__section" }, gt = { class: "share-component-gallery__grid" }, _t = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, vt = ["onMousedown"], yt = ["onMousedown"], bt = { class: "share-component-gallery__preview" }, xt = { class: "share-component-gallery__rich-node" }, St = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, Ct = { class: "share-component-gallery__section" }, wt = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, Tt = { class: "share-component-gallery__chrome" }, Et = { class: "share-component-gallery__section" }, Dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, Ot = { class: "share-component-gallery__row" }, J = /*#__PURE__*/ v({
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
	setup(p) {
		let de = K.length, h = V(!0), _ = V(!0), v = V("md"), y = V("preview"), b = V(62), x = V("rare"), C = V("#7c5ce2"), w = V("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), E = V(!0), j = V(!1), R = V(null), q = V(!1), J = V(!1), Y = V(!1), X = V(!1), Z = V(!1), kt = V(0), Q = V(!1), At = V(null), jt = [
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
		], Mt = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Nt = [
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
		], Pt = [
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
		], $ = B({
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function Ft(e) {
			return `${e} МБ`;
		}
		function It() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (B, V) => (z(), P("div", Me, [
			F("header", Ne, [F("div", null, [
				F("p", Pe, "share-ui · " + H(U(de)) + " компонентов", 1),
				F("h1", null, H(p.title), 1),
				F("p", null, H(p.description), 1)
			]), V[31] ||= F("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			F("section", Fe, [L(je)]),
			F("section", Ie, [V[32] ||= F("h2", null, "GuidedTour", -1), L(Ae)]),
			F("section", Le, [L(O, {
				title: "Поверхности и действия",
				border: ""
			}), F("div", Re, [
				F("article", ze, [
					V[42] ||= F("h2", null, "BaseTile", -1),
					L(D, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: W(() => [...V[33] ||= [I("✦", -1)]]),
						_: 1
					}),
					F("div", Be, [
						L(u, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [
								L(ce),
								V[34] ||= F("strong", null, "Акцентная плитка", -1),
								V[35] ||= F("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						L(u, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...V[36] ||= [F("strong", null, "Рамка", -1), F("span", null, "framed", -1)]]),
							_: 1
						}),
						L(c, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: V[0] ||= (e) => kt.value++
						}, {
							aside: W(() => [F("span", null, H(kt.value), 1)]),
							default: W(() => [V[37] ||= F("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						L(c, {
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...V[38] ||= [F("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						L(c, { title: "Только просмотр" }, {
							default: W(() => [...V[39] ||= [F("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						L(c, null, {
							default: W(() => [...V[40] ||= [F("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						L(c, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...V[41] ||= [F("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						L(o, { title: "Общий заголовок" })
					])
				]),
				F("article", Ve, [
					V[43] ||= F("h2", null, "Загрузка", -1),
					L(g, { label: "Открываем раздел…" }),
					L(g, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					L(d, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					F("div", He, [
						L(d, {
							label: "Загрузка",
							size: "sm"
						}),
						L(d, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						L(d, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					F("div", Ue, [L(me, {
						width: "36px",
						height: "36px",
						round: ""
					}), L(me, { width: "60%" })])
				]),
				F("article", We, [
					V[44] ||= F("h2", null, "InlineEdit", -1),
					L(S, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					L(S, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					L(S, {
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
				F("article", Ge, [
					V[48] ||= F("h2", null, "SectionList", -1),
					L(k, { title: "Записи" }, {
						footer: W(() => [L(i, { label: "Добавить запись" })]),
						default: W(() => [V[45] ||= F("div", { style: { padding: "12px 0" } }, "Первая запись", -1), V[46] ||= F("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					L(k, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: W(() => [...V[47] ||= [F("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), F("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				F("article", Ke, [V[54] ||= F("h2", null, "Кнопки элементов", -1), F("div", qe, [
					L(D, null, {
						default: W(() => [...V[49] ||= [I("Основное действие", -1)]]),
						_: 1
					}),
					L(D, { variant: "secondary" }, {
						default: W(() => [...V[50] ||= [I("Вторичное", -1)]]),
						_: 1
					}),
					L(D, { variant: "quiet" }, {
						default: W(() => [...V[51] ||= [I("Тихое", -1)]]),
						_: 1
					}),
					L(D, { disabled: "" }, {
						default: W(() => [...V[52] ||= [I("Недоступно", -1)]]),
						_: 1
					}),
					L(D, {
						loading: "",
						"loading-label": "Загрузка"
					}, {
						default: W(() => [...V[53] ||= [I("Загрузка", -1)]]),
						_: 1
					}),
					L(i, { label: "Добавить элемент" }),
					L(i, {
						label: "Добавить",
						variant: "icon"
					}),
					L(A, { label: "Удалить" }),
					L(A, {
						label: "Удалить",
						variant: "boxed"
					}),
					L(A, {
						label: "Удалить запись",
						icon: "trash"
					}),
					L(A, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					L(A, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				F("article", Je, [V[55] ||= F("h2", null, "SegmentDonutChart", -1), L(ue, {
					segments: Pt,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Ft
				})])
			])]),
			F("section", Ye, [L(O, {
				title: "Переключатели",
				border: ""
			}), F("div", Xe, [
				F("article", Ze, [V[57] ||= F("h2", null, "Boolean controls", -1), F("div", Qe, [L(ve, {
					modelValue: h.value,
					"onUpdate:modelValue": V[1] ||= (e) => h.value = e,
					label: "Включить механику"
				}, null, 8, ["modelValue"]), F("label", $e, [L(Ee, {
					modelValue: _.value,
					"onUpdate:modelValue": V[2] ||= (e) => _.value = e,
					label: "Выбрать элемент"
				}, null, 8, ["modelValue"]), V[56] ||= I(" Выбрать элемент ", -1)])])]),
				F("article", et, [V[58] ||= F("h2", null, "Segmented controls", -1), F("div", tt, [L(fe, {
					modelValue: v.value,
					"onUpdate:modelValue": V[3] ||= (e) => v.value = e,
					options: jt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), L(ge, {
					modelValue: y.value,
					"onUpdate:modelValue": V[4] ||= (e) => y.value = e,
					tabs: Mt,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				F("article", nt, [V[59] ||= F("h2", null, "AppSlider", -1), F("div", rt, [L(se, {
					modelValue: b.value,
					"onUpdate:modelValue": V[5] ||= (e) => b.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), F("strong", null, H(b.value), 1)])])
			])]),
			F("section", it, [L(O, {
				title: "Формы",
				border: ""
			}), F("div", at, [F("article", ot, [
				V[61] ||= F("h2", null, "Form primitives", -1),
				F("div", st, [
					L(f, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: W(() => [L(De, {
							value: $.name,
							"onUpdate:value": V[6] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					L(f, {
						label: "Количество",
						vertical: ""
					}, {
						default: W(() => [L(he, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: V[7] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					L(f, {
						label: "Тип",
						vertical: ""
					}, {
						default: W(() => [L(_e, {
							value: $.type,
							"onUpdate:value": V[8] ||= (e) => $.type = e
						}, {
							default: W(() => [...V[60] ||= [F("option", { value: "base" }, "Основной", -1), F("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					L(f, {
						label: "Описание",
						vertical: ""
					}, {
						default: W(() => [L(xe, {
							value: $.description,
							"onUpdate:value": V[9] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				L(m, {
					"submit-text": "Сохранить",
					onCancel: It
				})
			])])]),
			F("section", ct, [L(O, {
				title: "Выбор значений и floating UI",
				border: ""
			}), F("div", lt, [
				F("article", ut, [V[62] ||= F("h2", null, "Selectors", -1), F("div", dt, [L(oe, {
					modelValue: x.value,
					"onUpdate:modelValue": V[10] ||= (e) => x.value = e,
					options: Nt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), L(e, {
					modelValue: C.value,
					"onUpdate:modelValue": V[11] ||= (e) => C.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				F("article", ft, [
					V[64] ||= F("h2", null, "BasePopover", -1),
					F("button", {
						ref_key: "popoverAnchor",
						ref: R,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[12] ||= (e) => j.value = !j.value
					}, " Открыть popover ", 512),
					L(ye, {
						open: j.value,
						anchor: R.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": V[13] ||= (e) => j.value = e
					}, {
						default: W(() => [...V[63] ||= [F("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				F("article", pt, [V[70] ||= F("h2", null, "ActionMenu", -1), L(pe, { title: "Действия" }, {
					default: W(() => [
						L(T, { tone: "accent" }, {
							default: W(() => [...V[65] ||= [I("Редактировать", -1)]]),
							_: 1
						}),
						L(Se, { label: "Перемещение" }, {
							trigger: W(({ open: e }) => [L(T, {
								submenu: "",
								"submenu-open": e
							}, {
								default: W(() => [...V[66] ||= [I("Переместить", -1)]]),
								_: 1
							}, 8, ["submenu-open"])]),
							default: W(() => [L(T, null, {
								default: W(() => [...V[67] ||= [I("В начало", -1)]]),
								_: 1
							}), L(T, null, {
								default: W(() => [...V[68] ||= [I("В конец", -1)]]),
								_: 1
							})]),
							_: 1
						}),
						L(T, { tone: "danger" }, {
							default: W(() => [...V[69] ||= [I("Удалить", -1)]]),
							_: 1
						})
					]),
					_: 1
				})]),
				F("article", mt, [V[73] ||= F("h2", null, "AccountMenu", -1), L(n, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: W(({ close: e }) => [L(T, { onClick: e }, {
						default: W(() => [...V[71] ||= [I("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), L(T, {
						tone: "danger",
						onClick: e
					}, {
						default: W(() => [...V[72] ||= [I("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			F("section", ht, [L(O, {
				title: "Редакторы и rich text",
				border: ""
			}), F("div", gt, [F("article", _t, [
				V[74] ||= F("h2", null, "Rich text", -1),
				L(le, {
					ref: "richEditor",
					modelValue: w.value,
					"onUpdate:modelValue": V[14] ||= (e) => w.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: W(({ editor: e, insertRichNode: t }) => [F("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: G((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, vt), F("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: G((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, yt)]),
					_: 1
				}, 8, ["modelValue"]),
				F("div", bt, [L(ee, { html: w.value }, {
					node: W(({ node: e }) => [F("strong", xt, H(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), F("article", St, [V[77] ||= F("h2", null, "Editor composition", -1), L(u, null, {
				default: W(() => [L(ie, { title: "Параметры" }, {
					default: W(() => [L(be, { title: "Основное" }, {
						default: W(() => [L(re, { title: "Значение" }, {
							actions: W(() => [...V[75] ||= [F("span", null, "12", -1)]]),
							_: 1
						}), L(se, {
							modelValue: b.value,
							"onUpdate:modelValue": V[15] ||= (e) => b.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), L(t, null, {
						default: W(() => [V[76] ||= I("Итого: ", -1), F("strong", null, H(b.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			F("section", Ct, [L(O, {
				title: "Каркас приложения",
				border: ""
			}), F("article", wt, [V[83] ||= F("h2", null, "Navigation composition", -1), F("div", Tt, [L(Oe, {
				class: ke(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": E.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: W(() => [L(ne, {
					modelValue: E.value,
					"onUpdate:modelValue": V[16] ||= (e) => E.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: W(() => [L(te, {
						as: "div",
						label: "share-ui"
					}, {
						icon: W(() => [...V[78] ||= [F("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: W(() => [
						L(ae, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: W(() => [...V[79] ||= [F("span", null, "⌂", -1)]]),
							_: 1
						}),
						L(l, { label: "Примеры" }),
						L(ae, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: W(() => [...V[80] ||= [F("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: W(() => [...V[81] ||= [F("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: W(() => [V[82] ||= F("div", { class: "share-component-gallery__chrome-content" }, [
					F("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					F("strong", null, "AppShell + AppSidebar"),
					F("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			F("section", Et, [L(O, {
				title: "Оверлеи и morph",
				border: ""
			}), F("article", Dt, [V[84] ||= F("h2", null, "Интерактивные примеры", -1), F("div", Ot, [
				F("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[17] ||= (e) => q.value = !0
				}, "AppModal"),
				F("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[18] ||= (e) => J.value = !0
				}, "AppModalFrame"),
				F("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[19] ||= (e) => Y.value = !0
				}, "ModalShell"),
				F("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[20] ||= (e) => X.value = !0
				}, "ConfirmDialog"),
				F("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[21] ||= (e) => Z.value = !0
				}, "TextPromptDialog"),
				F("button", {
					ref_key: "morphOrigin",
					ref: At,
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[22] ||= (e) => Q.value = !0
				}, "MorphSheet", 512)
			])])]),
			q.value ? (z(), M(a, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: V[23] ||= (e) => q.value = !1
			}, {
				default: W(() => [...V[85] ||= [F("div", { class: "share-component-gallery__overlay-content" }, [F("h2", null, "AppModal"), F("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : N("", !0),
			J.value ? (z(), M(s, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: V[26] ||= (e) => J.value = !1
			}, {
				footer: W(() => [L(m, {
					onCancel: V[24] ||= (e) => J.value = !1,
					onSubmit: V[25] ||= (e) => J.value = !1
				})]),
				default: W(() => [V[86] ||= F("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : N("", !0),
			L(r, {
				open: Y.value,
				"aria-label": "Пример ModalShell",
				onClose: V[27] ||= (e) => Y.value = !1
			}, {
				default: W(() => [...V[87] ||= [F("div", { class: "share-component-gallery__overlay-content" }, [F("h2", null, "ModalShell"), F("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			L(we, {
				open: X.value,
				"onUpdate:open": V[28] ||= (e) => X.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			L(Ce, {
				open: Z.value,
				"onUpdate:open": V[29] ||= (e) => Z.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (z(), M(Te, {
				key: 2,
				"origin-el": At.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: V[30] ||= (e) => Q.value = !1
			}, {
				head: W(() => [...V[88] ||= [F("div", { class: "share-component-gallery__morph-head" }, [F("strong", null, "MorphSheet")], -1)]]),
				default: W(() => [V[89] ||= F("div", { class: "share-component-gallery__overlay-content" }, [F("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : N("", !0)
		]));
	}
}, [["__scopeId", "data-v-cfb48f86"]]);
//#endregion
export { q as COMPONENT_GALLERY_ALIASES, K as COMPONENT_GALLERY_COMPONENTS, J as ComponentGallery };
