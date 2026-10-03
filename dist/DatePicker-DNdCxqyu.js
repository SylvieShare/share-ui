import { Fragment as e, Teleport as t, Transition as n, TransitionGroup as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createTextVNode as u, createVNode as d, defineComponent as f, guardReactiveProps as p, h as m, mergeProps as h, nextTick as g, normalizeClass as _, normalizeProps as v, normalizeStyle as y, onBeforeUnmount as b, onMounted as x, onScopeDispose as S, openBlock as C, reactive as w, ref as T, renderList as E, renderSlot as D, resolveDynamicComponent as O, shallowRef as k, toDisplayString as A, unref as j, useCssVars as M, useId as N, useSlots as P, vModelText as F, vShow as I, watch as L, withCtx as R, withDirectives as z, withKeys as B, withModifiers as V } from "vue";
//#region \0plugin-vue:export-helper
var H = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, U = /*#__PURE__*/ H({
	__name: "BaseTile",
	props: {
		color: {
			type: String,
			default: null
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
			class: _(["base-tile", {
				"base-tile--interactive": e.interactive,
				"base-tile--tint": e.tint,
				"base-tile--framed": e.framed
			}]),
			style: y({ "--tile-color": n.value }),
			onClick: r[0] ||= (e) => t.$emit("click", e)
		}, [D(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-ef7591de"]]), W = { class: "morph-tile-title" }, ee = ["aria-label", "disabled"], te = /*#__PURE__*/ H({
	__name: "MorphTileHeader",
	props: {
		title: {
			type: String,
			default: ""
		},
		compactHeader: Boolean,
		showEdit: Boolean,
		editFade: Boolean,
		clickableTitle: {
			type: Boolean,
			default: !0
		},
		editLabel: {
			type: String,
			default: ""
		}
	},
	emits: ["edit"],
	setup(e) {
		return (t, n) => (C(), s("div", { class: _(["morph-tile-header", { "morph-tile-header--compact": e.compactHeader }]) }, [(C(), a(O(e.showEdit && e.clickableTitle ? "button" : "div"), {
			class: _(["morph-tile-heading", { "morph-tile-heading--editable": e.showEdit && e.clickableTitle }]),
			type: e.showEdit && e.clickableTitle ? "button" : void 0,
			disabled: e.showEdit && e.clickableTitle && e.editFade || void 0,
			"aria-label": e.showEdit && e.clickableTitle ? `${e.editLabel}: ${e.title}` : void 0,
			onClick: n[1] ||= V((n) => e.showEdit && e.clickableTitle && !e.editFade && t.$emit("edit", n), ["stop"])
		}, {
			default: R(() => [c("span", W, [D(t.$slots, "default", {}, () => [u(A(e.title), 1)], !0)]), e.showEdit && e.clickableTitle ? (C(), s("svg", {
				key: 0,
				class: _(["morph-tile-pencil", { "morph-tile-pencil--hidden": e.editFade }]),
				viewBox: "0 0 24 24",
				width: "14",
				height: "14",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [...n[3] ||= [c("path", { d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }, null, -1)]], 2)) : e.showEdit ? (C(), s("button", {
				key: 1,
				class: "morph-tile-edit",
				type: "button",
				"aria-label": `${e.editLabel}: ${e.title}`,
				disabled: e.editFade,
				onClick: n[0] ||= V((e) => t.$emit("edit", e), ["stop"])
			}, [(C(), s("svg", {
				class: _(["morph-tile-pencil", { "morph-tile-pencil--hidden": e.editFade }]),
				viewBox: "0 0 24 24",
				width: "14",
				height: "14",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [...n[4] ||= [c("path", { d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }, null, -1)]], 2))], 8, ee)) : o("", !0)]),
			_: 3
		}, 8, [
			"class",
			"type",
			"disabled",
			"aria-label"
		])), t.$slots.aside ? (C(), s("div", {
			key: 0,
			class: "morph-tile-aside",
			onClick: n[2] ||= V(() => {}, ["stop"])
		}, [D(t.$slots, "aside", {}, void 0, !0)])) : o("", !0)], 2));
	}
}, [["__scopeId", "data-v-90c3723b"]]), ne = /*#__PURE__*/ H({
	__name: "MorphTile",
	props: {
		title: {
			type: String,
			default: ""
		},
		compactHeader: Boolean,
		showEdit: Boolean,
		editLabel: {
			type: String,
			default: ""
		},
		editFade: Boolean,
		clickableTitle: {
			type: Boolean,
			default: !0
		},
		embedded: Boolean,
		padding: {
			type: String,
			default: "12px"
		},
		color: {
			type: String,
			default: null
		},
		tint: Boolean,
		framed: Boolean,
		interactive: Boolean
	},
	emits: ["click", "edit"],
	setup(e) {
		return (t, n) => (C(), a(O(e.embedded ? "div" : U), {
			class: "morph-tile",
			color: e.embedded ? void 0 : e.color,
			tint: e.embedded ? void 0 : e.tint,
			framed: e.embedded ? void 0 : e.framed,
			interactive: e.embedded ? void 0 : e.interactive,
			style: y({ "--morph-tile-padding": e.padding }),
			onClick: n[1] ||= (e) => t.$emit("click", e)
		}, {
			default: R(() => [
				D(t.$slots, "decoration", {}, void 0, !0),
				e.title || t.$slots.title || t.$slots.aside ? (C(), a(te, {
					key: 0,
					title: e.title,
					"compact-header": e.compactHeader,
					"show-edit": e.showEdit,
					"edit-label": e.editLabel,
					"edit-fade": e.editFade,
					"clickable-title": e.clickableTitle,
					onEdit: n[0] ||= (e) => t.$emit("edit", e)
				}, l({ _: 2 }, [t.$slots.title ? {
					name: "default",
					fn: R(() => [D(t.$slots, "title", {}, void 0, !0)]),
					key: "0"
				} : void 0, t.$slots.aside ? {
					name: "aside",
					fn: R(() => [D(t.$slots, "aside", {}, void 0, !0)]),
					key: "1"
				} : void 0]), 1032, [
					"title",
					"compact-header",
					"show-edit",
					"edit-label",
					"edit-fade",
					"clickable-title"
				])) : o("", !0),
				D(t.$slots, "default", {}, void 0, !0)
			]),
			_: 3
		}, 8, [
			"color",
			"tint",
			"framed",
			"interactive",
			"style"
		]));
	}
}, [["__scopeId", "data-v-0bb5ce11"]]), re = /*#__PURE__*/ H({
	__name: "TileAccentStrip",
	props: { color: {
		type: String,
		default: null
	} },
	setup(e) {
		return (t, n) => (C(), s("span", {
			class: "tile-accent-strip",
			style: y({ background: e.color || "var(--tile-color, var(--accent))" }),
			"aria-hidden": "true"
		}, null, 4));
	}
}, [["__scopeId", "data-v-7ba6c4f0"]]), G = {
	key: 0,
	class: "share-section-list__header"
}, ie = {
	key: 0,
	class: "share-section-list__icon"
}, ae = { class: "share-section-list__title" }, oe = {
	key: 1,
	class: "share-section-list__footer"
}, se = /*#__PURE__*/ H({
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
		return (t, n) => (C(), a(O(e.embedded ? "section" : U), {
			class: _(["share-section-list", {
				"share-section-list--embedded": e.embedded,
				"share-section-list--compact": e.compact
			}]),
			"aria-label": e.title || void 0
		}, {
			default: R(() => [
				e.title || t.$slots.header || t.$slots.aside ? (C(), s("header", G, [D(t.$slots, "header", {}, () => [
					t.$slots.icon ? (C(), s("span", ie, [D(t.$slots, "icon")])) : o("", !0),
					c("span", ae, A(e.title), 1),
					n[0] ||= c("span", {
						class: "share-section-list__line",
						"aria-hidden": "true"
					}, null, -1),
					D(t.$slots, "aside")
				])])) : o("", !0),
				D(t.$slots, "body", {}, () => [(C(), a(O(e.transitionName ? r : "div"), h(e.listAttrs, {
					tag: e.transitionName ? "div" : void 0,
					name: e.transitionName || void 0,
					class: "share-section-list__rows"
				}), {
					default: R(() => [D(t.$slots, "default")]),
					_: 3
				}, 16, ["tag", "name"]))]),
				t.$slots.footer ? (C(), s("footer", oe, [D(t.$slots, "footer")])) : o("", !0)
			]),
			_: 3
		}, 8, ["class", "aria-label"]));
	}
}, [["__scopeId", "data-v-3f9dfbae"]]), ce = [
	"disabled",
	"aria-label",
	"title"
], le = {
	key: 0,
	class: "share-add-button__text"
}, ue = /*#__PURE__*/ H({
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
			class: _(["share-add-button", [`share-add-button--${e.variant}`, { "share-add-button--block": e.block }]]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			title: e.variant === "icon" && e.label || void 0,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [n[1] ||= c("span", {
			class: "share-add-button__plus",
			"aria-hidden": "true"
		}, "+", -1), e.variant === "icon" ? o("", !0) : (C(), s("span", le, [D(t.$slots, "default", {}, () => [u(A(e.label), 1)], !0)]))], 10, ce));
	}
}, [["__scopeId", "data-v-2e1149d1"]]), K = [
	"value",
	"min",
	"max",
	"step",
	"disabled",
	"aria-label"
], q = /*#__PURE__*/ H({
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
			style: y(o.value),
			onInput: l,
			onChange: u
		}, null, 44, K));
	}
}, [["__scopeId", "data-v-a4387b22"]]), de = [
	"disabled",
	"aria-label",
	"aria-checked"
], fe = {
	key: 0,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, pe = /*#__PURE__*/ H({
	__name: "CompactCheckbox",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		size: {
			type: Number,
			default: 18
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
			class: _(["share-compact-checkbox", { "share-compact-checkbox--checked": e.modelValue }]),
			style: y({ "--checkbox-size": `${e.size}px` }),
			disabled: e.disabled,
			"aria-label": e.label,
			"aria-checked": e.modelValue,
			role: "checkbox",
			onClick: V(i, ["stop"]),
			onPointerdown: n[0] ||= V(() => {}, ["stop"])
		}, [e.modelValue ? (C(), s("svg", fe, [...n[1] ||= [c("path", {
			d: "M2.5 6.2l2.4 2.4 4.6-5",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, null, -1)]])) : o("", !0)], 46, de));
	}
}, [["__scopeId", "data-v-6c7265ce"]]), me = ["aria-label"], he = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], ge = /*#__PURE__*/ H({
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
		function v(e) {
			let t = r.options.find((t) => t.value === e);
			!r.disabled && !t?.disabled && e !== r.modelValue && a("update:modelValue", e);
		}
		function S() {
			return r.options.map((e, t) => ({
				option: e,
				index: t
			})).filter(({ option: e }) => !e.disabled);
		}
		async function w(e) {
			let t = r.options[e];
			!t || t.disabled || r.disabled || (v(t.value), await g(), l.value[e]?.focus());
		}
		function D(e, t) {
			let n = S();
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			(e.key === "ArrowRight" || e.key === "ArrowDown") && (i = n[(r + 1) % n.length]), (e.key === "ArrowLeft" || e.key === "ArrowUp") && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), w(i.index));
		}
		let O = null;
		return x(async () => {
			await g(), h(), typeof ResizeObserver < "u" && o.value && (O = new ResizeObserver(() => h(!1)), O.observe(o.value));
		}), b(() => {
			O?.disconnect(), m != null && cancelAnimationFrame(m);
		}), L(() => r.modelValue, async () => {
			await g(), h(!0);
		}), L(() => r.options, async () => {
			await g(), h(!1);
		}, { deep: !0 }), (n, r) => (C(), s("div", {
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
		}, null, 6), (C(!0), s(e, null, E(t.options, (e, n) => (C(), s("button", {
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
		}, A(e.label), 43, he))), 128))], 10, me));
	}
}, [["__scopeId", "data-v-a0098670"]]), J = ["disabled", "aria-label"], Y = {
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
}, _e = {
	key: 1,
	class: "share-remove-button__cross",
	"aria-hidden": "true"
}, ve = /*#__PURE__*/ H({
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
			class: _(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.icon === "trash" ? (C(), s("svg", Y, [...n[1] ||= [c("path", { d: "M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" }, null, -1)]])) : (C(), s("span", _e))], 10, J));
	}
}, [["__scopeId", "data-v-b1091570"]]), ye = { class: "share-section-label__text" }, be = {
	key: 0,
	class: "share-section-label__actions"
}, X = /*#__PURE__*/ H({
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
			class: _(["share-section-label", { "share-section-label--border": e.border }]),
			style: y(n.value)
		}, [c("span", ye, [D(t.$slots, "default", {}, () => [u(A(e.title), 1)], !0)]), t.$slots.actions ? (C(), s("span", be, [D(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)], 6));
	}
}, [["__scopeId", "data-v-56c925a7"]]), xe = ["aria-label"], Se = {
	viewBox: "0 0 120 120",
	role: "img",
	"aria-hidden": "true"
}, Ce = [
	"stroke",
	"stroke-width",
	"stroke-dasharray",
	"stroke-dashoffset"
], we = { class: "segment-donut__center" }, Te = {
	key: 0,
	class: "segment-donut__legend"
}, Ee = { key: 0 }, De = /*#__PURE__*/ H({
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
		M((e) => ({ v664f5d02: t.strokeWidth }));
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
			style: y({ "--segment-donut-size": `${t.size}px` })
		}, [(C(), s("svg", Se, [r[0] ||= c("circle", {
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
		}, null, 8, Ce))), 128))])), c("div", we, [D(n.$slots, "center", { total: l.value }, () => [c("strong", null, A(t.formatValue(l.value)), 1), c("span", null, A(t.totalLabel), 1)], !0)])], 4), t.showLegend ? (C(), s("ul", Te, [(C(!0), s(e, null, E(u.value, (e) => (C(), s("li", { key: e.key }, [
			c("i", {
				style: y({ "--segment-color": e.color }),
				"aria-hidden": "true"
			}, null, 4),
			c("span", null, A(e.label), 1),
			c("strong", null, A(t.formatValue(e.value)), 1),
			t.showPercent ? (C(), s("small", Ee, A(e.percent.toLocaleString(void 0, { maximumFractionDigits: 1 })) + "%", 1)) : o("", !0)
		]))), 128))])) : o("", !0)], 8, xe));
	}
}, [["__scopeId", "data-v-6c69c95e"]]), Oe = ["aria-label"], Z = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], ke = ["src"], Ae = /*#__PURE__*/ H({
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
		async function v(e) {
			let t = a.tabs[e];
			!t || t.disabled || (h(t.key), await g(), d.value[e]?.focus());
		}
		function S(e, t) {
			let n = a.tabs.map((e, t) => ({
				tab: e,
				index: t
			})).filter(({ tab: e }) => !e.disabled);
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			e.key === "ArrowRight" && (i = n[(r + 1) % n.length]), e.key === "ArrowLeft" && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), v(i.index));
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
		return x(() => {
			g(w), typeof ResizeObserver < "u" && u.value && (O = new ResizeObserver(w), O.observe(u.value));
		}), b(() => O?.disconnect()), L(() => a.modelValue, () => g(w)), L(() => a.tabs, () => g(w), { deep: !0 }), n({ updateUnderline: w }), (n, r) => (C(), s("nav", {
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
			class: _(["share-sliding-tabs__tab", { "share-sliding-tabs__tab--active": t.modelValue === e.key }]),
			type: "button",
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			"aria-controls": e.panelId,
			tabindex: t.modelValue === e.key ? 0 : -1,
			disabled: e.disabled,
			onClick: (t) => h(e.key),
			onKeydown: (e) => S(e, r)
		}, [D(n.$slots, "icon", { tab: e }, () => [e.icon || e.svg ? (C(), s("img", {
			key: 0,
			class: "share-sliding-tabs__icon",
			src: e.icon || e.svg,
			alt: "",
			"aria-hidden": "true"
		}, null, 8, ke)) : o("", !0)], !0), c("span", null, A(e.title), 1)], 42, Z))), 128)), c("span", {
			class: "share-sliding-tabs__underline",
			style: y(p.value),
			"aria-hidden": "true"
		}, null, 4)], 8, Oe));
	}
}, [["__scopeId", "data-v-28aae1df"]]), je = [
	"aria-checked",
	"aria-label",
	"disabled"
], Me = {
	key: 0,
	class: "share-toggle-switch__text"
}, Ne = /*#__PURE__*/ H({
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
		}, [c("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (C(), s("span", Me, [D(t.$slots, "default", {}, () => [u(A(e.label), 1)], !0)])) : o("", !0)], 10, je));
	}
}, [["__scopeId", "data-v-828a23d7"]]), Pe = [], Fe = null, Q = null;
function Ie(e) {
	let t = Pe.lastIndexOf(e);
	t >= 0 && Pe.splice(t, 1);
}
function Le(e) {
	Ie(e), Pe.push(e);
}
function Re(e) {
	Ie(e);
}
function ze(e) {
	return Pe.at(-1) === e;
}
function Be(e, t) {
	Fe?.token !== e && Fe?.close(), Fe = {
		token: e,
		close: t
	}, Le(e);
}
function Ve(e) {
	Fe?.token === e && (Fe = null), Re(e);
}
function He(e, t) {
	Q?.token !== e && Q?.close(), Q = {
		token: e,
		close: t
	};
}
function Ue(e) {
	Q?.token === e && (Q = null);
}
function We() {
	if (!Q) return !1;
	let e = Q;
	return Q = null, e.close(), !0;
}
//#endregion
//#region src/lib/actionMenuPlacement.js
var Ge = 8, Ke = 6;
function qe(e, t, n) {
	return Math.min(Math.max(e, t), Math.max(t, n));
}
function Je({ triggerRect: e, popoverWidth: t, popoverHeight: n, viewportWidth: r, viewportHeight: i, viewportLeft: a = 0, viewportTop: o = 0, originX: s, originY: c, margin: l = 8, gap: u = 6 }) {
	let d = a + l, f = o + l, p = a + r - l, m = o + i - l, h = Math.min(t, Math.max(0, p - d)), g = qe(e.right - h, d, p - h), _ = Math.max(0, m - e.bottom - u), v = Math.max(0, e.top - u - f), y = _ < n && v > _, b = y ? v : _, x = Math.min(n, b), S = qe(y ? e.top - u - x : e.bottom + u, f, m - x);
	return {
		left: g,
		top: S,
		maxHeight: b,
		opensAbove: y,
		originX: qe(s - g, 0, h),
		originY: qe(c - S, 0, x)
	};
}
var Ye = 8, Xe = 6, Ze = Je, Qe = [
	"title",
	"aria-label",
	"aria-expanded",
	"disabled"
], $e = ["data-share-popover-related", "aria-label"], et = /*#__PURE__*/ H({
	__name: "ActionMenu",
	props: {
		triggerAttrs: {
			type: Object,
			default: () => ({})
		},
		anchor: {
			type: Object,
			default: null
		},
		related: {
			type: Boolean,
			default: !1
		},
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
		let l = r, u = Symbol("action-menu"), f = T(null), p = T(null), m = T(null), _ = T(!1), v = null, x = null;
		function S() {
			return l.anchor ?? f.value;
		}
		function w(e) {
			let t = S();
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
		function E() {
			let e = window.visualViewport;
			return {
				viewportWidth: e?.width || window.innerWidth,
				viewportHeight: e?.height || window.innerHeight,
				viewportLeft: e?.offsetLeft || 0,
				viewportTop: e?.offsetTop || 0
			};
		}
		function O() {
			x = null;
			let e = S(), t = p.value;
			if (!_.value || !e || !t) return;
			let n = E(), r = Math.max(0, n.viewportWidth - 16);
			t.style.minWidth = `${Math.min(200, r)}px`, t.style.maxWidth = `${Math.min(280, r)}px`;
			let i = e.getBoundingClientRect(), a = t.offsetWidth, o = Je({
				triggerRect: i,
				popoverWidth: a,
				popoverHeight: t.scrollHeight + t.offsetHeight - t.clientHeight,
				originX: v?.x ?? i.left + i.width / 2,
				originY: v?.y ?? i.bottom,
				...n
			});
			m.value = {
				position: "fixed",
				top: `${o.top}px`,
				left: `${o.left}px`,
				minWidth: `${Math.min(200, r)}px`,
				maxWidth: `${Math.min(280, r)}px`,
				maxHeight: `${o.maxHeight}px`,
				visibility: "visible",
				"--share-popover-origin-x": `${o.originX}px`,
				"--share-popover-origin-y": `${o.originY}px`,
				"--share-popover-enter-y": o.opensAbove ? "5px" : "-5px"
			};
		}
		function k() {
			x != null && cancelAnimationFrame(x), x = requestAnimationFrame(O);
		}
		function A() {
			document.addEventListener("pointerdown", F, !0), document.addEventListener("keydown", L), window.addEventListener("resize", k), window.addEventListener("scroll", I, !0), window.visualViewport?.addEventListener("resize", k), window.visualViewport?.addEventListener("scroll", k);
		}
		function j() {
			document.removeEventListener("pointerdown", F, !0), document.removeEventListener("keydown", L), window.removeEventListener("resize", k), window.removeEventListener("scroll", I, !0), window.visualViewport?.removeEventListener("resize", k), window.visualViewport?.removeEventListener("scroll", k);
		}
		function M(e) {
			l.disabled || _.value || (m.value = w(e), Be(u, N), _.value = !0, A(), g(k));
		}
		function N() {
			_.value && (We(), _.value = !1, Ve(u), x != null && cancelAnimationFrame(x), x = null, j());
		}
		function P(e) {
			l.disabled || (_.value ? N() : M(e));
		}
		function F(e) {
			e.target?.closest?.(".ram-popover, [data-share-popover-related]") || f.value?.contains?.(e.target) || S()?.contains?.(e.target) || N();
		}
		function I(e) {
			p.value?.contains?.(e.target) || e.target?.closest?.("[data-share-popover-related]") || N();
		}
		function L(e) {
			e.key === "Escape" && (We() || ze(u) && N());
		}
		return b(N), i({
			open: M,
			close: N,
			toggle: P
		}), (i, l) => (C(), s(e, null, [i.$slots.trigger ? (C(), s("div", h({ key: 0 }, r.triggerAttrs, {
			ref_key: "triggerEl",
			ref: f,
			class: ["ram-custom-trigger", { "ram-custom-trigger--block": r.block }],
			onClick: V(P, ["stop"])
		}), [D(i.$slots, "trigger", { open: _.value }, void 0, !0)], 16)) : (C(), s("button", h({ key: 1 }, r.triggerAttrs, {
			ref_key: "triggerEl",
			ref: f,
			type: "button",
			class: "ram-trigger",
			title: r.title,
			"aria-label": r.title,
			"aria-expanded": _.value,
			"aria-haspopup": "menu",
			disabled: r.disabled,
			onClick: V(P, ["stop"])
		}), [...l[2] ||= [c("svg", {
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
		], -1)]], 16, Qe)), (C(), a(t, { to: "body" }, [d(n, { name: "share-popover-action" }, {
			default: R(() => [_.value ? (C(), s("div", {
				key: 0,
				ref_key: "popoverEl",
				ref: p,
				class: "ram-popover",
				"data-share-popover-related": r.related ? "" : void 0,
				style: y(m.value),
				role: "menu",
				"aria-label": r.title,
				onClick: l[0] ||= V(() => {}, ["stop"]),
				onPointerdown: l[1] ||= V(() => {}, ["stop"])
			}, [D(i.$slots, "default", { close: N }, void 0, !0)], 44, $e)) : o("", !0)]),
			_: 3
		})]))], 64));
	}
}, [["__scopeId", "data-v-8a6333e6"]]), tt = ["aria-haspopup", "aria-expanded"], nt = {
	class: "ram-item__icon",
	"aria-hidden": "true"
}, rt = {
	key: 1,
	width: "17",
	height: "17",
	viewBox: "0 0 17 17",
	fill: "none"
}, it = { class: "ram-item__content" }, at = {
	key: 0,
	class: "ram-item__suffix"
}, ot = /*#__PURE__*/ H({
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
			class: _(["ram-item", e.tone === "default" ? null : `ram-item--${e.tone}`]),
			role: "menuitem",
			"aria-haspopup": e.submenu ? "menu" : void 0,
			"aria-expanded": e.submenu ? e.submenuOpen : void 0
		}, [
			c("span", nt, [D(t.$slots, "icon", {}, () => [e.icon ? (C(), a(O(e.icon), {
				key: 0,
				size: 17,
				"stroke-width": 1.9
			})) : (C(), s("svg", rt, [...n[0] ||= [
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
			c("span", it, [D(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.suffix || e.submenu ? (C(), s("span", at, [D(t.$slots, "suffix", {}, void 0, !0), e.submenu ? (C(), s("svg", {
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
		], 10, tt));
	}
}, [["__scopeId", "data-v-5fc35d86"]]);
//#endregion
//#region src/composables/useMediaQuery.js
function st(e) {
	let t = T(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return x(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), b(() => n?.removeEventListener?.("change", r)), t;
}
function ct(e = 768) {
	return st(`(max-width: ${e}px)`);
}
//#endregion
//#region src/components/floating/BasePopover.vue
var lt = [
	"id",
	"role",
	"aria-label",
	"data-share-popover-related"
], ut = /*#__PURE__*/ H({
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
		let c = e, l = r, u = i(() => c.transition ? c.transition : c.transitionPreset === "action-menu" ? "share-popover-action" : ""), f = Symbol("base-popover"), p = T(null), m = T(null), h = null;
		function v() {
			let e = c.anchor;
			return e ? typeof e.getBoundingClientRect == "function" ? e : e.value ?? e : null;
		}
		function x(e) {
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
			let e = v();
			if (!e) return;
			let t = e.getBoundingClientRect(), n = S(), r = typeof c.minWidth == "number" ? c.minWidth : 0, i = Math.max(r, p.value?.offsetWidth || 0), a = p.value?.offsetHeight || 0, o = n.left + 8, s = n.left + n.width - 8, l = n.top + 8, u = n.top + n.height - 8, d = {
				position: "fixed",
				minWidth: x(c.minWidth),
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
		function O(e) {
			return !!e?.closest?.("[data-share-popover-related]");
		}
		function k(e) {
			p.value?.contains(e.target) || O(e.target) || v()?.contains?.(e.target) || E();
		}
		function A(e) {
			if (!c.closeOnScroll) {
				w();
				return;
			}
			p.value?.contains(e.target) || O(e.target) || E();
		}
		function j() {
			c.closeOnResize ? E() : w();
		}
		function M(e) {
			e.key === "Escape" && (We() || ze(f) && E());
		}
		function N() {
			typeof ResizeObserver < "u" && p.value && (h = new ResizeObserver(w), h.observe(p.value)), Le(f), document.addEventListener("pointerdown", k, !0), document.addEventListener("keydown", M), window.addEventListener("resize", j), window.addEventListener("scroll", A, !0), window.visualViewport?.addEventListener("resize", j), window.visualViewport?.addEventListener("scroll", w);
		}
		function P() {
			h?.disconnect(), h = null, Re(f), document.removeEventListener("pointerdown", k, !0), document.removeEventListener("keydown", M), window.removeEventListener("resize", j), window.removeEventListener("scroll", A, !0), window.visualViewport?.removeEventListener("resize", j), window.visualViewport?.removeEventListener("scroll", w);
		}
		return L(() => c.open, async (e) => {
			P(), e && (w(), await g(), c.open && (w(), N()));
		}, { immediate: !0 }), L(() => [
			c.anchor,
			c.placement,
			c.offset,
			c.minWidth
		], () => {
			c.open && g(w);
		}), b(P), (r, i) => (C(), a(t, { to: "body" }, [d(n, { name: u.value }, {
			default: R(() => [e.open ? (C(), s("div", {
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
				onClick: i[0] ||= V(() => {}, ["stop"]),
				onPointerdown: i[1] ||= V(() => {}, ["stop"])
			}, [D(r.$slots, "default", { close: E }, void 0, !0)], 46, lt)) : o("", !0)]),
			_: 3
		}, 8, ["name"])]));
	}
}, [["__scopeId", "data-v-37a042dc"]]), dt = { class: "ras-root" }, ft = { class: "ras-panel" }, pt = {
	key: 0,
	class: "ras-label"
}, mt = { class: "ras-panel ras-panel--popover" }, ht = {
	key: 0,
	class: "ras-label"
}, gt = /*#__PURE__*/ H({
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
		let r = e, i = Symbol("action-submenu"), l = T(null), u = ct(r.mobileBreakpoint), f = T(!1);
		function p() {
			r.disabled || f.value || (He(i, h), f.value = !0);
		}
		function m() {
			r.disabled || (f.value ? h() : p());
		}
		function h() {
			f.value && (f.value = !1, Ue(i));
		}
		function g(e) {
			e || h();
		}
		return b(h), t({
			open: p,
			close: h,
			toggle: m
		}), (t, r) => (C(), s("div", dt, [
			c("div", {
				ref_key: "triggerEl",
				ref: l,
				class: "ras-trigger",
				onClick: V(m, ["stop"])
			}, [D(t.$slots, "trigger", {
				open: f.value,
				toggle: m
			}, void 0, !0)], 512),
			d(n, { name: "ras-inline" }, {
				default: R(() => [j(u) && f.value ? (C(), s("div", {
					key: 0,
					class: "ras-inline",
					"data-share-popover-related": "",
					onClick: r[0] ||= V(() => {}, ["stop"]),
					onPointerdown: r[1] ||= V(() => {}, ["stop"])
				}, [c("div", ft, [e.label ? (C(), s("div", pt, A(e.label), 1)) : o("", !0), D(t.$slots, "default", { close: h }, void 0, !0)])], 32)) : o("", !0)]),
				_: 3
			}),
			j(u) ? o("", !0) : (C(), a(ut, {
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
				default: R(() => [c("div", mt, [e.label ? (C(), s("div", ht, A(e.label), 1)) : o("", !0), D(t.$slots, "default", { close: h }, void 0, !0)])]),
				_: 3
			}, 8, [
				"open",
				"anchor",
				"min-width"
			]))
		]));
	}
}, [["__scopeId", "data-v-a4a95dc2"]]), _t = [
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
function vt(e) {
	return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(String(e || "").trim());
}
function yt(e = _t) {
	return e[Math.floor(Math.random() * e.length)];
}
//#endregion
//#region src/components/floating/ColorPresetPicker.vue
var bt = ["aria-label"], xt = ["aria-label", "aria-expanded"], St = { class: "cpp-body" }, Ct = "#888888", wt = /*#__PURE__*/ H({
	__name: "ColorPresetPicker",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		colors: {
			type: Array,
			default: () => _t
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
		let n = e, r = t, a = T(null), o = T(!1), l = T("cpppop-cancel"), u = T(n.modelValue || ""), p = i(() => /^#[0-9a-f]{6}$/i.test(n.modelValue || "") ? n.modelValue : Ct), h = i(() => !!u.value && !vt(u.value));
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
		function S(e) {
			e || b("cancel");
		}
		function w(e) {
			u.value = e, r("update:modelValue", e);
		}
		function E() {
			let e = u.value.trim();
			if (!vt(e)) {
				r("invalid", e);
				return;
			}
			w(e);
		}
		function O(e) {
			w(e), b("pick");
		}
		function k() {
			u.value = "", r("update:modelValue", n.clearValue), b("pick");
		}
		L(() => n.modelValue, (e) => {
			u.value = e || "";
		});
		let A = f({
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
						onInput: (e) => w(e.target.value)
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
						onChange: E,
						onKeydown: (e) => {
							e.key === "Enter" && E();
						}
					}) : null,
					n.allowClear ? m("button", {
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
		}, [d(j(A))], 8, bt)) : (C(), s("span", {
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
			class: _(["cpp-swatch", { "cpp-swatch--empty": !e.modelValue }]),
			style: y(e.modelValue ? { background: e.modelValue } : null),
			"aria-label": e.ariaLabel,
			"aria-expanded": o.value,
			"aria-haspopup": "dialog",
			onClick: x
		}, null, 14, xt)], !0), d(ut, {
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
			default: R(() => [c("div", St, [d(j(A))])]),
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
}, [["__scopeId", "data-v-1b7035e4"]]), Tt = [
	"aria-label",
	"aria-expanded",
	"aria-activedescendant",
	"disabled"
], Et = ["aria-label"], Dt = [
	"placeholder",
	"aria-label",
	"aria-activedescendant"
], Ot = [
	"id",
	"aria-selected",
	"disabled",
	"onMouseenter",
	"onClick"
], kt = {
	key: 1,
	class: "vs-empty"
}, At = /*#__PURE__*/ H({
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
		let d = `share-value-select-${a}`, f = T(null), p = T(null), m = T(null), h = T(!1), v = T(""), y = T(-1), x = i(() => l.options.map((e, t) => e && typeof e == "object" ? {
			value: e.value,
			label: String(e.label ?? e.value ?? ""),
			disabled: !!e.disabled,
			key: e.key ?? `${String(e.value)}-${t}`
		} : {
			value: e,
			label: String(e ?? ""),
			disabled: !1,
			key: `${String(e)}-${t}`
		})), S = i(() => x.value.find((e) => O(e.value))?.label ?? ""), w = i(() => {
			let e = v.value.trim().toLocaleLowerCase();
			return e ? x.value.filter((t) => t.label.toLocaleLowerCase().includes(e)) : x.value;
		}), D = i(() => l.searchable && x.value.length >= l.searchThreshold);
		function O(e) {
			return String(e) === String(l.modelValue);
		}
		function k(e) {
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
		function N(e) {
			w.value[e]?.disabled || (y.value = e);
		}
		function P(e) {
			let t = w.value;
			if (!t.length) return;
			let n = y.value < 0 ? e > 0 ? 0 : t.length - 1 : (y.value + e + t.length) % t.length;
			y.value = j(n, e), g(() => document.getElementById(k(y.value))?.scrollIntoView?.({ block: "nearest" }));
		}
		function I() {
			l.disabled || h.value || (h.value = !0, y.value = M(), document.addEventListener("pointerdown", U, !0), u("open"), D.value && g(() => m.value?.focus()));
		}
		function R({ restoreFocus: e = !1 } = {}) {
			h.value && (h.value = !1, v.value = "", y.value = -1, document.removeEventListener("pointerdown", U, !0), u("close"), e && g(() => p.value?.focus()));
		}
		function B() {
			h.value ? R() : I();
		}
		function V(e) {
			!e || e.disabled || (u("update:modelValue", e.value), R({ restoreFocus: !0 }));
		}
		function H() {
			V(w.value[y.value]);
		}
		function U(e) {
			f.value?.contains(e.target) || R();
		}
		function W(e) {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault(), h.value ? P(e.key === "ArrowDown" ? 1 : -1) : I();
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
			e.key === "Escape" && h.value && (e.preventDefault(), R({ restoreFocus: !0 }));
		}
		function ee(e) {
			e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), P(e.key === "ArrowDown" ? 1 : -1)) : e.key === "Home" ? (e.preventDefault(), y.value = j()) : e.key === "End" ? (e.preventDefault(), y.value = j(w.value.length - 1, -1)) : e.key === "Enter" ? (e.preventDefault(), H()) : e.key === "Escape" && (e.preventDefault(), R({ restoreFocus: !0 }));
		}
		return L(w, () => {
			y.value = M();
		}), L(() => l.disabled, (e) => {
			e && R();
		}), b(() => {
			document.removeEventListener("pointerdown", U, !0);
		}), n({
			open: I,
			close: R,
			toggle: B
		}), (n, r) => (C(), s("div", {
			ref_key: "rootEl",
			ref: f,
			class: _(["vs", { "vs--disabled": t.disabled }])
		}, [c("button", {
			ref_key: "triggerEl",
			ref: p,
			class: _(["vs-button", { empty: !S.value }]),
			type: "button",
			role: "combobox",
			"aria-haspopup": "listbox",
			"aria-label": t.ariaLabel || void 0,
			"aria-controls": d,
			"aria-expanded": h.value,
			"aria-activedescendant": h.value && y.value >= 0 ? k(y.value) : void 0,
			disabled: t.disabled,
			onClick: B,
			onKeydown: W
		}, [c("span", null, A(S.value || t.placeholder), 1), r[1] ||= c("span", {
			class: "vs-arrow",
			"aria-hidden": "true"
		}, "▾", -1)], 42, Tt), h.value ? (C(), s("div", {
			key: 0,
			id: d,
			class: _(["vs-drop", { "vs-drop-up": t.dropUp }]),
			role: "listbox",
			"aria-label": t.ariaLabel || void 0
		}, [
			D.value ? z((C(), s("input", {
				key: 0,
				ref_key: "searchEl",
				ref: m,
				"onUpdate:modelValue": r[0] ||= (e) => v.value = e,
				class: "vs-search",
				type: "search",
				placeholder: t.searchPlaceholder,
				"aria-label": t.searchAriaLabel || t.searchPlaceholder,
				"aria-controls": d,
				"aria-activedescendant": y.value >= 0 ? k(y.value) : void 0,
				autocomplete: "off",
				onKeydown: ee
			}, null, 40, Dt)), [[F, v.value]]) : o("", !0),
			(C(!0), s(e, null, E(w.value, (e, t) => (C(), s("button", {
				id: k(t),
				key: e.key,
				class: _(["vs-option", { "vs-option--active": t === y.value }]),
				type: "button",
				role: "option",
				"aria-selected": O(e.value),
				disabled: e.disabled,
				onMouseenter: (e) => N(t),
				onClick: (t) => V(e)
			}, A(e.label), 43, Ot))), 128)),
			w.value.length === 0 ? (C(), s("div", kt, A(t.emptyLabel), 1)) : o("", !0)
		], 10, Et)) : o("", !0)], 2));
	}
}, [["__scopeId", "data-v-764969f5"]]), jt = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.b.blockquote.br.code.em.h1.h2.h3.h4.h5.h6.li.ol.p.pre.s.span.strike.strong.table.tbody.td.th.thead.tr.u.ul".split(".")), Mt = /* @__PURE__ */ new Set([
	"embed",
	"iframe",
	"math",
	"object",
	"script",
	"style",
	"svg",
	"template"
]), Nt = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:"
]), Pt = /^[a-z][a-z0-9-]{0,39}$/, Ft = 4096;
function It(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
function Lt(e) {
	let t = String(e || "").trim();
	if (!t || /[\u0000-\u001f\u007f]/.test(t)) return "";
	if (/^(?:#|\?|\.?\.\/|\/)/.test(t)) return t;
	try {
		let e = new URL(t, "https://share-ui.invalid");
		return Nt.has(e.protocol) ? t : "";
	} catch {
		return "";
	}
}
function Rt(e) {
	let t = String(e || "").trim();
	if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t) || /^var\(--[a-z0-9-]+\)$/i.test(t)) return t;
	let n = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
	if (!n || n.slice(1, 4).map(Number).some((e) => e < 0 || e > 255)) return "";
	let r = n[4] == null ? null : Number(n[4]);
	return r != null && (r < 0 || r > 1) ? "" : t;
}
function zt(e) {
	try {
		let t = encodeURIComponent(JSON.stringify(e ?? {}));
		return t.length <= Ft ? t : "";
	} catch {
		return "";
	}
}
function Bt(e) {
	let t = String(e || "");
	if (!t || t.length > Ft) return null;
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
function Vt(e, t, n) {
	let r = String(e || "").trim().toLowerCase(), i = zt(t);
	return !Pt.test(r) || !i ? "" : `<span data-rich-node="${r}" data-rich-payload="${It(i)}" contenteditable="false">${It(n || r)}</span>`;
}
function Ht(e) {
	if (!e?.getAttribute) return null;
	let t = String(e.getAttribute("data-rich-node") || "").trim().toLowerCase(), n = Bt(e.getAttribute("data-rich-payload"));
	return !Pt.test(t) || n == null ? null : {
		kind: t,
		payload: n,
		label: e.textContent || t
	};
}
function Ut(e, t) {
	let n = e.getAttribute("title");
	n && t.setAttribute("title", n);
	let r = e.getAttribute("dir");
	[
		"ltr",
		"rtl",
		"auto"
	].includes(r) && t.setAttribute("dir", r);
	let i = Rt(e.style?.getPropertyValue("color"));
	if (i && t.style.setProperty("color", i), t.tagName === "A") {
		let n = Lt(e.getAttribute("href"));
		n && t.setAttribute("href", n), e.getAttribute("target") === "_blank" && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer"));
	}
	if (t.tagName === "SPAN") {
		let n = Ht(e);
		n && (t.setAttribute("data-rich-node", n.kind), t.setAttribute("data-rich-payload", zt(n.payload)), t.setAttribute("contenteditable", "false"));
	}
	if (t.tagName === "TD" || t.tagName === "TH") for (let n of ["colspan", "rowspan"]) {
		let r = Number.parseInt(e.getAttribute(n), 10);
		r >= 1 && r <= 100 && t.setAttribute(n, String(r));
	}
}
function Wt(e, t, n) {
	if (e.nodeType === 3) {
		t.appendChild(n.createTextNode(e.nodeValue || ""));
		return;
	}
	if (e.nodeType !== 1) return;
	let r = e.tagName.toLowerCase();
	if (Mt.has(r)) return;
	if (!jt.has(r)) {
		for (let r of [...e.childNodes]) Wt(r, t, n);
		return;
	}
	let i = n.createElement(r);
	if (Ut(e, i), i.hasAttribute("data-rich-node")) i.textContent = e.textContent || i.getAttribute("data-rich-node");
	else for (let t of [...e.childNodes]) Wt(t, i, n);
	t.appendChild(i);
}
function Gt(e) {
	let t = String(e || "");
	if (!t) return "";
	if (typeof DOMParser > "u") return It(t);
	let n = new DOMParser().parseFromString(t, "text/html"), r = n.createElement("div");
	for (let e of [...n.body.childNodes]) Wt(e, r, n);
	return r.innerHTML;
}
function Kt(e) {
	return It(e).replace(/\r\n?|\n/g, "<br>");
}
//#endregion
//#region src/components/rich-text/RichContent.vue
function qt(e) {
	let t = {};
	for (let n of [...e.attributes]) n.name !== "class" && (t[n.name] = n.value);
	return t;
}
function Jt(e, t, n) {
	if (e.nodeType === Node.TEXT_NODE) return e.nodeValue || "";
	if (e.nodeType !== Node.ELEMENT_NODE) return null;
	let r = Ht(e);
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
	let i = [...e.childNodes].map((e, r) => Jt(e, t, `${n}.${r}`)).filter((e) => e != null);
	return m(e.tagName.toLowerCase(), {
		...qt(e),
		key: n
	}, i);
}
var Yt = /*#__PURE__*/ H({
	name: "RichContent",
	inheritAttrs: !1,
	props: { html: {
		type: String,
		default: ""
	} },
	setup(e, { slots: t, attrs: n }) {
		let r = i(() => Gt(e.html));
		return () => {
			if (typeof DOMParser > "u") return m("div", {
				...n,
				class: ["rc", n.class],
				innerHTML: r.value
			});
			let e = [...new DOMParser().parseFromString(r.value, "text/html").body.childNodes].map((e, n) => Jt(e, t, String(n))).filter((e) => e != null);
			return m("div", {
				...n,
				class: ["rc", n.class]
			}, e);
		};
	}
}, [["__scopeId", "data-v-db98d003"]]), Xt = { class: "input-desc" }, Zt = ["aria-label"], Qt = ["title"], $t = ["title"], en = ["title"], tn = ["aria-expanded"], nn = ["onMousedown"], rn = ["title", "onMousedown"], an = { class: "desc-color-icon" }, on = [
	"title",
	"aria-label",
	"aria-expanded"
], sn = { class: "desc-link-field" }, cn = ["placeholder"], ln = { class: "desc-link-field" }, un = {
	key: 0,
	class: "desc-link-error"
}, dn = { class: "desc-link-actions" }, fn = {
	type: "submit",
	class: "desc-link-save"
}, pn = ["data-placeholder", "aria-label"], mn = {
	key: 2,
	class: "desc-empty"
}, hn = /*#__PURE__*/ H({
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
			default: () => _t
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
		})), b = i(() => Array.from({ length: m.maxHeadingLevel }, (e, t) => t + 1)), S = T(!1), O = T(null), k = T(null), j = T(null), M = T(null), N = T(!1), P = T(null), I = T(null), B = T(null), H = T(null), U = T(!1), W = w({
			text: "",
			url: ""
		}), ee = i(() => P.value || I.value || j.value);
		function te(e) {
			return Gt(e) || "<p><br></p>";
		}
		function ne(e) {
			!m.editable || !k.value || document.activeElement !== k.value && (k.value.innerHTML = te(e));
		}
		L(() => m.modelValue, ne), L(() => m.editable, (e) => {
			e && g(() => ne(m.modelValue));
		}), x(() => {
			ne(m.modelValue), document.execCommand("defaultParagraphSeparator", !1, "p");
		});
		function re(e) {
			return !!(e && k.value?.contains(e.commonAncestorContainer));
		}
		function G() {
			let e = window.getSelection();
			if (!e?.rangeCount) return;
			let t = e.getRangeAt(0);
			re(t) && (H.value = t.cloneRange());
		}
		function ie() {
			k.value?.focus();
			let e = window.getSelection();
			return !e || !re(H.value) ? !1 : (e.removeAllRanges(), e.addRange(H.value), !0);
		}
		function ae() {
			return re(H.value) ? H.value.toString().trim() : "";
		}
		function oe(e) {
			let t = Vt(e?.kind, e?.payload, e?.label);
			if (!t || !k.value) return null;
			ie(), document.execCommand("insertHTML", !1, t), X();
			let n = k.value.querySelectorAll("[data-rich-node]"), r = n[n.length - 1] || null;
			return r && (B.value = r, ue(r)), r;
		}
		function se(e) {
			return e?.nodeType === Node.ELEMENT_NODE && e.matches?.("[data-rich-node]") ? e : e?.element?.matches?.("[data-rich-node]") ? e.element : B.value?.isConnected ? B.value : null;
		}
		function ce(e, t) {
			let n = se(e), r = Vt(t?.kind, t?.payload, t?.label);
			if (!n || !r) return null;
			let i = document.createElement("template");
			i.innerHTML = r;
			let a = i.content.firstElementChild;
			return n.replaceWith(a), B.value = a, X(), a;
		}
		function le(e) {
			let t = se(e);
			if (!t) return !1;
			let n = t.nextSibling || t.parentNode;
			return t.remove(), B.value = null, n?.nodeType === Node.ELEMENT_NODE && we(n), X(), !0;
		}
		function ue(e) {
			let t = document.createRange(), n = window.getSelection();
			t.setStartAfter(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t), H.value = t.cloneRange();
		}
		function K(e, t) {
			G(), P.value = e, I.value = t, U.value = !1, W.text = e?.textContent || ae(), W.url = e?.getAttribute?.("href") || "", N.value = !0, g(() => M.value?.focus());
		}
		function q(e = null) {
			K(null, e);
		}
		function de(e) {
			K(e, null);
		}
		function fe(e = !1) {
			e !== !0 && (N.value = !1, P.value = null, I.value = null, U.value = !1);
		}
		function pe() {
			let e = Lt(W.url);
			if (!e) {
				U.value = !0;
				return;
			}
			let t = W.text.trim() || e;
			if (P.value?.isConnected) P.value.setAttribute("href", e), P.value.textContent = t;
			else {
				ie();
				let n = window.getSelection();
				if (n?.rangeCount && !n.getRangeAt(0).collapsed && t === n.toString().trim()) document.execCommand("createLink", !1, e);
				else {
					let r = document.createElement("a");
					r.href = e, r.textContent = t;
					let i = n?.rangeCount ? n.getRangeAt(0) : null;
					i && re(i) && (i.deleteContents(), i.insertNode(r), ue(r));
				}
			}
			fe(!1), X();
		}
		function me() {
			let e = P.value;
			if (!e?.isConnected) return fe(!1);
			e.replaceWith(...e.childNodes), fe(!1), X();
		}
		function he(e) {
			let t = e.target.closest?.("a");
			if (t && k.value?.contains(t)) {
				e.preventDefault(), de(t);
				return;
			}
			let n = e.target.closest?.("[data-rich-node]");
			!n || !k.value?.contains(n) || (e.preventDefault(), B.value = n, h("node-select", {
				element: n,
				node: Ht(n)
			}));
		}
		let ge = {
			focus: () => k.value?.focus(),
			rememberSelection: G,
			openLinkEditor: q,
			insertRichNode: oe,
			updateRichNode: ce,
			removeRichNode: le
		};
		function J(e) {
			return y.value.heading.replace("{level}", String(e));
		}
		function Y(e) {
			k.value?.focus(), document.execCommand("styleWithCSS", !1, !1), document.execCommand(e, !1, null), g(X);
		}
		function _e(e) {
			k.value?.focus(), document.execCommand("formatBlock", !1, e), S.value = !1, g(X);
		}
		function ve(e) {
			if (k.value?.focus(), document.execCommand("styleWithCSS", !1, !0), e) {
				document.execCommand("foreColor", !1, e), X();
				return;
			}
			document.execCommand("removeFormat", !1, null), g(() => {
				k.value && (k.value.querySelectorAll("span").forEach((e) => {
					e.style.removeProperty("font-family"), e.style.cssText.trim() || e.replaceWith(...e.childNodes);
				}), X());
			});
		}
		function ye() {
			if (k.value) {
				Te();
				for (let e of [...k.value.children]) {
					if (e.tagName !== "DIV") continue;
					let t = document.createElement("p");
					t.innerHTML = e.innerHTML, e.replaceWith(t);
				}
				X();
			}
		}
		function be() {
			if (!k.value) return "";
			xe(k.value);
			let e = Gt(k.value.innerHTML);
			return e === "<p><br></p>" || e === "<br>" ? "" : e;
		}
		function X() {
			h("update:modelValue", be());
		}
		function xe(e) {
			e.querySelectorAll("strong").forEach((e) => Se(e, "b")), e.querySelectorAll("i").forEach((e) => Se(e, "em")), e.querySelectorAll("span").forEach((e) => {
				let t = e.style.fontWeight, n = e.style.fontStyle, r = e.style.textDecorationLine || e.style.textDecoration, i = null;
				t === "bold" || Number(t) >= 600 ? (e.style.removeProperty("font-weight"), i = "b") : n === "italic" ? (e.style.removeProperty("font-style"), i = "em") : String(r).includes("underline") && (e.style.removeProperty("text-decoration"), e.style.removeProperty("text-decoration-line"), i = "u"), i && Se(e, i);
			});
		}
		function Se(e, t) {
			let n = document.createElement(t);
			for (let t of [...e.attributes]) (t.name !== "style" || e.style.cssText.trim()) && n.setAttribute(t.name, t.value);
			return n.append(...e.childNodes), e.replaceWith(n), n;
		}
		function Ce(e) {
			let t = e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
			for (; t && t !== k.value;) {
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
		function we(e) {
			let t = document.createRange(), n = window.getSelection();
			t.selectNodeContents(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t);
		}
		function Te() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !k.value?.contains(e.anchorNode)) return;
			let t = Ce(e.anchorNode);
			if (!t || t.tagName === "LI") return;
			let n = t.textContent || "";
			(n === "- " || n === " - ") && Ee(t);
		}
		function Ee(e) {
			let t = document.createElement("li");
			t.innerHTML = "<br>";
			let n = document.createElement("ul");
			n.appendChild(t), e.replaceWith(n), we(t);
		}
		function De() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !k.value?.contains(e.anchorNode)) return !1;
			let t = Ce(e.anchorNode);
			if (!t || t.tagName === "LI") return !1;
			let n = (t.textContent || "").replace(/\u00a0/g, " ");
			return n !== "-" && n !== " -" ? !1 : (Ee(t), !0);
		}
		function Oe(e) {
			if (e.key === " ") {
				De() && (e.preventDefault(), X());
				return;
			}
			e.key === "Enter" && (e.preventDefault(), document.execCommand(e.shiftKey ? "insertLineBreak" : "insertParagraph"), X());
		}
		function Z(e) {
			k.value?.focus(), document.execCommand("insertHTML", !1, e), X();
		}
		function ke(e) {
			e.preventDefault();
			let t = e.clipboardData?.getData("text/html"), n = e.clipboardData?.getData("text/plain") || "";
			Z(t ? Gt(t) : Kt(n));
		}
		function Ae(e) {
			let t = document.caretPositionFromPoint?.(e.clientX, e.clientY), n = document.caretRangeFromPoint?.(e.clientX, e.clientY), r = document.createRange();
			if (t) r.setStart(t.offsetNode, t.offset);
			else if (n) r.setStart(n.startContainer, n.startOffset);
			else return;
			r.collapse(!0);
			let i = window.getSelection();
			i.removeAllRanges(), i.addRange(r);
		}
		function je(e) {
			e.preventDefault(), Ae(e);
			let t = e.dataTransfer?.getData("text/html"), n = e.dataTransfer?.getData("text/plain") || "";
			Z(t ? Gt(t) : Kt(n));
		}
		function Me(e) {
			X(), h("blur", e);
		}
		return n({
			focus: () => k.value?.focus(),
			commit: X,
			rememberSelection: G,
			openLinkEditor: q,
			insertRichNode: oe,
			updateRichNode: ce,
			removeRichNode: le
		}), (n, r) => (C(), s("div", Xt, [t.editable ? (C(), s(e, { key: 0 }, [
			c("div", {
				class: "desc-toolbar",
				role: "toolbar",
				"aria-label": y.value.toolbar
			}, [
				c("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.bold,
					onMousedown: r[0] ||= V((e) => Y("bold"), ["prevent"])
				}, [c("b", null, A(y.value.boldShort), 1)], 40, Qt),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.italic,
					onMousedown: r[1] ||= V((e) => Y("italic"), ["prevent"])
				}, [c("i", null, A(y.value.italicShort), 1)], 40, $t),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: y.value.underline,
					onMousedown: r[2] ||= V((e) => Y("underline"), ["prevent"])
				}, [c("u", null, A(y.value.underlineShort), 1)], 40, en),
				r[13] ||= c("div", { class: "desc-sep" }, null, -1),
				c("button", {
					ref_key: "headingTrigger",
					ref: O,
					type: "button",
					class: "desc-btn desc-btn-wide",
					"aria-expanded": S.value,
					"aria-haspopup": "menu",
					onMousedown: r[3] ||= V((e) => S.value = !S.value, ["prevent"])
				}, [u(A(y.value.paragraph) + " ", 1), r[11] ||= c("span", {
					class: "desc-caret",
					"aria-hidden": "true"
				}, "▾", -1)], 40, tn),
				d(ut, {
					open: S.value,
					anchor: O.value,
					"min-width": 160,
					"z-index": 4500,
					role: "menu",
					"aria-label": y.value.paragraph,
					"onUpdate:open": r[5] ||= (e) => S.value = e
				}, {
					default: R(() => [c("button", {
						type: "button",
						class: "desc-drop-item drop-p",
						role: "menuitem",
						onMousedown: r[4] ||= V((e) => _e("p"), ["prevent"])
					}, A(y.value.normal), 33), (C(!0), s(e, null, E(b.value, (e) => (C(), s("button", {
						key: e,
						type: "button",
						class: _(["desc-drop-item", `drop-h${e}`]),
						role: "menuitem",
						onMousedown: V((t) => _e(`h${e}`), ["prevent"])
					}, A(J(e)), 43, nn))), 128))]),
					_: 1
				}, 8, [
					"open",
					"anchor",
					"aria-label"
				]),
				r[14] ||= c("div", { class: "desc-sep" }, null, -1),
				d(wt, {
					"allow-clear": "",
					colors: t.colors,
					"model-value": "",
					"clear-label": y.value.clearColor,
					"aria-label": y.value.color,
					"onUpdate:modelValue": ve
				}, {
					trigger: R(({ toggle: e }) => [c("button", {
						type: "button",
						class: "desc-btn",
						title: y.value.color,
						onMousedown: V((t) => {
							S.value = !1, e();
						}, ["prevent"])
					}, [c("span", an, A(y.value.colorShort), 1)], 40, rn)]),
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
					class: _(["desc-btn", { active: N.value }]),
					title: y.value.link,
					"aria-label": y.value.link,
					"aria-expanded": N.value,
					"aria-haspopup": "dialog",
					onMousedown: r[6] ||= V((e) => q(), ["prevent"])
				}, [...r[12] ||= [c("span", { "aria-hidden": "true" }, "↗", -1)]], 42, on)) : o("", !0),
				D(n.$slots, "toolbar", {
					editor: ge,
					insertRichNode: oe,
					updateRichNode: ce,
					removeRichNode: le
				}, void 0, !0)
			], 8, Zt),
			d(ut, {
				open: N.value,
				anchor: ee.value,
				"min-width": 260,
				"z-index": 4500,
				role: "dialog",
				"aria-label": y.value.link,
				"onUpdate:open": fe
			}, {
				default: R(() => [c("form", {
					class: "desc-link-form",
					onSubmit: V(pe, ["prevent"])
				}, [
					c("label", sn, [c("span", null, A(y.value.linkText), 1), z(c("input", {
						"onUpdate:modelValue": r[7] ||= (e) => W.text = e,
						type: "text",
						placeholder: y.value.linkTextPlaceholder
					}, null, 8, cn), [[F, W.text]])]),
					c("label", ln, [c("span", null, A(y.value.linkUrl), 1), z(c("input", {
						ref_key: "linkUrlInput",
						ref: M,
						"onUpdate:modelValue": r[8] ||= (e) => W.url = e,
						type: "text",
						inputmode: "url",
						placeholder: "https://…"
					}, null, 512), [[F, W.url]])]),
					U.value ? (C(), s("span", un, A(y.value.linkInvalid), 1)) : o("", !0),
					c("div", dn, [
						P.value ? (C(), s("button", {
							key: 0,
							type: "button",
							class: "desc-link-remove",
							onClick: me
						}, A(y.value.removeLink), 1)) : o("", !0),
						c("button", {
							type: "button",
							class: "desc-link-cancel",
							onClick: r[9] ||= (e) => fe(!1)
						}, A(y.value.cancel), 1),
						c("button", fn, A(y.value.saveLink), 1)
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
				ref: k,
				class: "desc-editor",
				contenteditable: "true",
				spellcheck: "false",
				translate: "no",
				autocorrect: "off",
				"data-placeholder": t.placeholder,
				"aria-label": t.ariaLabel || t.placeholder,
				onInput: ye,
				onKeydown: Oe,
				onKeyup: G,
				onMouseup: G,
				onClick: he,
				onPaste: ke,
				onDrop: je,
				onFocus: r[10] ||= (e) => n.$emit("focus", e),
				onBlur: Me
			}, null, 40, pn)
		], 64)) : t.modelValue ? (C(), a(Yt, {
			key: 1,
			class: "desc-view",
			html: t.modelValue
		}, l({ _: 2 }, [n.$slots.node ? {
			name: "node",
			fn: R((e) => [D(n.$slots, "node", v(p(e)), void 0, !0)]),
			key: "0"
		} : void 0]), 1032, ["html"])) : (C(), s("div", mn, A(t.placeholder), 1))]));
	}
}, [["__scopeId", "data-v-feac13b3"]]), gn = [
	"aria-label",
	"aria-expanded",
	"disabled"
], _n = {
	class: "share-account-avatar",
	"aria-hidden": "true"
}, vn = {
	key: 0,
	class: "share-account-label"
}, yn = {
	key: 1,
	class: "share-account-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true"
}, bn = /*#__PURE__*/ H({
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
		return (t, r) => (C(), a(et, {
			title: e.title,
			disabled: e.disabled,
			block: ""
		}, {
			trigger: R(({ open: i }) => [c("button", {
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
				c("span", _n, [D(t.$slots, "avatar", {}, () => [u(A(n.value), 1)], !0)]),
				e.expanded ? (C(), s("span", vn, A(e.label), 1)) : o("", !0),
				e.expanded ? (C(), s("svg", yn, [...r[0] ||= [c("path", {
					d: "m4 6 4 4 4-4",
					stroke: "currentColor",
					"stroke-width": "1.7",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, null, -1)]])) : o("", !0)
			], 10, gn)]),
			default: R(({ close: e }) => [D(t.$slots, "default", { close: e }, void 0, !0)]),
			_: 3
		}, 8, ["title", "disabled"]));
	}
}, [["__scopeId", "data-v-e71617a9"]]), xn = {
	key: 1,
	class: "share-app-shell__rail"
}, Sn = /*#__PURE__*/ H({
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
			e.sidebarVisible ? D(t.$slots, "sidebar", {}, void 0, !0, 0) : o("", !0),
			(C(), a(O(e.contentTag), { class: "share-app-shell__content" }, {
				default: R(() => [D(t.$slots, "default", {}, void 0, !0)]),
				_: 3
			})),
			t.$slots.rail ? (C(), s("aside", xn, [D(t.$slots, "rail", {}, void 0, !0)])) : o("", !0),
			D(t.$slots, "overlay", {}, void 0, !0)
		], 6));
	}
}, [["__scopeId", "data-v-db4502d8"]]), Cn = ["aria-label", "title"], wn = {
	class: "share-sidebar-toggle__icon sidebar-icon",
	"aria-hidden": "true"
}, Tn = {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none"
}, En = {
	key: 0,
	d: "m11 6-3 3 3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Dn = {
	key: 1,
	d: "m9 6 3 3-3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, On = { class: "share-sidebar-label sidebar-label" }, kn = /*#__PURE__*/ H({
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
		}, [c("span", wn, [(C(), s("svg", Tn, [
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
			e.expanded ? (C(), s("path", En)) : (C(), s("path", Dn))
		]))]), c("span", On, A(e.expanded ? e.collapseLabel : e.expandLabel), 1)], 8, Cn));
	}
}, [["__scopeId", "data-v-82e613bd"]]), An = {
	key: 0,
	class: "share-sidebar-head"
}, jn = ["aria-label"], Mn = {
	key: 1,
	class: "share-sidebar-tools"
}, Nn = {
	key: 2,
	class: "share-sidebar-account"
}, Pn = /*#__PURE__*/ H({
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
		elevated: {
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
		L(f, (e) => {
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
		}), (t, n) => (C(), s("aside", { class: _(["share-app-sidebar app-sidebar", [
			f.value && "share-app-sidebar--expanded app-sidebar--expanded",
			e.elevated && "share-app-sidebar--elevated",
			`share-app-sidebar--${e.position}`,
			`share-app-sidebar--mobile-${e.mobileMode}`,
			`share-app-sidebar--breakpoint-${e.mobileBreakpoint}`
		]]) }, [
			t.$slots.brand ? (C(), s("div", An, [D(t.$slots, "brand", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			c("nav", {
				class: "share-sidebar-nav",
				"aria-label": e.ariaLabel
			}, [D(t.$slots, "default", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)], 8, jn),
			e.showToggle || t.$slots.tools ? (C(), s("div", Mn, [e.showToggle ? (C(), a(kn, {
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
			t.$slots.account ? (C(), s("div", Nn, [D(t.$slots, "account", { expanded: f.value }, void 0, !0)])) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-70b969e0"]]), Fn = {
	class: "share-sidebar-brand__icon sidebar-brand-icon",
	"aria-hidden": "true"
}, In = { class: "share-sidebar-label share-sidebar-brand__label sidebar-label sidebar-brand-label" }, Ln = /*#__PURE__*/ H(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (C(), a(O(e.as), h({
			class: "share-sidebar-brand sidebar-brand",
			"aria-label": e.ariaLabel || e.label
		}, t.$attrs), {
			default: R(() => [c("span", Fn, [D(t.$slots, "icon", {}, () => [e.icon ? (C(), a(O(e.icon), {
				key: 0,
				size: 22,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", In, [D(t.$slots, "default", {}, () => [u(A(e.label), 1)], !0)])]),
			_: 3
		}, 16, ["aria-label"]));
	}
}), [["__scopeId", "data-v-a9c8581a"]]), Rn = { class: "share-sidebar-group" }, zn = /*#__PURE__*/ H({
	__name: "SidebarGroup",
	props: { label: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (C(), s("div", Rn, [D(t.$slots, "default", {}, () => [u(A(e.label), 1)], !0)]));
	}
}, [["__scopeId", "data-v-169df1ac"]]), Bn = {
	class: "share-sidebar-icon sidebar-icon",
	"aria-hidden": "true"
}, Vn = { class: "share-sidebar-label sidebar-label" }, Hn = /*#__PURE__*/ H(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (C(), a(O(e.as), h({
			class: ["share-sidebar-link sidebar-link", { active: e.active }],
			title: e.title || e.label,
			"aria-current": e.active ? "page" : void 0
		}, t.$attrs), {
			default: R(() => [c("span", Bn, [D(t.$slots, "icon", {}, () => [e.icon ? (C(), a(O(e.icon), {
				key: 0,
				size: 20,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", Vn, [D(t.$slots, "default", {}, () => [u(A(e.label), 1)], !0)])]),
			_: 3
		}, 16, [
			"class",
			"title",
			"aria-current"
		]));
	}
}), [["__scopeId", "data-v-28979fe2"]]), Un = {
	key: 0,
	class: "share-editor-panel__title"
}, Wn = /*#__PURE__*/ H({
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
		return (t, n) => (C(), s("div", { class: _(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (C(), s("div", Un, [D(t.$slots, "title", {}, () => [u(A(e.title), 1)], !0)])) : o("", !0), D(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-055dcd8d"]]), Gn = { class: "share-editor-section-title" }, Kn = { class: "share-editor-section-title__text" }, qn = {
	key: 0,
	class: "share-editor-section-title__actions"
}, Jn = /*#__PURE__*/ H({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (C(), s("div", Gn, [c("span", Kn, [D(t.$slots, "default", {}, () => [u(A(e.title), 1)], !0)]), t.$slots.actions ? (C(), s("span", qn, [D(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)]));
	}
}, [["__scopeId", "data-v-03237796"]]), Yn = { class: "share-editor-section" }, Xn = /*#__PURE__*/ H({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (C(), s("section", Yn, [e.title || t.$slots.title ? (C(), a(Jn, {
			key: 0,
			title: e.title
		}, l({ _: 2 }, [t.$slots.title ? {
			name: "default",
			fn: R(() => [D(t.$slots, "title", {}, void 0, !0)]),
			key: "0"
		} : void 0, t.$slots.actions ? {
			name: "actions",
			fn: R(() => [D(t.$slots, "actions", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, ["title"])) : o("", !0), D(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-6a56d656"]]), Zn = {}, Qn = { class: "share-editor-total" };
function $n(e, t) {
	return C(), s("div", Qn, [D(e.$slots, "default", {}, void 0, !0)]);
}
var er = /*#__PURE__*/ H(Zn, [["render", $n], ["__scopeId", "data-v-72dfd940"]]);
//#endregion
//#region src/composables/useFullscreenViewportHeight.js
function tr(e = .94) {
	let t = T(`${Math.round(e * 100)}dvh`);
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
var nr = [], rr = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", ir = 0, ar = "";
function or(e = Symbol("share-overlay")) {
	return nr.push(e), e;
}
function sr(e) {
	let t = nr.lastIndexOf(e);
	t >= 0 && nr.splice(t, 1);
}
function cr(e) {
	return nr.at(-1) === e;
}
function lr(e) {
	e && ([...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")].find((e) => e.getClientRects().length > 0) || e).focus?.({ preventScroll: !0 });
}
function ur(e, t) {
	if (e.key !== "Tab" || !t) return;
	let n = [...t.querySelectorAll(rr)].filter((e) => e.getClientRects().length > 0);
	if (!n.length) {
		e.preventDefault(), t.focus?.({ preventScroll: !0 });
		return;
	}
	let r = n[0], i = n.at(-1);
	e.shiftKey && (document.activeElement === r || !t.contains(document.activeElement)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || !t.contains(document.activeElement)) && (e.preventDefault(), r.focus());
}
function dr(e) {
	e instanceof HTMLElement && e.isConnected && e.focus({ preventScroll: !0 });
}
function fr() {
	if (typeof document > "u") return () => {};
	ir === 0 && (ar = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden"), ir += 1;
	let e = !1;
	return () => {
		e || (e = !0, ir = Math.max(0, ir - 1), ir === 0 && (document.documentElement.style.overflow = ar));
	};
}
var pr = /* @__PURE__ */ new WeakMap();
function mr(e, { blur: t = "8px", duration: n = "300ms" } = {}) {
	if (!e) return () => {};
	let r = pr.get(e);
	r || (r = {
		count: 0,
		filter: e.style.filter,
		transition: e.style.transition
	}, pr.set(e, r)), r.count += 1, e.style.transition = `filter ${n} ease`, e.style.filter = `blur(${t})`;
	let i = !1;
	return () => {
		i || (i = !0, r.count = Math.max(0, r.count - 1), !(r.count > 0) && (e.style.filter = r.filter, e.style.transition = r.transition, pr.delete(e)));
	};
}
//#endregion
//#region src/components/overlay/AppModal.vue
var hr = ["aria-label"], gr = {
	key: 0,
	class: "am-handle"
}, _r = ["aria-label"], vr = () => window.innerWidth <= 640, yr = 260, $ = 280, br = "cubic-bezier(0.32, 0.72, 0, 1)", xr = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function Sr(e) {
	e.focus({ preventScroll: !0 });
}
var Cr = /*#__PURE__*/ H({
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
		let l = e, u = r, d = T(null), f = T(null), p = tr(), m = i(() => typeof l.width == "number" ? `${l.width}px` : l.width || "480px"), h = T(!1), v = T(0), S = T(0), w = T(0), E = !1, O = null, k = !1, A = () => {}, M = Symbol("app-modal"), N = typeof document < "u" ? document.activeElement : null;
		function P(e) {
			if (!cr(M)) return;
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
			let t = [...f.value?.querySelectorAll(xr) || []].filter((e) => e.getClientRects().length > 0);
			if (!t.length) {
				e.preventDefault(), f.value?.focus();
				return;
			}
			let n = t[0], r = t.at(-1);
			e.shiftKey && (document.activeElement === n || !f.value?.contains(document.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (document.activeElement === r || !f.value?.contains(document.activeElement)) && (e.preventDefault(), n.focus());
		}
		function F() {
			let e = d.value, t = f.value;
			!e || !t || (e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", vr() ? t.style.transform = "translateY(100%)" : (t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					let n = "cubic-bezier(0, 0, 0.4, 1)", r = `opacity ${yr}ms ${n}, backdrop-filter ${yr}ms ${n}, -webkit-backdrop-filter ${yr}ms ${n}`;
					e.style.transition = r, e.style.opacity = "1", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", vr() ? (t.style.transition = `transform ${yr}ms ${br}`, t.style.transform = "translateY(0)") : (t.style.transition = `transform ${yr}ms ${br}, opacity ${yr}ms ${n}`, t.style.transform = "none", t.style.opacity = "1"), setTimeout(() => {
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
			e.style.transition = n, e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", vr() ? (t.style.transition = `transform ${$}ms ${br}`, t.style.transform = "translateY(100%)") : (t.style.transition = `transform ${$}ms ease, opacity ${$}ms ease`, t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), O = setTimeout(() => {
				E || u("close");
			}, 300);
		}
		function L() {
			!l.dismissible || k || (k = !0, I());
		}
		n({ requestClose: L });
		function R(e) {
			if (!l.dismissible) return;
			S.value = e.touches[0].clientY;
			let t = e.target instanceof Element ? e.target : null;
			for (; t && t !== f.value;) {
				let e = window.getComputedStyle(t);
				if (/(auto|scroll)/.test(e.overflowY) && t.scrollHeight > t.clientHeight) break;
				t = t.parentElement;
			}
			w.value = t?.scrollTop || f.value?.scrollTop || 0, h.value = !1, v.value = 0;
		}
		function z(e) {
			if (!l.dismissible) return;
			let t = e.touches[0].clientY - S.value;
			if (!h.value) {
				if (t > 8 && w.value <= 0) h.value = !0;
				else return;
			}
			e.preventDefault(), v.value = Math.max(0, t);
			let n = f.value, r = d.value;
			n && (n.style.transition = "none", n.style.transform = `translateY(${v.value}px)`), r && (r.style.transition = "none", r.style.opacity = String(Math.max(0, 1 - v.value / 320)));
		}
		function B() {
			if (!h.value) return;
			h.value = !1;
			let e = f.value, t = d.value;
			v.value > 100 ? (e && (e.style.transition = `transform ${$}ms ${br}`, e.style.transform = "translateY(100%)"), t && (t.style.transition = `opacity ${$}ms ease`, t.style.opacity = "0"), O = setTimeout(() => {
				E || u("close");
			}, 300)) : (e && (e.style.transition = `transform ${$}ms ${br}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), v.value = 0, setTimeout(() => {
				E || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330));
		}
		function H() {
			if (!h.value) return;
			h.value = !1, v.value = 0;
			let e = f.value, t = d.value;
			e && (e.style.transition = `transform ${$}ms ${br}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), setTimeout(() => {
				E || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330);
		}
		return x(() => {
			or(M), A = fr(), document.addEventListener("keydown", P), g(() => {
				F(), f.value?.contains(document.activeElement) || (f.value?.querySelector(xr)?.focus(), f.value?.contains(document.activeElement) || f.value?.focus());
			});
		}), b(() => {
			sr(M), A(), document.removeEventListener("keydown", P), clearTimeout(O), E = !0, N instanceof HTMLElement && N.isConnected && Sr(N);
		}), (n, r) => (C(), a(t, { to: "body" }, [c("div", {
			ref_key: "overlay",
			ref: d,
			class: "am-overlay",
			style: y([e.zIndex === 3e3 ? {} : { zIndex: e.zIndex }, {
				"--am-fullscreen-height": j(p),
				"--am-width": m.value
			}]),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			onMousedown: V(L, ["self"])
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
			onTouchstartPassive: R,
			onTouchmove: z,
			onTouchendPassive: B,
			onTouchcancelPassive: H
		}, [
			e.showHandle ? (C(), s("div", gr)) : o("", !0),
			e.showClose && !e.fullscreen ? (C(), s("button", {
				key: 1,
				class: "am-close",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: L
			}, "✕", 8, _r)) : o("", !0),
			D(n.$slots, "default", {}, void 0, !0)
		], 34)], 44, hr)]));
	}
}, [["__scopeId", "data-v-ddded319"]]), wr = { class: "aem-shell" }, Tr = { class: "aem-heading" }, Er = { class: "aem-title" }, Dr = {
	key: 0,
	class: "aem-subtitle"
}, Or = {
	key: 0,
	class: "aem-header-actions"
}, kr = ["aria-label"], Ar = {
	key: 0,
	class: "aem-footer"
}, jr = /*#__PURE__*/ H({
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
		return (r, i) => (C(), a(Cr, {
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
			default: R(() => [c("section", wr, [
				c("header", { class: _(["aem-header", { "aem-header-with-actions": !!r.$slots["header-actions"] }]) }, [
					i[3] ||= c("span", {
						class: "aem-handle",
						"aria-hidden": "true"
					}, null, -1),
					c("div", Tr, [D(r.$slots, "title", {}, () => [c("h2", Er, A(e.title), 1), e.subtitle ? (C(), s("span", Dr, A(e.subtitle), 1)) : o("", !0)], !0)]),
					r.$slots["header-actions"] ? (C(), s("div", Or, [D(r.$slots, "header-actions", {}, void 0, !0)])) : o("", !0),
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
					})], -1)]], 8, kr)) : o("", !0)
				], 2),
				c("div", { class: _(["aem-body", {
					"aem-body-flush": !e.padded,
					"aem-body-no-scroll": !e.bodyScroll
				}]) }, [D(r.$slots, "default", {}, void 0, !0)], 2),
				r.$slots.footer ? (C(), s("footer", Ar, [D(r.$slots, "footer", {}, void 0, !0)])) : o("", !0)
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
}, [["__scopeId", "data-v-0a15c618"]]), Mr = ["aria-label"], Nr = {
	key: 0,
	class: "share-loading__label",
	"aria-hidden": "true"
}, Pr = /*#__PURE__*/ H({
	__name: "LoadingIndicator",
	props: {
		label: {
			type: String,
			required: !0
		},
		size: {
			type: [String, Number],
			default: "md",
			validator: (e) => typeof e == "number" && e > 0 || [
				"xs",
				"sm",
				"md",
				"lg"
			].includes(e)
		},
		inline: {
			type: Boolean,
			default: !1
		},
		showLabel: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = i(() => `${typeof t.size == "number" ? t.size : {
			xs: 16,
			sm: 32,
			md: 72,
			lg: 104
		}[t.size] || 72}px`);
		return (t, r) => (C(), s("span", {
			class: _(["share-loading", { "share-loading--inline": e.inline }]),
			style: y({ "--loading-size": n.value }),
			role: "status",
			"aria-label": e.label
		}, [r[0] ||= c("svg", {
			class: "share-loading__art",
			viewBox: "0 0 24 24",
			fill: "none",
			"aria-hidden": "true"
		}, [c("circle", {
			class: "share-loading__track",
			cx: "12",
			cy: "12",
			r: "9",
			"vector-effect": "non-scaling-stroke"
		}), c("circle", {
			class: "share-loading__arc",
			cx: "12",
			cy: "12",
			r: "9",
			"stroke-dasharray": "16 41",
			"vector-effect": "non-scaling-stroke"
		})], -1), e.showLabel ? (C(), s("span", Nr, A(e.label), 1)) : o("", !0)], 14, Mr));
	}
}, [["__scopeId", "data-v-d616d1a7"]]), Fr = {
	key: 0,
	class: "cd-message"
}, Ir = { class: "cd-actions" }, Lr = ["disabled"], Rr = ["aria-busy", "disabled"], zr = /*#__PURE__*/ H({
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
		let n = e, r = t, l = i(() => n.open === null || n.open), d = i(() => n.confirmText || n.confirmLabel), f = i(() => n.cancelText || n.cancelLabel), p = i(() => n.confirmKind || n.variant);
		function m() {
			n.open !== null && r("update:open", !1);
		}
		function h() {
			n.loading || (r("cancel"), m());
		}
		function g() {
			n.loading || (r("confirm"), m());
		}
		return (t, n) => l.value ? (C(), a(jr, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: h
		}, {
			footer: R(() => [c("div", Ir, [c("button", {
				type: "button",
				class: "cd-btn-cancel",
				disabled: e.loading,
				onClick: h
			}, A(f.value), 9, Lr), c("button", {
				type: "button",
				class: _(["cd-btn-confirm", `cd-btn--${p.value}`]),
				"aria-busy": e.loading,
				disabled: e.loading,
				onClick: g
			}, [e.loading ? (C(), a(Pr, {
				key: 0,
				label: e.loadingLabel,
				size: "xs",
				class: "button-loading",
				"aria-hidden": "true"
			}, null, 8, ["label"])) : o("", !0), u(" " + A(e.loading ? e.loadingLabel : d.value), 1)], 10, Rr)])]),
			default: R(() => [e.message ? (C(), s("div", Fr, A(e.message), 1)) : o("", !0)]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : o("", !0);
	}
}, [["__scopeId", "data-v-db9d39ae"]]), Br = {
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
		return (t, n) => e.open ? (C(), a(Cr, {
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
			default: R(() => [D(t.$slots, "default")]),
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
function Vr({ open: e = 420, close: t = 300 } = {}) {
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
var Hr = ["aria-label"], Ur = { class: "ms-head-content" }, Wr = ["aria-label"], Gr = 320, Kr = 260, qr = "8px", Jr = /*#__PURE__*/ H({
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
		let l = e, u = r, d = ct(), f = P(), p = i(() => l.mode === "add"), m = i(() => l.showClose === null ? !!f.head : l.showClose), h = i(() => l.nav ? l.nav.view.value : "detail"), v = i(() => l.nav ? l.nav.detailStyle.value : null), S = i(() => l.nav ? l.nav.subStyle.value : null), w = i(() => !!l.nav && h.value !== "detail"), E = T(null), O = T(null), k = T(null), A = T(null), M = T(null), N = T(null), F = T(!1), I = T(!1), R = T(!1), z = T(!1), B = T(!1), { EASE: H, visible: U, morphing: W, playClose: ee, playOpen: te } = Vr(), ne = () => d.value ? "0px" : "18px", re = i(() => ({
			"--ms-w": `${l.width}px`,
			"--ms-body-w": `${l.width}px`,
			"--ms-frame": l.frameColor || void 0
		}));
		function G() {
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
		function ie() {
			if (l.nav && h.value !== "detail") {
				l.nav.backToDetail(), u("back");
				return;
			}
			if (B.value = !1, De(!1), p.value) {
				R.value = !1, U.value = !1, setTimeout(() => u("close"), 320);
				return;
			}
			ee(E.value, G(), {
				fromRadius: ne(),
				toRadius: l.originRadius
			}, () => u("close"));
		}
		function ae() {
			I.value = !0, B.value = !1, U.value = !1, De(!1), setTimeout(() => u("close"), 220);
		}
		let oe = Symbol("morph-sheet"), se = typeof document < "u" ? document.activeElement : null;
		function ce(e) {
			if (cr(oe)) {
				if (e.key === "Escape") {
					ie();
					return;
				}
				ur(e, E.value);
			}
		}
		function le(e) {
			let t = e?.firstElementChild;
			return t ? t.scrollHeight : e?.scrollHeight || 0;
		}
		function ue() {
			return Math.floor(window.innerHeight * .9) - (O.value?.offsetHeight || 0) - (k.value?.offsetHeight || 0);
		}
		function K(e) {
			if (d.value || !A.value || W.value) return;
			let t = l.nav ? l.nav.pos.value : 0, n = le(M.value), r = N.value ? le(N.value) : n, i = n * (1 - t) + r * t, a = Math.min(i, Math.max(120, ue()));
			A.value.style.transition = e ? `height ${Gr}ms ${H}` : "none", A.value.style.height = `${a}px`;
		}
		let q = null;
		function de() {
			q && (q.disconnect(), [M.value?.firstElementChild, N.value?.firstElementChild].forEach((e) => {
				e && q.observe(e);
			}));
		}
		function fe() {
			W.value || l.nav && l.nav.animating.value || me || K(!1);
		}
		l.nav && (L(() => l.nav.pos.value, () => K(l.nav.animating.value)), L(() => l.nav.view.value, (e, t) => g(() => {
			de(), e !== "detail" && t === "detail" && N.value && (N.value.offsetWidth, l.nav.enterSub()), l.nav.animating.value || K(!1);
		})));
		let pe = T(0), me = !1, he = 0, ge = 0, J = null, Y = 0, _e = null, ve = 0, ye = 0, be = 0;
		function X(e) {
			!d.value || W.value || (he = e.touches[0].clientX, ge = e.touches[0].clientY, _e = e.target, J = null);
		}
		function xe() {
			let e = _e;
			for (; e && e !== E.value;) {
				if (e.scrollHeight > e.clientHeight + 1) {
					let t = getComputedStyle(e).overflowY;
					if ((t === "auto" || t === "scroll") && e.scrollTop > 0) return !1;
				}
				e = e.parentElement;
			}
			return !0;
		}
		function Se(e) {
			if (!d.value || W.value || J === "scroll") return;
			let t = e.touches[0].clientX - he, n = e.touches[0].clientY - ge;
			if (J === null) {
				if (l.showBack && l.nav && t > 8 && Math.abs(t) > Math.abs(n)) {
					J = "back", me = !0, Y = t, ve = e.touches[0].clientX, ye = e.timeStamp, be = 0, l.nav.dragStart(A.value?.clientWidth || window.innerWidth);
					return;
				}
				if (n > 6 && xe() && Math.abs(n) >= Math.abs(t)) J = "drag";
				else if (Math.abs(n) > 6 || Math.abs(t) > 6) {
					J = "scroll";
					return;
				} else return;
			}
			if (J === "back") {
				Y = Math.max(0, t), e.cancelable && e.preventDefault();
				let n = e.touches[0].clientX, r = e.timeStamp;
				r > ye && (be = (n - ve) / (r - ye)), ve = n, ye = r, l.nav.dragMove(Y);
				return;
			}
			if (J !== "drag") return;
			e.cancelable && e.preventDefault(), pe.value = Math.max(0, n);
			let r = E.value;
			r && (r.style.transition = "none", r.style.transform = `translateY(${pe.value}px)`);
		}
		function Ce() {
			if (J === "back") {
				me = !1, J = null, l.nav.dragEnd(Y, be), Y = 0, be = 0;
				return;
			}
			if (J !== "drag") {
				J = null;
				return;
			}
			J = null;
			let e = E.value;
			if (pe.value > 120) {
				we();
				return;
			}
			pe.value = 0, e && (e.style.transition = `transform .26s ${H}`, e.style.transform = "translateY(0)");
		}
		function we() {
			let e = E.value;
			e && (e.style.transition = `transform ${Kr}ms ${H}`, e.style.transform = `translateY(${window.innerHeight}px)`), U.value = !1, B.value = !1, Me(), De(!1), setTimeout(() => u("close"), Kr);
		}
		let Te = () => {};
		function Ee() {
			return typeof l.backgroundTarget == "string" ? document.querySelector(l.backgroundTarget) : l.backgroundTarget instanceof Element ? l.backgroundTarget : null;
		}
		function De(e) {
			Te(), Te = () => {}, !(!e || d.value || !l.blurBackground) && (Te = mr(Ee(), { blur: qr }));
		}
		let Oe = "", Z = "", ke = !1;
		function Ae() {
			let e = l.originEl;
			e && (Oe = e.style.opacity, Z = e.style.transition);
		}
		function je(e) {
			let t = l.originEl;
			t && (t.style.opacity = e ? "0" : Oe);
		}
		function Me() {
			let e = l.originEl;
			if (!e) return;
			ke = !0;
			let t = Z && Z !== "none" ? `${Z}, ` : "";
			e.style.transition = `${t}opacity ${Kr}ms ease`, e.style.opacity = "0", requestAnimationFrame(() => {
				e.style.opacity = Oe;
			}), setTimeout(() => {
				e.style.opacity = Oe, e.style.transition = Z, ke = !1;
			}, 280);
		}
		let Ne = () => {};
		function Pe() {
			W.value || (d.value && A.value ? A.value.style.height = "" : K(!1));
		}
		return x(async () => {
			or(oe), Ne = fr(), typeof ResizeObserver < "u" && (q = new ResizeObserver(fe)), await g(), K(!1), de(), F.value = !0, p.value ? (U.value = !0, requestAnimationFrame(() => {
				R.value = !0, z.value = !0;
			})) : (Ae(), je(!0), te(E.value, l.originRect, {
				fromRadius: l.originRadius,
				toRadius: ne()
			}), requestAnimationFrame(() => {
				z.value = !0;
			})), De(!0), setTimeout(() => {
				B.value = !0, K(!1), lr(E.value);
			}, 20), document.addEventListener("keydown", ce), window.addEventListener("resize", Pe);
		}), b(() => {
			sr(oe), Ne(), De(!1), !p.value && !ke && je(!1), document.removeEventListener("keydown", ce), window.removeEventListener("resize", Pe), q?.disconnect(), dr(se);
		}), n({
			close: ie,
			finishNow: ae
		}), (n, r) => (C(), a(t, { to: "body" }, [c("div", {
			class: _(["ms-overlay", { visible: j(U) }]),
			style: y(e.zIndex === 1e3 ? null : { zIndex: e.zIndex }),
			onClick: V(ie, ["self"])
		}, [c("div", {
			ref_key: "panelEl",
			ref: E,
			class: _(["ms-sheet", {
				shown: F.value,
				closing: I.value,
				entered: R.value,
				padded: z.value,
				"add-sheet": p.value,
				"ms-framed": e.frameColor
			}]),
			style: y(re.value),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			tabindex: "-1",
			onTouchstartPassive: X,
			onTouchmove: Se,
			onTouchend: Ce,
			onTouchcancel: Ce
		}, [
			r[0] ||= c("div", { class: "ms-grab" }, null, -1),
			n.$slots.head ? (C(), s("div", {
				key: 0,
				ref_key: "headEl",
				ref: O,
				class: "ms-head"
			}, [c("div", Ur, [D(n.$slots, "head", {}, void 0, !0)]), m.value ? (C(), s("button", {
				key: 0,
				class: "ms-x",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: ie
			}, "✕", 8, Wr)) : o("", !0)], 512)) : o("", !0),
			c("div", {
				ref_key: "bodyEl",
				ref: A,
				class: "ms-body"
			}, [c("div", {
				ref_key: "detailCellEl",
				ref: M,
				class: "ms-cell",
				style: y(v.value)
			}, [D(n.$slots, "detail", { revealed: B.value }, () => [D(n.$slots, "default", { revealed: B.value }, void 0, !0)], !0)], 4), w.value ? (C(), s("div", {
				key: 0,
				ref_key: "subCellEl",
				ref: N,
				class: "ms-cell",
				style: y(S.value)
			}, [D(n.$slots, "sub", {}, void 0, !0)], 4)) : o("", !0)], 512),
			e.showFoot && n.$slots.foot ? (C(), s("div", {
				key: 1,
				ref_key: "footEl",
				ref: k,
				class: "ms-foot"
			}, [D(n.$slots, "foot", {}, void 0, !0)], 512)) : o("", !0)
		], 46, Hr)], 6)]));
	}
}, [["__scopeId", "data-v-bab5d7c5"]]), Yr = { class: "form-actions" }, Xr = ["disabled"], Zr = ["aria-busy", "disabled"], Qr = /*#__PURE__*/ H({
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
		return (t, n) => (C(), s("div", Yr, [c("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, A(e.cancelText), 9, Xr), c("button", {
			type: "button",
			class: "form-actions__submit",
			"aria-busy": e.loading,
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, [e.loading ? (C(), a(Pr, {
			key: 0,
			label: e.loadingText,
			size: "xs",
			class: "button-loading",
			"aria-hidden": "true"
		}, null, 8, ["label"])) : o("", !0), u(" " + A(e.loading ? e.loadingText : e.submitText), 1)], 8, Zr)]));
	}
}, [["__scopeId", "data-v-aa869fab"]]), $r = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], ei = /*#__PURE__*/ H({
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
		return x(() => {
			n.autofocus && r.value?.focus();
		}), t({ focus: () => r.value?.focus() }), (t, n) => (C(), s("input", {
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
			onKeydown: n[2] ||= B((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, $r));
	}
}, [["__scopeId", "data-v-e2d6bc8e"]]), ti = {
	key: 0,
	class: "tpd-message"
}, ni = {
	key: 1,
	class: "tpd-label"
}, ri = /*#__PURE__*/ H({
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
		let n = e, r = t, c = i(() => n.open === null || n.open), l = i(() => n.confirmText || n.confirmLabel), u = i(() => n.cancelText || n.cancelLabel), f = T(n.value || n.initial);
		L(() => n.value, (e) => {
			f.value = e;
		}), L(() => n.open, (e) => {
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
		return (t, n) => c.value ? (C(), a(jr, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: R(() => [d(Qr, {
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
			default: R(() => [
				e.message ? (C(), s("div", ti, A(e.message), 1)) : o("", !0),
				e.label ? (C(), s("label", ni, A(e.label), 1)) : o("", !0),
				d(ei, {
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
}, [["__scopeId", "data-v-ff9d61bb"]]), ii = { class: "form-field-label" }, ai = {
	key: 0,
	class: "form-field-hint"
}, oi = /*#__PURE__*/ H({
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
		return (t, n) => (C(), s("div", { class: _(["form-field", { "form-field--vertical": e.vertical }]) }, [c("span", ii, [u(A(e.label), 1), e.hint ? (C(), s("span", ai, A(e.hint), 1)) : o("", !0)]), D(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-01093950"]]), si = { class: "fn-wrap" }, ci = [
	"value",
	"min",
	"max"
], li = /*#__PURE__*/ H({
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
		return (t, n) => (C(), s("div", si, [
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[0] ||= V((e) => o(-1), ["stop"])
			}, "−"),
			c("input", {
				class: "fn-input",
				type: "number",
				value: e.value,
				min: e.min,
				max: e.max,
				onChange: a
			}, null, 40, ci),
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[1] ||= V((e) => o(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-df9f8db7"]]), ui = ["value"], di = /*#__PURE__*/ H({
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
		return x(() => {
			r.autofocus && a.value?.focus();
		}), t({ focus: () => a.value?.focus() }), (t, n) => (C(), s("select", {
			ref_key: "selectRef",
			ref: a,
			class: "form-select",
			value: e.value,
			onChange: o
		}, [D(t.$slots, "default", {}, void 0, !0)], 40, ui));
	}
}, [["__scopeId", "data-v-3eb4c36d"]]), fi = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], pi = /*#__PURE__*/ H({
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
		}, null, 40, fi));
	}
}, [["__scopeId", "data-v-31024142"]]), mi = {
	class: "share-inline-edit__measure",
	"aria-hidden": "true"
}, hi = {
	key: 0,
	class: "share-inline-edit__view"
}, gi = { class: "share-inline-edit__value" }, _i = ["aria-label", "disabled"], vi = ["onKeydown"], yi = [
	"value",
	"aria-label",
	"disabled",
	"aria-invalid"
], bi = ["value", "disabled"], xi = [
	"value",
	"aria-label",
	"placeholder",
	"maxlength",
	"required",
	"disabled",
	"aria-invalid"
], Si = {
	key: 2,
	class: "share-inline-edit__actions"
}, Ci = ["aria-label", "disabled"], wi = ["aria-label", "disabled"], Ti = {
	key: 2,
	class: "share-inline-edit__error",
	role: "alert"
}, Ei = /*#__PURE__*/ H({
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
		let r = t, a = n, l = T(!1), d = T(!1), f = T(""), p = T(r.modelValue), m = T(null), h = T(null), v = i(() => r.forceOpen || l.value), y = (e) => r.options?.find((t) => String(t.value) === String(e))?.label, b = i(() => r.displayValue ?? y(r.modelValue) ?? (r.modelValue === "" || r.modelValue == null ? r.placeholder : r.modelValue)), x = i(() => {
			let e = v.value ? y(p.value) ?? p.value : b.value;
			return e === "" || e == null ? r.placeholder || "\xA0" : String(e);
		});
		L(() => r.modelValue, (e) => {
			l.value || (p.value = e);
		}), L(() => r.forceOpen, () => {
			l.value = !1, p.value = r.modelValue, f.value = "";
		});
		async function S() {
			r.disabled || (p.value = r.modelValue, f.value = "", l.value = !0, await g(), m.value?.focus(), m.value?.select?.());
		}
		function w(e) {
			p.value = r.options ? r.options.find((t) => String(t.value) === e)?.value ?? e : e, r.forceOpen && a("update:modelValue", p.value);
		}
		function O() {
			d.value || r.forceOpen || (l.value = !1, p.value = r.modelValue, f.value = "", a("cancel"), g(() => h.value?.focus()));
		}
		function k(e) {
			e.isComposing || r.forceOpen || (e.preventDefault(), j());
		}
		async function j() {
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
		return (n, r) => (C(), s("span", { class: _(["share-inline-edit", { "share-inline-edit--open": v.value }]) }, [
			c("span", mi, A(x.value), 1),
			v.value ? (C(), s("span", {
				key: 1,
				class: "share-inline-edit__editor",
				onKeydown: [B(V(O, ["stop", "prevent"]), ["esc"]), B(k, ["enter"])]
			}, [t.options ? (C(), s("select", {
				key: 0,
				ref_key: "input",
				ref: m,
				value: p.value,
				"aria-label": t.label,
				disabled: t.disabled || d.value,
				"aria-invalid": !!f.value,
				onChange: r[0] ||= (e) => w(e.target.value)
			}, [(C(!0), s(e, null, E(t.options, (e) => (C(), s("option", {
				key: String(e.value),
				value: e.value,
				disabled: e.disabled
			}, A(e.label), 9, bi))), 128))], 40, yi)) : (C(), s("input", {
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
				onInput: r[1] ||= (e) => w(e.target.value)
			}, null, 40, xi)), t.forceOpen ? o("", !0) : (C(), s("span", Si, [c("button", {
				type: "button",
				"aria-label": t.confirmLabel,
				disabled: t.disabled || d.value || t.required && !String(p.value ?? "").trim(),
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
			})], -1)]], 8, Ci), c("button", {
				type: "button",
				"aria-label": t.cancelLabel,
				disabled: d.value,
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
			})], -1)]], 8, wi)]))], 40, vi)) : (C(), s("span", hi, [c("span", gi, [D(n.$slots, "default", { value: t.modelValue }, () => [u(A(b.value), 1)], !0)]), t.editable ? (C(), s("button", {
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
			})], -1)]], 8, _i)) : o("", !0)])),
			f.value ? (C(), s("span", Ti, A(f.value), 1)) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-55cecd7d"]]), Di = /*#__PURE__*/ H({
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
			class: _(["share-skeleton", { "share-skeleton--round": e.round }]),
			style: y({
				width: e.width,
				height: e.height
			}),
			"aria-hidden": "true"
		}, null, 6));
	}
}, [["__scopeId", "data-v-ab086de7"]]), Oi = /*#__PURE__*/ H({
	__name: "LoadingState",
	props: {
		label: {
			type: String,
			required: !0
		},
		compact: {
			type: Boolean,
			default: !1
		},
		fill: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, n) => (C(), s("div", {
			class: _(["share-loading-state", {
				"share-loading-state--compact": e.compact,
				"share-loading-state--fill": e.fill
			}]),
			"aria-busy": "true"
		}, [d(Pr, {
			label: e.label,
			size: e.compact ? "sm" : "md",
			inline: e.compact,
			"show-label": ""
		}, null, 8, [
			"label",
			"size",
			"inline"
		])], 2));
	}
}, [["__scopeId", "data-v-d9e04af1"]]), ki = [
	"type",
	"disabled",
	"aria-busy"
], Ai = /*#__PURE__*/ H({
	__name: "ActionButton",
	props: {
		variant: {
			type: String,
			default: "primary",
			validator: (e) => [
				"primary",
				"secondary",
				"quiet",
				"dashed"
			].includes(e)
		},
		type: {
			type: String,
			default: "button"
		},
		iconOnly: Boolean,
		disabled: Boolean,
		loading: Boolean,
		loadingLabel: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		return (t, n) => (C(), s("button", {
			class: _(["share-action-button", [`share-action-button--${e.variant}`, { "share-action-button--icon-only": e.iconOnly }]]),
			type: e.type,
			disabled: e.disabled || e.loading,
			"aria-busy": e.loading || void 0
		}, [e.loading ? (C(), a(Pr, {
			key: 0,
			label: e.loadingLabel,
			size: "xs",
			"aria-hidden": "true"
		}, null, 8, ["label"])) : D(t.$slots, "icon", {}, void 0, !0, 1), c("span", null, [D(t.$slots, "default", {}, void 0, !0)])], 10, ki));
	}
}, [["__scopeId", "data-v-9193544a"]]), ji = (e) => `${Math.round(e)}px`, Mi = (e, t, n, r) => ({
	left: ji(e),
	top: ji(t),
	width: ji(Math.max(0, n)),
	height: ji(Math.max(0, r))
}), Ni = (e, t, n) => Math.max(t, Math.min(e, n));
function Pi(e, t, n, r = !1) {
	let { width: i, height: a, left: o = 0, top: s = 0 } = t, c = o + i, l = s + a, u = Math.min(n.width, i - 24), d = Math.min(n.height, a - 24), f = null;
	if (e && e.width > 0 && e.height > 0) {
		let t = Ni(e.left - 5, o, c), n = Ni(e.top - 5, s, l), r = Ni(e.right + 5, o, c), i = Ni(e.bottom + 5, s, l);
		r > t && i > n && (f = {
			left: t,
			top: n,
			right: r,
			bottom: i,
			width: r - t,
			height: i - n
		});
	}
	let p = f ? [
		Mi(o, s, i, f.top - s),
		Mi(o, f.bottom, i, l - f.bottom),
		Mi(o, f.top, f.left - o, f.height),
		Mi(f.right, f.top, c - f.right, f.height)
	] : [Mi(o, s, i, a)], m = o + (i - u) / 2, h = s + (a - d) / 2;
	return f && (m = Ni(f.left, o + 12, c - u - 12), h = f.bottom + 14 + d <= l - 12 ? f.bottom + 14 : f.top - d - 14, h < s + 12 && f.right + u + 14 <= c - 12 && (m = f.right + 14, h = f.top), h = Ni(h, s + 12, l - d - 12)), r && (m = o + (i - u) / 2, h = f && f.top > s + a / 2 ? s + 12 : l - d - 12), {
		rect: f,
		masks: p,
		spotlight: f ? Mi(f.left, f.top, f.width, f.height) : {},
		card: {
			left: ji(m),
			top: ji(h),
			maxHeight: ji(a - 24)
		}
	};
}
//#endregion
//#region src/components/tutorial/GuidedTour.vue
var Fi = ["aria-label"], Ii = {
	"aria-live": "polite",
	"aria-atomic": "true"
}, Li = {
	key: 0,
	role: "alert"
}, Ri = /*#__PURE__*/ H({
	__name: "GuidedTour",
	props: {
		tour: {
			type: Object,
			required: !0
		},
		mobile: Boolean,
		zIndex: {
			type: Number,
			default: 12e3
		},
		labels: {
			type: Object,
			default: () => ({
				progress: (e, t) => `${e} / ${t}`,
				next: "Next",
				previous: "Back",
				finish: "Done",
				dismiss: "Skip",
				close: "Close",
				retry: "Retry",
				loading: "Loading…",
				error: "This step could not be shown or saved. Retry or close the tour."
			})
		}
	},
	setup(n) {
		let r = n, l = T(null), f = T(Pi(null, {
			width: 1,
			height: 1
		}, {
			width: 1,
			height: 1
		})), p = i(() => f.value.rect), m = i(() => f.value.spotlight), h = i(() => f.value.masks), _ = i(() => f.value.card), v = Symbol("guided-tour"), x = null, S = null, w = !1;
		function D() {
			if (!r.tour.active) return;
			let e = window.visualViewport;
			f.value = Pi(r.tour.target?.getBoundingClientRect(), {
				width: e?.width || window.innerWidth,
				height: e?.height || window.innerHeight,
				left: e?.offsetLeft || 0,
				top: e?.offsetTop || 0
			}, {
				width: l.value?.offsetWidth || 360,
				height: l.value?.offsetHeight || 220
			}, r.mobile), x = requestAnimationFrame(D);
		}
		function O(e) {
			e.stopImmediatePropagation(), e.key === "Escape" ? (e.preventDefault(), r.tour.error ? r.tour.stop() : r.tour.dismiss()) : ur(e, l.value);
		}
		function k(e) {
			l.value?.contains(e.target) || lr(l.value);
		}
		function j() {
			cancelAnimationFrame(x), sr(v), w && (w = !1, window.removeEventListener("keydown", O, !0), document.removeEventListener("focusin", k, !0), dr(S));
		}
		return L(() => r.tour.active, async (e) => {
			if (!e) {
				j();
				return;
			}
			S = document.activeElement, w = !0, or(v), window.addEventListener("keydown", O, !0), document.addEventListener("focusin", k, !0), await g(), r.tour.active && (lr(l.value), D());
		}, { immediate: !0 }), L(() => r.tour.index, async () => {
			await g(), r.tour.active && lr(l.value);
		}), b(j), (r, i) => (C(), a(t, { to: "body" }, [n.tour.active ? (C(), s("div", {
			key: 0,
			class: "guided-tour",
			style: y({ zIndex: n.zIndex }),
			onMousedown: i[1] ||= V(() => {}, ["stop"]),
			onTouchstart: i[2] ||= V(() => {}, ["stop"])
		}, [
			(C(!0), s(e, null, E(h.value, (e, t) => (C(), s("div", {
				key: t,
				class: "guided-tour__mask",
				style: y(e)
			}, null, 4))), 128)),
			p.value ? (C(), s("div", {
				key: 0,
				class: "guided-tour__spotlight",
				style: y(m.value)
			}, null, 4)) : o("", !0),
			i[3] ||= c("div", { class: "guided-tour__shield" }, null, -1),
			c("section", {
				ref_key: "card",
				ref: l,
				class: "guided-tour__card",
				style: y(_.value),
				role: "dialog",
				"aria-modal": "true",
				"aria-label": n.tour.step?.title,
				tabindex: "-1"
			}, [
				c("div", Ii, [
					c("small", null, A(n.labels.progress(n.tour.index + 1, n.tour.steps.length)), 1),
					c("h2", null, A(n.tour.step?.title), 1),
					c("p", null, A(n.tour.step?.body), 1)
				]),
				n.tour.error ? (C(), s("p", Li, A(n.labels.error), 1)) : o("", !0),
				c("footer", null, [
					d(Ai, {
						variant: "quiet",
						onClick: i[0] ||= (e) => n.tour.error ? n.tour.stop() : n.tour.dismiss()
					}, {
						default: R(() => [u(A(n.tour.error ? n.labels.close : n.labels.dismiss), 1)]),
						_: 1
					}),
					n.tour.index > 0 ? (C(), a(Ai, {
						key: 0,
						variant: "secondary",
						disabled: n.tour.busy,
						onClick: n.tour.previous
					}, {
						default: R(() => [u(A(n.labels.previous), 1)]),
						_: 1
					}, 8, ["disabled", "onClick"])) : o("", !0),
					n.tour.error ? (C(), a(Ai, {
						key: 1,
						disabled: n.tour.busy,
						onClick: n.tour.retry
					}, {
						default: R(() => [u(A(n.labels.retry), 1)]),
						_: 1
					}, 8, ["disabled", "onClick"])) : (C(), a(Ai, {
						key: 2,
						loading: n.tour.busy,
						"loading-label": n.labels.loading,
						onClick: n.tour.next
					}, {
						default: R(() => [u(A(n.tour.index === n.tour.steps.length - 1 ? n.labels.finish : n.labels.next), 1)]),
						_: 1
					}, 8, [
						"loading",
						"loading-label",
						"onClick"
					]))
				])
			], 12, Fi)
		], 36)) : o("", !0)]));
	}
}, [["__scopeId", "data-v-85145755"]]);
//#endregion
//#region src/composables/useGuidedTour.js
function zi({ onFinish: e = async () => {} } = {}) {
	let t = T(!1), n = T(!1), r = k(null), a = T(0), o = k([]), s = k(null), c = i(() => o.value[a.value] || null), l = null, u = [], d = null, f = !1, p = 0;
	function m() {
		l?.abort(), l = null;
		for (let e of u.reverse()) try {
			e();
		} catch {}
		u = [], s.value = null;
	}
	async function h(e) {
		if (n.value || !t.value || e < 0 || e >= o.value.length) return;
		m(), a.value = e, n.value = !0, r.value = null;
		let i = new AbortController();
		l = i;
		let f = {
			signal: i.signal,
			onCleanup(e) {
				i.signal.aborted ? e() : u.push(e);
			}
		};
		d = () => h(e);
		try {
			if (await c.value?.enter?.(f), await g(), i.signal.aborted) return;
			let e = c.value?.target;
			if (e) {
				let t = Date.now() + 3e3;
				for (; !i.signal.aborted;) {
					let n = e();
					if (n?.isConnected && n.getClientRects().length) {
						s.value = n;
						let e = [];
						for (let t = n.parentElement; t; t = t.parentElement) e.push([
							t,
							t.scrollLeft,
							t.scrollTop
						]);
						f.onCleanup(() => {
							for (let [t, n, r] of e) t.scrollLeft = n, t.scrollTop = r;
						}), n.scrollIntoView?.({
							block: "center",
							inline: "nearest",
							behavior: "instant"
						});
						break;
					}
					if (Date.now() >= t) throw Error("target-unavailable");
					await new Promise((e) => setTimeout(e, 50));
				}
			}
		} catch (e) {
			i.signal.aborted || (r.value = e, m(), n.value = !1);
		} finally {
			l === i && (n.value = !1);
		}
	}
	function _() {
		p += 1, f = !1, m(), t.value = !1, n.value = !1, r.value = null;
	}
	async function v(e) {
		_(), o.value = e, e.length && (t.value = !0, await h(0));
	}
	async function y(i) {
		if (f || !t.value) return;
		n.value && m(), f = !0, n.value = !0, r.value = null;
		let a = p;
		d = () => y(i);
		try {
			await e(i), p === a && _();
		} catch (e) {
			t.value && p === a && (r.value = e);
		} finally {
			p === a && (f = !1, n.value = !1);
		}
	}
	return S(_), {
		active: t,
		busy: n,
		error: r,
		index: a,
		steps: o,
		step: c,
		target: s,
		start: v,
		stop: _,
		next: () => a.value === o.value.length - 1 ? y("completed") : h(a.value + 1),
		previous: () => h(a.value - 1),
		dismiss: () => y("dismissed"),
		retry: () => d?.()
	};
}
//#endregion
//#region src/components/StatBar.vue
var Bi = ["aria-label", "aria-valuenow"], Vi = {
	key: 1,
	class: "stat-bar-shine"
}, Hi = /*#__PURE__*/ H({
	__name: "StatBar",
	props: {
		label: {
			type: String,
			default: ""
		},
		percent: {
			type: Number,
			default: 0
		},
		color: {
			type: String,
			default: "var(--accent)"
		},
		size: {
			type: String,
			default: "medium"
		},
		tempPercent: {
			type: Number,
			default: 0
		},
		tempColor: {
			type: String,
			default: "var(--info)"
		},
		decorated: {
			type: Boolean,
			default: !1
		}
	},
	setup(t) {
		let n = t, r = i(() => Math.min(100, Math.max(0, n.percent))), a = i(() => Math.min(100 - r.value, Math.max(0, n.tempPercent)));
		return (n, i) => (C(), s("div", {
			class: _(["stat-bar", [`stat-bar--${t.size}`, {
				"stat-bar--decorated": t.decorated,
				"stat-bar--full": r.value >= 100
			}]]),
			role: "meter",
			"aria-label": t.label || void 0,
			"aria-valuemin": "0",
			"aria-valuemax": "100",
			"aria-valuenow": r.value,
			style: y({ "--bar-color": t.color })
		}, [
			c("div", {
				class: "stat-bar-fill",
				style: y({ width: r.value + "%" })
			}, [t.decorated ? (C(), s(e, { key: 0 }, [i[0] ||= c("span", { class: "stat-bar-bub stat-bar-bub1" }, null, -1), i[1] ||= c("span", { class: "stat-bar-bub stat-bar-bub2" }, null, -1)], 64)) : o("", !0)], 4),
			a.value > 0 ? (C(), s("div", {
				key: 0,
				class: "stat-bar-temp",
				style: y({
					left: r.value + "%",
					width: a.value + "%",
					"--temp-color": t.tempColor
				})
			}, null, 4)) : o("", !0),
			t.decorated ? (C(), s("span", Vi)) : o("", !0)
		], 14, Bi));
	}
}, [["__scopeId", "data-v-5af0c4fc"]]), Ui = ["aria-label"], Wi = [
	"aria-label",
	"aria-pressed",
	"title",
	"disabled",
	"onClick"
], Gi = /*#__PURE__*/ H({
	__name: "IconPicker",
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		options: {
			type: Array,
			default: () => []
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
	emits: ["update:modelValue"],
	setup(t) {
		return (n, r) => (C(), s("div", {
			class: "share-icon-picker",
			role: "group",
			"aria-label": t.label
		}, [(C(!0), s(e, null, E(t.options, (e) => (C(), s("button", {
			key: e.value,
			type: "button",
			class: _(["share-icon-picker__option", { "share-icon-picker__option--selected": e.value === t.modelValue }]),
			"aria-label": e.label || String(e.value),
			"aria-pressed": e.value === t.modelValue,
			title: e.label || String(e.value),
			disabled: t.disabled || e.disabled,
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [D(n.$slots, "icon", { option: e }, () => [(C(), a(O(e.icon), {
			size: 18,
			"aria-hidden": "true"
		}))], !0)], 10, Wi))), 128))], 8, Ui));
	}
}, [["__scopeId", "data-v-9859aa6b"]]), Ki = {
	key: 0,
	class: "detail-section-icon",
	"aria-hidden": "true"
}, qi = { class: "detail-section-label" }, Ji = {
	key: 1,
	class: "detail-section-rule",
	"aria-hidden": "true"
}, Yi = {
	key: 2,
	class: "detail-section-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	width: "14",
	height: "14"
}, Xi = ["id"], Zi = /*#__PURE__*/ H({
	__name: "DetailSection",
	props: {
		label: {
			type: String,
			required: !0
		},
		modelValue: {
			type: Boolean,
			default: void 0
		},
		collapsible: {
			type: Boolean,
			default: !1
		},
		defaultOpen: {
			type: Boolean,
			default: !0
		},
		tone: {
			type: String,
			default: "accent"
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, l = N(), u = T(n.defaultOpen), d = i({
			get: () => n.modelValue ?? u.value,
			set: (e) => {
				u.value = e, r("update:modelValue", e);
			}
		});
		return (t, n) => (C(), s("section", { class: _(["detail-section", {
			"detail-section--collapsible": e.collapsible,
			"detail-section--open": d.value,
			"detail-section--illustrated": t.$slots.icon,
			"detail-section--danger": e.tone === "danger"
		}]) }, [(C(), a(O(e.collapsible ? "button" : "div"), {
			class: _(["detail-section-head", { "detail-section-head--btn": e.collapsible }]),
			type: e.collapsible ? "button" : null,
			"aria-expanded": e.collapsible ? d.value : void 0,
			"aria-controls": e.collapsible ? j(l) : void 0,
			onClick: n[0] ||= (t) => e.collapsible && (d.value = !d.value)
		}, {
			default: R(() => [
				t.$slots.icon ? (C(), s("span", Ki, [D(t.$slots, "icon", {}, void 0, !0)])) : o("", !0),
				c("span", qi, A(e.label), 1),
				t.$slots.icon ? (C(), s("span", Ji)) : o("", !0),
				e.collapsible ? (C(), s("svg", Yi, [...n[1] ||= [c("path", {
					d: "M4 6L8 10L12 6",
					stroke: "currentColor",
					"stroke-width": "1.8",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, null, -1)]])) : o("", !0)
			]),
			_: 3
		}, 8, [
			"class",
			"type",
			"aria-expanded",
			"aria-controls"
		])), z(c("div", {
			id: j(l),
			class: "detail-section-body"
		}, [D(t.$slots, "default", {}, void 0, !0)], 8, Xi), [[I, !e.collapsible || d.value]])], 2));
	}
}, [["__scopeId", "data-v-a99aa805"]]), Qi = [
	"role",
	"tabindex",
	"aria-current"
], $i = { class: "oli-icon" }, ea = {
	key: 0,
	class: "oli-metric"
}, ta = { class: "oli-main" }, na = { class: "oli-name" }, ra = {
	key: 0,
	class: "oli-name-en"
}, ia = ["title"], aa = {
	key: 0,
	class: "oli-sub"
}, oa = { class: "oli-right" }, sa = {
	key: 0,
	class: "oli-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	width: "14",
	height: "14"
}, ca = /*#__PURE__*/ H({
	__name: "ContentRow",
	props: {
		title: {
			type: String,
			required: !0
		},
		alternateLabel: {
			type: String,
			default: ""
		},
		marker: {
			type: String,
			default: ""
		},
		markerLabel: {
			type: String,
			default: ""
		},
		subtitle: {
			type: String,
			default: ""
		},
		nameCenter: {
			type: Boolean,
			default: !1
		},
		showChevron: {
			type: Boolean,
			default: !0
		},
		interactive: {
			type: Boolean,
			default: !1
		},
		selected: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["activate"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			!n.interactive || e.target !== e.currentTarget || !["Enter", " "].includes(e.key) || (e.preventDefault(), r("activate", e));
		}
		return (t, n) => (C(), s("div", {
			class: _(["oli", {
				"oli--interactive": e.interactive,
				"oli--selected": e.selected
			}]),
			role: e.interactive ? "button" : void 0,
			tabindex: e.interactive ? 0 : void 0,
			"aria-current": e.selected ? "true" : void 0,
			onClick: n[0] ||= (n) => e.interactive && t.$emit("activate", n),
			onKeydown: i
		}, [
			c("div", $i, [D(t.$slots, "icon", {}, void 0, !0)]),
			t.$slots.metric ? (C(), s("div", ea, [D(t.$slots, "metric", {}, void 0, !0)])) : o("", !0),
			c("div", ta, [c("div", { class: _(["oli-name-row", { "oli-name-row--center": e.nameCenter }]) }, [
				c("span", na, A(e.title), 1),
				e.alternateLabel ? (C(), s("span", ra, A(e.alternateLabel), 1)) : o("", !0),
				e.marker ? (C(), s("span", {
					key: 1,
					class: "oli-custom",
					title: e.markerLabel
				}, A(e.marker), 9, ia)) : o("", !0),
				D(t.$slots, "name-extras", {}, void 0, !0)
			], 2), t.$slots.subtitle || e.subtitle ? (C(), s("div", aa, [D(t.$slots, "subtitle", {}, () => [u(A(e.subtitle), 1)], !0)])) : o("", !0)]),
			c("div", oa, [D(t.$slots, "trailing", {}, void 0, !0), e.showChevron ? (C(), s("svg", sa, [...n[1] ||= [c("path", {
				d: "M6 12L10 8L6 4",
				stroke: "currentColor",
				"stroke-width": "1.6",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)]])) : o("", !0)])
		], 42, Qi));
	}
}, [["__scopeId", "data-v-3222832d"]]), la = ["id", "aria-label"], ua = [
	"id",
	"aria-selected",
	"aria-disabled",
	"onMouseenter",
	"onClick"
], da = {
	key: 0,
	class: "share-option-list__empty"
}, fa = /*#__PURE__*/ H({
	__name: "OptionList",
	props: {
		id: {
			type: String,
			default: () => N()
		},
		label: {
			type: String,
			default: ""
		},
		options: {
			type: Array,
			default: () => []
		},
		activeIndex: {
			type: Number,
			default: -1
		},
		emptyLabel: {
			type: String,
			default: "No options found"
		}
	},
	emits: [
		"select",
		"active",
		"hover",
		"leave"
	],
	setup(t) {
		return (n, r) => (C(), s("div", {
			id: t.id,
			class: "share-option-list",
			role: "listbox",
			"aria-label": t.label
		}, [
			(C(!0), s(e, null, E(t.options, (e, i) => (C(), s("div", {
				id: `${t.id}-${i}`,
				key: e.value,
				class: _(["share-option-list__option", { "share-option-list__option--active": i === t.activeIndex }]),
				role: "option",
				"aria-selected": i === t.activeIndex,
				"aria-disabled": e.disabled || void 0,
				onMouseenter: (t) => {
					n.$emit("active", i), n.$emit("hover", {
						option: e,
						event: t
					});
				},
				onMouseleave: r[0] ||= (e) => n.$emit("leave"),
				onMousedown: r[1] ||= V(() => {}, ["prevent", "stop"]),
				onClick: V((t) => !e.disabled && n.$emit("select", e), ["stop"])
			}, [D(n.$slots, "option", { option: e }, () => [u(A(e.label), 1)], !0)], 42, ua))), 128)),
			t.options.length ? o("", !0) : (C(), s("div", da, [D(n.$slots, "empty", {}, () => [u(A(t.emptyLabel), 1)], !0)])),
			D(n.$slots, "footer", {}, void 0, !0)
		], 8, la));
	}
}, [["__scopeId", "data-v-52e45ea3"]]), pa = { class: "share-search-multi-select" }, ma = {
	key: 0,
	class: "share-search-multi-select__tags"
}, ha = /*#__PURE__*/ H({
	__name: "SearchMultiSelect",
	props: {
		modelValue: {
			type: Array,
			default: () => []
		},
		options: {
			type: Array,
			default: () => []
		},
		limit: {
			type: Number,
			default: 0
		},
		label: {
			type: String,
			required: !0
		},
		placeholder: {
			type: String,
			default: "Search…"
		},
		emptyLabel: {
			type: String,
			default: "No options found"
		},
		removeLabel: {
			type: String,
			default: "Remove"
		},
		createLabel: {
			type: String,
			default: "Add"
		},
		allowCreate: {
			type: Boolean,
			default: !1
		},
		creating: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		zIndex: {
			type: Number,
			default: 2500
		}
	},
	emits: ["update:modelValue", "create"],
	setup(t, { emit: n }) {
		let r = t, c = n, f = T(null), p = T(!1), m = T(""), h = T(0), _ = N(), v = i(() => new Set(r.modelValue.map(String))), y = i(() => new Map(r.options.map((e) => [String(e.value), e]))), b = i(() => r.modelValue.map((e) => y.value.get(String(e))).filter(Boolean)), x = i(() => r.limit > 0 && r.modelValue.length >= r.limit), S = i(() => r.options.filter((e) => !v.value.has(String(e.value)) && !e.disabled && String(e.label).toLocaleLowerCase().includes(m.value.trim().toLocaleLowerCase()))), w = i(() => r.options.some((e) => String(e.label).trim().toLocaleLowerCase() === m.value.trim().toLocaleLowerCase()));
		L(S, (e) => {
			h.value = e.length ? 0 : -1;
		}), L(() => r.modelValue, () => {
			m.value = "", x.value ? p.value = !1 : p.value && g(() => f.value?.focus());
		}, { deep: !0 });
		function D(e) {
			x.value || c("update:modelValue", [...r.modelValue, e.value]);
		}
		function O(e) {
			c("update:modelValue", r.modelValue.filter((t) => String(t) !== String(e)));
		}
		function k(e) {
			if (["ArrowDown", "ArrowUp"].includes(e.key)) {
				e.preventDefault(), p.value = !0;
				let t = S.value.length;
				h.value = t ? (h.value + (e.key === "ArrowDown" ? 1 : -1) + t) % t : -1, g(() => document.getElementById(`${_}-${h.value}`)?.scrollIntoView({ block: "nearest" }));
			} else e.key === "Enter" && p.value && S.value[h.value] ? (e.preventDefault(), D(S.value[h.value])) : e.key === "Escape" ? (e.preventDefault(), p.value = !1) : e.key === "Tab" && (p.value = !1);
		}
		return (n, r) => (C(), s("div", pa, [
			b.value.length ? (C(), s("div", ma, [(C(!0), s(e, null, E(b.value, (e) => (C(), s("span", {
				key: e.value,
				class: "share-search-multi-select__tag"
			}, [u(A(e.label) + " ", 1), d(ve, {
				label: `${t.removeLabel}: ${e.label}`,
				disabled: t.disabled,
				onClick: (t) => O(e.value)
			}, null, 8, [
				"label",
				"disabled",
				"onClick"
			])]))), 128))])) : o("", !0),
			x.value ? o("", !0) : (C(), a(ei, {
				key: 1,
				ref_key: "input",
				ref: f,
				value: m.value,
				placeholder: t.placeholder,
				disabled: t.disabled,
				role: "combobox",
				"aria-label": t.label,
				"aria-autocomplete": "list",
				"aria-expanded": p.value,
				"aria-controls": j(_),
				"aria-activedescendant": p.value && h.value >= 0 ? `${j(_)}-${h.value}` : void 0,
				"onUpdate:value": r[0] ||= (e) => {
					m.value = e, p.value = !0;
				},
				onFocus: r[1] ||= (e) => p.value = !0,
				onKeydown: k
			}, null, 8, [
				"value",
				"placeholder",
				"disabled",
				"aria-label",
				"aria-expanded",
				"aria-controls",
				"aria-activedescendant"
			])),
			d(ut, {
				open: p.value,
				"onUpdate:open": r[5] ||= (e) => p.value = e,
				anchor: f.value?.$el,
				"min-width": 260,
				"z-index": t.zIndex,
				related: ""
			}, {
				default: R(() => [d(fa, {
					id: j(_),
					label: t.label,
					options: S.value,
					"active-index": h.value,
					"empty-label": t.emptyLabel,
					onActive: r[4] ||= (e) => h.value = e,
					onSelect: D
				}, l({ _: 2 }, [t.allowCreate && m.value.trim() && !w.value && !S.value.length ? {
					name: "footer",
					fn: R(() => [d(Ai, {
						loading: t.creating,
						disabled: t.creating,
						variant: "quiet",
						onMousedown: r[2] ||= V(() => {}, ["prevent", "stop"]),
						onClick: r[3] ||= (e) => n.$emit("create", m.value.trim())
					}, {
						default: R(() => [u(A(t.createLabel) + " «" + A(m.value.trim()) + "»", 1)]),
						_: 1
					}, 8, ["loading", "disabled"])]),
					key: "0"
				} : void 0]), 1032, [
					"id",
					"label",
					"options",
					"active-index",
					"empty-label"
				])]),
				_: 1
			}, 8, [
				"open",
				"anchor",
				"z-index"
			])
		]));
	}
}, [["__scopeId", "data-v-1e12f35d"]]), ga = ["id"], _a = /*#__PURE__*/ H({
	__name: "FloatingTooltip",
	props: {
		anchor: {
			type: Object,
			default: null
		},
		x: {
			type: Number,
			default: 0
		},
		top: {
			type: Number,
			default: null
		},
		bottom: {
			type: Number,
			default: null
		},
		width: {
			type: Number,
			default: null
		},
		maxWidth: {
			type: Number,
			default: 360
		},
		minWidth: {
			type: Number,
			default: 208
		},
		offset: {
			type: Number,
			default: 8
		},
		zIndex: {
			type: Number,
			default: 4e3
		},
		tooltipClass: {
			type: [
				String,
				Array,
				Object
			],
			default: ""
		}
	},
	setup(e) {
		let r = e, i = N(), o = T(null), s = T({ visibility: "hidden" }), l, u, f;
		function p() {
			if (!o.value) return;
			let e = window.visualViewport, t = (e?.offsetLeft || 0) + 8, n = (e?.offsetTop || 0) + 8, i = t + (e?.width || window.innerWidth) - 16, a = n + (e?.height || window.innerHeight) - 16, c = Math.max(0, Math.min(r.width || r.maxWidth, i - t)), l = r.anchor?.getBoundingClientRect?.(), u = Math.min(o.value.offsetHeight, a - n), d = l ? a - l.bottom < u + r.offset && l.top - n > a - l.bottom : r.bottom != null, f = l ? d ? l.top - r.offset - u : l.bottom + r.offset : r.bottom == null ? r.top ?? n : window.innerHeight - r.bottom - u, p = Math.min(o.value.offsetWidth || c, c);
			s.value = {
				left: `${Math.max(t, Math.min(l?.left ?? r.x, i - p))}px`,
				top: `${Math.max(n, Math.min(f, a - u))}px`,
				maxWidth: `${c}px`,
				minWidth: `${Math.min(r.minWidth, c)}px`,
				maxHeight: `${a - n}px`,
				width: r.width ? `${c}px` : void 0,
				zIndex: r.zIndex,
				"--share-tooltip-enter-y": d ? "4px" : "-4px",
				transformOrigin: d ? "left bottom" : "left top"
			};
		}
		function m() {
			u ??= requestAnimationFrame(() => {
				u = null, p();
			});
		}
		function h() {
			if (!f) return;
			let e = (f.getAttribute("aria-describedby") || "").split(/\s+/).filter((e) => e && e !== i);
			e.length ? f.setAttribute("aria-describedby", e.join(" ")) : f.removeAttribute("aria-describedby");
		}
		return L(() => r.anchor, (e) => {
			h(), f = e?.setAttribute ? e : null, f && f.setAttribute("aria-describedby", [.../* @__PURE__ */ new Set([...(f.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean), i])].join(" ")), typeof window < "u" && g(m);
		}, { immediate: !0 }), L(() => [
			r.x,
			r.top,
			r.bottom,
			r.width
		], m), x(() => {
			p(), l = new ResizeObserver(m), l.observe(o.value), window.addEventListener("resize", m, { passive: !0 }), window.addEventListener("scroll", m, {
				passive: !0,
				capture: !0
			}), window.visualViewport?.addEventListener("resize", m), window.visualViewport?.addEventListener("scroll", m);
		}), b(() => {
			h(), l?.disconnect(), u != null && cancelAnimationFrame(u), window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), window.visualViewport?.removeEventListener("resize", m), window.visualViewport?.removeEventListener("scroll", m);
		}), (r, l) => (C(), a(t, { to: "body" }, [d(n, {
			name: "share-tooltip",
			appear: ""
		}, {
			default: R(() => [c("div", {
				id: j(i),
				ref_key: "element",
				ref: o,
				class: _(["share-tooltip", e.tooltipClass]),
				style: y(s.value),
				role: "tooltip"
			}, [D(r.$slots, "default", {}, void 0, !0)], 14, ga)]),
			_: 3
		})]));
	}
}, [["__scopeId", "data-v-ddef3f8f"]]);
//#endregion
//#region src/lib/calendar.js
function va(e) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(e || "")) return null;
	let [t, n, r] = e.split("-").map(Number), i = /* @__PURE__ */ new Date(0);
	return i.setFullYear(t, n - 1, r), i.setHours(12, 0, 0, 0), t > 0 && i.getFullYear() === t && i.getMonth() === n - 1 && i.getDate() === r ? i : null;
}
function ya(e) {
	return `${String(e.getFullYear()).padStart(4, "0")}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function ba(e, t = "", n = "") {
	return !!(!va(e) || t && e < t || n && e > n);
}
function xa(e, t = 0, n = 0) {
	let r = va(e);
	if (!r) return e;
	let i = r.getDate();
	r.setDate(1), r.setMonth(r.getMonth() + n);
	let a = new Date(r);
	a.setMonth(a.getMonth() + 1, 0);
	let o = a.getDate();
	return r.setDate(Math.min(i, o) + t), ya(r);
}
function Sa(e, t, n = 1) {
	let r = /* @__PURE__ */ new Date(0);
	r.setFullYear(e, t, 1), r.setHours(12, 0, 0, 0);
	let i = (r.getDay() - n + 7) % 7;
	return Array.from({ length: 42 }, (e, n) => {
		let a = new Date(r);
		return a.setDate(n - i + 1), {
			value: ya(a),
			day: a.getDate(),
			outside: a.getMonth() !== t
		};
	});
}
//#endregion
//#region src/components/form/DatePicker.vue
var Ca = { class: "share-date-picker" }, wa = [
	"disabled",
	"aria-label",
	"aria-expanded"
], Ta = { class: "share-date-picker__heading" }, Ea = ["aria-label"], Da = ["value"], Oa = ["value"], ka = ["aria-label"], Aa = ["aria-label"], ja = {
	class: "share-date-picker__week",
	role: "row"
}, Ma = ["aria-selected"], Na = [
	"data-date",
	"tabindex",
	"disabled",
	"aria-label",
	"aria-current",
	"onClick",
	"onKeydown"
], Pa = { class: "share-date-picker__footer" }, Fa = ["disabled"], Ia = /*#__PURE__*/ H({
	__name: "DatePicker",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		locale: {
			type: String,
			default: "en-US"
		},
		weekStartsOn: {
			type: Number,
			default: 1
		},
		disabled: Boolean,
		min: {
			type: String,
			default: ""
		},
		max: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: "Choose a date"
		},
		ariaLabel: {
			type: String,
			default: "Choose a date"
		},
		previousLabel: {
			type: String,
			default: "Previous month"
		},
		nextLabel: {
			type: String,
			default: "Next month"
		},
		monthLabel: {
			type: String,
			default: "Month"
		},
		yearLabel: {
			type: String,
			default: "Year"
		},
		todayLabel: {
			type: String,
			default: "Today"
		},
		clearLabel: {
			type: String,
			default: "Clear"
		},
		allowClear: Boolean,
		zIndex: {
			type: Number,
			default: 4e3
		}
	},
	emits: ["update:modelValue"],
	setup(t, { emit: n }) {
		let r = t, a = n, l = T(null), u = T(null), f = T(!1), p = ya(/* @__PURE__ */ new Date()), m = i(() => va(r.modelValue)), h = T(r.modelValue || p), v = T((/* @__PURE__ */ new Date()).getFullYear()), y = T((/* @__PURE__ */ new Date()).getMonth()), b = i(() => Array.from({ length: 12 }, (e, t) => new Intl.DateTimeFormat(r.locale, { month: "long" }).format(new Date(2024, t, 1)))), x = i(() => Array.from({ length: 201 }, (e, t) => v.value - 100 + t).filter((e) => e >= 1 && e <= 9999)), S = i(() => Array.from({ length: 7 }, (e, t) => new Intl.DateTimeFormat(r.locale, { weekday: "short" }).format(new Date(2024, 0, 7 + (r.weekStartsOn + t) % 7)))), w = i(() => {
			let e = Sa(v.value, y.value, r.weekStartsOn);
			return Array.from({ length: 6 }, (t, n) => e.slice(n * 7, n * 7 + 7));
		});
		function D(e, t = !1) {
			return new Intl.DateTimeFormat(r.locale, {
				day: "numeric",
				month: "long",
				year: "numeric",
				...t ? { weekday: "long" } : {}
			}).format(e);
		}
		function O(e) {
			return ba(e, r.min, r.max);
		}
		function k(e) {
			let t = va(e) || /* @__PURE__ */ new Date();
			v.value = t.getFullYear(), y.value = t.getMonth(), h.value = ya(t);
		}
		async function M() {
			await g(), u.value?.querySelector(`[data-date="${h.value}"]`)?.focus({ preventScroll: !0 });
		}
		function N(e) {
			f.value = e, e || l.value?.focus();
		}
		async function P() {
			if (r.disabled) return;
			if (f.value) {
				N(!1);
				return;
			}
			let e = m.value ? r.modelValue : p;
			r.min && e < r.min && (e = r.min), r.max && e > r.max && (e = r.max), k(e), f.value = !0, await M();
		}
		function F(e) {
			r.disabled || e && O(e) || (a("update:modelValue", e), N(!1));
		}
		function I(e) {
			let t = xa(h.value, 0, e);
			va(t) && k(t);
		}
		function z(e) {
			I(e - y.value);
		}
		function B(e) {
			I((e - v.value) * 12);
		}
		function V(e, t) {
			let n = {
				ArrowLeft: -1,
				ArrowRight: 1,
				ArrowUp: -7,
				ArrowDown: 7
			}, i;
			if (e.key in n) i = xa(t, n[e.key]);
			else if (e.key === "PageUp" || e.key === "PageDown") i = xa(t, 0, (e.key === "PageUp" ? -1 : 1) * (e.shiftKey ? 12 : 1));
			else if (e.key === "Home" || e.key === "End") {
				let n = (va(t).getDay() - r.weekStartsOn + 7) % 7;
				i = xa(t, e.key === "Home" ? -n : 6 - n);
			} else return;
			e.preventDefault(), O(i) || (k(i), M());
		}
		function H(e) {
			if (e.key !== "Tab") return;
			let t = [...u.value.querySelectorAll("button:not(:disabled), select:not(:disabled)")].filter((e) => e.tabIndex >= 0), n = t[0], r = t.at(-1);
			e.shiftKey && e.target === n ? (e.preventDefault(), r?.focus()) : !e.shiftKey && e.target === r && (e.preventDefault(), n?.focus());
		}
		function U(e) {
			e.key === "Escape" && (e.stopPropagation(), e.preventDefault(), N(!1)), e.key === "Tab" && (e.stopPropagation(), H(e));
		}
		return L(() => r.disabled, (e) => {
			e && (f.value = !1);
		}), L(() => r.modelValue, (e) => {
			f.value && k(e);
		}), (n, r) => (C(), s("span", Ca, [c("button", {
			ref_key: "anchor",
			ref: l,
			type: "button",
			class: "share-date-picker__trigger",
			disabled: t.disabled,
			"aria-label": t.ariaLabel,
			"aria-expanded": f.value,
			"aria-haspopup": "dialog",
			onClick: P
		}, [r[6] ||= c("svg", {
			viewBox: "0 0 24 24",
			width: "19",
			height: "19",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": "1.7",
			"aria-hidden": "true"
		}, [c("rect", {
			x: "3",
			y: "5",
			width: "18",
			height: "16",
			rx: "3"
		}), c("path", { d: "M7 3v4m10-4v4M3 11h18m-13 4h3m3 0h2" })], -1), c("span", { class: _({ "share-date-picker__placeholder": !m.value }) }, A(m.value ? D(m.value) : t.placeholder), 3)], 8, wa), d(ut, {
			open: f.value,
			anchor: l.value,
			"min-width": 0,
			"z-index": t.zIndex,
			role: "dialog",
			"aria-label": t.ariaLabel,
			"transition-preset": "action-menu",
			"close-on-scroll": !1,
			"onUpdate:open": N
		}, {
			default: R(() => [c("div", {
				ref_key: "calendar",
				ref: u,
				class: "share-date-picker__calendar",
				onKeydown: U
			}, [
				c("div", Ta, [
					c("button", {
						type: "button",
						"aria-label": t.previousLabel,
						onClick: r[0] ||= (e) => I(-1)
					}, "‹", 8, Ea),
					d(di, {
						value: y.value,
						"aria-label": t.monthLabel,
						"onUpdate:value": r[1] ||= (e) => z(Number(e))
					}, {
						default: R(() => [(C(!0), s(e, null, E(b.value, (e, t) => (C(), s("option", {
							key: t,
							value: t
						}, A(e), 9, Da))), 128))]),
						_: 1
					}, 8, ["value", "aria-label"]),
					d(di, {
						value: v.value,
						"aria-label": t.yearLabel,
						"onUpdate:value": r[2] ||= (e) => B(Number(e))
					}, {
						default: R(() => [(C(!0), s(e, null, E(x.value, (e) => (C(), s("option", {
							key: e,
							value: e
						}, A(e), 9, Oa))), 128))]),
						_: 1
					}, 8, ["value", "aria-label"]),
					c("button", {
						type: "button",
						"aria-label": t.nextLabel,
						onClick: r[3] ||= (e) => I(1)
					}, "›", 8, ka)
				]),
				c("div", {
					role: "grid",
					"aria-label": `${b.value[y.value]} ${v.value}`
				}, [c("div", ja, [(C(!0), s(e, null, E(S.value, (e) => (C(), s("span", {
					key: e,
					role: "columnheader"
				}, A(e), 1))), 128))]), (C(!0), s(e, null, E(w.value, (n, r) => (C(), s("div", {
					key: r,
					class: "share-date-picker__week",
					role: "row"
				}, [(C(!0), s(e, null, E(n, (e) => (C(), s("span", {
					key: e.value,
					role: "gridcell",
					"aria-selected": e.value === t.modelValue
				}, [c("button", {
					type: "button",
					"data-date": e.value,
					tabindex: e.value === h.value ? 0 : -1,
					disabled: O(e.value),
					"aria-label": D(j(va)(e.value), !0),
					"aria-current": e.value === j(p) ? "date" : void 0,
					class: _({
						outside: e.outside,
						selected: e.value === t.modelValue,
						today: e.value === j(p)
					}),
					onClick: (t) => F(e.value),
					onKeydown: (t) => V(t, e.value)
				}, A(e.day), 43, Na)], 8, Ma))), 128))]))), 128))], 8, Aa),
				c("div", Pa, [c("button", {
					type: "button",
					disabled: O(j(p)),
					onClick: r[4] ||= (e) => F(j(p))
				}, A(t.todayLabel), 9, Fa), t.allowClear ? (C(), s("button", {
					key: 0,
					type: "button",
					onClick: r[5] ||= (e) => F("")
				}, A(t.clearLabel), 1)) : o("", !0)])
			], 544)]),
			_: 1
		}, 8, [
			"open",
			"anchor",
			"z-index",
			"aria-label"
		])]));
	}
}, [["__scopeId", "data-v-5f6d99b2"]]);
//#endregion
export { At as $, tr as A, H as At, Sn as B, Vr as C, q as Ct, jr as D, ne as Dt, Pr as E, re as Et, Hn as F, Bt as G, hn as H, zn as I, Kt as J, zt as K, Ln as L, Xn as M, Jn as N, Cr as O, te as Ot, Wn as P, Lt as Q, Pn as R, Jr as S, pe as St, zr as T, se as Tt, Yt as U, bn as V, Vt as W, Gt as X, Ht as Y, Rt as Z, li as _, Ae as _t, ca as a, ut as at, ei as b, ve as bt, Hi as c, ot as ct, Ai as d, Ge as dt, wt as et, Oi as f, Xe as ft, di as g, Ne as gt, pi as h, Ze as ht, fa as i, gt as it, er as j, Sr as k, U as kt, zi as l, et as lt, Ei as m, Je as mt, _a as n, vt as nt, Zi as o, ct as ot, Di as p, Ye as pt, It as q, ha as r, yt as rt, Gi as s, st, Ia as t, _t as tt, Ri as u, Ke as ut, oi as v, De as vt, Br as w, ue as wt, Qr as x, ge as xt, ri as y, X as yt, kn as z };
