import { Fragment as e, Teleport as t, Transition as n, TransitionGroup as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createTextVNode as u, createVNode as d, defineComponent as f, guardReactiveProps as p, h as m, mergeProps as h, nextTick as g, normalizeClass as _, normalizeProps as v, normalizeStyle as y, onBeforeUnmount as b, onMounted as x, openBlock as S, reactive as C, ref as w, renderList as T, renderSlot as E, resolveDynamicComponent as D, toDisplayString as O, unref as k, useCssVars as A, useSlots as j, vModelText as M, watch as N, withCtx as P, withDirectives as F, withKeys as I, withModifiers as L } from "vue";
//#region \0plugin-vue:export-helper
var R = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, z = {
	key: 0,
	class: "base-tile-strip"
}, B = /*#__PURE__*/ R({
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
		return (t, r) => (S(), s("div", {
			class: _(["base-tile", {
				"base-tile--interactive": e.interactive,
				"base-tile--tint": e.tint,
				"base-tile--framed": e.framed
			}]),
			style: y({ "--tile-color": n.value }),
			onClick: r[0] ||= (e) => t.$emit("click", e)
		}, [e.strip ? (S(), s("span", z)) : o("", !0), E(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-81d15c1d"]]), V = {
	key: 0,
	class: "share-section-list__header"
}, H = {
	key: 0,
	class: "share-section-list__icon"
}, U = { class: "share-section-list__title" }, W = {
	key: 1,
	class: "share-section-list__footer"
}, ee = /*#__PURE__*/ R({
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
		return (t, n) => (S(), a(D(e.embedded ? "section" : B), {
			class: _(["share-section-list", {
				"share-section-list--embedded": e.embedded,
				"share-section-list--compact": e.compact
			}]),
			"aria-label": e.title || void 0
		}, {
			default: P(() => [
				e.title || t.$slots.header || t.$slots.aside ? (S(), s("header", V, [E(t.$slots, "header", {}, () => [
					t.$slots.icon ? (S(), s("span", H, [E(t.$slots, "icon")])) : o("", !0),
					c("span", U, O(e.title), 1),
					n[0] ||= c("span", {
						class: "share-section-list__line",
						"aria-hidden": "true"
					}, null, -1),
					E(t.$slots, "aside")
				])])) : o("", !0),
				E(t.$slots, "body", {}, () => [(S(), a(D(e.transitionName ? r : "div"), h(e.listAttrs, {
					tag: e.transitionName ? "div" : void 0,
					name: e.transitionName || void 0,
					class: "share-section-list__rows"
				}), {
					default: P(() => [E(t.$slots, "default")]),
					_: 3
				}, 16, ["tag", "name"]))]),
				t.$slots.footer ? (S(), s("footer", W, [E(t.$slots, "footer")])) : o("", !0)
			]),
			_: 3
		}, 8, ["class", "aria-label"]));
	}
}, [["__scopeId", "data-v-3f9dfbae"]]), te = [
	"disabled",
	"aria-label",
	"title"
], ne = {
	key: 0,
	class: "share-add-button__text"
}, re = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("button", {
			class: _(["share-add-button", [`share-add-button--${e.variant}`, { "share-add-button--block": e.block }]]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			title: e.variant === "icon" && e.label || void 0,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [n[1] ||= c("span", {
			class: "share-add-button__plus",
			"aria-hidden": "true"
		}, "+", -1), e.variant === "icon" ? o("", !0) : (S(), s("span", ne, [E(t.$slots, "default", {}, () => [u(O(e.label), 1)], !0)]))], 10, te));
	}
}, [["__scopeId", "data-v-2e1149d1"]]), ie = [
	"value",
	"min",
	"max",
	"step",
	"disabled",
	"aria-label"
], ae = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("input", {
			class: "share-slider",
			type: "range",
			value: e.modelValue,
			min: e.min,
			max: e.max,
			step: e.step,
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			style: y(o.value),
			onInput: l,
			onChange: u
		}, null, 44, ie));
	}
}, [["__scopeId", "data-v-a4387b22"]]), oe = [
	"disabled",
	"aria-label",
	"aria-checked"
], se = {
	key: 0,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, ce = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("button", {
			type: "button",
			class: _(["share-compact-checkbox", { "share-compact-checkbox--checked": e.modelValue }]),
			disabled: e.disabled,
			"aria-label": e.label,
			"aria-checked": e.modelValue,
			role: "checkbox",
			onClick: L(i, ["stop"]),
			onPointerdown: n[0] ||= L(() => {}, ["stop"])
		}, [e.modelValue ? (S(), s("svg", se, [...n[1] ||= [c("path", {
			d: "M2.5 6.2l2.4 2.4 4.6-5",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, null, -1)]])) : o("", !0)], 42, oe));
	}
}, [["__scopeId", "data-v-caeb1891"]]), le = ["aria-label"], ue = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], de = /*#__PURE__*/ R({
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
		let r = t, a = n, o = w(null), l = w([]), u = w({
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
		function v(e) {
			let t = r.options.find((t) => t.value === e);
			!r.disabled && !t?.disabled && e !== r.modelValue && a("update:modelValue", e);
		}
		function C() {
			return r.options.map((e, t) => ({
				option: e,
				index: t
			})).filter(({ option: e }) => !e.disabled);
		}
		async function E(e) {
			let t = r.options[e];
			!t || t.disabled || r.disabled || (v(t.value), await g(), l.value[e]?.focus());
		}
		function D(e, t) {
			let n = C();
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			(e.key === "ArrowRight" || e.key === "ArrowDown") && (i = n[(r + 1) % n.length]), (e.key === "ArrowLeft" || e.key === "ArrowUp") && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), E(i.index));
		}
		let k = null;
		return x(async () => {
			await g(), h(), typeof ResizeObserver < "u" && o.value && (k = new ResizeObserver(() => h(!1)), k.observe(o.value));
		}), b(() => {
			k?.disconnect(), m != null && cancelAnimationFrame(m);
		}), N(() => r.modelValue, async () => {
			await g(), h(!0);
		}), N(() => r.options, async () => {
			await g(), h(!1);
		}, { deep: !0 }), (n, r) => (S(), s("div", {
			ref_key: "rootEl",
			ref: o,
			class: _(["share-multi-toggle", {
				"share-multi-toggle--block": t.block,
				"share-multi-toggle--disabled": t.disabled
			}]),
			role: "radiogroup",
			"aria-label": t.ariaLabel || void 0
		}, [c("span", {
			class: _(["share-multi-toggle__pill", {
				"share-multi-toggle__pill--neutral": d.value,
				"share-multi-toggle__pill--instant": !u.value.animate
			}]),
			style: y(f.value),
			"aria-hidden": "true"
		}, null, 6), (S(!0), s(e, null, T(t.options, (e, n) => (S(), s("button", {
			key: String(e.value),
			ref_for: !0,
			ref: (e) => p(e, n),
			type: "button",
			class: _(["share-multi-toggle__button", {
				"share-multi-toggle__button--active": e.value === t.modelValue,
				"share-multi-toggle__button--neutral": e.value === t.modelValue && e.value === t.neutralValue
			}]),
			role: "radio",
			"aria-checked": e.value === t.modelValue,
			tabindex: e.value === t.modelValue ? 0 : -1,
			disabled: t.disabled || e.disabled,
			onClick: (t) => v(e.value),
			onKeydown: (e) => D(e, n)
		}, O(e.label), 43, ue))), 128))], 10, le));
	}
}, [["__scopeId", "data-v-a0098670"]]), G = ["disabled", "aria-label"], K = {
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
}, fe = {
	key: 1,
	class: "share-remove-button__cross",
	"aria-hidden": "true"
}, pe = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("button", {
			class: _(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.icon === "trash" ? (S(), s("svg", K, [...n[1] ||= [c("path", { d: "M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" }, null, -1)]])) : (S(), s("span", fe))], 10, G));
	}
}, [["__scopeId", "data-v-b1091570"]]), me = { class: "share-section-label__text" }, he = {
	key: 0,
	class: "share-section-label__actions"
}, ge = /*#__PURE__*/ R({
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
		return (t, r) => (S(), s("div", {
			class: _(["share-section-label", { "share-section-label--border": e.border }]),
			style: y(n.value)
		}, [c("span", me, [E(t.$slots, "default", {}, () => [u(O(e.title), 1)], !0)]), t.$slots.actions ? (S(), s("span", he, [E(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)], 6));
	}
}, [["__scopeId", "data-v-56c925a7"]]), _e = ["aria-label"], q = {
	viewBox: "0 0 120 120",
	role: "img",
	"aria-hidden": "true"
}, J = [
	"stroke",
	"stroke-width",
	"stroke-dasharray",
	"stroke-dashoffset"
], ve = { class: "segment-donut__center" }, ye = {
	key: 0,
	class: "segment-donut__legend"
}, be = { key: 0 }, xe = /*#__PURE__*/ R({
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
		A((e) => ({ v664f5d02: t.strokeWidth }));
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
		return (n, r) => (S(), s("figure", {
			class: "segment-donut",
			"aria-label": t.ariaLabel
		}, [c("div", {
			class: "segment-donut__visual",
			style: y({ "--segment-donut-size": `${t.size}px` })
		}, [(S(), s("svg", q, [r[0] ||= c("circle", {
			class: "segment-donut__track",
			cx: "60",
			cy: "60",
			r: "50",
			pathLength: "100"
		}, null, -1), (S(!0), s(e, null, T(d.value, (e) => (S(), s("circle", {
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
		}, null, 8, J))), 128))])), c("div", ve, [E(n.$slots, "center", { total: l.value }, () => [c("strong", null, O(t.formatValue(l.value)), 1), c("span", null, O(t.totalLabel), 1)], !0)])], 4), t.showLegend ? (S(), s("ul", ye, [(S(!0), s(e, null, T(u.value, (e) => (S(), s("li", { key: e.key }, [
			c("i", {
				style: y({ "--segment-color": e.color }),
				"aria-hidden": "true"
			}, null, 4),
			c("span", null, O(e.label), 1),
			c("strong", null, O(t.formatValue(e.value)), 1),
			t.showPercent ? (S(), s("small", be, O(e.percent.toLocaleString(void 0, { maximumFractionDigits: 1 })) + "%", 1)) : o("", !0)
		]))), 128))])) : o("", !0)], 8, _e));
	}
}, [["__scopeId", "data-v-6c69c95e"]]), Y = ["aria-label"], Se = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], Ce = ["src"], we = /*#__PURE__*/ R({
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
		let a = t, l = r, u = w(null), d = w([]), f = w({
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
		async function v(e) {
			let t = a.tabs[e];
			!t || t.disabled || (h(t.key), await g(), d.value[e]?.focus());
		}
		function C(e, t) {
			let n = a.tabs.map((e, t) => ({
				tab: e,
				index: t
			})).filter(({ tab: e }) => !e.disabled);
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			e.key === "ArrowRight" && (i = n[(r + 1) % n.length]), e.key === "ArrowLeft" && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), v(i.index));
		}
		function D() {
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
		let k = null;
		return x(() => {
			g(D), typeof ResizeObserver < "u" && u.value && (k = new ResizeObserver(D), k.observe(u.value));
		}), b(() => k?.disconnect()), N(() => a.modelValue, () => g(D)), N(() => a.tabs, () => g(D), { deep: !0 }), n({ updateUnderline: D }), (n, r) => (S(), s("nav", {
			ref_key: "rootElement",
			ref: u,
			class: "share-sliding-tabs",
			role: "tablist",
			"aria-label": t.ariaLabel || void 0
		}, [(S(!0), s(e, null, T(t.tabs, (e, r) => (S(), s("button", {
			id: e.id,
			key: String(e.key),
			ref_for: !0,
			ref: (e) => m(e, r),
			class: _(["share-sliding-tabs__tab", { "share-sliding-tabs__tab--active": t.modelValue === e.key }]),
			type: "button",
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			"aria-controls": e.panelId,
			tabindex: t.modelValue === e.key ? 0 : -1,
			disabled: e.disabled,
			onClick: (t) => h(e.key),
			onKeydown: (e) => C(e, r)
		}, [E(n.$slots, "icon", { tab: e }, () => [e.icon || e.svg ? (S(), s("img", {
			key: 0,
			class: "share-sliding-tabs__icon",
			src: e.icon || e.svg,
			alt: "",
			"aria-hidden": "true"
		}, null, 8, Ce)) : o("", !0)], !0), c("span", null, O(e.title), 1)], 42, Se))), 128)), c("span", {
			class: "share-sliding-tabs__underline",
			style: y(p.value),
			"aria-hidden": "true"
		}, null, 4)], 8, Y));
	}
}, [["__scopeId", "data-v-28aae1df"]]), Te = [
	"aria-checked",
	"aria-label",
	"disabled"
], Ee = {
	key: 0,
	class: "share-toggle-switch__text"
}, De = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("button", {
			class: _(["share-toggle-switch", { "share-toggle-switch--active": e.modelValue }]),
			type: "button",
			role: "switch",
			"aria-checked": e.modelValue,
			"aria-label": e.ariaLabel || e.label || void 0,
			disabled: e.disabled,
			onClick: i
		}, [n[0] ||= c("span", {
			class: "share-toggle-switch__track",
			"aria-hidden": "true"
		}, [c("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (S(), s("span", Ee, [E(t.$slots, "default", {}, () => [u(O(e.label), 1)], !0)])) : o("", !0)], 10, Te));
	}
}, [["__scopeId", "data-v-828a23d7"]]), X = [], Z = null, Q = null;
function Oe(e) {
	let t = X.lastIndexOf(e);
	t >= 0 && X.splice(t, 1);
}
function ke(e) {
	Oe(e), X.push(e);
}
function Ae(e) {
	Oe(e);
}
function je(e) {
	return X.at(-1) === e;
}
function Me(e, t) {
	Z?.token !== e && Z?.close(), Z = {
		token: e,
		close: t
	}, ke(e);
}
function Ne(e) {
	Z?.token === e && (Z = null), Ae(e);
}
function Pe(e, t) {
	Q?.token !== e && Q?.close(), Q = {
		token: e,
		close: t
	};
}
function Fe(e) {
	Q?.token === e && (Q = null);
}
function Ie() {
	if (!Q) return !1;
	let e = Q;
	return Q = null, e.close(), !0;
}
//#endregion
//#region src/lib/actionMenuPlacement.js
var Le = 8, Re = 6;
function ze(e, t, n) {
	return Math.min(Math.max(e, t), Math.max(t, n));
}
function Be({ triggerRect: e, popoverWidth: t, popoverHeight: n, viewportWidth: r, viewportHeight: i, viewportLeft: a = 0, viewportTop: o = 0, originX: s, originY: c, margin: l = 8, gap: u = 6 }) {
	let d = a + l, f = o + l, p = a + r - l, m = o + i - l, h = Math.min(t, Math.max(0, p - d)), g = ze(e.right - h, d, p - h), _ = Math.max(0, m - e.bottom - u), v = Math.max(0, e.top - u - f), y = _ < n && v > _, b = y ? v : _, x = Math.min(n, b), S = ze(y ? e.top - u - x : e.bottom + u, f, m - x);
	return {
		left: g,
		top: S,
		maxHeight: b,
		opensAbove: y,
		originX: ze(s - g, 0, h),
		originY: ze(c - S, 0, x)
	};
}
var Ve = 8, He = 6, Ue = Be, We = [
	"title",
	"aria-label",
	"aria-expanded",
	"disabled"
], Ge = ["aria-label"], Ke = /*#__PURE__*/ R({
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
		let l = r, u = Symbol("action-menu"), f = w(null), p = w(null), m = w(null), h = w(!1), v = null, x = null;
		function C(e) {
			let t = f.value;
			if (!t) return null;
			let n = t.getBoundingClientRect(), r = e?.detail > 0;
			return v = {
				x: r ? e.clientX : n.left + n.width / 2,
				y: r ? e.clientY : n.bottom
			}, {
				position: "fixed",
				top: "8px",
				left: "8px",
				visibility: "hidden"
			};
		}
		function T() {
			let e = window.visualViewport;
			return {
				viewportWidth: e?.width || window.innerWidth,
				viewportHeight: e?.height || window.innerHeight,
				viewportLeft: e?.offsetLeft || 0,
				viewportTop: e?.offsetTop || 0
			};
		}
		function D() {
			x = null;
			let e = f.value, t = p.value;
			if (!h.value || !e || !t) return;
			let n = T(), r = Math.max(0, n.viewportWidth - 16);
			t.style.minWidth = `${Math.min(200, r)}px`, t.style.maxWidth = `${Math.min(280, r)}px`;
			let i = e.getBoundingClientRect(), a = Be({
				triggerRect: i,
				popoverWidth: t.getBoundingClientRect().width,
				popoverHeight: t.scrollHeight,
				originX: v?.x ?? i.left + i.width / 2,
				originY: v?.y ?? i.bottom,
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
			x != null && cancelAnimationFrame(x), x = requestAnimationFrame(D);
		}
		function k() {
			document.addEventListener("pointerdown", F, !0), document.addEventListener("keydown", R), window.addEventListener("resize", O), window.addEventListener("scroll", I, !0), window.visualViewport?.addEventListener("resize", O), window.visualViewport?.addEventListener("scroll", O);
		}
		function A() {
			document.removeEventListener("pointerdown", F, !0), document.removeEventListener("keydown", R), window.removeEventListener("resize", O), window.removeEventListener("scroll", I, !0), window.visualViewport?.removeEventListener("resize", O), window.visualViewport?.removeEventListener("scroll", O);
		}
		function j(e) {
			l.disabled || h.value || (m.value = C(e), Me(u, M), h.value = !0, k(), g(O));
		}
		function M() {
			h.value && (Ie(), h.value = !1, Ne(u), x != null && cancelAnimationFrame(x), x = null, A());
		}
		function N(e) {
			l.disabled || (h.value ? M() : j(e));
		}
		function F(e) {
			e.target?.closest?.(".ram-popover, [data-share-popover-related]") || f.value?.contains?.(e.target) || M();
		}
		function I(e) {
			p.value?.contains?.(e.target) || e.target?.closest?.("[data-share-popover-related]") || M();
		}
		function R(e) {
			e.key === "Escape" && (Ie() || je(u) && M());
		}
		return b(M), i({
			open: j,
			close: M,
			toggle: N
		}), (i, l) => (S(), s(e, null, [i.$slots.trigger ? (S(), s("div", {
			key: 0,
			ref_key: "triggerEl",
			ref: f,
			class: _(["ram-custom-trigger", { "ram-custom-trigger--block": r.block }]),
			onClick: L(N, ["stop"])
		}, [E(i.$slots, "trigger", { open: h.value }, void 0, !0)], 2)) : (S(), s("button", {
			key: 1,
			ref_key: "triggerEl",
			ref: f,
			type: "button",
			class: "ram-trigger",
			title: r.title,
			"aria-label": r.title,
			"aria-expanded": h.value,
			"aria-haspopup": "menu",
			disabled: r.disabled,
			onClick: L(N, ["stop"])
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
		], -1)]], 8, We)), (S(), a(t, { to: "body" }, [d(n, { name: "share-popover-action" }, {
			default: P(() => [h.value ? (S(), s("div", {
				key: 0,
				ref_key: "popoverEl",
				ref: p,
				class: "ram-popover",
				style: y(m.value),
				role: "menu",
				"aria-label": r.title,
				onClick: l[0] ||= L(() => {}, ["stop"]),
				onPointerdown: l[1] ||= L(() => {}, ["stop"])
			}, [E(i.$slots, "default", { close: M }, void 0, !0)], 44, Ge)) : o("", !0)]),
			_: 3
		})]))], 64));
	}
}, [["__scopeId", "data-v-e5053f4e"]]), qe = ["aria-haspopup", "aria-expanded"], Je = {
	class: "ram-item__icon",
	"aria-hidden": "true"
}, Ye = {
	key: 1,
	width: "17",
	height: "17",
	viewBox: "0 0 17 17",
	fill: "none"
}, Xe = { class: "ram-item__content" }, Ze = {
	key: 0,
	class: "ram-item__suffix"
}, Qe = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("button", {
			type: "button",
			class: _(["ram-item", e.tone === "default" ? null : `ram-item--${e.tone}`]),
			role: "menuitem",
			"aria-haspopup": e.submenu ? "menu" : void 0,
			"aria-expanded": e.submenu ? e.submenuOpen : void 0
		}, [
			c("span", Je, [E(t.$slots, "icon", {}, () => [e.icon ? (S(), a(D(e.icon), {
				key: 0,
				size: 17,
				"stroke-width": 1.9
			})) : (S(), s("svg", Ye, [...n[0] ||= [
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
			c("span", Xe, [E(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.suffix || e.submenu ? (S(), s("span", Ze, [E(t.$slots, "suffix", {}, void 0, !0), e.submenu ? (S(), s("svg", {
				key: 0,
				class: _(["ram-item__submenu-chevron", { "ram-item__submenu-chevron--open": e.submenuOpen }]),
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
		], 10, qe));
	}
}, [["__scopeId", "data-v-5fc35d86"]]);
//#endregion
//#region src/composables/useMediaQuery.js
function $e(e) {
	let t = w(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return x(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), b(() => n?.removeEventListener?.("change", r)), t;
}
function et(e = 768) {
	return $e(`(max-width: ${e}px)`);
}
//#endregion
//#region src/components/floating/BasePopover.vue
var tt = [
	"id",
	"role",
	"aria-label",
	"data-share-popover-related"
], nt = /*#__PURE__*/ R({
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
		let c = e, l = r, u = i(() => c.transition ? c.transition : c.transitionPreset === "action-menu" ? "share-popover-action" : ""), f = Symbol("base-popover"), p = w(null), m = w(null);
		function h() {
			let e = c.anchor;
			return e ? typeof e.getBoundingClientRect == "function" ? e : e.value ?? e : null;
		}
		function v(e) {
			return typeof e == "number" ? `${e}px` : e;
		}
		function x() {
			let e = window.visualViewport;
			return {
				left: e?.offsetLeft || 0,
				top: e?.offsetTop || 0,
				width: e?.width || window.innerWidth,
				height: e?.height || window.innerHeight
			};
		}
		function C() {
			let e = h();
			if (!e) return;
			let t = e.getBoundingClientRect(), n = x(), r = typeof c.minWidth == "number" ? c.minWidth : 0, i = Math.max(r, p.value?.offsetWidth || 0), a = p.value?.offsetHeight || 0, o = n.left + 8, s = n.left + n.width - 8, l = n.top + 8, u = n.top + n.height - 8, d = {
				position: "fixed",
				minWidth: v(c.minWidth),
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
		function T() {
			l("update:open", !1);
		}
		function D(e) {
			return !!e?.closest?.("[data-share-popover-related]");
		}
		function O(e) {
			p.value?.contains(e.target) || D(e.target) || h()?.contains?.(e.target) || T();
		}
		function k(e) {
			if (!c.closeOnScroll) {
				C();
				return;
			}
			p.value?.contains(e.target) || D(e.target) || T();
		}
		function A() {
			c.closeOnResize ? T() : C();
		}
		function j(e) {
			e.key === "Escape" && (Ie() || je(f) && T());
		}
		function M() {
			ke(f), document.addEventListener("pointerdown", O, !0), document.addEventListener("keydown", j), window.addEventListener("resize", A), window.addEventListener("scroll", k, !0), window.visualViewport?.addEventListener("resize", A), window.visualViewport?.addEventListener("scroll", C);
		}
		function F() {
			Ae(f), document.removeEventListener("pointerdown", O, !0), document.removeEventListener("keydown", j), window.removeEventListener("resize", A), window.removeEventListener("scroll", k, !0), window.visualViewport?.removeEventListener("resize", A), window.visualViewport?.removeEventListener("scroll", C);
		}
		return N(() => c.open, async (e) => {
			F(), e && (C(), await g(), c.open && (C(), M()));
		}, { immediate: !0 }), N(() => [
			c.anchor,
			c.placement,
			c.offset,
			c.minWidth
		], () => {
			c.open && g(C);
		}), b(F), (r, i) => (S(), a(t, { to: "body" }, [d(n, { name: u.value }, {
			default: P(() => [e.open ? (S(), s("div", {
				key: 0,
				id: e.id || void 0,
				ref_key: "popoverEl",
				ref: p,
				class: _([
					"share-popover",
					"base-popover",
					e.popoverClass
				]),
				style: y(m.value),
				role: e.role || void 0,
				"aria-label": e.ariaLabel || void 0,
				"data-share-popover-related": e.related ? "" : void 0,
				onClick: i[0] ||= L(() => {}, ["stop"]),
				onPointerdown: i[1] ||= L(() => {}, ["stop"])
			}, [E(r.$slots, "default", { close: T }, void 0, !0)], 46, tt)) : o("", !0)]),
			_: 3
		}, 8, ["name"])]));
	}
}, [["__scopeId", "data-v-256a13ae"]]), rt = { class: "ras-root" }, it = { class: "ras-panel" }, at = {
	key: 0,
	class: "ras-label"
}, ot = { class: "ras-panel ras-panel--popover" }, st = {
	key: 0,
	class: "ras-label"
}, ct = /*#__PURE__*/ R({
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
		let r = e, i = Symbol("action-submenu"), l = w(null), u = et(r.mobileBreakpoint), f = w(!1);
		function p() {
			r.disabled || f.value || (Pe(i, h), f.value = !0);
		}
		function m() {
			r.disabled || (f.value ? h() : p());
		}
		function h() {
			f.value && (f.value = !1, Fe(i));
		}
		function g(e) {
			e || h();
		}
		return b(h), t({
			open: p,
			close: h,
			toggle: m
		}), (t, r) => (S(), s("div", rt, [
			c("div", {
				ref_key: "triggerEl",
				ref: l,
				class: "ras-trigger",
				onClick: L(m, ["stop"])
			}, [E(t.$slots, "trigger", {
				open: f.value,
				toggle: m
			}, void 0, !0)], 512),
			d(n, { name: "ras-inline" }, {
				default: P(() => [k(u) && f.value ? (S(), s("div", {
					key: 0,
					class: "ras-inline",
					"data-share-popover-related": "",
					onClick: r[0] ||= L(() => {}, ["stop"]),
					onPointerdown: r[1] ||= L(() => {}, ["stop"])
				}, [c("div", it, [e.label ? (S(), s("div", at, O(e.label), 1)) : o("", !0), E(t.$slots, "default", { close: h }, void 0, !0)])], 32)) : o("", !0)]),
				_: 3
			}),
			k(u) ? o("", !0) : (S(), a(nt, {
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
				default: P(() => [c("div", ot, [e.label ? (S(), s("div", st, O(e.label), 1)) : o("", !0), E(t.$slots, "default", { close: h }, void 0, !0)])]),
				_: 3
			}, 8, [
				"open",
				"anchor",
				"min-width"
			]))
		]));
	}
}, [["__scopeId", "data-v-a4a95dc2"]]), lt = [
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
function ut(e) {
	return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(String(e || "").trim());
}
function dt(e = lt) {
	return e[Math.floor(Math.random() * e.length)];
}
//#endregion
//#region src/components/floating/ColorPresetPicker.vue
var ft = ["aria-label"], pt = ["aria-label", "aria-expanded"], mt = { class: "cpp-body" }, ht = "#888888", gt = /*#__PURE__*/ R({
	__name: "ColorPresetPicker",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		colors: {
			type: Array,
			default: () => lt
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
		let n = e, r = t, a = w(null), o = w(!1), l = w("cpppop-cancel"), u = w(n.modelValue || ""), p = i(() => /^#[0-9a-f]{6}$/i.test(n.modelValue || "") ? n.modelValue : ht), h = i(() => !!u.value && !ut(u.value));
		function g(e) {
			return String(n.modelValue || "").toLowerCase() === String(e).toLowerCase();
		}
		function v() {
			l.value = "cpppop-cancel", o.value = !0;
		}
		function b(e) {
			l.value = e === "pick" ? "cpppop-pick" : "cpppop-cancel", o.value = !1;
		}
		function x() {
			o.value ? b("cancel") : v();
		}
		function C(e) {
			e || b("cancel");
		}
		function T(e) {
			u.value = e, r("update:modelValue", e);
		}
		function D() {
			let e = u.value.trim();
			if (!ut(e)) {
				r("invalid", e);
				return;
			}
			T(e);
		}
		function O(e) {
			T(e), b("pick");
		}
		function A() {
			u.value = "", r("update:modelValue", n.clearValue), b("pick");
		}
		N(() => n.modelValue, (e) => {
			u.value = e || "";
		});
		let j = f({
			name: "ColorPresetGrid",
			setup() {
				return () => m("div", { class: "cpp-content" }, [m("div", {
					class: "cpp-grid",
					style: { "--cpp-columns": n.columns }
				}, n.colors.map((e) => m("button", {
					key: e,
					type: "button",
					class: ["cpp-color", { active: g(e) }],
					style: { background: e },
					title: e,
					"aria-label": e,
					"aria-pressed": g(e),
					onMousedown: (e) => e.preventDefault(),
					onClick: () => O(e)
				}))), n.allowCustom || n.allowClear ? m("div", { class: "cpp-extra" }, [
					n.allowCustom ? m("label", {
						class: "cpp-native",
						title: n.customLabel
					}, [m("span", {
						class: "cpp-native-sw",
						style: { background: n.modelValue || "var(--surface-active)" }
					}), m("input", {
						type: "color",
						value: p.value,
						"aria-label": n.customLabel,
						onInput: (e) => T(e.target.value)
					})]) : null,
					n.allowCustom ? m("input", {
						class: ["cpp-hex", { "cpp-hex--invalid": h.value }],
						type: "text",
						value: u.value,
						placeholder: "#hex",
						spellcheck: "false",
						"aria-label": n.customLabel,
						"aria-invalid": h.value,
						onInput: (e) => {
							u.value = e.target.value;
						},
						onChange: D,
						onKeydown: (e) => {
							e.key === "Enter" && D();
						}
					}) : null,
					n.allowClear ? m("button", {
						type: "button",
						class: "cpp-clear",
						onMousedown: (e) => e.preventDefault(),
						onClick: A
					}, n.clearLabel) : null
				]) : null]);
			}
		});
		return (t, n) => e.inline ? (S(), s("div", {
			key: 0,
			class: "cpp-body cpp-body--inline",
			"aria-label": e.ariaLabel
		}, [d(k(j))], 8, ft)) : (S(), s("span", {
			key: 1,
			ref_key: "anchorEl",
			ref: a,
			class: "cpp-host"
		}, [E(t.$slots, "trigger", {
			toggle: x,
			open: o.value,
			value: e.modelValue
		}, () => [c("button", {
			type: "button",
			class: _(["cpp-swatch", { "cpp-swatch--empty": !e.modelValue }]),
			style: y(e.modelValue ? { background: e.modelValue } : null),
			"aria-label": e.ariaLabel,
			"aria-expanded": o.value,
			"aria-haspopup": "dialog",
			onClick: x
		}, null, 14, pt)], !0), d(nt, {
			open: o.value,
			anchor: a.value,
			placement: e.placement,
			"min-width": 0,
			"z-index": e.zIndex,
			transition: l.value,
			role: "dialog",
			"aria-label": e.ariaLabel,
			"onUpdate:open": C
		}, {
			default: P(() => [c("div", mt, [d(k(j))])]),
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
}, [["__scopeId", "data-v-1b7035e4"]]), _t = [
	"aria-label",
	"aria-expanded",
	"aria-activedescendant",
	"disabled"
], vt = ["aria-label"], yt = [
	"placeholder",
	"aria-label",
	"aria-activedescendant"
], bt = [
	"id",
	"aria-selected",
	"disabled",
	"onMouseenter",
	"onClick"
], xt = {
	key: 1,
	class: "vs-empty"
}, St = /*#__PURE__*/ R({
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
		let d = `share-value-select-${a}`, f = w(null), p = w(null), m = w(null), h = w(!1), v = w(""), y = w(-1), x = i(() => l.options.map((e, t) => e && typeof e == "object" ? {
			value: e.value,
			label: String(e.label ?? e.value ?? ""),
			disabled: !!e.disabled,
			key: e.key ?? `${String(e.value)}-${t}`
		} : {
			value: e,
			label: String(e ?? ""),
			disabled: !1,
			key: `${String(e)}-${t}`
		})), C = i(() => x.value.find((e) => k(e.value))?.label ?? ""), E = i(() => {
			let e = v.value.trim().toLocaleLowerCase();
			return e ? x.value.filter((t) => t.label.toLocaleLowerCase().includes(e)) : x.value;
		}), D = i(() => l.searchable && x.value.length >= l.searchThreshold);
		function k(e) {
			return String(e) === String(l.modelValue);
		}
		function A(e) {
			return `${d}-option-${e}`;
		}
		function j(e = 0, t = 1) {
			let n = E.value;
			if (!n.length) return -1;
			for (let r = 0; r < n.length; r += 1) {
				let i = (e + r * t + n.length) % n.length;
				if (!n[i].disabled) return i;
			}
			return -1;
		}
		function P() {
			let e = E.value.findIndex((e) => k(e.value) && !e.disabled);
			return e >= 0 ? e : j();
		}
		function I(e) {
			E.value[e]?.disabled || (y.value = e);
		}
		function L(e) {
			let t = E.value;
			if (!t.length) return;
			let n = y.value < 0 ? e > 0 ? 0 : t.length - 1 : (y.value + e + t.length) % t.length;
			y.value = j(n, e), g(() => document.getElementById(A(y.value))?.scrollIntoView?.({ block: "nearest" }));
		}
		function R() {
			l.disabled || h.value || (h.value = !0, y.value = P(), document.addEventListener("pointerdown", U, !0), u("open"), D.value && g(() => m.value?.focus()));
		}
		function z({ restoreFocus: e = !1 } = {}) {
			h.value && (h.value = !1, v.value = "", y.value = -1, document.removeEventListener("pointerdown", U, !0), u("close"), e && g(() => p.value?.focus()));
		}
		function B() {
			h.value ? z() : R();
		}
		function V(e) {
			!e || e.disabled || (u("update:modelValue", e.value), z({ restoreFocus: !0 }));
		}
		function H() {
			V(E.value[y.value]);
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
				e.preventDefault(), y.value = j(E.value.length - 1, -1);
				return;
			}
			if ((e.key === "Enter" || e.key === " ") && h.value) {
				e.preventDefault(), H();
				return;
			}
			e.key === "Escape" && h.value && (e.preventDefault(), z({ restoreFocus: !0 }));
		}
		function ee(e) {
			e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), L(e.key === "ArrowDown" ? 1 : -1)) : e.key === "Home" ? (e.preventDefault(), y.value = j()) : e.key === "End" ? (e.preventDefault(), y.value = j(E.value.length - 1, -1)) : e.key === "Enter" ? (e.preventDefault(), H()) : e.key === "Escape" && (e.preventDefault(), z({ restoreFocus: !0 }));
		}
		return N(E, () => {
			y.value = P();
		}), N(() => l.disabled, (e) => {
			e && z();
		}), b(() => {
			document.removeEventListener("pointerdown", U, !0);
		}), n({
			open: R,
			close: z,
			toggle: B
		}), (n, r) => (S(), s("div", {
			ref_key: "rootEl",
			ref: f,
			class: _(["vs", { "vs--disabled": t.disabled }])
		}, [c("button", {
			ref_key: "triggerEl",
			ref: p,
			class: _(["vs-button", { empty: !C.value }]),
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
		}, [c("span", null, O(C.value || t.placeholder), 1), r[1] ||= c("span", {
			class: "vs-arrow",
			"aria-hidden": "true"
		}, "▾", -1)], 42, _t), h.value ? (S(), s("div", {
			key: 0,
			id: d,
			class: _(["vs-drop", { "vs-drop-up": t.dropUp }]),
			role: "listbox",
			"aria-label": t.ariaLabel || void 0
		}, [
			D.value ? F((S(), s("input", {
				key: 0,
				ref_key: "searchEl",
				ref: m,
				"onUpdate:modelValue": r[0] ||= (e) => v.value = e,
				class: "vs-search",
				type: "search",
				placeholder: t.searchPlaceholder,
				"aria-label": t.searchAriaLabel || t.searchPlaceholder,
				"aria-controls": d,
				"aria-activedescendant": y.value >= 0 ? A(y.value) : void 0,
				autocomplete: "off",
				onKeydown: ee
			}, null, 40, yt)), [[M, v.value]]) : o("", !0),
			(S(!0), s(e, null, T(E.value, (e, t) => (S(), s("button", {
				id: A(t),
				key: e.key,
				class: _(["vs-option", { "vs-option--active": t === y.value }]),
				type: "button",
				role: "option",
				"aria-selected": k(e.value),
				disabled: e.disabled,
				onMouseenter: (e) => I(t),
				onClick: (t) => V(e)
			}, O(e.label), 43, bt))), 128)),
			E.value.length === 0 ? (S(), s("div", xt, O(t.emptyLabel), 1)) : o("", !0)
		], 10, vt)) : o("", !0)], 2));
	}
}, [["__scopeId", "data-v-764969f5"]]), Ct = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.b.blockquote.br.code.em.h1.h2.h3.h4.h5.h6.li.ol.p.pre.s.span.strike.strong.table.tbody.td.th.thead.tr.u.ul".split(".")), wt = /* @__PURE__ */ new Set([
	"embed",
	"iframe",
	"math",
	"object",
	"script",
	"style",
	"svg",
	"template"
]), Tt = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:"
]), Et = /^[a-z][a-z0-9-]{0,39}$/, Dt = 4096;
function Ot(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
function kt(e) {
	let t = String(e || "").trim();
	if (!t || /[\u0000-\u001f\u007f]/.test(t)) return "";
	if (/^(?:#|\?|\.?\.\/|\/)/.test(t)) return t;
	try {
		let e = new URL(t, "https://share-ui.invalid");
		return Tt.has(e.protocol) ? t : "";
	} catch {
		return "";
	}
}
function At(e) {
	let t = String(e || "").trim();
	if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t) || /^var\(--[a-z0-9-]+\)$/i.test(t)) return t;
	let n = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
	if (!n || n.slice(1, 4).map(Number).some((e) => e < 0 || e > 255)) return "";
	let r = n[4] == null ? null : Number(n[4]);
	return r != null && (r < 0 || r > 1) ? "" : t;
}
function jt(e) {
	try {
		let t = encodeURIComponent(JSON.stringify(e ?? {}));
		return t.length <= Dt ? t : "";
	} catch {
		return "";
	}
}
function Mt(e) {
	let t = String(e || "");
	if (!t || t.length > Dt) return null;
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
function Nt(e, t, n) {
	let r = String(e || "").trim().toLowerCase(), i = jt(t);
	return !Et.test(r) || !i ? "" : `<span data-rich-node="${r}" data-rich-payload="${Ot(i)}" contenteditable="false">${Ot(n || r)}</span>`;
}
function Pt(e) {
	if (!e?.getAttribute) return null;
	let t = String(e.getAttribute("data-rich-node") || "").trim().toLowerCase(), n = Mt(e.getAttribute("data-rich-payload"));
	return !Et.test(t) || n == null ? null : {
		kind: t,
		payload: n,
		label: e.textContent || t
	};
}
function Ft(e, t) {
	let n = e.getAttribute("title");
	n && t.setAttribute("title", n);
	let r = e.getAttribute("dir");
	[
		"ltr",
		"rtl",
		"auto"
	].includes(r) && t.setAttribute("dir", r);
	let i = At(e.style?.getPropertyValue("color"));
	if (i && t.style.setProperty("color", i), t.tagName === "A") {
		let n = kt(e.getAttribute("href"));
		n && t.setAttribute("href", n), e.getAttribute("target") === "_blank" && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer"));
	}
	if (t.tagName === "SPAN") {
		let n = Pt(e);
		n && (t.setAttribute("data-rich-node", n.kind), t.setAttribute("data-rich-payload", jt(n.payload)), t.setAttribute("contenteditable", "false"));
	}
	if (t.tagName === "TD" || t.tagName === "TH") for (let n of ["colspan", "rowspan"]) {
		let r = Number.parseInt(e.getAttribute(n), 10);
		r >= 1 && r <= 100 && t.setAttribute(n, String(r));
	}
}
function It(e, t, n) {
	if (e.nodeType === 3) {
		t.appendChild(n.createTextNode(e.nodeValue || ""));
		return;
	}
	if (e.nodeType !== 1) return;
	let r = e.tagName.toLowerCase();
	if (wt.has(r)) return;
	if (!Ct.has(r)) {
		for (let r of [...e.childNodes]) It(r, t, n);
		return;
	}
	let i = n.createElement(r);
	if (Ft(e, i), i.hasAttribute("data-rich-node")) i.textContent = e.textContent || i.getAttribute("data-rich-node");
	else for (let t of [...e.childNodes]) It(t, i, n);
	t.appendChild(i);
}
function Lt(e) {
	let t = String(e || "");
	if (!t) return "";
	if (typeof DOMParser > "u") return Ot(t);
	let n = new DOMParser().parseFromString(t, "text/html"), r = n.createElement("div");
	for (let e of [...n.body.childNodes]) It(e, r, n);
	return r.innerHTML;
}
function Rt(e) {
	return Ot(e).replace(/\r\n?|\n/g, "<br>");
}
//#endregion
//#region src/components/rich-text/RichContent.vue
function zt(e) {
	let t = {};
	for (let n of [...e.attributes]) n.name !== "class" && (t[n.name] = n.value);
	return t;
}
function Bt(e, t, n) {
	if (e.nodeType === Node.TEXT_NODE) return e.nodeValue || "";
	if (e.nodeType !== Node.ELEMENT_NODE) return null;
	let r = Pt(e);
	if (r) {
		let e = () => m("span", {
			class: "rc-node",
			"data-rich-node": r.kind,
			title: r.label
		}, r.label);
		return m("span", {
			class: "rc-node-host",
			key: n
		}, t.node?.({
			node: r,
			fallback: e
		}) || e());
	}
	let i = [...e.childNodes].map((e, r) => Bt(e, t, `${n}.${r}`)).filter((e) => e != null);
	return m(e.tagName.toLowerCase(), {
		...zt(e),
		key: n
	}, i);
}
var Vt = /*#__PURE__*/ R({
	name: "RichContent",
	inheritAttrs: !1,
	props: { html: {
		type: String,
		default: ""
	} },
	setup(e, { slots: t, attrs: n }) {
		let r = i(() => Lt(e.html));
		return () => {
			if (typeof DOMParser > "u") return m("div", {
				...n,
				class: ["rc", n.class],
				innerHTML: r.value
			});
			let e = [...new DOMParser().parseFromString(r.value, "text/html").body.childNodes].map((e, n) => Bt(e, t, String(n))).filter((e) => e != null);
			return m("div", {
				...n,
				class: ["rc", n.class]
			}, e);
		};
	}
}, [["__scopeId", "data-v-db98d003"]]), Ht = { class: "input-desc" }, Ut = ["aria-label"], Wt = ["title"], Gt = ["title"], Kt = ["title"], qt = ["aria-expanded"], Jt = ["onMousedown"], Yt = ["title", "onMousedown"], Xt = { class: "desc-color-icon" }, Zt = [
	"title",
	"aria-label",
	"aria-expanded"
], Qt = { class: "desc-link-field" }, $t = ["placeholder"], en = { class: "desc-link-field" }, tn = {
	key: 0,
	class: "desc-link-error"
}, nn = { class: "desc-link-actions" }, rn = {
	type: "submit",
	class: "desc-link-save"
}, an = ["data-placeholder", "aria-label"], on = {
	key: 2,
	class: "desc-empty"
}, sn = /*#__PURE__*/ R({
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
			default: () => lt
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
		let f = {
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
		}, m = t, h = r, y = i(() => ({
			...f,
			...m.labels
		})), b = i(() => Array.from({ length: m.maxHeadingLevel }, (e, t) => t + 1)), D = w(!1), k = w(null), A = w(null), j = w(null), I = w(null), R = w(!1), z = w(null), B = w(null), V = w(null), H = w(null), U = w(!1), W = C({
			text: "",
			url: ""
		}), ee = i(() => z.value || B.value || j.value);
		function te(e) {
			return Lt(e) || "<p><br></p>";
		}
		function ne(e) {
			!m.editable || !A.value || document.activeElement !== A.value && (A.value.innerHTML = te(e));
		}
		N(() => m.modelValue, ne), N(() => m.editable, (e) => {
			e && g(() => ne(m.modelValue));
		}), x(() => {
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
			let t = Nt(e?.kind, e?.payload, e?.label);
			if (!t || !A.value) return null;
			ae(), document.execCommand("insertHTML", !1, t), Y();
			let n = A.value.querySelectorAll("[data-rich-node]"), r = n[n.length - 1] || null;
			return r && (V.value = r, de(r)), r;
		}
		function ce(e) {
			return e?.nodeType === Node.ELEMENT_NODE && e.matches?.("[data-rich-node]") ? e : e?.element?.matches?.("[data-rich-node]") ? e.element : V.value?.isConnected ? V.value : null;
		}
		function le(e, t) {
			let n = ce(e), r = Nt(t?.kind, t?.payload, t?.label);
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
			ie(), z.value = e, B.value = t, U.value = !1, W.text = e?.textContent || oe(), W.url = e?.getAttribute?.("href") || "", R.value = !0, g(() => I.value?.focus());
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
			let e = kt(W.url);
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
				node: Pt(n)
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
			A.value?.focus(), document.execCommand("styleWithCSS", !1, !1), document.execCommand(e, !1, null), g(Y);
		}
		function ve(e) {
			A.value?.focus(), document.execCommand("formatBlock", !1, e), D.value = !1, g(Y);
		}
		function ye(e) {
			if (A.value?.focus(), document.execCommand("styleWithCSS", !1, !0), e) {
				document.execCommand("foreColor", !1, e), Y();
				return;
			}
			document.execCommand("removeFormat", !1, null), g(() => {
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
			let e = Lt(A.value.innerHTML);
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
		function X() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !A.value?.contains(e.anchorNode)) return !1;
			let t = we(e.anchorNode);
			if (!t || t.tagName === "LI") return !1;
			let n = (t.textContent || "").replace(/\u00a0/g, " ");
			return n !== "-" && n !== " -" ? !1 : (De(t), !0);
		}
		function Z(e) {
			if (e.key === " ") {
				X() && (e.preventDefault(), Y());
				return;
			}
			e.key === "Enter" && (e.preventDefault(), document.execCommand(e.shiftKey ? "insertLineBreak" : "insertParagraph"), Y());
		}
		function Q(e) {
			A.value?.focus(), document.execCommand("insertHTML", !1, e), Y();
		}
		function Oe(e) {
			e.preventDefault();
			let t = e.clipboardData?.getData("text/html"), n = e.clipboardData?.getData("text/plain") || "";
			Q(t ? Lt(t) : Rt(n));
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
			Q(t ? Lt(t) : Rt(n));
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
		}), (n, r) => (S(), s("div", Ht, [t.editable ? (S(), s(e, { key: 0 }, [
			c("div", {
				class: "desc-toolbar",
				role: "toolbar",
				"aria-label": y.value.toolbar
			}, [
				c("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.bold,
					onMousedown: r[0] ||= L((e) => J("bold"), ["prevent"])
				}, [c("b", null, O(y.value.boldShort), 1)], 40, Wt),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.italic,
					onMousedown: r[1] ||= L((e) => J("italic"), ["prevent"])
				}, [c("i", null, O(y.value.italicShort), 1)], 40, Gt),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.underline,
					onMousedown: r[2] ||= L((e) => J("underline"), ["prevent"])
				}, [c("u", null, O(y.value.underlineShort), 1)], 40, Kt),
				r[13] ||= c("div", { class: "desc-sep" }, null, -1),
				c("button", {
					ref_key: "headingTrigger",
					ref: k,
					type: "button",
					class: "desc-btn desc-btn-wide",
					"aria-expanded": D.value,
					"aria-haspopup": "menu",
					onMousedown: r[3] ||= L((e) => D.value = !D.value, ["prevent"])
				}, [u(O(y.value.paragraph) + " ", 1), r[11] ||= c("span", {
					class: "desc-caret",
					"aria-hidden": "true"
				}, "▾", -1)], 40, qt),
				d(nt, {
					open: D.value,
					anchor: k.value,
					"min-width": 160,
					"z-index": 4500,
					role: "menu",
					"aria-label": y.value.paragraph,
					"onUpdate:open": r[5] ||= (e) => D.value = e
				}, {
					default: P(() => [c("button", {
						type: "button",
						class: "desc-drop-item drop-p",
						role: "menuitem",
						onMousedown: r[4] ||= L((e) => ve("p"), ["prevent"])
					}, O(y.value.normal), 33), (S(!0), s(e, null, T(b.value, (e) => (S(), s("button", {
						key: e,
						type: "button",
						class: _(["desc-drop-item", `drop-h${e}`]),
						role: "menuitem",
						onMousedown: L((t) => ve(`h${e}`), ["prevent"])
					}, O(q(e)), 43, Jt))), 128))]),
					_: 1
				}, 8, [
					"open",
					"anchor",
					"aria-label"
				]),
				r[14] ||= c("div", { class: "desc-sep" }, null, -1),
				d(gt, {
					"allow-clear": "",
					colors: t.colors,
					"model-value": "",
					"clear-label": y.value.clearColor,
					"aria-label": y.value.color,
					"onUpdate:modelValue": ye
				}, {
					trigger: P(({ toggle: e }) => [c("button", {
						type: "button",
						class: "desc-btn",
						title: y.value.color,
						onMousedown: L((t) => {
							D.value = !1, e();
						}, ["prevent"])
					}, [c("span", Xt, O(y.value.colorShort), 1)], 40, Yt)]),
					_: 1
				}, 8, [
					"colors",
					"clear-label",
					"aria-label"
				]),
				r[15] ||= c("div", { class: "desc-sep" }, null, -1),
				t.showLinkButton ? (S(), s("button", {
					key: 0,
					ref_key: "linkTrigger",
					ref: j,
					type: "button",
					class: _(["desc-btn", { active: R.value }]),
					title: y.value.link,
					"aria-label": y.value.link,
					"aria-expanded": R.value,
					"aria-haspopup": "dialog",
					onMousedown: r[6] ||= L((e) => K(), ["prevent"])
				}, [...r[12] ||= [c("span", { "aria-hidden": "true" }, "↗", -1)]], 42, Zt)) : o("", !0),
				E(n.$slots, "toolbar", {
					editor: _e,
					insertRichNode: se,
					updateRichNode: le,
					removeRichNode: ue
				}, void 0, !0)
			], 8, Ut),
			d(nt, {
				open: R.value,
				anchor: ee.value,
				"min-width": 260,
				"z-index": 4500,
				role: "dialog",
				"aria-label": y.value.link,
				"onUpdate:open": pe
			}, {
				default: P(() => [c("form", {
					class: "desc-link-form",
					onSubmit: L(me, ["prevent"])
				}, [
					c("label", Qt, [c("span", null, O(y.value.linkText), 1), F(c("input", {
						"onUpdate:modelValue": r[7] ||= (e) => W.text = e,
						type: "text",
						placeholder: y.value.linkTextPlaceholder
					}, null, 8, $t), [[M, W.text]])]),
					c("label", en, [c("span", null, O(y.value.linkUrl), 1), F(c("input", {
						ref_key: "linkUrlInput",
						ref: I,
						"onUpdate:modelValue": r[8] ||= (e) => W.url = e,
						type: "text",
						inputmode: "url",
						placeholder: "https://…"
					}, null, 512), [[M, W.url]])]),
					U.value ? (S(), s("span", tn, O(y.value.linkInvalid), 1)) : o("", !0),
					c("div", nn, [
						z.value ? (S(), s("button", {
							key: 0,
							type: "button",
							class: "desc-link-remove",
							onClick: he
						}, O(y.value.removeLink), 1)) : o("", !0),
						c("button", {
							type: "button",
							class: "desc-link-cancel",
							onClick: r[9] ||= (e) => pe(!1)
						}, O(y.value.cancel), 1),
						c("button", rn, O(y.value.saveLink), 1)
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
				onKeydown: Z,
				onKeyup: ie,
				onMouseup: ie,
				onClick: ge,
				onPaste: Oe,
				onDrop: Ae,
				onFocus: r[10] ||= (e) => n.$emit("focus", e),
				onBlur: je
			}, null, 40, an)
		], 64)) : t.modelValue ? (S(), a(Vt, {
			key: 1,
			class: "desc-view",
			html: t.modelValue
		}, l({ _: 2 }, [n.$slots.node ? {
			name: "node",
			fn: P((e) => [E(n.$slots, "node", v(p(e)), void 0, !0)]),
			key: "0"
		} : void 0]), 1032, ["html"])) : (S(), s("div", on, O(t.placeholder), 1))]));
	}
}, [["__scopeId", "data-v-feac13b3"]]), cn = [
	"aria-label",
	"aria-expanded",
	"disabled"
], ln = {
	class: "share-account-avatar",
	"aria-hidden": "true"
}, un = {
	key: 0,
	class: "share-account-label"
}, dn = {
	key: 1,
	class: "share-account-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true"
}, fn = /*#__PURE__*/ R({
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
		return (t, r) => (S(), a(Ke, {
			title: e.title,
			disabled: e.disabled,
			block: ""
		}, {
			trigger: P(({ open: i }) => [c("button", {
				type: "button",
				class: _(["share-account-trigger", {
					"share-account-trigger--expanded": e.expanded,
					"share-account-trigger--open": i
				}]),
				"aria-label": e.ariaLabel || e.label || e.title,
				"aria-expanded": i,
				"aria-haspopup": "menu",
				disabled: e.disabled
			}, [
				c("span", ln, [E(t.$slots, "avatar", {}, () => [u(O(n.value), 1)], !0)]),
				e.expanded ? (S(), s("span", un, O(e.label), 1)) : o("", !0),
				e.expanded ? (S(), s("svg", dn, [...r[0] ||= [c("path", {
					d: "m4 6 4 4 4-4",
					stroke: "currentColor",
					"stroke-width": "1.7",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, null, -1)]])) : o("", !0)
			], 10, cn)]),
			default: P(({ close: e }) => [E(t.$slots, "default", { close: e }, void 0, !0)]),
			_: 3
		}, 8, ["title", "disabled"]));
	}
}, [["__scopeId", "data-v-e71617a9"]]), pn = {
	key: 1,
	class: "share-app-shell__rail"
}, mn = /*#__PURE__*/ R({
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
		return (t, r) => (S(), s("div", {
			class: _(["share-app-shell", [
				`share-app-shell--${e.sidebarMode}`,
				`share-app-shell--breakpoint-${e.mobileBreakpoint}`,
				{
					"share-app-shell--without-sidebar": !e.sidebarVisible,
					"share-app-canvas": e.canvas
				}
			]]),
			style: y(n.value)
		}, [
			e.sidebarVisible ? E(t.$slots, "sidebar", {}, void 0, !0, 0) : o("", !0),
			(S(), a(D(e.contentTag), { class: "share-app-shell__content" }, {
				default: P(() => [E(t.$slots, "default", {}, void 0, !0)]),
				_: 3
			})),
			t.$slots.rail ? (S(), s("aside", pn, [E(t.$slots, "rail", {}, void 0, !0)])) : o("", !0),
			E(t.$slots, "overlay", {}, void 0, !0)
		], 6));
	}
}, [["__scopeId", "data-v-db4502d8"]]), hn = ["aria-label", "title"], gn = {
	class: "share-sidebar-toggle__icon sidebar-icon",
	"aria-hidden": "true"
}, _n = {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none"
}, vn = {
	key: 0,
	d: "m11 6-3 3 3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, yn = {
	key: 1,
	d: "m9 6 3 3-3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, bn = { class: "share-sidebar-label sidebar-label" }, xn = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("button", {
			type: "button",
			class: "share-sidebar-toggle sidebar-toggle",
			"aria-label": e.expanded ? e.collapseLabel : e.expandLabel,
			title: e.expanded ? e.collapseLabel : e.expandLabel
		}, [c("span", gn, [(S(), s("svg", _n, [
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
			e.expanded ? (S(), s("path", vn)) : (S(), s("path", yn))
		]))]), c("span", bn, O(e.expanded ? e.collapseLabel : e.expandLabel), 1)], 8, hn));
	}
}, [["__scopeId", "data-v-82e613bd"]]), Sn = {
	key: 0,
	class: "share-sidebar-head"
}, Cn = ["aria-label"], wn = {
	key: 1,
	class: "share-sidebar-tools"
}, Tn = {
	key: 2,
	class: "share-sidebar-account"
}, En = /*#__PURE__*/ R({
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
		let d = w(u()), f = i({
			get: () => r.modelValue ?? d.value,
			set: (e) => {
				d.value = e, l("update:modelValue", e), l("change", e);
			}
		});
		N(f, (e) => {
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
		}), (t, n) => (S(), s("aside", { class: _(["share-app-sidebar app-sidebar", [
			f.value && "share-app-sidebar--expanded app-sidebar--expanded",
			`share-app-sidebar--${e.position}`,
			`share-app-sidebar--mobile-${e.mobileMode}`,
			`share-app-sidebar--breakpoint-${e.mobileBreakpoint}`
		]]) }, [
			t.$slots.brand ? (S(), s("div", Sn, [E(t.$slots, "brand", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			c("nav", {
				class: "share-sidebar-nav",
				"aria-label": e.ariaLabel
			}, [E(t.$slots, "default", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)], 8, Cn),
			e.showToggle || t.$slots.tools ? (S(), s("div", wn, [e.showToggle ? (S(), a(xn, {
				key: 0,
				expanded: f.value,
				"expand-label": e.expandLabel,
				"collapse-label": e.collapseLabel,
				onClick: h
			}, null, 8, [
				"expanded",
				"expand-label",
				"collapse-label"
			])) : o("", !0), E(t.$slots, "tools", {
				expanded: f.value,
				expand: p,
				collapse: m,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			t.$slots.account ? (S(), s("div", Tn, [E(t.$slots, "account", { expanded: f.value }, void 0, !0)])) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-2025fec5"]]), Dn = {
	class: "share-sidebar-brand__icon sidebar-brand-icon",
	"aria-hidden": "true"
}, On = { class: "share-sidebar-label share-sidebar-brand__label sidebar-label sidebar-brand-label" }, kn = /*#__PURE__*/ R(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (S(), a(D(e.as), h({
			class: "share-sidebar-brand sidebar-brand",
			"aria-label": e.ariaLabel || e.label
		}, t.$attrs), {
			default: P(() => [c("span", Dn, [E(t.$slots, "icon", {}, () => [e.icon ? (S(), a(D(e.icon), {
				key: 0,
				size: 22,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", On, [E(t.$slots, "default", {}, () => [u(O(e.label), 1)], !0)])]),
			_: 3
		}, 16, ["aria-label"]));
	}
}), [["__scopeId", "data-v-a9c8581a"]]), An = { class: "share-sidebar-group" }, jn = /*#__PURE__*/ R({
	__name: "SidebarGroup",
	props: { label: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (S(), s("div", An, [E(t.$slots, "default", {}, () => [u(O(e.label), 1)], !0)]));
	}
}, [["__scopeId", "data-v-169df1ac"]]), Mn = {
	class: "share-sidebar-icon sidebar-icon",
	"aria-hidden": "true"
}, Nn = { class: "share-sidebar-label sidebar-label" }, Pn = /*#__PURE__*/ R(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (S(), a(D(e.as), h({
			class: ["share-sidebar-link sidebar-link", { active: e.active }],
			title: e.title || e.label,
			"aria-current": e.active ? "page" : void 0
		}, t.$attrs), {
			default: P(() => [c("span", Mn, [E(t.$slots, "icon", {}, () => [e.icon ? (S(), a(D(e.icon), {
				key: 0,
				size: 20,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", Nn, [E(t.$slots, "default", {}, () => [u(O(e.label), 1)], !0)])]),
			_: 3
		}, 16, [
			"class",
			"title",
			"aria-current"
		]));
	}
}), [["__scopeId", "data-v-28979fe2"]]), Fn = {
	key: 0,
	class: "share-editor-panel__title"
}, In = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("div", { class: _(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (S(), s("div", Fn, [E(t.$slots, "title", {}, () => [u(O(e.title), 1)], !0)])) : o("", !0), E(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-055dcd8d"]]), Ln = { class: "share-editor-section-title" }, Rn = { class: "share-editor-section-title__text" }, zn = {
	key: 0,
	class: "share-editor-section-title__actions"
}, Bn = /*#__PURE__*/ R({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (S(), s("div", Ln, [c("span", Rn, [E(t.$slots, "default", {}, () => [u(O(e.title), 1)], !0)]), t.$slots.actions ? (S(), s("span", zn, [E(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)]));
	}
}, [["__scopeId", "data-v-03237796"]]), Vn = { class: "share-editor-section" }, Hn = /*#__PURE__*/ R({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (S(), s("section", Vn, [e.title || t.$slots.title ? (S(), a(Bn, {
			key: 0,
			title: e.title
		}, l({ _: 2 }, [t.$slots.title ? {
			name: "default",
			fn: P(() => [E(t.$slots, "title", {}, void 0, !0)]),
			key: "0"
		} : void 0, t.$slots.actions ? {
			name: "actions",
			fn: P(() => [E(t.$slots, "actions", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, ["title"])) : o("", !0), E(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-6a56d656"]]), Un = {}, Wn = { class: "share-editor-total" };
function Gn(e, t) {
	return S(), s("div", Wn, [E(e.$slots, "default", {}, void 0, !0)]);
}
var Kn = /*#__PURE__*/ R(Un, [["render", Gn], ["__scopeId", "data-v-72dfd940"]]);
//#endregion
//#region src/composables/useFullscreenViewportHeight.js
function qn(e = .94) {
	let t = w(`${Math.round(e * 100)}dvh`);
	function n() {
		if (typeof window > "u") return;
		let n = window.visualViewport?.height || window.innerHeight;
		t.value = `${Math.floor(n * e)}px`;
	}
	return x(() => {
		n(), window.addEventListener("resize", n), window.visualViewport?.addEventListener("resize", n);
	}), b(() => {
		window.removeEventListener("resize", n), window.visualViewport?.removeEventListener("resize", n);
	}), t;
}
//#endregion
//#region src/internal/overlayStack.js
var Jn = [], Yn = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", Xn = 0, Zn = "";
function Qn(e = Symbol("share-overlay")) {
	return Jn.push(e), e;
}
function $n(e) {
	let t = Jn.lastIndexOf(e);
	t >= 0 && Jn.splice(t, 1);
}
function er(e) {
	return Jn.at(-1) === e;
}
function tr(e) {
	e && ([...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")].find((e) => e.getClientRects().length > 0) || e).focus?.({ preventScroll: !0 });
}
function nr(e, t) {
	if (e.key !== "Tab" || !t) return;
	let n = [...t.querySelectorAll(Yn)].filter((e) => e.getClientRects().length > 0);
	if (!n.length) {
		e.preventDefault(), t.focus?.({ preventScroll: !0 });
		return;
	}
	let r = n[0], i = n.at(-1);
	e.shiftKey && (document.activeElement === r || !t.contains(document.activeElement)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || !t.contains(document.activeElement)) && (e.preventDefault(), r.focus());
}
function rr(e) {
	e instanceof HTMLElement && e.isConnected && e.focus({ preventScroll: !0 });
}
function ir() {
	if (typeof document > "u") return () => {};
	Xn === 0 && (Zn = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden"), Xn += 1;
	let e = !1;
	return () => {
		e || (e = !0, Xn = Math.max(0, Xn - 1), Xn === 0 && (document.documentElement.style.overflow = Zn));
	};
}
var ar = /* @__PURE__ */ new WeakMap();
function or(e, { blur: t = "8px", duration: n = "300ms" } = {}) {
	if (!e) return () => {};
	let r = ar.get(e);
	r || (r = {
		count: 0,
		filter: e.style.filter,
		transition: e.style.transition
	}, ar.set(e, r)), r.count += 1, e.style.transition = `filter ${n} ease`, e.style.filter = `blur(${t})`;
	let i = !1;
	return () => {
		i || (i = !0, r.count = Math.max(0, r.count - 1), !(r.count > 0) && (e.style.filter = r.filter, e.style.transition = r.transition, ar.delete(e)));
	};
}
//#endregion
//#region src/components/overlay/AppModal.vue
var sr = ["aria-label"], cr = {
	key: 0,
	class: "am-handle"
}, lr = ["aria-label"], ur = () => window.innerWidth <= 640, dr = 260, $ = 280, fr = "cubic-bezier(0.32, 0.72, 0, 1)", pr = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function mr(e) {
	e.focus({ preventScroll: !0 });
}
var hr = /*#__PURE__*/ R({
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
		let l = e, u = r, d = w(null), f = w(null), p = qn(), m = i(() => typeof l.width == "number" ? `${l.width}px` : l.width || "480px"), h = w(!1), v = w(0), C = w(0), T = w(0), D = !1, O = null, A = !1, j = () => {}, M = Symbol("app-modal"), N = typeof document < "u" ? document.activeElement : null;
		function P(e) {
			if (!er(M)) return;
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
			let t = [...f.value?.querySelectorAll(pr) || []].filter((e) => e.getClientRects().length > 0);
			if (!t.length) {
				e.preventDefault(), f.value?.focus();
				return;
			}
			let n = t[0], r = t.at(-1);
			e.shiftKey && (document.activeElement === n || !f.value?.contains(document.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (document.activeElement === r || !f.value?.contains(document.activeElement)) && (e.preventDefault(), n.focus());
		}
		function F() {
			let e = d.value, t = f.value;
			!e || !t || (e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", ur() ? t.style.transform = "translateY(100%)" : (t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					let n = "cubic-bezier(0, 0, 0.4, 1)", r = `opacity ${dr}ms ${n}, backdrop-filter ${dr}ms ${n}, -webkit-backdrop-filter ${dr}ms ${n}`;
					e.style.transition = r, e.style.opacity = "1", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", ur() ? (t.style.transition = `transform ${dr}ms ${fr}`, t.style.transform = "translateY(0)") : (t.style.transition = `transform ${dr}ms ${fr}, opacity ${dr}ms ${n}`, t.style.transform = "none", t.style.opacity = "1"), setTimeout(() => {
						D || (e.style.transition = "", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", t.style.transition = "", t.style.transform = "", t.style.opacity = "", u("opened"));
					}, 310);
				});
			}));
		}
		function I() {
			let e = d.value, t = f.value;
			if (!e || !t) {
				O = setTimeout(() => {
					D || u("close");
				}, 0);
				return;
			}
			let n = `opacity ${$}ms ease, backdrop-filter ${$}ms ease, -webkit-backdrop-filter ${$}ms ease`;
			e.style.transition = n, e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", ur() ? (t.style.transition = `transform ${$}ms ${fr}`, t.style.transform = "translateY(100%)") : (t.style.transition = `transform ${$}ms ease, opacity ${$}ms ease`, t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), O = setTimeout(() => {
				D || u("close");
			}, 300);
		}
		function R() {
			!l.dismissible || A || (A = !0, I());
		}
		n({ requestClose: R });
		function z(e) {
			if (!l.dismissible) return;
			C.value = e.touches[0].clientY;
			let t = e.target instanceof Element ? e.target : null;
			for (; t && t !== f.value;) {
				let e = window.getComputedStyle(t);
				if (/(auto|scroll)/.test(e.overflowY) && t.scrollHeight > t.clientHeight) break;
				t = t.parentElement;
			}
			T.value = t?.scrollTop || f.value?.scrollTop || 0, h.value = !1, v.value = 0;
		}
		function B(e) {
			if (!l.dismissible) return;
			let t = e.touches[0].clientY - C.value;
			if (!h.value) {
				if (t > 8 && T.value <= 0) h.value = !0;
				else return;
			}
			e.preventDefault(), v.value = Math.max(0, t);
			let n = f.value, r = d.value;
			n && (n.style.transition = "none", n.style.transform = `translateY(${v.value}px)`), r && (r.style.transition = "none", r.style.opacity = String(Math.max(0, 1 - v.value / 320)));
		}
		function V() {
			if (!h.value) return;
			h.value = !1;
			let e = f.value, t = d.value;
			v.value > 100 ? (e && (e.style.transition = `transform ${$}ms ${fr}`, e.style.transform = "translateY(100%)"), t && (t.style.transition = `opacity ${$}ms ease`, t.style.opacity = "0"), O = setTimeout(() => {
				D || u("close");
			}, 300)) : (e && (e.style.transition = `transform ${$}ms ${fr}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), v.value = 0, setTimeout(() => {
				D || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330));
		}
		function H() {
			if (!h.value) return;
			h.value = !1, v.value = 0;
			let e = f.value, t = d.value;
			e && (e.style.transition = `transform ${$}ms ${fr}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), setTimeout(() => {
				D || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330);
		}
		return x(() => {
			Qn(M), j = ir(), document.addEventListener("keydown", P), g(() => {
				F(), f.value?.contains(document.activeElement) || (f.value?.querySelector(pr)?.focus(), f.value?.contains(document.activeElement) || f.value?.focus());
			});
		}), b(() => {
			$n(M), j(), document.removeEventListener("keydown", P), clearTimeout(O), D = !0, N instanceof HTMLElement && N.isConnected && mr(N);
		}), (n, r) => (S(), a(t, { to: "body" }, [c("div", {
			ref_key: "overlay",
			ref: d,
			class: "am-overlay",
			style: y([e.zIndex === 3e3 ? {} : { zIndex: e.zIndex }, {
				"--am-fullscreen-height": k(p),
				"--am-width": m.value
			}]),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			onMousedown: L(R, ["self"])
		}, [c("div", {
			ref_key: "card",
			ref: f,
			class: _(["am-card", {
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
			e.showHandle ? (S(), s("div", cr)) : o("", !0),
			e.showClose && !e.fullscreen ? (S(), s("button", {
				key: 1,
				class: "am-close",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: R
			}, "✕", 8, lr)) : o("", !0),
			E(n.$slots, "default", {}, void 0, !0)
		], 34)], 44, sr)]));
	}
}, [["__scopeId", "data-v-ddded319"]]), gr = { class: "aem-shell" }, _r = { class: "aem-heading" }, vr = { class: "aem-title" }, yr = {
	key: 0,
	class: "aem-subtitle"
}, br = {
	key: 0,
	class: "aem-header-actions"
}, xr = ["aria-label"], Sr = {
	key: 0,
	class: "aem-footer"
}, Cr = /*#__PURE__*/ R({
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
		let t = w(null);
		function n() {
			t.value?.requestClose();
		}
		return (r, i) => (S(), a(hr, {
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
			default: P(() => [c("section", gr, [
				c("header", { class: _(["aem-header", { "aem-header-with-actions": !!r.$slots["header-actions"] }]) }, [
					i[3] ||= c("span", {
						class: "aem-handle",
						"aria-hidden": "true"
					}, null, -1),
					c("div", _r, [E(r.$slots, "title", {}, () => [c("h2", vr, O(e.title), 1), e.subtitle ? (S(), s("span", yr, O(e.subtitle), 1)) : o("", !0)], !0)]),
					r.$slots["header-actions"] ? (S(), s("div", br, [E(r.$slots, "header-actions", {}, void 0, !0)])) : o("", !0),
					e.showClose ? (S(), s("button", {
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
					})], -1)]], 8, xr)) : o("", !0)
				], 2),
				c("div", { class: _(["aem-body", {
					"aem-body-flush": !e.padded,
					"aem-body-no-scroll": !e.bodyScroll
				}]) }, [E(r.$slots, "default", {}, void 0, !0)], 2),
				r.$slots.footer ? (S(), s("footer", Sr, [E(r.$slots, "footer", {}, void 0, !0)])) : o("", !0)
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
}, [["__scopeId", "data-v-0a15c618"]]), wr = {
	key: 0,
	class: "cd-message"
}, Tr = { class: "cd-actions" }, Er = ["disabled"], Dr = ["disabled"], Or = /*#__PURE__*/ R({
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
		return (t, n) => l.value ? (S(), a(Cr, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: P(() => [c("div", Tr, [c("button", {
				type: "button",
				class: "cd-btn-cancel",
				disabled: e.loading,
				onClick: m
			}, O(d.value), 9, Er), c("button", {
				type: "button",
				class: _(["cd-btn-confirm", `cd-btn--${f.value}`]),
				disabled: e.loading,
				onClick: h
			}, O(e.loading ? e.loadingLabel : u.value), 11, Dr)])]),
			default: P(() => [e.message ? (S(), s("div", wr, O(e.message), 1)) : o("", !0)]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : o("", !0);
	}
}, [["__scopeId", "data-v-2819b01e"]]), kr = {
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
		return (t, n) => e.open ? (S(), a(hr, {
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
			default: P(() => [E(t.$slots, "default")]),
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
function Ar({ open: e = 420, close: t = 300 } = {}) {
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
	], a = w(!1), o = w(!1), s = null;
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
var jr = ["aria-label"], Mr = { class: "ms-head-content" }, Nr = ["aria-label"], Pr = 320, Fr = 260, Ir = "8px", Lr = /*#__PURE__*/ R({
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
		let l = e, u = r, d = et(), f = j(), p = i(() => l.mode === "add"), m = i(() => l.showClose === null ? !!f.head : l.showClose), h = i(() => l.nav ? l.nav.view.value : "detail"), v = i(() => l.nav ? l.nav.detailStyle.value : null), C = i(() => l.nav ? l.nav.subStyle.value : null), T = i(() => !!l.nav && h.value !== "detail"), D = w(null), O = w(null), A = w(null), M = w(null), P = w(null), F = w(null), I = w(!1), R = w(!1), z = w(!1), B = w(!1), V = w(!1), { EASE: H, visible: U, morphing: W, playClose: ee, playOpen: te } = Ar(), ne = () => d.value ? "0px" : "18px", re = i(() => ({
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
			if (V.value = !1, X(!1), p.value) {
				z.value = !1, U.value = !1, setTimeout(() => u("close"), 320);
				return;
			}
			ee(D.value, ie(), {
				fromRadius: ne(),
				toRadius: l.originRadius
			}, () => u("close"));
		}
		function oe() {
			R.value = !0, V.value = !1, U.value = !1, X(!1), setTimeout(() => u("close"), 220);
		}
		let se = Symbol("morph-sheet"), ce = typeof document < "u" ? document.activeElement : null;
		function le(e) {
			if (er(se)) {
				if (e.key === "Escape") {
					ae();
					return;
				}
				nr(e, D.value);
			}
		}
		function ue(e) {
			let t = e?.firstElementChild;
			return t ? t.scrollHeight : e?.scrollHeight || 0;
		}
		function de() {
			return Math.floor(window.innerHeight * .9) - (O.value?.offsetHeight || 0) - (A.value?.offsetHeight || 0);
		}
		function G(e) {
			if (d.value || !M.value || W.value) return;
			let t = l.nav ? l.nav.pos.value : 0, n = ue(P.value), r = F.value ? ue(F.value) : n, i = n * (1 - t) + r * t, a = Math.min(i, Math.max(120, de()));
			M.value.style.transition = e ? `height ${Pr}ms ${H}` : "none", M.value.style.height = `${a}px`;
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
		l.nav && (N(() => l.nav.pos.value, () => G(l.nav.animating.value)), N(() => l.nav.view.value, (e, t) => g(() => {
			fe(), e !== "detail" && t === "detail" && F.value && (F.value.offsetWidth, l.nav.enterSub()), l.nav.animating.value || G(!1);
		})));
		let me = w(0), he = !1, ge = 0, _e = 0, q = null, J = 0, ve = null, ye = 0, be = 0, xe = 0;
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
		function Ce(e) {
			if (!d.value || W.value || q === "scroll") return;
			let t = e.touches[0].clientX - ge, n = e.touches[0].clientY - _e;
			if (q === null) {
				if (l.showBack && l.nav && t > 8 && Math.abs(t) > Math.abs(n)) {
					q = "back", he = !0, J = t, ye = e.touches[0].clientX, be = e.timeStamp, xe = 0, l.nav.dragStart(M.value?.clientWidth || window.innerWidth);
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
			let e = D.value;
			if (me.value > 120) {
				Te();
				return;
			}
			me.value = 0, e && (e.style.transition = `transform .26s ${H}`, e.style.transform = "translateY(0)");
		}
		function Te() {
			let e = D.value;
			e && (e.style.transition = `transform ${Fr}ms ${H}`, e.style.transform = `translateY(${window.innerHeight}px)`), U.value = !1, V.value = !1, je(), X(!1), setTimeout(() => u("close"), Fr);
		}
		let Ee = () => {};
		function De() {
			return typeof l.backgroundTarget == "string" ? document.querySelector(l.backgroundTarget) : l.backgroundTarget instanceof Element ? l.backgroundTarget : null;
		}
		function X(e) {
			Ee(), Ee = () => {}, !(!e || d.value || !l.blurBackground) && (Ee = or(De(), { blur: Ir }));
		}
		let Z = "", Q = "", Oe = !1;
		function ke() {
			let e = l.originEl;
			e && (Z = e.style.opacity, Q = e.style.transition);
		}
		function Ae(e) {
			let t = l.originEl;
			t && (t.style.opacity = e ? "0" : Z);
		}
		function je() {
			let e = l.originEl;
			if (!e) return;
			Oe = !0;
			let t = Q && Q !== "none" ? `${Q}, ` : "";
			e.style.transition = `${t}opacity ${Fr}ms ease`, e.style.opacity = "0", requestAnimationFrame(() => {
				e.style.opacity = Z;
			}), setTimeout(() => {
				e.style.opacity = Z, e.style.transition = Q, Oe = !1;
			}, 280);
		}
		let Me = () => {};
		function Ne() {
			W.value || (d.value && M.value ? M.value.style.height = "" : G(!1));
		}
		return x(async () => {
			Qn(se), Me = ir(), typeof ResizeObserver < "u" && (K = new ResizeObserver(pe)), await g(), G(!1), fe(), I.value = !0, p.value ? (U.value = !0, requestAnimationFrame(() => {
				z.value = !0, B.value = !0;
			})) : (ke(), Ae(!0), te(D.value, l.originRect, {
				fromRadius: l.originRadius,
				toRadius: ne()
			}), requestAnimationFrame(() => {
				B.value = !0;
			})), X(!0), setTimeout(() => {
				V.value = !0, G(!1), tr(D.value);
			}, 20), document.addEventListener("keydown", le), window.addEventListener("resize", Ne);
		}), b(() => {
			$n(se), Me(), X(!1), !p.value && !Oe && Ae(!1), document.removeEventListener("keydown", le), window.removeEventListener("resize", Ne), K?.disconnect(), rr(ce);
		}), n({
			close: ae,
			finishNow: oe
		}), (n, r) => (S(), a(t, { to: "body" }, [c("div", {
			class: _(["ms-overlay", { visible: k(U) }]),
			style: y(e.zIndex === 1e3 ? null : { zIndex: e.zIndex }),
			onClick: L(ae, ["self"])
		}, [c("div", {
			ref_key: "panelEl",
			ref: D,
			class: _(["ms-sheet", {
				shown: I.value,
				closing: R.value,
				entered: z.value,
				padded: B.value,
				"add-sheet": p.value,
				"ms-framed": e.frameColor
			}]),
			style: y(re.value),
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
			n.$slots.head ? (S(), s("div", {
				key: 0,
				ref_key: "headEl",
				ref: O,
				class: "ms-head"
			}, [c("div", Mr, [E(n.$slots, "head", {}, void 0, !0)]), m.value ? (S(), s("button", {
				key: 0,
				class: "ms-x",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: ae
			}, "✕", 8, Nr)) : o("", !0)], 512)) : o("", !0),
			c("div", {
				ref_key: "bodyEl",
				ref: M,
				class: "ms-body"
			}, [c("div", {
				ref_key: "detailCellEl",
				ref: P,
				class: "ms-cell",
				style: y(v.value)
			}, [E(n.$slots, "detail", { revealed: V.value }, () => [E(n.$slots, "default", { revealed: V.value }, void 0, !0)], !0)], 4), T.value ? (S(), s("div", {
				key: 0,
				ref_key: "subCellEl",
				ref: F,
				class: "ms-cell",
				style: y(C.value)
			}, [E(n.$slots, "sub", {}, void 0, !0)], 4)) : o("", !0)], 512),
			e.showFoot && n.$slots.foot ? (S(), s("div", {
				key: 1,
				ref_key: "footEl",
				ref: A,
				class: "ms-foot"
			}, [E(n.$slots, "foot", {}, void 0, !0)], 512)) : o("", !0)
		], 46, jr)], 6)]));
	}
}, [["__scopeId", "data-v-bab5d7c5"]]), Rr = { class: "form-actions" }, zr = ["disabled"], Br = ["disabled"], Vr = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("div", Rr, [c("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, O(e.cancelText), 9, zr), c("button", {
			type: "button",
			class: "form-actions__submit",
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, O(e.loading ? e.loadingText : e.submitText), 9, Br)]));
	}
}, [["__scopeId", "data-v-4749c971"]]), Hr = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], Ur = /*#__PURE__*/ R({
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
		let n = e, r = w(null);
		return x(() => {
			n.autofocus && r.value?.focus();
		}), t({ focus: () => r.value?.focus() }), (t, n) => (S(), s("input", {
			ref_key: "inputRef",
			ref: r,
			class: _(["form-text-input", {
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
			onKeydown: n[2] ||= I((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, Hr));
	}
}, [["__scopeId", "data-v-e2d6bc8e"]]), Wr = {
	key: 0,
	class: "tpd-message"
}, Gr = {
	key: 1,
	class: "tpd-label"
}, Kr = /*#__PURE__*/ R({
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
		let n = e, r = t, c = i(() => n.open === null || n.open), l = i(() => n.confirmText || n.confirmLabel), u = i(() => n.cancelText || n.cancelLabel), f = w(n.value || n.initial);
		N(() => n.value, (e) => {
			f.value = e;
		}), N(() => n.open, (e) => {
			e && g(() => {
				f.value = n.initial || n.value;
			});
		});
		function p() {
			n.open !== null && r("update:open", !1);
		}
		function m() {
			n.loading || (r("cancel"), p());
		}
		function h() {
			let e = f.value.trim();
			e && !n.loading && (r("confirm", e), r("submit", e), p());
		}
		return (t, n) => c.value ? (S(), a(Cr, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: P(() => [d(Vr, {
				"submit-text": l.value,
				"cancel-text": u.value,
				"loading-text": e.loadingLabel,
				loading: e.loading,
				"can-submit": !!f.value.trim(),
				onCancel: m,
				onSubmit: h
			}, null, 8, [
				"submit-text",
				"cancel-text",
				"loading-text",
				"loading",
				"can-submit"
			])]),
			default: P(() => [
				e.message ? (S(), s("div", Wr, O(e.message), 1)) : o("", !0),
				e.label ? (S(), s("label", Gr, O(e.label), 1)) : o("", !0),
				d(Ur, {
					value: f.value,
					placeholder: e.placeholder,
					maxlength: e.maxlength,
					autofocus: "",
					"onUpdate:value": n[0] ||= (e) => f.value = e,
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
}, [["__scopeId", "data-v-ff9d61bb"]]), qr = { class: "form-field-label" }, Jr = {
	key: 0,
	class: "form-field-hint"
}, Yr = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("div", { class: _(["form-field", { "form-field--vertical": e.vertical }]) }, [c("span", qr, [u(O(e.label), 1), e.hint ? (S(), s("span", Jr, O(e.hint), 1)) : o("", !0)]), E(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-01093950"]]), Xr = { class: "fn-wrap" }, Zr = [
	"value",
	"min",
	"max"
], Qr = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("div", Xr, [
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[0] ||= L((e) => o(-1), ["stop"])
			}, "−"),
			c("input", {
				class: "fn-input",
				type: "number",
				value: e.value,
				min: e.min,
				max: e.max,
				onChange: a
			}, null, 40, Zr),
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[1] ||= L((e) => o(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-df9f8db7"]]), $r = ["value"], ei = /*#__PURE__*/ R({
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
		let r = e, i = n, a = w(null);
		function o(e) {
			let t = e.target.options[e.target.selectedIndex], n = t && "_value" in t ? t._value : e.target.value;
			i("update:value", n), i("change", n);
		}
		return x(() => {
			r.autofocus && a.value?.focus();
		}), t({ focus: () => a.value?.focus() }), (t, n) => (S(), s("select", {
			ref_key: "selectRef",
			ref: a,
			class: "form-select",
			value: e.value,
			onChange: o
		}, [E(t.$slots, "default", {}, void 0, !0)], 40, $r));
	}
}, [["__scopeId", "data-v-3eb4c36d"]]), ti = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], ni = /*#__PURE__*/ R({
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
		return (t, n) => (S(), s("textarea", {
			class: "form-textarea",
			value: e.value,
			placeholder: e.placeholder,
			rows: e.rows,
			maxlength: e.maxlength,
			onInput: n[0] ||= (e) => t.$emit("update:value", e.target.value)
		}, null, 40, ti));
	}
}, [["__scopeId", "data-v-31024142"]]), ri = {
	key: 0,
	class: "share-inline-edit__view"
}, ii = { class: "share-inline-edit__value" }, ai = ["aria-label", "disabled"], oi = ["onKeydown"], si = [
	"value",
	"aria-label",
	"disabled",
	"aria-invalid"
], ci = ["value", "disabled"], li = [
	"value",
	"aria-label",
	"placeholder",
	"maxlength",
	"required",
	"disabled",
	"aria-invalid"
], ui = {
	key: 2,
	class: "share-inline-edit__actions"
}, di = ["aria-label", "disabled"], fi = ["aria-label", "disabled"], pi = {
	key: 2,
	class: "share-inline-edit__error",
	role: "alert"
}, mi = /*#__PURE__*/ R({
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
		let r = t, a = n, l = w(!1), d = w(!1), f = w(""), p = w(r.modelValue), m = w(null), h = w(null), v = i(() => r.forceOpen || l.value);
		N(() => r.modelValue, (e) => {
			l.value || (p.value = e);
		}), N(() => r.forceOpen, () => {
			l.value = !1, p.value = r.modelValue, f.value = "";
		});
		async function y() {
			r.disabled || (p.value = r.modelValue, f.value = "", l.value = !0, await g(), m.value?.focus(), m.value?.select?.());
		}
		function b(e) {
			p.value = r.options ? r.options.find((t) => String(t.value) === e)?.value ?? e : e, r.forceOpen && a("update:modelValue", p.value);
		}
		function x() {
			d.value || r.forceOpen || (l.value = !1, p.value = r.modelValue, f.value = "", a("cancel"), g(() => h.value?.focus()));
		}
		function C(e) {
			e.isComposing || r.forceOpen || (e.preventDefault(), D());
		}
		async function D() {
			if (!(d.value || r.disabled || r.required && !String(p.value ?? "").trim())) {
				d.value = !0, f.value = "";
				try {
					if (r.persist && await r.persist(p.value) === !1) return;
					a("update:modelValue", p.value), a("confirm", p.value), l.value = !1, g(() => h.value?.focus());
				} catch (e) {
					f.value = e?.message || r.errorLabel;
				} finally {
					d.value = !1;
				}
			}
		}
		return (n, r) => (S(), s("span", { class: _(["share-inline-edit", { "share-inline-edit--open": v.value }]) }, [v.value ? (S(), s("span", {
			key: 1,
			class: "share-inline-edit__editor",
			onKeydown: [I(L(x, ["stop", "prevent"]), ["esc"]), I(C, ["enter"])]
		}, [t.options ? (S(), s("select", {
			key: 0,
			ref_key: "input",
			ref: m,
			value: p.value,
			"aria-label": t.label,
			disabled: t.disabled || d.value,
			"aria-invalid": !!f.value,
			onChange: r[0] ||= (e) => b(e.target.value)
		}, [(S(!0), s(e, null, T(t.options, (e) => (S(), s("option", {
			key: String(e.value),
			value: e.value,
			disabled: e.disabled
		}, O(e.label), 9, ci))), 128))], 40, si)) : (S(), s("input", {
			key: 1,
			ref_key: "input",
			ref: m,
			value: p.value,
			"aria-label": t.label,
			placeholder: t.placeholder,
			maxlength: t.maxlength || void 0,
			required: t.required,
			disabled: t.disabled || d.value,
			"aria-invalid": !!f.value,
			onInput: r[1] ||= (e) => b(e.target.value)
		}, null, 40, li)), t.forceOpen ? o("", !0) : (S(), s("span", ui, [c("button", {
			type: "button",
			"aria-label": t.confirmLabel,
			disabled: t.disabled || d.value || t.required && !String(p.value ?? "").trim(),
			onClick: D
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
		})], -1)]], 8, di), c("button", {
			type: "button",
			"aria-label": t.cancelLabel,
			disabled: d.value,
			onClick: x
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
		})], -1)]], 8, fi)]))], 40, oi)) : (S(), s("span", ri, [c("span", ii, [E(n.$slots, "default", { value: t.modelValue }, () => [u(O(t.displayValue ?? t.modelValue ?? t.placeholder), 1)], !0)]), t.editable ? (S(), s("button", {
			key: 0,
			ref_key: "editButton",
			ref: h,
			type: "button",
			"aria-label": t.editLabel || t.label,
			disabled: t.disabled,
			onClick: y
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
		})], -1)]], 8, ai)) : o("", !0)])), f.value ? (S(), s("span", pi, O(f.value), 1)) : o("", !0)], 2));
	}
}, [["__scopeId", "data-v-faaa279e"]]);
//#endregion
export { Ve as $, Nt as A, gt as B, kn as C, fn as D, mn as E, Pt as F, nt as G, ut as H, Lt as I, Qe as J, et as K, At as L, jt as M, Ot as N, sn as O, Rt as P, He as Q, kt as R, jn as S, xn as T, dt as U, lt as V, ct as W, Re as X, Ke as Y, Le as Z, Kn as _, Yr as a, ge as at, In as b, Vr as c, ce as ct, kr as d, ee as dt, Be as et, Or as f, B as ft, qn as g, mr as h, Qr as i, xe as it, Mt as j, Vt as k, Lr as l, ae as lt, hr as m, ni as n, De as nt, Kr as o, pe as ot, Cr as p, R as pt, $e as q, ei as r, we as rt, Ur as s, de as st, mi as t, Ue as tt, Ar as u, re as ut, Hn as v, En as w, Pn as x, Bn as y, St as z };
