import { Fragment as e, Teleport as t, Transition as n, TransitionGroup as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createStaticVNode as u, createTextVNode as d, createVNode as f, defineComponent as p, guardReactiveProps as m, h, mergeProps as g, nextTick as _, normalizeClass as v, normalizeProps as y, normalizeStyle as b, onBeforeUnmount as x, onMounted as S, openBlock as C, reactive as w, ref as T, renderList as E, renderSlot as D, resolveDynamicComponent as O, toDisplayString as k, unref as A, useCssVars as j, useSlots as M, vModelText as N, watch as P, withCtx as F, withDirectives as I, withKeys as L, withModifiers as R } from "vue";
//#region \0plugin-vue:export-helper
var z = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, B = {
	key: 0,
	class: "base-tile-strip"
}, V = /*#__PURE__*/ z({
	__name: "BaseTile",
	props: {
		color: {
			type: String,
			default: null
		},
		strip: {
			type: Boolean,
			default: !1
		},
		tint: {
			type: Boolean,
			default: !1
		},
		framed: {
			type: Boolean,
			default: !1
		},
		interactive: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click"],
	setup(e) {
		let t = e, n = i(() => t.color || "var(--accent)");
		return (t, r) => (C(), s("div", {
			class: v(["base-tile", {
				"base-tile--interactive": e.interactive,
				"base-tile--tint": e.tint,
				"base-tile--framed": e.framed
			}]),
			style: b({ "--tile-color": n.value }),
			onClick: r[0] ||= (e) => t.$emit("click", e)
		}, [e.strip ? (C(), s("span", B)) : o("", !0), D(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-81d15c1d"]]), H = {
	key: 0,
	class: "share-section-list__header"
}, U = {
	key: 0,
	class: "share-section-list__icon"
}, W = { class: "share-section-list__title" }, ee = {
	key: 1,
	class: "share-section-list__footer"
}, te = /*#__PURE__*/ z({
	__name: "SectionList",
	props: {
		title: {
			type: String,
			default: ""
		},
		embedded: {
			type: Boolean,
			default: !1
		},
		compact: {
			type: Boolean,
			default: !1
		},
		transitionName: {
			type: String,
			default: ""
		},
		listAttrs: {
			type: Object,
			default: () => ({})
		}
	},
	setup(e) {
		return (t, n) => (C(), a(O(e.embedded ? "section" : V), {
			class: v(["share-section-list", {
				"share-section-list--embedded": e.embedded,
				"share-section-list--compact": e.compact
			}]),
			"aria-label": e.title || void 0
		}, {
			default: F(() => [
				e.title || t.$slots.header || t.$slots.aside ? (C(), s("header", H, [D(t.$slots, "header", {}, () => [
					t.$slots.icon ? (C(), s("span", U, [D(t.$slots, "icon")])) : o("", !0),
					c("span", W, k(e.title), 1),
					n[0] ||= c("span", {
						class: "share-section-list__line",
						"aria-hidden": "true"
					}, null, -1),
					D(t.$slots, "aside")
				])])) : o("", !0),
				D(t.$slots, "body", {}, () => [(C(), a(O(e.transitionName ? r : "div"), g(e.listAttrs, {
					tag: e.transitionName ? "div" : void 0,
					name: e.transitionName || void 0,
					class: "share-section-list__rows"
				}), {
					default: F(() => [D(t.$slots, "default")]),
					_: 3
				}, 16, ["tag", "name"]))]),
				t.$slots.footer ? (C(), s("footer", ee, [D(t.$slots, "footer")])) : o("", !0)
			]),
			_: 3
		}, 8, ["class", "aria-label"]));
	}
}, [["__scopeId", "data-v-3f9dfbae"]]), ne = [
	"disabled",
	"aria-label",
	"title"
], re = {
	key: 0,
	class: "share-add-button__text"
}, ie = /*#__PURE__*/ z({
	__name: "AddButton",
	props: {
		label: {
			type: String,
			default: ""
		},
		variant: {
			type: String,
			default: "inline"
		},
		block: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click"],
	setup(e) {
		return (t, n) => (C(), s("button", {
			class: v(["share-add-button", [`share-add-button--${e.variant}`, { "share-add-button--block": e.block }]]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			title: e.variant === "icon" && e.label || void 0,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [n[1] ||= c("span", {
			class: "share-add-button__plus",
			"aria-hidden": "true"
		}, "+", -1), e.variant === "icon" ? o("", !0) : (C(), s("span", re, [D(t.$slots, "default", {}, () => [d(k(e.label), 1)], !0)]))], 10, ne));
	}
}, [["__scopeId", "data-v-2e1149d1"]]), ae = [
	"value",
	"min",
	"max",
	"step",
	"disabled",
	"aria-label"
], oe = /*#__PURE__*/ z({
	__name: "AppSlider",
	props: {
		modelValue: {
			type: Number,
			required: !0
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 1
		},
		step: {
			type: [Number, String],
			default: .01
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		label: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue", "change"],
	setup(e, { emit: t }) {
		let n = e, r = t, a = i(() => {
			let e = n.max - n.min;
			return e ? Math.max(0, Math.min(100, (n.modelValue - n.min) / e * 100)) : 0;
		}), o = i(() => ({ "--share-slider-percent": `${a.value}%` }));
		function c(e) {
			return Number(e.target.value);
		}
		function l(e) {
			r("update:modelValue", c(e));
		}
		function u(e) {
			r("change", c(e));
		}
		return (t, n) => (C(), s("input", {
			class: "share-slider",
			type: "range",
			value: e.modelValue,
			min: e.min,
			max: e.max,
			step: e.step,
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			style: b(o.value),
			onInput: l,
			onChange: u
		}, null, 44, ae));
	}
}, [["__scopeId", "data-v-a4387b22"]]), se = [
	"disabled",
	"aria-label",
	"aria-checked"
], ce = {
	key: 0,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, le = /*#__PURE__*/ z({
	__name: "CompactCheckbox",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		label: {
			type: String,
			required: !0
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i() {
			n.disabled || r("update:modelValue", !n.modelValue);
		}
		return (t, n) => (C(), s("button", {
			type: "button",
			class: v(["share-compact-checkbox", { "share-compact-checkbox--checked": e.modelValue }]),
			disabled: e.disabled,
			"aria-label": e.label,
			"aria-checked": e.modelValue,
			role: "checkbox",
			onClick: R(i, ["stop"]),
			onPointerdown: n[0] ||= R(() => {}, ["stop"])
		}, [e.modelValue ? (C(), s("svg", ce, [...n[1] ||= [c("path", {
			d: "M2.5 6.2l2.4 2.4 4.6-5",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, null, -1)]])) : o("", !0)], 42, se));
	}
}, [["__scopeId", "data-v-caeb1891"]]), ue = ["aria-label"], de = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], G = /*#__PURE__*/ z({
	__name: "MultiToggle",
	props: {
		options: {
			type: Array,
			required: !0
		},
		modelValue: { default: null },
		block: {
			type: Boolean,
			default: !1
		},
		neutralValue: { default: void 0 },
		disabled: {
			type: Boolean,
			default: !1
		},
		ariaLabel: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue"],
	setup(t, { emit: n }) {
		let r = t, a = n, o = T(null), l = T([]), u = T({
			left: 0,
			width: 0,
			ready: !1,
			animate: !1
		}), d = i(() => r.neutralValue !== void 0 && r.modelValue === r.neutralValue), f = i(() => ({
			transform: `translateX(${u.value.left}px)`,
			width: `${u.value.width}px`,
			opacity: +!!u.value.ready
		}));
		function p(e, t) {
			l.value[t] = e;
		}
		let m = null;
		function h(e = !1) {
			let t = r.options.findIndex((e) => e.value === r.modelValue), n = l.value[t];
			if (!n) {
				u.value = {
					left: 0,
					width: 0,
					ready: !1,
					animate: !1
				};
				return;
			}
			u.value = {
				left: n.offsetLeft,
				width: n.offsetWidth,
				ready: !0,
				animate: e
			}, !e && typeof requestAnimationFrame < "u" && (m != null && cancelAnimationFrame(m), m = requestAnimationFrame(() => {
				m = null, u.value = {
					...u.value,
					animate: !0
				};
			}));
		}
		function g(e) {
			let t = r.options.find((t) => t.value === e);
			!r.disabled && !t?.disabled && e !== r.modelValue && a("update:modelValue", e);
		}
		function y() {
			return r.options.map((e, t) => ({
				option: e,
				index: t
			})).filter(({ option: e }) => !e.disabled);
		}
		async function w(e) {
			let t = r.options[e];
			!t || t.disabled || r.disabled || (g(t.value), await _(), l.value[e]?.focus());
		}
		function D(e, t) {
			let n = y();
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			(e.key === "ArrowRight" || e.key === "ArrowDown") && (i = n[(r + 1) % n.length]), (e.key === "ArrowLeft" || e.key === "ArrowUp") && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), w(i.index));
		}
		let O = null;
		return S(async () => {
			await _(), h(), typeof ResizeObserver < "u" && o.value && (O = new ResizeObserver(() => h(!1)), O.observe(o.value));
		}), x(() => {
			O?.disconnect(), m != null && cancelAnimationFrame(m);
		}), P(() => r.modelValue, async () => {
			await _(), h(!0);
		}), P(() => r.options, async () => {
			await _(), h(!1);
		}, { deep: !0 }), (n, r) => (C(), s("div", {
			ref_key: "rootEl",
			ref: o,
			class: v(["share-multi-toggle", {
				"share-multi-toggle--block": t.block,
				"share-multi-toggle--disabled": t.disabled
			}]),
			role: "radiogroup",
			"aria-label": t.ariaLabel || void 0
		}, [c("span", {
			class: v(["share-multi-toggle__pill", {
				"share-multi-toggle__pill--neutral": d.value,
				"share-multi-toggle__pill--instant": !u.value.animate
			}]),
			style: b(f.value),
			"aria-hidden": "true"
		}, null, 6), (C(!0), s(e, null, E(t.options, (e, n) => (C(), s("button", {
			key: String(e.value),
			ref_for: !0,
			ref: (e) => p(e, n),
			type: "button",
			class: v(["share-multi-toggle__button", {
				"share-multi-toggle__button--active": e.value === t.modelValue,
				"share-multi-toggle__button--neutral": e.value === t.modelValue && e.value === t.neutralValue
			}]),
			role: "radio",
			"aria-checked": e.value === t.modelValue,
			tabindex: e.value === t.modelValue ? 0 : -1,
			disabled: t.disabled || e.disabled,
			onClick: (t) => g(e.value),
			onKeydown: (e) => D(e, n)
		}, k(e.label), 43, de))), 128))], 10, ue));
	}
}, [["__scopeId", "data-v-a0098670"]]), K = ["disabled", "aria-label"], fe = {
	key: 0,
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "1.8",
	"stroke-linecap": "round",
	"stroke-linejoin": "round",
	"aria-hidden": "true"
}, pe = {
	key: 1,
	class: "share-remove-button__cross",
	"aria-hidden": "true"
}, me = /*#__PURE__*/ z({
	__name: "RemoveButton",
	props: {
		variant: {
			type: String,
			default: "inline"
		},
		icon: {
			type: String,
			default: "cross"
		},
		label: {
			type: String,
			required: !0
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click"],
	setup(e) {
		return (t, n) => (C(), s("button", {
			class: v(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.icon === "trash" ? (C(), s("svg", fe, [...n[1] ||= [c("path", { d: "M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" }, null, -1)]])) : (C(), s("span", pe))], 10, K));
	}
}, [["__scopeId", "data-v-b1091570"]]), he = { class: "share-section-label__text" }, ge = {
	key: 0,
	class: "share-section-label__actions"
}, _e = /*#__PURE__*/ z({
	__name: "SectionLabel",
	props: {
		title: {
			type: String,
			default: ""
		},
		border: {
			type: Boolean,
			default: !1
		},
		align: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		let t = e, n = i(() => {
			let e = {
				left: "flex-start",
				center: "center",
				right: "flex-end"
			};
			return t.align && e[t.align] ? { justifyContent: e[t.align] } : {};
		});
		return (t, r) => (C(), s("div", {
			class: v(["share-section-label", { "share-section-label--border": e.border }]),
			style: b(n.value)
		}, [c("span", he, [D(t.$slots, "default", {}, () => [d(k(e.title), 1)], !0)]), t.$slots.actions ? (C(), s("span", ge, [D(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)], 6));
	}
}, [["__scopeId", "data-v-56c925a7"]]), q = ["aria-label"], J = {
	viewBox: "0 0 120 120",
	role: "img",
	"aria-hidden": "true"
}, ve = [
	"stroke",
	"stroke-width",
	"stroke-dasharray",
	"stroke-dashoffset"
], ye = { class: "segment-donut__center" }, be = {
	key: 0,
	class: "segment-donut__legend"
}, xe = { key: 0 }, Y = /*#__PURE__*/ z({
	__name: "SegmentDonutChart",
	props: {
		segments: {
			type: Array,
			default: () => []
		},
		totalLabel: {
			type: String,
			default: ""
		},
		ariaLabel: {
			type: String,
			default: "Распределение значений"
		},
		formatValue: {
			type: Function,
			default: (e) => String(e)
		},
		size: {
			type: Number,
			default: 220
		},
		strokeWidth: {
			type: Number,
			default: 12
		},
		showLegend: {
			type: Boolean,
			default: !0
		},
		showPercent: {
			type: Boolean,
			default: !0
		}
	},
	setup(t) {
		j((e) => ({ v664f5d02: t.strokeWidth }));
		let n = [
			"var(--accent)",
			"var(--info)",
			"var(--success)",
			"var(--warning)",
			"var(--danger)"
		], r = t, a = i(() => r.segments.map((e, t) => ({
			key: e.key ?? t,
			label: e.label ?? String(e.key ?? t),
			value: Number.isFinite(Number(e.value)) ? Math.max(0, Number(e.value)) : 0,
			color: e.color || n[t % n.length]
		}))), l = i(() => a.value.reduce((e, t) => e + t.value, 0)), u = i(() => a.value.map((e) => ({
			...e,
			percent: l.value > 0 ? e.value / l.value * 100 : 0
		}))), d = i(() => {
			let e = 0;
			return u.value.filter((e) => e.value > 0).map((t) => {
				let n = {
					...t,
					offset: e
				};
				return e += t.percent, n;
			});
		});
		return (n, r) => (C(), s("figure", {
			class: "segment-donut",
			"aria-label": t.ariaLabel
		}, [c("div", {
			class: "segment-donut__visual",
			style: b({ "--segment-donut-size": `${t.size}px` })
		}, [(C(), s("svg", J, [r[0] ||= c("circle", {
			class: "segment-donut__track",
			cx: "60",
			cy: "60",
			r: "50",
			pathLength: "100"
		}, null, -1), (C(!0), s(e, null, E(d.value, (e) => (C(), s("circle", {
			key: e.key,
			class: "segment-donut__segment",
			cx: "60",
			cy: "60",
			r: "50",
			pathLength: "100",
			stroke: e.color,
			"stroke-width": t.strokeWidth,
			"stroke-dasharray": `${e.percent} ${100 - e.percent}`,
			"stroke-dashoffset": -e.offset
		}, null, 8, ve))), 128))])), c("div", ye, [D(n.$slots, "center", { total: l.value }, () => [c("strong", null, k(t.formatValue(l.value)), 1), c("span", null, k(t.totalLabel), 1)], !0)])], 4), t.showLegend ? (C(), s("ul", be, [(C(!0), s(e, null, E(u.value, (e) => (C(), s("li", { key: e.key }, [
			c("i", {
				style: b({ "--segment-color": e.color }),
				"aria-hidden": "true"
			}, null, 4),
			c("span", null, k(e.label), 1),
			c("strong", null, k(t.formatValue(e.value)), 1),
			t.showPercent ? (C(), s("small", xe, k(e.percent.toLocaleString(void 0, { maximumFractionDigits: 1 })) + "%", 1)) : o("", !0)
		]))), 128))])) : o("", !0)], 8, q));
	}
}, [["__scopeId", "data-v-6c69c95e"]]), Se = ["aria-label"], Ce = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], we = ["src"], Te = /*#__PURE__*/ z({
	__name: "SlidingTabs",
	props: {
		tabs: {
			type: Array,
			required: !0
		},
		modelValue: {
			type: [String, Number],
			default: null
		},
		ariaLabel: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue"],
	setup(t, { expose: n, emit: r }) {
		let a = t, l = r, u = T(null), d = T([]), f = T({
			left: 0,
			width: 0,
			ready: !1
		}), p = i(() => ({
			transform: `translateX(${f.value.left}px)`,
			width: `${f.value.width}px`,
			opacity: +!!f.value.ready
		}));
		function m(e, t) {
			d.value[t] = e;
		}
		function h(e) {
			let t = a.tabs.find((t) => t.key === e);
			t && !t.disabled && e !== a.modelValue && l("update:modelValue", e);
		}
		async function g(e) {
			let t = a.tabs[e];
			!t || t.disabled || (h(t.key), await _(), d.value[e]?.focus());
		}
		function y(e, t) {
			let n = a.tabs.map((e, t) => ({
				tab: e,
				index: t
			})).filter(({ tab: e }) => !e.disabled);
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			e.key === "ArrowRight" && (i = n[(r + 1) % n.length]), e.key === "ArrowLeft" && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), g(i.index));
		}
		function w() {
			let e = a.tabs.findIndex((e) => e.key === a.modelValue), t = d.value[e];
			if (!t) {
				f.value = {
					left: 0,
					width: 0,
					ready: !1
				};
				return;
			}
			f.value = {
				left: t.offsetLeft,
				width: t.offsetWidth,
				ready: !0
			};
		}
		let O = null;
		return S(() => {
			_(w), typeof ResizeObserver < "u" && u.value && (O = new ResizeObserver(w), O.observe(u.value));
		}), x(() => O?.disconnect()), P(() => a.modelValue, () => _(w)), P(() => a.tabs, () => _(w), { deep: !0 }), n({ updateUnderline: w }), (n, r) => (C(), s("nav", {
			ref_key: "rootElement",
			ref: u,
			class: "share-sliding-tabs",
			role: "tablist",
			"aria-label": t.ariaLabel || void 0
		}, [(C(!0), s(e, null, E(t.tabs, (e, r) => (C(), s("button", {
			id: e.id,
			key: String(e.key),
			ref_for: !0,
			ref: (e) => m(e, r),
			class: v(["share-sliding-tabs__tab", { "share-sliding-tabs__tab--active": t.modelValue === e.key }]),
			type: "button",
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			"aria-controls": e.panelId,
			tabindex: t.modelValue === e.key ? 0 : -1,
			disabled: e.disabled,
			onClick: (t) => h(e.key),
			onKeydown: (e) => y(e, r)
		}, [D(n.$slots, "icon", { tab: e }, () => [e.icon || e.svg ? (C(), s("img", {
			key: 0,
			class: "share-sliding-tabs__icon",
			src: e.icon || e.svg,
			alt: "",
			"aria-hidden": "true"
		}, null, 8, we)) : o("", !0)], !0), c("span", null, k(e.title), 1)], 42, Ce))), 128)), c("span", {
			class: "share-sliding-tabs__underline",
			style: b(p.value),
			"aria-hidden": "true"
		}, null, 4)], 8, Se));
	}
}, [["__scopeId", "data-v-28aae1df"]]), Ee = [
	"aria-checked",
	"aria-label",
	"disabled"
], De = {
	key: 0,
	class: "share-toggle-switch__text"
}, Oe = /*#__PURE__*/ z({
	__name: "ToggleSwitch",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		label: {
			type: String,
			default: ""
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i() {
			n.disabled || r("update:modelValue", !n.modelValue);
		}
		return (t, n) => (C(), s("button", {
			class: v(["share-toggle-switch", { "share-toggle-switch--active": e.modelValue }]),
			type: "button",
			role: "switch",
			"aria-checked": e.modelValue,
			"aria-label": e.ariaLabel || e.label || void 0,
			disabled: e.disabled,
			onClick: i
		}, [n[0] ||= c("span", {
			class: "share-toggle-switch__track",
			"aria-hidden": "true"
		}, [c("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (C(), s("span", De, [D(t.$slots, "default", {}, () => [d(k(e.label), 1)], !0)])) : o("", !0)], 10, Ee));
	}
}, [["__scopeId", "data-v-828a23d7"]]), X = [], Z = null, Q = null;
function ke(e) {
	let t = X.lastIndexOf(e);
	t >= 0 && X.splice(t, 1);
}
function Ae(e) {
	ke(e), X.push(e);
}
function je(e) {
	ke(e);
}
function Me(e) {
	return X.at(-1) === e;
}
function Ne(e, t) {
	Z?.token !== e && Z?.close(), Z = {
		token: e,
		close: t
	}, Ae(e);
}
function Pe(e) {
	Z?.token === e && (Z = null), je(e);
}
function Fe(e, t) {
	Q?.token !== e && Q?.close(), Q = {
		token: e,
		close: t
	};
}
function Ie(e) {
	Q?.token === e && (Q = null);
}
function Le() {
	if (!Q) return !1;
	let e = Q;
	return Q = null, e.close(), !0;
}
//#endregion
//#region src/lib/actionMenuPlacement.js
var Re = 8, ze = 6;
function Be(e, t, n) {
	return Math.min(Math.max(e, t), Math.max(t, n));
}
function Ve({ triggerRect: e, popoverWidth: t, popoverHeight: n, viewportWidth: r, viewportHeight: i, viewportLeft: a = 0, viewportTop: o = 0, originX: s, originY: c, margin: l = 8, gap: u = 6 }) {
	let d = a + l, f = o + l, p = a + r - l, m = o + i - l, h = Math.min(t, Math.max(0, p - d)), g = Be(e.right - h, d, p - h), _ = Math.max(0, m - e.bottom - u), v = Math.max(0, e.top - u - f), y = _ < n && v > _, b = y ? v : _, x = Math.min(n, b), S = Be(y ? e.top - u - x : e.bottom + u, f, m - x);
	return {
		left: g,
		top: S,
		maxHeight: b,
		opensAbove: y,
		originX: Be(s - g, 0, h),
		originY: Be(c - S, 0, x)
	};
}
var He = 8, Ue = 6, We = Ve, Ge = [
	"title",
	"aria-label",
	"aria-expanded",
	"disabled"
], Ke = ["aria-label"], qe = /*#__PURE__*/ z({
	__name: "ActionMenu",
	props: {
		title: {
			type: String,
			default: "Actions"
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		block: {
			type: Boolean,
			default: !1
		}
	},
	setup(r, { expose: i }) {
		let l = r, u = Symbol("action-menu"), d = T(null), p = T(null), m = T(null), h = T(!1), g = null, y = null;
		function S(e) {
			let t = d.value;
			if (!t) return null;
			let n = t.getBoundingClientRect(), r = e?.detail > 0;
			return g = {
				x: r ? e.clientX : n.left + n.width / 2,
				y: r ? e.clientY : n.bottom
			}, {
				position: "fixed",
				top: "8px",
				left: "8px",
				visibility: "hidden"
			};
		}
		function w() {
			let e = window.visualViewport;
			return {
				viewportWidth: e?.width || window.innerWidth,
				viewportHeight: e?.height || window.innerHeight,
				viewportLeft: e?.offsetLeft || 0,
				viewportTop: e?.offsetTop || 0
			};
		}
		function E() {
			y = null;
			let e = d.value, t = p.value;
			if (!h.value || !e || !t) return;
			let n = w(), r = Math.max(0, n.viewportWidth - 16);
			t.style.minWidth = `${Math.min(200, r)}px`, t.style.maxWidth = `${Math.min(280, r)}px`;
			let i = e.getBoundingClientRect(), a = Ve({
				triggerRect: i,
				popoverWidth: t.getBoundingClientRect().width,
				popoverHeight: t.scrollHeight,
				originX: g?.x ?? i.left + i.width / 2,
				originY: g?.y ?? i.bottom,
				...n
			});
			m.value = {
				position: "fixed",
				top: `${a.top}px`,
				left: `${a.left}px`,
				minWidth: `${Math.min(200, r)}px`,
				maxWidth: `${Math.min(280, r)}px`,
				maxHeight: `${a.maxHeight}px`,
				visibility: "visible",
				"--share-popover-origin-x": `${a.originX}px`,
				"--share-popover-origin-y": `${a.originY}px`,
				"--share-popover-enter-y": a.opensAbove ? "5px" : "-5px"
			};
		}
		function O() {
			y != null && cancelAnimationFrame(y), y = requestAnimationFrame(E);
		}
		function k() {
			document.addEventListener("pointerdown", P, !0), document.addEventListener("keydown", L), window.addEventListener("resize", O), window.addEventListener("scroll", I, !0), window.visualViewport?.addEventListener("resize", O), window.visualViewport?.addEventListener("scroll", O);
		}
		function A() {
			document.removeEventListener("pointerdown", P, !0), document.removeEventListener("keydown", L), window.removeEventListener("resize", O), window.removeEventListener("scroll", I, !0), window.visualViewport?.removeEventListener("resize", O), window.visualViewport?.removeEventListener("scroll", O);
		}
		function j(e) {
			l.disabled || h.value || (m.value = S(e), Ne(u, M), h.value = !0, k(), _(O));
		}
		function M() {
			h.value && (Le(), h.value = !1, Pe(u), y != null && cancelAnimationFrame(y), y = null, A());
		}
		function N(e) {
			l.disabled || (h.value ? M() : j(e));
		}
		function P(e) {
			e.target?.closest?.(".ram-popover, [data-share-popover-related]") || d.value?.contains?.(e.target) || M();
		}
		function I(e) {
			p.value?.contains?.(e.target) || e.target?.closest?.("[data-share-popover-related]") || M();
		}
		function L(e) {
			e.key === "Escape" && (Le() || Me(u) && M());
		}
		return x(M), i({
			open: j,
			close: M,
			toggle: N
		}), (i, l) => (C(), s(e, null, [i.$slots.trigger ? (C(), s("div", {
			key: 0,
			ref_key: "triggerEl",
			ref: d,
			class: v(["ram-custom-trigger", { "ram-custom-trigger--block": r.block }]),
			onClick: R(N, ["stop"])
		}, [D(i.$slots, "trigger", { open: h.value }, void 0, !0)], 2)) : (C(), s("button", {
			key: 1,
			ref_key: "triggerEl",
			ref: d,
			type: "button",
			class: "ram-trigger",
			title: r.title,
			"aria-label": r.title,
			"aria-expanded": h.value,
			"aria-haspopup": "menu",
			disabled: r.disabled,
			onClick: R(N, ["stop"])
		}, [...l[2] ||= [c("svg", {
			width: "14",
			height: "14",
			viewBox: "0 0 14 14",
			fill: "none",
			"aria-hidden": "true"
		}, [
			c("circle", {
				cx: "3",
				cy: "7",
				r: "1.2",
				fill: "currentColor"
			}),
			c("circle", {
				cx: "7",
				cy: "7",
				r: "1.2",
				fill: "currentColor"
			}),
			c("circle", {
				cx: "11",
				cy: "7",
				r: "1.2",
				fill: "currentColor"
			})
		], -1)]], 8, Ge)), (C(), a(t, { to: "body" }, [f(n, { name: "share-popover-action" }, {
			default: F(() => [h.value ? (C(), s("div", {
				key: 0,
				ref_key: "popoverEl",
				ref: p,
				class: "ram-popover",
				style: b(m.value),
				role: "menu",
				"aria-label": r.title,
				onClick: l[0] ||= R(() => {}, ["stop"]),
				onPointerdown: l[1] ||= R(() => {}, ["stop"])
			}, [D(i.$slots, "default", { close: M }, void 0, !0)], 44, Ke)) : o("", !0)]),
			_: 3
		})]))], 64));
	}
}, [["__scopeId", "data-v-e5053f4e"]]), Je = ["aria-haspopup", "aria-expanded"], Ye = {
	class: "ram-item__icon",
	"aria-hidden": "true"
}, Xe = {
	key: 1,
	width: "17",
	height: "17",
	viewBox: "0 0 17 17",
	fill: "none"
}, Ze = { class: "ram-item__content" }, Qe = {
	key: 0,
	class: "ram-item__suffix"
}, $e = /*#__PURE__*/ z({
	__name: "ActionMenuItem",
	props: {
		icon: {
			type: [Object, Function],
			default: null
		},
		submenu: {
			type: Boolean,
			default: !1
		},
		submenuOpen: {
			type: Boolean,
			default: !1
		},
		tone: {
			type: String,
			default: "default",
			validator: (e) => [
				"default",
				"accent",
				"warning",
				"success",
				"info",
				"danger"
			].includes(e)
		}
	},
	setup(e) {
		return (t, n) => (C(), s("button", {
			type: "button",
			class: v(["ram-item", e.tone === "default" ? null : `ram-item--${e.tone}`]),
			role: "menuitem",
			"aria-haspopup": e.submenu ? "menu" : void 0,
			"aria-expanded": e.submenu ? e.submenuOpen : void 0
		}, [
			c("span", Ye, [D(t.$slots, "icon", {}, () => [e.icon ? (C(), a(O(e.icon), {
				key: 0,
				size: 17,
				"stroke-width": 1.9
			})) : (C(), s("svg", Xe, [...n[0] ||= [
				c("circle", {
					cx: "4",
					cy: "8.5",
					r: "1.2",
					fill: "currentColor"
				}, null, -1),
				c("circle", {
					cx: "8.5",
					cy: "8.5",
					r: "1.2",
					fill: "currentColor"
				}, null, -1),
				c("circle", {
					cx: "13",
					cy: "8.5",
					r: "1.2",
					fill: "currentColor"
				}, null, -1)
			]]))], !0)]),
			c("span", Ze, [D(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.suffix || e.submenu ? (C(), s("span", Qe, [D(t.$slots, "suffix", {}, void 0, !0), e.submenu ? (C(), s("svg", {
				key: 0,
				class: v(["ram-item__submenu-chevron", { "ram-item__submenu-chevron--open": e.submenuOpen }]),
				width: "15",
				height: "15",
				viewBox: "0 0 15 15",
				fill: "none",
				"aria-hidden": "true"
			}, [...n[1] ||= [c("path", {
				d: "m5.5 3.5 4 4-4 4",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)]], 2)) : o("", !0)])) : o("", !0)
		], 10, Je));
	}
}, [["__scopeId", "data-v-5fc35d86"]]);
//#endregion
//#region src/composables/useMediaQuery.js
function et(e) {
	let t = T(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return S(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), x(() => n?.removeEventListener?.("change", r)), t;
}
function tt(e = 768) {
	return et(`(max-width: ${e}px)`);
}
//#endregion
//#region src/components/floating/BasePopover.vue
var nt = [
	"id",
	"role",
	"aria-label",
	"data-share-popover-related"
], rt = /*#__PURE__*/ z({
	__name: "BasePopover",
	props: {
		open: {
			type: Boolean,
			default: !1
		},
		anchor: {
			type: [Object, null],
			default: null
		},
		placement: {
			type: String,
			default: "bottom-start",
			validator: (e) => [
				"bottom-start",
				"bottom-end",
				"right-start"
			].includes(e)
		},
		offset: {
			type: Number,
			default: 6
		},
		minWidth: {
			type: [Number, String],
			default: 160
		},
		zIndex: {
			type: Number,
			default: 200
		},
		transition: {
			type: String,
			default: ""
		},
		transitionPreset: {
			type: String,
			default: "none",
			validator: (e) => ["none", "action-menu"].includes(e)
		},
		popoverClass: {
			type: [
				String,
				Array,
				Object
			],
			default: ""
		},
		closeOnScroll: {
			type: Boolean,
			default: !0
		},
		closeOnResize: {
			type: Boolean,
			default: !0
		},
		role: {
			type: String,
			default: ""
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		id: {
			type: String,
			default: ""
		},
		related: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:open"],
	setup(e, { emit: r }) {
		let c = e, l = r, u = i(() => c.transition ? c.transition : c.transitionPreset === "action-menu" ? "share-popover-action" : ""), d = Symbol("base-popover"), p = T(null), m = T(null);
		function h() {
			let e = c.anchor;
			return e ? typeof e.getBoundingClientRect == "function" ? e : e.value ?? e : null;
		}
		function g(e) {
			return typeof e == "number" ? `${e}px` : e;
		}
		function y() {
			let e = window.visualViewport;
			return {
				left: e?.offsetLeft || 0,
				top: e?.offsetTop || 0,
				width: e?.width || window.innerWidth,
				height: e?.height || window.innerHeight
			};
		}
		function S() {
			let e = h();
			if (!e) return;
			let t = e.getBoundingClientRect(), n = y(), r = typeof c.minWidth == "number" ? c.minWidth : 0, i = Math.max(r, p.value?.offsetWidth || 0), a = p.value?.offsetHeight || 0, o = n.left + 8, s = n.left + n.width - 8, l = n.top + 8, u = n.top + n.height - 8, d = {
				position: "fixed",
				minWidth: g(c.minWidth),
				zIndex: c.zIndex
			};
			if (c.placement === "right-start") {
				let e = t.right + c.offset, n = t.left - c.offset - i;
				d.left = `${e + i <= s ? e : n >= o ? n : Math.max(o, Math.min(e, s - i))}px`, d.top = `${Math.max(l, Math.min(t.top, u - a))}px`;
			} else {
				let e = c.placement === "bottom-end" ? t.right - i : t.left, n = t.bottom + c.offset, r = t.top - c.offset - a, f = n + a > u && r >= l ? r : n;
				d.left = `${Math.max(o, Math.min(e, s - i))}px`, d.top = `${Math.max(l, Math.min(f, u - a))}px`;
			}
			m.value = d;
		}
		function w() {
			l("update:open", !1);
		}
		function E(e) {
			return !!e?.closest?.("[data-share-popover-related]");
		}
		function O(e) {
			p.value?.contains(e.target) || E(e.target) || h()?.contains?.(e.target) || w();
		}
		function k(e) {
			if (!c.closeOnScroll) {
				S();
				return;
			}
			p.value?.contains(e.target) || E(e.target) || w();
		}
		function A() {
			c.closeOnResize ? w() : S();
		}
		function j(e) {
			e.key === "Escape" && (Le() || Me(d) && w());
		}
		function M() {
			Ae(d), document.addEventListener("pointerdown", O, !0), document.addEventListener("keydown", j), window.addEventListener("resize", A), window.addEventListener("scroll", k, !0), window.visualViewport?.addEventListener("resize", A), window.visualViewport?.addEventListener("scroll", S);
		}
		function N() {
			je(d), document.removeEventListener("pointerdown", O, !0), document.removeEventListener("keydown", j), window.removeEventListener("resize", A), window.removeEventListener("scroll", k, !0), window.visualViewport?.removeEventListener("resize", A), window.visualViewport?.removeEventListener("scroll", S);
		}
		return P(() => c.open, async (e) => {
			N(), e && (S(), await _(), c.open && (S(), M()));
		}, { immediate: !0 }), P(() => [
			c.anchor,
			c.placement,
			c.offset,
			c.minWidth
		], () => {
			c.open && _(S);
		}), x(N), (r, i) => (C(), a(t, { to: "body" }, [f(n, { name: u.value }, {
			default: F(() => [e.open ? (C(), s("div", {
				key: 0,
				id: e.id || void 0,
				ref_key: "popoverEl",
				ref: p,
				class: v([
					"share-popover",
					"base-popover",
					e.popoverClass
				]),
				style: b(m.value),
				role: e.role || void 0,
				"aria-label": e.ariaLabel || void 0,
				"data-share-popover-related": e.related ? "" : void 0,
				onClick: i[0] ||= R(() => {}, ["stop"]),
				onPointerdown: i[1] ||= R(() => {}, ["stop"])
			}, [D(r.$slots, "default", { close: w }, void 0, !0)], 46, nt)) : o("", !0)]),
			_: 3
		}, 8, ["name"])]));
	}
}, [["__scopeId", "data-v-256a13ae"]]), it = { class: "ras-root" }, at = { class: "ras-panel" }, ot = {
	key: 0,
	class: "ras-label"
}, st = { class: "ras-panel ras-panel--popover" }, ct = {
	key: 0,
	class: "ras-label"
}, lt = /*#__PURE__*/ z({
	__name: "ActionMenuSubmenu",
	props: {
		label: {
			type: String,
			default: ""
		},
		minWidth: {
			type: Number,
			default: 200
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		mobileBreakpoint: {
			type: Number,
			default: 768
		}
	},
	setup(e, { expose: t }) {
		let r = e, i = Symbol("action-submenu"), l = T(null), u = tt(r.mobileBreakpoint), d = T(!1);
		function p() {
			r.disabled || d.value || (Fe(i, h), d.value = !0);
		}
		function m() {
			r.disabled || (d.value ? h() : p());
		}
		function h() {
			d.value && (d.value = !1, Ie(i));
		}
		function g(e) {
			e || h();
		}
		return x(h), t({
			open: p,
			close: h,
			toggle: m
		}), (t, r) => (C(), s("div", it, [
			c("div", {
				ref_key: "triggerEl",
				ref: l,
				class: "ras-trigger",
				onClick: R(m, ["stop"])
			}, [D(t.$slots, "trigger", {
				open: d.value,
				toggle: m
			}, void 0, !0)], 512),
			f(n, { name: "ras-inline" }, {
				default: F(() => [A(u) && d.value ? (C(), s("div", {
					key: 0,
					class: "ras-inline",
					"data-share-popover-related": "",
					onClick: r[0] ||= R(() => {}, ["stop"]),
					onPointerdown: r[1] ||= R(() => {}, ["stop"])
				}, [c("div", at, [e.label ? (C(), s("div", ot, k(e.label), 1)) : o("", !0), D(t.$slots, "default", { close: h }, void 0, !0)])], 32)) : o("", !0)]),
				_: 3
			}),
			A(u) ? o("", !0) : (C(), a(rt, {
				key: 0,
				open: d.value,
				anchor: l.value,
				placement: "right-start",
				"min-width": e.minWidth,
				"z-index": 9400,
				"popover-class": "row-action-submenu-popover",
				transition: "ras-popover",
				related: "",
				"onUpdate:open": g
			}, {
				default: F(() => [c("div", st, [e.label ? (C(), s("div", ct, k(e.label), 1)) : o("", !0), D(t.$slots, "default", { close: h }, void 0, !0)])]),
				_: 3
			}, 8, [
				"open",
				"anchor",
				"min-width"
			]))
		]));
	}
}, [["__scopeId", "data-v-a4a95dc2"]]), ut = [
	"#ef4444",
	"#f97316",
	"#f59e0b",
	"#eab308",
	"#84cc16",
	"#22c55e",
	"#10b981",
	"#14b8a6",
	"#06b6d4",
	"#0ea5e9",
	"#3b82f6",
	"#6366f1",
	"#8b5cf6",
	"#7c5cff",
	"#a855f7",
	"#d946ef",
	"#ec4899",
	"#f43f5e",
	"#f87171",
	"#fbbf24",
	"#4ade80",
	"#38bdf8",
	"#c084fc",
	"#94a3b8"
];
function dt(e) {
	return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(String(e || "").trim());
}
function ft(e = ut) {
	return e[Math.floor(Math.random() * e.length)];
}
//#endregion
//#region src/components/floating/ColorPresetPicker.vue
var pt = ["aria-label"], mt = ["aria-label", "aria-expanded"], ht = { class: "cpp-body" }, gt = "#888888", _t = /*#__PURE__*/ z({
	__name: "ColorPresetPicker",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		colors: {
			type: Array,
			default: () => ut
		},
		columns: {
			type: Number,
			default: 6
		},
		allowCustom: {
			type: Boolean,
			default: !1
		},
		allowClear: {
			type: Boolean,
			default: !1
		},
		clearValue: { default: null },
		clearLabel: {
			type: String,
			default: "Clear"
		},
		customLabel: {
			type: String,
			default: "Custom color"
		},
		ariaLabel: {
			type: String,
			default: "Choose color"
		},
		inline: {
			type: Boolean,
			default: !1
		},
		placement: {
			type: String,
			default: "bottom-start"
		},
		zIndex: {
			type: Number,
			default: 4e3
		}
	},
	emits: ["update:modelValue", "invalid"],
	setup(e, { emit: t }) {
		let n = e, r = t, a = T(null), o = T(!1), l = T("cpppop-cancel"), u = T(n.modelValue || ""), d = i(() => /^#[0-9a-f]{6}$/i.test(n.modelValue || "") ? n.modelValue : gt), m = i(() => !!u.value && !dt(u.value));
		function g(e) {
			return String(n.modelValue || "").toLowerCase() === String(e).toLowerCase();
		}
		function _() {
			l.value = "cpppop-cancel", o.value = !0;
		}
		function y(e) {
			l.value = e === "pick" ? "cpppop-pick" : "cpppop-cancel", o.value = !1;
		}
		function x() {
			o.value ? y("cancel") : _();
		}
		function S(e) {
			e || y("cancel");
		}
		function w(e) {
			u.value = e, r("update:modelValue", e);
		}
		function E() {
			let e = u.value.trim();
			if (!dt(e)) {
				r("invalid", e);
				return;
			}
			w(e);
		}
		function O(e) {
			w(e), y("pick");
		}
		function k() {
			u.value = "", r("update:modelValue", n.clearValue), y("pick");
		}
		P(() => n.modelValue, (e) => {
			u.value = e || "";
		});
		let j = p({
			name: "ColorPresetGrid",
			setup() {
				return () => h("div", { class: "cpp-content" }, [h("div", {
					class: "cpp-grid",
					style: { "--cpp-columns": n.columns }
				}, n.colors.map((e) => h("button", {
					key: e,
					type: "button",
					class: ["cpp-color", { active: g(e) }],
					style: { background: e },
					title: e,
					"aria-label": e,
					"aria-pressed": g(e),
					onMousedown: (e) => e.preventDefault(),
					onClick: () => O(e)
				}))), n.allowCustom || n.allowClear ? h("div", { class: "cpp-extra" }, [
					n.allowCustom ? h("label", {
						class: "cpp-native",
						title: n.customLabel
					}, [h("span", {
						class: "cpp-native-sw",
						style: { background: n.modelValue || "var(--surface-active)" }
					}), h("input", {
						type: "color",
						value: d.value,
						"aria-label": n.customLabel,
						onInput: (e) => w(e.target.value)
					})]) : null,
					n.allowCustom ? h("input", {
						class: ["cpp-hex", { "cpp-hex--invalid": m.value }],
						type: "text",
						value: u.value,
						placeholder: "#hex",
						spellcheck: "false",
						"aria-label": n.customLabel,
						"aria-invalid": m.value,
						onInput: (e) => {
							u.value = e.target.value;
						},
						onChange: E,
						onKeydown: (e) => {
							e.key === "Enter" && E();
						}
					}) : null,
					n.allowClear ? h("button", {
						type: "button",
						class: "cpp-clear",
						onMousedown: (e) => e.preventDefault(),
						onClick: k
					}, n.clearLabel) : null
				]) : null]);
			}
		});
		return (t, n) => e.inline ? (C(), s("div", {
			key: 0,
			class: "cpp-body cpp-body--inline",
			"aria-label": e.ariaLabel
		}, [f(A(j))], 8, pt)) : (C(), s("span", {
			key: 1,
			ref_key: "anchorEl",
			ref: a,
			class: "cpp-host"
		}, [D(t.$slots, "trigger", {
			toggle: x,
			open: o.value,
			value: e.modelValue
		}, () => [c("button", {
			type: "button",
			class: v(["cpp-swatch", { "cpp-swatch--empty": !e.modelValue }]),
			style: b(e.modelValue ? { background: e.modelValue } : null),
			"aria-label": e.ariaLabel,
			"aria-expanded": o.value,
			"aria-haspopup": "dialog",
			onClick: x
		}, null, 14, mt)], !0), f(rt, {
			open: o.value,
			anchor: a.value,
			placement: e.placement,
			"min-width": 0,
			"z-index": e.zIndex,
			transition: l.value,
			role: "dialog",
			"aria-label": e.ariaLabel,
			"onUpdate:open": S
		}, {
			default: F(() => [c("div", ht, [f(A(j))])]),
			_: 1
		}, 8, [
			"open",
			"anchor",
			"placement",
			"z-index",
			"transition",
			"aria-label"
		])], 512));
	}
}, [["__scopeId", "data-v-1b7035e4"]]), vt = [
	"aria-label",
	"aria-expanded",
	"aria-activedescendant",
	"disabled"
], yt = ["aria-label"], bt = [
	"placeholder",
	"aria-label",
	"aria-activedescendant"
], xt = [
	"id",
	"aria-selected",
	"disabled",
	"onMouseenter",
	"onClick"
], St = {
	key: 1,
	class: "vs-empty"
}, Ct = /*#__PURE__*/ z({
	__name: "ValueSelect",
	props: {
		modelValue: { default: null },
		options: {
			type: Array,
			default: () => []
		},
		placeholder: {
			type: String,
			default: "Select"
		},
		searchable: {
			type: Boolean,
			default: !1
		},
		searchThreshold: {
			type: Number,
			default: 10
		},
		searchPlaceholder: {
			type: String,
			default: "Search…"
		},
		searchAriaLabel: {
			type: String,
			default: ""
		},
		emptyLabel: {
			type: String,
			default: "No options found"
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		dropUp: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:modelValue",
		"open",
		"close"
	],
	setup(t, { expose: n, emit: r }) {
		let a = 0, l = t, u = r;
		a += 1;
		let d = `share-value-select-${a}`, f = T(null), p = T(null), m = T(null), h = T(!1), g = T(""), y = T(-1), b = i(() => l.options.map((e, t) => e && typeof e == "object" ? {
			value: e.value,
			label: String(e.label ?? e.value ?? ""),
			disabled: !!e.disabled,
			key: e.key ?? `${String(e.value)}-${t}`
		} : {
			value: e,
			label: String(e ?? ""),
			disabled: !1,
			key: `${String(e)}-${t}`
		})), S = i(() => b.value.find((e) => O(e.value))?.label ?? ""), w = i(() => {
			let e = g.value.trim().toLocaleLowerCase();
			return e ? b.value.filter((t) => t.label.toLocaleLowerCase().includes(e)) : b.value;
		}), D = i(() => l.searchable && b.value.length >= l.searchThreshold);
		function O(e) {
			return String(e) === String(l.modelValue);
		}
		function A(e) {
			return `${d}-option-${e}`;
		}
		function j(e = 0, t = 1) {
			let n = w.value;
			if (!n.length) return -1;
			for (let r = 0; r < n.length; r += 1) {
				let i = (e + r * t + n.length) % n.length;
				if (!n[i].disabled) return i;
			}
			return -1;
		}
		function M() {
			let e = w.value.findIndex((e) => O(e.value) && !e.disabled);
			return e >= 0 ? e : j();
		}
		function F(e) {
			w.value[e]?.disabled || (y.value = e);
		}
		function L(e) {
			let t = w.value;
			if (!t.length) return;
			let n = y.value < 0 ? e > 0 ? 0 : t.length - 1 : (y.value + e + t.length) % t.length;
			y.value = j(n, e), _(() => document.getElementById(A(y.value))?.scrollIntoView?.({ block: "nearest" }));
		}
		function R() {
			l.disabled || h.value || (h.value = !0, y.value = M(), document.addEventListener("pointerdown", U, !0), u("open"), D.value && _(() => m.value?.focus()));
		}
		function z({ restoreFocus: e = !1 } = {}) {
			h.value && (h.value = !1, g.value = "", y.value = -1, document.removeEventListener("pointerdown", U, !0), u("close"), e && _(() => p.value?.focus()));
		}
		function B() {
			h.value ? z() : R();
		}
		function V(e) {
			!e || e.disabled || (u("update:modelValue", e.value), z({ restoreFocus: !0 }));
		}
		function H() {
			V(w.value[y.value]);
		}
		function U(e) {
			f.value?.contains(e.target) || z();
		}
		function W(e) {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault(), h.value ? L(e.key === "ArrowDown" ? 1 : -1) : R();
				return;
			}
			if (e.key === "Home" && h.value) {
				e.preventDefault(), y.value = j();
				return;
			}
			if (e.key === "End" && h.value) {
				e.preventDefault(), y.value = j(w.value.length - 1, -1);
				return;
			}
			if ((e.key === "Enter" || e.key === " ") && h.value) {
				e.preventDefault(), H();
				return;
			}
			e.key === "Escape" && h.value && (e.preventDefault(), z({ restoreFocus: !0 }));
		}
		function ee(e) {
			e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), L(e.key === "ArrowDown" ? 1 : -1)) : e.key === "Home" ? (e.preventDefault(), y.value = j()) : e.key === "End" ? (e.preventDefault(), y.value = j(w.value.length - 1, -1)) : e.key === "Enter" ? (e.preventDefault(), H()) : e.key === "Escape" && (e.preventDefault(), z({ restoreFocus: !0 }));
		}
		return P(w, () => {
			y.value = M();
		}), P(() => l.disabled, (e) => {
			e && z();
		}), x(() => {
			document.removeEventListener("pointerdown", U, !0);
		}), n({
			open: R,
			close: z,
			toggle: B
		}), (n, r) => (C(), s("div", {
			ref_key: "rootEl",
			ref: f,
			class: v(["vs", { "vs--disabled": t.disabled }])
		}, [c("button", {
			ref_key: "triggerEl",
			ref: p,
			class: v(["vs-button", { empty: !S.value }]),
			type: "button",
			role: "combobox",
			"aria-haspopup": "listbox",
			"aria-label": t.ariaLabel || void 0,
			"aria-controls": d,
			"aria-expanded": h.value,
			"aria-activedescendant": h.value && y.value >= 0 ? A(y.value) : void 0,
			disabled: t.disabled,
			onClick: B,
			onKeydown: W
		}, [c("span", null, k(S.value || t.placeholder), 1), r[1] ||= c("span", {
			class: "vs-arrow",
			"aria-hidden": "true"
		}, "▾", -1)], 42, vt), h.value ? (C(), s("div", {
			key: 0,
			id: d,
			class: v(["vs-drop", { "vs-drop-up": t.dropUp }]),
			role: "listbox",
			"aria-label": t.ariaLabel || void 0
		}, [
			D.value ? I((C(), s("input", {
				key: 0,
				ref_key: "searchEl",
				ref: m,
				"onUpdate:modelValue": r[0] ||= (e) => g.value = e,
				class: "vs-search",
				type: "search",
				placeholder: t.searchPlaceholder,
				"aria-label": t.searchAriaLabel || t.searchPlaceholder,
				"aria-controls": d,
				"aria-activedescendant": y.value >= 0 ? A(y.value) : void 0,
				autocomplete: "off",
				onKeydown: ee
			}, null, 40, bt)), [[N, g.value]]) : o("", !0),
			(C(!0), s(e, null, E(w.value, (e, t) => (C(), s("button", {
				id: A(t),
				key: e.key,
				class: v(["vs-option", { "vs-option--active": t === y.value }]),
				type: "button",
				role: "option",
				"aria-selected": O(e.value),
				disabled: e.disabled,
				onMouseenter: (e) => F(t),
				onClick: (t) => V(e)
			}, k(e.label), 43, xt))), 128)),
			w.value.length === 0 ? (C(), s("div", St, k(t.emptyLabel), 1)) : o("", !0)
		], 10, yt)) : o("", !0)], 2));
	}
}, [["__scopeId", "data-v-764969f5"]]), wt = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.b.blockquote.br.code.em.h1.h2.h3.h4.h5.h6.li.ol.p.pre.s.span.strike.strong.table.tbody.td.th.thead.tr.u.ul".split(".")), Tt = /* @__PURE__ */ new Set([
	"embed",
	"iframe",
	"math",
	"object",
	"script",
	"style",
	"svg",
	"template"
]), Et = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:"
]), Dt = /^[a-z][a-z0-9-]{0,39}$/, Ot = 4096;
function kt(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
function At(e) {
	let t = String(e || "").trim();
	if (!t || /[\u0000-\u001f\u007f]/.test(t)) return "";
	if (/^(?:#|\?|\.?\.\/|\/)/.test(t)) return t;
	try {
		let e = new URL(t, "https://share-ui.invalid");
		return Et.has(e.protocol) ? t : "";
	} catch {
		return "";
	}
}
function jt(e) {
	let t = String(e || "").trim();
	if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t) || /^var\(--[a-z0-9-]+\)$/i.test(t)) return t;
	let n = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
	if (!n || n.slice(1, 4).map(Number).some((e) => e < 0 || e > 255)) return "";
	let r = n[4] == null ? null : Number(n[4]);
	return r != null && (r < 0 || r > 1) ? "" : t;
}
function Mt(e) {
	try {
		let t = encodeURIComponent(JSON.stringify(e ?? {}));
		return t.length <= Ot ? t : "";
	} catch {
		return "";
	}
}
function Nt(e) {
	let t = String(e || "");
	if (!t || t.length > Ot) return null;
	try {
		let e = JSON.parse(decodeURIComponent(t));
		return e && typeof e == "object" && !Array.isArray(e) ? e : null;
	} catch {
		try {
			let e = JSON.parse(t);
			return e && typeof e == "object" && !Array.isArray(e) ? e : null;
		} catch {
			return null;
		}
	}
}
function Pt(e, t, n) {
	let r = String(e || "").trim().toLowerCase(), i = Mt(t);
	return !Dt.test(r) || !i ? "" : `<span data-rich-node="${r}" data-rich-payload="${kt(i)}" contenteditable="false">${kt(n || r)}</span>`;
}
function Ft(e) {
	if (!e?.getAttribute) return null;
	let t = String(e.getAttribute("data-rich-node") || "").trim().toLowerCase(), n = Nt(e.getAttribute("data-rich-payload"));
	return !Dt.test(t) || n == null ? null : {
		kind: t,
		payload: n,
		label: e.textContent || t
	};
}
function It(e, t) {
	let n = e.getAttribute("title");
	n && t.setAttribute("title", n);
	let r = e.getAttribute("dir");
	[
		"ltr",
		"rtl",
		"auto"
	].includes(r) && t.setAttribute("dir", r);
	let i = jt(e.style?.getPropertyValue("color"));
	if (i && t.style.setProperty("color", i), t.tagName === "A") {
		let n = At(e.getAttribute("href"));
		n && t.setAttribute("href", n), e.getAttribute("target") === "_blank" && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer"));
	}
	if (t.tagName === "SPAN") {
		let n = Ft(e);
		n && (t.setAttribute("data-rich-node", n.kind), t.setAttribute("data-rich-payload", Mt(n.payload)), t.setAttribute("contenteditable", "false"));
	}
	if (t.tagName === "TD" || t.tagName === "TH") for (let n of ["colspan", "rowspan"]) {
		let r = Number.parseInt(e.getAttribute(n), 10);
		r >= 1 && r <= 100 && t.setAttribute(n, String(r));
	}
}
function Lt(e, t, n) {
	if (e.nodeType === 3) {
		t.appendChild(n.createTextNode(e.nodeValue || ""));
		return;
	}
	if (e.nodeType !== 1) return;
	let r = e.tagName.toLowerCase();
	if (Tt.has(r)) return;
	if (!wt.has(r)) {
		for (let r of [...e.childNodes]) Lt(r, t, n);
		return;
	}
	let i = n.createElement(r);
	if (It(e, i), i.hasAttribute("data-rich-node")) i.textContent = e.textContent || i.getAttribute("data-rich-node");
	else for (let t of [...e.childNodes]) Lt(t, i, n);
	t.appendChild(i);
}
function Rt(e) {
	let t = String(e || "");
	if (!t) return "";
	if (typeof DOMParser > "u") return kt(t);
	let n = new DOMParser().parseFromString(t, "text/html"), r = n.createElement("div");
	for (let e of [...n.body.childNodes]) Lt(e, r, n);
	return r.innerHTML;
}
function zt(e) {
	return kt(e).replace(/\r\n?|\n/g, "<br>");
}
//#endregion
//#region src/components/rich-text/RichContent.vue
function Bt(e) {
	let t = {};
	for (let n of [...e.attributes]) n.name !== "class" && (t[n.name] = n.value);
	return t;
}
function Vt(e, t, n) {
	if (e.nodeType === Node.TEXT_NODE) return e.nodeValue || "";
	if (e.nodeType !== Node.ELEMENT_NODE) return null;
	let r = Ft(e);
	if (r) {
		let e = () => h("span", {
			class: "rc-node",
			"data-rich-node": r.kind,
			title: r.label
		}, r.label);
		return h("span", {
			class: "rc-node-host",
			key: n
		}, t.node?.({
			node: r,
			fallback: e
		}) || e());
	}
	let i = [...e.childNodes].map((e, r) => Vt(e, t, `${n}.${r}`)).filter((e) => e != null);
	return h(e.tagName.toLowerCase(), {
		...Bt(e),
		key: n
	}, i);
}
var Ht = /*#__PURE__*/ z({
	name: "RichContent",
	inheritAttrs: !1,
	props: { html: {
		type: String,
		default: ""
	} },
	setup(e, { slots: t, attrs: n }) {
		let r = i(() => Rt(e.html));
		return () => {
			if (typeof DOMParser > "u") return h("div", {
				...n,
				class: ["rc", n.class],
				innerHTML: r.value
			});
			let e = [...new DOMParser().parseFromString(r.value, "text/html").body.childNodes].map((e, n) => Vt(e, t, String(n))).filter((e) => e != null);
			return h("div", {
				...n,
				class: ["rc", n.class]
			}, e);
		};
	}
}, [["__scopeId", "data-v-db98d003"]]), Ut = { class: "input-desc" }, Wt = ["aria-label"], Gt = ["title"], Kt = ["title"], qt = ["title"], Jt = ["aria-expanded"], Yt = ["onMousedown"], Xt = ["title", "onMousedown"], Zt = { class: "desc-color-icon" }, Qt = [
	"title",
	"aria-label",
	"aria-expanded"
], $t = { class: "desc-link-field" }, en = ["placeholder"], tn = { class: "desc-link-field" }, nn = {
	key: 0,
	class: "desc-link-error"
}, rn = { class: "desc-link-actions" }, an = {
	type: "submit",
	class: "desc-link-save"
}, on = ["data-placeholder", "aria-label"], sn = {
	key: 2,
	class: "desc-empty"
}, cn = /*#__PURE__*/ z({
	__name: "RichTextEditor",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		editable: {
			type: Boolean,
			default: !0
		},
		placeholder: {
			type: String,
			default: "Text…"
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		colors: {
			type: Array,
			default: () => ut
		},
		maxHeadingLevel: {
			type: Number,
			default: 6,
			validator: (e) => e >= 1 && e <= 6
		},
		labels: {
			type: Object,
			default: () => ({})
		},
		showLinkButton: {
			type: Boolean,
			default: !0
		}
	},
	emits: [
		"update:modelValue",
		"focus",
		"blur",
		"node-select"
	],
	setup(t, { expose: n, emit: r }) {
		let u = {
			toolbar: "Text formatting",
			bold: "Bold",
			boldShort: "B",
			italic: "Italic",
			italicShort: "I",
			underline: "Underline",
			underlineShort: "U",
			paragraph: "Paragraph",
			normal: "Normal text",
			heading: "Heading {level}",
			color: "Text color",
			colorShort: "A",
			clearColor: "Clear color",
			link: "Link",
			linkText: "Text",
			linkTextPlaceholder: "Link text",
			linkUrl: "Address",
			linkInvalid: "Enter a safe link address",
			saveLink: "Apply",
			removeLink: "Remove link",
			cancel: "Cancel"
		}, p = t, h = r, g = i(() => ({
			...u,
			...p.labels
		})), b = i(() => Array.from({ length: p.maxHeadingLevel }, (e, t) => t + 1)), x = T(!1), O = T(null), A = T(null), j = T(null), M = T(null), L = T(!1), z = T(null), B = T(null), V = T(null), H = T(null), U = T(!1), W = w({
			text: "",
			url: ""
		}), ee = i(() => z.value || B.value || j.value);
		function te(e) {
			return Rt(e) || "<p><br></p>";
		}
		function ne(e) {
			!p.editable || !A.value || document.activeElement !== A.value && (A.value.innerHTML = te(e));
		}
		P(() => p.modelValue, ne), P(() => p.editable, (e) => {
			e && _(() => ne(p.modelValue));
		}), S(() => {
			ne(p.modelValue), document.execCommand("defaultParagraphSeparator", !1, "p");
		});
		function re(e) {
			return !!(e && A.value?.contains(e.commonAncestorContainer));
		}
		function ie() {
			let e = window.getSelection();
			if (!e?.rangeCount) return;
			let t = e.getRangeAt(0);
			re(t) && (H.value = t.cloneRange());
		}
		function ae() {
			A.value?.focus();
			let e = window.getSelection();
			return !e || !re(H.value) ? !1 : (e.removeAllRanges(), e.addRange(H.value), !0);
		}
		function oe() {
			return re(H.value) ? H.value.toString().trim() : "";
		}
		function se(e) {
			let t = Pt(e?.kind, e?.payload, e?.label);
			if (!t || !A.value) return null;
			ae(), document.execCommand("insertHTML", !1, t), Y();
			let n = A.value.querySelectorAll("[data-rich-node]"), r = n[n.length - 1] || null;
			return r && (V.value = r, de(r)), r;
		}
		function ce(e) {
			return e?.nodeType === Node.ELEMENT_NODE && e.matches?.("[data-rich-node]") ? e : e?.element?.matches?.("[data-rich-node]") ? e.element : V.value?.isConnected ? V.value : null;
		}
		function le(e, t) {
			let n = ce(e), r = Pt(t?.kind, t?.payload, t?.label);
			if (!n || !r) return null;
			let i = document.createElement("template");
			i.innerHTML = r;
			let a = i.content.firstElementChild;
			return n.replaceWith(a), V.value = a, Y(), a;
		}
		function ue(e) {
			let t = ce(e);
			if (!t) return !1;
			let n = t.nextSibling || t.parentNode;
			return t.remove(), V.value = null, n?.nodeType === Node.ELEMENT_NODE && Te(n), Y(), !0;
		}
		function de(e) {
			let t = document.createRange(), n = window.getSelection();
			t.setStartAfter(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t), H.value = t.cloneRange();
		}
		function G(e, t) {
			ie(), z.value = e, B.value = t, U.value = !1, W.text = e?.textContent || oe(), W.url = e?.getAttribute?.("href") || "", L.value = !0, _(() => M.value?.focus());
		}
		function K(e = null) {
			G(null, e);
		}
		function fe(e) {
			G(e, null);
		}
		function pe(e = !1) {
			e !== !0 && (L.value = !1, z.value = null, B.value = null, U.value = !1);
		}
		function me() {
			let e = At(W.url);
			if (!e) {
				U.value = !0;
				return;
			}
			let t = W.text.trim() || e;
			if (z.value?.isConnected) z.value.setAttribute("href", e), z.value.textContent = t;
			else {
				ae();
				let n = window.getSelection();
				if (n?.rangeCount && !n.getRangeAt(0).collapsed && t === n.toString().trim()) document.execCommand("createLink", !1, e);
				else {
					let r = document.createElement("a");
					r.href = e, r.textContent = t;
					let i = n?.rangeCount ? n.getRangeAt(0) : null;
					i && re(i) && (i.deleteContents(), i.insertNode(r), de(r));
				}
			}
			pe(!1), Y();
		}
		function he() {
			let e = z.value;
			if (!e?.isConnected) return pe(!1);
			e.replaceWith(...e.childNodes), pe(!1), Y();
		}
		function ge(e) {
			let t = e.target.closest?.("a");
			if (t && A.value?.contains(t)) {
				e.preventDefault(), fe(t);
				return;
			}
			let n = e.target.closest?.("[data-rich-node]");
			!n || !A.value?.contains(n) || (e.preventDefault(), V.value = n, h("node-select", {
				element: n,
				node: Ft(n)
			}));
		}
		let _e = {
			focus: () => A.value?.focus(),
			rememberSelection: ie,
			openLinkEditor: K,
			insertRichNode: se,
			updateRichNode: le,
			removeRichNode: ue
		};
		function q(e) {
			return g.value.heading.replace("{level}", String(e));
		}
		function J(e) {
			A.value?.focus(), document.execCommand("styleWithCSS", !1, !1), document.execCommand(e, !1, null), _(Y);
		}
		function ve(e) {
			A.value?.focus(), document.execCommand("formatBlock", !1, e), x.value = !1, _(Y);
		}
		function ye(e) {
			if (A.value?.focus(), document.execCommand("styleWithCSS", !1, !0), e) {
				document.execCommand("foreColor", !1, e), Y();
				return;
			}
			document.execCommand("removeFormat", !1, null), _(() => {
				A.value && (A.value.querySelectorAll("span").forEach((e) => {
					e.style.removeProperty("font-family"), e.style.cssText.trim() || e.replaceWith(...e.childNodes);
				}), Y());
			});
		}
		function be() {
			if (A.value) {
				Ee();
				for (let e of [...A.value.children]) {
					if (e.tagName !== "DIV") continue;
					let t = document.createElement("p");
					t.innerHTML = e.innerHTML, e.replaceWith(t);
				}
				Y();
			}
		}
		function xe() {
			if (!A.value) return "";
			Se(A.value);
			let e = Rt(A.value.innerHTML);
			return e === "<p><br></p>" || e === "<br>" ? "" : e;
		}
		function Y() {
			h("update:modelValue", xe());
		}
		function Se(e) {
			e.querySelectorAll("strong").forEach((e) => Ce(e, "b")), e.querySelectorAll("i").forEach((e) => Ce(e, "em")), e.querySelectorAll("span").forEach((e) => {
				let t = e.style.fontWeight, n = e.style.fontStyle, r = e.style.textDecorationLine || e.style.textDecoration, i = null;
				t === "bold" || Number(t) >= 600 ? (e.style.removeProperty("font-weight"), i = "b") : n === "italic" ? (e.style.removeProperty("font-style"), i = "em") : String(r).includes("underline") && (e.style.removeProperty("text-decoration"), e.style.removeProperty("text-decoration-line"), i = "u"), i && Ce(e, i);
			});
		}
		function Ce(e, t) {
			let n = document.createElement(t);
			for (let t of [...e.attributes]) (t.name !== "style" || e.style.cssText.trim()) && n.setAttribute(t.name, t.value);
			return n.append(...e.childNodes), e.replaceWith(n), n;
		}
		function we(e) {
			let t = e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
			for (; t && t !== A.value;) {
				if ([
					"P",
					"DIV",
					"H1",
					"H2",
					"H3",
					"H4",
					"H5",
					"H6"
				].includes(t.tagName)) return t;
				t = t.parentNode;
			}
			return null;
		}
		function Te(e) {
			let t = document.createRange(), n = window.getSelection();
			t.selectNodeContents(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t);
		}
		function Ee() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !A.value?.contains(e.anchorNode)) return;
			let t = we(e.anchorNode);
			if (!t || t.tagName === "LI") return;
			let n = t.textContent || "";
			(n === "- " || n === " - ") && De(t);
		}
		function De(e) {
			let t = document.createElement("li");
			t.innerHTML = "<br>";
			let n = document.createElement("ul");
			n.appendChild(t), e.replaceWith(n), Te(t);
		}
		function Oe() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !A.value?.contains(e.anchorNode)) return !1;
			let t = we(e.anchorNode);
			if (!t || t.tagName === "LI") return !1;
			let n = (t.textContent || "").replace(/\u00a0/g, " ");
			return n !== "-" && n !== " -" ? !1 : (De(t), !0);
		}
		function X(e) {
			if (e.key === " ") {
				Oe() && (e.preventDefault(), Y());
				return;
			}
			e.key === "Enter" && (e.preventDefault(), document.execCommand(e.shiftKey ? "insertLineBreak" : "insertParagraph"), Y());
		}
		function Z(e) {
			A.value?.focus(), document.execCommand("insertHTML", !1, e), Y();
		}
		function Q(e) {
			e.preventDefault();
			let t = e.clipboardData?.getData("text/html"), n = e.clipboardData?.getData("text/plain") || "";
			Z(t ? Rt(t) : zt(n));
		}
		function ke(e) {
			let t = document.caretPositionFromPoint?.(e.clientX, e.clientY), n = document.caretRangeFromPoint?.(e.clientX, e.clientY), r = document.createRange();
			if (t) r.setStart(t.offsetNode, t.offset);
			else if (n) r.setStart(n.startContainer, n.startOffset);
			else return;
			r.collapse(!0);
			let i = window.getSelection();
			i.removeAllRanges(), i.addRange(r);
		}
		function Ae(e) {
			e.preventDefault(), ke(e);
			let t = e.dataTransfer?.getData("text/html"), n = e.dataTransfer?.getData("text/plain") || "";
			Z(t ? Rt(t) : zt(n));
		}
		function je(e) {
			Y(), h("blur", e);
		}
		return n({
			focus: () => A.value?.focus(),
			commit: Y,
			rememberSelection: ie,
			openLinkEditor: K,
			insertRichNode: se,
			updateRichNode: le,
			removeRichNode: ue
		}), (n, r) => (C(), s("div", Ut, [t.editable ? (C(), s(e, { key: 0 }, [
			c("div", {
				class: "desc-toolbar",
				role: "toolbar",
				"aria-label": g.value.toolbar
			}, [
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.bold,
					onMousedown: r[0] ||= R((e) => J("bold"), ["prevent"])
				}, [c("b", null, k(g.value.boldShort), 1)], 40, Gt),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.italic,
					onMousedown: r[1] ||= R((e) => J("italic"), ["prevent"])
				}, [c("i", null, k(g.value.italicShort), 1)], 40, Kt),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.underline,
					onMousedown: r[2] ||= R((e) => J("underline"), ["prevent"])
				}, [c("u", null, k(g.value.underlineShort), 1)], 40, qt),
				r[13] ||= c("div", { class: "desc-sep" }, null, -1),
				c("button", {
					ref_key: "headingTrigger",
					ref: O,
					type: "button",
					class: "desc-btn desc-btn-wide",
					"aria-expanded": x.value,
					"aria-haspopup": "menu",
					onMousedown: r[3] ||= R((e) => x.value = !x.value, ["prevent"])
				}, [d(k(g.value.paragraph) + " ", 1), r[11] ||= c("span", {
					class: "desc-caret",
					"aria-hidden": "true"
				}, "▾", -1)], 40, Jt),
				f(rt, {
					open: x.value,
					anchor: O.value,
					"min-width": 160,
					"z-index": 4500,
					role: "menu",
					"aria-label": g.value.paragraph,
					"onUpdate:open": r[5] ||= (e) => x.value = e
				}, {
					default: F(() => [c("button", {
						type: "button",
						class: "desc-drop-item drop-p",
						role: "menuitem",
						onMousedown: r[4] ||= R((e) => ve("p"), ["prevent"])
					}, k(g.value.normal), 33), (C(!0), s(e, null, E(b.value, (e) => (C(), s("button", {
						key: e,
						type: "button",
						class: v(["desc-drop-item", `drop-h${e}`]),
						role: "menuitem",
						onMousedown: R((t) => ve(`h${e}`), ["prevent"])
					}, k(q(e)), 43, Yt))), 128))]),
					_: 1
				}, 8, [
					"open",
					"anchor",
					"aria-label"
				]),
				r[14] ||= c("div", { class: "desc-sep" }, null, -1),
				f(_t, {
					"allow-clear": "",
					colors: t.colors,
					"model-value": "",
					"clear-label": g.value.clearColor,
					"aria-label": g.value.color,
					"onUpdate:modelValue": ye
				}, {
					trigger: F(({ toggle: e }) => [c("button", {
						type: "button",
						class: "desc-btn",
						title: g.value.color,
						onMousedown: R((t) => {
							x.value = !1, e();
						}, ["prevent"])
					}, [c("span", Zt, k(g.value.colorShort), 1)], 40, Xt)]),
					_: 1
				}, 8, [
					"colors",
					"clear-label",
					"aria-label"
				]),
				r[15] ||= c("div", { class: "desc-sep" }, null, -1),
				t.showLinkButton ? (C(), s("button", {
					key: 0,
					ref_key: "linkTrigger",
					ref: j,
					type: "button",
					class: v(["desc-btn", { active: L.value }]),
					title: g.value.link,
					"aria-label": g.value.link,
					"aria-expanded": L.value,
					"aria-haspopup": "dialog",
					onMousedown: r[6] ||= R((e) => K(), ["prevent"])
				}, [...r[12] ||= [c("span", { "aria-hidden": "true" }, "↗", -1)]], 42, Qt)) : o("", !0),
				D(n.$slots, "toolbar", {
					editor: _e,
					insertRichNode: se,
					updateRichNode: le,
					removeRichNode: ue
				}, void 0, !0)
			], 8, Wt),
			f(rt, {
				open: L.value,
				anchor: ee.value,
				"min-width": 260,
				"z-index": 4500,
				role: "dialog",
				"aria-label": g.value.link,
				"onUpdate:open": pe
			}, {
				default: F(() => [c("form", {
					class: "desc-link-form",
					onSubmit: R(me, ["prevent"])
				}, [
					c("label", $t, [c("span", null, k(g.value.linkText), 1), I(c("input", {
						"onUpdate:modelValue": r[7] ||= (e) => W.text = e,
						type: "text",
						placeholder: g.value.linkTextPlaceholder
					}, null, 8, en), [[N, W.text]])]),
					c("label", tn, [c("span", null, k(g.value.linkUrl), 1), I(c("input", {
						ref_key: "linkUrlInput",
						ref: M,
						"onUpdate:modelValue": r[8] ||= (e) => W.url = e,
						type: "text",
						inputmode: "url",
						placeholder: "https://…"
					}, null, 512), [[N, W.url]])]),
					U.value ? (C(), s("span", nn, k(g.value.linkInvalid), 1)) : o("", !0),
					c("div", rn, [
						z.value ? (C(), s("button", {
							key: 0,
							type: "button",
							class: "desc-link-remove",
							onClick: he
						}, k(g.value.removeLink), 1)) : o("", !0),
						c("button", {
							type: "button",
							class: "desc-link-cancel",
							onClick: r[9] ||= (e) => pe(!1)
						}, k(g.value.cancel), 1),
						c("button", an, k(g.value.saveLink), 1)
					])
				], 32)]),
				_: 1
			}, 8, [
				"open",
				"anchor",
				"aria-label"
			]),
			c("div", {
				ref_key: "editorEl",
				ref: A,
				class: "desc-editor",
				contenteditable: "true",
				spellcheck: "false",
				translate: "no",
				autocorrect: "off",
				"data-placeholder": t.placeholder,
				"aria-label": t.ariaLabel || t.placeholder,
				onInput: be,
				onKeydown: X,
				onKeyup: ie,
				onMouseup: ie,
				onClick: ge,
				onPaste: Q,
				onDrop: Ae,
				onFocus: r[10] ||= (e) => n.$emit("focus", e),
				onBlur: je
			}, null, 40, on)
		], 64)) : t.modelValue ? (C(), a(Ht, {
			key: 1,
			class: "desc-view",
			html: t.modelValue
		}, l({ _: 2 }, [n.$slots.node ? {
			name: "node",
			fn: F((e) => [D(n.$slots, "node", y(m(e)), void 0, !0)]),
			key: "0"
		} : void 0]), 1032, ["html"])) : (C(), s("div", sn, k(t.placeholder), 1))]));
	}
}, [["__scopeId", "data-v-feac13b3"]]), ln = [
	"aria-label",
	"aria-expanded",
	"disabled"
], un = {
	class: "share-account-avatar",
	"aria-hidden": "true"
}, dn = {
	key: 0,
	class: "share-account-label"
}, fn = {
	key: 1,
	class: "share-account-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true"
}, pn = /*#__PURE__*/ z({
	__name: "AccountMenu",
	props: {
		label: {
			type: String,
			default: ""
		},
		avatarText: {
			type: String,
			default: ""
		},
		expanded: {
			type: Boolean,
			default: !0
		},
		title: {
			type: String,
			default: "Account actions"
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = i(() => (t.avatarText || t.label.trim().charAt(0) || "?").toUpperCase());
		return (t, r) => (C(), a(qe, {
			title: e.title,
			disabled: e.disabled,
			block: ""
		}, {
			trigger: F(({ open: i }) => [c("button", {
				type: "button",
				class: v(["share-account-trigger", {
					"share-account-trigger--expanded": e.expanded,
					"share-account-trigger--open": i
				}]),
				"aria-label": e.ariaLabel || e.label || e.title,
				"aria-expanded": i,
				"aria-haspopup": "menu",
				disabled: e.disabled
			}, [
				c("span", un, [D(t.$slots, "avatar", {}, () => [d(k(n.value), 1)], !0)]),
				e.expanded ? (C(), s("span", dn, k(e.label), 1)) : o("", !0),
				e.expanded ? (C(), s("svg", fn, [...r[0] ||= [c("path", {
					d: "m4 6 4 4 4-4",
					stroke: "currentColor",
					"stroke-width": "1.7",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, null, -1)]])) : o("", !0)
			], 10, ln)]),
			default: F(({ close: e }) => [D(t.$slots, "default", { close: e }, void 0, !0)]),
			_: 3
		}, 8, ["title", "disabled"]));
	}
}, [["__scopeId", "data-v-e71617a9"]]), mn = {
	key: 1,
	class: "share-app-shell__rail"
}, hn = /*#__PURE__*/ z({
	__name: "AppShell",
	props: {
		sidebarMode: {
			type: String,
			default: "column",
			validator: (e) => ["column", "fixed"].includes(e)
		},
		sidebarVisible: {
			type: Boolean,
			default: !0
		},
		mobileBreakpoint: {
			type: Number,
			default: 768,
			validator: (e) => [640, 768].includes(e)
		},
		contentTag: {
			type: String,
			default: "main"
		},
		railWidth: {
			type: [Number, String],
			default: 0
		},
		canvas: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, n = i(() => ({ "--share-shell-rail-w": typeof t.railWidth == "number" ? `${t.railWidth}px` : t.railWidth }));
		return (t, r) => (C(), s("div", {
			class: v(["share-app-shell", [
				`share-app-shell--${e.sidebarMode}`,
				`share-app-shell--breakpoint-${e.mobileBreakpoint}`,
				{
					"share-app-shell--without-sidebar": !e.sidebarVisible,
					"share-app-canvas": e.canvas
				}
			]]),
			style: b(n.value)
		}, [
			e.sidebarVisible ? D(t.$slots, "sidebar", {}, void 0, !0, 0) : o("", !0),
			(C(), a(O(e.contentTag), { class: "share-app-shell__content" }, {
				default: F(() => [D(t.$slots, "default", {}, void 0, !0)]),
				_: 3
			})),
			t.$slots.rail ? (C(), s("aside", mn, [D(t.$slots, "rail", {}, void 0, !0)])) : o("", !0),
			D(t.$slots, "overlay", {}, void 0, !0)
		], 6));
	}
}, [["__scopeId", "data-v-db4502d8"]]), gn = ["aria-label", "title"], _n = {
	class: "share-sidebar-toggle__icon sidebar-icon",
	"aria-hidden": "true"
}, vn = {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none"
}, yn = {
	key: 0,
	d: "m11 6-3 3 3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, bn = {
	key: 1,
	d: "m9 6 3 3-3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, xn = { class: "share-sidebar-label sidebar-label" }, Sn = /*#__PURE__*/ z({
	__name: "SidebarToggle",
	props: {
		expanded: {
			type: Boolean,
			default: !1
		},
		expandLabel: {
			type: String,
			default: "Expand sidebar"
		},
		collapseLabel: {
			type: String,
			default: "Collapse sidebar"
		}
	},
	setup(e) {
		return (t, n) => (C(), s("button", {
			type: "button",
			class: "share-sidebar-toggle sidebar-toggle",
			"aria-label": e.expanded ? e.collapseLabel : e.expandLabel,
			title: e.expanded ? e.collapseLabel : e.expandLabel
		}, [c("span", _n, [(C(), s("svg", vn, [
			n[0] ||= c("rect", {
				x: "2.25",
				y: "2.25",
				width: "13.5",
				height: "13.5",
				rx: "2",
				stroke: "currentColor",
				"stroke-width": "1.5"
			}, null, -1),
			n[1] ||= c("path", {
				d: "M6.25 2.75v12.5",
				stroke: "currentColor",
				"stroke-width": "1.5"
			}, null, -1),
			e.expanded ? (C(), s("path", yn)) : (C(), s("path", bn))
		]))]), c("span", xn, k(e.expanded ? e.collapseLabel : e.expandLabel), 1)], 8, gn));
	}
}, [["__scopeId", "data-v-82e613bd"]]), Cn = {
	key: 0,
	class: "share-sidebar-head"
}, wn = ["aria-label"], Tn = {
	key: 1,
	class: "share-sidebar-tools"
}, En = {
	key: 2,
	class: "share-sidebar-account"
}, Dn = /*#__PURE__*/ z({
	__name: "AppSidebar",
	props: {
		modelValue: {
			type: Boolean,
			default: void 0
		},
		defaultExpanded: {
			type: Boolean,
			default: !1
		},
		storageKey: {
			type: String,
			default: ""
		},
		position: {
			type: String,
			default: "fixed",
			validator: (e) => ["fixed", "sticky"].includes(e)
		},
		mobileMode: {
			type: String,
			default: "hide",
			validator: (e) => ["hide", "top"].includes(e)
		},
		mobileBreakpoint: {
			type: Number,
			default: 768,
			validator: (e) => [640, 768].includes(e)
		},
		ariaLabel: {
			type: String,
			default: "Main navigation"
		},
		showToggle: {
			type: Boolean,
			default: !0
		},
		expandLabel: {
			type: String,
			default: "Expand sidebar"
		},
		collapseLabel: {
			type: String,
			default: "Collapse sidebar"
		}
	},
	emits: ["update:modelValue", "change"],
	setup(e, { expose: t, emit: n }) {
		let r = e, l = n;
		function u() {
			if (!r.storageKey || typeof window > "u") return r.defaultExpanded;
			try {
				let e = window.localStorage.getItem(r.storageKey);
				return e == null ? r.defaultExpanded : e === "true";
			} catch {
				return r.defaultExpanded;
			}
		}
		let d = T(u()), f = i({
			get: () => r.modelValue ?? d.value,
			set: (e) => {
				d.value = e, l("update:modelValue", e), l("change", e);
			}
		});
		P(f, (e) => {
			if (!(!r.storageKey || typeof window > "u")) try {
				window.localStorage.setItem(r.storageKey, String(e));
			} catch {}
		});
		function p() {
			f.value = !0;
		}
		function m() {
			f.value = !1;
		}
		function h() {
			f.value = !f.value;
		}
		return t({
			expanded: f,
			expand: p,
			collapse: m,
			toggle: h
		}), (t, n) => (C(), s("aside", { class: v(["share-app-sidebar app-sidebar", [
			f.value && "share-app-sidebar--expanded app-sidebar--expanded",
			`share-app-sidebar--${e.position}`,
			`share-app-sidebar--mobile-${e.mobileMode}`,
			`share-app-sidebar--breakpoint-${e.mobileBreakpoint}`
		]]) }, [
			t.$slots.brand ? (C(), s("div", Cn, [D(t.$slots, "brand", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			c("nav", {
				class: "share-sidebar-nav",
				"aria-label": e.ariaLabel
			}, [D(t.$slots, "default", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)], 8, wn),
			e.showToggle || t.$slots.tools ? (C(), s("div", Tn, [e.showToggle ? (C(), a(Sn, {
				key: 0,
				expanded: f.value,
				"expand-label": e.expandLabel,
				"collapse-label": e.collapseLabel,
				onClick: h
			}, null, 8, [
				"expanded",
				"expand-label",
				"collapse-label"
			])) : o("", !0), D(t.$slots, "tools", {
				expanded: f.value,
				expand: p,
				collapse: m,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			t.$slots.account ? (C(), s("div", En, [D(t.$slots, "account", { expanded: f.value }, void 0, !0)])) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-2025fec5"]]), On = {
	class: "share-sidebar-brand__icon sidebar-brand-icon",
	"aria-hidden": "true"
}, kn = { class: "share-sidebar-label share-sidebar-brand__label sidebar-label sidebar-brand-label" }, An = /*#__PURE__*/ z(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "SidebarBrand",
	props: {
		as: {
			type: [
				String,
				Object,
				Function
			],
			default: "a"
		},
		icon: {
			type: [Object, Function],
			default: null
		},
		label: {
			type: String,
			default: ""
		},
		ariaLabel: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		return (t, n) => (C(), a(O(e.as), g({
			class: "share-sidebar-brand sidebar-brand",
			"aria-label": e.ariaLabel || e.label
		}, t.$attrs), {
			default: F(() => [c("span", On, [D(t.$slots, "icon", {}, () => [e.icon ? (C(), a(O(e.icon), {
				key: 0,
				size: 22,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", kn, [D(t.$slots, "default", {}, () => [d(k(e.label), 1)], !0)])]),
			_: 3
		}, 16, ["aria-label"]));
	}
}), [["__scopeId", "data-v-a9c8581a"]]), jn = { class: "share-sidebar-group" }, Mn = /*#__PURE__*/ z({
	__name: "SidebarGroup",
	props: { label: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (C(), s("div", jn, [D(t.$slots, "default", {}, () => [d(k(e.label), 1)], !0)]));
	}
}, [["__scopeId", "data-v-169df1ac"]]), Nn = {
	class: "share-sidebar-icon sidebar-icon",
	"aria-hidden": "true"
}, Pn = { class: "share-sidebar-label sidebar-label" }, Fn = /*#__PURE__*/ z(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "SidebarNavItem",
	props: {
		as: {
			type: [
				String,
				Object,
				Function
			],
			default: "a"
		},
		icon: {
			type: [Object, Function],
			default: null
		},
		label: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		active: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, n) => (C(), a(O(e.as), g({
			class: ["share-sidebar-link sidebar-link", { active: e.active }],
			title: e.title || e.label,
			"aria-current": e.active ? "page" : void 0
		}, t.$attrs), {
			default: F(() => [c("span", Nn, [D(t.$slots, "icon", {}, () => [e.icon ? (C(), a(O(e.icon), {
				key: 0,
				size: 20,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", Pn, [D(t.$slots, "default", {}, () => [d(k(e.label), 1)], !0)])]),
			_: 3
		}, 16, [
			"class",
			"title",
			"aria-current"
		]));
	}
}), [["__scopeId", "data-v-28979fe2"]]), In = {
	key: 0,
	class: "share-editor-panel__title"
}, Ln = /*#__PURE__*/ z({
	__name: "EditorPanel",
	props: {
		title: {
			type: String,
			default: ""
		},
		compact: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, n) => (C(), s("div", { class: v(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (C(), s("div", In, [D(t.$slots, "title", {}, () => [d(k(e.title), 1)], !0)])) : o("", !0), D(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-055dcd8d"]]), Rn = { class: "share-editor-section-title" }, zn = { class: "share-editor-section-title__text" }, Bn = {
	key: 0,
	class: "share-editor-section-title__actions"
}, Vn = /*#__PURE__*/ z({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (C(), s("div", Rn, [c("span", zn, [D(t.$slots, "default", {}, () => [d(k(e.title), 1)], !0)]), t.$slots.actions ? (C(), s("span", Bn, [D(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)]));
	}
}, [["__scopeId", "data-v-03237796"]]), Hn = { class: "share-editor-section" }, Un = /*#__PURE__*/ z({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (C(), s("section", Hn, [e.title || t.$slots.title ? (C(), a(Vn, {
			key: 0,
			title: e.title
		}, l({ _: 2 }, [t.$slots.title ? {
			name: "default",
			fn: F(() => [D(t.$slots, "title", {}, void 0, !0)]),
			key: "0"
		} : void 0, t.$slots.actions ? {
			name: "actions",
			fn: F(() => [D(t.$slots, "actions", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, ["title"])) : o("", !0), D(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-6a56d656"]]), Wn = {}, Gn = { class: "share-editor-total" };
function Kn(e, t) {
	return C(), s("div", Gn, [D(e.$slots, "default", {}, void 0, !0)]);
}
var qn = /*#__PURE__*/ z(Wn, [["render", Kn], ["__scopeId", "data-v-72dfd940"]]);
//#endregion
//#region src/composables/useFullscreenViewportHeight.js
function Jn(e = .94) {
	let t = T(`${Math.round(e * 100)}dvh`);
	function n() {
		if (typeof window > "u") return;
		let n = window.visualViewport?.height || window.innerHeight;
		t.value = `${Math.floor(n * e)}px`;
	}
	return S(() => {
		n(), window.addEventListener("resize", n), window.visualViewport?.addEventListener("resize", n);
	}), x(() => {
		window.removeEventListener("resize", n), window.visualViewport?.removeEventListener("resize", n);
	}), t;
}
//#endregion
//#region src/internal/overlayStack.js
var Yn = [], Xn = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", Zn = 0, Qn = "";
function $n(e = Symbol("share-overlay")) {
	return Yn.push(e), e;
}
function er(e) {
	let t = Yn.lastIndexOf(e);
	t >= 0 && Yn.splice(t, 1);
}
function tr(e) {
	return Yn.at(-1) === e;
}
function nr(e) {
	e && ([...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")].find((e) => e.getClientRects().length > 0) || e).focus?.({ preventScroll: !0 });
}
function rr(e, t) {
	if (e.key !== "Tab" || !t) return;
	let n = [...t.querySelectorAll(Xn)].filter((e) => e.getClientRects().length > 0);
	if (!n.length) {
		e.preventDefault(), t.focus?.({ preventScroll: !0 });
		return;
	}
	let r = n[0], i = n.at(-1);
	e.shiftKey && (document.activeElement === r || !t.contains(document.activeElement)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || !t.contains(document.activeElement)) && (e.preventDefault(), r.focus());
}
function ir(e) {
	e instanceof HTMLElement && e.isConnected && e.focus({ preventScroll: !0 });
}
function ar() {
	if (typeof document > "u") return () => {};
	Zn === 0 && (Qn = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden"), Zn += 1;
	let e = !1;
	return () => {
		e || (e = !0, Zn = Math.max(0, Zn - 1), Zn === 0 && (document.documentElement.style.overflow = Qn));
	};
}
var or = /* @__PURE__ */ new WeakMap();
function sr(e, { blur: t = "8px", duration: n = "300ms" } = {}) {
	if (!e) return () => {};
	let r = or.get(e);
	r || (r = {
		count: 0,
		filter: e.style.filter,
		transition: e.style.transition
	}, or.set(e, r)), r.count += 1, e.style.transition = `filter ${n} ease`, e.style.filter = `blur(${t})`;
	let i = !1;
	return () => {
		i || (i = !0, r.count = Math.max(0, r.count - 1), !(r.count > 0) && (e.style.filter = r.filter, e.style.transition = r.transition, or.delete(e)));
	};
}
//#endregion
//#region src/components/overlay/AppModal.vue
var cr = ["aria-label"], lr = {
	key: 0,
	class: "am-handle"
}, ur = ["aria-label"], dr = () => window.innerWidth <= 640, fr = 260, $ = 280, pr = "cubic-bezier(0.32, 0.72, 0, 1)", mr = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function hr(e) {
	e.focus({ preventScroll: !0 });
}
var gr = /*#__PURE__*/ z({
	__name: "AppModal",
	props: {
		zIndex: {
			type: Number,
			default: 3e3
		},
		wide: {
			type: Boolean,
			default: !1
		},
		extraWide: {
			type: Boolean,
			default: !1
		},
		fullscreen: {
			type: Boolean,
			default: !1
		},
		showClose: {
			type: Boolean,
			default: !0
		},
		showHandle: {
			type: Boolean,
			default: !0
		},
		dismissible: {
			type: Boolean,
			default: !0
		},
		flush: {
			type: Boolean,
			default: !1
		},
		width: {
			type: [Number, String],
			default: ""
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		closeLabel: {
			type: String,
			default: "Close"
		},
		escapeBlursInput: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["close", "opened"],
	setup(e, { expose: n, emit: r }) {
		let l = e, u = r, d = T(null), f = T(null), p = Jn(), m = i(() => typeof l.width == "number" ? `${l.width}px` : l.width || "480px"), h = T(!1), g = T(0), y = T(0), w = T(0), E = !1, O = null, k = !1, j = () => {}, M = Symbol("app-modal"), N = typeof document < "u" ? document.activeElement : null;
		function P(e) {
			if (!tr(M)) return;
			if (e.key === "Escape") {
				let t = e.target;
				if (l.escapeBlursInput && t && (t.matches?.("input, textarea, select") || t.isContentEditable)) {
					e.preventDefault(), t.blur();
					return;
				}
				L();
				return;
			}
			if (e.key !== "Tab") return;
			let t = [...f.value?.querySelectorAll(mr) || []].filter((e) => e.getClientRects().length > 0);
			if (!t.length) {
				e.preventDefault(), f.value?.focus();
				return;
			}
			let n = t[0], r = t.at(-1);
			e.shiftKey && (document.activeElement === n || !f.value?.contains(document.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (document.activeElement === r || !f.value?.contains(document.activeElement)) && (e.preventDefault(), n.focus());
		}
		function F() {
			let e = d.value, t = f.value;
			!e || !t || (e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", dr() ? t.style.transform = "translateY(100%)" : (t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					let n = "cubic-bezier(0, 0, 0.4, 1)", r = `opacity ${fr}ms ${n}, backdrop-filter ${fr}ms ${n}, -webkit-backdrop-filter ${fr}ms ${n}`;
					e.style.transition = r, e.style.opacity = "1", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", dr() ? (t.style.transition = `transform ${fr}ms ${pr}`, t.style.transform = "translateY(0)") : (t.style.transition = `transform ${fr}ms ${pr}, opacity ${fr}ms ${n}`, t.style.transform = "none", t.style.opacity = "1"), setTimeout(() => {
						E || (e.style.transition = "", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", t.style.transition = "", t.style.transform = "", t.style.opacity = "", u("opened"));
					}, 310);
				});
			}));
		}
		function I() {
			let e = d.value, t = f.value;
			if (!e || !t) {
				O = setTimeout(() => {
					E || u("close");
				}, 0);
				return;
			}
			let n = `opacity ${$}ms ease, backdrop-filter ${$}ms ease, -webkit-backdrop-filter ${$}ms ease`;
			e.style.transition = n, e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", dr() ? (t.style.transition = `transform ${$}ms ${pr}`, t.style.transform = "translateY(100%)") : (t.style.transition = `transform ${$}ms ease, opacity ${$}ms ease`, t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), O = setTimeout(() => {
				E || u("close");
			}, 300);
		}
		function L() {
			!l.dismissible || k || (k = !0, I());
		}
		n({ requestClose: L });
		function z(e) {
			if (!l.dismissible) return;
			y.value = e.touches[0].clientY;
			let t = e.target instanceof Element ? e.target : null;
			for (; t && t !== f.value;) {
				let e = window.getComputedStyle(t);
				if (/(auto|scroll)/.test(e.overflowY) && t.scrollHeight > t.clientHeight) break;
				t = t.parentElement;
			}
			w.value = t?.scrollTop || f.value?.scrollTop || 0, h.value = !1, g.value = 0;
		}
		function B(e) {
			if (!l.dismissible) return;
			let t = e.touches[0].clientY - y.value;
			if (!h.value) {
				if (t > 8 && w.value <= 0) h.value = !0;
				else return;
			}
			e.preventDefault(), g.value = Math.max(0, t);
			let n = f.value, r = d.value;
			n && (n.style.transition = "none", n.style.transform = `translateY(${g.value}px)`), r && (r.style.transition = "none", r.style.opacity = String(Math.max(0, 1 - g.value / 320)));
		}
		function V() {
			if (!h.value) return;
			h.value = !1;
			let e = f.value, t = d.value;
			g.value > 100 ? (e && (e.style.transition = `transform ${$}ms ${pr}`, e.style.transform = "translateY(100%)"), t && (t.style.transition = `opacity ${$}ms ease`, t.style.opacity = "0"), O = setTimeout(() => {
				E || u("close");
			}, 300)) : (e && (e.style.transition = `transform ${$}ms ${pr}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), g.value = 0, setTimeout(() => {
				E || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330));
		}
		function H() {
			if (!h.value) return;
			h.value = !1, g.value = 0;
			let e = f.value, t = d.value;
			e && (e.style.transition = `transform ${$}ms ${pr}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), setTimeout(() => {
				E || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330);
		}
		return S(() => {
			$n(M), j = ar(), document.addEventListener("keydown", P), _(() => {
				F(), f.value?.contains(document.activeElement) || (f.value?.querySelector(mr)?.focus(), f.value?.contains(document.activeElement) || f.value?.focus());
			});
		}), x(() => {
			er(M), j(), document.removeEventListener("keydown", P), clearTimeout(O), E = !0, N instanceof HTMLElement && N.isConnected && hr(N);
		}), (n, r) => (C(), a(t, { to: "body" }, [c("div", {
			ref_key: "overlay",
			ref: d,
			class: "am-overlay",
			style: b([e.zIndex === 3e3 ? {} : { zIndex: e.zIndex }, {
				"--am-fullscreen-height": A(p),
				"--am-width": m.value
			}]),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			onMousedown: R(L, ["self"])
		}, [c("div", {
			ref_key: "card",
			ref: f,
			class: v(["am-card", {
				"am-card-wide": e.wide,
				"am-card-extra-wide": e.extraWide,
				"am-card-full": e.fullscreen,
				"am-card-flush": e.flush
			}]),
			tabindex: "-1",
			onTouchstartPassive: z,
			onTouchmove: B,
			onTouchendPassive: V,
			onTouchcancelPassive: H
		}, [
			e.showHandle ? (C(), s("div", lr)) : o("", !0),
			e.showClose && !e.fullscreen ? (C(), s("button", {
				key: 1,
				class: "am-close",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: L
			}, "✕", 8, ur)) : o("", !0),
			D(n.$slots, "default", {}, void 0, !0)
		], 34)], 44, cr)]));
	}
}, [["__scopeId", "data-v-ddded319"]]), _r = { class: "aem-shell" }, vr = { class: "aem-heading" }, yr = { class: "aem-title" }, br = {
	key: 0,
	class: "aem-subtitle"
}, xr = {
	key: 0,
	class: "aem-header-actions"
}, Sr = ["aria-label"], Cr = {
	key: 0,
	class: "aem-footer"
}, wr = /*#__PURE__*/ z({
	__name: "AppModalFrame",
	props: {
		title: {
			type: String,
			default: ""
		},
		subtitle: {
			type: [String, Number],
			default: ""
		},
		wide: {
			type: Boolean,
			default: !1
		},
		extraWide: {
			type: Boolean,
			default: !1
		},
		fullscreen: {
			type: Boolean,
			default: !1
		},
		padded: {
			type: Boolean,
			default: !0
		},
		bodyScroll: {
			type: Boolean,
			default: !0
		},
		dismissible: {
			type: Boolean,
			default: !0
		},
		showClose: {
			type: Boolean,
			default: !0
		},
		zIndex: {
			type: Number,
			default: 3e3
		},
		width: {
			type: [Number, String],
			default: ""
		},
		closeLabel: {
			type: String,
			default: "Close"
		}
	},
	emits: ["close", "opened"],
	setup(e) {
		let t = T(null);
		function n() {
			t.value?.requestClose();
		}
		return (r, i) => (C(), a(gr, {
			ref_key: "modal",
			ref: t,
			flush: "",
			wide: e.wide,
			"extra-wide": e.extraWide,
			fullscreen: e.fullscreen,
			"show-close": !1,
			"show-handle": !1,
			dismissible: e.dismissible,
			"z-index": e.zIndex,
			width: e.width,
			"aria-label": e.title,
			"close-label": e.closeLabel,
			onClose: i[0] ||= (e) => r.$emit("close"),
			onOpened: i[1] ||= (e) => r.$emit("opened")
		}, {
			default: F(() => [c("section", _r, [
				c("header", { class: v(["aem-header", { "aem-header-with-actions": !!r.$slots["header-actions"] }]) }, [
					i[3] ||= c("span", {
						class: "aem-handle",
						"aria-hidden": "true"
					}, null, -1),
					c("div", vr, [D(r.$slots, "title", {}, () => [c("h2", yr, k(e.title), 1), e.subtitle ? (C(), s("span", br, k(e.subtitle), 1)) : o("", !0)], !0)]),
					r.$slots["header-actions"] ? (C(), s("div", xr, [D(r.$slots, "header-actions", {}, void 0, !0)])) : o("", !0),
					e.showClose ? (C(), s("button", {
						key: 1,
						class: "aem-close",
						type: "button",
						"aria-label": e.closeLabel,
						onClick: n
					}, [...i[2] ||= [c("svg", {
						viewBox: "0 0 16 16",
						fill: "none",
						width: "16",
						height: "16",
						"aria-hidden": "true"
					}, [c("path", {
						d: "M4 4l8 8M12 4l-8 8",
						stroke: "currentColor",
						"stroke-width": "1.6",
						"stroke-linecap": "round"
					})], -1)]], 8, Sr)) : o("", !0)
				], 2),
				c("div", { class: v(["aem-body", {
					"aem-body-flush": !e.padded,
					"aem-body-no-scroll": !e.bodyScroll
				}]) }, [D(r.$slots, "default", {}, void 0, !0)], 2),
				r.$slots.footer ? (C(), s("footer", Cr, [D(r.$slots, "footer", {}, void 0, !0)])) : o("", !0)
			])]),
			_: 3
		}, 8, [
			"wide",
			"extra-wide",
			"fullscreen",
			"dismissible",
			"z-index",
			"width",
			"aria-label",
			"close-label"
		]));
	}
}, [["__scopeId", "data-v-0a15c618"]]), Tr = {
	key: 0,
	class: "cd-message"
}, Er = { class: "cd-actions" }, Dr = ["disabled"], Or = ["disabled"], kr = /*#__PURE__*/ z({
	__name: "ConfirmDialog",
	props: {
		open: {
			type: Boolean,
			default: null
		},
		title: {
			type: String,
			required: !0
		},
		message: {
			type: String,
			default: ""
		},
		confirmLabel: {
			type: String,
			default: "Подтвердить"
		},
		cancelLabel: {
			type: String,
			default: "Отмена"
		},
		confirmText: {
			type: String,
			default: ""
		},
		cancelText: {
			type: String,
			default: ""
		},
		loadingLabel: {
			type: String,
			default: "Выполняется…"
		},
		loading: {
			type: Boolean,
			default: !1
		},
		variant: {
			type: String,
			default: "danger"
		},
		confirmKind: {
			type: String,
			default: ""
		},
		zIndex: {
			type: Number,
			default: 5e3
		}
	},
	emits: [
		"update:open",
		"confirm",
		"cancel"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, l = i(() => n.open === null || n.open), u = i(() => n.confirmText || n.confirmLabel), d = i(() => n.cancelText || n.cancelLabel), f = i(() => n.confirmKind || n.variant);
		function p() {
			n.open !== null && r("update:open", !1);
		}
		function m() {
			n.loading || (r("cancel"), p());
		}
		function h() {
			n.loading || (r("confirm"), p());
		}
		return (t, n) => l.value ? (C(), a(wr, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: F(() => [c("div", Er, [c("button", {
				type: "button",
				class: "cd-btn-cancel",
				disabled: e.loading,
				onClick: m
			}, k(d.value), 9, Dr), c("button", {
				type: "button",
				class: v(["cd-btn-confirm", `cd-btn--${f.value}`]),
				disabled: e.loading,
				onClick: h
			}, k(e.loading ? e.loadingLabel : u.value), 11, Or)])]),
			default: F(() => [e.message ? (C(), s("div", Tr, k(e.message), 1)) : o("", !0)]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : o("", !0);
	}
}, [["__scopeId", "data-v-2819b01e"]]), Ar = {
	__name: "ModalShell",
	props: {
		open: {
			type: Boolean,
			default: !1
		},
		width: {
			type: [Number, String],
			default: 420
		},
		zIndex: {
			type: Number,
			default: 3e3
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		dismissible: {
			type: Boolean,
			default: !0
		},
		escapeBlursInput: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["close", "opened"],
	setup(e) {
		return (t, n) => e.open ? (C(), a(gr, {
			key: 0,
			width: e.width,
			"z-index": e.zIndex,
			"aria-label": e.ariaLabel,
			dismissible: e.dismissible,
			"show-close": !1,
			"show-handle": !1,
			"escape-blurs-input": e.escapeBlursInput,
			onClose: n[0] ||= (e) => t.$emit("close"),
			onOpened: n[1] ||= (e) => t.$emit("opened")
		}, {
			default: F(() => [D(t.$slots, "default")]),
			_: 3
		}, 8, [
			"width",
			"z-index",
			"aria-label",
			"dismissible",
			"escape-blurs-input"
		])) : o("", !0);
	}
};
//#endregion
//#region src/composables/useContainerMorph.js
function jr({ open: e = 420, close: t = 300 } = {}) {
	let n = "cubic-bezier(.2, 0, 0, 1)", r = "var(--shadow-lg)", i = [
		"position",
		"margin",
		"left",
		"top",
		"width",
		"height",
		"maxHeight",
		"overflow",
		"borderRadius",
		"boxShadow",
		"transition"
	], a = T(!1), o = T(!1), s = null;
	function c(e, t, r, i) {
		e.style.position = "fixed", e.style.margin = "0", e.style.left = `${t.left}px`, e.style.top = `${t.top}px`, e.style.width = `${t.width}px`, e.style.height = `${t.height}px`, e.style.maxHeight = "none", e.style.overflow = "hidden", e.style.transition = r ? `left ${i}ms ${n}, top ${i}ms ${n}, width ${i}ms ${n}, height ${i}ms ${n}, border-radius ${i}ms ${n}, box-shadow ${i}ms ${n}` : "none";
	}
	function l(e) {
		i.forEach((t) => e.style.removeProperty(t.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase())));
	}
	function u(t, n, { fromRadius: i = "0px", toRadius: u = "0px" } = {}) {
		if (clearTimeout(s), !t || !n) {
			a.value = !0;
			return;
		}
		o.value = !0;
		let d = t.getBoundingClientRect();
		c(t, n, !1, e), t.style.borderRadius = i, t.style.boxShadow = "none", t.offsetWidth, a.value = !0, c(t, d, !0, e), t.style.borderRadius = u, t.style.boxShadow = r, s = setTimeout(() => {
			l(t), o.value = !1;
		}, e + 20);
	}
	function d(e, n, { fromRadius: i = "0px", toRadius: l = "0px" } = {}, u = () => {}) {
		if (clearTimeout(s), !e || !n) {
			a.value = !1, s = setTimeout(u, 240);
			return;
		}
		o.value = !0, c(e, e.getBoundingClientRect(), !1, t), e.style.borderRadius = i, e.style.boxShadow = r, e.offsetWidth, a.value = !1, c(e, n, !0, t), e.style.borderRadius = l, e.style.boxShadow = "none", s = setTimeout(u, t);
	}
	return {
		EASE: n,
		visible: a,
		morphing: o,
		playOpen: u,
		playClose: d
	};
}
//#endregion
//#region src/components/overlay/MorphSheet.vue
var Mr = ["aria-label"], Nr = { class: "ms-head-content" }, Pr = ["aria-label"], Fr = 320, Ir = 260, Lr = "8px", Rr = /*#__PURE__*/ z({
	__name: "MorphSheet",
	props: {
		mode: {
			type: String,
			default: "edit"
		},
		originRect: {
			type: Object,
			default: null
		},
		originEl: {
			type: Object,
			default: null
		},
		originRadius: {
			type: String,
			default: "var(--r-lg)"
		},
		width: {
			type: Number,
			default: 440
		},
		showBack: {
			type: Boolean,
			default: !1
		},
		nav: {
			type: Object,
			default: null
		},
		frameColor: {
			type: String,
			default: ""
		},
		backgroundTarget: {
			type: [String, Object],
			default: "#app"
		},
		blurBackground: {
			type: Boolean,
			default: !0
		},
		zIndex: {
			type: Number,
			default: 1e3
		},
		ariaLabel: {
			type: String,
			default: ""
		},
		showFoot: {
			type: Boolean,
			default: !1
		},
		showClose: {
			type: Boolean,
			default: null
		},
		closeLabel: {
			type: String,
			default: "Close"
		}
	},
	emits: ["close", "back"],
	setup(e, { expose: n, emit: r }) {
		let l = e, u = r, d = tt(), f = M(), p = i(() => l.mode === "add"), m = i(() => l.showClose === null ? !!f.head : l.showClose), h = i(() => l.nav ? l.nav.view.value : "detail"), g = i(() => l.nav ? l.nav.detailStyle.value : null), y = i(() => l.nav ? l.nav.subStyle.value : null), w = i(() => !!l.nav && h.value !== "detail"), E = T(null), O = T(null), k = T(null), j = T(null), N = T(null), F = T(null), I = T(!1), L = T(!1), z = T(!1), B = T(!1), V = T(!1), { EASE: H, visible: U, morphing: W, playClose: ee, playOpen: te } = jr(), ne = () => d.value ? "0px" : "18px", re = i(() => ({
			"--ms-w": `${l.width}px`,
			"--ms-body-w": `${l.width}px`,
			"--ms-frame": l.frameColor || void 0
		}));
		function ie() {
			let e = l.originEl;
			if (!e) return l.originRect;
			let t = e.getBoundingClientRect();
			return {
				left: t.left,
				top: t.top,
				width: t.width,
				height: t.height
			};
		}
		function ae() {
			if (l.nav && h.value !== "detail") {
				l.nav.backToDetail(), u("back");
				return;
			}
			if (V.value = !1, Oe(!1), p.value) {
				z.value = !1, U.value = !1, setTimeout(() => u("close"), 320);
				return;
			}
			ee(E.value, ie(), {
				fromRadius: ne(),
				toRadius: l.originRadius
			}, () => u("close"));
		}
		function oe() {
			L.value = !0, V.value = !1, U.value = !1, Oe(!1), setTimeout(() => u("close"), 220);
		}
		let se = Symbol("morph-sheet"), ce = typeof document < "u" ? document.activeElement : null;
		function le(e) {
			if (tr(se)) {
				if (e.key === "Escape") {
					ae();
					return;
				}
				rr(e, E.value);
			}
		}
		function ue(e) {
			let t = e?.firstElementChild;
			return t ? t.scrollHeight : e?.scrollHeight || 0;
		}
		function de() {
			return Math.floor(window.innerHeight * .9) - (O.value?.offsetHeight || 0) - (k.value?.offsetHeight || 0);
		}
		function G(e) {
			if (d.value || !j.value || W.value) return;
			let t = l.nav ? l.nav.pos.value : 0, n = ue(N.value), r = F.value ? ue(F.value) : n, i = n * (1 - t) + r * t, a = Math.min(i, Math.max(120, de()));
			j.value.style.transition = e ? `height ${Fr}ms ${H}` : "none", j.value.style.height = `${a}px`;
		}
		let K = null;
		function fe() {
			K && (K.disconnect(), [N.value?.firstElementChild, F.value?.firstElementChild].forEach((e) => {
				e && K.observe(e);
			}));
		}
		function pe() {
			W.value || l.nav && l.nav.animating.value || he || G(!1);
		}
		l.nav && (P(() => l.nav.pos.value, () => G(l.nav.animating.value)), P(() => l.nav.view.value, (e, t) => _(() => {
			fe(), e !== "detail" && t === "detail" && F.value && (F.value.offsetWidth, l.nav.enterSub()), l.nav.animating.value || G(!1);
		})));
		let me = T(0), he = !1, ge = 0, _e = 0, q = null, J = 0, ve = null, ye = 0, be = 0, xe = 0;
		function Y(e) {
			!d.value || W.value || (ge = e.touches[0].clientX, _e = e.touches[0].clientY, ve = e.target, q = null);
		}
		function Se() {
			let e = ve;
			for (; e && e !== E.value;) {
				if (e.scrollHeight > e.clientHeight + 1) {
					let t = getComputedStyle(e).overflowY;
					if ((t === "auto" || t === "scroll") && e.scrollTop > 0) return !1;
				}
				e = e.parentElement;
			}
			return !0;
		}
		function Ce(e) {
			if (!d.value || W.value || q === "scroll") return;
			let t = e.touches[0].clientX - ge, n = e.touches[0].clientY - _e;
			if (q === null) {
				if (l.showBack && l.nav && t > 8 && Math.abs(t) > Math.abs(n)) {
					q = "back", he = !0, J = t, ye = e.touches[0].clientX, be = e.timeStamp, xe = 0, l.nav.dragStart(j.value?.clientWidth || window.innerWidth);
					return;
				}
				if (n > 6 && Se() && Math.abs(n) >= Math.abs(t)) q = "drag";
				else if (Math.abs(n) > 6 || Math.abs(t) > 6) {
					q = "scroll";
					return;
				} else return;
			}
			if (q === "back") {
				J = Math.max(0, t), e.cancelable && e.preventDefault();
				let n = e.touches[0].clientX, r = e.timeStamp;
				r > be && (xe = (n - ye) / (r - be)), ye = n, be = r, l.nav.dragMove(J);
				return;
			}
			if (q !== "drag") return;
			e.cancelable && e.preventDefault(), me.value = Math.max(0, n);
			let r = E.value;
			r && (r.style.transition = "none", r.style.transform = `translateY(${me.value}px)`);
		}
		function we() {
			if (q === "back") {
				he = !1, q = null, l.nav.dragEnd(J, xe), J = 0, xe = 0;
				return;
			}
			if (q !== "drag") {
				q = null;
				return;
			}
			q = null;
			let e = E.value;
			if (me.value > 120) {
				Te();
				return;
			}
			me.value = 0, e && (e.style.transition = `transform .26s ${H}`, e.style.transform = "translateY(0)");
		}
		function Te() {
			let e = E.value;
			e && (e.style.transition = `transform ${Ir}ms ${H}`, e.style.transform = `translateY(${window.innerHeight}px)`), U.value = !1, V.value = !1, je(), Oe(!1), setTimeout(() => u("close"), Ir);
		}
		let Ee = () => {};
		function De() {
			return typeof l.backgroundTarget == "string" ? document.querySelector(l.backgroundTarget) : l.backgroundTarget instanceof Element ? l.backgroundTarget : null;
		}
		function Oe(e) {
			Ee(), Ee = () => {}, !(!e || d.value || !l.blurBackground) && (Ee = sr(De(), { blur: Lr }));
		}
		let X = "", Z = "", Q = !1;
		function ke() {
			let e = l.originEl;
			e && (X = e.style.opacity, Z = e.style.transition);
		}
		function Ae(e) {
			let t = l.originEl;
			t && (t.style.opacity = e ? "0" : X);
		}
		function je() {
			let e = l.originEl;
			if (!e) return;
			Q = !0;
			let t = Z && Z !== "none" ? `${Z}, ` : "";
			e.style.transition = `${t}opacity ${Ir}ms ease`, e.style.opacity = "0", requestAnimationFrame(() => {
				e.style.opacity = X;
			}), setTimeout(() => {
				e.style.opacity = X, e.style.transition = Z, Q = !1;
			}, 280);
		}
		let Me = () => {};
		function Ne() {
			W.value || (d.value && j.value ? j.value.style.height = "" : G(!1));
		}
		return S(async () => {
			$n(se), Me = ar(), typeof ResizeObserver < "u" && (K = new ResizeObserver(pe)), await _(), G(!1), fe(), I.value = !0, p.value ? (U.value = !0, requestAnimationFrame(() => {
				z.value = !0, B.value = !0;
			})) : (ke(), Ae(!0), te(E.value, l.originRect, {
				fromRadius: l.originRadius,
				toRadius: ne()
			}), requestAnimationFrame(() => {
				B.value = !0;
			})), Oe(!0), setTimeout(() => {
				V.value = !0, G(!1), nr(E.value);
			}, 20), document.addEventListener("keydown", le), window.addEventListener("resize", Ne);
		}), x(() => {
			er(se), Me(), Oe(!1), !p.value && !Q && Ae(!1), document.removeEventListener("keydown", le), window.removeEventListener("resize", Ne), K?.disconnect(), ir(ce);
		}), n({
			close: ae,
			finishNow: oe
		}), (n, r) => (C(), a(t, { to: "body" }, [c("div", {
			class: v(["ms-overlay", { visible: A(U) }]),
			style: b(e.zIndex === 1e3 ? null : { zIndex: e.zIndex }),
			onClick: R(ae, ["self"])
		}, [c("div", {
			ref_key: "panelEl",
			ref: E,
			class: v(["ms-sheet", {
				shown: I.value,
				closing: L.value,
				entered: z.value,
				padded: B.value,
				"add-sheet": p.value,
				"ms-framed": e.frameColor
			}]),
			style: b(re.value),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			tabindex: "-1",
			onTouchstartPassive: Y,
			onTouchmove: Ce,
			onTouchend: we,
			onTouchcancel: we
		}, [
			r[0] ||= c("div", { class: "ms-grab" }, null, -1),
			n.$slots.head ? (C(), s("div", {
				key: 0,
				ref_key: "headEl",
				ref: O,
				class: "ms-head"
			}, [c("div", Nr, [D(n.$slots, "head", {}, void 0, !0)]), m.value ? (C(), s("button", {
				key: 0,
				class: "ms-x",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: ae
			}, "✕", 8, Pr)) : o("", !0)], 512)) : o("", !0),
			c("div", {
				ref_key: "bodyEl",
				ref: j,
				class: "ms-body"
			}, [c("div", {
				ref_key: "detailCellEl",
				ref: N,
				class: "ms-cell",
				style: b(g.value)
			}, [D(n.$slots, "detail", { revealed: V.value }, () => [D(n.$slots, "default", { revealed: V.value }, void 0, !0)], !0)], 4), w.value ? (C(), s("div", {
				key: 0,
				ref_key: "subCellEl",
				ref: F,
				class: "ms-cell",
				style: b(y.value)
			}, [D(n.$slots, "sub", {}, void 0, !0)], 4)) : o("", !0)], 512),
			e.showFoot && n.$slots.foot ? (C(), s("div", {
				key: 1,
				ref_key: "footEl",
				ref: k,
				class: "ms-foot"
			}, [D(n.$slots, "foot", {}, void 0, !0)], 512)) : o("", !0)
		], 46, Mr)], 6)]));
	}
}, [["__scopeId", "data-v-bab5d7c5"]]), zr = { class: "form-actions" }, Br = ["disabled"], Vr = ["disabled"], Hr = /*#__PURE__*/ z({
	__name: "FormActionButtons",
	props: {
		submitText: {
			type: String,
			default: "Сохранить"
		},
		cancelText: {
			type: String,
			default: "Отмена"
		},
		loadingText: {
			type: String,
			default: "Сохранение..."
		},
		loading: {
			type: Boolean,
			default: !1
		},
		canSubmit: {
			type: Boolean,
			default: !0
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["cancel", "submit"],
	setup(e) {
		return (t, n) => (C(), s("div", zr, [c("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, k(e.cancelText), 9, Br), c("button", {
			type: "button",
			class: "form-actions__submit",
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, k(e.loading ? e.loadingText : e.submitText), 9, Vr)]));
	}
}, [["__scopeId", "data-v-4749c971"]]), Ur = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], Wr = /*#__PURE__*/ z({
	__name: "FormTextInput",
	props: {
		value: { default: "" },
		type: {
			type: String,
			default: "text"
		},
		placeholder: {
			type: String,
			default: ""
		},
		maxlength: { default: void 0 },
		autocomplete: {
			type: String,
			default: "off"
		},
		mono: {
			type: Boolean,
			default: !1
		},
		autofocus: {
			type: Boolean,
			default: !1
		},
		invalid: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:value",
		"change",
		"enter"
	],
	setup(e, { expose: t }) {
		let n = e, r = T(null);
		return S(() => {
			n.autofocus && r.value?.focus();
		}), t({ focus: () => r.value?.focus() }), (t, n) => (C(), s("input", {
			ref_key: "inputRef",
			ref: r,
			class: v(["form-text-input", {
				"form-text-input--mono": e.mono,
				"form-text-input--invalid": e.invalid
			}]),
			type: e.type,
			value: e.value,
			placeholder: e.placeholder,
			maxlength: e.maxlength,
			autocomplete: e.autocomplete,
			onInput: n[0] ||= (e) => t.$emit("update:value", e.target.value),
			onChange: n[1] ||= (e) => t.$emit("change", e.target.value),
			onKeydown: n[2] ||= L((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, Ur));
	}
}, [["__scopeId", "data-v-e2d6bc8e"]]), Gr = {
	key: 0,
	class: "tpd-message"
}, Kr = {
	key: 1,
	class: "tpd-label"
}, qr = /*#__PURE__*/ z({
	__name: "TextPromptDialog",
	props: {
		title: {
			type: String,
			required: !0
		},
		open: {
			type: Boolean,
			default: null
		},
		message: {
			type: String,
			default: ""
		},
		value: {
			type: String,
			default: ""
		},
		initial: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
		maxlength: {
			type: Number,
			default: 255
		},
		confirmLabel: {
			type: String,
			default: "Сохранить"
		},
		cancelLabel: {
			type: String,
			default: "Отмена"
		},
		confirmText: {
			type: String,
			default: ""
		},
		cancelText: {
			type: String,
			default: ""
		},
		loadingLabel: {
			type: String,
			default: "Сохранение…"
		},
		loading: {
			type: Boolean,
			default: !1
		},
		zIndex: {
			type: Number,
			default: 5e3
		}
	},
	emits: [
		"update:open",
		"confirm",
		"submit",
		"cancel"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, c = i(() => n.open === null || n.open), l = i(() => n.confirmText || n.confirmLabel), u = i(() => n.cancelText || n.cancelLabel), d = T(n.value || n.initial);
		P(() => n.value, (e) => {
			d.value = e;
		}), P(() => n.open, (e) => {
			e && _(() => {
				d.value = n.initial || n.value;
			});
		});
		function p() {
			n.open !== null && r("update:open", !1);
		}
		function m() {
			n.loading || (r("cancel"), p());
		}
		function h() {
			let e = d.value.trim();
			e && !n.loading && (r("confirm", e), r("submit", e), p());
		}
		return (t, n) => c.value ? (C(), a(wr, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: F(() => [f(Hr, {
				"submit-text": l.value,
				"cancel-text": u.value,
				"loading-text": e.loadingLabel,
				loading: e.loading,
				"can-submit": !!d.value.trim(),
				onCancel: m,
				onSubmit: h
			}, null, 8, [
				"submit-text",
				"cancel-text",
				"loading-text",
				"loading",
				"can-submit"
			])]),
			default: F(() => [
				e.message ? (C(), s("div", Gr, k(e.message), 1)) : o("", !0),
				e.label ? (C(), s("label", Kr, k(e.label), 1)) : o("", !0),
				f(Wr, {
					value: d.value,
					placeholder: e.placeholder,
					maxlength: e.maxlength,
					autofocus: "",
					"onUpdate:value": n[0] ||= (e) => d.value = e,
					onEnter: h
				}, null, 8, [
					"value",
					"placeholder",
					"maxlength"
				])
			]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : o("", !0);
	}
}, [["__scopeId", "data-v-ff9d61bb"]]), Jr = { class: "form-field-label" }, Yr = {
	key: 0,
	class: "form-field-hint"
}, Xr = /*#__PURE__*/ z({
	__name: "FormField",
	props: {
		label: {
			type: String,
			required: !0
		},
		vertical: {
			type: Boolean,
			default: !1
		},
		hint: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		return (t, n) => (C(), s("div", { class: v(["form-field", { "form-field--vertical": e.vertical }]) }, [c("span", Jr, [d(k(e.label), 1), e.hint ? (C(), s("span", Yr, k(e.hint), 1)) : o("", !0)]), D(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-01093950"]]), Zr = { class: "fn-wrap" }, Qr = [
	"value",
	"min",
	"max"
], $r = /*#__PURE__*/ z({
	__name: "FormNumberInput",
	props: {
		value: { default: 0 },
		min: { default: void 0 },
		max: { default: void 0 }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return n.min != null && e < n.min ? n.min : n.max != null && e > n.max ? n.max : e;
		}
		function a(e) {
			r("change", i(parseInt(e.target.value) || 0));
		}
		function o(e) {
			r("change", i((parseInt(n.value) || 0) + e));
		}
		return (t, n) => (C(), s("div", Zr, [
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[0] ||= R((e) => o(-1), ["stop"])
			}, "−"),
			c("input", {
				class: "fn-input",
				type: "number",
				value: e.value,
				min: e.min,
				max: e.max,
				onChange: a
			}, null, 40, Qr),
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[1] ||= R((e) => o(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-df9f8db7"]]), ei = ["value"], ti = /*#__PURE__*/ z({
	__name: "FormSelect",
	props: {
		value: { default: "" },
		autofocus: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:value", "change"],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, a = T(null);
		function o(e) {
			let t = e.target.options[e.target.selectedIndex], n = t && "_value" in t ? t._value : e.target.value;
			i("update:value", n), i("change", n);
		}
		return S(() => {
			r.autofocus && a.value?.focus();
		}), t({ focus: () => a.value?.focus() }), (t, n) => (C(), s("select", {
			ref_key: "selectRef",
			ref: a,
			class: "form-select",
			value: e.value,
			onChange: o
		}, [D(t.$slots, "default", {}, void 0, !0)], 40, ei));
	}
}, [["__scopeId", "data-v-3eb4c36d"]]), ni = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], ri = /*#__PURE__*/ z({
	__name: "FormTextarea",
	props: {
		value: { default: "" },
		placeholder: {
			type: String,
			default: ""
		},
		rows: {
			type: Number,
			default: 3
		},
		maxlength: { default: void 0 }
	},
	emits: ["update:value"],
	setup(e) {
		return (t, n) => (C(), s("textarea", {
			class: "form-textarea",
			value: e.value,
			placeholder: e.placeholder,
			rows: e.rows,
			maxlength: e.maxlength,
			onInput: n[0] ||= (e) => t.$emit("update:value", e.target.value)
		}, null, 40, ni));
	}
}, [["__scopeId", "data-v-31024142"]]), ii = {
	class: "share-inline-edit__measure",
	"aria-hidden": "true"
}, ai = {
	key: 0,
	class: "share-inline-edit__view"
}, oi = { class: "share-inline-edit__value" }, si = ["aria-label", "disabled"], ci = ["onKeydown"], li = [
	"value",
	"aria-label",
	"disabled",
	"aria-invalid"
], ui = ["value", "disabled"], di = [
	"value",
	"aria-label",
	"placeholder",
	"maxlength",
	"required",
	"disabled",
	"aria-invalid"
], fi = {
	key: 2,
	class: "share-inline-edit__actions"
}, pi = ["aria-label", "disabled"], mi = ["aria-label", "disabled"], hi = {
	key: 2,
	class: "share-inline-edit__error",
	role: "alert"
}, gi = /*#__PURE__*/ z({
	__name: "InlineEdit",
	props: {
		modelValue: { default: "" },
		displayValue: { default: void 0 },
		label: {
			type: String,
			required: !0
		},
		placeholder: {
			type: String,
			default: ""
		},
		options: {
			type: Array,
			default: null
		},
		maxlength: {
			type: Number,
			default: 0
		},
		required: Boolean,
		editable: {
			type: Boolean,
			default: !0
		},
		disabled: Boolean,
		forceOpen: Boolean,
		persist: {
			type: Function,
			default: null
		},
		editLabel: {
			type: String,
			default: ""
		},
		confirmLabel: {
			type: String,
			default: "Confirm"
		},
		cancelLabel: {
			type: String,
			default: "Cancel"
		},
		errorLabel: {
			type: String,
			default: "Unable to save"
		}
	},
	emits: [
		"update:modelValue",
		"confirm",
		"cancel"
	],
	setup(t, { emit: n }) {
		let r = t, a = n, l = T(!1), u = T(!1), f = T(""), p = T(r.modelValue), m = T(null), h = T(null), g = i(() => r.forceOpen || l.value), y = (e) => r.options?.find((t) => String(t.value) === String(e))?.label, b = i(() => r.displayValue ?? y(r.modelValue) ?? (r.modelValue === "" || r.modelValue == null ? r.placeholder : r.modelValue)), x = i(() => {
			let e = g.value ? y(p.value) ?? p.value : b.value;
			return e === "" || e == null ? r.placeholder || "\xA0" : String(e);
		});
		P(() => r.modelValue, (e) => {
			l.value || (p.value = e);
		}), P(() => r.forceOpen, () => {
			l.value = !1, p.value = r.modelValue, f.value = "";
		});
		async function S() {
			r.disabled || (p.value = r.modelValue, f.value = "", l.value = !0, await _(), m.value?.focus(), m.value?.select?.());
		}
		function w(e) {
			p.value = r.options ? r.options.find((t) => String(t.value) === e)?.value ?? e : e, r.forceOpen && a("update:modelValue", p.value);
		}
		function O() {
			u.value || r.forceOpen || (l.value = !1, p.value = r.modelValue, f.value = "", a("cancel"), _(() => h.value?.focus()));
		}
		function A(e) {
			e.isComposing || r.forceOpen || (e.preventDefault(), j());
		}
		async function j() {
			if (!(u.value || r.disabled || r.required && !String(p.value ?? "").trim())) {
				u.value = !0, f.value = "";
				try {
					if (r.persist && await r.persist(p.value) === !1) return;
					a("update:modelValue", p.value), a("confirm", p.value), l.value = !1, _(() => h.value?.focus());
				} catch (e) {
					f.value = e?.message || r.errorLabel;
				} finally {
					u.value = !1;
				}
			}
		}
		return (n, r) => (C(), s("span", { class: v(["share-inline-edit", { "share-inline-edit--open": g.value }]) }, [
			c("span", ii, k(x.value), 1),
			g.value ? (C(), s("span", {
				key: 1,
				class: "share-inline-edit__editor",
				onKeydown: [L(R(O, ["stop", "prevent"]), ["esc"]), L(A, ["enter"])]
			}, [t.options ? (C(), s("select", {
				key: 0,
				ref_key: "input",
				ref: m,
				value: p.value,
				"aria-label": t.label,
				disabled: t.disabled || u.value,
				"aria-invalid": !!f.value,
				onChange: r[0] ||= (e) => w(e.target.value)
			}, [(C(!0), s(e, null, E(t.options, (e) => (C(), s("option", {
				key: String(e.value),
				value: e.value,
				disabled: e.disabled
			}, k(e.label), 9, ui))), 128))], 40, li)) : (C(), s("input", {
				key: 1,
				ref_key: "input",
				ref: m,
				value: p.value,
				"aria-label": t.label,
				placeholder: t.placeholder,
				maxlength: t.maxlength || void 0,
				required: t.required,
				disabled: t.disabled || u.value,
				"aria-invalid": !!f.value,
				onInput: r[1] ||= (e) => w(e.target.value)
			}, null, 40, di)), t.forceOpen ? o("", !0) : (C(), s("span", fi, [c("button", {
				type: "button",
				"aria-label": t.confirmLabel,
				disabled: t.disabled || u.value || t.required && !String(p.value ?? "").trim(),
				onClick: j
			}, [...r[3] ||= [c("svg", {
				width: "15",
				height: "15",
				viewBox: "0 0 20 20",
				fill: "none",
				"aria-hidden": "true"
			}, [c("path", {
				d: "m4 10 4 4 8-8",
				stroke: "currentColor",
				"stroke-width": "1.8"
			})], -1)]], 8, pi), c("button", {
				type: "button",
				"aria-label": t.cancelLabel,
				disabled: u.value,
				onClick: O
			}, [...r[4] ||= [c("svg", {
				width: "15",
				height: "15",
				viewBox: "0 0 20 20",
				fill: "none",
				"aria-hidden": "true"
			}, [c("path", {
				d: "m5 5 10 10M15 5 5 15",
				stroke: "currentColor",
				"stroke-width": "1.8"
			})], -1)]], 8, mi)]))], 40, ci)) : (C(), s("span", ai, [c("span", oi, [D(n.$slots, "default", { value: t.modelValue }, () => [d(k(b.value), 1)], !0)]), t.editable ? (C(), s("button", {
				key: 0,
				ref_key: "editButton",
				ref: h,
				type: "button",
				"aria-label": t.editLabel || t.label,
				disabled: t.disabled,
				onClick: S
			}, [...r[2] ||= [c("svg", {
				width: "14",
				height: "14",
				viewBox: "0 0 24 24",
				fill: "none",
				"aria-hidden": "true"
			}, [c("path", {
				d: "m16 3 5 5M3 21l5-1L21 7a2.8 2.8 0 0 0-4-4L4 16z",
				stroke: "currentColor",
				"stroke-width": "1.7",
				"stroke-linejoin": "round"
			})], -1)]], 8, si)) : o("", !0)])),
			f.value ? (C(), s("span", hi, k(f.value), 1)) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-55cecd7d"]]), _i = ["aria-label"], vi = {
	key: 0,
	class: "share-loading__label",
	"aria-hidden": "true"
}, yi = /*#__PURE__*/ z({
	__name: "LoadingIndicator",
	props: {
		label: {
			type: String,
			required: !0
		},
		size: {
			type: String,
			default: "md",
			validator: (e) => [
				"sm",
				"md",
				"lg"
			].includes(e)
		},
		showLabel: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, n) => (C(), s("div", {
			class: v(["share-loading", `share-loading--${e.size}`]),
			role: "status",
			"aria-label": e.label
		}, [n[0] ||= u("<svg class=\"share-loading__art\" viewBox=\"0 0 100 100\" fill=\"none\" aria-hidden=\"true\" data-v-9c9d9b08><circle class=\"share-loading__track\" cx=\"50\" cy=\"50\" r=\"38\" data-v-9c9d9b08></circle><g class=\"share-loading__orbit\" data-v-9c9d9b08><circle class=\"share-loading__arc\" cx=\"50\" cy=\"50\" r=\"38\" stroke-dasharray=\"52 187\" data-v-9c9d9b08></circle><circle class=\"share-loading__spark\" cx=\"50\" cy=\"12\" r=\"2.5\" data-v-9c9d9b08></circle></g><g class=\"share-loading__orbit share-loading__orbit--inner\" data-v-9c9d9b08><circle class=\"share-loading__arc\" cx=\"50\" cy=\"50\" r=\"28\" stroke-dasharray=\"25 63\" data-v-9c9d9b08></circle></g><path class=\"share-loading__core\" d=\"M50 33 62 50 50 67 38 50Z\" data-v-9c9d9b08></path><path class=\"share-loading__facet\" d=\"M50 33V67M38 50H62\" data-v-9c9d9b08></path></svg>", 1), e.showLabel ? (C(), s("span", vi, k(e.label), 1)) : o("", !0)], 10, _i));
	}
}, [["__scopeId", "data-v-9c9d9b08"]]), bi = /*#__PURE__*/ z({
	__name: "SkeletonBlock",
	props: {
		width: {
			type: String,
			default: "100%"
		},
		height: {
			type: String,
			default: "12px"
		},
		round: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, n) => (C(), s("span", {
			class: v(["share-skeleton", { "share-skeleton--round": e.round }]),
			style: b({
				width: e.width,
				height: e.height
			}),
			"aria-hidden": "true"
		}, null, 6));
	}
}, [["__scopeId", "data-v-ab086de7"]]);
//#endregion
export { Re as $, cn as A, At as B, Fn as C, Sn as D, Dn as E, kt as F, ft as G, _t as H, zt as I, tt as J, lt as K, Ft as L, Pt as M, Nt as N, hn as O, Mt as P, ze as Q, Rt as R, Ln as S, An as T, ut as U, Ct as V, dt as W, $e as X, et as Y, qe as Z, hr as _, ti as a, Te as at, Un as b, qr as c, me as ct, Rr as d, oe as dt, Ue as et, jr as f, ie as ft, gr as g, wr as h, z as ht, ri as i, Oe as it, Ht as j, pn as k, Wr as l, G as lt, kr as m, V as mt, yi as n, Ve as nt, $r as o, Y as ot, Ar as p, te as pt, rt as q, gi as r, We as rt, Xr as s, _e as st, bi as t, He as tt, Hr as u, le as ut, Jn as v, Mn as w, Vn as x, qn as y, jt as z };
