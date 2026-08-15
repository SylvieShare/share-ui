import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createSlots as o, createTextVNode as s, nextTick as c, normalizeClass as l, normalizeStyle as u, onBeforeUnmount as d, onMounted as f, openBlock as p, ref as m, renderList as h, renderSlot as g, toDisplayString as _, watch as v, withCtx as y, withKeys as b, withModifiers as x } from "vue";
//#region \0plugin-vue:export-helper
var S = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, C = {
	key: 0,
	class: "base-tile-strip"
}, w = /*#__PURE__*/ S({
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
		let n = e, a = t(() => n.color || "var(--accent)");
		return (t, n) => (p(), i("div", {
			class: l(["base-tile", {
				"base-tile--interactive": e.interactive,
				"base-tile--tint": e.tint,
				"base-tile--framed": e.framed
			}]),
			style: u({ "--tile-color": a.value }),
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.strip ? (p(), i("span", C)) : r("", !0), g(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-81d15c1d"]]), T = [
	"disabled",
	"aria-label",
	"title"
], E = {
	key: 0,
	class: "share-add-button__text"
}, D = /*#__PURE__*/ S({
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
		return (t, n) => (p(), i("button", {
			class: l(["share-add-button", [`share-add-button--${e.variant}`, { "share-add-button--block": e.block }]]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			title: e.variant === "icon" && e.label || void 0,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [n[1] ||= a("span", {
			class: "share-add-button__plus",
			"aria-hidden": "true"
		}, "+", -1), e.variant === "icon" ? r("", !0) : (p(), i("span", E, [g(t.$slots, "default", {}, () => [s(_(e.label), 1)], !0)]))], 10, T));
	}
}, [["__scopeId", "data-v-2e1149d1"]]), O = [
	"value",
	"min",
	"max",
	"step",
	"disabled",
	"aria-label"
], k = /*#__PURE__*/ S({
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
	setup(e, { emit: n }) {
		let r = e, a = n, o = t(() => {
			let e = r.max - r.min;
			return e ? Math.max(0, Math.min(100, (r.modelValue - r.min) / e * 100)) : 0;
		}), s = t(() => ({ "--share-slider-percent": `${o.value}%` }));
		function c(e) {
			return Number(e.target.value);
		}
		function l(e) {
			a("update:modelValue", c(e));
		}
		function d(e) {
			a("change", c(e));
		}
		return (t, n) => (p(), i("input", {
			class: "share-slider",
			type: "range",
			value: e.modelValue,
			min: e.min,
			max: e.max,
			step: e.step,
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			style: u(s.value),
			onInput: l,
			onChange: d
		}, null, 44, O));
	}
}, [["__scopeId", "data-v-a4387b22"]]), A = [
	"disabled",
	"aria-label",
	"aria-checked"
], j = {
	key: 0,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, ee = /*#__PURE__*/ S({
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
		let n = e, o = t;
		function s() {
			n.disabled || o("update:modelValue", !n.modelValue);
		}
		return (t, n) => (p(), i("button", {
			type: "button",
			class: l(["share-compact-checkbox", { "share-compact-checkbox--checked": e.modelValue }]),
			disabled: e.disabled,
			"aria-label": e.label,
			"aria-checked": e.modelValue,
			role: "checkbox",
			onClick: x(s, ["stop"]),
			onPointerdown: n[0] ||= x(() => {}, ["stop"])
		}, [e.modelValue ? (p(), i("svg", j, [...n[1] ||= [a("path", {
			d: "M2.5 6.2l2.4 2.4 4.6-5",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, null, -1)]])) : r("", !0)], 42, A));
	}
}, [["__scopeId", "data-v-caeb1891"]]), te = ["aria-label"], ne = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], M = /*#__PURE__*/ S({
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
	setup(n, { emit: r }) {
		let o = n, s = r, g = m(null), y = m([]), b = m({
			left: 0,
			width: 0,
			ready: !1,
			animate: !1
		}), x = t(() => o.neutralValue !== void 0 && o.modelValue === o.neutralValue), S = t(() => ({
			transform: `translateX(${b.value.left}px)`,
			width: `${b.value.width}px`,
			opacity: +!!b.value.ready
		}));
		function C(e, t) {
			y.value[t] = e;
		}
		let w = null;
		function T(e = !1) {
			let t = o.options.findIndex((e) => e.value === o.modelValue), n = y.value[t];
			if (!n) {
				b.value = {
					left: 0,
					width: 0,
					ready: !1,
					animate: !1
				};
				return;
			}
			b.value = {
				left: n.offsetLeft,
				width: n.offsetWidth,
				ready: !0,
				animate: e
			}, !e && typeof requestAnimationFrame < "u" && (w != null && cancelAnimationFrame(w), w = requestAnimationFrame(() => {
				w = null, b.value = {
					...b.value,
					animate: !0
				};
			}));
		}
		function E(e) {
			let t = o.options.find((t) => t.value === e);
			!o.disabled && !t?.disabled && e !== o.modelValue && s("update:modelValue", e);
		}
		function D() {
			return o.options.map((e, t) => ({
				option: e,
				index: t
			})).filter(({ option: e }) => !e.disabled);
		}
		async function O(e) {
			let t = o.options[e];
			!t || t.disabled || o.disabled || (E(t.value), await c(), y.value[e]?.focus());
		}
		function k(e, t) {
			let n = D();
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			(e.key === "ArrowRight" || e.key === "ArrowDown") && (i = n[(r + 1) % n.length]), (e.key === "ArrowLeft" || e.key === "ArrowUp") && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), O(i.index));
		}
		let A = null;
		return f(async () => {
			await c(), T(), typeof ResizeObserver < "u" && g.value && (A = new ResizeObserver(() => T(!1)), A.observe(g.value));
		}), d(() => {
			A?.disconnect(), w != null && cancelAnimationFrame(w);
		}), v(() => o.modelValue, async () => {
			await c(), T(!0);
		}), v(() => o.options, async () => {
			await c(), T(!1);
		}, { deep: !0 }), (t, r) => (p(), i("div", {
			ref_key: "rootEl",
			ref: g,
			class: l(["share-multi-toggle", {
				"share-multi-toggle--block": n.block,
				"share-multi-toggle--disabled": n.disabled
			}]),
			role: "radiogroup",
			"aria-label": n.ariaLabel || void 0
		}, [a("span", {
			class: l(["share-multi-toggle__pill", {
				"share-multi-toggle__pill--neutral": x.value,
				"share-multi-toggle__pill--instant": !b.value.animate
			}]),
			style: u(S.value),
			"aria-hidden": "true"
		}, null, 6), (p(!0), i(e, null, h(n.options, (e, t) => (p(), i("button", {
			key: String(e.value),
			ref_for: !0,
			ref: (e) => C(e, t),
			type: "button",
			class: l(["share-multi-toggle__button", {
				"share-multi-toggle__button--active": e.value === n.modelValue,
				"share-multi-toggle__button--neutral": e.value === n.modelValue && e.value === n.neutralValue
			}]),
			role: "radio",
			"aria-checked": e.value === n.modelValue,
			tabindex: e.value === n.modelValue ? 0 : -1,
			disabled: n.disabled || e.disabled,
			onClick: (t) => E(e.value),
			onKeydown: (e) => k(e, t)
		}, _(e.label), 43, ne))), 128))], 10, te));
	}
}, [["__scopeId", "data-v-a0098670"]]), N = ["disabled", "aria-label"], P = /*#__PURE__*/ S({
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
		return (t, n) => (p(), i("button", {
			class: l(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [...n[1] ||= [a("span", {
			class: "share-remove-button__cross",
			"aria-hidden": "true"
		}, null, -1)]], 10, N));
	}
}, [["__scopeId", "data-v-f27183c3"]]), F = { class: "share-section-label__text" }, I = {
	key: 0,
	class: "share-section-label__actions"
}, L = /*#__PURE__*/ S({
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
		let n = e, o = t(() => {
			let e = {
				left: "flex-start",
				center: "center",
				right: "flex-end"
			};
			return n.align && e[n.align] ? { justifyContent: e[n.align] } : {};
		});
		return (t, n) => (p(), i("div", {
			class: l(["share-section-label", { "share-section-label--border": e.border }]),
			style: u(o.value)
		}, [a("span", F, [g(t.$slots, "default", {}, () => [s(_(e.title), 1)], !0)]), t.$slots.actions ? (p(), i("span", I, [g(t.$slots, "actions", {}, void 0, !0)])) : r("", !0)], 6));
	}
}, [["__scopeId", "data-v-56c925a7"]]), R = ["aria-label"], z = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], B = ["src"], V = /*#__PURE__*/ S({
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
	setup(n, { expose: o, emit: s }) {
		let y = n, b = s, x = m(null), S = m([]), C = m({
			left: 0,
			width: 0,
			ready: !1
		}), w = t(() => ({
			transform: `translateX(${C.value.left}px)`,
			width: `${C.value.width}px`,
			opacity: +!!C.value.ready
		}));
		function T(e, t) {
			S.value[t] = e;
		}
		function E(e) {
			let t = y.tabs.find((t) => t.key === e);
			t && !t.disabled && e !== y.modelValue && b("update:modelValue", e);
		}
		async function D(e) {
			let t = y.tabs[e];
			!t || t.disabled || (E(t.key), await c(), S.value[e]?.focus());
		}
		function O(e, t) {
			let n = y.tabs.map((e, t) => ({
				tab: e,
				index: t
			})).filter(({ tab: e }) => !e.disabled);
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			e.key === "ArrowRight" && (i = n[(r + 1) % n.length]), e.key === "ArrowLeft" && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), D(i.index));
		}
		function k() {
			let e = y.tabs.findIndex((e) => e.key === y.modelValue), t = S.value[e];
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
		return f(() => {
			c(k), typeof ResizeObserver < "u" && x.value && (A = new ResizeObserver(k), A.observe(x.value));
		}), d(() => A?.disconnect()), v(() => y.modelValue, () => c(k)), v(() => y.tabs, () => c(k), { deep: !0 }), o({ updateUnderline: k }), (t, o) => (p(), i("nav", {
			ref_key: "rootElement",
			ref: x,
			class: "share-sliding-tabs",
			role: "tablist",
			"aria-label": n.ariaLabel || void 0
		}, [(p(!0), i(e, null, h(n.tabs, (e, o) => (p(), i("button", {
			id: e.id,
			key: String(e.key),
			ref_for: !0,
			ref: (e) => T(e, o),
			class: l(["share-sliding-tabs__tab", { "share-sliding-tabs__tab--active": n.modelValue === e.key }]),
			type: "button",
			role: "tab",
			"aria-selected": n.modelValue === e.key,
			"aria-controls": e.panelId,
			tabindex: n.modelValue === e.key ? 0 : -1,
			disabled: e.disabled,
			onClick: (t) => E(e.key),
			onKeydown: (e) => O(e, o)
		}, [g(t.$slots, "icon", { tab: e }, () => [e.icon || e.svg ? (p(), i("img", {
			key: 0,
			class: "share-sliding-tabs__icon",
			src: e.icon || e.svg,
			alt: "",
			"aria-hidden": "true"
		}, null, 8, B)) : r("", !0)], !0), a("span", null, _(e.title), 1)], 42, z))), 128)), a("span", {
			class: "share-sliding-tabs__underline",
			style: u(w.value),
			"aria-hidden": "true"
		}, null, 4)], 8, R));
	}
}, [["__scopeId", "data-v-28aae1df"]]), H = [
	"aria-checked",
	"aria-label",
	"disabled"
], U = {
	key: 0,
	class: "share-toggle-switch__text"
}, W = /*#__PURE__*/ S({
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
		let n = e, o = t;
		function c() {
			n.disabled || o("update:modelValue", !n.modelValue);
		}
		return (t, n) => (p(), i("button", {
			class: l(["share-toggle-switch", { "share-toggle-switch--active": e.modelValue }]),
			type: "button",
			role: "switch",
			"aria-checked": e.modelValue,
			"aria-label": e.ariaLabel || e.label || void 0,
			disabled: e.disabled,
			onClick: c
		}, [n[0] ||= a("span", {
			class: "share-toggle-switch__track",
			"aria-hidden": "true"
		}, [a("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (p(), i("span", U, [g(t.$slots, "default", {}, () => [s(_(e.label), 1)], !0)])) : r("", !0)], 10, H));
	}
}, [["__scopeId", "data-v-828a23d7"]]), G = {
	key: 0,
	class: "share-editor-panel__title"
}, K = /*#__PURE__*/ S({
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
		return (t, n) => (p(), i("div", { class: l(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (p(), i("div", G, [g(t.$slots, "title", {}, () => [s(_(e.title), 1)], !0)])) : r("", !0), g(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-055dcd8d"]]), q = { class: "share-editor-section-title" }, J = { class: "share-editor-section-title__text" }, Y = {
	key: 0,
	class: "share-editor-section-title__actions"
}, X = /*#__PURE__*/ S({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (p(), i("div", q, [a("span", J, [g(t.$slots, "default", {}, () => [s(_(e.title), 1)], !0)]), t.$slots.actions ? (p(), i("span", Y, [g(t.$slots, "actions", {}, void 0, !0)])) : r("", !0)]));
	}
}, [["__scopeId", "data-v-03237796"]]), Z = { class: "share-editor-section" }, re = /*#__PURE__*/ S({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, a) => (p(), i("section", Z, [e.title || t.$slots.title ? (p(), n(X, {
			key: 0,
			title: e.title
		}, o({ _: 2 }, [t.$slots.title ? {
			name: "default",
			fn: y(() => [g(t.$slots, "title", {}, void 0, !0)]),
			key: "0"
		} : void 0, t.$slots.actions ? {
			name: "actions",
			fn: y(() => [g(t.$slots, "actions", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, ["title"])) : r("", !0), g(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-6a56d656"]]), ie = {}, ae = { class: "share-editor-total" };
function oe(e, t) {
	return p(), i("div", ae, [g(e.$slots, "default", {}, void 0, !0)]);
}
var se = /*#__PURE__*/ S(ie, [["render", oe], ["__scopeId", "data-v-72dfd940"]]), ce = { class: "form-actions" }, le = ["disabled"], ue = ["disabled"], de = /*#__PURE__*/ S({
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
		return (t, n) => (p(), i("div", ce, [a("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, _(e.cancelText), 9, le), a("button", {
			type: "button",
			class: "form-actions__submit",
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, _(e.loading ? e.loadingText : e.submitText), 9, ue)]));
	}
}, [["__scopeId", "data-v-4749c971"]]), fe = { class: "form-field-label" }, pe = {
	key: 0,
	class: "form-field-hint"
}, me = /*#__PURE__*/ S({
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
		return (t, n) => (p(), i("div", { class: l(["form-field", { "form-field--vertical": e.vertical }]) }, [a("span", fe, [s(_(e.label), 1), e.hint ? (p(), i("span", pe, _(e.hint), 1)) : r("", !0)]), g(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-01093950"]]), he = { class: "fn-wrap" }, ge = [
	"value",
	"min",
	"max"
], _e = /*#__PURE__*/ S({
	__name: "FormNumberInput",
	props: {
		value: { default: 0 },
		min: { default: void 0 },
		max: { default: void 0 }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function o(e) {
			return n.min != null && e < n.min ? n.min : n.max != null && e > n.max ? n.max : e;
		}
		function s(e) {
			r("change", o(parseInt(e.target.value) || 0));
		}
		function c(e) {
			r("change", o((parseInt(n.value) || 0) + e));
		}
		return (t, n) => (p(), i("div", he, [
			a("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[0] ||= x((e) => c(-1), ["stop"])
			}, "−"),
			a("input", {
				class: "fn-input",
				type: "number",
				value: e.value,
				min: e.min,
				max: e.max,
				onChange: s
			}, null, 40, ge),
			a("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[1] ||= x((e) => c(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-df9f8db7"]]), ve = ["value"], ye = /*#__PURE__*/ S({
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
		let r = e, a = n, o = m(null);
		function s(e) {
			let t = e.target.options[e.target.selectedIndex], n = t && "_value" in t ? t._value : e.target.value;
			a("update:value", n), a("change", n);
		}
		return f(() => {
			r.autofocus && o.value?.focus();
		}), t({ focus: () => o.value?.focus() }), (t, n) => (p(), i("select", {
			ref_key: "selectRef",
			ref: o,
			class: "form-select",
			value: e.value,
			onChange: s
		}, [g(t.$slots, "default", {}, void 0, !0)], 40, ve));
	}
}, [["__scopeId", "data-v-3eb4c36d"]]), be = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], xe = /*#__PURE__*/ S({
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
		return (t, n) => (p(), i("textarea", {
			class: "form-textarea",
			value: e.value,
			placeholder: e.placeholder,
			rows: e.rows,
			maxlength: e.maxlength,
			onInput: n[0] ||= (e) => t.$emit("update:value", e.target.value)
		}, null, 40, be));
	}
}, [["__scopeId", "data-v-31024142"]]), Q = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], Se = /*#__PURE__*/ S({
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
		let n = e, r = m(null);
		return f(() => {
			n.autofocus && r.value?.focus();
		}), t({ focus: () => r.value?.focus() }), (t, n) => (p(), i("input", {
			ref_key: "inputRef",
			ref: r,
			class: l(["form-text-input", {
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
			onKeydown: n[2] ||= b((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, Q));
	}
}, [["__scopeId", "data-v-e2d6bc8e"]]), Ce = 4;
function we(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function Te(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = m(!1), o = m(null), s = m(null), c = m(-1), l = m(null), u = m(-1), f = m(!1), p = null, h = 0, g = 0, _ = null, v = 0, y = null;
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
			if (Math.hypot(t, n) < Ce) return;
			S();
		}
		C(e.clientX, e.clientY), w(e.clientX, e.clientY);
	}
	function S() {
		let { sourceEl: e, x: t, y: n, item: r, group: i, index: d } = _, f = e.getBoundingClientRect();
		h = t - f.left, g = n - f.top;
		let m = e.cloneNode(!0), v = m;
		if (e.tagName === "TR") {
			let t = Array.from(e.children).map((e) => e.getBoundingClientRect().width);
			Array.from(m.children).forEach((e, n) => {
				e.style.width = t[n] + "px", e.style.minWidth = t[n] + "px", e.style.maxWidth = t[n] + "px";
			});
			let n = document.createElement("table"), r = document.createElement("tbody");
			r.appendChild(m), n.appendChild(r), n.style.borderCollapse = "separate", n.style.tableLayout = "fixed", v = n;
		}
		Object.assign(v.style, {
			position: "fixed",
			top: "0",
			left: "0",
			width: f.width + "px",
			height: f.height + "px",
			pointerEvents: "none",
			zIndex: "99999",
			margin: "0",
			transition: "none",
			opacity: "0.92",
			boxShadow: "var(--shadow-lg)",
			cursor: "grabbing",
			transformOrigin: "top left"
		}), v.classList.add("sortable-ghost"), document.body.appendChild(v), p = v, o.value = i, s.value = r, c.value = d, l.value = i, u.value = d, a.value = !0, document.body.classList.add("sortable-dragging"), C(t, n);
	}
	function C(e, t) {
		p && (p.style.transform = `translate3d(${e - h}px, ${t - g}px, 0)`);
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
		document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", T), document.removeEventListener("pointercancel", T), window.removeEventListener("keydown", E), p &&= (p.remove(), null), document.body.classList.remove("sortable-dragging"), a.value = !1, o.value = null, s.value = null, c.value = -1, l.value = null, u.value = -1, _ = null, e && (v = Date.now() + 250, f.value = !0, clearTimeout(y), y = setTimeout(() => {
			f.value = !1, y = null;
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
	return d(() => {
		D(), clearTimeout(y), f.value = !1;
	}), {
		dragging: a,
		sourceItem: s,
		sourceGroup: o,
		targetGroup: l,
		targetIndex: u,
		suppressNextClick: f,
		startDrag: b,
		shouldSuppressClick: O,
		isSource: k,
		displayItems: A
	};
}
//#endregion
//#region src/composables/useContainerMorph.js
function Ee({ open: e = 420, close: t = 300 } = {}) {
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
	], a = m(!1), o = m(!1), s = null;
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
//#region src/composables/useFullscreenViewportHeight.js
function De(e = .94) {
	let t = m(`${Math.round(e * 100)}dvh`);
	function n() {
		if (typeof window > "u") return;
		let n = window.visualViewport?.height || window.innerHeight;
		t.value = `${Math.floor(n * e)}px`;
	}
	return f(() => {
		n(), window.addEventListener("resize", n), window.visualViewport?.addEventListener("resize", n);
	}), d(() => {
		window.removeEventListener("resize", n), window.visualViewport?.removeEventListener("resize", n);
	}), t;
}
//#endregion
//#region src/composables/useMediaQuery.js
function $(e) {
	let t = m(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return f(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), d(() => n?.removeEventListener?.("change", r)), t;
}
function Oe(e = 768) {
	return $(`(max-width: ${e}px)`);
}
//#endregion
export { D as AddButton, k as AppSlider, w as BaseTile, ee as CompactCheckbox, K as EditorPanel, re as EditorSection, X as EditorSectionTitle, se as EditorTotal, de as FormActionButtons, me as FormField, _e as FormNumberInput, ye as FormSelect, Se as FormTextInput, xe as FormTextarea, M as MultiToggle, P as RemoveButton, L as SectionLabel, V as SlidingTabs, W as ToggleSwitch, we as reorderByDrop, Ee as useContainerMorph, De as useFullscreenViewportHeight, Oe as useIsMobile, $ as useMediaQuery, Te as useSortable };
