import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createSlots as c, createTextVNode as l, createVNode as u, defineComponent as d, h as f, nextTick as p, normalizeClass as m, normalizeStyle as h, onBeforeUnmount as g, onMounted as _, openBlock as v, ref as y, renderList as b, renderSlot as x, resolveDynamicComponent as S, toDisplayString as C, unref as w, useSlots as T, vModelText as E, watch as D, withCtx as O, withDirectives as k, withKeys as A, withModifiers as j } from "vue";
//#region \0plugin-vue:export-helper
var M = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, N = {
	key: 0,
	class: "base-tile-strip"
}, P = /*#__PURE__*/ M({
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
		return (t, r) => (v(), o("div", {
			class: m(["base-tile", {
				"base-tile--interactive": e.interactive,
				"base-tile--tint": e.tint,
				"base-tile--framed": e.framed
			}]),
			style: h({ "--tile-color": n.value }),
			onClick: r[0] ||= (e) => t.$emit("click", e)
		}, [e.strip ? (v(), o("span", N)) : a("", !0), x(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-81d15c1d"]]), F = [
	"disabled",
	"aria-label",
	"title"
], I = {
	key: 0,
	class: "share-add-button__text"
}, L = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("button", {
			class: m(["share-add-button", [`share-add-button--${e.variant}`, { "share-add-button--block": e.block }]]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			title: e.variant === "icon" && e.label || void 0,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [n[1] ||= s("span", {
			class: "share-add-button__plus",
			"aria-hidden": "true"
		}, "+", -1), e.variant === "icon" ? a("", !0) : (v(), o("span", I, [x(t.$slots, "default", {}, () => [l(C(e.label), 1)], !0)]))], 10, F));
	}
}, [["__scopeId", "data-v-2e1149d1"]]), R = [
	"value",
	"min",
	"max",
	"step",
	"disabled",
	"aria-label"
], z = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("input", {
			class: "share-slider",
			type: "range",
			value: e.modelValue,
			min: e.min,
			max: e.max,
			step: e.step,
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			style: h(s.value),
			onInput: l,
			onChange: u
		}, null, 44, R));
	}
}, [["__scopeId", "data-v-a4387b22"]]), B = [
	"disabled",
	"aria-label",
	"aria-checked"
], V = {
	key: 0,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, H = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("button", {
			type: "button",
			class: m(["share-compact-checkbox", { "share-compact-checkbox--checked": e.modelValue }]),
			disabled: e.disabled,
			"aria-label": e.label,
			"aria-checked": e.modelValue,
			role: "checkbox",
			onClick: j(i, ["stop"]),
			onPointerdown: n[0] ||= j(() => {}, ["stop"])
		}, [e.modelValue ? (v(), o("svg", V, [...n[1] ||= [s("path", {
			d: "M2.5 6.2l2.4 2.4 4.6-5",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, null, -1)]])) : a("", !0)], 42, B));
	}
}, [["__scopeId", "data-v-caeb1891"]]), U = ["aria-label"], W = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], ee = /*#__PURE__*/ M({
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
		let i = t, a = n, c = y(null), l = y([]), u = y({
			left: 0,
			width: 0,
			ready: !1,
			animate: !1
		}), d = r(() => i.neutralValue !== void 0 && i.modelValue === i.neutralValue), f = r(() => ({
			transform: `translateX(${u.value.left}px)`,
			width: `${u.value.width}px`,
			opacity: +!!u.value.ready
		}));
		function x(e, t) {
			l.value[t] = e;
		}
		let S = null;
		function w(e = !1) {
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
			}, !e && typeof requestAnimationFrame < "u" && (S != null && cancelAnimationFrame(S), S = requestAnimationFrame(() => {
				S = null, u.value = {
					...u.value,
					animate: !0
				};
			}));
		}
		function T(e) {
			let t = i.options.find((t) => t.value === e);
			!i.disabled && !t?.disabled && e !== i.modelValue && a("update:modelValue", e);
		}
		function E() {
			return i.options.map((e, t) => ({
				option: e,
				index: t
			})).filter(({ option: e }) => !e.disabled);
		}
		async function O(e) {
			let t = i.options[e];
			!t || t.disabled || i.disabled || (T(t.value), await p(), l.value[e]?.focus());
		}
		function k(e, t) {
			let n = E();
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			(e.key === "ArrowRight" || e.key === "ArrowDown") && (i = n[(r + 1) % n.length]), (e.key === "ArrowLeft" || e.key === "ArrowUp") && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), O(i.index));
		}
		let A = null;
		return _(async () => {
			await p(), w(), typeof ResizeObserver < "u" && c.value && (A = new ResizeObserver(() => w(!1)), A.observe(c.value));
		}), g(() => {
			A?.disconnect(), S != null && cancelAnimationFrame(S);
		}), D(() => i.modelValue, async () => {
			await p(), w(!0);
		}), D(() => i.options, async () => {
			await p(), w(!1);
		}, { deep: !0 }), (n, r) => (v(), o("div", {
			ref_key: "rootEl",
			ref: c,
			class: m(["share-multi-toggle", {
				"share-multi-toggle--block": t.block,
				"share-multi-toggle--disabled": t.disabled
			}]),
			role: "radiogroup",
			"aria-label": t.ariaLabel || void 0
		}, [s("span", {
			class: m(["share-multi-toggle__pill", {
				"share-multi-toggle__pill--neutral": d.value,
				"share-multi-toggle__pill--instant": !u.value.animate
			}]),
			style: h(f.value),
			"aria-hidden": "true"
		}, null, 6), (v(!0), o(e, null, b(t.options, (e, n) => (v(), o("button", {
			key: String(e.value),
			ref_for: !0,
			ref: (e) => x(e, n),
			type: "button",
			class: m(["share-multi-toggle__button", {
				"share-multi-toggle__button--active": e.value === t.modelValue,
				"share-multi-toggle__button--neutral": e.value === t.modelValue && e.value === t.neutralValue
			}]),
			role: "radio",
			"aria-checked": e.value === t.modelValue,
			tabindex: e.value === t.modelValue ? 0 : -1,
			disabled: t.disabled || e.disabled,
			onClick: (t) => T(e.value),
			onKeydown: (e) => k(e, n)
		}, C(e.label), 43, W))), 128))], 10, U));
	}
}, [["__scopeId", "data-v-a0098670"]]), te = ["disabled", "aria-label"], ne = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("button", {
			class: m(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [...n[1] ||= [s("span", {
			class: "share-remove-button__cross",
			"aria-hidden": "true"
		}, null, -1)]], 10, te));
	}
}, [["__scopeId", "data-v-f27183c3"]]), re = { class: "share-section-label__text" }, ie = {
	key: 0,
	class: "share-section-label__actions"
}, ae = /*#__PURE__*/ M({
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
		return (t, r) => (v(), o("div", {
			class: m(["share-section-label", { "share-section-label--border": e.border }]),
			style: h(n.value)
		}, [s("span", re, [x(t.$slots, "default", {}, () => [l(C(e.title), 1)], !0)]), t.$slots.actions ? (v(), o("span", ie, [x(t.$slots, "actions", {}, void 0, !0)])) : a("", !0)], 6));
	}
}, [["__scopeId", "data-v-56c925a7"]]), oe = ["aria-label"], se = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], ce = ["src"], le = /*#__PURE__*/ M({
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
		let c = t, l = i, u = y(null), d = y([]), f = y({
			left: 0,
			width: 0,
			ready: !1
		}), S = r(() => ({
			transform: `translateX(${f.value.left}px)`,
			width: `${f.value.width}px`,
			opacity: +!!f.value.ready
		}));
		function w(e, t) {
			d.value[t] = e;
		}
		function T(e) {
			let t = c.tabs.find((t) => t.key === e);
			t && !t.disabled && e !== c.modelValue && l("update:modelValue", e);
		}
		async function E(e) {
			let t = c.tabs[e];
			!t || t.disabled || (T(t.key), await p(), d.value[e]?.focus());
		}
		function O(e, t) {
			let n = c.tabs.map((e, t) => ({
				tab: e,
				index: t
			})).filter(({ tab: e }) => !e.disabled);
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			e.key === "ArrowRight" && (i = n[(r + 1) % n.length]), e.key === "ArrowLeft" && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), E(i.index));
		}
		function k() {
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
		let A = null;
		return _(() => {
			p(k), typeof ResizeObserver < "u" && u.value && (A = new ResizeObserver(k), A.observe(u.value));
		}), g(() => A?.disconnect()), D(() => c.modelValue, () => p(k)), D(() => c.tabs, () => p(k), { deep: !0 }), n({ updateUnderline: k }), (n, r) => (v(), o("nav", {
			ref_key: "rootElement",
			ref: u,
			class: "share-sliding-tabs",
			role: "tablist",
			"aria-label": t.ariaLabel || void 0
		}, [(v(!0), o(e, null, b(t.tabs, (e, r) => (v(), o("button", {
			id: e.id,
			key: String(e.key),
			ref_for: !0,
			ref: (e) => w(e, r),
			class: m(["share-sliding-tabs__tab", { "share-sliding-tabs__tab--active": t.modelValue === e.key }]),
			type: "button",
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			"aria-controls": e.panelId,
			tabindex: t.modelValue === e.key ? 0 : -1,
			disabled: e.disabled,
			onClick: (t) => T(e.key),
			onKeydown: (e) => O(e, r)
		}, [x(n.$slots, "icon", { tab: e }, () => [e.icon || e.svg ? (v(), o("img", {
			key: 0,
			class: "share-sliding-tabs__icon",
			src: e.icon || e.svg,
			alt: "",
			"aria-hidden": "true"
		}, null, 8, ce)) : a("", !0)], !0), s("span", null, C(e.title), 1)], 42, se))), 128)), s("span", {
			class: "share-sliding-tabs__underline",
			style: h(S.value),
			"aria-hidden": "true"
		}, null, 4)], 8, oe));
	}
}, [["__scopeId", "data-v-28aae1df"]]), ue = [
	"aria-checked",
	"aria-label",
	"disabled"
], de = {
	key: 0,
	class: "share-toggle-switch__text"
}, G = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("button", {
			class: m(["share-toggle-switch", { "share-toggle-switch--active": e.modelValue }]),
			type: "button",
			role: "switch",
			"aria-checked": e.modelValue,
			"aria-label": e.ariaLabel || e.label || void 0,
			disabled: e.disabled,
			onClick: i
		}, [n[0] ||= s("span", {
			class: "share-toggle-switch__track",
			"aria-hidden": "true"
		}, [s("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (v(), o("span", de, [x(t.$slots, "default", {}, () => [l(C(e.label), 1)], !0)])) : a("", !0)], 10, ue));
	}
}, [["__scopeId", "data-v-828a23d7"]]), K = [], q = null, J = null;
function Y(e) {
	let t = K.lastIndexOf(e);
	t >= 0 && K.splice(t, 1);
}
function fe(e) {
	Y(e), K.push(e);
}
function pe(e) {
	Y(e);
}
function me(e) {
	return K.at(-1) === e;
}
function X(e, t) {
	q?.token !== e && q?.close(), q = {
		token: e,
		close: t
	}, fe(e);
}
function he(e) {
	q?.token === e && (q = null), pe(e);
}
function ge(e, t) {
	J?.token !== e && J?.close(), J = {
		token: e,
		close: t
	};
}
function _e(e) {
	J?.token === e && (J = null);
}
function Z() {
	if (!J) return !1;
	let e = J;
	return J = null, e.close(), !0;
}
//#endregion
//#region src/lib/actionMenuPlacement.js
var ve = 8, ye = 6;
function be(e, t, n) {
	return Math.min(Math.max(e, t), Math.max(t, n));
}
function xe({ triggerRect: e, popoverWidth: t, popoverHeight: n, viewportWidth: r, viewportHeight: i, viewportLeft: a = 0, viewportTop: o = 0, originX: s, originY: c, margin: l = 8, gap: u = 6 }) {
	let d = a + l, f = o + l, p = a + r - l, m = o + i - l, h = Math.min(t, Math.max(0, p - d)), g = be(e.right - h, d, p - h), _ = Math.max(0, m - e.bottom - u), v = Math.max(0, e.top - u - f), y = _ < n && v > _, b = y ? v : _, x = Math.min(n, b), S = be(y ? e.top - u - x : e.bottom + u, f, m - x);
	return {
		left: g,
		top: S,
		maxHeight: b,
		opensAbove: y,
		originX: be(s - g, 0, h),
		originY: be(c - S, 0, x)
	};
}
var Se = 8, Ce = 6, we = xe, Te = [
	"title",
	"aria-label",
	"aria-expanded",
	"disabled"
], Ee = ["aria-label"], De = /*#__PURE__*/ M({
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
		let l = r, d = Symbol("action-menu"), f = y(null), _ = y(null), b = y(null), S = y(!1), C = null, w = null;
		function T(e) {
			let t = f.value;
			if (!t) return null;
			let n = t.getBoundingClientRect(), r = e?.detail > 0;
			return C = {
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
			w = null;
			let e = f.value, t = _.value;
			if (!S.value || !e || !t) return;
			let n = E(), r = Math.max(0, n.viewportWidth - 16);
			t.style.minWidth = `${Math.min(200, r)}px`, t.style.maxWidth = `${Math.min(280, r)}px`;
			let i = e.getBoundingClientRect(), a = xe({
				triggerRect: i,
				popoverWidth: t.getBoundingClientRect().width,
				popoverHeight: t.scrollHeight,
				originX: C?.x ?? i.left + i.width / 2,
				originY: C?.y ?? i.bottom,
				...n
			});
			b.value = {
				position: "fixed",
				top: `${a.top}px`,
				left: `${a.left}px`,
				minWidth: `${Math.min(200, r)}px`,
				maxWidth: `${Math.min(280, r)}px`,
				maxHeight: `${a.maxHeight}px`,
				visibility: "visible",
				"--ram-origin-x": `${a.originX}px`,
				"--ram-origin-y": `${a.originY}px`,
				"--ram-enter-y": a.opensAbove ? "5px" : "-5px"
			};
		}
		function k() {
			w != null && cancelAnimationFrame(w), w = requestAnimationFrame(D);
		}
		function A() {
			document.addEventListener("pointerdown", I, !0), document.addEventListener("keydown", R), window.addEventListener("resize", k), window.addEventListener("scroll", L, !0), window.visualViewport?.addEventListener("resize", k), window.visualViewport?.addEventListener("scroll", k);
		}
		function M() {
			document.removeEventListener("pointerdown", I, !0), document.removeEventListener("keydown", R), window.removeEventListener("resize", k), window.removeEventListener("scroll", L, !0), window.visualViewport?.removeEventListener("resize", k), window.visualViewport?.removeEventListener("scroll", k);
		}
		function N(e) {
			l.disabled || S.value || (b.value = T(e), X(d, P), S.value = !0, A(), p(k));
		}
		function P() {
			S.value && (Z(), S.value = !1, he(d), w != null && cancelAnimationFrame(w), w = null, M());
		}
		function F(e) {
			l.disabled || (S.value ? P() : N(e));
		}
		function I(e) {
			e.target?.closest?.(".ram-popover, [data-share-popover-related]") || f.value?.contains?.(e.target) || P();
		}
		function L(e) {
			_.value?.contains?.(e.target) || e.target?.closest?.("[data-share-popover-related]") || P();
		}
		function R(e) {
			e.key === "Escape" && (Z() || me(d) && P());
		}
		return g(P), c({
			open: N,
			close: P,
			toggle: F
		}), (c, l) => (v(), o(e, null, [c.$slots.trigger ? (v(), o("div", {
			key: 0,
			ref_key: "triggerEl",
			ref: f,
			class: m(["ram-custom-trigger", { "ram-custom-trigger--block": r.block }]),
			onClick: j(F, ["stop"])
		}, [x(c.$slots, "trigger", { open: S.value }, void 0, !0)], 2)) : (v(), o("button", {
			key: 1,
			ref_key: "triggerEl",
			ref: f,
			type: "button",
			class: "ram-trigger",
			title: r.title,
			"aria-label": r.title,
			"aria-expanded": S.value,
			"aria-haspopup": "menu",
			disabled: r.disabled,
			onClick: j(F, ["stop"])
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
		], -1)]], 8, Te)), (v(), i(t, { to: "body" }, [u(n, { name: "ram-popover" }, {
			default: O(() => [S.value ? (v(), o("div", {
				key: 0,
				ref_key: "popoverEl",
				ref: _,
				class: "ram-popover",
				style: h(b.value),
				role: "menu",
				"aria-label": r.title,
				onClick: l[0] ||= j(() => {}, ["stop"]),
				onPointerdown: l[1] ||= j(() => {}, ["stop"])
			}, [x(c.$slots, "default", { close: P }, void 0, !0)], 44, Ee)) : a("", !0)]),
			_: 3
		})]))], 64));
	}
}, [["__scopeId", "data-v-5d1612f9"]]), Oe = ["aria-haspopup", "aria-expanded"], ke = {
	class: "ram-item__icon",
	"aria-hidden": "true"
}, Ae = {
	key: 1,
	width: "17",
	height: "17",
	viewBox: "0 0 17 17",
	fill: "none"
}, je = { class: "ram-item__content" }, Me = {
	key: 0,
	class: "ram-item__suffix"
}, Ne = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("button", {
			type: "button",
			class: m(["ram-item", e.tone === "default" ? null : `ram-item--${e.tone}`]),
			role: "menuitem",
			"aria-haspopup": e.submenu ? "menu" : void 0,
			"aria-expanded": e.submenu ? e.submenuOpen : void 0
		}, [
			s("span", ke, [x(t.$slots, "icon", {}, () => [e.icon ? (v(), i(S(e.icon), {
				key: 0,
				size: 17,
				"stroke-width": 1.9
			})) : (v(), o("svg", Ae, [...n[0] ||= [
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
			s("span", je, [x(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.suffix || e.submenu ? (v(), o("span", Me, [x(t.$slots, "suffix", {}, void 0, !0), e.submenu ? (v(), o("svg", {
				key: 0,
				class: m(["ram-item__submenu-chevron", { "ram-item__submenu-chevron--open": e.submenuOpen }]),
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
		], 10, Oe));
	}
}, [["__scopeId", "data-v-5fc35d86"]]);
//#endregion
//#region src/composables/useMediaQuery.js
function Pe(e) {
	let t = y(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return _(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), g(() => n?.removeEventListener?.("change", r)), t;
}
function Fe(e = 768) {
	return Pe(`(max-width: ${e}px)`);
}
//#endregion
//#region src/components/floating/BasePopover.vue
var Ie = [
	"id",
	"role",
	"aria-label",
	"data-share-popover-related"
], Le = /*#__PURE__*/ M({
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
		let s = e, c = r, l = Symbol("base-popover"), d = y(null), f = y(null);
		function _() {
			let e = s.anchor;
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
		function C() {
			let e = _();
			if (!e) return;
			let t = e.getBoundingClientRect(), n = S(), r = typeof s.minWidth == "number" ? s.minWidth : 0, i = Math.max(r, d.value?.offsetWidth || 0), a = d.value?.offsetHeight || 0, o = n.left + 8, c = n.left + n.width - 8, l = n.top + 8, u = n.top + n.height - 8, p = {
				position: "fixed",
				minWidth: b(s.minWidth),
				zIndex: s.zIndex
			};
			if (s.placement === "right-start") {
				let e = t.right + s.offset, n = t.left - s.offset - i;
				p.left = `${e + i <= c ? e : n >= o ? n : Math.max(o, Math.min(e, c - i))}px`, p.top = `${Math.max(l, Math.min(t.top, u - a))}px`;
			} else {
				let e = s.placement === "bottom-end" ? t.right - i : t.left, n = t.bottom + s.offset, r = t.top - s.offset - a, d = n + a > u && r >= l ? r : n;
				p.left = `${Math.max(o, Math.min(e, c - i))}px`, p.top = `${Math.max(l, Math.min(d, u - a))}px`;
			}
			f.value = p;
		}
		function w() {
			c("update:open", !1);
		}
		function T(e) {
			return !!e?.closest?.("[data-share-popover-related]");
		}
		function E(e) {
			d.value?.contains(e.target) || T(e.target) || _()?.contains?.(e.target) || w();
		}
		function k(e) {
			if (!s.closeOnScroll) {
				C();
				return;
			}
			d.value?.contains(e.target) || T(e.target) || w();
		}
		function A() {
			s.closeOnResize ? w() : C();
		}
		function M(e) {
			e.key === "Escape" && (Z() || me(l) && w());
		}
		function N() {
			fe(l), document.addEventListener("pointerdown", E, !0), document.addEventListener("keydown", M), window.addEventListener("resize", A), window.addEventListener("scroll", k, !0), window.visualViewport?.addEventListener("resize", A), window.visualViewport?.addEventListener("scroll", C);
		}
		function P() {
			pe(l), document.removeEventListener("pointerdown", E, !0), document.removeEventListener("keydown", M), window.removeEventListener("resize", A), window.removeEventListener("scroll", k, !0), window.visualViewport?.removeEventListener("resize", A), window.visualViewport?.removeEventListener("scroll", C);
		}
		return D(() => s.open, async (e) => {
			P(), e && (C(), await p(), s.open && (C(), N()));
		}, { immediate: !0 }), D(() => [
			s.anchor,
			s.placement,
			s.offset,
			s.minWidth
		], () => {
			s.open && p(C);
		}), g(P), (r, s) => (v(), i(t, { to: "body" }, [u(n, { name: e.transition }, {
			default: O(() => [e.open ? (v(), o("div", {
				key: 0,
				id: e.id || void 0,
				ref_key: "popoverEl",
				ref: d,
				class: m([
					"share-popover",
					"base-popover",
					e.popoverClass
				]),
				style: h(f.value),
				role: e.role || void 0,
				"aria-label": e.ariaLabel || void 0,
				"data-share-popover-related": e.related ? "" : void 0,
				onClick: s[0] ||= j(() => {}, ["stop"]),
				onPointerdown: s[1] ||= j(() => {}, ["stop"])
			}, [x(r.$slots, "default", { close: w }, void 0, !0)], 46, Ie)) : a("", !0)]),
			_: 3
		}, 8, ["name"])]));
	}
}, [["__scopeId", "data-v-1aa09c59"]]), Re = { class: "ras-root" }, ze = { class: "ras-panel" }, Be = {
	key: 0,
	class: "ras-label"
}, Ve = { class: "ras-panel ras-panel--popover" }, He = {
	key: 0,
	class: "ras-label"
}, Ue = /*#__PURE__*/ M({
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
		let r = e, c = Symbol("action-submenu"), l = y(null), d = Fe(r.mobileBreakpoint), f = y(!1);
		function p() {
			r.disabled || f.value || (ge(c, h), f.value = !0);
		}
		function m() {
			r.disabled || (f.value ? h() : p());
		}
		function h() {
			f.value && (f.value = !1, _e(c));
		}
		function _(e) {
			e || h();
		}
		return g(h), t({
			open: p,
			close: h,
			toggle: m
		}), (t, r) => (v(), o("div", Re, [
			s("div", {
				ref_key: "triggerEl",
				ref: l,
				class: "ras-trigger",
				onClick: j(m, ["stop"])
			}, [x(t.$slots, "trigger", {
				open: f.value,
				toggle: m
			}, void 0, !0)], 512),
			u(n, { name: "ras-inline" }, {
				default: O(() => [w(d) && f.value ? (v(), o("div", {
					key: 0,
					class: "ras-inline",
					"data-share-popover-related": "",
					onClick: r[0] ||= j(() => {}, ["stop"]),
					onPointerdown: r[1] ||= j(() => {}, ["stop"])
				}, [s("div", ze, [e.label ? (v(), o("div", Be, C(e.label), 1)) : a("", !0), x(t.$slots, "default", { close: h }, void 0, !0)])], 32)) : a("", !0)]),
				_: 3
			}),
			w(d) ? a("", !0) : (v(), i(Le, {
				key: 0,
				open: f.value,
				anchor: l.value,
				placement: "right-start",
				"min-width": e.minWidth,
				"z-index": 9400,
				"popover-class": "row-action-submenu-popover",
				transition: "ras-popover",
				related: "",
				"onUpdate:open": _
			}, {
				default: O(() => [s("div", Ve, [e.label ? (v(), o("div", He, C(e.label), 1)) : a("", !0), x(t.$slots, "default", { close: h }, void 0, !0)])]),
				_: 3
			}, 8, [
				"open",
				"anchor",
				"min-width"
			]))
		]));
	}
}, [["__scopeId", "data-v-a4a95dc2"]]), We = [
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
function Ge(e) {
	return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(String(e || "").trim());
}
function Ke(e = We) {
	return e[Math.floor(Math.random() * e.length)];
}
//#endregion
//#region src/components/floating/ColorPresetPicker.vue
var qe = ["aria-label"], Je = ["aria-label", "aria-expanded"], Ye = { class: "cpp-body" }, Xe = "#888888", Ze = /*#__PURE__*/ M({
	__name: "ColorPresetPicker",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		colors: {
			type: Array,
			default: () => We
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
		let n = e, i = t, a = y(null), c = y(!1), l = y("cpppop-cancel"), p = y(n.modelValue || ""), g = r(() => /^#[0-9a-f]{6}$/i.test(n.modelValue || "") ? n.modelValue : Xe), _ = r(() => !!p.value && !Ge(p.value));
		function b(e) {
			return String(n.modelValue || "").toLowerCase() === String(e).toLowerCase();
		}
		function S() {
			l.value = "cpppop-cancel", c.value = !0;
		}
		function C(e) {
			l.value = e === "pick" ? "cpppop-pick" : "cpppop-cancel", c.value = !1;
		}
		function T() {
			c.value ? C("cancel") : S();
		}
		function E(e) {
			e || C("cancel");
		}
		function k(e) {
			p.value = e, i("update:modelValue", e);
		}
		function A() {
			let e = p.value.trim();
			if (!Ge(e)) {
				i("invalid", e);
				return;
			}
			k(e);
		}
		function j(e) {
			k(e), C("pick");
		}
		function M() {
			p.value = "", i("update:modelValue", n.clearValue), C("pick");
		}
		D(() => n.modelValue, (e) => {
			p.value = e || "";
		});
		let N = d({
			name: "ColorPresetGrid",
			setup() {
				return () => f("div", { class: "cpp-content" }, [f("div", {
					class: "cpp-grid",
					style: { "--cpp-columns": n.columns }
				}, n.colors.map((e) => f("button", {
					key: e,
					type: "button",
					class: ["cpp-color", { active: b(e) }],
					style: { background: e },
					title: e,
					"aria-label": e,
					"aria-pressed": b(e),
					onMousedown: (e) => e.preventDefault(),
					onClick: () => j(e)
				}))), n.allowCustom || n.allowClear ? f("div", { class: "cpp-extra" }, [
					n.allowCustom ? f("label", {
						class: "cpp-native",
						title: n.customLabel
					}, [f("span", {
						class: "cpp-native-sw",
						style: { background: n.modelValue || "var(--surface-active)" }
					}), f("input", {
						type: "color",
						value: g.value,
						"aria-label": n.customLabel,
						onInput: (e) => k(e.target.value)
					})]) : null,
					n.allowCustom ? f("input", {
						class: ["cpp-hex", { "cpp-hex--invalid": _.value }],
						type: "text",
						value: p.value,
						placeholder: "#hex",
						spellcheck: "false",
						"aria-label": n.customLabel,
						"aria-invalid": _.value,
						onInput: (e) => {
							p.value = e.target.value;
						},
						onChange: A,
						onKeydown: (e) => {
							e.key === "Enter" && A();
						}
					}) : null,
					n.allowClear ? f("button", {
						type: "button",
						class: "cpp-clear",
						onMousedown: (e) => e.preventDefault(),
						onClick: M
					}, n.clearLabel) : null
				]) : null]);
			}
		});
		return (t, n) => e.inline ? (v(), o("div", {
			key: 0,
			class: "cpp-body cpp-body--inline",
			"aria-label": e.ariaLabel
		}, [u(w(N))], 8, qe)) : (v(), o("span", {
			key: 1,
			ref_key: "anchorEl",
			ref: a,
			class: "cpp-host"
		}, [x(t.$slots, "trigger", {
			toggle: T,
			open: c.value,
			value: e.modelValue
		}, () => [s("button", {
			type: "button",
			class: m(["cpp-swatch", { "cpp-swatch--empty": !e.modelValue }]),
			style: h(e.modelValue ? { background: e.modelValue } : null),
			"aria-label": e.ariaLabel,
			"aria-expanded": c.value,
			"aria-haspopup": "dialog",
			onClick: T
		}, null, 14, Je)], !0), u(Le, {
			open: c.value,
			anchor: a.value,
			placement: e.placement,
			"min-width": 0,
			"z-index": e.zIndex,
			transition: l.value,
			role: "dialog",
			"aria-label": e.ariaLabel,
			"onUpdate:open": E
		}, {
			default: O(() => [s("div", Ye, [u(w(N))])]),
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
}, [["__scopeId", "data-v-1b7035e4"]]), Qe = [
	"aria-label",
	"aria-expanded",
	"aria-activedescendant",
	"disabled"
], $e = ["aria-label"], et = [
	"placeholder",
	"aria-label",
	"aria-activedescendant"
], tt = [
	"id",
	"aria-selected",
	"disabled",
	"onMouseenter",
	"onClick"
], nt = {
	key: 1,
	class: "vs-empty"
}, rt = /*#__PURE__*/ M({
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
		let d = `share-value-select-${c}`, f = y(null), h = y(null), _ = y(null), x = y(!1), S = y(""), w = y(-1), T = r(() => l.options.map((e, t) => e && typeof e == "object" ? {
			value: e.value,
			label: String(e.label ?? e.value ?? ""),
			disabled: !!e.disabled,
			key: e.key ?? `${String(e.value)}-${t}`
		} : {
			value: e,
			label: String(e ?? ""),
			disabled: !1,
			key: `${String(e)}-${t}`
		})), O = r(() => T.value.find((e) => M(e.value))?.label ?? ""), A = r(() => {
			let e = S.value.trim().toLocaleLowerCase();
			return e ? T.value.filter((t) => t.label.toLocaleLowerCase().includes(e)) : T.value;
		}), j = r(() => l.searchable && T.value.length >= l.searchThreshold);
		function M(e) {
			return String(e) === String(l.modelValue);
		}
		function N(e) {
			return `${d}-option-${e}`;
		}
		function P(e = 0, t = 1) {
			let n = A.value;
			if (!n.length) return -1;
			for (let r = 0; r < n.length; r += 1) {
				let i = (e + r * t + n.length) % n.length;
				if (!n[i].disabled) return i;
			}
			return -1;
		}
		function F() {
			let e = A.value.findIndex((e) => M(e.value) && !e.disabled);
			return e >= 0 ? e : P();
		}
		function I(e) {
			A.value[e]?.disabled || (w.value = e);
		}
		function L(e) {
			let t = A.value;
			if (!t.length) return;
			let n = w.value < 0 ? e > 0 ? 0 : t.length - 1 : (w.value + e + t.length) % t.length;
			w.value = P(n, e), p(() => document.getElementById(N(w.value))?.scrollIntoView?.({ block: "nearest" }));
		}
		function R() {
			l.disabled || x.value || (x.value = !0, w.value = F(), document.addEventListener("pointerdown", U, !0), u("open"), j.value && p(() => _.value?.focus()));
		}
		function z({ restoreFocus: e = !1 } = {}) {
			x.value && (x.value = !1, S.value = "", w.value = -1, document.removeEventListener("pointerdown", U, !0), u("close"), e && p(() => h.value?.focus()));
		}
		function B() {
			x.value ? z() : R();
		}
		function V(e) {
			!e || e.disabled || (u("update:modelValue", e.value), z({ restoreFocus: !0 }));
		}
		function H() {
			V(A.value[w.value]);
		}
		function U(e) {
			f.value?.contains(e.target) || z();
		}
		function W(e) {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault(), x.value ? L(e.key === "ArrowDown" ? 1 : -1) : R();
				return;
			}
			if (e.key === "Home" && x.value) {
				e.preventDefault(), w.value = P();
				return;
			}
			if (e.key === "End" && x.value) {
				e.preventDefault(), w.value = P(A.value.length - 1, -1);
				return;
			}
			if ((e.key === "Enter" || e.key === " ") && x.value) {
				e.preventDefault(), H();
				return;
			}
			e.key === "Escape" && x.value && (e.preventDefault(), z({ restoreFocus: !0 }));
		}
		function ee(e) {
			e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), L(e.key === "ArrowDown" ? 1 : -1)) : e.key === "Home" ? (e.preventDefault(), w.value = P()) : e.key === "End" ? (e.preventDefault(), w.value = P(A.value.length - 1, -1)) : e.key === "Enter" ? (e.preventDefault(), H()) : e.key === "Escape" && (e.preventDefault(), z({ restoreFocus: !0 }));
		}
		return D(A, () => {
			w.value = F();
		}), D(() => l.disabled, (e) => {
			e && z();
		}), g(() => {
			document.removeEventListener("pointerdown", U, !0);
		}), n({
			open: R,
			close: z,
			toggle: B
		}), (n, r) => (v(), o("div", {
			ref_key: "rootEl",
			ref: f,
			class: m(["vs", { "vs--disabled": t.disabled }])
		}, [s("button", {
			ref_key: "triggerEl",
			ref: h,
			class: m(["vs-button", { empty: !O.value }]),
			type: "button",
			role: "combobox",
			"aria-haspopup": "listbox",
			"aria-label": t.ariaLabel || void 0,
			"aria-controls": d,
			"aria-expanded": x.value,
			"aria-activedescendant": x.value && w.value >= 0 ? N(w.value) : void 0,
			disabled: t.disabled,
			onClick: B,
			onKeydown: W
		}, [s("span", null, C(O.value || t.placeholder), 1), r[1] ||= s("span", {
			class: "vs-arrow",
			"aria-hidden": "true"
		}, "▾", -1)], 42, Qe), x.value ? (v(), o("div", {
			key: 0,
			id: d,
			class: m(["vs-drop", { "vs-drop-up": t.dropUp }]),
			role: "listbox",
			"aria-label": t.ariaLabel || void 0
		}, [
			j.value ? k((v(), o("input", {
				key: 0,
				ref_key: "searchEl",
				ref: _,
				"onUpdate:modelValue": r[0] ||= (e) => S.value = e,
				class: "vs-search",
				type: "search",
				placeholder: t.searchPlaceholder,
				"aria-label": t.searchAriaLabel || t.searchPlaceholder,
				"aria-controls": d,
				"aria-activedescendant": w.value >= 0 ? N(w.value) : void 0,
				autocomplete: "off",
				onKeydown: ee
			}, null, 40, et)), [[E, S.value]]) : a("", !0),
			(v(!0), o(e, null, b(A.value, (e, t) => (v(), o("button", {
				id: N(t),
				key: e.key,
				class: m(["vs-option", { "vs-option--active": t === w.value }]),
				type: "button",
				role: "option",
				"aria-selected": M(e.value),
				disabled: e.disabled,
				onMouseenter: (e) => I(t),
				onClick: (t) => V(e)
			}, C(e.label), 43, tt))), 128)),
			A.value.length === 0 ? (v(), o("div", nt, C(t.emptyLabel), 1)) : a("", !0)
		], 10, $e)) : a("", !0)], 2));
	}
}, [["__scopeId", "data-v-764969f5"]]), it = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.b.blockquote.br.code.em.h1.h2.h3.h4.h5.h6.li.ol.p.pre.s.span.strike.strong.table.tbody.td.th.thead.tr.u.ul".split(".")), at = /* @__PURE__ */ new Set([
	"embed",
	"iframe",
	"math",
	"object",
	"script",
	"style",
	"svg",
	"template"
]), ot = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:"
]);
function st(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
function ct(e) {
	let t = String(e || "").trim();
	if (!t || /[\u0000-\u001f\u007f]/.test(t)) return "";
	if (/^(?:#|\?|\.?\.\/|\/)/.test(t)) return t;
	try {
		let e = new URL(t, "https://share-ui.invalid");
		return ot.has(e.protocol) ? t : "";
	} catch {
		return "";
	}
}
function lt(e) {
	let t = String(e || "").trim();
	if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t) || /^var\(--[a-z0-9-]+\)$/i.test(t)) return t;
	let n = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
	if (!n || n.slice(1, 4).map(Number).some((e) => e < 0 || e > 255)) return "";
	let r = n[4] == null ? null : Number(n[4]);
	return r != null && (r < 0 || r > 1) ? "" : t;
}
function ut(e, t) {
	let n = e.getAttribute("title");
	n && t.setAttribute("title", n);
	let r = e.getAttribute("dir");
	[
		"ltr",
		"rtl",
		"auto"
	].includes(r) && t.setAttribute("dir", r);
	let i = lt(e.style?.getPropertyValue("color"));
	if (i && t.style.setProperty("color", i), t.tagName === "A") {
		let n = ct(e.getAttribute("href"));
		n && t.setAttribute("href", n), e.getAttribute("target") === "_blank" && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer"));
	}
	if (t.tagName === "TD" || t.tagName === "TH") for (let n of ["colspan", "rowspan"]) {
		let r = Number.parseInt(e.getAttribute(n), 10);
		r >= 1 && r <= 100 && t.setAttribute(n, String(r));
	}
}
function dt(e, t, n) {
	if (e.nodeType === 3) {
		t.appendChild(n.createTextNode(e.nodeValue || ""));
		return;
	}
	if (e.nodeType !== 1) return;
	let r = e.tagName.toLowerCase();
	if (at.has(r)) return;
	if (!it.has(r)) {
		for (let r of [...e.childNodes]) dt(r, t, n);
		return;
	}
	let i = n.createElement(r);
	ut(e, i);
	for (let t of [...e.childNodes]) dt(t, i, n);
	t.appendChild(i);
}
function ft(e) {
	let t = String(e || "");
	if (!t) return "";
	if (typeof DOMParser > "u") return st(t);
	let n = new DOMParser().parseFromString(t, "text/html"), r = n.createElement("div");
	for (let e of [...n.body.childNodes]) dt(e, r, n);
	return r.innerHTML;
}
function pt(e) {
	return st(e).replace(/\r\n?|\n/g, "<br>");
}
//#endregion
//#region src/components/rich-text/RichContent.vue
var mt = ["innerHTML"], ht = /*#__PURE__*/ M({
	__name: "RichContent",
	props: { html: {
		type: String,
		default: ""
	} },
	setup(e) {
		let t = e, n = r(() => ft(t.html));
		return (e, t) => (v(), o("div", {
			class: "rc",
			innerHTML: n.value
		}, null, 8, mt));
	}
}, [["__scopeId", "data-v-543fc0d7"]]), gt = { class: "input-desc" }, _t = ["aria-label"], vt = ["title"], yt = ["title"], bt = ["title"], xt = ["aria-expanded"], St = ["onMousedown"], Ct = ["title", "onMousedown"], wt = { class: "desc-color-icon" }, Tt = ["data-placeholder", "aria-label"], Et = {
	key: 2,
	class: "desc-empty"
}, Dt = /*#__PURE__*/ M({
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
			default: () => We
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
		"blur"
	],
	setup(t, { expose: n, emit: a }) {
		let c = {
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
			clearColor: "Clear color"
		}, d = t, f = a, h = r(() => ({
			...c,
			...d.labels
		})), g = r(() => Array.from({ length: d.maxHeadingLevel }, (e, t) => t + 1)), x = y(!1), S = y(null), w = y(null);
		function T(e) {
			return ft(e) || "<p><br></p>";
		}
		function E(e) {
			!d.editable || !w.value || document.activeElement !== w.value && (w.value.innerHTML = T(e));
		}
		D(() => d.modelValue, E), D(() => d.editable, (e) => {
			e && p(() => E(d.modelValue));
		}), _(() => {
			E(d.modelValue), document.execCommand("defaultParagraphSeparator", !1, "p");
		});
		function k(e) {
			return h.value.heading.replace("{level}", String(e));
		}
		function A(e) {
			w.value?.focus(), document.execCommand("styleWithCSS", !1, !1), document.execCommand(e, !1, null), p(I);
		}
		function M(e) {
			w.value?.focus(), document.execCommand("formatBlock", !1, e), x.value = !1, p(I);
		}
		function N(e) {
			if (w.value?.focus(), document.execCommand("styleWithCSS", !1, !0), e) {
				document.execCommand("foreColor", !1, e), I();
				return;
			}
			document.execCommand("removeFormat", !1, null), p(() => {
				w.value && (w.value.querySelectorAll("span").forEach((e) => {
					e.style.removeProperty("font-family"), e.style.cssText.trim() || e.replaceWith(...e.childNodes);
				}), I());
			});
		}
		function P() {
			if (w.value) {
				V();
				for (let e of [...w.value.children]) {
					if (e.tagName !== "DIV") continue;
					let t = document.createElement("p");
					t.innerHTML = e.innerHTML, e.replaceWith(t);
				}
				I();
			}
		}
		function F() {
			if (!w.value) return "";
			L(w.value);
			let e = ft(w.value.innerHTML);
			return e === "<p><br></p>" || e === "<br>" ? "" : e;
		}
		function I() {
			f("update:modelValue", F());
		}
		function L(e) {
			e.querySelectorAll("strong").forEach((e) => R(e, "b")), e.querySelectorAll("i").forEach((e) => R(e, "em")), e.querySelectorAll("span").forEach((e) => {
				let t = e.style.fontWeight, n = e.style.fontStyle, r = e.style.textDecorationLine || e.style.textDecoration, i = null;
				t === "bold" || Number(t) >= 600 ? (e.style.removeProperty("font-weight"), i = "b") : n === "italic" ? (e.style.removeProperty("font-style"), i = "em") : String(r).includes("underline") && (e.style.removeProperty("text-decoration"), e.style.removeProperty("text-decoration-line"), i = "u"), i && R(e, i);
			});
		}
		function R(e, t) {
			let n = document.createElement(t);
			for (let t of [...e.attributes]) (t.name !== "style" || e.style.cssText.trim()) && n.setAttribute(t.name, t.value);
			return n.append(...e.childNodes), e.replaceWith(n), n;
		}
		function z(e) {
			let t = e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
			for (; t && t !== w.value;) {
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
		function B(e) {
			let t = document.createRange(), n = window.getSelection();
			t.selectNodeContents(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t);
		}
		function V() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !w.value?.contains(e.anchorNode)) return;
			let t = z(e.anchorNode);
			if (!t || t.tagName === "LI") return;
			let n = t.textContent || "";
			(n === "- " || n === " - ") && H(t);
		}
		function H(e) {
			let t = document.createElement("li");
			t.innerHTML = "<br>";
			let n = document.createElement("ul");
			n.appendChild(t), e.replaceWith(n), B(t);
		}
		function U() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !w.value?.contains(e.anchorNode)) return !1;
			let t = z(e.anchorNode);
			if (!t || t.tagName === "LI") return !1;
			let n = (t.textContent || "").replace(/\u00a0/g, " ");
			return n !== "-" && n !== " -" ? !1 : (H(t), !0);
		}
		function W(e) {
			if (e.key === " ") {
				U() && (e.preventDefault(), I());
				return;
			}
			e.key === "Enter" && (e.preventDefault(), document.execCommand(e.shiftKey ? "insertLineBreak" : "insertParagraph"), I());
		}
		function ee(e) {
			w.value?.focus(), document.execCommand("insertHTML", !1, e), I();
		}
		function te(e) {
			e.preventDefault();
			let t = e.clipboardData?.getData("text/html"), n = e.clipboardData?.getData("text/plain") || "";
			ee(t ? ft(t) : pt(n));
		}
		function ne(e) {
			let t = document.caretPositionFromPoint?.(e.clientX, e.clientY), n = document.caretRangeFromPoint?.(e.clientX, e.clientY), r = document.createRange();
			if (t) r.setStart(t.offsetNode, t.offset);
			else if (n) r.setStart(n.startContainer, n.startOffset);
			else return;
			r.collapse(!0);
			let i = window.getSelection();
			i.removeAllRanges(), i.addRange(r);
		}
		function re(e) {
			e.preventDefault(), ne(e);
			let t = e.dataTransfer?.getData("text/html"), n = e.dataTransfer?.getData("text/plain") || "";
			ee(t ? ft(t) : pt(n));
		}
		function ie(e) {
			I(), f("blur", e);
		}
		return n({
			focus: () => w.value?.focus(),
			commit: I
		}), (n, r) => (v(), o("div", gt, [t.editable ? (v(), o(e, { key: 0 }, [s("div", {
			class: "desc-toolbar",
			role: "toolbar",
			"aria-label": h.value.toolbar
		}, [
			s("button", {
				type: "button",
				class: "desc-btn",
				title: h.value.bold,
				onMousedown: r[0] ||= j((e) => A("bold"), ["prevent"])
			}, [s("b", null, C(h.value.boldShort), 1)], 40, vt),
			s("button", {
				type: "button",
				class: "desc-btn",
				title: h.value.italic,
				onMousedown: r[1] ||= j((e) => A("italic"), ["prevent"])
			}, [s("i", null, C(h.value.italicShort), 1)], 40, yt),
			s("button", {
				type: "button",
				class: "desc-btn",
				title: h.value.underline,
				onMousedown: r[2] ||= j((e) => A("underline"), ["prevent"])
			}, [s("u", null, C(h.value.underlineShort), 1)], 40, bt),
			r[8] ||= s("div", { class: "desc-sep" }, null, -1),
			s("button", {
				ref_key: "headingTrigger",
				ref: S,
				type: "button",
				class: "desc-btn desc-btn-wide",
				"aria-expanded": x.value,
				"aria-haspopup": "menu",
				onMousedown: r[3] ||= j((e) => x.value = !x.value, ["prevent"])
			}, [l(C(h.value.paragraph) + " ", 1), r[7] ||= s("span", {
				class: "desc-caret",
				"aria-hidden": "true"
			}, "▾", -1)], 40, xt),
			u(Le, {
				open: x.value,
				anchor: S.value,
				"min-width": 160,
				"z-index": 4500,
				role: "menu",
				"aria-label": h.value.paragraph,
				"onUpdate:open": r[5] ||= (e) => x.value = e
			}, {
				default: O(() => [s("button", {
					type: "button",
					class: "desc-drop-item drop-p",
					role: "menuitem",
					onMousedown: r[4] ||= j((e) => M("p"), ["prevent"])
				}, C(h.value.normal), 33), (v(!0), o(e, null, b(g.value, (e) => (v(), o("button", {
					key: e,
					type: "button",
					class: m(["desc-drop-item", `drop-h${e}`]),
					role: "menuitem",
					onMousedown: j((t) => M(`h${e}`), ["prevent"])
				}, C(k(e)), 43, St))), 128))]),
				_: 1
			}, 8, [
				"open",
				"anchor",
				"aria-label"
			]),
			r[9] ||= s("div", { class: "desc-sep" }, null, -1),
			u(Ze, {
				"allow-clear": "",
				colors: t.colors,
				"model-value": "",
				"clear-label": h.value.clearColor,
				"aria-label": h.value.color,
				"onUpdate:modelValue": N
			}, {
				trigger: O(({ toggle: e }) => [s("button", {
					type: "button",
					class: "desc-btn",
					title: h.value.color,
					onMousedown: j((t) => {
						x.value = !1, e();
					}, ["prevent"])
				}, [s("span", wt, C(h.value.colorShort), 1)], 40, Ct)]),
				_: 1
			}, 8, [
				"colors",
				"clear-label",
				"aria-label"
			])
		], 8, _t), s("div", {
			ref_key: "editorEl",
			ref: w,
			class: "desc-editor",
			contenteditable: "true",
			spellcheck: "false",
			translate: "no",
			autocorrect: "off",
			"data-placeholder": t.placeholder,
			"aria-label": t.ariaLabel || t.placeholder,
			onInput: P,
			onKeydown: W,
			onPaste: te,
			onDrop: re,
			onFocus: r[6] ||= (e) => n.$emit("focus", e),
			onBlur: ie
		}, null, 40, Tt)], 64)) : t.modelValue ? (v(), i(ht, {
			key: 1,
			class: "desc-view",
			html: t.modelValue
		}, null, 8, ["html"])) : (v(), o("div", Et, C(t.placeholder), 1))]));
	}
}, [["__scopeId", "data-v-8d4fc0ab"]]), Ot = {
	key: 0,
	class: "share-editor-panel__title"
}, kt = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("div", { class: m(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (v(), o("div", Ot, [x(t.$slots, "title", {}, () => [l(C(e.title), 1)], !0)])) : a("", !0), x(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-055dcd8d"]]), At = { class: "share-editor-section-title" }, jt = { class: "share-editor-section-title__text" }, Mt = {
	key: 0,
	class: "share-editor-section-title__actions"
}, Nt = /*#__PURE__*/ M({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (v(), o("div", At, [s("span", jt, [x(t.$slots, "default", {}, () => [l(C(e.title), 1)], !0)]), t.$slots.actions ? (v(), o("span", Mt, [x(t.$slots, "actions", {}, void 0, !0)])) : a("", !0)]));
	}
}, [["__scopeId", "data-v-03237796"]]), Pt = { class: "share-editor-section" }, Ft = /*#__PURE__*/ M({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (v(), o("section", Pt, [e.title || t.$slots.title ? (v(), i(Nt, {
			key: 0,
			title: e.title
		}, c({ _: 2 }, [t.$slots.title ? {
			name: "default",
			fn: O(() => [x(t.$slots, "title", {}, void 0, !0)]),
			key: "0"
		} : void 0, t.$slots.actions ? {
			name: "actions",
			fn: O(() => [x(t.$slots, "actions", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, ["title"])) : a("", !0), x(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-6a56d656"]]), It = {}, Lt = { class: "share-editor-total" };
function Rt(e, t) {
	return v(), o("div", Lt, [x(e.$slots, "default", {}, void 0, !0)]);
}
var zt = /*#__PURE__*/ M(It, [["render", Rt], ["__scopeId", "data-v-72dfd940"]]);
//#endregion
//#region src/composables/useFullscreenViewportHeight.js
function Bt(e = .94) {
	let t = y(`${Math.round(e * 100)}dvh`);
	function n() {
		if (typeof window > "u") return;
		let n = window.visualViewport?.height || window.innerHeight;
		t.value = `${Math.floor(n * e)}px`;
	}
	return _(() => {
		n(), window.addEventListener("resize", n), window.visualViewport?.addEventListener("resize", n);
	}), g(() => {
		window.removeEventListener("resize", n), window.visualViewport?.removeEventListener("resize", n);
	}), t;
}
//#endregion
//#region src/internal/overlayStack.js
var Vt = [], Ht = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", Ut = 0, Wt = "";
function Gt(e = Symbol("share-overlay")) {
	return Vt.push(e), e;
}
function Kt(e) {
	let t = Vt.lastIndexOf(e);
	t >= 0 && Vt.splice(t, 1);
}
function qt(e) {
	return Vt.at(-1) === e;
}
function Jt(e) {
	e && ([...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")].find((e) => e.getClientRects().length > 0) || e).focus?.({ preventScroll: !0 });
}
function Yt(e, t) {
	if (e.key !== "Tab" || !t) return;
	let n = [...t.querySelectorAll(Ht)].filter((e) => e.getClientRects().length > 0);
	if (!n.length) {
		e.preventDefault(), t.focus?.({ preventScroll: !0 });
		return;
	}
	let r = n[0], i = n.at(-1);
	e.shiftKey && (document.activeElement === r || !t.contains(document.activeElement)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || !t.contains(document.activeElement)) && (e.preventDefault(), r.focus());
}
function Xt(e) {
	e instanceof HTMLElement && e.isConnected && e.focus({ preventScroll: !0 });
}
function Zt() {
	if (typeof document > "u") return () => {};
	Ut === 0 && (Wt = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden"), Ut += 1;
	let e = !1;
	return () => {
		e || (e = !0, Ut = Math.max(0, Ut - 1), Ut === 0 && (document.documentElement.style.overflow = Wt));
	};
}
var Qt = /* @__PURE__ */ new WeakMap();
function $t(e, { blur: t = "8px", duration: n = "300ms" } = {}) {
	if (!e) return () => {};
	let r = Qt.get(e);
	r || (r = {
		count: 0,
		filter: e.style.filter,
		transition: e.style.transition
	}, Qt.set(e, r)), r.count += 1, e.style.transition = `filter ${n} ease`, e.style.filter = `blur(${t})`;
	let i = !1;
	return () => {
		i || (i = !0, r.count = Math.max(0, r.count - 1), !(r.count > 0) && (e.style.filter = r.filter, e.style.transition = r.transition, Qt.delete(e)));
	};
}
//#endregion
//#region src/components/overlay/AppModal.vue
var en = ["aria-label"], tn = {
	key: 0,
	class: "am-handle"
}, nn = ["aria-label"], rn = () => window.innerWidth <= 640, an = 260, Q = 280, $ = "cubic-bezier(0.32, 0.72, 0, 1)", on = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function sn(e) {
	e.focus({ preventScroll: !0 });
}
var cn = /*#__PURE__*/ M({
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
		let l = e, u = c, d = y(null), f = y(null), b = Bt(), S = r(() => typeof l.width == "number" ? `${l.width}px` : l.width || "480px"), C = y(!1), T = y(0), E = y(0), D = y(0), O = !1, k = null, A = !1, M = () => {}, N = Symbol("app-modal"), P = typeof document < "u" ? document.activeElement : null;
		function F(e) {
			if (!qt(N)) return;
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
			let t = [...f.value?.querySelectorAll(on) || []].filter((e) => e.getClientRects().length > 0);
			if (!t.length) {
				e.preventDefault(), f.value?.focus();
				return;
			}
			let n = t[0], r = t.at(-1);
			e.shiftKey && (document.activeElement === n || !f.value?.contains(document.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (document.activeElement === r || !f.value?.contains(document.activeElement)) && (e.preventDefault(), n.focus());
		}
		function I() {
			let e = d.value, t = f.value;
			!e || !t || (e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", rn() ? t.style.transform = "translateY(100%)" : (t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					let n = "cubic-bezier(0, 0, 0.4, 1)", r = `opacity ${an}ms ${n}, backdrop-filter ${an}ms ${n}, -webkit-backdrop-filter ${an}ms ${n}`;
					e.style.transition = r, e.style.opacity = "1", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", rn() ? (t.style.transition = `transform ${an}ms ${$}`, t.style.transform = "translateY(0)") : (t.style.transition = `transform ${an}ms ${$}, opacity ${an}ms ${n}`, t.style.transform = "none", t.style.opacity = "1"), setTimeout(() => {
						O || (e.style.transition = "", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", t.style.transition = "", t.style.transform = "", t.style.opacity = "", u("opened"));
					}, 310);
				});
			}));
		}
		function L() {
			let e = d.value, t = f.value;
			if (!e || !t) {
				k = setTimeout(() => {
					O || u("close");
				}, 0);
				return;
			}
			let n = `opacity ${Q}ms ease, backdrop-filter ${Q}ms ease, -webkit-backdrop-filter ${Q}ms ease`;
			e.style.transition = n, e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", rn() ? (t.style.transition = `transform ${Q}ms ${$}`, t.style.transform = "translateY(100%)") : (t.style.transition = `transform ${Q}ms ease, opacity ${Q}ms ease`, t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), k = setTimeout(() => {
				O || u("close");
			}, 300);
		}
		function R() {
			!l.dismissible || A || (A = !0, L());
		}
		n({ requestClose: R });
		function z(e) {
			if (!l.dismissible) return;
			E.value = e.touches[0].clientY;
			let t = e.target instanceof Element ? e.target : null;
			for (; t && t !== f.value;) {
				let e = window.getComputedStyle(t);
				if (/(auto|scroll)/.test(e.overflowY) && t.scrollHeight > t.clientHeight) break;
				t = t.parentElement;
			}
			D.value = t?.scrollTop || f.value?.scrollTop || 0, C.value = !1, T.value = 0;
		}
		function B(e) {
			if (!l.dismissible) return;
			let t = e.touches[0].clientY - E.value;
			if (!C.value) {
				if (t > 8 && D.value <= 0) C.value = !0;
				else return;
			}
			e.preventDefault(), T.value = Math.max(0, t);
			let n = f.value, r = d.value;
			n && (n.style.transition = "none", n.style.transform = `translateY(${T.value}px)`), r && (r.style.transition = "none", r.style.opacity = String(Math.max(0, 1 - T.value / 320)));
		}
		function V() {
			if (!C.value) return;
			C.value = !1;
			let e = f.value, t = d.value;
			T.value > 100 ? (e && (e.style.transition = `transform ${Q}ms ${$}`, e.style.transform = "translateY(100%)"), t && (t.style.transition = `opacity ${Q}ms ease`, t.style.opacity = "0"), k = setTimeout(() => {
				O || u("close");
			}, 300)) : (e && (e.style.transition = `transform ${Q}ms ${$}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), T.value = 0, setTimeout(() => {
				O || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330));
		}
		function H() {
			if (!C.value) return;
			C.value = !1, T.value = 0;
			let e = f.value, t = d.value;
			e && (e.style.transition = `transform ${Q}ms ${$}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), setTimeout(() => {
				O || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330);
		}
		return _(() => {
			Gt(N), M = Zt(), document.addEventListener("keydown", F), p(() => {
				I(), f.value?.contains(document.activeElement) || (f.value?.querySelector(on)?.focus(), f.value?.contains(document.activeElement) || f.value?.focus());
			});
		}), g(() => {
			Kt(N), M(), document.removeEventListener("keydown", F), clearTimeout(k), O = !0, P instanceof HTMLElement && P.isConnected && sn(P);
		}), (n, r) => (v(), i(t, { to: "body" }, [s("div", {
			ref_key: "overlay",
			ref: d,
			class: "am-overlay",
			style: h([e.zIndex === 3e3 ? {} : { zIndex: e.zIndex }, {
				"--am-fullscreen-height": w(b),
				"--am-width": S.value
			}]),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			onMousedown: j(R, ["self"])
		}, [s("div", {
			ref_key: "card",
			ref: f,
			class: m(["am-card", {
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
			e.showHandle ? (v(), o("div", tn)) : a("", !0),
			e.showClose && !e.fullscreen ? (v(), o("button", {
				key: 1,
				class: "am-close",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: R
			}, "✕", 8, nn)) : a("", !0),
			x(n.$slots, "default", {}, void 0, !0)
		], 34)], 44, en)]));
	}
}, [["__scopeId", "data-v-ddded319"]]), ln = { class: "aem-shell" }, un = { class: "aem-heading" }, dn = { class: "aem-title" }, fn = {
	key: 0,
	class: "aem-subtitle"
}, pn = {
	key: 0,
	class: "aem-header-actions"
}, mn = ["aria-label"], hn = {
	key: 0,
	class: "aem-footer"
}, gn = /*#__PURE__*/ M({
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
		let t = y(null);
		function n() {
			t.value?.requestClose();
		}
		return (r, c) => (v(), i(cn, {
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
			default: O(() => [s("section", ln, [
				s("header", { class: m(["aem-header", { "aem-header-with-actions": !!r.$slots["header-actions"] }]) }, [
					c[3] ||= s("span", {
						class: "aem-handle",
						"aria-hidden": "true"
					}, null, -1),
					s("div", un, [x(r.$slots, "title", {}, () => [s("h2", dn, C(e.title), 1), e.subtitle ? (v(), o("span", fn, C(e.subtitle), 1)) : a("", !0)], !0)]),
					r.$slots["header-actions"] ? (v(), o("div", pn, [x(r.$slots, "header-actions", {}, void 0, !0)])) : a("", !0),
					e.showClose ? (v(), o("button", {
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
					})], -1)]], 8, mn)) : a("", !0)
				], 2),
				s("div", { class: m(["aem-body", {
					"aem-body-flush": !e.padded,
					"aem-body-no-scroll": !e.bodyScroll
				}]) }, [x(r.$slots, "default", {}, void 0, !0)], 2),
				r.$slots.footer ? (v(), o("footer", hn, [x(r.$slots, "footer", {}, void 0, !0)])) : a("", !0)
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
}, [["__scopeId", "data-v-0a15c618"]]), _n = {
	key: 0,
	class: "cd-message"
}, vn = { class: "cd-actions" }, yn = ["disabled"], bn = ["disabled"], xn = /*#__PURE__*/ M({
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
		function h() {
			n.loading || (c("cancel"), p());
		}
		function g() {
			n.loading || (c("confirm"), p());
		}
		return (t, n) => l.value ? (v(), i(gn, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: h
		}, {
			footer: O(() => [s("div", vn, [s("button", {
				type: "button",
				class: "cd-btn-cancel",
				disabled: e.loading,
				onClick: h
			}, C(d.value), 9, yn), s("button", {
				type: "button",
				class: m(["cd-btn-confirm", `cd-btn--${f.value}`]),
				disabled: e.loading,
				onClick: g
			}, C(e.loading ? e.loadingLabel : u.value), 11, bn)])]),
			default: O(() => [e.message ? (v(), o("div", _n, C(e.message), 1)) : a("", !0)]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : a("", !0);
	}
}, [["__scopeId", "data-v-2819b01e"]]), Sn = {
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
		return (t, n) => e.open ? (v(), i(cn, {
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
			default: O(() => [x(t.$slots, "default")]),
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
function Cn({ open: e = 420, close: t = 300 } = {}) {
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
	], a = y(!1), o = y(!1), s = null;
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
var wn = ["aria-label"], Tn = { class: "ms-head-content" }, En = ["aria-label"], Dn = 320, On = 260, kn = "8px", An = /*#__PURE__*/ M({
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
		let l = e, u = c, d = Fe(), f = T(), b = r(() => l.mode === "add"), S = r(() => l.showClose === null ? !!f.head : l.showClose), C = r(() => l.nav ? l.nav.view.value : "detail"), E = r(() => l.nav ? l.nav.detailStyle.value : null), O = r(() => l.nav ? l.nav.subStyle.value : null), k = r(() => !!l.nav && C.value !== "detail"), A = y(null), M = y(null), N = y(null), P = y(null), F = y(null), I = y(null), L = y(!1), R = y(!1), z = y(!1), B = y(!1), V = y(!1), { EASE: H, visible: U, morphing: W, playClose: ee, playOpen: te } = Cn(), ne = () => d.value ? "0px" : "18px", re = r(() => ({
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
			if (l.nav && C.value !== "detail") {
				l.nav.backToDetail(), u("back");
				return;
			}
			if (V.value = !1, Ee(!1), b.value) {
				z.value = !1, U.value = !1, setTimeout(() => u("close"), 320);
				return;
			}
			ee(A.value, ie(), {
				fromRadius: ne(),
				toRadius: l.originRadius
			}, () => u("close"));
		}
		function oe() {
			R.value = !0, V.value = !1, U.value = !1, Ee(!1), setTimeout(() => u("close"), 220);
		}
		let se = Symbol("morph-sheet"), ce = typeof document < "u" ? document.activeElement : null;
		function le(e) {
			if (qt(se)) {
				if (e.key === "Escape") {
					ae();
					return;
				}
				Yt(e, A.value);
			}
		}
		function ue(e) {
			let t = e?.firstElementChild;
			return t ? t.scrollHeight : e?.scrollHeight || 0;
		}
		function de() {
			return Math.floor(window.innerHeight * .9) - (M.value?.offsetHeight || 0) - (N.value?.offsetHeight || 0);
		}
		function G(e) {
			if (d.value || !P.value || W.value) return;
			let t = l.nav ? l.nav.pos.value : 0, n = ue(F.value), r = I.value ? ue(I.value) : n, i = n * (1 - t) + r * t, a = Math.min(i, Math.max(120, de()));
			P.value.style.transition = e ? `height ${Dn}ms ${H}` : "none", P.value.style.height = `${a}px`;
		}
		let K = null;
		function q() {
			K && (K.disconnect(), [F.value?.firstElementChild, I.value?.firstElementChild].forEach((e) => {
				e && K.observe(e);
			}));
		}
		function J() {
			W.value || l.nav && l.nav.animating.value || fe || G(!1);
		}
		l.nav && (D(() => l.nav.pos.value, () => G(l.nav.animating.value)), D(() => l.nav.view.value, (e, t) => p(() => {
			q(), e !== "detail" && t === "detail" && I.value && (I.value.offsetWidth, l.nav.enterSub()), l.nav.animating.value || G(!1);
		})));
		let Y = y(0), fe = !1, pe = 0, me = 0, X = null, he = 0, ge = null, _e = 0, Z = 0, ve = 0;
		function ye(e) {
			!d.value || W.value || (pe = e.touches[0].clientX, me = e.touches[0].clientY, ge = e.target, X = null);
		}
		function be() {
			let e = ge;
			for (; e && e !== A.value;) {
				if (e.scrollHeight > e.clientHeight + 1) {
					let t = getComputedStyle(e).overflowY;
					if ((t === "auto" || t === "scroll") && e.scrollTop > 0) return !1;
				}
				e = e.parentElement;
			}
			return !0;
		}
		function xe(e) {
			if (!d.value || W.value || X === "scroll") return;
			let t = e.touches[0].clientX - pe, n = e.touches[0].clientY - me;
			if (X === null) {
				if (l.showBack && l.nav && t > 8 && Math.abs(t) > Math.abs(n)) {
					X = "back", fe = !0, he = t, _e = e.touches[0].clientX, Z = e.timeStamp, ve = 0, l.nav.dragStart(P.value?.clientWidth || window.innerWidth);
					return;
				}
				if (n > 6 && be() && Math.abs(n) >= Math.abs(t)) X = "drag";
				else if (Math.abs(n) > 6 || Math.abs(t) > 6) {
					X = "scroll";
					return;
				} else return;
			}
			if (X === "back") {
				he = Math.max(0, t), e.cancelable && e.preventDefault();
				let n = e.touches[0].clientX, r = e.timeStamp;
				r > Z && (ve = (n - _e) / (r - Z)), _e = n, Z = r, l.nav.dragMove(he);
				return;
			}
			if (X !== "drag") return;
			e.cancelable && e.preventDefault(), Y.value = Math.max(0, n);
			let r = A.value;
			r && (r.style.transition = "none", r.style.transform = `translateY(${Y.value}px)`);
		}
		function Se() {
			if (X === "back") {
				fe = !1, X = null, l.nav.dragEnd(he, ve), he = 0, ve = 0;
				return;
			}
			if (X !== "drag") {
				X = null;
				return;
			}
			X = null;
			let e = A.value;
			if (Y.value > 120) {
				Ce();
				return;
			}
			Y.value = 0, e && (e.style.transition = `transform .26s ${H}`, e.style.transform = "translateY(0)");
		}
		function Ce() {
			let e = A.value;
			e && (e.style.transition = `transform ${On}ms ${H}`, e.style.transform = `translateY(${window.innerHeight}px)`), U.value = !1, V.value = !1, Me(), Ee(!1), setTimeout(() => u("close"), On);
		}
		let we = () => {};
		function Te() {
			return typeof l.backgroundTarget == "string" ? document.querySelector(l.backgroundTarget) : l.backgroundTarget instanceof Element ? l.backgroundTarget : null;
		}
		function Ee(e) {
			we(), we = () => {}, !(!e || d.value || !l.blurBackground) && (we = $t(Te(), { blur: kn }));
		}
		let De = "", Oe = "", ke = !1;
		function Ae() {
			let e = l.originEl;
			e && (De = e.style.opacity, Oe = e.style.transition);
		}
		function je(e) {
			let t = l.originEl;
			t && (t.style.opacity = e ? "0" : De);
		}
		function Me() {
			let e = l.originEl;
			if (!e) return;
			ke = !0;
			let t = Oe && Oe !== "none" ? `${Oe}, ` : "";
			e.style.transition = `${t}opacity ${On}ms ease`, e.style.opacity = "0", requestAnimationFrame(() => {
				e.style.opacity = De;
			}), setTimeout(() => {
				e.style.opacity = De, e.style.transition = Oe, ke = !1;
			}, 280);
		}
		let Ne = () => {};
		function Pe() {
			W.value || (d.value && P.value ? P.value.style.height = "" : G(!1));
		}
		return _(async () => {
			Gt(se), Ne = Zt(), typeof ResizeObserver < "u" && (K = new ResizeObserver(J)), await p(), G(!1), q(), L.value = !0, b.value ? (U.value = !0, requestAnimationFrame(() => {
				z.value = !0, B.value = !0;
			})) : (Ae(), je(!0), te(A.value, l.originRect, {
				fromRadius: l.originRadius,
				toRadius: ne()
			}), requestAnimationFrame(() => {
				B.value = !0;
			})), Ee(!0), setTimeout(() => {
				V.value = !0, G(!1), Jt(A.value);
			}, 20), document.addEventListener("keydown", le), window.addEventListener("resize", Pe);
		}), g(() => {
			Kt(se), Ne(), Ee(!1), !b.value && !ke && je(!1), document.removeEventListener("keydown", le), window.removeEventListener("resize", Pe), K?.disconnect(), Xt(ce);
		}), n({
			close: ae,
			finishNow: oe
		}), (n, r) => (v(), i(t, { to: "body" }, [s("div", {
			class: m(["ms-overlay", { visible: w(U) }]),
			onClick: j(ae, ["self"])
		}, [s("div", {
			ref_key: "panelEl",
			ref: A,
			class: m(["ms-sheet", {
				shown: L.value,
				closing: R.value,
				entered: z.value,
				padded: B.value,
				"add-sheet": b.value,
				"ms-framed": e.frameColor
			}]),
			style: h(re.value),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			tabindex: "-1",
			onTouchstartPassive: ye,
			onTouchmove: xe,
			onTouchend: Se,
			onTouchcancel: Se
		}, [
			r[0] ||= s("div", { class: "ms-grab" }, null, -1),
			n.$slots.head ? (v(), o("div", {
				key: 0,
				ref_key: "headEl",
				ref: M,
				class: "ms-head"
			}, [s("div", Tn, [x(n.$slots, "head", {}, void 0, !0)]), S.value ? (v(), o("button", {
				key: 0,
				class: "ms-x",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: ae
			}, "✕", 8, En)) : a("", !0)], 512)) : a("", !0),
			s("div", {
				ref_key: "bodyEl",
				ref: P,
				class: "ms-body"
			}, [s("div", {
				ref_key: "detailCellEl",
				ref: F,
				class: "ms-cell",
				style: h(E.value)
			}, [x(n.$slots, "detail", { revealed: V.value }, () => [x(n.$slots, "default", { revealed: V.value }, void 0, !0)], !0)], 4), k.value ? (v(), o("div", {
				key: 0,
				ref_key: "subCellEl",
				ref: I,
				class: "ms-cell",
				style: h(O.value)
			}, [x(n.$slots, "sub", {}, void 0, !0)], 4)) : a("", !0)], 512),
			e.showFoot && n.$slots.foot ? (v(), o("div", {
				key: 1,
				ref_key: "footEl",
				ref: N,
				class: "ms-foot"
			}, [x(n.$slots, "foot", {}, void 0, !0)], 512)) : a("", !0)
		], 46, wn)], 2)]));
	}
}, [["__scopeId", "data-v-e1ec346c"]]), jn = { class: "form-actions" }, Mn = ["disabled"], Nn = ["disabled"], Pn = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("div", jn, [s("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, C(e.cancelText), 9, Mn), s("button", {
			type: "button",
			class: "form-actions__submit",
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, C(e.loading ? e.loadingText : e.submitText), 9, Nn)]));
	}
}, [["__scopeId", "data-v-4749c971"]]), Fn = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], In = /*#__PURE__*/ M({
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
		let n = e, r = y(null);
		return _(() => {
			n.autofocus && r.value?.focus();
		}), t({ focus: () => r.value?.focus() }), (t, n) => (v(), o("input", {
			ref_key: "inputRef",
			ref: r,
			class: m(["form-text-input", {
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
			onKeydown: n[2] ||= A((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, Fn));
	}
}, [["__scopeId", "data-v-e2d6bc8e"]]), Ln = {
	key: 0,
	class: "tpd-message"
}, Rn = {
	key: 1,
	class: "tpd-label"
}, zn = /*#__PURE__*/ M({
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
		let n = e, s = t, c = r(() => n.open === null || n.open), l = r(() => n.confirmText || n.confirmLabel), d = r(() => n.cancelText || n.cancelLabel), f = y(n.value || n.initial);
		D(() => n.value, (e) => {
			f.value = e;
		}), D(() => n.open, (e) => {
			e && p(() => {
				f.value = n.initial || n.value;
			});
		});
		function m() {
			n.open !== null && s("update:open", !1);
		}
		function h() {
			n.loading || (s("cancel"), m());
		}
		function g() {
			let e = f.value.trim();
			e && !n.loading && (s("confirm", e), s("submit", e), m());
		}
		return (t, n) => c.value ? (v(), i(gn, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: h
		}, {
			footer: O(() => [u(Pn, {
				"submit-text": l.value,
				"cancel-text": d.value,
				"loading-text": e.loadingLabel,
				loading: e.loading,
				"can-submit": !!f.value.trim(),
				onCancel: h,
				onSubmit: g
			}, null, 8, [
				"submit-text",
				"cancel-text",
				"loading-text",
				"loading",
				"can-submit"
			])]),
			default: O(() => [
				e.message ? (v(), o("div", Ln, C(e.message), 1)) : a("", !0),
				e.label ? (v(), o("label", Rn, C(e.label), 1)) : a("", !0),
				u(In, {
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
}, [["__scopeId", "data-v-ff9d61bb"]]), Bn = { class: "form-field-label" }, Vn = {
	key: 0,
	class: "form-field-hint"
}, Hn = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("div", { class: m(["form-field", { "form-field--vertical": e.vertical }]) }, [s("span", Bn, [l(C(e.label), 1), e.hint ? (v(), o("span", Vn, C(e.hint), 1)) : a("", !0)]), x(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-01093950"]]), Un = { class: "fn-wrap" }, Wn = [
	"value",
	"min",
	"max"
], Gn = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("div", Un, [
			s("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[0] ||= j((e) => c(-1), ["stop"])
			}, "−"),
			s("input", {
				class: "fn-input",
				type: "number",
				value: e.value,
				min: e.min,
				max: e.max,
				onChange: a
			}, null, 40, Wn),
			s("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[1] ||= j((e) => c(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-df9f8db7"]]), Kn = ["value"], qn = /*#__PURE__*/ M({
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
		let r = e, i = n, a = y(null);
		function s(e) {
			let t = e.target.options[e.target.selectedIndex], n = t && "_value" in t ? t._value : e.target.value;
			i("update:value", n), i("change", n);
		}
		return _(() => {
			r.autofocus && a.value?.focus();
		}), t({ focus: () => a.value?.focus() }), (t, n) => (v(), o("select", {
			ref_key: "selectRef",
			ref: a,
			class: "form-select",
			value: e.value,
			onChange: s
		}, [x(t.$slots, "default", {}, void 0, !0)], 40, Kn));
	}
}, [["__scopeId", "data-v-3eb4c36d"]]), Jn = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], Yn = /*#__PURE__*/ M({
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
		return (t, n) => (v(), o("textarea", {
			class: "form-textarea",
			value: e.value,
			placeholder: e.placeholder,
			rows: e.rows,
			maxlength: e.maxlength,
			onInput: n[0] ||= (e) => t.$emit("update:value", e.target.value)
		}, null, 40, Jn));
	}
}, [["__scopeId", "data-v-31024142"]]), Xn = 4;
function Zn(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function Qn(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = y(!1), o = y(null), s = y(null), c = y(-1), l = y(null), u = y(-1), d = y(!1), f = null, p = 0, m = 0, h = null, _ = 0, v = null;
	function b(e, t, n, r) {
		if (e.button !== void 0 && e.button !== 0) return;
		let i = e.currentTarget.closest("[data-sortable-key]");
		i && (h = {
			x: e.clientX,
			y: e.clientY,
			item: t,
			group: n,
			index: r,
			sourceEl: i
		}, document.addEventListener("pointermove", x), document.addEventListener("pointerup", T), document.addEventListener("pointercancel", T), window.addEventListener("keydown", E), e.preventDefault());
	}
	function x(e) {
		if (!a.value) {
			if (!h) return;
			let t = e.clientX - h.x, n = e.clientY - h.y;
			if (Math.hypot(t, n) < Xn) return;
			S();
		}
		C(e.clientX, e.clientY), w(e.clientX, e.clientY);
	}
	function S() {
		let { sourceEl: e, x: t, y: n, item: r, group: i, index: d } = h, g = e.getBoundingClientRect();
		p = t - g.left, m = n - g.top;
		let _ = e.cloneNode(!0), v = _;
		if (e.tagName === "TR") {
			let t = Array.from(e.children).map((e) => e.getBoundingClientRect().width);
			Array.from(_.children).forEach((e, n) => {
				e.style.width = t[n] + "px", e.style.minWidth = t[n] + "px", e.style.maxWidth = t[n] + "px";
			});
			let n = document.createElement("table"), r = document.createElement("tbody");
			r.appendChild(_), n.appendChild(r), n.style.borderCollapse = "separate", n.style.tableLayout = "fixed", v = n;
		}
		Object.assign(v.style, {
			position: "fixed",
			top: "0",
			left: "0",
			width: g.width + "px",
			height: g.height + "px",
			pointerEvents: "none",
			zIndex: "99999",
			margin: "0",
			transition: "none",
			opacity: "0.92",
			boxShadow: "var(--shadow-lg)",
			cursor: "grabbing",
			transformOrigin: "top left"
		}), v.classList.add("sortable-ghost"), document.body.appendChild(v), f = v, o.value = i, s.value = r, c.value = d, l.value = i, u.value = d, a.value = !0, document.body.classList.add("sortable-dragging"), C(t, n);
	}
	function C(e, t) {
		f && (f.style.transform = `translate3d(${e - p}px, ${t - m}px, 0)`);
	}
	function w(e, r) {
		let a = document.elementsFromPoint(e, r), c = null, d = null;
		for (let e of a) {
			let n = e.getAttribute && e.getAttribute("data-sortable-container");
			if (n && t[n]) {
				let r = t[n];
				if (r.accepts && !r.accepts(s.value, o.value, n)) continue;
				c = e, d = n;
				break;
			}
		}
		if (!d) return;
		let f = s.value ? String(n(s.value)) : null, p = Array.from(c.querySelectorAll(":scope > [data-sortable-key]")).filter((e) => e.getAttribute("data-sortable-key") !== f), m = p.length;
		for (let e = 0; e < p.length; e++) {
			let t = p[e].getBoundingClientRect();
			if (r < t.top + t.height / 2) {
				m = e;
				break;
			}
		}
		i && !i({
			item: s.value,
			fromGroup: o.value,
			toGroup: d,
			toIndex: m
		}) || (l.value = d, u.value = m);
	}
	function T() {
		if (!a.value) {
			D();
			return;
		}
		let e = {
			item: s.value,
			fromGroup: o.value,
			fromIndex: c.value,
			toGroup: l.value,
			toIndex: u.value
		};
		D(), e.toGroup != null && r?.(e);
	}
	function E(e) {
		e.key === "Escape" && D();
	}
	function D() {
		let e = a.value;
		document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", T), document.removeEventListener("pointercancel", T), window.removeEventListener("keydown", E), f &&= (f.remove(), null), document.body.classList.remove("sortable-dragging"), a.value = !1, o.value = null, s.value = null, c.value = -1, l.value = null, u.value = -1, h = null, e && (_ = Date.now() + 250, d.value = !0, clearTimeout(v), v = setTimeout(() => {
			d.value = !1, v = null;
		}, 250));
	}
	function O() {
		return Date.now() < _;
	}
	function k(e) {
		return a.value && s.value && n(s.value) === n(e);
	}
	function A(e) {
		let r = t[e];
		if (!r) return [];
		let i = r.items.value;
		if (!a.value) return i;
		let c = i;
		if (o.value === e) {
			let e = n(s.value);
			c = i.filter((t) => n(t) !== e);
		}
		if (l.value === e && s.value) {
			let e = Math.min(u.value, c.length);
			c = [
				...c.slice(0, e),
				s.value,
				...c.slice(e)
			];
		}
		return c;
	}
	return g(() => {
		D(), clearTimeout(v), d.value = !1;
	}), {
		dragging: a,
		sourceItem: s,
		sourceGroup: o,
		targetGroup: l,
		targetIndex: u,
		suppressNextClick: d,
		startDrag: b,
		shouldSuppressClick: O,
		isSource: k,
		displayItems: A
	};
}
//#endregion
//#region src/composables/useSheetSubpages.js
var $n = "cubic-bezier(.2, 0, 0, 1)", er = 320;
function tr() {
	let e = y("detail"), t = y(0), n = y(!1), i = 1, a = null, o = r(() => n.value ? `transform ${er}ms ${$n}` : "none"), s = r(() => ({
		transform: `translateX(${(-t.value * 100).toFixed(3)}%)`,
		transition: o.value
	})), c = r(() => ({
		transform: `translateX(${((1 - t.value) * 100).toFixed(3)}%)`,
		transition: o.value
	}));
	function l(e, r) {
		clearTimeout(a), n.value = !0, t.value = e, a = setTimeout(() => {
			n.value = !1, r && r();
		}, 330);
	}
	function u(r) {
		e.value === "detail" && (n.value = !1, t.value = 0, e.value = r);
	}
	function d() {
		l(1);
	}
	function f() {
		e.value !== "detail" && l(0, () => {
			e.value = "detail";
		});
	}
	function p(e) {
		clearTimeout(a), n.value = !1, i = e || 1;
	}
	function m(e) {
		t.value = Math.min(1, Math.max(0, 1 - e / i));
	}
	function h(t, n) {
		t > i * .35 || n > .4 ? l(0, () => {
			e.value = "detail";
		}) : l(1);
	}
	return {
		view: e,
		pos: t,
		animating: n,
		detailStyle: s,
		subStyle: c,
		goSub: u,
		enterSub: d,
		backToDetail: f,
		dragStart: p,
		dragMove: m,
		dragEnd: h
	};
}
//#endregion
export { ye as ACTION_MENU_GAP, ve as ACTION_MENU_MARGIN, De as ActionMenu, De as RowActionMenu, Ne as ActionMenuItem, Ne as RowActionItem, Ue as ActionMenuSubmenu, Ue as RowActionSubmenu, L as AddButton, cn as AppModal, gn as AppModalFrame, z as AppSlider, Le as BasePopover, P as BaseTile, Ze as ColorPresetPicker, H as CompactCheckbox, xn as ConfirmDialog, kt as EditorPanel, Ft as EditorSection, Nt as EditorSectionTitle, zt as EditorTotal, Pn as FormActionButtons, Hn as FormField, Gn as FormNumberInput, qn as FormSelect, In as FormTextInput, Yn as FormTextarea, Sn as ModalShell, An as MorphSheet, ee as MultiToggle, We as PRESET_COLORS, zn as PromptDialog, zn as TextPromptDialog, Ce as ROW_ACTION_GAP, Se as ROW_ACTION_MARGIN, ne as RemoveButton, ht as RichContent, Dt as RichTextEditor, ae as SectionLabel, le as SlidingTabs, G as ToggleSwitch, rt as ValueSelect, xe as computeActionMenuPlacement, we as computeRowActionPlacement, st as escapeHtml, Ge as isValidHexColor, pt as plainTextToRichHtml, Ke as randomPreset, Zn as reorderByDrop, sn as restoreFocus, ft as sanitizeRichHtml, lt as sanitizeRichTextColor, ct as sanitizeRichTextUrl, Cn as useContainerMorph, Bt as useFullscreenViewportHeight, Fe as useIsMobile, Pe as useMediaQuery, tr as useSheetSubpages, Qn as useSortable };
