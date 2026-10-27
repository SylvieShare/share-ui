import { Fragment as e, Teleport as t, Transition as n, TransitionGroup as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createStaticVNode as u, createTextVNode as d, createVNode as f, defineComponent as p, guardReactiveProps as m, h, mergeProps as g, nextTick as _, normalizeClass as v, normalizeProps as y, normalizeStyle as b, onBeforeUnmount as x, onMounted as S, onScopeDispose as C, openBlock as w, reactive as T, ref as E, renderList as D, renderSlot as O, resolveDynamicComponent as k, shallowRef as A, toDisplayString as j, unref as M, useCssVars as N, useId as P, useSlots as F, vModelText as I, vShow as L, watch as R, withCtx as z, withDirectives as B, withKeys as V, withModifiers as H } from "vue";
//#region \0plugin-vue:export-helper
var U = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, W = /*#__PURE__*/ U({
	__name: "BaseTile",
	props: {
		color: {
			type: String,
			default: null
		},
		surface: {
			type: String,
			default: "solid",
			validator: (e) => ["solid", "glass"].includes(e)
		},
		tint: {
			type: Boolean,
			default: !1
		},
		framed: {
			type: Boolean,
			default: !1
		},
		outlined: {
			type: Boolean,
			default: !0
		},
		frameWidth: {
			type: Number,
			default: 1
		},
		interactive: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click"],
	setup(e) {
		let t = e, n = i(() => t.color || "var(--accent)");
		return (t, r) => (w(), s("div", {
			class: v(["base-tile", {
				"base-tile--outlined": e.outlined,
				"base-tile--interactive": e.interactive,
				"base-tile--tint": e.tint,
				"base-tile--framed": e.framed,
				"base-tile--glass": e.surface === "glass"
			}]),
			style: b({
				"--tile-color": n.value,
				"--tile-frame-width": `${Math.max(1, Math.min(4, Number(e.frameWidth) || 1))}px`,
				...e.surface === "glass" ? {
					"backdrop-filter": "blur(14px)",
					"-webkit-backdrop-filter": "blur(14px)"
				} : {}
			}),
			onClick: r[0] ||= (e) => t.$emit("click", e)
		}, [O(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-901c0902"]]), ee = { class: "morph-tile-title" }, te = ["aria-label", "disabled"], G = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("div", { class: v(["morph-tile-header", { "morph-tile-header--compact": e.compactHeader }]) }, [(w(), a(k(e.showEdit && e.clickableTitle ? "button" : "div"), {
			class: v(["morph-tile-heading", { "morph-tile-heading--editable": e.showEdit && e.clickableTitle }]),
			type: e.showEdit && e.clickableTitle ? "button" : void 0,
			disabled: e.showEdit && e.clickableTitle && e.editFade || void 0,
			"aria-label": e.showEdit && e.clickableTitle ? `${e.editLabel}: ${e.title}` : void 0,
			onClick: n[1] ||= H((n) => e.showEdit && e.clickableTitle && !e.editFade && t.$emit("edit", n), ["stop"])
		}, {
			default: z(() => [c("span", ee, [O(t.$slots, "default", {}, () => [d(j(e.title), 1)], !0)]), e.showEdit && e.clickableTitle ? (w(), s("svg", {
				key: 0,
				class: v(["morph-tile-pencil", { "morph-tile-pencil--hidden": e.editFade }]),
				viewBox: "0 0 24 24",
				width: "14",
				height: "14",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [...n[3] ||= [c("path", { d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }, null, -1)]], 2)) : e.showEdit ? (w(), s("button", {
				key: 1,
				class: "morph-tile-edit",
				type: "button",
				"aria-label": `${e.editLabel}: ${e.title}`,
				disabled: e.editFade,
				onClick: n[0] ||= H((e) => t.$emit("edit", e), ["stop"])
			}, [(w(), s("svg", {
				class: v(["morph-tile-pencil", { "morph-tile-pencil--hidden": e.editFade }]),
				viewBox: "0 0 24 24",
				width: "14",
				height: "14",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [...n[4] ||= [c("path", { d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }, null, -1)]], 2))], 8, te)) : o("", !0)]),
			_: 3
		}, 8, [
			"class",
			"type",
			"disabled",
			"aria-label"
		])), t.$slots.aside ? (w(), s("div", {
			key: 0,
			class: "morph-tile-aside",
			onClick: n[2] ||= H(() => {}, ["stop"])
		}, [O(t.$slots, "aside", {}, void 0, !0)])) : o("", !0)], 2));
	}
}, [["__scopeId", "data-v-335e3363"]]), ne = /*#__PURE__*/ U({
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
		outlined: {
			type: Boolean,
			default: !0
		},
		interactive: Boolean
	},
	emits: ["click", "edit"],
	setup(e) {
		return (t, n) => (w(), a(k(e.embedded ? "div" : W), {
			class: "morph-tile",
			color: e.embedded ? void 0 : e.color,
			tint: e.embedded ? void 0 : e.tint,
			framed: e.embedded ? void 0 : e.framed,
			outlined: e.embedded ? void 0 : e.outlined,
			interactive: e.embedded ? void 0 : e.interactive,
			style: b({ "--morph-tile-padding": e.padding }),
			onClick: n[1] ||= (e) => t.$emit("click", e)
		}, {
			default: z(() => [
				O(t.$slots, "decoration", {}, void 0, !0),
				e.title || t.$slots.title || t.$slots.aside ? (w(), a(G, {
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
					fn: z(() => [O(t.$slots, "title", {}, void 0, !0)]),
					key: "0"
				} : void 0, t.$slots.aside ? {
					name: "aside",
					fn: z(() => [O(t.$slots, "aside", {}, void 0, !0)]),
					key: "1"
				} : void 0]), 1032, [
					"title",
					"compact-header",
					"show-edit",
					"edit-label",
					"edit-fade",
					"clickable-title"
				])) : o("", !0),
				O(t.$slots, "default", {}, void 0, !0)
			]),
			_: 3
		}, 8, [
			"color",
			"tint",
			"framed",
			"outlined",
			"interactive",
			"style"
		]));
	}
}, [["__scopeId", "data-v-e7cabb36"]]), re = /*#__PURE__*/ U({
	__name: "TileAccentStrip",
	props: { color: {
		type: String,
		default: null
	} },
	setup(e) {
		return (t, n) => (w(), s("span", {
			class: "tile-accent-strip",
			style: b({ background: e.color || "var(--tile-color, var(--accent))" }),
			"aria-hidden": "true"
		}, null, 4));
	}
}, [["__scopeId", "data-v-7ba6c4f0"]]), ie = {
	key: 0,
	class: "share-section-list__header"
}, ae = {
	key: 0,
	class: "share-section-list__icon"
}, oe = { class: "share-section-list__title" }, se = {
	key: 1,
	class: "share-section-list__footer"
}, ce = /*#__PURE__*/ U({
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
		return (t, n) => (w(), a(k(e.embedded ? "section" : W), {
			class: v(["share-section-list", {
				"share-section-list--embedded": e.embedded,
				"share-section-list--compact": e.compact
			}]),
			"aria-label": e.title || void 0
		}, {
			default: z(() => [
				e.title || t.$slots.header || t.$slots.aside ? (w(), s("header", ie, [O(t.$slots, "header", {}, () => [
					t.$slots.icon ? (w(), s("span", ae, [O(t.$slots, "icon")])) : o("", !0),
					c("span", oe, j(e.title), 1),
					n[0] ||= c("span", {
						class: "share-section-list__line",
						"aria-hidden": "true"
					}, null, -1),
					O(t.$slots, "aside")
				])])) : o("", !0),
				O(t.$slots, "body", {}, () => [(w(), a(k(e.transitionName ? r : "div"), g(e.listAttrs, {
					tag: e.transitionName ? "div" : void 0,
					name: e.transitionName || void 0,
					class: "share-section-list__rows"
				}), {
					default: z(() => [O(t.$slots, "default")]),
					_: 3
				}, 16, ["tag", "name"]))]),
				t.$slots.footer ? (w(), s("footer", se, [O(t.$slots, "footer")])) : o("", !0)
			]),
			_: 3
		}, 8, ["class", "aria-label"]));
	}
}, [["__scopeId", "data-v-3f9dfbae"]]), le = [
	"disabled",
	"aria-label",
	"title"
], ue = {
	key: 0,
	class: "share-add-button__text"
}, K = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("button", {
			class: v(["share-add-button", [`share-add-button--${e.variant}`, { "share-add-button--block": e.block }]]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			title: e.variant === "icon" && e.label || void 0,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [n[1] ||= c("span", {
			class: "share-add-button__plus",
			"aria-hidden": "true"
		}, "+", -1), e.variant === "icon" ? o("", !0) : (w(), s("span", ue, [O(t.$slots, "default", {}, () => [d(j(e.label), 1)], !0)]))], 10, le));
	}
}, [["__scopeId", "data-v-2e1149d1"]]), q = [
	"value",
	"min",
	"max",
	"step",
	"disabled",
	"aria-label"
], de = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("input", {
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
		}, null, 44, q));
	}
}, [["__scopeId", "data-v-a4387b22"]]), fe = [
	"disabled",
	"aria-label",
	"aria-checked"
], pe = {
	key: 0,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, me = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("button", {
			type: "button",
			class: v(["share-compact-checkbox", { "share-compact-checkbox--checked": e.modelValue }]),
			style: b({ "--checkbox-size": `${e.size}px` }),
			disabled: e.disabled,
			"aria-label": e.label,
			"aria-checked": e.modelValue,
			role: "checkbox",
			onClick: H(i, ["stop"]),
			onPointerdown: n[0] ||= H(() => {}, ["stop"])
		}, [e.modelValue ? (w(), s("svg", pe, [...n[1] ||= [c("path", {
			d: "M2.5 6.2l2.4 2.4 4.6-5",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, null, -1)]])) : o("", !0)], 46, fe));
	}
}, [["__scopeId", "data-v-6c7265ce"]]), he = ["aria-label"], ge = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], J = /*#__PURE__*/ U({
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
		let r = t, a = n, o = E(null), l = E([]), u = E({
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
		async function C(e) {
			let t = r.options[e];
			!t || t.disabled || r.disabled || (g(t.value), await _(), l.value[e]?.focus());
		}
		function T(e, t) {
			let n = y();
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			(e.key === "ArrowRight" || e.key === "ArrowDown") && (i = n[(r + 1) % n.length]), (e.key === "ArrowLeft" || e.key === "ArrowUp") && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), C(i.index));
		}
		let O = null;
		return S(async () => {
			await _(), h(), typeof ResizeObserver < "u" && o.value && (O = new ResizeObserver(() => h(!1)), O.observe(o.value));
		}), x(() => {
			O?.disconnect(), m != null && cancelAnimationFrame(m);
		}), R(() => r.modelValue, async () => {
			await _(), h(!0);
		}), R(() => r.options, async () => {
			await _(), h(!1);
		}, { deep: !0 }), (n, r) => (w(), s("div", {
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
		}, null, 6), (w(!0), s(e, null, D(t.options, (e, n) => (w(), s("button", {
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
			onKeydown: (e) => T(e, n)
		}, j(e.label), 43, ge))), 128))], 10, he));
	}
}, [["__scopeId", "data-v-a0098670"]]), Y = ["disabled", "aria-label"], _e = {
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
}, ve = {
	key: 1,
	class: "share-remove-button__cross",
	"aria-hidden": "true"
}, ye = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("button", {
			class: v(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.icon === "trash" ? (w(), s("svg", _e, [...n[1] ||= [c("path", { d: "M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" }, null, -1)]])) : (w(), s("span", ve))], 10, Y));
	}
}, [["__scopeId", "data-v-b1091570"]]), be = { class: "share-section-label__text" }, X = {
	key: 0,
	class: "share-section-label__line",
	"aria-hidden": "true"
}, xe = {
	key: 1,
	class: "share-section-label__actions"
}, Se = /*#__PURE__*/ U({
	__name: "SectionLabel",
	props: {
		title: {
			type: String,
			default: ""
		},
		size: {
			type: String,
			default: "small",
			validator: (e) => ["small", "medium"].includes(e)
		},
		line: {
			type: Boolean,
			default: !1
		},
		border: {
			type: Boolean,
			default: !1
		},
		borderPosition: {
			type: String,
			default: "after",
			validator: (e) => ["before", "after"].includes(e)
		},
		inset: {
			type: [String, Number],
			default: null
		},
		spaceAfter: {
			type: [String, Number],
			default: null
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
			}, n = t.align && e[t.align] ? { justifyContent: e[t.align] } : {};
			return t.inset != null && (n.paddingInline = typeof t.inset == "number" ? `${t.inset}px` : t.inset), t.spaceAfter != null && (n.marginBottom = typeof t.spaceAfter == "number" ? `${t.spaceAfter}px` : t.spaceAfter), n;
		});
		return (t, r) => (w(), s("div", {
			class: v(["share-section-label", {
				"share-section-label--medium": e.size === "medium",
				"share-section-label--border": e.border,
				"share-section-label--before": e.border && e.borderPosition === "before"
			}]),
			style: b(n.value)
		}, [
			c("span", be, [O(t.$slots, "default", {}, () => [d(j(e.title), 1)], !0)]),
			e.line ? (w(), s("span", X)) : o("", !0),
			t.$slots.actions ? (w(), s("span", xe, [O(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)
		], 6));
	}
}, [["__scopeId", "data-v-9d1971f5"]]), Ce = ["aria-label"], we = {
	viewBox: "0 0 120 120",
	role: "img",
	"aria-hidden": "true"
}, Te = [
	"stroke",
	"stroke-width",
	"stroke-dasharray",
	"stroke-dashoffset"
], Ee = { class: "segment-donut__center" }, De = {
	key: 0,
	class: "segment-donut__legend"
}, Oe = { key: 0 }, Z = /*#__PURE__*/ U({
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
		N((e) => ({ v664f5d02: t.strokeWidth }));
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
		return (n, r) => (w(), s("figure", {
			class: "segment-donut",
			"aria-label": t.ariaLabel
		}, [c("div", {
			class: "segment-donut__visual",
			style: b({ "--segment-donut-size": `${t.size}px` })
		}, [(w(), s("svg", we, [r[0] ||= c("circle", {
			class: "segment-donut__track",
			cx: "60",
			cy: "60",
			r: "50",
			pathLength: "100"
		}, null, -1), (w(!0), s(e, null, D(d.value, (e) => (w(), s("circle", {
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
		}, null, 8, Te))), 128))])), c("div", Ee, [O(n.$slots, "center", { total: l.value }, () => [c("strong", null, j(t.formatValue(l.value)), 1), c("span", null, j(t.totalLabel), 1)], !0)])], 4), t.showLegend ? (w(), s("ul", De, [(w(!0), s(e, null, D(u.value, (e) => (w(), s("li", { key: e.key }, [
			c("i", {
				style: b({ "--segment-color": e.color }),
				"aria-hidden": "true"
			}, null, 4),
			c("span", null, j(e.label), 1),
			c("strong", null, j(t.formatValue(e.value)), 1),
			t.showPercent ? (w(), s("small", Oe, j(e.percent.toLocaleString(void 0, { maximumFractionDigits: 1 })) + "%", 1)) : o("", !0)
		]))), 128))])) : o("", !0)], 8, Ce));
	}
}, [["__scopeId", "data-v-6c69c95e"]]);
//#endregion
//#region src/lib/fitNavigationLabels.js
function ke(e) {
	let t = [];
	for (let n of e) {
		let e = n.querySelector(".share-icon-navigation__label");
		e && (e.style.fontSize = "", t.push({
			button: n,
			label: e
		}));
	}
	if (!t.length) return;
	let n = document.createRange(), r = t.map(({ button: e, label: t }) => {
		let r = getComputedStyle(e), i = e.clientWidth - parseFloat(r.paddingLeft) - parseFloat(r.paddingRight);
		return n.selectNodeContents(t), {
			label: t,
			available: i,
			natural: n.getBoundingClientRect().width,
			base: parseFloat(getComputedStyle(t).fontSize)
		};
	});
	for (let { label: e, available: t, natural: i, base: a } of r) {
		if (t <= 0 || i <= t || !a) continue;
		n.selectNodeContents(e);
		let r = 0, o = a;
		for (; o - r > .01;) {
			let i = (r + o) / 2;
			e.style.fontSize = `${i}px`, n.getBoundingClientRect().width <= t ? r = i : o = i;
		}
		e.style.fontSize = `${Math.floor(r * 100) / 100}px`;
	}
	n.detach?.();
}
//#endregion
//#region src/lib/iconNavigation.js
function Ae(e, t, n, r) {
	let i = e.filter((e) => !e.disabled);
	if (!i.length) return null;
	let a = Math.max(0, i.findIndex((e) => e.key === t));
	return n === "Home" ? i[0].key : n === "End" ? i.at(-1).key : n === (r === "vertical" ? "ArrowDown" : "ArrowRight") ? i[(a + 1) % i.length].key : n === (r === "vertical" ? "ArrowUp" : "ArrowLeft") ? i[(a + i.length - 1) % i.length].key : null;
}
//#endregion
//#region src/components/IconNavigation.vue
var je = ["aria-label"], Me = ["aria-orientation", "aria-label"], Ne = [
	"disabled",
	"title",
	"aria-label",
	"aria-current",
	"aria-pressed",
	"onClick",
	"onKeydown"
], Pe = { class: "share-icon-navigation__label" }, Fe = /*#__PURE__*/ U({
	__name: "IconNavigation",
	props: {
		items: {
			type: Array,
			required: !0
		},
		modelValue: {
			type: [String, Number],
			default: null
		},
		label: {
			type: String,
			required: !0
		},
		orientation: {
			type: String,
			default: "horizontal",
			validator: (e) => ["horizontal", "vertical"].includes(e)
		},
		size: {
			type: Number,
			default: 56
		},
		active: {
			type: Boolean,
			default: !0
		},
		animate: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["update:modelValue", "select"],
	setup(t, { expose: n, emit: r }) {
		let l = t, u = r, f = E(null), p = E(null), m = /* @__PURE__ */ new Map(), h = i(() => ({
			transform: `translate(${p.value?.x || 0}px, ${p.value?.y || 0}px)`,
			width: `${p.value?.width || 0}px`,
			height: `${p.value?.height || 0}px`,
			opacity: l.active && p.value ? 1 : 0
		})), y, C, T = !1;
		function A(e, t) {
			let n = m.get(e);
			n !== t && (n && y?.unobserve(n), t ? (m.set(e, t), y?.observe(t)) : m.delete(e));
		}
		function M() {
			ke(m.values()), N();
		}
		function N() {
			let e = m.get(l.modelValue);
			p.value = e ? {
				x: e.offsetLeft,
				y: e.offsetTop,
				width: e.offsetWidth,
				height: e.offsetHeight
			} : null;
		}
		function P(e) {
			let t = f.value;
			if (!t || !e) return;
			let n = l.orientation === "vertical", r = n ? e.offsetTop : e.offsetLeft, i = n ? e.offsetHeight : e.offsetWidth, a = n ? t.scrollTop : t.scrollLeft, o = n ? t.clientHeight : t.clientWidth, s = r < a ? r : r + i > a + o ? r + i - o : a;
			s !== a && t.scrollTo(n ? { top: s } : { left: s });
		}
		function F(e) {
			e.disabled || (e.key !== l.modelValue && u("update:modelValue", e.key), u("select", e.key));
		}
		function I(e, t) {
			if (e.altKey || e.ctrlKey || e.metaKey) return;
			let n = Ae(l.items, t, e.key, l.orientation);
			n != null && (e.preventDefault(), e.stopPropagation(), m.get(n)?.focus({ preventScroll: !0 }), P(m.get(n)));
		}
		return S(() => {
			if (M(), P(m.get(l.modelValue)), typeof ResizeObserver < "u") {
				y = new ResizeObserver(M), y.observe(f.value);
				for (let e of m.values()) y.observe(e);
			}
			C = document.fonts, C?.ready.then(() => {
				T || M();
			}), C?.addEventListener("loadingdone", M);
		}), R(() => [
			l.modelValue,
			l.items,
			l.orientation,
			l.size
		], async () => {
			await _(), M(), P(m.get(l.modelValue));
		}, { deep: !0 }), x(() => {
			T = !0, y?.disconnect(), C?.removeEventListener("loadingdone", M);
		}), n({
			element: f,
			updateIndicator: N
		}), (n, r) => (w(), s("nav", {
			ref_key: "element",
			ref: f,
			class: v(["share-icon-navigation", [`share-icon-navigation--${t.orientation}`, { "share-icon-navigation--instant": !t.animate }]]),
			style: b({ "--icon-navigation-size": `${t.size}px` }),
			"aria-label": t.label
		}, [c("span", {
			class: "share-icon-navigation__indicator",
			style: b(h.value),
			"aria-hidden": "true"
		}, null, 4), (w(!0), s(e, null, D(t.items, (r) => (w(), s(e, { key: r.key }, [r.divider ? (w(), s("span", {
			key: 0,
			class: "share-icon-navigation__divider",
			role: "separator",
			"aria-orientation": t.orientation === "vertical" ? "horizontal" : "vertical",
			"aria-label": r.dividerLabel
		}, null, 8, Me)) : o("", !0), c("button", g({
			ref_for: !0,
			ref: (e) => A(r.key, e)
		}, { ref_for: !0 }, r.attrs, {
			type: "button",
			class: ["share-icon-navigation__item", { "share-icon-navigation__item--selected": t.active && t.modelValue === r.key }],
			disabled: r.disabled,
			title: r.title || r.label,
			"aria-label": r.ariaLabel || r.label,
			"aria-current": t.active && t.modelValue === r.key ? "page" : void 0,
			"aria-pressed": t.active && t.modelValue === r.key,
			onClick: (e) => F(r),
			onKeydown: (e) => I(e, r.key)
		}), [
			O(n.$slots, "icon", { item: r }, () => [r.icon ? (w(), a(k(r.icon), {
				key: 0,
				size: 24,
				"aria-hidden": "true"
			})) : o("", !0)], !0),
			c("span", Pe, [O(n.$slots, "label", { item: r }, () => [d(j(r.shortLabel || r.label), 1)], !0)]),
			O(n.$slots, "decoration", { item: r }, void 0, !0)
		], 16, Ne)], 64))), 128))], 14, je));
	}
}, [["__scopeId", "data-v-317ddef9"]]), Ie = ["aria-label"], Le = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], Re = ["src"], ze = { class: "share-sliding-tabs__title" }, Be = /*#__PURE__*/ U({
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
		},
		maxTabWidth: {
			type: Number,
			default: 0
		},
		variant: {
			type: String,
			default: "underline",
			validator: (e) => ["underline", "chips"].includes(e)
		}
	},
	emits: ["update:modelValue"],
	setup(t, { expose: n, emit: r }) {
		let a = t, l = r, u = E(null), d = E([]), f = E({
			left: 0,
			width: 0,
			ready: !1
		}), p = i(() => ({
			transform: `translateX(${f.value.left}px)`,
			width: `${f.value.width}px`,
			opacity: +!!f.value.ready
		}));
		function m(e, t) {
			let n = d.value[t];
			n !== e && (n && k?.unobserve(n), d.value[t] = e, e && k?.observe(e));
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
		function C() {
			let e = u.value, t = d.value[a.tabs.findIndex((e) => e.key === a.modelValue)];
			if (!e || !t) return;
			let n = t.offsetLeft, r = n + t.offsetWidth;
			(n < e.scrollLeft || r > e.scrollLeft + e.clientWidth) && e.scrollTo({
				left: Math.max(0, n - (e.clientWidth - t.offsetWidth) / 2),
				behavior: globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
			});
		}
		function T() {
			if (a.variant !== "underline") return;
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
		return S(() => {
			_(() => {
				T(), C();
			}), typeof ResizeObserver < "u" && u.value && (k = new ResizeObserver(T), k.observe(u.value), d.value.forEach((e) => e && k.observe(e)));
		}), x(() => k?.disconnect()), R(() => a.modelValue, () => _(() => {
			T(), C();
		})), R(() => a.variant, () => _(() => {
			T(), C();
		})), R(() => a.tabs, () => _(() => {
			T(), C();
		}), { deep: !0 }), n({ updateUnderline: T }), (n, r) => (w(), s("nav", {
			ref_key: "rootElement",
			ref: u,
			class: v(["share-sliding-tabs", `share-sliding-tabs--${t.variant}`]),
			role: "tablist",
			"aria-label": t.ariaLabel || void 0,
			style: b({ "--sliding-tab-max-width": t.maxTabWidth ? `${t.maxTabWidth}px` : void 0 })
		}, [(w(!0), s(e, null, D(t.tabs, (e, r) => (w(), s("div", {
			key: String(e.key),
			class: v(["share-sliding-tabs__item", { "share-sliding-tabs__item--active": t.modelValue === e.key }]),
			role: "presentation"
		}, [c("button", {
			id: e.id,
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
		}, [O(n.$slots, "icon", { tab: e }, () => [e.icon || e.svg ? (w(), s("img", {
			key: 0,
			class: "share-sliding-tabs__icon",
			src: e.icon || e.svg,
			alt: "",
			"aria-hidden": "true"
		}, null, 8, Re)) : o("", !0)], !0), c("span", ze, j(e.title), 1)], 42, Le), O(n.$slots, "tab-actions", { tab: e }, void 0, !0)], 2))), 128)), t.variant === "underline" ? (w(), s("span", {
			key: 0,
			class: "share-sliding-tabs__underline",
			style: b(p.value),
			"aria-hidden": "true"
		}, null, 4)) : o("", !0)], 14, Ie));
	}
}, [["__scopeId", "data-v-7ae5b626"]]), Ve = [
	"aria-checked",
	"aria-label",
	"disabled"
], He = {
	key: 0,
	class: "share-toggle-switch__text"
}, Ue = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("button", {
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
		}, [c("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (w(), s("span", He, [O(t.$slots, "default", {}, () => [d(j(e.label), 1)], !0)])) : o("", !0)], 10, Ve));
	}
}, [["__scopeId", "data-v-828a23d7"]]), We = [], Ge = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", Ke = 0, qe = "";
function Je(e = Symbol("share-overlay")) {
	return We.push(e), e;
}
function Ye(e) {
	let t = We.lastIndexOf(e);
	t >= 0 && We.splice(t, 1);
}
function Xe(e) {
	return We.at(-1) === e;
}
function Ze(e) {
	e && ([...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")].find((e) => e.getClientRects().length > 0) || e).focus?.({ preventScroll: !0 });
}
function Qe(e, t) {
	if (e.key !== "Tab" || !t) return;
	let n = [...t.querySelectorAll(Ge)].filter((e) => e.getClientRects().length > 0);
	if (!n.length) {
		e.preventDefault(), t.focus?.({ preventScroll: !0 });
		return;
	}
	let r = n[0], i = n.at(-1);
	e.shiftKey && (document.activeElement === r || !t.contains(document.activeElement)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || !t.contains(document.activeElement)) && (e.preventDefault(), r.focus());
}
function $e(e) {
	e instanceof HTMLElement && e.isConnected && e.focus({ preventScroll: !0 });
}
function et() {
	if (typeof document > "u") return () => {};
	Ke === 0 && (qe = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden"), Ke += 1;
	let e = !1;
	return () => {
		e || (e = !0, Ke = Math.max(0, Ke - 1), Ke === 0 && (document.documentElement.style.overflow = qe));
	};
}
var tt = /* @__PURE__ */ new WeakMap();
function nt(e, { blur: t = "8px", duration: n = "300ms" } = {}) {
	if (!e) return () => {};
	let r = tt.get(e);
	r || (r = {
		count: 0,
		filter: e.style.filter,
		transition: e.style.transition
	}, tt.set(e, r)), r.count += 1, e.style.transition = `filter ${n} ease`, e.style.filter = `blur(${t})`;
	let i = !1;
	return () => {
		i || (i = !0, r.count = Math.max(0, r.count - 1), !(r.count > 0) && (e.style.filter = r.filter, e.style.transition = r.transition, tt.delete(e)));
	};
}
//#endregion
//#region src/internal/floatingState.js
var rt = [], it = null, Q = null;
function at(e) {
	let t = rt.lastIndexOf(e);
	t >= 0 && rt.splice(t, 1), Ye(e);
}
function ot(e) {
	at(e), rt.push(e), Je(e);
}
function st(e) {
	at(e);
}
function ct(e) {
	return rt.at(-1) === e && Xe(e);
}
function lt(e, t) {
	it?.token !== e && it?.close(), it = {
		token: e,
		close: t
	}, ot(e);
}
function ut(e) {
	it?.token === e && (it = null), st(e);
}
function dt(e, t) {
	Q?.token !== e && Q?.close(), Q = {
		token: e,
		close: t
	};
}
function ft(e) {
	Q?.token === e && (Q = null);
}
function pt() {
	if (!Q) return !1;
	let e = Q;
	return Q = null, e.close(), !0;
}
//#endregion
//#region src/lib/actionMenuPlacement.js
var mt = 8, ht = 6;
function gt(e, t, n) {
	return Math.min(Math.max(e, t), Math.max(t, n));
}
function _t({ triggerRect: e, popoverWidth: t, popoverHeight: n, viewportWidth: r, viewportHeight: i, viewportLeft: a = 0, viewportTop: o = 0, originX: s, originY: c, margin: l = 8, gap: u = 6 }) {
	let d = a + l, f = o + l, p = a + r - l, m = o + i - l, h = Math.min(t, Math.max(0, p - d)), g = gt(e.right - h, d, p - h), _ = Math.max(0, m - e.bottom - u), v = Math.max(0, e.top - u - f), y = _ < n && v > _, b = y ? v : _, x = Math.min(n, b), S = gt(y ? e.top - u - x : e.bottom + u, f, m - x);
	return {
		left: g,
		top: S,
		maxHeight: b,
		opensAbove: y,
		originX: gt(s - g, 0, h),
		originY: gt(c - S, 0, x)
	};
}
var vt = 8, yt = 6, bt = _t, xt = [
	"title",
	"aria-label",
	"aria-expanded",
	"disabled"
], St = ["data-share-popover-related", "aria-label"], Ct = /*#__PURE__*/ U({
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
		let l = r, u = Symbol("action-menu"), d = E(null), p = E(null), m = E(null), h = E(!1), v = null, y = null;
		function S() {
			return l.anchor ?? d.value;
		}
		function C(e) {
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
			y = null;
			let e = S(), t = p.value;
			if (!h.value || !e || !t) return;
			let n = T(), r = Math.max(0, n.viewportWidth - 16);
			t.style.minWidth = `${Math.min(200, r)}px`, t.style.maxWidth = `${Math.min(280, r)}px`;
			let i = e.getBoundingClientRect(), a = t.offsetWidth, o = _t({
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
			y != null && cancelAnimationFrame(y), y = requestAnimationFrame(D);
		}
		function A() {
			document.addEventListener("pointerdown", F, !0), document.addEventListener("keydown", L), window.addEventListener("resize", k), window.addEventListener("scroll", I, !0), window.visualViewport?.addEventListener("resize", k), window.visualViewport?.addEventListener("scroll", k);
		}
		function j() {
			document.removeEventListener("pointerdown", F, !0), document.removeEventListener("keydown", L), window.removeEventListener("resize", k), window.removeEventListener("scroll", I, !0), window.visualViewport?.removeEventListener("resize", k), window.visualViewport?.removeEventListener("scroll", k);
		}
		function M(e) {
			l.disabled || h.value || (m.value = C(e), lt(u, N), h.value = !0, A(), _(k));
		}
		function N() {
			h.value && (pt(), h.value = !1, ut(u), y != null && cancelAnimationFrame(y), y = null, j());
		}
		function P(e) {
			l.disabled || (h.value ? N() : M(e));
		}
		function F(e) {
			e.target?.closest?.(".ram-popover, [data-share-popover-related]") || d.value?.contains?.(e.target) || S()?.contains?.(e.target) || N();
		}
		function I(e) {
			p.value?.contains?.(e.target) || e.target?.closest?.("[data-share-popover-related]") || N();
		}
		function L(e) {
			e.key !== "Escape" || e.defaultPrevented || !ct(u) || (e.preventDefault(), !pt() && N());
		}
		return x(N), i({
			open: M,
			close: N,
			toggle: P
		}), (i, l) => (w(), s(e, null, [i.$slots.trigger ? (w(), s("div", g({ key: 0 }, r.triggerAttrs, {
			ref_key: "triggerEl",
			ref: d,
			class: ["ram-custom-trigger", { "ram-custom-trigger--block": r.block }],
			onClick: H(P, ["stop"])
		}), [O(i.$slots, "trigger", { open: h.value }, void 0, !0)], 16)) : (w(), s("button", g({ key: 1 }, r.triggerAttrs, {
			ref_key: "triggerEl",
			ref: d,
			type: "button",
			class: "ram-trigger",
			title: r.title,
			"aria-label": r.title,
			"aria-expanded": h.value,
			"aria-haspopup": "menu",
			disabled: r.disabled,
			onClick: H(P, ["stop"])
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
		], -1)]], 16, xt)), (w(), a(t, { to: "body" }, [f(n, { name: "share-popover-action" }, {
			default: z(() => [h.value ? (w(), s("div", {
				key: 0,
				ref_key: "popoverEl",
				ref: p,
				class: "ram-popover",
				"data-share-popover-related": r.related ? "" : void 0,
				style: b(m.value),
				role: "menu",
				"aria-label": r.title,
				onClick: l[0] ||= H(() => {}, ["stop"]),
				onPointerdown: l[1] ||= H(() => {}, ["stop"])
			}, [O(i.$slots, "default", { close: N }, void 0, !0)], 44, St)) : o("", !0)]),
			_: 3
		})]))], 64));
	}
}, [["__scopeId", "data-v-d3903284"]]), wt = ["aria-haspopup", "aria-expanded"], Tt = {
	class: "ram-item__icon",
	"aria-hidden": "true"
}, Et = {
	key: 1,
	width: "17",
	height: "17",
	viewBox: "0 0 17 17",
	fill: "none"
}, Dt = { class: "ram-item__content" }, Ot = {
	key: 0,
	class: "ram-item__suffix"
}, kt = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("button", {
			type: "button",
			class: v(["ram-item", e.tone === "default" ? null : `ram-item--${e.tone}`]),
			role: "menuitem",
			"aria-haspopup": e.submenu ? "menu" : void 0,
			"aria-expanded": e.submenu ? e.submenuOpen : void 0
		}, [
			c("span", Tt, [O(t.$slots, "icon", {}, () => [e.icon ? (w(), a(k(e.icon), {
				key: 0,
				size: 17,
				"stroke-width": 1.9
			})) : (w(), s("svg", Et, [...n[0] ||= [
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
			c("span", Dt, [O(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.suffix || e.submenu ? (w(), s("span", Ot, [O(t.$slots, "suffix", {}, void 0, !0), e.submenu ? (w(), s("svg", {
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
		], 10, wt));
	}
}, [["__scopeId", "data-v-5fc35d86"]]);
//#endregion
//#region src/composables/useMediaQuery.js
function At(e) {
	let t = E(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return S(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), x(() => n?.removeEventListener?.("change", r)), t;
}
function jt(e = 768) {
	return At(`(max-width: ${e}px)`);
}
//#endregion
//#region src/components/floating/BasePopover.vue
var Mt = [
	"id",
	"role",
	"aria-label",
	"data-share-popover-related"
], Nt = /*#__PURE__*/ U({
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
		let c = e, l = r, u = i(() => c.transition ? c.transition : c.transitionPreset === "action-menu" ? "share-popover-action" : ""), d = Symbol("base-popover"), p = E(null), m = E(null), h = null;
		function g() {
			let e = c.anchor;
			return e ? typeof e.getBoundingClientRect == "function" ? e : e.value ?? e : null;
		}
		function y(e) {
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
			let e = g();
			if (!e) return;
			let t = e.getBoundingClientRect(), n = S(), r = typeof c.minWidth == "number" ? c.minWidth : 0, i = Math.max(r, p.value?.offsetWidth || 0), a = p.value?.offsetHeight || 0, o = n.left + 8, s = n.left + n.width - 8, l = n.top + 8, u = n.top + n.height - 8, d = {
				position: "fixed",
				minWidth: y(c.minWidth),
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
		function k(e) {
			p.value?.contains(e.target) || D(e.target) || g()?.contains?.(e.target) || T();
		}
		function A(e) {
			if (!c.closeOnScroll) {
				C();
				return;
			}
			p.value?.contains(e.target) || D(e.target) || T();
		}
		function j() {
			c.closeOnResize ? T() : C();
		}
		function M(e) {
			e.key !== "Escape" || e.defaultPrevented || !ct(d) || (e.preventDefault(), !pt() && T());
		}
		function N() {
			typeof ResizeObserver < "u" && p.value && (h = new ResizeObserver(C), h.observe(p.value)), ot(d), document.addEventListener("pointerdown", k, !0), document.addEventListener("keydown", M), window.addEventListener("resize", j), window.addEventListener("scroll", A, !0), window.visualViewport?.addEventListener("resize", j), window.visualViewport?.addEventListener("scroll", C);
		}
		function P() {
			h?.disconnect(), h = null, st(d), document.removeEventListener("pointerdown", k, !0), document.removeEventListener("keydown", M), window.removeEventListener("resize", j), window.removeEventListener("scroll", A, !0), window.visualViewport?.removeEventListener("resize", j), window.visualViewport?.removeEventListener("scroll", C);
		}
		return R(() => c.open, async (e) => {
			P(), e && (C(), await _(), c.open && (C(), N()));
		}, { immediate: !0 }), R(() => [
			c.anchor,
			c.placement,
			c.offset,
			c.minWidth
		], () => {
			c.open && _(C);
		}), x(P), (r, i) => (w(), a(t, { to: "body" }, [f(n, { name: u.value }, {
			default: z(() => [e.open ? (w(), s("div", {
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
				onClick: i[0] ||= H(() => {}, ["stop"]),
				onPointerdown: i[1] ||= H(() => {}, ["stop"])
			}, [O(r.$slots, "default", { close: T }, void 0, !0)], 46, Mt)) : o("", !0)]),
			_: 3
		}, 8, ["name"])]));
	}
}, [["__scopeId", "data-v-78e3a3ea"]]), Pt = { class: "ras-root" }, Ft = { class: "ras-panel" }, It = {
	key: 0,
	class: "ras-label"
}, Lt = { class: "ras-panel ras-panel--popover" }, Rt = {
	key: 0,
	class: "ras-label"
}, zt = /*#__PURE__*/ U({
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
		let r = e, i = Symbol("action-submenu"), l = E(null), u = jt(r.mobileBreakpoint), d = E(!1);
		function p() {
			r.disabled || d.value || (dt(i, h), d.value = !0);
		}
		function m() {
			r.disabled || (d.value ? h() : p());
		}
		function h() {
			d.value && (d.value = !1, ft(i));
		}
		function g(e) {
			e || h();
		}
		return x(h), t({
			open: p,
			close: h,
			toggle: m
		}), (t, r) => (w(), s("div", Pt, [
			c("div", {
				ref_key: "triggerEl",
				ref: l,
				class: "ras-trigger",
				onClick: H(m, ["stop"])
			}, [O(t.$slots, "trigger", {
				open: d.value,
				toggle: m
			}, void 0, !0)], 512),
			f(n, { name: "ras-inline" }, {
				default: z(() => [M(u) && d.value ? (w(), s("div", {
					key: 0,
					class: "ras-inline",
					"data-share-popover-related": "",
					onClick: r[0] ||= H(() => {}, ["stop"]),
					onPointerdown: r[1] ||= H(() => {}, ["stop"])
				}, [c("div", Ft, [e.label ? (w(), s("div", It, j(e.label), 1)) : o("", !0), O(t.$slots, "default", { close: h }, void 0, !0)])], 32)) : o("", !0)]),
				_: 3
			}),
			M(u) ? o("", !0) : (w(), a(Nt, {
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
				default: z(() => [c("div", Lt, [e.label ? (w(), s("div", Rt, j(e.label), 1)) : o("", !0), O(t.$slots, "default", { close: h }, void 0, !0)])]),
				_: 3
			}, 8, [
				"open",
				"anchor",
				"min-width"
			]))
		]));
	}
}, [["__scopeId", "data-v-a4a95dc2"]]), Bt = [
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
function Vt(e) {
	return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(String(e || "").trim());
}
function Ht(e = Bt) {
	return e[Math.floor(Math.random() * e.length)];
}
//#endregion
//#region src/components/floating/ColorPresetPicker.vue
var Ut = ["aria-label"], Wt = [
	"aria-label",
	"title",
	"aria-expanded"
], Gt = {
	class: "cpp-button-icon",
	"aria-hidden": "true"
}, Kt = {
	class: "cpp-button-color",
	"aria-hidden": "true"
}, qt = ["aria-label", "aria-expanded"], Jt = { class: "cpp-body" }, Yt = "#888888", Xt = /*#__PURE__*/ U({
	__name: "ColorPresetPicker",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		colors: {
			type: Array,
			default: () => Bt
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
		variant: {
			type: String,
			default: "swatch",
			validator: (e) => ["swatch", "button"].includes(e)
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
		let n = e, r = t, a = E(null), o = E(!1), l = E("cpppop-cancel"), d = E(n.modelValue || ""), m = i(() => /^#[0-9a-f]{6}$/i.test(n.modelValue || "") ? n.modelValue : Yt), g = i(() => !!d.value && !Vt(d.value));
		function _(e) {
			return String(n.modelValue || "").toLowerCase() === String(e).toLowerCase();
		}
		function y() {
			l.value = "cpppop-cancel", o.value = !0;
		}
		function x(e) {
			l.value = e === "pick" ? "cpppop-pick" : "cpppop-cancel", o.value = !1;
		}
		function S() {
			o.value ? x("cancel") : y();
		}
		function C(e) {
			e || x("cancel");
		}
		function T(e) {
			d.value = e, r("update:modelValue", e);
		}
		function D() {
			let e = d.value.trim();
			if (!Vt(e)) {
				r("invalid", e);
				return;
			}
			T(e);
		}
		function k(e) {
			T(e), x("pick");
		}
		function A() {
			d.value = "", r("update:modelValue", n.clearValue), x("pick");
		}
		R(() => n.modelValue, (e) => {
			d.value = e || "";
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
					class: ["cpp-color", { active: _(e) }],
					style: { background: e },
					title: e,
					"aria-label": e,
					"aria-pressed": _(e),
					onMousedown: (e) => e.preventDefault(),
					onClick: () => k(e)
				}))), n.allowCustom || n.allowClear ? h("div", { class: "cpp-extra" }, [
					n.allowCustom ? h("label", {
						class: "cpp-native",
						title: n.customLabel
					}, [h("span", {
						class: "cpp-native-sw",
						style: { background: n.modelValue || "var(--surface-active)" }
					}), h("input", {
						type: "color",
						value: m.value,
						"aria-label": n.customLabel,
						onInput: (e) => T(e.target.value)
					})]) : null,
					n.allowCustom ? h("input", {
						class: ["cpp-hex", { "cpp-hex--invalid": g.value }],
						type: "text",
						value: d.value,
						placeholder: "#hex",
						spellcheck: "false",
						"aria-label": n.customLabel,
						"aria-invalid": g.value,
						onInput: (e) => {
							d.value = e.target.value;
						},
						onChange: D,
						onKeydown: (e) => {
							e.key === "Enter" && D();
						}
					}) : null,
					n.allowClear ? h("button", {
						type: "button",
						class: "cpp-clear",
						onMousedown: (e) => e.preventDefault(),
						onClick: A
					}, n.clearLabel) : null
				]) : null]);
			}
		});
		return (t, n) => e.inline ? (w(), s("div", {
			key: 0,
			class: "cpp-body cpp-body--inline",
			"aria-label": e.ariaLabel
		}, [f(M(j))], 8, Ut)) : (w(), s("span", {
			key: 1,
			ref_key: "anchorEl",
			ref: a,
			class: "cpp-host"
		}, [e.variant === "button" ? (w(), s("button", {
			key: 0,
			type: "button",
			class: "cpp-button",
			"aria-label": e.ariaLabel,
			title: e.ariaLabel,
			"aria-expanded": o.value,
			"aria-haspopup": "dialog",
			onClick: S
		}, [c("span", Gt, [O(t.$slots, "icon", {}, () => [n[0] ||= u("<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-2f1b004a><path d=\"M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-3.7 1.6 1.6 0 0 1 .8-3H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3Z\" data-v-2f1b004a></path><circle cx=\"7.5\" cy=\"10\" r=\".7\" data-v-2f1b004a></circle><circle cx=\"11\" cy=\"7\" r=\".7\" data-v-2f1b004a></circle><circle cx=\"15.5\" cy=\"8\" r=\".7\" data-v-2f1b004a></circle><circle cx=\"6.5\" cy=\"14\" r=\".7\" data-v-2f1b004a></circle></svg>", 1)], !0)]), c("span", Kt, [c("span", { style: b({ background: e.modelValue || "var(--bg)" }) }, null, 4)])], 8, Wt)) : O(t.$slots, "trigger", {
			toggle: S,
			open: o.value,
			value: e.modelValue
		}, () => [c("button", {
			type: "button",
			class: v(["cpp-swatch", { "cpp-swatch--empty": !e.modelValue }]),
			style: b(e.modelValue ? { background: e.modelValue } : null),
			"aria-label": e.ariaLabel,
			"aria-expanded": o.value,
			"aria-haspopup": "dialog",
			onClick: S
		}, null, 14, qt)], !0, 1), f(Nt, {
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
			default: z(() => [c("div", Jt, [f(M(j))])]),
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
}, [["__scopeId", "data-v-2f1b004a"]]), Zt = [
	"aria-label",
	"aria-expanded",
	"aria-activedescendant",
	"disabled"
], Qt = ["aria-label"], $t = [
	"placeholder",
	"aria-label",
	"aria-activedescendant"
], en = [
	"id",
	"aria-selected",
	"disabled",
	"onMouseenter",
	"onClick"
], tn = {
	key: 1,
	class: "vs-empty"
}, nn = /*#__PURE__*/ U({
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
		let d = `share-value-select-${a}`, f = E(null), p = E(null), m = E(null), h = E(!1), g = E(""), y = E(-1), b = i(() => l.options.map((e, t) => e && typeof e == "object" ? {
			value: e.value,
			label: String(e.label ?? e.value ?? ""),
			disabled: !!e.disabled,
			key: e.key ?? `${String(e.value)}-${t}`
		} : {
			value: e,
			label: String(e ?? ""),
			disabled: !1,
			key: `${String(e)}-${t}`
		})), S = i(() => b.value.find((e) => O(e.value))?.label ?? ""), C = i(() => {
			let e = g.value.trim().toLocaleLowerCase();
			return e ? b.value.filter((t) => t.label.toLocaleLowerCase().includes(e)) : b.value;
		}), T = i(() => l.searchable && b.value.length >= l.searchThreshold);
		function O(e) {
			return String(e) === String(l.modelValue);
		}
		function k(e) {
			return `${d}-option-${e}`;
		}
		function A(e = 0, t = 1) {
			let n = C.value;
			if (!n.length) return -1;
			for (let r = 0; r < n.length; r += 1) {
				let i = (e + r * t + n.length) % n.length;
				if (!n[i].disabled) return i;
			}
			return -1;
		}
		function M() {
			let e = C.value.findIndex((e) => O(e.value) && !e.disabled);
			return e >= 0 ? e : A();
		}
		function N(e) {
			C.value[e]?.disabled || (y.value = e);
		}
		function P(e) {
			let t = C.value;
			if (!t.length) return;
			let n = y.value < 0 ? e > 0 ? 0 : t.length - 1 : (y.value + e + t.length) % t.length;
			y.value = A(n, e), _(() => document.getElementById(k(y.value))?.scrollIntoView?.({ block: "nearest" }));
		}
		function F() {
			l.disabled || h.value || (h.value = !0, y.value = M(), document.addEventListener("pointerdown", U, !0), u("open"), T.value && _(() => m.value?.focus()));
		}
		function L({ restoreFocus: e = !1 } = {}) {
			h.value && (h.value = !1, g.value = "", y.value = -1, document.removeEventListener("pointerdown", U, !0), u("close"), e && _(() => p.value?.focus()));
		}
		function z() {
			h.value ? L() : F();
		}
		function V(e) {
			!e || e.disabled || (u("update:modelValue", e.value), L({ restoreFocus: !0 }));
		}
		function H() {
			V(C.value[y.value]);
		}
		function U(e) {
			f.value?.contains(e.target) || L();
		}
		function W(e) {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault(), h.value ? P(e.key === "ArrowDown" ? 1 : -1) : F();
				return;
			}
			if (e.key === "Home" && h.value) {
				e.preventDefault(), y.value = A();
				return;
			}
			if (e.key === "End" && h.value) {
				e.preventDefault(), y.value = A(C.value.length - 1, -1);
				return;
			}
			if ((e.key === "Enter" || e.key === " ") && h.value) {
				e.preventDefault(), H();
				return;
			}
			e.key === "Escape" && h.value && (e.preventDefault(), L({ restoreFocus: !0 }));
		}
		function ee(e) {
			e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), P(e.key === "ArrowDown" ? 1 : -1)) : e.key === "Home" ? (e.preventDefault(), y.value = A()) : e.key === "End" ? (e.preventDefault(), y.value = A(C.value.length - 1, -1)) : e.key === "Enter" ? (e.preventDefault(), H()) : e.key === "Escape" && (e.preventDefault(), L({ restoreFocus: !0 }));
		}
		return R(C, () => {
			y.value = M();
		}), R(() => l.disabled, (e) => {
			e && L();
		}), x(() => {
			document.removeEventListener("pointerdown", U, !0);
		}), n({
			open: F,
			close: L,
			toggle: z
		}), (n, r) => (w(), s("div", {
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
			"aria-activedescendant": h.value && y.value >= 0 ? k(y.value) : void 0,
			disabled: t.disabled,
			onClick: z,
			onKeydown: W
		}, [c("span", null, j(S.value || t.placeholder), 1), r[1] ||= c("span", {
			class: "vs-arrow",
			"aria-hidden": "true"
		}, "▾", -1)], 42, Zt), h.value ? (w(), s("div", {
			key: 0,
			id: d,
			class: v(["vs-drop", { "vs-drop-up": t.dropUp }]),
			role: "listbox",
			"aria-label": t.ariaLabel || void 0
		}, [
			T.value ? B((w(), s("input", {
				key: 0,
				ref_key: "searchEl",
				ref: m,
				"onUpdate:modelValue": r[0] ||= (e) => g.value = e,
				class: "vs-search",
				type: "search",
				placeholder: t.searchPlaceholder,
				"aria-label": t.searchAriaLabel || t.searchPlaceholder,
				"aria-controls": d,
				"aria-activedescendant": y.value >= 0 ? k(y.value) : void 0,
				autocomplete: "off",
				onKeydown: ee
			}, null, 40, $t)), [[I, g.value]]) : o("", !0),
			(w(!0), s(e, null, D(C.value, (e, t) => (w(), s("button", {
				id: k(t),
				key: e.key,
				class: v(["vs-option", { "vs-option--active": t === y.value }]),
				type: "button",
				role: "option",
				"aria-selected": O(e.value),
				disabled: e.disabled,
				onMouseenter: (e) => N(t),
				onClick: (t) => V(e)
			}, j(e.label), 43, en))), 128)),
			C.value.length === 0 ? (w(), s("div", tn, j(t.emptyLabel), 1)) : o("", !0)
		], 10, Qt)) : o("", !0)], 2));
	}
}, [["__scopeId", "data-v-764969f5"]]), rn = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.b.blockquote.br.code.em.h1.h2.h3.h4.h5.h6.li.ol.p.pre.s.span.strike.strong.table.tbody.td.th.thead.tr.u.ul".split(".")), an = /* @__PURE__ */ new Set([
	"embed",
	"iframe",
	"math",
	"object",
	"script",
	"style",
	"svg",
	"template"
]), on = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:"
]), sn = /^[a-z][a-z0-9-]{0,39}$/, cn = 4096;
function ln(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
function un(e) {
	let t = String(e || "").trim();
	if (!t || /[\u0000-\u001f\u007f]/.test(t)) return "";
	if (/^(?:#|\?|\.?\.\/|\/)/.test(t)) return t;
	try {
		let e = new URL(t, "https://share-ui.invalid");
		return on.has(e.protocol) ? t : "";
	} catch {
		return "";
	}
}
function dn(e) {
	let t = String(e || "").trim();
	if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t) || /^var\(--[a-z0-9-]+\)$/i.test(t)) return t;
	let n = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
	if (!n || n.slice(1, 4).map(Number).some((e) => e < 0 || e > 255)) return "";
	let r = n[4] == null ? null : Number(n[4]);
	return r != null && (r < 0 || r > 1) ? "" : t;
}
function fn(e) {
	try {
		let t = encodeURIComponent(JSON.stringify(e ?? {}));
		return t.length <= cn ? t : "";
	} catch {
		return "";
	}
}
function pn(e) {
	let t = String(e || "");
	if (!t || t.length > cn) return null;
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
function mn(e, t, n) {
	let r = String(e || "").trim().toLowerCase(), i = fn(t);
	return !sn.test(r) || !i ? "" : `<span data-rich-node="${r}" data-rich-payload="${ln(i)}" contenteditable="false">${ln(n || r)}</span>`;
}
function hn(e) {
	if (!e?.getAttribute) return null;
	let t = String(e.getAttribute("data-rich-node") || "").trim().toLowerCase(), n = pn(e.getAttribute("data-rich-payload"));
	return !sn.test(t) || n == null ? null : {
		kind: t,
		payload: n,
		label: e.textContent || t
	};
}
function gn(e, t) {
	let n = e.getAttribute("title");
	n && t.setAttribute("title", n);
	let r = e.getAttribute("dir");
	[
		"ltr",
		"rtl",
		"auto"
	].includes(r) && t.setAttribute("dir", r);
	let i = dn(e.style?.getPropertyValue("color"));
	if (i && t.style.setProperty("color", i), t.tagName === "A") {
		let n = un(e.getAttribute("href"));
		n && t.setAttribute("href", n), e.getAttribute("target") === "_blank" && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer"));
	}
	if (t.tagName === "SPAN") {
		let n = hn(e);
		n && (t.setAttribute("data-rich-node", n.kind), t.setAttribute("data-rich-payload", fn(n.payload)), t.setAttribute("contenteditable", "false"));
	}
	if (t.tagName === "TD" || t.tagName === "TH") for (let n of ["colspan", "rowspan"]) {
		let r = Number.parseInt(e.getAttribute(n), 10);
		r >= 1 && r <= 100 && t.setAttribute(n, String(r));
	}
}
function _n(e, t, n) {
	if (e.nodeType === 3) {
		t.appendChild(n.createTextNode(e.nodeValue || ""));
		return;
	}
	if (e.nodeType !== 1) return;
	let r = e.tagName.toLowerCase();
	if (an.has(r)) return;
	if (!rn.has(r)) {
		for (let r of [...e.childNodes]) _n(r, t, n);
		return;
	}
	let i = n.createElement(r);
	if (gn(e, i), i.hasAttribute("data-rich-node")) i.textContent = e.textContent || i.getAttribute("data-rich-node");
	else for (let t of [...e.childNodes]) _n(t, i, n);
	t.appendChild(i);
}
function vn(e) {
	let t = String(e || "");
	if (!t) return "";
	if (typeof DOMParser > "u") return ln(t);
	let n = new DOMParser().parseFromString(t, "text/html"), r = n.createElement("div");
	for (let e of [...n.body.childNodes]) _n(e, r, n);
	return r.innerHTML;
}
function yn(e) {
	return ln(e).replace(/\r\n?|\n/g, "<br>");
}
//#endregion
//#region src/components/rich-text/RichContent.vue
function bn(e) {
	let t = {};
	for (let n of [...e.attributes]) n.name !== "class" && (t[n.name] = n.value);
	return t;
}
function xn(e, t, n) {
	if (e.nodeType === Node.TEXT_NODE) return e.nodeValue || "";
	if (e.nodeType !== Node.ELEMENT_NODE) return null;
	let r = hn(e);
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
	let i = [...e.childNodes].map((e, r) => xn(e, t, `${n}.${r}`)).filter((e) => e != null);
	return h(e.tagName.toLowerCase(), {
		...bn(e),
		key: n
	}, i);
}
var Sn = /*#__PURE__*/ U({
	name: "RichContent",
	inheritAttrs: !1,
	props: { html: {
		type: String,
		default: ""
	} },
	setup(e, { slots: t, attrs: n }) {
		let r = i(() => vn(e.html));
		return () => {
			if (typeof DOMParser > "u") return h("div", {
				...n,
				class: ["rc", n.class],
				innerHTML: r.value
			});
			let e = [...new DOMParser().parseFromString(r.value, "text/html").body.childNodes].map((e, n) => xn(e, t, String(n))).filter((e) => e != null);
			return h("div", {
				...n,
				class: ["rc", n.class]
			}, e);
		};
	}
}, [["__scopeId", "data-v-db98d003"]]), Cn = { class: "input-desc" }, wn = ["aria-label"], Tn = ["title"], En = ["title"], Dn = ["title"], On = ["aria-expanded"], kn = ["onMousedown"], An = ["title", "onMousedown"], jn = { class: "desc-color-icon" }, Mn = [
	"title",
	"aria-label",
	"aria-expanded"
], Nn = { class: "desc-link-field" }, Pn = ["placeholder"], Fn = { class: "desc-link-field" }, In = {
	key: 0,
	class: "desc-link-error"
}, Ln = { class: "desc-link-actions" }, Rn = {
	type: "submit",
	class: "desc-link-save"
}, zn = ["data-placeholder", "aria-label"], Bn = {
	key: 2,
	class: "desc-empty"
}, Vn = /*#__PURE__*/ U({
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
			default: () => Bt
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
		})), b = i(() => Array.from({ length: p.maxHeadingLevel }, (e, t) => t + 1)), x = E(!1), C = E(null), k = E(null), A = E(null), M = E(null), N = E(!1), P = E(null), F = E(null), L = E(null), V = E(null), U = E(!1), W = T({
			text: "",
			url: ""
		}), ee = i(() => P.value || F.value || A.value);
		function te(e) {
			return vn(e) || "<p><br></p>";
		}
		function G(e) {
			!p.editable || !k.value || document.activeElement !== k.value && (k.value.innerHTML = te(e));
		}
		R(() => p.modelValue, G), R(() => p.editable, (e) => {
			e && _(() => G(p.modelValue));
		}), S(() => {
			G(p.modelValue), document.execCommand("defaultParagraphSeparator", !1, "p");
		});
		function ne(e) {
			return !!(e && k.value?.contains(e.commonAncestorContainer));
		}
		function re() {
			let e = window.getSelection();
			if (!e?.rangeCount) return;
			let t = e.getRangeAt(0);
			ne(t) && (V.value = t.cloneRange());
		}
		function ie() {
			k.value?.focus();
			let e = window.getSelection();
			return !e || !ne(V.value) ? !1 : (e.removeAllRanges(), e.addRange(V.value), !0);
		}
		function ae() {
			return ne(V.value) ? V.value.toString().trim() : "";
		}
		function oe(e) {
			let t = mn(e?.kind, e?.payload, e?.label);
			if (!t || !k.value) return null;
			ie(), document.execCommand("insertHTML", !1, t), X();
			let n = k.value.querySelectorAll("[data-rich-node]"), r = n[n.length - 1] || null;
			return r && (L.value = r, ue(r)), r;
		}
		function se(e) {
			return e?.nodeType === Node.ELEMENT_NODE && e.matches?.("[data-rich-node]") ? e : e?.element?.matches?.("[data-rich-node]") ? e.element : L.value?.isConnected ? L.value : null;
		}
		function ce(e, t) {
			let n = se(e), r = mn(t?.kind, t?.payload, t?.label);
			if (!n || !r) return null;
			let i = document.createElement("template");
			i.innerHTML = r;
			let a = i.content.firstElementChild;
			return n.replaceWith(a), L.value = a, X(), a;
		}
		function le(e) {
			let t = se(e);
			if (!t) return !1;
			let n = t.nextSibling || t.parentNode;
			return t.remove(), L.value = null, n?.nodeType === Node.ELEMENT_NODE && we(n), X(), !0;
		}
		function ue(e) {
			let t = document.createRange(), n = window.getSelection();
			t.setStartAfter(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t), V.value = t.cloneRange();
		}
		function K(e, t) {
			re(), P.value = e, F.value = t, U.value = !1, W.text = e?.textContent || ae(), W.url = e?.getAttribute?.("href") || "", N.value = !0, _(() => M.value?.focus());
		}
		function q(e = null) {
			K(null, e);
		}
		function de(e) {
			K(e, null);
		}
		function fe(e = !1) {
			e !== !0 && (N.value = !1, P.value = null, F.value = null, U.value = !1);
		}
		function pe() {
			let e = un(W.url);
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
					i && ne(i) && (i.deleteContents(), i.insertNode(r), ue(r));
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
			!n || !k.value?.contains(n) || (e.preventDefault(), L.value = n, h("node-select", {
				element: n,
				node: hn(n)
			}));
		}
		let ge = {
			focus: () => k.value?.focus(),
			rememberSelection: re,
			openLinkEditor: q,
			insertRichNode: oe,
			updateRichNode: ce,
			removeRichNode: le
		};
		function J(e) {
			return g.value.heading.replace("{level}", String(e));
		}
		function Y(e) {
			k.value?.focus(), document.execCommand("styleWithCSS", !1, !1), document.execCommand(e, !1, null), _(X);
		}
		function _e(e) {
			k.value?.focus(), document.execCommand("formatBlock", !1, e), x.value = !1, _(X);
		}
		function ve(e) {
			if (k.value?.focus(), document.execCommand("styleWithCSS", !1, !0), e) {
				document.execCommand("foreColor", !1, e), X();
				return;
			}
			document.execCommand("removeFormat", !1, null), _(() => {
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
			let e = vn(k.value.innerHTML);
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
			Z(t ? vn(t) : yn(n));
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
			Z(t ? vn(t) : yn(n));
		}
		function Me(e) {
			X(), h("blur", e);
		}
		return n({
			focus: () => k.value?.focus(),
			commit: X,
			rememberSelection: re,
			openLinkEditor: q,
			insertRichNode: oe,
			updateRichNode: ce,
			removeRichNode: le
		}), (n, r) => (w(), s("div", Cn, [t.editable ? (w(), s(e, { key: 0 }, [
			c("div", {
				class: "desc-toolbar",
				role: "toolbar",
				"aria-label": g.value.toolbar
			}, [
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.bold,
					onMousedown: r[0] ||= H((e) => Y("bold"), ["prevent"])
				}, [c("b", null, j(g.value.boldShort), 1)], 40, Tn),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.italic,
					onMousedown: r[1] ||= H((e) => Y("italic"), ["prevent"])
				}, [c("i", null, j(g.value.italicShort), 1)], 40, En),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.underline,
					onMousedown: r[2] ||= H((e) => Y("underline"), ["prevent"])
				}, [c("u", null, j(g.value.underlineShort), 1)], 40, Dn),
				r[13] ||= c("div", { class: "desc-sep" }, null, -1),
				c("button", {
					ref_key: "headingTrigger",
					ref: C,
					type: "button",
					class: "desc-btn desc-btn-wide",
					"aria-expanded": x.value,
					"aria-haspopup": "menu",
					onMousedown: r[3] ||= H((e) => x.value = !x.value, ["prevent"])
				}, [d(j(g.value.paragraph) + " ", 1), r[11] ||= c("span", {
					class: "desc-caret",
					"aria-hidden": "true"
				}, "▾", -1)], 40, On),
				f(Nt, {
					open: x.value,
					anchor: C.value,
					"min-width": 160,
					"z-index": 4500,
					role: "menu",
					"aria-label": g.value.paragraph,
					"onUpdate:open": r[5] ||= (e) => x.value = e
				}, {
					default: z(() => [c("button", {
						type: "button",
						class: "desc-drop-item drop-p",
						role: "menuitem",
						onMousedown: r[4] ||= H((e) => _e("p"), ["prevent"])
					}, j(g.value.normal), 33), (w(!0), s(e, null, D(b.value, (e) => (w(), s("button", {
						key: e,
						type: "button",
						class: v(["desc-drop-item", `drop-h${e}`]),
						role: "menuitem",
						onMousedown: H((t) => _e(`h${e}`), ["prevent"])
					}, j(J(e)), 43, kn))), 128))]),
					_: 1
				}, 8, [
					"open",
					"anchor",
					"aria-label"
				]),
				r[14] ||= c("div", { class: "desc-sep" }, null, -1),
				f(Xt, {
					"allow-clear": "",
					colors: t.colors,
					"model-value": "",
					"clear-label": g.value.clearColor,
					"aria-label": g.value.color,
					"onUpdate:modelValue": ve
				}, {
					trigger: z(({ toggle: e }) => [c("button", {
						type: "button",
						class: "desc-btn",
						title: g.value.color,
						onMousedown: H((t) => {
							x.value = !1, e();
						}, ["prevent"])
					}, [c("span", jn, j(g.value.colorShort), 1)], 40, An)]),
					_: 1
				}, 8, [
					"colors",
					"clear-label",
					"aria-label"
				]),
				r[15] ||= c("div", { class: "desc-sep" }, null, -1),
				t.showLinkButton ? (w(), s("button", {
					key: 0,
					ref_key: "linkTrigger",
					ref: A,
					type: "button",
					class: v(["desc-btn", { active: N.value }]),
					title: g.value.link,
					"aria-label": g.value.link,
					"aria-expanded": N.value,
					"aria-haspopup": "dialog",
					onMousedown: r[6] ||= H((e) => q(), ["prevent"])
				}, [...r[12] ||= [c("span", { "aria-hidden": "true" }, "↗", -1)]], 42, Mn)) : o("", !0),
				O(n.$slots, "toolbar", {
					editor: ge,
					insertRichNode: oe,
					updateRichNode: ce,
					removeRichNode: le
				}, void 0, !0)
			], 8, wn),
			f(Nt, {
				open: N.value,
				anchor: ee.value,
				"min-width": 260,
				"z-index": 4500,
				role: "dialog",
				"aria-label": g.value.link,
				"onUpdate:open": fe
			}, {
				default: z(() => [c("form", {
					class: "desc-link-form",
					onSubmit: H(pe, ["prevent"])
				}, [
					c("label", Nn, [c("span", null, j(g.value.linkText), 1), B(c("input", {
						"onUpdate:modelValue": r[7] ||= (e) => W.text = e,
						type: "text",
						placeholder: g.value.linkTextPlaceholder
					}, null, 8, Pn), [[I, W.text]])]),
					c("label", Fn, [c("span", null, j(g.value.linkUrl), 1), B(c("input", {
						ref_key: "linkUrlInput",
						ref: M,
						"onUpdate:modelValue": r[8] ||= (e) => W.url = e,
						type: "text",
						inputmode: "url",
						placeholder: "https://…"
					}, null, 512), [[I, W.url]])]),
					U.value ? (w(), s("span", In, j(g.value.linkInvalid), 1)) : o("", !0),
					c("div", Ln, [
						P.value ? (w(), s("button", {
							key: 0,
							type: "button",
							class: "desc-link-remove",
							onClick: me
						}, j(g.value.removeLink), 1)) : o("", !0),
						c("button", {
							type: "button",
							class: "desc-link-cancel",
							onClick: r[9] ||= (e) => fe(!1)
						}, j(g.value.cancel), 1),
						c("button", Rn, j(g.value.saveLink), 1)
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
				onKeyup: re,
				onMouseup: re,
				onClick: he,
				onPaste: ke,
				onDrop: je,
				onFocus: r[10] ||= (e) => n.$emit("focus", e),
				onBlur: Me
			}, null, 40, zn)
		], 64)) : t.modelValue ? (w(), a(Sn, {
			key: 1,
			class: "desc-view",
			html: t.modelValue
		}, l({ _: 2 }, [n.$slots.node ? {
			name: "node",
			fn: z((e) => [O(n.$slots, "node", y(m(e)), void 0, !0)]),
			key: "0"
		} : void 0]), 1032, ["html"])) : (w(), s("div", Bn, j(t.placeholder), 1))]));
	}
}, [["__scopeId", "data-v-feac13b3"]]), Hn = [
	"aria-label",
	"aria-expanded",
	"disabled"
], Un = {
	class: "share-account-avatar",
	"aria-hidden": "true"
}, Wn = {
	key: 0,
	class: "share-account-label"
}, Gn = {
	key: 1,
	class: "share-account-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true"
}, Kn = /*#__PURE__*/ U({
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
		return (t, r) => (w(), a(Ct, {
			title: e.title,
			disabled: e.disabled,
			block: ""
		}, {
			trigger: z(({ open: i }) => [c("button", {
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
				c("span", Un, [O(t.$slots, "avatar", {}, () => [d(j(n.value), 1)], !0)]),
				e.expanded ? (w(), s("span", Wn, j(e.label), 1)) : o("", !0),
				e.expanded ? (w(), s("svg", Gn, [...r[0] ||= [c("path", {
					d: "m4 6 4 4 4-4",
					stroke: "currentColor",
					"stroke-width": "1.7",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, null, -1)]])) : o("", !0)
			], 10, Hn)]),
			default: z(({ close: e }) => [O(t.$slots, "default", { close: e }, void 0, !0)]),
			_: 3
		}, 8, ["title", "disabled"]));
	}
}, [["__scopeId", "data-v-e71617a9"]]), qn = {
	key: 1,
	class: "share-app-shell__rail"
}, Jn = /*#__PURE__*/ U({
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
			validator: (e) => [
				0,
				600,
				640,
				768,
				1200
			].includes(e)
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
		return (t, r) => (w(), s("div", {
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
			e.sidebarVisible ? O(t.$slots, "sidebar", {}, void 0, !0, 0) : o("", !0),
			(w(), a(k(e.contentTag), { class: "share-app-shell__content" }, {
				default: z(() => [O(t.$slots, "default", {}, void 0, !0)]),
				_: 3
			})),
			t.$slots.rail ? (w(), s("aside", qn, [O(t.$slots, "rail", {}, void 0, !0)])) : o("", !0),
			O(t.$slots, "overlay", {}, void 0, !0)
		], 6));
	}
}, [["__scopeId", "data-v-863965ea"]]), Yn = ["aria-label", "title"], Xn = {
	class: "share-sidebar-toggle__icon sidebar-icon",
	"aria-hidden": "true"
}, Zn = {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none"
}, Qn = {
	key: 0,
	d: "m11 6-3 3 3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, $n = {
	key: 1,
	d: "m9 6 3 3-3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, er = { class: "share-sidebar-label sidebar-label" }, tr = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("button", {
			type: "button",
			class: "share-sidebar-toggle sidebar-toggle",
			"aria-label": e.expanded ? e.collapseLabel : e.expandLabel,
			title: e.expanded ? e.collapseLabel : e.expandLabel
		}, [c("span", Xn, [(w(), s("svg", Zn, [
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
			e.expanded ? (w(), s("path", Qn)) : (w(), s("path", $n))
		]))]), c("span", er, j(e.expanded ? e.collapseLabel : e.expandLabel), 1)], 8, Yn));
	}
}, [["__scopeId", "data-v-82e613bd"]]), nr = {
	key: 0,
	class: "share-sidebar-head"
}, rr = ["aria-label"], ir = {
	key: 1,
	class: "share-sidebar-tools"
}, ar = {
	key: 2,
	class: "share-sidebar-account"
}, or = /*#__PURE__*/ U({
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
			validator: (e) => [
				"fixed",
				"sticky",
				"embedded"
			].includes(e)
		},
		mobileMode: {
			type: String,
			default: "hide",
			validator: (e) => ["hide", "top"].includes(e)
		},
		mobileBreakpoint: {
			type: Number,
			default: 768,
			validator: (e) => [
				0,
				600,
				640,
				768,
				1200
			].includes(e)
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
		let d = E(u()), f = i({
			get: () => r.modelValue ?? d.value,
			set: (e) => {
				d.value = e, l("update:modelValue", e), l("change", e);
			}
		});
		R(f, (e) => {
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
		}), (t, n) => (w(), s("aside", { class: v(["share-app-sidebar app-sidebar", [
			f.value && "share-app-sidebar--expanded app-sidebar--expanded",
			e.elevated && "share-app-sidebar--elevated",
			!(e.showToggle || t.$slots.tools) && "share-app-sidebar--without-tools",
			`share-app-sidebar--${e.position}`,
			e.position !== "embedded" && e.mobileBreakpoint !== 0 && `share-app-sidebar--mobile-${e.mobileMode}`,
			e.position !== "embedded" && e.mobileBreakpoint !== 0 && `share-app-sidebar--breakpoint-${e.mobileBreakpoint}`
		]]) }, [
			t.$slots.brand ? (w(), s("div", nr, [O(t.$slots, "brand", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			c("nav", {
				class: "share-sidebar-nav",
				"aria-label": e.ariaLabel
			}, [O(t.$slots, "default", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)], 8, rr),
			e.showToggle || t.$slots.tools ? (w(), s("div", ir, [e.showToggle ? (w(), a(tr, {
				key: 0,
				expanded: f.value,
				"expand-label": e.expandLabel,
				"collapse-label": e.collapseLabel,
				onClick: h
			}, null, 8, [
				"expanded",
				"expand-label",
				"collapse-label"
			])) : o("", !0), O(t.$slots, "tools", {
				expanded: f.value,
				expand: p,
				collapse: m,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			t.$slots.account ? (w(), s("div", ar, [O(t.$slots, "account", { expanded: f.value }, void 0, !0)])) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-ed2e08af"]]), sr = {
	class: "share-sidebar-brand__icon sidebar-brand-icon",
	"aria-hidden": "true"
}, cr = { class: "share-sidebar-label share-sidebar-brand__label sidebar-label sidebar-brand-label" }, lr = /*#__PURE__*/ U(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (w(), a(k(e.as), g({
			class: "share-sidebar-brand sidebar-brand",
			"aria-label": e.ariaLabel || e.label
		}, t.$attrs), {
			default: z(() => [c("span", sr, [O(t.$slots, "icon", {}, () => [e.icon ? (w(), a(k(e.icon), {
				key: 0,
				size: 22,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", cr, [O(t.$slots, "default", {}, () => [d(j(e.label), 1)], !0)])]),
			_: 3
		}, 16, ["aria-label"]));
	}
}), [["__scopeId", "data-v-ba183bb0"]]), ur = { class: "share-sidebar-group" }, dr = /*#__PURE__*/ U({
	__name: "SidebarGroup",
	props: { label: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (w(), s("div", ur, [O(t.$slots, "default", {}, () => [d(j(e.label), 1)], !0)]));
	}
}, [["__scopeId", "data-v-15a2ea25"]]), fr = {
	class: "share-sidebar-icon sidebar-icon",
	"aria-hidden": "true"
}, pr = { class: "share-sidebar-label sidebar-label" }, mr = /*#__PURE__*/ U(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (w(), a(k(e.as), g({
			class: ["share-sidebar-link sidebar-link", { active: e.active }],
			title: e.title || e.label,
			"aria-current": e.active ? "page" : void 0
		}, t.$attrs), {
			default: z(() => [c("span", fr, [O(t.$slots, "icon", {}, () => [e.icon ? (w(), a(k(e.icon), {
				key: 0,
				size: 20,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", pr, [O(t.$slots, "default", {}, () => [d(j(e.label), 1)], !0)])]),
			_: 3
		}, 16, [
			"class",
			"title",
			"aria-current"
		]));
	}
}), [["__scopeId", "data-v-0216c264"]]), hr = {
	key: 0,
	class: "share-editor-panel__title"
}, gr = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("div", { class: v(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (w(), s("div", hr, [O(t.$slots, "title", {}, () => [d(j(e.title), 1)], !0)])) : o("", !0), O(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-055dcd8d"]]), _r = { class: "share-editor-section-title" }, vr = { class: "share-editor-section-title__text" }, yr = {
	key: 0,
	class: "share-editor-section-title__actions"
}, br = /*#__PURE__*/ U({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (w(), s("div", _r, [c("span", vr, [O(t.$slots, "default", {}, () => [d(j(e.title), 1)], !0)]), t.$slots.actions ? (w(), s("span", yr, [O(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)]));
	}
}, [["__scopeId", "data-v-03237796"]]), xr = { class: "share-editor-section" }, Sr = /*#__PURE__*/ U({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (w(), s("section", xr, [e.title || t.$slots.title ? (w(), a(br, {
			key: 0,
			title: e.title
		}, l({ _: 2 }, [t.$slots.title ? {
			name: "default",
			fn: z(() => [O(t.$slots, "title", {}, void 0, !0)]),
			key: "0"
		} : void 0, t.$slots.actions ? {
			name: "actions",
			fn: z(() => [O(t.$slots, "actions", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, ["title"])) : o("", !0), O(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-6a56d656"]]), Cr = {}, wr = { class: "share-editor-total" };
function Tr(e, t) {
	return w(), s("div", wr, [O(e.$slots, "default", {}, void 0, !0)]);
}
var Er = /*#__PURE__*/ U(Cr, [["render", Tr], ["__scopeId", "data-v-72dfd940"]]);
//#endregion
//#region src/internal/drawerSwipe.js
function Dr({ enabled: e, width: t, close: n }) {
	let r = null, i = null;
	function a() {
		r = null, i = null;
	}
	function o(t) {
		a(), !(!e() || t.touches.length !== 1) && (t.target?.closest?.("input, textarea, select, [contenteditable], [data-share-drawer-no-swipe]") || (r = {
			x: t.touches[0].clientX,
			y: t.touches[0].clientY
		}));
	}
	function s(t) {
		if (!r) return;
		if (t.touches.length !== 1 || !e()) return a();
		let n = t.touches[0].clientX - r.x, o = t.touches[0].clientY - r.y;
		!i && Math.max(Math.abs(n), Math.abs(o)) >= 10 && (i = Math.abs(n) > Math.abs(o) * 1.5 ? "horizontal" : "vertical"), i === "horizontal" && n < 0 && t.cancelable && t.preventDefault();
	}
	function c(o) {
		if (r && e() && o.changedTouches.length === 1) {
			let e = o.changedTouches[0].clientX - r.x, a = o.changedTouches[0].clientY - r.y;
			i !== "vertical" && -e >= Math.max(64, t() * .25) && -e > Math.abs(a) * 1.5 && n();
		}
		a();
	}
	return {
		start: o,
		move: s,
		end: c,
		cancel: a
	};
}
//#endregion
//#region src/components/overlay/AppDrawer.vue
var Or = ["aria-label"], kr = {
	key: 0,
	class: "share-drawer__header"
}, Ar = ["aria-label"], jr = { class: "share-drawer__body" }, Mr = {
	key: 2,
	class: "share-drawer__footer"
}, Nr = /*#__PURE__*/ U(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "AppDrawer",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		ariaLabel: {
			type: String,
			default: "Drawer"
		},
		width: {
			type: [Number, String],
			default: 288
		},
		zIndex: {
			type: Number,
			default: 3e3
		},
		showClose: {
			type: Boolean,
			default: !0
		},
		closeLabel: {
			type: String,
			default: "Close"
		},
		swipeToClose: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:modelValue",
		"opened",
		"closed"
	],
	setup(e, { expose: r, emit: l }) {
		let u = e, d = l, p = E(null), m = E(!1), h = i(() => u.modelValue && !m.value), v = At("(prefers-reduced-motion: reduce)"), y = Symbol("app-drawer"), S = null, C = null, T = !1;
		function D() {
			return h.value && Xe(y);
		}
		function k(e = p.value?.parentElement) {
			e && (e.inert = !0, e.setAttribute("inert", ""), e.setAttribute("aria-hidden", "true"), e.style.pointerEvents = "none");
		}
		function A() {
			D() && (k(), m.value = !0, d("update:modelValue", !1));
		}
		function j(e) {
			!D() || e.defaultPrevented || (e.key === "Escape" ? (e.preventDefault(), A()) : Qe(e, p.value));
		}
		function N(e) {
			D() && !p.value?.contains(e.target) && Ze(p.value);
		}
		function P() {
			if (!S) return;
			let e = Xe(y);
			Ye(y), S(), S = null, document.removeEventListener("keydown", j), document.removeEventListener("focusin", N), e && !C?.closest?.("[inert]") && $e(C), C = null;
		}
		function F() {
			h.value || (P(), d("closed"));
		}
		function I() {
			h.value && d("opened");
		}
		let L = Dr({
			enabled: () => u.swipeToClose && D(),
			width: () => p.value?.getBoundingClientRect().width || 288,
			close: A
		});
		return R(() => u.modelValue, (e) => {
			e && (m.value = !1);
		}, { flush: "sync" }), R(h, async (e) => {
			if (L.cancel(), !e) {
				k();
				return;
			}
			if (!S && typeof document < "u" && (C = document.activeElement, Je(y), S = et(), document.addEventListener("keydown", j), document.addEventListener("focusin", N)), await _(), T || !h.value) return;
			let t = p.value?.parentElement;
			t && (t.inert = !1, t.removeAttribute("inert"), t.removeAttribute("aria-hidden"), t.style.pointerEvents = ""), !T && D() && !p.value?.contains(document.activeElement) && Ze(p.value);
		}, {
			immediate: !0,
			flush: "post"
		}), x(() => {
			T = !0, L.cancel(), P();
		}), r({ requestClose: A }), (r, i) => (w(), a(t, { to: "body" }, [f(n, {
			name: "share-drawer",
			appear: "",
			duration: M(v) ? 0 : 220,
			onBeforeLeave: k,
			onAfterEnter: I,
			onAfterLeave: F
		}, {
			default: z(() => [h.value ? (w(), s("div", {
				key: 0,
				class: "share-drawer",
				style: b({ zIndex: e.zIndex })
			}, [c("div", {
				class: "share-drawer__scrim",
				"aria-hidden": "true",
				onClick: A
			}), c("section", g(r.$attrs, {
				ref_key: "panel",
				ref: p,
				class: "share-drawer__panel",
				style: { width: typeof e.width == "number" ? `${e.width}px` : e.width },
				role: "dialog",
				"aria-modal": "true",
				"aria-label": e.ariaLabel,
				tabindex: "-1",
				onTouchstart: i[0] ||= (...e) => M(L).start && M(L).start(...e),
				onTouchmove: i[1] ||= (...e) => M(L).move && M(L).move(...e),
				onTouchend: i[2] ||= (...e) => M(L).end && M(L).end(...e),
				onTouchcancel: i[3] ||= (...e) => M(L).cancel && M(L).cancel(...e)
			}), [
				r.$slots.header || r.$slots.title ? (w(), s("header", kr, [O(r.$slots, "header", { close: A }, () => [O(r.$slots, "title", { close: A }, void 0, !0)], !0)])) : o("", !0),
				e.showClose ? (w(), s("button", {
					key: 1,
					class: "share-drawer__close",
					type: "button",
					"aria-label": e.closeLabel,
					onClick: A
				}, [...i[4] ||= [c("svg", {
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
				})], -1)]], 8, Ar)) : o("", !0),
				c("div", jr, [O(r.$slots, "default", { close: A }, void 0, !0)]),
				r.$slots.footer ? (w(), s("footer", Mr, [O(r.$slots, "footer", { close: A }, void 0, !0)])) : o("", !0)
			], 16, Or)], 4)) : o("", !0)]),
			_: 3
		}, 8, ["duration"])]));
	}
}), [["__scopeId", "data-v-0bfd3f1b"]]);
//#endregion
//#region src/composables/useFullscreenViewportHeight.js
function Pr(e = .94) {
	let t = E(`${Math.round(e * 100)}dvh`);
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
//#region src/components/overlay/AppModal.vue
var Fr = ["aria-label"], Ir = {
	key: 0,
	class: "am-handle"
}, Lr = ["aria-label"], Rr = () => window.innerWidth <= 640, zr = 260, $ = 280, Br = "cubic-bezier(0.32, 0.72, 0, 1)", Vr = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function Hr(e) {
	e.focus({ preventScroll: !0 });
}
var Ur = /*#__PURE__*/ U({
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
		let l = e, u = r, d = E(null), f = E(null), p = Pr(), m = i(() => typeof l.width == "number" ? `${l.width}px` : l.width || "480px"), h = E(!1), g = E(0), y = E(0), C = E(0), T = !1, D = null, k = !1, A = () => {}, j = Symbol("app-modal"), N = typeof document < "u" ? document.activeElement : null;
		function P(e) {
			if (!Xe(j)) return;
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
			let t = [...f.value?.querySelectorAll(Vr) || []].filter((e) => e.getClientRects().length > 0);
			if (!t.length) {
				e.preventDefault(), f.value?.focus();
				return;
			}
			let n = t[0], r = t.at(-1);
			e.shiftKey && (document.activeElement === n || !f.value?.contains(document.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (document.activeElement === r || !f.value?.contains(document.activeElement)) && (e.preventDefault(), n.focus());
		}
		function F() {
			let e = d.value, t = f.value;
			!e || !t || (e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", Rr() ? t.style.transform = "translateY(100%)" : (t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					let n = "cubic-bezier(0, 0, 0.4, 1)", r = `opacity ${zr}ms ${n}, backdrop-filter ${zr}ms ${n}, -webkit-backdrop-filter ${zr}ms ${n}`;
					e.style.transition = r, e.style.opacity = "1", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", Rr() ? (t.style.transition = `transform ${zr}ms ${Br}`, t.style.transform = "translateY(0)") : (t.style.transition = `transform ${zr}ms ${Br}, opacity ${zr}ms ${n}`, t.style.transform = "none", t.style.opacity = "1"), setTimeout(() => {
						T || (e.style.transition = "", e.style.backdropFilter = "blur(6px)", e.style.webkitBackdropFilter = "blur(6px)", t.style.transition = "", t.style.transform = "", t.style.opacity = "", u("opened"));
					}, 310);
				});
			}));
		}
		function I() {
			let e = d.value, t = f.value;
			if (!e || !t) {
				D = setTimeout(() => {
					T || u("close");
				}, 0);
				return;
			}
			let n = `opacity ${$}ms ease, backdrop-filter ${$}ms ease, -webkit-backdrop-filter ${$}ms ease`;
			e.style.transition = n, e.style.opacity = "0", e.style.backdropFilter = "blur(0px)", e.style.webkitBackdropFilter = "blur(0px)", Rr() ? (t.style.transition = `transform ${$}ms ${Br}`, t.style.transform = "translateY(100%)") : (t.style.transition = `transform ${$}ms ease, opacity ${$}ms ease`, t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), D = setTimeout(() => {
				T || u("close");
			}, 300);
		}
		function L() {
			!l.dismissible || k || (k = !0, I());
		}
		n({ requestClose: L });
		function R(e) {
			if (!l.dismissible) return;
			y.value = e.touches[0].clientY;
			let t = e.target instanceof Element ? e.target : null;
			for (; t && t !== f.value;) {
				let e = window.getComputedStyle(t);
				if (/(auto|scroll)/.test(e.overflowY) && t.scrollHeight > t.clientHeight) break;
				t = t.parentElement;
			}
			C.value = t?.scrollTop || f.value?.scrollTop || 0, h.value = !1, g.value = 0;
		}
		function z(e) {
			if (!l.dismissible) return;
			let t = e.touches[0].clientY - y.value;
			if (!h.value) {
				if (t > 8 && C.value <= 0) h.value = !0;
				else return;
			}
			e.preventDefault(), g.value = Math.max(0, t);
			let n = f.value, r = d.value;
			n && (n.style.transition = "none", n.style.transform = `translateY(${g.value}px)`), r && (r.style.transition = "none", r.style.opacity = String(Math.max(0, 1 - g.value / 320)));
		}
		function B() {
			if (!h.value) return;
			h.value = !1;
			let e = f.value, t = d.value;
			g.value > 100 ? (e && (e.style.transition = `transform ${$}ms ${Br}`, e.style.transform = "translateY(100%)"), t && (t.style.transition = `opacity ${$}ms ease`, t.style.opacity = "0"), D = setTimeout(() => {
				T || u("close");
			}, 300)) : (e && (e.style.transition = `transform ${$}ms ${Br}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), g.value = 0, setTimeout(() => {
				T || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330));
		}
		function V() {
			if (!h.value) return;
			h.value = !1, g.value = 0;
			let e = f.value, t = d.value;
			e && (e.style.transition = `transform ${$}ms ${Br}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), setTimeout(() => {
				T || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330);
		}
		return S(() => {
			Je(j), A = et(), document.addEventListener("keydown", P), _(() => {
				F(), f.value?.contains(document.activeElement) || (f.value?.querySelector(Vr)?.focus(), f.value?.contains(document.activeElement) || f.value?.focus());
			});
		}), x(() => {
			Ye(j), A(), document.removeEventListener("keydown", P), clearTimeout(D), T = !0, N instanceof HTMLElement && N.isConnected && Hr(N);
		}), (n, r) => (w(), a(t, { to: "body" }, [c("div", {
			ref_key: "overlay",
			ref: d,
			class: "am-overlay",
			style: b([e.zIndex === 3e3 ? {} : { zIndex: e.zIndex }, {
				"--am-fullscreen-height": M(p),
				"--am-width": m.value
			}]),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			onMousedown: H(L, ["self"])
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
			onTouchstartPassive: R,
			onTouchmove: z,
			onTouchendPassive: B,
			onTouchcancelPassive: V
		}, [
			e.showHandle ? (w(), s("div", Ir)) : o("", !0),
			e.showClose && !e.fullscreen ? (w(), s("button", {
				key: 1,
				class: "am-close",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: L
			}, "✕", 8, Lr)) : o("", !0),
			O(n.$slots, "default", {}, void 0, !0)
		], 34)], 44, Fr)]));
	}
}, [["__scopeId", "data-v-ddded319"]]), Wr = { class: "aem-shell" }, Gr = { class: "aem-heading" }, Kr = { class: "aem-title" }, qr = {
	key: 0,
	class: "aem-subtitle"
}, Jr = {
	key: 0,
	class: "aem-header-actions"
}, Yr = ["aria-label"], Xr = {
	key: 0,
	class: "aem-footer"
}, Zr = /*#__PURE__*/ U({
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
		let t = E(null);
		function n() {
			t.value?.requestClose();
		}
		return (r, i) => (w(), a(Ur, {
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
			default: z(() => [c("section", Wr, [
				c("header", { class: v(["aem-header", { "aem-header-with-actions": !!r.$slots["header-actions"] }]) }, [
					i[3] ||= c("span", {
						class: "aem-handle",
						"aria-hidden": "true"
					}, null, -1),
					c("div", Gr, [O(r.$slots, "title", {}, () => [c("h2", Kr, j(e.title), 1), e.subtitle ? (w(), s("span", qr, j(e.subtitle), 1)) : o("", !0)], !0)]),
					r.$slots["header-actions"] ? (w(), s("div", Jr, [O(r.$slots, "header-actions", {}, void 0, !0)])) : o("", !0),
					e.showClose ? (w(), s("button", {
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
					})], -1)]], 8, Yr)) : o("", !0)
				], 2),
				c("div", { class: v(["aem-body", {
					"aem-body-flush": !e.padded,
					"aem-body-no-scroll": !e.bodyScroll
				}]) }, [O(r.$slots, "default", {}, void 0, !0)], 2),
				r.$slots.footer ? (w(), s("footer", Xr, [O(r.$slots, "footer", {}, void 0, !0)])) : o("", !0)
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
}, [["__scopeId", "data-v-0a15c618"]]), Qr = ["aria-label"], $r = {
	key: 0,
	class: "share-loading__label",
	"aria-hidden": "true"
}, ei = /*#__PURE__*/ U({
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
		return (t, r) => (w(), s("span", {
			class: v(["share-loading", { "share-loading--inline": e.inline }]),
			style: b({ "--loading-size": n.value }),
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
		})], -1), e.showLabel ? (w(), s("span", $r, j(e.label), 1)) : o("", !0)], 14, Qr));
	}
}, [["__scopeId", "data-v-d616d1a7"]]), ti = {
	key: 0,
	class: "cd-message"
}, ni = { class: "cd-actions" }, ri = ["disabled"], ii = ["aria-busy", "disabled"], ai = /*#__PURE__*/ U({
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
		let n = e, r = t, l = i(() => n.open === null || n.open), u = i(() => n.confirmText || n.confirmLabel), f = i(() => n.cancelText || n.cancelLabel), p = i(() => n.confirmKind || n.variant);
		function m() {
			n.open !== null && r("update:open", !1);
		}
		function h() {
			n.loading || (r("cancel"), m());
		}
		function g() {
			n.loading || (r("confirm"), m());
		}
		return (t, n) => l.value ? (w(), a(Zr, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: h
		}, {
			footer: z(() => [c("div", ni, [c("button", {
				type: "button",
				class: "cd-btn-cancel",
				disabled: e.loading,
				onClick: h
			}, j(f.value), 9, ri), c("button", {
				type: "button",
				class: v(["cd-btn-confirm", `cd-btn--${p.value}`]),
				"aria-busy": e.loading,
				disabled: e.loading,
				onClick: g
			}, [e.loading ? (w(), a(ei, {
				key: 0,
				label: e.loadingLabel,
				size: "xs",
				class: "button-loading",
				"aria-hidden": "true"
			}, null, 8, ["label"])) : o("", !0), d(" " + j(e.loading ? e.loadingLabel : u.value), 1)], 10, ii)])]),
			default: z(() => [e.message ? (w(), s("div", ti, j(e.message), 1)) : o("", !0)]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : o("", !0);
	}
}, [["__scopeId", "data-v-db9d39ae"]]), oi = {
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
		return (t, n) => e.open ? (w(), a(Ur, {
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
			default: z(() => [O(t.$slots, "default")]),
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
function si({ open: e = 420, close: t = 300 } = {}) {
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
	], a = E(!1), o = E(!1), s = null;
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
var ci = ["aria-label"], li = { class: "ms-head-content" }, ui = ["aria-label"], di = 320, fi = 260, pi = "8px", mi = /*#__PURE__*/ U({
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
		let l = e, u = r, d = jt(), f = F(), p = i(() => l.mode === "add"), m = i(() => l.showClose === null ? !!f.head : l.showClose), h = i(() => l.nav ? l.nav.view.value : "detail"), g = i(() => l.nav ? l.nav.detailStyle.value : null), y = i(() => l.nav ? l.nav.subStyle.value : null), C = i(() => !!l.nav && h.value !== "detail"), T = E(null), D = E(null), k = E(null), A = E(null), j = E(null), N = E(null), P = E(!1), I = E(!1), L = E(!1), z = E(!1), B = E(!1), { EASE: V, visible: U, morphing: W, playClose: ee, playOpen: te } = si(), G = () => d.value ? "0px" : "18px", ne = i(() => ({
			"--ms-w": `${l.width}px`,
			"--ms-body-w": `${l.width}px`,
			"--ms-frame": l.frameColor || void 0
		}));
		function re() {
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
				L.value = !1, U.value = !1, setTimeout(() => u("close"), 320);
				return;
			}
			ee(T.value, re(), {
				fromRadius: G(),
				toRadius: l.originRadius
			}, () => u("close"));
		}
		function ae() {
			I.value = !0, B.value = !1, U.value = !1, De(!1), setTimeout(() => u("close"), 220);
		}
		let oe = Symbol("morph-sheet"), se = typeof document < "u" ? document.activeElement : null;
		function ce(e) {
			if (Xe(oe)) {
				if (e.key === "Escape") {
					ie();
					return;
				}
				Qe(e, T.value);
			}
		}
		function le(e) {
			let t = e?.firstElementChild;
			return t ? t.scrollHeight : e?.scrollHeight || 0;
		}
		function ue() {
			return Math.floor(window.innerHeight * .9) - (D.value?.offsetHeight || 0) - (k.value?.offsetHeight || 0);
		}
		function K(e) {
			if (d.value || !A.value || W.value) return;
			let t = l.nav ? l.nav.pos.value : 0, n = le(j.value), r = N.value ? le(N.value) : n, i = n * (1 - t) + r * t, a = Math.min(i, Math.max(120, ue()));
			A.value.style.transition = e ? `height ${di}ms ${V}` : "none", A.value.style.height = `${a}px`;
		}
		let q = null;
		function de() {
			q && (q.disconnect(), [j.value?.firstElementChild, N.value?.firstElementChild].forEach((e) => {
				e && q.observe(e);
			}));
		}
		function fe() {
			W.value || l.nav && l.nav.animating.value || me || K(!1);
		}
		l.nav && (R(() => l.nav.pos.value, () => K(l.nav.animating.value)), R(() => l.nav.view.value, (e, t) => _(() => {
			de(), e !== "detail" && t === "detail" && N.value && (N.value.offsetWidth, l.nav.enterSub()), l.nav.animating.value || K(!1);
		})));
		let pe = E(0), me = !1, he = 0, ge = 0, J = null, Y = 0, _e = null, ve = 0, ye = 0, be = 0;
		function X(e) {
			!d.value || W.value || (he = e.touches[0].clientX, ge = e.touches[0].clientY, _e = e.target, J = null);
		}
		function xe() {
			let e = _e;
			for (; e && e !== T.value;) {
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
			let r = T.value;
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
			let e = T.value;
			if (pe.value > 120) {
				we();
				return;
			}
			pe.value = 0, e && (e.style.transition = `transform .26s ${V}`, e.style.transform = "translateY(0)");
		}
		function we() {
			let e = T.value;
			e && (e.style.transition = `transform ${fi}ms ${V}`, e.style.transform = `translateY(${window.innerHeight}px)`), U.value = !1, B.value = !1, Me(), De(!1), setTimeout(() => u("close"), fi);
		}
		let Te = () => {};
		function Ee() {
			return typeof l.backgroundTarget == "string" ? document.querySelector(l.backgroundTarget) : l.backgroundTarget instanceof Element ? l.backgroundTarget : null;
		}
		function De(e) {
			Te(), Te = () => {}, !(!e || d.value || !l.blurBackground) && (Te = nt(Ee(), { blur: pi }));
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
			e.style.transition = `${t}opacity ${fi}ms ease`, e.style.opacity = "0", requestAnimationFrame(() => {
				e.style.opacity = Oe;
			}), setTimeout(() => {
				e.style.opacity = Oe, e.style.transition = Z, ke = !1;
			}, 280);
		}
		let Ne = () => {};
		function Pe() {
			W.value || (d.value && A.value ? A.value.style.height = "" : K(!1));
		}
		return S(async () => {
			Je(oe), Ne = et(), typeof ResizeObserver < "u" && (q = new ResizeObserver(fe)), await _(), K(!1), de(), P.value = !0, p.value ? (U.value = !0, requestAnimationFrame(() => {
				L.value = !0, z.value = !0;
			})) : (Ae(), je(!0), te(T.value, l.originRect, {
				fromRadius: l.originRadius,
				toRadius: G()
			}), requestAnimationFrame(() => {
				z.value = !0;
			})), De(!0), setTimeout(() => {
				B.value = !0, K(!1), Ze(T.value);
			}, 20), document.addEventListener("keydown", ce), window.addEventListener("resize", Pe);
		}), x(() => {
			Ye(oe), Ne(), De(!1), !p.value && !ke && je(!1), document.removeEventListener("keydown", ce), window.removeEventListener("resize", Pe), q?.disconnect(), $e(se);
		}), n({
			close: ie,
			finishNow: ae
		}), (n, r) => (w(), a(t, { to: "body" }, [c("div", {
			class: v(["ms-overlay", { visible: M(U) }]),
			style: b(e.zIndex === 1e3 ? null : { zIndex: e.zIndex }),
			onClick: H(ie, ["self"])
		}, [c("div", {
			ref_key: "panelEl",
			ref: T,
			class: v(["ms-sheet", {
				shown: P.value,
				closing: I.value,
				entered: L.value,
				padded: z.value,
				"add-sheet": p.value,
				"ms-framed": e.frameColor
			}]),
			style: b(ne.value),
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
			n.$slots.head ? (w(), s("div", {
				key: 0,
				ref_key: "headEl",
				ref: D,
				class: "ms-head"
			}, [c("div", li, [O(n.$slots, "head", {}, void 0, !0)]), m.value ? (w(), s("button", {
				key: 0,
				class: "ms-x",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: ie
			}, "✕", 8, ui)) : o("", !0)], 512)) : o("", !0),
			c("div", {
				ref_key: "bodyEl",
				ref: A,
				class: "ms-body"
			}, [c("div", {
				ref_key: "detailCellEl",
				ref: j,
				class: "ms-cell",
				style: b(g.value)
			}, [O(n.$slots, "detail", { revealed: B.value }, () => [O(n.$slots, "default", { revealed: B.value }, void 0, !0)], !0)], 4), C.value ? (w(), s("div", {
				key: 0,
				ref_key: "subCellEl",
				ref: N,
				class: "ms-cell",
				style: b(y.value)
			}, [O(n.$slots, "sub", {}, void 0, !0)], 4)) : o("", !0)], 512),
			e.showFoot && n.$slots.foot ? (w(), s("div", {
				key: 1,
				ref_key: "footEl",
				ref: k,
				class: "ms-foot"
			}, [O(n.$slots, "foot", {}, void 0, !0)], 512)) : o("", !0)
		], 46, ci)], 6)]));
	}
}, [["__scopeId", "data-v-bab5d7c5"]]), hi = { class: "form-actions" }, gi = ["disabled"], _i = ["aria-busy", "disabled"], vi = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("div", hi, [c("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, j(e.cancelText), 9, gi), c("button", {
			type: "button",
			class: "form-actions__submit",
			"aria-busy": e.loading,
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, [e.loading ? (w(), a(ei, {
			key: 0,
			label: e.loadingText,
			size: "xs",
			class: "button-loading",
			"aria-hidden": "true"
		}, null, 8, ["label"])) : o("", !0), d(" " + j(e.loading ? e.loadingText : e.submitText), 1)], 8, _i)]));
	}
}, [["__scopeId", "data-v-aa869fab"]]), yi = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], bi = /*#__PURE__*/ U({
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
		let n = e, r = E(null);
		return S(() => {
			n.autofocus && r.value?.focus();
		}), t({ focus: () => r.value?.focus() }), (t, n) => (w(), s("input", {
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
			onKeydown: n[2] ||= V((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, yi));
	}
}, [["__scopeId", "data-v-e2d6bc8e"]]), xi = {
	key: 0,
	class: "tpd-message"
}, Si = {
	key: 1,
	class: "tpd-label"
}, Ci = /*#__PURE__*/ U({
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
		let n = e, r = t, c = i(() => n.open === null || n.open), l = i(() => n.confirmText || n.confirmLabel), u = i(() => n.cancelText || n.cancelLabel), d = E(n.value || n.initial);
		R(() => n.value, (e) => {
			d.value = e;
		}), R(() => n.open, (e) => {
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
		return (t, n) => c.value ? (w(), a(Zr, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: z(() => [f(vi, {
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
			default: z(() => [
				e.message ? (w(), s("div", xi, j(e.message), 1)) : o("", !0),
				e.label ? (w(), s("label", Si, j(e.label), 1)) : o("", !0),
				f(bi, {
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
}, [["__scopeId", "data-v-ff9d61bb"]]), wi = { class: "form-field-label" }, Ti = {
	key: 0,
	class: "form-field-hint"
}, Ei = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("div", { class: v(["form-field", { "form-field--vertical": e.vertical }]) }, [c("span", wi, [d(j(e.label), 1), e.hint ? (w(), s("span", Ti, j(e.hint), 1)) : o("", !0)]), O(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-01093950"]]), Di = { class: "fn-wrap" }, Oi = [
	"value",
	"min",
	"max",
	"step"
], ki = /*#__PURE__*/ U({
	__name: "FormNumberInput",
	props: {
		value: { default: 0 },
		step: {
			type: Number,
			default: 1,
			validator: (e) => Number.isFinite(e) && e > 0
		},
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
			return (Number.isInteger(n.step) ? parseInt(e) : parseFloat(e)) || 0;
		}
		function o(e) {
			r("change", i(a(e.target.value)));
		}
		function l(e) {
			let t = Number((a(n.value) + e * n.step).toPrecision(15));
			r("change", i(t));
		}
		return (t, n) => (w(), s("div", Di, [
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[0] ||= H((e) => l(-1), ["stop"])
			}, "−"),
			c("input", {
				class: "fn-input",
				type: "number",
				value: e.value,
				min: e.min,
				max: e.max,
				step: e.step,
				onChange: o
			}, null, 40, Oi),
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[1] ||= H((e) => l(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-0b32d927"]]), Ai = ["value"], ji = /*#__PURE__*/ U({
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
		let r = e, i = n, a = E(null);
		function o(e) {
			let t = e.target.options[e.target.selectedIndex], n = t && "_value" in t ? t._value : e.target.value;
			i("update:value", n), i("change", n);
		}
		return S(() => {
			r.autofocus && a.value?.focus();
		}), t({ focus: () => a.value?.focus() }), (t, n) => (w(), s("select", {
			ref_key: "selectRef",
			ref: a,
			class: "form-select",
			value: e.value,
			onChange: o
		}, [O(t.$slots, "default", {}, void 0, !0)], 40, Ai));
	}
}, [["__scopeId", "data-v-3eb4c36d"]]), Mi = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], Ni = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("textarea", {
			class: "form-textarea",
			value: e.value,
			placeholder: e.placeholder,
			rows: e.rows,
			maxlength: e.maxlength,
			onInput: n[0] ||= (e) => t.$emit("update:value", e.target.value)
		}, null, 40, Mi));
	}
}, [["__scopeId", "data-v-31024142"]]), Pi = {
	class: "share-inline-edit__measure",
	"aria-hidden": "true"
}, Fi = {
	key: 0,
	class: "share-inline-edit__view"
}, Ii = { class: "share-inline-edit__value" }, Li = ["aria-label", "disabled"], Ri = ["onKeydown"], zi = [
	"value",
	"aria-label",
	"disabled",
	"aria-invalid"
], Bi = ["value", "disabled"], Vi = [
	"value",
	"aria-label",
	"placeholder",
	"maxlength",
	"required",
	"disabled",
	"aria-invalid"
], Hi = {
	key: 2,
	class: "share-inline-edit__actions"
}, Ui = ["aria-label", "disabled"], Wi = ["aria-label", "disabled"], Gi = {
	key: 2,
	class: "share-inline-edit__error",
	role: "alert"
}, Ki = /*#__PURE__*/ U({
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
		let r = t, a = n, l = E(!1), u = E(!1), f = E(""), p = E(r.modelValue), m = E(null), h = E(null), g = i(() => r.forceOpen || l.value), y = (e) => r.options?.find((t) => String(t.value) === String(e))?.label, b = i(() => r.displayValue ?? y(r.modelValue) ?? (r.modelValue === "" || r.modelValue == null ? r.placeholder : r.modelValue)), x = i(() => {
			let e = g.value ? y(p.value) ?? p.value : b.value;
			return e === "" || e == null ? r.placeholder || "\xA0" : String(e);
		});
		R(() => r.modelValue, (e) => {
			l.value || (p.value = e);
		}), R(() => r.forceOpen, () => {
			l.value = !1, p.value = r.modelValue, f.value = "";
		});
		async function S() {
			r.disabled || (p.value = r.modelValue, f.value = "", l.value = !0, await _(), m.value?.focus(), m.value?.select?.());
		}
		function C(e) {
			p.value = r.options ? r.options.find((t) => String(t.value) === e)?.value ?? e : e, r.forceOpen && a("update:modelValue", p.value);
		}
		function T() {
			u.value || r.forceOpen || (l.value = !1, p.value = r.modelValue, f.value = "", a("cancel"), _(() => h.value?.focus()));
		}
		function k(e) {
			e.isComposing || r.forceOpen || (e.preventDefault(), A());
		}
		async function A() {
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
		return (n, r) => (w(), s("span", { class: v(["share-inline-edit", { "share-inline-edit--open": g.value }]) }, [
			c("span", Pi, j(x.value), 1),
			g.value ? (w(), s("span", {
				key: 1,
				class: "share-inline-edit__editor",
				onKeydown: [V(H(T, ["stop", "prevent"]), ["esc"]), V(k, ["enter"])]
			}, [t.options ? (w(), s("select", {
				key: 0,
				ref_key: "input",
				ref: m,
				value: p.value,
				"aria-label": t.label,
				disabled: t.disabled || u.value,
				"aria-invalid": !!f.value,
				onChange: r[0] ||= (e) => C(e.target.value)
			}, [(w(!0), s(e, null, D(t.options, (e) => (w(), s("option", {
				key: String(e.value),
				value: e.value,
				disabled: e.disabled
			}, j(e.label), 9, Bi))), 128))], 40, zi)) : (w(), s("input", {
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
				onInput: r[1] ||= (e) => C(e.target.value)
			}, null, 40, Vi)), t.forceOpen ? o("", !0) : (w(), s("span", Hi, [c("button", {
				type: "button",
				"aria-label": t.confirmLabel,
				disabled: t.disabled || u.value || t.required && !String(p.value ?? "").trim(),
				onClick: A
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
			})], -1)]], 8, Ui), c("button", {
				type: "button",
				"aria-label": t.cancelLabel,
				disabled: u.value,
				onClick: T
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
			})], -1)]], 8, Wi)]))], 40, Ri)) : (w(), s("span", Fi, [c("span", Ii, [O(n.$slots, "default", { value: t.modelValue }, () => [d(j(b.value), 1)], !0)]), t.editable ? (w(), s("button", {
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
			})], -1)]], 8, Li)) : o("", !0)])),
			f.value ? (w(), s("span", Gi, j(f.value), 1)) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-55cecd7d"]]), qi = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("span", {
			class: v(["share-skeleton", { "share-skeleton--round": e.round }]),
			style: b({
				width: e.width,
				height: e.height
			}),
			"aria-hidden": "true"
		}, null, 6));
	}
}, [["__scopeId", "data-v-ab086de7"]]), Ji = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("div", {
			class: v(["share-loading-state", {
				"share-loading-state--compact": e.compact,
				"share-loading-state--fill": e.fill
			}]),
			"aria-busy": "true"
		}, [f(ei, {
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
}, [["__scopeId", "data-v-d9e04af1"]]), Yi = [
	"type",
	"disabled",
	"aria-busy"
], Xi = /*#__PURE__*/ U({
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
		layout: {
			type: String,
			default: "inline",
			validator: (e) => ["inline", "stacked"].includes(e)
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
		return (t, n) => (w(), s("button", {
			class: v(["share-action-button", [`share-action-button--${e.variant}`, {
				"share-action-button--icon-only": e.iconOnly,
				"share-action-button--stacked": e.layout === "stacked" && !e.iconOnly
			}]]),
			type: e.type,
			disabled: e.disabled || e.loading,
			"aria-busy": e.loading || void 0
		}, [e.loading ? (w(), a(ei, {
			key: 0,
			label: e.loadingLabel,
			size: "xs",
			"aria-hidden": "true"
		}, null, 8, ["label"])) : O(t.$slots, "icon", {}, void 0, !0, 1), c("span", null, [O(t.$slots, "default", {}, void 0, !0)])], 10, Yi));
	}
}, [["__scopeId", "data-v-00512a64"]]), Zi = {
	class: "share-icon-toggle__icon",
	"aria-hidden": "true"
}, Qi = /*#__PURE__*/ U({
	__name: "IconToggleButton",
	props: {
		modelValue: Boolean,
		label: {
			type: String,
			required: !0
		},
		color: {
			type: String,
			default: null
		},
		disabled: Boolean
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i() {
			n.disabled || r("update:modelValue", !n.modelValue);
		}
		return (t, n) => (w(), a(Xi, {
			class: v(["share-icon-toggle", { "share-icon-toggle--on": e.modelValue }]),
			style: b({ "--icon-toggle-color": e.color || "var(--accent)" }),
			variant: "secondary",
			"icon-only": "",
			disabled: e.disabled,
			"aria-label": e.label,
			title: e.label,
			"aria-pressed": e.modelValue,
			onClick: i
		}, {
			icon: z(() => [c("span", Zi, [O(t.$slots, "icon", {}, void 0, !0)]), n[0] ||= c("svg", {
				class: "share-icon-toggle__slash",
				viewBox: "0 0 24 24",
				fill: "none",
				"aria-hidden": "true"
			}, [c("path", {
				d: "M2 2 22 22",
				pathLength: "1"
			})], -1)]),
			_: 3
		}, 8, [
			"class",
			"style",
			"disabled",
			"aria-label",
			"title",
			"aria-pressed"
		]));
	}
}, [["__scopeId", "data-v-a44e202c"]]), $i = (e) => `${Math.round(e)}px`, ea = (e, t, n, r) => ({
	left: $i(e),
	top: $i(t),
	width: $i(Math.max(0, n)),
	height: $i(Math.max(0, r))
}), ta = (e, t, n) => Math.max(t, Math.min(e, n));
function na(e, t, n, r = !1) {
	let { width: i, height: a, left: o = 0, top: s = 0 } = t, c = o + i, l = s + a, u = Math.min(n.width, i - 24), d = Math.min(n.height, a - 24), f = null;
	if (e && e.width > 0 && e.height > 0) {
		let t = ta(e.left - 5, o, c), n = ta(e.top - 5, s, l), r = ta(e.right + 5, o, c), i = ta(e.bottom + 5, s, l);
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
		ea(o, s, i, f.top - s),
		ea(o, f.bottom, i, l - f.bottom),
		ea(o, f.top, f.left - o, f.height),
		ea(f.right, f.top, c - f.right, f.height)
	] : [ea(o, s, i, a)], m = o + (i - u) / 2, h = s + (a - d) / 2;
	return f && (m = ta(f.left, o + 12, c - u - 12), h = f.bottom + 14 + d <= l - 12 ? f.bottom + 14 : f.top - d - 14, h < s + 12 && f.right + u + 14 <= c - 12 && (m = f.right + 14, h = f.top), h = ta(h, s + 12, l - d - 12)), r && (m = o + (i - u) / 2, h = f && f.top > s + a / 2 ? s + 12 : l - d - 12), {
		rect: f,
		masks: p,
		spotlight: f ? ea(f.left, f.top, f.width, f.height) : {},
		card: {
			left: $i(m),
			top: $i(h),
			maxHeight: $i(a - 24)
		}
	};
}
//#endregion
//#region src/components/tutorial/GuidedTour.vue
var ra = ["aria-label"], ia = {
	"aria-live": "polite",
	"aria-atomic": "true"
}, aa = {
	key: 0,
	role: "alert"
}, oa = /*#__PURE__*/ U({
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
		let r = n, l = E(null), u = E(na(null, {
			width: 1,
			height: 1
		}, {
			width: 1,
			height: 1
		})), p = i(() => u.value.rect), m = i(() => u.value.spotlight), h = i(() => u.value.masks), g = i(() => u.value.card), v = Symbol("guided-tour"), y = null, S = null, C = !1;
		function T() {
			if (!r.tour.active) return;
			let e = window.visualViewport;
			u.value = na(r.tour.target?.getBoundingClientRect(), {
				width: e?.width || window.innerWidth,
				height: e?.height || window.innerHeight,
				left: e?.offsetLeft || 0,
				top: e?.offsetTop || 0
			}, {
				width: l.value?.offsetWidth || 360,
				height: l.value?.offsetHeight || 220
			}, r.mobile), y = requestAnimationFrame(T);
		}
		function O(e) {
			e.stopImmediatePropagation(), e.key === "Escape" ? (e.preventDefault(), r.tour.error ? r.tour.stop() : r.tour.dismiss()) : Qe(e, l.value);
		}
		function k(e) {
			l.value?.contains(e.target) || Ze(l.value);
		}
		function A() {
			cancelAnimationFrame(y), Ye(v), C && (C = !1, window.removeEventListener("keydown", O, !0), document.removeEventListener("focusin", k, !0), $e(S));
		}
		return R(() => r.tour.active, async (e) => {
			if (!e) {
				A();
				return;
			}
			S = document.activeElement, C = !0, Je(v), window.addEventListener("keydown", O, !0), document.addEventListener("focusin", k, !0), await _(), r.tour.active && (Ze(l.value), T());
		}, { immediate: !0 }), R(() => r.tour.index, async () => {
			await _(), r.tour.active && Ze(l.value);
		}), x(A), (r, i) => (w(), a(t, { to: "body" }, [n.tour.active ? (w(), s("div", {
			key: 0,
			class: "guided-tour",
			style: b({ zIndex: n.zIndex }),
			onMousedown: i[1] ||= H(() => {}, ["stop"]),
			onTouchstart: i[2] ||= H(() => {}, ["stop"])
		}, [
			(w(!0), s(e, null, D(h.value, (e, t) => (w(), s("div", {
				key: t,
				class: "guided-tour__mask",
				style: b(e)
			}, null, 4))), 128)),
			p.value ? (w(), s("div", {
				key: 0,
				class: "guided-tour__spotlight",
				style: b(m.value)
			}, null, 4)) : o("", !0),
			i[3] ||= c("div", { class: "guided-tour__shield" }, null, -1),
			c("section", {
				ref_key: "card",
				ref: l,
				class: "guided-tour__card",
				style: b(g.value),
				role: "dialog",
				"aria-modal": "true",
				"aria-label": n.tour.step?.title,
				tabindex: "-1"
			}, [
				c("div", ia, [
					c("small", null, j(n.labels.progress(n.tour.index + 1, n.tour.steps.length)), 1),
					c("h2", null, j(n.tour.step?.title), 1),
					c("p", null, j(n.tour.step?.body), 1)
				]),
				n.tour.error ? (w(), s("p", aa, j(n.labels.error), 1)) : o("", !0),
				c("footer", null, [
					f(Xi, {
						variant: "quiet",
						onClick: i[0] ||= (e) => n.tour.error ? n.tour.stop() : n.tour.dismiss()
					}, {
						default: z(() => [d(j(n.tour.error ? n.labels.close : n.labels.dismiss), 1)]),
						_: 1
					}),
					n.tour.index > 0 ? (w(), a(Xi, {
						key: 0,
						variant: "secondary",
						disabled: n.tour.busy,
						onClick: n.tour.previous
					}, {
						default: z(() => [d(j(n.labels.previous), 1)]),
						_: 1
					}, 8, ["disabled", "onClick"])) : o("", !0),
					n.tour.error ? (w(), a(Xi, {
						key: 1,
						disabled: n.tour.busy,
						onClick: n.tour.retry
					}, {
						default: z(() => [d(j(n.labels.retry), 1)]),
						_: 1
					}, 8, ["disabled", "onClick"])) : (w(), a(Xi, {
						key: 2,
						loading: n.tour.busy,
						"loading-label": n.labels.loading,
						onClick: n.tour.next
					}, {
						default: z(() => [d(j(n.tour.index === n.tour.steps.length - 1 ? n.labels.finish : n.labels.next), 1)]),
						_: 1
					}, 8, [
						"loading",
						"loading-label",
						"onClick"
					]))
				])
			], 12, ra)
		], 36)) : o("", !0)]));
	}
}, [["__scopeId", "data-v-85145755"]]);
//#endregion
//#region src/composables/useGuidedTour.js
function sa({ onFinish: e = async () => {} } = {}) {
	let t = E(!1), n = E(!1), r = A(null), a = E(0), o = A([]), s = A(null), c = i(() => o.value[a.value] || null), l = null, u = [], d = null, f = !1, p = 0;
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
			if (await c.value?.enter?.(f), await _(), i.signal.aborted) return;
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
	function g() {
		p += 1, f = !1, m(), t.value = !1, n.value = !1, r.value = null;
	}
	async function v(e) {
		g(), o.value = e, e.length && (t.value = !0, await h(0));
	}
	async function y(i) {
		if (f || !t.value) return;
		n.value && m(), f = !0, n.value = !0, r.value = null;
		let a = p;
		d = () => y(i);
		try {
			await e(i), p === a && g();
		} catch (e) {
			t.value && p === a && (r.value = e);
		} finally {
			p === a && (f = !1, n.value = !1);
		}
	}
	return C(g), {
		active: t,
		busy: n,
		error: r,
		index: a,
		steps: o,
		step: c,
		target: s,
		start: v,
		stop: g,
		next: () => a.value === o.value.length - 1 ? y("completed") : h(a.value + 1),
		previous: () => h(a.value - 1),
		dismiss: () => y("dismissed"),
		retry: () => d?.()
	};
}
//#endregion
//#region src/components/StatBar.vue
var ca = ["aria-label", "aria-valuenow"], la = {
	key: 1,
	class: "stat-bar-shine"
}, ua = /*#__PURE__*/ U({
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
		return (n, i) => (w(), s("div", {
			class: v(["stat-bar", [`stat-bar--${t.size}`, {
				"stat-bar--decorated": t.decorated,
				"stat-bar--full": r.value >= 100
			}]]),
			role: "meter",
			"aria-label": t.label || void 0,
			"aria-valuemin": "0",
			"aria-valuemax": "100",
			"aria-valuenow": r.value,
			style: b({ "--bar-color": t.color })
		}, [
			c("div", {
				class: "stat-bar-fill",
				style: b({ width: r.value + "%" })
			}, [t.decorated ? (w(), s(e, { key: 0 }, [i[0] ||= c("span", { class: "stat-bar-bub stat-bar-bub1" }, null, -1), i[1] ||= c("span", { class: "stat-bar-bub stat-bar-bub2" }, null, -1)], 64)) : o("", !0)], 4),
			a.value > 0 ? (w(), s("div", {
				key: 0,
				class: "stat-bar-temp",
				style: b({
					left: r.value + "%",
					width: a.value + "%",
					"--temp-color": t.tempColor
				})
			}, null, 4)) : o("", !0),
			t.decorated ? (w(), s("span", la)) : o("", !0)
		], 14, ca));
	}
}, [["__scopeId", "data-v-218b9d6a"]]), da = ["aria-label"], fa = [
	"aria-label",
	"aria-pressed",
	"title",
	"disabled",
	"onClick"
], pa = /*#__PURE__*/ U({
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
		return (n, r) => (w(), s("div", {
			class: "share-icon-picker",
			role: "group",
			"aria-label": t.label
		}, [(w(!0), s(e, null, D(t.options, (e) => (w(), s("button", {
			key: e.value,
			type: "button",
			class: v(["share-icon-picker__option", { "share-icon-picker__option--selected": e.value === t.modelValue }]),
			"aria-label": e.label || String(e.value),
			"aria-pressed": e.value === t.modelValue,
			title: e.label || String(e.value),
			disabled: t.disabled || e.disabled,
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [O(n.$slots, "icon", { option: e }, () => [(w(), a(k(e.icon), {
			size: 18,
			"aria-hidden": "true"
		}))], !0)], 10, fa))), 128))], 8, da));
	}
}, [["__scopeId", "data-v-9859aa6b"]]), ma = {
	key: 0,
	class: "detail-section-icon",
	"aria-hidden": "true"
}, ha = { class: "detail-section-label" }, ga = {
	key: 1,
	class: "detail-section-rule",
	"aria-hidden": "true"
}, _a = {
	key: 2,
	class: "detail-section-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	width: "14",
	height: "14"
}, va = ["id"], ya = /*#__PURE__*/ U({
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
		let n = e, r = t, l = P(), u = E(n.defaultOpen), d = i({
			get: () => n.modelValue ?? u.value,
			set: (e) => {
				u.value = e, r("update:modelValue", e);
			}
		});
		return (t, n) => (w(), s("section", { class: v(["detail-section", {
			"detail-section--collapsible": e.collapsible,
			"detail-section--open": d.value,
			"detail-section--illustrated": t.$slots.icon,
			"detail-section--danger": e.tone === "danger"
		}]) }, [(w(), a(k(e.collapsible ? "button" : "div"), {
			class: v(["detail-section-head", { "detail-section-head--btn": e.collapsible }]),
			type: e.collapsible ? "button" : null,
			"aria-expanded": e.collapsible ? d.value : void 0,
			"aria-controls": e.collapsible ? M(l) : void 0,
			onClick: n[0] ||= (t) => e.collapsible && (d.value = !d.value)
		}, {
			default: z(() => [
				t.$slots.icon ? (w(), s("span", ma, [O(t.$slots, "icon", {}, void 0, !0)])) : o("", !0),
				c("span", ha, j(e.label), 1),
				t.$slots.icon ? (w(), s("span", ga)) : o("", !0),
				e.collapsible ? (w(), s("svg", _a, [...n[1] ||= [c("path", {
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
		])), B(c("div", {
			id: M(l),
			class: "detail-section-body"
		}, [O(t.$slots, "default", {}, void 0, !0)], 8, va), [[L, !e.collapsible || d.value]])], 2));
	}
}, [["__scopeId", "data-v-a99aa805"]]), ba = [
	"role",
	"tabindex",
	"aria-current"
], xa = { class: "oli-icon" }, Sa = {
	key: 0,
	class: "oli-metric"
}, Ca = { class: "oli-main" }, wa = { class: "oli-name" }, Ta = {
	key: 0,
	class: "oli-name-en"
}, Ea = ["title"], Da = {
	key: 0,
	class: "oli-sub"
}, Oa = { class: "oli-right" }, ka = {
	key: 0,
	class: "oli-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	width: "14",
	height: "14"
}, Aa = /*#__PURE__*/ U({
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
		return (t, n) => (w(), s("div", {
			class: v(["oli", {
				"oli--interactive": e.interactive,
				"oli--selected": e.selected
			}]),
			role: e.interactive ? "button" : void 0,
			tabindex: e.interactive ? 0 : void 0,
			"aria-current": e.selected ? "true" : void 0,
			onClick: n[0] ||= (n) => e.interactive && t.$emit("activate", n),
			onKeydown: i
		}, [
			c("div", xa, [O(t.$slots, "icon", {}, void 0, !0)]),
			t.$slots.metric ? (w(), s("div", Sa, [O(t.$slots, "metric", {}, void 0, !0)])) : o("", !0),
			c("div", Ca, [c("div", { class: v(["oli-name-row", { "oli-name-row--center": e.nameCenter }]) }, [
				c("span", wa, j(e.title), 1),
				e.alternateLabel ? (w(), s("span", Ta, j(e.alternateLabel), 1)) : o("", !0),
				e.marker ? (w(), s("span", {
					key: 1,
					class: "oli-custom",
					title: e.markerLabel
				}, j(e.marker), 9, Ea)) : o("", !0),
				O(t.$slots, "name-extras", {}, void 0, !0)
			], 2), t.$slots.subtitle || e.subtitle ? (w(), s("div", Da, [O(t.$slots, "subtitle", {}, () => [d(j(e.subtitle), 1)], !0)])) : o("", !0)]),
			c("div", Oa, [O(t.$slots, "trailing", {}, void 0, !0), e.showChevron ? (w(), s("svg", ka, [...n[1] ||= [c("path", {
				d: "M6 12L10 8L6 4",
				stroke: "currentColor",
				"stroke-width": "1.6",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)]])) : o("", !0)])
		], 42, ba));
	}
}, [["__scopeId", "data-v-3222832d"]]), ja = ["id", "aria-label"], Ma = [
	"id",
	"aria-selected",
	"aria-disabled",
	"onMouseenter",
	"onClick"
], Na = {
	key: 0,
	class: "share-option-list__empty"
}, Pa = /*#__PURE__*/ U({
	__name: "OptionList",
	props: {
		id: {
			type: String,
			default: () => P()
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
		return (n, r) => (w(), s("div", {
			id: t.id,
			class: "share-option-list",
			role: "listbox",
			"aria-label": t.label
		}, [
			(w(!0), s(e, null, D(t.options, (e, i) => (w(), s("div", {
				id: `${t.id}-${i}`,
				key: e.value,
				class: v(["share-option-list__option", { "share-option-list__option--active": i === t.activeIndex }]),
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
				onMousedown: r[1] ||= H(() => {}, ["prevent", "stop"]),
				onClick: H((t) => !e.disabled && n.$emit("select", e), ["stop"])
			}, [O(n.$slots, "option", { option: e }, () => [d(j(e.label), 1)], !0)], 42, Ma))), 128)),
			t.options.length ? o("", !0) : (w(), s("div", Na, [O(n.$slots, "empty", {}, () => [d(j(t.emptyLabel), 1)], !0)])),
			O(n.$slots, "footer", {}, void 0, !0)
		], 8, ja));
	}
}, [["__scopeId", "data-v-52e45ea3"]]), Fa = { class: "share-search-multi-select" }, Ia = {
	key: 0,
	class: "share-search-multi-select__tags"
}, La = /*#__PURE__*/ U({
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
		let r = t, c = n, u = E(null), p = E(!1), m = E(""), h = E(0), g = P(), v = i(() => new Set(r.modelValue.map(String))), y = i(() => new Map(r.options.map((e) => [String(e.value), e]))), b = i(() => r.modelValue.map((e) => y.value.get(String(e))).filter(Boolean)), x = i(() => r.limit > 0 && r.modelValue.length >= r.limit), S = i(() => r.options.filter((e) => !v.value.has(String(e.value)) && !e.disabled && String(e.label).toLocaleLowerCase().includes(m.value.trim().toLocaleLowerCase()))), C = i(() => r.options.some((e) => String(e.label).trim().toLocaleLowerCase() === m.value.trim().toLocaleLowerCase()));
		R(S, (e) => {
			h.value = e.length ? 0 : -1;
		}), R(() => r.modelValue, () => {
			m.value = "", x.value ? p.value = !1 : p.value && _(() => u.value?.focus());
		}, { deep: !0 });
		function T(e) {
			x.value || c("update:modelValue", [...r.modelValue, e.value]);
		}
		function O(e) {
			c("update:modelValue", r.modelValue.filter((t) => String(t) !== String(e)));
		}
		function k(e) {
			if (["ArrowDown", "ArrowUp"].includes(e.key)) {
				e.preventDefault(), p.value = !0;
				let t = S.value.length;
				h.value = t ? (h.value + (e.key === "ArrowDown" ? 1 : -1) + t) % t : -1, _(() => document.getElementById(`${g}-${h.value}`)?.scrollIntoView({ block: "nearest" }));
			} else e.key === "Enter" && p.value && S.value[h.value] ? (e.preventDefault(), T(S.value[h.value])) : e.key === "Escape" ? (e.preventDefault(), p.value = !1) : e.key === "Tab" && (p.value = !1);
		}
		return (n, r) => (w(), s("div", Fa, [
			b.value.length ? (w(), s("div", Ia, [(w(!0), s(e, null, D(b.value, (e) => (w(), s("span", {
				key: e.value,
				class: "share-search-multi-select__tag"
			}, [d(j(e.label) + " ", 1), f(ye, {
				label: `${t.removeLabel}: ${e.label}`,
				disabled: t.disabled,
				onClick: (t) => O(e.value)
			}, null, 8, [
				"label",
				"disabled",
				"onClick"
			])]))), 128))])) : o("", !0),
			x.value ? o("", !0) : (w(), a(bi, {
				key: 1,
				ref_key: "input",
				ref: u,
				value: m.value,
				placeholder: t.placeholder,
				disabled: t.disabled,
				role: "combobox",
				"aria-label": t.label,
				"aria-autocomplete": "list",
				"aria-expanded": p.value,
				"aria-controls": M(g),
				"aria-activedescendant": p.value && h.value >= 0 ? `${M(g)}-${h.value}` : void 0,
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
			f(Nt, {
				open: p.value,
				"onUpdate:open": r[5] ||= (e) => p.value = e,
				anchor: u.value?.$el,
				"min-width": 260,
				"z-index": t.zIndex,
				related: ""
			}, {
				default: z(() => [f(Pa, {
					id: M(g),
					label: t.label,
					options: S.value,
					"active-index": h.value,
					"empty-label": t.emptyLabel,
					onActive: r[4] ||= (e) => h.value = e,
					onSelect: T
				}, l({ _: 2 }, [t.allowCreate && m.value.trim() && !C.value && !S.value.length ? {
					name: "footer",
					fn: z(() => [f(Xi, {
						loading: t.creating,
						disabled: t.creating,
						variant: "quiet",
						onMousedown: r[2] ||= H(() => {}, ["prevent", "stop"]),
						onClick: r[3] ||= (e) => n.$emit("create", m.value.trim())
					}, {
						default: z(() => [d(j(t.createLabel) + " «" + j(m.value.trim()) + "»", 1)]),
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
}, [["__scopeId", "data-v-1e12f35d"]]), Ra = ["id"], za = /*#__PURE__*/ U({
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
		let r = e, i = P(), o = E(null), s = E({ visibility: "hidden" }), l, u, d;
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
			if (!d) return;
			let e = (d.getAttribute("aria-describedby") || "").split(/\s+/).filter((e) => e && e !== i);
			e.length ? d.setAttribute("aria-describedby", e.join(" ")) : d.removeAttribute("aria-describedby");
		}
		return R(() => r.anchor, (e) => {
			h(), d = e?.setAttribute ? e : null, d && d.setAttribute("aria-describedby", [.../* @__PURE__ */ new Set([...(d.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean), i])].join(" ")), typeof window < "u" && _(m);
		}, { immediate: !0 }), R(() => [
			r.x,
			r.top,
			r.bottom,
			r.width
		], m), S(() => {
			p(), l = new ResizeObserver(m), l.observe(o.value), window.addEventListener("resize", m, { passive: !0 }), window.addEventListener("scroll", m, {
				passive: !0,
				capture: !0
			}), window.visualViewport?.addEventListener("resize", m), window.visualViewport?.addEventListener("scroll", m);
		}), x(() => {
			h(), l?.disconnect(), u != null && cancelAnimationFrame(u), window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), window.visualViewport?.removeEventListener("resize", m), window.visualViewport?.removeEventListener("scroll", m);
		}), (r, l) => (w(), a(t, { to: "body" }, [f(n, {
			name: "share-tooltip",
			appear: ""
		}, {
			default: z(() => [c("div", {
				id: M(i),
				ref_key: "element",
				ref: o,
				class: v(["share-tooltip", e.tooltipClass]),
				style: b(s.value),
				role: "tooltip"
			}, [O(r.$slots, "default", {}, void 0, !0)], 14, Ra)]),
			_: 3
		})]));
	}
}, [["__scopeId", "data-v-ddef3f8f"]]);
//#endregion
//#region src/lib/calendar.js
function Ba(e) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(e || "")) return null;
	let [t, n, r] = e.split("-").map(Number), i = /* @__PURE__ */ new Date(0);
	return i.setFullYear(t, n - 1, r), i.setHours(12, 0, 0, 0), t > 0 && i.getFullYear() === t && i.getMonth() === n - 1 && i.getDate() === r ? i : null;
}
function Va(e) {
	return `${String(e.getFullYear()).padStart(4, "0")}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function Ha(e, t = "", n = "") {
	return !!(!Ba(e) || t && e < t || n && e > n);
}
function Ua(e, t = 0, n = 0) {
	let r = Ba(e);
	if (!r) return e;
	let i = r.getDate();
	r.setDate(1), r.setMonth(r.getMonth() + n);
	let a = new Date(r);
	a.setMonth(a.getMonth() + 1, 0);
	let o = a.getDate();
	return r.setDate(Math.min(i, o) + t), Va(r);
}
function Wa(e, t, n = 1) {
	let r = /* @__PURE__ */ new Date(0);
	r.setFullYear(e, t, 1), r.setHours(12, 0, 0, 0);
	let i = (r.getDay() - n + 7) % 7;
	return Array.from({ length: 42 }, (e, n) => {
		let a = new Date(r);
		return a.setDate(n - i + 1), {
			value: Va(a),
			day: a.getDate(),
			outside: a.getMonth() !== t
		};
	});
}
//#endregion
//#region src/components/form/DatePicker.vue
var Ga = { class: "share-date-picker" }, Ka = [
	"disabled",
	"aria-label",
	"aria-expanded"
], qa = { class: "share-date-picker__heading" }, Ja = ["aria-label"], Ya = ["value"], Xa = ["value"], Za = ["aria-label"], Qa = ["aria-label"], $a = {
	class: "share-date-picker__week",
	role: "row"
}, eo = ["aria-selected"], to = [
	"data-date",
	"tabindex",
	"disabled",
	"aria-label",
	"aria-current",
	"onClick",
	"onKeydown"
], no = { class: "share-date-picker__footer" }, ro = ["disabled"], io = /*#__PURE__*/ U({
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
		let r = t, a = n, l = E(null), u = E(null), d = E(!1), p = Va(/* @__PURE__ */ new Date()), m = i(() => Ba(r.modelValue)), h = E(r.modelValue || p), g = E((/* @__PURE__ */ new Date()).getFullYear()), y = E((/* @__PURE__ */ new Date()).getMonth()), b = i(() => Array.from({ length: 12 }, (e, t) => new Intl.DateTimeFormat(r.locale, { month: "long" }).format(new Date(2024, t, 1)))), x = i(() => Array.from({ length: 201 }, (e, t) => g.value - 100 + t).filter((e) => e >= 1 && e <= 9999)), S = i(() => Array.from({ length: 7 }, (e, t) => new Intl.DateTimeFormat(r.locale, { weekday: "short" }).format(new Date(2024, 0, 7 + (r.weekStartsOn + t) % 7)))), C = i(() => {
			let e = Wa(g.value, y.value, r.weekStartsOn);
			return Array.from({ length: 6 }, (t, n) => e.slice(n * 7, n * 7 + 7));
		});
		function T(e, t = !1) {
			return new Intl.DateTimeFormat(r.locale, {
				day: "numeric",
				month: "long",
				year: "numeric",
				...t ? { weekday: "long" } : {}
			}).format(e);
		}
		function O(e) {
			return Ha(e, r.min, r.max);
		}
		function k(e) {
			let t = Ba(e) || /* @__PURE__ */ new Date();
			g.value = t.getFullYear(), y.value = t.getMonth(), h.value = Va(t);
		}
		async function A() {
			await _(), u.value?.querySelector(`[data-date="${h.value}"]`)?.focus({ preventScroll: !0 });
		}
		function N(e) {
			d.value = e, e || l.value?.focus();
		}
		async function P() {
			if (r.disabled) return;
			if (d.value) {
				N(!1);
				return;
			}
			let e = m.value ? r.modelValue : p;
			r.min && e < r.min && (e = r.min), r.max && e > r.max && (e = r.max), k(e), d.value = !0, await A();
		}
		function F(e) {
			r.disabled || e && O(e) || (a("update:modelValue", e), N(!1));
		}
		function I(e) {
			let t = Ua(h.value, 0, e);
			Ba(t) && k(t);
		}
		function L(e) {
			I(e - y.value);
		}
		function B(e) {
			I((e - g.value) * 12);
		}
		function V(e, t) {
			let n = {
				ArrowLeft: -1,
				ArrowRight: 1,
				ArrowUp: -7,
				ArrowDown: 7
			}, i;
			if (e.key in n) i = Ua(t, n[e.key]);
			else if (e.key === "PageUp" || e.key === "PageDown") i = Ua(t, 0, (e.key === "PageUp" ? -1 : 1) * (e.shiftKey ? 12 : 1));
			else if (e.key === "Home" || e.key === "End") {
				let n = (Ba(t).getDay() - r.weekStartsOn + 7) % 7;
				i = Ua(t, e.key === "Home" ? -n : 6 - n);
			} else return;
			e.preventDefault(), O(i) || (k(i), A());
		}
		function H(e) {
			if (e.key !== "Tab") return;
			let t = [...u.value.querySelectorAll("button:not(:disabled), select:not(:disabled)")].filter((e) => e.tabIndex >= 0), n = t[0], r = t.at(-1);
			e.shiftKey && e.target === n ? (e.preventDefault(), r?.focus()) : !e.shiftKey && e.target === r && (e.preventDefault(), n?.focus());
		}
		function U(e) {
			e.key === "Escape" && (e.stopPropagation(), e.preventDefault(), N(!1)), e.key === "Tab" && (e.stopPropagation(), H(e));
		}
		return R(() => r.disabled, (e) => {
			e && (d.value = !1);
		}), R(() => r.modelValue, (e) => {
			d.value && k(e);
		}), (n, r) => (w(), s("span", Ga, [c("button", {
			ref_key: "anchor",
			ref: l,
			type: "button",
			class: "share-date-picker__trigger",
			disabled: t.disabled,
			"aria-label": t.ariaLabel,
			"aria-expanded": d.value,
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
		}), c("path", { d: "M7 3v4m10-4v4M3 11h18m-13 4h3m3 0h2" })], -1), c("span", { class: v({ "share-date-picker__placeholder": !m.value }) }, j(m.value ? T(m.value) : t.placeholder), 3)], 8, Ka), f(Nt, {
			open: d.value,
			anchor: l.value,
			"min-width": 0,
			"z-index": t.zIndex,
			role: "dialog",
			"aria-label": t.ariaLabel,
			"transition-preset": "action-menu",
			"close-on-scroll": !1,
			"onUpdate:open": N
		}, {
			default: z(() => [c("div", {
				ref_key: "calendar",
				ref: u,
				class: "share-date-picker__calendar",
				onKeydown: U
			}, [
				c("div", qa, [
					c("button", {
						type: "button",
						"aria-label": t.previousLabel,
						onClick: r[0] ||= (e) => I(-1)
					}, "‹", 8, Ja),
					f(ji, {
						value: y.value,
						"aria-label": t.monthLabel,
						"onUpdate:value": r[1] ||= (e) => L(Number(e))
					}, {
						default: z(() => [(w(!0), s(e, null, D(b.value, (e, t) => (w(), s("option", {
							key: t,
							value: t
						}, j(e), 9, Ya))), 128))]),
						_: 1
					}, 8, ["value", "aria-label"]),
					f(ji, {
						value: g.value,
						"aria-label": t.yearLabel,
						"onUpdate:value": r[2] ||= (e) => B(Number(e))
					}, {
						default: z(() => [(w(!0), s(e, null, D(x.value, (e) => (w(), s("option", {
							key: e,
							value: e
						}, j(e), 9, Xa))), 128))]),
						_: 1
					}, 8, ["value", "aria-label"]),
					c("button", {
						type: "button",
						"aria-label": t.nextLabel,
						onClick: r[3] ||= (e) => I(1)
					}, "›", 8, Za)
				]),
				c("div", {
					role: "grid",
					"aria-label": `${b.value[y.value]} ${g.value}`
				}, [c("div", $a, [(w(!0), s(e, null, D(S.value, (e) => (w(), s("span", {
					key: e,
					role: "columnheader"
				}, j(e), 1))), 128))]), (w(!0), s(e, null, D(C.value, (n, r) => (w(), s("div", {
					key: r,
					class: "share-date-picker__week",
					role: "row"
				}, [(w(!0), s(e, null, D(n, (e) => (w(), s("span", {
					key: e.value,
					role: "gridcell",
					"aria-selected": e.value === t.modelValue
				}, [c("button", {
					type: "button",
					"data-date": e.value,
					tabindex: e.value === h.value ? 0 : -1,
					disabled: O(e.value),
					"aria-label": T(M(Ba)(e.value), !0),
					"aria-current": e.value === M(p) ? "date" : void 0,
					class: v({
						outside: e.outside,
						selected: e.value === t.modelValue,
						today: e.value === M(p)
					}),
					onClick: (t) => F(e.value),
					onKeydown: (t) => V(t, e.value)
				}, j(e.day), 43, to)], 8, eo))), 128))]))), 128))], 8, Qa),
				c("div", no, [c("button", {
					type: "button",
					disabled: O(M(p)),
					onClick: r[4] ||= (e) => F(M(p))
				}, j(t.todayLabel), 9, ro), t.allowClear ? (w(), s("button", {
					key: 0,
					type: "button",
					onClick: r[5] ||= (e) => F("")
				}, j(t.clearLabel), 1)) : o("", !0)])
			], 544)]),
			_: 1
		}, 8, [
			"open",
			"anchor",
			"z-index",
			"aria-label"
		])]));
	}
}, [["__scopeId", "data-v-5f6d99b2"]]), ao = { class: "share-timeline-group__rail" }, oo = { class: "share-timeline-group__identity" }, so = { class: "share-timeline-group__content" }, co = {
	key: 0,
	class: "share-timeline-group__footer"
}, lo = /*#__PURE__*/ U({
	__name: "TimelineGroup",
	props: {
		color: {
			type: String,
			default: "var(--accent)"
		},
		railWidth: {
			type: String,
			default: "40px"
		},
		compactRailWidth: {
			type: String,
			default: "32px"
		},
		gap: {
			type: Number,
			default: 12
		},
		compactGap: {
			type: Number,
			default: 8
		},
		paddingBlock: {
			type: Number,
			default: 16
		},
		sticky: Boolean,
		separated: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, n = i(() => ({
			"--timeline-color": t.color,
			"--timeline-rail-width": t.railWidth,
			"--timeline-compact-rail-width": t.compactRailWidth,
			"--timeline-gap": `${t.gap}px`,
			"--timeline-compact-gap": `${t.compactGap}px`,
			"--timeline-padding": `${t.paddingBlock}px`
		}));
		return (t, r) => (w(), s("section", {
			class: v(["share-timeline-group", {
				"share-timeline-group--separated": e.separated,
				"share-timeline-group--sticky": e.sticky
			}]),
			style: b(n.value)
		}, [
			c("div", ao, [c("div", oo, [O(t.$slots, "identity", {}, void 0, !0)])]),
			c("div", so, [O(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.footer ? (w(), s("div", co, [O(t.$slots, "footer", {}, void 0, !0)])) : o("", !0)
		], 6));
	}
}, [["__scopeId", "data-v-af3f22a5"]]), uo = [
	"role",
	"aria-label",
	"aria-disabled"
], fo = {
	class: "share-star-rating__star",
	"aria-hidden": "true"
}, po = "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1Z", mo = /*#__PURE__*/ U({
	__name: "StarRating",
	props: {
		modelValue: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 5,
			validator: (e) => Number.isInteger(e) && e >= 1 && e <= 10
		},
		label: {
			type: String,
			required: !0
		},
		valueLabel: String,
		optionLabels: {
			type: Array,
			default: () => []
		},
		readonly: Boolean,
		disabled: Boolean
	},
	emits: ["update:modelValue"],
	setup(t, { emit: n }) {
		let r = t, o = n, l = E(0), u = [], d = i(() => Math.max(1, Math.min(r.max, Math.round(r.modelValue)))), f = (e) => Math.max(0, Math.min(1, (r.readonly ? r.modelValue : l.value || r.modelValue) - e + 1)) * 100;
		function p(e) {
			!r.readonly && !r.disabled && o("update:modelValue", e);
		}
		function m(e, t) {
			if (r.readonly || r.disabled) return;
			let n = {
				ArrowRight: Math.min(r.max, t + 1),
				ArrowLeft: Math.max(1, t - 1),
				Home: 1,
				End: r.max
			}[e.key];
			n !== void 0 && (e.preventDefault(), p(n), u[n - 1]?.focus());
		}
		return (n, r) => (w(), s("div", {
			class: v(["share-star-rating", { "share-star-rating--readonly": t.readonly }]),
			role: t.readonly ? "img" : "radiogroup",
			"aria-label": t.readonly && t.valueLabel || t.label,
			"aria-disabled": !t.readonly && t.disabled || void 0,
			onMouseleave: r[1] ||= (e) => l.value = 0
		}, [(w(!0), s(e, null, D(t.max, (e) => (w(), a(k(t.readonly ? "span" : "button"), {
			key: e,
			ref_for: !0,
			ref: (t) => u[e - 1] = t,
			class: "share-star-rating__item",
			type: t.readonly ? void 0 : "button",
			role: t.readonly ? void 0 : "radio",
			"aria-label": t.readonly ? void 0 : t.optionLabels[e - 1] || String(e),
			"aria-checked": t.readonly ? void 0 : t.modelValue === e,
			disabled: !t.readonly && t.disabled || void 0,
			tabindex: t.readonly ? void 0 : d.value === e ? 0 : -1,
			onMouseenter: (n) => !t.readonly && (l.value = e),
			onFocus: (n) => !t.readonly && (l.value = e),
			onBlur: r[0] ||= (e) => l.value = 0,
			onClick: (t) => p(e),
			onKeydown: (t) => m(t, e)
		}, {
			default: z(() => [c("span", fo, [c("svg", {
				viewBox: "0 0 24 24",
				fill: "none"
			}, [c("path", { d: po })]), c("span", {
				class: "share-star-rating__fill",
				style: b({ width: `${f(e)}%` })
			}, [c("svg", { viewBox: "0 0 24 24" }, [c("path", { d: po })])], 4)])]),
			_: 2
		}, 1064, [
			"type",
			"role",
			"aria-label",
			"aria-checked",
			"disabled",
			"tabindex",
			"onMouseenter",
			"onFocus",
			"onClick",
			"onKeydown"
		]))), 128))], 42, uo));
	}
}, [["__scopeId", "data-v-2d52a2de"]]);
//#endregion
export { hn as $, Zr as A, ce as At, dr as B, bi as C, Z as Ct, oi as D, me as Dt, si as E, J as Et, Er as F, U as Ft, Kn as G, or as H, Sr as I, mn as J, Vn as K, br as L, Hr as M, ne as Mt, Pr as N, G as Nt, ai as O, de as Ot, Nr as P, W as Pt, yn as Q, gr as R, Ci as S, Fe as St, mi as T, ye as Tt, tr as U, lr as V, Jn as W, fn as X, pn as Y, ln as Z, Ki as _, vt as _t, La as a, Bt as at, ki as b, Ue as bt, ya as c, zt as ct, sa as d, At as dt, vn as et, oa as f, kt as ft, qi as g, yt as gt, Ji as h, mt as ht, za as i, Xt as it, Ur as j, re as jt, ei as k, K as kt, pa as l, Nt as lt, Xi as m, ht as mt, lo as n, un as nt, Pa as o, Vt as ot, Qi as p, Ct as pt, Sn as q, io as r, nn as rt, Aa as s, Ht as st, mo as t, dn as tt, ua as u, jt as ut, Ni as v, _t as vt, vi as w, Se as wt, Ei as x, Be as xt, ji as y, bt as yt, mr as z };
