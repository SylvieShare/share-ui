import { Fragment as e, Teleport as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createSlots as s, createTextVNode as c, createVNode as l, nextTick as u, normalizeClass as d, normalizeStyle as f, onBeforeUnmount as p, onMounted as m, openBlock as h, ref as g, renderList as _, renderSlot as v, toDisplayString as y, unref as b, useSlots as x, watch as S, withCtx as C, withKeys as w, withModifiers as T } from "vue";
//#region \0plugin-vue:export-helper
var E = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, D = {
	key: 0,
	class: "base-tile-strip"
}, O = /*#__PURE__*/ E({
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
		let t = e, r = n(() => t.color || "var(--accent)");
		return (t, n) => (h(), a("div", {
			class: d(["base-tile", {
				"base-tile--interactive": e.interactive,
				"base-tile--tint": e.tint,
				"base-tile--framed": e.framed
			}]),
			style: f({ "--tile-color": r.value }),
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.strip ? (h(), a("span", D)) : i("", !0), v(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-81d15c1d"]]), k = [
	"disabled",
	"aria-label",
	"title"
], A = {
	key: 0,
	class: "share-add-button__text"
}, j = /*#__PURE__*/ E({
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
		return (t, n) => (h(), a("button", {
			class: d(["share-add-button", [`share-add-button--${e.variant}`, { "share-add-button--block": e.block }]]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			title: e.variant === "icon" && e.label || void 0,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [n[1] ||= o("span", {
			class: "share-add-button__plus",
			"aria-hidden": "true"
		}, "+", -1), e.variant === "icon" ? i("", !0) : (h(), a("span", A, [v(t.$slots, "default", {}, () => [c(y(e.label), 1)], !0)]))], 10, k));
	}
}, [["__scopeId", "data-v-2e1149d1"]]), M = [
	"value",
	"min",
	"max",
	"step",
	"disabled",
	"aria-label"
], N = /*#__PURE__*/ E({
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
		let r = e, i = t, o = n(() => {
			let e = r.max - r.min;
			return e ? Math.max(0, Math.min(100, (r.modelValue - r.min) / e * 100)) : 0;
		}), s = n(() => ({ "--share-slider-percent": `${o.value}%` }));
		function c(e) {
			return Number(e.target.value);
		}
		function l(e) {
			i("update:modelValue", c(e));
		}
		function u(e) {
			i("change", c(e));
		}
		return (t, n) => (h(), a("input", {
			class: "share-slider",
			type: "range",
			value: e.modelValue,
			min: e.min,
			max: e.max,
			step: e.step,
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			style: f(s.value),
			onInput: l,
			onChange: u
		}, null, 44, M));
	}
}, [["__scopeId", "data-v-a4387b22"]]), P = [
	"disabled",
	"aria-label",
	"aria-checked"
], F = {
	key: 0,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, I = /*#__PURE__*/ E({
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
		function s() {
			n.disabled || r("update:modelValue", !n.modelValue);
		}
		return (t, n) => (h(), a("button", {
			type: "button",
			class: d(["share-compact-checkbox", { "share-compact-checkbox--checked": e.modelValue }]),
			disabled: e.disabled,
			"aria-label": e.label,
			"aria-checked": e.modelValue,
			role: "checkbox",
			onClick: T(s, ["stop"]),
			onPointerdown: n[0] ||= T(() => {}, ["stop"])
		}, [e.modelValue ? (h(), a("svg", F, [...n[1] ||= [o("path", {
			d: "M2.5 6.2l2.4 2.4 4.6-5",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, null, -1)]])) : i("", !0)], 42, P));
	}
}, [["__scopeId", "data-v-caeb1891"]]), ee = ["aria-label"], L = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], te = /*#__PURE__*/ E({
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
	setup(t, { emit: r }) {
		let i = t, s = r, c = g(null), l = g([]), v = g({
			left: 0,
			width: 0,
			ready: !1,
			animate: !1
		}), b = n(() => i.neutralValue !== void 0 && i.modelValue === i.neutralValue), x = n(() => ({
			transform: `translateX(${v.value.left}px)`,
			width: `${v.value.width}px`,
			opacity: +!!v.value.ready
		}));
		function C(e, t) {
			l.value[t] = e;
		}
		let w = null;
		function T(e = !1) {
			let t = i.options.findIndex((e) => e.value === i.modelValue), n = l.value[t];
			if (!n) {
				v.value = {
					left: 0,
					width: 0,
					ready: !1,
					animate: !1
				};
				return;
			}
			v.value = {
				left: n.offsetLeft,
				width: n.offsetWidth,
				ready: !0,
				animate: e
			}, !e && typeof requestAnimationFrame < "u" && (w != null && cancelAnimationFrame(w), w = requestAnimationFrame(() => {
				w = null, v.value = {
					...v.value,
					animate: !0
				};
			}));
		}
		function E(e) {
			let t = i.options.find((t) => t.value === e);
			!i.disabled && !t?.disabled && e !== i.modelValue && s("update:modelValue", e);
		}
		function D() {
			return i.options.map((e, t) => ({
				option: e,
				index: t
			})).filter(({ option: e }) => !e.disabled);
		}
		async function O(e) {
			let t = i.options[e];
			!t || t.disabled || i.disabled || (E(t.value), await u(), l.value[e]?.focus());
		}
		function k(e, t) {
			let n = D();
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			(e.key === "ArrowRight" || e.key === "ArrowDown") && (i = n[(r + 1) % n.length]), (e.key === "ArrowLeft" || e.key === "ArrowUp") && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), O(i.index));
		}
		let A = null;
		return m(async () => {
			await u(), T(), typeof ResizeObserver < "u" && c.value && (A = new ResizeObserver(() => T(!1)), A.observe(c.value));
		}), p(() => {
			A?.disconnect(), w != null && cancelAnimationFrame(w);
		}), S(() => i.modelValue, async () => {
			await u(), T(!0);
		}), S(() => i.options, async () => {
			await u(), T(!1);
		}, { deep: !0 }), (n, r) => (h(), a("div", {
			ref_key: "rootEl",
			ref: c,
			class: d(["share-multi-toggle", {
				"share-multi-toggle--block": t.block,
				"share-multi-toggle--disabled": t.disabled
			}]),
			role: "radiogroup",
			"aria-label": t.ariaLabel || void 0
		}, [o("span", {
			class: d(["share-multi-toggle__pill", {
				"share-multi-toggle__pill--neutral": b.value,
				"share-multi-toggle__pill--instant": !v.value.animate
			}]),
			style: f(x.value),
			"aria-hidden": "true"
		}, null, 6), (h(!0), a(e, null, _(t.options, (e, n) => (h(), a("button", {
			key: String(e.value),
			ref_for: !0,
			ref: (e) => C(e, n),
			type: "button",
			class: d(["share-multi-toggle__button", {
				"share-multi-toggle__button--active": e.value === t.modelValue,
				"share-multi-toggle__button--neutral": e.value === t.modelValue && e.value === t.neutralValue
			}]),
			role: "radio",
			"aria-checked": e.value === t.modelValue,
			tabindex: e.value === t.modelValue ? 0 : -1,
			disabled: t.disabled || e.disabled,
			onClick: (t) => E(e.value),
			onKeydown: (e) => k(e, n)
		}, y(e.label), 43, L))), 128))], 10, ee));
	}
}, [["__scopeId", "data-v-a0098670"]]), R = ["disabled", "aria-label"], z = /*#__PURE__*/ E({
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
		return (t, n) => (h(), a("button", {
			class: d(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [...n[1] ||= [o("span", {
			class: "share-remove-button__cross",
			"aria-hidden": "true"
		}, null, -1)]], 10, R));
	}
}, [["__scopeId", "data-v-f27183c3"]]), ne = { class: "share-section-label__text" }, B = {
	key: 0,
	class: "share-section-label__actions"
}, V = /*#__PURE__*/ E({
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
		let t = e, r = n(() => {
			let e = {
				left: "flex-start",
				center: "center",
				right: "flex-end"
			};
			return t.align && e[t.align] ? { justifyContent: e[t.align] } : {};
		});
		return (t, n) => (h(), a("div", {
			class: d(["share-section-label", { "share-section-label--border": e.border }]),
			style: f(r.value)
		}, [o("span", ne, [v(t.$slots, "default", {}, () => [c(y(e.title), 1)], !0)]), t.$slots.actions ? (h(), a("span", B, [v(t.$slots, "actions", {}, void 0, !0)])) : i("", !0)], 6));
	}
}, [["__scopeId", "data-v-56c925a7"]]), re = ["aria-label"], ie = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], ae = ["src"], oe = /*#__PURE__*/ E({
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
	setup(t, { expose: r, emit: s }) {
		let c = t, l = s, b = g(null), x = g([]), C = g({
			left: 0,
			width: 0,
			ready: !1
		}), w = n(() => ({
			transform: `translateX(${C.value.left}px)`,
			width: `${C.value.width}px`,
			opacity: +!!C.value.ready
		}));
		function T(e, t) {
			x.value[t] = e;
		}
		function E(e) {
			let t = c.tabs.find((t) => t.key === e);
			t && !t.disabled && e !== c.modelValue && l("update:modelValue", e);
		}
		async function D(e) {
			let t = c.tabs[e];
			!t || t.disabled || (E(t.key), await u(), x.value[e]?.focus());
		}
		function O(e, t) {
			let n = c.tabs.map((e, t) => ({
				tab: e,
				index: t
			})).filter(({ tab: e }) => !e.disabled);
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			e.key === "ArrowRight" && (i = n[(r + 1) % n.length]), e.key === "ArrowLeft" && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), D(i.index));
		}
		function k() {
			let e = c.tabs.findIndex((e) => e.key === c.modelValue), t = x.value[e];
			if (!t) {
				C.value = {
					left: 0,
					width: 0,
					ready: !1
				};
				return;
			}
			C.value = {
				left: t.offsetLeft,
				width: t.offsetWidth,
				ready: !0
			};
		}
		let A = null;
		return m(() => {
			u(k), typeof ResizeObserver < "u" && b.value && (A = new ResizeObserver(k), A.observe(b.value));
		}), p(() => A?.disconnect()), S(() => c.modelValue, () => u(k)), S(() => c.tabs, () => u(k), { deep: !0 }), r({ updateUnderline: k }), (n, r) => (h(), a("nav", {
			ref_key: "rootElement",
			ref: b,
			class: "share-sliding-tabs",
			role: "tablist",
			"aria-label": t.ariaLabel || void 0
		}, [(h(!0), a(e, null, _(t.tabs, (e, r) => (h(), a("button", {
			id: e.id,
			key: String(e.key),
			ref_for: !0,
			ref: (e) => T(e, r),
			class: d(["share-sliding-tabs__tab", { "share-sliding-tabs__tab--active": t.modelValue === e.key }]),
			type: "button",
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			"aria-controls": e.panelId,
			tabindex: t.modelValue === e.key ? 0 : -1,
			disabled: e.disabled,
			onClick: (t) => E(e.key),
			onKeydown: (e) => O(e, r)
		}, [v(n.$slots, "icon", { tab: e }, () => [e.icon || e.svg ? (h(), a("img", {
			key: 0,
			class: "share-sliding-tabs__icon",
			src: e.icon || e.svg,
			alt: "",
			"aria-hidden": "true"
		}, null, 8, ae)) : i("", !0)], !0), o("span", null, y(e.title), 1)], 42, ie))), 128)), o("span", {
			class: "share-sliding-tabs__underline",
			style: f(w.value),
			"aria-hidden": "true"
		}, null, 4)], 8, re));
	}
}, [["__scopeId", "data-v-28aae1df"]]), se = [
	"aria-checked",
	"aria-label",
	"disabled"
], ce = {
	key: 0,
	class: "share-toggle-switch__text"
}, le = /*#__PURE__*/ E({
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
		function s() {
			n.disabled || r("update:modelValue", !n.modelValue);
		}
		return (t, n) => (h(), a("button", {
			class: d(["share-toggle-switch", { "share-toggle-switch--active": e.modelValue }]),
			type: "button",
			role: "switch",
			"aria-checked": e.modelValue,
			"aria-label": e.ariaLabel || e.label || void 0,
			disabled: e.disabled,
			onClick: s
		}, [n[0] ||= o("span", {
			class: "share-toggle-switch__track",
			"aria-hidden": "true"
		}, [o("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (h(), a("span", ce, [v(t.$slots, "default", {}, () => [c(y(e.label), 1)], !0)])) : i("", !0)], 10, se));
	}
}, [["__scopeId", "data-v-828a23d7"]]), ue = {
	key: 0,
	class: "share-editor-panel__title"
}, de = /*#__PURE__*/ E({
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
		return (t, n) => (h(), a("div", { class: d(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (h(), a("div", ue, [v(t.$slots, "title", {}, () => [c(y(e.title), 1)], !0)])) : i("", !0), v(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-055dcd8d"]]), fe = { class: "share-editor-section-title" }, pe = { class: "share-editor-section-title__text" }, me = {
	key: 0,
	class: "share-editor-section-title__actions"
}, H = /*#__PURE__*/ E({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (h(), a("div", fe, [o("span", pe, [v(t.$slots, "default", {}, () => [c(y(e.title), 1)], !0)]), t.$slots.actions ? (h(), a("span", me, [v(t.$slots, "actions", {}, void 0, !0)])) : i("", !0)]));
	}
}, [["__scopeId", "data-v-03237796"]]), U = { class: "share-editor-section" }, he = /*#__PURE__*/ E({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (h(), a("section", U, [e.title || t.$slots.title ? (h(), r(H, {
			key: 0,
			title: e.title
		}, s({ _: 2 }, [t.$slots.title ? {
			name: "default",
			fn: C(() => [v(t.$slots, "title", {}, void 0, !0)]),
			key: "0"
		} : void 0, t.$slots.actions ? {
			name: "actions",
			fn: C(() => [v(t.$slots, "actions", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, ["title"])) : i("", !0), v(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-6a56d656"]]), ge = {}, _e = { class: "share-editor-total" };
function ve(e, t) {
	return h(), a("div", _e, [v(e.$slots, "default", {}, void 0, !0)]);
}
var ye = /*#__PURE__*/ E(ge, [["render", ve], ["__scopeId", "data-v-72dfd940"]]);
//#endregion
//#region src/composables/useFullscreenViewportHeight.js
function be(e = .94) {
	let t = g(`${Math.round(e * 100)}dvh`);
	function n() {
		if (typeof window > "u") return;
		let n = window.visualViewport?.height || window.innerHeight;
		t.value = `${Math.floor(n * e)}px`;
	}
	return m(() => {
		n(), window.addEventListener("resize", n), window.visualViewport?.addEventListener("resize", n);
	}), p(() => {
		window.removeEventListener("resize", n), window.visualViewport?.removeEventListener("resize", n);
	}), t;
}
//#endregion
//#region src/internal/overlayStack.js
var W = [], G = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", K = 0, xe = "";
function Se(e = Symbol("share-overlay")) {
	return W.push(e), e;
}
function Ce(e) {
	let t = W.lastIndexOf(e);
	t >= 0 && W.splice(t, 1);
}
function we(e) {
	return W.at(-1) === e;
}
function Te(e) {
	e && ([...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")].find((e) => e.getClientRects().length > 0) || e).focus?.({ preventScroll: !0 });
}
function Ee(e, t) {
	if (e.key !== "Tab" || !t) return;
	let n = [...t.querySelectorAll(G)].filter((e) => e.getClientRects().length > 0);
	if (!n.length) {
		e.preventDefault(), t.focus?.({ preventScroll: !0 });
		return;
	}
	let r = n[0], i = n.at(-1);
	e.shiftKey && (document.activeElement === r || !t.contains(document.activeElement)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || !t.contains(document.activeElement)) && (e.preventDefault(), r.focus());
}
function De(e) {
	e instanceof HTMLElement && e.isConnected && e.focus({ preventScroll: !0 });
}
function Oe() {
	if (typeof document > "u") return () => {};
	K === 0 && (xe = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden"), K += 1;
	let e = !1;
	return () => {
		e || (e = !0, K = Math.max(0, K - 1), K === 0 && (document.documentElement.style.overflow = xe));
	};
}
var q = /* @__PURE__ */ new WeakMap();
function ke(e, { blur: t = "8px", duration: n = "300ms" } = {}) {
	if (!e) return () => {};
	let r = q.get(e);
	r || (r = {
		count: 0,
		filter: e.style.filter,
		transition: e.style.transition
	}, q.set(e, r)), r.count += 1, e.style.transition = `filter ${n} ease`, e.style.filter = `blur(${t})`;
	let i = !1;
	return () => {
		i || (i = !0, r.count = Math.max(0, r.count - 1), !(r.count > 0) && (e.style.filter = r.filter, e.style.transition = r.transition, q.delete(e)));
	};
}
//#endregion
//#region src/components/overlay/AppModal.vue
var Ae = ["aria-label"], je = {
	key: 0,
	class: "am-handle"
}, Me = ["aria-label"], Ne = () => window.innerWidth <= 640, J = 260, Y = 280, X = "cubic-bezier(0.32, 0.72, 0, 1)", Pe = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function Z(e) {
	e.focus({ preventScroll: !0 });
}
var Q = /*#__PURE__*/ E({
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
	setup(e, { expose: s, emit: c }) {
		let l = e, _ = c, y = g(null), x = g(null), S = be(), C = n(() => typeof l.width == "number" ? `${l.width}px` : l.width || "480px"), w = g(!1), E = g(0), D = g(0), O = g(0), k = !1, A = null, j = !1, M = () => {}, N = Symbol("app-modal"), P = typeof document < "u" ? document.activeElement : null;
		function F(e) {
			if (!we(N)) return;
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
			let t = [...x.value?.querySelectorAll(Pe) || []].filter((e) => e.getClientRects().length > 0);
			if (!t.length) {
				e.preventDefault(), x.value?.focus();
				return;
			}
			let n = t[0], r = t.at(-1);
			e.shiftKey && (document.activeElement === n || !x.value?.contains(document.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (document.activeElement === r || !x.value?.contains(document.activeElement)) && (e.preventDefault(), n.focus());
		}
		function I() {
			let e = y.value, t = x.value;
			!e || !t || (e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", Ne() ? t.style.transform = "translateY(100%)" : (t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					let n = "cubic-bezier(0, 0, 0.4, 1)", r = `opacity ${J}ms ${n}, backdrop-filter ${J}ms ${n}, -webkit-backdrop-filter ${J}ms ${n}`;
					e.style.transition = r, e.style.opacity = "1", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", Ne() ? (t.style.transition = `transform ${J}ms ${X}`, t.style.transform = "translateY(0)") : (t.style.transition = `transform ${J}ms ${X}, opacity ${J}ms ${n}`, t.style.transform = "none", t.style.opacity = "1"), setTimeout(() => {
						k || (e.style.transition = "", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", t.style.transition = "", t.style.transform = "", t.style.opacity = "", _("opened"));
					}, 310);
				});
			}));
		}
		function ee() {
			let e = y.value, t = x.value;
			if (!e || !t) {
				A = setTimeout(() => {
					k || _("close");
				}, 0);
				return;
			}
			let n = `opacity ${Y}ms ease, backdrop-filter ${Y}ms ease, -webkit-backdrop-filter ${Y}ms ease`;
			e.style.transition = n, e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", Ne() ? (t.style.transition = `transform ${Y}ms ${X}`, t.style.transform = "translateY(100%)") : (t.style.transition = `transform ${Y}ms ease, opacity ${Y}ms ease`, t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), A = setTimeout(() => {
				k || _("close");
			}, 300);
		}
		function L() {
			!l.dismissible || j || (j = !0, ee());
		}
		s({ requestClose: L });
		function te(e) {
			if (!l.dismissible) return;
			D.value = e.touches[0].clientY;
			let t = e.target instanceof Element ? e.target : null;
			for (; t && t !== x.value;) {
				let e = window.getComputedStyle(t);
				if (/(auto|scroll)/.test(e.overflowY) && t.scrollHeight > t.clientHeight) break;
				t = t.parentElement;
			}
			O.value = t?.scrollTop || x.value?.scrollTop || 0, w.value = !1, E.value = 0;
		}
		function R(e) {
			if (!l.dismissible) return;
			let t = e.touches[0].clientY - D.value;
			if (!w.value) {
				if (t > 8 && O.value <= 0) w.value = !0;
				else return;
			}
			e.preventDefault(), E.value = Math.max(0, t);
			let n = x.value, r = y.value;
			n && (n.style.transition = "none", n.style.transform = `translateY(${E.value}px)`), r && (r.style.transition = "none", r.style.opacity = String(Math.max(0, 1 - E.value / 320)));
		}
		function z() {
			if (!w.value) return;
			w.value = !1;
			let e = x.value, t = y.value;
			E.value > 100 ? (e && (e.style.transition = `transform ${Y}ms ${X}`, e.style.transform = "translateY(100%)"), t && (t.style.transition = `opacity ${Y}ms ease`, t.style.opacity = "0"), A = setTimeout(() => {
				k || _("close");
			}, 300)) : (e && (e.style.transition = `transform ${Y}ms ${X}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), E.value = 0, setTimeout(() => {
				k || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330));
		}
		function ne() {
			if (!w.value) return;
			w.value = !1, E.value = 0;
			let e = x.value, t = y.value;
			e && (e.style.transition = `transform ${Y}ms ${X}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), setTimeout(() => {
				k || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330);
		}
		return m(() => {
			Se(N), M = Oe(), document.addEventListener("keydown", F), u(() => {
				I(), x.value?.contains(document.activeElement) || (x.value?.querySelector(Pe)?.focus(), x.value?.contains(document.activeElement) || x.value?.focus());
			});
		}), p(() => {
			Ce(N), M(), document.removeEventListener("keydown", F), clearTimeout(A), k = !0, P instanceof HTMLElement && P.isConnected && Z(P);
		}), (n, s) => (h(), r(t, { to: "body" }, [o("div", {
			ref_key: "overlay",
			ref: y,
			class: "am-overlay",
			style: f([e.zIndex === 3e3 ? {} : { zIndex: e.zIndex }, {
				"--am-fullscreen-height": b(S),
				"--am-width": C.value
			}]),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			onMousedown: T(L, ["self"])
		}, [o("div", {
			ref_key: "card",
			ref: x,
			class: d(["am-card", {
				"am-card-wide": e.wide,
				"am-card-extra-wide": e.extraWide,
				"am-card-full": e.fullscreen,
				"am-card-flush": e.flush
			}]),
			tabindex: "-1",
			onTouchstartPassive: te,
			onTouchmove: R,
			onTouchendPassive: z,
			onTouchcancelPassive: ne
		}, [
			e.showHandle ? (h(), a("div", je)) : i("", !0),
			e.showClose && !e.fullscreen ? (h(), a("button", {
				key: 1,
				class: "am-close",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: L
			}, "✕", 8, Me)) : i("", !0),
			v(n.$slots, "default", {}, void 0, !0)
		], 34)], 44, Ae)]));
	}
}, [["__scopeId", "data-v-ddded319"]]), $ = { class: "aem-shell" }, Fe = { class: "aem-heading" }, Ie = { class: "aem-title" }, Le = {
	key: 0,
	class: "aem-subtitle"
}, Re = {
	key: 0,
	class: "aem-header-actions"
}, ze = ["aria-label"], Be = {
	key: 0,
	class: "aem-footer"
}, Ve = /*#__PURE__*/ E({
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
		let t = g(null);
		function n() {
			t.value?.requestClose();
		}
		return (s, c) => (h(), r(Q, {
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
			onClose: c[0] ||= (e) => s.$emit("close"),
			onOpened: c[1] ||= (e) => s.$emit("opened")
		}, {
			default: C(() => [o("section", $, [
				o("header", { class: d(["aem-header", { "aem-header-with-actions": !!s.$slots["header-actions"] }]) }, [
					c[3] ||= o("span", {
						class: "aem-handle",
						"aria-hidden": "true"
					}, null, -1),
					o("div", Fe, [v(s.$slots, "title", {}, () => [o("h2", Ie, y(e.title), 1), e.subtitle ? (h(), a("span", Le, y(e.subtitle), 1)) : i("", !0)], !0)]),
					s.$slots["header-actions"] ? (h(), a("div", Re, [v(s.$slots, "header-actions", {}, void 0, !0)])) : i("", !0),
					e.showClose ? (h(), a("button", {
						key: 1,
						class: "aem-close",
						type: "button",
						"aria-label": e.closeLabel,
						onClick: n
					}, [...c[2] ||= [o("svg", {
						viewBox: "0 0 16 16",
						fill: "none",
						width: "16",
						height: "16",
						"aria-hidden": "true"
					}, [o("path", {
						d: "M4 4l8 8M12 4l-8 8",
						stroke: "currentColor",
						"stroke-width": "1.6",
						"stroke-linecap": "round"
					})], -1)]], 8, ze)) : i("", !0)
				], 2),
				o("div", { class: d(["aem-body", {
					"aem-body-flush": !e.padded,
					"aem-body-no-scroll": !e.bodyScroll
				}]) }, [v(s.$slots, "default", {}, void 0, !0)], 2),
				s.$slots.footer ? (h(), a("footer", Be, [v(s.$slots, "footer", {}, void 0, !0)])) : i("", !0)
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
}, [["__scopeId", "data-v-0a15c618"]]), He = {
	key: 0,
	class: "cd-message"
}, Ue = { class: "cd-actions" }, We = ["disabled"], Ge = ["disabled"], Ke = /*#__PURE__*/ E({
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
		let s = e, c = t, l = n(() => s.open === null || s.open), u = n(() => s.confirmText || s.confirmLabel), f = n(() => s.cancelText || s.cancelLabel), p = n(() => s.confirmKind || s.variant);
		function m() {
			s.open !== null && c("update:open", !1);
		}
		function g() {
			s.loading || (c("cancel"), m());
		}
		function _() {
			s.loading || (c("confirm"), m());
		}
		return (t, n) => l.value ? (h(), r(Ve, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: g
		}, {
			footer: C(() => [o("div", Ue, [o("button", {
				type: "button",
				class: "cd-btn-cancel",
				disabled: e.loading,
				onClick: g
			}, y(f.value), 9, We), o("button", {
				type: "button",
				class: d(["cd-btn-confirm", `cd-btn--${p.value}`]),
				disabled: e.loading,
				onClick: _
			}, y(e.loading ? e.loadingLabel : u.value), 11, Ge)])]),
			default: C(() => [e.message ? (h(), a("div", He, y(e.message), 1)) : i("", !0)]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : i("", !0);
	}
}, [["__scopeId", "data-v-2819b01e"]]), qe = {
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
		return (t, n) => e.open ? (h(), r(Q, {
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
			default: C(() => [v(t.$slots, "default")]),
			_: 3
		}, 8, [
			"width",
			"z-index",
			"aria-label",
			"dismissible",
			"escape-blurs-input"
		])) : i("", !0);
	}
};
//#endregion
//#region src/composables/useContainerMorph.js
function Je({ open: e = 420, close: t = 300 } = {}) {
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
	], a = g(!1), o = g(!1), s = null;
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
//#region src/composables/useMediaQuery.js
function Ye(e) {
	let t = g(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return m(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), p(() => n?.removeEventListener?.("change", r)), t;
}
function Xe(e = 768) {
	return Ye(`(max-width: ${e}px)`);
}
//#endregion
//#region src/components/overlay/MorphSheet.vue
var Ze = ["aria-label"], Qe = { class: "ms-head-content" }, $e = ["aria-label"], et = 320, tt = 260, nt = "8px", rt = /*#__PURE__*/ E({
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
	setup(e, { expose: s, emit: c }) {
		let l = e, _ = c, y = Xe(), C = x(), w = n(() => l.mode === "add"), E = n(() => l.showClose === null ? !!C.head : l.showClose), D = n(() => l.nav ? l.nav.view.value : "detail"), O = n(() => l.nav ? l.nav.detailStyle.value : null), k = n(() => l.nav ? l.nav.subStyle.value : null), A = n(() => !!l.nav && D.value !== "detail"), j = g(null), M = g(null), N = g(null), P = g(null), F = g(null), I = g(null), ee = g(!1), L = g(!1), te = g(!1), R = g(!1), z = g(!1), { EASE: ne, visible: B, morphing: V, playClose: re, playOpen: ie } = Je(), ae = () => y.value ? "0px" : "18px", oe = n(() => ({
			"--ms-w": `${l.width}px`,
			"--ms-body-w": `${l.width}px`,
			"--ms-frame": l.frameColor || void 0
		}));
		function se() {
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
		function ce() {
			if (l.nav && D.value !== "detail") {
				l.nav.backToDetail(), _("back");
				return;
			}
			if (z.value = !1, Z(!1), w.value) {
				te.value = !1, B.value = !1, setTimeout(() => _("close"), 320);
				return;
			}
			re(j.value, se(), {
				fromRadius: ae(),
				toRadius: l.originRadius
			}, () => _("close"));
		}
		function le() {
			L.value = !0, z.value = !1, B.value = !1, Z(!1), setTimeout(() => _("close"), 220);
		}
		let ue = Symbol("morph-sheet"), de = typeof document < "u" ? document.activeElement : null;
		function fe(e) {
			if (we(ue)) {
				if (e.key === "Escape") {
					ce();
					return;
				}
				Ee(e, j.value);
			}
		}
		function pe(e) {
			let t = e?.firstElementChild;
			return t ? t.scrollHeight : e?.scrollHeight || 0;
		}
		function me() {
			return Math.floor(window.innerHeight * .9) - (M.value?.offsetHeight || 0) - (N.value?.offsetHeight || 0);
		}
		function H(e) {
			if (y.value || !P.value || V.value) return;
			let t = l.nav ? l.nav.pos.value : 0, n = pe(F.value), r = I.value ? pe(I.value) : n, i = n * (1 - t) + r * t, a = Math.min(i, Math.max(120, me()));
			P.value.style.transition = e ? `height ${et}ms ${ne}` : "none", P.value.style.height = `${a}px`;
		}
		let U = null;
		function he() {
			U && (U.disconnect(), [F.value?.firstElementChild, I.value?.firstElementChild].forEach((e) => {
				e && U.observe(e);
			}));
		}
		function ge() {
			V.value || l.nav && l.nav.animating.value || ve || H(!1);
		}
		l.nav && (S(() => l.nav.pos.value, () => H(l.nav.animating.value)), S(() => l.nav.view.value, (e, t) => u(() => {
			he(), e !== "detail" && t === "detail" && I.value && (I.value.offsetWidth, l.nav.enterSub()), l.nav.animating.value || H(!1);
		})));
		let _e = g(0), ve = !1, ye = 0, be = 0, W = null, G = 0, K = null, xe = 0, q = 0, Ae = 0;
		function je(e) {
			!y.value || V.value || (ye = e.touches[0].clientX, be = e.touches[0].clientY, K = e.target, W = null);
		}
		function Me() {
			let e = K;
			for (; e && e !== j.value;) {
				if (e.scrollHeight > e.clientHeight + 1) {
					let t = getComputedStyle(e).overflowY;
					if ((t === "auto" || t === "scroll") && e.scrollTop > 0) return !1;
				}
				e = e.parentElement;
			}
			return !0;
		}
		function Ne(e) {
			if (!y.value || V.value || W === "scroll") return;
			let t = e.touches[0].clientX - ye, n = e.touches[0].clientY - be;
			if (W === null) {
				if (l.showBack && l.nav && t > 8 && Math.abs(t) > Math.abs(n)) {
					W = "back", ve = !0, G = t, xe = e.touches[0].clientX, q = e.timeStamp, Ae = 0, l.nav.dragStart(P.value?.clientWidth || window.innerWidth);
					return;
				}
				if (n > 6 && Me() && Math.abs(n) >= Math.abs(t)) W = "drag";
				else if (Math.abs(n) > 6 || Math.abs(t) > 6) {
					W = "scroll";
					return;
				} else return;
			}
			if (W === "back") {
				G = Math.max(0, t), e.cancelable && e.preventDefault();
				let n = e.touches[0].clientX, r = e.timeStamp;
				r > q && (Ae = (n - xe) / (r - q)), xe = n, q = r, l.nav.dragMove(G);
				return;
			}
			if (W !== "drag") return;
			e.cancelable && e.preventDefault(), _e.value = Math.max(0, n);
			let r = j.value;
			r && (r.style.transition = "none", r.style.transform = `translateY(${_e.value}px)`);
		}
		function J() {
			if (W === "back") {
				ve = !1, W = null, l.nav.dragEnd(G, Ae), G = 0, Ae = 0;
				return;
			}
			if (W !== "drag") {
				W = null;
				return;
			}
			W = null;
			let e = j.value;
			if (_e.value > 120) {
				Y();
				return;
			}
			_e.value = 0, e && (e.style.transition = `transform .26s ${ne}`, e.style.transform = "translateY(0)");
		}
		function Y() {
			let e = j.value;
			e && (e.style.transition = `transform ${tt}ms ${ne}`, e.style.transform = `translateY(${window.innerHeight}px)`), B.value = !1, z.value = !1, Re(), Z(!1), setTimeout(() => _("close"), tt);
		}
		let X = () => {};
		function Pe() {
			return typeof l.backgroundTarget == "string" ? document.querySelector(l.backgroundTarget) : l.backgroundTarget instanceof Element ? l.backgroundTarget : null;
		}
		function Z(e) {
			X(), X = () => {}, !(!e || y.value || !l.blurBackground) && (X = ke(Pe(), { blur: nt }));
		}
		let Q = "", $ = "", Fe = !1;
		function Ie() {
			let e = l.originEl;
			e && (Q = e.style.opacity, $ = e.style.transition);
		}
		function Le(e) {
			let t = l.originEl;
			t && (t.style.opacity = e ? "0" : Q);
		}
		function Re() {
			let e = l.originEl;
			if (!e) return;
			Fe = !0;
			let t = $ && $ !== "none" ? `${$}, ` : "";
			e.style.transition = `${t}opacity ${tt}ms ease`, e.style.opacity = "0", requestAnimationFrame(() => {
				e.style.opacity = Q;
			}), setTimeout(() => {
				e.style.opacity = Q, e.style.transition = $, Fe = !1;
			}, 280);
		}
		let ze = () => {};
		function Be() {
			V.value || (y.value && P.value ? P.value.style.height = "" : H(!1));
		}
		return m(async () => {
			Se(ue), ze = Oe(), typeof ResizeObserver < "u" && (U = new ResizeObserver(ge)), await u(), H(!1), he(), ee.value = !0, w.value ? (B.value = !0, requestAnimationFrame(() => {
				te.value = !0, R.value = !0;
			})) : (Ie(), Le(!0), ie(j.value, l.originRect, {
				fromRadius: l.originRadius,
				toRadius: ae()
			}), requestAnimationFrame(() => {
				R.value = !0;
			})), Z(!0), setTimeout(() => {
				z.value = !0, H(!1), Te(j.value);
			}, 20), document.addEventListener("keydown", fe), window.addEventListener("resize", Be);
		}), p(() => {
			Ce(ue), ze(), Z(!1), !w.value && !Fe && Le(!1), document.removeEventListener("keydown", fe), window.removeEventListener("resize", Be), U?.disconnect(), De(de);
		}), s({
			close: ce,
			finishNow: le
		}), (n, s) => (h(), r(t, { to: "body" }, [o("div", {
			class: d(["ms-overlay", { visible: b(B) }]),
			onClick: T(ce, ["self"])
		}, [o("div", {
			ref_key: "panelEl",
			ref: j,
			class: d(["ms-sheet", {
				shown: ee.value,
				closing: L.value,
				entered: te.value,
				padded: R.value,
				"add-sheet": w.value,
				"ms-framed": e.frameColor
			}]),
			style: f(oe.value),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			tabindex: "-1",
			onTouchstartPassive: je,
			onTouchmove: Ne,
			onTouchend: J,
			onTouchcancel: J
		}, [
			s[0] ||= o("div", { class: "ms-grab" }, null, -1),
			n.$slots.head ? (h(), a("div", {
				key: 0,
				ref_key: "headEl",
				ref: M,
				class: "ms-head"
			}, [o("div", Qe, [v(n.$slots, "head", {}, void 0, !0)]), E.value ? (h(), a("button", {
				key: 0,
				class: "ms-x",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: ce
			}, "✕", 8, $e)) : i("", !0)], 512)) : i("", !0),
			o("div", {
				ref_key: "bodyEl",
				ref: P,
				class: "ms-body"
			}, [o("div", {
				ref_key: "detailCellEl",
				ref: F,
				class: "ms-cell",
				style: f(O.value)
			}, [v(n.$slots, "detail", { revealed: z.value }, () => [v(n.$slots, "default", { revealed: z.value }, void 0, !0)], !0)], 4), A.value ? (h(), a("div", {
				key: 0,
				ref_key: "subCellEl",
				ref: I,
				class: "ms-cell",
				style: f(k.value)
			}, [v(n.$slots, "sub", {}, void 0, !0)], 4)) : i("", !0)], 512),
			e.showFoot && n.$slots.foot ? (h(), a("div", {
				key: 1,
				ref_key: "footEl",
				ref: N,
				class: "ms-foot"
			}, [v(n.$slots, "foot", {}, void 0, !0)], 512)) : i("", !0)
		], 46, Ze)], 2)]));
	}
}, [["__scopeId", "data-v-e1ec346c"]]), it = { class: "form-actions" }, at = ["disabled"], ot = ["disabled"], st = /*#__PURE__*/ E({
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
		return (t, n) => (h(), a("div", it, [o("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, y(e.cancelText), 9, at), o("button", {
			type: "button",
			class: "form-actions__submit",
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, y(e.loading ? e.loadingText : e.submitText), 9, ot)]));
	}
}, [["__scopeId", "data-v-4749c971"]]), ct = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], lt = /*#__PURE__*/ E({
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
		let n = e, r = g(null);
		return m(() => {
			n.autofocus && r.value?.focus();
		}), t({ focus: () => r.value?.focus() }), (t, n) => (h(), a("input", {
			ref_key: "inputRef",
			ref: r,
			class: d(["form-text-input", {
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
			onKeydown: n[2] ||= w((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, ct));
	}
}, [["__scopeId", "data-v-e2d6bc8e"]]), ut = {
	key: 0,
	class: "tpd-message"
}, dt = {
	key: 1,
	class: "tpd-label"
}, ft = /*#__PURE__*/ E({
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
		let o = e, s = t, c = n(() => o.open === null || o.open), d = n(() => o.confirmText || o.confirmLabel), f = n(() => o.cancelText || o.cancelLabel), p = g(o.value || o.initial);
		S(() => o.value, (e) => {
			p.value = e;
		}), S(() => o.open, (e) => {
			e && u(() => {
				p.value = o.initial || o.value;
			});
		});
		function m() {
			o.open !== null && s("update:open", !1);
		}
		function _() {
			o.loading || (s("cancel"), m());
		}
		function v() {
			let e = p.value.trim();
			e && !o.loading && (s("confirm", e), s("submit", e), m());
		}
		return (t, n) => c.value ? (h(), r(Ve, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: _
		}, {
			footer: C(() => [l(st, {
				"submit-text": d.value,
				"cancel-text": f.value,
				"loading-text": e.loadingLabel,
				loading: e.loading,
				"can-submit": !!p.value.trim(),
				onCancel: _,
				onSubmit: v
			}, null, 8, [
				"submit-text",
				"cancel-text",
				"loading-text",
				"loading",
				"can-submit"
			])]),
			default: C(() => [
				e.message ? (h(), a("div", ut, y(e.message), 1)) : i("", !0),
				e.label ? (h(), a("label", dt, y(e.label), 1)) : i("", !0),
				l(lt, {
					value: p.value,
					placeholder: e.placeholder,
					maxlength: e.maxlength,
					autofocus: "",
					"onUpdate:value": n[0] ||= (e) => p.value = e,
					onEnter: v
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
		])) : i("", !0);
	}
}, [["__scopeId", "data-v-ff9d61bb"]]), pt = { class: "form-field-label" }, mt = {
	key: 0,
	class: "form-field-hint"
}, ht = /*#__PURE__*/ E({
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
		return (t, n) => (h(), a("div", { class: d(["form-field", { "form-field--vertical": e.vertical }]) }, [o("span", pt, [c(y(e.label), 1), e.hint ? (h(), a("span", mt, y(e.hint), 1)) : i("", !0)]), v(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-01093950"]]), gt = { class: "fn-wrap" }, _t = [
	"value",
	"min",
	"max"
], vt = /*#__PURE__*/ E({
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
		function s(e) {
			r("change", i(parseInt(e.target.value) || 0));
		}
		function c(e) {
			r("change", i((parseInt(n.value) || 0) + e));
		}
		return (t, n) => (h(), a("div", gt, [
			o("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[0] ||= T((e) => c(-1), ["stop"])
			}, "−"),
			o("input", {
				class: "fn-input",
				type: "number",
				value: e.value,
				min: e.min,
				max: e.max,
				onChange: s
			}, null, 40, _t),
			o("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[1] ||= T((e) => c(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-df9f8db7"]]), yt = ["value"], bt = /*#__PURE__*/ E({
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
		let r = e, i = n, o = g(null);
		function s(e) {
			let t = e.target.options[e.target.selectedIndex], n = t && "_value" in t ? t._value : e.target.value;
			i("update:value", n), i("change", n);
		}
		return m(() => {
			r.autofocus && o.value?.focus();
		}), t({ focus: () => o.value?.focus() }), (t, n) => (h(), a("select", {
			ref_key: "selectRef",
			ref: o,
			class: "form-select",
			value: e.value,
			onChange: s
		}, [v(t.$slots, "default", {}, void 0, !0)], 40, yt));
	}
}, [["__scopeId", "data-v-3eb4c36d"]]), xt = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], St = /*#__PURE__*/ E({
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
		return (t, n) => (h(), a("textarea", {
			class: "form-textarea",
			value: e.value,
			placeholder: e.placeholder,
			rows: e.rows,
			maxlength: e.maxlength,
			onInput: n[0] ||= (e) => t.$emit("update:value", e.target.value)
		}, null, 40, xt));
	}
}, [["__scopeId", "data-v-31024142"]]), Ct = 4;
function wt(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function Tt(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = g(!1), o = g(null), s = g(null), c = g(-1), l = g(null), u = g(-1), d = g(!1), f = null, m = 0, h = 0, _ = null, v = 0, y = null;
	function b(e, t, n, r) {
		if (e.button !== void 0 && e.button !== 0) return;
		let i = e.currentTarget.closest("[data-sortable-key]");
		i && (_ = {
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
			if (!_) return;
			let t = e.clientX - _.x, n = e.clientY - _.y;
			if (Math.hypot(t, n) < Ct) return;
			S();
		}
		C(e.clientX, e.clientY), w(e.clientX, e.clientY);
	}
	function S() {
		let { sourceEl: e, x: t, y: n, item: r, group: i, index: d } = _, p = e.getBoundingClientRect();
		m = t - p.left, h = n - p.top;
		let g = e.cloneNode(!0), v = g;
		if (e.tagName === "TR") {
			let t = Array.from(e.children).map((e) => e.getBoundingClientRect().width);
			Array.from(g.children).forEach((e, n) => {
				e.style.width = t[n] + "px", e.style.minWidth = t[n] + "px", e.style.maxWidth = t[n] + "px";
			});
			let n = document.createElement("table"), r = document.createElement("tbody");
			r.appendChild(g), n.appendChild(r), n.style.borderCollapse = "separate", n.style.tableLayout = "fixed", v = n;
		}
		Object.assign(v.style, {
			position: "fixed",
			top: "0",
			left: "0",
			width: p.width + "px",
			height: p.height + "px",
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
		f && (f.style.transform = `translate3d(${e - m}px, ${t - h}px, 0)`);
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
		document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", T), document.removeEventListener("pointercancel", T), window.removeEventListener("keydown", E), f &&= (f.remove(), null), document.body.classList.remove("sortable-dragging"), a.value = !1, o.value = null, s.value = null, c.value = -1, l.value = null, u.value = -1, _ = null, e && (v = Date.now() + 250, d.value = !0, clearTimeout(y), y = setTimeout(() => {
			d.value = !1, y = null;
		}, 250));
	}
	function O() {
		return Date.now() < v;
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
	return p(() => {
		D(), clearTimeout(y), d.value = !1;
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
var Et = "cubic-bezier(.2, 0, 0, 1)", Dt = 320;
function Ot() {
	let e = g("detail"), t = g(0), r = g(!1), i = 1, a = null, o = n(() => r.value ? `transform ${Dt}ms ${Et}` : "none"), s = n(() => ({
		transform: `translateX(${(-t.value * 100).toFixed(3)}%)`,
		transition: o.value
	})), c = n(() => ({
		transform: `translateX(${((1 - t.value) * 100).toFixed(3)}%)`,
		transition: o.value
	}));
	function l(e, n) {
		clearTimeout(a), r.value = !0, t.value = e, a = setTimeout(() => {
			r.value = !1, n && n();
		}, 330);
	}
	function u(n) {
		e.value === "detail" && (r.value = !1, t.value = 0, e.value = n);
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
		clearTimeout(a), r.value = !1, i = e || 1;
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
		animating: r,
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
export { j as AddButton, Q as AppModal, Ve as AppModalFrame, N as AppSlider, O as BaseTile, I as CompactCheckbox, Ke as ConfirmDialog, de as EditorPanel, he as EditorSection, H as EditorSectionTitle, ye as EditorTotal, st as FormActionButtons, ht as FormField, vt as FormNumberInput, bt as FormSelect, lt as FormTextInput, St as FormTextarea, qe as ModalShell, rt as MorphSheet, te as MultiToggle, ft as PromptDialog, ft as TextPromptDialog, z as RemoveButton, V as SectionLabel, oe as SlidingTabs, le as ToggleSwitch, wt as reorderByDrop, Z as restoreFocus, Je as useContainerMorph, be as useFullscreenViewportHeight, Xe as useIsMobile, Ye as useMediaQuery, Ot as useSheetSubpages, Tt as useSortable };
