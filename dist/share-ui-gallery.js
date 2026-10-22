import { A as e, At as t, B as n, C as r, Ct as i, D as a, Dt as o, Et as s, F as ee, G as c, I as te, K as ne, L as re, Mt as ie, Nt as l, O as ae, Ot as u, P as oe, Pt as d, R as se, S as ce, St as le, T as ue, Tt as de, U as fe, V as pe, W as me, _ as f, a as he, b as ge, bt as _e, c as p, ct as ve, d as m, dt as h, f as g, ft as ye, g as be, h as xe, i as _, j as Se, jt as v, k as y, kt as Ce, l as b, lt as x, m as S, n as C, nt as we, o as w, p as T, r as Te, rt as Ee, s as E, st as De, t as D, u as O, v as Oe, w as ke, wt as k, x as A, xt as Ae, y as je, yt as Me, z as Ne } from "./StarRating-B09f18j0.js";
import { Fragment as j, createBlock as M, createCommentVNode as N, createElementBlock as P, createElementVNode as F, createTextVNode as I, createVNode as L, h as R, normalizeClass as Pe, openBlock as z, reactive as Fe, ref as B, toDisplayString as V, unref as Ie, withCtx as H, withModifiers as Le } from "vue";
//#region src/gallery/TourGalleryExample.vue
var Re = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = B(null), n = x(640), r = Fe(m());
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
		return (e, a) => (z(), P(j, null, [L(S, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: H(() => [...a[0] ||= [I("Показать обучение", -1)]]),
			_: 1
		}, 512), L(g, {
			tour: r,
			mobile: Ie(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, ze = {
	__name: "PerformanceGalleryExample",
	setup(e) {
		let t = B("star"), n = B(!1), r = B([]), i = B(null), a = B(!1), o = [{
			value: "star",
			label: "Звезда",
			icon: { render: () => R("span", "✦") }
		}, {
			value: "circle",
			label: "Круг",
			icon: { render: () => R("span", "●") }
		}], s = B([{
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
		return (e, c) => (z(), P(j, null, [L(p, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: H(() => [
				L(O, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				L(O, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				L(O, {
					percent: 100,
					label: "Полное значение"
				}),
				L(b, {
					modelValue: t.value,
					"onUpdate:modelValue": c[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				L(b, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				L(E, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: c[1] ||= (e) => n.value = !n.value
				}, {
					icon: H(() => [...c[8] ||= [I("✦", -1)]]),
					trailing: H(() => [...c[9] ||= [I("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				L(E, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				L(he, {
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
				L(w, {
					options: s.value,
					label: "Варианты",
					onSelect: c[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				L(w, {
					options: [],
					label: "Пустой список"
				}),
				F("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: c[4] ||= (e) => a.value = !0,
					onMouseleave: c[5] ||= (e) => a.value = !1,
					onFocus: c[6] ||= (e) => a.value = !0,
					onBlur: c[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (z(), M(_, {
					key: 0,
					anchor: i.value
				}, {
					default: H(() => [...c[10] ||= [I("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : N("", !0)
			]),
			_: 1
		}), L(p, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: H(() => [...c[11] ||= [I("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Be = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), U = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Ve = { class: "share-component-gallery" }, He = { class: "share-component-gallery__header" }, Ue = { class: "share-component-gallery__eyebrow" }, We = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, Ge = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, Ke = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, qe = { class: "share-component-gallery__section" }, Je = { class: "share-component-gallery__grid" }, Ye = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, Xe = { class: "share-component-gallery__tile-row" }, Ze = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, Qe = { class: "share-component-gallery__row" }, $e = { class: "share-component-gallery__row" }, et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, rt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, it = { class: "share-component-gallery__row" }, at = { class: "share-component-gallery__row" }, ot = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, st = { class: "share-component-gallery__section" }, ct = { class: "share-component-gallery__grid" }, lt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, ut = { class: "share-component-gallery__stack" }, dt = { class: "share-component-gallery__checkbox-row" }, ft = { class: "share-component-gallery__checkbox-row" }, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, mt = { class: "share-component-gallery__stack" }, ht = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, gt = { class: "share-component-gallery__stack" }, _t = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, vt = ["d"], yt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, bt = ["d"], xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, St = { class: "share-component-gallery__slider" }, Ct = { class: "share-component-gallery__section" }, wt = { class: "share-component-gallery__grid" }, Tt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Et = { class: "share-component-gallery__form-grid" }, Dt = { class: "share-component-gallery__section" }, Ot = { class: "share-component-gallery__grid" }, kt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, At = { class: "share-component-gallery__stack" }, jt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Pt = { class: "share-component-gallery__section" }, Ft = { class: "share-component-gallery__grid" }, It = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, Lt = ["onMousedown"], Rt = ["onMousedown"], zt = { class: "share-component-gallery__preview" }, Bt = { class: "share-component-gallery__rich-node" }, Vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, Ht = { class: "share-component-gallery__section" }, Ut = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, Wt = { class: "share-component-gallery__chrome" }, Gt = { class: "share-component-gallery__section" }, Kt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, qt = { class: "share-component-gallery__row" }, W = /*#__PURE__*/ d({
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
		let he = Be.length, p = B(3), m = B(!0), g = B(!0), _ = B(!0), b = B("md"), x = B("preview"), w = B("build"), E = [
			{
				key: "build",
				label: "Build"
			},
			{
				key: "disabled",
				label: "Unavailable",
				disabled: !0
			},
			{
				key: "settings",
				label: "Settings",
				divider: !0,
				dividerLabel: "Tools"
			}
		], O = B(62), j = B("rare"), R = B("#7c5ce2"), U = B("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), W = B(!0), G = B(!0), K = B(!1), Jt = B(null), Yt = B(null), Xt = B(null), q = B(!1), J = B(!1), Y = B(!1), X = B(!1), Z = B(!1), Zt = B(0), Q = B(!1), Qt = B(null), $t = [
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
		], en = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], tn = [
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
		], nn = [
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
		], $ = Fe({
			date: "",
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function rn(e) {
			return `${e} МБ`;
		}
		function an() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Fe, B) => (z(), P("div", Ve, [
			F("header", He, [F("div", null, [
				F("p", Ue, "share-ui · " + V(Ie(he)) + " компонентов", 1),
				F("h1", null, V(d.title), 1),
				F("p", null, V(d.description), 1)
			]), B[40] ||= F("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			F("section", We, [
				L(D, {
					modelValue: p.value,
					"onUpdate:modelValue": B[0] ||= (e) => p.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				L(D, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				L(D, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			F("section", Ge, [L(ze)]),
			F("section", Ke, [B[41] ||= F("h2", null, "GuidedTour", -1), L(Re)]),
			F("section", qe, [L(i, {
				title: "Поверхности и действия",
				border: ""
			}), F("div", Je, [
				F("article", Ye, [
					B[51] ||= F("h2", null, "BaseTile", -1),
					L(S, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: H(() => [...B[42] ||= [I("✦", -1)]]),
						_: 1
					}),
					F("div", Xe, [
						L(l, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: H(() => [
								L(t),
								B[43] ||= F("strong", null, "Акцентная плитка", -1),
								B[44] ||= F("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						L(l, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: H(() => [...B[45] ||= [F("strong", null, "Рамка", -1), F("span", null, "framed", -1)]]),
							_: 1
						}),
						L(v, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: B[1] ||= (e) => Zt.value++
						}, {
							aside: H(() => [F("span", null, V(Zt.value), 1)]),
							default: H(() => [B[46] ||= F("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						L(v, {
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: H(() => [...B[47] ||= [F("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						L(v, { title: "Только просмотр" }, {
							default: H(() => [...B[48] ||= [F("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						L(v, null, {
							default: H(() => [...B[49] ||= [F("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						L(v, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: H(() => [...B[50] ||= [F("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						L(ie, { title: "Общий заголовок" })
					])
				]),
				F("article", Ze, [
					B[52] ||= F("h2", null, "Загрузка", -1),
					L(xe, { label: "Открываем раздел…" }),
					L(xe, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					L(y, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					F("div", Qe, [
						L(y, {
							label: "Загрузка",
							size: "sm"
						}),
						L(y, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						L(y, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					F("div", $e, [L(be, {
						width: "36px",
						height: "36px",
						round: ""
					}), L(be, { width: "60%" })])
				]),
				F("article", et, [
					B[53] ||= F("h2", null, "InlineEdit", -1),
					L(f, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					L(f, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					L(f, {
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
				F("article", tt, [
					B[61] ||= F("h2", null, "TimelineGroup", -1),
					L(i, {
						title: "История",
						line: ""
					}, {
						actions: H(() => [...B[54] ||= [F("span", null, "2", -1)]]),
						_: 1
					}),
					L(C, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: H(() => [...B[55] ||= [F("strong", null, "Участник", -1)]]),
						default: H(() => [B[56] ||= F("strong", null, "Запись события", -1), B[57] ||= F("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					L(C, { color: "var(--success)" }, {
						identity: H(() => [...B[58] ||= [F("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: H(() => [L(A, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: H(() => [L(r, { value: "Черновик" })]),
							_: 1
						})]),
						default: H(() => [B[59] ||= F("strong", null, "Компактная запись", -1), B[60] ||= F("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				F("article", nt, [
					B[65] ||= F("h2", null, "SectionList", -1),
					L(Ce, { title: "Записи" }, {
						footer: H(() => [L(u, { label: "Добавить запись" })]),
						default: H(() => [B[62] ||= F("div", { style: { padding: "12px 0" } }, "Первая запись", -1), B[63] ||= F("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					L(Ce, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: H(() => [...B[64] ||= [F("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), F("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				F("article", rt, [
					B[75] ||= F("h2", null, "Кнопки элементов", -1),
					F("div", it, [
						L(T, {
							modelValue: m.value,
							"onUpdate:modelValue": B[2] ||= (e) => m.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: H(() => [...B[66] ||= [F("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [F("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}, 8, ["modelValue"]),
						L(T, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: H(() => [...B[67] ||= [F("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [F("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}),
						L(T, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: H(() => [...B[68] ||= [F("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [F("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						})
					]),
					L(i, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					L(i, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					F("div", at, [
						L(S, null, {
							default: H(() => [...B[69] ||= [I("Основное действие", -1)]]),
							_: 1
						}),
						L(S, { variant: "secondary" }, {
							default: H(() => [...B[70] ||= [I("Вторичное", -1)]]),
							_: 1
						}),
						L(S, { variant: "quiet" }, {
							default: H(() => [...B[71] ||= [I("Тихое", -1)]]),
							_: 1
						}),
						L(S, { variant: "dashed" }, {
							default: H(() => [...B[72] ||= [I("Пунктирная рамка", -1)]]),
							_: 1
						}),
						L(S, { disabled: "" }, {
							default: H(() => [...B[73] ||= [I("Недоступно", -1)]]),
							_: 1
						}),
						L(S, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: H(() => [...B[74] ||= [I("Загрузка", -1)]]),
							_: 1
						}),
						L(u, { label: "Добавить элемент" }),
						L(u, {
							label: "Добавить",
							variant: "icon"
						}),
						L(k, { label: "Удалить" }),
						L(k, {
							label: "Удалить",
							variant: "boxed"
						}),
						L(k, {
							label: "Удалить запись",
							icon: "trash"
						}),
						L(k, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						L(k, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				F("article", ot, [B[76] ||= F("h2", null, "SegmentDonutChart", -1), L(le, {
					segments: nn,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": rn
				})])
			])]),
			F("section", st, [L(i, {
				title: "Переключатели",
				border: ""
			}), F("div", ct, [
				F("article", lt, [B[79] ||= F("h2", null, "Boolean controls", -1), F("div", ut, [
					L(Me, {
						modelValue: g.value,
						"onUpdate:modelValue": B[3] ||= (e) => g.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					F("label", dt, [L(s, {
						modelValue: _.value,
						"onUpdate:modelValue": B[4] ||= (e) => _.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), B[77] ||= I(" Выбрать элемент ", -1)]),
					F("label", ft, [L(s, {
						modelValue: _.value,
						"onUpdate:modelValue": B[5] ||= (e) => _.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), B[78] ||= I(" Крупный выбор (24px) ", -1)])
				])]),
				F("article", pt, [B[80] ||= F("h2", null, "Segmented controls", -1), F("div", mt, [L(de, {
					modelValue: b.value,
					"onUpdate:modelValue": B[6] ||= (e) => b.value = e,
					options: $t,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), L(_e, {
					modelValue: x.value,
					"onUpdate:modelValue": B[7] ||= (e) => x.value = e,
					tabs: en,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				F("article", ht, [B[81] ||= F("h2", null, "IconNavigation", -1), F("div", gt, [L(Ae, {
					modelValue: w.value,
					"onUpdate:modelValue": B[8] ||= (e) => w.value = e,
					items: E,
					label: "Horizontal sections"
				}, {
					icon: H(({ item: e }) => [(z(), P("svg", _t, [F("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, vt)]))]),
					_: 1
				}, 8, ["modelValue"]), L(Ae, {
					modelValue: w.value,
					"onUpdate:modelValue": B[9] ||= (e) => w.value = e,
					items: E,
					orientation: "vertical",
					size: 64,
					label: "Vertical sections"
				}, {
					icon: H(({ item: e }) => [(z(), P("svg", yt, [F("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, bt)]))]),
					_: 1
				}, 8, ["modelValue"])])]),
				F("article", xt, [B[82] ||= F("h2", null, "AppSlider", -1), F("div", St, [L(o, {
					modelValue: O.value,
					"onUpdate:modelValue": B[10] ||= (e) => O.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), F("strong", null, V(O.value), 1)])])
			])]),
			F("section", Ct, [L(i, {
				title: "Формы",
				border: ""
			}), F("div", wt, [F("article", Tt, [
				B[84] ||= F("h2", null, "Form primitives", -1),
				F("div", Et, [
					L(A, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: H(() => [L(r, {
							value: $.name,
							"onUpdate:value": B[11] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					L(A, {
						label: "Дата",
						vertical: ""
					}, {
						default: H(() => [L(Te, {
							modelValue: $.date,
							"onUpdate:modelValue": B[12] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), L(Te, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					L(A, {
						label: "Количество",
						vertical: ""
					}, {
						default: H(() => [L(ge, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: B[13] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					L(A, {
						label: "Тип",
						vertical: ""
					}, {
						default: H(() => [L(je, {
							value: $.type,
							"onUpdate:value": B[14] ||= (e) => $.type = e
						}, {
							default: H(() => [...B[83] ||= [F("option", { value: "base" }, "Основной", -1), F("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					L(A, {
						label: "Описание",
						vertical: ""
					}, {
						default: H(() => [L(Oe, {
							value: $.description,
							"onUpdate:value": B[15] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				L(ke, {
					"submit-text": "Сохранить",
					onCancel: an
				})
			])])]),
			F("section", Dt, [L(i, {
				title: "Выбор значений и floating UI",
				border: ""
			}), F("div", Ot, [
				F("article", kt, [B[85] ||= F("h2", null, "Selectors", -1), F("div", At, [
					L(we, {
						modelValue: j.value,
						"onUpdate:modelValue": B[16] ||= (e) => j.value = e,
						options: tn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					L(Ee, {
						modelValue: R.value,
						"onUpdate:modelValue": B[17] ||= (e) => R.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					L(Ee, {
						modelValue: R.value,
						"onUpdate:modelValue": B[18] ||= (e) => R.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				F("article", jt, [
					B[87] ||= F("h2", null, "BasePopover", -1),
					F("button", {
						ref_key: "popoverAnchor",
						ref: Jt,
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[19] ||= (e) => K.value = !K.value
					}, " Открыть popover ", 512),
					L(ve, {
						open: K.value,
						anchor: Jt.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": B[20] ||= (e) => K.value = e
					}, {
						default: H(() => [...B[86] ||= [F("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				F("article", Mt, [
					B[94] ||= F("h2", null, "ActionMenu", -1),
					L(ye, {
						title: "Действия",
						related: ""
					}, {
						default: H(() => [
							L(h, { tone: "accent" }, {
								default: H(() => [...B[88] ||= [I("Редактировать", -1)]]),
								_: 1
							}),
							L(De, { label: "Перемещение" }, {
								trigger: H(({ open: e }) => [L(h, {
									submenu: "",
									"submenu-open": e
								}, {
									default: H(() => [...B[89] ||= [I("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: H(() => [L(h, null, {
									default: H(() => [...B[90] ||= [I("В начало", -1)]]),
									_: 1
								}), L(h, null, {
									default: H(() => [...B[91] ||= [I("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							L(h, { tone: "danger" }, {
								default: H(() => [...B[92] ||= [I("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					F("button", {
						ref_key: "actionMenuAnchor",
						ref: Yt,
						type: "button",
						class: "share-component-gallery__button",
						onClick: B[21] ||= (e) => Xt.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					L(ye, {
						ref_key: "anchoredActionMenu",
						ref: Xt,
						anchor: Yt.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: H(({ close: e }) => [L(h, { onClick: e }, {
							default: H(() => [...B[93] ||= [I("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				F("article", Nt, [B[97] ||= F("h2", null, "AccountMenu", -1), L(me, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: H(({ close: e }) => [L(h, { onClick: e }, {
						default: H(() => [...B[95] ||= [I("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), L(h, {
						tone: "danger",
						onClick: e
					}, {
						default: H(() => [...B[96] ||= [I("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			F("section", Pt, [L(i, {
				title: "Редакторы и rich text",
				border: ""
			}), F("div", Ft, [F("article", It, [
				B[98] ||= F("h2", null, "Rich text", -1),
				L(c, {
					ref: "richEditor",
					modelValue: U.value,
					"onUpdate:modelValue": B[22] ||= (e) => U.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: H(({ editor: e, insertRichNode: t }) => [F("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Le((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, Lt), F("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Le((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Rt)]),
					_: 1
				}, 8, ["modelValue"]),
				F("div", zt, [L(ne, { html: U.value }, {
					node: H(({ node: e }) => [F("strong", Bt, V(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), F("article", Vt, [B[101] ||= F("h2", null, "Editor composition", -1), L(l, null, {
				default: H(() => [L(re, { title: "Параметры" }, {
					default: H(() => [L(ee, { title: "Основное" }, {
						default: H(() => [L(te, { title: "Значение" }, {
							actions: H(() => [...B[99] ||= [F("span", null, "12", -1)]]),
							_: 1
						}), L(o, {
							modelValue: O.value,
							"onUpdate:modelValue": B[23] ||= (e) => O.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), L(oe, null, {
						default: H(() => [B[100] ||= I("Итого: ", -1), F("strong", null, V(O.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			F("section", Ht, [L(i, {
				title: "Каркас приложения",
				border: ""
			}), F("article", Ut, [
				B[107] ||= F("h2", null, "Navigation composition", -1),
				L(Me, {
					modelValue: G.value,
					"onUpdate:modelValue": B[24] ||= (e) => G.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				F("div", Wt, [L(fe, {
					class: Pe(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": W.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: H(() => [L(pe, {
						modelValue: W.value,
						"onUpdate:modelValue": B[25] ||= (e) => W.value = e,
						elevated: G.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: H(() => [L(n, {
							as: "div",
							label: "share-ui"
						}, {
							icon: H(() => [...B[102] ||= [F("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: H(() => [
							L(se, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: H(() => [...B[103] ||= [F("span", null, "⌂", -1)]]),
								_: 1
							}),
							L(Ne, { label: "Примеры" }),
							L(se, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: H(() => [...B[104] ||= [F("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: H(() => [...B[105] ||= [F("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: H(() => [B[106] ||= F("div", { class: "share-component-gallery__chrome-content" }, [
						F("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						F("strong", null, "AppShell + AppSidebar"),
						F("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			F("section", Gt, [L(i, {
				title: "Оверлеи и morph",
				border: ""
			}), F("article", Kt, [B[108] ||= F("h2", null, "Интерактивные примеры", -1), F("div", qt, [
				F("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: B[26] ||= (e) => q.value = !0
				}, "AppModal"),
				F("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: B[27] ||= (e) => J.value = !0
				}, "AppModalFrame"),
				F("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: B[28] ||= (e) => Y.value = !0
				}, "ModalShell"),
				F("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: B[29] ||= (e) => X.value = !0
				}, "ConfirmDialog"),
				F("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: B[30] ||= (e) => Z.value = !0
				}, "TextPromptDialog"),
				F("button", {
					ref_key: "morphOrigin",
					ref: Qt,
					type: "button",
					class: "share-component-gallery__button",
					onClick: B[31] ||= (e) => Q.value = !0
				}, "MorphSheet", 512)
			])])]),
			q.value ? (z(), M(Se, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: B[32] ||= (e) => q.value = !1
			}, {
				default: H(() => [...B[109] ||= [F("div", { class: "share-component-gallery__overlay-content" }, [F("h2", null, "AppModal"), F("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : N("", !0),
			J.value ? (z(), M(e, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: B[35] ||= (e) => J.value = !1
			}, {
				footer: H(() => [L(ke, {
					onCancel: B[33] ||= (e) => J.value = !1,
					onSubmit: B[34] ||= (e) => J.value = !1
				})]),
				default: H(() => [B[110] ||= F("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : N("", !0),
			L(a, {
				open: Y.value,
				"aria-label": "Пример ModalShell",
				onClose: B[36] ||= (e) => Y.value = !1
			}, {
				default: H(() => [...B[111] ||= [F("div", { class: "share-component-gallery__overlay-content" }, [F("h2", null, "ModalShell"), F("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			L(ae, {
				open: X.value,
				"onUpdate:open": B[37] ||= (e) => X.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			L(ce, {
				open: Z.value,
				"onUpdate:open": B[38] ||= (e) => Z.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (z(), M(ue, {
				key: 2,
				"origin-el": Qt.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: B[39] ||= (e) => Q.value = !1
			}, {
				head: H(() => [...B[112] ||= [F("div", { class: "share-component-gallery__morph-head" }, [F("strong", null, "MorphSheet")], -1)]]),
				default: H(() => [B[113] ||= F("div", { class: "share-component-gallery__overlay-content" }, [F("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : N("", !0)
		]));
	}
}, [["__scopeId", "data-v-df8616a4"]]);
//#endregion
export { U as COMPONENT_GALLERY_ALIASES, Be as COMPONENT_GALLERY_COMPONENTS, W as ComponentGallery };
