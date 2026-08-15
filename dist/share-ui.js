import { computed as e, createCommentVNode as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, normalizeClass as a, normalizeStyle as o, onBeforeUnmount as s, onMounted as c, openBlock as l, ref as u, renderSlot as d, toDisplayString as f, withKeys as p, withModifiers as m } from "vue";
//#region \0plugin-vue:export-helper
var h = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, g = {
	key: 0,
	class: "base-tile-strip"
}, _ = /*#__PURE__*/ h({
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
	setup(r) {
		let i = r, s = e(() => i.color || "var(--accent)");
		return (e, i) => (l(), n("div", {
			class: a(["base-tile", {
				"base-tile--interactive": r.interactive,
				"base-tile--tint": r.tint,
				"base-tile--framed": r.framed
			}]),
			style: o({ "--tile-color": s.value }),
			onClick: i[0] ||= (t) => e.$emit("click", t)
		}, [r.strip ? (l(), n("span", g)) : t("", !0), d(e.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-81d15c1d"]]), v = { class: "form-actions" }, y = ["disabled"], b = ["disabled"], x = /*#__PURE__*/ h({
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
		return (t, i) => (l(), n("div", v, [r("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: i[0] ||= (e) => t.$emit("cancel")
		}, f(e.cancelText), 9, y), r("button", {
			type: "button",
			class: "form-actions__submit",
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: i[1] ||= (e) => t.$emit("submit")
		}, f(e.loading ? e.loadingText : e.submitText), 9, b)]));
	}
}, [["__scopeId", "data-v-4749c971"]]), S = { class: "form-field-label" }, C = {
	key: 0,
	class: "form-field-hint"
}, w = /*#__PURE__*/ h({
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
		return (o, s) => (l(), n("div", { class: a(["form-field", { "form-field--vertical": e.vertical }]) }, [r("span", S, [i(f(e.label), 1), e.hint ? (l(), n("span", C, f(e.hint), 1)) : t("", !0)]), d(o.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-01093950"]]), T = { class: "fn-wrap" }, E = [
	"value",
	"min",
	"max"
], D = /*#__PURE__*/ h({
	__name: "FormNumberInput",
	props: {
		value: { default: 0 },
		min: { default: void 0 },
		max: { default: void 0 }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let i = e, a = t;
		function o(e) {
			return i.min != null && e < i.min ? i.min : i.max != null && e > i.max ? i.max : e;
		}
		function s(e) {
			a("change", o(parseInt(e.target.value) || 0));
		}
		function c(e) {
			a("change", o((parseInt(i.value) || 0) + e));
		}
		return (t, i) => (l(), n("div", T, [
			r("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: i[0] ||= m((e) => c(-1), ["stop"])
			}, "−"),
			r("input", {
				class: "fn-input",
				type: "number",
				value: e.value,
				min: e.min,
				max: e.max,
				onChange: s
			}, null, 40, E),
			r("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: i[1] ||= m((e) => c(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-df9f8db7"]]), O = ["value"], k = /*#__PURE__*/ h({
	__name: "FormSelect",
	props: {
		value: { default: "" },
		autofocus: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:value", "change"],
	setup(e, { expose: t, emit: r }) {
		let i = e, a = r, o = u(null);
		function s(e) {
			let t = e.target.options[e.target.selectedIndex], n = t && "_value" in t ? t._value : e.target.value;
			a("update:value", n), a("change", n);
		}
		return c(() => {
			i.autofocus && o.value?.focus();
		}), t({ focus: () => o.value?.focus() }), (t, r) => (l(), n("select", {
			ref_key: "selectRef",
			ref: o,
			class: "form-select",
			value: e.value,
			onChange: s
		}, [d(t.$slots, "default", {}, void 0, !0)], 40, O));
	}
}, [["__scopeId", "data-v-3eb4c36d"]]), A = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], j = /*#__PURE__*/ h({
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
		return (t, r) => (l(), n("textarea", {
			class: "form-textarea",
			value: e.value,
			placeholder: e.placeholder,
			rows: e.rows,
			maxlength: e.maxlength,
			onInput: r[0] ||= (e) => t.$emit("update:value", e.target.value)
		}, null, 40, A));
	}
}, [["__scopeId", "data-v-31024142"]]), M = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], N = /*#__PURE__*/ h({
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
		let r = e, i = u(null);
		return c(() => {
			r.autofocus && i.value?.focus();
		}), t({ focus: () => i.value?.focus() }), (t, r) => (l(), n("input", {
			ref_key: "inputRef",
			ref: i,
			class: a(["form-text-input", {
				"form-text-input--mono": e.mono,
				"form-text-input--invalid": e.invalid
			}]),
			type: e.type,
			value: e.value,
			placeholder: e.placeholder,
			maxlength: e.maxlength,
			autocomplete: e.autocomplete,
			onInput: r[0] ||= (e) => t.$emit("update:value", e.target.value),
			onChange: r[1] ||= (e) => t.$emit("change", e.target.value),
			onKeydown: r[2] ||= p((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, M));
	}
}, [["__scopeId", "data-v-e2d6bc8e"]]), P = 4;
function F(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function I(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = u(!1), o = u(null), c = u(null), l = u(-1), d = u(null), f = u(-1), p = null, m = 0, h = 0, g = null, _ = 0;
	function v(e, t, n, r) {
		if (e.button !== void 0 && e.button !== 0) return;
		let i = e.currentTarget.closest("[data-sortable-key]");
		i && (g = {
			x: e.clientX,
			y: e.clientY,
			item: t,
			group: n,
			index: r,
			sourceEl: i
		}, document.addEventListener("pointermove", y), document.addEventListener("pointerup", C), document.addEventListener("pointercancel", C), window.addEventListener("keydown", w), e.preventDefault());
	}
	function y(e) {
		if (!a.value) {
			if (!g) return;
			let t = e.clientX - g.x, n = e.clientY - g.y;
			if (Math.hypot(t, n) < P) return;
			b();
		}
		x(e.clientX, e.clientY), S(e.clientX, e.clientY);
	}
	function b() {
		let { sourceEl: e, x: t, y: n, item: r, group: i, index: s } = g, u = e.getBoundingClientRect();
		m = t - u.left, h = n - u.top;
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
			width: u.width + "px",
			height: u.height + "px",
			pointerEvents: "none",
			zIndex: "99999",
			margin: "0",
			transition: "none",
			opacity: "0.92",
			boxShadow: "var(--shadow-lg)",
			cursor: "grabbing",
			transformOrigin: "top left"
		}), v.classList.add("sortable-ghost"), document.body.appendChild(v), p = v, o.value = i, c.value = r, l.value = s, d.value = i, f.value = s, a.value = !0, document.body.classList.add("sortable-dragging"), x(t, n);
	}
	function x(e, t) {
		p && (p.style.transform = `translate3d(${e - m}px, ${t - h}px, 0)`);
	}
	function S(e, r) {
		let a = document.elementsFromPoint(e, r), s = null, l = null;
		for (let e of a) {
			let n = e.getAttribute && e.getAttribute("data-sortable-container");
			if (n && t[n]) {
				s = e, l = n;
				break;
			}
		}
		if (!l) return;
		let u = t[l];
		if (u.accepts && !u.accepts(c.value, o.value, l)) return;
		let p = c.value ? String(n(c.value)) : null, m = Array.from(s.querySelectorAll(":scope > [data-sortable-key]")).filter((e) => e.getAttribute("data-sortable-key") !== p), h = m.length;
		for (let e = 0; e < m.length; e++) {
			let t = m[e].getBoundingClientRect();
			if (r < t.top + t.height / 2) {
				h = e;
				break;
			}
		}
		i && !i({
			item: c.value,
			fromGroup: o.value,
			toGroup: l,
			toIndex: h
		}) || (d.value = l, f.value = h);
	}
	function C() {
		if (!a.value) {
			T();
			return;
		}
		let e = {
			item: c.value,
			fromGroup: o.value,
			fromIndex: l.value,
			toGroup: d.value,
			toIndex: f.value
		};
		T(), e.toGroup != null && r?.(e);
	}
	function w(e) {
		e.key === "Escape" && T();
	}
	function T() {
		let e = a.value;
		document.removeEventListener("pointermove", y), document.removeEventListener("pointerup", C), document.removeEventListener("pointercancel", C), window.removeEventListener("keydown", w), p &&= (p.remove(), null), document.body.classList.remove("sortable-dragging"), a.value = !1, o.value = null, c.value = null, l.value = -1, d.value = null, f.value = -1, g = null, e && (_ = Date.now() + 250);
	}
	function E() {
		return Date.now() < _;
	}
	function D(e) {
		return a.value && c.value && n(c.value) === n(e);
	}
	function O(e) {
		let r = t[e];
		if (!r) return [];
		let i = r.items.value;
		if (!a.value) return i;
		let s = i;
		if (o.value === e) {
			let e = n(c.value);
			s = i.filter((t) => n(t) !== e);
		}
		if (d.value === e && c.value) {
			let e = Math.min(f.value, s.length);
			s = [
				...s.slice(0, e),
				c.value,
				...s.slice(e)
			];
		}
		return s;
	}
	return s(T), {
		dragging: a,
		sourceItem: c,
		sourceGroup: o,
		targetGroup: d,
		targetIndex: f,
		startDrag: v,
		shouldSuppressClick: E,
		isSource: D,
		displayItems: O
	};
}
//#endregion
//#region src/composables/useContainerMorph.js
function L({ open: e = 420, close: t = 300 } = {}) {
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
	], a = u(!1), o = u(!1), s = null;
	function c(e, t, r, i) {
		e.style.position = "fixed", e.style.margin = "0", e.style.left = `${t.left}px`, e.style.top = `${t.top}px`, e.style.width = `${t.width}px`, e.style.height = `${t.height}px`, e.style.maxHeight = "none", e.style.overflow = "hidden", e.style.transition = r ? `left ${i}ms ${n}, top ${i}ms ${n}, width ${i}ms ${n}, height ${i}ms ${n}, border-radius ${i}ms ${n}, box-shadow ${i}ms ${n}` : "none";
	}
	function l(e) {
		i.forEach((t) => e.style.removeProperty(t.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase())));
	}
	function d(t, n, { fromRadius: i = "0px", toRadius: u = "0px" } = {}) {
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
	function f(e, n, { fromRadius: i = "0px", toRadius: l = "0px" } = {}, u = () => {}) {
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
		playOpen: d,
		playClose: f
	};
}
//#endregion
export { _ as BaseTile, x as FormActionButtons, w as FormField, D as FormNumberInput, k as FormSelect, N as FormTextInput, j as FormTextarea, F as reorderByDrop, L as useContainerMorph, I as useSortable };
