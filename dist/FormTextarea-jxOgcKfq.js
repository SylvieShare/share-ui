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
}, ne = /*#__PURE__*/ L({
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
}, [["__scopeId", "data-v-caeb1891"]]), re = ["aria-label"], ie = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], ae = /*#__PURE__*/ L({
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
		}, D(e.label), 43, ie))), 128))], 10, re));
	}
}, [["__scopeId", "data-v-a0098670"]]), oe = ["disabled", "aria-label"], se = {
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
}, ce = {
	key: 1,
	class: "share-remove-button__cross",
	"aria-hidden": "true"
}, le = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("button", {
			class: g(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.icon === "trash" ? (x(), o("svg", se, [...n[1] ||= [s("path", { d: "M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" }, null, -1)]])) : (x(), o("span", ce))], 10, oe));
	}
}, [["__scopeId", "data-v-b1091570"]]), ue = { class: "share-section-label__text" }, de = {
	key: 0,
	class: "share-section-label__actions"
}, G = /*#__PURE__*/ L({
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
		}, [s("span", ue, [T(t.$slots, "default", {}, () => [l(D(e.title), 1)], !0)]), t.$slots.actions ? (x(), o("span", de, [T(t.$slots, "actions", {}, void 0, !0)])) : a("", !0)], 6));
	}
}, [["__scopeId", "data-v-56c925a7"]]), K = ["aria-label"], fe = {
	viewBox: "0 0 120 120",
	role: "img",
	"aria-hidden": "true"
}, pe = [
	"stroke",
	"stroke-width",
	"stroke-dasharray",
	"stroke-dashoffset"
], me = { class: "segment-donut__center" }, he = {
	key: 0,
	class: "segment-donut__legend"
}, ge = { key: 0 }, _e = /*#__PURE__*/ L({
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
		}, [(x(), o("svg", fe, [r[0] ||= s("circle", {
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
		}, null, 8, pe))), 128))])), s("div", me, [T(n.$slots, "center", { total: l.value }, () => [s("strong", null, D(t.formatValue(l.value)), 1), s("span", null, D(t.totalLabel), 1)], !0)])], 4), t.showLegend ? (x(), o("ul", he, [(x(!0), o(e, null, w(u.value, (e) => (x(), o("li", { key: e.key }, [
			s("i", {
				style: v({ "--segment-color": e.color }),
				"aria-hidden": "true"
			}, null, 4),
			s("span", null, D(e.label), 1),
			s("strong", null, D(t.formatValue(e.value)), 1),
			t.showPercent ? (x(), o("small", ge, D(e.percent.toLocaleString(void 0, { maximumFractionDigits: 1 })) + "%", 1)) : a("", !0)
		]))), 128))])) : a("", !0)], 8, K));
	}
}, [["__scopeId", "data-v-6c69c95e"]]), q = ["aria-label"], J = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], ve = ["src"], ye = /*#__PURE__*/ L({
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
		}, null, 8, ve)) : a("", !0)], !0), s("span", null, D(e.title), 1)], 42, J))), 128)), s("span", {
			class: "share-sliding-tabs__underline",
			style: v(p.value),
			"aria-hidden": "true"
		}, null, 4)], 8, q));
	}
}, [["__scopeId", "data-v-28aae1df"]]), be = [
	"aria-checked",
	"aria-label",
	"disabled"
], xe = {
	key: 0,
	class: "share-toggle-switch__text"
}, Y = /*#__PURE__*/ L({
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
		}, [s("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (x(), o("span", xe, [T(t.$slots, "default", {}, () => [l(D(e.label), 1)], !0)])) : a("", !0)], 10, be));
	}
}, [["__scopeId", "data-v-828a23d7"]]), Se = [], X = null, Z = null;
function Ce(e) {
	let t = Se.lastIndexOf(e);
	t >= 0 && Se.splice(t, 1);
}
function we(e) {
	Ce(e), Se.push(e);
}
function Te(e) {
	Ce(e);
}
function Q(e) {
	return Se.at(-1) === e;
}
function Ee(e, t) {
	X?.token !== e && X?.close(), X = {
		token: e,
		close: t
	}, we(e);
}
function De(e) {
	X?.token === e && (X = null), Te(e);
}
function Oe(e, t) {
	Z?.token !== e && Z?.close(), Z = {
		token: e,
		close: t
	};
}
function ke(e) {
	Z?.token === e && (Z = null);
}
function Ae() {
	if (!Z) return !1;
	let e = Z;
	return Z = null, e.close(), !0;
}
//#endregion
//#region src/lib/actionMenuPlacement.js
var je = 8, Me = 6;
function Ne(e, t, n) {
	return Math.min(Math.max(e, t), Math.max(t, n));
}
function Pe({ triggerRect: e, popoverWidth: t, popoverHeight: n, viewportWidth: r, viewportHeight: i, viewportLeft: a = 0, viewportTop: o = 0, originX: s, originY: c, margin: l = 8, gap: u = 6 }) {
	let d = a + l, f = o + l, p = a + r - l, m = o + i - l, h = Math.min(t, Math.max(0, p - d)), g = Ne(e.right - h, d, p - h), _ = Math.max(0, m - e.bottom - u), v = Math.max(0, e.top - u - f), y = _ < n && v > _, b = y ? v : _, x = Math.min(n, b), S = Ne(y ? e.top - u - x : e.bottom + u, f, m - x);
	return {
		left: g,
		top: S,
		maxHeight: b,
		opensAbove: y,
		originX: Ne(s - g, 0, h),
		originY: Ne(c - S, 0, x)
	};
}
var Fe = 8, Ie = 6, Le = Pe, Re = [
	"title",
	"aria-label",
	"aria-expanded",
	"disabled"
], ze = ["aria-label"], Be = /*#__PURE__*/ L({
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
			let i = e.getBoundingClientRect(), a = Pe({
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
			l.disabled || _.value || (m.value = w(e), Ee(d, M), _.value = !0, k(), h(O));
		}
		function M() {
			_.value && (Ae(), _.value = !1, De(d), S != null && cancelAnimationFrame(S), S = null, A());
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
			e.key === "Escape" && (Ae() || Q(d) && M());
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
		], -1)]], 8, Re)), (x(), i(t, { to: "body" }, [u(n, { name: "share-popover-action" }, {
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
			}, [T(c.$slots, "default", { close: M }, void 0, !0)], 44, ze)) : a("", !0)]),
			_: 3
		})]))], 64));
	}
}, [["__scopeId", "data-v-e5053f4e"]]), Ve = ["aria-haspopup", "aria-expanded"], He = {
	class: "ram-item__icon",
	"aria-hidden": "true"
}, Ue = {
	key: 1,
	width: "17",
	height: "17",
	viewBox: "0 0 17 17",
	fill: "none"
}, We = { class: "ram-item__content" }, Ge = {
	key: 0,
	class: "ram-item__suffix"
}, Ke = /*#__PURE__*/ L({
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
			s("span", He, [T(t.$slots, "icon", {}, () => [e.icon ? (x(), i(E(e.icon), {
				key: 0,
				size: 17,
				"stroke-width": 1.9
			})) : (x(), o("svg", Ue, [...n[0] ||= [
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
			s("span", We, [T(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.suffix || e.submenu ? (x(), o("span", Ge, [T(t.$slots, "suffix", {}, void 0, !0), e.submenu ? (x(), o("svg", {
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
		], 10, Ve));
	}
}, [["__scopeId", "data-v-5fc35d86"]]);
//#endregion
//#region src/composables/useMediaQuery.js
function qe(e) {
	let t = C(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return b(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), y(() => n?.removeEventListener?.("change", r)), t;
}
function Je(e = 768) {
	return qe(`(max-width: ${e}px)`);
}
//#endregion
//#region src/components/floating/BasePopover.vue
var Ye = [
	"id",
	"role",
	"aria-label",
	"data-share-popover-related"
], Xe = /*#__PURE__*/ L({
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
			e.key === "Escape" && (Ae() || Q(f) && E());
		}
		function P() {
			we(f), document.addEventListener("pointerdown", O, !0), document.addEventListener("keydown", j), window.addEventListener("resize", A), window.addEventListener("scroll", k, !0), window.visualViewport?.addEventListener("resize", A), window.visualViewport?.addEventListener("scroll", w);
		}
		function F() {
			Te(f), document.removeEventListener("pointerdown", O, !0), document.removeEventListener("keydown", j), window.removeEventListener("resize", A), window.removeEventListener("scroll", k, !0), window.visualViewport?.removeEventListener("resize", A), window.visualViewport?.removeEventListener("scroll", w);
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
			}, [T(r.$slots, "default", { close: E }, void 0, !0)], 46, Ye)) : a("", !0)]),
			_: 3
		}, 8, ["name"])]));
	}
}, [["__scopeId", "data-v-256a13ae"]]), Ze = { class: "ras-root" }, Qe = { class: "ras-panel" }, $e = {
	key: 0,
	class: "ras-label"
}, et = { class: "ras-panel ras-panel--popover" }, tt = {
	key: 0,
	class: "ras-label"
}, nt = /*#__PURE__*/ L({
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
		let r = e, c = Symbol("action-submenu"), l = C(null), d = Je(r.mobileBreakpoint), f = C(!1);
		function p() {
			r.disabled || f.value || (Oe(c, h), f.value = !0);
		}
		function m() {
			r.disabled || (f.value ? h() : p());
		}
		function h() {
			f.value && (f.value = !1, ke(c));
		}
		function g(e) {
			e || h();
		}
		return y(h), t({
			open: p,
			close: h,
			toggle: m
		}), (t, r) => (x(), o("div", Ze, [
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
				}, [s("div", Qe, [e.label ? (x(), o("div", $e, D(e.label), 1)) : a("", !0), T(t.$slots, "default", { close: h }, void 0, !0)])], 32)) : a("", !0)]),
				_: 3
			}),
			O(d) ? a("", !0) : (x(), i(Xe, {
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
				default: N(() => [s("div", et, [e.label ? (x(), o("div", tt, D(e.label), 1)) : a("", !0), T(t.$slots, "default", { close: h }, void 0, !0)])]),
				_: 3
			}, 8, [
				"open",
				"anchor",
				"min-width"
			]))
		]));
	}
}, [["__scopeId", "data-v-a4a95dc2"]]), rt = [
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
function it(e) {
	return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(String(e || "").trim());
}
function at(e = rt) {
	return e[Math.floor(Math.random() * e.length)];
}
//#endregion
//#region src/components/floating/ColorPresetPicker.vue
var ot = ["aria-label"], st = ["aria-label", "aria-expanded"], ct = { class: "cpp-body" }, lt = "#888888", ut = /*#__PURE__*/ L({
	__name: "ColorPresetPicker",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		colors: {
			type: Array,
			default: () => rt
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
		let n = e, i = t, a = C(null), c = C(!1), l = C("cpppop-cancel"), f = C(n.modelValue || ""), m = r(() => /^#[0-9a-f]{6}$/i.test(n.modelValue || "") ? n.modelValue : lt), h = r(() => !!f.value && !it(f.value));
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
			if (!it(e)) {
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
		}, [u(O(j))], 8, ot)) : (x(), o("span", {
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
		}, null, 14, st)], !0), u(Xe, {
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
			default: N(() => [s("div", ct, [u(O(j))])]),
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
}, [["__scopeId", "data-v-1b7035e4"]]), dt = [
	"aria-label",
	"aria-expanded",
	"aria-activedescendant",
	"disabled"
], ft = ["aria-label"], pt = [
	"placeholder",
	"aria-label",
	"aria-activedescendant"
], mt = [
	"id",
	"aria-selected",
	"disabled",
	"onMouseenter",
	"onClick"
], ht = {
	key: 1,
	class: "vs-empty"
}, gt = /*#__PURE__*/ L({
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
			t.length && (b.value = N(b.value < 0 ? e > 0 ? 0 : t.length - 1 : (b.value + e + t.length) % t.length, e), h(() => document.getElementById(A(b.value))?.scrollIntoView?.({ block: "nearest" })));
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
		}, "▾", -1)], 42, dt), _.value ? (x(), o("div", {
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
			}, null, 40, pt)), [[j, v.value]]) : a("", !0),
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
			}, D(e.label), 43, mt))), 128)),
			E.value.length === 0 ? (x(), o("div", ht, D(t.emptyLabel), 1)) : a("", !0)
		], 10, ft)) : a("", !0)], 2));
	}
}, [["__scopeId", "data-v-764969f5"]]), _t = new Set(/* @__PURE__ */ "a.b.blockquote.br.code.em.h1.h2.h3.h4.h5.h6.li.ol.p.pre.s.span.strike.strong.table.tbody.td.th.thead.tr.u.ul".split(".")), vt = new Set([
	"embed",
	"iframe",
	"math",
	"object",
	"script",
	"style",
	"svg",
	"template"
]), yt = new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:"
]), bt = /^[a-z][a-z0-9-]{0,39}$/, xt = 4096;
function St(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
function Ct(e) {
	let t = String(e || "").trim();
	if (!t || /[\u0000-\u001f\u007f]/.test(t)) return "";
	if (/^(?:#|\?|\.?\.\/|\/)/.test(t)) return t;
	try {
		let e = new URL(t, "https://share-ui.invalid");
		return yt.has(e.protocol) ? t : "";
	} catch {
		return "";
	}
}
function wt(e) {
	let t = String(e || "").trim();
	if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t) || /^var\(--[a-z0-9-]+\)$/i.test(t)) return t;
	let n = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
	if (!n || n.slice(1, 4).map(Number).some((e) => e < 0 || e > 255)) return "";
	let r = n[4] == null ? null : Number(n[4]);
	return r != null && (r < 0 || r > 1) ? "" : t;
}
function Tt(e) {
	try {
		let t = encodeURIComponent(JSON.stringify(e ?? {}));
		return t.length <= xt ? t : "";
	} catch {
		return "";
	}
}
function Et(e) {
	let t = String(e || "");
	if (!t || t.length > xt) return null;
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
function Dt(e, t, n) {
	let r = String(e || "").trim().toLowerCase(), i = Tt(t);
	return !bt.test(r) || !i ? "" : `<span data-rich-node="${r}" data-rich-payload="${St(i)}" contenteditable="false">${St(n || r)}</span>`;
}
function Ot(e) {
	if (!e?.getAttribute) return null;
	let t = String(e.getAttribute("data-rich-node") || "").trim().toLowerCase(), n = Et(e.getAttribute("data-rich-payload"));
	return !bt.test(t) || n == null ? null : {
		kind: t,
		payload: n,
		label: e.textContent || t
	};
}
function kt(e, t) {
	let n = e.getAttribute("title");
	n && t.setAttribute("title", n);
	let r = e.getAttribute("dir");
	[
		"ltr",
		"rtl",
		"auto"
	].includes(r) && t.setAttribute("dir", r);
	let i = wt(e.style?.getPropertyValue("color"));
	if (i && t.style.setProperty("color", i), t.tagName === "A") {
		let n = Ct(e.getAttribute("href"));
		n && t.setAttribute("href", n), e.getAttribute("target") === "_blank" && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer"));
	}
	if (t.tagName === "SPAN") {
		let n = Ot(e);
		n && (t.setAttribute("data-rich-node", n.kind), t.setAttribute("data-rich-payload", Tt(n.payload)), t.setAttribute("contenteditable", "false"));
	}
	if (t.tagName === "TD" || t.tagName === "TH") for (let n of ["colspan", "rowspan"]) {
		let r = Number.parseInt(e.getAttribute(n), 10);
		r >= 1 && r <= 100 && t.setAttribute(n, String(r));
	}
}
function At(e, t, n) {
	if (e.nodeType === 3) {
		t.appendChild(n.createTextNode(e.nodeValue || ""));
		return;
	}
	if (e.nodeType !== 1) return;
	let r = e.tagName.toLowerCase();
	if (vt.has(r)) return;
	if (!_t.has(r)) {
		for (let r of [...e.childNodes]) At(r, t, n);
		return;
	}
	let i = n.createElement(r);
	if (kt(e, i), i.hasAttribute("data-rich-node")) i.textContent = e.textContent || i.getAttribute("data-rich-node");
	else for (let t of [...e.childNodes]) At(t, i, n);
	t.appendChild(i);
}
function jt(e) {
	let t = String(e || "");
	if (!t) return "";
	if (typeof DOMParser > "u") return St(t);
	let n = new DOMParser().parseFromString(t, "text/html"), r = n.createElement("div");
	for (let e of [...n.body.childNodes]) At(e, r, n);
	return r.innerHTML;
}
function Mt(e) {
	return St(e).replace(/\r\n?|\n/g, "<br>");
}
//#endregion
//#region src/components/rich-text/RichContent.vue
function Nt(e) {
	let t = {};
	for (let n of [...e.attributes]) n.name !== "class" && (t[n.name] = n.value);
	return t;
}
function Pt(e, t, n) {
	if (e.nodeType === Node.TEXT_NODE) return e.nodeValue || "";
	if (e.nodeType !== Node.ELEMENT_NODE) return null;
	let r = Ot(e);
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
	let i = [...e.childNodes].map((e, r) => Pt(e, t, `${n}.${r}`)).filter((e) => e != null);
	return p(e.tagName.toLowerCase(), {
		...Nt(e),
		key: n
	}, i);
}
var Ft = /*#__PURE__*/ L({
	name: "RichContent",
	inheritAttrs: !1,
	props: { html: {
		type: String,
		default: ""
	} },
	setup(e, { slots: t, attrs: n }) {
		let i = r(() => jt(e.html));
		return () => {
			if (typeof DOMParser > "u") return p("div", {
				...n,
				class: ["rc", n.class],
				innerHTML: i.value
			});
			let e = [...new DOMParser().parseFromString(i.value, "text/html").body.childNodes].map((e, n) => Pt(e, t, String(n))).filter((e) => e != null);
			return p("div", {
				...n,
				class: ["rc", n.class]
			}, e);
		};
	}
}, [["__scopeId", "data-v-db98d003"]]), It = { class: "input-desc" }, Lt = ["aria-label"], Rt = ["title"], zt = ["title"], Bt = ["title"], Vt = ["aria-expanded"], Ht = ["onMousedown"], Ut = ["title", "onMousedown"], Wt = { class: "desc-color-icon" }, Gt = [
	"title",
	"aria-label",
	"aria-expanded"
], Kt = { class: "desc-link-field" }, qt = ["placeholder"], Jt = { class: "desc-link-field" }, Yt = {
	key: 0,
	class: "desc-link-error"
}, Xt = { class: "desc-link-actions" }, Zt = {
	type: "submit",
	class: "desc-link-save"
}, Qt = ["data-placeholder", "aria-label"], $t = {
	key: 2,
	class: "desc-empty"
}, en = /*#__PURE__*/ L({
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
			default: () => rt
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
		})), E = r(() => Array.from({ length: m.maxHeadingLevel }, (e, t) => t + 1)), O = C(!1), k = C(null), A = C(null), F = C(null), L = C(null), R = C(!1), z = C(null), B = C(null), V = C(null), H = C(null), U = C(!1), W = S({
			text: "",
			url: ""
		}), ee = r(() => z.value || B.value || F.value);
		function te(e) {
			return jt(e) || "<p><br></p>";
		}
		function ne(e) {
			!m.editable || !A.value || document.activeElement !== A.value && (A.value.innerHTML = te(e));
		}
		M(() => m.modelValue, ne), M(() => m.editable, (e) => {
			e && h(() => ne(m.modelValue));
		}), b(() => {
			ne(m.modelValue), document.execCommand("defaultParagraphSeparator", !1, "p");
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
			let t = Dt(e?.kind, e?.payload, e?.label);
			if (!t || !A.value) return null;
			ae(), document.execCommand("insertHTML", !1, t), Y();
			let n = A.value.querySelectorAll("[data-rich-node]"), r = n[n.length - 1] || null;
			return r && (V.value = r, de(r)), r;
		}
		function ce(e) {
			return e?.nodeType === Node.ELEMENT_NODE && e.matches?.("[data-rich-node]") ? e : e?.element?.matches?.("[data-rich-node]") ? e.element : V.value?.isConnected ? V.value : null;
		}
		function le(e, t) {
			let n = ce(e), r = Dt(t?.kind, t?.payload, t?.label);
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
			return t.remove(), V.value = null, n?.nodeType === Node.ELEMENT_NODE && Ce(n), Y(), !0;
		}
		function de(e) {
			let t = document.createRange(), n = window.getSelection();
			t.setStartAfter(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t), H.value = t.cloneRange();
		}
		function G(e, t) {
			ie(), z.value = e, B.value = t, U.value = !1, W.text = e?.textContent || oe(), W.url = e?.getAttribute?.("href") || "", R.value = !0, h(() => L.value?.focus());
		}
		function K(e = null) {
			G(null, e);
		}
		function fe(e) {
			G(e, null);
		}
		function pe(e = !1) {
			e !== !0 && (R.value = !1, z.value = null, B.value = null, U.value = !1);
		}
		function me() {
			let e = Ct(W.url);
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
			!n || !A.value?.contains(n) || (e.preventDefault(), V.value = n, v("node-select", {
				element: n,
				node: Ot(n)
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
			return y.value.heading.replace("{level}", String(e));
		}
		function J(e) {
			A.value?.focus(), document.execCommand("styleWithCSS", !1, !1), document.execCommand(e, !1, null), h(Y);
		}
		function ve(e) {
			A.value?.focus(), document.execCommand("formatBlock", !1, e), O.value = !1, h(Y);
		}
		function ye(e) {
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
		function be() {
			if (A.value) {
				we();
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
			let e = jt(A.value.innerHTML);
			return e === "<p><br></p>" || e === "<br>" ? "" : e;
		}
		function Y() {
			v("update:modelValue", xe());
		}
		function Se(e) {
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
		function Ce(e) {
			let t = document.createRange(), n = window.getSelection();
			t.selectNodeContents(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t);
		}
		function we() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !A.value?.contains(e.anchorNode)) return;
			let t = Z(e.anchorNode);
			if (!t || t.tagName === "LI") return;
			let n = t.textContent || "";
			n !== "- " && n !== " - " || Te(t);
		}
		function Te(e) {
			let t = document.createElement("li");
			t.innerHTML = "<br>";
			let n = document.createElement("ul");
			n.appendChild(t), e.replaceWith(n), Ce(t);
		}
		function Q() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !A.value?.contains(e.anchorNode)) return !1;
			let t = Z(e.anchorNode);
			if (!t || t.tagName === "LI") return !1;
			let n = (t.textContent || "").replace(/\u00a0/g, " ");
			return n !== "-" && n !== " -" ? !1 : (Te(t), !0);
		}
		function Ee(e) {
			if (e.key === " ") {
				Q() && (e.preventDefault(), Y());
				return;
			}
			e.key === "Enter" && (e.preventDefault(), document.execCommand(e.shiftKey ? "insertLineBreak" : "insertParagraph"), Y());
		}
		function De(e) {
			A.value?.focus(), document.execCommand("insertHTML", !1, e), Y();
		}
		function Oe(e) {
			e.preventDefault();
			let t = e.clipboardData?.getData("text/html"), n = e.clipboardData?.getData("text/plain") || "";
			De(t ? jt(t) : Mt(n));
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
			De(t ? jt(t) : Mt(n));
		}
		function je(e) {
			Y(), v("blur", e);
		}
		return n({
			focus: () => A.value?.focus(),
			commit: Y,
			rememberSelection: ie,
			openLinkEditor: K,
			insertRichNode: se,
			updateRichNode: le,
			removeRichNode: ue
		}), (n, r) => (x(), o("div", It, [t.editable ? (x(), o(e, { key: 0 }, [
			s("div", {
				class: "desc-toolbar",
				role: "toolbar",
				"aria-label": y.value.toolbar
			}, [
				s("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.bold,
					onMousedown: r[0] ||= I((e) => J("bold"), ["prevent"])
				}, [s("b", null, D(y.value.boldShort), 1)], 40, Rt),
				s("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.italic,
					onMousedown: r[1] ||= I((e) => J("italic"), ["prevent"])
				}, [s("i", null, D(y.value.italicShort), 1)], 40, zt),
				s("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.underline,
					onMousedown: r[2] ||= I((e) => J("underline"), ["prevent"])
				}, [s("u", null, D(y.value.underlineShort), 1)], 40, Bt),
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
				}, "▾", -1)], 40, Vt),
				u(Xe, {
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
						onMousedown: r[4] ||= I((e) => ve("p"), ["prevent"])
					}, D(y.value.normal), 33), (x(!0), o(e, null, w(E.value, (e) => (x(), o("button", {
						key: e,
						type: "button",
						class: g(["desc-drop-item", `drop-h${e}`]),
						role: "menuitem",
						onMousedown: I((t) => ve(`h${e}`), ["prevent"])
					}, D(q(e)), 43, Ht))), 128))]),
					_: 1
				}, 8, [
					"open",
					"anchor",
					"aria-label"
				]),
				r[14] ||= s("div", { class: "desc-sep" }, null, -1),
				u(ut, {
					"allow-clear": "",
					colors: t.colors,
					"model-value": "",
					"clear-label": y.value.clearColor,
					"aria-label": y.value.color,
					"onUpdate:modelValue": ye
				}, {
					trigger: N(({ toggle: e }) => [s("button", {
						type: "button",
						class: "desc-btn",
						title: y.value.color,
						onMousedown: I((t) => {
							O.value = !1, e();
						}, ["prevent"])
					}, [s("span", Wt, D(y.value.colorShort), 1)], 40, Ut)]),
					_: 1
				}, 8, [
					"colors",
					"clear-label",
					"aria-label"
				]),
				r[15] ||= s("div", { class: "desc-sep" }, null, -1),
				t.showLinkButton ? (x(), o("button", {
					key: 0,
					ref_key: "linkTrigger",
					ref: F,
					type: "button",
					class: g(["desc-btn", { active: R.value }]),
					title: y.value.link,
					"aria-label": y.value.link,
					"aria-expanded": R.value,
					"aria-haspopup": "dialog",
					onMousedown: r[6] ||= I((e) => K(), ["prevent"])
				}, [...r[12] ||= [s("span", { "aria-hidden": "true" }, "↗", -1)]], 42, Gt)) : a("", !0),
				T(n.$slots, "toolbar", {
					editor: _e,
					insertRichNode: se,
					updateRichNode: le,
					removeRichNode: ue
				}, void 0, !0)
			], 8, Lt),
			u(Xe, {
				open: R.value,
				anchor: ee.value,
				"min-width": 260,
				"z-index": 4500,
				role: "dialog",
				"aria-label": y.value.link,
				"onUpdate:open": pe
			}, {
				default: N(() => [s("form", {
					class: "desc-link-form",
					onSubmit: I(me, ["prevent"])
				}, [
					s("label", Kt, [s("span", null, D(y.value.linkText), 1), P(s("input", {
						"onUpdate:modelValue": r[7] ||= (e) => W.text = e,
						type: "text",
						placeholder: y.value.linkTextPlaceholder
					}, null, 8, qt), [[j, W.text]])]),
					s("label", Jt, [s("span", null, D(y.value.linkUrl), 1), P(s("input", {
						ref_key: "linkUrlInput",
						ref: L,
						"onUpdate:modelValue": r[8] ||= (e) => W.url = e,
						type: "text",
						inputmode: "url",
						placeholder: "https://…"
					}, null, 512), [[j, W.url]])]),
					U.value ? (x(), o("span", Yt, D(y.value.linkInvalid), 1)) : a("", !0),
					s("div", Xt, [
						z.value ? (x(), o("button", {
							key: 0,
							type: "button",
							class: "desc-link-remove",
							onClick: he
						}, D(y.value.removeLink), 1)) : a("", !0),
						s("button", {
							type: "button",
							class: "desc-link-cancel",
							onClick: r[9] ||= (e) => pe(!1)
						}, D(y.value.cancel), 1),
						s("button", Zt, D(y.value.saveLink), 1)
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
				onInput: be,
				onKeydown: Ee,
				onKeyup: ie,
				onMouseup: ie,
				onClick: ge,
				onPaste: Oe,
				onDrop: Ae,
				onFocus: r[10] ||= (e) => n.$emit("focus", e),
				onBlur: je
			}, null, 40, Qt)
		], 64)) : t.modelValue ? (x(), i(Ft, {
			key: 1,
			class: "desc-view",
			html: t.modelValue
		}, c({ _: 2 }, [n.$slots.node ? {
			name: "node",
			fn: N((e) => [T(n.$slots, "node", _(f(e)), void 0, !0)]),
			key: "0"
		} : void 0]), 1032, ["html"])) : (x(), o("div", $t, D(t.placeholder), 1))]));
	}
}, [["__scopeId", "data-v-feac13b3"]]), tn = [
	"aria-label",
	"aria-expanded",
	"disabled"
], nn = {
	class: "share-account-avatar",
	"aria-hidden": "true"
}, rn = {
	key: 0,
	class: "share-account-label"
}, an = {
	key: 1,
	class: "share-account-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true"
}, on = /*#__PURE__*/ L({
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
		return (t, r) => (x(), i(Be, {
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
				s("span", nn, [T(t.$slots, "avatar", {}, () => [l(D(n.value), 1)], !0)]),
				e.expanded ? (x(), o("span", rn, D(e.label), 1)) : a("", !0),
				e.expanded ? (x(), o("svg", an, [...r[0] ||= [s("path", {
					d: "m4 6 4 4 4-4",
					stroke: "currentColor",
					"stroke-width": "1.7",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, null, -1)]])) : a("", !0)
			], 10, tn)]),
			default: N(({ close: e }) => [T(t.$slots, "default", { close: e }, void 0, !0)]),
			_: 3
		}, 8, ["title", "disabled"]));
	}
}, [["__scopeId", "data-v-e71617a9"]]), sn = {
	key: 1,
	class: "share-app-shell__rail"
}, cn = /*#__PURE__*/ L({
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
			e.sidebarVisible ? T(t.$slots, "sidebar", { key: 0 }, void 0, !0) : a("", !0),
			(x(), i(E(e.contentTag), { class: "share-app-shell__content" }, {
				default: N(() => [T(t.$slots, "default", {}, void 0, !0)]),
				_: 3
			})),
			t.$slots.rail ? (x(), o("aside", sn, [T(t.$slots, "rail", {}, void 0, !0)])) : a("", !0),
			T(t.$slots, "overlay", {}, void 0, !0)
		], 6));
	}
}, [["__scopeId", "data-v-db4502d8"]]), ln = ["aria-label", "title"], un = {
	class: "share-sidebar-toggle__icon sidebar-icon",
	"aria-hidden": "true"
}, dn = {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none"
}, fn = {
	key: 0,
	d: "m11 6-3 3 3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, pn = {
	key: 1,
	d: "m9 6 3 3-3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, mn = { class: "share-sidebar-label sidebar-label" }, hn = /*#__PURE__*/ L({
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
		}, [s("span", un, [(x(), o("svg", dn, [
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
			e.expanded ? (x(), o("path", fn)) : (x(), o("path", pn))
		]))]), s("span", mn, D(e.expanded ? e.collapseLabel : e.expandLabel), 1)], 8, ln));
	}
}, [["__scopeId", "data-v-82e613bd"]]), gn = {
	key: 0,
	class: "share-sidebar-head"
}, _n = ["aria-label"], vn = {
	key: 1,
	class: "share-sidebar-tools"
}, yn = {
	key: 2,
	class: "share-sidebar-account"
}, bn = /*#__PURE__*/ L({
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
			t.$slots.brand ? (x(), o("div", gn, [T(t.$slots, "brand", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)])) : a("", !0),
			s("nav", {
				class: "share-sidebar-nav",
				"aria-label": e.ariaLabel
			}, [T(t.$slots, "default", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)], 8, _n),
			e.showToggle || t.$slots.tools ? (x(), o("div", vn, [e.showToggle ? (x(), i(hn, {
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
			t.$slots.account ? (x(), o("div", yn, [T(t.$slots, "account", { expanded: f.value }, void 0, !0)])) : a("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-2025fec5"]]), xn = {
	class: "share-sidebar-brand__icon sidebar-brand-icon",
	"aria-hidden": "true"
}, Sn = { class: "share-sidebar-label share-sidebar-brand__label sidebar-label sidebar-brand-label" }, Cn = /*#__PURE__*/ L(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
			default: N(() => [s("span", xn, [T(t.$slots, "icon", {}, () => [e.icon ? (x(), i(E(e.icon), {
				key: 0,
				size: 22,
				"stroke-width": 1.8
			})) : a("", !0)], !0)]), s("span", Sn, [T(t.$slots, "default", {}, () => [l(D(e.label), 1)], !0)])]),
			_: 3
		}, 16, ["aria-label"]));
	}
}), [["__scopeId", "data-v-a9c8581a"]]), wn = { class: "share-sidebar-group" }, Tn = /*#__PURE__*/ L({
	__name: "SidebarGroup",
	props: { label: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (x(), o("div", wn, [T(t.$slots, "default", {}, () => [l(D(e.label), 1)], !0)]));
	}
}, [["__scopeId", "data-v-169df1ac"]]), En = {
	class: "share-sidebar-icon sidebar-icon",
	"aria-hidden": "true"
}, Dn = { class: "share-sidebar-label sidebar-label" }, On = /*#__PURE__*/ L(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
			default: N(() => [s("span", En, [T(t.$slots, "icon", {}, () => [e.icon ? (x(), i(E(e.icon), {
				key: 0,
				size: 20,
				"stroke-width": 1.8
			})) : a("", !0)], !0)]), s("span", Dn, [T(t.$slots, "default", {}, () => [l(D(e.label), 1)], !0)])]),
			_: 3
		}, 16, [
			"class",
			"title",
			"aria-current"
		]));
	}
}), [["__scopeId", "data-v-28979fe2"]]), kn = {
	key: 0,
	class: "share-editor-panel__title"
}, An = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("div", { class: g(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (x(), o("div", kn, [T(t.$slots, "title", {}, () => [l(D(e.title), 1)], !0)])) : a("", !0), T(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-055dcd8d"]]), jn = { class: "share-editor-section-title" }, Mn = { class: "share-editor-section-title__text" }, Nn = {
	key: 0,
	class: "share-editor-section-title__actions"
}, Pn = /*#__PURE__*/ L({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (x(), o("div", jn, [s("span", Mn, [T(t.$slots, "default", {}, () => [l(D(e.title), 1)], !0)]), t.$slots.actions ? (x(), o("span", Nn, [T(t.$slots, "actions", {}, void 0, !0)])) : a("", !0)]));
	}
}, [["__scopeId", "data-v-03237796"]]), Fn = { class: "share-editor-section" }, In = /*#__PURE__*/ L({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (x(), o("section", Fn, [e.title || t.$slots.title ? (x(), i(Pn, {
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
}, [["__scopeId", "data-v-6a56d656"]]), Ln = {}, Rn = { class: "share-editor-total" };
function zn(e, t) {
	return x(), o("div", Rn, [T(e.$slots, "default", {}, void 0, !0)]);
}
var Bn = /*#__PURE__*/ L(Ln, [["render", zn], ["__scopeId", "data-v-72dfd940"]]);
//#endregion
//#region src/composables/useFullscreenViewportHeight.js
function Vn(e = .94) {
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
var Hn = [], Un = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", Wn = 0, Gn = "";
function Kn(e = Symbol("share-overlay")) {
	return Hn.push(e), e;
}
function qn(e) {
	let t = Hn.lastIndexOf(e);
	t >= 0 && Hn.splice(t, 1);
}
function Jn(e) {
	return Hn.at(-1) === e;
}
function Yn(e) {
	e && ([...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")].find((e) => e.getClientRects().length > 0) || e).focus?.({ preventScroll: !0 });
}
function Xn(e, t) {
	if (e.key !== "Tab" || !t) return;
	let n = [...t.querySelectorAll(Un)].filter((e) => e.getClientRects().length > 0);
	if (!n.length) {
		e.preventDefault(), t.focus?.({ preventScroll: !0 });
		return;
	}
	let r = n[0], i = n.at(-1);
	e.shiftKey && (document.activeElement === r || !t.contains(document.activeElement)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || !t.contains(document.activeElement)) && (e.preventDefault(), r.focus());
}
function Zn(e) {
	e instanceof HTMLElement && e.isConnected && e.focus({ preventScroll: !0 });
}
function Qn() {
	if (typeof document > "u") return () => {};
	Wn === 0 && (Gn = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden"), Wn += 1;
	let e = !1;
	return () => {
		e || (e = !0, Wn = Math.max(0, Wn - 1), Wn === 0 && (document.documentElement.style.overflow = Gn));
	};
}
var $n = /* @__PURE__ */ new WeakMap();
function er(e, { blur: t = "8px", duration: n = "300ms" } = {}) {
	if (!e) return () => {};
	let r = $n.get(e);
	r || (r = {
		count: 0,
		filter: e.style.filter,
		transition: e.style.transition
	}, $n.set(e, r)), r.count += 1, e.style.transition = `filter ${n} ease`, e.style.filter = `blur(${t})`;
	let i = !1;
	return () => {
		i || (i = !0, r.count = Math.max(0, r.count - 1), !(r.count > 0) && (e.style.filter = r.filter, e.style.transition = r.transition, $n.delete(e)));
	};
}
//#endregion
//#region src/components/overlay/AppModal.vue
var tr = ["aria-label"], nr = {
	key: 0,
	class: "am-handle"
}, rr = ["aria-label"], ir = () => window.innerWidth <= 640, ar = 260, $ = 280, or = "cubic-bezier(0.32, 0.72, 0, 1)", sr = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function cr(e) {
	e.focus({ preventScroll: !0 });
}
var lr = /*#__PURE__*/ L({
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
		let l = e, u = c, d = C(null), f = C(null), p = Vn(), m = r(() => typeof l.width == "number" ? `${l.width}px` : l.width || "480px"), _ = C(!1), S = C(0), w = C(0), E = C(0), D = !1, k = null, A = !1, j = () => {}, M = Symbol("app-modal"), N = typeof document < "u" ? document.activeElement : null;
		function P(e) {
			if (!Jn(M)) return;
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
			let t = [...f.value?.querySelectorAll(sr) || []].filter((e) => e.getClientRects().length > 0);
			if (!t.length) {
				e.preventDefault(), f.value?.focus();
				return;
			}
			let n = t[0], r = t.at(-1);
			e.shiftKey && (document.activeElement === n || !f.value?.contains(document.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (document.activeElement === r || !f.value?.contains(document.activeElement)) && (e.preventDefault(), n.focus());
		}
		function F() {
			let e = d.value, t = f.value;
			!e || !t || (e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", ir() ? t.style.transform = "translateY(100%)" : (t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					let n = "cubic-bezier(0, 0, 0.4, 1)", r = `opacity ${ar}ms ${n}, backdrop-filter ${ar}ms ${n}, -webkit-backdrop-filter ${ar}ms ${n}`;
					e.style.transition = r, e.style.opacity = "1", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", ir() ? (t.style.transition = `transform ${ar}ms ${or}`, t.style.transform = "translateY(0)") : (t.style.transition = `transform ${ar}ms ${or}, opacity ${ar}ms ${n}`, t.style.transform = "none", t.style.opacity = "1"), setTimeout(() => {
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
			e.style.transition = n, e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", ir() ? (t.style.transition = `transform ${$}ms ${or}`, t.style.transform = "translateY(100%)") : (t.style.transition = `transform ${$}ms ease, opacity ${$}ms ease`, t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), k = setTimeout(() => {
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
			if (!_.value) if (t > 8 && E.value <= 0) _.value = !0;
			else return;
			e.preventDefault(), S.value = Math.max(0, t);
			let n = f.value, r = d.value;
			n && (n.style.transition = "none", n.style.transform = `translateY(${S.value}px)`), r && (r.style.transition = "none", r.style.opacity = String(Math.max(0, 1 - S.value / 320)));
		}
		function V() {
			if (!_.value) return;
			_.value = !1;
			let e = f.value, t = d.value;
			S.value > 100 ? (e && (e.style.transition = `transform ${$}ms ${or}`, e.style.transform = "translateY(100%)"), t && (t.style.transition = `opacity ${$}ms ease`, t.style.opacity = "0"), k = setTimeout(() => {
				D || u("close");
			}, 300)) : (e && (e.style.transition = `transform ${$}ms ${or}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), S.value = 0, setTimeout(() => {
				D || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330));
		}
		function H() {
			if (!_.value) return;
			_.value = !1, S.value = 0;
			let e = f.value, t = d.value;
			e && (e.style.transition = `transform ${$}ms ${or}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), setTimeout(() => {
				D || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330);
		}
		return b(() => {
			Kn(M), j = Qn(), document.addEventListener("keydown", P), h(() => {
				F(), f.value?.contains(document.activeElement) || (f.value?.querySelector(sr)?.focus(), f.value?.contains(document.activeElement) || f.value?.focus());
			});
		}), y(() => {
			qn(M), j(), document.removeEventListener("keydown", P), clearTimeout(k), D = !0, N instanceof HTMLElement && N.isConnected && cr(N);
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
			e.showHandle ? (x(), o("div", nr)) : a("", !0),
			e.showClose && !e.fullscreen ? (x(), o("button", {
				key: 1,
				class: "am-close",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: R
			}, "✕", 8, rr)) : a("", !0),
			T(n.$slots, "default", {}, void 0, !0)
		], 34)], 44, tr)]));
	}
}, [["__scopeId", "data-v-ddded319"]]), ur = { class: "aem-shell" }, dr = { class: "aem-heading" }, fr = { class: "aem-title" }, pr = {
	key: 0,
	class: "aem-subtitle"
}, mr = {
	key: 0,
	class: "aem-header-actions"
}, hr = ["aria-label"], gr = {
	key: 0,
	class: "aem-footer"
}, _r = /*#__PURE__*/ L({
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
		return (r, c) => (x(), i(lr, {
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
			default: N(() => [s("section", ur, [
				s("header", { class: g(["aem-header", { "aem-header-with-actions": !!r.$slots["header-actions"] }]) }, [
					c[3] ||= s("span", {
						class: "aem-handle",
						"aria-hidden": "true"
					}, null, -1),
					s("div", dr, [T(r.$slots, "title", {}, () => [s("h2", fr, D(e.title), 1), e.subtitle ? (x(), o("span", pr, D(e.subtitle), 1)) : a("", !0)], !0)]),
					r.$slots["header-actions"] ? (x(), o("div", mr, [T(r.$slots, "header-actions", {}, void 0, !0)])) : a("", !0),
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
					})], -1)]], 8, hr)) : a("", !0)
				], 2),
				s("div", { class: g(["aem-body", {
					"aem-body-flush": !e.padded,
					"aem-body-no-scroll": !e.bodyScroll
				}]) }, [T(r.$slots, "default", {}, void 0, !0)], 2),
				r.$slots.footer ? (x(), o("footer", gr, [T(r.$slots, "footer", {}, void 0, !0)])) : a("", !0)
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
}, [["__scopeId", "data-v-0a15c618"]]), vr = {
	key: 0,
	class: "cd-message"
}, yr = { class: "cd-actions" }, br = ["disabled"], xr = ["disabled"], Sr = /*#__PURE__*/ L({
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
		let n = e, c = t, l = r(() => n.open === null ? !0 : n.open), u = r(() => n.confirmText || n.confirmLabel), d = r(() => n.cancelText || n.cancelLabel), f = r(() => n.confirmKind || n.variant);
		function p() {
			n.open !== null && c("update:open", !1);
		}
		function m() {
			n.loading || (c("cancel"), p());
		}
		function h() {
			n.loading || (c("confirm"), p());
		}
		return (t, n) => l.value ? (x(), i(_r, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: N(() => [s("div", yr, [s("button", {
				type: "button",
				class: "cd-btn-cancel",
				disabled: e.loading,
				onClick: m
			}, D(d.value), 9, br), s("button", {
				type: "button",
				class: g(["cd-btn-confirm", `cd-btn--${f.value}`]),
				disabled: e.loading,
				onClick: h
			}, D(e.loading ? e.loadingLabel : u.value), 11, xr)])]),
			default: N(() => [e.message ? (x(), o("div", vr, D(e.message), 1)) : a("", !0)]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : a("", !0);
	}
}, [["__scopeId", "data-v-2819b01e"]]), Cr = {
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
		return (t, n) => e.open ? (x(), i(lr, {
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
function wr({ open: e = 420, close: t = 300 } = {}) {
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
var Tr = ["aria-label"], Er = { class: "ms-head-content" }, Dr = ["aria-label"], Or = 320, kr = 260, Ar = "8px", jr = /*#__PURE__*/ L({
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
		let l = e, u = c, d = Je(), f = A(), p = r(() => l.mode === "add"), m = r(() => l.showClose === null ? !!f.head : l.showClose), _ = r(() => l.nav ? l.nav.view.value : "detail"), S = r(() => l.nav ? l.nav.detailStyle.value : null), w = r(() => l.nav ? l.nav.subStyle.value : null), E = r(() => !!l.nav && _.value !== "detail"), D = C(null), k = C(null), j = C(null), N = C(null), P = C(null), F = C(null), L = C(!1), R = C(!1), z = C(!1), B = C(!1), V = C(!1), { EASE: H, visible: U, morphing: W, playClose: ee, playOpen: te } = wr(), ne = () => d.value ? "0px" : "18px", re = r(() => ({
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
			if (l.nav && _.value !== "detail") {
				l.nav.backToDetail(), u("back");
				return;
			}
			if (V.value = !1, Q(!1), p.value) {
				z.value = !1, U.value = !1, setTimeout(() => u("close"), 320);
				return;
			}
			ee(D.value, ie(), {
				fromRadius: ne(),
				toRadius: l.originRadius
			}, () => u("close"));
		}
		function oe() {
			R.value = !0, V.value = !1, U.value = !1, Q(!1), setTimeout(() => u("close"), 220);
		}
		let se = Symbol("morph-sheet"), ce = typeof document < "u" ? document.activeElement : null;
		function le(e) {
			if (Jn(se)) {
				if (e.key === "Escape") {
					ae();
					return;
				}
				Xn(e, D.value);
			}
		}
		function ue(e) {
			let t = e?.firstElementChild;
			return t ? t.scrollHeight : e?.scrollHeight || 0;
		}
		function de() {
			return Math.floor(window.innerHeight * .9) - (k.value?.offsetHeight || 0) - (j.value?.offsetHeight || 0);
		}
		function G(e) {
			if (d.value || !N.value || W.value) return;
			let t = l.nav ? l.nav.pos.value : 0, n = ue(P.value), r = F.value ? ue(F.value) : n, i = n * (1 - t) + r * t, a = Math.min(i, Math.max(120, de()));
			N.value.style.transition = e ? `height ${Or}ms ${H}` : "none", N.value.style.height = `${a}px`;
		}
		let K = null;
		function fe() {
			K && (K.disconnect(), [P.value?.firstElementChild, F.value?.firstElementChild].forEach((e) => {
				e && K.observe(e);
			}));
		}
		function pe() {
			W.value || l.nav && l.nav.animating.value || he || G(!1);
		}
		l.nav && (M(() => l.nav.pos.value, () => G(l.nav.animating.value)), M(() => l.nav.view.value, (e, t) => h(() => {
			fe(), e !== "detail" && t === "detail" && F.value && (F.value.offsetWidth, l.nav.enterSub()), l.nav.animating.value || G(!1);
		})));
		let me = C(0), he = !1, ge = 0, _e = 0, q = null, J = 0, ve = null, ye = 0, be = 0, xe = 0;
		function Y(e) {
			!d.value || W.value || (ge = e.touches[0].clientX, _e = e.touches[0].clientY, ve = e.target, q = null);
		}
		function Se() {
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
		function X(e) {
			if (!d.value || W.value || q === "scroll") return;
			let t = e.touches[0].clientX - ge, n = e.touches[0].clientY - _e;
			if (q === null) {
				if (l.showBack && l.nav && t > 8 && Math.abs(t) > Math.abs(n)) {
					q = "back", he = !0, J = t, ye = e.touches[0].clientX, be = e.timeStamp, xe = 0, l.nav.dragStart(N.value?.clientWidth || window.innerWidth);
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
			let r = D.value;
			r && (r.style.transition = "none", r.style.transform = `translateY(${me.value}px)`);
		}
		function Z() {
			if (q === "back") {
				he = !1, q = null, l.nav.dragEnd(J, xe), J = 0, xe = 0;
				return;
			}
			if (q !== "drag") {
				q = null;
				return;
			}
			q = null;
			let e = D.value;
			if (me.value > 120) {
				Ce();
				return;
			}
			me.value = 0, e && (e.style.transition = `transform .26s ${H}`, e.style.transform = "translateY(0)");
		}
		function Ce() {
			let e = D.value;
			e && (e.style.transition = `transform ${kr}ms ${H}`, e.style.transform = `translateY(${window.innerHeight}px)`), U.value = !1, V.value = !1, je(), Q(!1), setTimeout(() => u("close"), kr);
		}
		let we = () => {};
		function Te() {
			return typeof l.backgroundTarget == "string" ? document.querySelector(l.backgroundTarget) : l.backgroundTarget instanceof Element ? l.backgroundTarget : null;
		}
		function Q(e) {
			we(), we = () => {}, !(!e || d.value || !l.blurBackground) && (we = er(Te(), { blur: Ar }));
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
			e.style.transition = `${t}opacity ${kr}ms ease`, e.style.opacity = "0", requestAnimationFrame(() => {
				e.style.opacity = Ee;
			}), setTimeout(() => {
				e.style.opacity = Ee, e.style.transition = De, Oe = !1;
			}, 280);
		}
		let Me = () => {};
		function Ne() {
			W.value || (d.value && N.value ? N.value.style.height = "" : G(!1));
		}
		return b(async () => {
			Kn(se), Me = Qn(), typeof ResizeObserver < "u" && (K = new ResizeObserver(pe)), await h(), G(!1), fe(), L.value = !0, p.value ? (U.value = !0, requestAnimationFrame(() => {
				z.value = !0, B.value = !0;
			})) : (ke(), Ae(!0), te(D.value, l.originRect, {
				fromRadius: l.originRadius,
				toRadius: ne()
			}), requestAnimationFrame(() => {
				B.value = !0;
			})), Q(!0), setTimeout(() => {
				V.value = !0, G(!1), Yn(D.value);
			}, 20), document.addEventListener("keydown", le), window.addEventListener("resize", Ne);
		}), y(() => {
			qn(se), Me(), Q(!1), !p.value && !Oe && Ae(!1), document.removeEventListener("keydown", le), window.removeEventListener("resize", Ne), K?.disconnect(), Zn(ce);
		}), n({
			close: ae,
			finishNow: oe
		}), (n, r) => (x(), i(t, { to: "body" }, [s("div", {
			class: g(["ms-overlay", { visible: O(U) }]),
			style: v(e.zIndex === 1e3 ? null : { zIndex: e.zIndex }),
			onClick: I(ae, ["self"])
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
			style: v(re.value),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			tabindex: "-1",
			onTouchstartPassive: Y,
			onTouchmove: X,
			onTouchend: Z,
			onTouchcancel: Z
		}, [
			r[0] ||= s("div", { class: "ms-grab" }, null, -1),
			n.$slots.head ? (x(), o("div", {
				key: 0,
				ref_key: "headEl",
				ref: k,
				class: "ms-head"
			}, [s("div", Er, [T(n.$slots, "head", {}, void 0, !0)]), m.value ? (x(), o("button", {
				key: 0,
				class: "ms-x",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: ae
			}, "✕", 8, Dr)) : a("", !0)], 512)) : a("", !0),
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
		], 46, Tr)], 6)]));
	}
}, [["__scopeId", "data-v-bab5d7c5"]]), Mr = { class: "form-actions" }, Nr = ["disabled"], Pr = ["disabled"], Fr = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("div", Mr, [s("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, D(e.cancelText), 9, Nr), s("button", {
			type: "button",
			class: "form-actions__submit",
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, D(e.loading ? e.loadingText : e.submitText), 9, Pr)]));
	}
}, [["__scopeId", "data-v-4749c971"]]), Ir = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], Lr = /*#__PURE__*/ L({
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
		}, null, 42, Ir));
	}
}, [["__scopeId", "data-v-e2d6bc8e"]]), Rr = {
	key: 0,
	class: "tpd-message"
}, zr = {
	key: 1,
	class: "tpd-label"
}, Br = /*#__PURE__*/ L({
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
		let n = e, s = t, c = r(() => n.open === null ? !0 : n.open), l = r(() => n.confirmText || n.confirmLabel), d = r(() => n.cancelText || n.cancelLabel), f = C(n.value || n.initial);
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
		return (t, n) => c.value ? (x(), i(_r, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: N(() => [u(Fr, {
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
				e.message ? (x(), o("div", Rr, D(e.message), 1)) : a("", !0),
				e.label ? (x(), o("label", zr, D(e.label), 1)) : a("", !0),
				u(Lr, {
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
}, [["__scopeId", "data-v-ff9d61bb"]]), Vr = { class: "form-field-label" }, Hr = {
	key: 0,
	class: "form-field-hint"
}, Ur = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("div", { class: g(["form-field", { "form-field--vertical": e.vertical }]) }, [s("span", Vr, [l(D(e.label), 1), e.hint ? (x(), o("span", Hr, D(e.hint), 1)) : a("", !0)]), T(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-01093950"]]), Wr = { class: "fn-wrap" }, Gr = [
	"value",
	"min",
	"max"
], Kr = /*#__PURE__*/ L({
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
		return (t, n) => (x(), o("div", Wr, [
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
			}, null, 40, Gr),
			s("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[1] ||= I((e) => c(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-df9f8db7"]]), qr = ["value"], Jr = /*#__PURE__*/ L({
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
		}, [T(t.$slots, "default", {}, void 0, !0)], 40, qr));
	}
}, [["__scopeId", "data-v-3eb4c36d"]]), Yr = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], Xr = /*#__PURE__*/ L({
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
		}, null, 40, Yr));
	}
}, [["__scopeId", "data-v-31024142"]]);
//#endregion
export { Pe as $, Et as A, rt as B, bn as C, en as D, on as E, jt as F, Je as G, at as H, wt as I, Be as J, qe as K, Ct as L, St as M, Mt as N, Ft as O, Ot as P, Fe as Q, gt as R, Cn as S, cn as T, nt as U, it as V, Xe as W, je as X, Me as Y, Ie as Z, In as _, Br as a, le as at, On as b, jr as c, W as ct, Sr as d, L as dt, Le as et, _r as f, Bn as g, Vn as h, Ur as i, G as it, Tt as j, Dt as k, wr as l, H as lt, cr as m, Jr as n, ye as nt, Lr as o, ae as ot, lr as p, Ke as q, Kr as r, _e as rt, Fr as s, ne as st, Xr as t, Y as tt, Cr as u, z as ut, Pn as v, hn as w, Tn as x, An as y, ut as z };
