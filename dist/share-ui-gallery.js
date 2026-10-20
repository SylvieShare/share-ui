import { A as e, At as t, B as n, C as r, Ct as i, D as a, Dt as o, Et as s, F as ee, G as c, I as te, K as ne, L as re, Mt as l, Nt as u, O as ie, Ot as ae, P as oe, R as se, S as ce, St as d, T as le, Tt as ue, U as de, V as fe, W as pe, _ as f, a as p, b as me, bt as he, c as m, ct as ge, d as h, dt as g, f as _, ft as _e, g as ve, h as ye, i as v, j as be, jt as xe, k as y, kt as Se, l as b, lt as x, m as S, n as Ce, nt as we, o as C, p as w, r as Te, rt as T, s as E, st as Ee, t as D, u as O, v as De, w as k, wt as Oe, x as A, xt as ke, y as Ae, yt as j, z as je } from "./StarRating-C8-_CIwm.js";
import { Fragment as M, createBlock as N, createCommentVNode as P, createElementBlock as F, createElementVNode as I, createTextVNode as L, createVNode as R, h as z, normalizeClass as Me, openBlock as B, reactive as Ne, ref as V, toDisplayString as H, unref as Pe, withCtx as U, withModifiers as Fe } from "vue";
//#region src/gallery/TourGalleryExample.vue
var Ie = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = V(null), n = x(640), r = Ne(h());
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
		return (e, a) => (B(), F(M, null, [R(S, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: U(() => [...a[0] ||= [L("Показать обучение", -1)]]),
			_: 1
		}, 512), R(_, {
			tour: r,
			mobile: Pe(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, Le = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = V("star"), n = V(!1), r = V([]), i = V(null), a = V(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => z("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => z("span", "●") }
		}], s = V([{
			value: "first",
			label: "Первый"
		}, {
			value: "second",
			label: "Второй"
		}]);
		function ee(e) {
			let t = String(s.value.length);
			s.value.push({
				value: t,
				label: e
			}), r.value = [...r.value, t];
		}
		return (e, c) => (B(), F(M, null, [R(m, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: U(() => [
				R(O, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				R(O, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				R(O, {
					percent: 100,
					label: "Полное значение"
				}),
				R(b, {
					modelValue: t.value,
					"onUpdate:modelValue": c[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				R(b, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				R(E, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: c[1] ||= (e) => n.value = !n.value
				}, {
					icon: U(() => [...c[8] ||= [L("✦", -1)]]),
					trailing: U(() => [...c[9] ||= [L("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				R(E, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				R(p, {
					modelValue: r.value,
					"onUpdate:modelValue": c[2] ||= (e) => r.value = e,
					options: s.value,
					label: "Поиск и выбор",
					placeholder: "Поиск…",
					limit: 3,
					"allow-create": "",
					"create-label": "Добавить",
					onCreate: ee
				}, null, 8, ["modelValue", "options"]),
				R(C, {
					options: s.value,
					label: "Варианты",
					onSelect: c[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				R(C, {
					options: [],
					label: "Пустой список"
				}),
				I("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: c[4] ||= (e) => a.value = !0,
					onMouseleave: c[5] ||= (e) => a.value = !1,
					onFocus: c[6] ||= (e) => a.value = !0,
					onBlur: c[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (B(), N(v, {
					key: 0,
					anchor: i.value
				}, {
					default: U(() => [...c[10] ||= [L("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : P("", !0)
			]),
			_: 1
		}), R(m, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: U(() => [...c[11] ||= [L("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Re = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), W = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), ze = { class: "share-component-gallery" }, Be = { class: "share-component-gallery__header" }, Ve = { class: "share-component-gallery__eyebrow" }, He = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, Ue = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, We = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, Ge = { class: "share-component-gallery__section" }, Ke = { class: "share-component-gallery__grid" }, qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, Je = { class: "share-component-gallery__tile-row" }, Ye = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, Xe = { class: "share-component-gallery__row" }, Ze = { class: "share-component-gallery__row" }, Qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, $e = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, nt = { class: "share-component-gallery__row" }, rt = { class: "share-component-gallery__row" }, it = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, at = { class: "share-component-gallery__section" }, ot = { class: "share-component-gallery__grid" }, st = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, ct = { class: "share-component-gallery__stack" }, lt = { class: "share-component-gallery__checkbox-row" }, ut = { class: "share-component-gallery__checkbox-row" }, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, ft = { class: "share-component-gallery__stack" }, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, mt = { class: "share-component-gallery__slider" }, ht = { class: "share-component-gallery__section" }, gt = { class: "share-component-gallery__grid" }, _t = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, vt = { class: "share-component-gallery__form-grid" }, yt = { class: "share-component-gallery__section" }, bt = { class: "share-component-gallery__grid" }, xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, St = { class: "share-component-gallery__stack" }, Ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Et = { class: "share-component-gallery__section" }, Dt = { class: "share-component-gallery__grid" }, Ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, kt = ["onMousedown"], At = ["onMousedown"], jt = { class: "share-component-gallery__preview" }, Mt = { class: "share-component-gallery__rich-node" }, Nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, Pt = { class: "share-component-gallery__section" }, Ft = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, It = { class: "share-component-gallery__chrome" }, Lt = { class: "share-component-gallery__section" }, Rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, zt = { class: "share-component-gallery__row" }, G = /*#__PURE__*/ u({
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
		let p = Re.length, m = V(3), h = V(!0), _ = V(!0), v = V(!0), b = V("md"), x = V("preview"), C = V(62), E = V("rare"), O = V("#7c5ce2"), M = V("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), z = V(!0), W = V(!0), G = V(!1), Bt = V(null), K = V(null), Vt = V(null), q = V(!1), J = V(!1), Y = V(!1), X = V(!1), Z = V(!1), Ht = V(0), Q = V(!1), Ut = V(null), Wt = [
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
		], Gt = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Kt = [
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
		], qt = [
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
		], $ = Ne({
			date: "",
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function Jt(e) {
			return `${e} МБ`;
		}
		function Yt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Ne, V) => (B(), F("div", ze, [
			I("header", Be, [I("div", null, [
				I("p", Ve, "share-ui · " + H(Pe(p)) + " компонентов", 1),
				I("h1", null, H(u.title), 1),
				I("p", null, H(u.description), 1)
			]), V[38] ||= I("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			I("section", He, [
				R(D, {
					modelValue: m.value,
					"onUpdate:modelValue": V[0] ||= (e) => m.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				R(D, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				R(D, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			I("section", Ue, [R(Le)]),
			I("section", We, [V[39] ||= I("h2", null, "GuidedTour", -1), R(Ie)]),
			I("section", Ge, [R(d, {
				title: "Поверхности и действия",
				border: ""
			}), I("div", Ke, [
				I("article", qe, [
					V[49] ||= I("h2", null, "BaseTile", -1),
					R(S, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: U(() => [...V[40] ||= [L("✦", -1)]]),
						_: 1
					}),
					I("div", Je, [
						R(l, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [
								R(Se),
								V[41] ||= I("strong", null, "Акцентная плитка", -1),
								V[42] ||= I("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						R(l, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: U(() => [...V[43] ||= [I("strong", null, "Рамка", -1), I("span", null, "framed", -1)]]),
							_: 1
						}),
						R(t, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: V[1] ||= (e) => Ht.value++
						}, {
							aside: U(() => [I("span", null, H(Ht.value), 1)]),
							default: U(() => [V[44] ||= I("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						R(t, {
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: U(() => [...V[45] ||= [I("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						R(t, { title: "Только просмотр" }, {
							default: U(() => [...V[46] ||= [I("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						R(t, null, {
							default: U(() => [...V[47] ||= [I("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						R(t, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: U(() => [...V[48] ||= [I("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						R(xe, { title: "Общий заголовок" })
					])
				]),
				I("article", Ye, [
					V[50] ||= I("h2", null, "Загрузка", -1),
					R(ye, { label: "Открываем раздел…" }),
					R(ye, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					R(y, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					I("div", Xe, [
						R(y, {
							label: "Загрузка",
							size: "sm"
						}),
						R(y, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						R(y, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					I("div", Ze, [R(ve, {
						width: "36px",
						height: "36px",
						round: ""
					}), R(ve, { width: "60%" })])
				]),
				I("article", Qe, [
					V[51] ||= I("h2", null, "InlineEdit", -1),
					R(f, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					R(f, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					R(f, {
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
				I("article", $e, [
					V[59] ||= I("h2", null, "TimelineGroup", -1),
					R(d, {
						title: "История",
						line: ""
					}, {
						actions: U(() => [...V[52] ||= [I("span", null, "2", -1)]]),
						_: 1
					}),
					R(Ce, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: U(() => [...V[53] ||= [I("strong", null, "Участник", -1)]]),
						default: U(() => [V[54] ||= I("strong", null, "Запись события", -1), V[55] ||= I("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					R(Ce, { color: "var(--success)" }, {
						identity: U(() => [...V[56] ||= [I("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: U(() => [R(A, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: U(() => [R(r, { value: "Черновик" })]),
							_: 1
						})]),
						default: U(() => [V[57] ||= I("strong", null, "Компактная запись", -1), V[58] ||= I("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				I("article", et, [
					V[63] ||= I("h2", null, "SectionList", -1),
					R(ae, { title: "Записи" }, {
						footer: U(() => [R(o, { label: "Добавить запись" })]),
						default: U(() => [V[60] ||= I("div", { style: { padding: "12px 0" } }, "Первая запись", -1), V[61] ||= I("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					R(ae, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: U(() => [...V[62] ||= [I("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), I("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				I("article", tt, [
					V[73] ||= I("h2", null, "Кнопки элементов", -1),
					I("div", nt, [
						R(w, {
							modelValue: h.value,
							"onUpdate:modelValue": V[2] ||= (e) => h.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: U(() => [...V[64] ||= [I("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [I("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}, 8, ["modelValue"]),
						R(w, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: U(() => [...V[65] ||= [I("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [I("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}),
						R(w, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: U(() => [...V[66] ||= [I("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [I("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						})
					]),
					R(d, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					R(d, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					I("div", rt, [
						R(S, null, {
							default: U(() => [...V[67] ||= [L("Основное действие", -1)]]),
							_: 1
						}),
						R(S, { variant: "secondary" }, {
							default: U(() => [...V[68] ||= [L("Вторичное", -1)]]),
							_: 1
						}),
						R(S, { variant: "quiet" }, {
							default: U(() => [...V[69] ||= [L("Тихое", -1)]]),
							_: 1
						}),
						R(S, { variant: "dashed" }, {
							default: U(() => [...V[70] ||= [L("Пунктирная рамка", -1)]]),
							_: 1
						}),
						R(S, { disabled: "" }, {
							default: U(() => [...V[71] ||= [L("Недоступно", -1)]]),
							_: 1
						}),
						R(S, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: U(() => [...V[72] ||= [L("Загрузка", -1)]]),
							_: 1
						}),
						R(o, { label: "Добавить элемент" }),
						R(o, {
							label: "Добавить",
							variant: "icon"
						}),
						R(i, { label: "Удалить" }),
						R(i, {
							label: "Удалить",
							variant: "boxed"
						}),
						R(i, {
							label: "Удалить запись",
							icon: "trash"
						}),
						R(i, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						R(i, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				I("article", it, [V[74] ||= I("h2", null, "SegmentDonutChart", -1), R(ke, {
					segments: qt,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": Jt
				})])
			])]),
			I("section", at, [R(d, {
				title: "Переключатели",
				border: ""
			}), I("div", ot, [
				I("article", st, [V[77] ||= I("h2", null, "Boolean controls", -1), I("div", ct, [
					R(j, {
						modelValue: _.value,
						"onUpdate:modelValue": V[3] ||= (e) => _.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					I("label", lt, [R(ue, {
						modelValue: v.value,
						"onUpdate:modelValue": V[4] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), V[75] ||= L(" Выбрать элемент ", -1)]),
					I("label", ut, [R(ue, {
						modelValue: v.value,
						"onUpdate:modelValue": V[5] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), V[76] ||= L(" Крупный выбор (24px) ", -1)])
				])]),
				I("article", dt, [V[78] ||= I("h2", null, "Segmented controls", -1), I("div", ft, [R(Oe, {
					modelValue: b.value,
					"onUpdate:modelValue": V[6] ||= (e) => b.value = e,
					options: Wt,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), R(he, {
					modelValue: x.value,
					"onUpdate:modelValue": V[7] ||= (e) => x.value = e,
					tabs: Gt,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				I("article", pt, [V[79] ||= I("h2", null, "AppSlider", -1), I("div", mt, [R(s, {
					modelValue: C.value,
					"onUpdate:modelValue": V[8] ||= (e) => C.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), I("strong", null, H(C.value), 1)])])
			])]),
			I("section", ht, [R(d, {
				title: "Формы",
				border: ""
			}), I("div", gt, [I("article", _t, [
				V[81] ||= I("h2", null, "Form primitives", -1),
				I("div", vt, [
					R(A, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: U(() => [R(r, {
							value: $.name,
							"onUpdate:value": V[9] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Дата",
						vertical: ""
					}, {
						default: U(() => [R(Te, {
							modelValue: $.date,
							"onUpdate:modelValue": V[10] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), R(Te, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					R(A, {
						label: "Количество",
						vertical: ""
					}, {
						default: U(() => [R(me, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: V[11] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Тип",
						vertical: ""
					}, {
						default: U(() => [R(Ae, {
							value: $.type,
							"onUpdate:value": V[12] ||= (e) => $.type = e
						}, {
							default: U(() => [...V[80] ||= [I("option", { value: "base" }, "Основной", -1), I("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					R(A, {
						label: "Описание",
						vertical: ""
					}, {
						default: U(() => [R(De, {
							value: $.description,
							"onUpdate:value": V[13] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				R(k, {
					"submit-text": "Сохранить",
					onCancel: Yt
				})
			])])]),
			I("section", yt, [R(d, {
				title: "Выбор значений и floating UI",
				border: ""
			}), I("div", bt, [
				I("article", xt, [V[82] ||= I("h2", null, "Selectors", -1), I("div", St, [
					R(we, {
						modelValue: E.value,
						"onUpdate:modelValue": V[14] ||= (e) => E.value = e,
						options: Kt,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					R(T, {
						modelValue: O.value,
						"onUpdate:modelValue": V[15] ||= (e) => O.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					R(T, {
						modelValue: O.value,
						"onUpdate:modelValue": V[16] ||= (e) => O.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				I("article", Ct, [
					V[84] ||= I("h2", null, "BasePopover", -1),
					I("button", {
						ref_key: "popoverAnchor",
						ref: Bt,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[17] ||= (e) => G.value = !G.value
					}, " Открыть popover ", 512),
					R(ge, {
						open: G.value,
						anchor: Bt.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": V[18] ||= (e) => G.value = e
					}, {
						default: U(() => [...V[83] ||= [I("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				I("article", wt, [
					V[91] ||= I("h2", null, "ActionMenu", -1),
					R(_e, {
						title: "Действия",
						related: ""
					}, {
						default: U(() => [
							R(g, { tone: "accent" }, {
								default: U(() => [...V[85] ||= [L("Редактировать", -1)]]),
								_: 1
							}),
							R(Ee, { label: "Перемещение" }, {
								trigger: U(({ open: e }) => [R(g, {
									submenu: "",
									"submenu-open": e
								}, {
									default: U(() => [...V[86] ||= [L("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: U(() => [R(g, null, {
									default: U(() => [...V[87] ||= [L("В начало", -1)]]),
									_: 1
								}), R(g, null, {
									default: U(() => [...V[88] ||= [L("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							R(g, { tone: "danger" }, {
								default: U(() => [...V[89] ||= [L("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					I("button", {
						ref_key: "actionMenuAnchor",
						ref: K,
						type: "button",
						class: "share-component-gallery__button",
						onClick: V[19] ||= (e) => Vt.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					R(_e, {
						ref_key: "anchoredActionMenu",
						ref: Vt,
						anchor: K.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: U(({ close: e }) => [R(g, { onClick: e }, {
							default: U(() => [...V[90] ||= [L("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				I("article", Tt, [V[94] ||= I("h2", null, "AccountMenu", -1), R(pe, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: U(({ close: e }) => [R(g, { onClick: e }, {
						default: U(() => [...V[92] ||= [L("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), R(g, {
						tone: "danger",
						onClick: e
					}, {
						default: U(() => [...V[93] ||= [L("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			I("section", Et, [R(d, {
				title: "Редакторы и rich text",
				border: ""
			}), I("div", Dt, [I("article", Ot, [
				V[95] ||= I("h2", null, "Rich text", -1),
				R(c, {
					ref: "richEditor",
					modelValue: M.value,
					"onUpdate:modelValue": V[20] ||= (e) => M.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: U(({ editor: e, insertRichNode: t }) => [I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Fe((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, kt), I("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Fe((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, At)]),
					_: 1
				}, 8, ["modelValue"]),
				I("div", jt, [R(ne, { html: M.value }, {
					node: U(({ node: e }) => [I("strong", Mt, H(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), I("article", Nt, [V[98] ||= I("h2", null, "Editor composition", -1), R(l, null, {
				default: U(() => [R(re, { title: "Параметры" }, {
					default: U(() => [R(ee, { title: "Основное" }, {
						default: U(() => [R(te, { title: "Значение" }, {
							actions: U(() => [...V[96] ||= [I("span", null, "12", -1)]]),
							_: 1
						}), R(s, {
							modelValue: C.value,
							"onUpdate:modelValue": V[21] ||= (e) => C.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), R(oe, null, {
						default: U(() => [V[97] ||= L("Итого: ", -1), I("strong", null, H(C.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			I("section", Pt, [R(d, {
				title: "Каркас приложения",
				border: ""
			}), I("article", Ft, [
				V[104] ||= I("h2", null, "Navigation composition", -1),
				R(j, {
					modelValue: W.value,
					"onUpdate:modelValue": V[22] ||= (e) => W.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				I("div", It, [R(de, {
					class: Me(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": z.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: U(() => [R(fe, {
						modelValue: z.value,
						"onUpdate:modelValue": V[23] ||= (e) => z.value = e,
						elevated: W.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: U(() => [R(n, {
							as: "div",
							label: "share-ui"
						}, {
							icon: U(() => [...V[99] ||= [I("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: U(() => [
							R(se, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: U(() => [...V[100] ||= [I("span", null, "⌂", -1)]]),
								_: 1
							}),
							R(je, { label: "Примеры" }),
							R(se, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: U(() => [...V[101] ||= [I("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: U(() => [...V[102] ||= [I("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: U(() => [V[103] ||= I("div", { class: "share-component-gallery__chrome-content" }, [
						I("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						I("strong", null, "AppShell + AppSidebar"),
						I("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			I("section", Lt, [R(d, {
				title: "Оверлеи и morph",
				border: ""
			}), I("article", Rt, [V[105] ||= I("h2", null, "Интерактивные примеры", -1), I("div", zt, [
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[24] ||= (e) => q.value = !0
				}, "AppModal"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[25] ||= (e) => J.value = !0
				}, "AppModalFrame"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[26] ||= (e) => Y.value = !0
				}, "ModalShell"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[27] ||= (e) => X.value = !0
				}, "ConfirmDialog"),
				I("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[28] ||= (e) => Z.value = !0
				}, "TextPromptDialog"),
				I("button", {
					ref_key: "morphOrigin",
					ref: Ut,
					type: "button",
					class: "share-component-gallery__button",
					onClick: V[29] ||= (e) => Q.value = !0
				}, "MorphSheet", 512)
			])])]),
			q.value ? (B(), N(be, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: V[30] ||= (e) => q.value = !1
			}, {
				default: U(() => [...V[106] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "AppModal"), I("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : P("", !0),
			J.value ? (B(), N(e, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: V[33] ||= (e) => J.value = !1
			}, {
				footer: U(() => [R(k, {
					onCancel: V[31] ||= (e) => J.value = !1,
					onSubmit: V[32] ||= (e) => J.value = !1
				})]),
				default: U(() => [V[107] ||= I("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : P("", !0),
			R(a, {
				open: Y.value,
				"aria-label": "Пример ModalShell",
				onClose: V[34] ||= (e) => Y.value = !1
			}, {
				default: U(() => [...V[108] ||= [I("div", { class: "share-component-gallery__overlay-content" }, [I("h2", null, "ModalShell"), I("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			R(ie, {
				open: X.value,
				"onUpdate:open": V[35] ||= (e) => X.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			R(ce, {
				open: Z.value,
				"onUpdate:open": V[36] ||= (e) => Z.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (B(), N(le, {
				key: 2,
				"origin-el": Ut.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: V[37] ||= (e) => Q.value = !1
			}, {
				head: U(() => [...V[109] ||= [I("div", { class: "share-component-gallery__morph-head" }, [I("strong", null, "MorphSheet")], -1)]]),
				default: U(() => [V[110] ||= I("div", { class: "share-component-gallery__overlay-content" }, [I("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : P("", !0)
		]));
	}
}, [["__scopeId", "data-v-45800d94"]]);
//#endregion
export { W as COMPONENT_GALLERY_ALIASES, Re as COMPONENT_GALLERY_COMPONENTS, G as ComponentGallery };
