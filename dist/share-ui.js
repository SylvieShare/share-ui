import { $ as e, A as t, At as n, B as r, C as i, Ct as a, D as o, Dt as s, E as c, Et as l, F as u, Ft as d, G as f, H as p, I as m, It as h, J as g, K as _, L as v, Lt as y, M as b, Mt as x, N as S, Nt as C, O as w, Ot as T, P as E, Pt as D, Q as O, R as k, Rt as A, S as j, St as M, T as ee, Tt as te, U as ne, V as re, W as ie, X as ae, Y as oe, Z as se, _ as N, _t as P, a as F, at as I, b as L, bt as R, c as z, ct as B, d as V, dt as H, et as U, f as W, ft as G, g as K, gt as ce, h as le, ht as ue, i as de, it as fe, j as pe, jt as me, k as he, kt as ge, l as _e, lt as ve, m as ye, mt as be, n as xe, nt as Se, o as Ce, ot as we, p as Te, pt as q, q as Ee, r as De, rt as Oe, s as ke, st as Ae, t as je, tt as Me, u as Ne, ut as Pe, v as Fe, vt as Ie, w as Le, wt as Re, x as ze, xt as Be, y as Ve, yt as He, z as Ue, zt as We } from "./StarRating-TZYrEnBi.js";
import { computed as J, nextTick as Y, onBeforeUnmount as Ge, onScopeDispose as Ke, ref as X, shallowRef as qe, toValue as Je, watch as Z } from "vue";
//#region src/internal/sortableGesture.js
var Q = /* @__PURE__ */ new Set();
function $() {
	let e = Symbol("sortable-gesture");
	return Q.add(e), () => Q.delete(e);
}
function Ye() {
	return Q.size > 0;
}
//#endregion
//#region src/composables/useSortable.js
var Xe = 4;
function Ze(e, t = null) {
	return Array.from(e.querySelectorAll("[data-sortable-key]")).filter((t) => t.closest("[data-sortable-container]") === e).filter((e) => e.getAttribute("data-sortable-key") !== t);
}
function Qe(e, t, n, r, i = "list") {
	if (i === "grid") {
		let r = Array.from(e.querySelectorAll("[data-sortable-slot]")).filter((t) => t.closest("[data-sortable-container]") === e).find((e) => {
			let r = e.getBoundingClientRect();
			return t >= r.left && t < r.right && n >= r.top && n < r.bottom;
		});
		if (!r) return -1;
		let i = Number(r.getAttribute("data-sortable-slot"));
		return Number.isInteger(i) && i >= 0 ? i : -1;
	}
	let a = Ze(e, r), o = a.findIndex((e) => n < e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2);
	return o < 0 ? a.length : o;
}
function $e(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function et(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = X(!1), o = X(null), s = X(null), c = X(-1), l = X(null), u = X(-1), d = X(!1), f = null, p = 0, m = 0, h = null, g = null, _ = 0, v = null;
	function y(e, t, n, r) {
		if (e.button !== void 0 && e.button !== 0) return;
		let i = e.currentTarget.closest("[data-sortable-key]");
		i && (h = {
			x: e.clientX,
			y: e.clientY,
			item: t,
			group: n,
			index: r,
			sourceEl: i
		}, g?.(), g = $(), document.addEventListener("pointermove", b), document.addEventListener("pointerup", w), document.addEventListener("pointercancel", w), window.addEventListener("keydown", T, !0), e.preventDefault());
	}
	function b(e) {
		if (!a.value) {
			if (!h) return;
			let t = e.clientX - h.x, n = e.clientY - h.y;
			if (Math.hypot(t, n) < Xe) return;
			x();
		}
		S(e.clientX, e.clientY), C(e.clientX, e.clientY);
	}
	function x() {
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
		}), v.classList.add("sortable-ghost"), document.body.appendChild(v), f = v, o.value = i, s.value = r, c.value = d, l.value = i, u.value = d, a.value = !0, document.body.classList.add("sortable-dragging"), S(t, n);
	}
	function S(e, t) {
		f && (f.style.transform = `translate3d(${e - p}px, ${t - m}px, 0)`);
	}
	function C(e, r) {
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
		if (l.value = null, u.value = -1, !d) return;
		let f = s.value ? String(n(s.value)) : null, p = Qe(c, e, r, f, t[d].layout);
		p < 0 || i && !i({
			item: s.value,
			fromGroup: o.value,
			toGroup: d,
			toIndex: p
		}) || (l.value = d, u.value = p);
	}
	function w(e) {
		if (e?.type === "pointercancel") {
			E();
			return;
		}
		if (!a.value) {
			E();
			return;
		}
		let t = {
			item: s.value,
			fromGroup: o.value,
			fromIndex: c.value,
			toGroup: l.value,
			toIndex: u.value
		};
		E(), t.toGroup != null && r?.(t);
	}
	function T(e) {
		e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), E());
	}
	function E() {
		let e = a.value;
		document.removeEventListener("pointermove", b), document.removeEventListener("pointerup", w), document.removeEventListener("pointercancel", w), window.removeEventListener("keydown", T, !0), f &&= (f.remove(), null), document.body.classList.remove("sortable-dragging"), a.value = !1, o.value = null, s.value = null, c.value = -1, l.value = null, u.value = -1, h = null, g?.(), g = null, e && (_ = Date.now() + 250, d.value = !0, clearTimeout(v), v = setTimeout(() => {
			d.value = !1, v = null;
		}, 250));
	}
	function D() {
		return Date.now() < _;
	}
	function O(e) {
		return a.value && s.value && n(s.value) === n(e);
	}
	function k(e) {
		let r = t[e];
		if (!r) return [];
		let i = r.items.value;
		if (r.layout === "grid" || !a.value) return i;
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
	return Ge(() => {
		E(), clearTimeout(v), d.value = !1;
	}), {
		dragging: a,
		sourceItem: s,
		sourceGroup: o,
		targetGroup: l,
		targetIndex: u,
		suppressNextClick: d,
		startDrag: y,
		shouldSuppressClick: D,
		isSource: O,
		displayItems: k
	};
}
//#endregion
//#region src/composables/useSheetSubpages.js
var tt = "cubic-bezier(.2, 0, 0, 1)", nt = 320;
function rt() {
	let e = X("detail"), t = X(0), n = X(!1), r = 1, i = null, a = J(() => n.value ? `transform ${nt}ms ${tt}` : "none"), o = J(() => ({
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
function it(e, t, n, r) {
	let i = [0];
	for (let a of e) i.push(i.at(-1) + (r.get(t(a)) || Math.max(1, n(a))));
	return i;
}
function at(e, t, n, r = 6) {
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
function ot(e, t, { key: n, estimateSize: r = () => 70, threshold: i = 80, overscan: a = 6 } = {}) {
	let o = qe(/* @__PURE__ */ new Map()), s = X(0), c = X(0), l = X(null), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f = J(() => Je(e) || []), p = J(() => it(f.value, n, r, o.value)), m = J(() => new Map(f.value.map((e, t) => [n(e), t]))), h = J(() => f.value.length > i), g = J(() => h.value ? at(p.value, s.value, c.value || 600, a) : {
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
	}), Ke(() => {
		k(), y?.disconnect(), S != null && cancelAnimationFrame(S);
	}), {
		visibleItems: _,
		paddingAfter: v,
		setItemRef: O,
		totalSize: J(() => p.value.at(-1))
	};
}
//#endregion
export { be as ACTION_MENU_GAP, ue as ACTION_MENU_MARGIN, f as AccountMenu, ye as ActionButton, q as ActionMenu, q as RowActionMenu, G as ActionMenuItem, G as RowActionItem, B as ActionMenuSubmenu, B as RowActionSubmenu, ge as AddButton, E as AppDrawer, pe as AppModal, t as AppModalFrame, ie as AppShell, p as AppSidebar, T as AppSlider, ve as BasePopover, D as BaseTile, d as BlurBackdrop, We as ChoiceCard, fe as ColorPresetPicker, s as CompactCheckbox, w as ConfirmDialog, ke as ContentRow, De as DatePicker, z as DetailSection, k as EditorPanel, m as EditorSection, v as EditorSectionTitle, u as EditorTotal, de as FloatingTooltip, Le as FormActionButtons, ze as FormField, L as FormNumberInput, Ve as FormSelect, i as FormTextInput, Fe as FormTextarea, W as GuidedTour, M as IconNavigation, _e as IconPicker, Te as IconToggleButton, N as InlineEdit, he as LoadingIndicator, le as LoadingState, o as ModalShell, ee as MorphSheet, x as MorphTile, C as MorphTileHeader, l as MultiToggle, Ce as OptionList, I as PRESET_COLORS, j as PromptDialog, j as TextPromptDialog, ce as ROW_ACTION_GAP, P as ROW_ACTION_MARGIN, te as RemoveButton, Ee as RichContent, _ as RichTextEditor, F as SearchMultiSelect, Re as SectionLabel, n as SectionList, a as SegmentDonutChart, re as SidebarBrand, r as SidebarGroup, Ue as SidebarNavItem, ne as SidebarToggle, K as SkeletonBlock, Be as SlidingTabs, je as StarRating, Ne as StatBar, me as TileAccentStrip, xe as TimelineGroup, R as ToggleSwitch, Oe as ValueSelect, h as applyBackdropBlur, y as backdropBlurStyle, A as blurFilter, Ie as computeActionMenuPlacement, He as computeRowActionPlacement, g as createRichNodeHtml, oe as decodeRichNodePayload, ae as encodeRichNodePayload, se as escapeHtml, Ye as isSortableGestureActive, we as isValidHexColor, O as plainTextToRichHtml, Ae as randomPreset, e as readRichNode, $e as reorderByDrop, b as restoreFocus, U as sanitizeRichHtml, Me as sanitizeRichTextColor, Se as sanitizeRichTextUrl, c as useContainerMorph, S as useFullscreenViewportHeight, V as useGuidedTour, Pe as useIsMobile, H as useMediaQuery, rt as useSheetSubpages, et as useSortable, ot as useVirtualList };
