import { Fragment as e, Teleport as t, Transition as n, TransitionGroup as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createStaticVNode as u, createTextVNode as d, createVNode as f, defineComponent as p, guardReactiveProps as m, h, inject as g, isRef as _, mergeProps as v, nextTick as y, normalizeClass as b, normalizeProps as x, normalizeStyle as S, onBeforeUnmount as C, onMounted as w, onScopeDispose as T, openBlock as E, provide as D, reactive as O, ref as k, renderList as A, renderSlot as j, resolveDynamicComponent as M, shallowRef as N, toDisplayString as P, unref as F, useCssVars as I, useId as L, useSlots as R, vModelCheckbox as z, vModelText as B, vShow as V, watch as H, withCtx as U, withDirectives as W, withKeys as G, withModifiers as K } from "vue";
//#region \0plugin-vue:export-helper
var q = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ee = [
	"aria-label",
	"aria-describedby",
	"aria-pressed",
	"disabled"
], J = {
	class: "share-choice-card__top",
	"aria-hidden": "true"
}, te = {
	key: 0,
	class: "share-choice-card__icon"
}, ne = {
	key: 1,
	class: "share-choice-card__check",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": "2",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Y = { class: "share-choice-card__body" }, re = { class: "share-choice-card__label" }, ie = ["id"], ae = /*#__PURE__*/ q({
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
		let n = t, r = L();
		return (t, i) => (E(), s("button", {
			type: "button",
			class: b(["share-choice-card", {
				"share-choice-card--selected": e.modelValue,
				"share-choice-card--inline": e.layout === "inline",
				"share-choice-card--icon": e.layout === "icon",
				"share-choice-card--described": e.description,
				"share-choice-card--tinted": e.tinted,
				"share-choice-card--centered": e.centered,
				"share-choice-card--outlined-selection": e.selectionIndicator === "outline"
			}]),
			style: S({ "--choice-card-color": e.color || "var(--accent)" }),
			"aria-label": e.label,
			"aria-describedby": e.description ? F(r) : void 0,
			"aria-pressed": e.modelValue,
			disabled: e.disabled,
			onClick: i[0] ||= (t) => n("update:modelValue", !e.modelValue)
		}, [c("span", J, [t.$slots.icon ? (E(), s("span", te, [j(t.$slots, "icon", {}, void 0, !0)])) : o("", !0), e.selectionIndicator === "check" ? (E(), s("svg", ne, [...i[1] ||= [c("circle", {
			cx: "12",
			cy: "12",
			r: "10"
		}, null, -1), c("path", { d: "m9 12 2 2 4-4" }, null, -1)]])) : o("", !0)]), c("span", Y, [c("span", re, P(e.label), 1), e.description ? (E(), s("span", {
			key: 0,
			id: F(r),
			class: "share-choice-card__description"
		}, P(e.description), 9, ie)) : o("", !0)])], 14, ee));
	}
}, [["__scopeId", "data-v-46aa0a91"]]);
//#endregion
//#region src/lib/blur.js
function oe(e = 8) {
	return `blur(${typeof e == "number" ? `${Number.isFinite(e) ? Math.max(0, e) : 0}px` : String(e ?? "").trim() || "0px"})`;
}
function X(e = 8) {
	let t = oe(e);
	return {
		"backdrop-filter": t,
		"-webkit-backdrop-filter": t
	};
}
function Z(e, t = 8) {
	if (e?.style) for (let [n, r] of Object.entries(X(t))) e.style.setProperty(n, r);
}
var se = /*#__PURE__*/ q({
	__name: "BlurBackdrop",
	props: { radius: {
		type: [Number, String],
		default: 8
	} },
	setup(e) {
		return (t, n) => (E(), s("div", {
			class: "blur-backdrop",
			"aria-hidden": "true",
			style: S(F(X)(e.radius))
		}, null, 4));
	}
}, [["__scopeId", "data-v-4f6e2fd7"]]), ce = [
	"role",
	"aria-label",
	"aria-hidden"
], le = ["src"], ue = {
	key: 1,
	class: "avatar-frame-fallback"
}, de = /*#__PURE__*/ q({
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
		let t = e, n = k(!1);
		H(() => t.src, () => {
			n.value = !1;
		});
		let r = (e) => typeof e == "number" ? `${e}px` : e, a = i(() => ({
			"--avatar-frame-size": r(t.size),
			"--avatar-frame-radius": r(t.radius),
			"--avatar-frame-fit": t.fit,
			"--avatar-frame-position": t.position
		}));
		return (t, r) => (E(), s("span", {
			class: "avatar-frame",
			style: S(a.value),
			role: e.label ? "img" : void 0,
			"aria-label": e.label || void 0,
			"aria-hidden": !e.label || void 0
		}, [e.src && !n.value ? (E(), s("img", {
			key: 0,
			src: e.src,
			alt: "",
			draggable: "false",
			onError: r[0] ||= (e) => n.value = !0
		}, null, 40, le)) : (E(), s("span", ue, [j(t.$slots, "default", {}, void 0, !0)]))], 12, ce));
	}
}, [["__scopeId", "data-v-5a1eb56b"]]), fe = Symbol("share-content-fit");
function Q(e, t, n = .5) {
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
function pe(e, t, n) {
	let r = k(1), i = k(!1), a = 0, o, s, c = !1, l = 0, u = 0, d = 0;
	function f() {
		let a = e.value, o = t.value;
		if (c || !a?.isConnected || !o || !(a.clientWidth > 0)) return;
		l = a.clientWidth, o.style.width = "max-content", o.style.whiteSpace = "nowrap", o.style.setProperty("--fit-content-wrap", "nowrap");
		let s = o.offsetWidth, f = Q(s, l, n());
		a.style.setProperty("--fit-content-natural-width", `${s}px`), f.wrapping && (o.style.width = `${l / f.scale}px`, o.style.whiteSpace = "normal", o.style.setProperty("--fit-content-wrap", "wrap"));
		let p = getComputedStyle(o);
		u = parseFloat(p.width) || o.offsetWidth, d = parseFloat(p.height) || o.offsetHeight, o.style.transform = `scale(${f.scale})`, a.style.height = `${Math.ceil(d * f.scale)}px`, a.dataset.fitReady = "", a.dataset.fitScale = String(f.scale), a.dataset.fitWrapping = String(f.wrapping), r.value = f.scale, i.value = f.wrapping;
	}
	function p() {
		c || a || (a = requestAnimationFrame(() => {
			a = 0, f();
		}));
	}
	return w(() => {
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
	}), H(n, p), C(() => {
		c = !0, a && cancelAnimationFrame(a), o?.disconnect(), s?.disconnect(), document.fonts?.removeEventListener("loadingdone", p);
	}), {
		scale: r,
		wrapping: i,
		refresh: f
	};
}
var me = /*#__PURE__*/ q({
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
		let n = e, r = k(null), i = k(null), o = g(fe, null), c = !!o, l = o || pe(r, i, () => n.minScale);
		D(fe, l);
		let { scale: u, wrapping: d, refresh: f } = l;
		return t({
			scale: u,
			wrapping: d,
			refresh: f
		}), (t, n) => (E(), a(M(e.tag), {
			ref_key: "root",
			ref: r,
			class: b(["share-fit-content", {
				"share-fit-content--inline": e.inline,
				"share-fit-content--inherited": c
			}]),
			"data-fit-owner": c ? void 0 : ""
		}, {
			default: U(() => [c ? j(t.$slots, "default", {
				scale: F(u),
				wrapping: F(d)
			}, void 0, !0, 0) : (E(), s("span", {
				key: 1,
				ref_key: "content",
				ref: i,
				class: "share-fit-content__content"
			}, [j(t.$slots, "default", {
				scale: F(u),
				wrapping: F(d)
			}, void 0, !0)], 512))]),
			_: 3
		}, 8, ["class", "data-fit-owner"]));
	}
}, [["__scopeId", "data-v-8ee3f767"]]), he = /*#__PURE__*/ q({
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
		return (t, r) => (E(), s("div", {
			class: b(["base-tile", {
				"base-tile--outlined": e.outlined,
				"base-tile--elevated": e.elevated,
				"base-tile--interactive": e.interactive,
				"base-tile--tint": e.tint,
				"base-tile--framed": e.framed,
				"base-tile--glass": e.surface === "glass",
				"base-tile--popover": e.surface === "popover"
			}]),
			style: S({
				"--tile-color": n.value,
				"--tile-frame-width": `${Math.max(1, Math.min(4, Number(e.frameWidth) || 1))}px`,
				...e.surface === "glass" ? F(X)(14) : {}
			}),
			onClick: r[0] ||= (e) => t.$emit("click", e)
		}, [j(t.$slots, "default", {}, void 0, !0)], 6));
	}
}, [["__scopeId", "data-v-0251a8a7"]]), ge = { class: "morph-tile-title" }, _e = ["aria-label", "disabled"], $ = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("div", { class: b(["morph-tile-header", { "morph-tile-header--compact": e.compactHeader }]) }, [(E(), a(M(e.showEdit && e.clickableTitle ? "button" : "div"), {
			class: b(["morph-tile-heading", { "morph-tile-heading--editable": e.showEdit && e.clickableTitle }]),
			type: e.showEdit && e.clickableTitle ? "button" : void 0,
			disabled: e.showEdit && e.clickableTitle && e.editFade || void 0,
			"aria-label": e.showEdit && e.clickableTitle ? `${e.editLabel}: ${e.title}` : void 0,
			onClick: n[1] ||= K((n) => e.showEdit && e.clickableTitle && !e.editFade && t.$emit("edit", n), ["stop"])
		}, {
			default: U(() => [c("span", ge, [j(t.$slots, "default", {}, () => [d(P(e.title), 1)], !0)]), e.showEdit && e.clickableTitle && e.showEditIcon ? (E(), s("svg", {
				key: 0,
				class: b(["morph-tile-pencil", { "morph-tile-pencil--hidden": e.editFade }]),
				viewBox: "0 0 24 24",
				width: "14",
				height: "14",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [...n[3] ||= [c("path", { d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }, null, -1)]], 2)) : e.showEdit && !e.clickableTitle ? (E(), s("button", {
				key: 1,
				class: "morph-tile-edit",
				type: "button",
				"aria-label": `${e.editLabel}: ${e.title}`,
				disabled: e.editFade,
				onClick: n[0] ||= K((e) => t.$emit("edit", e), ["stop"])
			}, [(E(), s("svg", {
				class: b(["morph-tile-pencil", { "morph-tile-pencil--hidden": e.editFade }]),
				viewBox: "0 0 24 24",
				width: "14",
				height: "14",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, [...n[4] ||= [c("path", { d: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }, null, -1)]], 2))], 8, _e)) : o("", !0)]),
			_: 3
		}, 8, [
			"class",
			"type",
			"disabled",
			"aria-label"
		])), t.$slots.aside ? (E(), s("div", {
			key: 0,
			class: "morph-tile-aside",
			onClick: n[2] ||= K(() => {}, ["stop"])
		}, [j(t.$slots, "aside", {}, void 0, !0)])) : o("", !0)], 2));
	}
}, [["__scopeId", "data-v-3115b3b3"]]), ve = /*#__PURE__*/ q({
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
		return (t, n) => (E(), a(M(e.embedded ? "div" : he), {
			class: "morph-tile",
			color: e.embedded ? void 0 : e.color,
			tint: e.embedded ? void 0 : e.tint,
			framed: e.embedded ? void 0 : e.framed,
			outlined: e.embedded ? void 0 : e.outlined,
			interactive: e.embedded ? void 0 : e.interactive,
			style: S({ "--morph-tile-padding": e.padding }),
			onClick: n[1] ||= (e) => t.$emit("click", e)
		}, {
			default: U(() => [
				j(t.$slots, "decoration", {}, void 0, !0),
				e.title || t.$slots.title || t.$slots.aside ? (E(), a($, {
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
					fn: U(() => [j(t.$slots, "title", {}, void 0, !0)]),
					key: "0"
				} : void 0, t.$slots.aside ? {
					name: "aside",
					fn: U(() => [j(t.$slots, "aside", {}, void 0, !0)]),
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
				j(t.$slots, "default", {}, void 0, !0)
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
}, [["__scopeId", "data-v-2af74b97"]]), ye = /*#__PURE__*/ q({
	__name: "TileAccentStrip",
	props: { color: {
		type: String,
		default: null
	} },
	setup(e) {
		return (t, n) => (E(), s("span", {
			class: "tile-accent-strip",
			style: S({ background: e.color || "var(--tile-color, var(--accent))" }),
			"aria-hidden": "true"
		}, null, 4));
	}
}, [["__scopeId", "data-v-c25cb074"]]), be = {
	key: 0,
	class: "share-section-list__header"
}, xe = {
	key: 0,
	class: "share-section-list__icon"
}, Se = { class: "share-section-list__title" }, Ce = {
	key: 1,
	class: "share-section-list__footer"
}, we = /*#__PURE__*/ q({
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
		return (t, n) => (E(), a(M(e.embedded ? "section" : he), {
			class: b(["share-section-list", {
				"share-section-list--embedded": e.embedded,
				"share-section-list--compact": e.compact
			}]),
			"aria-label": e.title || void 0
		}, {
			default: U(() => [
				e.title || t.$slots.header || t.$slots.aside ? (E(), s("header", be, [j(t.$slots, "header", {}, () => [
					t.$slots.icon ? (E(), s("span", xe, [j(t.$slots, "icon")])) : o("", !0),
					c("span", Se, P(e.title), 1),
					n[0] ||= c("span", {
						class: "share-section-list__line",
						"aria-hidden": "true"
					}, null, -1),
					j(t.$slots, "aside")
				])])) : o("", !0),
				j(t.$slots, "body", {}, () => [(E(), a(M(e.transitionName ? r : "div"), v(e.listAttrs, {
					tag: e.transitionName ? "div" : void 0,
					name: e.transitionName || void 0,
					class: "share-section-list__rows"
				}), {
					default: U(() => [j(t.$slots, "default")]),
					_: 3
				}, 16, ["tag", "name"]))]),
				t.$slots.footer ? (E(), s("footer", Ce, [j(t.$slots, "footer")])) : o("", !0)
			]),
			_: 3
		}, 8, ["class", "aria-label"]));
	}
}, [["__scopeId", "data-v-a757846f"]]), Te = [
	"disabled",
	"aria-label",
	"title"
], Ee = {
	key: 0,
	class: "share-add-button__text"
}, De = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("button", {
			class: b(["share-add-button", [`share-add-button--${e.variant}`, { "share-add-button--block": e.block }]]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			title: e.variant === "icon" && e.label || void 0,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [n[1] ||= c("span", {
			class: "share-add-button__plus",
			"aria-hidden": "true"
		}, "+", -1), e.variant === "icon" ? o("", !0) : (E(), s("span", Ee, [j(t.$slots, "default", {}, () => [d(P(e.label), 1)], !0)]))], 10, Te));
	}
}, [["__scopeId", "data-v-875a58d0"]]), Oe = [
	"value",
	"min",
	"max",
	"step",
	"disabled",
	"aria-label"
], ke = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("input", {
			class: "share-slider",
			type: "range",
			value: e.modelValue,
			min: e.min,
			max: e.max,
			step: e.step,
			disabled: e.disabled,
			"aria-label": e.label || void 0,
			style: S(o.value),
			onInput: l,
			onChange: u
		}, null, 44, Oe));
	}
}, [["__scopeId", "data-v-f86a47ab"]]), Ae = [
	"disabled",
	"aria-label",
	"aria-checked"
], je = {
	key: 0,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, Me = {
	key: 1,
	class: "share-compact-checkbox__tick",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true"
}, Ne = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("button", {
			type: "button",
			class: b(["share-compact-checkbox", {
				"share-compact-checkbox--checked": e.modelValue,
				"share-compact-checkbox--mixed": e.indeterminate
			}]),
			style: S({
				"--checkbox-size": `${e.size}px`,
				"--checkbox-hit-padding": `${r.value}px`
			}),
			disabled: e.disabled,
			"aria-label": e.label,
			"aria-checked": e.indeterminate ? "mixed" : e.modelValue,
			role: "checkbox",
			onClick: K(l, ["stop"]),
			onPointerdown: n[0] ||= K(() => {}, ["stop"])
		}, [e.indeterminate ? (E(), s("svg", je, [...n[1] ||= [c("path", {
			d: "M2.5 6h7",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round"
		}, null, -1)]])) : e.modelValue ? (E(), s("svg", Me, [...n[2] ||= [c("path", {
			d: "M2.5 6.2l2.4 2.4 4.6-5",
			stroke: "currentColor",
			"stroke-width": "2",
			"stroke-linecap": "round",
			"stroke-linejoin": "round"
		}, null, -1)]])) : o("", !0)], 46, Ae));
	}
}, [["__scopeId", "data-v-826ab51b"]]), Pe = ["aria-label"], Fe = [
	"aria-checked",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], Ie = /*#__PURE__*/ q({
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
		let r = t, a = n, o = k(null), l = k([]), u = k({
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
		async function v(e) {
			let t = r.options[e];
			!t || t.disabled || r.disabled || (g(t.value), await y(), l.value[e]?.focus());
		}
		function x(e, t) {
			let n = _();
			if (!n.length) return;
			let r = Math.max(0, n.findIndex((e) => e.index === t)), i = null;
			(e.key === "ArrowRight" || e.key === "ArrowDown") && (i = n[(r + 1) % n.length]), (e.key === "ArrowLeft" || e.key === "ArrowUp") && (i = n[(r - 1 + n.length) % n.length]), e.key === "Home" && (i = n[0]), e.key === "End" && (i = n[n.length - 1]), i && (e.preventDefault(), v(i.index));
		}
		let T = null;
		return w(async () => {
			await y(), h(), typeof ResizeObserver < "u" && o.value && (T = new ResizeObserver(() => h(!1)), T.observe(o.value));
		}), C(() => {
			T?.disconnect(), m != null && cancelAnimationFrame(m);
		}), H(() => r.modelValue, async () => {
			await y(), h(!0);
		}), H(() => r.options, async () => {
			await y(), h(!1);
		}, { deep: !0 }), (n, r) => (E(), s("div", {
			ref_key: "rootEl",
			ref: o,
			class: b(["share-multi-toggle", {
				"share-multi-toggle--block": t.block,
				"share-multi-toggle--disabled": t.disabled
			}]),
			role: "radiogroup",
			"aria-label": t.ariaLabel || void 0
		}, [c("span", {
			class: b(["share-multi-toggle__pill", {
				"share-multi-toggle__pill--neutral": d.value,
				"share-multi-toggle__pill--instant": !u.value.animate
			}]),
			style: S(f.value),
			"aria-hidden": "true"
		}, null, 6), (E(!0), s(e, null, A(t.options, (e, n) => (E(), s("button", {
			key: String(e.value),
			ref_for: !0,
			ref: (e) => p(e, n),
			type: "button",
			class: b(["share-multi-toggle__button", {
				"share-multi-toggle__button--active": e.value === t.modelValue,
				"share-multi-toggle__button--neutral": e.value === t.modelValue && e.value === t.neutralValue
			}]),
			role: "radio",
			"aria-checked": e.value === t.modelValue,
			tabindex: e.value === t.modelValue ? 0 : -1,
			disabled: t.disabled || e.disabled,
			onClick: (t) => g(e.value),
			onKeydown: (e) => x(e, n)
		}, P(e.label), 43, Fe))), 128))], 10, Pe));
	}
}, [["__scopeId", "data-v-34eca427"]]), Le = ["disabled", "aria-label"], Re = {
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
}, ze = {
	key: 1,
	class: "share-remove-button__cross",
	"aria-hidden": "true"
}, Be = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("button", {
			class: b(["share-remove-button", `share-remove-button--${e.variant}`]),
			type: "button",
			disabled: e.disabled,
			"aria-label": e.label,
			onClick: n[0] ||= (e) => t.$emit("click", e)
		}, [e.icon === "trash" ? (E(), s("svg", Re, [...n[1] ||= [c("path", { d: "M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" }, null, -1)]])) : (E(), s("span", ze))], 10, Le));
	}
}, [["__scopeId", "data-v-6648a65b"]]), Ve = { class: "share-section-label__text" }, He = {
	key: 0,
	class: "share-section-label__line",
	"aria-hidden": "true"
}, Ue = {
	key: 1,
	class: "share-section-label__actions"
}, We = /*#__PURE__*/ q({
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
		return (t, r) => (E(), s("div", {
			class: b(["share-section-label", {
				"share-section-label--medium": e.size === "medium",
				"share-section-label--border": e.border,
				"share-section-label--before": e.border && e.borderPosition === "before"
			}]),
			style: S(n.value)
		}, [
			c("span", Ve, [j(t.$slots, "default", {}, () => [d(P(e.title), 1)], !0)]),
			e.line ? (E(), s("span", He)) : o("", !0),
			t.$slots.actions ? (E(), s("span", Ue, [j(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)
		], 6));
	}
}, [["__scopeId", "data-v-5d3cbbb9"]]), Ge = ["aria-label"], Ke = {
	viewBox: "0 0 120 120",
	role: "img",
	"aria-hidden": "true"
}, qe = [
	"stroke",
	"stroke-width",
	"stroke-dasharray",
	"stroke-dashoffset"
], Je = { class: "segment-donut__center" }, Ye = {
	key: 0,
	class: "segment-donut__legend"
}, Xe = { key: 0 }, Ze = /*#__PURE__*/ q({
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
		I((e) => ({ c18471e2: t.strokeWidth }));
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
		return (n, r) => (E(), s("figure", {
			class: "segment-donut",
			"aria-label": t.ariaLabel
		}, [c("div", {
			class: "segment-donut__visual",
			style: S({ "--segment-donut-size": `${t.size}px` })
		}, [(E(), s("svg", Ke, [r[0] ||= c("circle", {
			class: "segment-donut__track",
			cx: "60",
			cy: "60",
			r: "50",
			pathLength: "100"
		}, null, -1), (E(!0), s(e, null, A(d.value, (e) => (E(), s("circle", {
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
		}, null, 8, qe))), 128))])), c("div", Je, [j(n.$slots, "center", { total: l.value }, () => [c("strong", null, P(t.formatValue(l.value)), 1), c("span", null, P(t.totalLabel), 1)], !0)])], 4), t.showLegend ? (E(), s("ul", Ye, [(E(!0), s(e, null, A(u.value, (e) => (E(), s("li", { key: e.key }, [
			c("i", {
				style: S({ "--segment-color": e.color }),
				"aria-hidden": "true"
			}, null, 4),
			c("span", null, P(e.label), 1),
			c("strong", null, P(t.formatValue(e.value)), 1),
			t.showPercent ? (E(), s("small", Xe, P(e.percent.toLocaleString(void 0, { maximumFractionDigits: 1 })) + "%", 1)) : o("", !0)
		]))), 128))])) : o("", !0)], 8, Ge));
	}
}, [["__scopeId", "data-v-5c718757"]]);
//#endregion
//#region src/lib/iconNavigation.js
function Qe(e, t, n, r) {
	let i = e.filter((e) => !e.disabled);
	if (!i.length) return null;
	let a = Math.max(0, i.findIndex((e) => e.key === t));
	return n === "Home" ? i[0].key : n === "End" ? i.at(-1).key : n === (r === "vertical" ? "ArrowDown" : "ArrowRight") ? i[(a + 1) % i.length].key : n === (r === "vertical" ? "ArrowUp" : "ArrowLeft") ? i[(a + i.length - 1) % i.length].key : null;
}
function $e(e, { width: t, start: n, end: r, gap: i, minimum: a, selected: o, maximum: s }) {
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
function et(e, t) {
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
function tt(e) {
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
function nt(e) {
	let t = k(null), n = k([]), r = k(0), a = k(!1), o = /* @__PURE__ */ new Map(), s = i(() => e.layout === "compact"), c = i(() => {
		if (!e.active) return e.items.map(() => 0);
		let t = e.selection?.length === e.items.length ? e.selection.map((e) => Number.isFinite(Number(e)) ? Math.max(0, Math.min(1, Number(e))) : 0) : e.items.map((t) => +(t.key === e.modelValue)), n = t.reduce((e, t) => e + t, 0);
		return n ? t.map((e) => e / n) : t;
	}), l = i(() => s.value ? $e(c.value, {
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
		let t = et(l.value, c.value);
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
		e.layout === "stacked" && !e.contentSized && tt(o.values());
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
	function v() {
		_(o.get(e.modelValue));
	}
	return w(() => {
		if (g(), v(), y(() => {
			m || (t.value.getBoundingClientRect(), a.value = !0);
		}), typeof ResizeObserver < "u" && (f = new ResizeObserver(g), f.observe(t.value), !s.value)) for (let e of o.values()) f.observe(e);
		p = document.fonts, p?.ready.then(() => {
			m || g();
		}), p?.addEventListener("loadingdone", g);
	}), H(() => [
		e.items,
		e.layout,
		e.orientation,
		e.size,
		e.height,
		e.selectedSize,
		e.maxSize,
		e.contentSized
	], async () => {
		await y(), g(), v();
	}, { deep: !0 }), H(() => e.modelValue, async () => {
		await y(), v();
	}), C(() => {
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
		revealActive: v
	};
}
//#endregion
//#region src/components/IconNavigation.vue
var rt = ["aria-label"], it = ["aria-orientation", "aria-label"], at = [
	"disabled",
	"title",
	"aria-label",
	"aria-current",
	"aria-pressed",
	"onClick",
	"onKeydown"
], ot = {
	key: 0,
	class: "share-icon-navigation__icon"
}, st = { class: "share-icon-navigation__label" }, ct = /*#__PURE__*/ q({
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
		let i = t, l = r, { element: u, ready: f, buttons: p, indicatorStyle: m, itemStyle: h, setButton: g, measure: _, reveal: y, revealActive: x } = nt(i);
		function C(e) {
			e.disabled || (e.key !== i.modelValue && l("update:modelValue", e.key), l("select", e.key));
		}
		function w(e, t) {
			if (e.altKey || e.ctrlKey || e.metaKey) return;
			let n = Qe(i.items, t, e.key, i.orientation);
			n != null && (e.preventDefault(), e.stopPropagation(), p.get(n)?.focus({ preventScroll: !0 }), y(p.get(n)));
		}
		return n({
			element: u,
			updateIndicator: _,
			revealActive: x
		}), (n, r) => (E(), s("nav", {
			ref_key: "element",
			ref: u,
			class: b(["share-icon-navigation", [
				`share-icon-navigation--${t.orientation}`,
				`share-icon-navigation--${t.layout}`,
				{
					"share-icon-navigation--instant": !t.animate || !F(f),
					"share-icon-navigation--pill": t.pill,
					"share-icon-navigation--content": t.contentSized && t.layout === "stacked"
				}
			]]),
			style: S({
				"--icon-navigation-size": `${t.size}px`,
				"--icon-navigation-height": `${t.height ?? t.size}px`,
				"--icon-navigation-icon-size": `${t.iconSize}px`,
				"--icon-navigation-label-size": typeof t.labelSize == "number" ? `${t.labelSize}px` : t.labelSize || void 0,
				"--icon-navigation-radius": typeof t.radius == "number" ? `${t.radius}px` : t.radius || void 0
			}),
			"aria-label": t.label
		}, [c("span", {
			class: "share-icon-navigation__indicator",
			style: S(F(m)),
			"aria-hidden": "true"
		}, null, 4), (E(!0), s(e, null, A(t.items, (r, i) => (E(), s(e, { key: r.key }, [r.divider ? (E(), s("span", {
			key: 0,
			class: "share-icon-navigation__divider",
			role: "separator",
			"aria-orientation": t.orientation === "vertical" ? "horizontal" : "vertical",
			"aria-label": r.dividerLabel
		}, null, 8, it)) : o("", !0), c("button", v({
			ref_for: !0,
			ref: (e) => F(g)(r.key, e)
		}, { ref_for: !0 }, r.attrs, {
			type: "button",
			class: ["share-icon-navigation__item", {
				"share-icon-navigation__item--selected": t.active && t.modelValue === r.key,
				"share-icon-navigation__item--text": !n.$slots.icon && !r.icon
			}],
			style: F(h)(i),
			disabled: r.disabled,
			title: r.title || r.label,
			"aria-label": r.ariaLabel || r.label,
			"aria-current": t.active && t.modelValue === r.key ? "page" : void 0,
			"aria-pressed": t.active && t.modelValue === r.key,
			onClick: (e) => C(r),
			onKeydown: (e) => w(e, r.key)
		}), [
			n.$slots.icon || r.icon ? (E(), s("span", ot, [j(n.$slots, "icon", { item: r }, () => [r.icon ? (E(), a(M(r.icon), {
				key: 0,
				size: t.iconSize,
				"aria-hidden": "true"
			}, null, 8, ["size"])) : o("", !0)], !0)])) : o("", !0),
			c("span", st, [j(n.$slots, "label", { item: r }, () => [d(P(r.shortLabel || r.label), 1)], !0)]),
			j(n.$slots, "decoration", { item: r }, void 0, !0)
		], 16, at)], 64))), 128))], 14, rt));
	}
}, [["__scopeId", "data-v-980752c4"]]), lt = ["aria-label"], ut = [
	"id",
	"aria-selected",
	"aria-controls",
	"tabindex",
	"disabled",
	"onClick",
	"onKeydown"
], dt = ["src"], ft = { class: "share-sliding-tabs__title" }, pt = /*#__PURE__*/ q({
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
		let a = t, l = r, u = k(null), d = k([]), f = k({
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
			n !== e && (n && T?.unobserve(n), d.value[t] = e, e && T?.observe(e));
		}
		function h(e) {
			let t = a.tabs.find((t) => t.key === e);
			t && !t.disabled && e !== a.modelValue && l("update:modelValue", e);
		}
		async function g(e) {
			let t = a.tabs[e];
			!t || t.disabled || (h(t.key), await y(), d.value[e]?.focus());
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
		function v() {
			let e = u.value, t = d.value[a.tabs.findIndex((e) => e.key === a.modelValue)];
			if (!e || !t) return;
			let n = t.offsetLeft, r = n + t.offsetWidth;
			(n < e.scrollLeft || r > e.scrollLeft + e.clientWidth) && e.scrollTo({
				left: Math.max(0, n - (e.clientWidth - t.offsetWidth) / 2),
				behavior: globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
			});
		}
		function x() {
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
		let T = null;
		return w(() => {
			y(() => {
				x(), v();
			}), typeof ResizeObserver < "u" && u.value && (T = new ResizeObserver(x), T.observe(u.value), d.value.forEach((e) => e && T.observe(e)));
		}), C(() => T?.disconnect()), H(() => a.modelValue, () => y(() => {
			x(), v();
		})), H(() => a.variant, () => y(() => {
			x(), v();
		})), H(() => a.tabs, () => y(() => {
			x(), v();
		}), { deep: !0 }), n({ updateUnderline: x }), (n, r) => (E(), s("nav", {
			ref_key: "rootElement",
			ref: u,
			class: b(["share-sliding-tabs", `share-sliding-tabs--${t.variant}`]),
			role: "tablist",
			"aria-label": t.ariaLabel || void 0,
			style: S({ "--sliding-tab-max-width": t.maxTabWidth ? `${t.maxTabWidth}px` : void 0 })
		}, [(E(!0), s(e, null, A(t.tabs, (e, r) => (E(), s("div", {
			key: String(e.key),
			class: b(["share-sliding-tabs__item", { "share-sliding-tabs__item--active": t.modelValue === e.key }]),
			role: "presentation"
		}, [c("button", {
			id: e.id,
			ref_for: !0,
			ref: (e) => m(e, r),
			class: b(["share-sliding-tabs__tab", { "share-sliding-tabs__tab--active": t.modelValue === e.key }]),
			type: "button",
			role: "tab",
			"aria-selected": t.modelValue === e.key,
			"aria-controls": e.panelId,
			tabindex: t.modelValue === e.key ? 0 : -1,
			disabled: e.disabled,
			onClick: (t) => h(e.key),
			onKeydown: (e) => _(e, r)
		}, [
			j(n.$slots, "decoration", {
				tab: e,
				active: t.modelValue === e.key
			}, void 0, !0),
			j(n.$slots, "icon", { tab: e }, () => [e.icon || e.svg ? (E(), s("img", {
				key: 0,
				class: "share-sliding-tabs__icon",
				src: e.icon || e.svg,
				alt: "",
				"aria-hidden": "true"
			}, null, 8, dt)) : o("", !0)], !0),
			c("span", ft, P(e.title), 1)
		], 42, ut), j(n.$slots, "tab-actions", { tab: e }, void 0, !0)], 2))), 128)), t.variant === "underline" ? (E(), s("span", {
			key: 0,
			class: "share-sliding-tabs__underline",
			style: S(p.value),
			"aria-hidden": "true"
		}, null, 4)) : o("", !0)], 14, lt));
	}
}, [["__scopeId", "data-v-caccf49f"]]), mt = [
	"aria-checked",
	"aria-label",
	"disabled"
], ht = {
	key: 0,
	class: "share-toggle-switch__text"
}, gt = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("button", {
			class: b(["share-toggle-switch", {
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
		}, [c("span", { class: "share-toggle-switch__thumb" })], -1), e.label || t.$slots.default ? (E(), s("span", ht, [j(t.$slots, "default", {}, () => [d(P(e.label), 1)], !0)])) : o("", !0)], 10, mt));
	}
}, [["__scopeId", "data-v-a542bb63"]]), _t = [], vt = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", yt = 0, bt = "";
function xt(e = Symbol("share-overlay")) {
	return _t.push(e), e;
}
function St(e) {
	let t = _t.lastIndexOf(e);
	t >= 0 && _t.splice(t, 1);
}
function Ct(e) {
	return _t.at(-1) === e;
}
function wt(e) {
	e && ([...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")].find((e) => e.getClientRects().length > 0) || e).focus?.({ preventScroll: !0 });
}
function Tt(e, t) {
	if (e.key !== "Tab" || !t) return;
	let n = [...t.querySelectorAll(vt)].filter((e) => e.getClientRects().length > 0);
	if (!n.length) {
		e.preventDefault(), t.focus?.({ preventScroll: !0 });
		return;
	}
	let r = n[0], i = n.at(-1);
	e.shiftKey && (document.activeElement === r || !t.contains(document.activeElement)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || !t.contains(document.activeElement)) && (e.preventDefault(), r.focus());
}
function Et(e) {
	e instanceof HTMLElement && e.isConnected && e.focus({ preventScroll: !0 });
}
function Dt() {
	if (typeof document > "u") return () => {};
	yt === 0 && (bt = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden"), yt += 1;
	let e = !1;
	return () => {
		e || (e = !0, yt = Math.max(0, yt - 1), yt === 0 && (document.documentElement.style.overflow = bt));
	};
}
var Ot = /* @__PURE__ */ new WeakMap();
function kt(e, { blur: t = "8px", duration: n = "300ms" } = {}) {
	if (!e) return () => {};
	let r = Ot.get(e);
	r || (r = {
		count: 0,
		filter: e.style.filter,
		transition: e.style.transition
	}, Ot.set(e, r)), r.count += 1, e.style.transition = `filter ${n} ease`, e.style.filter = oe(t);
	let i = !1;
	return () => {
		i || (i = !0, r.count = Math.max(0, r.count - 1), !(r.count > 0) && (e.style.filter = r.filter, e.style.transition = r.transition, Ot.delete(e)));
	};
}
//#endregion
//#region src/internal/floatingState.js
var At = [], jt = null, Mt = null;
function Nt(e) {
	let t = At.lastIndexOf(e);
	t >= 0 && At.splice(t, 1), St(e);
}
function Pt(e) {
	Nt(e), At.push(e), xt(e);
}
function Ft(e) {
	Nt(e);
}
function It(e) {
	return At.at(-1) === e && Ct(e);
}
function Lt(e, t) {
	jt?.token !== e && jt?.close(), jt = {
		token: e,
		close: t
	}, Pt(e);
}
function Rt(e) {
	jt?.token === e && (jt = null), Ft(e);
}
function zt(e, t) {
	Mt?.token !== e && Mt?.close(), Mt = {
		token: e,
		close: t
	};
}
function Bt(e) {
	Mt?.token === e && (Mt = null);
}
function Vt() {
	if (!Mt) return !1;
	let e = Mt;
	return Mt = null, e.close(), !0;
}
function Ht(e, t) {
	e.inert = !t, e.setAttribute("aria-hidden", String(!t)), e.style.pointerEvents = t ? "" : "none";
}
//#endregion
//#region src/lib/actionMenuPlacement.js
var Ut = 8, Wt = 6;
function Gt(e, t) {
	return !e || !t ? !1 : e === t.ownerDocument || e === t.ownerDocument?.defaultView || !!e.contains?.(t);
}
function Kt(e, t, n) {
	return Math.min(Math.max(e, t), Math.max(t, n));
}
function qt({ triggerRect: e, popoverWidth: t, popoverHeight: n, viewportWidth: r, viewportHeight: i, viewportLeft: a = 0, viewportTop: o = 0, originX: s, originY: c, margin: l = 8, gap: u = 6 }) {
	let d = a + l, f = o + l, p = a + r - l, m = o + i - l, h = Math.min(t, Math.max(0, p - d)), g = Kt(e.right - h, d, p - h), _ = Math.max(0, m - e.bottom - u), v = Math.max(0, e.top - u - f), y = _ < n && v > _, b = y ? v : _, x = Math.min(n, b), S = Kt(y ? e.top - u - x : e.bottom + u, f, m - x);
	return {
		left: g,
		top: S,
		maxHeight: b,
		opensAbove: y,
		originX: Kt(s - g, 0, h),
		originY: Kt(c - S, 0, x)
	};
}
var Jt = 8, Yt = 6, Xt = qt;
//#endregion
//#region src/lib/actionMenuSizing.js
function Zt(e) {
	let t = [...e.childNodes].filter((e) => e.nodeType === Node.TEXT_NODE ? e.textContent.trim().length > 0 : e.nodeType === Node.ELEMENT_NODE && !e.hidden && getComputedStyle(e).display !== "none");
	return t.length > 0 && t.every((e) => e.nodeType === Node.ELEMENT_NODE && e.getAttribute("data-action-menu-size") === "content");
}
function Qt({ requestedWidth: e, expanded: t = !1, contentSized: n = !1, availableWidth: r }) {
	let i = n && e == null;
	return {
		contentSized: i,
		minimumWidth: i ? 0 : Math.min(e ?? (t ? 360 : 200), r),
		maximumWidth: i ? r : Math.min(e ?? (t ? 360 : 280), r)
	};
}
//#endregion
//#region src/components/floating/ActionMenu.vue
var $t = [
	"title",
	"aria-label",
	"aria-expanded",
	"disabled"
], en = ["data-share-popover-related", "aria-label"], tn = {
	key: 0,
	class: "ram-heading"
}, nn = /*#__PURE__*/ q({
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
		let l = r, u = Symbol("action-menu"), d = k(null), p = k(null), m = k(null), h = k(!1), g = null, _ = null, b = null, x = null;
		function w() {
			return l.anchor ?? d.value;
		}
		function T(e) {
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
		function O() {
			_ = null;
			let e = w(), t = p.value;
			if (!h.value || !e || !t) return;
			let n = D(), r = Math.max(0, n.viewportWidth - 16), i = !!t.querySelector(".ras-inline"), { minimumWidth: a, maximumWidth: o, contentSized: s } = Qt({
				requestedWidth: l.width,
				expanded: i,
				availableWidth: r,
				contentSized: Zt(t)
			});
			t.toggleAttribute("data-share-menu-content-sized", s), t.style.minWidth = `${a}px`, t.style.maxWidth = `${o}px`;
			let c = e.getBoundingClientRect(), u = t.offsetWidth, d = qt({
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
		function A() {
			_ != null && cancelAnimationFrame(_), _ = requestAnimationFrame(O);
		}
		H(() => l.width, A);
		function M() {
			document.addEventListener("pointerdown", z, !0), document.addEventListener("keydown", V), window.addEventListener("resize", A), window.addEventListener("scroll", B, !0), window.visualViewport?.addEventListener("resize", A), window.visualViewport?.addEventListener("scroll", A);
		}
		function N() {
			b?.disconnect(), x?.disconnect(), b = null, x = null, document.removeEventListener("pointerdown", z, !0), document.removeEventListener("keydown", V), window.removeEventListener("resize", A), window.removeEventListener("scroll", B, !0), window.visualViewport?.removeEventListener("resize", A), window.visualViewport?.removeEventListener("scroll", A);
		}
		function I(e) {
			l.disabled || h.value || (m.value = T(e), Lt(u, L), h.value = !0, M(), y(() => {
				!h.value || !p.value || (b = new ResizeObserver(A), b.observe(p.value), x = new MutationObserver(A), x.observe(p.value, {
					childList: !0,
					subtree: !0,
					attributes: !0,
					attributeFilter: ["data-action-menu-size", "hidden"]
				}), A());
			}));
		}
		function L() {
			h.value && (Vt(), h.value = !1, Rt(u), _ != null && cancelAnimationFrame(_), _ = null, N());
		}
		function R(e) {
			l.disabled || (h.value ? L() : I(e));
		}
		function z(e) {
			e.target?.closest?.(".ram-popover, [data-share-popover-related]") || d.value?.contains?.(e.target) || w()?.contains?.(e.target) || L();
		}
		function B(e) {
			if (p.value?.contains?.(e.target) || e.target?.closest?.("[data-share-popover-related]")) return;
			let t = w();
			if (Gt(e.target, t)) {
				if (l.followAnchor && e.target instanceof Element && e.target !== document.scrollingElement) {
					let n = t.getBoundingClientRect(), r = e.target.getBoundingClientRect();
					if (n.right > r.left && n.left < r.right && n.bottom > r.top && n.top < r.bottom) {
						A();
						return;
					}
				}
				L();
			}
		}
		function V(e) {
			e.key !== "Escape" || e.defaultPrevented || !It(u) || (e.preventDefault(), !Vt() && L());
		}
		return C(L), i({
			open: I,
			close: L,
			toggle: R
		}), (i, l) => (E(), s(e, null, [i.$slots.trigger ? (E(), s("div", v({ key: 0 }, r.triggerAttrs, {
			ref_key: "triggerEl",
			ref: d,
			class: ["ram-custom-trigger", { "ram-custom-trigger--block": r.block }],
			onClick: K(R, ["stop"])
		}), [j(i.$slots, "trigger", { open: h.value }, void 0, !0)], 16)) : (E(), s("button", v({ key: 1 }, r.triggerAttrs, {
			ref_key: "triggerEl",
			ref: d,
			type: "button",
			class: "ram-trigger",
			title: r.title,
			"aria-label": r.title,
			"aria-expanded": h.value,
			"aria-haspopup": "menu",
			disabled: r.disabled,
			onClick: K(R, ["stop"])
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
		], -1)]], 16, $t)), (E(), a(t, { to: "body" }, [f(n, {
			name: "share-popover-action",
			onBeforeEnter: l[2] ||= (e) => F(Ht)(e, !0),
			onBeforeLeave: l[3] ||= (e) => F(Ht)(e, !1)
		}, {
			default: U(() => [h.value ? (E(), s("div", {
				key: 0,
				ref_key: "popoverEl",
				ref: p,
				class: "ram-popover",
				"data-share-popover-related": r.related ? "" : void 0,
				style: S(m.value),
				role: "menu",
				"aria-label": r.title,
				onClick: l[0] ||= K(() => {}, ["stop"]),
				onPointerdown: l[1] ||= K(() => {}, ["stop"])
			}, [r.heading ? (E(), s("div", tn, P(r.heading), 1)) : o("", !0), j(i.$slots, "default", { close: L }, void 0, !0)], 44, en)) : o("", !0)]),
			_: 3
		})]))], 64));
	}
}, [["__scopeId", "data-v-99dbc084"]]), rn = ["aria-haspopup", "aria-expanded"], an = {
	class: "ram-item__icon",
	"aria-hidden": "true"
}, on = {
	key: 1,
	width: "17",
	height: "17",
	viewBox: "0 0 17 17",
	fill: "none"
}, sn = { class: "ram-item__content" }, cn = {
	key: 0,
	class: "ram-item__suffix"
}, ln = /*#__PURE__*/ q({
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
		size: {
			type: String,
			default: "default",
			validator: (e) => ["default", "large"].includes(e)
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
		return (t, n) => (E(), s("button", {
			type: "button",
			class: b(["ram-item", [{ "ram-item--large": e.size === "large" }, e.tone === "default" ? null : `ram-item--${e.tone}`]]),
			role: "menuitem",
			"aria-haspopup": e.submenu ? "menu" : void 0,
			"aria-expanded": e.submenu ? e.submenuOpen : void 0
		}, [
			c("span", an, [j(t.$slots, "icon", {}, () => [e.icon ? (E(), a(M(e.icon), {
				key: 0,
				size: e.size === "large" ? 22 : 17,
				"stroke-width": 1.9
			}, null, 8, ["size"])) : (E(), s("svg", on, [...n[0] ||= [
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
			c("span", sn, [j(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.suffix || e.submenu ? (E(), s("span", cn, [j(t.$slots, "suffix", {}, void 0, !0), e.submenu ? (E(), s("svg", {
				key: 0,
				class: b(["ram-item__submenu-chevron", { "ram-item__submenu-chevron--open": e.submenuOpen }]),
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
		], 10, rn));
	}
}, [["__scopeId", "data-v-a9f0da23"]]);
//#endregion
//#region src/composables/useMediaQuery.js
function un(e) {
	let t = k(typeof window < "u" && !!window.matchMedia?.(e).matches), n = null;
	function r(e) {
		t.value = e.matches;
	}
	return w(() => {
		window.matchMedia && (n = window.matchMedia(e), t.value = n.matches, n.addEventListener?.("change", r));
	}), C(() => n?.removeEventListener?.("change", r)), t;
}
function dn(e = 768) {
	return un(`(max-width: ${e}px)`);
}
//#endregion
//#region src/components/floating/BasePopover.vue
var fn = [
	"id",
	"role",
	"aria-label",
	"data-share-popover-related"
], pn = /*#__PURE__*/ q({
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
			default: "action-menu",
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
		let c = e, l = r, u = i(() => c.transition ? c.transition : c.transitionPreset === "action-menu" ? "share-popover-action" : ""), d = Symbol("base-popover"), p = k(null), m = k(null), h = null;
		function g() {
			let e = c.anchor;
			return e ? typeof e.getBoundingClientRect == "function" ? e : e.value ?? e : null;
		}
		function _(e) {
			return typeof e == "number" ? `${e}px` : e;
		}
		function v() {
			let e = window.visualViewport;
			return {
				left: e?.offsetLeft || 0,
				top: e?.offsetTop || 0,
				width: e?.width || window.innerWidth,
				height: e?.height || window.innerHeight
			};
		}
		function x() {
			let e = g();
			if (!e) return;
			let t = e.getBoundingClientRect(), n = v(), r = typeof c.minWidth == "number" ? c.minWidth : 0, i = Math.max(r, p.value?.offsetWidth || 0), a = p.value?.offsetHeight || 0, o = n.left + 8, s = n.left + n.width - 8, l = n.top + 8, u = n.top + n.height - 8, d = {
				position: "fixed",
				minWidth: _(c.minWidth),
				zIndex: c.zIndex
			};
			if (c.placement === "right-start") {
				let e = t.right + c.offset, n = t.left - c.offset - i, r = e + i <= s ? e : n >= o ? n : Math.max(o, Math.min(e, s - i));
				d.left = `${r}px`, d.top = `${Math.max(l, Math.min(t.top, u - a))}px`, d["--share-popover-origin-x"] = r + i <= t.left ? "100%" : "0%", d["--share-popover-enter-y"] = "0px";
			} else {
				let e = c.placement === "bottom-end" ? t.right - i : t.left, n = t.bottom + c.offset, r = t.top - c.offset - a, f = n + a > u && r >= l, p = f ? r : n, m = Math.max(o, Math.min(e, s - i));
				d.left = `${m}px`, d.top = `${Math.max(l, Math.min(p, u - a))}px`, d["--share-popover-origin-x"] = `${Math.max(0, Math.min(i, t.left + t.width / 2 - m))}px`, d["--share-popover-origin-y"] = f ? "100%" : "0%", d["--share-popover-enter-y"] = f ? "5px" : "-5px";
			}
			m.value = d;
		}
		function w() {
			l("update:open", !1);
		}
		function T(e) {
			return !!e?.closest?.("[data-share-popover-related]");
		}
		function D(e) {
			p.value?.contains(e.target) || T(e.target) || g()?.contains?.(e.target) || w();
		}
		function O(e) {
			if (!c.closeOnScroll) {
				x();
				return;
			}
			p.value?.contains(e.target) || T(e.target) || w();
		}
		function A() {
			c.closeOnResize ? w() : x();
		}
		function M(e) {
			e.key !== "Escape" || e.defaultPrevented || !It(d) || (e.preventDefault(), !Vt() && w());
		}
		function N() {
			typeof ResizeObserver < "u" && p.value && (h = new ResizeObserver(x), h.observe(p.value)), Pt(d), document.addEventListener("pointerdown", D, !0), document.addEventListener("keydown", M), window.addEventListener("resize", A), window.addEventListener("scroll", O, !0), window.visualViewport?.addEventListener("resize", A), window.visualViewport?.addEventListener("scroll", x);
		}
		function P() {
			h?.disconnect(), h = null, Ft(d), document.removeEventListener("pointerdown", D, !0), document.removeEventListener("keydown", M), window.removeEventListener("resize", A), window.removeEventListener("scroll", O, !0), window.visualViewport?.removeEventListener("resize", A), window.visualViewport?.removeEventListener("scroll", x);
		}
		return H(() => c.open, async (e) => {
			typeof window > "u" || (P(), e && (x(), await y(), c.open && (x(), N())));
		}, { immediate: !0 }), H(() => [
			c.anchor,
			c.placement,
			c.offset,
			c.minWidth
		], () => {
			c.open && y(x);
		}), C(P), (r, i) => (E(), a(t, { to: "body" }, [f(n, {
			name: u.value,
			onBeforeEnter: i[2] ||= (e) => F(Ht)(e, !0),
			onBeforeLeave: i[3] ||= (e) => F(Ht)(e, !1),
			appear: !e.transition && e.transitionPreset === "action-menu"
		}, {
			default: U(() => [e.open ? (E(), s("div", {
				key: 0,
				id: e.id || void 0,
				ref_key: "popoverEl",
				ref: p,
				class: b([
					"share-popover",
					"base-popover",
					e.popoverClass
				]),
				style: S(m.value),
				role: e.role || void 0,
				"aria-label": e.ariaLabel || void 0,
				"data-share-popover-related": e.related ? "" : void 0,
				onClick: i[0] ||= K(() => {}, ["stop"]),
				onPointerdown: i[1] ||= K(() => {}, ["stop"])
			}, [j(r.$slots, "default", { close: w }, void 0, !0)], 46, fn)) : o("", !0)]),
			_: 3
		}, 8, ["name", "appear"])]));
	}
}, [["__scopeId", "data-v-a9dc0f63"]]), mn = { class: "ras-root" }, hn = { class: "ras-panel" }, gn = {
	key: 0,
	class: "ras-label"
}, _n = { class: "ras-panel ras-panel--popover" }, vn = {
	key: 0,
	class: "ras-label"
}, yn = /*#__PURE__*/ q({
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
		let r = e, i = Symbol("action-submenu"), l = k(null), u = dn(r.mobileBreakpoint), d = k(!1);
		function p() {
			r.disabled || d.value || (zt(i, h), d.value = !0);
		}
		function m() {
			r.disabled || (d.value ? h() : p());
		}
		function h() {
			d.value && (d.value = !1, Bt(i));
		}
		function g(e) {
			e || h();
		}
		return C(h), t({
			open: p,
			close: h,
			toggle: m
		}), (t, r) => (E(), s("div", mn, [
			c("div", {
				ref_key: "triggerEl",
				ref: l,
				class: "ras-trigger",
				onClick: K(m, ["stop"])
			}, [j(t.$slots, "trigger", {
				open: d.value,
				toggle: m
			}, void 0, !0)], 512),
			f(n, {
				name: "share-popover-action",
				onBeforeEnter: r[2] ||= (e) => F(Ht)(e, !0),
				onBeforeLeave: r[3] ||= (e) => F(Ht)(e, !1)
			}, {
				default: U(() => [F(u) && d.value ? (E(), s("div", {
					key: 0,
					class: "ras-inline",
					"data-share-popover-related": "",
					onClick: r[0] ||= K(() => {}, ["stop"]),
					onPointerdown: r[1] ||= K(() => {}, ["stop"])
				}, [c("div", hn, [e.label ? (E(), s("div", gn, P(e.label), 1)) : o("", !0), j(t.$slots, "default", { close: h }, void 0, !0)])], 32)) : o("", !0)]),
				_: 3
			}),
			F(u) ? o("", !0) : (E(), a(pn, {
				key: 0,
				open: d.value,
				anchor: l.value,
				placement: "right-start",
				"min-width": e.minWidth,
				"z-index": 9400,
				"popover-class": "row-action-submenu-popover",
				related: "",
				"onUpdate:open": g
			}, {
				default: U(() => [c("div", _n, [e.label ? (E(), s("div", vn, P(e.label), 1)) : o("", !0), j(t.$slots, "default", { close: h }, void 0, !0)])]),
				_: 3
			}, 8, [
				"open",
				"anchor",
				"min-width"
			]))
		]));
	}
}, [["__scopeId", "data-v-fba5dc96"]]), bn = [
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
function xn(e) {
	return /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(String(e || "").trim());
}
function Sn(e = bn) {
	return e[Math.floor(Math.random() * e.length)];
}
//#endregion
//#region src/components/floating/ColorPresetPicker.vue
var Cn = ["aria-label"], wn = [
	"aria-label",
	"title",
	"aria-expanded"
], Tn = {
	class: "cpp-button-icon",
	"aria-hidden": "true"
}, En = {
	class: "cpp-button-color",
	"aria-hidden": "true"
}, Dn = ["aria-label", "aria-expanded"], On = { class: "cpp-body" }, kn = "#888888", An = /*#__PURE__*/ q({
	__name: "ColorPresetPicker",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		colors: {
			type: Array,
			default: () => bn
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
		let n = e, r = t, a = k(null), o = k(!1), l = k("cpppop-cancel"), d = k(n.modelValue || ""), m = i(() => /^#[0-9a-f]{6}$/i.test(n.modelValue || "") ? n.modelValue : kn), g = i(() => !!d.value && !xn(d.value));
		function _(e) {
			return String(n.modelValue || "").toLowerCase() === String(e).toLowerCase();
		}
		function v() {
			l.value = "cpppop-cancel", o.value = !0;
		}
		function y(e) {
			l.value = e === "pick" ? "cpppop-pick" : "cpppop-cancel", o.value = !1;
		}
		function x() {
			o.value ? y("cancel") : v();
		}
		function C(e) {
			e || y("cancel");
		}
		function w(e) {
			d.value = e, r("update:modelValue", e);
		}
		function T() {
			let e = d.value.trim();
			if (!xn(e)) {
				r("invalid", e);
				return;
			}
			w(e);
		}
		function D(e) {
			w(e), y("pick");
		}
		function O() {
			d.value = "", r("update:modelValue", n.clearValue), y("pick");
		}
		H(() => n.modelValue, (e) => {
			d.value = e || "";
		});
		let A = p({
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
						onChange: T,
						onKeydown: (e) => {
							e.key === "Enter" && T();
						}
					}) : null,
					n.allowClear ? h("button", {
						type: "button",
						class: "cpp-clear",
						onMousedown: (e) => e.preventDefault(),
						onClick: O
					}, n.clearLabel) : null
				]) : null]);
			}
		});
		return (t, n) => e.inline ? (E(), s("div", {
			key: 0,
			class: "cpp-body cpp-body--inline",
			"aria-label": e.ariaLabel
		}, [f(F(A))], 8, Cn)) : (E(), s("span", {
			key: 1,
			ref_key: "anchorEl",
			ref: a,
			class: "cpp-host"
		}, [e.variant === "button" ? (E(), s("button", {
			key: 0,
			type: "button",
			class: "cpp-button",
			"aria-label": e.ariaLabel,
			title: e.ariaLabel,
			"aria-expanded": o.value,
			"aria-haspopup": "dialog",
			onClick: x
		}, [c("span", Tn, [j(t.$slots, "icon", {}, () => [n[0] ||= u("<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-659a3b96><path d=\"M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-3.7 1.6 1.6 0 0 1 .8-3H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3Z\" data-v-659a3b96></path><circle cx=\"7.5\" cy=\"10\" r=\".7\" data-v-659a3b96></circle><circle cx=\"11\" cy=\"7\" r=\".7\" data-v-659a3b96></circle><circle cx=\"15.5\" cy=\"8\" r=\".7\" data-v-659a3b96></circle><circle cx=\"6.5\" cy=\"14\" r=\".7\" data-v-659a3b96></circle></svg>", 1)], !0)]), c("span", En, [c("span", { style: S({ background: e.modelValue || "var(--bg)" }) }, null, 4)])], 8, wn)) : j(t.$slots, "trigger", {
			toggle: x,
			open: o.value,
			value: e.modelValue
		}, () => [c("button", {
			type: "button",
			class: b(["cpp-swatch", { "cpp-swatch--empty": !e.modelValue }]),
			style: S(e.modelValue ? { background: e.modelValue } : null),
			"aria-label": e.ariaLabel,
			"aria-expanded": o.value,
			"aria-haspopup": "dialog",
			onClick: x
		}, null, 14, Dn)], !0, 1), f(pn, {
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
			default: U(() => [c("div", On, [f(F(A))])]),
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
}, [["__scopeId", "data-v-659a3b96"]]), jn = "data-share-no-hover";
`${jn}${jn}`;
function Mn(e) {
	return e.pointerType === "mouse";
}
function Nn(e) {
	return e.type === "focus" ? !!e.currentTarget?.matches(":focus-visible") : Mn(e);
}
function Pn(e = globalThis.window) {
	if (!e?.document) return () => {};
	let t = e.document.documentElement, n = t.hasAttribute(jn);
	t.toggleAttribute(jn, !e.matchMedia?.("(hover: hover)").matches);
	function r(e) {
		if (!e.pointerType) return;
		let n = !Mn(e);
		t.hasAttribute(jn) !== n && t.toggleAttribute(jn, n);
	}
	let i = ["pointerdown", "pointermove"];
	for (let t of i) e.addEventListener(t, r, {
		capture: !0,
		passive: !0
	});
	return () => {
		for (let t of i) e.removeEventListener(t, r, !0);
		t.toggleAttribute(jn, n);
	};
}
//#endregion
//#region src/components/floating/ValueSelect.vue
var Fn = [
	"aria-label",
	"aria-expanded",
	"aria-activedescendant",
	"disabled"
], In = ["aria-label"], Ln = [
	"placeholder",
	"aria-label",
	"aria-activedescendant"
], Rn = [
	"id",
	"aria-selected",
	"disabled",
	"onPointerenter",
	"onClick"
], zn = {
	key: 1,
	class: "vs-empty"
}, Bn = /*#__PURE__*/ q({
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
	setup(t, { expose: r, emit: a }) {
		let l = 0, u = t, d = a;
		l += 1;
		let p = `share-value-select-${l}`, m = k(null), h = k(null), g = k(null), _ = k(!1), v = k(""), x = k(-1), S = i(() => u.options.map((e, t) => e && typeof e == "object" ? {
			value: e.value,
			label: String(e.label ?? e.value ?? ""),
			disabled: !!e.disabled,
			key: e.key ?? `${String(e.value)}-${t}`
		} : {
			value: e,
			label: String(e ?? ""),
			disabled: !1,
			key: `${String(e)}-${t}`
		})), w = i(() => S.value.find((e) => O(e.value))?.label ?? ""), T = i(() => {
			let e = v.value.trim().toLocaleLowerCase();
			return e ? S.value.filter((t) => t.label.toLocaleLowerCase().includes(e)) : S.value;
		}), D = i(() => u.searchable && S.value.length >= u.searchThreshold);
		function O(e) {
			return String(e) === String(u.modelValue);
		}
		function j(e) {
			return `${p}-option-${e}`;
		}
		function M(e = 0, t = 1) {
			let n = T.value;
			if (!n.length) return -1;
			for (let r = 0; r < n.length; r += 1) {
				let i = (e + r * t + n.length) % n.length;
				if (!n[i].disabled) return i;
			}
			return -1;
		}
		function N() {
			let e = T.value.findIndex((e) => O(e.value) && !e.disabled);
			return e >= 0 ? e : M();
		}
		function I(e) {
			T.value[e]?.disabled || (x.value = e);
		}
		function L(e) {
			let t = T.value;
			if (!t.length) return;
			let n = x.value < 0 ? e > 0 ? 0 : t.length - 1 : (x.value + e + t.length) % t.length;
			x.value = M(n, e), y(() => document.getElementById(j(x.value))?.scrollIntoView?.({ block: "nearest" }));
		}
		function R() {
			u.disabled || _.value || (_.value = !0, x.value = N(), document.addEventListener("pointerdown", q, !0), d("open"), D.value && y(() => g.value?.focus()));
		}
		function z({ restoreFocus: e = !1 } = {}) {
			_.value && (_.value = !1, v.value = "", x.value = -1, document.removeEventListener("pointerdown", q, !0), d("close"), e && y(() => h.value?.focus()));
		}
		function V() {
			_.value ? z() : R();
		}
		function G(e) {
			!e || e.disabled || (d("update:modelValue", e.value), z({ restoreFocus: !0 }));
		}
		function K() {
			G(T.value[x.value]);
		}
		function q(e) {
			m.value?.contains(e.target) || z();
		}
		function ee(e) {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault(), _.value ? L(e.key === "ArrowDown" ? 1 : -1) : R();
				return;
			}
			if (e.key === "Home" && _.value) {
				e.preventDefault(), x.value = M();
				return;
			}
			if (e.key === "End" && _.value) {
				e.preventDefault(), x.value = M(T.value.length - 1, -1);
				return;
			}
			if ((e.key === "Enter" || e.key === " ") && _.value) {
				e.preventDefault(), K();
				return;
			}
			e.key === "Escape" && _.value && (e.preventDefault(), z({ restoreFocus: !0 }));
		}
		function J(e) {
			e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), L(e.key === "ArrowDown" ? 1 : -1)) : e.key === "Home" ? (e.preventDefault(), x.value = M()) : e.key === "End" ? (e.preventDefault(), x.value = M(T.value.length - 1, -1)) : e.key === "Enter" ? (e.preventDefault(), K()) : e.key === "Escape" && (e.preventDefault(), z({ restoreFocus: !0 }));
		}
		return H(T, () => {
			x.value = N();
		}), H(() => u.disabled, (e) => {
			e && z();
		}), C(() => {
			document.removeEventListener("pointerdown", q, !0);
		}), r({
			open: R,
			close: z,
			toggle: V
		}), (r, i) => (E(), s("div", {
			ref_key: "rootEl",
			ref: m,
			class: b(["vs", { "vs--disabled": t.disabled }])
		}, [c("button", {
			ref_key: "triggerEl",
			ref: h,
			class: b(["vs-button", { empty: !w.value }]),
			type: "button",
			role: "combobox",
			"aria-haspopup": "listbox",
			"aria-label": t.ariaLabel || void 0,
			"aria-controls": p,
			"aria-expanded": _.value,
			"aria-activedescendant": _.value && x.value >= 0 ? j(x.value) : void 0,
			disabled: t.disabled,
			onClick: V,
			onKeydown: ee
		}, [c("span", null, P(w.value || t.placeholder), 1), i[3] ||= c("span", {
			class: "vs-arrow",
			"aria-hidden": "true"
		}, "▾", -1)], 42, Fn), f(n, {
			name: "share-popover-action",
			onBeforeEnter: i[1] ||= (e) => F(Ht)(e, !0),
			onBeforeLeave: i[2] ||= (e) => F(Ht)(e, !1)
		}, {
			default: U(() => [_.value ? (E(), s("div", {
				key: 0,
				id: p,
				class: b(["vs-drop", { "vs-drop-up": t.dropUp }]),
				role: "listbox",
				"aria-label": t.ariaLabel || void 0
			}, [
				D.value ? W((E(), s("input", {
					key: 0,
					ref_key: "searchEl",
					ref: g,
					"onUpdate:modelValue": i[0] ||= (e) => v.value = e,
					class: "vs-search",
					type: "search",
					placeholder: t.searchPlaceholder,
					"aria-label": t.searchAriaLabel || t.searchPlaceholder,
					"aria-controls": p,
					"aria-activedescendant": x.value >= 0 ? j(x.value) : void 0,
					autocomplete: "off",
					onKeydown: J
				}, null, 40, Ln)), [[B, v.value]]) : o("", !0),
				(E(!0), s(e, null, A(T.value, (e, t) => (E(), s("button", {
					id: j(t),
					key: e.key,
					class: b(["vs-option", { "vs-option--active": t === x.value }]),
					type: "button",
					role: "option",
					"aria-selected": O(e.value),
					disabled: e.disabled,
					onPointerenter: (e) => F(Mn)(e) && I(t),
					onClick: (t) => G(e)
				}, P(e.label), 43, Rn))), 128)),
				T.value.length === 0 ? (E(), s("div", zn, P(t.emptyLabel), 1)) : o("", !0)
			], 10, In)) : o("", !0)]),
			_: 1
		})], 2));
	}
}, [["__scopeId", "data-v-710f6de8"]]), Vn = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.b.blockquote.br.code.em.h1.h2.h3.h4.h5.h6.li.ol.p.pre.s.span.strike.strong.table.tbody.td.th.thead.tr.u.ul".split(".")), Hn = /* @__PURE__ */ new Set([
	"embed",
	"iframe",
	"math",
	"object",
	"script",
	"style",
	"svg",
	"template"
]), Un = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:"
]), Wn = /^[a-z][a-z0-9-]{0,39}$/, Gn = 4096;
function Kn(e) {
	return String(e ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
}
function qn(e) {
	let t = String(e || "").trim();
	if (!t || /[\u0000-\u001f\u007f]/.test(t)) return "";
	if (/^(?:#|\?|\.?\.\/|\/)/.test(t)) return t;
	try {
		let e = new URL(t, "https://share-ui.invalid");
		return Un.has(e.protocol) ? t : "";
	} catch {
		return "";
	}
}
function Jn(e) {
	let t = String(e || "").trim();
	if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(t) || /^var\(--[a-z0-9-]+\)$/i.test(t)) return t;
	let n = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
	if (!n || n.slice(1, 4).map(Number).some((e) => e < 0 || e > 255)) return "";
	let r = n[4] == null ? null : Number(n[4]);
	return r != null && (r < 0 || r > 1) ? "" : t;
}
function Yn(e) {
	try {
		let t = encodeURIComponent(JSON.stringify(e ?? {}));
		return t.length <= Gn ? t : "";
	} catch {
		return "";
	}
}
function Xn(e) {
	let t = String(e || "");
	if (!t || t.length > Gn) return null;
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
function Zn(e, t, n) {
	let r = String(e || "").trim().toLowerCase(), i = Yn(t);
	return !Wn.test(r) || !i ? "" : `<span data-rich-node="${r}" data-rich-payload="${Kn(i)}" contenteditable="false">${Kn(n || r)}</span>`;
}
function Qn(e) {
	if (!e?.getAttribute) return null;
	let t = String(e.getAttribute("data-rich-node") || "").trim().toLowerCase(), n = Xn(e.getAttribute("data-rich-payload"));
	return !Wn.test(t) || n == null ? null : {
		kind: t,
		payload: n,
		label: e.textContent || t
	};
}
function $n(e, t) {
	let n = e.getAttribute("title");
	n && t.setAttribute("title", n);
	let r = e.getAttribute("dir");
	[
		"ltr",
		"rtl",
		"auto"
	].includes(r) && t.setAttribute("dir", r);
	let i = Jn(e.style?.getPropertyValue("color"));
	if (i && t.style.setProperty("color", i), t.tagName === "A") {
		let n = qn(e.getAttribute("href"));
		n && t.setAttribute("href", n), e.getAttribute("target") === "_blank" && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer"));
	}
	if (t.tagName === "SPAN") {
		let n = Qn(e);
		n && (t.setAttribute("data-rich-node", n.kind), t.setAttribute("data-rich-payload", Yn(n.payload)), t.setAttribute("contenteditable", "false"));
	}
	if (t.tagName === "TD" || t.tagName === "TH") for (let n of ["colspan", "rowspan"]) {
		let r = Number.parseInt(e.getAttribute(n), 10);
		r >= 1 && r <= 100 && t.setAttribute(n, String(r));
	}
}
function er(e, t, n) {
	if (e.nodeType === 3) {
		t.appendChild(n.createTextNode(e.nodeValue || ""));
		return;
	}
	if (e.nodeType !== 1) return;
	let r = e.tagName.toLowerCase();
	if (Hn.has(r)) return;
	if (!Vn.has(r)) {
		for (let r of [...e.childNodes]) er(r, t, n);
		return;
	}
	let i = n.createElement(r);
	if ($n(e, i), i.hasAttribute("data-rich-node")) i.textContent = e.textContent || i.getAttribute("data-rich-node");
	else for (let t of [...e.childNodes]) er(t, i, n);
	t.appendChild(i);
}
function tr(e) {
	let t = String(e || "");
	if (!t) return "";
	if (typeof DOMParser > "u") return Kn(t);
	let n = new DOMParser().parseFromString(t, "text/html"), r = n.createElement("div");
	for (let e of [...n.body.childNodes]) er(e, r, n);
	return r.innerHTML;
}
function nr(e) {
	return Kn(e).replace(/\r\n?|\n/g, "<br>");
}
//#endregion
//#region src/components/rich-text/RichContent.vue
function rr(e) {
	let t = {};
	for (let n of [...e.attributes]) n.name !== "class" && (t[n.name] = n.value);
	return t;
}
function ir(e, t, n) {
	if (e.nodeType === Node.TEXT_NODE) return e.nodeValue || "";
	if (e.nodeType !== Node.ELEMENT_NODE) return null;
	let r = Qn(e);
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
	let i = [...e.childNodes].map((e, r) => ir(e, t, `${n}.${r}`)).filter((e) => e != null);
	return h(e.tagName.toLowerCase(), {
		...rr(e),
		key: n
	}, i);
}
var ar = /*#__PURE__*/ q({
	name: "RichContent",
	inheritAttrs: !1,
	props: { html: {
		type: String,
		default: ""
	} },
	setup(e, { slots: t, attrs: n }) {
		let r = i(() => tr(e.html));
		return () => {
			if (typeof DOMParser > "u") return h("div", {
				...n,
				class: ["rc", n.class],
				innerHTML: r.value
			});
			let e = [...new DOMParser().parseFromString(r.value, "text/html").body.childNodes].map((e, n) => ir(e, t, String(n))).filter((e) => e != null);
			return h("div", {
				...n,
				class: ["rc", n.class]
			}, e);
		};
	}
}, [["__scopeId", "data-v-b2aa27f6"]]), or = { class: "input-desc" }, sr = ["aria-label"], cr = ["title"], lr = ["title"], ur = ["title"], dr = ["aria-expanded"], fr = ["onMousedown"], pr = ["title", "onMousedown"], mr = { class: "desc-color-icon" }, hr = [
	"title",
	"aria-label",
	"aria-expanded"
], gr = { class: "desc-link-field" }, _r = ["placeholder"], vr = { class: "desc-link-field" }, yr = {
	key: 0,
	class: "desc-link-error"
}, br = { class: "desc-link-actions" }, xr = {
	type: "submit",
	class: "desc-link-save"
}, Sr = ["data-placeholder", "aria-label"], Cr = {
	key: 2,
	class: "desc-empty"
}, wr = /*#__PURE__*/ q({
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
			default: () => bn
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
		})), _ = i(() => Array.from({ length: p.maxHeadingLevel }, (e, t) => t + 1)), v = k(!1), S = k(null), C = k(null), T = k(null), D = k(null), M = k(!1), N = k(null), F = k(null), I = k(null), L = k(null), R = k(!1), z = O({
			text: "",
			url: ""
		}), V = i(() => N.value || F.value || T.value);
		function G(e) {
			return tr(e) || "<p><br></p>";
		}
		function q(e) {
			!p.editable || !C.value || document.activeElement !== C.value && (C.value.innerHTML = G(e));
		}
		H(() => p.modelValue, q), H(() => p.editable, (e) => {
			e && y(() => q(p.modelValue));
		}), w(() => {
			q(p.modelValue), document.execCommand("defaultParagraphSeparator", !1, "p");
		});
		function ee(e) {
			return !!(e && C.value?.contains(e.commonAncestorContainer));
		}
		function J() {
			let e = window.getSelection();
			if (!e?.rangeCount) return;
			let t = e.getRangeAt(0);
			ee(t) && (L.value = t.cloneRange());
		}
		function te() {
			C.value?.focus();
			let e = window.getSelection();
			return !e || !ee(L.value) ? !1 : (e.removeAllRanges(), e.addRange(L.value), !0);
		}
		function ne() {
			return ee(L.value) ? L.value.toString().trim() : "";
		}
		function Y(e) {
			let t = Zn(e?.kind, e?.payload, e?.label);
			if (!t || !C.value) return null;
			te(), document.execCommand("insertHTML", !1, t), $();
			let n = C.value.querySelectorAll("[data-rich-node]"), r = n[n.length - 1] || null;
			return r && (I.value = r, oe(r)), r;
		}
		function re(e) {
			return e?.nodeType === Node.ELEMENT_NODE && e.matches?.("[data-rich-node]") ? e : e?.element?.matches?.("[data-rich-node]") ? e.element : I.value?.isConnected ? I.value : null;
		}
		function ie(e, t) {
			let n = re(e), r = Zn(t?.kind, t?.payload, t?.label);
			if (!n || !r) return null;
			let i = document.createElement("template");
			i.innerHTML = r;
			let a = i.content.firstElementChild;
			return n.replaceWith(a), I.value = a, $(), a;
		}
		function ae(e) {
			let t = re(e);
			if (!t) return !1;
			let n = t.nextSibling || t.parentNode;
			return t.remove(), I.value = null, n?.nodeType === Node.ELEMENT_NODE && xe(n), $(), !0;
		}
		function oe(e) {
			let t = document.createRange(), n = window.getSelection();
			t.setStartAfter(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t), L.value = t.cloneRange();
		}
		function X(e, t) {
			J(), N.value = e, F.value = t, R.value = !1, z.text = e?.textContent || ne(), z.url = e?.getAttribute?.("href") || "", M.value = !0, y(() => D.value?.focus());
		}
		function Z(e = null) {
			X(null, e);
		}
		function se(e) {
			X(e, null);
		}
		function ce(e = !1) {
			e !== !0 && (M.value = !1, N.value = null, F.value = null, R.value = !1);
		}
		function le() {
			let e = qn(z.url);
			if (!e) {
				R.value = !0;
				return;
			}
			let t = z.text.trim() || e;
			if (N.value?.isConnected) N.value.setAttribute("href", e), N.value.textContent = t;
			else {
				te();
				let n = window.getSelection();
				if (n?.rangeCount && !n.getRangeAt(0).collapsed && t === n.toString().trim()) document.execCommand("createLink", !1, e);
				else {
					let r = document.createElement("a");
					r.href = e, r.textContent = t;
					let i = n?.rangeCount ? n.getRangeAt(0) : null;
					i && ee(i) && (i.deleteContents(), i.insertNode(r), oe(r));
				}
			}
			ce(!1), $();
		}
		function ue() {
			let e = N.value;
			if (!e?.isConnected) return ce(!1);
			e.replaceWith(...e.childNodes), ce(!1), $();
		}
		function de(e) {
			let t = e.target.closest?.("a");
			if (t && C.value?.contains(t)) {
				e.preventDefault(), se(t);
				return;
			}
			let n = e.target.closest?.("[data-rich-node]");
			!n || !C.value?.contains(n) || (e.preventDefault(), I.value = n, h("node-select", {
				element: n,
				node: Qn(n)
			}));
		}
		let fe = {
			focus: () => C.value?.focus(),
			rememberSelection: J,
			openLinkEditor: Z,
			insertRichNode: Y,
			updateRichNode: ie,
			removeRichNode: ae
		};
		function Q(e) {
			return g.value.heading.replace("{level}", String(e));
		}
		function pe(e) {
			C.value?.focus(), document.execCommand("styleWithCSS", !1, !1), document.execCommand(e, !1, null), y($);
		}
		function me(e) {
			C.value?.focus(), document.execCommand("formatBlock", !1, e), v.value = !1, y($);
		}
		function he(e) {
			if (C.value?.focus(), document.execCommand("styleWithCSS", !1, !0), e) {
				document.execCommand("foreColor", !1, e), $();
				return;
			}
			document.execCommand("removeFormat", !1, null), y(() => {
				C.value && (C.value.querySelectorAll("span").forEach((e) => {
					e.style.removeProperty("font-family"), e.style.cssText.trim() || e.replaceWith(...e.childNodes);
				}), $());
			});
		}
		function ge() {
			if (C.value) {
				Se();
				for (let e of [...C.value.children]) {
					if (e.tagName !== "DIV") continue;
					let t = document.createElement("p");
					t.innerHTML = e.innerHTML, e.replaceWith(t);
				}
				$();
			}
		}
		function _e() {
			if (!C.value) return "";
			ve(C.value);
			let e = tr(C.value.innerHTML);
			return e === "<p><br></p>" || e === "<br>" ? "" : e;
		}
		function $() {
			h("update:modelValue", _e());
		}
		function ve(e) {
			e.querySelectorAll("strong").forEach((e) => ye(e, "b")), e.querySelectorAll("i").forEach((e) => ye(e, "em")), e.querySelectorAll("span").forEach((e) => {
				let t = e.style.fontWeight, n = e.style.fontStyle, r = e.style.textDecorationLine || e.style.textDecoration, i = null;
				t === "bold" || Number(t) >= 600 ? (e.style.removeProperty("font-weight"), i = "b") : n === "italic" ? (e.style.removeProperty("font-style"), i = "em") : String(r).includes("underline") && (e.style.removeProperty("text-decoration"), e.style.removeProperty("text-decoration-line"), i = "u"), i && ye(e, i);
			});
		}
		function ye(e, t) {
			let n = document.createElement(t);
			for (let t of [...e.attributes]) (t.name !== "style" || e.style.cssText.trim()) && n.setAttribute(t.name, t.value);
			return n.append(...e.childNodes), e.replaceWith(n), n;
		}
		function be(e) {
			let t = e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
			for (; t && t !== C.value;) {
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
		function xe(e) {
			let t = document.createRange(), n = window.getSelection();
			t.selectNodeContents(e), t.collapse(!0), n.removeAllRanges(), n.addRange(t);
		}
		function Se() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !C.value?.contains(e.anchorNode)) return;
			let t = be(e.anchorNode);
			if (!t || t.tagName === "LI") return;
			let n = t.textContent || "";
			(n === "- " || n === " - ") && Ce(t);
		}
		function Ce(e) {
			let t = document.createElement("li");
			t.innerHTML = "<br>";
			let n = document.createElement("ul");
			n.appendChild(t), e.replaceWith(n), xe(t);
		}
		function we() {
			let e = window.getSelection();
			if (!e || e.rangeCount === 0 || !C.value?.contains(e.anchorNode)) return !1;
			let t = be(e.anchorNode);
			if (!t || t.tagName === "LI") return !1;
			let n = (t.textContent || "").replace(/\u00a0/g, " ");
			return n !== "-" && n !== " -" ? !1 : (Ce(t), !0);
		}
		function Te(e) {
			if (e.key === " ") {
				we() && (e.preventDefault(), $());
				return;
			}
			e.key === "Enter" && (e.preventDefault(), document.execCommand(e.shiftKey ? "insertLineBreak" : "insertParagraph"), $());
		}
		function Ee(e) {
			C.value?.focus(), document.execCommand("insertHTML", !1, e), $();
		}
		function De(e) {
			e.preventDefault();
			let t = e.clipboardData?.getData("text/html"), n = e.clipboardData?.getData("text/plain") || "";
			Ee(t ? tr(t) : nr(n));
		}
		function Oe(e) {
			let t = document.caretPositionFromPoint?.(e.clientX, e.clientY), n = document.caretRangeFromPoint?.(e.clientX, e.clientY), r = document.createRange();
			if (t) r.setStart(t.offsetNode, t.offset);
			else if (n) r.setStart(n.startContainer, n.startOffset);
			else return;
			r.collapse(!0);
			let i = window.getSelection();
			i.removeAllRanges(), i.addRange(r);
		}
		function ke(e) {
			e.preventDefault(), Oe(e);
			let t = e.dataTransfer?.getData("text/html"), n = e.dataTransfer?.getData("text/plain") || "";
			Ee(t ? tr(t) : nr(n));
		}
		function Ae(e) {
			$(), h("blur", e);
		}
		return n({
			focus: () => C.value?.focus(),
			commit: $,
			rememberSelection: J,
			openLinkEditor: Z,
			insertRichNode: Y,
			updateRichNode: ie,
			removeRichNode: ae
		}), (n, r) => (E(), s("div", or, [t.editable ? (E(), s(e, { key: 0 }, [
			c("div", {
				class: "desc-toolbar",
				role: "toolbar",
				"aria-label": g.value.toolbar
			}, [
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.bold,
					onMousedown: r[0] ||= K((e) => pe("bold"), ["prevent"])
				}, [c("b", null, P(g.value.boldShort), 1)], 40, cr),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.italic,
					onMousedown: r[1] ||= K((e) => pe("italic"), ["prevent"])
				}, [c("i", null, P(g.value.italicShort), 1)], 40, lr),
				c("button", {
					type: "button",
					class: "desc-btn",
					title: g.value.underline,
					onMousedown: r[2] ||= K((e) => pe("underline"), ["prevent"])
				}, [c("u", null, P(g.value.underlineShort), 1)], 40, ur),
				r[13] ||= c("div", { class: "desc-sep" }, null, -1),
				c("button", {
					ref_key: "headingTrigger",
					ref: S,
					type: "button",
					class: "desc-btn desc-btn-wide",
					"aria-expanded": v.value,
					"aria-haspopup": "menu",
					onMousedown: r[3] ||= K((e) => v.value = !v.value, ["prevent"])
				}, [d(P(g.value.paragraph) + " ", 1), r[11] ||= c("span", {
					class: "desc-caret",
					"aria-hidden": "true"
				}, "▾", -1)], 40, dr),
				f(pn, {
					open: v.value,
					anchor: S.value,
					"min-width": 160,
					"z-index": 4500,
					role: "menu",
					"aria-label": g.value.paragraph,
					"onUpdate:open": r[5] ||= (e) => v.value = e
				}, {
					default: U(() => [c("button", {
						type: "button",
						class: "desc-drop-item drop-p",
						role: "menuitem",
						onMousedown: r[4] ||= K((e) => me("p"), ["prevent"])
					}, P(g.value.normal), 33), (E(!0), s(e, null, A(_.value, (e) => (E(), s("button", {
						key: e,
						type: "button",
						class: b(["desc-drop-item", `drop-h${e}`]),
						role: "menuitem",
						onMousedown: K((t) => me(`h${e}`), ["prevent"])
					}, P(Q(e)), 43, fr))), 128))]),
					_: 1
				}, 8, [
					"open",
					"anchor",
					"aria-label"
				]),
				r[14] ||= c("div", { class: "desc-sep" }, null, -1),
				f(An, {
					"allow-clear": "",
					colors: t.colors,
					"model-value": "",
					"clear-label": g.value.clearColor,
					"aria-label": g.value.color,
					"onUpdate:modelValue": he
				}, {
					trigger: U(({ toggle: e }) => [c("button", {
						type: "button",
						class: "desc-btn",
						title: g.value.color,
						onMousedown: K((t) => {
							v.value = !1, e();
						}, ["prevent"])
					}, [c("span", mr, P(g.value.colorShort), 1)], 40, pr)]),
					_: 1
				}, 8, [
					"colors",
					"clear-label",
					"aria-label"
				]),
				r[15] ||= c("div", { class: "desc-sep" }, null, -1),
				t.showLinkButton ? (E(), s("button", {
					key: 0,
					ref_key: "linkTrigger",
					ref: T,
					type: "button",
					class: b(["desc-btn", { active: M.value }]),
					title: g.value.link,
					"aria-label": g.value.link,
					"aria-expanded": M.value,
					"aria-haspopup": "dialog",
					onMousedown: r[6] ||= K((e) => Z(), ["prevent"])
				}, [...r[12] ||= [c("span", { "aria-hidden": "true" }, "↗", -1)]], 42, hr)) : o("", !0),
				j(n.$slots, "toolbar", {
					editor: fe,
					insertRichNode: Y,
					updateRichNode: ie,
					removeRichNode: ae
				}, void 0, !0)
			], 8, sr),
			f(pn, {
				open: M.value,
				anchor: V.value,
				"min-width": 260,
				"z-index": 4500,
				role: "dialog",
				"aria-label": g.value.link,
				"onUpdate:open": ce
			}, {
				default: U(() => [c("form", {
					class: "desc-link-form",
					onSubmit: K(le, ["prevent"])
				}, [
					c("label", gr, [c("span", null, P(g.value.linkText), 1), W(c("input", {
						"onUpdate:modelValue": r[7] ||= (e) => z.text = e,
						type: "text",
						placeholder: g.value.linkTextPlaceholder
					}, null, 8, _r), [[B, z.text]])]),
					c("label", vr, [c("span", null, P(g.value.linkUrl), 1), W(c("input", {
						ref_key: "linkUrlInput",
						ref: D,
						"onUpdate:modelValue": r[8] ||= (e) => z.url = e,
						type: "text",
						inputmode: "url",
						placeholder: "https://…"
					}, null, 512), [[B, z.url]])]),
					R.value ? (E(), s("span", yr, P(g.value.linkInvalid), 1)) : o("", !0),
					c("div", br, [
						N.value ? (E(), s("button", {
							key: 0,
							type: "button",
							class: "desc-link-remove",
							onClick: ue
						}, P(g.value.removeLink), 1)) : o("", !0),
						c("button", {
							type: "button",
							class: "desc-link-cancel",
							onClick: r[9] ||= (e) => ce(!1)
						}, P(g.value.cancel), 1),
						c("button", xr, P(g.value.saveLink), 1)
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
				ref: C,
				class: "desc-editor",
				contenteditable: "true",
				spellcheck: "false",
				translate: "no",
				autocorrect: "off",
				"data-placeholder": t.placeholder,
				"aria-label": t.ariaLabel || t.placeholder,
				onInput: ge,
				onKeydown: Te,
				onKeyup: J,
				onMouseup: J,
				onClick: de,
				onPaste: De,
				onDrop: ke,
				onFocus: r[10] ||= (e) => n.$emit("focus", e),
				onBlur: Ae
			}, null, 40, Sr)
		], 64)) : t.modelValue ? (E(), a(ar, {
			key: 1,
			class: "desc-view",
			html: t.modelValue
		}, l({ _: 2 }, [n.$slots.node ? {
			name: "node",
			fn: U((e) => [j(n.$slots, "node", x(m(e)), void 0, !0)]),
			key: "0"
		} : void 0]), 1032, ["html"])) : (E(), s("div", Cr, P(t.placeholder), 1))]));
	}
}, [["__scopeId", "data-v-28db4ac6"]]), Tr = [
	"aria-label",
	"aria-expanded",
	"disabled"
], Er = {
	class: "share-account-avatar",
	"aria-hidden": "true"
}, Dr = {
	key: 0,
	class: "share-account-label"
}, Or = {
	key: 1,
	class: "share-account-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true"
}, kr = /*#__PURE__*/ q({
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
		return (t, r) => (E(), a(nn, {
			title: e.title,
			disabled: e.disabled,
			block: ""
		}, {
			trigger: U(({ open: i }) => [c("button", {
				type: "button",
				class: b(["share-account-trigger", {
					"share-account-trigger--expanded": e.expanded,
					"share-account-trigger--open": i
				}]),
				"aria-label": e.ariaLabel || e.label || e.title,
				"aria-expanded": i,
				"aria-haspopup": "menu",
				disabled: e.disabled
			}, [
				c("span", Er, [j(t.$slots, "avatar", {}, () => [d(P(n.value), 1)], !0)]),
				e.expanded ? (E(), s("span", Dr, P(e.label), 1)) : o("", !0),
				e.expanded ? (E(), s("svg", Or, [...r[0] ||= [c("path", {
					d: "m4 6 4 4 4-4",
					stroke: "currentColor",
					"stroke-width": "1.7",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, null, -1)]])) : o("", !0)
			], 10, Tr)]),
			default: U(({ close: e }) => [j(t.$slots, "default", { close: e }, void 0, !0)]),
			_: 3
		}, 8, ["title", "disabled"]));
	}
}, [["__scopeId", "data-v-e64ac168"]]), Ar = {
	key: 1,
	class: "share-app-shell__rail"
}, jr = /*#__PURE__*/ q({
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
		return (t, r) => (E(), s("div", {
			class: b(["share-app-shell", [
				`share-app-shell--${e.sidebarMode}`,
				`share-app-shell--breakpoint-${e.mobileBreakpoint}`,
				{
					"share-app-shell--without-sidebar": !e.sidebarVisible,
					"share-app-canvas": e.canvas
				}
			]]),
			style: S(n.value)
		}, [
			e.sidebarVisible ? j(t.$slots, "sidebar", {}, void 0, !0, 0) : o("", !0),
			(E(), a(M(e.contentTag), { class: "share-app-shell__content" }, {
				default: U(() => [j(t.$slots, "default", {}, void 0, !0)]),
				_: 3
			})),
			t.$slots.rail ? (E(), s("aside", Ar, [j(t.$slots, "rail", {}, void 0, !0)])) : o("", !0),
			j(t.$slots, "overlay", {}, void 0, !0)
		], 6));
	}
}, [["__scopeId", "data-v-20e51ba2"]]), Mr = ["aria-label", "title"], Nr = {
	class: "share-sidebar-toggle__icon sidebar-icon",
	"aria-hidden": "true"
}, Pr = {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none"
}, Fr = {
	key: 0,
	d: "m11 6-3 3 3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Ir = {
	key: 1,
	d: "m9 6 3 3-3 3",
	stroke: "currentColor",
	"stroke-width": "1.5",
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, Lr = { class: "share-sidebar-label sidebar-label" }, Rr = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("button", {
			type: "button",
			class: "share-sidebar-toggle sidebar-toggle",
			"aria-label": e.expanded ? e.collapseLabel : e.expandLabel,
			title: e.expanded ? e.collapseLabel : e.expandLabel
		}, [c("span", Nr, [(E(), s("svg", Pr, [
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
			e.expanded ? (E(), s("path", Fr)) : (E(), s("path", Ir))
		]))]), c("span", Lr, P(e.expanded ? e.collapseLabel : e.expandLabel), 1)], 8, Mr));
	}
}, [["__scopeId", "data-v-f4b97c48"]]), zr = {
	key: 0,
	class: "share-sidebar-head"
}, Br = ["aria-label"], Vr = {
	key: 1,
	class: "share-sidebar-tools"
}, Hr = {
	key: 2,
	class: "share-sidebar-account"
}, Ur = /*#__PURE__*/ q({
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
		let d = k(u()), f = i({
			get: () => r.modelValue ?? d.value,
			set: (e) => {
				d.value = e, l("update:modelValue", e), l("change", e);
			}
		});
		H(f, (e) => {
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
		}), (t, n) => (E(), s("aside", { class: b(["share-app-sidebar app-sidebar", [
			f.value && "share-app-sidebar--expanded app-sidebar--expanded",
			e.elevated && "share-app-sidebar--elevated",
			!(e.showToggle || t.$slots.tools) && "share-app-sidebar--without-tools",
			`share-app-sidebar--${e.position}`,
			e.position !== "embedded" && e.mobileBreakpoint !== 0 && `share-app-sidebar--mobile-${e.mobileMode}`,
			e.position !== "embedded" && e.mobileBreakpoint !== 0 && `share-app-sidebar--breakpoint-${e.mobileBreakpoint}`
		]]) }, [
			t.$slots.brand ? (E(), s("div", zr, [j(t.$slots, "brand", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			c("nav", {
				class: "share-sidebar-nav",
				"aria-label": e.ariaLabel
			}, [j(t.$slots, "default", {
				expanded: f.value,
				toggle: h
			}, void 0, !0)], 8, Br),
			e.showToggle || t.$slots.tools ? (E(), s("div", Vr, [e.showToggle ? (E(), a(Rr, {
				key: 0,
				expanded: f.value,
				"expand-label": e.expandLabel,
				"collapse-label": e.collapseLabel,
				onClick: h
			}, null, 8, [
				"expanded",
				"expand-label",
				"collapse-label"
			])) : o("", !0), j(t.$slots, "tools", {
				expanded: f.value,
				expand: p,
				collapse: m,
				toggle: h
			}, void 0, !0)])) : o("", !0),
			t.$slots.account ? (E(), s("div", Hr, [j(t.$slots, "account", { expanded: f.value }, void 0, !0)])) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-2edf4ac9"]]), Wr = {
	class: "share-sidebar-brand__icon sidebar-brand-icon",
	"aria-hidden": "true"
}, Gr = { class: "share-sidebar-label share-sidebar-brand__label sidebar-label sidebar-brand-label" }, Kr = /*#__PURE__*/ q(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (E(), a(M(e.as), v({
			class: "share-sidebar-brand sidebar-brand",
			"aria-label": e.ariaLabel || e.label
		}, t.$attrs), {
			default: U(() => [c("span", Wr, [j(t.$slots, "icon", {}, () => [e.icon ? (E(), a(M(e.icon), {
				key: 0,
				size: 22,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", Gr, [j(t.$slots, "default", {}, () => [d(P(e.label), 1)], !0)])]),
			_: 3
		}, 16, ["aria-label"]));
	}
}), [["__scopeId", "data-v-2ad2fa09"]]), qr = { class: "share-sidebar-group" }, Jr = /*#__PURE__*/ q({
	__name: "SidebarGroup",
	props: { label: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (E(), s("div", qr, [j(t.$slots, "default", {}, () => [d(P(e.label), 1)], !0)]));
	}
}, [["__scopeId", "data-v-914e315d"]]), Yr = {
	class: "share-sidebar-icon sidebar-icon",
	"aria-hidden": "true"
}, Xr = { class: "share-sidebar-label sidebar-label" }, Zr = /*#__PURE__*/ q(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		return (t, n) => (E(), a(M(e.as), v({
			class: ["share-sidebar-link sidebar-link", { active: e.active }],
			title: e.title || e.label,
			"aria-current": e.active ? "page" : void 0
		}, t.$attrs), {
			default: U(() => [c("span", Yr, [j(t.$slots, "icon", {}, () => [e.icon ? (E(), a(M(e.icon), {
				key: 0,
				size: 20,
				"stroke-width": 1.8
			})) : o("", !0)], !0)]), c("span", Xr, [j(t.$slots, "default", {}, () => [d(P(e.label), 1)], !0)])]),
			_: 3
		}, 16, [
			"class",
			"title",
			"aria-current"
		]));
	}
}), [["__scopeId", "data-v-13938b76"]]), Qr = {
	key: 0,
	class: "share-editor-panel__title"
}, $r = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("div", { class: b(["share-editor-panel", { "share-editor-panel--compact": e.compact }]) }, [e.title || t.$slots.title ? (E(), s("div", Qr, [j(t.$slots, "title", {}, () => [d(P(e.title), 1)], !0)])) : o("", !0), j(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-f7a33945"]]), ei = { class: "share-editor-section-title" }, ti = { class: "share-editor-section-title__text" }, ni = {
	key: 0,
	class: "share-editor-section-title__actions"
}, ri = /*#__PURE__*/ q({
	__name: "EditorSectionTitle",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (E(), s("div", ei, [c("span", ti, [j(t.$slots, "default", {}, () => [d(P(e.title), 1)], !0)]), t.$slots.actions ? (E(), s("span", ni, [j(t.$slots, "actions", {}, void 0, !0)])) : o("", !0)]));
	}
}, [["__scopeId", "data-v-bd6769b9"]]), ii = { class: "share-editor-section" }, ai = /*#__PURE__*/ q({
	__name: "EditorSection",
	props: { title: {
		type: String,
		default: ""
	} },
	setup(e) {
		return (t, n) => (E(), s("section", ii, [e.title || t.$slots.title ? (E(), a(ri, {
			key: 0,
			title: e.title
		}, l({ _: 2 }, [t.$slots.title ? {
			name: "default",
			fn: U(() => [j(t.$slots, "title", {}, void 0, !0)]),
			key: "0"
		} : void 0, t.$slots.actions ? {
			name: "actions",
			fn: U(() => [j(t.$slots, "actions", {}, void 0, !0)]),
			key: "1"
		} : void 0]), 1032, ["title"])) : o("", !0), j(t.$slots, "default", {}, void 0, !0)]));
	}
}, [["__scopeId", "data-v-8f45005c"]]), oi = {}, si = { class: "share-editor-total" };
function ci(e, t) {
	return E(), s("div", si, [j(e.$slots, "default", {}, void 0, !0)]);
}
var li = /*#__PURE__*/ q(oi, [["render", ci], ["__scopeId", "data-v-7fe02c46"]]), ui = "input, textarea, select, [contenteditable], [data-share-drawer-no-swipe]", di = 48, fi = 8;
function pi({ enabled: e, width: t, update: n, commit: r, opening: i = !1 }) {
	let a = null;
	function o() {
		a = null;
	}
	function s() {
		a?.locked && n(null), o();
	}
	function c(t) {
		s();
		let n = t.touches[0];
		t.touches.length !== 1 || !e() || i && n.clientX > di || t.target?.closest?.(ui) || (a = {
			x: n.clientX,
			y: n.clientY,
			lastX: n.clientX,
			time: t.timeStamp
		});
	}
	function l(r) {
		if (!a) return;
		if (r.touches.length !== 1 || !e()) {
			s();
			return;
		}
		let o = r.touches[0], c = o.clientX - a.x, l = o.clientY - a.y, u = i ? c : -c;
		if (!a.locked) {
			if (Math.max(Math.abs(c), Math.abs(l)) < fi) return;
			if (u <= Math.abs(l) * 1.15) {
				s();
				return;
			}
			a.locked = !0;
		}
		r.cancelable && r.preventDefault(), i && r.stopPropagation();
		let d = r.timeStamp - a.time;
		d > 0 && (a.velocity = (o.clientX - a.lastX) / d * (i ? 1 : -1), a.time = r.timeStamp, a.lastX = o.clientX), n((i ? 0 : t()) + c);
	}
	function u(c) {
		if (!a?.locked || !e() || c.changedTouches.length !== 1) {
			s();
			return;
		}
		let l = c.changedTouches[0].clientX - a.x, u = i ? l : -l, d = i ? Math.min(64, t() * .22) : Math.max(64, t() * .25), f = i && u >= 24 && a.velocity > .35 && c.timeStamp - a.time < 80;
		o(), i && c.stopPropagation(), u >= d || f ? r() : n(null);
	}
	return {
		start: c,
		move: l,
		end: u,
		cancel: s,
		reset: o
	};
}
//#endregion
//#region src/internal/sortableGesture.js
var mi = /* @__PURE__ */ new Set();
function hi() {
	let e = Symbol("sortable-gesture");
	return mi.add(e), () => mi.delete(e);
}
function gi() {
	return mi.size > 0;
}
//#endregion
//#region src/components/overlay/AppDrawer.vue
var _i = ["inert", "aria-hidden"], vi = ["aria-modal", "aria-label"], yi = {
	key: 0,
	class: "share-drawer__header"
}, bi = ["aria-label"], xi = { class: "share-drawer__body" }, Si = {
	key: 2,
	class: "share-drawer__footer"
}, Ci = /*#__PURE__*/ q(/* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
		},
		swipeToOpen: {
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
		let u = e, d = l, p = k(null), m = k(!1), h = i(() => u.modelValue && !m.value), g = k(null), _ = k(!1), x = i(() => h.value || _.value), T = i(() => ({
			"share-drawer--dragging": g.value !== null,
			"share-drawer--preview": !h.value
		}));
		function D() {
			return p.value?.offsetWidth || Math.min(window.innerWidth, Number(u.width) || 288);
		}
		let O = i(() => {
			if (g.value === null) return { zIndex: u.zIndex };
			let e = D(), t = Math.max(0, Math.min(e, g.value));
			return {
				zIndex: u.zIndex,
				"--drawer-reveal": String(t) + "px",
				"--drawer-opacity": t / e
			};
		}), A = un("(prefers-reduced-motion: reduce)"), M = Symbol("app-drawer"), N = null, P = null, I = !1, L, R = !1;
		function z() {
			return h.value && Ct(M);
		}
		function B(e = p.value?.parentElement) {
			e && (e.inert = !0, e.setAttribute("inert", ""), e.setAttribute("aria-hidden", "true"), e.style.pointerEvents = "none");
		}
		function V() {
			z() && (B(), m.value = !0, d("update:modelValue", !1));
		}
		function W(e) {
			!z() || e.defaultPrevented || (e.key === "Escape" ? (e.preventDefault(), V()) : Tt(e, p.value));
		}
		function G(e) {
			z() && !p.value?.contains(e.target) && wt(p.value);
		}
		function K() {
			if (!N) return;
			let e = Ct(M);
			St(M), N(), N = null, document.removeEventListener("keydown", W), document.removeEventListener("focusin", G), e && !P?.closest?.("[inert]") && Et(P), P = null;
		}
		function q() {
			if (x.value) return;
			g.value = null;
			let e = !!N;
			K(), e && d("closed");
		}
		function ee() {
			h.value && !R && d("opened");
		}
		let J = pi({
			enabled: () => u.swipeToClose && z(),
			width: D,
			update: (e) => {
				g.value = e;
			},
			commit: V
		});
		function te(e) {
			e === null ? _.value = !1 : (g.value = e, _.value = !0);
		}
		let ne = pi({
			opening: !0,
			enabled: () => u.swipeToOpen && !u.modelValue && !gi() && !document.querySelector("[aria-modal=\"true\"]:not([aria-hidden=\"true\"])"),
			width: D,
			update: te,
			async commit() {
				if (R = !0, d("update:modelValue", !0), await y(), _.value = !1, !h.value) {
					R = !1;
					return;
				}
				g.value = null;
				let e = () => {
					R = !1, ee();
				};
				A.value ? e() : L = setTimeout(e, 220);
			}
		}), Y = {
			touchstart: ne.start,
			touchmove: ne.move,
			touchend: ne.end,
			touchcancel: ne.cancel
		};
		function re() {
			for (let [e, t] of Object.entries(Y)) window.removeEventListener(e, t, !0);
		}
		return w(() => H(() => u.swipeToOpen, (e) => {
			if (!e) {
				ne.cancel(), re();
				return;
			}
			for (let [e, t] of Object.entries(Y)) window.addEventListener(e, t, {
				capture: !0,
				passive: e !== "touchmove"
			});
		}, { immediate: !0 })), H(() => u.modelValue, (e) => {
			e && (m.value = !1);
		}, { flush: "sync" }), H(h, async (e) => {
			if (J.reset(), !e) {
				clearTimeout(L), R = !1, B();
				return;
			}
			if (_.value || (g.value = null), !N && typeof document < "u" && (P = document.activeElement, xt(M), N = Dt(), document.addEventListener("keydown", W), document.addEventListener("focusin", G)), await y(), I || !h.value) return;
			let t = p.value?.parentElement;
			t && (t.inert = !1, t.removeAttribute("inert"), t.removeAttribute("aria-hidden"), t.style.pointerEvents = ""), !I && z() && !p.value?.contains(document.activeElement) && wt(p.value);
		}, {
			immediate: !0,
			flush: "post"
		}), C(() => {
			I = !0, clearTimeout(L), re(), K();
		}), r({ requestClose: V }), (r, i) => (E(), a(t, { to: "body" }, [f(n, {
			name: "share-drawer",
			appear: "",
			duration: F(A) ? 0 : 220,
			onBeforeLeave: B,
			onAfterEnter: ee,
			onAfterLeave: q
		}, {
			default: U(() => [x.value ? (E(), s("div", {
				key: 0,
				class: b(["share-drawer", T.value]),
				style: S(O.value),
				inert: !h.value,
				"aria-hidden": h.value ? void 0 : "true"
			}, [c("div", {
				class: "share-drawer__scrim",
				"aria-hidden": "true",
				onClick: V
			}), c("section", v(r.$attrs, {
				ref_key: "panel",
				ref: p,
				class: "share-drawer__panel",
				style: { width: typeof e.width == "number" ? `${e.width}px` : e.width },
				role: "dialog",
				"aria-modal": h.value ? !0 : void 0,
				"aria-label": e.ariaLabel,
				tabindex: "-1",
				onTouchstartPassive: i[0] ||= (...e) => F(J).start && F(J).start(...e),
				onTouchmove: i[1] ||= (...e) => F(J).move && F(J).move(...e),
				onTouchend: i[2] ||= (...e) => F(J).end && F(J).end(...e),
				onTouchcancel: i[3] ||= (...e) => F(J).cancel && F(J).cancel(...e)
			}), [
				r.$slots.header || r.$slots.title ? (E(), s("header", yi, [j(r.$slots, "header", { close: V }, () => [j(r.$slots, "title", { close: V }, void 0, !0)], !0)])) : o("", !0),
				e.showClose ? (E(), s("button", {
					key: 1,
					class: "share-drawer__close",
					type: "button",
					"aria-label": e.closeLabel,
					onClick: V
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
				})], -1)]], 8, bi)) : o("", !0),
				c("div", xi, [j(r.$slots, "default", { close: V }, void 0, !0)]),
				r.$slots.footer ? (E(), s("footer", Si, [j(r.$slots, "footer", { close: V }, void 0, !0)])) : o("", !0)
			], 16, vi)], 14, _i)) : o("", !0)]),
			_: 3
		}, 8, ["duration"])]));
	}
}), [["__scopeId", "data-v-889b52f4"]]);
//#endregion
//#region src/composables/useFullscreenViewportHeight.js
function wi(e = .94) {
	let t = k(`${Math.round(e * 100)}dvh`);
	function n() {
		if (typeof window > "u") return;
		let n = window.visualViewport?.height || window.innerHeight;
		t.value = `${Math.floor(n * e)}px`;
	}
	return w(() => {
		n(), window.addEventListener("resize", n), window.visualViewport?.addEventListener("resize", n);
	}), C(() => {
		window.removeEventListener("resize", n), window.visualViewport?.removeEventListener("resize", n);
	}), t;
}
//#endregion
//#region src/components/overlay/AppModal.vue
var Ti = ["aria-label"], Ei = {
	key: 0,
	class: "am-handle"
}, Di = ["aria-label"], Oi = () => window.innerWidth <= 640, ki = 260, Ai = 280, ji = "cubic-bezier(0.32, 0.72, 0, 1)", Mi = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function Ni(e) {
	e.focus({ preventScroll: !0 });
}
var Pi = /*#__PURE__*/ q({
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
		let l = e, u = r, d = k(null), f = k(null), p = wi(), m = i(() => typeof l.width == "number" ? `${l.width}px` : l.width || "480px"), h = k(!1), g = k(0), _ = k(0), v = k(0), x = !1, T = null, D = !1, O = () => {}, A = Symbol("app-modal"), M = typeof document < "u" ? document.activeElement : null;
		function N(e) {
			if (!Ct(A)) return;
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
			let t = [...f.value?.querySelectorAll(Mi) || []].filter((e) => e.getClientRects().length > 0);
			if (!t.length) {
				e.preventDefault(), f.value?.focus();
				return;
			}
			let n = t[0], r = t.at(-1);
			e.shiftKey && (document.activeElement === n || !f.value?.contains(document.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (document.activeElement === r || !f.value?.contains(document.activeElement)) && (e.preventDefault(), n.focus());
		}
		function P() {
			let e = d.value, t = f.value;
			!e || !t || (e.style.opacity = "0", Z(e, 0), Oi() ? t.style.transform = "translateY(100%)" : (t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					let n = "cubic-bezier(0, 0, 0.4, 1)", r = `opacity ${ki}ms ${n}, backdrop-filter ${ki}ms ${n}, -webkit-backdrop-filter ${ki}ms ${n}`;
					e.style.transition = r, e.style.opacity = "1", Z(e, 6), Oi() ? (t.style.transition = `transform ${ki}ms ${ji}`, t.style.transform = "translateY(0)") : (t.style.transition = `transform ${ki}ms ${ji}, opacity ${ki}ms ${n}`, t.style.transform = "none", t.style.opacity = "1"), setTimeout(() => {
						x || (e.style.transition = "", Z(e, 6), t.style.transition = "", t.style.transform = "", t.style.opacity = "", u("opened"));
					}, 310);
				});
			}));
		}
		function I() {
			let e = d.value, t = f.value;
			if (!e || !t) {
				T = setTimeout(() => {
					x || u("close");
				}, 0);
				return;
			}
			let n = `opacity ${Ai}ms ease, backdrop-filter ${Ai}ms ease, -webkit-backdrop-filter ${Ai}ms ease`;
			e.style.transition = n, e.style.opacity = "0", Z(e, 0), Oi() ? (t.style.transition = `transform ${Ai}ms ${ji}`, t.style.transform = "translateY(100%)") : (t.style.transition = `transform ${Ai}ms ease, opacity ${Ai}ms ease`, t.style.transform = "scale(0.95) translateY(10px)", t.style.opacity = "0"), T = setTimeout(() => {
				x || u("close");
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
			v.value = t?.scrollTop || f.value?.scrollTop || 0, h.value = !1, g.value = 0;
		}
		function z(e) {
			if (!l.dismissible) return;
			let t = e.touches[0].clientY - _.value;
			if (!h.value) {
				if (t > 8 && v.value <= 0) h.value = !0;
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
			g.value > 100 ? (e && (e.style.transition = `transform ${Ai}ms ${ji}`, e.style.transform = "translateY(100%)"), t && (t.style.transition = `opacity ${Ai}ms ease`, t.style.opacity = "0"), T = setTimeout(() => {
				x || u("close");
			}, 300)) : (e && (e.style.transition = `transform ${Ai}ms ${ji}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), g.value = 0, setTimeout(() => {
				x || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330));
		}
		function V() {
			if (!h.value) return;
			h.value = !1, g.value = 0;
			let e = f.value, t = d.value;
			e && (e.style.transition = `transform ${Ai}ms ${ji}`, e.style.transform = "translateY(0)"), t && (t.style.transition = "opacity 200ms ease", t.style.opacity = "1"), setTimeout(() => {
				x || (e && (e.style.transition = "", e.style.transform = ""), t && (t.style.transition = "", t.style.opacity = ""));
			}, 330);
		}
		return w(() => {
			xt(A), O = Dt(), document.addEventListener("keydown", N), y(() => {
				P(), f.value?.contains(document.activeElement) || (f.value?.querySelector(Mi)?.focus(), f.value?.contains(document.activeElement) || f.value?.focus());
			});
		}), C(() => {
			St(A), O(), document.removeEventListener("keydown", N), clearTimeout(T), x = !0, M instanceof HTMLElement && M.isConnected && Ni(M);
		}), (n, r) => (E(), a(t, { to: "body" }, [c("div", {
			ref_key: "overlay",
			ref: d,
			class: "am-overlay",
			style: S([e.zIndex === 3e3 ? {} : { zIndex: e.zIndex }, {
				"--am-fullscreen-height": F(p),
				"--am-width": m.value
			}]),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			onMousedown: K(L, ["self"])
		}, [c("div", {
			ref_key: "card",
			ref: f,
			class: b(["am-card", {
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
			e.showHandle ? (E(), s("div", Ei)) : o("", !0),
			e.showClose && !e.fullscreen ? (E(), s("button", {
				key: 1,
				class: "am-close",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: L
			}, "✕", 8, Di)) : o("", !0),
			j(n.$slots, "default", {}, void 0, !0)
		], 34)], 44, Ti)]));
	}
}, [["__scopeId", "data-v-4e16b3d7"]]), Fi = { class: "aem-shell" }, Ii = { class: "aem-heading" }, Li = { class: "aem-title" }, Ri = {
	key: 0,
	class: "aem-subtitle"
}, zi = {
	key: 0,
	class: "aem-header-actions"
}, Bi = ["aria-label"], Vi = {
	key: 0,
	class: "aem-footer"
}, Hi = /*#__PURE__*/ q({
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
		let t = k(null);
		function n() {
			t.value?.requestClose();
		}
		return (r, i) => (E(), a(Pi, {
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
			default: U(() => [c("section", Fi, [
				c("header", { class: b(["aem-header", { "aem-header-with-actions": !!r.$slots["header-actions"] }]) }, [
					i[3] ||= c("span", {
						class: "aem-handle",
						"aria-hidden": "true"
					}, null, -1),
					c("div", Ii, [j(r.$slots, "title", {}, () => [c("h2", Li, P(e.title), 1), e.subtitle ? (E(), s("span", Ri, P(e.subtitle), 1)) : o("", !0)], !0)]),
					r.$slots["header-actions"] ? (E(), s("div", zi, [j(r.$slots, "header-actions", {}, void 0, !0)])) : o("", !0),
					e.showClose ? (E(), s("button", {
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
					})], -1)]], 8, Bi)) : o("", !0)
				], 2),
				c("div", { class: b(["aem-body", {
					"aem-body-flush": !e.padded,
					"aem-body-no-scroll": !e.bodyScroll
				}]) }, [j(r.$slots, "default", {}, void 0, !0)], 2),
				r.$slots.footer ? (E(), s("footer", Vi, [j(r.$slots, "footer", {}, void 0, !0)])) : o("", !0)
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
}, [["__scopeId", "data-v-1fab7c24"]]), Ui = ["aria-label"], Wi = {
	key: 0,
	class: "share-loading__label",
	"aria-hidden": "true"
}, Gi = /*#__PURE__*/ q({
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
		return (t, r) => (E(), s("span", {
			class: b(["share-loading", { "share-loading--inline": e.inline }]),
			style: S({ "--loading-size": n.value }),
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
		})], -1), e.showLabel ? (E(), s("span", Wi, P(e.label), 1)) : o("", !0)], 14, Ui));
	}
}, [["__scopeId", "data-v-c549d335"]]), Ki = {
	key: 0,
	class: "cd-message"
}, qi = { class: "cd-actions" }, Ji = ["disabled"], Yi = ["aria-busy", "disabled"], Xi = /*#__PURE__*/ q({
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
		return (t, n) => l.value ? (E(), a(Hi, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: h
		}, {
			footer: U(() => [c("div", qi, [c("button", {
				type: "button",
				class: "cd-btn-cancel",
				disabled: e.loading,
				onClick: h
			}, P(f.value), 9, Ji), c("button", {
				type: "button",
				class: b(["cd-btn-confirm", `cd-btn--${p.value}`]),
				"aria-busy": e.loading,
				disabled: e.loading,
				onClick: g
			}, [e.loading ? (E(), a(Gi, {
				key: 0,
				label: e.loadingLabel,
				size: "xs",
				class: "button-loading",
				"aria-hidden": "true"
			}, null, 8, ["label"])) : o("", !0), d(" " + P(e.loading ? e.loadingLabel : u.value), 1)], 10, Yi)])]),
			default: U(() => [e.message ? (E(), s("div", Ki, P(e.message), 1)) : o("", !0)]),
			_: 1
		}, 8, [
			"title",
			"z-index",
			"dismissible"
		])) : o("", !0);
	}
}, [["__scopeId", "data-v-846211e5"]]), Zi = {
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
		return (t, n) => e.open ? (E(), a(Pi, {
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
			default: U(() => [j(t.$slots, "default")]),
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
function Qi({ open: e = 420, close: t = 300 } = {}) {
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
	], o = k(!1), s = k(!1), c = null;
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
var $i = ["aria-label"], ea = { class: "ms-head-content" }, ta = ["aria-label"], na = 320, ra = 260, ia = "8px", aa = /*#__PURE__*/ q({
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
		let l = e, u = r, d = dn(), f = R(), p = i(() => l.mode === "add"), m = i(() => l.showClose === null ? !!f.head : l.showClose), h = i(() => l.nav ? l.nav.view.value : "detail"), g = i(() => l.nav ? l.nav.detailStyle.value : null), _ = i(() => l.nav ? l.nav.subStyle.value : null), v = i(() => !!l.nav && h.value !== "detail"), x = k(null), T = k(null), D = k(null), O = k(null), A = k(null), M = k(null), N = k(!1), P = k(!1), I = k(!1), L = k(!1), z = k(!1), { EASE: B, visible: V, morphing: U, playClose: W, playOpen: G } = Qi({
			open: () => l.openDuration,
			close: () => l.closeDuration
		}), q = () => d.value ? "0px" : "18px", ee = i(() => ({
			"--ms-w": `${l.width}px`,
			"--ms-body-w": `${l.width}px`,
			"--ms-frame": l.frameColor || void 0
		}));
		function J() {
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
		function te() {
			if (l.nav && h.value !== "detail") {
				l.nav.backToDetail(), u("back");
				return;
			}
			if (z.value = !1, we(!1), p.value) {
				I.value = !1, V.value = !1, setTimeout(() => u("close"), 320);
				return;
			}
			W(x.value, J(), {
				fromRadius: q(),
				toRadius: l.originRadius
			}, () => u("close"));
		}
		function ne() {
			P.value = !0, z.value = !1, V.value = !1, we(!1), setTimeout(() => u("close"), 220);
		}
		let Y = Symbol("morph-sheet"), re = typeof document < "u" ? document.activeElement : null;
		function ie(e) {
			if (Ct(Y)) {
				if (e.key === "Escape") {
					te();
					return;
				}
				Tt(e, x.value);
			}
		}
		function ae(e) {
			let t = e?.firstElementChild;
			return t ? t.scrollHeight : e?.scrollHeight || 0;
		}
		function oe() {
			return Math.floor(window.innerHeight * .9) - (T.value?.offsetHeight || 0) - (D.value?.offsetHeight || 0);
		}
		function X(e) {
			if (d.value || !O.value || U.value) return;
			let t = l.nav ? l.nav.pos.value : 0, n = ae(A.value), r = M.value ? ae(M.value) : n, i = n * (1 - t) + r * t, a = Math.min(i, Math.max(120, oe()));
			O.value.style.transition = e ? `height ${na}ms ${B}` : "none", O.value.style.height = `${a}px`;
		}
		let Z = null;
		function se() {
			Z && (Z.disconnect(), [A.value?.firstElementChild, M.value?.firstElementChild].forEach((e) => {
				e && Z.observe(e);
			}));
		}
		function ce() {
			U.value || l.nav && l.nav.animating.value || ue || X(!1);
		}
		l.nav && (H(() => l.nav.pos.value, () => X(l.nav.animating.value)), H(() => l.nav.view.value, (e, t) => y(() => {
			se(), e !== "detail" && t === "detail" && M.value && (M.value.offsetWidth, l.nav.enterSub()), l.nav.animating.value || X(!1);
		})));
		let le = k(0), ue = !1, de = 0, fe = 0, Q = null, pe = 0, me = null, he = 0, ge = 0, _e = 0;
		function $(e) {
			!d.value || U.value || (de = e.touches[0].clientX, fe = e.touches[0].clientY, me = e.target, Q = null);
		}
		function ve() {
			let e = me;
			for (; e && e !== x.value;) {
				if (e.scrollHeight > e.clientHeight + 1) {
					let t = getComputedStyle(e).overflowY;
					if ((t === "auto" || t === "scroll") && e.scrollTop > 0) return !1;
				}
				e = e.parentElement;
			}
			return !0;
		}
		function ye(e) {
			if (!d.value || U.value || Q === "scroll") return;
			let t = e.touches[0].clientX - de, n = e.touches[0].clientY - fe;
			if (Q === null) {
				if (l.showBack && l.nav && t > 8 && Math.abs(t) > Math.abs(n)) {
					Q = "back", ue = !0, pe = t, he = e.touches[0].clientX, ge = e.timeStamp, _e = 0, l.nav.dragStart(O.value?.clientWidth || window.innerWidth);
					return;
				}
				if (n > 6 && ve() && Math.abs(n) >= Math.abs(t)) Q = "drag";
				else if (Math.abs(n) > 6 || Math.abs(t) > 6) {
					Q = "scroll";
					return;
				} else return;
			}
			if (Q === "back") {
				pe = Math.max(0, t), e.cancelable && e.preventDefault();
				let n = e.touches[0].clientX, r = e.timeStamp;
				r > ge && (_e = (n - he) / (r - ge)), he = n, ge = r, l.nav.dragMove(pe);
				return;
			}
			if (Q !== "drag") return;
			e.cancelable && e.preventDefault(), le.value = Math.max(0, n);
			let r = x.value;
			r && (r.style.transition = "none", r.style.transform = `translateY(${le.value}px)`);
		}
		function be() {
			if (Q === "back") {
				ue = !1, Q = null, l.nav.dragEnd(pe, _e), pe = 0, _e = 0;
				return;
			}
			if (Q !== "drag") {
				Q = null;
				return;
			}
			Q = null;
			let e = x.value;
			if (le.value > 120) {
				xe();
				return;
			}
			le.value = 0, e && (e.style.transition = `transform .26s ${B}`, e.style.transform = "translateY(0)");
		}
		function xe() {
			let e = x.value;
			e && (e.style.transition = `transform ${ra}ms ${B}`, e.style.transform = `translateY(${window.innerHeight}px)`), V.value = !1, z.value = !1, Ae(), we(!1), setTimeout(() => u("close"), ra);
		}
		let Se = () => {};
		function Ce() {
			return typeof l.backgroundTarget == "string" ? document.querySelector(l.backgroundTarget) : l.backgroundTarget instanceof Element ? l.backgroundTarget : null;
		}
		function we(e) {
			Se(), Se = () => {}, !(!e || d.value || !l.blurBackground) && (Se = kt(Ce(), { blur: ia }));
		}
		let Te = "", Ee = "", De = !1;
		function Oe() {
			let e = l.originEl;
			e && (Te = e.style.opacity, Ee = e.style.transition);
		}
		function ke(e) {
			let t = l.originEl;
			t && (t.style.opacity = e ? "0" : Te);
		}
		function Ae() {
			let e = l.originEl;
			if (!e) return;
			De = !0;
			let t = Ee && Ee !== "none" ? `${Ee}, ` : "";
			e.style.transition = `${t}opacity ${ra}ms ease`, e.style.opacity = "0", requestAnimationFrame(() => {
				e.style.opacity = Te;
			}), setTimeout(() => {
				e.style.opacity = Te, e.style.transition = Ee, De = !1;
			}, 280);
		}
		let je = () => {};
		function Me() {
			U.value || (d.value && O.value ? O.value.style.height = "" : X(!1));
		}
		return w(async () => {
			xt(Y), je = Dt(), typeof ResizeObserver < "u" && (Z = new ResizeObserver(ce)), await y(), X(!1), se(), N.value = !0, p.value ? (V.value = !0, requestAnimationFrame(() => {
				I.value = !0, L.value = !0;
			})) : (Oe(), ke(!0), G(x.value, l.originRect, {
				fromRadius: l.originRadius,
				toRadius: q()
			}), requestAnimationFrame(() => {
				L.value = !0;
			})), we(!0), setTimeout(() => {
				z.value = !0, X(!1), wt(x.value);
			}, 20), document.addEventListener("keydown", ie), window.addEventListener("resize", Me);
		}), C(() => {
			St(Y), je(), we(!1), !p.value && !De && ke(!1), document.removeEventListener("keydown", ie), window.removeEventListener("resize", Me), Z?.disconnect(), Et(re);
		}), n({
			close: te,
			finishNow: ne
		}), (n, r) => (E(), a(t, { to: "body" }, [c("div", {
			class: b(["ms-overlay", { visible: F(V) }]),
			style: S(e.zIndex === 1e3 ? null : { zIndex: e.zIndex }),
			onClick: K(te, ["self"])
		}, [c("div", {
			ref_key: "panelEl",
			ref: x,
			class: b(["ms-sheet", {
				shown: N.value,
				closing: P.value,
				entered: I.value,
				padded: L.value,
				"add-sheet": p.value,
				"ms-framed": e.frameColor
			}]),
			style: S(ee.value),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": e.ariaLabel || void 0,
			tabindex: "-1",
			onTouchstartPassive: $,
			onTouchmove: ye,
			onTouchend: be,
			onTouchcancel: be
		}, [
			r[0] ||= c("div", { class: "ms-grab" }, null, -1),
			n.$slots.head ? (E(), s("div", {
				key: 0,
				ref_key: "headEl",
				ref: T,
				class: "ms-head"
			}, [c("div", ea, [j(n.$slots, "head", {}, void 0, !0)]), m.value ? (E(), s("button", {
				key: 0,
				class: "ms-x",
				type: "button",
				"aria-label": e.closeLabel,
				onClick: te
			}, "✕", 8, ta)) : o("", !0)], 512)) : o("", !0),
			c("div", {
				ref_key: "bodyEl",
				ref: O,
				class: "ms-body"
			}, [c("div", {
				ref_key: "detailCellEl",
				ref: A,
				class: "ms-cell",
				style: S(g.value)
			}, [j(n.$slots, "detail", { revealed: z.value }, () => [j(n.$slots, "default", { revealed: z.value }, void 0, !0)], !0)], 4), v.value ? (E(), s("div", {
				key: 0,
				ref_key: "subCellEl",
				ref: M,
				class: "ms-cell",
				style: S(_.value)
			}, [j(n.$slots, "sub", {}, void 0, !0)], 4)) : o("", !0)], 512),
			e.showFoot && n.$slots.foot ? (E(), s("div", {
				key: 1,
				ref_key: "footEl",
				ref: D,
				class: "ms-foot"
			}, [j(n.$slots, "foot", {}, void 0, !0)], 512)) : o("", !0)
		], 46, $i)], 6)]));
	}
}, [["__scopeId", "data-v-c5b79059"]]), oa = { class: "form-actions" }, sa = ["disabled"], ca = ["aria-busy", "disabled"], la = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("div", oa, [c("button", {
			type: "button",
			class: "form-actions__cancel",
			disabled: e.disabled,
			onClick: n[0] ||= (e) => t.$emit("cancel")
		}, P(e.cancelText), 9, sa), c("button", {
			type: "button",
			class: "form-actions__submit",
			"aria-busy": e.loading,
			disabled: e.disabled || e.loading || !e.canSubmit,
			onClick: n[1] ||= (e) => t.$emit("submit")
		}, [e.loading ? (E(), a(Gi, {
			key: 0,
			label: e.loadingText,
			size: "xs",
			class: "button-loading",
			"aria-hidden": "true"
		}, null, 8, ["label"])) : o("", !0), d(" " + P(e.loading ? e.loadingText : e.submitText), 1)], 8, ca)]));
	}
}, [["__scopeId", "data-v-c01a950d"]]), ua = [
	"type",
	"value",
	"placeholder",
	"maxlength",
	"autocomplete"
], da = /*#__PURE__*/ q({
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
		let n = e, r = k(null);
		return w(() => {
			n.autofocus && r.value?.focus();
		}), t({ focus: () => r.value?.focus() }), (t, n) => (E(), s("input", {
			ref_key: "inputRef",
			ref: r,
			class: b(["form-text-input", {
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
			onKeydown: n[2] ||= G((e) => t.$emit("enter", e), ["enter"])
		}, null, 42, ua));
	}
}, [["__scopeId", "data-v-3dd2fc56"]]), fa = {
	key: 0,
	class: "tpd-message"
}, pa = {
	key: 1,
	class: "tpd-label"
}, ma = /*#__PURE__*/ q({
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
		let n = e, r = t, c = i(() => n.open === null || n.open), l = i(() => n.confirmText || n.confirmLabel), u = i(() => n.cancelText || n.cancelLabel), d = k(n.value || n.initial);
		H(() => n.value, (e) => {
			d.value = e;
		}), H(() => n.open, (e) => {
			e && y(() => {
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
		return (t, n) => c.value ? (E(), a(Hi, {
			key: 0,
			title: e.title,
			"z-index": e.zIndex,
			"show-close": !1,
			dismissible: !e.loading,
			onClose: m
		}, {
			footer: U(() => [f(la, {
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
			default: U(() => [
				e.message ? (E(), s("div", fa, P(e.message), 1)) : o("", !0),
				e.label ? (E(), s("label", pa, P(e.label), 1)) : o("", !0),
				f(da, {
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
}, [["__scopeId", "data-v-ba4b1b08"]]), ha = { class: "form-field-label" }, ga = {
	key: 0,
	class: "form-field-hint"
}, _a = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("div", { class: b(["form-field", { "form-field--vertical": e.vertical }]) }, [c("span", ha, [d(P(e.label), 1), e.hint ? (E(), s("span", ga, P(e.hint), 1)) : o("", !0)]), j(t.$slots, "default", {}, void 0, !0)], 2));
	}
}, [["__scopeId", "data-v-3ab3f287"]]), va = { class: "fn-wrap" }, ya = [
	"value",
	"min",
	"max",
	"step"
], ba = /*#__PURE__*/ q({
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
		let o = k(String(n.value ?? "")), l = k(!1), u = n.value;
		H(() => n.value, (e) => {
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
		return (t, n) => (E(), s("div", va, [
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[0] ||= K((e) => h(-1), ["stop"])
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
			}, null, 40, ya),
			c("button", {
				type: "button",
				class: "fn-btn",
				tabindex: "-1",
				onClick: n[2] ||= K((e) => h(1), ["stop"])
			}, "+")
		]));
	}
}, [["__scopeId", "data-v-9775803a"]]), xa = ["value"], Sa = /*#__PURE__*/ q({
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
		let r = e, i = n, a = k(null);
		function o(e) {
			let t = e.target.options[e.target.selectedIndex], n = t && "_value" in t ? t._value : e.target.value;
			i("update:value", n), i("change", n);
		}
		return w(() => {
			r.autofocus && a.value?.focus();
		}), t({ focus: () => a.value?.focus() }), (t, n) => (E(), s("select", {
			ref_key: "selectRef",
			ref: a,
			class: "form-select",
			value: e.value,
			onChange: o
		}, [j(t.$slots, "default", {}, void 0, !0)], 40, xa));
	}
}, [["__scopeId", "data-v-cf13b596"]]), Ca = [
	"value",
	"placeholder",
	"rows",
	"maxlength"
], wa = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("textarea", {
			class: "form-textarea",
			value: e.value,
			placeholder: e.placeholder,
			rows: e.rows,
			maxlength: e.maxlength,
			onInput: n[0] ||= (e) => t.$emit("update:value", e.target.value)
		}, null, 40, Ca));
	}
}, [["__scopeId", "data-v-89c3847b"]]), Ta = {
	class: "share-inline-edit__measure",
	"aria-hidden": "true"
}, Ea = {
	key: 0,
	class: "share-inline-edit__view"
}, Da = { class: "share-inline-edit__value" }, Oa = ["aria-label", "disabled"], ka = ["onKeydown"], Aa = [
	"value",
	"aria-label",
	"disabled",
	"aria-invalid"
], ja = ["value", "disabled"], Ma = [
	"value",
	"aria-label",
	"placeholder",
	"maxlength",
	"required",
	"disabled",
	"aria-invalid"
], Na = {
	key: 2,
	class: "share-inline-edit__actions"
}, Pa = ["aria-label", "disabled"], Fa = ["aria-label", "disabled"], Ia = {
	key: 2,
	class: "share-inline-edit__error",
	role: "alert"
}, La = /*#__PURE__*/ q({
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
		let r = t, a = n, l = k(!1), u = k(!1), f = k(""), p = k(r.modelValue), m = k(null), h = k(null), g = i(() => r.forceOpen || l.value), _ = (e) => r.options?.find((t) => String(t.value) === String(e))?.label, v = i(() => r.displayValue ?? _(r.modelValue) ?? (r.modelValue === "" || r.modelValue == null ? r.placeholder : r.modelValue)), x = i(() => {
			let e = g.value ? _(p.value) ?? p.value : v.value;
			return e === "" || e == null ? r.placeholder || "\xA0" : String(e);
		});
		H(() => r.modelValue, (e) => {
			l.value || (p.value = e);
		}), H(() => r.forceOpen, () => {
			l.value = !1, p.value = r.modelValue, f.value = "";
		});
		async function S() {
			r.disabled || (p.value = r.modelValue, f.value = "", l.value = !0, await y(), m.value?.focus(), m.value?.select?.());
		}
		function C(e) {
			p.value = r.options ? r.options.find((t) => String(t.value) === e)?.value ?? e : e, r.forceOpen && a("update:modelValue", p.value);
		}
		function w() {
			u.value || r.forceOpen || (l.value = !1, p.value = r.modelValue, f.value = "", a("cancel"), y(() => h.value?.focus()));
		}
		function T(e) {
			e.isComposing || r.forceOpen || (e.preventDefault(), D());
		}
		async function D() {
			if (!(u.value || r.disabled || r.required && !String(p.value ?? "").trim())) {
				u.value = !0, f.value = "";
				try {
					if (r.persist && await r.persist(p.value) === !1) return;
					a("update:modelValue", p.value), a("confirm", p.value), l.value = !1, y(() => h.value?.focus());
				} catch (e) {
					f.value = e?.message || r.errorLabel;
				} finally {
					u.value = !1;
				}
			}
		}
		return (n, r) => (E(), s("span", { class: b(["share-inline-edit", { "share-inline-edit--open": g.value }]) }, [
			c("span", Ta, P(x.value), 1),
			g.value ? (E(), s("span", {
				key: 1,
				class: "share-inline-edit__editor",
				onKeydown: [G(K(w, ["stop", "prevent"]), ["esc"]), G(T, ["enter"])]
			}, [t.options ? (E(), s("select", {
				key: 0,
				ref_key: "input",
				ref: m,
				value: p.value,
				"aria-label": t.label,
				disabled: t.disabled || u.value,
				"aria-invalid": !!f.value,
				onChange: r[0] ||= (e) => C(e.target.value)
			}, [(E(!0), s(e, null, A(t.options, (e) => (E(), s("option", {
				key: String(e.value),
				value: e.value,
				disabled: e.disabled
			}, P(e.label), 9, ja))), 128))], 40, Aa)) : (E(), s("input", {
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
			}, null, 40, Ma)), t.forceOpen ? o("", !0) : (E(), s("span", Na, [c("button", {
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
			})], -1)]], 8, Pa), c("button", {
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
			})], -1)]], 8, Fa)]))], 40, ka)) : (E(), s("span", Ea, [c("span", Da, [j(n.$slots, "default", { value: t.modelValue }, () => [d(P(v.value), 1)], !0)]), t.editable ? (E(), s("button", {
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
			})], -1)]], 8, Oa)) : o("", !0)])),
			f.value ? (E(), s("span", Ia, P(f.value), 1)) : o("", !0)
		], 2));
	}
}, [["__scopeId", "data-v-c8e5a3a1"]]), Ra = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("span", {
			class: b(["share-skeleton", { "share-skeleton--round": e.round }]),
			style: S({
				width: e.width,
				height: e.height
			}),
			"aria-hidden": "true"
		}, null, 6));
	}
}, [["__scopeId", "data-v-a3d65c09"]]), za = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("div", {
			class: b(["share-loading-state", {
				"share-loading-state--compact": e.compact,
				"share-loading-state--fill": e.fill
			}]),
			"aria-busy": "true"
		}, [f(Gi, {
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
}, [["__scopeId", "data-v-eab73cf4"]]), Ba = [
	"type",
	"disabled",
	"aria-busy"
], Va = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("button", {
			class: b(["share-action-button", [`share-action-button--${e.variant}`, {
				"share-action-button--icon-only": e.iconOnly,
				"share-action-button--stacked": e.layout === "stacked" && !e.iconOnly
			}]]),
			type: e.type,
			disabled: e.disabled || e.loading,
			"aria-busy": e.loading || void 0
		}, [e.loading ? (E(), a(Gi, {
			key: 0,
			label: e.loadingLabel,
			size: "xs",
			"aria-hidden": "true"
		}, null, 8, ["label"])) : j(t.$slots, "icon", {}, void 0, !0, 1), c("span", null, [j(t.$slots, "default", {}, void 0, !0)])], 10, Ba));
	}
}, [["__scopeId", "data-v-ee3ca35c"]]), Ha = {
	class: "share-icon-toggle__icon",
	"aria-hidden": "true"
}, Ua = /*#__PURE__*/ q({
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
		return (t, n) => (E(), a(Va, {
			class: b(["share-icon-toggle", { "share-icon-toggle--on": e.modelValue }]),
			style: S({ "--icon-toggle-color": e.color || "var(--accent)" }),
			variant: "secondary",
			"icon-only": "",
			disabled: e.disabled,
			"aria-label": e.label,
			title: e.label,
			"aria-pressed": e.modelValue,
			onClick: i
		}, {
			icon: U(() => [c("span", Ha, [j(t.$slots, "icon", {}, void 0, !0)]), n[0] ||= c("svg", {
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
}, [["__scopeId", "data-v-28796e03"]]), Wa = (e) => `${Math.round(e)}px`, Ga = (e, t, n, r) => ({
	left: Wa(e),
	top: Wa(t),
	width: Wa(Math.max(0, n)),
	height: Wa(Math.max(0, r))
}), Ka = (e, t, n) => Math.max(t, Math.min(e, n));
function qa(e, t, n, r = !1) {
	let { width: i, height: a, left: o = 0, top: s = 0 } = t, c = o + i, l = s + a, u = Math.min(n.width, i - 24), d = Math.min(n.height, a - 24), f = null;
	if (e && e.width > 0 && e.height > 0) {
		let t = Ka(e.left - 5, o, c), n = Ka(e.top - 5, s, l), r = Ka(e.right + 5, o, c), i = Ka(e.bottom + 5, s, l);
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
		Ga(o, s, i, f.top - s),
		Ga(o, f.bottom, i, l - f.bottom),
		Ga(o, f.top, f.left - o, f.height),
		Ga(f.right, f.top, c - f.right, f.height)
	] : [Ga(o, s, i, a)], m = o + (i - u) / 2, h = s + (a - d) / 2;
	return f && (m = Ka(f.left, o + 12, c - u - 12), h = f.bottom + 14 + d <= l - 12 ? f.bottom + 14 : f.top - d - 14, h < s + 12 && f.right + u + 14 <= c - 12 && (m = f.right + 14, h = f.top), h = Ka(h, s + 12, l - d - 12)), r && (m = o + (i - u) / 2, h = f && f.top > s + a / 2 ? s + 12 : l - d - 12), {
		rect: f,
		masks: p,
		spotlight: f ? Ga(f.left, f.top, f.width, f.height) : {},
		card: {
			left: Wa(m),
			top: Wa(h),
			maxHeight: Wa(a - 24)
		}
	};
}
//#endregion
//#region src/components/tutorial/GuidedTour.vue
var Ja = ["aria-label"], Ya = {
	"aria-live": "polite",
	"aria-atomic": "true"
}, Xa = {
	key: 0,
	role: "alert"
}, Za = /*#__PURE__*/ q({
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
		let r = n, l = k(null), u = k(qa(null, {
			width: 1,
			height: 1
		}, {
			width: 1,
			height: 1
		})), p = i(() => u.value.rect), m = i(() => u.value.spotlight), h = i(() => u.value.masks), g = i(() => u.value.card), _ = Symbol("guided-tour"), v = null, b = null, x = !1;
		function w() {
			if (!r.tour.active) return;
			let e = window.visualViewport;
			u.value = qa(r.tour.target?.getBoundingClientRect(), {
				width: e?.width || window.innerWidth,
				height: e?.height || window.innerHeight,
				left: e?.offsetLeft || 0,
				top: e?.offsetTop || 0
			}, {
				width: l.value?.offsetWidth || 360,
				height: l.value?.offsetHeight || 220
			}, r.mobile), v = requestAnimationFrame(w);
		}
		function T(e) {
			e.stopImmediatePropagation(), e.key === "Escape" ? (e.preventDefault(), r.tour.error ? r.tour.stop() : r.tour.dismiss()) : Tt(e, l.value);
		}
		function D(e) {
			l.value?.contains(e.target) || wt(l.value);
		}
		function O() {
			cancelAnimationFrame(v), St(_), x && (x = !1, window.removeEventListener("keydown", T, !0), document.removeEventListener("focusin", D, !0), Et(b));
		}
		return H(() => r.tour.active, async (e) => {
			if (!e) {
				O();
				return;
			}
			b = document.activeElement, x = !0, xt(_), window.addEventListener("keydown", T, !0), document.addEventListener("focusin", D, !0), await y(), r.tour.active && (wt(l.value), w());
		}, { immediate: !0 }), H(() => r.tour.index, async () => {
			await y(), r.tour.active && wt(l.value);
		}), C(O), (r, i) => (E(), a(t, { to: "body" }, [n.tour.active ? (E(), s("div", {
			key: 0,
			class: "guided-tour",
			style: S({ zIndex: n.zIndex }),
			onMousedown: i[1] ||= K(() => {}, ["stop"]),
			onTouchstart: i[2] ||= K(() => {}, ["stop"])
		}, [
			(E(!0), s(e, null, A(h.value, (e, t) => (E(), s("div", {
				key: t,
				class: "guided-tour__mask",
				style: S(e)
			}, null, 4))), 128)),
			p.value ? (E(), s("div", {
				key: 0,
				class: "guided-tour__spotlight",
				style: S(m.value)
			}, null, 4)) : o("", !0),
			i[3] ||= c("div", { class: "guided-tour__shield" }, null, -1),
			c("section", {
				ref_key: "card",
				ref: l,
				class: "guided-tour__card",
				style: S(g.value),
				role: "dialog",
				"aria-modal": "true",
				"aria-label": n.tour.step?.title,
				tabindex: "-1"
			}, [
				c("div", Ya, [
					c("small", null, P(n.labels.progress(n.tour.index + 1, n.tour.steps.length)), 1),
					c("h2", null, P(n.tour.step?.title), 1),
					c("p", null, P(n.tour.step?.body), 1)
				]),
				n.tour.error ? (E(), s("p", Xa, P(n.labels.error), 1)) : o("", !0),
				c("footer", null, [
					f(Va, {
						variant: "quiet",
						onClick: i[0] ||= (e) => n.tour.error ? n.tour.stop() : n.tour.dismiss()
					}, {
						default: U(() => [d(P(n.tour.error ? n.labels.close : n.labels.dismiss), 1)]),
						_: 1
					}),
					n.tour.index > 0 ? (E(), a(Va, {
						key: 0,
						variant: "secondary",
						disabled: n.tour.busy,
						onClick: n.tour.previous
					}, {
						default: U(() => [d(P(n.labels.previous), 1)]),
						_: 1
					}, 8, ["disabled", "onClick"])) : o("", !0),
					n.tour.error ? (E(), a(Va, {
						key: 1,
						disabled: n.tour.busy,
						onClick: n.tour.retry
					}, {
						default: U(() => [d(P(n.labels.retry), 1)]),
						_: 1
					}, 8, ["disabled", "onClick"])) : (E(), a(Va, {
						key: 2,
						loading: n.tour.busy,
						"loading-label": n.labels.loading,
						onClick: n.tour.next
					}, {
						default: U(() => [d(P(n.tour.index === n.tour.steps.length - 1 ? n.labels.finish : n.labels.next), 1)]),
						_: 1
					}, 8, [
						"loading",
						"loading-label",
						"onClick"
					]))
				])
			], 12, Ja)
		], 36)) : o("", !0)]));
	}
}, [["__scopeId", "data-v-e912449f"]]);
//#endregion
//#region src/composables/useGuidedTour.js
function Qa({ onFinish: e = async () => {} } = {}) {
	let t = k(!1), n = k(!1), r = N(null), a = k(0), o = N([]), s = N(null), c = i(() => o.value[a.value] || null), l = null, u = [], d = null, f = !1, p = 0;
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
			if (await c.value?.enter?.(f), await y(), i.signal.aborted) return;
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
	async function v(i) {
		if (f || !t.value) return;
		n.value && m(), f = !0, n.value = !0, r.value = null;
		let a = p;
		d = () => v(i);
		try {
			await e(i), p === a && g();
		} catch (e) {
			t.value && p === a && (r.value = e);
		} finally {
			p === a && (f = !1, n.value = !1);
		}
	}
	return T(g), {
		active: t,
		busy: n,
		error: r,
		index: a,
		steps: o,
		step: c,
		target: s,
		start: _,
		stop: g,
		next: () => a.value === o.value.length - 1 ? v("completed") : h(a.value + 1),
		previous: () => h(a.value - 1),
		dismiss: () => v("dismissed"),
		retry: () => d?.()
	};
}
//#endregion
//#region src/components/StatBar.vue
var $a = ["aria-label", "aria-valuenow"], eo = {
	key: 1,
	class: "stat-bar-shine"
}, to = /*#__PURE__*/ q({
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
		return (n, i) => (E(), s("div", {
			class: b(["stat-bar", [`stat-bar--${t.size}`, {
				"stat-bar--decorated": t.decorated,
				"stat-bar--full": r.value >= 100
			}]]),
			role: "meter",
			"aria-label": t.label || void 0,
			"aria-valuemin": "0",
			"aria-valuemax": "100",
			"aria-valuenow": r.value,
			style: S({ "--bar-color": t.color })
		}, [
			c("div", {
				class: "stat-bar-fill",
				style: S({ width: r.value + "%" })
			}, [t.decorated ? (E(), s(e, { key: 0 }, [i[0] ||= c("span", { class: "stat-bar-bub stat-bar-bub1" }, null, -1), i[1] ||= c("span", { class: "stat-bar-bub stat-bar-bub2" }, null, -1)], 64)) : o("", !0)], 4),
			a.value > 0 ? (E(), s("div", {
				key: 0,
				class: "stat-bar-temp",
				style: S({
					left: r.value + "%",
					width: a.value + "%",
					"--temp-color": t.tempColor
				})
			}, null, 4)) : o("", !0),
			t.decorated ? (E(), s("span", eo)) : o("", !0)
		], 14, $a));
	}
}, [["__scopeId", "data-v-4a3b34fc"]]), no = ["aria-label"], ro = [
	"aria-label",
	"aria-pressed",
	"title",
	"disabled",
	"onClick"
], io = /*#__PURE__*/ q({
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
		return (n, r) => (E(), s("div", {
			class: "share-icon-picker",
			role: "group",
			"aria-label": t.label
		}, [(E(!0), s(e, null, A(t.options, (e) => (E(), s("button", {
			key: e.value,
			type: "button",
			class: b(["share-icon-picker__option", { "share-icon-picker__option--selected": e.value === t.modelValue }]),
			"aria-label": e.label || String(e.value),
			"aria-pressed": e.value === t.modelValue,
			title: e.label || String(e.value),
			disabled: t.disabled || e.disabled,
			onClick: (t) => n.$emit("update:modelValue", e.value)
		}, [j(n.$slots, "icon", { option: e }, () => [(E(), a(M(e.icon), {
			size: 18,
			"aria-hidden": "true"
		}))], !0)], 10, ro))), 128))], 8, no));
	}
}, [["__scopeId", "data-v-8e855500"]]), ao = {
	key: 0,
	class: "detail-section-icon",
	"aria-hidden": "true"
}, oo = { class: "detail-section-label" }, so = {
	key: 1,
	class: "detail-section-rule",
	"aria-hidden": "true"
}, co = {
	key: 2,
	class: "detail-section-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	width: "14",
	height: "14"
}, lo = ["id"], uo = /*#__PURE__*/ q({
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
		let n = e, r = t, l = L(), u = k(n.defaultOpen), d = i({
			get: () => n.modelValue ?? u.value,
			set: (e) => {
				u.value = e, r("update:modelValue", e);
			}
		});
		return (t, n) => (E(), s("section", { class: b(["detail-section", {
			"detail-section--collapsible": e.collapsible,
			"detail-section--open": d.value,
			"detail-section--illustrated": t.$slots.icon,
			"detail-section--danger": e.tone === "danger"
		}]) }, [(E(), a(M(e.collapsible ? "button" : "div"), {
			class: b(["detail-section-head", { "detail-section-head--btn": e.collapsible }]),
			type: e.collapsible ? "button" : null,
			"aria-expanded": e.collapsible ? d.value : void 0,
			"aria-controls": e.collapsible ? F(l) : void 0,
			onClick: n[0] ||= (t) => e.collapsible && (d.value = !d.value)
		}, {
			default: U(() => [
				t.$slots.icon ? (E(), s("span", ao, [j(t.$slots, "icon", {}, void 0, !0)])) : o("", !0),
				c("span", oo, P(e.label), 1),
				t.$slots.icon ? (E(), s("span", so)) : o("", !0),
				e.collapsible ? (E(), s("svg", co, [...n[1] ||= [c("path", {
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
		])), W(c("div", {
			id: F(l),
			class: "detail-section-body"
		}, [j(t.$slots, "default", {}, void 0, !0)], 8, lo), [[V, !e.collapsible || d.value]])], 2));
	}
}, [["__scopeId", "data-v-6a2f0c96"]]), fo = [
	"role",
	"tabindex",
	"aria-current"
], po = { class: "oli-icon" }, mo = {
	key: 0,
	class: "oli-metric"
}, ho = { class: "oli-main" }, go = { class: "oli-name" }, _o = {
	key: 0,
	class: "oli-name-en"
}, vo = ["title"], yo = {
	key: 0,
	class: "oli-sub"
}, bo = { class: "oli-right" }, xo = {
	key: 0,
	class: "oli-chevron",
	viewBox: "0 0 16 16",
	fill: "none",
	width: "14",
	height: "14"
}, So = /*#__PURE__*/ q({
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
		return (t, n) => (E(), s("div", {
			class: b(["oli", {
				"oli--interactive": e.interactive,
				"oli--selected": e.selected
			}]),
			role: e.interactive ? "button" : void 0,
			tabindex: e.interactive ? 0 : void 0,
			"aria-current": e.selected ? "true" : void 0,
			onClick: n[0] ||= (n) => e.interactive && t.$emit("activate", n),
			onKeydown: i
		}, [
			c("div", po, [j(t.$slots, "icon", {}, void 0, !0)]),
			t.$slots.metric ? (E(), s("div", mo, [j(t.$slots, "metric", {}, void 0, !0)])) : o("", !0),
			c("div", ho, [c("div", { class: b(["oli-name-row", { "oli-name-row--center": e.nameCenter }]) }, [
				c("span", go, P(e.title), 1),
				e.alternateLabel ? (E(), s("span", _o, P(e.alternateLabel), 1)) : o("", !0),
				e.marker ? (E(), s("span", {
					key: 1,
					class: "oli-custom",
					title: e.markerLabel
				}, P(e.marker), 9, vo)) : o("", !0),
				j(t.$slots, "name-extras", {}, void 0, !0)
			], 2), t.$slots.subtitle || e.subtitle ? (E(), s("div", yo, [j(t.$slots, "subtitle", {}, () => [d(P(e.subtitle), 1)], !0)])) : o("", !0)]),
			c("div", bo, [j(t.$slots, "trailing", {}, void 0, !0), e.showChevron ? (E(), s("svg", xo, [...n[1] ||= [c("path", {
				d: "M6 12L10 8L6 4",
				stroke: "currentColor",
				"stroke-width": "1.6",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)]])) : o("", !0)])
		], 42, fo));
	}
}, [["__scopeId", "data-v-bd72ecfc"]]), Co = ["id", "aria-label"], wo = [
	"id",
	"aria-selected",
	"aria-disabled",
	"onPointerenter",
	"onClick"
], To = {
	key: 0,
	class: "share-option-list__empty"
}, Eo = /*#__PURE__*/ q({
	__name: "OptionList",
	props: {
		id: {
			type: String,
			default: () => L()
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
	setup(t, { emit: n }) {
		let r = n;
		function i(e, t, n) {
			Mn(e) && (r("active", n), r("hover", {
				option: t,
				event: e
			}));
		}
		return (n, a) => (E(), s("div", {
			id: t.id,
			class: "share-option-list",
			role: "listbox",
			"aria-label": t.label
		}, [
			(E(!0), s(e, null, A(t.options, (e, o) => (E(), s("div", {
				id: `${t.id}-${o}`,
				key: e.value,
				class: b(["share-option-list__option", { "share-option-list__option--active": o === t.activeIndex }]),
				role: "option",
				"aria-selected": o === t.activeIndex,
				"aria-disabled": e.disabled || void 0,
				onPointerenter: (t) => i(t, e, o),
				onPointerleave: a[0] ||= (e) => F(Mn)(e) && r("leave"),
				onMousedown: a[1] ||= K(() => {}, ["prevent", "stop"]),
				onClick: K((t) => !e.disabled && n.$emit("select", e), ["stop"])
			}, [j(n.$slots, "option", { option: e }, () => [d(P(e.label), 1)], !0)], 42, wo))), 128)),
			t.options.length ? o("", !0) : (E(), s("div", To, [j(n.$slots, "empty", {}, () => [d(P(t.emptyLabel), 1)], !0)])),
			j(n.$slots, "footer", {}, void 0, !0)
		], 8, Co));
	}
}, [["__scopeId", "data-v-e3d44d18"]]), Do = { class: "share-search-multi-select" }, Oo = {
	key: 0,
	class: "share-search-multi-select__tags"
}, ko = /*#__PURE__*/ q({
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
		let r = t, c = n, u = k(null), p = k(!1), m = k(""), h = k(0), g = L(), _ = i(() => new Set(r.modelValue.map(String))), v = i(() => new Map(r.options.map((e) => [String(e.value), e]))), b = i(() => r.modelValue.map((e) => v.value.get(String(e))).filter(Boolean)), x = i(() => r.limit > 0 && r.modelValue.length >= r.limit), S = i(() => r.options.filter((e) => !_.value.has(String(e.value)) && !e.disabled && String(e.label).toLocaleLowerCase().includes(m.value.trim().toLocaleLowerCase()))), C = i(() => r.options.some((e) => String(e.label).trim().toLocaleLowerCase() === m.value.trim().toLocaleLowerCase()));
		H(S, (e) => {
			h.value = e.length ? 0 : -1;
		}), H(() => r.modelValue, () => {
			m.value = "", x.value ? p.value = !1 : p.value && y(() => u.value?.focus());
		}, { deep: !0 });
		function w(e) {
			x.value || c("update:modelValue", [...r.modelValue, e.value]);
		}
		function T(e) {
			c("update:modelValue", r.modelValue.filter((t) => String(t) !== String(e)));
		}
		function D(e) {
			if (["ArrowDown", "ArrowUp"].includes(e.key)) {
				e.preventDefault(), p.value = !0;
				let t = S.value.length;
				h.value = t ? (h.value + (e.key === "ArrowDown" ? 1 : -1) + t) % t : -1, y(() => document.getElementById(`${g}-${h.value}`)?.scrollIntoView({ block: "nearest" }));
			} else e.key === "Enter" && p.value && S.value[h.value] ? (e.preventDefault(), w(S.value[h.value])) : e.key === "Escape" ? (e.preventDefault(), p.value = !1) : e.key === "Tab" && (p.value = !1);
		}
		return (n, r) => (E(), s("div", Do, [
			b.value.length ? (E(), s("div", Oo, [(E(!0), s(e, null, A(b.value, (e) => (E(), s("span", {
				key: e.value,
				class: "share-search-multi-select__tag"
			}, [d(P(e.label) + " ", 1), f(Be, {
				label: `${t.removeLabel}: ${e.label}`,
				disabled: t.disabled,
				onClick: (t) => T(e.value)
			}, null, 8, [
				"label",
				"disabled",
				"onClick"
			])]))), 128))])) : o("", !0),
			x.value ? o("", !0) : (E(), a(da, {
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
				"aria-controls": F(g),
				"aria-activedescendant": p.value && h.value >= 0 ? `${F(g)}-${h.value}` : void 0,
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
			f(pn, {
				open: p.value,
				"onUpdate:open": r[5] ||= (e) => p.value = e,
				anchor: u.value?.$el,
				"min-width": 260,
				"z-index": t.zIndex,
				related: ""
			}, {
				default: U(() => [f(Eo, {
					id: F(g),
					label: t.label,
					options: S.value,
					"active-index": h.value,
					"empty-label": t.emptyLabel,
					onActive: r[4] ||= (e) => h.value = e,
					onSelect: w
				}, l({ _: 2 }, [t.allowCreate && m.value.trim() && !C.value && !S.value.length ? {
					name: "footer",
					fn: U(() => [f(Va, {
						loading: t.creating,
						disabled: t.creating,
						variant: "quiet",
						onMousedown: r[2] ||= K(() => {}, ["prevent", "stop"]),
						onClick: r[3] ||= (e) => n.$emit("create", m.value.trim())
					}, {
						default: U(() => [d(P(t.createLabel) + " «" + P(m.value.trim()) + "»", 1)]),
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
}, [["__scopeId", "data-v-d6731ef9"]]), Ao = ["id"], jo = /*#__PURE__*/ q({
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
		let r = e, i = L(), o = k(null), s = k({ visibility: "hidden" }), l, u, d;
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
		return H(() => r.anchor, (e) => {
			h(), d = e?.setAttribute ? e : null, d && d.setAttribute("aria-describedby", [.../* @__PURE__ */ new Set([...(d.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean), i])].join(" ")), typeof window < "u" && y(m);
		}, { immediate: !0 }), H(() => [
			r.x,
			r.top,
			r.bottom,
			r.width
		], m), w(() => {
			p(), l = new ResizeObserver(m), l.observe(o.value), window.addEventListener("resize", m, { passive: !0 }), window.addEventListener("scroll", m, {
				passive: !0,
				capture: !0
			}), window.visualViewport?.addEventListener("resize", m), window.visualViewport?.addEventListener("scroll", m);
		}), C(() => {
			h(), l?.disconnect(), u != null && cancelAnimationFrame(u), window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), window.visualViewport?.removeEventListener("resize", m), window.visualViewport?.removeEventListener("scroll", m);
		}), (r, l) => (E(), a(t, { to: "body" }, [f(n, {
			name: "share-tooltip",
			appear: ""
		}, {
			default: U(() => [c("div", {
				id: F(i),
				ref_key: "element",
				ref: o,
				class: b(["share-tooltip", e.tooltipClass]),
				style: S(s.value),
				role: "tooltip"
			}, [j(r.$slots, "default", {}, void 0, !0)], 14, Ao)]),
			_: 3
		})]));
	}
}, [["__scopeId", "data-v-b3d3bcb1"]]);
//#endregion
//#region src/lib/calendar.js
function Mo(e) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(e || "")) return null;
	let [t, n, r] = e.split("-").map(Number), i = /* @__PURE__ */ new Date(0);
	return i.setFullYear(t, n - 1, r), i.setHours(12, 0, 0, 0), t > 0 && i.getFullYear() === t && i.getMonth() === n - 1 && i.getDate() === r ? i : null;
}
function No(e) {
	return `${String(e.getFullYear()).padStart(4, "0")}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function Po(e, t = "", n = "") {
	return !!(!Mo(e) || t && e < t || n && e > n);
}
function Fo(e, t = 0, n = 0) {
	let r = Mo(e);
	if (!r) return e;
	let i = r.getDate();
	r.setDate(1), r.setMonth(r.getMonth() + n);
	let a = new Date(r);
	a.setMonth(a.getMonth() + 1, 0);
	let o = a.getDate();
	return r.setDate(Math.min(i, o) + t), No(r);
}
function Io(e, t, n = 1) {
	let r = /* @__PURE__ */ new Date(0);
	r.setFullYear(e, t, 1), r.setHours(12, 0, 0, 0);
	let i = (r.getDay() - n + 7) % 7;
	return Array.from({ length: 42 }, (e, n) => {
		let a = new Date(r);
		return a.setDate(n - i + 1), {
			value: No(a),
			day: a.getDate(),
			outside: a.getMonth() !== t
		};
	});
}
//#endregion
//#region src/components/form/DatePicker.vue
var Lo = { class: "share-date-picker" }, Ro = [
	"disabled",
	"aria-label",
	"aria-expanded"
], zo = { class: "share-date-picker__heading" }, Bo = ["aria-label"], Vo = ["value"], Ho = ["value"], Uo = ["aria-label"], Wo = ["aria-label"], Go = {
	class: "share-date-picker__week",
	role: "row"
}, Ko = ["aria-selected"], qo = [
	"data-date",
	"tabindex",
	"disabled",
	"aria-label",
	"aria-current",
	"onClick",
	"onKeydown"
], Jo = { class: "share-date-picker__footer" }, Yo = ["disabled"], Xo = /*#__PURE__*/ q({
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
		let r = t, a = n, l = k(null), u = k(null), d = k(!1), p = No(/* @__PURE__ */ new Date()), m = i(() => Mo(r.modelValue)), h = k(r.modelValue || p), g = k((/* @__PURE__ */ new Date()).getFullYear()), _ = k((/* @__PURE__ */ new Date()).getMonth()), v = i(() => Array.from({ length: 12 }, (e, t) => new Intl.DateTimeFormat(r.locale, { month: "long" }).format(new Date(2024, t, 1)))), x = i(() => Array.from({ length: 201 }, (e, t) => g.value - 100 + t).filter((e) => e >= 1 && e <= 9999)), S = i(() => Array.from({ length: 7 }, (e, t) => new Intl.DateTimeFormat(r.locale, { weekday: "short" }).format(new Date(2024, 0, 7 + (r.weekStartsOn + t) % 7)))), C = i(() => {
			let e = Io(g.value, _.value, r.weekStartsOn);
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
		function T(e) {
			return Po(e, r.min, r.max);
		}
		function D(e) {
			let t = Mo(e) || /* @__PURE__ */ new Date();
			g.value = t.getFullYear(), _.value = t.getMonth(), h.value = No(t);
		}
		async function O() {
			await y(), u.value?.querySelector(`[data-date="${h.value}"]`)?.focus({ preventScroll: !0 });
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
			r.min && e < r.min && (e = r.min), r.max && e > r.max && (e = r.max), D(e), d.value = !0, await O();
		}
		function N(e) {
			r.disabled || e && T(e) || (a("update:modelValue", e), j(!1));
		}
		function I(e) {
			let t = Fo(h.value, 0, e);
			Mo(t) && D(t);
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
			if (e.key in n) i = Fo(t, n[e.key]);
			else if (e.key === "PageUp" || e.key === "PageDown") i = Fo(t, 0, (e.key === "PageUp" ? -1 : 1) * (e.shiftKey ? 12 : 1));
			else if (e.key === "Home" || e.key === "End") {
				let n = (Mo(t).getDay() - r.weekStartsOn + 7) % 7;
				i = Fo(t, e.key === "Home" ? -n : 6 - n);
			} else return;
			e.preventDefault(), T(i) || (D(i), O());
		}
		function B(e) {
			if (e.key !== "Tab") return;
			let t = [...u.value.querySelectorAll("button:not(:disabled), select:not(:disabled)")].filter((e) => e.tabIndex >= 0), n = t[0], r = t.at(-1);
			e.shiftKey && e.target === n ? (e.preventDefault(), r?.focus()) : !e.shiftKey && e.target === r && (e.preventDefault(), n?.focus());
		}
		function V(e) {
			e.key === "Escape" && (e.stopPropagation(), e.preventDefault(), j(!1)), e.key === "Tab" && (e.stopPropagation(), B(e));
		}
		return H(() => r.disabled, (e) => {
			e && (d.value = !1);
		}), H(() => r.modelValue, (e) => {
			d.value && D(e);
		}), (n, r) => (E(), s("span", Lo, [c("button", {
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
		}), c("path", { d: "M7 3v4m10-4v4M3 11h18m-13 4h3m3 0h2" })], -1), c("span", { class: b({ "share-date-picker__placeholder": !m.value }) }, P(m.value ? w(m.value) : t.placeholder), 3)], 8, Ro), f(pn, {
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
			default: U(() => [c("div", {
				ref_key: "calendar",
				ref: u,
				class: "share-date-picker__calendar",
				onKeydown: V
			}, [
				c("div", zo, [
					c("button", {
						type: "button",
						"aria-label": t.previousLabel,
						onClick: r[0] ||= (e) => I(-1)
					}, "‹", 8, Bo),
					f(Sa, {
						value: _.value,
						"aria-label": t.monthLabel,
						"onUpdate:value": r[1] ||= (e) => L(Number(e))
					}, {
						default: U(() => [(E(!0), s(e, null, A(v.value, (e, t) => (E(), s("option", {
							key: t,
							value: t
						}, P(e), 9, Vo))), 128))]),
						_: 1
					}, 8, ["value", "aria-label"]),
					f(Sa, {
						value: g.value,
						"aria-label": t.yearLabel,
						"onUpdate:value": r[2] ||= (e) => R(Number(e))
					}, {
						default: U(() => [(E(!0), s(e, null, A(x.value, (e) => (E(), s("option", {
							key: e,
							value: e
						}, P(e), 9, Ho))), 128))]),
						_: 1
					}, 8, ["value", "aria-label"]),
					c("button", {
						type: "button",
						"aria-label": t.nextLabel,
						onClick: r[3] ||= (e) => I(1)
					}, "›", 8, Uo)
				]),
				c("div", {
					role: "grid",
					"aria-label": `${v.value[_.value]} ${g.value}`
				}, [c("div", Go, [(E(!0), s(e, null, A(S.value, (e) => (E(), s("span", {
					key: e,
					role: "columnheader"
				}, P(e), 1))), 128))]), (E(!0), s(e, null, A(C.value, (n, r) => (E(), s("div", {
					key: r,
					class: "share-date-picker__week",
					role: "row"
				}, [(E(!0), s(e, null, A(n, (e) => (E(), s("span", {
					key: e.value,
					role: "gridcell",
					"aria-selected": e.value === t.modelValue
				}, [c("button", {
					type: "button",
					"data-date": e.value,
					tabindex: e.value === h.value ? 0 : -1,
					disabled: T(e.value),
					"aria-label": w(F(Mo)(e.value), !0),
					"aria-current": e.value === F(p) ? "date" : void 0,
					class: b({
						outside: e.outside,
						selected: e.value === t.modelValue,
						today: e.value === F(p)
					}),
					onClick: (t) => N(e.value),
					onKeydown: (t) => z(t, e.value)
				}, P(e.day), 43, qo)], 8, Ko))), 128))]))), 128))], 8, Wo),
				c("div", Jo, [c("button", {
					type: "button",
					disabled: T(F(p)),
					onClick: r[4] ||= (e) => N(F(p))
				}, P(t.todayLabel), 9, Yo), t.allowClear ? (E(), s("button", {
					key: 0,
					type: "button",
					onClick: r[5] ||= (e) => N("")
				}, P(t.clearLabel), 1)) : o("", !0)])
			], 544)]),
			_: 1
		}, 8, [
			"open",
			"anchor",
			"z-index",
			"aria-label"
		])]));
	}
}, [["__scopeId", "data-v-a7b69f68"]]), Zo = { class: "share-timeline-group__rail" }, Qo = { class: "share-timeline-group__identity" }, $o = { class: "share-timeline-group__content" }, es = {
	key: 0,
	class: "share-timeline-group__footer"
}, ts = /*#__PURE__*/ q({
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
		return (t, r) => (E(), s("section", {
			class: b(["share-timeline-group", {
				"share-timeline-group--separated": e.separated,
				"share-timeline-group--sticky": e.sticky
			}]),
			style: S(n.value)
		}, [
			c("div", Zo, [c("div", Qo, [j(t.$slots, "identity", {}, void 0, !0)])]),
			c("div", $o, [j(t.$slots, "default", {}, void 0, !0)]),
			t.$slots.footer ? (E(), s("div", es, [j(t.$slots, "footer", {}, void 0, !0)])) : o("", !0)
		], 6));
	}
}, [["__scopeId", "data-v-d27f0f76"]]), ns = [
	"role",
	"aria-label",
	"aria-disabled"
], rs = {
	class: "share-star-rating__star",
	"aria-hidden": "true"
}, is = "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1Z", as = /*#__PURE__*/ q({
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
		let r = t, o = n, l = k(0), u = [], d = i(() => Math.max(1, Math.min(r.max, Math.round(r.modelValue)))), f = (e) => Math.max(0, Math.min(1, (r.readonly ? r.modelValue : l.value || r.modelValue) - e + 1)) * 100;
		function p(e, t) {
			!r.readonly && !r.disabled && Nn(e) && (l.value = t);
		}
		function m(e) {
			!r.readonly && !r.disabled && o("update:modelValue", e);
		}
		function h(e, t) {
			if (r.readonly || r.disabled) return;
			let n = {
				ArrowRight: Math.min(r.max, t + 1),
				ArrowLeft: Math.max(1, t - 1),
				Home: 1,
				End: r.max
			}[e.key];
			n !== void 0 && (e.preventDefault(), m(n), u[n - 1]?.focus());
		}
		return (n, r) => (E(), s("div", {
			class: b(["share-star-rating", { "share-star-rating--readonly": t.readonly }]),
			role: t.readonly ? "img" : "radiogroup",
			"aria-label": t.readonly && t.valueLabel || t.label,
			"aria-disabled": !t.readonly && t.disabled || void 0,
			onPointerleave: r[1] ||= (e) => F(Mn)(e) && (l.value = 0),
			onPointerdown: r[2] ||= (e) => !F(Mn)(e) && (l.value = 0)
		}, [(E(!0), s(e, null, A(t.max, (e) => (E(), a(M(t.readonly ? "span" : "button"), {
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
			onPointerenter: (t) => p(t, e),
			onFocus: (t) => p(t, e),
			onBlur: r[0] ||= (e) => l.value = 0,
			onClick: (t) => m(e),
			onKeydown: (t) => h(t, e)
		}, {
			default: U(() => [c("span", rs, [c("svg", {
				viewBox: "0 0 24 24",
				fill: "none"
			}, [c("path", { d: is })]), c("span", {
				class: "share-star-rating__fill",
				style: S({ width: `${f(e)}%` })
			}, [c("svg", { viewBox: "0 0 24 24" }, [c("path", { d: is })])], 4)])]),
			_: 2
		}, 1064, [
			"type",
			"role",
			"aria-label",
			"aria-checked",
			"disabled",
			"tabindex",
			"onPointerenter",
			"onFocus",
			"onClick",
			"onKeydown"
		]))), 128))], 42, ns));
	}
}, [["__scopeId", "data-v-3d337161"]]), os = /* @__PURE__ */ new Set([
	"article",
	"aside",
	"dialog",
	"fieldset",
	"footer",
	"form",
	"header",
	"main",
	"nav",
	"section"
]);
function ss(e) {
	let t = [e], n = e.parentElement;
	for (; n && n !== document.body && n !== document.documentElement && t.length < 4;) t.push(n), n = n.parentElement;
	return t;
}
function cs(e, t, n) {
	let r = e.getBoundingClientRect(), i = {
		selector: ds(e, n),
		tagName: e.tagName.toLowerCase(),
		rect: {
			x: Math.round(r.x),
			y: Math.round(r.y),
			width: Math.round(r.width),
			height: Math.round(r.height)
		},
		viewport: {
			width: window.innerWidth,
			height: window.innerHeight
		},
		platform: t(window.innerWidth),
		client: document.documentElement.dataset.platform === "android" ? "android" : "web"
	};
	if (n) return i;
	let a = _s(e.innerText || e.textContent || ""), o = (e.getAttribute("class") || "").split(/\s+/).map((e) => e.trim()).filter(Boolean).slice(0, 12);
	return vs({
		...i,
		id: e.id || void 0,
		classNames: o.length ? o : void 0,
		text: a || void 0,
		ariaLabel: e.getAttribute("aria-label") || void 0,
		title: e.getAttribute("title") || void 0,
		name: e.getAttribute("name") || void 0,
		type: e.getAttribute("type") || void 0,
		ancestorContext: ls(e)
	});
}
function ls(e) {
	let t = [], n = e.parentElement;
	for (; n && n !== document.body && n !== document.documentElement && t.length < 5;) {
		let e = us(n);
		e && t.push(e), n = n.parentElement;
	}
	return t.reverse();
}
function us(e) {
	let t = e.tagName.toLowerCase();
	return e.id || e.getAttribute("class")?.trim() || e.hasAttribute("data-testid") || e.hasAttribute("data-test") || e.getAttribute("role") || e.getAttribute("aria-label") || os.has(t) ? vs({
		selectorPart: ps(e),
		role: e.getAttribute("role") || void 0,
		ariaLabel: e.getAttribute("aria-label") || void 0,
		title: e.getAttribute("title") || void 0
	}) : null;
}
function ds(e, t = !1) {
	if (!t && e.id) {
		let t = `#${hs(e.id)}`;
		if (ms(t)) return t;
	}
	let n = [], r = e;
	for (; r && r !== document.documentElement && n.length < 8;) {
		n.unshift(t ? fs(r) : ps(r));
		let e = n.join(" > ");
		if (ms(e)) return e;
		r = r.parentElement;
	}
	return n.join(" > ") || e.tagName.toLowerCase();
}
function fs(e) {
	let t = e.tagName.toLowerCase(), n = 1;
	for (let t = e.previousElementSibling; t; t = t.previousElementSibling) t.tagName === e.tagName && n++;
	return `${t}:nth-of-type(${n})`;
}
function ps(e) {
	if (e.id) return `#${hs(e.id)}`;
	let t = e.tagName.toLowerCase(), n = e.hasAttribute("data-testid") ? "data-testid" : e.hasAttribute("data-test") ? "data-test" : "";
	if (n) return `${t}[${n}="${gs(e.getAttribute(n))}"]`;
	let r = (e.getAttribute("class") || "").split(/\s+/).map((e) => e.trim()).filter(Boolean).slice(0, 6);
	return r.length ? `${t}${r.map((e) => `.${hs(e)}`).join("")}` : t;
}
function ms(e) {
	try {
		return document.querySelectorAll(e).length === 1;
	} catch {
		return !1;
	}
}
function hs(e) {
	return window.CSS?.escape ? window.CSS.escape(e) : e.replace(/[^a-zA-Z0-9_-]/g, (e) => `\\${e}`);
}
function gs(e) {
	return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
function _s(e) {
	return e.replace(/\s+/g, " ").trim().slice(0, 240);
}
function vs(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
//#endregion
//#region src/internal/page-report/screenshotGeometry.js
function ys(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function bs(e, t) {
	let n = Math.max(1, t.width), r = Math.max(1, t.height), i = ys(e.left - t.left, 0, n), a = ys(e.top - t.top, 0, r), o = ys(e.left + e.width - t.left, i, n), s = ys(e.top + e.height - t.top, a, r);
	return {
		render: {
			width: n,
			height: r
		},
		crop: {
			left: i,
			top: a,
			width: o - i,
			height: s - a
		}
	};
}
function xs(e, t) {
	if (e === t) return {
		left: 0,
		top: 0
	};
	let n = 0, r = 0, i = e.parentElement;
	for (; i && (n += i.scrollLeft || 0, r += i.scrollTop || 0, i !== t);) i = i.parentElement;
	return {
		left: n,
		top: r
	};
}
//#endregion
//#region src/internal/page-report/errorReportScreenshot.js
async function Ss(e, t) {
	let n = e.getBoundingClientRect();
	if (n.width <= 0 || n.height <= 0) throw Error("empty screenshot context");
	let r = Ts(e), i = xs(e, r), a = i.left || i.top ? e : r, o = bs(n, a.getBoundingClientRect());
	if (o.crop.width <= 0 || o.crop.height <= 0) throw Error("empty screenshot crop");
	let s = Math.max(.1, Math.min(window.devicePixelRatio || 1, 2, 2400 / o.render.width, 1600 / o.render.height));
	return ws(await Cs(a, o.render, s, t), o, .82);
}
function Cs(e, t, n, r) {
	return r(e, {
		backgroundColor: ks(e),
		cacheBust: !1,
		width: t.width,
		height: t.height,
		pixelRatio: n,
		filter: Os,
		style: { margin: "0" }
	});
}
function ws(e, t, n) {
	let r = e.width / t.render.width, i = e.height / t.render.height, a = document.createElement("canvas");
	a.width = Math.max(1, Math.round(t.crop.width * r)), a.height = Math.max(1, Math.round(t.crop.height * i));
	let o = a.getContext("2d");
	if (!o) throw Error("screenshot canvas unavailable");
	return o.drawImage(e, t.crop.left * r, t.crop.top * i, t.crop.width * r, t.crop.height * i, 0, 0, a.width, a.height), {
		dataURL: As(a.toDataURL("image/jpeg", n)),
		width: t.crop.width,
		height: t.crop.height
	};
}
function Ts(e) {
	let t = e;
	for (; t && t !== document.body;) {
		if (Es(t)) return t;
		t = t.parentElement;
	}
	return document.body;
}
function Es(e) {
	let t = getComputedStyle(e);
	return t.backgroundImage !== "none" || !Ds(t.backgroundColor);
}
function Ds(e) {
	return !e || e === "transparent" || /rgba?\([^)]*[, /]0(?:\.0+)?\s*\)$/.test(e);
}
function Os(e) {
	return !(e instanceof Element && (e.matches("noscript, .am-overlay, .selection-highlight, .selection-hint, .report-toast") || e.closest("[data-error-report-ignore]")));
}
function ks(e = document.body) {
	let t = e;
	for (; t;) {
		let e = getComputedStyle(t).backgroundColor;
		if (!Ds(e)) return e;
		t = t.parentElement;
	}
	return getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
}
function As(e) {
	if (Ms(e) > 2097152) throw Error("large screenshot");
	return e;
}
async function js(e, t) {
	let n;
	try {
		return await Promise.race([e, new Promise((e, r) => {
			n = setTimeout(() => r(/* @__PURE__ */ Error("screenshot timeout")), t);
		})]);
	} finally {
		clearTimeout(n);
	}
}
function Ms(e) {
	let t = e.indexOf(",");
	return t < 0 ? Infinity : Math.ceil((e.length - t - 1) * 3 / 4);
}
//#endregion
//#region src/internal/page-report/errorReportTouchGesture.js
function Ns(e, { canActivate: t = () => !0, target: n = document, view: r = window } = {}) {
	let i = !1, a = !1, o = {
		capture: !0,
		passive: !1
	}, s = { capture: !0 };
	function c(e) {
		e.cancelable && e.preventDefault(), e.stopImmediatePropagation();
	}
	function l() {
		i = !1, a = !1;
	}
	function u(e) {
		!i && e.touches.length >= 4 && t() && (i = !0), i && c(e);
	}
	function d(e) {
		i && c(e);
	}
	function f(n) {
		i && (c(n), !n.touches.length && (i = !1, a = !0, t() && e()));
	}
	function p(e) {
		i && (c(e), i = !1, a = !0);
	}
	function m() {
		i || (a = !1);
	}
	function h(e) {
		a && e.detail > 0 && c(e);
	}
	function g() {
		n.hidden && l();
	}
	return n.addEventListener("touchstart", u, o), n.addEventListener("touchmove", d, o), n.addEventListener("touchend", f, o), n.addEventListener("touchcancel", p, o), n.addEventListener("visibilitychange", g), r.addEventListener("pointerdown", m, s), r.addEventListener("click", h, s), r.addEventListener("blur", l), () => {
		l(), n.removeEventListener("touchstart", u, o), n.removeEventListener("touchmove", d, o), n.removeEventListener("touchend", f, o), n.removeEventListener("touchcancel", p, o), n.removeEventListener("visibilitychange", g), r.removeEventListener("pointerdown", m, s), r.removeEventListener("click", h, s), r.removeEventListener("blur", l);
	};
}
//#endregion
//#region src/internal/page-report/usePageReport.js
function Ps(e, t) {
	let n = k(!e.requireAttachmentConsent), r = k(!e.requireAttachmentConsent), a = k(!1), o = k(!1), s = k(!1), c = k(""), l = k(""), u = k(null), d = k(""), f = k(null), p = k(""), m = k(""), h = k(!1), g = k(""), _ = k(""), v = k(""), b = k(!1), x = k(0), S = O({
		width: 0,
		height: 0
	}), T = O({
		visible: !1,
		top: 0,
		left: 0,
		width: 0,
		height: 0
	}), E = null, D = null, A = 0, j = 0, M = null, N = null, P = k([]), F = i(() => ({
		top: `${T.top}px`,
		left: `${T.left}px`,
		width: `${T.width}px`,
		height: `${T.height}px`
	})), I = i(() => Math.max(0, P.value.length - 1)), L = i(() => x.value === 0 ? t.value.exact : `${t.value.context} +${x.value}`), R = i(() => ({
		width: `${S.width}px`,
		height: `${S.height}px`
	})), z = () => e.getPageURL ? e.getPageURL() : window.location.href;
	function B() {
		a.value || o.value || b.value || (l.value = "", u.value = null, E = null, T.visible = !1, a.value = !0, document.body.classList.add("error-report-selecting"), document.addEventListener("pointermove", W, !0), document.addEventListener("pointerdown", G, !0), document.addEventListener("click", q, !0), window.addEventListener("scroll", K, !0), window.addEventListener("resize", K));
	}
	function V() {
		a.value = !1, T.visible = !1, E = null, document.body.classList.remove("error-report-selecting"), document.removeEventListener("pointermove", W, !0), document.removeEventListener("pointerdown", G, !0), document.removeEventListener("click", q, !0), window.removeEventListener("scroll", K, !0), window.removeEventListener("resize", K);
	}
	function H() {
		V(), oe();
	}
	function U(e) {
		let t = e.target;
		return !(t instanceof Element) || t.closest("[data-error-report-ignore]") ? null : t;
	}
	function W(e) {
		if (!a.value) return;
		let t = U(e);
		t && (E = t, K());
	}
	function G(e) {
		W(e), U(e) && (e.preventDefault(), e.stopImmediatePropagation());
	}
	function K() {
		if (!E?.isConnected) {
			T.visible = !1;
			return;
		}
		let e = E.getBoundingClientRect();
		T.top = Math.round(e.top), T.left = Math.round(e.left), T.width = Math.round(e.width), T.height = Math.round(e.height), T.visible = e.width > 0 && e.height > 0;
	}
	async function q(n) {
		if (!a.value) return;
		let r = U(n);
		if (!r) return;
		n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), u.value = cs(r, e.viewportPlatform, e.privateDetails), d.value = z(), V();
		let i = ++j;
		if (e.captureArea !== !1 && (P.value = ss(r), x.value = 0, Y(), M = {
			element: r,
			session: i
		}, m.value = "", g.value = "", h.value = !0), e.captureViewport) {
			b.value = !0;
			try {
				if (await y(), await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(e))), i !== j) return;
				let t = await js(e.captureViewport(), 5e3);
				if (i !== j) return;
				_.value = t;
			} catch {
				i === j && (v.value = t.value.viewportError);
			} finally {
				i === j && (b.value = !1);
			}
			if (i !== j) return;
			if (d.value !== z()) {
				oe();
				return;
			}
		}
		o.value = !0;
	}
	function ee() {
		let e = M;
		if (M = null, !(!e || e.session !== j || !o.value)) {
			if (!e.element?.isConnected) {
				h.value = !1, g.value = t.value.areaError;
				return;
			}
			J(e.element);
		}
	}
	async function J(n) {
		let r = ++A;
		h.value = !0;
		try {
			let t = n.getBoundingClientRect();
			if (t.width <= 0 || t.height <= 0) throw Error("empty element");
			let i = await js(Ss(n, e.renderCanvas), 1e4);
			if (r !== A) return;
			te(i);
		} catch {
			r === A && (g.value = t.value.areaError);
		} finally {
			r === A && (h.value = !1);
		}
	}
	function te(e) {
		let t = f.value?.clientWidth || e.width, n = Math.min(1, t / e.width, 420 / e.height);
		m.value = e.dataURL, S.width = Math.max(1, Math.round(e.width * n)), S.height = Math.max(1, Math.round(e.height * n));
	}
	async function ne(n) {
		let r = Math.max(0, Math.min(I.value, x.value + n));
		if (r === x.value || h.value) return;
		let i = x.value, a = m.value, o = { ...S };
		x.value = r, Y(), g.value = "", h.value = !0;
		let s = ++A;
		try {
			let t = P.value[r];
			if (!t?.isConnected) throw Error("context element detached");
			let n = await js(Ss(t, e.renderCanvas), 7e3);
			if (s !== A) return;
			te(n);
		} catch {
			s === A && (x.value = i, m.value = a, Object.assign(S, o), Y(), g.value = t.value.contextError);
		} finally {
			s === A && (h.value = !1);
		}
	}
	function Y() {
		if (!u.value) return;
		let t = P.value[x.value];
		u.value = {
			...u.value,
			screenshotContextLevel: x.value,
			screenshotContextSelector: t ? ds(t, e.privateDetails) : u.value.selector
		};
	}
	function re() {
		s.value || (o.value = !1, c.value = "", u.value = null, d.value = "", l.value = "", oe());
	}
	async function ie() {
		let i = c.value.trim();
		if (!(!i || !u.value || s.value)) {
			s.value = !0, l.value = "";
			try {
				await e.submit({
					description: i,
					pageUrl: d.value,
					element: u.value,
					screenshot: n.value && m.value || void 0,
					viewportScreenshot: r.value && _.value || void 0
				}), ae(), X(t.value.submitted);
			} catch {
				l.value = t.value.submitError;
			} finally {
				s.value = !1;
			}
		}
	}
	function ae() {
		o.value = !1, c.value = "", u.value = null, d.value = "", oe();
	}
	function oe() {
		n.value = !e.requireAttachmentConsent, r.value = !e.requireAttachmentConsent, A += 1, j += 1, M = null, m.value = "", h.value = !1, g.value = "", _.value = "", v.value = "", b.value = !1, x.value = 0, P.value = [], S.width = 0, S.height = 0;
	}
	function X(e) {
		p.value = e, clearTimeout(D), D = setTimeout(() => {
			p.value = "";
		}, 3500);
	}
	function Z(t) {
		if (t.key === "Escape" && (a.value || b.value)) {
			t.preventDefault(), H();
			return;
		}
		e.globalShortcuts !== !1 && t.altKey && t.shiftKey && t.code === "KeyE" && (t.preventDefault(), a.value ? H() : B());
	}
	function se(e) {
		!a.value && !b.value && !o.value || (e.preventDefault(), e.stopImmediatePropagation(), o.value ? re() : H());
	}
	return w(() => {
		e.globalShortcuts !== !1 && (N = Ns(B, { canActivate: () => !a.value && !o.value && !b.value })), document.addEventListener("keydown", Z), window.addEventListener(e.requestEvent, B), e.nativeBackEvent && window.addEventListener(e.nativeBackEvent, se, !0);
	}), C(() => {
		N?.(), V(), oe(), clearTimeout(D), document.removeEventListener("keydown", Z), window.removeEventListener(e.requestEvent, B), e.nativeBackEvent && window.removeEventListener(e.nativeBackEvent, se, !0);
	}), {
		selecting: a,
		formOpen: o,
		submitting: s,
		description: c,
		submitError: l,
		selectedElement: u,
		reportForm: f,
		toast: p,
		screenshotDataURL: m,
		screenshotCapturing: h,
		screenshotError: g,
		screenshotContextLevel: x,
		viewportScreenshotDataURL: _,
		viewportScreenshotError: v,
		highlight: T,
		highlightStyle: F,
		maxScreenshotContextLevel: I,
		screenshotContextLabel: L,
		screenshotFrameStyle: R,
		cancelSelection: H,
		closeForm: re,
		submitReport: ie,
		changeScreenshotContext: ne,
		onReportModalOpened: ee,
		includeArea: n,
		includeViewport: r
	};
}
//#endregion
//#region src/components/feedback/pageReportLabels.js
var Fs = {
	selectTitle: "Choose the element with a problem",
	selectHint: "Point and select it",
	cancelSelection: "Cancel · Esc",
	title: "What went wrong?",
	close: "Close report",
	element: "Selected element",
	area: "Area screenshot",
	elementPhoto: "Element screenshot",
	elementHelp: "Selected area and its context",
	capturing: "Capturing…",
	less: "Less",
	lessTitle: "Include less context",
	more: "More",
	moreTitle: "Include more context",
	viewport: "App viewport",
	viewportHelp: "Captured before showing this form",
	description: "Description",
	placeholder: "Describe what happened and what you expected",
	sending: "Sending…",
	send: "Send",
	cancel: "Cancel",
	addArea: "Attach the selected area",
	addViewport: "Attach the viewport",
	exact: "Selected area",
	context: "Context",
	viewportError: "Unable to capture the viewport. You can send the report without it.",
	areaError: "Unable to capture the selected area.",
	contextError: "Unable to change the selected area.",
	submitted: "Your report was sent.",
	submitError: "Unable to send. Try again.",
	optionalScreenshot: "You can send the report without a screenshot."
}, Is = {
	class: "selection-hint",
	role: "status",
	"data-error-report-ignore": ""
}, Ls = { class: "selected-element" }, Rs = { class: "selected-label" }, zs = {
	key: 0,
	class: "selected-text"
}, Bs = { class: "screenshot-field" }, Vs = {
	key: 0,
	class: "selected-label"
}, Hs = { class: "screenshot-previews" }, Us = {
	key: 0,
	class: "screenshot-preview-card screenshot-preview-card-element"
}, Ws = {
	key: 0,
	class: "screenshot-state screenshot-state-inside"
}, Gs = ["src"], Ks = [
	"title",
	"aria-label",
	"disabled"
], qs = { class: "screenshot-context-label" }, Js = [
	"title",
	"aria-label",
	"disabled"
], Ys = {
	key: 2,
	class: "screenshot-state screenshot-state-error screenshot-state-inside"
}, Xs = {
	key: 3,
	class: "report-attachment"
}, Zs = ["disabled"], Qs = {
	key: 1,
	class: "screenshot-preview-card"
}, $s = ["src"], ec = {
	key: 1,
	class: "screenshot-state screenshot-state-error screenshot-state-inside"
}, tc = {
	key: 2,
	class: "report-attachment"
}, nc = ["disabled"], rc = { class: "description-meta" }, ic = {
	key: 0,
	class: "submit-error"
}, ac = { class: "char-count" }, oc = {
	class: "report-toast",
	role: "status",
	"data-error-report-ignore": ""
}, sc = /*#__PURE__*/ q({
	__name: "PageReport",
	props: {
		options: {
			type: Object,
			required: !0
		},
		messages: {
			type: Object,
			default: () => ({})
		}
	},
	setup(n) {
		let r = n, l = i(() => ({
			...Fs,
			...r.messages
		})), { selecting: u, formOpen: p, submitting: m, description: h, submitError: g, selectedElement: v, reportForm: y, toast: b, screenshotDataURL: x, screenshotCapturing: C, screenshotError: w, screenshotContextLevel: T, viewportScreenshotDataURL: D, viewportScreenshotError: O, highlight: k, highlightStyle: A, maxScreenshotContextLevel: j, screenshotContextLabel: M, screenshotFrameStyle: N, cancelSelection: I, closeForm: L, submitReport: R, changeScreenshotContext: B, onReportModalOpened: H, includeArea: G, includeViewport: q } = Ps(r.options, l);
		return (r, i) => (E(), s(e, null, [
			F(u) ? (E(), a(t, {
				key: 0,
				to: "body"
			}, [W(c("div", {
				class: "selection-highlight",
				style: S(F(A)),
				"aria-hidden": "true"
			}, null, 4), [[V, F(k).visible]]), c("div", Is, [c("div", null, [c("strong", null, P(l.value.selectTitle), 1), c("span", null, P(l.value.selectHint), 1)]), c("button", {
				type: "button",
				onClick: i[0] ||= (...e) => F(I) && F(I)(...e)
			}, P(l.value.cancelSelection), 1)])])) : o("", !0),
			F(p) ? (E(), a(Hi, {
				key: 1,
				title: l.value.title,
				"close-label": l.value.close,
				dismissible: !F(m),
				"z-index": 9500,
				wide: "",
				onOpened: F(H),
				onClose: F(L)
			}, {
				footer: U(() => [f(la, {
					"submit-text": l.value.send,
					"loading-text": l.value.sending,
					"cancel-text": l.value.cancel,
					loading: F(m),
					"can-submit": !F(C) && !!F(h).trim(),
					onCancel: F(L),
					onSubmit: F(R)
				}, null, 8, [
					"submit-text",
					"loading-text",
					"cancel-text",
					"loading",
					"can-submit",
					"onCancel",
					"onSubmit"
				])]),
				default: U(() => [c("form", {
					id: "error-report-form",
					ref_key: "reportForm",
					ref: y,
					class: "report-form",
					"data-error-report-ignore": "",
					onSubmit: i[6] ||= K((...e) => F(R) && F(R)(...e), ["prevent"])
				}, [
					c("div", Ls, [c("span", Rs, P(l.value.element), 1), F(v)?.text ? (E(), s("span", zs, P(F(v).text), 1)) : o("", !0)]),
					c("div", Bs, [n.options.captureArea === !1 ? o("", !0) : (E(), s("span", Vs, P(l.value.area), 1)), c("div", Hs, [n.options.captureArea === !1 ? o("", !0) : (E(), s("figure", Us, [
						c("figcaption", null, [c("strong", null, P(l.value.elementPhoto), 1), c("span", null, P(l.value.elementHelp), 1)]),
						F(C) && !F(x) ? (E(), s("div", Ws, P(l.value.capturing), 1)) : F(x) ? (E(), s("div", {
							key: 1,
							class: "screenshot-preview-frame",
							style: S(F(N))
						}, [
							c("img", {
								class: "screenshot-preview",
								src: F(x),
								alt: "Скриншот выбранного элемента"
							}, null, 8, Gs),
							c("button", {
								class: "screenshot-context-button screenshot-context-button-less",
								type: "button",
								title: l.value.lessTitle,
								"aria-label": l.value.lessTitle,
								disabled: F(C) || F(T) === 0,
								onClick: i[1] ||= (e) => F(B)(-1)
							}, [i[7] ||= c("span", { "aria-hidden": "true" }, "‹", -1), d(" " + P(l.value.less), 1)], 8, Ks),
							c("span", qs, P(F(M)), 1),
							c("button", {
								class: "screenshot-context-button screenshot-context-button-more",
								type: "button",
								title: l.value.moreTitle,
								"aria-label": l.value.moreTitle,
								disabled: F(C) || F(T) >= F(j),
								onClick: i[2] ||= (e) => F(B)(1)
							}, [d(P(l.value.more) + " ", 1), i[8] ||= c("span", { "aria-hidden": "true" }, "›", -1)], 8, Js)
						], 4)) : o("", !0),
						!F(C) && F(w) ? (E(), s("div", Ys, P(F(w)) + " " + P(l.value.optionalScreenshot), 1)) : o("", !0),
						n.options.requireAttachmentConsent && F(x) ? (E(), s("label", Xs, [W(c("input", {
							"onUpdate:modelValue": i[3] ||= (e) => _(G) ? G.value = e : null,
							type: "checkbox",
							disabled: F(m)
						}, null, 8, Zs), [[z, F(G)]]), d(" " + P(l.value.addArea), 1)])) : o("", !0)
					])), F(D) || F(O) ? (E(), s("figure", Qs, [
						c("figcaption", null, [c("strong", null, P(l.value.viewport), 1), c("span", null, P(l.value.viewportHelp), 1)]),
						F(D) ? (E(), s("img", {
							key: 0,
							class: "screenshot-viewport-preview",
							src: F(D),
							alt: "Скриншот экрана приложения"
						}, null, 8, $s)) : (E(), s("div", ec, P(F(O)), 1)),
						n.options.requireAttachmentConsent && F(D) ? (E(), s("label", tc, [W(c("input", {
							"onUpdate:modelValue": i[4] ||= (e) => _(q) ? q.value = e : null,
							type: "checkbox",
							disabled: F(m)
						}, null, 8, nc), [[z, F(q)]]), d(" " + P(l.value.addViewport), 1)])) : o("", !0)
					])) : o("", !0)])]),
					f(_a, {
						label: l.value.description,
						vertical: ""
					}, {
						default: U(() => [f(wa, {
							id: "error-report-description",
							value: F(h),
							"onUpdate:value": i[5] ||= (e) => _(h) ? h.value = e : null,
							rows: 5,
							maxlength: "4000",
							placeholder: l.value.placeholder,
							disabled: F(m)
						}, null, 8, [
							"value",
							"placeholder",
							"disabled"
						])]),
						_: 1
					}, 8, ["label"]),
					c("div", rc, [F(g) ? (E(), s("span", ic, P(F(g)), 1)) : o("", !0), c("span", ac, P(F(h).length) + " / 4000", 1)])
				], 544)]),
				_: 1
			}, 8, [
				"title",
				"close-label",
				"dismissible",
				"onOpened",
				"onClose"
			])) : o("", !0),
			F(b) ? (E(), a(t, {
				key: 2,
				to: "body"
			}, [c("div", oc, P(F(b)), 1)])) : o("", !0)
		], 64));
	}
}, [["__scopeId", "data-v-dbd59e0d"]]);
//#endregion
export { Xn as $, Gi as A, Ze as At, ai as B, $ as Bt, ma as C, Yt as Ct, Qi as D, gt as Dt, aa as E, Xt as Et, Ci as F, ke as Ft, Kr as G, Z as Gt, $r as H, me as Ht, hi as I, De as It, jr as J, ae as Jt, Ur as K, X as Kt, gi as L, we as Lt, Pi as M, Be as Mt, Ni as N, Ie as Nt, Zi as O, pt as Ot, wi as P, Ne as Pt, Zn as Q, pi as R, ye as Rt, _a as S, Ut as St, la as T, qt as Tt, Zr as U, de as Ut, ri as V, he as Vt, Jr as W, se as Wt, wr as X, kr as Y, q as Yt, ar as Z, Ra as _, dn as _t, jo as a, Jn as at, Sa as b, nn as bt, So as c, Nn as ct, to as d, An as dt, Yn as et, Qa as f, bn as ft, za as g, pn as gt, Va as h, yn as ht, Xo as i, tr as it, Hi as j, We as jt, Xi as k, ct as kt, uo as l, Pn as lt, Ua as m, Sn as mt, as as n, nr as nt, ko as o, qn as ot, Za as p, xn as pt, Rr as q, oe as qt, ts as r, Qn as rt, Eo as s, Bn as st, sc as t, Kn as tt, io as u, Mn as ut, La as v, un as vt, da as w, Jt as wt, ba as x, Wt as xt, wa as y, ln as yt, li as z, ve as zt };
