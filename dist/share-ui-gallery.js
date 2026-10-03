import { $ as e, At as t, B as n, Ct as r, D as i, Dt as a, E as o, Et as s, F as c, H as l, I as ee, L as te, M as ne, N as re, O as ie, Ot as ae, P as oe, R as se, S as ce, St as le, T as ue, Tt as de, U as fe, V as pe, _ as me, _t as he, a as u, at as ge, b as _e, bt as d, c as f, ct as p, d as m, et as ve, f as h, g as ye, gt as be, h as xe, i as g, it as Se, j as Ce, kt as _, l as v, lt as y, m as b, n as x, o as S, ot as C, p as w, r as T, s as E, t as D, u as O, v as k, vt as we, w as Te, wt as A, x as j, xt as Ee, y as De, yt as M } from "./DatePicker-9fP9OR2M.js";
import { Fragment as N, createBlock as P, createCommentVNode as F, createElementBlock as I, createElementVNode as L, createTextVNode as R, createVNode as z, h as B, normalizeClass as Oe, openBlock as V, reactive as ke, ref as H, toDisplayString as U, unref as Ae, withCtx as W, withModifiers as je } from "vue";
//#region src/gallery/TourGalleryExample.vue
var Me = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = H(null), n = C(640), r = ke(v());
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
		return (e, a) => (V(), I(N, null, [z(m, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: W(() => [...a[0] ||= [R("Показать обучение", -1)]]),
			_: 1
		}, 512), z(O, {
			tour: r,
			mobile: Ae(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, Ne = {
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
		return (e, l) => (V(), I(N, null, [z(S, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: W(() => [
				z(f, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				z(f, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				z(f, {
					percent: 100,
					label: "Полное значение"
				}),
				z(E, {
					modelValue: t.value,
					"onUpdate:modelValue": l[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				z(E, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				z(u, {
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
				z(u, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				z(T, {
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
				z(g, {
					options: s.value,
					label: "Варианты",
					onSelect: l[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				z(g, {
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
				a.value ? (V(), P(x, {
					key: 0,
					anchor: i.value
				}, {
					default: W(() => [...l[10] ||= [R("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : F("", !0)
			]),
			_: 1
		}), z(S, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: W(() => [...l[11] ||= [R("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, Pe = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.SegmentDonutChart.SlidingTabs.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), G = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Fe = { class: "share-component-gallery" }, Ie = { class: "share-component-gallery__header" }, Le = { class: "share-component-gallery__eyebrow" }, Re = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, ze = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, Be = { class: "share-component-gallery__section" }, Ve = { class: "share-component-gallery__grid" }, He = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, Ue = { class: "share-component-gallery__tile-row" }, We = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, Ge = { class: "share-component-gallery__row" }, Ke = { class: "share-component-gallery__row" }, qe = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, Je = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, Ye = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton"
}, Xe = { class: "share-component-gallery__row" }, Ze = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, Qe = { class: "share-component-gallery__section" }, $e = { class: "share-component-gallery__grid" }, et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, tt = { class: "share-component-gallery__stack" }, nt = { class: "share-component-gallery__checkbox-row" }, rt = { class: "share-component-gallery__checkbox-row" }, it = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, at = { class: "share-component-gallery__stack" }, ot = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, st = { class: "share-component-gallery__slider" }, ct = { class: "share-component-gallery__section" }, lt = { class: "share-component-gallery__grid" }, ut = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, dt = { class: "share-component-gallery__form-grid" }, ft = { class: "share-component-gallery__section" }, pt = { class: "share-component-gallery__grid" }, mt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, ht = { class: "share-component-gallery__stack" }, gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, _t = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, yt = { class: "share-component-gallery__section" }, bt = { class: "share-component-gallery__grid" }, xt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, St = ["onMousedown"], Ct = ["onMousedown"], wt = { class: "share-component-gallery__preview" }, Tt = { class: "share-component-gallery__rich-node" }, Et = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, Dt = { class: "share-component-gallery__section" }, Ot = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, kt = { class: "share-component-gallery__chrome" }, At = { class: "share-component-gallery__section" }, jt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, Mt = { class: "share-component-gallery__row" }, K = /*#__PURE__*/ t({
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
	setup(t) {
		let u = Pe.length, f = H(!0), g = H(!0), v = H("md"), x = H("preview"), S = H(62), C = H("rare"), T = H("#7c5ce2"), E = H("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), O = H(!0), N = H(!1), B = H(null), G = H(null), K = H(null), q = H(!1), J = H(!1), Y = H(!1), X = H(!1), Z = H(!1), Nt = H(0), Q = H(!1), Pt = H(null), Ft = [
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
		], It = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], Lt = [
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
		], Rt = [
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
		], $ = ke({
			date: "",
			name: "Новый элемент",
			count: 3,
			type: "base",
			description: ""
		});
		function zt(e) {
			return `${e} МБ`;
		}
		function Bt() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (ke, H) => (V(), I("div", Fe, [
			L("header", Ie, [L("div", null, [
				L("p", Le, "share-ui · " + U(Ae(u)) + " компонентов", 1),
				L("h1", null, U(t.title), 1),
				L("p", null, U(t.description), 1)
			]), H[34] ||= L("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			L("section", Re, [z(Ne)]),
			L("section", ze, [H[35] ||= L("h2", null, "GuidedTour", -1), z(Me)]),
			L("section", Be, [z(M, {
				title: "Поверхности и действия",
				border: ""
			}), L("div", Ve, [
				L("article", He, [
					H[45] ||= L("h2", null, "BaseTile", -1),
					z(m, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: W(() => [...H[36] ||= [R("✦", -1)]]),
						_: 1
					}),
					L("div", Ue, [
						z(_, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [
								z(s),
								H[37] ||= L("strong", null, "Акцентная плитка", -1),
								H[38] ||= L("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						z(_, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: W(() => [...H[39] ||= [L("strong", null, "Рамка", -1), L("span", null, "framed", -1)]]),
							_: 1
						}),
						z(a, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: H[0] ||= (e) => Nt.value++
						}, {
							aside: W(() => [L("span", null, U(Nt.value), 1)]),
							default: W(() => [H[40] ||= L("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						z(a, {
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...H[41] ||= [L("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						z(a, { title: "Только просмотр" }, {
							default: W(() => [...H[42] ||= [L("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						z(a, null, {
							default: W(() => [...H[43] ||= [L("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						z(a, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: W(() => [...H[44] ||= [L("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						z(ae, { title: "Общий заголовок" })
					])
				]),
				L("article", We, [
					H[46] ||= L("h2", null, "Загрузка", -1),
					z(h, { label: "Открываем раздел…" }),
					z(h, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					z(o, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					L("div", Ge, [
						z(o, {
							label: "Загрузка",
							size: "sm"
						}),
						z(o, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						z(o, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					L("div", Ke, [z(w, {
						width: "36px",
						height: "36px",
						round: ""
					}), z(w, { width: "60%" })])
				]),
				L("article", qe, [
					H[47] ||= L("h2", null, "InlineEdit", -1),
					z(b, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					z(b, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					z(b, {
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
				L("article", Je, [
					H[51] ||= L("h2", null, "SectionList", -1),
					z(de, { title: "Записи" }, {
						footer: W(() => [z(A, { label: "Добавить запись" })]),
						default: W(() => [H[48] ||= L("div", { style: { padding: "12px 0" } }, "Первая запись", -1), H[49] ||= L("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					z(de, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: W(() => [...H[50] ||= [L("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), L("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				L("article", Ye, [H[58] ||= L("h2", null, "Кнопки элементов", -1), L("div", Xe, [
					z(m, null, {
						default: W(() => [...H[52] ||= [R("Основное действие", -1)]]),
						_: 1
					}),
					z(m, { variant: "secondary" }, {
						default: W(() => [...H[53] ||= [R("Вторичное", -1)]]),
						_: 1
					}),
					z(m, { variant: "quiet" }, {
						default: W(() => [...H[54] ||= [R("Тихое", -1)]]),
						_: 1
					}),
					z(m, { variant: "dashed" }, {
						default: W(() => [...H[55] ||= [R("Пунктирная рамка", -1)]]),
						_: 1
					}),
					z(m, { disabled: "" }, {
						default: W(() => [...H[56] ||= [R("Недоступно", -1)]]),
						_: 1
					}),
					z(m, {
						loading: "",
						"loading-label": "Загрузка"
					}, {
						default: W(() => [...H[57] ||= [R("Загрузка", -1)]]),
						_: 1
					}),
					z(A, { label: "Добавить элемент" }),
					z(A, {
						label: "Добавить",
						variant: "icon"
					}),
					z(d, { label: "Удалить" }),
					z(d, {
						label: "Удалить",
						variant: "boxed"
					}),
					z(d, {
						label: "Удалить запись",
						icon: "trash"
					}),
					z(d, {
						label: "Удалить запись",
						icon: "trash",
						variant: "boxed"
					}),
					z(d, {
						label: "Удаление недоступно",
						icon: "trash",
						disabled: ""
					})
				])]),
				L("article", Ze, [H[59] ||= L("h2", null, "SegmentDonutChart", -1), z(we, {
					segments: Rt,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": zt
				})])
			])]),
			L("section", Qe, [z(M, {
				title: "Переключатели",
				border: ""
			}), L("div", $e, [
				L("article", et, [H[62] ||= L("h2", null, "Boolean controls", -1), L("div", tt, [
					z(be, {
						modelValue: f.value,
						"onUpdate:modelValue": H[1] ||= (e) => f.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					L("label", nt, [z(le, {
						modelValue: g.value,
						"onUpdate:modelValue": H[2] ||= (e) => g.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), H[60] ||= R(" Выбрать элемент ", -1)]),
					L("label", rt, [z(le, {
						modelValue: g.value,
						"onUpdate:modelValue": H[3] ||= (e) => g.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), H[61] ||= R(" Крупный выбор (24px) ", -1)])
				])]),
				L("article", it, [H[63] ||= L("h2", null, "Segmented controls", -1), L("div", at, [z(Ee, {
					modelValue: v.value,
					"onUpdate:modelValue": H[4] ||= (e) => v.value = e,
					options: Ft,
					"aria-label": "Размер"
				}, null, 8, ["modelValue"]), z(he, {
					modelValue: x.value,
					"onUpdate:modelValue": H[5] ||= (e) => x.value = e,
					tabs: It,
					"aria-label": "Режим просмотра"
				}, null, 8, ["modelValue"])])]),
				L("article", ot, [H[64] ||= L("h2", null, "AppSlider", -1), L("div", st, [z(r, {
					modelValue: S.value,
					"onUpdate:modelValue": H[6] ||= (e) => S.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), L("strong", null, U(S.value), 1)])])
			])]),
			L("section", ct, [z(M, {
				title: "Формы",
				border: ""
			}), L("div", lt, [L("article", ut, [
				H[66] ||= L("h2", null, "Form primitives", -1),
				L("div", dt, [
					z(k, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: W(() => [z(_e, {
							value: $.name,
							"onUpdate:value": H[7] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(k, {
						label: "Дата",
						vertical: ""
					}, {
						default: W(() => [z(D, {
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
						}, null, 8, ["modelValue"]), z(D, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					z(k, {
						label: "Количество",
						vertical: ""
					}, {
						default: W(() => [z(me, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: H[9] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(k, {
						label: "Тип",
						vertical: ""
					}, {
						default: W(() => [z(ye, {
							value: $.type,
							"onUpdate:value": H[10] ||= (e) => $.type = e
						}, {
							default: W(() => [...H[65] ||= [L("option", { value: "base" }, "Основной", -1), L("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					z(k, {
						label: "Описание",
						vertical: ""
					}, {
						default: W(() => [z(xe, {
							value: $.description,
							"onUpdate:value": H[11] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				z(j, {
					"submit-text": "Сохранить",
					onCancel: Bt
				})
			])])]),
			L("section", ft, [z(M, {
				title: "Выбор значений и floating UI",
				border: ""
			}), L("div", pt, [
				L("article", mt, [H[67] ||= L("h2", null, "Selectors", -1), L("div", ht, [z(e, {
					modelValue: C.value,
					"onUpdate:modelValue": H[12] ||= (e) => C.value = e,
					options: Lt,
					"aria-label": "Выбрать редкость",
					searchable: ""
				}, null, 8, ["modelValue"]), z(ve, {
					modelValue: T.value,
					"onUpdate:modelValue": H[13] ||= (e) => T.value = e,
					inline: "",
					"allow-custom": "",
					"allow-clear": ""
				}, null, 8, ["modelValue"])])]),
				L("article", gt, [
					H[69] ||= L("h2", null, "BasePopover", -1),
					L("button", {
						ref_key: "popoverAnchor",
						ref: B,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[14] ||= (e) => N.value = !N.value
					}, " Открыть popover ", 512),
					z(ge, {
						open: N.value,
						anchor: B.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": H[15] ||= (e) => N.value = e
					}, {
						default: W(() => [...H[68] ||= [L("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				L("article", _t, [
					H[76] ||= L("h2", null, "ActionMenu", -1),
					z(y, {
						title: "Действия",
						related: ""
					}, {
						default: W(() => [
							z(p, { tone: "accent" }, {
								default: W(() => [...H[70] ||= [R("Редактировать", -1)]]),
								_: 1
							}),
							z(Se, { label: "Перемещение" }, {
								trigger: W(({ open: e }) => [z(p, {
									submenu: "",
									"submenu-open": e
								}, {
									default: W(() => [...H[71] ||= [R("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: W(() => [z(p, null, {
									default: W(() => [...H[72] ||= [R("В начало", -1)]]),
									_: 1
								}), z(p, null, {
									default: W(() => [...H[73] ||= [R("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							z(p, { tone: "danger" }, {
								default: W(() => [...H[74] ||= [R("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					L("button", {
						ref_key: "actionMenuAnchor",
						ref: G,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[16] ||= (e) => K.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					z(y, {
						ref_key: "anchoredActionMenu",
						ref: K,
						anchor: G.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: W(({ close: e }) => [z(p, { onClick: e }, {
							default: W(() => [...H[75] ||= [R("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				L("article", vt, [H[79] ||= L("h2", null, "AccountMenu", -1), z(pe, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: W(({ close: e }) => [z(p, { onClick: e }, {
						default: W(() => [...H[77] ||= [R("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), z(p, {
						tone: "danger",
						onClick: e
					}, {
						default: W(() => [...H[78] ||= [R("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			L("section", yt, [z(M, {
				title: "Редакторы и rich text",
				border: ""
			}), L("div", bt, [L("article", xt, [
				H[80] ||= L("h2", null, "Rich text", -1),
				z(l, {
					ref: "richEditor",
					modelValue: E.value,
					"onUpdate:modelValue": H[17] ||= (e) => E.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: W(({ editor: e, insertRichNode: t }) => [L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: je((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, St), L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: je((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Ct)]),
					_: 1
				}, 8, ["modelValue"]),
				L("div", wt, [z(fe, { html: E.value }, {
					node: W(({ node: e }) => [L("strong", Tt, U(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), L("article", Et, [H[83] ||= L("h2", null, "Editor composition", -1), z(_, null, {
				default: W(() => [z(oe, { title: "Параметры" }, {
					default: W(() => [z(ne, { title: "Основное" }, {
						default: W(() => [z(re, { title: "Значение" }, {
							actions: W(() => [...H[81] ||= [L("span", null, "12", -1)]]),
							_: 1
						}), z(r, {
							modelValue: S.value,
							"onUpdate:modelValue": H[18] ||= (e) => S.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), z(Ce, null, {
						default: W(() => [H[82] ||= R("Итого: ", -1), L("strong", null, U(S.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			L("section", Dt, [z(M, {
				title: "Каркас приложения",
				border: ""
			}), L("article", Ot, [H[89] ||= L("h2", null, "Navigation composition", -1), L("div", kt, [z(n, {
				class: Oe(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": O.value }]),
				"content-tag": "div",
				"rail-width": 88
			}, {
				sidebar: W(() => [z(se, {
					modelValue: O.value,
					"onUpdate:modelValue": H[19] ||= (e) => O.value = e,
					position: "sticky",
					"default-expanded": !0,
					"storage-key": ""
				}, {
					brand: W(() => [z(te, {
						as: "div",
						label: "share-ui"
					}, {
						icon: W(() => [...H[84] ||= [L("span", null, "◆", -1)]]),
						_: 1
					})]),
					default: W(() => [
						z(c, {
							as: "button",
							label: "Главная",
							active: ""
						}, {
							icon: W(() => [...H[85] ||= [L("span", null, "⌂", -1)]]),
							_: 1
						}),
						z(ee, { label: "Примеры" }),
						z(c, {
							as: "button",
							label: "Компоненты"
						}, {
							icon: W(() => [...H[86] ||= [L("span", null, "◇", -1)]]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["modelValue"])]),
				rail: W(() => [...H[87] ||= [L("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
				default: W(() => [H[88] ||= L("div", { class: "share-component-gallery__chrome-content" }, [
					L("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
					L("strong", null, "AppShell + AppSidebar"),
					L("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
				], -1)]),
				_: 1
			}, 8, ["class"])])])]),
			L("section", At, [z(M, {
				title: "Оверлеи и morph",
				border: ""
			}), L("article", jt, [H[90] ||= L("h2", null, "Интерактивные примеры", -1), L("div", Mt, [
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[20] ||= (e) => q.value = !0
				}, "AppModal"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[21] ||= (e) => J.value = !0
				}, "AppModalFrame"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[22] ||= (e) => Y.value = !0
				}, "ModalShell"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[23] ||= (e) => X.value = !0
				}, "ConfirmDialog"),
				L("button", {
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[24] ||= (e) => Z.value = !0
				}, "TextPromptDialog"),
				L("button", {
					ref_key: "morphOrigin",
					ref: Pt,
					type: "button",
					class: "share-component-gallery__button",
					onClick: H[25] ||= (e) => Q.value = !0
				}, "MorphSheet", 512)
			])])]),
			q.value ? (V(), P(ie, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: H[26] ||= (e) => q.value = !1
			}, {
				default: W(() => [...H[91] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "AppModal"), L("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : F("", !0),
			J.value ? (V(), P(i, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: H[29] ||= (e) => J.value = !1
			}, {
				footer: W(() => [z(j, {
					onCancel: H[27] ||= (e) => J.value = !1,
					onSubmit: H[28] ||= (e) => J.value = !1
				})]),
				default: W(() => [H[92] ||= L("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : F("", !0),
			z(Te, {
				open: Y.value,
				"aria-label": "Пример ModalShell",
				onClose: H[30] ||= (e) => Y.value = !1
			}, {
				default: W(() => [...H[93] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "ModalShell"), L("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			z(ue, {
				open: X.value,
				"onUpdate:open": H[31] ||= (e) => X.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			z(De, {
				open: Z.value,
				"onUpdate:open": H[32] ||= (e) => Z.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (V(), P(ce, {
				key: 2,
				"origin-el": Pt.value,
				"aria-label": "Пример MorphSheet",
				"show-close": "",
				onClose: H[33] ||= (e) => Q.value = !1
			}, {
				head: W(() => [...H[94] ||= [L("div", { class: "share-component-gallery__morph-head" }, [L("strong", null, "MorphSheet")], -1)]]),
				default: W(() => [H[95] ||= L("div", { class: "share-component-gallery__overlay-content" }, [L("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : F("", !0)
		]));
	}
}, [["__scopeId", "data-v-c9910d83"]]);
//#endregion
export { G as COMPONENT_GALLERY_ALIASES, Pe as COMPONENT_GALLERY_COMPONENTS, K as ComponentGallery };
