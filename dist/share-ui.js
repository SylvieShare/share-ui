import { $ as e, A as t, At as n, B as r, Bt as i, C as a, Ct as o, D as s, Dt as c, E as l, Et as u, F as d, Ft as f, G as p, H as m, Ht as h, I as g, It as _, J as v, K as y, L as b, Lt as x, M as S, Mt as C, N as w, Nt as T, O as E, Ot as D, P as O, Pt as k, Q as A, R as j, Rt as M, S as N, St as P, T as F, Tt as ee, U as te, Ut as ne, V as re, Vt as ie, W as ae, Wt as oe, X as se, Y as ce, Z as le, _ as I, _t as L, a as R, at as z, b as B, bt as V, c as H, ct as U, d as W, dt as G, et as ue, f as de, ft as fe, g as pe, gt as K, h as me, ht as q, i as he, it as ge, j as _e, jt as ve, k as ye, kt as be, l as xe, lt as Se, m as Ce, mt as we, n as Te, nt as Ee, o as De, ot as Oe, p as ke, pt as Ae, q as je, r as Me, rt as Ne, s as Pe, st as Fe, t as Ie, tt as Le, u as Re, ut as ze, v as Be, vt as Ve, w as He, wt as Ue, x as We, xt as Ge, y as Ke, yt as qe, z as Je, zt as Ye } from "./PageReport-D0t50kYX.js";
import { computed as J, nextTick as Y, onBeforeUnmount as Xe, onScopeDispose as Ze, ref as X, shallowRef as Qe, toValue as $e, watch as Z } from "vue";
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
function nt(e, t, n) {
	return (t === "href" || t === "xlink:href") && e.startsWith("#") ? n.has(e.slice(1)) ? `#${n.get(e.slice(1))}` : e : tt.has(t) ? e.replace(/\S+/g, (e) => n.get(e) || e) : e.replace(/url\(\s*(['"]?)#([^\s'"\)]+)\1\s*\)/g, (e, t, r) => n.has(r) ? `url(${t}#${n.get(r)}${t})` : e);
}
function rt(e) {
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
		let n = nt(t.value, t.name, r);
		n !== t.value && e.setAttributeNS(t.namespaceURI, t.name, n);
	}
	return Q(e, t), t;
}
//#endregion
//#region src/internal/sortableListPreview.js
function it(e, { getKey: t, sourceItem: n, removeSource: r, insertAt: i }) {
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
var $ = 4, at = 8;
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
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = Number.isFinite(e.activationDelay) ? Math.max(0, e.activationDelay) : 0, o = X(!1), s = X(null), c = X(null), l = X(-1), u = X(null), d = X(-1), f = X(!1), p = null, m = 0, h = 0, _ = null, v = null, y = 0, b = null, x = null;
	function S(e, t, n, r) {
		if (e.button !== void 0 && e.button !== 0 || _ || o.value) return;
		let i = e.currentTarget.closest("[data-sortable-key]");
		i && (_ = {
			x: e.clientX,
			y: e.clientY,
			pointerId: e.pointerId,
			pointerType: e.pointerType,
			item: t,
			group: n,
			index: r,
			sourceEl: i
		}, v?.(), a || (v = g()), document.addEventListener("pointermove", C), document.addEventListener("pointerup", A), document.addEventListener("pointercancel", A), window.addEventListener("keydown", j, !0), window.addEventListener("blur", E), a ? (document.addEventListener("touchmove", w, { passive: !1 }), document.addEventListener("contextmenu", T, !0), x = setTimeout(() => {
			if (x = null, !_?.sourceEl.isConnected) {
				M();
				return;
			}
			v = g(), D();
		}, a)) : e.preventDefault());
	}
	function C(e) {
		if (!(_?.pointerId && e.pointerId && _.pointerId !== e.pointerId)) {
			if (!o.value) {
				if (!_) return;
				let t = e.clientX - _.x, n = e.clientY - _.y;
				if (a) {
					Math.hypot(t, n) > at && M(!0);
					return;
				}
				if (Math.hypot(t, n) < $) return;
				D();
			}
			O(e.clientX, e.clientY), k(e.clientX, e.clientY);
		}
	}
	function w(e) {
		if (e.touches.length !== 1) {
			M();
			return;
		}
		o.value && _?.pointerType === "touch" && e.cancelable && e.preventDefault();
	}
	function T(e) {
		(_ || o.value) && e.preventDefault();
	}
	function E() {
		M();
	}
	function D() {
		let { sourceEl: e, x: t, y: n, item: r, group: i, index: a } = _, f = e.getBoundingClientRect();
		m = t - f.left, h = n - f.top;
		let g = rt(e), v = g;
		if (e.tagName === "TR") {
			let t = Array.from(e.children).map((e) => e.getBoundingClientRect().width);
			Array.from(g.children).forEach((e, n) => {
				e.style.width = t[n] + "px", e.style.minWidth = t[n] + "px", e.style.maxWidth = t[n] + "px";
			});
			let n = document.createElement("table"), r = document.createElement("tbody");
			r.appendChild(g), n.appendChild(r), n.style.borderCollapse = "separate", n.style.tableLayout = "fixed", v = n, Q(e, v);
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
		}), v.classList.add("sortable-ghost"), v.setAttribute("aria-hidden", "true"), v.inert = !0, document.body.appendChild(v), p = v, s.value = i, c.value = r, l.value = a, u.value = i, d.value = a, o.value = !0, document.body.classList.add("sortable-dragging"), O(t, n);
	}
	function O(e, t) {
		p && (p.style.transform = `translate3d(${e - m}px, ${t - h}px, 0)`);
	}
	function k(e, r) {
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
	function A(e) {
		if (_?.pointerId && e?.pointerId && _.pointerId !== e.pointerId) return;
		if (e?.type === "pointercancel") {
			M();
			return;
		}
		if (!o.value) {
			M();
			return;
		}
		let t = {
			item: c.value,
			fromGroup: s.value,
			fromIndex: l.value,
			toGroup: u.value,
			toIndex: d.value
		};
		M(), t.toGroup != null && r?.(t);
	}
	function j(e) {
		e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), M());
	}
	function M(e = !1) {
		let t = o.value || e;
		clearTimeout(x), x = null, document.removeEventListener("pointermove", C), document.removeEventListener("pointerup", A), document.removeEventListener("pointercancel", A), window.removeEventListener("keydown", j, !0), window.removeEventListener("blur", E), document.removeEventListener("touchmove", w), document.removeEventListener("contextmenu", T, !0), p &&= (p.remove(), null), document.body.classList.remove("sortable-dragging"), o.value = !1, s.value = null, c.value = null, l.value = -1, u.value = null, d.value = -1, _ = null, v?.(), v = null, t && (y = Date.now() + 250, f.value = !0, clearTimeout(b), b = setTimeout(() => {
			f.value = !1, b = null;
		}, 250));
	}
	function N() {
		return Date.now() < y;
	}
	function P(e) {
		return o.value && c.value && n(c.value) === n(e);
	}
	function F(e) {
		let r = t[e];
		if (!r) return [];
		let i = r.items.value;
		return r.layout === "grid" || !o.value ? i : it(i, {
			getKey: n,
			sourceItem: c.value,
			removeSource: s.value === e,
			insertAt: u.value === e ? d.value : null
		});
	}
	return Xe(() => {
		M(), clearTimeout(b), f.value = !1;
	}), {
		dragging: o,
		sourceItem: c,
		sourceGroup: s,
		targetGroup: u,
		targetIndex: d,
		suppressNextClick: f,
		startDrag: S,
		shouldSuppressClick: N,
		isSource: P,
		displayItems: F
	};
}
//#endregion
//#region src/composables/useSheetSubpages.js
var ut = "cubic-bezier(.2, 0, 0, 1)", dt = 320;
function ft() {
	let e = X("detail"), t = X(0), n = X(!1), r = 1, i = null, a = J(() => n.value ? `transform ${dt}ms ${ut}` : "none"), o = J(() => ({
		transform: `translateX(${(-t.value * 100).toFixed(3)}%)`,
		transition: a.value
	})), s = J(() => ({
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
	let o = Qe(/* @__PURE__ */ new Map()), s = X(0), c = X(0), l = X(null), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f = J(() => $e(e) || []), p = J(() => pt(f.value, n, r, o.value)), m = J(() => new Map(f.value.map((e, t) => [n(e), t]))), h = J(() => f.value.length > i), g = J(() => h.value ? mt(p.value, s.value, c.value || 600, a) : {
		start: 0,
		end: f.value.length
	}), _ = J(() => {
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
	}), v = J(() => p.value.at(-1) - (_.value.length ? p.value[_.value.at(-1).index + 1] : 0)), y, b, x, S, C;
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
	return Z(t, (e) => {
		k(), x = e, e?.addEventListener("scroll", T, { passive: !0 }), e?.addEventListener("focusin", E), e?.addEventListener("focusout", D), e && b?.observe(e), Y(w);
	}, {
		immediate: !0,
		flush: "post"
	}), Z(m, (e) => {
		o.value = new Map([...o.value].filter(([t]) => e.has(t))), e.has(l.value) || (l.value = null), Y(w);
	}), Ze(() => {
		k(), y?.disconnect(), S != null && cancelAnimationFrame(S);
	}), {
		visibleItems: _,
		paddingAfter: v,
		setItemRef: O,
		totalSize: J(() => p.value.at(-1))
	};
}
//#endregion
export { L as ACTION_MENU_GAP, Ve as ACTION_MENU_MARGIN, v as AccountMenu, me as ActionButton, K as ActionMenu, K as RowActionMenu, q as ActionMenuItem, q as RowActionItem, G as ActionMenuSubmenu, G as RowActionSubmenu, C as AddButton, d as AppDrawer, S as AppModal, _e as AppModalFrame, je as AppShell, p as AppSidebar, ve as AppSlider, Ye as AvatarFrame, fe as BasePopover, x as BaseTile, i as BlurBackdrop, oe as ChoiceCard, Fe as ColorPresetPicker, n as CompactCheckbox, ye as ConfirmDialog, H as ContentRow, he as DatePicker, xe as DetailSection, re as EditorPanel, Je as EditorSection, r as EditorSectionTitle, j as EditorTotal, M as FitContent, R as FloatingTooltip, F as FormActionButtons, N as FormField, We as FormNumberInput, B as FormSelect, He as FormTextInput, Ke as FormTextarea, ke as GuidedTour, ee as IconNavigation, Re as IconPicker, Ce as IconToggleButton, Be as InlineEdit, t as LoadingIndicator, pe as LoadingState, E as ModalShell, l as MorphSheet, f as MorphTile, _ as MorphTileHeader, be as MultiToggle, Pe as OptionList, U as PRESET_COLORS, Ie as PageReport, a as PromptDialog, a as TextPromptDialog, qe as ROW_ACTION_GAP, V as ROW_ACTION_MARGIN, D as RemoveButton, se as RichContent, ce as RichTextEditor, De as SearchMultiSelect, c as SectionLabel, T as SectionList, u as SegmentDonutChart, ae as SidebarBrand, te as SidebarGroup, m as SidebarNavItem, y as SidebarToggle, I as SkeletonBlock, Ue as SlidingTabs, Te as StarRating, W as StatBar, k as TileAccentStrip, Me as TimelineGroup, o as ToggleSwitch, Oe as ValueSelect, ie as applyBackdropBlur, h as backdropBlurStyle, ne as blurFilter, Ge as computeActionMenuPlacement, P as computeRowActionPlacement, le as createRichNodeHtml, A as decodeRichNodePayload, e as encodeRichNodePayload, ue as escapeHtml, b as isSortableGestureActive, Se as isValidHexColor, Le as plainTextToRichHtml, ze as randomPreset, Ee as readRichNode, ct as reorderByDrop, w as restoreFocus, Ne as sanitizeRichHtml, ge as sanitizeRichTextColor, z as sanitizeRichTextUrl, s as useContainerMorph, O as useFullscreenViewportHeight, de as useGuidedTour, Ae as useIsMobile, we as useMediaQuery, ft as useSheetSubpages, lt as useSortable, ht as useVirtualList };
