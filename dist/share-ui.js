import { $ as e, A as t, At as n, B as r, Bt as i, C as a, Ct as o, D as s, Dt as c, E as l, Et as u, F as d, Ft as f, G as p, H as m, I as h, It as g, J as _, K as v, L as y, Lt as b, M as x, Mt as S, N as C, Nt as w, O as T, Ot as E, P as D, Pt as O, Q as k, R as A, Rt as j, S as M, St as N, T as P, Tt as F, U as ee, V as te, Vt as ne, W as re, X as ie, Y as ae, Z as oe, _ as se, _t as ce, a as le, at as ue, b as I, bt as L, c as R, ct as z, d as B, dt as V, et as H, f as U, ft as W, g as de, gt as fe, h as pe, ht as me, i as he, it as ge, j as _e, jt as ve, k as ye, kt as be, l as xe, lt as Se, m as Ce, mt as we, n as Te, nt as Ee, o as De, ot as Oe, p as ke, pt as G, q as Ae, r as je, rt as Me, s as Ne, st as Pe, t as Fe, tt as Ie, u as Le, ut as Re, v as ze, vt as Be, w as Ve, wt as He, x as Ue, xt as We, y as Ge, yt as Ke, z as qe, zt as Je } from "./StarRating-DYJXrY0w.js";
import { computed as K, nextTick as q, onBeforeUnmount as Ye, onScopeDispose as Xe, ref as J, shallowRef as Ze, toValue as Qe, watch as Y } from "vue";
//#region src/internal/sortableGesture.js
var X = /* @__PURE__ */ new Set();
function Z() {
	let e = Symbol("sortable-gesture");
	return X.add(e), () => X.delete(e);
}
function $e() {
	return X.size > 0;
}
//#endregion
//#region src/internal/sortableGhost.js
var et = 0;
function Q(e, t) {
	let n = getComputedStyle(e);
	for (let e of n) e.startsWith("--") && t.style.setProperty(e, n.getPropertyValue(e));
	for (let e of [
		"color",
		"font-family",
		"font-size",
		"font-style",
		"font-weight",
		"line-height",
		"letter-spacing",
		"text-align",
		"text-transform",
		"direction"
	]) t.style.setProperty(e, n.getPropertyValue(e));
}
var tt = /* @__PURE__ */ new Set([
	"for",
	"list",
	"headers",
	"aria-labelledby",
	"aria-describedby",
	"aria-controls",
	"aria-owns",
	"aria-activedescendant",
	"aria-flowto",
	"aria-details",
	"aria-errormessage"
]);
function $(e, t, n) {
	return (t === "href" || t === "xlink:href") && e.startsWith("#") ? n.has(e.slice(1)) ? `#${n.get(e.slice(1))}` : e : tt.has(t) ? e.replace(/\S+/g, (e) => n.get(e) || e) : e.replace(/url\(\s*(['"]?)#([^\s'"\)]+)\1\s*\)/g, (e, t, r) => n.has(r) ? `url(${t}#${n.get(r)}${t})` : e);
}
function nt(e) {
	let t = e.cloneNode(!0), n = [t, ...t.querySelectorAll("*")], r = /* @__PURE__ */ new Map();
	for (let e of n) {
		if (!e.id) continue;
		let t;
		do
			t = `share-sortable-ghost-${++et}`;
		while (document.getElementById(t));
		r.set(e.id, t), e.id = t;
	}
	for (let e of n) for (let t of Array.from(e.attributes)) {
		if (t.name === "id") continue;
		let n = $(t.value, t.name, r);
		n !== t.value && e.setAttributeNS(t.namespaceURI, t.name, n);
	}
	return Q(e, t), t;
}
//#endregion
//#region src/internal/sortableListPreview.js
function rt(e, { getKey: t, sourceItem: n, removeSource: r, insertAt: i }) {
	if (!n || !r && i == null) return e;
	let a = t(n), o = e.filter((e) => t(e) !== a);
	if (i == null) return o;
	let s = Math.max(0, Math.min(i, o.length));
	return [
		...o.slice(0, s),
		n,
		...o.slice(s)
	];
}
//#endregion
//#region src/composables/useSortable.js
var it = 4, at = 8;
function ot(e, t = null) {
	return Array.from(e.querySelectorAll("[data-sortable-key]")).filter((t) => t.closest("[data-sortable-container]") === e).filter((e) => e.getAttribute("data-sortable-key") !== t);
}
function st(e, t, n, r, i = "list", a = "exact") {
	if (i === "grid") {
		if (a === "nearest") {
			let r = e.getBoundingClientRect();
			if (t < r.left || t >= r.right || n < r.top || n >= r.bottom) return -1;
		}
		let i = Array.from(e.querySelectorAll("[data-sortable-slot]")).filter((t) => t.closest("[data-sortable-container]") === e), o = i.find((e) => {
			let r = e.getBoundingClientRect();
			return t >= r.left && t < r.right && n >= r.top && n < r.bottom;
		});
		if (!o && a === "nearest") {
			let e = Infinity, a = !1, s = -1;
			for (let c of i) {
				let i = Number(c.getAttribute("data-sortable-slot"));
				if (!Number.isInteger(i) || i < 0) continue;
				let l = c.getBoundingClientRect(), u = Math.max(l.left - t, 0, t - l.right), d = Math.max(l.top - n, 0, n - l.bottom), f = u * u + d * d, p = c.getAttribute("data-sortable-key") === r || Array.from(c.querySelectorAll("[data-sortable-key]")).some((e) => e.getAttribute("data-sortable-key") === r);
				(f < e || f === e && (a && !p || a === p && i > s)) && (o = c, e = f, a = p, s = i);
			}
		}
		if (!o) return -1;
		let s = Number(o.getAttribute("data-sortable-slot"));
		return Number.isInteger(s) && s >= 0 ? s : -1;
	}
	let o = ot(e, r), s = o.findIndex((e) => n < e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2);
	return s < 0 ? o.length : s;
}
function ct(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function lt(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = Number.isFinite(e.activationDelay) ? Math.max(0, e.activationDelay) : 0, o = J(!1), s = J(null), c = J(null), l = J(-1), u = J(null), d = J(-1), f = J(!1), p = null, m = 0, h = 0, g = null, _ = null, v = 0, y = null, b = null;
	function x(e, t, n, r) {
		if (e.button !== void 0 && e.button !== 0 || g || o.value) return;
		let i = e.currentTarget.closest("[data-sortable-key]");
		i && (g = {
			x: e.clientX,
			y: e.clientY,
			pointerId: e.pointerId,
			pointerType: e.pointerType,
			item: t,
			group: n,
			index: r,
			sourceEl: i
		}, _?.(), a || (_ = Z()), document.addEventListener("pointermove", S), document.addEventListener("pointerup", k), document.addEventListener("pointercancel", k), window.addEventListener("keydown", A, !0), window.addEventListener("blur", T), a ? (document.addEventListener("touchmove", C, { passive: !1 }), document.addEventListener("contextmenu", w, !0), b = setTimeout(() => {
			if (b = null, !g?.sourceEl.isConnected) {
				j();
				return;
			}
			_ = Z(), E();
		}, a)) : e.preventDefault());
	}
	function S(e) {
		if (!(g?.pointerId && e.pointerId && g.pointerId !== e.pointerId)) {
			if (!o.value) {
				if (!g) return;
				let t = e.clientX - g.x, n = e.clientY - g.y;
				if (a) {
					Math.hypot(t, n) > at && j(!0);
					return;
				}
				if (Math.hypot(t, n) < it) return;
				E();
			}
			D(e.clientX, e.clientY), O(e.clientX, e.clientY);
		}
	}
	function C(e) {
		if (e.touches.length !== 1) {
			j();
			return;
		}
		o.value && g?.pointerType === "touch" && e.cancelable && e.preventDefault();
	}
	function w(e) {
		(g || o.value) && e.preventDefault();
	}
	function T() {
		j();
	}
	function E() {
		let { sourceEl: e, x: t, y: n, item: r, group: i, index: a } = g, f = e.getBoundingClientRect();
		m = t - f.left, h = n - f.top;
		let _ = nt(e), v = _;
		if (e.tagName === "TR") {
			let t = Array.from(e.children).map((e) => e.getBoundingClientRect().width);
			Array.from(_.children).forEach((e, n) => {
				e.style.width = t[n] + "px", e.style.minWidth = t[n] + "px", e.style.maxWidth = t[n] + "px";
			});
			let n = document.createElement("table"), r = document.createElement("tbody");
			r.appendChild(_), n.appendChild(r), n.style.borderCollapse = "separate", n.style.tableLayout = "fixed", v = n, Q(e, v);
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
		}), v.classList.add("sortable-ghost"), v.setAttribute("aria-hidden", "true"), v.inert = !0, document.body.appendChild(v), p = v, s.value = i, c.value = r, l.value = a, u.value = i, d.value = a, o.value = !0, document.body.classList.add("sortable-dragging"), D(t, n);
	}
	function D(e, t) {
		p && (p.style.transform = `translate3d(${e - m}px, ${t - h}px, 0)`);
	}
	function O(e, r) {
		let a = document.elementsFromPoint(e, r), o = null, l = null;
		for (let e of a) {
			let n = e.getAttribute && e.getAttribute("data-sortable-container");
			if (n && t[n]) {
				let r = t[n];
				if (r.accepts && !r.accepts(c.value, s.value, n)) continue;
				o = e, l = n;
				break;
			}
		}
		if (u.value = null, d.value = -1, !l) return;
		let f = c.value ? String(n(c.value)) : null, p = st(o, e, r, f, t[l].layout, t[l].hitTest);
		p < 0 || i && !i({
			item: c.value,
			fromGroup: s.value,
			toGroup: l,
			toIndex: p
		}) || (u.value = l, d.value = p);
	}
	function k(e) {
		if (g?.pointerId && e?.pointerId && g.pointerId !== e.pointerId) return;
		if (e?.type === "pointercancel") {
			j();
			return;
		}
		if (!o.value) {
			j();
			return;
		}
		let t = {
			item: c.value,
			fromGroup: s.value,
			fromIndex: l.value,
			toGroup: u.value,
			toIndex: d.value
		};
		j(), t.toGroup != null && r?.(t);
	}
	function A(e) {
		e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), j());
	}
	function j(e = !1) {
		let t = o.value || e;
		clearTimeout(b), b = null, document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", k), document.removeEventListener("pointercancel", k), window.removeEventListener("keydown", A, !0), window.removeEventListener("blur", T), document.removeEventListener("touchmove", C), document.removeEventListener("contextmenu", w, !0), p &&= (p.remove(), null), document.body.classList.remove("sortable-dragging"), o.value = !1, s.value = null, c.value = null, l.value = -1, u.value = null, d.value = -1, g = null, _?.(), _ = null, t && (v = Date.now() + 250, f.value = !0, clearTimeout(y), y = setTimeout(() => {
			f.value = !1, y = null;
		}, 250));
	}
	function M() {
		return Date.now() < v;
	}
	function N(e) {
		return o.value && c.value && n(c.value) === n(e);
	}
	function P(e) {
		let r = t[e];
		if (!r) return [];
		let i = r.items.value;
		return r.layout === "grid" || !o.value ? i : rt(i, {
			getKey: n,
			sourceItem: c.value,
			removeSource: s.value === e,
			insertAt: u.value === e ? d.value : null
		});
	}
	return Ye(() => {
		j(), clearTimeout(y), f.value = !1;
	}), {
		dragging: o,
		sourceItem: c,
		sourceGroup: s,
		targetGroup: u,
		targetIndex: d,
		suppressNextClick: f,
		startDrag: x,
		shouldSuppressClick: M,
		isSource: N,
		displayItems: P
	};
}
//#endregion
//#region src/composables/useSheetSubpages.js
var ut = "cubic-bezier(.2, 0, 0, 1)", dt = 320;
function ft() {
	let e = J("detail"), t = J(0), n = J(!1), r = 1, i = null, a = K(() => n.value ? `transform ${dt}ms ${ut}` : "none"), o = K(() => ({
		transform: `translateX(${(-t.value * 100).toFixed(3)}%)`,
		transition: a.value
	})), s = K(() => ({
		transform: `translateX(${((1 - t.value) * 100).toFixed(3)}%)`,
		transition: a.value
	}));
	function c(e, r) {
		clearTimeout(i), n.value = !0, t.value = e, i = setTimeout(() => {
			n.value = !1, r && r();
		}, 330);
	}
	function l(r) {
		e.value === "detail" && (n.value = !1, t.value = 0, e.value = r);
	}
	function u() {
		c(1);
	}
	function d() {
		e.value !== "detail" && c(0, () => {
			e.value = "detail";
		});
	}
	function f(e) {
		clearTimeout(i), n.value = !1, r = e || 1;
	}
	function p(e) {
		t.value = Math.min(1, Math.max(0, 1 - e / r));
	}
	function m(t, n) {
		t > r * .35 || n > .4 ? c(0, () => {
			e.value = "detail";
		}) : c(1);
	}
	return {
		view: e,
		pos: t,
		animating: n,
		detailStyle: o,
		subStyle: s,
		goSub: l,
		enterSub: u,
		backToDetail: d,
		dragStart: f,
		dragMove: p,
		dragEnd: m
	};
}
//#endregion
//#region src/lib/virtualListLayout.js
function pt(e, t, n, r) {
	let i = [0];
	for (let a of e) i.push(i.at(-1) + (r.get(t(a)) || Math.max(1, n(a))));
	return i;
}
function mt(e, t, n, r = 6) {
	let i = e.length - 1;
	if (!i) return {
		start: 0,
		end: 0
	};
	let a = (t) => {
		let n = 0, r = i;
		for (; n < r;) {
			let i = n + r >>> 1;
			e[i + 1] <= t ? n = i + 1 : r = i;
		}
		return Math.min(n, i - 1);
	}, o = Math.max(0, Math.min(t, e[i] - n));
	return {
		start: Math.max(0, a(o) - r),
		end: Math.min(i, a(o + n) + r + 1)
	};
}
//#endregion
//#region src/composables/useVirtualList.js
function ht(e, t, { key: n, estimateSize: r = () => 70, threshold: i = 80, overscan: a = 6 } = {}) {
	let o = Ze(/* @__PURE__ */ new Map()), s = J(0), c = J(0), l = J(null), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f = K(() => Qe(e) || []), p = K(() => pt(f.value, n, r, o.value)), m = K(() => new Map(f.value.map((e, t) => [n(e), t]))), h = K(() => f.value.length > i), g = K(() => h.value ? mt(p.value, s.value, c.value || 600, a) : {
		start: 0,
		end: f.value.length
	}), _ = K(() => {
		let { start: e, end: t } = g.value, r = Array.from({ length: t - e }, (t, n) => e + n), i = m.value.get(l.value);
		i != null && (i < e || i >= t) && r.push(i), r.sort((e, t) => e - t);
		let a = 0;
		return r.map((e) => {
			let t = f.value[e], r = p.value[e] - a;
			return a = p.value[e + 1], {
				item: t,
				key: n(t),
				index: e,
				gap: r
			};
		});
	}), v = K(() => p.value.at(-1) - (_.value.length ? p.value[_.value.at(-1).index + 1] : 0)), y, b, x, S, C;
	function w() {
		if (!x) return;
		let e = x.clientWidth;
		C != null && e > 0 && e !== C && (o.value = /* @__PURE__ */ new Map()), e > 0 && (C = e), c.value = x.clientHeight, s.value = Math.max(0, x.scrollTop - (parseFloat(getComputedStyle(x).paddingTop) || 0));
	}
	function T() {
		S ??= requestAnimationFrame(() => {
			S = null, w();
		});
	}
	function E(e) {
		l.value = null;
		for (let [t, n] of u) if (n.contains(e.target)) {
			l.value = t;
			break;
		}
	}
	function D(e) {
		x?.contains(e.relatedTarget) || (l.value = null);
	}
	function O(e, t) {
		let n = t?.$el || t, r = u.get(e);
		r !== n && (r && (y?.unobserve(r), u.delete(e)), n?.nodeType === 1 && (u.set(e, n), d.set(n, e), y?.observe(n)));
	}
	typeof ResizeObserver < "u" && (y = new ResizeObserver((e) => {
		let t = new Map(o.value), n = !1;
		for (let { target: r } of e) {
			let e = r.getBoundingClientRect();
			if (!e.height) continue;
			let i = getComputedStyle(r), a = e.height + (parseFloat(i.marginTop) || 0) + (parseFloat(i.marginBottom) || 0), o = d.get(r);
			o != null && Math.abs((t.get(o) || 0) - a) > .5 && (t.set(o, a), n = !0);
		}
		n && (o.value = t);
	}), b = new ResizeObserver(w));
	function k() {
		x?.removeEventListener("scroll", T), x?.removeEventListener("focusin", E), x?.removeEventListener("focusout", D), b?.disconnect();
	}
	return Y(t, (e) => {
		k(), x = e, e?.addEventListener("scroll", T, { passive: !0 }), e?.addEventListener("focusin", E), e?.addEventListener("focusout", D), e && b?.observe(e), q(w);
	}, {
		immediate: !0,
		flush: "post"
	}), Y(m, (e) => {
		o.value = new Map([...o.value].filter(([t]) => e.has(t))), e.has(l.value) || (l.value = null), q(w);
	}), Xe(() => {
		k(), y?.disconnect(), S != null && cancelAnimationFrame(S);
	}), {
		visibleItems: _,
		paddingAfter: v,
		setItemRef: O,
		totalSize: K(() => p.value.at(-1))
	};
}
//#endregion
export { we as ACTION_MENU_GAP, me as ACTION_MENU_MARGIN, p as AccountMenu, Ce as ActionButton, G as ActionMenu, G as RowActionMenu, W as ActionMenuItem, W as RowActionItem, z as ActionMenuSubmenu, z as RowActionSubmenu, be as AddButton, D as AppDrawer, _e as AppModal, t as AppModalFrame, re as AppShell, m as AppSidebar, E as AppSlider, g as AvatarFrame, Se as BasePopover, O as BaseTile, b as BlurBackdrop, ne as ChoiceCard, ge as ColorPresetPicker, c as CompactCheckbox, T as ConfirmDialog, Ne as ContentRow, je as DatePicker, R as DetailSection, A as EditorPanel, h as EditorSection, y as EditorSectionTitle, d as EditorTotal, f as FitContent, he as FloatingTooltip, Ve as FormActionButtons, Ue as FormField, I as FormNumberInput, Ge as FormSelect, a as FormTextInput, ze as FormTextarea, U as GuidedTour, N as IconNavigation, xe as IconPicker, ke as IconToggleButton, se as InlineEdit, ye as LoadingIndicator, pe as LoadingState, s as ModalShell, P as MorphSheet, S as MorphTile, w as MorphTileHeader, u as MultiToggle, De as OptionList, ue as PRESET_COLORS, M as PromptDialog, M as TextPromptDialog, fe as ROW_ACTION_GAP, ce as ROW_ACTION_MARGIN, F as RemoveButton, Ae as RichContent, v as RichTextEditor, le as SearchMultiSelect, He as SectionLabel, n as SectionList, o as SegmentDonutChart, te as SidebarBrand, r as SidebarGroup, qe as SidebarNavItem, ee as SidebarToggle, de as SkeletonBlock, We as SlidingTabs, Fe as StarRating, Le as StatBar, ve as TileAccentStrip, Te as TimelineGroup, L as ToggleSwitch, Me as ValueSelect, j as applyBackdropBlur, Je as backdropBlurStyle, i as blurFilter, Be as computeActionMenuPlacement, Ke as computeRowActionPlacement, _ as createRichNodeHtml, ae as decodeRichNodePayload, ie as encodeRichNodePayload, oe as escapeHtml, $e as isSortableGestureActive, Oe as isValidHexColor, k as plainTextToRichHtml, Pe as randomPreset, e as readRichNode, ct as reorderByDrop, x as restoreFocus, H as sanitizeRichHtml, Ie as sanitizeRichTextColor, Ee as sanitizeRichTextUrl, l as useContainerMorph, C as useFullscreenViewportHeight, B as useGuidedTour, Re as useIsMobile, V as useMediaQuery, ft as useSheetSubpages, lt as useSortable, ht as useVirtualList };
