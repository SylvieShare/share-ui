import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createSlots as c, createTextVNode as l, createVNode as u, defineComponent as d, guardReactiveProps as f, h as p, mergeProps as m, nextTick as h, normalizeClass as g, normalizeProps as _, normalizeStyle as v, onBeforeUnmount as y, onMounted as b, openBlock as x, reactive as S, ref as C, renderList as w, renderSlot as T, resolveDynamicComponent as E, toDisplayString as D, unref as O, useCssVars as k, useSlots as A, vModelText as j, watch as M, withCtx as N, withDirectives as P, withKeys as F, withModifiers as I } from "vue";
//#region \0plugin-vue:export-helper
var L = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, R = {
	key: 0,
	class: "base-tile-strip"
}, z = /*#__PURE__*/ L({
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
		let t = e, n = r(() => t.color || "var(--accent)");
		return (t, r) => (x(), o("div", {
			class: g(["base-tile", {
				"base-tile--interactive": e.interactive,
				"base-tile--tint": e.tint,
				"base-tile--framed": e.framed
			}]),
			style: v({ "--tile-color": n.value }),
			onClick: r[0] ||= (e) => t.$emit("click", e)
		}, [e.strip ? (x(), o("span", R)) : a("", !0), T(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-81d15c1d"]]), B = [
	"disabled",
	"aria-label",
	"title"
], V = {
	key: 0,
	class: "share-add-button__text"
}, H = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("button", {
			class: g(["share-add-button", [`share-add-button--${e.variant}`, { "share-add-button--block": e.block }]]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			title: e.variant === "icon" && e.label || void 0,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [n[1] ||= s("span", {
			class: "share-add-button__plus",
			"aria-hidden": "true"
		}, "+", -1), e.variant === "icon" ? a("", !0) : (x(), o("span", V, [T(t.$slots, "default", {}, () => [l(D(e.label), 1)], !0)]))], 10, B));
	}
}, [["__scopeId", "data-v-2e1149d1"]]), U = [
	"value",
	"min",
	"max",
	"step",
	"disabled",
	"aria-label"
], W = /*#__PURE__*/ L({
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
		let n = e, i = t, a = r(() => {
			let e = n.max - n.min;
			return e ? Math.max(0, Math.min(100, (n.modelValue - n.min) / e * 100)) : 0;
		}), s = r(() => ({ "--share-slider-percent": `${a.value}%` }));
		function c(e) {
			return Number(e.target.value);
		}
		function l(e) {
			i("update:modelValue", c(e));
		}
		function u(e) {
			i("change", c(e));
		}
		return (t, n) => (x(), o("input", {
			class: "share-slider",
			type: "range",
			value: e.modelValue,
			min: e.min,
			max: e.max,
			step: e.step,
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			style: v(s.value),
			onInput: l,
			onChange: u
		}, null, 44, U));
	}
}, [["__scopeId", "data-v-a4387b22"]]), ee = [
	"disabled",
	"aria-label",
	"aria-checked"
], te = {
	key: 0,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, G = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("button", {
			type: "button",
			class: g(["share-compact-checkbox", { "share-compact-checkbox--checked": e.modelValue }]),
			disabled: e.disabled,
			"aria-label": e.label,
			"aria-checked": e.modelValue,
			role: "checkbox",
			onClick: I(i, ["stop"]),
			onPointerdown: n[0] ||= I(() => {}, ["stop"])
		}, [e.modelValue ? (x(), o("svg", te, [...n[1] ||= [s("path", {
			d: "M2.5 6.2l2.4 2.4 4.6-5",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, null, -1)]])) : a("", !0)], 42, ee));
	}
}, [["__scopeId", "data-v-caeb1891"]]), K = ["aria-label"], ne = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], re = /*#__PURE__*/ L({
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
		let i = t, a = n, c = C(null), l = C([]), u = C({
			left: 0,
			width: 0,
			ready: !1,
			animate: !1
		}), d = r(() => i.neutralValue !== void 0 && i.modelValue === i.neutralValue), f = r(() => ({
			transform: `translateX(${u.value.left}px)`,
			width: `${u.value.width}px`,
			opacity: +!!u.value.ready
		}));
		function p(e, t) {
			l.value[t] = e;
		}
		let m = null;
		function _(e = !1) {
			let t = i.options.findIndex((e) => e.value === i.modelValue), n = l.value[t];
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
		function S(e) {
			let t = i.options.find((t) => t.value === e);
			!i.disabled && !t?.disabled && e !== i.modelValue && a("update:modelValue", e);
		}
		function T() {
			return i.options.map((e, t) => ({
				option: e,
				index: t
			})).filter(({ option: e }) => !e.disabled);
		}
		async function E(e) {
			let t = i.options[e];
			!t || t.disabled || i.disabled || (S(t.value), await h(), l.value[e]?.focus());
		}
		function O(e, t) {
			let n = T();
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			(e.key === "ArrowRight" || e.key === "ArrowDown") && (i = n[(r + 1) % n.length]), (e.key === "ArrowLeft" || e.key === "ArrowUp") && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), E(i.index));
		}
		let k = null;
		return b(async () => {
			await h(), _(), typeof ResizeObserver < "u" && c.value && (k = new ResizeObserver(() => _(!1)), k.observe(c.value));
		}), y(() => {
			k?.disconnect(), m != null && cancelAnimationFrame(m);
		}), M(() => i.modelValue, async () => {
			await h(), _(!0);
		}), M(() => i.options, async () => {
			await h(), _(!1);
		}, { deep: !0 }), (n, r) => (x(), o("div", {
			ref_key: "rootEl",
			ref: c,
			class: g(["share-multi-toggle", {
				"share-multi-toggle--block": t.block,
				"share-multi-toggle--disabled": t.disabled
			}]),
			role: "radiogroup",
			"aria-label": t.ariaLabel || void 0
		}, [s("span", {
			class: g(["share-multi-toggle__pill", {
				"share-multi-toggle__pill--neutral": d.value,
				"share-multi-toggle__pill--instant": !u.value.animate
			}]),
			style: v(f.value),
			"aria-hidden": "true"
		}, null, 6), (x(!0), o(e, null, w(t.options, (e, n) => (x(), o("button", {
			key: String(e.value),
			ref_for: !0,
			ref: (e) => p(e, n),
			type: "button",
			class: g(["share-multi-toggle__button", {
				"share-multi-toggle__button--active": e.value === t.modelValue,
				"share-multi-toggle__button--neutral": e.value === t.modelValue && e.value === t.neutralValue
			}]),
			role: "radio",
			"aria-checked": e.value === t.modelValue,
			tabindex: e.value === t.modelValue ? 0 : -1,
			disabled: t.disabled || e.disabled,
			onClick: (t) => S(e.value),
			onKeydown: (e) => O(e, n)
		}, D(e.label), 43, ne))), 128))], 10, K));
	}
}, [["__scopeId", "data-v-a0098670"]]), ie = ["disabled", "aria-label"], ae = /*#__PURE__*/ L({
	__name: "RemoveButton",
	props: {
		variant: {
			type: String,
			default: "inline"
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
		return (t, n) => (x(), o("button", {
			class: g(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [...n[1] ||= [s("span", {
			class: "share-remove-button__cross",
			"aria-hidden": "true"
		}, null, -1)]], 10, ie));
	}
}, [["__scopeId", "data-v-f27183c3"]]), oe = { class: "share-section-label__text" }, se = {
	key: 0,
	class: "share-section-label__actions"
}, ce = /*#__PURE__*/ L({
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
		let t = e, n = r(() => {
			let e = {
				left: "flex-start",
				center: "center",
				right: "flex-end"
			};
			return t.align && e[t.align] ? { justifyContent: e[t.align] } : {};
		});
		return (t, r) => (x(), o("div", {
			class: g(["share-section-label", { "share-section-label--border": e.border }]),
			style: v(n.value)
		}, [s("span", oe, [T(t.$slots, "default", {}, () => [l(D(e.title), 1)], !0)]), t.$slots.actions ? (x(), o("span", se, [T(t.$slots, "actions", {}, void 0, !0)])) : a("", !0)], 6));
	}
}, [["__scopeId", "data-v-56c925a7"]]), le = ["aria-label"], q = {
	viewBox: "0 0 120 120",
	role: "img",
	"aria-hidden": "true"
}, ue = [
	"stroke",
	"stroke-width",
	"stroke-dasharray",
	"stroke-dashoffset"
], de = { class: "segment-donut__center" }, fe = {
	key: 0,
	class: "segment-donut__legend"
}, pe = { key: 0 }, me = /*#__PURE__*/ L({
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
		k((e) => ({ v664f5d02: t.strokeWidth }));
		let n = [
			"var(--accent)",
			"var(--info)",
			"var(--success)",
			"var(--warning)",
			"var(--danger)"
		], i = t, c = r(() => i.segments.map((e, t) => ({
			key: e.key ?? t,
			label: e.label ?? String(e.key ?? t),
			value: Number.isFinite(Number(e.value)) ? Math.max(0, Number(e.value)) : 0,
			color: e.color || n[t % n.length]
		}))), l = r(() => c.value.reduce((e, t) => e + t.value, 0)), u = r(() => c.value.map((e) => ({
			...e,
			percent: l.value > 0 ? e.value / l.value * 100 : 0
		}))), d = r(() => {
			let e = 0;
			return u.value.filter((e) => e.value > 0).map((t) => {
				let n = {
					...t,
					offset: e
				};
				return e += t.percent, n;
			});
		});
		return (n, r) => (x(), o("figure", {
			class: "segment-donut",
			"aria-label": t.ariaLabel
		}, [s("div", {
			class: "segment-donut__visual",
			style: v({ "--segment-donut-size": `${t.size}px` })
		}, [(x(), o("svg", q, [r[0] ||= s("circle", {
			class: "segment-donut__track",
			cx: "60",
			cy: "60",
			r: "50",
			pathLength: "100"
		}, null, -1), (x(!0), o(e, null, w(d.value, (e) => (x(), o("circle", {
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
		}, null, 8, ue))), 128))])), s("div", de, [T(n.$slots, "center", { total: l.value }, () => [s("strong", null, D(t.formatValue(l.value)), 1), s("span", null, D(t.totalLabel), 1)], !0)])], 4), t.showLegend ? (x(), o("ul", fe, [(x(!0), o(e, null, w(u.value, (e) => (x(), o("li", { key: e.key }, [
			s("i", {
				style: v({ "--segment-color": e.color }),
				"aria-hidden": "true"
			}, null, 4),
			s("span", null, D(e.label), 1),
			s("strong", null, D(t.formatValue(e.value)), 1),
			t.showPercent ? (x(), o("small", pe, D(e.percent.toLocaleString(void 0, { maximumFractionDigits: 1 })) + "%", 1)) : a("", !0)
		]))), 128))])) : a("", !0)], 8, le));
	}
}, [["__scopeId", "data-v-6c69c95e"]]), he = ["aria-label"], ge = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], J = ["src"], _e = /*#__PURE__*/ L({
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
	setup(t, { expose: n, emit: i }) {
		let c = t, l = i, u = C(null), d = C([]), f = C({
			left: 0,
			width: 0,
			ready: !1
		}), p = r(() => ({
			transform: `translateX(${f.value.left}px)`,
			width: `${f.value.width}px`,
			opacity: +!!f.value.ready
		}));
		function m(e, t) {
			d.value[t] = e;
		}
		function _(e) {
			let t = c.tabs.find((t) => t.key === e);
			t && !t.disabled && e !== c.modelValue && l("update:modelValue", e);
		}
		async function S(e) {
			let t = c.tabs[e];
			!t || t.disabled || (_(t.key), await h(), d.value[e]?.focus());
		}
		function E(e, t) {
			let n = c.tabs.map((e, t) => ({
				tab: e,
				index: t
			})).filter(({ tab: e }) => !e.disabled);
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			e.key === "ArrowRight" && (i = n[(r + 1) % n.length]), e.key === "ArrowLeft" && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), S(i.index));
		}
		function O() {
			let e = c.tabs.findIndex((e) => e.key === c.modelValue), t = d.value[e];
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
		let k = null;
		return b(() => {
			h(O), typeof ResizeObserver < "u" && u.value && (k = new ResizeObserver(O), k.observe(u.value));
		}), y(() => k?.disconnect()), M(() => c.modelValue, () => h(O)), M(() => c.tabs, () => h(O), { deep: !0 }), n({ updateUnderline: O }), (n, r) => (x(), o("nav", {
			ref_key: "rootElement",
			ref: u,
			class: "share-sliding-tabs",
			role: "tablist",
			"aria-label": t.ariaLabel || void 0
		}, [(x(!0), o(e, null, w(t.tabs, (e, r) => (x(), o("button", {
			id: e.id,
			key: String(e.key),
			ref_for: !0,
			ref: (e) => m(e, r),
			class: g(["share-sliding-tabs__tab", { "share-sliding-tabs__tab--active": t.modelValue === e.key }]),
			type: "button",
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			"aria-controls": e.panelId,
			tabindex: t.modelValue === e.key ? 0 : -1,
			disabled: e.disabled,
			onClick: (t) => _(e.key),
			onKeydown: (e) => E(e, r)
		}, [T(n.$slots, "icon", { tab: e }, () => [e.icon || e.svg ? (x(), o("img", {
			key: 0,
			class: "share-sliding-tabs__icon",
			src: e.icon || e.svg,
			alt: "",
			"aria-hidden": "true"
		}, null, 8, J)) : a("", !0)], !0), s("span", null, D(e.title), 1)], 42, ge))), 128)), s("span", {
			class: "share-sliding-tabs__underline",
			style: v(p.value),
			"aria-hidden": "true"
		}, null, 4)], 8, he));
	}
}, [["__scopeId", "data-v-28aae1df"]]), ve = [
	"aria-checked",
	"aria-label",
	"disabled"
], Y = {
	key: 0,
	class: "share-toggle-switch__text"
}, ye = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("button", {
			class: g(["share-toggle-switch", { "share-toggle-switch--active": e.modelValue }]),
			type: "button",
			role: "switch",
			"aria-checked": e.modelValue,
			"aria-label": e.ariaLabel || e.label || void 0,
			disabled: e.disabled,
			onClick: i
		}, [n[0] ||= s("span", {
			class: "share-toggle-switch__track",
			"aria-hidden": "true"
		}, [s("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (x(), o("span", Y, [T(t.$slots, "default", {}, () => [l(D(e.label), 1)], !0)])) : a("", !0)], 10, ve));
	}
}, [["__scopeId", "data-v-828a23d7"]]), X = [], Z = null, Q = null;
function be(e) {
	let t = X.lastIndexOf(e);
	t >= 0 && X.splice(t, 1);
}
function xe(e) {
	be(e), X.push(e);
}
function Se(e) {
	be(e);
}
function Ce(e) {
	return X.at(-1) === e;
}
function we(e, t) {
	Z?.token !== e && Z?.close(), Z = {
		token: e,
		close: t
	}, xe(e);
}
function Te(e) {
	Z?.token === e && (Z = null), Se(e);
}
function Ee(e, t) {
	Q?.token !== e && Q?.close(), Q = {
		token: e,
		close: t
	};
}
function De(e) {
	Q?.token === e && (Q = null);
}
function Oe() {
	if (!Q) return !1;
	let e = Q;
	return Q = null, e.close(), !0;
}
//#endregion
//#region src/lib/actionMenuPlacement.js
var ke = 8, Ae = 6;
function je(e, t, n) {
	return Math.min(Math.max(e, t), Math.max(t, n));
}
function Me({ triggerRect: e, popoverWidth: t, popoverHeight: n, viewportWidth: r, viewportHeight: i, viewportLeft: a = 0, viewportTop: o = 0, originX: s, originY: c, margin: l = 8, gap: u = 6 }) {
	let d = a + l, f = o + l, p = a + r - l, m = o + i - l, h = Math.min(t, Math.max(0, p - d)), g = je(e.right - h, d, p - h), _ = Math.max(0, m - e.bottom - u), v = Math.max(0, e.top - u - f), y = _ < n && v > _, b = y ? v : _, x = Math.min(n, b), S = je(y ? e.top - u - x : e.bottom + u, f, m - x);
	return {
		left: g,
		top: S,
		maxHeight: b,
		opensAbove: y,
		originX: je(s - g, 0, h),
		originY: je(c - S, 0, x)
	};
}
var Ne = 8, Pe = 6, Fe = Me, Ie = [
	"title",
	"aria-label",
	"aria-expanded",
	"disabled"
], Le = ["aria-label"], Re = /*#__PURE__*/ L({
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
	setup(r, { expose: c }) {
		let l = r, d = Symbol("action-menu"), f = C(null), p = C(null), m = C(null), _ = C(!1), b = null, S = null;
		function w(e) {
			let t = f.value;
			if (!t) return null;
			let n = t.getBoundingClientRect(), r = e?.detail > 0;
			return b = {
				x: r ? e.clientX : n.left + n.width / 2,
				y: r ? e.clientY : n.bottom
			}, {
				position: "fixed",
				top: "8px",
				left: "8px",
				visibility: "hidden"
			};
		}
		function E() {
			let e = window.visualViewport;
			return {
				viewportWidth: e?.width || window.innerWidth,
				viewportHeight: e?.height || window.innerHeight,
				viewportLeft: e?.offsetLeft || 0,
				viewportTop: e?.offsetTop || 0
			};
		}
		function D() {
			S = null;
			let e = f.value, t = p.value;
			if (!_.value || !e || !t) return;
			let n = E(), r = Math.max(0, n.viewportWidth - 16);
			t.style.minWidth = `${Math.min(200, r)}px`, t.style.maxWidth = `${Math.min(280, r)}px`;
			let i = e.getBoundingClientRect(), a = Me({
				triggerRect: i,
				popoverWidth: t.getBoundingClientRect().width,
				popoverHeight: t.scrollHeight,
				originX: b?.x ?? i.left + i.width / 2,
				originY: b?.y ?? i.bottom,
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
			S != null && cancelAnimationFrame(S), S = requestAnimationFrame(D);
		}
		function k() {
			document.addEventListener("pointerdown", F, !0), document.addEventListener("keydown", R), window.addEventListener("resize", O), window.addEventListener("scroll", L, !0), window.visualViewport?.addEventListener("resize", O), window.visualViewport?.addEventListener("scroll", O);
		}
		function A() {
			document.removeEventListener("pointerdown", F, !0), document.removeEventListener("keydown", R), window.removeEventListener("resize", O), window.removeEventListener("scroll", L, !0), window.visualViewport?.removeEventListener("resize", O), window.visualViewport?.removeEventListener("scroll", O);
		}
		function j(e) {
			l.disabled || _.value || (m.value = w(e), we(d, M), _.value = !0, k(), h(O));
		}
		function M() {
			_.value && (Oe(), _.value = !1, Te(d), S != null && cancelAnimationFrame(S), S = null, A());
		}
		function P(e) {
			l.disabled || (_.value ? M() : j(e));
		}
		function F(e) {
			e.target?.closest?.(".ram-popover, [data-share-popover-related]") || f.value?.contains?.(e.target) || M();
		}
		function L(e) {
			p.value?.contains?.(e.target) || e.target?.closest?.("[data-share-popover-related]") || M();
		}
		function R(e) {
			e.key === "Escape" && (Oe() || Ce(d) && M());
		}
		return y(M), c({
			open: j,
			close: M,
			toggle: P
		}), (c, l) => (x(), o(e, null, [c.$slots.trigger ? (x(), o("div", {
			key: 0,
			ref_key: "triggerEl",
			ref: f,
			class: g(["ram-custom-trigger", { "ram-custom-trigger--block": r.block }]),
			onClick: I(P, ["stop"])
		}, [T(c.$slots, "trigger", { open: _.value }, void 0, !0)], 2)) : (x(), o("button", {
			key: 1,
			ref_key: "triggerEl",
			ref: f,
			type: "button",
			class: "ram-trigger",
			title: r.title,
			"aria-label": r.title,
			"aria-expanded": _.value,
			"aria-haspopup": "menu",
			disabled: r.disabled,
			onClick: I(P, ["stop"])
		}, [...l[2] ||= [s("svg", {
			width: "14",
			height: "14",
			viewBox: "0 0 14 14",
			fill: "none",
			"aria-hidden": "true"
		}, [
			s("circle", {
				cx: "3",
				cy: "7",
				r: "1.2",
				fill: "currentColor"
			}),
			s("circle", {
				cx: "7",
				cy: "7",
				r: "1.2",
				fill: "currentColor"
			}),
			s("circle", {
				cx: "11",
				cy: "7",
				r: "1.2",
				fill: "currentColor"
			})
		], -1)]], 8, Ie)), (x(), i(t, { to: "body" }, [u(n, { name: "share-popover-action" }, {
			default: N(() => [_.value ? (x(), o("div", {
				key: 0,
				ref_key: "popoverEl",
				ref: p,
				class: "ram-popover",
				style: v(m.value),
				role: "menu",
				"aria-label": r.title,
				onClick: l[0] ||= I(() => {}, ["stop"]),
				onPointerdown: l[1] ||= I(() => {}, ["stop"])
			}, [T(c.$slots, "default", { close: M }, void 0, !0)], 44, Le)) : a("", !0)]),
			_: 3
		})]))], 64));
	}
}, [["__scopeId", "data-v-e5053f4e"]]), ze = ["aria-haspopup", "aria-expanded"], Be = {
	class: "ram-item__icon",
	"aria-hidden": "true"
}, Ve = {
	key: 1,
	width: "17",
	height: "17",
	viewBox: "0 0 17 17",
	fill: "none"
}, He = { class: "ram-item__content" }, Ue = {
	key: 0,
	class: "ram-item__suffix"
}, We = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("button", {
			type: "button",
			class: g(["ram-item", e.tone === "default" ? null : `ram-item--${e.tone}`]),
			role: "menuitem",
			"aria-haspopup": e.submenu ? "menu" : void 0,
			"aria-expanded": e.submenu ? e.submenuOpen : void 0
		}, [
			s("span", Be, [T(t.$slots, "icon", {}, () => [e.icon ? (x(), i(E(e.icon), {
				key: 0,
				size: 17,
				"stroke-width": 1.9
			})) : (x(), o("svg", Ve, [...n[0] ||= [
				s("circle", {
					cx: "4",
					cy: "8.5",
					r: "1.2",
					fill: "currentColor"
				}, null, -1),
				s("circle", {
					cx: "8.5",
					cy: "8.5",
					r: "1.2",
					fill: "currentColor"
				}, null, -1),
				s("circle", {
					cx: "13",
					cy: "8.5",
					r: "1.2",
					fill: "currentColor"
				}, null, -1)
			]]))], !0)]),
			s("span", He, [T(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.suffix || e.submenu ? (x(), o("span", Ue, [T(t.$slots, "suffix", {}, void 0, !0), e.submenu ? (x(), o("svg", {
				key: 0,
				class: g(["ram-item__submenu-chevron", { "ram-item__submenu-chevron--open": e.submenuOpen }]),
				width: "15",
				height: "15",
				viewBox: "0 0 15 15",
				fill: "none",
				"aria-hidden": "true"
			}, [...n[1] ||= [s("path", {
				d: "m5.5 3.5 4 4-4 4",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)]], 2)) : a("", !0)])) : a("", !0)
		], 10, ze));
	}
}, [["__scopeId", "data-v-5fc35d86"]]);
//#endregion
//#region src/composables/useMediaQuery.js
function Ge(e) {
	let t = C(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return b(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), y(() => n?.removeEventListener?.("change", r)), t;
}
function Ke(e = 768) {
	return Ge(`(max-width: ${e}px)`);
}
//#endregion
//#region src/components/floating/BasePopover.vue
var qe = [
	"id",
	"role",
	"aria-label",
	"data-share-popover-related"
], Je = /*#__PURE__*/ L({
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
	setup(e, { emit: s }) {
		let c = e, l = s, d = r(() => c.transition ? c.transition : c.transitionPreset === "action-menu" ? "share-popover-action" : ""), f = Symbol("base-popover"), p = C(null), m = C(null);
		function _() {
			let e = c.anchor;
			return e ? typeof e.getBoundingClientRect == "function" ? e : e.value ?? e : null;
		}
		function b(e) {
			return typeof e == "number" ? `${e}px` : e;
		}
		function S() {
			let e = window.visualViewport;
			return {
				left: e?.offsetLeft || 0,
				top: e?.offsetTop || 0,
				width: e?.width || window.innerWidth,
				height: e?.height || window.innerHeight
			};
		}
		function w() {
			let e = _();
			if (!e) return;
			let t = e.getBoundingClientRect(), n = S(), r = typeof c.minWidth == "number" ? c.minWidth : 0, i = Math.max(r, p.value?.offsetWidth || 0), a = p.value?.offsetHeight || 0, o = n.left + 8, s = n.left + n.width - 8, l = n.top + 8, u = n.top + n.height - 8, d = {
				position: "fixed",
				minWidth: b(c.minWidth),
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
		function E() {
			l("update:open", !1);
		}
		function D(e) {
			return !!e?.closest?.("[data-share-popover-related]");
		}
		function O(e) {
			p.value?.contains(e.target) || D(e.target) || _()?.contains?.(e.target) || E();
		}
		function k(e) {
			if (!c.closeOnScroll) {
				w();
				return;
			}
			p.value?.contains(e.target) || D(e.target) || E();
		}
		function A() {
			c.closeOnResize ? E() : w();
		}
		function j(e) {
			e.key === "Escape" && (Oe() || Ce(f) && E());
		}
		function P() {
			xe(f), document.addEventListener("pointerdown", O, !0), document.addEventListener("keydown", j), window.addEventListener("resize", A), window.addEventListener("scroll", k, !0), window.visualViewport?.addEventListener("resize", A), window.visualViewport?.addEventListener("scroll", w);
		}
		function F() {
			Se(f), document.removeEventListener("pointerdown", O, !0), document.removeEventListener("keydown", j), window.removeEventListener("resize", A), window.removeEventListener("scroll", k, !0), window.visualViewport?.removeEventListener("resize", A), window.visualViewport?.removeEventListener("scroll", w);
		}
		return M(() => c.open, async (e) => {
			F(), e && (w(), await h(), c.open && (w(), P()));
		}, { immediate: !0 }), M(() => [
			c.anchor,
			c.placement,
			c.offset,
			c.minWidth
		], () => {
			c.open && h(w);
		}), y(F), (r, s) => (x(), i(t, { to: "body" }, [u(n, { name: d.value }, {
			default: N(() => [e.open ? (x(), o("div", {
				key: 0,
				id: e.id || void 0,
				ref_key: "popoverEl",
				ref: p,
				class: g([
					"share-popover",
					"base-popover",
					e.popoverClass
				]),
				style: v(m.value),
				role: e.role || void 0,
				"aria-label": e.ariaLabel || void 0,
				"data-share-popover-related": e.related ? "" : void 0,
				onClick: s[0] ||= I(() => {}, ["stop"]),
				onPointerdown: s[1] ||= I(() => {}, ["stop"])
			}, [T(r.$slots, "default", { close: E }, void 0, !0)], 46, qe)) : a("", !0)]),
			_: 3
		}, 8, ["name"])]));
	}
}, [["__scopeId", "data-v-256a13ae"]]), Ye = { class: "ras-root" }, Xe = { class: "ras-panel" }, Ze = {
	key: 0,
	class: "ras-label"
}, Qe = { class: "ras-panel ras-panel--popover" }, $e = {
	key: 0,
	class: "ras-label"
}, et = /*#__PURE__*/ L({
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
		let r = e, c = Symbol("action-submenu"), l = C(null), d = Ke(r.mobileBreakpoint), f = C(!1);
		function p() {
			r.disabled || f.value || (Ee(c, h), f.value = !0);
		}
		function m() {
			r.disabled || (f.value ? h() : p());
		}
		function h() {
			f.value && (f.value = !1, De(c));
		}
		function g(e) {
			e || h();
		}
		return y(h), t({
			open: p,
			close: h,
			toggle: m
		}), (t, r) => (x(), o("div", Ye, [
			s("div", {
				ref_key: "triggerEl",
				ref: l,
				class: "ras-trigger",
				onClick: I(m, ["stop"])
			}, [T(t.$slots, "trigger", {
				open: f.value,
				toggle: m
			}, void 0, !0)], 512),
			u(n, { name: "ras-inline" }, {
				default: N(() => [O(d) && f.value ? (x(), o("div", {
					key: 0,
					class: "ras-inline",
					"data-share-popover-related": "",
					onClick: r[0] ||= I(() => {}, ["stop"]),
					onPointerdown: r[1] ||= I(() => {}, ["stop"])
				}, [s("div", Xe, [e.label ? (x(), o("div", Ze, D(e.label), 1)) : a("", !0), T(t.$slots, "default", { close: h }, void 0, !0)])], 32)) : a("", !0)]),
				_: 3
			}),
			O(d) ? a("", !0) : (x(), i(Je, {
				key: 0,
				open: f.value,
				anchor: l.value,
				placement: "right-start",
				"min-width": e.minWidth,
				"z-index": 9400,
				"popover-class": "row-action-submenu-popover",
				transition: "ras-popover",
				related: "",
				"onUpdate:open": g
			}, {
				default: N(() => [s("div", Qe, [e.label ? (x(), o("div", $e, D(e.label), 1)) : a("", !0), T(t.$slots, "default", { close: h }, void 0, !0)])]),
				_: 3
			}, 8, [
				"open",
				"anchor",
				"min-width"
			]))
		]));
	}
}, [["__scopeId", "data-v-a4a95dc2"]]), tt = [
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
function nt(e) {
	return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(String(e || "").trim());
}
function rt(e = tt) {
	return e[Math.floor(Math.random() * e.length)];
}
//#endregion
//#region src/components/floating/ColorPresetPicker.vue
var it = ["aria-label"], at = ["aria-label", "aria-expanded"], ot = { class: "cpp-body" }, st = "#888888", ct = /*#__PURE__*/ L({
	__name: "ColorPresetPicker",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		colors: {
			type: Array,
			default: () => tt
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
		let n = e, i = t, a = C(null), c = C(!1), l = C("cpppop-cancel"), f = C(n.modelValue || ""), m = r(() => /^#[0-9a-f]{6}$/i.test(n.modelValue || "") ? n.modelValue : st), h = r(() => !!f.value && !nt(f.value));
		function _(e) {
			return String(n.modelValue || "").toLowerCase() === String(e).toLowerCase();
		}
		function y() {
			l.value = "cpppop-cancel", c.value = !0;
		}
		function b(e) {
			l.value = e === "pick" ? "cpppop-pick" : "cpppop-cancel", c.value = !1;
		}
		function S() {
			c.value ? b("cancel") : y();
		}
		function w(e) {
			e || b("cancel");
		}
		function E(e) {
			f.value = e, i("update:modelValue", e);
		}
		function D() {
			let e = f.value.trim();
			if (!nt(e)) {
				i("invalid", e);
				return;
			}
			E(e);
		}
		function k(e) {
			E(e), b("pick");
		}
		function A() {
			f.value = "", i("update:modelValue", n.clearValue), b("pick");
		}
		M(() => n.modelValue, (e) => {
			f.value = e || "";
		});
		let j = d({
			name: "ColorPresetGrid",
			setup() {
				return () => p("div", { class: "cpp-content" }, [p("div", {
					class: "cpp-grid",
					style: { "--cpp-columns": n.columns }
				}, n.colors.map((e) => p("button", {
					key: e,
					type: "button",
					class: ["cpp-color", { active: _(e) }],
					style: { background: e },
					title: e,
					"aria-label": e,
					"aria-pressed": _(e),
					onMousedown: (e) => e.preventDefault(),
					onClick: () => k(e)
				}))), n.allowCustom || n.allowClear ? p("div", { class: "cpp-extra" }, [
					n.allowCustom ? p("label", {
						class: "cpp-native",
						title: n.customLabel
					}, [p("span", {
						class: "cpp-native-sw",
						style: { background: n.modelValue || "var(--surface-active)" }
					}), p("input", {
						type: "color",
						value: m.value,
						"aria-label": n.customLabel,
						onInput: (e) => E(e.target.value)
					})]) : null,
					n.allowCustom ? p("input", {
						class: ["cpp-hex", { "cpp-hex--invalid": h.value }],
						type: "text",
						value: f.value,
						placeholder: "#hex",
						spellcheck: "false",
						"aria-label": n.customLabel,
						"aria-invalid": h.value,
						onInput: (e) => {
							f.value = e.target.value;
						},
						onChange: D,
						onKeydown: (e) => {
							e.key === "Enter" && D();
						}
					}) : null,
					n.allowClear ? p("button", {
						type: "button",
						class: "cpp-clear",
						onMousedown: (e) => e.preventDefault(),
						onClick: A
					}, n.clearLabel) : null
				]) : null]);
			}
		});
		return (t, n) => e.inline ? (x(), o("div", {
			key: 0,
			class: "cpp-body cpp-body--inline",
			"aria-label": e.ariaLabel
		}, [u(O(j))], 8, it)) : (x(), o("span", {
			key: 1,
			ref_key: "anchorEl",
			ref: a,
			class: "cpp-host"
		}, [T(t.$slots, "trigger", {
			toggle: S,
			open: c.value,
			value: e.modelValue
		}, () => [s("button", {
			type: "button",
			class: g(["cpp-swatch", { "cpp-swatch--empty": !e.modelValue }]),
			style: v(e.modelValue ? { background: e.modelValue } : null),
			"aria-label": e.ariaLabel,
			"aria-expanded": c.value,
			"aria-haspopup": "dialog",
			onClick: S
		}, null, 14, at)], !0), u(Je, {
			open: c.value,
			anchor: a.value,
			placement: e.placement,
			"min-width": 0,
			"z-index": e.zIndex,
			transition: l.value,
			role: "dialog",
			"aria-label": e.ariaLabel,
			"onUpdate:open": w
		}, {
			default: N(() => [s("div", ot, [u(O(j))])]),
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
}, [["__scopeId", "data-v-1b7035e4"]]), lt = [
	"aria-label",
	"aria-expanded",
	"aria-activedescendant",
	"disabled"
], ut = ["aria-label"], dt = [
	"placeholder",
	"aria-label",
	"aria-activedescendant"
], ft = [
	"id",
	"aria-selected",
	"disabled",
	"onMouseenter",
	"onClick"
], pt = {
	key: 1,
	class: "vs-empty"
}, mt = /*#__PURE__*/ L({
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
	setup(t, { expose: n, emit: i }) {
		let c = 0, l = t, u = i;
		c += 1;
		let d = `share-value-select-${c}`, f = C(null), p = C(null), m = C(null), _ = C(!1), v = C(""), b = C(-1), S = r(() => l.options.map((e, t) => e && typeof e == "object" ? {
			value: e.value,
			label: String(e.label ?? e.value ?? ""),
			disabled: !!e.disabled,
			key: e.key ?? `${String(e.value)}-${t}`
		} : {
			value: e,
			label: String(e ?? ""),
			disabled: !1,
			key: `${String(e)}-${t}`
		})), T = r(() => S.value.find((e) => k(e.value))?.label ?? ""), E = r(() => {
			let e = v.value.trim().toLocaleLowerCase();
			return e ? S.value.filter((t) => t.label.toLocaleLowerCase().includes(e)) : S.value;
		}), O = r(() => l.searchable && S.value.length >= l.searchThreshold);
		function k(e) {
			return String(e) === String(l.modelValue);
		}
		function A(e) {
			return `${d}-option-${e}`;
		}
		function N(e = 0, t = 1) {
			let n = E.value;
			if (!n.length) return -1;
			for (let r = 0; r < n.length; r += 1) {
				let i = (e + r * t + n.length) % n.length;
				if (!n[i].disabled) return i;
			}
			return -1;
		}
		function F() {
			let e = E.value.findIndex((e) => k(e.value) && !e.disabled);
			return e >= 0 ? e : N();
		}
		function I(e) {
			E.value[e]?.disabled || (b.value = e);
		}
		function L(e) {
			let t = E.value;
			if (!t.length) return;
			let n = b.value < 0 ? e > 0 ? 0 : t.length - 1 : (b.value + e + t.length) % t.length;
			b.value = N(n, e), h(() => document.getElementById(A(b.value))?.scrollIntoView?.({ block: "nearest" }));
		}
		function R() {
			l.disabled || _.value || (_.value = !0, b.value = F(), document.addEventListener("pointerdown", U, !0), u("open"), O.value && h(() => m.value?.focus()));
		}
		function z({ restoreFocus: e = !1 } = {}) {
			_.value && (_.value = !1, v.value = "", b.value = -1, document.removeEventListener("pointerdown", U, !0), u("close"), e && h(() => p.value?.focus()));
		}
		function B() {
			_.value ? z() : R();
		}
		function V(e) {
			!e || e.disabled || (u("update:modelValue", e.value), z({ restoreFocus: !0 }));
		}
		function H() {
			V(E.value[b.value]);
		}
		function U(e) {
			f.value?.contains(e.target) || z();
		}
		function W(e) {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault(), _.value ? L(e.key === "ArrowDown" ? 1 : -1) : R();
				return;
			}
			if (e.key === "Home" && _.value) {
				e.preventDefault(), b.value = N();
				return;
			}
			if (e.key === "End" && _.value) {
				e.preventDefault(), b.value = N(E.value.length - 1, -1);
				return;
			}
			if ((e.key === "Enter" || e.key === " ") && _.value) {
				e.preventDefault(), H();
				return;
			}
			e.key === "Escape" && _.value && (e.preventDefault(), z({ restoreFocus: !0 }));
		}
		function ee(e) {
			e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), L(e.key === "ArrowDown" ? 1 : -1)) : e.key === "Home" ? (e.preventDefault(), b.value = N()) : e.key === "End" ? (e.preventDefault(), b.value = N(E.value.length - 1, -1)) : e.key === "Enter" ? (e.preventDefault(), H()) : e.key === "Escape" && (e.preventDefault(), z({ restoreFocus: !0 }));
		}
		return M(E, () => {
			b.value = F();
		}), M(() => l.disabled, (e) => {
			e && z();
		}), y(() => {
			document.removeEventListener("pointerdown", U, !0);
		}), n({
			open: R,
			close: z,
			toggle: B
		}), (n, r) => (x(), o("div", {
			ref_key: "rootEl",
			ref: f,
			class: g(["vs", { "vs--disabled": t.disabled }])
		}, [s("button", {
			ref_key: "triggerEl",
			ref: p,
			class: g(["vs-button", { empty: !T.value }]),
			type: "button",
			role: "combobox",
			"aria-haspopup": "listbox",
			"aria-label": t.ariaLabel || void 0,
			"aria-controls": d,
			"aria-expanded": _.value,
			"aria-activedescendant": _.value && b.value >= 0 ? A(b.value) : void 0,
			disabled: t.disabled,
			onClick: B,
			onKeydown: W
		}, [s("span", null, D(T.value || t.placeholder), 1), r[1] ||= s("span", {
			class: "vs-arrow",
			"aria-hidden": "true"
		}, "▾", -1)], 42, lt), _.value ? (x(), o("div", {
			key: 0,
			id: d,
			class: g(["vs-drop", { "vs-drop-up": t.dropUp }]),
			role: "listbox",
			"aria-label": t.ariaLabel || void 0
		}, [
			O.value ? P((x(), o("input", {
				key: 0,
				ref_key: "searchEl",
				ref: m,
				"onUpdate:modelValue": r[0] ||= (e) => v.value = e,
				class: "vs-search",
				type: "search",
				placeholder: t.searchPlaceholder,
				"aria-label": t.searchAriaLabel || t.searchPlaceholder,
				"aria-controls": d,
				"aria-activedescendant": b.value >= 0 ? A(b.value) : void 0,
				autocomplete: "off",
				onKeydown: ee
			}, null, 40, dt)), [[j, v.value]]) : a("", !0),
			(x(!0), o(e, null, w(E.value, (e, t) => (x(), o("button", {
				id: A(t),
				key: e.key,
				class: g(["vs-option", { "vs-option--active": t === b.value }]),
				type: "button",
				role: "option",
				"aria-selected": k(e.value),
				disabled: e.disabled,
				onMouseenter: (e) => I(t),
				onClick: (t) => V(e)
			}, D(e.label), 43, ft))), 128)),
			E.value.length === 0 ? (x(), o("div", pt, D(t.emptyLabel), 1)) : a("", !0)
		], 10, ut)) : a("", !0)], 2));
	}
}, [["__scopeId", "data-v-764969f5"]]), ht = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.b.blockquote.br.code.em.h1.h2.h3.h4.h5.h6.li.ol.p.pre.s.span.strike.strong.table.tbody.td.th.thead.tr.u.ul".split(".")), gt = /* @__PURE__ */ new Set([
	"embed",
	"iframe",
	"math",
	"object",
	"script",
	"style",
	"svg",
	"template"
]), _t = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:"
]), vt = /^[a-z][a-z0-9-]{0,39}$/, yt = 4096;
function bt(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
function xt(e) {
	let t = String(e || "").trim();
	if (!t || /[\u0000-\u001f\u007f]/.test(t)) return "";
	if (/^(?:#|\?|\.?\.\/|\/)/.test(t)) return t;
	try {
		let e = new URL(t, "https://share-ui.invalid");
		return _t.has(e.protocol) ? t : "";
	} catch {
		return "";
	}
}
function St(e) {
	let t = String(e || "").trim();
	if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t) || /^var\(--[a-z0-9-]+\)$/i.test(t)) return t;
	let n = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
	if (!n || n.slice(1, 4).map(Number).some((e) => e < 0 || e > 255)) return "";
	let r = n[4] == null ? null : Number(n[4]);
	return r != null && (r < 0 || r > 1) ? "" : t;
}
function Ct(e) {
	try {
		let t = encodeURIComponent(JSON.stringify(e ?? {}));
		return t.length <= yt ? t : "";
	} catch {
		return "";
	}
}
function wt(e) {
	let t = String(e || "");
	if (!t || t.length > yt) return null;
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
function Tt(e, t, n) {
	let r = String(e || "").trim().toLowerCase(), i = Ct(t);
	return !vt.test(r) || !i ? "" : `<span data-rich-node="${r}" data-rich-payload="${bt(i)}" contenteditable="false">${bt(n || r)}</span>`;
}
function Et(e) {
	if (!e?.getAttribute) return null;
	let t = String(e.getAttribute("data-rich-node") || "").trim().toLowerCase(), n = wt(e.getAttribute("data-rich-payload"));
	return !vt.test(t) || n == null ? null : {
		kind: t,
		payload: n,
		label: e.textContent || t
	};
}
function Dt(e, t) {
	let n = e.getAttribute("title");
	n && t.setAttribute("title", n);
	let r = e.getAttribute("dir");
	[
		"ltr",
		"rtl",
		"auto"
	].includes(r) && t.setAttribute("dir", r);
	let i = St(e.style?.getPropertyValue("color"));
	if (i && t.style.setProperty("color", i), t.tagName === "A") {
		let n = xt(e.getAttribute("href"));
		n && t.setAttribute("href", n), e.getAttribute("target") === "_blank" && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer"));
	}
	if (t.tagName === "SPAN") {
		let n = Et(e);
		n && (t.setAttribute("data-rich-node", n.kind), t.setAttribute("data-rich-payload", Ct(n.payload)), t.setAttribute("contenteditable", "false"));
	}
	if (t.tagName === "TD" || t.tagName === "TH") for (let n of ["colspan", "rowspan"]) {
		let r = Number.parseInt(e.getAttribute(n), 10);
		r >= 1 && r <= 100 && t.setAttribute(n, String(r));
	}
}
function Ot(e, t, n) {
	if (e.nodeType === 3) {
		t.appendChild(n.createTextNode(e.nodeValue || ""));
		return;
	}
	if (e.nodeType !== 1) return;
	let r = e.tagName.toLowerCase();
	if (gt.has(r)) return;
	if (!ht.has(r)) {
		for (let r of [...e.childNodes]) Ot(r, t, n);
		return;
	}
	let i = n.createElement(r);
	if (Dt(e, i), i.hasAttribute("data-rich-node")) i.textContent = e.textContent || i.getAttribute("data-rich-node");
	else for (let t of [...e.childNodes]) Ot(t, i, n);
	t.appendChild(i);
}
function kt(e) {
	let t = String(e || "");
	if (!t) return "";
	if (typeof DOMParser > "u") return bt(t);
	let n = new DOMParser().parseFromString(t, "text/html"), r = n.createElement("div");
	for (let e of [...n.body.childNodes]) Ot(e, r, n);
	return r.innerHTML;
}
function At(e) {
	return bt(e).replace(/\r\n?|\n/g, "<br>");
}
//#endregion
//#region src/components/rich-text/RichContent.vue
function jt(e) {
	let t = {};
	for (let n of [...e.attributes]) n.name !== "class" && (t[n.name] = n.value);
	return t;
}
function Mt(e, t, n) {
	if (e.nodeType === Node.TEXT_NODE) return e.nodeValue || "";
	if (e.nodeType !== Node.ELEMENT_NODE) return null;
	let r = Et(e);
	if (r) {
		let e = () => p("span", {
			class: "rc-node",
			"data-rich-node": r.kind,
			title: r.label
		}, r.label);
		return p("span", {
			class: "rc-node-host",
			key: n
		}, t.node?.({
			node: r,
			fallback: e
		}) || e());
	}
	let i = [...e.childNodes].map((e, r) => Mt(e, t, `${n}.${r}`)).filter((e) => e != null);
	return p(e.tagName.toLowerCase(), {
		...jt(e),
		key: n
	}, i);
}
var Nt = /*#__PURE__*/ L({
	name: "RichContent",
	inheritAttrs: !1,
	props: { html: {
		type: String,
		default: ""
	} },
	setup(e, { slots: t, attrs: n }) {
		let i = r(() => kt(e.html));
		return () => {
			if (typeof DOMParser > "u") return p("div", {
				...n,
				class: ["rc", n.class],
				innerHTML: i.value
			});
			let e = [...new DOMParser().parseFromString(i.value, "text/html").body.childNodes].map((e, n) => Mt(e, t, String(n))).filter((e) => e != null);
			return p("div", {
				...n,
				class: ["rc", n.class]
			}, e);
		};
	}
}, [["__scopeId", "data-v-db98d003"]]), Pt = { class: "input-desc" }, Ft = ["aria-label"], It = ["title"], Lt = ["title"], Rt = ["title"], zt = ["aria-expanded"], Bt = ["onMousedown"], Vt = ["title", "onMousedown"], Ht = { class: "desc-color-icon" }, Ut = [
	"title",
	"aria-label",
	"aria-expanded"
], Wt = { class: "desc-link-field" }, Gt = ["placeholder"], Kt = { class: "desc-link-field" }, qt = {
	key: 0,
	class: "desc-link-error"
}, Jt = { class: "desc-link-actions" }, Yt = {
	type: "submit",
	class: "desc-link-save"
}, Xt = ["data-placeholder", "aria-label"], Zt = {
	key: 2,
	class: "desc-empty"
}, Qt = /*#__PURE__*/ L({
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
			default: () => tt
		},
		maxHeadingLevel: {
			type: Number,
			default: 6,
			validator: (e) => e >= 1 && e <= 6
		},
		labels: {
			type: Object,
			default: () => ({})
		}
	},
	emits: [
		"update:modelValue",
		"focus",
		"blur",
		"node-select"
	],
	setup(t, { expose: n, emit: d }) {
		let p = {
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
		}, m = t, v = d, y = r(() => ({
			...p,
			...m.labels
		})), E = r(() => Array.from({ length: m.maxHeadingLevel }, (e, t) => t + 1)), O = C(!1), k = C(null), A = C(null), F = C(null), L = C(null), R = C(!1), z = C(null), B = C(null), V = C(null), H = C(!1), U = S({
			text: "",
			url: ""
		}), W = r(() => z.value || F.value);
		function ee(e) {
			return kt(e) || "<p><br></p>";
		}
		function te(e) {
			!m.editable || !A.value || document.activeElement !== A.value && (A.value.innerHTML = ee(e));
		}
		M(() => m.modelValue, te), M(() => m.editable, (e) => {
			e && h(() => te(m.modelValue));
		}), b(() => {
			te(m.modelValue), document.execCommand("defaultParagraphSeparator", !1, "p");
		});
		function G(e) {
			return !!(e && A.value?.contains(e.commonAncestorContainer));
		}
		function K() {
			let e = window.getSelection();
			if (!e?.rangeCount) return;
			let t = e.getRangeAt(0);
			G(t) && (V.value = t.cloneRange());
		}
		function ne() {
			A.value?.focus();
			let e = window.getSelection();
			return !e || !G(V.value) ? !1 : (e.removeAllRanges(), e.addRange(V.value), !0);
		}
		function re() {
			return G(V.value) ? V.value.toString().trim() : "";
		}
		function ie(e) {
			let t = Tt(e?.kind, e?.payload, e?.label);
			if (!t || !A.value) return null;
			ne(), document.execCommand("insertHTML", !1, t), Y();
			let n = A.value.querySelectorAll("[data-rich-node]"), r = n[n.length - 1] || null;
			return r && (B.value = r, ce(r)), r;
		}
		function ae(e) {
			return e?.nodeType === Node.ELEMENT_NODE && e.matches?.("[data-rich-node]") ? e : e?.element?.matches?.("[data-rich-node]") ? e.element : B.value?.isConnected ? B.value : null;
		}
		function oe(e, t) {
			let n = ae(e), r = Tt(t?.kind, t?.payload, t?.label);
			if (!n || !r) return null;
			let i = document.createElement("template");
			i.innerHTML = r;
			let a = i.content.firstElementChild;
			return n.replaceWith(a), B.value = a, Y(), a;
		}
		function se(e) {
			let t = ae(e);
			if (!t) return !1;
			let n = t.nextSibling || t.parentNode;
			return t.remove(), B.value = null, n?.nodeType === Node.ELEMENT_NODE && Q(n), Y(), !0;
		}
		function ce(e) {
			let t = document.createRange(), n = window.getSelection();
			t.setStartAfter(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t), V.value = t.cloneRange();
		}
		function le(e = null) {
			K(), z.value = e, H.value = !1, U.text = e?.textContent || re(), U.url = e?.getAttribute?.("href") || "", R.value = !0, h(() => L.value?.focus());
		}
		function q(e = !1) {
			e !== !0 && (R.value = !1, z.value = null, H.value = !1);
		}
		function ue() {
			let e = xt(U.url);
			if (!e) {
				H.value = !0;
				return;
			}
			let t = U.text.trim() || e;
			if (z.value?.isConnected) z.value.setAttribute("href", e), z.value.textContent = t;
			else {
				ne();
				let n = window.getSelection();
				if (n?.rangeCount && !n.getRangeAt(0).collapsed && t === n.toString().trim()) document.execCommand("createLink", !1, e);
				else {
					let r = document.createElement("a");
					r.href = e, r.textContent = t;
					let i = n?.rangeCount ? n.getRangeAt(0) : null;
					i && G(i) && (i.deleteContents(), i.insertNode(r), ce(r));
				}
			}
			q(!1), Y();
		}
		function de() {
			let e = z.value;
			if (!e?.isConnected) return q(!1);
			e.replaceWith(...e.childNodes), q(!1), Y();
		}
		function fe(e) {
			let t = e.target.closest?.("a");
			if (t && A.value?.contains(t)) {
				e.preventDefault(), le(t);
				return;
			}
			let n = e.target.closest?.("[data-rich-node]");
			!n || !A.value?.contains(n) || (e.preventDefault(), B.value = n, v("node-select", {
				element: n,
				node: Et(n)
			}));
		}
		let pe = {
			focus: () => A.value?.focus(),
			rememberSelection: K,
			insertRichNode: ie,
			updateRichNode: oe,
			removeRichNode: se
		};
		function me(e) {
			return y.value.heading.replace("{level}", String(e));
		}
		function he(e) {
			A.value?.focus(), document.execCommand("styleWithCSS", !1, !1), document.execCommand(e, !1, null), h(Y);
		}
		function ge(e) {
			A.value?.focus(), document.execCommand("formatBlock", !1, e), O.value = !1, h(Y);
		}
		function J(e) {
			if (A.value?.focus(), document.execCommand("styleWithCSS", !1, !0), e) {
				document.execCommand("foreColor", !1, e), Y();
				return;
			}
			document.execCommand("removeFormat", !1, null), h(() => {
				A.value && (A.value.querySelectorAll("span").forEach((e) => {
					e.style.removeProperty("font-family"), e.style.cssText.trim() || e.replaceWith(...e.childNodes);
				}), Y());
			});
		}
		function _e() {
			if (A.value) {
				be();
				for (let e of [...A.value.children]) {
					if (e.tagName !== "DIV") continue;
					let t = document.createElement("p");
					t.innerHTML = e.innerHTML, e.replaceWith(t);
				}
				Y();
			}
		}
		function ve() {
			if (!A.value) return "";
			ye(A.value);
			let e = kt(A.value.innerHTML);
			return e === "<p><br></p>" || e === "<br>" ? "" : e;
		}
		function Y() {
			v("update:modelValue", ve());
		}
		function ye(e) {
			e.querySelectorAll("strong").forEach((e) => X(e, "b")), e.querySelectorAll("i").forEach((e) => X(e, "em")), e.querySelectorAll("span").forEach((e) => {
				let t = e.style.fontWeight, n = e.style.fontStyle, r = e.style.textDecorationLine || e.style.textDecoration, i = null;
				t === "bold" || Number(t) >= 600 ? (e.style.removeProperty("font-weight"), i = "b") : n === "italic" ? (e.style.removeProperty("font-style"), i = "em") : String(r).includes("underline") && (e.style.removeProperty("text-decoration"), e.style.removeProperty("text-decoration-line"), i = "u"), i && X(e, i);
			});
		}
		function X(e, t) {
			let n = document.createElement(t);
			for (let t of [...e.attributes]) (t.name !== "style" || e.style.cssText.trim()) && n.setAttribute(t.name, t.value);
			return n.append(...e.childNodes), e.replaceWith(n), n;
		}
		function Z(e) {
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
		function Q(e) {
			let t = document.createRange(), n = window.getSelection();
			t.selectNodeContents(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t);
		}
		function be() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !A.value?.contains(e.anchorNode)) return;
			let t = Z(e.anchorNode);
			if (!t || t.tagName === "LI") return;
			let n = t.textContent || "";
			(n === "- " || n === " - ") && xe(t);
		}
		function xe(e) {
			let t = document.createElement("li");
			t.innerHTML = "<br>";
			let n = document.createElement("ul");
			n.appendChild(t), e.replaceWith(n), Q(t);
		}
		function Se() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !A.value?.contains(e.anchorNode)) return !1;
			let t = Z(e.anchorNode);
			if (!t || t.tagName === "LI") return !1;
			let n = (t.textContent || "").replace(/\u00a0/g, " ");
			return n !== "-" && n !== " -" ? !1 : (xe(t), !0);
		}
		function Ce(e) {
			if (e.key === " ") {
				Se() && (e.preventDefault(), Y());
				return;
			}
			e.key === "Enter" && (e.preventDefault(), document.execCommand(e.shiftKey ? "insertLineBreak" : "insertParagraph"), Y());
		}
		function we(e) {
			A.value?.focus(), document.execCommand("insertHTML", !1, e), Y();
		}
		function Te(e) {
			e.preventDefault();
			let t = e.clipboardData?.getData("text/html"), n = e.clipboardData?.getData("text/plain") || "";
			we(t ? kt(t) : At(n));
		}
		function Ee(e) {
			let t = document.caretPositionFromPoint?.(e.clientX, e.clientY), n = document.caretRangeFromPoint?.(e.clientX, e.clientY), r = document.createRange();
			if (t) r.setStart(t.offsetNode, t.offset);
			else if (n) r.setStart(n.startContainer, n.startOffset);
			else return;
			r.collapse(!0);
			let i = window.getSelection();
			i.removeAllRanges(), i.addRange(r);
		}
		function De(e) {
			e.preventDefault(), Ee(e);
			let t = e.dataTransfer?.getData("text/html"), n = e.dataTransfer?.getData("text/plain") || "";
			we(t ? kt(t) : At(n));
		}
		function Oe(e) {
			Y(), v("blur", e);
		}
		return n({
			focus: () => A.value?.focus(),
			commit: Y,
			rememberSelection: K,
			insertRichNode: ie,
			updateRichNode: oe,
			removeRichNode: se
		}), (n, r) => (x(), o("div", Pt, [t.editable ? (x(), o(e, { key: 0 }, [
			s("div", {
				class: "desc-toolbar",
				role: "toolbar",
				"aria-label": y.value.toolbar
			}, [
				s("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.bold,
					onMousedown: r[0] ||= I((e) => he("bold"), ["prevent"])
				}, [s("b", null, D(y.value.boldShort), 1)], 40, It),
				s("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.italic,
					onMousedown: r[1] ||= I((e) => he("italic"), ["prevent"])
				}, [s("i", null, D(y.value.italicShort), 1)], 40, Lt),
				s("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.underline,
					onMousedown: r[2] ||= I((e) => he("underline"), ["prevent"])
				}, [s("u", null, D(y.value.underlineShort), 1)], 40, Rt),
				r[13] ||= s("div", { class: "desc-sep" }, null, -1),
				s("button", {
					ref_key: "headingTrigger",
					ref: k,
					type: "button",
					class: "desc-btn desc-btn-wide",
					"aria-expanded": O.value,
					"aria-haspopup": "menu",
					onMousedown: r[3] ||= I((e) => O.value = !O.value, ["prevent"])
				}, [l(D(y.value.paragraph) + " ", 1), r[11] ||= s("span", {
					class: "desc-caret",
					"aria-hidden": "true"
				}, "▾", -1)], 40, zt),
				u(Je, {
					open: O.value,
					anchor: k.value,
					"min-width": 160,
					"z-index": 4500,
					role: "menu",
					"aria-label": y.value.paragraph,
					"onUpdate:open": r[5] ||= (e) => O.value = e
				}, {
					default: N(() => [s("button", {
						type: "button",
						class: "desc-drop-item drop-p",
						role: "menuitem",
						onMousedown: r[4] ||= I((e) => ge("p"), ["prevent"])
					}, D(y.value.normal), 33), (x(!0), o(e, null, w(E.value, (e) => (x(), o("button", {
						key: e,
						type: "button",
						class: g(["desc-drop-item", `drop-h${e}`]),
						role: "menuitem",
						onMousedown: I((t) => ge(`h${e}`), ["prevent"])
					}, D(me(e)), 43, Bt))), 128))]),
					_: 1
				}, 8, [
					"open",
					"anchor",
					"aria-label"
				]),
				r[14] ||= s("div", { class: "desc-sep" }, null, -1),
				u(ct, {
					"allow-clear": "",
					colors: t.colors,
					"model-value": "",
					"clear-label": y.value.clearColor,
					"aria-label": y.value.color,
					"onUpdate:modelValue": J
				}, {
					trigger: N(({ toggle: e }) => [s("button", {
						type: "button",
						class: "desc-btn",
						title: y.value.color,
						onMousedown: I((t) => {
							O.value = !1, e();
						}, ["prevent"])
					}, [s("span", Ht, D(y.value.colorShort), 1)], 40, Vt)]),
					_: 1
				}, 8, [
					"colors",
					"clear-label",
					"aria-label"
				]),
				r[15] ||= s("div", { class: "desc-sep" }, null, -1),
				s("button", {
					ref_key: "linkTrigger",
					ref: F,
					type: "button",
					class: g(["desc-btn", { active: R.value }]),
					title: y.value.link,
					"aria-label": y.value.link,
					"aria-expanded": R.value,
					"aria-haspopup": "dialog",
					onMousedown: r[6] ||= I((e) => le(), ["prevent"])
				}, [...r[12] ||= [s("span", { "aria-hidden": "true" }, "↗", -1)]], 42, Ut),
				T(n.$slots, "toolbar", {
					editor: pe,
					insertRichNode: ie,
					updateRichNode: oe,
					removeRichNode: se
				}, void 0, !0)
			], 8, Ft),
			u(Je, {
				open: R.value,
				anchor: W.value,
				"min-width": 260,
				"z-index": 4500,
				role: "dialog",
				"aria-label": y.value.link,
				"onUpdate:open": q
			}, {
				default: N(() => [s("form", {
					class: "desc-link-form",
					onSubmit: I(ue, ["prevent"])
				}, [
					s("label", Wt, [s("span", null, D(y.value.linkText), 1), P(s("input", {
						"onUpdate:modelValue": r[7] ||= (e) => U.text = e,
						type: "text",
						placeholder: y.value.linkTextPlaceholder
					}, null, 8, Gt), [[j, U.text]])]),
					s("label", Kt, [s("span", null, D(y.value.linkUrl), 1), P(s("input", {
						ref_key: "linkUrlInput",
						ref: L,
						"onUpdate:modelValue": r[8] ||= (e) => U.url = e,
						type: "text",
						inputmode: "url",
						placeholder: "https://…"
					}, null, 512), [[j, U.url]])]),
					H.value ? (x(), o("span", qt, D(y.value.linkInvalid), 1)) : a("", !0),
					s("div", Jt, [
						z.value ? (x(), o("button", {
							key: 0,
							type: "button",
							class: "desc-link-remove",
							onClick: de
						}, D(y.value.removeLink), 1)) : a("", !0),
						s("button", {
							type: "button",
							class: "desc-link-cancel",
							onClick: r[9] ||= (e) => q(!1)
						}, D(y.value.cancel), 1),
						s("button", Yt, D(y.value.saveLink), 1)
					])
				], 32)]),
				_: 1
			}, 8, [
				"open",
				"anchor",
				"aria-label"
			]),
			s("div", {
				ref_key: "editorEl",
				ref: A,
				class: "desc-editor",
				contenteditable: "true",
				spellcheck: "false",
				translate: "no",
				autocorrect: "off",
				"data-placeholder": t.placeholder,
				"aria-label": t.ariaLabel || t.placeholder,
				onInput: _e,
				onKeydown: Ce,
				onKeyup: K,
				onMouseup: K,
				onClick: fe,
				onPaste: Te,
				onDrop: De,
				onFocus: r[10] ||= (e) => n.$emit("focus", e),
				onBlur: Oe
			}, null, 40, Xt)
		], 64)) : t.modelValue ? (x(), i(Nt, {
			key: 1,
			class: "desc-view",
			html: t.modelValue
		}, c({ _: 2 }, [n.$slots.node ? {
			name: "node",
			fn: N((e) => [T(n.$slots, "node", _(f(e)), void 0, !0)]),
			key: "0"
		} : void 0]), 1032, ["html"])) : (x(), o("div", Zt, D(t.placeholder), 1))]));
	}
}, [["__scopeId", "data-v-c3921fdf"]]), $t = [
	"aria-label",
	"aria-expanded",
	"disabled"
], en = {
	class: "share-account-avatar",
	"aria-hidden": "true"
}, tn = {
	key: 0,
	class: "share-account-label"
}, nn = {
	key: 1,
	class: "share-account-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true"
}, rn = /*#__PURE__*/ L({
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
		let t = e, n = r(() => (t.avatarText || t.label.trim().charAt(0) || "?").toUpperCase());
		return (t, r) => (x(), i(Re, {
			title: e.title,
			disabled: e.disabled,
			block: ""
		}, {
			trigger: N(({ open: i }) => [s("button", {
				type: "button",
				class: g(["share-account-trigger", {
					"share-account-trigger--expanded": e.expanded,
					"share-account-trigger--open": i
				}]),
				"aria-label": e.ariaLabel || e.label || e.title,
				"aria-expanded": i,
				"aria-haspopup": "menu",
				disabled: e.disabled
			}, [
				s("span", en, [T(t.$slots, "avatar", {}, () => [l(D(n.value), 1)], !0)]),
				e.expanded ? (x(), o("span", tn, D(e.label), 1)) : a("", !0),
				e.expanded ? (x(), o("svg", nn, [...r[0] ||= [s("path", {
					d: "m4 6 4 4 4-4",
					stroke: "currentColor",
					"stroke-width": "1.7",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, null, -1)]])) : a("", !0)
			], 10, $t)]),
			default: N(({ close: e }) => [T(t.$slots, "default", { close: e }, void 0, !0)]),
			_: 3
		}, 8, ["title", "disabled"]));
	}
}, [["__scopeId", "data-v-e71617a9"]]), an = {
	key: 1,
	class: "share-app-shell__rail"
}, on = /*#__PURE__*/ L({
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
		let t = e, n = r(() => ({ "--share-shell-rail-w": typeof t.railWidth == "number" ? `${t.railWidth}px` : t.railWidth }));
		return (t, r) => (x(), o("div", {
			class: g(["share-app-shell", [
				`share-app-shell--${e.sidebarMode}`,
				`share-app-shell--breakpoint-${e.mobileBreakpoint}`,
				{
					"share-app-shell--without-sidebar": !e.sidebarVisible,
					"share-app-canvas": e.canvas
				}
			]]),
			style: v(n.value)
		}, [
			e.sidebarVisible ? T(t.$slots, "sidebar", {}, void 0, !0, 0) : a("", !0),
			(x(), i(E(e.contentTag), { class: "share-app-shell__content" }, {
				default: N(() => [T(t.$slots, "default", {}, void 0, !0)]),
				_: 3
			})),
			t.$slots.rail ? (x(), o("aside", an, [T(t.$slots, "rail", {}, void 0, !0)])) : a("", !0),
			T(t.$slots, "overlay", {}, void 0, !0)
		], 6));
	}
}, [["__scopeId", "data-v-db4502d8"]]), sn = ["aria-label", "title"], cn = {
	class: "share-sidebar-toggle__icon sidebar-icon",
	"aria-hidden": "true"
}, ln = {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none"
}, un = {
	key: 0,
	d: "m11 6-3 3 3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, dn = {
	key: 1,
	d: "m9 6 3 3-3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, fn = { class: "share-sidebar-label sidebar-label" }, pn = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("button", {
			type: "button",
			class: "share-sidebar-toggle sidebar-toggle",
			"aria-label": e.expanded ? e.collapseLabel : e.expandLabel,
			title: e.expanded ? e.collapseLabel : e.expandLabel
		}, [s("span", cn, [(x(), o("svg", ln, [
			n[0] ||= s("rect", {
				x: "2.25",
				y: "2.25",
				width: "13.5",
				height: "13.5",
				rx: "2",
				stroke: "currentColor",
				"stroke-width": "1.5"
			}, null, -1),
			n[1] ||= s("path", {
				d: "M6.25 2.75v12.5",
				stroke: "currentColor",
				"stroke-width": "1.5"
			}, null, -1),
			e.expanded ? (x(), o("path", un)) : (x(), o("path", dn))
		]))]), s("span", fn, D(e.expanded ? e.collapseLabel : e.expandLabel), 1)], 8, sn));
	}
}, [["__scopeId", "data-v-82e613bd"]]), mn = {
	key: 0,
	class: "share-sidebar-head"
}, hn = ["aria-label"], gn = {
	key: 1,
	class: "share-sidebar-tools"
}, _n = {
	key: 2,
	class: "share-sidebar-account"
}, vn = /*#__PURE__*/ L({
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
		let c = e, l = n;
		function u() {
			if (!c.storageKey || typeof window > "u") return c.defaultExpanded;
			try {
				let e = window.localStorage.getItem(c.storageKey);
				return e == null ? c.defaultExpanded : e === "true";
			} catch {
				return c.defaultExpanded;
			}
		}
		let d = C(u()), f = r({
			get: () => c.modelValue ?? d.value,
			set: (e) => {
				d.value = e, l("update:modelValue", e), l("change", e);
			}
		});
		M(f, (e) => {
			if (!(!c.storageKey || typeof window > "u")) try {
				window.localStorage.setItem(c.storageKey, String(e));
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
		}), (t, n) => (x(), o("aside", { class: g(["share-app-sidebar app-sidebar", [
			f.value && "share-app-sidebar--expanded app-sidebar--expanded",
			`share-app-sidebar--${e.position}`,
			`share-app-sidebar--mobile-${e.mobileMode}`,
			`share-app-sidebar--breakpoint-${e.mobileBreakpoint}`
		]]) }, [
			t.$slots.brand ? (x(), o("div", mn, [T(t.$slots, "brand", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)])) : a("", !0),
			s("nav", {
				class: "share-sidebar-nav",
				"aria-label": e.ariaLabel
			}, [T(t.$slots, "default", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)], 8, hn),
			e.showToggle || t.$slots.tools ? (x(), o("div", gn, [e.showToggle ? (x(), i(pn, {
				key: 0,
				expanded: f.value,
				"expand-label": e.expandLabel,
				"collapse-label": e.collapseLabel,
				onClick: h
			}, null, 8, [
				"expanded",
				"expand-label",
				"collapse-label"
			])) : a("", !0), T(t.$slots, "tools", {
				expanded: f.value,
				expand: p,
				collapse: m,
				toggle: h
			}, void 0, !0)])) : a("", !0),
			t.$slots.account ? (x(), o("div", _n, [T(t.$slots, "account", { expanded: f.value }, void 0, !0)])) : a("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-2025fec5"]]), yn = {
	class: "share-sidebar-brand__icon sidebar-brand-icon",
	"aria-hidden": "true"
}, bn = { class: "share-sidebar-label share-sidebar-brand__label sidebar-label sidebar-brand-label" }, xn = /*#__PURE__*/ L(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (x(), i(E(e.as), m({
			class: "share-sidebar-brand sidebar-brand",
			"aria-label": e.ariaLabel || e.label
		}, t.$attrs), {
			default: N(() => [s("span", yn, [T(t.$slots, "icon", {}, () => [e.icon ? (x(), i(E(e.icon), {
				key: 0,
				size: 22,
				"stroke-width": 1.8
			})) : a("", !0)], !0)]), s("span", bn, [T(t.$slots, "default", {}, () => [l(D(e.label), 1)], !0)])]),
			_: 3
		}, 16, ["aria-label"]));
	}
}), [["__scopeId", "data-v-a9c8581a"]]), Sn = { class: "share-sidebar-group" }, Cn = /*#__PURE__*/ L({
	__name: "SidebarGroup",
	props: { label: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (x(), o("div", Sn, [T(t.$slots, "default", {}, () => [l(D(e.label), 1)], !0)]));
	}
}, [["__scopeId", "data-v-169df1ac"]]), wn = {
	class: "share-sidebar-icon sidebar-icon",
	"aria-hidden": "true"
}, Tn = { class: "share-sidebar-label sidebar-label" }, En = /*#__PURE__*/ L(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (x(), i(E(e.as), m({
			class: ["share-sidebar-link sidebar-link", { active: e.active }],
			title: e.title || e.label,
			"aria-current": e.active ? "page" : void 0
		}, t.$attrs), {
			default: N(() => [s("span", wn, [T(t.$slots, "icon", {}, () => [e.icon ? (x(), i(E(e.icon), {
				key: 0,
				size: 20,
				"stroke-width": 1.8
			})) : a("", !0)], !0)]), s("span", Tn, [T(t.$slots, "default", {}, () => [l(D(e.label), 1)], !0)])]),
			_: 3
		}, 16, [
			"class",
			"title",
			"aria-current"
		]));
	}
}), [["__scopeId", "data-v-28979fe2"]]), Dn = {
	key: 0,
	class: "share-editor-panel__title"
}, On = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("div", { class: g(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (x(), o("div", Dn, [T(t.$slots, "title", {}, () => [l(D(e.title), 1)], !0)])) : a("", !0), T(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-055dcd8d"]]), kn = { class: "share-editor-section-title" }, An = { class: "share-editor-section-title__text" }, jn = {
	key: 0,
	class: "share-editor-section-title__actions"
}, Mn = /*#__PURE__*/ L({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (x(), o("div", kn, [s("span", An, [T(t.$slots, "default", {}, () => [l(D(e.title), 1)], !0)]), t.$slots.actions ? (x(), o("span", jn, [T(t.$slots, "actions", {}, void 0, !0)])) : a("", !0)]));
	}
}, [["__scopeId", "data-v-03237796"]]), Nn = { class: "share-editor-section" }, Pn = /*#__PURE__*/ L({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (x(), o("section", Nn, [e.title || t.$slots.title ? (x(), i(Mn, {
			key: 0,
			title: e.title
		}, c({ _: 2 }, [t.$slots.title ? {
			name: "default",
			fn: N(() => [T(t.$slots, "title", {}, void 0, !0)]),
			key: "0"
		} : void 0, t.$slots.actions ? {
			name: "actions",
			fn: N(() => [T(t.$slots, "actions", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, ["title"])) : a("", !0), T(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-6a56d656"]]), Fn = {}, In = { class: "share-editor-total" };
function Ln(e, t) {
	return x(), o("div", In, [T(e.$slots, "default", {}, void 0, !0)]);
}
var Rn = /*#__PURE__*/ L(Fn, [["render", Ln], ["__scopeId", "data-v-72dfd940"]]);
//#endregion
//#region src/composables/useFullscreenViewportHeight.js
function zn(e = .94) {
	let t = C(`${Math.round(e * 100)}dvh`);
	function n() {
		if (typeof window > "u") return;
		let n = window.visualViewport?.height || window.innerHeight;
		t.value = `${Math.floor(n * e)}px`;
	}
	return b(() => {
		n(), window.addEventListener("resize", n), window.visualViewport?.addEventListener("resize", n);
	}), y(() => {
		window.removeEventListener("resize", n), window.visualViewport?.removeEventListener("resize", n);
	}), t;
}
//#endregion
//#region src/internal/overlayStack.js
var Bn = [], Vn = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", Hn = 0, Un = "";
function Wn(e = Symbol("share-overlay")) {
	return Bn.push(e), e;
}
function Gn(e) {
	let t = Bn.lastIndexOf(e);
	t >= 0 && Bn.splice(t, 1);
}
function Kn(e) {
	return Bn.at(-1) === e;
}
function qn(e) {
	e && ([...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")].find((e) => e.getClientRects().length > 0) || e).focus?.({ preventScroll: !0 });
}
function Jn(e, t) {
	if (e.key !== "Tab" || !t) return;
	let n = [...t.querySelectorAll(Vn)].filter((e) => e.getClientRects().length > 0);
	if (!n.length) {
		e.preventDefault(), t.focus?.({ preventScroll: !0 });
		return;
	}
	let r = n[0], i = n.at(-1);
	e.shiftKey && (document.activeElement === r || !t.contains(document.activeElement)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || !t.contains(document.activeElement)) && (e.preventDefault(), r.focus());
}
function Yn(e) {
	e instanceof HTMLElement && e.isConnected && e.focus({ preventScroll: !0 });
}
function Xn() {
	if (typeof document > "u") return () => {};
	Hn === 0 && (Un = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden"), Hn += 1;
	let e = !1;
	return () => {
		e || (e = !0, Hn = Math.max(0, Hn - 1), Hn === 0 && (document.documentElement.style.overflow = Un));
	};
}
var Zn = /* @__PURE__ */ new WeakMap();
function Qn(e, { blur: t = "8px", duration: n = "300ms" } = {}) {
	if (!e) return () => {};
	let r = Zn.get(e);
	r || (r = {
		count: 0,
		filter: e.style.filter,
		transition: e.style.transition
	}, Zn.set(e, r)), r.count += 1, e.style.transition = `filter ${n} ease`, e.style.filter = `blur(${t})`;
	let i = !1;
	return () => {
		i || (i = !0, r.count = Math.max(0, r.count - 1), !(r.count > 0) && (e.style.filter = r.filter, e.style.transition = r.transition, Zn.delete(e)));
	};
}
//#endregion
//#region src/components/overlay/AppModal.vue
var $n = ["aria-label"], er = {
	key: 0,
	class: "am-handle"
}, tr = ["aria-label"], nr = () => window.innerWidth <= 640, rr = 260, $ = 280, ir = "cubic-bezier(0.32, 0.72, 0, 1)", ar = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function or(e) {
	e.focus({ preventScroll: !0 });
}
var sr = /*#__PURE__*/ L({
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
	setup(e, { expose: n, emit: c }) {
		let l = e, u = c, d = C(null), f = C(null), p = zn(), m = r(() => typeof l.width == "number" ? `${l.width}px` : l.width || "480px"), _ = C(!1), S = C(0), w = C(0), E = C(0), D = !1, k = null, A = !1, j = () => {}, M = Symbol("app-modal"), N = typeof document < "u" ? document.activeElement : null;
		function P(e) {
			if (!Kn(M)) return;
			if (e.key === "Escape") {
				let t = e.target;
				if (l.escapeBlursInput && t && (t.matches?.("input, textarea, select") || t.isContentEditable)) {
					e.preventDefault(), t.blur();
					return;
				}
				R();
				return;
			}
			if (e.key !== "Tab") return;
			let t = [...f.value?.querySelectorAll(ar) || []].filter((e) => e.getClientRects().length > 0);
			if (!t.length) {
				e.preventDefault(), f.value?.focus();
				return;
			}
			let n = t[0], r = t.at(-1);
			e.shiftKey && (document.activeElement === n || !f.value?.contains(document.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (document.activeElement === r || !f.value?.contains(document.activeElement)) && (e.preventDefault(), n.focus());
		}
		function F() {
			let e = d.value, t = f.value;
			!e || !t || (e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", nr() ? t.style.transform = "translateY(100%)" : (t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					let n = "cubic-bezier(0, 0, 0.4, 1)", r = `opacity ${rr}ms ${n}, backdrop-filter ${rr}ms ${n}, -webkit-backdrop-filter ${rr}ms ${n}`;
					e.style.transition = r, e.style.opacity = "1", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", nr() ? (t.style.transition = `transform ${rr}ms ${ir}`, t.style.transform = "translateY(0)") : (t.style.transition = `transform ${rr}ms ${ir}, opacity ${rr}ms ${n}`, t.style.transform = "none", t.style.opacity = "1"), setTimeout(() => {
						D || (e.style.transition = "", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", t.style.transition = "", t.style.transform = "", t.style.opacity = "", u("opened"));
					}, 310);
				});
			}));
		}
		function L() {
			let e = d.value, t = f.value;
			if (!e || !t) {
				k = setTimeout(() => {
					D || u("close");
				}, 0);
				return;
			}
			let n = `opacity ${$}ms ease, backdrop-filter ${$}ms ease, -webkit-backdrop-filter ${$}ms ease`;
			e.style.transition = n, e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", nr() ? (t.style.transition = `transform ${$}ms ${ir}`, t.style.transform = "translateY(100%)") : (t.style.transition = `transform ${$}ms ease, opacity ${$}ms ease`, t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), k = setTimeout(() => {
				D || u("close");
			}, 300);
		}
		function R() {
			!l.dismissible || A || (A = !0, L());
		}
		n({ requestClose: R });
		function z(e) {
			if (!l.dismissible) return;
			w.value = e.touches[0].clientY;
			let t = e.target instanceof Element ? e.target : null;
			for (; t && t !== f.value;) {
				let e = window.getComputedStyle(t);
				if (/(auto|scroll)/.test(e.overflowY) && t.scrollHeight > t.clientHeight) break;
				t = t.parentElement;
			}
			E.value = t?.scrollTop || f.value?.scrollTop || 0, _.value = !1, S.value = 0;
		}
		function B(e) {
			if (!l.dismissible) return;
			let t = e.touches[0].clientY - w.value;
			if (!_.value) {
				if (t > 8 && E.value <= 0) _.value = !0;
				else return;
			}
			e.preventDefault(), S.value = Math.max(0, t);
			let n = f.value, r = d.value;
			n && (n.style.transition = "none", n.style.transform = `translateY(${S.value}px)`), r && (r.style.transition = "none", r.style.opacity = String(Math.max(0, 1 - S.value / 320)));
		}
		function V() {
			if (!_.value) return;
			_.value = !1;
			let e = f.value, t = d.value;
			S.value > 100 ? (e && (e.style.transition = `transform ${$}ms ${ir}`, e.style.transform = "translateY(100%)"), t && (t.style.transition = `opacity ${$}ms ease`, t.style.opacity = "0"), k = setTimeout(() => {
				D || u("close");
			}, 300)) : (e && (e.style.transition = `transform ${$}ms ${ir}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), S.value = 0, setTimeout(() => {
				D || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330));
		}
		function H() {
			if (!_.value) return;
			_.value = !1, S.value = 0;
			let e = f.value, t = d.value;
			e && (e.style.transition = `transform ${$}ms ${ir}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), setTimeout(() => {
				D || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330);
		}
		return b(() => {
			Wn(M), j = Xn(), document.addEventListener("keydown", P), h(() => {
				F(), f.value?.contains(document.activeElement) || (f.value?.querySelector(ar)?.focus(), f.value?.contains(document.activeElement) || f.value?.focus());
			});
		}), y(() => {
			Gn(M), j(), document.removeEventListener("keydown", P), clearTimeout(k), D = !0, N instanceof HTMLElement && N.isConnected && or(N);
		}), (n, r) => (x(), i(t, { to: "body" }, [s("div", {
			ref_key: "overlay",
			ref: d,
			class: "am-overlay",
			style: v([e.zIndex === 3e3 ? {} : { zIndex: e.zIndex }, {
				"--am-fullscreen-height": O(p),
				"--am-width": m.value
			}]),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			onMousedown: I(R, ["self"])
		}, [s("div", {
			ref_key: "card",
			ref: f,
			class: g(["am-card", {
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
			e.showHandle ? (x(), o("div", er)) : a("", !0),
			e.showClose && !e.fullscreen ? (x(), o("button", {
				key: 1,
				class: "am-close",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: R
			}, "✕", 8, tr)) : a("", !0),
			T(n.$slots, "default", {}, void 0, !0)
		], 34)], 44, $n)]));
	}
}, [["__scopeId", "data-v-ddded319"]]), cr = { class: "aem-shell" }, lr = { class: "aem-heading" }, ur = { class: "aem-title" }, dr = {
	key: 0,
	class: "aem-subtitle"
}, fr = {
	key: 0,
	class: "aem-header-actions"
}, pr = ["aria-label"], mr = {
	key: 0,
	class: "aem-footer"
}, hr = /*#__PURE__*/ L({
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
		let t = C(null);
		function n() {
			t.value?.requestClose();
		}
		return (r, c) => (x(), i(sr, {
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
			onClose: c[0] ||= (e) => r.$emit("close"),
			onOpened: c[1] ||= (e) => r.$emit("opened")
		}, {
			default: N(() => [s("section", cr, [
				s("header", { class: g(["aem-header", { "aem-header-with-actions": !!r.$slots["header-actions"] }]) }, [
					c[3] ||= s("span", {
						class: "aem-handle",
						"aria-hidden": "true"
					}, null, -1),
					s("div", lr, [T(r.$slots, "title", {}, () => [s("h2", ur, D(e.title), 1), e.subtitle ? (x(), o("span", dr, D(e.subtitle), 1)) : a("", !0)], !0)]),
					r.$slots["header-actions"] ? (x(), o("div", fr, [T(r.$slots, "header-actions", {}, void 0, !0)])) : a("", !0),
					e.showClose ? (x(), o("button", {
						key: 1,
						class: "aem-close",
						type: "button",
						"aria-label": e.closeLabel,
						onClick: n
					}, [...c[2] ||= [s("svg", {
						viewBox: "0 0 16 16",
						fill: "none",
						width: "16",
						height: "16",
						"aria-hidden": "true"
					}, [s("path", {
						d: "M4 4l8 8M12 4l-8 8",
						stroke: "currentColor",
						"stroke-width": "1.6",
						"stroke-linecap": "round"
					})], -1)]], 8, pr)) : a("", !0)
				], 2),
				s("div", { class: g(["aem-body", {
					"aem-body-flush": !e.padded,
					"aem-body-no-scroll": !e.bodyScroll
				}]) }, [T(r.$slots, "default", {}, void 0, !0)], 2),
				r.$slots.footer ? (x(), o("footer", mr, [T(r.$slots, "footer", {}, void 0, !0)])) : a("", !0)
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
}, [["__scopeId", "data-v-0a15c618"]]), gr = {
	key: 0,
	class: "cd-message"
}, _r = { class: "cd-actions" }, vr = ["disabled"], yr = ["disabled"], br = /*#__PURE__*/ L({
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
		let n = e, c = t, l = r(() => n.open === null || n.open), u = r(() => n.confirmText || n.confirmLabel), d = r(() => n.cancelText || n.cancelLabel), f = r(() => n.confirmKind || n.variant);
		function p() {
			n.open !== null && c("update:open", !1);
		}
		function m() {
			n.loading || (c("cancel"), p());
		}
		function h() {
			n.loading || (c("confirm"), p());
		}
		return (t, n) => l.value ? (x(), i(hr, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: N(() => [s("div", _r, [s("button", {
				type: "button",
				class: "cd-btn-cancel",
				disabled: e.loading,
				onClick: m
			}, D(d.value), 9, vr), s("button", {
				type: "button",
				class: g(["cd-btn-confirm", `cd-btn--${f.value}`]),
				disabled: e.loading,
				onClick: h
			}, D(e.loading ? e.loadingLabel : u.value), 11, yr)])]),
			default: N(() => [e.message ? (x(), o("div", gr, D(e.message), 1)) : a("", !0)]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : a("", !0);
	}
}, [["__scopeId", "data-v-2819b01e"]]), xr = {
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
		return (t, n) => e.open ? (x(), i(sr, {
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
			default: N(() => [T(t.$slots, "default")]),
			_: 3
		}, 8, [
			"width",
			"z-index",
			"aria-label",
			"dismissible",
			"escape-blurs-input"
		])) : a("", !0);
	}
};
//#endregion
//#region src/composables/useContainerMorph.js
function Sr({ open: e = 420, close: t = 300 } = {}) {
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
	], a = C(!1), o = C(!1), s = null;
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
var Cr = ["aria-label"], wr = { class: "ms-head-content" }, Tr = ["aria-label"], Er = 320, Dr = 260, Or = "8px", kr = /*#__PURE__*/ L({
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
	setup(e, { expose: n, emit: c }) {
		let l = e, u = c, d = Ke(), f = A(), p = r(() => l.mode === "add"), m = r(() => l.showClose === null ? !!f.head : l.showClose), _ = r(() => l.nav ? l.nav.view.value : "detail"), S = r(() => l.nav ? l.nav.detailStyle.value : null), w = r(() => l.nav ? l.nav.subStyle.value : null), E = r(() => !!l.nav && _.value !== "detail"), D = C(null), k = C(null), j = C(null), N = C(null), P = C(null), F = C(null), L = C(!1), R = C(!1), z = C(!1), B = C(!1), V = C(!1), { EASE: H, visible: U, morphing: W, playClose: ee, playOpen: te } = Sr(), G = () => d.value ? "0px" : "18px", K = r(() => ({
			"--ms-w": `${l.width}px`,
			"--ms-body-w": `${l.width}px`,
			"--ms-frame": l.frameColor || void 0
		}));
		function ne() {
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
		function re() {
			if (l.nav && _.value !== "detail") {
				l.nav.backToDetail(), u("back");
				return;
			}
			if (V.value = !1, Te(!1), p.value) {
				z.value = !1, U.value = !1, setTimeout(() => u("close"), 320);
				return;
			}
			ee(D.value, ne(), {
				fromRadius: G(),
				toRadius: l.originRadius
			}, () => u("close"));
		}
		function ie() {
			R.value = !0, V.value = !1, U.value = !1, Te(!1), setTimeout(() => u("close"), 220);
		}
		let ae = Symbol("morph-sheet"), oe = typeof document < "u" ? document.activeElement : null;
		function se(e) {
			if (Kn(ae)) {
				if (e.key === "Escape") {
					re();
					return;
				}
				Jn(e, D.value);
			}
		}
		function ce(e) {
			let t = e?.firstElementChild;
			return t ? t.scrollHeight : e?.scrollHeight || 0;
		}
		function le() {
			return Math.floor(window.innerHeight * .9) - (k.value?.offsetHeight || 0) - (j.value?.offsetHeight || 0);
		}
		function q(e) {
			if (d.value || !N.value || W.value) return;
			let t = l.nav ? l.nav.pos.value : 0, n = ce(P.value), r = F.value ? ce(F.value) : n, i = n * (1 - t) + r * t, a = Math.min(i, Math.max(120, le()));
			N.value.style.transition = e ? `height ${Er}ms ${H}` : "none", N.value.style.height = `${a}px`;
		}
		let ue = null;
		function de() {
			ue && (ue.disconnect(), [P.value?.firstElementChild, F.value?.firstElementChild].forEach((e) => {
				e && ue.observe(e);
			}));
		}
		function fe() {
			W.value || l.nav && l.nav.animating.value || me || q(!1);
		}
		l.nav && (M(() => l.nav.pos.value, () => q(l.nav.animating.value)), M(() => l.nav.view.value, (e, t) => h(() => {
			de(), e !== "detail" && t === "detail" && F.value && (F.value.offsetWidth, l.nav.enterSub()), l.nav.animating.value || q(!1);
		})));
		let pe = C(0), me = !1, he = 0, ge = 0, J = null, _e = 0, ve = null, Y = 0, ye = 0, X = 0;
		function Z(e) {
			!d.value || W.value || (he = e.touches[0].clientX, ge = e.touches[0].clientY, ve = e.target, J = null);
		}
		function Q() {
			let e = ve;
			for (; e && e !== D.value;) {
				if (e.scrollHeight > e.clientHeight + 1) {
					let t = getComputedStyle(e).overflowY;
					if ((t === "auto" || t === "scroll") && e.scrollTop > 0) return !1;
				}
				e = e.parentElement;
			}
			return !0;
		}
		function be(e) {
			if (!d.value || W.value || J === "scroll") return;
			let t = e.touches[0].clientX - he, n = e.touches[0].clientY - ge;
			if (J === null) {
				if (l.showBack && l.nav && t > 8 && Math.abs(t) > Math.abs(n)) {
					J = "back", me = !0, _e = t, Y = e.touches[0].clientX, ye = e.timeStamp, X = 0, l.nav.dragStart(N.value?.clientWidth || window.innerWidth);
					return;
				}
				if (n > 6 && Q() && Math.abs(n) >= Math.abs(t)) J = "drag";
				else if (Math.abs(n) > 6 || Math.abs(t) > 6) {
					J = "scroll";
					return;
				} else return;
			}
			if (J === "back") {
				_e = Math.max(0, t), e.cancelable && e.preventDefault();
				let n = e.touches[0].clientX, r = e.timeStamp;
				r > ye && (X = (n - Y) / (r - ye)), Y = n, ye = r, l.nav.dragMove(_e);
				return;
			}
			if (J !== "drag") return;
			e.cancelable && e.preventDefault(), pe.value = Math.max(0, n);
			let r = D.value;
			r && (r.style.transition = "none", r.style.transform = `translateY(${pe.value}px)`);
		}
		function xe() {
			if (J === "back") {
				me = !1, J = null, l.nav.dragEnd(_e, X), _e = 0, X = 0;
				return;
			}
			if (J !== "drag") {
				J = null;
				return;
			}
			J = null;
			let e = D.value;
			if (pe.value > 120) {
				Se();
				return;
			}
			pe.value = 0, e && (e.style.transition = `transform .26s ${H}`, e.style.transform = "translateY(0)");
		}
		function Se() {
			let e = D.value;
			e && (e.style.transition = `transform ${Dr}ms ${H}`, e.style.transform = `translateY(${window.innerHeight}px)`), U.value = !1, V.value = !1, je(), Te(!1), setTimeout(() => u("close"), Dr);
		}
		let Ce = () => {};
		function we() {
			return typeof l.backgroundTarget == "string" ? document.querySelector(l.backgroundTarget) : l.backgroundTarget instanceof Element ? l.backgroundTarget : null;
		}
		function Te(e) {
			Ce(), Ce = () => {}, !(!e || d.value || !l.blurBackground) && (Ce = Qn(we(), { blur: Or }));
		}
		let Ee = "", De = "", Oe = !1;
		function ke() {
			let e = l.originEl;
			e && (Ee = e.style.opacity, De = e.style.transition);
		}
		function Ae(e) {
			let t = l.originEl;
			t && (t.style.opacity = e ? "0" : Ee);
		}
		function je() {
			let e = l.originEl;
			if (!e) return;
			Oe = !0;
			let t = De && De !== "none" ? `${De}, ` : "";
			e.style.transition = `${t}opacity ${Dr}ms ease`, e.style.opacity = "0", requestAnimationFrame(() => {
				e.style.opacity = Ee;
			}), setTimeout(() => {
				e.style.opacity = Ee, e.style.transition = De, Oe = !1;
			}, 280);
		}
		let Me = () => {};
		function Ne() {
			W.value || (d.value && N.value ? N.value.style.height = "" : q(!1));
		}
		return b(async () => {
			Wn(ae), Me = Xn(), typeof ResizeObserver < "u" && (ue = new ResizeObserver(fe)), await h(), q(!1), de(), L.value = !0, p.value ? (U.value = !0, requestAnimationFrame(() => {
				z.value = !0, B.value = !0;
			})) : (ke(), Ae(!0), te(D.value, l.originRect, {
				fromRadius: l.originRadius,
				toRadius: G()
			}), requestAnimationFrame(() => {
				B.value = !0;
			})), Te(!0), setTimeout(() => {
				V.value = !0, q(!1), qn(D.value);
			}, 20), document.addEventListener("keydown", se), window.addEventListener("resize", Ne);
		}), y(() => {
			Gn(ae), Me(), Te(!1), !p.value && !Oe && Ae(!1), document.removeEventListener("keydown", se), window.removeEventListener("resize", Ne), ue?.disconnect(), Yn(oe);
		}), n({
			close: re,
			finishNow: ie
		}), (n, r) => (x(), i(t, { to: "body" }, [s("div", {
			class: g(["ms-overlay", { visible: O(U) }]),
			style: v(e.zIndex === 1e3 ? null : { zIndex: e.zIndex }),
			onClick: I(re, ["self"])
		}, [s("div", {
			ref_key: "panelEl",
			ref: D,
			class: g(["ms-sheet", {
				shown: L.value,
				closing: R.value,
				entered: z.value,
				padded: B.value,
				"add-sheet": p.value,
				"ms-framed": e.frameColor
			}]),
			style: v(K.value),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			tabindex: "-1",
			onTouchstartPassive: Z,
			onTouchmove: be,
			onTouchend: xe,
			onTouchcancel: xe
		}, [
			r[0] ||= s("div", { class: "ms-grab" }, null, -1),
			n.$slots.head ? (x(), o("div", {
				key: 0,
				ref_key: "headEl",
				ref: k,
				class: "ms-head"
			}, [s("div", wr, [T(n.$slots, "head", {}, void 0, !0)]), m.value ? (x(), o("button", {
				key: 0,
				class: "ms-x",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: re
			}, "✕", 8, Tr)) : a("", !0)], 512)) : a("", !0),
			s("div", {
				ref_key: "bodyEl",
				ref: N,
				class: "ms-body"
			}, [s("div", {
				ref_key: "detailCellEl",
				ref: P,
				class: "ms-cell",
				style: v(S.value)
			}, [T(n.$slots, "detail", { revealed: V.value }, () => [T(n.$slots, "default", { revealed: V.value }, void 0, !0)], !0)], 4), E.value ? (x(), o("div", {
				key: 0,
				ref_key: "subCellEl",
				ref: F,
				class: "ms-cell",
				style: v(w.value)
			}, [T(n.$slots, "sub", {}, void 0, !0)], 4)) : a("", !0)], 512),
			e.showFoot && n.$slots.foot ? (x(), o("div", {
				key: 1,
				ref_key: "footEl",
				ref: j,
				class: "ms-foot"
			}, [T(n.$slots, "foot", {}, void 0, !0)], 512)) : a("", !0)
		], 46, Cr)], 6)]));
	}
}, [["__scopeId", "data-v-bab5d7c5"]]), Ar = { class: "form-actions" }, jr = ["disabled"], Mr = ["disabled"], Nr = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("div", Ar, [s("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, D(e.cancelText), 9, jr), s("button", {
			type: "button",
			class: "form-actions__submit",
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, D(e.loading ? e.loadingText : e.submitText), 9, Mr)]));
	}
}, [["__scopeId", "data-v-4749c971"]]), Pr = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], Fr = /*#__PURE__*/ L({
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
		let n = e, r = C(null);
		return b(() => {
			n.autofocus && r.value?.focus();
		}), t({ focus: () => r.value?.focus() }), (t, n) => (x(), o("input", {
			ref_key: "inputRef",
			ref: r,
			class: g(["form-text-input", {
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
			onKeydown: n[2] ||= F((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, Pr));
	}
}, [["__scopeId", "data-v-e2d6bc8e"]]), Ir = {
	key: 0,
	class: "tpd-message"
}, Lr = {
	key: 1,
	class: "tpd-label"
}, Rr = /*#__PURE__*/ L({
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
		let n = e, s = t, c = r(() => n.open === null || n.open), l = r(() => n.confirmText || n.confirmLabel), d = r(() => n.cancelText || n.cancelLabel), f = C(n.value || n.initial);
		M(() => n.value, (e) => {
			f.value = e;
		}), M(() => n.open, (e) => {
			e && h(() => {
				f.value = n.initial || n.value;
			});
		});
		function p() {
			n.open !== null && s("update:open", !1);
		}
		function m() {
			n.loading || (s("cancel"), p());
		}
		function g() {
			let e = f.value.trim();
			e && !n.loading && (s("confirm", e), s("submit", e), p());
		}
		return (t, n) => c.value ? (x(), i(hr, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: N(() => [u(Nr, {
				"submit-text": l.value,
				"cancel-text": d.value,
				"loading-text": e.loadingLabel,
				loading: e.loading,
				"can-submit": !!f.value.trim(),
				onCancel: m,
				onSubmit: g
			}, null, 8, [
				"submit-text",
				"cancel-text",
				"loading-text",
				"loading",
				"can-submit"
			])]),
			default: N(() => [
				e.message ? (x(), o("div", Ir, D(e.message), 1)) : a("", !0),
				e.label ? (x(), o("label", Lr, D(e.label), 1)) : a("", !0),
				u(Fr, {
					value: f.value,
					placeholder: e.placeholder,
					maxlength: e.maxlength,
					autofocus: "",
					"onUpdate:value": n[0] ||= (e) => f.value = e,
					onEnter: g
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
		])) : a("", !0);
	}
}, [["__scopeId", "data-v-ff9d61bb"]]), zr = { class: "form-field-label" }, Br = {
	key: 0,
	class: "form-field-hint"
}, Vr = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("div", { class: g(["form-field", { "form-field--vertical": e.vertical }]) }, [s("span", zr, [l(D(e.label), 1), e.hint ? (x(), o("span", Br, D(e.hint), 1)) : a("", !0)]), T(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-01093950"]]), Hr = { class: "fn-wrap" }, Ur = [
	"value",
	"min",
	"max"
], Wr = /*#__PURE__*/ L({
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
		function c(e) {
			r("change", i((parseInt(n.value) || 0) + e));
		}
		return (t, n) => (x(), o("div", Hr, [
			s("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[0] ||= I((e) => c(-1), ["stop"])
			}, "−"),
			s("input", {
				class: "fn-input",
				type: "number",
				value: e.value,
				min: e.min,
				max: e.max,
				onChange: a
			}, null, 40, Ur),
			s("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[1] ||= I((e) => c(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-df9f8db7"]]), Gr = ["value"], Kr = /*#__PURE__*/ L({
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
		let r = e, i = n, a = C(null);
		function s(e) {
			let t = e.target.options[e.target.selectedIndex], n = t && "_value" in t ? t._value : e.target.value;
			i("update:value", n), i("change", n);
		}
		return b(() => {
			r.autofocus && a.value?.focus();
		}), t({ focus: () => a.value?.focus() }), (t, n) => (x(), o("select", {
			ref_key: "selectRef",
			ref: a,
			class: "form-select",
			value: e.value,
			onChange: s
		}, [T(t.$slots, "default", {}, void 0, !0)], 40, Gr));
	}
}, [["__scopeId", "data-v-3eb4c36d"]]), qr = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], Jr = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("textarea", {
			class: "form-textarea",
			value: e.value,
			placeholder: e.placeholder,
			rows: e.rows,
			maxlength: e.maxlength,
			onInput: n[0] ||= (e) => t.$emit("update:value", e.target.value)
		}, null, 40, qr));
	}
}, [["__scopeId", "data-v-31024142"]]);
//#endregion
export { Me as $, wt as A, tt as B, vn as C, Qt as D, rn as E, kt as F, Ke as G, rt as H, St as I, Re as J, Ge as K, xt as L, bt as M, At as N, Nt as O, Et as P, Ne as Q, mt as R, xn as S, on as T, et as U, nt as V, Je as W, ke as X, Ae as Y, Pe as Z, Pn as _, Rr as a, ae as at, En as b, kr as c, W as ct, br as d, L as dt, Fe as et, hr as f, Rn as g, zn as h, Vr as i, ce as it, Ct as j, Tt as k, Sr as l, H as lt, or as m, Kr as n, _e as nt, Fr as o, re as ot, sr as p, We as q, Wr as r, me as rt, Nr as s, G as st, Jr as t, ye as tt, xr as u, z as ut, Mn as v, pn as w, Cn as x, On as y, ct as z };
