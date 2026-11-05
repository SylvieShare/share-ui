import { A as e, At as t, B as n, Bt as r, C as i, Ct as a, D as o, Dt as s, Et as ee, F as c, Ft as te, G as ne, H as re, I as ie, K as ae, L as oe, Mt as l, Nt as se, O as ce, Ot as le, P as u, Pt as d, R as ue, S as de, St as fe, T as pe, Tt as f, V as me, W as he, _ as p, a as m, b as h, bt as g, c as _, ct as ge, d as v, f as _e, ft as y, g as ve, h as ye, i as b, it as be, j as xe, jt as Se, k as x, kt as S, l as C, lt as Ce, m as w, n as we, o as T, p as Te, pt as Ee, q as De, r as Oe, rt as ke, s as E, t as Ae, u as D, ut as O, v as je, w as Me, wt as k, x as A, xt as Ne, y as Pe, z as j, zt as M } from "./StarRating-CDlu1i4X.js";
import { Fragment as N, createBlock as P, createCommentVNode as F, createElementBlock as I, createElementVNode as L, createTextVNode as R, createVNode as z, h as B, normalizeClass as Fe, openBlock as V, reactive as Ie, ref as H, renderList as U, toDisplayString as W, unref as Le, withCtx as G, withModifiers as Re } from "vue";
//#region src/gallery/ChoiceCardGalleryExample.vue
var ze = { class: "choice-gallery-options" }, Be = /*#__PURE__*/ r({
	__name: "ChoiceCardGalleryExample",
	setup(e) {
		let t = H("First option"), n = ["First option", "Second option"];
		return (e, r) => (V(), I("article", null, [r[1] ||= L("h2", null, "ChoiceCard", -1), L("div", ze, [(V(), I(N, null, U(n, (e) => z(M, {
			key: e,
			label: e,
			description: "Exclusive, optional selection",
			"model-value": t.value === e,
			"onUpdate:modelValue": (n) => t.value = n ? e : ""
		}, {
			icon: G(() => [...r[0] ||= [L("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [L("path", { d: "m12 3 9 5v8l-9 5-9-5V8z" })], -1)]]),
			_: 1
		}, 8, [
			"label",
			"model-value",
			"onUpdate:modelValue"
		])), 64)), z(M, {
			label: "Unavailable",
			description: "Disabled option",
			disabled: ""
		})])]));
	}
}, [["__scopeId", "data-v-cb8bcf8d"]]), Ve = { class: "blur-gallery-scene" }, He = { class: "blur-gallery-label" }, Ue = /*#__PURE__*/ r({
	__name: "BlurGalleryExample",
	setup(e) {
		let t = H(8);
		return (e, n) => (V(), I("article", null, [
			n[2] ||= L("h2", null, "BlurBackdrop", -1),
			z(A, {
				label: "Blur radius",
				vertical: ""
			}, {
				default: G(() => [z(h, {
					modelValue: t.value,
					"onUpdate:modelValue": n[0] ||= (e) => t.value = e,
					min: 0,
					max: 32
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			L("div", Ve, [
				n[1] ||= L("p", null, "Content behind the surface · 0123456789 · content behind the surface", -1),
				z(te, { radius: Number(t.value) }, null, 8, ["radius"]),
				L("strong", He, "Sharp foreground · " + W(t.value) + "px", 1)
			])
		]));
	}
}, [["__scopeId", "data-v-34aec14d"]]), We = {
	__name: "TourGalleryExample",
	setup(e) {
		let t = H(null), n = O(640), r = Ie(v());
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
		return (e, a) => (V(), I(N, null, [z(w, {
			ref_key: "button",
			ref: t,
			onClick: i
		}, {
			default: G(() => [...a[0] ||= [R("Показать обучение", -1)]]),
			_: 1
		}, 512), z(_e, {
			tour: r,
			mobile: Le(n)
		}, null, 8, ["tour", "mobile"])], 64));
	}
}, K = { class: "drawer-gallery" }, q = { class: "drawer-gallery__actions" }, J = { class: "drawer-gallery__content" }, Y = ["onClick"], Ge = /*#__PURE__*/ r({
	__name: "DrawerGalleryExample",
	setup(e) {
		let t = H(!1), r = H(!1), i = H(!1), a = H(!1);
		return (e, o) => (V(), I("div", K, [
			o[16] ||= L("p", null, "AppDrawer: slide слева, scrim, Tab/Escape, возврат фокуса и optional swipe влево.", -1),
			L("div", q, [
				L("button", {
					type: "button",
					onClick: o[0] ||= (e) => t.value = !0
				}, "Header / body / footer"),
				L("button", {
					type: "button",
					onClick: o[1] ||= (e) => i.value = !0
				}, "Embedded AppSidebar"),
				z(g, {
					modelValue: a.value,
					"onUpdate:modelValue": o[2] ||= (e) => a.value = e,
					label: "Swipe to close"
				}, null, 8, ["modelValue"])
			]),
			z(u, {
				modelValue: t.value,
				"onUpdate:modelValue": o[4] ||= (e) => t.value = e,
				"aria-label": "Drawer example",
				"swipe-to-close": a.value
			}, {
				title: G(() => [...o[10] ||= [L("strong", null, "AppDrawer", -1)]]),
				footer: G(({ close: e }) => [L("button", {
					type: "button",
					onClick: e
				}, "Close drawer", 8, Y)]),
				default: G(() => [L("div", J, [
					o[11] ||= L("p", null, "Тело прокручивается между фиксированными header и footer.", -1),
					L("button", {
						type: "button",
						onClick: o[3] ||= (e) => r.value = !0
					}, "Nested drawer"),
					(V(), I(N, null, U(24, (e) => L("p", { key: e }, "Example row " + W(e), 1)), 64))
				])]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"]),
			z(u, {
				modelValue: r.value,
				"onUpdate:modelValue": o[5] ||= (e) => r.value = e,
				"aria-label": "Nested drawer",
				width: "min(360px, 90vw)",
				"z-index": 3100
			}, {
				title: G(() => [...o[12] ||= [L("strong", null, "Nested drawer", -1)]]),
				default: G(() => [o[13] ||= L("p", { class: "drawer-gallery__content" }, "Escape закрывает только верхний drawer; scroll остаётся заблокирован.", -1)]),
				_: 1
			}, 8, ["modelValue"]),
			z(u, {
				modelValue: i.value,
				"onUpdate:modelValue": o[9] ||= (e) => i.value = e,
				"aria-label": "Example navigation",
				"show-close": !1,
				"swipe-to-close": a.value
			}, {
				default: G(() => [z(re, {
					"model-value": !0,
					position: "embedded",
					"mobile-mode": "top",
					"mobile-breakpoint": 1200,
					"show-toggle": !1
				}, {
					brand: G(() => [z(me, {
						as: "div",
						label: "share-ui"
					}, {
						icon: G(() => [...o[14] ||= [R("◆", -1)]]),
						_: 1
					}), L("button", {
						type: "button",
						"aria-label": "Close navigation",
						onClick: o[6] ||= (e) => i.value = !1
					}, "×")]),
					account: G(() => [z(Ee, { title: "Account actions" }, {
						trigger: G(() => [z(ne, {
							label: "Example account",
							expanded: ""
						})]),
						default: G(() => [z(y, null, {
							default: G(() => [...o[15] ||= [R("Account action", -1)]]),
							_: 1
						})]),
						_: 1
					})]),
					default: G(() => [
						z(n, { label: "Navigation" }),
						z(j, {
							as: "button",
							label: "Overview",
							active: "",
							onClick: o[7] ||= (e) => i.value = !1
						}),
						z(j, {
							as: "button",
							label: "Components",
							onClick: o[8] ||= (e) => i.value = !1
						})
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue", "swipe-to-close"])
		]));
	}
}, [["__scopeId", "data-v-51dc5ffe"]]), Ke = {
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
		function ee(e) {
			let t = String(s.value.length);
			s.value.push({
				value: t,
				label: e
			}), r.value = [...r.value, t];
		}
		return (e, c) => (V(), I(N, null, [z(_, {
			label: "Переиспользуемые представления",
			collapsible: ""
		}, {
			default: G(() => [
				z(D, {
					percent: 65,
					"temp-percent": 15,
					label: "Значение",
					decorated: "",
					size: "large"
				}),
				z(D, {
					percent: 0,
					label: "Пустое значение",
					size: "small"
				}),
				z(D, {
					percent: 65,
					"temp-percent": 15,
					label: "Компактное значение",
					size: "compact"
				}),
				z(D, {
					percent: 100,
					label: "Полное значение"
				}),
				z(C, {
					modelValue: t.value,
					"onUpdate:modelValue": c[0] ||= (e) => t.value = e,
					options: o,
					label: "Иконка"
				}, null, 8, ["modelValue"]),
				z(C, {
					options: o,
					label: "Недоступный выбор",
					disabled: ""
				}),
				z(E, {
					title: "Выбираемая строка",
					subtitle: "Дополнительная информация",
					interactive: "",
					selected: n.value,
					onActivate: c[1] ||= (e) => n.value = !n.value
				}, {
					icon: G(() => [...c[8] ||= [R("✦", -1)]]),
					trailing: G(() => [...c[9] ||= [R("42", -1)]]),
					_: 1
				}, 8, ["selected"]),
				z(E, {
					title: "Строка просмотра",
					"show-chevron": !1
				}),
				z(m, {
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
				z(T, {
					options: s.value,
					label: "Варианты",
					onSelect: c[3] ||= (e) => r.value = [e.value]
				}, null, 8, ["options"]),
				z(T, {
					options: [],
					label: "Пустой список"
				}),
				L("button", {
					ref_key: "anchor",
					ref: i,
					type: "button",
					onMouseenter: c[4] ||= (e) => a.value = !0,
					onMouseleave: c[5] ||= (e) => a.value = !1,
					onFocus: c[6] ||= (e) => a.value = !0,
					onBlur: c[7] ||= (e) => a.value = !1
				}, "Подсказка", 544),
				a.value ? (V(), P(b, {
					key: 0,
					anchor: i.value
				}, {
					default: G(() => [...c[10] ||= [R("Подсказка остаётся внутри видимой области.", -1)]]),
					_: 1
				}, 8, ["anchor"])) : F("", !0)
			]),
			_: 1
		}), z(_, {
			label: "Скрытая секция",
			collapsible: "",
			"default-open": !1
		}, {
			default: G(() => [...c[11] ||= [R("Содержимое после раскрытия", -1)]]),
			_: 1
		})], 64));
	}
}, qe = Object.freeze(/* @__PURE__ */ "StatBar.IconPicker.DetailSection.ContentRow.OptionList.SearchMultiSelect.FloatingTooltip.GuidedTour.LoadingIndicator.LoadingState.SkeletonBlock.BaseTile.BlurBackdrop.ChoiceCard.TileAccentStrip.MorphTile.MorphTileHeader.SectionList.AddButton.ActionButton.IconToggleButton.StarRating.AppSlider.CompactCheckbox.MultiToggle.RemoveButton.SectionLabel.TimelineGroup.SegmentDonutChart.SlidingTabs.IconNavigation.ToggleSwitch.ActionMenu.ActionMenuItem.ActionMenuSubmenu.BasePopover.ColorPresetPicker.ValueSelect.RichContent.RichTextEditor.AccountMenu.AppShell.AppSidebar.SidebarBrand.SidebarGroup.SidebarNavItem.SidebarToggle.EditorPanel.EditorSection.EditorSectionTitle.EditorTotal.AppDrawer.AppModal.AppModalFrame.ConfirmDialog.ModalShell.MorphSheet.TextPromptDialog.FormActionButtons.DatePicker.FormField.FormNumberInput.FormSelect.FormTextarea.FormTextInput.InlineEdit".split(".")), X = Object.freeze({
	PromptDialog: "TextPromptDialog",
	RowActionItem: "ActionMenuItem",
	RowActionMenu: "ActionMenu",
	RowActionSubmenu: "ActionMenuSubmenu"
}), Je = { class: "share-component-gallery" }, Ye = { class: "share-component-gallery__header" }, Xe = { class: "share-component-gallery__eyebrow" }, Ze = {
	class: "share-component-gallery__section",
	"data-share-gallery": "BlurBackdrop"
}, Qe = {
	class: "share-component-gallery__section",
	"data-share-gallery": "ChoiceCard"
}, $e = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StarRating"
}, et = {
	class: "share-component-gallery__section",
	"data-share-gallery": "StatBar IconPicker DetailSection ContentRow OptionList SearchMultiSelect FloatingTooltip"
}, tt = {
	class: "share-component-gallery__section",
	"data-share-gallery": "GuidedTour"
}, nt = { class: "share-component-gallery__section" }, rt = { class: "share-component-gallery__grid" }, it = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BaseTile TileAccentStrip MorphTile MorphTileHeader SectionLabel"
}, at = { class: "share-component-gallery__glass-surfaces" }, ot = { class: "share-component-gallery__tile-row" }, st = {
	class: "share-component-gallery__card",
	"data-share-gallery": "LoadingIndicator SkeletonBlock LoadingState"
}, ct = { class: "share-component-gallery__row" }, lt = { class: "share-component-gallery__row" }, ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "InlineEdit"
}, dt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "TimelineGroup"
}, ft = {
	class: "share-component-gallery__card",
	"data-share-gallery": "SectionList"
}, pt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AddButton RemoveButton ActionButton IconToggleButton"
}, mt = { class: "share-component-gallery__row" }, ht = { class: "share-component-gallery__row" }, gt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "SegmentDonutChart"
}, _t = { class: "share-component-gallery__section" }, vt = { class: "share-component-gallery__grid" }, yt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ToggleSwitch CompactCheckbox"
}, bt = { class: "share-component-gallery__stack" }, xt = { class: "share-component-gallery__checkbox-row" }, St = { class: "share-component-gallery__checkbox-row" }, Ct = {
	class: "share-component-gallery__card",
	"data-share-gallery": "MultiToggle SlidingTabs"
}, wt = { class: "share-component-gallery__stack" }, Tt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "IconNavigation"
}, Et = { class: "share-component-gallery__stack" }, Dt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Ot = ["d"], kt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, At = ["d"], jt = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"aria-hidden": "true"
}, Mt = ["d"], Nt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppSlider"
}, Pt = { class: "share-component-gallery__slider" }, Ft = { class: "share-component-gallery__section" }, It = { class: "share-component-gallery__grid" }, Lt = {
	class: "share-component-gallery__card share-component-gallery__card--wide",
	"data-share-gallery": "DatePicker FormField FormTextInput FormNumberInput FormSelect FormTextarea FormActionButtons"
}, Rt = { class: "share-component-gallery__form-grid" }, zt = { class: "share-component-gallery__section" }, Bt = { class: "share-component-gallery__grid" }, Vt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ValueSelect ColorPresetPicker"
}, Ht = { class: "share-component-gallery__stack" }, Ut = {
	class: "share-component-gallery__card",
	"data-share-gallery": "BasePopover"
}, Wt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "ActionMenu ActionMenuItem ActionMenuSubmenu"
}, Gt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AccountMenu"
}, Kt = { class: "share-component-gallery__section" }, qt = { class: "share-component-gallery__grid" }, Jt = {
	class: "share-component-gallery__card",
	"data-share-gallery": "RichContent RichTextEditor"
}, Yt = ["onMousedown"], Xt = ["onMousedown"], Zt = { class: "share-component-gallery__preview" }, Qt = { class: "share-component-gallery__rich-node" }, $t = {
	class: "share-component-gallery__card",
	"data-share-gallery": "EditorPanel EditorSection EditorSectionTitle EditorTotal"
}, en = { class: "share-component-gallery__section" }, tn = {
	class: "share-component-gallery__card share-component-gallery__card--bleed",
	"data-share-gallery": "AppShell AppSidebar SidebarBrand SidebarGroup SidebarNavItem SidebarToggle"
}, nn = { class: "share-component-gallery__chrome" }, rn = { class: "share-component-gallery__section" }, an = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppDrawer"
}, on = {
	class: "share-component-gallery__card",
	"data-share-gallery": "AppModal AppModalFrame ModalShell ConfirmDialog TextPromptDialog MorphSheet"
}, sn = { class: "share-component-gallery__row" }, Z = /*#__PURE__*/ r({
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
	setup(r) {
		let te = qe.length, u = H(3), m = H(!0), _ = H(!0), v = H(!0), _e = H("md"), b = H("preview"), C = H("build"), T = [
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
				label: "Настройки освещения",
				divider: !0,
				dividerLabel: "Tools"
			}
		], E = H(62), D = H("rare"), O = H("#7c5ce2"), M = H("<p><strong>RichContent</strong> показывает очищенный результат и <span data-rich-node=\"mention\" data-rich-payload=\"%7B%22id%22%3A42%7D\" contenteditable=\"false\">@example</span>.</p>"), N = H(!0), B = H(!0), U = H(!1), ze = H(null), Ve = H(null), He = H(null), K = H(!1), q = H(!1), J = H(!1), Y = H(!1), X = H(!1), Z = H(0), Q = H(!1), cn = H(null), ln = [
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
		], un = [{
			key: "preview",
			title: "Пример"
		}, {
			key: "states",
			title: "Состояния"
		}], dn = [
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
		], fn = [
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
		], $ = Ie({
			date: "",
			name: "Новый элемент",
			count: 3,
			fraction: 1.25,
			type: "base",
			description: ""
		});
		function pn(e) {
			return `${e} МБ`;
		}
		function mn() {
			$.name = "", $.count = 0, $.type = "base", $.description = "";
		}
		return (Ie, H) => (V(), I("div", Je, [
			L("header", Ye, [L("div", null, [
				L("p", Xe, "share-ui · " + W(Le(te)) + " компонентов", 1),
				L("h1", null, W(r.title), 1),
				L("p", null, W(r.description), 1)
			]), H[45] ||= L("span", {
				class: "share-component-gallery__accent",
				"aria-label": "Текущий акцент"
			}, null, -1)]),
			L("section", Ze, [z(Ue)]),
			L("section", Qe, [z(Be)]),
			L("section", $e, [
				z(Ae, {
					modelValue: u.value,
					"onUpdate:modelValue": H[0] ||= (e) => u.value = e,
					label: "Оценка"
				}, null, 8, ["modelValue"]),
				z(Ae, {
					"model-value": 3.7,
					label: "Средняя оценка",
					"value-label": "3,7 из 5",
					readonly: ""
				}),
				z(Ae, {
					"model-value": 2,
					label: "Недоступная оценка",
					disabled: ""
				})
			]),
			L("section", et, [z(Ke)]),
			L("section", tt, [H[46] ||= L("h2", null, "GuidedTour", -1), z(We)]),
			L("section", nt, [z(k, {
				title: "Поверхности и действия",
				border: ""
			}), L("div", rt, [
				L("article", it, [
					H[61] ||= L("h2", null, "BaseTile", -1),
					L("div", at, [z(d, {
						surface: "glass",
						framed: "",
						class: "share-component-gallery__tile"
					}, {
						default: G(() => [...H[47] ||= [R("Glass frame", -1)]]),
						_: 1
					}), z(d, {
						surface: "glass",
						tint: "",
						interactive: "",
						class: "share-component-gallery__tile"
					}, {
						default: G(() => [...H[48] ||= [R("Glass interactive", -1)]]),
						_: 1
					})]),
					z(w, {
						"icon-only": "",
						variant: "quiet",
						"aria-label": "Действие без рамки"
					}, {
						icon: G(() => [...H[49] ||= [R("✦", -1)]]),
						_: 1
					}),
					L("div", ot, [
						z(d, {
							tint: "",
							interactive: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [
								z(Se),
								H[50] ||= L("strong", null, "Акцентная плитка", -1),
								H[51] ||= L("span", null, "TileAccentStrip · tint · interactive", -1)
							]),
							_: 1
						}),
						z(d, {
							framed: "",
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[52] ||= [L("strong", null, "Рамка", -1), L("span", null, "framed", -1)]]),
							_: 1
						}),
						z(d, {
							framed: "",
							"frame-width": 2,
							class: "share-component-gallery__tile"
						}, {
							default: G(() => [...H[53] ||= [L("strong", null, "Усиленная рамка", -1), L("span", null, "frameWidth=2", -1)]]),
							_: 1
						}),
						z(l, {
							title: "Редактируемая плитка",
							"show-edit": "",
							"edit-label": "Редактировать",
							onEdit: H[1] ||= (e) => Z.value++
						}, {
							aside: G(() => [L("span", null, W(Z.value), 1)]),
							default: G(() => [H[54] ||= L("span", null, "Единый заголовок и действие справа", -1)]),
							_: 1
						}),
						z(l, {
							style: { width: "100px" },
							"compact-header": "",
							title: "Компактный заголовок",
							"show-edit": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...H[55] ||= [L("span", null, "Малая плитка", -1)]]),
							_: 1
						}),
						z(l, { title: "Только просмотр" }, {
							default: G(() => [...H[56] ||= [L("span", null, "Без карандаша", -1)]]),
							_: 1
						}),
						z(l, {
							title: "Редактирование по заголовку",
							"show-edit": "",
							"show-edit-icon": !1,
							"edit-label": "Редактировать",
							onEdit: H[2] ||= (e) => Z.value++
						}, {
							aside: G(() => [L("span", null, W(Z.value), 1)]),
							default: G(() => [H[57] ||= L("span", null, "Нажмите название", -1)]),
							_: 1
						}),
						z(l, {
							outlined: !1,
							title: "Мягкая поверхность"
						}, {
							default: G(() => [...H[58] ||= [L("span", null, "Подложка без обводки", -1)]]),
							_: 1
						}),
						z(l, null, {
							default: G(() => [...H[59] ||= [L("span", null, "Без заголовка", -1)]]),
							_: 1
						}),
						z(l, {
							embedded: "",
							title: "Раскрытая грань",
							"show-edit": "",
							"edit-fade": "",
							"edit-label": "Редактировать"
						}, {
							default: G(() => [...H[60] ||= [L("span", null, "Без второй поверхности", -1)]]),
							_: 1
						}),
						z(se, { title: "Общий заголовок" })
					])
				]),
				L("article", st, [
					H[62] ||= L("h2", null, "Загрузка", -1),
					z(ye, { label: "Открываем раздел…" }),
					z(ye, {
						label: "Загружаем ещё…",
						compact: ""
					}),
					z(x, {
						label: "Сохранение…",
						size: "xs",
						inline: "",
						"show-label": ""
					}),
					L("div", ct, [
						z(x, {
							label: "Загрузка",
							size: "sm"
						}),
						z(x, {
							label: "Загрузка данных",
							"show-label": ""
						}),
						z(x, {
							label: "Подготовка содержимого",
							size: "lg",
							"show-label": ""
						})
					]),
					L("div", lt, [z(ve, {
						width: "36px",
						height: "36px",
						round: ""
					}), z(ve, { width: "60%" })])
				]),
				L("article", ut, [
					H[63] ||= L("h2", null, "InlineEdit", -1),
					z(p, {
						"model-value": "Название записи",
						label: "Название",
						"confirm-label": "Подтвердить",
						"cancel-label": "Отменить"
					}),
					z(p, {
						"model-value": "",
						label: "Новое название",
						placeholder: "Название записи",
						"force-open": ""
					}),
					z(p, {
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
				L("article", dt, [
					H[71] ||= L("h2", null, "TimelineGroup", -1),
					z(k, {
						title: "История",
						line: ""
					}, {
						actions: G(() => [...H[64] ||= [L("span", null, "2", -1)]]),
						_: 1
					}),
					z(we, {
						"rail-width": "100px",
						"compact-rail-width": "64px",
						gap: 16,
						"compact-gap": 10,
						sticky: ""
					}, {
						identity: G(() => [...H[65] ||= [L("strong", null, "Участник", -1)]]),
						default: G(() => [H[66] ||= L("strong", null, "Запись события", -1), H[67] ||= L("p", null, "Содержимое справа от цветной линии.", -1)]),
						_: 1
					}),
					z(we, { color: "var(--success)" }, {
						identity: G(() => [...H[68] ||= [L("span", { "aria-hidden": "true" }, "✓", -1)]]),
						footer: G(() => [z(A, {
							label: "Редактор на всю ширину",
							vertical: ""
						}, {
							default: G(() => [z(i, { value: "Черновик" })]),
							_: 1
						})]),
						default: G(() => [H[69] ||= L("strong", null, "Компактная запись", -1), H[70] ||= L("p", null, "Короткая иконка и полный текст.", -1)]),
						_: 1
					})
				]),
				L("article", ft, [
					H[75] ||= L("h2", null, "SectionList", -1),
					z(t, { title: "Записи" }, {
						footer: G(() => [z(S, { label: "Добавить запись" })]),
						default: G(() => [H[72] ||= L("div", { style: { padding: "12px 0" } }, "Первая запись", -1), H[73] ||= L("div", { style: { padding: "12px 0" } }, "Вторая запись", -1)]),
						_: 1
					}),
					z(t, {
						title: "Встроенная группа",
						embedded: "",
						compact: ""
					}, {
						default: G(() => [...H[74] ||= [L("div", { style: { padding: "8px 0" } }, "Компактная запись", -1), L("div", { style: { padding: "8px 0" } }, "Ещё одна запись", -1)]]),
						_: 1
					})
				]),
				L("article", pt, [
					H[87] ||= L("h2", null, "Кнопки элементов", -1),
					L("div", mt, [
						z(Te, {
							modelValue: m.value,
							"onUpdate:modelValue": H[3] ||= (e) => m.value = e,
							label: "Переключить действие",
							color: "var(--success)"
						}, {
							icon: G(() => [...H[76] ||= [L("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [L("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}, 8, ["modelValue"]),
						z(Te, {
							"model-value": !1,
							label: "Выключенное действие"
						}, {
							icon: G(() => [...H[77] ||= [L("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [L("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						}),
						z(Te, {
							"model-value": !0,
							label: "Недоступное действие",
							disabled: ""
						}, {
							icon: G(() => [...H[78] ||= [L("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2"
							}, [L("circle", {
								cx: "12",
								cy: "12",
								r: "7"
							})], -1)]]),
							_: 1
						})
					]),
					z(k, {
						title: "Заголовок под разделителем",
						border: "",
						"border-position": "before",
						inset: 8
					}),
					z(k, {
						title: "Увеличенный заголовок с отступом 12px",
						size: "medium",
						"space-after": 12
					}),
					L("div", ht, [
						z(w, null, {
							default: G(() => [...H[79] ||= [R("Основное действие", -1)]]),
							_: 1
						}),
						z(w, { variant: "secondary" }, {
							default: G(() => [...H[80] ||= [R("Вторичное", -1)]]),
							_: 1
						}),
						z(w, { variant: "quiet" }, {
							default: G(() => [...H[81] ||= [R("Тихое", -1)]]),
							_: 1
						}),
						z(w, { variant: "dashed" }, {
							default: G(() => [...H[82] ||= [R("Пунктирная рамка", -1)]]),
							_: 1
						}),
						z(w, {
							layout: "stacked",
							variant: "quiet"
						}, {
							icon: G(() => [...H[83] ||= [R("✦", -1)]]),
							default: G(() => [H[84] ||= R("Действие", -1)]),
							_: 1
						}),
						z(w, { disabled: "" }, {
							default: G(() => [...H[85] ||= [R("Недоступно", -1)]]),
							_: 1
						}),
						z(w, {
							loading: "",
							"loading-label": "Загрузка"
						}, {
							default: G(() => [...H[86] ||= [R("Загрузка", -1)]]),
							_: 1
						}),
						z(S, { label: "Добавить элемент" }),
						z(S, {
							label: "Добавить",
							variant: "icon"
						}),
						z(f, { label: "Удалить" }),
						z(f, {
							label: "Удалить",
							variant: "boxed"
						}),
						z(f, {
							label: "Удалить запись",
							icon: "trash"
						}),
						z(f, {
							label: "Удалить запись",
							icon: "trash",
							variant: "boxed"
						}),
						z(f, {
							label: "Удаление недоступно",
							icon: "trash",
							disabled: ""
						})
					])
				]),
				L("article", gt, [H[88] ||= L("h2", null, "SegmentDonutChart", -1), z(a, {
					segments: fn,
					"total-label": "Всего",
					"aria-label": "Распределение места",
					"format-value": pn
				})])
			])]),
			L("section", _t, [z(k, {
				title: "Переключатели",
				border: ""
			}), L("div", vt, [
				L("article", yt, [H[91] ||= L("h2", null, "Boolean controls", -1), L("div", bt, [
					z(g, {
						modelValue: _.value,
						"onUpdate:modelValue": H[4] ||= (e) => _.value = e,
						label: "Включить механику"
					}, null, 8, ["modelValue"]),
					L("label", xt, [z(s, {
						modelValue: v.value,
						"onUpdate:modelValue": H[5] ||= (e) => v.value = e,
						label: "Выбрать элемент"
					}, null, 8, ["modelValue"]), H[89] ||= R(" Выбрать элемент ", -1)]),
					L("label", St, [z(s, {
						modelValue: v.value,
						"onUpdate:modelValue": H[6] ||= (e) => v.value = e,
						size: 24,
						label: "Крупный выбор"
					}, null, 8, ["modelValue"]), H[90] ||= R(" Крупный выбор (24px) ", -1)])
				])]),
				L("article", Ct, [H[94] ||= L("h2", null, "Segmented controls", -1), L("div", wt, [
					z(ee, {
						modelValue: _e.value,
						"onUpdate:modelValue": H[7] ||= (e) => _e.value = e,
						options: ln,
						"aria-label": "Размер"
					}, null, 8, ["modelValue"]),
					z(Ne, {
						modelValue: b.value,
						"onUpdate:modelValue": H[8] ||= (e) => b.value = e,
						variant: "chips",
						tabs: un,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра чипами"
					}, {
						"tab-actions": G(({ tab: e }) => [z(w, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: G(() => [...H[92] ||= [R("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"]),
					z(Ne, {
						modelValue: b.value,
						"onUpdate:modelValue": H[9] ||= (e) => b.value = e,
						tabs: un,
						"max-tab-width": 160,
						"aria-label": "Режим просмотра"
					}, {
						"tab-actions": G(({ tab: e }) => [z(w, {
							"icon-only": "",
							variant: "quiet",
							"aria-label": `Изменить ${e.title}`
						}, {
							icon: G(() => [...H[93] ||= [R("✎", -1)]]),
							_: 1
						}, 8, ["aria-label"])]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				L("article", Tt, [H[95] ||= L("h2", null, "IconNavigation", -1), L("div", Et, [
					z(fe, {
						modelValue: C.value,
						"onUpdate:modelValue": H[10] ||= (e) => C.value = e,
						items: T,
						label: "Horizontal sections"
					}, {
						icon: G(({ item: e }) => [(V(), I("svg", Dt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Ot)]))]),
						_: 1
					}, 8, ["modelValue"]),
					z(fe, {
						modelValue: C.value,
						"onUpdate:modelValue": H[11] ||= (e) => C.value = e,
						items: T,
						pill: "",
						height: 48,
						radius: "var(--r-md)",
						label: "Rounded sections"
					}, {
						icon: G(({ item: e }) => [(V(), I("svg", kt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, At)]))]),
						_: 1
					}, 8, ["modelValue"]),
					z(fe, {
						modelValue: C.value,
						"onUpdate:modelValue": H[12] ||= (e) => C.value = e,
						items: T,
						orientation: "vertical",
						size: 64,
						label: "Vertical sections"
					}, {
						icon: G(({ item: e }) => [(V(), I("svg", jt, [L("path", { d: e.key === "build" ? "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" : "M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" }, null, 8, Mt)]))]),
						_: 1
					}, 8, ["modelValue"])
				])]),
				L("article", Nt, [H[96] ||= L("h2", null, "AppSlider", -1), L("div", Pt, [z(le, {
					modelValue: E.value,
					"onUpdate:modelValue": H[13] ||= (e) => E.value = e,
					min: 0,
					max: 100,
					step: 1,
					label: "Значение"
				}, null, 8, ["modelValue"]), L("strong", null, W(E.value), 1)])])
			])]),
			L("section", Ft, [z(k, {
				title: "Формы",
				border: ""
			}), L("div", It, [L("article", Lt, [
				H[98] ||= L("h2", null, "Form primitives", -1),
				H[99] ||= L("p", null, "Filled controls without borders; focus and validation use surface colour. Dashed add actions keep their dashed outline.", -1),
				L("div", Rt, [
					z(A, {
						label: "Название",
						vertical: "",
						hint: "обязательное поле"
					}, {
						default: G(() => [z(i, {
							value: $.name,
							"onUpdate:value": H[14] ||= (e) => $.name = e,
							placeholder: "Название элемента"
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(A, {
						label: "Дата",
						vertical: ""
					}, {
						default: G(() => [z(Oe, {
							modelValue: $.date,
							"onUpdate:modelValue": H[15] ||= (e) => $.date = e,
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
						}, null, 8, ["modelValue"]), z(Oe, {
							disabled: "",
							placeholder: "Недоступная дата"
						})]),
						_: 1
					}),
					z(A, {
						label: "Количество",
						vertical: ""
					}, {
						default: G(() => [z(h, {
							value: $.count,
							min: 0,
							max: 20,
							onChange: H[16] ||= (e) => $.count = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(A, {
						label: "Дробное значение",
						vertical: ""
					}, {
						default: G(() => [z(h, {
							value: $.fraction,
							min: -10,
							max: 10,
							step: .1,
							onChange: H[17] ||= (e) => $.fraction = e
						}, null, 8, ["value"])]),
						_: 1
					}),
					z(A, {
						label: "Тип",
						vertical: ""
					}, {
						default: G(() => [z(Pe, {
							value: $.type,
							"onUpdate:value": H[18] ||= (e) => $.type = e
						}, {
							default: G(() => [...H[97] ||= [L("option", { value: "base" }, "Основной", -1), L("option", { value: "extra" }, "Дополнительный", -1)]]),
							_: 1
						}, 8, ["value"])]),
						_: 1
					}),
					z(A, {
						label: "Описание",
						vertical: ""
					}, {
						default: G(() => [z(je, {
							value: $.description,
							"onUpdate:value": H[19] ||= (e) => $.description = e,
							placeholder: "Короткое описание"
						}, null, 8, ["value"])]),
						_: 1
					})
				]),
				z(Me, {
					"submit-text": "Сохранить",
					onCancel: mn
				})
			])])]),
			L("section", zt, [z(k, {
				title: "Выбор значений и floating UI",
				border: ""
			}), L("div", Bt, [
				L("article", Vt, [H[100] ||= L("h2", null, "Selectors", -1), L("div", Ht, [
					z(ke, {
						modelValue: D.value,
						"onUpdate:modelValue": H[20] ||= (e) => D.value = e,
						options: dn,
						"aria-label": "Выбрать редкость",
						searchable: ""
					}, null, 8, ["modelValue"]),
					z(ke, {
						modelValue: D.value,
						"onUpdate:modelValue": H[21] ||= (e) => D.value = e,
						options: dn,
						"aria-label": "Выбор с рамкой списка",
						style: {
							"--popover-border-width": "1px",
							"--popover-bg": "var(--surface-raised)"
						},
						searchable: ""
					}, null, 8, ["modelValue"]),
					z(be, {
						modelValue: O.value,
						"onUpdate:modelValue": H[22] ||= (e) => O.value = e,
						variant: "button",
						"aria-label": "Цвет кнопкой",
						"allow-custom": ""
					}, null, 8, ["modelValue"]),
					z(be, {
						modelValue: O.value,
						"onUpdate:modelValue": H[23] ||= (e) => O.value = e,
						inline: "",
						"allow-custom": "",
						"allow-clear": ""
					}, null, 8, ["modelValue"])
				])]),
				L("article", Ut, [
					H[102] ||= L("h2", null, "BasePopover", -1),
					L("button", {
						ref_key: "popoverAnchor",
						ref: ze,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[24] ||= (e) => U.value = !U.value
					}, " Открыть popover ", 512),
					z(Ce, {
						open: U.value,
						anchor: ze.value,
						"transition-preset": "action-menu",
						"aria-label": "Пример popover",
						"onUpdate:open": H[25] ||= (e) => U.value = e
					}, {
						default: G(() => [...H[101] ||= [L("span", { class: "share-component-gallery__popover-copy" }, "Headless-позиционирование, общий action transition и закрытие снаружи", -1)]]),
						_: 1
					}, 8, ["open", "anchor"])
				]),
				L("article", Wt, [
					H[109] ||= L("h2", null, "ActionMenu", -1),
					z(Ee, {
						title: "Действия",
						heading: "Выбранная запись",
						related: ""
					}, {
						default: G(() => [
							z(y, { tone: "accent" }, {
								default: G(() => [...H[103] ||= [R("Редактировать", -1)]]),
								_: 1
							}),
							z(ge, { label: "Перемещение" }, {
								trigger: G(({ open: e }) => [z(y, {
									submenu: "",
									"submenu-open": e
								}, {
									default: G(() => [...H[104] ||= [R("Переместить", -1)]]),
									_: 1
								}, 8, ["submenu-open"])]),
								default: G(() => [z(y, null, {
									default: G(() => [...H[105] ||= [R("В начало", -1)]]),
									_: 1
								}), z(y, null, {
									default: G(() => [...H[106] ||= [R("В конец", -1)]]),
									_: 1
								})]),
								_: 1
							}),
							z(y, { tone: "danger" }, {
								default: G(() => [...H[107] ||= [R("Удалить", -1)]]),
								_: 1
							})
						]),
						_: 1
					}),
					L("button", {
						ref_key: "actionMenuAnchor",
						ref: Ve,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[26] ||= (e) => He.value?.toggle(e)
					}, " Меню внешнего элемента ", 512),
					z(Ee, {
						ref_key: "anchoredActionMenu",
						ref: He,
						anchor: Ve.value,
						title: "Действия внешнего элемента",
						"trigger-attrs": { style: { display: "none" } }
					}, {
						default: G(({ close: e }) => [z(y, { onClick: e }, {
							default: G(() => [...H[108] ||= [R("Закрыть меню", -1)]]),
							_: 1
						}, 8, ["onClick"])]),
						_: 1
					}, 8, ["anchor"])
				]),
				L("article", Gt, [H[112] ||= L("h2", null, "AccountMenu", -1), z(ne, {
					label: "Sylvie",
					"avatar-text": "S",
					expanded: ""
				}, {
					default: G(({ close: e }) => [z(y, { onClick: e }, {
						default: G(() => [...H[110] ||= [R("Настройки", -1)]]),
						_: 1
					}, 8, ["onClick"]), z(y, {
						tone: "danger",
						onClick: e
					}, {
						default: G(() => [...H[111] ||= [R("Выйти", -1)]]),
						_: 1
					}, 8, ["onClick"])]),
					_: 1
				})])
			])]),
			L("section", Kt, [z(k, {
				title: "Редакторы и rich text",
				border: ""
			}), L("div", qt, [L("article", Jt, [
				H[113] ||= L("h2", null, "Rich text", -1),
				z(ae, {
					ref: "richEditor",
					modelValue: M.value,
					"onUpdate:modelValue": H[27] ||= (e) => M.value = e,
					placeholder: "Введите текст…",
					"show-link-button": !1
				}, {
					toolbar: G(({ editor: e, insertRichNode: t }) => [L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Re((t) => e.openLinkEditor(t.currentTarget), ["prevent"])
					}, "↗", 40, Yt), L("button", {
						type: "button",
						class: "share-component-gallery__button share-component-gallery__button--compact",
						onMousedown: Re((e) => t({
							kind: "mention",
							payload: { id: 42 },
							label: "@example"
						}), ["prevent"])
					}, "@", 40, Xt)]),
					_: 1
				}, 8, ["modelValue"]),
				L("div", Zt, [z(De, { html: M.value }, {
					node: G(({ node: e }) => [L("strong", Qt, W(e.label), 1)]),
					_: 1
				}, 8, ["html"])])
			]), L("article", $t, [H[116] ||= L("h2", null, "Editor composition", -1), z(d, null, {
				default: G(() => [z(ue, { title: "Параметры" }, {
					default: G(() => [z(ie, { title: "Основное" }, {
						default: G(() => [z(oe, { title: "Значение" }, {
							actions: G(() => [...H[114] ||= [L("span", null, "12", -1)]]),
							_: 1
						}), z(le, {
							modelValue: E.value,
							"onUpdate:modelValue": H[28] ||= (e) => E.value = e,
							min: 0,
							max: 100,
							step: 1
						}, null, 8, ["modelValue"])]),
						_: 1
					}), z(c, null, {
						default: G(() => [H[115] ||= R("Итого: ", -1), L("strong", null, W(E.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			})])])]),
			L("section", en, [z(k, {
				title: "Каркас приложения",
				border: ""
			}), L("article", tn, [
				H[122] ||= L("h2", null, "Navigation composition", -1),
				z(g, {
					modelValue: B.value,
					"onUpdate:modelValue": H[29] ||= (e) => B.value = e,
					label: "Приподнятая панель"
				}, null, 8, ["modelValue"]),
				L("div", nn, [z(he, {
					class: Fe(["share-component-gallery__chrome-shell", { "share-component-gallery__chrome-shell--expanded": N.value }]),
					"content-tag": "div",
					"rail-width": 88
				}, {
					sidebar: G(() => [z(re, {
						modelValue: N.value,
						"onUpdate:modelValue": H[30] ||= (e) => N.value = e,
						elevated: B.value,
						position: "sticky",
						"default-expanded": !0,
						"storage-key": ""
					}, {
						brand: G(() => [z(me, {
							as: "div",
							label: "share-ui"
						}, {
							icon: G(() => [...H[117] ||= [L("span", null, "◆", -1)]]),
							_: 1
						})]),
						default: G(() => [
							z(j, {
								as: "button",
								label: "Главная",
								active: ""
							}, {
								icon: G(() => [...H[118] ||= [L("span", null, "⌂", -1)]]),
								_: 1
							}),
							z(n, { label: "Примеры" }),
							z(j, {
								as: "button",
								label: "Компоненты"
							}, {
								icon: G(() => [...H[119] ||= [L("span", null, "◇", -1)]]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "elevated"])]),
					rail: G(() => [...H[120] ||= [L("div", { class: "share-component-gallery__rail" }, "rail", -1)]]),
					default: G(() => [H[121] ||= L("div", { class: "share-component-gallery__chrome-content" }, [
						L("span", { class: "share-component-gallery__chrome-kicker" }, "content"),
						L("strong", null, "AppShell + AppSidebar"),
						L("span", null, "Фон, точки, раскрываемая навигация и rail образуют общий каркас.")
					], -1)]),
					_: 1
				}, 8, ["class"])])
			])]),
			L("section", rn, [
				z(k, {
					title: "Оверлеи и morph",
					border: ""
				}),
				L("article", an, [H[123] ||= L("h2", null, "AppDrawer + embedded navigation", -1), z(Ge)]),
				L("article", on, [H[124] ||= L("h2", null, "Интерактивные примеры", -1), L("div", sn, [
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[31] ||= (e) => K.value = !0
					}, "AppModal"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[32] ||= (e) => q.value = !0
					}, "AppModalFrame"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[33] ||= (e) => J.value = !0
					}, "ModalShell"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[34] ||= (e) => Y.value = !0
					}, "ConfirmDialog"),
					L("button", {
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[35] ||= (e) => X.value = !0
					}, "TextPromptDialog"),
					L("button", {
						ref_key: "morphOrigin",
						ref: cn,
						type: "button",
						class: "share-component-gallery__button",
						onClick: H[36] ||= (e) => Q.value = !0
					}, "MorphSheet", 512)
				])])
			]),
			K.value ? (V(), P(xe, {
				key: 0,
				"aria-label": "Пример AppModal",
				onClose: H[37] ||= (e) => K.value = !1
			}, {
				default: G(() => [...H[125] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "AppModal"), L("p", null, "Низкоуровневый адаптивный overlay.")], -1)]]),
				_: 1
			})) : F("", !0),
			q.value ? (V(), P(e, {
				key: 1,
				title: "AppModalFrame",
				subtitle: "header · body · footer",
				onClose: H[40] ||= (e) => q.value = !1
			}, {
				footer: G(() => [z(Me, {
					onCancel: H[38] ||= (e) => q.value = !1,
					onSubmit: H[39] ||= (e) => q.value = !1
				})]),
				default: G(() => [H[126] ||= L("p", null, "Готовая структура редактора поверх AppModal.", -1)]),
				_: 1
			})) : F("", !0),
			z(o, {
				open: J.value,
				"aria-label": "Пример ModalShell",
				onClose: H[41] ||= (e) => J.value = !1
			}, {
				default: G(() => [...H[127] ||= [L("div", { class: "share-component-gallery__overlay-content" }, [L("h2", null, "ModalShell"), L("p", null, "Минимальная оболочка для собственного содержимого.")], -1)]]),
				_: 1
			}, 8, ["open"]),
			z(ce, {
				open: Y.value,
				"onUpdate:open": H[42] ||= (e) => Y.value = e,
				title: "Подтвердить действие?",
				message: "Проверка визуального состояния опасного действия."
			}, null, 8, ["open"]),
			z(de, {
				open: X.value,
				"onUpdate:open": H[43] ||= (e) => X.value = e,
				title: "Новое название",
				label: "Название",
				initial: "Пример"
			}, null, 8, ["open"]),
			Q.value ? (V(), P(pe, {
				key: 2,
				"origin-el": cn.value,
				"aria-label": "Пример MorphSheet",
				"open-duration": 300,
				"close-duration": 200,
				"show-close": "",
				onClose: H[44] ||= (e) => Q.value = !1
			}, {
				head: G(() => [...H[128] ||= [L("div", { class: "share-component-gallery__morph-head" }, [L("strong", null, "MorphSheet")], -1)]]),
				default: G(() => [H[129] ||= L("div", { class: "share-component-gallery__overlay-content" }, [L("p", null, "Контейнер раскрывается из исходной кнопки и возвращается обратно.")], -1)]),
				_: 1
			}, 8, ["origin-el"])) : F("", !0)
		]));
	}
}, [["__scopeId", "data-v-40bcb8e9"]]);
//#endregion
export { X as COMPONENT_GALLERY_ALIASES, qe as COMPONENT_GALLERY_COMPONENTS, Z as ComponentGallery };
