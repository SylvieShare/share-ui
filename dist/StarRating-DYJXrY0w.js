import { Fragment as e, Teleport as t, Transition as n, TransitionGroup as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createStaticVNode as u, createTextVNode as d, createVNode as f, defineComponent as p, guardReactiveProps as m, h, inject as g, mergeProps as _, nextTick as v, normalizeClass as y, normalizeProps as b, normalizeStyle as x, onBeforeUnmount as S, onMounted as C, onScopeDispose as w, openBlock as T, provide as E, reactive as D, ref as O, renderList as k, renderSlot as A, resolveDynamicComponent as j, shallowRef as M, toDisplayString as N, unref as P, useCssVars as F, useId as I, useSlots as L, vModelText as R, vShow as z, watch as B, withCtx as V, withDirectives as H, withKeys as U, withModifiers as W } from "vue";
//#region \0plugin-vue:export-helper
var G = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ee = [
	"aria-label",
	"aria-describedby",
	"aria-pressed",
	"disabled"
], te = {
	class: "share-choice-card__top",
	"aria-hidden": "true"
}, ne = {
	key: 0,
	class: "share-choice-card__icon"
}, re = {
	key: 1,
	class: "share-choice-card__check",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, ie = { class: "share-choice-card__body" }, ae = { class: "share-choice-card__label" }, oe = ["id"], se = /*#__PURE__*/ G({
	__name: "ChoiceCard",
	props: {
		modelValue: Boolean,
		label: {
			type: String,
			required: !0
		},
		description: {
			type: String,
			default: ""
		},
		color: {
			type: String,
			default: ""
		},
		disabled: Boolean,
		tinted: Boolean,
		centered: Boolean,
		selectionIndicator: {
			type: String,
			default: "check",
			validator: (e) => ["check", "outline"].includes(e)
		},
		layout: {
			type: String,
			default: "stacked",
			validator: (e) => [
				"inline",
				"stacked",
				"icon"
			].includes(e)
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = t, r = I();
		return (t, i) => (T(), s("button", {
			type: "button",
			class: y(["share-choice-card", {
				"share-choice-card--selected": e.modelValue,
				"share-choice-card--inline": e.layout === "inline",
				"share-choice-card--icon": e.layout === "icon",
				"share-choice-card--described": e.description,
				"share-choice-card--tinted": e.tinted,
				"share-choice-card--centered": e.centered,
				"share-choice-card--outlined-selection": e.selectionIndicator === "outline"
			}]),
			style: x({ "--choice-card-color": e.color || "var(--accent)" }),
			"aria-label": e.label,
			"aria-describedby": e.description ? P(r) : void 0,
			"aria-pressed": e.modelValue,
			disabled: e.disabled,
			onClick: i[0] ||= (t) => n("update:modelValue", !e.modelValue)
		}, [c("span", te, [t.$slots.icon ? (T(), s("span", ne, [A(t.$slots, "icon", {}, void 0, !0)])) : o("", !0), e.selectionIndicator === "check" ? (T(), s("svg", re, [...i[1] ||= [c("circle", {
			cx: "12",
			cy: "12",
			r: "10"
		}, null, -1), c("path", { d: "m9 12 2 2 4-4" }, null, -1)]])) : o("", !0)]), c("span", ie, [c("span", ae, N(e.label), 1), e.description ? (T(), s("span", {
			key: 0,
			id: P(r),
			class: "share-choice-card__description"
		}, N(e.description), 9, oe)) : o("", !0)])], 14, ee));
	}
}, [["__scopeId", "data-v-46aa0a91"]]);
//#endregion
//#region src/lib/blur.js
function K(e = 8) {
	return `blur(${typeof e == "number" ? `${Number.isFinite(e) ? Math.max(0, e) : 0}px` : String(e ?? "").trim() || "0px"})`;
}
function q(e = 8) {
	let t = K(e);
	return {
		"backdrop-filter": t,
		"-webkit-backdrop-filter": t
	};
}
function ce(e, t = 8) {
	if (e?.style) for (let [n, r] of Object.entries(q(t))) e.style.setProperty(n, r);
}
var J = /*#__PURE__*/ G({
	__name: "BlurBackdrop",
	props: { radius: {
		type: [Number, String],
		default: 8
	} },
	setup(e) {
		return (t, n) => (T(), s("div", {
			class: "blur-backdrop",
			"aria-hidden": "true",
			style: x(P(q)(e.radius))
		}, null, 4));
	}
}, [["__scopeId", "data-v-4f6e2fd7"]]), Y = [
	"role",
	"aria-label",
	"aria-hidden"
], le = ["src"], ue = {
	key: 1,
	class: "avatar-frame-fallback"
}, de = /*#__PURE__*/ G({
	__name: "AvatarFrame",
	props: {
		src: {
			type: String,
			default: ""
		},
		size: {
			type: [Number, String],
			default: 48
		},
		radius: {
			type: [Number, String],
			default: "var(--r-sm)"
		},
		fit: {
			type: String,
			default: "cover",
			validator: (e) => ["cover", "contain"].includes(e)
		},
		position: {
			type: String,
			default: "center"
		},
		label: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		let t = e, n = O(!1);
		B(() => t.src, () => {
			n.value = !1;
		});
		let r = (e) => typeof e == "number" ? `${e}px` : e, a = i(() => ({
			"--avatar-frame-size": r(t.size),
			"--avatar-frame-radius": r(t.radius),
			"--avatar-frame-fit": t.fit,
			"--avatar-frame-position": t.position
		}));
		return (t, r) => (T(), s("span", {
			class: "avatar-frame",
			style: x(a.value),
			role: e.label ? "img" : void 0,
			"aria-label": e.label || void 0,
			"aria-hidden": !e.label || void 0
		}, [e.src && !n.value ? (T(), s("img", {
			key: 0,
			src: e.src,
			alt: "",
			draggable: "false",
			onError: r[0] ||= (e) => n.value = !0
		}, null, 40, le)) : (T(), s("span", ue, [A(t.$slots, "default", {}, void 0, !0)]))], 12, Y));
	}
}, [["__scopeId", "data-v-5a1eb56b"]]), fe = Symbol("share-content-fit");
function pe(e, t, n = .5) {
	let r = Number.isFinite(n) && n > 0 ? Math.min(1, n) : .5;
	return !(e > 0) || !(t > 0) ? {
		scale: 1,
		wrapping: !1
	} : {
		scale: Math.max(r, Math.min(1, t / e)),
		wrapping: e * r > t + .25
	};
}
//#endregion
//#region src/composables/useContentFit.js
function me(e, t, n) {
	let r = O(1), i = O(!1), a = 0, o, s, c = !1, l = 0, u = 0, d = 0;
	function f() {
		let a = e.value, o = t.value;
		if (c || !a?.isConnected || !o || !(a.clientWidth > 0)) return;
		l = a.clientWidth, o.style.width = "max-content", o.style.whiteSpace = "nowrap", o.style.setProperty("--fit-content-wrap", "nowrap");
		let s = o.offsetWidth, f = pe(s, l, n());
		a.style.setProperty("--fit-content-natural-width", `${s}px`), f.wrapping && (o.style.width = `${l / f.scale}px`, o.style.whiteSpace = "normal", o.style.setProperty("--fit-content-wrap", "wrap"));
		let p = getComputedStyle(o);
		u = parseFloat(p.width) || o.offsetWidth, d = parseFloat(p.height) || o.offsetHeight, o.style.transform = `scale(${f.scale})`, a.style.height = `${Math.ceil(d * f.scale)}px`, a.dataset.fitReady = "", a.dataset.fitScale = String(f.scale), a.dataset.fitWrapping = String(f.wrapping), r.value = f.scale, i.value = f.wrapping;
	}
	function p() {
		c || a || (a = requestAnimationFrame(() => {
			a = 0, f();
		}));
	}
	return C(() => {
		f(), o = new ResizeObserver((t) => {
			for (let n of t) if (n.target === e.value) {
				if (!n.contentRect.width) {
					l = 0;
					continue;
				}
				Math.abs(n.contentRect.width - l) > 1 && p();
			} else (Math.abs(n.contentRect.width - u) > 1 || Math.abs(n.contentRect.height - d) > 1) && p();
		}), o.observe(e.value), o.observe(t.value), s = new MutationObserver((e) => {
			e.some((e) => e.type !== "attributes" || e.target !== t.value) && p();
		}), s.observe(t.value, {
			childList: !0,
			characterData: !0,
			subtree: !0,
			attributes: !0,
			attributeFilter: [
				"class",
				"width",
				"height"
			]
		}), document.fonts?.ready.then(p), document.fonts?.addEventListener("loadingdone", p);
	}), B(n, p), S(() => {
		c = !0, a && cancelAnimationFrame(a), o?.disconnect(), s?.disconnect(), document.fonts?.removeEventListener("loadingdone", p);
	}), {
		scale: r,
		wrapping: i,
		refresh: f
	};
}
var X = /*#__PURE__*/ G({
	__name: "FitContent",
	props: {
		tag: {
			type: String,
			default: "span"
		},
		inline: Boolean,
		minScale: {
			type: Number,
			default: .5
		}
	},
	setup(e, { expose: t }) {
		let n = e, r = O(null), i = O(null), o = g(fe, null), c = !!o, l = o || me(r, i, () => n.minScale);
		E(fe, l);
		let { scale: u, wrapping: d, refresh: f } = l;
		return t({
			scale: u,
			wrapping: d,
			refresh: f
		}), (t, n) => (T(), a(j(e.tag), {
			ref_key: "root",
			ref: r,
			class: y(["share-fit-content", {
				"share-fit-content--inline": e.inline,
				"share-fit-content--inherited": c
			}]),
			"data-fit-owner": c ? void 0 : ""
		}, {
			default: V(() => [c ? A(t.$slots, "default", {
				scale: P(u),
				wrapping: P(d)
			}, void 0, !0, 0) : (T(), s("span", {
				key: 1,
				ref_key: "content",
				ref: i,
				class: "share-fit-content__content"
			}, [A(t.$slots, "default", {
				scale: P(u),
				wrapping: P(d)
			}, void 0, !0)], 512))]),
			_: 3
		}, 8, ["class", "data-fit-owner"]));
	}
}, [["__scopeId", "data-v-f0030c09"]]), Z = /*#__PURE__*/ G({
	__name: "BaseTile",
	props: {
		color: {
			type: String,
			default: null
		},
		surface: {
			type: String,
			default: "solid",
			validator: (e) => [
				"solid",
				"glass",
				"popover"
			].includes(e)
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
		elevated: {
			type: Boolean,
			default: !1
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
		return (t, r) => (T(), s("div", {
			class: y(["base-tile", {
				"base-tile--outlined": e.outlined,
				"base-tile--elevated": e.elevated,
				"base-tile--interactive": e.interactive,
				"base-tile--tint": e.tint,
				"base-tile--framed": e.framed,
				"base-tile--glass": e.surface === "glass",
				"base-tile--popover": e.surface === "popover"
			}]),
			style: x({
				"--tile-color": n.value,
				"--tile-frame-width": `${Math.max(1, Math.min(4, Number(e.frameWidth) || 1))}px`,
				...e.surface === "glass" ? P(q)(14) : {}
			}),
			onClick: r[0] ||= (e) => t.$emit("click", e)
		}, [A(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-0251a8a7"]]), he = { class: "morph-tile-title" }, ge = ["aria-label", "disabled"], _e = /*#__PURE__*/ G({
	__name: "MorphTileHeader",
	props: {
		title: {
			type: String,
			default: ""
		},
		compactHeader: Boolean,
		showEdit: Boolean,
		showEditIcon: {
			type: Boolean,
			default: !0
		},
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
		return (t, n) => (T(), s("div", { class: y(["morph-tile-header", { "morph-tile-header--compact": e.compactHeader }]) }, [(T(), a(j(e.showEdit && e.clickableTitle ? "button" : "div"), {
			class: y(["morph-tile-heading", { "morph-tile-heading--editable": e.showEdit && e.clickableTitle }]),
			type: e.showEdit && e.clickableTitle ? "button" : void 0,
			disabled: e.showEdit && e.clickableTitle && e.editFade || void 0,
			"aria-label": e.showEdit && e.clickableTitle ? `${e.editLabel}: ${e.title}` : void 0,
			onClick: n[1] ||= W((n) => e.showEdit && e.clickableTitle && !e.editFade && t.$emit("edit", n), ["stop"])
		}, {
			default: V(() => [c("span", he, [A(t.$slots, "default", {}, () => [d(N(e.title), 1)], !0)]), e.showEdit && e.clickableTitle && e.showEditIcon ? (T(), s("svg", {
				key: 0,
				class: y(["morph-tile-pencil", { "morph-tile-pencil--hidden": e.editFade }]),
				viewBox: "0 0 24 24",
				width: "14",
				height: "14",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [...n[3] ||= [c("path", { d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }, null, -1)]], 2)) : e.showEdit && !e.clickableTitle ? (T(), s("button", {
				key: 1,
				class: "morph-tile-edit",
				type: "button",
				"aria-label": `${e.editLabel}: ${e.title}`,
				disabled: e.editFade,
				onClick: n[0] ||= W((e) => t.$emit("edit", e), ["stop"])
			}, [(T(), s("svg", {
				class: y(["morph-tile-pencil", { "morph-tile-pencil--hidden": e.editFade }]),
				viewBox: "0 0 24 24",
				width: "14",
				height: "14",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [...n[4] ||= [c("path", { d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }, null, -1)]], 2))], 8, ge)) : o("", !0)]),
			_: 3
		}, 8, [
			"class",
			"type",
			"disabled",
			"aria-label"
		])), t.$slots.aside ? (T(), s("div", {
			key: 0,
			class: "morph-tile-aside",
			onClick: n[2] ||= W(() => {}, ["stop"])
		}, [A(t.$slots, "aside", {}, void 0, !0)])) : o("", !0)], 2));
	}
}, [["__scopeId", "data-v-3115b3b3"]]), ve = /*#__PURE__*/ G({
	__name: "MorphTile",
	props: {
		title: {
			type: String,
			default: ""
		},
		compactHeader: Boolean,
		showEdit: Boolean,
		showEditIcon: {
			type: Boolean,
			default: !0
		},
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
		return (t, n) => (T(), a(j(e.embedded ? "div" : Z), {
			class: "morph-tile",
			color: e.embedded ? void 0 : e.color,
			tint: e.embedded ? void 0 : e.tint,
			framed: e.embedded ? void 0 : e.framed,
			outlined: e.embedded ? void 0 : e.outlined,
			interactive: e.embedded ? void 0 : e.interactive,
			style: x({ "--morph-tile-padding": e.padding }),
			onClick: n[1] ||= (e) => t.$emit("click", e)
		}, {
			default: V(() => [
				A(t.$slots, "decoration", {}, void 0, !0),
				e.title || t.$slots.title || t.$slots.aside ? (T(), a(_e, {
					key: 0,
					title: e.title,
					"compact-header": e.compactHeader,
					"show-edit": e.showEdit,
					"show-edit-icon": e.showEditIcon,
					"edit-label": e.editLabel,
					"edit-fade": e.editFade,
					"clickable-title": e.clickableTitle,
					onEdit: n[0] ||= (e) => t.$emit("edit", e)
				}, l({ _: 2 }, [t.$slots.title ? {
					name: "default",
					fn: V(() => [A(t.$slots, "title", {}, void 0, !0)]),
					key: "0"
				} : void 0, t.$slots.aside ? {
					name: "aside",
					fn: V(() => [A(t.$slots, "aside", {}, void 0, !0)]),
					key: "1"
				} : void 0]), 1032, [
					"title",
					"compact-header",
					"show-edit",
					"show-edit-icon",
					"edit-label",
					"edit-fade",
					"clickable-title"
				])) : o("", !0),
				A(t.$slots, "default", {}, void 0, !0)
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
}, [["__scopeId", "data-v-2af74b97"]]), Q = /*#__PURE__*/ G({
	__name: "TileAccentStrip",
	props: { color: {
		type: String,
		default: null
	} },
	setup(e) {
		return (t, n) => (T(), s("span", {
			class: "tile-accent-strip",
			style: x({ background: e.color || "var(--tile-color, var(--accent))" }),
			"aria-hidden": "true"
		}, null, 4));
	}
}, [["__scopeId", "data-v-c25cb074"]]), ye = {
	key: 0,
	class: "share-section-list__header"
}, be = {
	key: 0,
	class: "share-section-list__icon"
}, xe = { class: "share-section-list__title" }, Se = {
	key: 1,
	class: "share-section-list__footer"
}, Ce = /*#__PURE__*/ G({
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
		return (t, n) => (T(), a(j(e.embedded ? "section" : Z), {
			class: y(["share-section-list", {
				"share-section-list--embedded": e.embedded,
				"share-section-list--compact": e.compact
			}]),
			"aria-label": e.title || void 0
		}, {
			default: V(() => [
				e.title || t.$slots.header || t.$slots.aside ? (T(), s("header", ye, [A(t.$slots, "header", {}, () => [
					t.$slots.icon ? (T(), s("span", be, [A(t.$slots, "icon")])) : o("", !0),
					c("span", xe, N(e.title), 1),
					n[0] ||= c("span", {
						class: "share-section-list__line",
						"aria-hidden": "true"
					}, null, -1),
					A(t.$slots, "aside")
				])])) : o("", !0),
				A(t.$slots, "body", {}, () => [(T(), a(j(e.transitionName ? r : "div"), _(e.listAttrs, {
					tag: e.transitionName ? "div" : void 0,
					name: e.transitionName || void 0,
					class: "share-section-list__rows"
				}), {
					default: V(() => [A(t.$slots, "default")]),
					_: 3
				}, 16, ["tag", "name"]))]),
				t.$slots.footer ? (T(), s("footer", Se, [A(t.$slots, "footer")])) : o("", !0)
			]),
			_: 3
		}, 8, ["class", "aria-label"]));
	}
}, [["__scopeId", "data-v-a757846f"]]), we = [
	"disabled",
	"aria-label",
	"title"
], Te = {
	key: 0,
	class: "share-add-button__text"
}, Ee = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("button", {
			class: y(["share-add-button", [`share-add-button--${e.variant}`, { "share-add-button--block": e.block }]]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			title: e.variant === "icon" && e.label || void 0,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [n[1] ||= c("span", {
			class: "share-add-button__plus",
			"aria-hidden": "true"
		}, "+", -1), e.variant === "icon" ? o("", !0) : (T(), s("span", Te, [A(t.$slots, "default", {}, () => [d(N(e.label), 1)], !0)]))], 10, we));
	}
}, [["__scopeId", "data-v-875a58d0"]]), De = [
	"value",
	"min",
	"max",
	"step",
	"disabled",
	"aria-label"
], Oe = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("input", {
			class: "share-slider",
			type: "range",
			value: e.modelValue,
			min: e.min,
			max: e.max,
			step: e.step,
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			style: x(o.value),
			onInput: l,
			onChange: u
		}, null, 44, De));
	}
}, [["__scopeId", "data-v-f86a47ab"]]), ke = [
	"disabled",
	"aria-label",
	"aria-checked"
], Ae = {
	key: 0,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, je = {
	key: 1,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, Me = /*#__PURE__*/ G({
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
		},
		indeterminate: Boolean,
		hitSize: {
			type: Number,
			default: 0
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = i(() => Math.max(9, (n.hitSize - n.size) / 2)), a = t;
		function l() {
			n.disabled || a("update:modelValue", n.indeterminate || !n.modelValue);
		}
		return (t, n) => (T(), s("button", {
			type: "button",
			class: y(["share-compact-checkbox", {
				"share-compact-checkbox--checked": e.modelValue,
				"share-compact-checkbox--mixed": e.indeterminate
			}]),
			style: x({
				"--checkbox-size": `${e.size}px`,
				"--checkbox-hit-padding": `${r.value}px`
			}),
			disabled: e.disabled,
			"aria-label": e.label,
			"aria-checked": e.indeterminate ? "mixed" : e.modelValue,
			role: "checkbox",
			onClick: W(l, ["stop"]),
			onPointerdown: n[0] ||= W(() => {}, ["stop"])
		}, [e.indeterminate ? (T(), s("svg", Ae, [...n[1] ||= [c("path", {
			d: "M2.5 6h7",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round"
		}, null, -1)]])) : e.modelValue ? (T(), s("svg", je, [...n[2] ||= [c("path", {
			d: "M2.5 6.2l2.4 2.4 4.6-5",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, null, -1)]])) : o("", !0)], 46, ke));
	}
}, [["__scopeId", "data-v-826ab51b"]]), Ne = ["aria-label"], Pe = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], Fe = /*#__PURE__*/ G({
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
		let r = t, a = n, o = O(null), l = O([]), u = O({
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
		function _() {
			return r.options.map((e, t) => ({
				option: e,
				index: t
			})).filter(({ option: e }) => !e.disabled);
		}
		async function b(e) {
			let t = r.options[e];
			!t || t.disabled || r.disabled || (g(t.value), await v(), l.value[e]?.focus());
		}
		function w(e, t) {
			let n = _();
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			(e.key === "ArrowRight" || e.key === "ArrowDown") && (i = n[(r + 1) % n.length]), (e.key === "ArrowLeft" || e.key === "ArrowUp") && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), b(i.index));
		}
		let E = null;
		return C(async () => {
			await v(), h(), typeof ResizeObserver < "u" && o.value && (E = new ResizeObserver(() => h(!1)), E.observe(o.value));
		}), S(() => {
			E?.disconnect(), m != null && cancelAnimationFrame(m);
		}), B(() => r.modelValue, async () => {
			await v(), h(!0);
		}), B(() => r.options, async () => {
			await v(), h(!1);
		}, { deep: !0 }), (n, r) => (T(), s("div", {
			ref_key: "rootEl",
			ref: o,
			class: y(["share-multi-toggle", {
				"share-multi-toggle--block": t.block,
				"share-multi-toggle--disabled": t.disabled
			}]),
			role: "radiogroup",
			"aria-label": t.ariaLabel || void 0
		}, [c("span", {
			class: y(["share-multi-toggle__pill", {
				"share-multi-toggle__pill--neutral": d.value,
				"share-multi-toggle__pill--instant": !u.value.animate
			}]),
			style: x(f.value),
			"aria-hidden": "true"
		}, null, 6), (T(!0), s(e, null, k(t.options, (e, n) => (T(), s("button", {
			key: String(e.value),
			ref_for: !0,
			ref: (e) => p(e, n),
			type: "button",
			class: y(["share-multi-toggle__button", {
				"share-multi-toggle__button--active": e.value === t.modelValue,
				"share-multi-toggle__button--neutral": e.value === t.modelValue && e.value === t.neutralValue
			}]),
			role: "radio",
			"aria-checked": e.value === t.modelValue,
			tabindex: e.value === t.modelValue ? 0 : -1,
			disabled: t.disabled || e.disabled,
			onClick: (t) => g(e.value),
			onKeydown: (e) => w(e, n)
		}, N(e.label), 43, Pe))), 128))], 10, Ne));
	}
}, [["__scopeId", "data-v-34eca427"]]), Ie = ["disabled", "aria-label"], Le = {
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
}, Re = {
	key: 1,
	class: "share-remove-button__cross",
	"aria-hidden": "true"
}, ze = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("button", {
			class: y(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.icon === "trash" ? (T(), s("svg", Le, [...n[1] ||= [c("path", { d: "M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" }, null, -1)]])) : (T(), s("span", Re))], 10, Ie));
	}
}, [["__scopeId", "data-v-6648a65b"]]), Be = { class: "share-section-label__text" }, Ve = {
	key: 0,
	class: "share-section-label__line",
	"aria-hidden": "true"
}, He = {
	key: 1,
	class: "share-section-label__actions"
}, Ue = /*#__PURE__*/ G({
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
		return (t, r) => (T(), s("div", {
			class: y(["share-section-label", {
				"share-section-label--medium": e.size === "medium",
				"share-section-label--border": e.border,
				"share-section-label--before": e.border && e.borderPosition === "before"
			}]),
			style: x(n.value)
		}, [
			c("span", Be, [A(t.$slots, "default", {}, () => [d(N(e.title), 1)], !0)]),
			e.line ? (T(), s("span", Ve)) : o("", !0),
			t.$slots.actions ? (T(), s("span", He, [A(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)
		], 6));
	}
}, [["__scopeId", "data-v-5d3cbbb9"]]), We = ["aria-label"], Ge = {
	viewBox: "0 0 120 120",
	role: "img",
	"aria-hidden": "true"
}, Ke = [
	"stroke",
	"stroke-width",
	"stroke-dasharray",
	"stroke-dashoffset"
], qe = { class: "segment-donut__center" }, Je = {
	key: 0,
	class: "segment-donut__legend"
}, Ye = { key: 0 }, Xe = /*#__PURE__*/ G({
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
		F((e) => ({ c18471e2: t.strokeWidth }));
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
		return (n, r) => (T(), s("figure", {
			class: "segment-donut",
			"aria-label": t.ariaLabel
		}, [c("div", {
			class: "segment-donut__visual",
			style: x({ "--segment-donut-size": `${t.size}px` })
		}, [(T(), s("svg", Ge, [r[0] ||= c("circle", {
			class: "segment-donut__track",
			cx: "60",
			cy: "60",
			r: "50",
			pathLength: "100"
		}, null, -1), (T(!0), s(e, null, k(d.value, (e) => (T(), s("circle", {
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
		}, null, 8, Ke))), 128))])), c("div", qe, [A(n.$slots, "center", { total: l.value }, () => [c("strong", null, N(t.formatValue(l.value)), 1), c("span", null, N(t.totalLabel), 1)], !0)])], 4), t.showLegend ? (T(), s("ul", Je, [(T(!0), s(e, null, k(u.value, (e) => (T(), s("li", { key: e.key }, [
			c("i", {
				style: x({ "--segment-color": e.color }),
				"aria-hidden": "true"
			}, null, 4),
			c("span", null, N(e.label), 1),
			c("strong", null, N(t.formatValue(e.value)), 1),
			t.showPercent ? (T(), s("small", Ye, N(e.percent.toLocaleString(void 0, { maximumFractionDigits: 1 })) + "%", 1)) : o("", !0)
		]))), 128))])) : o("", !0)], 8, We));
	}
}, [["__scopeId", "data-v-5c718757"]]);
//#endregion
//#region src/lib/iconNavigation.js
function Ze(e, t, n, r) {
	let i = e.filter((e) => !e.disabled);
	if (!i.length) return null;
	let a = Math.max(0, i.findIndex((e) => e.key === t));
	return n === "Home" ? i[0].key : n === "End" ? i.at(-1).key : n === (r === "vertical" ? "ArrowDown" : "ArrowRight") ? i[(a + 1) % i.length].key : n === (r === "vertical" ? "ArrowUp" : "ArrowLeft") ? i[(a + i.length - 1) % i.length].key : null;
}
function Qe(e, { width: t, start: n, end: r, gap: i, minimum: a, selected: o, maximum: s }) {
	if (!e.length) return [];
	let c = o - a, l = Math.max(a, (t - n - r - i * (e.length - 1) - c) / e.length), u = n;
	return e.map((e) => {
		let t = {
			x: u,
			y: n,
			width: Math.min(s, l + c * e)
		};
		return u += t.width + i, t;
	});
}
function $e(e, t) {
	return e.length ? t.reduce((t, n, r) => {
		let i = e[r];
		if (i) for (let e of [
			"x",
			"y",
			"width",
			"height"
		]) t[e] += (i[e] || 0) * n;
		return t;
	}, {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}) : null;
}
//#endregion
//#region src/lib/fitNavigationLabels.js
function et(e) {
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
//#region src/composables/useIconNavigation.js
function tt(e) {
	let t = O(null), n = O([]), r = O(0), a = O(!1), o = /* @__PURE__ */ new Map(), s = i(() => e.layout === "compact"), c = i(() => {
		if (!e.active) return e.items.map(() => 0);
		let t = e.selection?.length === e.items.length ? e.selection.map((e) => Number.isFinite(Number(e)) ? Math.max(0, Math.min(1, Number(e))) : 0) : e.items.map((t) => +(t.key === e.modelValue)), n = t.reduce((e, t) => e + t, 0);
		return n ? t.map((e) => e / n) : t;
	}), l = i(() => s.value ? Qe(c.value, {
		width: r.value,
		start: 4,
		end: 4,
		gap: 2,
		minimum: e.size,
		selected: e.selectedSize,
		maximum: e.maxSize
	}).map((t) => ({
		...t,
		height: e.height ?? e.size
	})) : n.value), u = i(() => {
		let t = $e(l.value, c.value);
		return {
			transform: `translate(${t?.x || 0}px, ${t?.y || 0}px)`,
			width: `${t?.width || 0}px`,
			height: `${t?.height || 0}px`,
			opacity: e.active && t?.width ? 1 : 0
		};
	});
	function d(t) {
		return {
			"--icon-navigation-selection": c.value[t] || 0,
			width: s.value ? `${l.value[t]?.width || e.size}px` : void 0
		};
	}
	let f, p, m = !1;
	function h(e, t) {
		let n = o.get(e);
		n !== t && (n && f?.unobserve(n), t ? (o.set(e, t), s.value || f?.observe(t)) : o.delete(e));
	}
	function g() {
		if (!t.value) return;
		if (s.value) {
			r.value = t.value.clientWidth;
			return;
		}
		e.layout === "stacked" && !e.contentSized && et(o.values());
		let i = e.items.map((e) => {
			let t = o.get(e.key);
			return t ? {
				x: t.offsetLeft,
				y: t.offsetTop,
				width: t.offsetWidth,
				height: t.offsetHeight
			} : null;
		});
		JSON.stringify(i) !== JSON.stringify(n.value) && (n.value = i);
	}
	function _(n) {
		let r = t.value;
		if (!r || !n) return;
		let i = e.orientation === "vertical", a = i ? n.offsetTop : n.offsetLeft, o = i ? n.offsetHeight : n.offsetWidth, s = i ? r.scrollTop : r.scrollLeft, c = i ? r.clientHeight : r.clientWidth, l = a < s ? a : a + o > s + c ? a + o - c : s;
		l !== s && r.scrollTo(i ? { top: l } : { left: l });
	}
	function y() {
		_(o.get(e.modelValue));
	}
	return C(() => {
		if (g(), y(), v(() => {
			m || (t.value.getBoundingClientRect(), a.value = !0);
		}), typeof ResizeObserver < "u" && (f = new ResizeObserver(g), f.observe(t.value), !s.value)) for (let e of o.values()) f.observe(e);
		p = document.fonts, p?.ready.then(() => {
			m || g();
		}), p?.addEventListener("loadingdone", g);
	}), B(() => [
		e.items,
		e.layout,
		e.orientation,
		e.size,
		e.height,
		e.selectedSize,
		e.maxSize,
		e.contentSized
	], async () => {
		await v(), g(), y();
	}, { deep: !0 }), B(() => e.modelValue, async () => {
		await v(), y();
	}), S(() => {
		m = !0, f?.disconnect(), p?.removeEventListener("loadingdone", g);
	}), {
		element: t,
		ready: a,
		buttons: o,
		indicatorStyle: u,
		itemStyle: d,
		setButton: h,
		measure: g,
		reveal: _,
		revealActive: y
	};
}
//#endregion
//#region src/components/IconNavigation.vue
var nt = ["aria-label"], rt = ["aria-orientation", "aria-label"], it = [
	"disabled",
	"title",
	"aria-label",
	"aria-current",
	"aria-pressed",
	"onClick",
	"onKeydown"
], at = {
	key: 0,
	class: "share-icon-navigation__icon"
}, ot = { class: "share-icon-navigation__label" }, st = /*#__PURE__*/ G({
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
		pill: {
			type: Boolean,
			default: !1
		},
		size: {
			type: Number,
			default: 56
		},
		height: {
			type: Number,
			default: null
		},
		radius: {
			type: [Number, String],
			default: null
		},
		active: {
			type: Boolean,
			default: !0
		},
		animate: {
			type: Boolean,
			default: !0
		},
		layout: {
			type: String,
			default: "stacked",
			validator: (e) => [
				"stacked",
				"inline",
				"compact"
			].includes(e)
		},
		iconSize: {
			type: Number,
			default: 24
		},
		labelSize: {
			type: [Number, String],
			default: null
		},
		selectedSize: {
			type: Number,
			default: 84
		},
		maxSize: {
			type: Number,
			default: 148
		},
		selection: {
			type: Array,
			default: null
		},
		contentSized: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue", "select"],
	setup(t, { expose: n, emit: r }) {
		let i = t, l = r, { element: u, ready: f, buttons: p, indicatorStyle: m, itemStyle: h, setButton: g, measure: v, reveal: b, revealActive: S } = tt(i);
		function C(e) {
			e.disabled || (e.key !== i.modelValue && l("update:modelValue", e.key), l("select", e.key));
		}
		function w(e, t) {
			if (e.altKey || e.ctrlKey || e.metaKey) return;
			let n = Ze(i.items, t, e.key, i.orientation);
			n != null && (e.preventDefault(), e.stopPropagation(), p.get(n)?.focus({ preventScroll: !0 }), b(p.get(n)));
		}
		return n({
			element: u,
			updateIndicator: v,
			revealActive: S
		}), (n, r) => (T(), s("nav", {
			ref_key: "element",
			ref: u,
			class: y(["share-icon-navigation", [
				`share-icon-navigation--${t.orientation}`,
				`share-icon-navigation--${t.layout}`,
				{
					"share-icon-navigation--instant": !t.animate || !P(f),
					"share-icon-navigation--pill": t.pill,
					"share-icon-navigation--content": t.contentSized && t.layout === "stacked"
				}
			]]),
			style: x({
				"--icon-navigation-size": `${t.size}px`,
				"--icon-navigation-height": `${t.height ?? t.size}px`,
				"--icon-navigation-icon-size": `${t.iconSize}px`,
				"--icon-navigation-label-size": typeof t.labelSize == "number" ? `${t.labelSize}px` : t.labelSize || void 0,
				"--icon-navigation-radius": typeof t.radius == "number" ? `${t.radius}px` : t.radius || void 0
			}),
			"aria-label": t.label
		}, [c("span", {
			class: "share-icon-navigation__indicator",
			style: x(P(m)),
			"aria-hidden": "true"
		}, null, 4), (T(!0), s(e, null, k(t.items, (r, i) => (T(), s(e, { key: r.key }, [r.divider ? (T(), s("span", {
			key: 0,
			class: "share-icon-navigation__divider",
			role: "separator",
			"aria-orientation": t.orientation === "vertical" ? "horizontal" : "vertical",
			"aria-label": r.dividerLabel
		}, null, 8, rt)) : o("", !0), c("button", _({
			ref_for: !0,
			ref: (e) => P(g)(r.key, e)
		}, { ref_for: !0 }, r.attrs, {
			type: "button",
			class: ["share-icon-navigation__item", {
				"share-icon-navigation__item--selected": t.active && t.modelValue === r.key,
				"share-icon-navigation__item--text": !n.$slots.icon && !r.icon
			}],
			style: P(h)(i),
			disabled: r.disabled,
			title: r.title || r.label,
			"aria-label": r.ariaLabel || r.label,
			"aria-current": t.active && t.modelValue === r.key ? "page" : void 0,
			"aria-pressed": t.active && t.modelValue === r.key,
			onClick: (e) => C(r),
			onKeydown: (e) => w(e, r.key)
		}), [
			n.$slots.icon || r.icon ? (T(), s("span", at, [A(n.$slots, "icon", { item: r }, () => [r.icon ? (T(), a(j(r.icon), {
				key: 0,
				size: t.iconSize,
				"aria-hidden": "true"
			}, null, 8, ["size"])) : o("", !0)], !0)])) : o("", !0),
			c("span", ot, [A(n.$slots, "label", { item: r }, () => [d(N(r.shortLabel || r.label), 1)], !0)]),
			A(n.$slots, "decoration", { item: r }, void 0, !0)
		], 16, it)], 64))), 128))], 14, nt));
	}
}, [["__scopeId", "data-v-4adaf334"]]), ct = ["aria-label"], lt = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], ut = ["src"], dt = { class: "share-sliding-tabs__title" }, ft = /*#__PURE__*/ G({
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
			validator: (e) => [
				"underline",
				"chips",
				"plain"
			].includes(e)
		}
	},
	emits: ["update:modelValue"],
	setup(t, { expose: n, emit: r }) {
		let a = t, l = r, u = O(null), d = O([]), f = O({
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
			n !== e && (n && E?.unobserve(n), d.value[t] = e, e && E?.observe(e));
		}
		function h(e) {
			let t = a.tabs.find((t) => t.key === e);
			t && !t.disabled && e !== a.modelValue && l("update:modelValue", e);
		}
		async function g(e) {
			let t = a.tabs[e];
			!t || t.disabled || (h(t.key), await v(), d.value[e]?.focus());
		}
		function _(e, t) {
			let n = a.tabs.map((e, t) => ({
				tab: e,
				index: t
			})).filter(({ tab: e }) => !e.disabled);
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			e.key === "ArrowRight" && (i = n[(r + 1) % n.length]), e.key === "ArrowLeft" && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), g(i.index));
		}
		function b() {
			let e = u.value, t = d.value[a.tabs.findIndex((e) => e.key === a.modelValue)];
			if (!e || !t) return;
			let n = t.offsetLeft, r = n + t.offsetWidth;
			(n < e.scrollLeft || r > e.scrollLeft + e.clientWidth) && e.scrollTo({
				left: Math.max(0, n - (e.clientWidth - t.offsetWidth) / 2),
				behavior: globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
			});
		}
		function w() {
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
		let E = null;
		return C(() => {
			v(() => {
				w(), b();
			}), typeof ResizeObserver < "u" && u.value && (E = new ResizeObserver(w), E.observe(u.value), d.value.forEach((e) => e && E.observe(e)));
		}), S(() => E?.disconnect()), B(() => a.modelValue, () => v(() => {
			w(), b();
		})), B(() => a.variant, () => v(() => {
			w(), b();
		})), B(() => a.tabs, () => v(() => {
			w(), b();
		}), { deep: !0 }), n({ updateUnderline: w }), (n, r) => (T(), s("nav", {
			ref_key: "rootElement",
			ref: u,
			class: y(["share-sliding-tabs", `share-sliding-tabs--${t.variant}`]),
			role: "tablist",
			"aria-label": t.ariaLabel || void 0,
			style: x({ "--sliding-tab-max-width": t.maxTabWidth ? `${t.maxTabWidth}px` : void 0 })
		}, [(T(!0), s(e, null, k(t.tabs, (e, r) => (T(), s("div", {
			key: String(e.key),
			class: y(["share-sliding-tabs__item", { "share-sliding-tabs__item--active": t.modelValue === e.key }]),
			role: "presentation"
		}, [c("button", {
			id: e.id,
			ref_for: !0,
			ref: (e) => m(e, r),
			class: y(["share-sliding-tabs__tab", { "share-sliding-tabs__tab--active": t.modelValue === e.key }]),
			type: "button",
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			"aria-controls": e.panelId,
			tabindex: t.modelValue === e.key ? 0 : -1,
			disabled: e.disabled,
			onClick: (t) => h(e.key),
			onKeydown: (e) => _(e, r)
		}, [
			A(n.$slots, "decoration", {
				tab: e,
				active: t.modelValue === e.key
			}, void 0, !0),
			A(n.$slots, "icon", { tab: e }, () => [e.icon || e.svg ? (T(), s("img", {
				key: 0,
				class: "share-sliding-tabs__icon",
				src: e.icon || e.svg,
				alt: "",
				"aria-hidden": "true"
			}, null, 8, ut)) : o("", !0)], !0),
			c("span", dt, N(e.title), 1)
		], 42, lt), A(n.$slots, "tab-actions", { tab: e }, void 0, !0)], 2))), 128)), t.variant === "underline" ? (T(), s("span", {
			key: 0,
			class: "share-sliding-tabs__underline",
			style: x(p.value),
			"aria-hidden": "true"
		}, null, 4)) : o("", !0)], 14, ct));
	}
}, [["__scopeId", "data-v-caccf49f"]]), pt = [
	"aria-checked",
	"aria-label",
	"disabled"
], mt = {
	key: 0,
	class: "share-toggle-switch__text"
}, ht = /*#__PURE__*/ G({
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
		},
		block: {
			type: Boolean,
			default: !1
		},
		surface: {
			type: String,
			default: "base",
			validator: (e) => ["base", "raised"].includes(e)
		},
		trackPlacement: {
			type: String,
			default: "start",
			validator: (e) => ["start", "end"].includes(e)
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i() {
			n.disabled || r("update:modelValue", !n.modelValue);
		}
		return (t, n) => (T(), s("button", {
			class: y(["share-toggle-switch", {
				"share-toggle-switch--active": e.modelValue,
				"share-toggle-switch--block": e.block,
				"share-toggle-switch--raised": e.surface === "raised",
				"share-toggle-switch--trailing-track": e.trackPlacement === "end"
			}]),
			type: "button",
			role: "switch",
			"aria-checked": e.modelValue,
			"aria-label": e.ariaLabel || e.label || void 0,
			disabled: e.disabled,
			onClick: i
		}, [n[0] ||= c("span", {
			class: "share-toggle-switch__track",
			"aria-hidden": "true"
		}, [c("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (T(), s("span", mt, [A(t.$slots, "default", {}, () => [d(N(e.label), 1)], !0)])) : o("", !0)], 10, pt));
	}
}, [["__scopeId", "data-v-a542bb63"]]), gt = [], _t = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", vt = 0, yt = "";
function bt(e = Symbol("share-overlay")) {
	return gt.push(e), e;
}
function xt(e) {
	let t = gt.lastIndexOf(e);
	t >= 0 && gt.splice(t, 1);
}
function St(e) {
	return gt.at(-1) === e;
}
function Ct(e) {
	e && ([...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")].find((e) => e.getClientRects().length > 0) || e).focus?.({ preventScroll: !0 });
}
function wt(e, t) {
	if (e.key !== "Tab" || !t) return;
	let n = [...t.querySelectorAll(_t)].filter((e) => e.getClientRects().length > 0);
	if (!n.length) {
		e.preventDefault(), t.focus?.({ preventScroll: !0 });
		return;
	}
	let r = n[0], i = n.at(-1);
	e.shiftKey && (document.activeElement === r || !t.contains(document.activeElement)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || !t.contains(document.activeElement)) && (e.preventDefault(), r.focus());
}
function Tt(e) {
	e instanceof HTMLElement && e.isConnected && e.focus({ preventScroll: !0 });
}
function Et() {
	if (typeof document > "u") return () => {};
	vt === 0 && (yt = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden"), vt += 1;
	let e = !1;
	return () => {
		e || (e = !0, vt = Math.max(0, vt - 1), vt === 0 && (document.documentElement.style.overflow = yt));
	};
}
var Dt = /* @__PURE__ */ new WeakMap();
function Ot(e, { blur: t = "8px", duration: n = "300ms" } = {}) {
	if (!e) return () => {};
	let r = Dt.get(e);
	r || (r = {
		count: 0,
		filter: e.style.filter,
		transition: e.style.transition
	}, Dt.set(e, r)), r.count += 1, e.style.transition = `filter ${n} ease`, e.style.filter = K(t);
	let i = !1;
	return () => {
		i || (i = !0, r.count = Math.max(0, r.count - 1), !(r.count > 0) && (e.style.filter = r.filter, e.style.transition = r.transition, Dt.delete(e)));
	};
}
//#endregion
//#region src/internal/floatingState.js
var kt = [], At = null, jt = null;
function Mt(e) {
	let t = kt.lastIndexOf(e);
	t >= 0 && kt.splice(t, 1), xt(e);
}
function Nt(e) {
	Mt(e), kt.push(e), bt(e);
}
function Pt(e) {
	Mt(e);
}
function Ft(e) {
	return kt.at(-1) === e && St(e);
}
function It(e, t) {
	At?.token !== e && At?.close(), At = {
		token: e,
		close: t
	}, Nt(e);
}
function Lt(e) {
	At?.token === e && (At = null), Pt(e);
}
function Rt(e, t) {
	jt?.token !== e && jt?.close(), jt = {
		token: e,
		close: t
	};
}
function zt(e) {
	jt?.token === e && (jt = null);
}
function Bt() {
	if (!jt) return !1;
	let e = jt;
	return jt = null, e.close(), !0;
}
function Vt(e, t) {
	e.inert = !t, e.setAttribute("aria-hidden", String(!t)), e.style.pointerEvents = t ? "" : "none";
}
//#endregion
//#region src/lib/actionMenuPlacement.js
var Ht = 8, Ut = 6;
function Wt(e, t) {
	return !e || !t ? !1 : e === t.ownerDocument || e === t.ownerDocument?.defaultView || !!e.contains?.(t);
}
function Gt(e, t, n) {
	return Math.min(Math.max(e, t), Math.max(t, n));
}
function Kt({ triggerRect: e, popoverWidth: t, popoverHeight: n, viewportWidth: r, viewportHeight: i, viewportLeft: a = 0, viewportTop: o = 0, originX: s, originY: c, margin: l = 8, gap: u = 6 }) {
	let d = a + l, f = o + l, p = a + r - l, m = o + i - l, h = Math.min(t, Math.max(0, p - d)), g = Gt(e.right - h, d, p - h), _ = Math.max(0, m - e.bottom - u), v = Math.max(0, e.top - u - f), y = _ < n && v > _, b = y ? v : _, x = Math.min(n, b), S = Gt(y ? e.top - u - x : e.bottom + u, f, m - x);
	return {
		left: g,
		top: S,
		maxHeight: b,
		opensAbove: y,
		originX: Gt(s - g, 0, h),
		originY: Gt(c - S, 0, x)
	};
}
var qt = 8, Jt = 6, Yt = Kt;
//#endregion
//#region src/lib/actionMenuSizing.js
function Xt(e) {
	let t = [...e.childNodes].filter((e) => e.nodeType === Node.TEXT_NODE ? e.textContent.trim().length > 0 : e.nodeType === Node.ELEMENT_NODE && !e.hidden && getComputedStyle(e).display !== "none");
	return t.length > 0 && t.every((e) => e.nodeType === Node.ELEMENT_NODE && e.getAttribute("data-action-menu-size") === "content");
}
function Zt({ requestedWidth: e, expanded: t = !1, contentSized: n = !1, availableWidth: r }) {
	let i = n && e == null;
	return {
		contentSized: i,
		minimumWidth: i ? 0 : Math.min(e ?? (t ? 360 : 200), r),
		maximumWidth: i ? r : Math.min(e ?? (t ? 360 : 280), r)
	};
}
//#endregion
//#region src/components/floating/ActionMenu.vue
var Qt = [
	"title",
	"aria-label",
	"aria-expanded",
	"disabled"
], $t = ["data-share-popover-related", "aria-label"], en = {
	key: 0,
	class: "ram-heading"
}, tn = /*#__PURE__*/ G({
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
		heading: {
			type: String,
			default: ""
		},
		width: {
			type: Number,
			default: null,
			validator: (e) => Number.isFinite(e) && e > 0
		},
		followAnchor: {
			type: Boolean,
			default: !1
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
		let l = r, u = Symbol("action-menu"), d = O(null), p = O(null), m = O(null), h = O(!1), g = null, y = null, b = null, C = null;
		function w() {
			return l.anchor ?? d.value;
		}
		function E(e) {
			let t = w();
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
		function D() {
			let e = window.visualViewport;
			return {
				viewportWidth: e?.width || window.innerWidth,
				viewportHeight: e?.height || window.innerHeight,
				viewportLeft: e?.offsetLeft || 0,
				viewportTop: e?.offsetTop || 0
			};
		}
		function k() {
			y = null;
			let e = w(), t = p.value;
			if (!h.value || !e || !t) return;
			let n = D(), r = Math.max(0, n.viewportWidth - 16), i = !!t.querySelector(".ras-inline"), { minimumWidth: a, maximumWidth: o, contentSized: s } = Zt({
				requestedWidth: l.width,
				expanded: i,
				availableWidth: r,
				contentSized: Xt(t)
			});
			t.toggleAttribute("data-share-menu-content-sized", s), t.style.minWidth = `${a}px`, t.style.maxWidth = `${o}px`;
			let c = e.getBoundingClientRect(), u = t.offsetWidth, d = Kt({
				triggerRect: c,
				popoverWidth: u,
				popoverHeight: t.scrollHeight + t.offsetHeight - t.clientHeight,
				originX: g?.x ?? c.left + c.width / 2,
				originY: g?.y ?? c.bottom,
				...n
			});
			m.value = {
				position: "fixed",
				top: `${d.top}px`,
				left: `${d.left}px`,
				minWidth: `${a}px`,
				maxWidth: `${o}px`,
				maxHeight: `${d.maxHeight}px`,
				visibility: "visible",
				"--share-popover-origin-x": `${d.originX}px`,
				"--share-popover-origin-y": `${d.originY}px`,
				"--share-popover-enter-y": d.opensAbove ? "5px" : "-5px"
			};
		}
		function j() {
			y != null && cancelAnimationFrame(y), y = requestAnimationFrame(k);
		}
		B(() => l.width, j);
		function M() {
			document.addEventListener("pointerdown", z, !0), document.addEventListener("keydown", U), window.addEventListener("resize", j), window.addEventListener("scroll", H, !0), window.visualViewport?.addEventListener("resize", j), window.visualViewport?.addEventListener("scroll", j);
		}
		function F() {
			b?.disconnect(), C?.disconnect(), b = null, C = null, document.removeEventListener("pointerdown", z, !0), document.removeEventListener("keydown", U), window.removeEventListener("resize", j), window.removeEventListener("scroll", H, !0), window.visualViewport?.removeEventListener("resize", j), window.visualViewport?.removeEventListener("scroll", j);
		}
		function I(e) {
			l.disabled || h.value || (m.value = E(e), It(u, L), h.value = !0, M(), v(() => {
				!h.value || !p.value || (b = new ResizeObserver(j), b.observe(p.value), C = new MutationObserver(j), C.observe(p.value, {
					childList: !0,
					subtree: !0,
					attributes: !0,
					attributeFilter: ["data-action-menu-size", "hidden"]
				}), j());
			}));
		}
		function L() {
			h.value && (Bt(), h.value = !1, Lt(u), y != null && cancelAnimationFrame(y), y = null, F());
		}
		function R(e) {
			l.disabled || (h.value ? L() : I(e));
		}
		function z(e) {
			e.target?.closest?.(".ram-popover, [data-share-popover-related]") || d.value?.contains?.(e.target) || w()?.contains?.(e.target) || L();
		}
		function H(e) {
			if (p.value?.contains?.(e.target) || e.target?.closest?.("[data-share-popover-related]")) return;
			let t = w();
			if (Wt(e.target, t)) {
				if (l.followAnchor && e.target instanceof Element && e.target !== document.scrollingElement) {
					let n = t.getBoundingClientRect(), r = e.target.getBoundingClientRect();
					if (n.right > r.left && n.left < r.right && n.bottom > r.top && n.top < r.bottom) {
						j();
						return;
					}
				}
				L();
			}
		}
		function U(e) {
			e.key !== "Escape" || e.defaultPrevented || !Ft(u) || (e.preventDefault(), !Bt() && L());
		}
		return S(L), i({
			open: I,
			close: L,
			toggle: R
		}), (i, l) => (T(), s(e, null, [i.$slots.trigger ? (T(), s("div", _({ key: 0 }, r.triggerAttrs, {
			ref_key: "triggerEl",
			ref: d,
			class: ["ram-custom-trigger", { "ram-custom-trigger--block": r.block }],
			onClick: W(R, ["stop"])
		}), [A(i.$slots, "trigger", { open: h.value }, void 0, !0)], 16)) : (T(), s("button", _({ key: 1 }, r.triggerAttrs, {
			ref_key: "triggerEl",
			ref: d,
			type: "button",
			class: "ram-trigger",
			title: r.title,
			"aria-label": r.title,
			"aria-expanded": h.value,
			"aria-haspopup": "menu",
			disabled: r.disabled,
			onClick: W(R, ["stop"])
		}), [...l[4] ||= [c("svg", {
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
		], -1)]], 16, Qt)), (T(), a(t, { to: "body" }, [f(n, {
			name: "share-popover-action",
			onBeforeEnter: l[2] ||= (e) => P(Vt)(e, !0),
			onBeforeLeave: l[3] ||= (e) => P(Vt)(e, !1)
		}, {
			default: V(() => [h.value ? (T(), s("div", {
				key: 0,
				ref_key: "popoverEl",
				ref: p,
				class: "ram-popover",
				"data-share-popover-related": r.related ? "" : void 0,
				style: x(m.value),
				role: "menu",
				"aria-label": r.title,
				onClick: l[0] ||= W(() => {}, ["stop"]),
				onPointerdown: l[1] ||= W(() => {}, ["stop"])
			}, [r.heading ? (T(), s("div", en, N(r.heading), 1)) : o("", !0), A(i.$slots, "default", { close: L }, void 0, !0)], 44, $t)) : o("", !0)]),
			_: 3
		})]))], 64));
	}
}, [["__scopeId", "data-v-a9c940c3"]]), nn = ["aria-haspopup", "aria-expanded"], rn = {
	class: "ram-item__icon",
	"aria-hidden": "true"
}, an = {
	key: 1,
	width: "17",
	height: "17",
	viewBox: "0 0 17 17",
	fill: "none"
}, on = { class: "ram-item__content" }, sn = {
	key: 0,
	class: "ram-item__suffix"
}, cn = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("button", {
			type: "button",
			class: y(["ram-item", e.tone === "default" ? null : `ram-item--${e.tone}`]),
			role: "menuitem",
			"aria-haspopup": e.submenu ? "menu" : void 0,
			"aria-expanded": e.submenu ? e.submenuOpen : void 0
		}, [
			c("span", rn, [A(t.$slots, "icon", {}, () => [e.icon ? (T(), a(j(e.icon), {
				key: 0,
				size: 17,
				"stroke-width": 1.9
			})) : (T(), s("svg", an, [...n[0] ||= [
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
			c("span", on, [A(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.suffix || e.submenu ? (T(), s("span", sn, [A(t.$slots, "suffix", {}, void 0, !0), e.submenu ? (T(), s("svg", {
				key: 0,
				class: y(["ram-item__submenu-chevron", { "ram-item__submenu-chevron--open": e.submenuOpen }]),
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
		], 10, nn));
	}
}, [["__scopeId", "data-v-d60f1786"]]);
//#endregion
//#region src/composables/useMediaQuery.js
function ln(e) {
	let t = O(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return C(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), S(() => n?.removeEventListener?.("change", r)), t;
}
function un(e = 768) {
	return ln(`(max-width: ${e}px)`);
}
//#endregion
//#region src/components/floating/BasePopover.vue
var dn = [
	"id",
	"role",
	"aria-label",
	"data-share-popover-related"
], fn = /*#__PURE__*/ G({
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
		let c = e, l = r, u = i(() => c.transition ? c.transition : c.transitionPreset === "action-menu" ? "share-popover-action" : ""), d = Symbol("base-popover"), p = O(null), m = O(null), h = null;
		function g() {
			let e = c.anchor;
			return e ? typeof e.getBoundingClientRect == "function" ? e : e.value ?? e : null;
		}
		function _(e) {
			return typeof e == "number" ? `${e}px` : e;
		}
		function b() {
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
			let t = e.getBoundingClientRect(), n = b(), r = typeof c.minWidth == "number" ? c.minWidth : 0, i = Math.max(r, p.value?.offsetWidth || 0), a = p.value?.offsetHeight || 0, o = n.left + 8, s = n.left + n.width - 8, l = n.top + 8, u = n.top + n.height - 8, d = {
				position: "fixed",
				minWidth: _(c.minWidth),
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
		function D(e) {
			p.value?.contains(e.target) || E(e.target) || g()?.contains?.(e.target) || w();
		}
		function k(e) {
			if (!c.closeOnScroll) {
				C();
				return;
			}
			p.value?.contains(e.target) || E(e.target) || w();
		}
		function j() {
			c.closeOnResize ? w() : C();
		}
		function M(e) {
			e.key !== "Escape" || e.defaultPrevented || !Ft(d) || (e.preventDefault(), !Bt() && w());
		}
		function N() {
			typeof ResizeObserver < "u" && p.value && (h = new ResizeObserver(C), h.observe(p.value)), Nt(d), document.addEventListener("pointerdown", D, !0), document.addEventListener("keydown", M), window.addEventListener("resize", j), window.addEventListener("scroll", k, !0), window.visualViewport?.addEventListener("resize", j), window.visualViewport?.addEventListener("scroll", C);
		}
		function F() {
			h?.disconnect(), h = null, Pt(d), document.removeEventListener("pointerdown", D, !0), document.removeEventListener("keydown", M), window.removeEventListener("resize", j), window.removeEventListener("scroll", k, !0), window.visualViewport?.removeEventListener("resize", j), window.visualViewport?.removeEventListener("scroll", C);
		}
		return B(() => c.open, async (e) => {
			typeof window > "u" || (F(), e && (C(), await v(), c.open && (C(), N())));
		}, { immediate: !0 }), B(() => [
			c.anchor,
			c.placement,
			c.offset,
			c.minWidth
		], () => {
			c.open && v(C);
		}), S(F), (r, i) => (T(), a(t, { to: "body" }, [f(n, {
			name: u.value,
			onBeforeEnter: i[2] ||= (e) => P(Vt)(e, !0),
			onBeforeLeave: i[3] ||= (e) => P(Vt)(e, !1),
			appear: !e.transition && e.transitionPreset === "action-menu"
		}, {
			default: V(() => [e.open ? (T(), s("div", {
				key: 0,
				id: e.id || void 0,
				ref_key: "popoverEl",
				ref: p,
				class: y([
					"share-popover",
					"base-popover",
					e.popoverClass
				]),
				style: x(m.value),
				role: e.role || void 0,
				"aria-label": e.ariaLabel || void 0,
				"data-share-popover-related": e.related ? "" : void 0,
				onClick: i[0] ||= W(() => {}, ["stop"]),
				onPointerdown: i[1] ||= W(() => {}, ["stop"])
			}, [A(r.$slots, "default", { close: w }, void 0, !0)], 46, dn)) : o("", !0)]),
			_: 3
		}, 8, ["name", "appear"])]));
	}
}, [["__scopeId", "data-v-1a5c96fa"]]), pn = { class: "ras-root" }, mn = { class: "ras-panel" }, hn = {
	key: 0,
	class: "ras-label"
}, gn = { class: "ras-panel ras-panel--popover" }, _n = {
	key: 0,
	class: "ras-label"
}, vn = /*#__PURE__*/ G({
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
		let r = e, i = Symbol("action-submenu"), l = O(null), u = un(r.mobileBreakpoint), d = O(!1);
		function p() {
			r.disabled || d.value || (Rt(i, h), d.value = !0);
		}
		function m() {
			r.disabled || (d.value ? h() : p());
		}
		function h() {
			d.value && (d.value = !1, zt(i));
		}
		function g(e) {
			e || h();
		}
		return S(h), t({
			open: p,
			close: h,
			toggle: m
		}), (t, r) => (T(), s("div", pn, [
			c("div", {
				ref_key: "triggerEl",
				ref: l,
				class: "ras-trigger",
				onClick: W(m, ["stop"])
			}, [A(t.$slots, "trigger", {
				open: d.value,
				toggle: m
			}, void 0, !0)], 512),
			f(n, {
				name: "ras-inline",
				onBeforeEnter: r[2] ||= (e) => P(Vt)(e, !0),
				onBeforeLeave: r[3] ||= (e) => P(Vt)(e, !1)
			}, {
				default: V(() => [P(u) && d.value ? (T(), s("div", {
					key: 0,
					class: "ras-inline",
					"data-share-popover-related": "",
					onClick: r[0] ||= W(() => {}, ["stop"]),
					onPointerdown: r[1] ||= W(() => {}, ["stop"])
				}, [c("div", mn, [e.label ? (T(), s("div", hn, N(e.label), 1)) : o("", !0), A(t.$slots, "default", { close: h }, void 0, !0)])], 32)) : o("", !0)]),
				_: 3
			}),
			P(u) ? o("", !0) : (T(), a(fn, {
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
				default: V(() => [c("div", gn, [e.label ? (T(), s("div", _n, N(e.label), 1)) : o("", !0), A(t.$slots, "default", { close: h }, void 0, !0)])]),
				_: 3
			}, 8, [
				"open",
				"anchor",
				"min-width"
			]))
		]));
	}
}, [["__scopeId", "data-v-4d638ec2"]]), yn = [
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
function bn(e) {
	return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(String(e || "").trim());
}
function xn(e = yn) {
	return e[Math.floor(Math.random() * e.length)];
}
//#endregion
//#region src/components/floating/ColorPresetPicker.vue
var Sn = ["aria-label"], Cn = [
	"aria-label",
	"title",
	"aria-expanded"
], wn = {
	class: "cpp-button-icon",
	"aria-hidden": "true"
}, Tn = {
	class: "cpp-button-color",
	"aria-hidden": "true"
}, En = ["aria-label", "aria-expanded"], Dn = { class: "cpp-body" }, On = "#888888", kn = /*#__PURE__*/ G({
	__name: "ColorPresetPicker",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		colors: {
			type: Array,
			default: () => yn
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
		let n = e, r = t, a = O(null), o = O(!1), l = O("cpppop-cancel"), d = O(n.modelValue || ""), m = i(() => /^#[0-9a-f]{6}$/i.test(n.modelValue || "") ? n.modelValue : On), g = i(() => !!d.value && !bn(d.value));
		function _(e) {
			return String(n.modelValue || "").toLowerCase() === String(e).toLowerCase();
		}
		function v() {
			l.value = "cpppop-cancel", o.value = !0;
		}
		function b(e) {
			l.value = e === "pick" ? "cpppop-pick" : "cpppop-cancel", o.value = !1;
		}
		function S() {
			o.value ? b("cancel") : v();
		}
		function C(e) {
			e || b("cancel");
		}
		function w(e) {
			d.value = e, r("update:modelValue", e);
		}
		function E() {
			let e = d.value.trim();
			if (!bn(e)) {
				r("invalid", e);
				return;
			}
			w(e);
		}
		function D(e) {
			w(e), b("pick");
		}
		function k() {
			d.value = "", r("update:modelValue", n.clearValue), b("pick");
		}
		B(() => n.modelValue, (e) => {
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
					onClick: () => D(e)
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
						onInput: (e) => w(e.target.value)
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
		return (t, n) => e.inline ? (T(), s("div", {
			key: 0,
			class: "cpp-body cpp-body--inline",
			"aria-label": e.ariaLabel
		}, [f(P(j))], 8, Sn)) : (T(), s("span", {
			key: 1,
			ref_key: "anchorEl",
			ref: a,
			class: "cpp-host"
		}, [e.variant === "button" ? (T(), s("button", {
			key: 0,
			type: "button",
			class: "cpp-button",
			"aria-label": e.ariaLabel,
			title: e.ariaLabel,
			"aria-expanded": o.value,
			"aria-haspopup": "dialog",
			onClick: S
		}, [c("span", wn, [A(t.$slots, "icon", {}, () => [n[0] ||= u("<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-659a3b96><path d=\"M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-3.7 1.6 1.6 0 0 1 .8-3H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3Z\" data-v-659a3b96></path><circle cx=\"7.5\" cy=\"10\" r=\".7\" data-v-659a3b96></circle><circle cx=\"11\" cy=\"7\" r=\".7\" data-v-659a3b96></circle><circle cx=\"15.5\" cy=\"8\" r=\".7\" data-v-659a3b96></circle><circle cx=\"6.5\" cy=\"14\" r=\".7\" data-v-659a3b96></circle></svg>", 1)], !0)]), c("span", Tn, [c("span", { style: x({ background: e.modelValue || "var(--bg)" }) }, null, 4)])], 8, Cn)) : A(t.$slots, "trigger", {
			toggle: S,
			open: o.value,
			value: e.modelValue
		}, () => [c("button", {
			type: "button",
			class: y(["cpp-swatch", { "cpp-swatch--empty": !e.modelValue }]),
			style: x(e.modelValue ? { background: e.modelValue } : null),
			"aria-label": e.ariaLabel,
			"aria-expanded": o.value,
			"aria-haspopup": "dialog",
			onClick: S
		}, null, 14, En)], !0, 1), f(fn, {
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
			default: V(() => [c("div", Dn, [f(P(j))])]),
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
}, [["__scopeId", "data-v-659a3b96"]]), An = [
	"aria-label",
	"aria-expanded",
	"aria-activedescendant",
	"disabled"
], jn = ["aria-label"], Mn = [
	"placeholder",
	"aria-label",
	"aria-activedescendant"
], Nn = [
	"id",
	"aria-selected",
	"disabled",
	"onMouseenter",
	"onClick"
], Pn = {
	key: 1,
	class: "vs-empty"
}, Fn = /*#__PURE__*/ G({
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
		let d = `share-value-select-${a}`, f = O(null), p = O(null), m = O(null), h = O(!1), g = O(""), _ = O(-1), b = i(() => l.options.map((e, t) => e && typeof e == "object" ? {
			value: e.value,
			label: String(e.label ?? e.value ?? ""),
			disabled: !!e.disabled,
			key: e.key ?? `${String(e.value)}-${t}`
		} : {
			value: e,
			label: String(e ?? ""),
			disabled: !1,
			key: `${String(e)}-${t}`
		})), x = i(() => b.value.find((e) => E(e.value))?.label ?? ""), C = i(() => {
			let e = g.value.trim().toLocaleLowerCase();
			return e ? b.value.filter((t) => t.label.toLocaleLowerCase().includes(e)) : b.value;
		}), w = i(() => l.searchable && b.value.length >= l.searchThreshold);
		function E(e) {
			return String(e) === String(l.modelValue);
		}
		function D(e) {
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
		function j() {
			let e = C.value.findIndex((e) => E(e.value) && !e.disabled);
			return e >= 0 ? e : A();
		}
		function M(e) {
			C.value[e]?.disabled || (_.value = e);
		}
		function P(e) {
			let t = C.value;
			if (!t.length) return;
			let n = _.value < 0 ? e > 0 ? 0 : t.length - 1 : (_.value + e + t.length) % t.length;
			_.value = A(n, e), v(() => document.getElementById(D(_.value))?.scrollIntoView?.({ block: "nearest" }));
		}
		function F() {
			l.disabled || h.value || (h.value = !0, _.value = j(), document.addEventListener("pointerdown", U, !0), u("open"), w.value && v(() => m.value?.focus()));
		}
		function I({ restoreFocus: e = !1 } = {}) {
			h.value && (h.value = !1, g.value = "", _.value = -1, document.removeEventListener("pointerdown", U, !0), u("close"), e && v(() => p.value?.focus()));
		}
		function L() {
			h.value ? I() : F();
		}
		function z(e) {
			!e || e.disabled || (u("update:modelValue", e.value), I({ restoreFocus: !0 }));
		}
		function V() {
			z(C.value[_.value]);
		}
		function U(e) {
			f.value?.contains(e.target) || I();
		}
		function W(e) {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault(), h.value ? P(e.key === "ArrowDown" ? 1 : -1) : F();
				return;
			}
			if (e.key === "Home" && h.value) {
				e.preventDefault(), _.value = A();
				return;
			}
			if (e.key === "End" && h.value) {
				e.preventDefault(), _.value = A(C.value.length - 1, -1);
				return;
			}
			if ((e.key === "Enter" || e.key === " ") && h.value) {
				e.preventDefault(), V();
				return;
			}
			e.key === "Escape" && h.value && (e.preventDefault(), I({ restoreFocus: !0 }));
		}
		function G(e) {
			e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), P(e.key === "ArrowDown" ? 1 : -1)) : e.key === "Home" ? (e.preventDefault(), _.value = A()) : e.key === "End" ? (e.preventDefault(), _.value = A(C.value.length - 1, -1)) : e.key === "Enter" ? (e.preventDefault(), V()) : e.key === "Escape" && (e.preventDefault(), I({ restoreFocus: !0 }));
		}
		return B(C, () => {
			_.value = j();
		}), B(() => l.disabled, (e) => {
			e && I();
		}), S(() => {
			document.removeEventListener("pointerdown", U, !0);
		}), n({
			open: F,
			close: I,
			toggle: L
		}), (n, r) => (T(), s("div", {
			ref_key: "rootEl",
			ref: f,
			class: y(["vs", { "vs--disabled": t.disabled }])
		}, [c("button", {
			ref_key: "triggerEl",
			ref: p,
			class: y(["vs-button", { empty: !x.value }]),
			type: "button",
			role: "combobox",
			"aria-haspopup": "listbox",
			"aria-label": t.ariaLabel || void 0,
			"aria-controls": d,
			"aria-expanded": h.value,
			"aria-activedescendant": h.value && _.value >= 0 ? D(_.value) : void 0,
			disabled: t.disabled,
			onClick: L,
			onKeydown: W
		}, [c("span", null, N(x.value || t.placeholder), 1), r[1] ||= c("span", {
			class: "vs-arrow",
			"aria-hidden": "true"
		}, "▾", -1)], 42, An), h.value ? (T(), s("div", {
			key: 0,
			id: d,
			class: y(["vs-drop", { "vs-drop-up": t.dropUp }]),
			role: "listbox",
			"aria-label": t.ariaLabel || void 0
		}, [
			w.value ? H((T(), s("input", {
				key: 0,
				ref_key: "searchEl",
				ref: m,
				"onUpdate:modelValue": r[0] ||= (e) => g.value = e,
				class: "vs-search",
				type: "search",
				placeholder: t.searchPlaceholder,
				"aria-label": t.searchAriaLabel || t.searchPlaceholder,
				"aria-controls": d,
				"aria-activedescendant": _.value >= 0 ? D(_.value) : void 0,
				autocomplete: "off",
				onKeydown: G
			}, null, 40, Mn)), [[R, g.value]]) : o("", !0),
			(T(!0), s(e, null, k(C.value, (e, t) => (T(), s("button", {
				id: D(t),
				key: e.key,
				class: y(["vs-option", { "vs-option--active": t === _.value }]),
				type: "button",
				role: "option",
				"aria-selected": E(e.value),
				disabled: e.disabled,
				onMouseenter: (e) => M(t),
				onClick: (t) => z(e)
			}, N(e.label), 43, Nn))), 128)),
			C.value.length === 0 ? (T(), s("div", Pn, N(t.emptyLabel), 1)) : o("", !0)
		], 10, jn)) : o("", !0)], 2));
	}
}, [["__scopeId", "data-v-ed63d542"]]), In = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.b.blockquote.br.code.em.h1.h2.h3.h4.h5.h6.li.ol.p.pre.s.span.strike.strong.table.tbody.td.th.thead.tr.u.ul".split(".")), Ln = /* @__PURE__ */ new Set([
	"embed",
	"iframe",
	"math",
	"object",
	"script",
	"style",
	"svg",
	"template"
]), Rn = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:"
]), zn = /^[a-z][a-z0-9-]{0,39}$/, Bn = 4096;
function Vn(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
function Hn(e) {
	let t = String(e || "").trim();
	if (!t || /[\u0000-\u001f\u007f]/.test(t)) return "";
	if (/^(?:#|\?|\.?\.\/|\/)/.test(t)) return t;
	try {
		let e = new URL(t, "https://share-ui.invalid");
		return Rn.has(e.protocol) ? t : "";
	} catch {
		return "";
	}
}
function Un(e) {
	let t = String(e || "").trim();
	if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t) || /^var\(--[a-z0-9-]+\)$/i.test(t)) return t;
	let n = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
	if (!n || n.slice(1, 4).map(Number).some((e) => e < 0 || e > 255)) return "";
	let r = n[4] == null ? null : Number(n[4]);
	return r != null && (r < 0 || r > 1) ? "" : t;
}
function Wn(e) {
	try {
		let t = encodeURIComponent(JSON.stringify(e ?? {}));
		return t.length <= Bn ? t : "";
	} catch {
		return "";
	}
}
function Gn(e) {
	let t = String(e || "");
	if (!t || t.length > Bn) return null;
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
function Kn(e, t, n) {
	let r = String(e || "").trim().toLowerCase(), i = Wn(t);
	return !zn.test(r) || !i ? "" : `<span data-rich-node="${r}" data-rich-payload="${Vn(i)}" contenteditable="false">${Vn(n || r)}</span>`;
}
function qn(e) {
	if (!e?.getAttribute) return null;
	let t = String(e.getAttribute("data-rich-node") || "").trim().toLowerCase(), n = Gn(e.getAttribute("data-rich-payload"));
	return !zn.test(t) || n == null ? null : {
		kind: t,
		payload: n,
		label: e.textContent || t
	};
}
function Jn(e, t) {
	let n = e.getAttribute("title");
	n && t.setAttribute("title", n);
	let r = e.getAttribute("dir");
	[
		"ltr",
		"rtl",
		"auto"
	].includes(r) && t.setAttribute("dir", r);
	let i = Un(e.style?.getPropertyValue("color"));
	if (i && t.style.setProperty("color", i), t.tagName === "A") {
		let n = Hn(e.getAttribute("href"));
		n && t.setAttribute("href", n), e.getAttribute("target") === "_blank" && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer"));
	}
	if (t.tagName === "SPAN") {
		let n = qn(e);
		n && (t.setAttribute("data-rich-node", n.kind), t.setAttribute("data-rich-payload", Wn(n.payload)), t.setAttribute("contenteditable", "false"));
	}
	if (t.tagName === "TD" || t.tagName === "TH") for (let n of ["colspan", "rowspan"]) {
		let r = Number.parseInt(e.getAttribute(n), 10);
		r >= 1 && r <= 100 && t.setAttribute(n, String(r));
	}
}
function Yn(e, t, n) {
	if (e.nodeType === 3) {
		t.appendChild(n.createTextNode(e.nodeValue || ""));
		return;
	}
	if (e.nodeType !== 1) return;
	let r = e.tagName.toLowerCase();
	if (Ln.has(r)) return;
	if (!In.has(r)) {
		for (let r of [...e.childNodes]) Yn(r, t, n);
		return;
	}
	let i = n.createElement(r);
	if (Jn(e, i), i.hasAttribute("data-rich-node")) i.textContent = e.textContent || i.getAttribute("data-rich-node");
	else for (let t of [...e.childNodes]) Yn(t, i, n);
	t.appendChild(i);
}
function Xn(e) {
	let t = String(e || "");
	if (!t) return "";
	if (typeof DOMParser > "u") return Vn(t);
	let n = new DOMParser().parseFromString(t, "text/html"), r = n.createElement("div");
	for (let e of [...n.body.childNodes]) Yn(e, r, n);
	return r.innerHTML;
}
function Zn(e) {
	return Vn(e).replace(/\r\n?|\n/g, "<br>");
}
//#endregion
//#region src/components/rich-text/RichContent.vue
function Qn(e) {
	let t = {};
	for (let n of [...e.attributes]) n.name !== "class" && (t[n.name] = n.value);
	return t;
}
function $n(e, t, n) {
	if (e.nodeType === Node.TEXT_NODE) return e.nodeValue || "";
	if (e.nodeType !== Node.ELEMENT_NODE) return null;
	let r = qn(e);
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
	let i = [...e.childNodes].map((e, r) => $n(e, t, `${n}.${r}`)).filter((e) => e != null);
	return h(e.tagName.toLowerCase(), {
		...Qn(e),
		key: n
	}, i);
}
var er = /*#__PURE__*/ G({
	name: "RichContent",
	inheritAttrs: !1,
	props: { html: {
		type: String,
		default: ""
	} },
	setup(e, { slots: t, attrs: n }) {
		let r = i(() => Xn(e.html));
		return () => {
			if (typeof DOMParser > "u") return h("div", {
				...n,
				class: ["rc", n.class],
				innerHTML: r.value
			});
			let e = [...new DOMParser().parseFromString(r.value, "text/html").body.childNodes].map((e, n) => $n(e, t, String(n))).filter((e) => e != null);
			return h("div", {
				...n,
				class: ["rc", n.class]
			}, e);
		};
	}
}, [["__scopeId", "data-v-b2aa27f6"]]), tr = { class: "input-desc" }, nr = ["aria-label"], rr = ["title"], ir = ["title"], ar = ["title"], or = ["aria-expanded"], sr = ["onMousedown"], cr = ["title", "onMousedown"], lr = { class: "desc-color-icon" }, ur = [
	"title",
	"aria-label",
	"aria-expanded"
], dr = { class: "desc-link-field" }, fr = ["placeholder"], pr = { class: "desc-link-field" }, mr = {
	key: 0,
	class: "desc-link-error"
}, hr = { class: "desc-link-actions" }, gr = {
	type: "submit",
	class: "desc-link-save"
}, _r = ["data-placeholder", "aria-label"], vr = {
	key: 2,
	class: "desc-empty"
}, yr = /*#__PURE__*/ G({
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
			default: () => yn
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
		})), _ = i(() => Array.from({ length: p.maxHeadingLevel }, (e, t) => t + 1)), x = O(!1), S = O(null), w = O(null), E = O(null), j = O(null), M = O(!1), P = O(null), F = O(null), I = O(null), L = O(null), z = O(!1), U = D({
			text: "",
			url: ""
		}), G = i(() => P.value || F.value || E.value);
		function ee(e) {
			return Xn(e) || "<p><br></p>";
		}
		function te(e) {
			!p.editable || !w.value || document.activeElement !== w.value && (w.value.innerHTML = ee(e));
		}
		B(() => p.modelValue, te), B(() => p.editable, (e) => {
			e && v(() => te(p.modelValue));
		}), C(() => {
			te(p.modelValue), document.execCommand("defaultParagraphSeparator", !1, "p");
		});
		function ne(e) {
			return !!(e && w.value?.contains(e.commonAncestorContainer));
		}
		function re() {
			let e = window.getSelection();
			if (!e?.rangeCount) return;
			let t = e.getRangeAt(0);
			ne(t) && (L.value = t.cloneRange());
		}
		function ie() {
			w.value?.focus();
			let e = window.getSelection();
			return !e || !ne(L.value) ? !1 : (e.removeAllRanges(), e.addRange(L.value), !0);
		}
		function ae() {
			return ne(L.value) ? L.value.toString().trim() : "";
		}
		function oe(e) {
			let t = Kn(e?.kind, e?.payload, e?.label);
			if (!t || !w.value) return null;
			ie(), document.execCommand("insertHTML", !1, t), Q();
			let n = w.value.querySelectorAll("[data-rich-node]"), r = n[n.length - 1] || null;
			return r && (I.value = r, ce(r)), r;
		}
		function se(e) {
			return e?.nodeType === Node.ELEMENT_NODE && e.matches?.("[data-rich-node]") ? e : e?.element?.matches?.("[data-rich-node]") ? e.element : I.value?.isConnected ? I.value : null;
		}
		function K(e, t) {
			let n = se(e), r = Kn(t?.kind, t?.payload, t?.label);
			if (!n || !r) return null;
			let i = document.createElement("template");
			i.innerHTML = r;
			let a = i.content.firstElementChild;
			return n.replaceWith(a), I.value = a, Q(), a;
		}
		function q(e) {
			let t = se(e);
			if (!t) return !1;
			let n = t.nextSibling || t.parentNode;
			return t.remove(), I.value = null, n?.nodeType === Node.ELEMENT_NODE && Se(n), Q(), !0;
		}
		function ce(e) {
			let t = document.createRange(), n = window.getSelection();
			t.setStartAfter(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t), L.value = t.cloneRange();
		}
		function J(e, t) {
			re(), P.value = e, F.value = t, z.value = !1, U.text = e?.textContent || ae(), U.url = e?.getAttribute?.("href") || "", M.value = !0, v(() => j.value?.focus());
		}
		function Y(e = null) {
			J(null, e);
		}
		function le(e) {
			J(e, null);
		}
		function ue(e = !1) {
			e !== !0 && (M.value = !1, P.value = null, F.value = null, z.value = !1);
		}
		function de() {
			let e = Hn(U.url);
			if (!e) {
				z.value = !0;
				return;
			}
			let t = U.text.trim() || e;
			if (P.value?.isConnected) P.value.setAttribute("href", e), P.value.textContent = t;
			else {
				ie();
				let n = window.getSelection();
				if (n?.rangeCount && !n.getRangeAt(0).collapsed && t === n.toString().trim()) document.execCommand("createLink", !1, e);
				else {
					let r = document.createElement("a");
					r.href = e, r.textContent = t;
					let i = n?.rangeCount ? n.getRangeAt(0) : null;
					i && ne(i) && (i.deleteContents(), i.insertNode(r), ce(r));
				}
			}
			ue(!1), Q();
		}
		function fe() {
			let e = P.value;
			if (!e?.isConnected) return ue(!1);
			e.replaceWith(...e.childNodes), ue(!1), Q();
		}
		function pe(e) {
			let t = e.target.closest?.("a");
			if (t && w.value?.contains(t)) {
				e.preventDefault(), le(t);
				return;
			}
			let n = e.target.closest?.("[data-rich-node]");
			!n || !w.value?.contains(n) || (e.preventDefault(), I.value = n, h("node-select", {
				element: n,
				node: qn(n)
			}));
		}
		let me = {
			focus: () => w.value?.focus(),
			rememberSelection: re,
			openLinkEditor: Y,
			insertRichNode: oe,
			updateRichNode: K,
			removeRichNode: q
		};
		function X(e) {
			return g.value.heading.replace("{level}", String(e));
		}
		function Z(e) {
			w.value?.focus(), document.execCommand("styleWithCSS", !1, !1), document.execCommand(e, !1, null), v(Q);
		}
		function he(e) {
			w.value?.focus(), document.execCommand("formatBlock", !1, e), x.value = !1, v(Q);
		}
		function ge(e) {
			if (w.value?.focus(), document.execCommand("styleWithCSS", !1, !0), e) {
				document.execCommand("foreColor", !1, e), Q();
				return;
			}
			document.execCommand("removeFormat", !1, null), v(() => {
				w.value && (w.value.querySelectorAll("span").forEach((e) => {
					e.style.removeProperty("font-family"), e.style.cssText.trim() || e.replaceWith(...e.childNodes);
				}), Q());
			});
		}
		function _e() {
			if (w.value) {
				Ce();
				for (let e of [...w.value.children]) {
					if (e.tagName !== "DIV") continue;
					let t = document.createElement("p");
					t.innerHTML = e.innerHTML, e.replaceWith(t);
				}
				Q();
			}
		}
		function ve() {
			if (!w.value) return "";
			ye(w.value);
			let e = Xn(w.value.innerHTML);
			return e === "<p><br></p>" || e === "<br>" ? "" : e;
		}
		function Q() {
			h("update:modelValue", ve());
		}
		function ye(e) {
			e.querySelectorAll("strong").forEach((e) => be(e, "b")), e.querySelectorAll("i").forEach((e) => be(e, "em")), e.querySelectorAll("span").forEach((e) => {
				let t = e.style.fontWeight, n = e.style.fontStyle, r = e.style.textDecorationLine || e.style.textDecoration, i = null;
				t === "bold" || Number(t) >= 600 ? (e.style.removeProperty("font-weight"), i = "b") : n === "italic" ? (e.style.removeProperty("font-style"), i = "em") : String(r).includes("underline") && (e.style.removeProperty("text-decoration"), e.style.removeProperty("text-decoration-line"), i = "u"), i && be(e, i);
			});
		}
		function be(e, t) {
			let n = document.createElement(t);
			for (let t of [...e.attributes]) (t.name !== "style" || e.style.cssText.trim()) && n.setAttribute(t.name, t.value);
			return n.append(...e.childNodes), e.replaceWith(n), n;
		}
		function xe(e) {
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
		function Se(e) {
			let t = document.createRange(), n = window.getSelection();
			t.selectNodeContents(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t);
		}
		function Ce() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !w.value?.contains(e.anchorNode)) return;
			let t = xe(e.anchorNode);
			if (!t || t.tagName === "LI") return;
			let n = t.textContent || "";
			(n === "- " || n === " - ") && we(t);
		}
		function we(e) {
			let t = document.createElement("li");
			t.innerHTML = "<br>";
			let n = document.createElement("ul");
			n.appendChild(t), e.replaceWith(n), Se(t);
		}
		function Te() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !w.value?.contains(e.anchorNode)) return !1;
			let t = xe(e.anchorNode);
			if (!t || t.tagName === "LI") return !1;
			let n = (t.textContent || "").replace(/\u00a0/g, " ");
			return n !== "-" && n !== " -" ? !1 : (we(t), !0);
		}
		function Ee(e) {
			if (e.key === " ") {
				Te() && (e.preventDefault(), Q());
				return;
			}
			e.key === "Enter" && (e.preventDefault(), document.execCommand(e.shiftKey ? "insertLineBreak" : "insertParagraph"), Q());
		}
		function De(e) {
			w.value?.focus(), document.execCommand("insertHTML", !1, e), Q();
		}
		function Oe(e) {
			e.preventDefault();
			let t = e.clipboardData?.getData("text/html"), n = e.clipboardData?.getData("text/plain") || "";
			De(t ? Xn(t) : Zn(n));
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
			De(t ? Xn(t) : Zn(n));
		}
		function je(e) {
			Q(), h("blur", e);
		}
		return n({
			focus: () => w.value?.focus(),
			commit: Q,
			rememberSelection: re,
			openLinkEditor: Y,
			insertRichNode: oe,
			updateRichNode: K,
			removeRichNode: q
		}), (n, r) => (T(), s("div", tr, [t.editable ? (T(), s(e, { key: 0 }, [
			c("div", {
				class: "desc-toolbar",
				role: "toolbar",
				"aria-label": g.value.toolbar
			}, [
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.bold,
					onMousedown: r[0] ||= W((e) => Z("bold"), ["prevent"])
				}, [c("b", null, N(g.value.boldShort), 1)], 40, rr),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.italic,
					onMousedown: r[1] ||= W((e) => Z("italic"), ["prevent"])
				}, [c("i", null, N(g.value.italicShort), 1)], 40, ir),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.underline,
					onMousedown: r[2] ||= W((e) => Z("underline"), ["prevent"])
				}, [c("u", null, N(g.value.underlineShort), 1)], 40, ar),
				r[13] ||= c("div", { class: "desc-sep" }, null, -1),
				c("button", {
					ref_key: "headingTrigger",
					ref: S,
					type: "button",
					class: "desc-btn desc-btn-wide",
					"aria-expanded": x.value,
					"aria-haspopup": "menu",
					onMousedown: r[3] ||= W((e) => x.value = !x.value, ["prevent"])
				}, [d(N(g.value.paragraph) + " ", 1), r[11] ||= c("span", {
					class: "desc-caret",
					"aria-hidden": "true"
				}, "▾", -1)], 40, or),
				f(fn, {
					open: x.value,
					anchor: S.value,
					"min-width": 160,
					"z-index": 4500,
					role: "menu",
					"aria-label": g.value.paragraph,
					"onUpdate:open": r[5] ||= (e) => x.value = e
				}, {
					default: V(() => [c("button", {
						type: "button",
						class: "desc-drop-item drop-p",
						role: "menuitem",
						onMousedown: r[4] ||= W((e) => he("p"), ["prevent"])
					}, N(g.value.normal), 33), (T(!0), s(e, null, k(_.value, (e) => (T(), s("button", {
						key: e,
						type: "button",
						class: y(["desc-drop-item", `drop-h${e}`]),
						role: "menuitem",
						onMousedown: W((t) => he(`h${e}`), ["prevent"])
					}, N(X(e)), 43, sr))), 128))]),
					_: 1
				}, 8, [
					"open",
					"anchor",
					"aria-label"
				]),
				r[14] ||= c("div", { class: "desc-sep" }, null, -1),
				f(kn, {
					"allow-clear": "",
					colors: t.colors,
					"model-value": "",
					"clear-label": g.value.clearColor,
					"aria-label": g.value.color,
					"onUpdate:modelValue": ge
				}, {
					trigger: V(({ toggle: e }) => [c("button", {
						type: "button",
						class: "desc-btn",
						title: g.value.color,
						onMousedown: W((t) => {
							x.value = !1, e();
						}, ["prevent"])
					}, [c("span", lr, N(g.value.colorShort), 1)], 40, cr)]),
					_: 1
				}, 8, [
					"colors",
					"clear-label",
					"aria-label"
				]),
				r[15] ||= c("div", { class: "desc-sep" }, null, -1),
				t.showLinkButton ? (T(), s("button", {
					key: 0,
					ref_key: "linkTrigger",
					ref: E,
					type: "button",
					class: y(["desc-btn", { active: M.value }]),
					title: g.value.link,
					"aria-label": g.value.link,
					"aria-expanded": M.value,
					"aria-haspopup": "dialog",
					onMousedown: r[6] ||= W((e) => Y(), ["prevent"])
				}, [...r[12] ||= [c("span", { "aria-hidden": "true" }, "↗", -1)]], 42, ur)) : o("", !0),
				A(n.$slots, "toolbar", {
					editor: me,
					insertRichNode: oe,
					updateRichNode: K,
					removeRichNode: q
				}, void 0, !0)
			], 8, nr),
			f(fn, {
				open: M.value,
				anchor: G.value,
				"min-width": 260,
				"z-index": 4500,
				role: "dialog",
				"aria-label": g.value.link,
				"onUpdate:open": ue
			}, {
				default: V(() => [c("form", {
					class: "desc-link-form",
					onSubmit: W(de, ["prevent"])
				}, [
					c("label", dr, [c("span", null, N(g.value.linkText), 1), H(c("input", {
						"onUpdate:modelValue": r[7] ||= (e) => U.text = e,
						type: "text",
						placeholder: g.value.linkTextPlaceholder
					}, null, 8, fr), [[R, U.text]])]),
					c("label", pr, [c("span", null, N(g.value.linkUrl), 1), H(c("input", {
						ref_key: "linkUrlInput",
						ref: j,
						"onUpdate:modelValue": r[8] ||= (e) => U.url = e,
						type: "text",
						inputmode: "url",
						placeholder: "https://…"
					}, null, 512), [[R, U.url]])]),
					z.value ? (T(), s("span", mr, N(g.value.linkInvalid), 1)) : o("", !0),
					c("div", hr, [
						P.value ? (T(), s("button", {
							key: 0,
							type: "button",
							class: "desc-link-remove",
							onClick: fe
						}, N(g.value.removeLink), 1)) : o("", !0),
						c("button", {
							type: "button",
							class: "desc-link-cancel",
							onClick: r[9] ||= (e) => ue(!1)
						}, N(g.value.cancel), 1),
						c("button", gr, N(g.value.saveLink), 1)
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
				ref: w,
				class: "desc-editor",
				contenteditable: "true",
				spellcheck: "false",
				translate: "no",
				autocorrect: "off",
				"data-placeholder": t.placeholder,
				"aria-label": t.ariaLabel || t.placeholder,
				onInput: _e,
				onKeydown: Ee,
				onKeyup: re,
				onMouseup: re,
				onClick: pe,
				onPaste: Oe,
				onDrop: Ae,
				onFocus: r[10] ||= (e) => n.$emit("focus", e),
				onBlur: je
			}, null, 40, _r)
		], 64)) : t.modelValue ? (T(), a(er, {
			key: 1,
			class: "desc-view",
			html: t.modelValue
		}, l({ _: 2 }, [n.$slots.node ? {
			name: "node",
			fn: V((e) => [A(n.$slots, "node", b(m(e)), void 0, !0)]),
			key: "0"
		} : void 0]), 1032, ["html"])) : (T(), s("div", vr, N(t.placeholder), 1))]));
	}
}, [["__scopeId", "data-v-28db4ac6"]]), br = [
	"aria-label",
	"aria-expanded",
	"disabled"
], xr = {
	class: "share-account-avatar",
	"aria-hidden": "true"
}, Sr = {
	key: 0,
	class: "share-account-label"
}, Cr = {
	key: 1,
	class: "share-account-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true"
}, wr = /*#__PURE__*/ G({
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
		return (t, r) => (T(), a(tn, {
			title: e.title,
			disabled: e.disabled,
			block: ""
		}, {
			trigger: V(({ open: i }) => [c("button", {
				type: "button",
				class: y(["share-account-trigger", {
					"share-account-trigger--expanded": e.expanded,
					"share-account-trigger--open": i
				}]),
				"aria-label": e.ariaLabel || e.label || e.title,
				"aria-expanded": i,
				"aria-haspopup": "menu",
				disabled: e.disabled
			}, [
				c("span", xr, [A(t.$slots, "avatar", {}, () => [d(N(n.value), 1)], !0)]),
				e.expanded ? (T(), s("span", Sr, N(e.label), 1)) : o("", !0),
				e.expanded ? (T(), s("svg", Cr, [...r[0] ||= [c("path", {
					d: "m4 6 4 4 4-4",
					stroke: "currentColor",
					"stroke-width": "1.7",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, null, -1)]])) : o("", !0)
			], 10, br)]),
			default: V(({ close: e }) => [A(t.$slots, "default", { close: e }, void 0, !0)]),
			_: 3
		}, 8, ["title", "disabled"]));
	}
}, [["__scopeId", "data-v-1b1c351a"]]), Tr = {
	key: 1,
	class: "share-app-shell__rail"
}, Er = /*#__PURE__*/ G({
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
		return (t, r) => (T(), s("div", {
			class: y(["share-app-shell", [
				`share-app-shell--${e.sidebarMode}`,
				`share-app-shell--breakpoint-${e.mobileBreakpoint}`,
				{
					"share-app-shell--without-sidebar": !e.sidebarVisible,
					"share-app-canvas": e.canvas
				}
			]]),
			style: x(n.value)
		}, [
			e.sidebarVisible ? A(t.$slots, "sidebar", {}, void 0, !0, 0) : o("", !0),
			(T(), a(j(e.contentTag), { class: "share-app-shell__content" }, {
				default: V(() => [A(t.$slots, "default", {}, void 0, !0)]),
				_: 3
			})),
			t.$slots.rail ? (T(), s("aside", Tr, [A(t.$slots, "rail", {}, void 0, !0)])) : o("", !0),
			A(t.$slots, "overlay", {}, void 0, !0)
		], 6));
	}
}, [["__scopeId", "data-v-20e51ba2"]]), Dr = ["aria-label", "title"], Or = {
	class: "share-sidebar-toggle__icon sidebar-icon",
	"aria-hidden": "true"
}, kr = {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none"
}, Ar = {
	key: 0,
	d: "m11 6-3 3 3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, jr = {
	key: 1,
	d: "m9 6 3 3-3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Mr = { class: "share-sidebar-label sidebar-label" }, Nr = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("button", {
			type: "button",
			class: "share-sidebar-toggle sidebar-toggle",
			"aria-label": e.expanded ? e.collapseLabel : e.expandLabel,
			title: e.expanded ? e.collapseLabel : e.expandLabel
		}, [c("span", Or, [(T(), s("svg", kr, [
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
			e.expanded ? (T(), s("path", Ar)) : (T(), s("path", jr))
		]))]), c("span", Mr, N(e.expanded ? e.collapseLabel : e.expandLabel), 1)], 8, Dr));
	}
}, [["__scopeId", "data-v-60807cea"]]), Pr = {
	key: 0,
	class: "share-sidebar-head"
}, Fr = ["aria-label"], Ir = {
	key: 1,
	class: "share-sidebar-tools"
}, Lr = {
	key: 2,
	class: "share-sidebar-account"
}, Rr = /*#__PURE__*/ G({
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
		let d = O(u()), f = i({
			get: () => r.modelValue ?? d.value,
			set: (e) => {
				d.value = e, l("update:modelValue", e), l("change", e);
			}
		});
		B(f, (e) => {
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
		}), (t, n) => (T(), s("aside", { class: y(["share-app-sidebar app-sidebar", [
			f.value && "share-app-sidebar--expanded app-sidebar--expanded",
			e.elevated && "share-app-sidebar--elevated",
			!(e.showToggle || t.$slots.tools) && "share-app-sidebar--without-tools",
			`share-app-sidebar--${e.position}`,
			e.position !== "embedded" && e.mobileBreakpoint !== 0 && `share-app-sidebar--mobile-${e.mobileMode}`,
			e.position !== "embedded" && e.mobileBreakpoint !== 0 && `share-app-sidebar--breakpoint-${e.mobileBreakpoint}`
		]]) }, [
			t.$slots.brand ? (T(), s("div", Pr, [A(t.$slots, "brand", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			c("nav", {
				class: "share-sidebar-nav",
				"aria-label": e.ariaLabel
			}, [A(t.$slots, "default", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)], 8, Fr),
			e.showToggle || t.$slots.tools ? (T(), s("div", Ir, [e.showToggle ? (T(), a(Nr, {
				key: 0,
				expanded: f.value,
				"expand-label": e.expandLabel,
				"collapse-label": e.collapseLabel,
				onClick: h
			}, null, 8, [
				"expanded",
				"expand-label",
				"collapse-label"
			])) : o("", !0), A(t.$slots, "tools", {
				expanded: f.value,
				expand: p,
				collapse: m,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			t.$slots.account ? (T(), s("div", Lr, [A(t.$slots, "account", { expanded: f.value }, void 0, !0)])) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-2edf4ac9"]]), zr = {
	class: "share-sidebar-brand__icon sidebar-brand-icon",
	"aria-hidden": "true"
}, Br = { class: "share-sidebar-label share-sidebar-brand__label sidebar-label sidebar-brand-label" }, Vr = /*#__PURE__*/ G(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (T(), a(j(e.as), _({
			class: "share-sidebar-brand sidebar-brand",
			"aria-label": e.ariaLabel || e.label
		}, t.$attrs), {
			default: V(() => [c("span", zr, [A(t.$slots, "icon", {}, () => [e.icon ? (T(), a(j(e.icon), {
				key: 0,
				size: 22,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", Br, [A(t.$slots, "default", {}, () => [d(N(e.label), 1)], !0)])]),
			_: 3
		}, 16, ["aria-label"]));
	}
}), [["__scopeId", "data-v-2ad2fa09"]]), Hr = { class: "share-sidebar-group" }, Ur = /*#__PURE__*/ G({
	__name: "SidebarGroup",
	props: { label: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (T(), s("div", Hr, [A(t.$slots, "default", {}, () => [d(N(e.label), 1)], !0)]));
	}
}, [["__scopeId", "data-v-914e315d"]]), Wr = {
	class: "share-sidebar-icon sidebar-icon",
	"aria-hidden": "true"
}, Gr = { class: "share-sidebar-label sidebar-label" }, Kr = /*#__PURE__*/ G(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (T(), a(j(e.as), _({
			class: ["share-sidebar-link sidebar-link", { active: e.active }],
			title: e.title || e.label,
			"aria-current": e.active ? "page" : void 0
		}, t.$attrs), {
			default: V(() => [c("span", Wr, [A(t.$slots, "icon", {}, () => [e.icon ? (T(), a(j(e.icon), {
				key: 0,
				size: 20,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", Gr, [A(t.$slots, "default", {}, () => [d(N(e.label), 1)], !0)])]),
			_: 3
		}, 16, [
			"class",
			"title",
			"aria-current"
		]));
	}
}), [["__scopeId", "data-v-3deb2542"]]), qr = {
	key: 0,
	class: "share-editor-panel__title"
}, Jr = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("div", { class: y(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (T(), s("div", qr, [A(t.$slots, "title", {}, () => [d(N(e.title), 1)], !0)])) : o("", !0), A(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-f7a33945"]]), Yr = { class: "share-editor-section-title" }, Xr = { class: "share-editor-section-title__text" }, Zr = {
	key: 0,
	class: "share-editor-section-title__actions"
}, Qr = /*#__PURE__*/ G({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (T(), s("div", Yr, [c("span", Xr, [A(t.$slots, "default", {}, () => [d(N(e.title), 1)], !0)]), t.$slots.actions ? (T(), s("span", Zr, [A(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)]));
	}
}, [["__scopeId", "data-v-bd6769b9"]]), $r = { class: "share-editor-section" }, ei = /*#__PURE__*/ G({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (T(), s("section", $r, [e.title || t.$slots.title ? (T(), a(Qr, {
			key: 0,
			title: e.title
		}, l({ _: 2 }, [t.$slots.title ? {
			name: "default",
			fn: V(() => [A(t.$slots, "title", {}, void 0, !0)]),
			key: "0"
		} : void 0, t.$slots.actions ? {
			name: "actions",
			fn: V(() => [A(t.$slots, "actions", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, ["title"])) : o("", !0), A(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-8f45005c"]]), ti = {}, ni = { class: "share-editor-total" };
function ri(e, t) {
	return T(), s("div", ni, [A(e.$slots, "default", {}, void 0, !0)]);
}
var ii = /*#__PURE__*/ G(ti, [["render", ri], ["__scopeId", "data-v-7fe02c46"]]);
//#endregion
//#region src/internal/drawerSwipe.js
function ai({ enabled: e, width: t, close: n }) {
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
var oi = ["aria-label"], si = {
	key: 0,
	class: "share-drawer__header"
}, ci = ["aria-label"], li = { class: "share-drawer__body" }, ui = {
	key: 2,
	class: "share-drawer__footer"
}, di = /*#__PURE__*/ G(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		let u = e, d = l, p = O(null), m = O(!1), h = i(() => u.modelValue && !m.value), g = ln("(prefers-reduced-motion: reduce)"), y = Symbol("app-drawer"), b = null, C = null, w = !1;
		function E() {
			return h.value && St(y);
		}
		function D(e = p.value?.parentElement) {
			e && (e.inert = !0, e.setAttribute("inert", ""), e.setAttribute("aria-hidden", "true"), e.style.pointerEvents = "none");
		}
		function k() {
			E() && (D(), m.value = !0, d("update:modelValue", !1));
		}
		function j(e) {
			!E() || e.defaultPrevented || (e.key === "Escape" ? (e.preventDefault(), k()) : wt(e, p.value));
		}
		function M(e) {
			E() && !p.value?.contains(e.target) && Ct(p.value);
		}
		function N() {
			if (!b) return;
			let e = St(y);
			xt(y), b(), b = null, document.removeEventListener("keydown", j), document.removeEventListener("focusin", M), e && !C?.closest?.("[inert]") && Tt(C), C = null;
		}
		function F() {
			h.value || (N(), d("closed"));
		}
		function I() {
			h.value && d("opened");
		}
		let L = ai({
			enabled: () => u.swipeToClose && E(),
			width: () => p.value?.getBoundingClientRect().width || 288,
			close: k
		});
		return B(() => u.modelValue, (e) => {
			e && (m.value = !1);
		}, { flush: "sync" }), B(h, async (e) => {
			if (L.cancel(), !e) {
				D();
				return;
			}
			if (!b && typeof document < "u" && (C = document.activeElement, bt(y), b = Et(), document.addEventListener("keydown", j), document.addEventListener("focusin", M)), await v(), w || !h.value) return;
			let t = p.value?.parentElement;
			t && (t.inert = !1, t.removeAttribute("inert"), t.removeAttribute("aria-hidden"), t.style.pointerEvents = ""), !w && E() && !p.value?.contains(document.activeElement) && Ct(p.value);
		}, {
			immediate: !0,
			flush: "post"
		}), S(() => {
			w = !0, L.cancel(), N();
		}), r({ requestClose: k }), (r, i) => (T(), a(t, { to: "body" }, [f(n, {
			name: "share-drawer",
			appear: "",
			duration: P(g) ? 0 : 220,
			onBeforeLeave: D,
			onAfterEnter: I,
			onAfterLeave: F
		}, {
			default: V(() => [h.value ? (T(), s("div", {
				key: 0,
				class: "share-drawer",
				style: x({ zIndex: e.zIndex })
			}, [c("div", {
				class: "share-drawer__scrim",
				"aria-hidden": "true",
				onClick: k
			}), c("section", _(r.$attrs, {
				ref_key: "panel",
				ref: p,
				class: "share-drawer__panel",
				style: { width: typeof e.width == "number" ? `${e.width}px` : e.width },
				role: "dialog",
				"aria-modal": "true",
				"aria-label": e.ariaLabel,
				tabindex: "-1",
				onTouchstart: i[0] ||= (...e) => P(L).start && P(L).start(...e),
				onTouchmove: i[1] ||= (...e) => P(L).move && P(L).move(...e),
				onTouchend: i[2] ||= (...e) => P(L).end && P(L).end(...e),
				onTouchcancel: i[3] ||= (...e) => P(L).cancel && P(L).cancel(...e)
			}), [
				r.$slots.header || r.$slots.title ? (T(), s("header", si, [A(r.$slots, "header", { close: k }, () => [A(r.$slots, "title", { close: k }, void 0, !0)], !0)])) : o("", !0),
				e.showClose ? (T(), s("button", {
					key: 1,
					class: "share-drawer__close",
					type: "button",
					"aria-label": e.closeLabel,
					onClick: k
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
				})], -1)]], 8, ci)) : o("", !0),
				c("div", li, [A(r.$slots, "default", { close: k }, void 0, !0)]),
				r.$slots.footer ? (T(), s("footer", ui, [A(r.$slots, "footer", { close: k }, void 0, !0)])) : o("", !0)
			], 16, oi)], 4)) : o("", !0)]),
			_: 3
		}, 8, ["duration"])]));
	}
}), [["__scopeId", "data-v-855cfb00"]]);
//#endregion
//#region src/composables/useFullscreenViewportHeight.js
function fi(e = .94) {
	let t = O(`${Math.round(e * 100)}dvh`);
	function n() {
		if (typeof window > "u") return;
		let n = window.visualViewport?.height || window.innerHeight;
		t.value = `${Math.floor(n * e)}px`;
	}
	return C(() => {
		n(), window.addEventListener("resize", n), window.visualViewport?.addEventListener("resize", n);
	}), S(() => {
		window.removeEventListener("resize", n), window.visualViewport?.removeEventListener("resize", n);
	}), t;
}
//#endregion
//#region src/components/overlay/AppModal.vue
var pi = ["aria-label"], mi = {
	key: 0,
	class: "am-handle"
}, hi = ["aria-label"], gi = () => window.innerWidth <= 640, _i = 260, $ = 280, vi = "cubic-bezier(0.32, 0.72, 0, 1)", yi = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function bi(e) {
	e.focus({ preventScroll: !0 });
}
var xi = /*#__PURE__*/ G({
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
		outlined: {
			type: Boolean,
			default: !0
		},
		compact: {
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
		let l = e, u = r, d = O(null), f = O(null), p = fi(), m = i(() => typeof l.width == "number" ? `${l.width}px` : l.width || "480px"), h = O(!1), g = O(0), _ = O(0), b = O(0), w = !1, E = null, D = !1, k = () => {}, j = Symbol("app-modal"), M = typeof document < "u" ? document.activeElement : null;
		function N(e) {
			if (!St(j)) return;
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
			let t = [...f.value?.querySelectorAll(yi) || []].filter((e) => e.getClientRects().length > 0);
			if (!t.length) {
				e.preventDefault(), f.value?.focus();
				return;
			}
			let n = t[0], r = t.at(-1);
			e.shiftKey && (document.activeElement === n || !f.value?.contains(document.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (document.activeElement === r || !f.value?.contains(document.activeElement)) && (e.preventDefault(), n.focus());
		}
		function F() {
			let e = d.value, t = f.value;
			!e || !t || (e.style.opacity = "0", ce(e, 0), gi() ? t.style.transform = "translateY(100%)" : (t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					let n = "cubic-bezier(0, 0, 0.4, 1)", r = `opacity ${_i}ms ${n}, backdrop-filter ${_i}ms ${n}, -webkit-backdrop-filter ${_i}ms ${n}`;
					e.style.transition = r, e.style.opacity = "1", ce(e, 6), gi() ? (t.style.transition = `transform ${_i}ms ${vi}`, t.style.transform = "translateY(0)") : (t.style.transition = `transform ${_i}ms ${vi}, opacity ${_i}ms ${n}`, t.style.transform = "none", t.style.opacity = "1"), setTimeout(() => {
						w || (e.style.transition = "", ce(e, 6), t.style.transition = "", t.style.transform = "", t.style.opacity = "", u("opened"));
					}, 310);
				});
			}));
		}
		function I() {
			let e = d.value, t = f.value;
			if (!e || !t) {
				E = setTimeout(() => {
					w || u("close");
				}, 0);
				return;
			}
			let n = `opacity ${$}ms ease, backdrop-filter ${$}ms ease, -webkit-backdrop-filter ${$}ms ease`;
			e.style.transition = n, e.style.opacity = "0", ce(e, 0), gi() ? (t.style.transition = `transform ${$}ms ${vi}`, t.style.transform = "translateY(100%)") : (t.style.transition = `transform ${$}ms ease, opacity ${$}ms ease`, t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), E = setTimeout(() => {
				w || u("close");
			}, 300);
		}
		function L() {
			!l.dismissible || D || (D = !0, I());
		}
		n({ requestClose: L });
		function R(e) {
			if (!l.dismissible) return;
			_.value = e.touches[0].clientY;
			let t = e.target instanceof Element ? e.target : null;
			for (; t && t !== f.value;) {
				let e = window.getComputedStyle(t);
				if (/(auto|scroll)/.test(e.overflowY) && t.scrollHeight > t.clientHeight) break;
				t = t.parentElement;
			}
			b.value = t?.scrollTop || f.value?.scrollTop || 0, h.value = !1, g.value = 0;
		}
		function z(e) {
			if (!l.dismissible) return;
			let t = e.touches[0].clientY - _.value;
			if (!h.value) {
				if (t > 8 && b.value <= 0) h.value = !0;
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
			g.value > 100 ? (e && (e.style.transition = `transform ${$}ms ${vi}`, e.style.transform = "translateY(100%)"), t && (t.style.transition = `opacity ${$}ms ease`, t.style.opacity = "0"), E = setTimeout(() => {
				w || u("close");
			}, 300)) : (e && (e.style.transition = `transform ${$}ms ${vi}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), g.value = 0, setTimeout(() => {
				w || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330));
		}
		function V() {
			if (!h.value) return;
			h.value = !1, g.value = 0;
			let e = f.value, t = d.value;
			e && (e.style.transition = `transform ${$}ms ${vi}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), setTimeout(() => {
				w || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330);
		}
		return C(() => {
			bt(j), k = Et(), document.addEventListener("keydown", N), v(() => {
				F(), f.value?.contains(document.activeElement) || (f.value?.querySelector(yi)?.focus(), f.value?.contains(document.activeElement) || f.value?.focus());
			});
		}), S(() => {
			xt(j), k(), document.removeEventListener("keydown", N), clearTimeout(E), w = !0, M instanceof HTMLElement && M.isConnected && bi(M);
		}), (n, r) => (T(), a(t, { to: "body" }, [c("div", {
			ref_key: "overlay",
			ref: d,
			class: "am-overlay",
			style: x([e.zIndex === 3e3 ? {} : { zIndex: e.zIndex }, {
				"--am-fullscreen-height": P(p),
				"--am-width": m.value
			}]),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			onMousedown: W(L, ["self"])
		}, [c("div", {
			ref_key: "card",
			ref: f,
			class: y(["am-card", {
				"am-card-wide": e.wide,
				"am-card-extra-wide": e.extraWide,
				"am-card-full": e.fullscreen,
				"am-card-flush": e.flush,
				"am-card-unoutlined": !e.outlined,
				"am-card-compact": e.compact && !e.fullscreen
			}]),
			tabindex: "-1",
			onTouchstartPassive: R,
			onTouchmove: z,
			onTouchendPassive: B,
			onTouchcancelPassive: V
		}, [
			e.showHandle ? (T(), s("div", mi)) : o("", !0),
			e.showClose && !e.fullscreen ? (T(), s("button", {
				key: 1,
				class: "am-close",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: L
			}, "✕", 8, hi)) : o("", !0),
			A(n.$slots, "default", {}, void 0, !0)
		], 34)], 44, pi)]));
	}
}, [["__scopeId", "data-v-4e16b3d7"]]), Si = { class: "aem-shell" }, Ci = { class: "aem-heading" }, wi = { class: "aem-title" }, Ti = {
	key: 0,
	class: "aem-subtitle"
}, Ei = {
	key: 0,
	class: "aem-header-actions"
}, Di = ["aria-label"], Oi = {
	key: 0,
	class: "aem-footer"
}, ki = /*#__PURE__*/ G({
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
		outlined: {
			type: Boolean,
			default: !0
		},
		compact: {
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
		let t = O(null);
		function n() {
			t.value?.requestClose();
		}
		return (r, i) => (T(), a(xi, {
			ref_key: "modal",
			ref: t,
			flush: "",
			wide: e.wide,
			"extra-wide": e.extraWide,
			fullscreen: e.fullscreen,
			outlined: e.outlined,
			compact: e.compact,
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
			default: V(() => [c("section", Si, [
				c("header", { class: y(["aem-header", { "aem-header-with-actions": !!r.$slots["header-actions"] }]) }, [
					i[3] ||= c("span", {
						class: "aem-handle",
						"aria-hidden": "true"
					}, null, -1),
					c("div", Ci, [A(r.$slots, "title", {}, () => [c("h2", wi, N(e.title), 1), e.subtitle ? (T(), s("span", Ti, N(e.subtitle), 1)) : o("", !0)], !0)]),
					r.$slots["header-actions"] ? (T(), s("div", Ei, [A(r.$slots, "header-actions", {}, void 0, !0)])) : o("", !0),
					e.showClose ? (T(), s("button", {
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
					})], -1)]], 8, Di)) : o("", !0)
				], 2),
				c("div", { class: y(["aem-body", {
					"aem-body-flush": !e.padded,
					"aem-body-no-scroll": !e.bodyScroll
				}]) }, [A(r.$slots, "default", {}, void 0, !0)], 2),
				r.$slots.footer ? (T(), s("footer", Oi, [A(r.$slots, "footer", {}, void 0, !0)])) : o("", !0)
			])]),
			_: 3
		}, 8, [
			"wide",
			"extra-wide",
			"fullscreen",
			"outlined",
			"compact",
			"dismissible",
			"z-index",
			"width",
			"aria-label",
			"close-label"
		]));
	}
}, [["__scopeId", "data-v-1fab7c24"]]), Ai = ["aria-label"], ji = {
	key: 0,
	class: "share-loading__label",
	"aria-hidden": "true"
}, Mi = /*#__PURE__*/ G({
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
		return (t, r) => (T(), s("span", {
			class: y(["share-loading", { "share-loading--inline": e.inline }]),
			style: x({ "--loading-size": n.value }),
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
		})], -1), e.showLabel ? (T(), s("span", ji, N(e.label), 1)) : o("", !0)], 14, Ai));
	}
}, [["__scopeId", "data-v-c549d335"]]), Ni = {
	key: 0,
	class: "cd-message"
}, Pi = { class: "cd-actions" }, Fi = ["disabled"], Ii = ["aria-busy", "disabled"], Li = /*#__PURE__*/ G({
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
		return (t, n) => l.value ? (T(), a(ki, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: h
		}, {
			footer: V(() => [c("div", Pi, [c("button", {
				type: "button",
				class: "cd-btn-cancel",
				disabled: e.loading,
				onClick: h
			}, N(f.value), 9, Fi), c("button", {
				type: "button",
				class: y(["cd-btn-confirm", `cd-btn--${p.value}`]),
				"aria-busy": e.loading,
				disabled: e.loading,
				onClick: g
			}, [e.loading ? (T(), a(Mi, {
				key: 0,
				label: e.loadingLabel,
				size: "xs",
				class: "button-loading",
				"aria-hidden": "true"
			}, null, 8, ["label"])) : o("", !0), d(" " + N(e.loading ? e.loadingLabel : u.value), 1)], 10, Ii)])]),
			default: V(() => [e.message ? (T(), s("div", Ni, N(e.message), 1)) : o("", !0)]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : o("", !0);
	}
}, [["__scopeId", "data-v-846211e5"]]), Ri = {
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
		return (t, n) => e.open ? (T(), a(xi, {
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
			default: V(() => [A(t.$slots, "default")]),
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
function zi({ open: e = 420, close: t = 300 } = {}) {
	let n = (e) => typeof window < "u" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? 0 : Math.max(0, typeof e == "function" ? e() : e), r = "cubic-bezier(.2, 0, 0, 1)", i = "var(--shadow-lg)", a = [
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
	], o = O(!1), s = O(!1), c = null;
	function l(e, t, n, i) {
		e.style.position = "fixed", e.style.margin = "0", e.style.left = `${t.left}px`, e.style.top = `${t.top}px`, e.style.width = `${t.width}px`, e.style.height = `${t.height}px`, e.style.maxHeight = "none", e.style.overflow = "hidden", e.style.transition = n ? `left ${i}ms ${r}, top ${i}ms ${r}, width ${i}ms ${r}, height ${i}ms ${r}, border-radius ${i}ms ${r}, box-shadow ${i}ms ${r}` : "none";
	}
	function u(e) {
		a.forEach((t) => e.style.removeProperty(t.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase())));
	}
	function d(t, r, { fromRadius: a = "0px", toRadius: d = "0px" } = {}) {
		clearTimeout(c);
		let f = n(e);
		if (!t || !r) {
			o.value = !0;
			return;
		}
		s.value = !0;
		let p = t.getBoundingClientRect();
		l(t, r, !1, f), t.style.borderRadius = a, t.style.boxShadow = "none", t.offsetWidth, o.value = !0, l(t, p, !0, f), t.style.borderRadius = d, t.style.boxShadow = i, c = setTimeout(() => {
			u(t), s.value = !1;
		}, f + 20);
	}
	function f(e, r, { fromRadius: a = "0px", toRadius: u = "0px" } = {}, d = () => {}) {
		clearTimeout(c);
		let f = n(t);
		if (!e || !r) {
			o.value = !1, c = setTimeout(d, f);
			return;
		}
		s.value = !0, l(e, e.getBoundingClientRect(), !1, f), e.style.borderRadius = a, e.style.boxShadow = i, e.offsetWidth, o.value = !1, l(e, r, !0, f), e.style.borderRadius = u, e.style.boxShadow = "none", c = setTimeout(d, f);
	}
	return {
		EASE: r,
		visible: o,
		morphing: s,
		playOpen: d,
		playClose: f
	};
}
//#endregion
//#region src/components/overlay/MorphSheet.vue
var Bi = ["aria-label"], Vi = { class: "ms-head-content" }, Hi = ["aria-label"], Ui = 320, Wi = 260, Gi = "8px", Ki = /*#__PURE__*/ G({
	__name: "MorphSheet",
	props: {
		openDuration: {
			type: Number,
			default: 420
		},
		closeDuration: {
			type: Number,
			default: 300
		},
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
		let l = e, u = r, d = un(), f = L(), p = i(() => l.mode === "add"), m = i(() => l.showClose === null ? !!f.head : l.showClose), h = i(() => l.nav ? l.nav.view.value : "detail"), g = i(() => l.nav ? l.nav.detailStyle.value : null), _ = i(() => l.nav ? l.nav.subStyle.value : null), b = i(() => !!l.nav && h.value !== "detail"), w = O(null), E = O(null), D = O(null), k = O(null), j = O(null), M = O(null), N = O(!1), F = O(!1), I = O(!1), R = O(!1), z = O(!1), { EASE: V, visible: H, morphing: U, playClose: G, playOpen: ee } = zi({
			open: () => l.openDuration,
			close: () => l.closeDuration
		}), te = () => d.value ? "0px" : "18px", ne = i(() => ({
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
			if (z.value = !1, Te(!1), p.value) {
				I.value = !1, H.value = !1, setTimeout(() => u("close"), 320);
				return;
			}
			G(w.value, re(), {
				fromRadius: te(),
				toRadius: l.originRadius
			}, () => u("close"));
		}
		function ae() {
			F.value = !0, z.value = !1, H.value = !1, Te(!1), setTimeout(() => u("close"), 220);
		}
		let oe = Symbol("morph-sheet"), se = typeof document < "u" ? document.activeElement : null;
		function K(e) {
			if (St(oe)) {
				if (e.key === "Escape") {
					ie();
					return;
				}
				wt(e, w.value);
			}
		}
		function q(e) {
			let t = e?.firstElementChild;
			return t ? t.scrollHeight : e?.scrollHeight || 0;
		}
		function ce() {
			return Math.floor(window.innerHeight * .9) - (E.value?.offsetHeight || 0) - (D.value?.offsetHeight || 0);
		}
		function J(e) {
			if (d.value || !k.value || U.value) return;
			let t = l.nav ? l.nav.pos.value : 0, n = q(j.value), r = M.value ? q(M.value) : n, i = n * (1 - t) + r * t, a = Math.min(i, Math.max(120, ce()));
			k.value.style.transition = e ? `height ${Ui}ms ${V}` : "none", k.value.style.height = `${a}px`;
		}
		let Y = null;
		function le() {
			Y && (Y.disconnect(), [j.value?.firstElementChild, M.value?.firstElementChild].forEach((e) => {
				e && Y.observe(e);
			}));
		}
		function ue() {
			U.value || l.nav && l.nav.animating.value || fe || J(!1);
		}
		l.nav && (B(() => l.nav.pos.value, () => J(l.nav.animating.value)), B(() => l.nav.view.value, (e, t) => v(() => {
			le(), e !== "detail" && t === "detail" && M.value && (M.value.offsetWidth, l.nav.enterSub()), l.nav.animating.value || J(!1);
		})));
		let de = O(0), fe = !1, pe = 0, me = 0, X = null, Z = 0, he = null, ge = 0, _e = 0, ve = 0;
		function Q(e) {
			!d.value || U.value || (pe = e.touches[0].clientX, me = e.touches[0].clientY, he = e.target, X = null);
		}
		function ye() {
			let e = he;
			for (; e && e !== w.value;) {
				if (e.scrollHeight > e.clientHeight + 1) {
					let t = getComputedStyle(e).overflowY;
					if ((t === "auto" || t === "scroll") && e.scrollTop > 0) return !1;
				}
				e = e.parentElement;
			}
			return !0;
		}
		function be(e) {
			if (!d.value || U.value || X === "scroll") return;
			let t = e.touches[0].clientX - pe, n = e.touches[0].clientY - me;
			if (X === null) {
				if (l.showBack && l.nav && t > 8 && Math.abs(t) > Math.abs(n)) {
					X = "back", fe = !0, Z = t, ge = e.touches[0].clientX, _e = e.timeStamp, ve = 0, l.nav.dragStart(k.value?.clientWidth || window.innerWidth);
					return;
				}
				if (n > 6 && ye() && Math.abs(n) >= Math.abs(t)) X = "drag";
				else if (Math.abs(n) > 6 || Math.abs(t) > 6) {
					X = "scroll";
					return;
				} else return;
			}
			if (X === "back") {
				Z = Math.max(0, t), e.cancelable && e.preventDefault();
				let n = e.touches[0].clientX, r = e.timeStamp;
				r > _e && (ve = (n - ge) / (r - _e)), ge = n, _e = r, l.nav.dragMove(Z);
				return;
			}
			if (X !== "drag") return;
			e.cancelable && e.preventDefault(), de.value = Math.max(0, n);
			let r = w.value;
			r && (r.style.transition = "none", r.style.transform = `translateY(${de.value}px)`);
		}
		function xe() {
			if (X === "back") {
				fe = !1, X = null, l.nav.dragEnd(Z, ve), Z = 0, ve = 0;
				return;
			}
			if (X !== "drag") {
				X = null;
				return;
			}
			X = null;
			let e = w.value;
			if (de.value > 120) {
				Se();
				return;
			}
			de.value = 0, e && (e.style.transition = `transform .26s ${V}`, e.style.transform = "translateY(0)");
		}
		function Se() {
			let e = w.value;
			e && (e.style.transition = `transform ${Wi}ms ${V}`, e.style.transform = `translateY(${window.innerHeight}px)`), H.value = !1, z.value = !1, je(), Te(!1), setTimeout(() => u("close"), Wi);
		}
		let Ce = () => {};
		function we() {
			return typeof l.backgroundTarget == "string" ? document.querySelector(l.backgroundTarget) : l.backgroundTarget instanceof Element ? l.backgroundTarget : null;
		}
		function Te(e) {
			Ce(), Ce = () => {}, !(!e || d.value || !l.blurBackground) && (Ce = Ot(we(), { blur: Gi }));
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
			e.style.transition = `${t}opacity ${Wi}ms ease`, e.style.opacity = "0", requestAnimationFrame(() => {
				e.style.opacity = Ee;
			}), setTimeout(() => {
				e.style.opacity = Ee, e.style.transition = De, Oe = !1;
			}, 280);
		}
		let Me = () => {};
		function Ne() {
			U.value || (d.value && k.value ? k.value.style.height = "" : J(!1));
		}
		return C(async () => {
			bt(oe), Me = Et(), typeof ResizeObserver < "u" && (Y = new ResizeObserver(ue)), await v(), J(!1), le(), N.value = !0, p.value ? (H.value = !0, requestAnimationFrame(() => {
				I.value = !0, R.value = !0;
			})) : (ke(), Ae(!0), ee(w.value, l.originRect, {
				fromRadius: l.originRadius,
				toRadius: te()
			}), requestAnimationFrame(() => {
				R.value = !0;
			})), Te(!0), setTimeout(() => {
				z.value = !0, J(!1), Ct(w.value);
			}, 20), document.addEventListener("keydown", K), window.addEventListener("resize", Ne);
		}), S(() => {
			xt(oe), Me(), Te(!1), !p.value && !Oe && Ae(!1), document.removeEventListener("keydown", K), window.removeEventListener("resize", Ne), Y?.disconnect(), Tt(se);
		}), n({
			close: ie,
			finishNow: ae
		}), (n, r) => (T(), a(t, { to: "body" }, [c("div", {
			class: y(["ms-overlay", { visible: P(H) }]),
			style: x(e.zIndex === 1e3 ? null : { zIndex: e.zIndex }),
			onClick: W(ie, ["self"])
		}, [c("div", {
			ref_key: "panelEl",
			ref: w,
			class: y(["ms-sheet", {
				shown: N.value,
				closing: F.value,
				entered: I.value,
				padded: R.value,
				"add-sheet": p.value,
				"ms-framed": e.frameColor
			}]),
			style: x(ne.value),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			tabindex: "-1",
			onTouchstartPassive: Q,
			onTouchmove: be,
			onTouchend: xe,
			onTouchcancel: xe
		}, [
			r[0] ||= c("div", { class: "ms-grab" }, null, -1),
			n.$slots.head ? (T(), s("div", {
				key: 0,
				ref_key: "headEl",
				ref: E,
				class: "ms-head"
			}, [c("div", Vi, [A(n.$slots, "head", {}, void 0, !0)]), m.value ? (T(), s("button", {
				key: 0,
				class: "ms-x",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: ie
			}, "✕", 8, Hi)) : o("", !0)], 512)) : o("", !0),
			c("div", {
				ref_key: "bodyEl",
				ref: k,
				class: "ms-body"
			}, [c("div", {
				ref_key: "detailCellEl",
				ref: j,
				class: "ms-cell",
				style: x(g.value)
			}, [A(n.$slots, "detail", { revealed: z.value }, () => [A(n.$slots, "default", { revealed: z.value }, void 0, !0)], !0)], 4), b.value ? (T(), s("div", {
				key: 0,
				ref_key: "subCellEl",
				ref: M,
				class: "ms-cell",
				style: x(_.value)
			}, [A(n.$slots, "sub", {}, void 0, !0)], 4)) : o("", !0)], 512),
			e.showFoot && n.$slots.foot ? (T(), s("div", {
				key: 1,
				ref_key: "footEl",
				ref: D,
				class: "ms-foot"
			}, [A(n.$slots, "foot", {}, void 0, !0)], 512)) : o("", !0)
		], 46, Bi)], 6)]));
	}
}, [["__scopeId", "data-v-c5b79059"]]), qi = { class: "form-actions" }, Ji = ["disabled"], Yi = ["aria-busy", "disabled"], Xi = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("div", qi, [c("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, N(e.cancelText), 9, Ji), c("button", {
			type: "button",
			class: "form-actions__submit",
			"aria-busy": e.loading,
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, [e.loading ? (T(), a(Mi, {
			key: 0,
			label: e.loadingText,
			size: "xs",
			class: "button-loading",
			"aria-hidden": "true"
		}, null, 8, ["label"])) : o("", !0), d(" " + N(e.loading ? e.loadingText : e.submitText), 1)], 8, Yi)]));
	}
}, [["__scopeId", "data-v-c01a950d"]]), Zi = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], Qi = /*#__PURE__*/ G({
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
		let n = e, r = O(null);
		return C(() => {
			n.autofocus && r.value?.focus();
		}), t({ focus: () => r.value?.focus() }), (t, n) => (T(), s("input", {
			ref_key: "inputRef",
			ref: r,
			class: y(["form-text-input", {
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
			onKeydown: n[2] ||= U((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, Zi));
	}
}, [["__scopeId", "data-v-3dd2fc56"]]), $i = {
	key: 0,
	class: "tpd-message"
}, ea = {
	key: 1,
	class: "tpd-label"
}, ta = /*#__PURE__*/ G({
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
		let n = e, r = t, c = i(() => n.open === null || n.open), l = i(() => n.confirmText || n.confirmLabel), u = i(() => n.cancelText || n.cancelLabel), d = O(n.value || n.initial);
		B(() => n.value, (e) => {
			d.value = e;
		}), B(() => n.open, (e) => {
			e && v(() => {
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
		return (t, n) => c.value ? (T(), a(ki, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: V(() => [f(Xi, {
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
			default: V(() => [
				e.message ? (T(), s("div", $i, N(e.message), 1)) : o("", !0),
				e.label ? (T(), s("label", ea, N(e.label), 1)) : o("", !0),
				f(Qi, {
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
}, [["__scopeId", "data-v-ba4b1b08"]]), na = { class: "form-field-label" }, ra = {
	key: 0,
	class: "form-field-hint"
}, ia = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("div", { class: y(["form-field", { "form-field--vertical": e.vertical }]) }, [c("span", na, [d(N(e.label), 1), e.hint ? (T(), s("span", ra, N(e.hint), 1)) : o("", !0)]), A(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-3ab3f287"]]), aa = { class: "fn-wrap" }, oa = [
	"value",
	"min",
	"max",
	"step"
], sa = /*#__PURE__*/ G({
	__name: "FormNumberInput",
	props: {
		value: { default: 0 },
		live: {
			type: Boolean,
			default: !1
		},
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
		let o = O(String(n.value ?? "")), l = O(!1), u = n.value;
		B(() => n.value, (e) => {
			(!l.value || e !== u) && (o.value = String(e ?? "")), u = e;
		});
		function d(e) {
			(!n.live || e !== u) && (u = e, r("change", e));
		}
		function f(e) {
			n.live && (e.target.value.trim() === "" || !Number.isFinite(Number(e.target.value))) || d(i(a(e.target.value)));
		}
		function p(e) {
			o.value = e.target.value, n.live && f(e);
		}
		function m(e) {
			l.value = !1, n.live && (f(e), o.value = String(n.value ?? ""));
		}
		function h(e) {
			let t = Number((a(n.value) + e * n.step).toPrecision(15));
			r("change", i(t));
		}
		return (t, n) => (T(), s("div", aa, [
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[0] ||= W((e) => h(-1), ["stop"])
			}, "−"),
			c("input", {
				class: "fn-input",
				type: "number",
				value: e.live ? o.value : e.value,
				min: e.min,
				max: e.max,
				step: e.step,
				onChange: f,
				onInput: p,
				onFocus: n[1] ||= (e) => l.value = !0,
				onBlur: m
			}, null, 40, oa),
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[2] ||= W((e) => h(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-9775803a"]]), ca = ["value"], la = /*#__PURE__*/ G({
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
		let r = e, i = n, a = O(null);
		function o(e) {
			let t = e.target.options[e.target.selectedIndex], n = t && "_value" in t ? t._value : e.target.value;
			i("update:value", n), i("change", n);
		}
		return C(() => {
			r.autofocus && a.value?.focus();
		}), t({ focus: () => a.value?.focus() }), (t, n) => (T(), s("select", {
			ref_key: "selectRef",
			ref: a,
			class: "form-select",
			value: e.value,
			onChange: o
		}, [A(t.$slots, "default", {}, void 0, !0)], 40, ca));
	}
}, [["__scopeId", "data-v-cf13b596"]]), ua = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], da = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("textarea", {
			class: "form-textarea",
			value: e.value,
			placeholder: e.placeholder,
			rows: e.rows,
			maxlength: e.maxlength,
			onInput: n[0] ||= (e) => t.$emit("update:value", e.target.value)
		}, null, 40, ua));
	}
}, [["__scopeId", "data-v-89c3847b"]]), fa = {
	class: "share-inline-edit__measure",
	"aria-hidden": "true"
}, pa = {
	key: 0,
	class: "share-inline-edit__view"
}, ma = { class: "share-inline-edit__value" }, ha = ["aria-label", "disabled"], ga = ["onKeydown"], _a = [
	"value",
	"aria-label",
	"disabled",
	"aria-invalid"
], va = ["value", "disabled"], ya = [
	"value",
	"aria-label",
	"placeholder",
	"maxlength",
	"required",
	"disabled",
	"aria-invalid"
], ba = {
	key: 2,
	class: "share-inline-edit__actions"
}, xa = ["aria-label", "disabled"], Sa = ["aria-label", "disabled"], Ca = {
	key: 2,
	class: "share-inline-edit__error",
	role: "alert"
}, wa = /*#__PURE__*/ G({
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
		let r = t, a = n, l = O(!1), u = O(!1), f = O(""), p = O(r.modelValue), m = O(null), h = O(null), g = i(() => r.forceOpen || l.value), _ = (e) => r.options?.find((t) => String(t.value) === String(e))?.label, b = i(() => r.displayValue ?? _(r.modelValue) ?? (r.modelValue === "" || r.modelValue == null ? r.placeholder : r.modelValue)), x = i(() => {
			let e = g.value ? _(p.value) ?? p.value : b.value;
			return e === "" || e == null ? r.placeholder || "\xA0" : String(e);
		});
		B(() => r.modelValue, (e) => {
			l.value || (p.value = e);
		}), B(() => r.forceOpen, () => {
			l.value = !1, p.value = r.modelValue, f.value = "";
		});
		async function S() {
			r.disabled || (p.value = r.modelValue, f.value = "", l.value = !0, await v(), m.value?.focus(), m.value?.select?.());
		}
		function C(e) {
			p.value = r.options ? r.options.find((t) => String(t.value) === e)?.value ?? e : e, r.forceOpen && a("update:modelValue", p.value);
		}
		function w() {
			u.value || r.forceOpen || (l.value = !1, p.value = r.modelValue, f.value = "", a("cancel"), v(() => h.value?.focus()));
		}
		function E(e) {
			e.isComposing || r.forceOpen || (e.preventDefault(), D());
		}
		async function D() {
			if (!(u.value || r.disabled || r.required && !String(p.value ?? "").trim())) {
				u.value = !0, f.value = "";
				try {
					if (r.persist && await r.persist(p.value) === !1) return;
					a("update:modelValue", p.value), a("confirm", p.value), l.value = !1, v(() => h.value?.focus());
				} catch (e) {
					f.value = e?.message || r.errorLabel;
				} finally {
					u.value = !1;
				}
			}
		}
		return (n, r) => (T(), s("span", { class: y(["share-inline-edit", { "share-inline-edit--open": g.value }]) }, [
			c("span", fa, N(x.value), 1),
			g.value ? (T(), s("span", {
				key: 1,
				class: "share-inline-edit__editor",
				onKeydown: [U(W(w, ["stop", "prevent"]), ["esc"]), U(E, ["enter"])]
			}, [t.options ? (T(), s("select", {
				key: 0,
				ref_key: "input",
				ref: m,
				value: p.value,
				"aria-label": t.label,
				disabled: t.disabled || u.value,
				"aria-invalid": !!f.value,
				onChange: r[0] ||= (e) => C(e.target.value)
			}, [(T(!0), s(e, null, k(t.options, (e) => (T(), s("option", {
				key: String(e.value),
				value: e.value,
				disabled: e.disabled
			}, N(e.label), 9, va))), 128))], 40, _a)) : (T(), s("input", {
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
			}, null, 40, ya)), t.forceOpen ? o("", !0) : (T(), s("span", ba, [c("button", {
				type: "button",
				"aria-label": t.confirmLabel,
				disabled: t.disabled || u.value || t.required && !String(p.value ?? "").trim(),
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
			})], -1)]], 8, xa), c("button", {
				type: "button",
				"aria-label": t.cancelLabel,
				disabled: u.value,
				onClick: w
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
			})], -1)]], 8, Sa)]))], 40, ga)) : (T(), s("span", pa, [c("span", ma, [A(n.$slots, "default", { value: t.modelValue }, () => [d(N(b.value), 1)], !0)]), t.editable ? (T(), s("button", {
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
			})], -1)]], 8, ha)) : o("", !0)])),
			f.value ? (T(), s("span", Ca, N(f.value), 1)) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-c8e5a3a1"]]), Ta = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("span", {
			class: y(["share-skeleton", { "share-skeleton--round": e.round }]),
			style: x({
				width: e.width,
				height: e.height
			}),
			"aria-hidden": "true"
		}, null, 6));
	}
}, [["__scopeId", "data-v-a3d65c09"]]), Ea = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("div", {
			class: y(["share-loading-state", {
				"share-loading-state--compact": e.compact,
				"share-loading-state--fill": e.fill
			}]),
			"aria-busy": "true"
		}, [f(Mi, {
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
}, [["__scopeId", "data-v-eab73cf4"]]), Da = [
	"type",
	"disabled",
	"aria-busy"
], Oa = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("button", {
			class: y(["share-action-button", [`share-action-button--${e.variant}`, {
				"share-action-button--icon-only": e.iconOnly,
				"share-action-button--stacked": e.layout === "stacked" && !e.iconOnly
			}]]),
			type: e.type,
			disabled: e.disabled || e.loading,
			"aria-busy": e.loading || void 0
		}, [e.loading ? (T(), a(Mi, {
			key: 0,
			label: e.loadingLabel,
			size: "xs",
			"aria-hidden": "true"
		}, null, 8, ["label"])) : A(t.$slots, "icon", {}, void 0, !0, 1), c("span", null, [A(t.$slots, "default", {}, void 0, !0)])], 10, Da));
	}
}, [["__scopeId", "data-v-03274259"]]), ka = {
	class: "share-icon-toggle__icon",
	"aria-hidden": "true"
}, Aa = /*#__PURE__*/ G({
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
		return (t, n) => (T(), a(Oa, {
			class: y(["share-icon-toggle", { "share-icon-toggle--on": e.modelValue }]),
			style: x({ "--icon-toggle-color": e.color || "var(--accent)" }),
			variant: "secondary",
			"icon-only": "",
			disabled: e.disabled,
			"aria-label": e.label,
			title: e.label,
			"aria-pressed": e.modelValue,
			onClick: i
		}, {
			icon: V(() => [c("span", ka, [A(t.$slots, "icon", {}, void 0, !0)]), n[0] ||= c("svg", {
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
}, [["__scopeId", "data-v-28796e03"]]), ja = (e) => `${Math.round(e)}px`, Ma = (e, t, n, r) => ({
	left: ja(e),
	top: ja(t),
	width: ja(Math.max(0, n)),
	height: ja(Math.max(0, r))
}), Na = (e, t, n) => Math.max(t, Math.min(e, n));
function Pa(e, t, n, r = !1) {
	let { width: i, height: a, left: o = 0, top: s = 0 } = t, c = o + i, l = s + a, u = Math.min(n.width, i - 24), d = Math.min(n.height, a - 24), f = null;
	if (e && e.width > 0 && e.height > 0) {
		let t = Na(e.left - 5, o, c), n = Na(e.top - 5, s, l), r = Na(e.right + 5, o, c), i = Na(e.bottom + 5, s, l);
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
		Ma(o, s, i, f.top - s),
		Ma(o, f.bottom, i, l - f.bottom),
		Ma(o, f.top, f.left - o, f.height),
		Ma(f.right, f.top, c - f.right, f.height)
	] : [Ma(o, s, i, a)], m = o + (i - u) / 2, h = s + (a - d) / 2;
	return f && (m = Na(f.left, o + 12, c - u - 12), h = f.bottom + 14 + d <= l - 12 ? f.bottom + 14 : f.top - d - 14, h < s + 12 && f.right + u + 14 <= c - 12 && (m = f.right + 14, h = f.top), h = Na(h, s + 12, l - d - 12)), r && (m = o + (i - u) / 2, h = f && f.top > s + a / 2 ? s + 12 : l - d - 12), {
		rect: f,
		masks: p,
		spotlight: f ? Ma(f.left, f.top, f.width, f.height) : {},
		card: {
			left: ja(m),
			top: ja(h),
			maxHeight: ja(a - 24)
		}
	};
}
//#endregion
//#region src/components/tutorial/GuidedTour.vue
var Fa = ["aria-label"], Ia = {
	"aria-live": "polite",
	"aria-atomic": "true"
}, La = {
	key: 0,
	role: "alert"
}, Ra = /*#__PURE__*/ G({
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
		let r = n, l = O(null), u = O(Pa(null, {
			width: 1,
			height: 1
		}, {
			width: 1,
			height: 1
		})), p = i(() => u.value.rect), m = i(() => u.value.spotlight), h = i(() => u.value.masks), g = i(() => u.value.card), _ = Symbol("guided-tour"), y = null, b = null, C = !1;
		function w() {
			if (!r.tour.active) return;
			let e = window.visualViewport;
			u.value = Pa(r.tour.target?.getBoundingClientRect(), {
				width: e?.width || window.innerWidth,
				height: e?.height || window.innerHeight,
				left: e?.offsetLeft || 0,
				top: e?.offsetTop || 0
			}, {
				width: l.value?.offsetWidth || 360,
				height: l.value?.offsetHeight || 220
			}, r.mobile), y = requestAnimationFrame(w);
		}
		function E(e) {
			e.stopImmediatePropagation(), e.key === "Escape" ? (e.preventDefault(), r.tour.error ? r.tour.stop() : r.tour.dismiss()) : wt(e, l.value);
		}
		function D(e) {
			l.value?.contains(e.target) || Ct(l.value);
		}
		function A() {
			cancelAnimationFrame(y), xt(_), C && (C = !1, window.removeEventListener("keydown", E, !0), document.removeEventListener("focusin", D, !0), Tt(b));
		}
		return B(() => r.tour.active, async (e) => {
			if (!e) {
				A();
				return;
			}
			b = document.activeElement, C = !0, bt(_), window.addEventListener("keydown", E, !0), document.addEventListener("focusin", D, !0), await v(), r.tour.active && (Ct(l.value), w());
		}, { immediate: !0 }), B(() => r.tour.index, async () => {
			await v(), r.tour.active && Ct(l.value);
		}), S(A), (r, i) => (T(), a(t, { to: "body" }, [n.tour.active ? (T(), s("div", {
			key: 0,
			class: "guided-tour",
			style: x({ zIndex: n.zIndex }),
			onMousedown: i[1] ||= W(() => {}, ["stop"]),
			onTouchstart: i[2] ||= W(() => {}, ["stop"])
		}, [
			(T(!0), s(e, null, k(h.value, (e, t) => (T(), s("div", {
				key: t,
				class: "guided-tour__mask",
				style: x(e)
			}, null, 4))), 128)),
			p.value ? (T(), s("div", {
				key: 0,
				class: "guided-tour__spotlight",
				style: x(m.value)
			}, null, 4)) : o("", !0),
			i[3] ||= c("div", { class: "guided-tour__shield" }, null, -1),
			c("section", {
				ref_key: "card",
				ref: l,
				class: "guided-tour__card",
				style: x(g.value),
				role: "dialog",
				"aria-modal": "true",
				"aria-label": n.tour.step?.title,
				tabindex: "-1"
			}, [
				c("div", Ia, [
					c("small", null, N(n.labels.progress(n.tour.index + 1, n.tour.steps.length)), 1),
					c("h2", null, N(n.tour.step?.title), 1),
					c("p", null, N(n.tour.step?.body), 1)
				]),
				n.tour.error ? (T(), s("p", La, N(n.labels.error), 1)) : o("", !0),
				c("footer", null, [
					f(Oa, {
						variant: "quiet",
						onClick: i[0] ||= (e) => n.tour.error ? n.tour.stop() : n.tour.dismiss()
					}, {
						default: V(() => [d(N(n.tour.error ? n.labels.close : n.labels.dismiss), 1)]),
						_: 1
					}),
					n.tour.index > 0 ? (T(), a(Oa, {
						key: 0,
						variant: "secondary",
						disabled: n.tour.busy,
						onClick: n.tour.previous
					}, {
						default: V(() => [d(N(n.labels.previous), 1)]),
						_: 1
					}, 8, ["disabled", "onClick"])) : o("", !0),
					n.tour.error ? (T(), a(Oa, {
						key: 1,
						disabled: n.tour.busy,
						onClick: n.tour.retry
					}, {
						default: V(() => [d(N(n.labels.retry), 1)]),
						_: 1
					}, 8, ["disabled", "onClick"])) : (T(), a(Oa, {
						key: 2,
						loading: n.tour.busy,
						"loading-label": n.labels.loading,
						onClick: n.tour.next
					}, {
						default: V(() => [d(N(n.tour.index === n.tour.steps.length - 1 ? n.labels.finish : n.labels.next), 1)]),
						_: 1
					}, 8, [
						"loading",
						"loading-label",
						"onClick"
					]))
				])
			], 12, Fa)
		], 36)) : o("", !0)]));
	}
}, [["__scopeId", "data-v-e912449f"]]);
//#endregion
//#region src/composables/useGuidedTour.js
function za({ onFinish: e = async () => {} } = {}) {
	let t = O(!1), n = O(!1), r = M(null), a = O(0), o = M([]), s = M(null), c = i(() => o.value[a.value] || null), l = null, u = [], d = null, f = !1, p = 0;
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
			if (await c.value?.enter?.(f), await v(), i.signal.aborted) return;
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
	async function _(e) {
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
	return w(g), {
		active: t,
		busy: n,
		error: r,
		index: a,
		steps: o,
		step: c,
		target: s,
		start: _,
		stop: g,
		next: () => a.value === o.value.length - 1 ? y("completed") : h(a.value + 1),
		previous: () => h(a.value - 1),
		dismiss: () => y("dismissed"),
		retry: () => d?.()
	};
}
//#endregion
//#region src/components/StatBar.vue
var Ba = ["aria-label", "aria-valuenow"], Va = {
	key: 1,
	class: "stat-bar-shine"
}, Ha = /*#__PURE__*/ G({
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
		return (n, i) => (T(), s("div", {
			class: y(["stat-bar", [`stat-bar--${t.size}`, {
				"stat-bar--decorated": t.decorated,
				"stat-bar--full": r.value >= 100
			}]]),
			role: "meter",
			"aria-label": t.label || void 0,
			"aria-valuemin": "0",
			"aria-valuemax": "100",
			"aria-valuenow": r.value,
			style: x({ "--bar-color": t.color })
		}, [
			c("div", {
				class: "stat-bar-fill",
				style: x({ width: r.value + "%" })
			}, [t.decorated ? (T(), s(e, { key: 0 }, [i[0] ||= c("span", { class: "stat-bar-bub stat-bar-bub1" }, null, -1), i[1] ||= c("span", { class: "stat-bar-bub stat-bar-bub2" }, null, -1)], 64)) : o("", !0)], 4),
			a.value > 0 ? (T(), s("div", {
				key: 0,
				class: "stat-bar-temp",
				style: x({
					left: r.value + "%",
					width: a.value + "%",
					"--temp-color": t.tempColor
				})
			}, null, 4)) : o("", !0),
			t.decorated ? (T(), s("span", Va)) : o("", !0)
		], 14, Ba));
	}
}, [["__scopeId", "data-v-4a3b34fc"]]), Ua = ["aria-label"], Wa = [
	"aria-label",
	"aria-pressed",
	"title",
	"disabled",
	"onClick"
], Ga = /*#__PURE__*/ G({
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
		return (n, r) => (T(), s("div", {
			class: "share-icon-picker",
			role: "group",
			"aria-label": t.label
		}, [(T(!0), s(e, null, k(t.options, (e) => (T(), s("button", {
			key: e.value,
			type: "button",
			class: y(["share-icon-picker__option", { "share-icon-picker__option--selected": e.value === t.modelValue }]),
			"aria-label": e.label || String(e.value),
			"aria-pressed": e.value === t.modelValue,
			title: e.label || String(e.value),
			disabled: t.disabled || e.disabled,
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [A(n.$slots, "icon", { option: e }, () => [(T(), a(j(e.icon), {
			size: 18,
			"aria-hidden": "true"
		}))], !0)], 10, Wa))), 128))], 8, Ua));
	}
}, [["__scopeId", "data-v-8e855500"]]), Ka = {
	key: 0,
	class: "detail-section-icon",
	"aria-hidden": "true"
}, qa = { class: "detail-section-label" }, Ja = {
	key: 1,
	class: "detail-section-rule",
	"aria-hidden": "true"
}, Ya = {
	key: 2,
	class: "detail-section-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	width: "14",
	height: "14"
}, Xa = ["id"], Za = /*#__PURE__*/ G({
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
		let n = e, r = t, l = I(), u = O(n.defaultOpen), d = i({
			get: () => n.modelValue ?? u.value,
			set: (e) => {
				u.value = e, r("update:modelValue", e);
			}
		});
		return (t, n) => (T(), s("section", { class: y(["detail-section", {
			"detail-section--collapsible": e.collapsible,
			"detail-section--open": d.value,
			"detail-section--illustrated": t.$slots.icon,
			"detail-section--danger": e.tone === "danger"
		}]) }, [(T(), a(j(e.collapsible ? "button" : "div"), {
			class: y(["detail-section-head", { "detail-section-head--btn": e.collapsible }]),
			type: e.collapsible ? "button" : null,
			"aria-expanded": e.collapsible ? d.value : void 0,
			"aria-controls": e.collapsible ? P(l) : void 0,
			onClick: n[0] ||= (t) => e.collapsible && (d.value = !d.value)
		}, {
			default: V(() => [
				t.$slots.icon ? (T(), s("span", Ka, [A(t.$slots, "icon", {}, void 0, !0)])) : o("", !0),
				c("span", qa, N(e.label), 1),
				t.$slots.icon ? (T(), s("span", Ja)) : o("", !0),
				e.collapsible ? (T(), s("svg", Ya, [...n[1] ||= [c("path", {
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
		])), H(c("div", {
			id: P(l),
			class: "detail-section-body"
		}, [A(t.$slots, "default", {}, void 0, !0)], 8, Xa), [[z, !e.collapsible || d.value]])], 2));
	}
}, [["__scopeId", "data-v-6a2f0c96"]]), Qa = [
	"role",
	"tabindex",
	"aria-current"
], $a = { class: "oli-icon" }, eo = {
	key: 0,
	class: "oli-metric"
}, to = { class: "oli-main" }, no = { class: "oli-name" }, ro = {
	key: 0,
	class: "oli-name-en"
}, io = ["title"], ao = {
	key: 0,
	class: "oli-sub"
}, oo = { class: "oli-right" }, so = {
	key: 0,
	class: "oli-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	width: "14",
	height: "14"
}, co = /*#__PURE__*/ G({
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
		return (t, n) => (T(), s("div", {
			class: y(["oli", {
				"oli--interactive": e.interactive,
				"oli--selected": e.selected
			}]),
			role: e.interactive ? "button" : void 0,
			tabindex: e.interactive ? 0 : void 0,
			"aria-current": e.selected ? "true" : void 0,
			onClick: n[0] ||= (n) => e.interactive && t.$emit("activate", n),
			onKeydown: i
		}, [
			c("div", $a, [A(t.$slots, "icon", {}, void 0, !0)]),
			t.$slots.metric ? (T(), s("div", eo, [A(t.$slots, "metric", {}, void 0, !0)])) : o("", !0),
			c("div", to, [c("div", { class: y(["oli-name-row", { "oli-name-row--center": e.nameCenter }]) }, [
				c("span", no, N(e.title), 1),
				e.alternateLabel ? (T(), s("span", ro, N(e.alternateLabel), 1)) : o("", !0),
				e.marker ? (T(), s("span", {
					key: 1,
					class: "oli-custom",
					title: e.markerLabel
				}, N(e.marker), 9, io)) : o("", !0),
				A(t.$slots, "name-extras", {}, void 0, !0)
			], 2), t.$slots.subtitle || e.subtitle ? (T(), s("div", ao, [A(t.$slots, "subtitle", {}, () => [d(N(e.subtitle), 1)], !0)])) : o("", !0)]),
			c("div", oo, [A(t.$slots, "trailing", {}, void 0, !0), e.showChevron ? (T(), s("svg", so, [...n[1] ||= [c("path", {
				d: "M6 12L10 8L6 4",
				stroke: "currentColor",
				"stroke-width": "1.6",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)]])) : o("", !0)])
		], 42, Qa));
	}
}, [["__scopeId", "data-v-bd72ecfc"]]), lo = ["id", "aria-label"], uo = [
	"id",
	"aria-selected",
	"aria-disabled",
	"onMouseenter",
	"onClick"
], fo = {
	key: 0,
	class: "share-option-list__empty"
}, po = /*#__PURE__*/ G({
	__name: "OptionList",
	props: {
		id: {
			type: String,
			default: () => I()
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
		return (n, r) => (T(), s("div", {
			id: t.id,
			class: "share-option-list",
			role: "listbox",
			"aria-label": t.label
		}, [
			(T(!0), s(e, null, k(t.options, (e, i) => (T(), s("div", {
				id: `${t.id}-${i}`,
				key: e.value,
				class: y(["share-option-list__option", { "share-option-list__option--active": i === t.activeIndex }]),
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
				onMousedown: r[1] ||= W(() => {}, ["prevent", "stop"]),
				onClick: W((t) => !e.disabled && n.$emit("select", e), ["stop"])
			}, [A(n.$slots, "option", { option: e }, () => [d(N(e.label), 1)], !0)], 42, uo))), 128)),
			t.options.length ? o("", !0) : (T(), s("div", fo, [A(n.$slots, "empty", {}, () => [d(N(t.emptyLabel), 1)], !0)])),
			A(n.$slots, "footer", {}, void 0, !0)
		], 8, lo));
	}
}, [["__scopeId", "data-v-6b7f7faa"]]), mo = { class: "share-search-multi-select" }, ho = {
	key: 0,
	class: "share-search-multi-select__tags"
}, go = /*#__PURE__*/ G({
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
		let r = t, c = n, u = O(null), p = O(!1), m = O(""), h = O(0), g = I(), _ = i(() => new Set(r.modelValue.map(String))), y = i(() => new Map(r.options.map((e) => [String(e.value), e]))), b = i(() => r.modelValue.map((e) => y.value.get(String(e))).filter(Boolean)), x = i(() => r.limit > 0 && r.modelValue.length >= r.limit), S = i(() => r.options.filter((e) => !_.value.has(String(e.value)) && !e.disabled && String(e.label).toLocaleLowerCase().includes(m.value.trim().toLocaleLowerCase()))), C = i(() => r.options.some((e) => String(e.label).trim().toLocaleLowerCase() === m.value.trim().toLocaleLowerCase()));
		B(S, (e) => {
			h.value = e.length ? 0 : -1;
		}), B(() => r.modelValue, () => {
			m.value = "", x.value ? p.value = !1 : p.value && v(() => u.value?.focus());
		}, { deep: !0 });
		function w(e) {
			x.value || c("update:modelValue", [...r.modelValue, e.value]);
		}
		function E(e) {
			c("update:modelValue", r.modelValue.filter((t) => String(t) !== String(e)));
		}
		function D(e) {
			if (["ArrowDown", "ArrowUp"].includes(e.key)) {
				e.preventDefault(), p.value = !0;
				let t = S.value.length;
				h.value = t ? (h.value + (e.key === "ArrowDown" ? 1 : -1) + t) % t : -1, v(() => document.getElementById(`${g}-${h.value}`)?.scrollIntoView({ block: "nearest" }));
			} else e.key === "Enter" && p.value && S.value[h.value] ? (e.preventDefault(), w(S.value[h.value])) : e.key === "Escape" ? (e.preventDefault(), p.value = !1) : e.key === "Tab" && (p.value = !1);
		}
		return (n, r) => (T(), s("div", mo, [
			b.value.length ? (T(), s("div", ho, [(T(!0), s(e, null, k(b.value, (e) => (T(), s("span", {
				key: e.value,
				class: "share-search-multi-select__tag"
			}, [d(N(e.label) + " ", 1), f(ze, {
				label: `${t.removeLabel}: ${e.label}`,
				disabled: t.disabled,
				onClick: (t) => E(e.value)
			}, null, 8, [
				"label",
				"disabled",
				"onClick"
			])]))), 128))])) : o("", !0),
			x.value ? o("", !0) : (T(), a(Qi, {
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
				"aria-controls": P(g),
				"aria-activedescendant": p.value && h.value >= 0 ? `${P(g)}-${h.value}` : void 0,
				"onUpdate:value": r[0] ||= (e) => {
					m.value = e, p.value = !0;
				},
				onFocus: r[1] ||= (e) => p.value = !0,
				onKeydown: D
			}, null, 8, [
				"value",
				"placeholder",
				"disabled",
				"aria-label",
				"aria-expanded",
				"aria-controls",
				"aria-activedescendant"
			])),
			f(fn, {
				open: p.value,
				"onUpdate:open": r[5] ||= (e) => p.value = e,
				anchor: u.value?.$el,
				"min-width": 260,
				"z-index": t.zIndex,
				related: ""
			}, {
				default: V(() => [f(po, {
					id: P(g),
					label: t.label,
					options: S.value,
					"active-index": h.value,
					"empty-label": t.emptyLabel,
					onActive: r[4] ||= (e) => h.value = e,
					onSelect: w
				}, l({ _: 2 }, [t.allowCreate && m.value.trim() && !C.value && !S.value.length ? {
					name: "footer",
					fn: V(() => [f(Oa, {
						loading: t.creating,
						disabled: t.creating,
						variant: "quiet",
						onMousedown: r[2] ||= W(() => {}, ["prevent", "stop"]),
						onClick: r[3] ||= (e) => n.$emit("create", m.value.trim())
					}, {
						default: V(() => [d(N(t.createLabel) + " «" + N(m.value.trim()) + "»", 1)]),
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
}, [["__scopeId", "data-v-d6731ef9"]]), _o = ["id"], vo = /*#__PURE__*/ G({
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
		let r = e, i = I(), o = O(null), s = O({ visibility: "hidden" }), l, u, d;
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
		return B(() => r.anchor, (e) => {
			h(), d = e?.setAttribute ? e : null, d && d.setAttribute("aria-describedby", [.../* @__PURE__ */ new Set([...(d.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean), i])].join(" ")), typeof window < "u" && v(m);
		}, { immediate: !0 }), B(() => [
			r.x,
			r.top,
			r.bottom,
			r.width
		], m), C(() => {
			p(), l = new ResizeObserver(m), l.observe(o.value), window.addEventListener("resize", m, { passive: !0 }), window.addEventListener("scroll", m, {
				passive: !0,
				capture: !0
			}), window.visualViewport?.addEventListener("resize", m), window.visualViewport?.addEventListener("scroll", m);
		}), S(() => {
			h(), l?.disconnect(), u != null && cancelAnimationFrame(u), window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), window.visualViewport?.removeEventListener("resize", m), window.visualViewport?.removeEventListener("scroll", m);
		}), (r, l) => (T(), a(t, { to: "body" }, [f(n, {
			name: "share-tooltip",
			appear: ""
		}, {
			default: V(() => [c("div", {
				id: P(i),
				ref_key: "element",
				ref: o,
				class: y(["share-tooltip", e.tooltipClass]),
				style: x(s.value),
				role: "tooltip"
			}, [A(r.$slots, "default", {}, void 0, !0)], 14, _o)]),
			_: 3
		})]));
	}
}, [["__scopeId", "data-v-b3d3bcb1"]]);
//#endregion
//#region src/lib/calendar.js
function yo(e) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(e || "")) return null;
	let [t, n, r] = e.split("-").map(Number), i = /* @__PURE__ */ new Date(0);
	return i.setFullYear(t, n - 1, r), i.setHours(12, 0, 0, 0), t > 0 && i.getFullYear() === t && i.getMonth() === n - 1 && i.getDate() === r ? i : null;
}
function bo(e) {
	return `${String(e.getFullYear()).padStart(4, "0")}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function xo(e, t = "", n = "") {
	return !!(!yo(e) || t && e < t || n && e > n);
}
function So(e, t = 0, n = 0) {
	let r = yo(e);
	if (!r) return e;
	let i = r.getDate();
	r.setDate(1), r.setMonth(r.getMonth() + n);
	let a = new Date(r);
	a.setMonth(a.getMonth() + 1, 0);
	let o = a.getDate();
	return r.setDate(Math.min(i, o) + t), bo(r);
}
function Co(e, t, n = 1) {
	let r = /* @__PURE__ */ new Date(0);
	r.setFullYear(e, t, 1), r.setHours(12, 0, 0, 0);
	let i = (r.getDay() - n + 7) % 7;
	return Array.from({ length: 42 }, (e, n) => {
		let a = new Date(r);
		return a.setDate(n - i + 1), {
			value: bo(a),
			day: a.getDate(),
			outside: a.getMonth() !== t
		};
	});
}
//#endregion
//#region src/components/form/DatePicker.vue
var wo = { class: "share-date-picker" }, To = [
	"disabled",
	"aria-label",
	"aria-expanded"
], Eo = { class: "share-date-picker__heading" }, Do = ["aria-label"], Oo = ["value"], ko = ["value"], Ao = ["aria-label"], jo = ["aria-label"], Mo = {
	class: "share-date-picker__week",
	role: "row"
}, No = ["aria-selected"], Po = [
	"data-date",
	"tabindex",
	"disabled",
	"aria-label",
	"aria-current",
	"onClick",
	"onKeydown"
], Fo = { class: "share-date-picker__footer" }, Io = ["disabled"], Lo = /*#__PURE__*/ G({
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
		let r = t, a = n, l = O(null), u = O(null), d = O(!1), p = bo(/* @__PURE__ */ new Date()), m = i(() => yo(r.modelValue)), h = O(r.modelValue || p), g = O((/* @__PURE__ */ new Date()).getFullYear()), _ = O((/* @__PURE__ */ new Date()).getMonth()), b = i(() => Array.from({ length: 12 }, (e, t) => new Intl.DateTimeFormat(r.locale, { month: "long" }).format(new Date(2024, t, 1)))), x = i(() => Array.from({ length: 201 }, (e, t) => g.value - 100 + t).filter((e) => e >= 1 && e <= 9999)), S = i(() => Array.from({ length: 7 }, (e, t) => new Intl.DateTimeFormat(r.locale, { weekday: "short" }).format(new Date(2024, 0, 7 + (r.weekStartsOn + t) % 7)))), C = i(() => {
			let e = Co(g.value, _.value, r.weekStartsOn);
			return Array.from({ length: 6 }, (t, n) => e.slice(n * 7, n * 7 + 7));
		});
		function w(e, t = !1) {
			return new Intl.DateTimeFormat(r.locale, {
				day: "numeric",
				month: "long",
				year: "numeric",
				...t ? { weekday: "long" } : {}
			}).format(e);
		}
		function E(e) {
			return xo(e, r.min, r.max);
		}
		function D(e) {
			let t = yo(e) || /* @__PURE__ */ new Date();
			g.value = t.getFullYear(), _.value = t.getMonth(), h.value = bo(t);
		}
		async function A() {
			await v(), u.value?.querySelector(`[data-date="${h.value}"]`)?.focus({ preventScroll: !0 });
		}
		function j(e) {
			d.value = e, e || l.value?.focus();
		}
		async function M() {
			if (r.disabled) return;
			if (d.value) {
				j(!1);
				return;
			}
			let e = m.value ? r.modelValue : p;
			r.min && e < r.min && (e = r.min), r.max && e > r.max && (e = r.max), D(e), d.value = !0, await A();
		}
		function F(e) {
			r.disabled || e && E(e) || (a("update:modelValue", e), j(!1));
		}
		function I(e) {
			let t = So(h.value, 0, e);
			yo(t) && D(t);
		}
		function L(e) {
			I(e - _.value);
		}
		function R(e) {
			I((e - g.value) * 12);
		}
		function z(e, t) {
			let n = {
				ArrowLeft: -1,
				ArrowRight: 1,
				ArrowUp: -7,
				ArrowDown: 7
			}, i;
			if (e.key in n) i = So(t, n[e.key]);
			else if (e.key === "PageUp" || e.key === "PageDown") i = So(t, 0, (e.key === "PageUp" ? -1 : 1) * (e.shiftKey ? 12 : 1));
			else if (e.key === "Home" || e.key === "End") {
				let n = (yo(t).getDay() - r.weekStartsOn + 7) % 7;
				i = So(t, e.key === "Home" ? -n : 6 - n);
			} else return;
			e.preventDefault(), E(i) || (D(i), A());
		}
		function H(e) {
			if (e.key !== "Tab") return;
			let t = [...u.value.querySelectorAll("button:not(:disabled), select:not(:disabled)")].filter((e) => e.tabIndex >= 0), n = t[0], r = t.at(-1);
			e.shiftKey && e.target === n ? (e.preventDefault(), r?.focus()) : !e.shiftKey && e.target === r && (e.preventDefault(), n?.focus());
		}
		function U(e) {
			e.key === "Escape" && (e.stopPropagation(), e.preventDefault(), j(!1)), e.key === "Tab" && (e.stopPropagation(), H(e));
		}
		return B(() => r.disabled, (e) => {
			e && (d.value = !1);
		}), B(() => r.modelValue, (e) => {
			d.value && D(e);
		}), (n, r) => (T(), s("span", wo, [c("button", {
			ref_key: "anchor",
			ref: l,
			type: "button",
			class: "share-date-picker__trigger",
			disabled: t.disabled,
			"aria-label": t.ariaLabel,
			"aria-expanded": d.value,
			"aria-haspopup": "dialog",
			onClick: M
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
		}), c("path", { d: "M7 3v4m10-4v4M3 11h18m-13 4h3m3 0h2" })], -1), c("span", { class: y({ "share-date-picker__placeholder": !m.value }) }, N(m.value ? w(m.value) : t.placeholder), 3)], 8, To), f(fn, {
			open: d.value,
			anchor: l.value,
			"min-width": 0,
			"z-index": t.zIndex,
			role: "dialog",
			"aria-label": t.ariaLabel,
			"transition-preset": "action-menu",
			"close-on-scroll": !1,
			"onUpdate:open": j
		}, {
			default: V(() => [c("div", {
				ref_key: "calendar",
				ref: u,
				class: "share-date-picker__calendar",
				onKeydown: U
			}, [
				c("div", Eo, [
					c("button", {
						type: "button",
						"aria-label": t.previousLabel,
						onClick: r[0] ||= (e) => I(-1)
					}, "‹", 8, Do),
					f(la, {
						value: _.value,
						"aria-label": t.monthLabel,
						"onUpdate:value": r[1] ||= (e) => L(Number(e))
					}, {
						default: V(() => [(T(!0), s(e, null, k(b.value, (e, t) => (T(), s("option", {
							key: t,
							value: t
						}, N(e), 9, Oo))), 128))]),
						_: 1
					}, 8, ["value", "aria-label"]),
					f(la, {
						value: g.value,
						"aria-label": t.yearLabel,
						"onUpdate:value": r[2] ||= (e) => R(Number(e))
					}, {
						default: V(() => [(T(!0), s(e, null, k(x.value, (e) => (T(), s("option", {
							key: e,
							value: e
						}, N(e), 9, ko))), 128))]),
						_: 1
					}, 8, ["value", "aria-label"]),
					c("button", {
						type: "button",
						"aria-label": t.nextLabel,
						onClick: r[3] ||= (e) => I(1)
					}, "›", 8, Ao)
				]),
				c("div", {
					role: "grid",
					"aria-label": `${b.value[_.value]} ${g.value}`
				}, [c("div", Mo, [(T(!0), s(e, null, k(S.value, (e) => (T(), s("span", {
					key: e,
					role: "columnheader"
				}, N(e), 1))), 128))]), (T(!0), s(e, null, k(C.value, (n, r) => (T(), s("div", {
					key: r,
					class: "share-date-picker__week",
					role: "row"
				}, [(T(!0), s(e, null, k(n, (e) => (T(), s("span", {
					key: e.value,
					role: "gridcell",
					"aria-selected": e.value === t.modelValue
				}, [c("button", {
					type: "button",
					"data-date": e.value,
					tabindex: e.value === h.value ? 0 : -1,
					disabled: E(e.value),
					"aria-label": w(P(yo)(e.value), !0),
					"aria-current": e.value === P(p) ? "date" : void 0,
					class: y({
						outside: e.outside,
						selected: e.value === t.modelValue,
						today: e.value === P(p)
					}),
					onClick: (t) => F(e.value),
					onKeydown: (t) => z(t, e.value)
				}, N(e.day), 43, Po)], 8, No))), 128))]))), 128))], 8, jo),
				c("div", Fo, [c("button", {
					type: "button",
					disabled: E(P(p)),
					onClick: r[4] ||= (e) => F(P(p))
				}, N(t.todayLabel), 9, Io), t.allowClear ? (T(), s("button", {
					key: 0,
					type: "button",
					onClick: r[5] ||= (e) => F("")
				}, N(t.clearLabel), 1)) : o("", !0)])
			], 544)]),
			_: 1
		}, 8, [
			"open",
			"anchor",
			"z-index",
			"aria-label"
		])]));
	}
}, [["__scopeId", "data-v-a7b69f68"]]), Ro = { class: "share-timeline-group__rail" }, zo = { class: "share-timeline-group__identity" }, Bo = { class: "share-timeline-group__content" }, Vo = {
	key: 0,
	class: "share-timeline-group__footer"
}, Ho = /*#__PURE__*/ G({
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
		return (t, r) => (T(), s("section", {
			class: y(["share-timeline-group", {
				"share-timeline-group--separated": e.separated,
				"share-timeline-group--sticky": e.sticky
			}]),
			style: x(n.value)
		}, [
			c("div", Ro, [c("div", zo, [A(t.$slots, "identity", {}, void 0, !0)])]),
			c("div", Bo, [A(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.footer ? (T(), s("div", Vo, [A(t.$slots, "footer", {}, void 0, !0)])) : o("", !0)
		], 6));
	}
}, [["__scopeId", "data-v-d27f0f76"]]), Uo = [
	"role",
	"aria-label",
	"aria-disabled"
], Wo = {
	class: "share-star-rating__star",
	"aria-hidden": "true"
}, Go = "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1Z", Ko = /*#__PURE__*/ G({
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
		let r = t, o = n, l = O(0), u = [], d = i(() => Math.max(1, Math.min(r.max, Math.round(r.modelValue)))), f = (e) => Math.max(0, Math.min(1, (r.readonly ? r.modelValue : l.value || r.modelValue) - e + 1)) * 100;
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
		return (n, r) => (T(), s("div", {
			class: y(["share-star-rating", { "share-star-rating--readonly": t.readonly }]),
			role: t.readonly ? "img" : "radiogroup",
			"aria-label": t.readonly && t.valueLabel || t.label,
			"aria-disabled": !t.readonly && t.disabled || void 0,
			onMouseleave: r[1] ||= (e) => l.value = 0
		}, [(T(!0), s(e, null, k(t.max, (e) => (T(), a(j(t.readonly ? "span" : "button"), {
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
			default: V(() => [c("span", Wo, [c("svg", {
				viewBox: "0 0 24 24",
				fill: "none"
			}, [c("path", { d: Go })]), c("span", {
				class: "share-star-rating__fill",
				style: x({ width: `${f(e)}%` })
			}, [c("svg", { viewBox: "0 0 24 24" }, [c("path", { d: Go })])], 4)])]),
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
		]))), 128))], 42, Uo));
	}
}, [["__scopeId", "data-v-9950b486"]]);
//#endregion
export { qn as $, ki as A, Ce as At, Ur as B, K as Bt, Qi as C, Xe as Ct, Ri as D, Me as Dt, zi as E, Fe as Et, ii as F, X as Ft, wr as G, Rr as H, G as Ht, ei as I, de as It, Kn as J, yr as K, Qr as L, J as Lt, bi as M, ve as Mt, fi as N, _e as Nt, Li as O, Oe as Ot, di as P, Z as Pt, Zn as Q, Jr as R, ce as Rt, ta as S, st as St, Ki as T, ze as Tt, Nr as U, Vr as V, se as Vt, Er as W, Wn as X, Gn as Y, Vn as Z, wa as _, qt as _t, go as a, yn as at, sa as b, ht as bt, Za as c, vn as ct, za as d, ln as dt, Xn as et, Ra as f, cn as ft, Ta as g, Jt as gt, Ea as h, Ht as ht, vo as i, kn as it, xi as j, Q as jt, Mi as k, Ee as kt, Ga as l, fn as lt, Oa as m, Ut as mt, Ho as n, Hn as nt, po as o, bn as ot, Aa as p, tn as pt, er as q, Lo as r, Fn as rt, co as s, xn as st, Ko as t, Un as tt, Ha as u, un as ut, da as v, Kt as vt, Xi as w, Ue as wt, ia as x, ft as xt, la as y, Yt as yt, Kr as z, q as zt };
