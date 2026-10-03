import { At as e, C as t, Ct as n, D as r, Dt as i, E as a, Et as o, F as s, H as c, I as l, L as ee, M as te, N as ne, O as re, Ot as u, P as ie, R as ae, S as d, St as oe, T as se, Tt as f, U as ce, V as le, W as ue, _ as de, _t as fe, a as p, at as pe, b as me, bt as m, c as h, d as g, et as he, f as _, g as ge, h as v, i as y, jt as b, k as _e, kt as ve, l as x, lt as S, m as ye, n as be, o as C, ot as xe, p as Se, r as w, s as T, st as E, t as Ce, tt as we, u as D, ut as O, v as Te, vt as Ee, wt as k, x as A, xt as j, y as M, yt as De, z as Oe } from "./TimelineGroup-BOBGEEn7.js";
import { Fragment as N, createBlock as P, createCommentVNode as F, createElementBlock as I, createElementVNode as L, createTextVNode as R, createVNode as z, h as B, normalizeClass as ke, openBlock as V, reactive as Ae, ref as H, toDisplayString as U, unref as je, withCtx as W, withModifiers as Me } from "vue";
//#region src/gallery/TourGalleryExample.vue
var Ne = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = H(null), n = E(640), r = Ae(D());
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
		return (e, a) => (V(), I(N, null, [z(_, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: W(() => [...a[0] ||= [R("Показать обучение", -1)]]),
			_: 1
		}, 512), z(g, {
			tour: r,
			mobile: je(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, Pe = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = H("star"), n = H(!1), r = H([]), i = H(null), a = H(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => B("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => B("span", "●") }
		}], s = H([{
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
		return (e, l) => (V(), I(N, null, [z(T, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: W(() => [
				z(x, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				z(x, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				z(x, {
					percent: 100,
					label: "Полное значение"
				}),
				z(h, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				z(h, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				z(C, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: l[1] ||= (e) => n.value = !n.value
				}, {
					icon: W(() => [...l[8] ||= [R("✦", -1)]]),
					trailing: W(() => [...l[9] ||= [R("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				z(C, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				z(y, {
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
				z(p, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				z(p, {
					options: [],
					label: "Пустой список"
				}),
				L("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: l[4] ||= (e) => a.value = !0,
					onMouseleave: l[5] ||= (e) => a.value = !1,
					onFocus: l[6] ||= (e) => a.value = !0,
					onBlur: l[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (V(), P(w, {
					key: 0,
					anchor: i.value
				}, {
					default: W(() => [...l[10] ||= [R("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : F("", !0)
			]),
			_: 1
		}), z(T, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: W(() => [...l[11] ||= [R("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Fe = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), G = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Ie = { class: "share-component-gallery" }, Le = { class: "share-component-gallery__header" }, Re = { class: "share-component-gallery__eyebrow" }, ze = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, Be = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, Ve = { class: "share-component-gallery__section" }, He = { class: "share-component-gallery__grid" }, Ue = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, We = { class: "share-component-gallery__tile-row" }, Ge = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, Ke = { class: "share-component-gallery__row" }, qe = { class: "share-component-gallery__row" }, Je = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, Ye = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, Xe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton"
}, Qe = { class: "share-component-gallery__row" }, $e = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, et = { class: "share-component-gallery__section" }, tt = { class: "share-component-gallery__grid" }, nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, rt = { class: "share-component-gallery__stack" }, it = { class: "share-component-gallery__checkbox-row" }, at = { class: "share-component-gallery__checkbox-row" }, ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, st = { class: "share-component-gallery__stack" }, ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, lt = { class: "share-component-gallery__slider" }, ut = { class: "share-component-gallery__section" }, dt = { class: "share-component-gallery__grid" }, ft = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, pt = { class: "share-component-gallery__form-grid" }, mt = { class: "share-component-gallery__section" }, ht = { class: "share-component-gallery__grid" }, gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, _t = { class: "share-component-gallery__stack" }, vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, bt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, xt = { class: "share-component-gallery__section" }, St = { class: "share-component-gallery__grid" }, Ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, wt = ["onMousedown"], Tt = ["onMousedown"], Et = { class: "share-component-gallery__preview" }, Dt = { class: "share-component-gallery__rich-node" }, Ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, kt = { class: "share-component-gallery__section" }, At = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, jt = { class: "share-component-gallery__chrome" }, Mt = { class: "share-component-gallery__section" }, Nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, Pt = { class: "share-component-gallery__row" }, K = /*#__PURE__*/ b({
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
		let h = Fe.length, g = H(!0), y = H(!0), b = H("md"), x = H("preview"), C = H(62), w = H("rare"), T = H("#7c5ce2"), E = H("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), D = H(!0), N = H(!0), B = H(!1), G = H(null), K = H(null), Ft = H(null), q = H(!1), J = H(!1), Y = H(!1), X = H(!1), Z = H(!1), It = H(0), Q = H(!1), Lt = H(null), Rt = [
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
		], zt = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Bt = [
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
		], Vt = [
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
		], $ = Ae({
			date: "",
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function Ht(e) {
			return `${e} МБ`;
		}
		function Ut() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Ae, H) => (V(), I("div", Ie, [
			L("header", Le, [L("div", null, [
				L("p", Re, "share-ui · " + U(je(h)) + " компонентов", 1),
				L("h1", null, U(p.title), 1),
				L("p", null, U(p.description), 1)
			]), H[35] ||= L("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			L("section", ze, [z(Pe)]),
			L("section", Be, [H[36] ||= L("h2", null, "GuidedTour", -1), z(Ne)]),
			L("section", Ve, [z(m, {
				title: "Поверхности и действия",
				border: ""
			}), L("div", He, [
				L("article", Ue, [
					H[46] ||= L("h2", null, "BaseTile", -1),
					z(_, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: W(() => [...H[37] ||= [R("✦", -1)]]),
						_: 1
					}),
					L("div", We, [
						z(e, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [
								z(i),
								H[38] ||= L("strong", null, "Акцентная плитка", -1),
								H[39] ||= L("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						z(e, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...H[40] ||= [L("strong", null, "Рамка", -1), L("span", null, "framed", -1)]]),
							_: 1
						}),
						z(u, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: H[0] ||= (e) => It.value++
						}, {
							aside: W(() => [L("span", null, U(It.value), 1)]),
							default: W(() => [H[41] ||= L("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						z(u, {
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...H[42] ||= [L("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						z(u, { title: "Только просмотр" }, {
							default: W(() => [...H[43] ||= [L("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						z(u, null, {
							default: W(() => [...H[44] ||= [L("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						z(u, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...H[45] ||= [L("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						z(ve, { title: "Общий заголовок" })
					])
				]),
				L("article", Ge, [
					H[47] ||= L("h2", null, "Загрузка", -1),
					z(Se, { label: "Открываем раздел…" }),
					z(Se, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					z(r, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					L("div", Ke, [
						z(r, {
							label: "Загрузка",
							size: "sm"
						}),
						z(r, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						z(r, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					L("div", qe, [z(ye, {
						width: "36px",
						height: "36px",
						round: ""
					}), z(ye, { width: "60%" })])
				]),
				L("article", Je, [
					H[48] ||= L("h2", null, "InlineEdit", -1),
					z(v, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					z(v, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					z(v, {
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
				L("article", Ye, [
					H[56] ||= L("h2", null, "TimelineGroup", -1),
					z(m, {
						title: "История",
						line: ""
					}, {
						actions: W(() => [...H[49] ||= [L("span", null, "2", -1)]]),
						_: 1
					}),
					z(Ce, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: W(() => [...H[50] ||= [L("strong", null, "Участник", -1)]]),
						default: W(() => [H[51] ||= L("strong", null, "Запись события", -1), H[52] ||= L("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					z(Ce, { color: "var(--success)" }, {
						identity: W(() => [...H[53] ||= [L("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: W(() => [z(M, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: W(() => [z(A, { value: "Черновик" })]),
							_: 1
						})]),
						default: W(() => [H[54] ||= L("strong", null, "Компактная запись", -1), H[55] ||= L("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				L("article", Xe, [
					H[60] ||= L("h2", null, "SectionList", -1),
					z(o, { title: "Записи" }, {
						footer: W(() => [z(f, { label: "Добавить запись" })]),
						default: W(() => [H[57] ||= L("div", { style: { padding: "12px 0" } }, "Первая запись", -1), H[58] ||= L("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					z(o, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: W(() => [...H[59] ||= [L("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), L("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				L("article", Ze, [H[67] ||= L("h2", null, "Кнопки элементов", -1), L("div", Qe, [
					z(_, null, {
						default: W(() => [...H[61] ||= [R("Основное действие", -1)]]),
						_: 1
					}),
					z(_, { variant: "secondary" }, {
						default: W(() => [...H[62] ||= [R("Вторичное", -1)]]),
						_: 1
					}),
					z(_, { variant: "quiet" }, {
						default: W(() => [...H[63] ||= [R("Тихое", -1)]]),
						_: 1
					}),
					z(_, { variant: "dashed" }, {
						default: W(() => [...H[64] ||= [R("Пунктирная рамка", -1)]]),
						_: 1
					}),
					z(_, { disabled: "" }, {
						default: W(() => [...H[65] ||= [R("Недоступно", -1)]]),
						_: 1
					}),
					z(_, {
						loading: "",
						"loading-label": "Загрузка"
					}, {
						default: W(() => [...H[66] ||= [R("Загрузка", -1)]]),
						_: 1
					}),
					z(f, { label: "Добавить элемент" }),
					z(f, {
						label: "Добавить",
						variant: "icon"
					}),
					z(j, { label: "Удалить" }),
					z(j, {
						label: "Удалить",
						variant: "boxed"
					}),
					z(j, {
						label: "Удалить запись",
						icon: "trash"
					}),
					z(j, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					z(j, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				L("article", $e, [H[68] ||= L("h2", null, "SegmentDonutChart", -1), z(De, {
					segments: Vt,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Ht
				})])
			])]),
			L("section", et, [z(m, {
				title: "Переключатели",
				border: ""
			}), L("div", tt, [
				L("article", nt, [H[71] ||= L("h2", null, "Boolean controls", -1), L("div", rt, [
					z(fe, {
						modelValue: g.value,
						"onUpdate:modelValue": H[1] ||= (e) => g.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					L("label", it, [z(n, {
						modelValue: y.value,
						"onUpdate:modelValue": H[2] ||= (e) => y.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), H[69] ||= R(" Выбрать элемент ", -1)]),
					L("label", at, [z(n, {
						modelValue: y.value,
						"onUpdate:modelValue": H[3] ||= (e) => y.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), H[70] ||= R(" Крупный выбор (24px) ", -1)])
				])]),
				L("article", ot, [H[72] ||= L("h2", null, "Segmented controls", -1), L("div", st, [z(oe, {
					modelValue: b.value,
					"onUpdate:modelValue": H[4] ||= (e) => b.value = e,
					options: Rt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), z(Ee, {
					modelValue: x.value,
					"onUpdate:modelValue": H[5] ||= (e) => x.value = e,
					tabs: zt,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				L("article", ct, [H[73] ||= L("h2", null, "AppSlider", -1), L("div", lt, [z(k, {
					modelValue: C.value,
					"onUpdate:modelValue": H[6] ||= (e) => C.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), L("strong", null, U(C.value), 1)])])
			])]),
			L("section", ut, [z(m, {
				title: "Формы",
				border: ""
			}), L("div", dt, [L("article", ft, [
				H[75] ||= L("h2", null, "Form primitives", -1),
				L("div", pt, [
					z(M, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: W(() => [z(A, {
							value: $.name,
							"onUpdate:value": H[7] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(M, {
						label: "Дата",
						vertical: ""
					}, {
						default: W(() => [z(be, {
							modelValue: $.date,
							"onUpdate:modelValue": H[8] ||= (e) => $.date = e,
							locale: "ru-RU",
							placeholder: "Выберите дату",
							"aria-label": "Выбрать дату",
							"today-label": "Сегодня",
							"previous-label": "Предыдущий месяц",
							"next-label": "Следующий месяц",
							"month-label": "Месяц",
							"year-label": "Год",
							"clear-label": "Очистить",
							"allow-clear": ""
						}, null, 8, ["modelValue"]), z(be, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					z(M, {
						label: "Количество",
						vertical: ""
					}, {
						default: W(() => [z(Te, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: H[9] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(M, {
						label: "Тип",
						vertical: ""
					}, {
						default: W(() => [z(de, {
							value: $.type,
							"onUpdate:value": H[10] ||= (e) => $.type = e
						}, {
							default: W(() => [...H[74] ||= [L("option", { value: "base" }, "Основной", -1), L("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					z(M, {
						label: "Описание",
						vertical: ""
					}, {
						default: W(() => [z(ge, {
							value: $.description,
							"onUpdate:value": H[11] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				z(d, {
					"submit-text": "Сохранить",
					onCancel: Ut
				})
			])])]),
			L("section", mt, [z(m, {
				title: "Выбор значений и floating UI",
				border: ""
			}), L("div", ht, [
				L("article", gt, [H[76] ||= L("h2", null, "Selectors", -1), L("div", _t, [z(he, {
					modelValue: w.value,
					"onUpdate:modelValue": H[12] ||= (e) => w.value = e,
					options: Bt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), z(we, {
					modelValue: T.value,
					"onUpdate:modelValue": H[13] ||= (e) => T.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				L("article", vt, [
					H[78] ||= L("h2", null, "BasePopover", -1),
					L("button", {
						ref_key: "popoverAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[14] ||= (e) => B.value = !B.value
					}, " Открыть popover ", 512),
					z(xe, {
						open: B.value,
						anchor: G.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": H[15] ||= (e) => B.value = e
					}, {
						default: W(() => [...H[77] ||= [L("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				L("article", yt, [
					H[85] ||= L("h2", null, "ActionMenu", -1),
					z(O, {
						title: "Действия",
						related: ""
					}, {
						default: W(() => [
							z(S, { tone: "accent" }, {
								default: W(() => [...H[79] ||= [R("Редактировать", -1)]]),
								_: 1
							}),
							z(pe, { label: "Перемещение" }, {
								trigger: W(({ open: e }) => [z(S, {
									submenu: "",
									"submenu-open": e
								}, {
									default: W(() => [...H[80] ||= [R("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: W(() => [z(S, null, {
									default: W(() => [...H[81] ||= [R("В начало", -1)]]),
									_: 1
								}), z(S, null, {
									default: W(() => [...H[82] ||= [R("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							z(S, { tone: "danger" }, {
								default: W(() => [...H[83] ||= [R("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					L("button", {
						ref_key: "actionMenuAnchor",
						ref: K,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[16] ||= (e) => Ft.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					z(O, {
						ref_key: "anchoredActionMenu",
						ref: Ft,
						anchor: K.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: W(({ close: e }) => [z(S, { onClick: e }, {
							default: W(() => [...H[84] ||= [R("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				L("article", bt, [H[88] ||= L("h2", null, "AccountMenu", -1), z(c, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: W(({ close: e }) => [z(S, { onClick: e }, {
						default: W(() => [...H[86] ||= [R("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), z(S, {
						tone: "danger",
						onClick: e
					}, {
						default: W(() => [...H[87] ||= [R("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			L("section", xt, [z(m, {
				title: "Редакторы и rich text",
				border: ""
			}), L("div", St, [L("article", Ct, [
				H[89] ||= L("h2", null, "Rich text", -1),
				z(ce, {
					ref: "richEditor",
					modelValue: E.value,
					"onUpdate:modelValue": H[17] ||= (e) => E.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: W(({ editor: e, insertRichNode: t }) => [L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Me((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, wt), L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Me((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Tt)]),
					_: 1
				}, 8, ["modelValue"]),
				L("div", Et, [z(ue, { html: E.value }, {
					node: W(({ node: e }) => [L("strong", Dt, U(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), L("article", Ot, [H[92] ||= L("h2", null, "Editor composition", -1), z(e, null, {
				default: W(() => [z(s, { title: "Параметры" }, {
					default: W(() => [z(ne, { title: "Основное" }, {
						default: W(() => [z(ie, { title: "Значение" }, {
							actions: W(() => [...H[90] ||= [L("span", null, "12", -1)]]),
							_: 1
						}), z(k, {
							modelValue: C.value,
							"onUpdate:modelValue": H[18] ||= (e) => C.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), z(te, null, {
						default: W(() => [H[91] ||= R("Итого: ", -1), L("strong", null, U(C.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			L("section", kt, [z(m, {
				title: "Каркас приложения",
				border: ""
			}), L("article", At, [
				H[98] ||= L("h2", null, "Navigation composition", -1),
				z(fe, {
					modelValue: N.value,
					"onUpdate:modelValue": H[19] ||= (e) => N.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				L("div", jt, [z(le, {
					class: ke(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": D.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: W(() => [z(Oe, {
						modelValue: D.value,
						"onUpdate:modelValue": H[20] ||= (e) => D.value = e,
						elevated: N.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: W(() => [z(ae, {
							as: "div",
							label: "share-ui"
						}, {
							icon: W(() => [...H[93] ||= [L("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: W(() => [
							z(l, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: W(() => [...H[94] ||= [L("span", null, "⌂", -1)]]),
								_: 1
							}),
							z(ee, { label: "Примеры" }),
							z(l, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: W(() => [...H[95] ||= [L("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: W(() => [...H[96] ||= [L("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: W(() => [H[97] ||= L("div", { class: "share-component-gallery__chrome-content" }, [
						L("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						L("strong", null, "AppShell + AppSidebar"),
						L("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			L("section", Mt, [z(m, {
				title: "Оверлеи и morph",
				border: ""
			}), L("article", Nt, [H[99] ||= L("h2", null, "Интерактивные примеры", -1), L("div", Pt, [
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[21] ||= (e) => q.value = !0
				}, "AppModal"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[22] ||= (e) => J.value = !0
				}, "AppModalFrame"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[23] ||= (e) => Y.value = !0
				}, "ModalShell"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[24] ||= (e) => X.value = !0
				}, "ConfirmDialog"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[25] ||= (e) => Z.value = !0
				}, "TextPromptDialog"),
				L("button", {
					ref_key: "morphOrigin",
					ref: Lt,
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[26] ||= (e) => Q.value = !0
				}, "MorphSheet", 512)
			])])]),
			q.value ? (V(), P(_e, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: H[27] ||= (e) => q.value = !1
			}, {
				default: W(() => [...H[100] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "AppModal"), L("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : F("", !0),
			J.value ? (V(), P(re, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: H[30] ||= (e) => J.value = !1
			}, {
				footer: W(() => [z(d, {
					onCancel: H[28] ||= (e) => J.value = !1,
					onSubmit: H[29] ||= (e) => J.value = !1
				})]),
				default: W(() => [H[101] ||= L("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : F("", !0),
			z(se, {
				open: Y.value,
				"aria-label": "Пример ModalShell",
				onClose: H[31] ||= (e) => Y.value = !1
			}, {
				default: W(() => [...H[102] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "ModalShell"), L("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			z(a, {
				open: X.value,
				"onUpdate:open": H[32] ||= (e) => X.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			z(me, {
				open: Z.value,
				"onUpdate:open": H[33] ||= (e) => Z.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (V(), P(t, {
				key: 2,
				"origin-el": Lt.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: H[34] ||= (e) => Q.value = !1
			}, {
				head: W(() => [...H[103] ||= [L("div", { class: "share-component-gallery__morph-head" }, [L("strong", null, "MorphSheet")], -1)]]),
				default: W(() => [H[104] ||= L("div", { class: "share-component-gallery__overlay-content" }, [L("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : F("", !0)
		]));
	}
}, [["__scopeId", "data-v-8c727d30"]]);
//#endregion
export { G as COMPONENT_GALLERY_ALIASES, Fe as COMPONENT_GALLERY_COMPONENTS, K as ComponentGallery };
