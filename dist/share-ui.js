import { $ as e, A as t, B as n, C as r, Ct as i, D as a, Dt as o, E as s, Et as c, F as l, G as u, H as d, I as f, J as p, K as m, L as h, M as g, N as _, O as v, Ot as y, P as b, Q as x, R as S, S as C, St as w, T, Tt as E, U as D, V as O, W as k, X as A, Y as j, Z as ee, _ as te, _t as ne, a as re, at as ie, b as ae, bt as oe, c as se, ct as M, d as N, dt as P, et as F, f as I, ft as L, g as R, gt as z, h as B, ht as V, i as H, it as U, j as W, k as G, kt as K, l as ce, lt as q, m as le, mt as ue, n as de, nt as fe, o as pe, ot as me, p as he, pt as ge, q as _e, r as ve, rt as ye, s as be, st as xe, t as Se, tt as Ce, u as we, ut as Te, v as Ee, vt as De, w as Oe, wt as ke, x as Ae, xt as je, y as J, yt as Me, z as Ne } from "./DatePicker-9fP9OR2M.js";
import { computed as Y, nextTick as X, onBeforeUnmount as Pe, onScopeDispose as Fe, ref as Z, shallowRef as Ie, toValue as Le, watch as Q } from "vue";
//#region src/composables/useSortable.js
var $ = 4;
function Re(e, t = null) {
	return Array.from(e.querySelectorAll("[data-sortable-key]")).filter((t) => t.closest("[data-sortable-container]") === e).filter((e) => e.getAttribute("data-sortable-key") !== t);
}
function ze(e, t, n, r, i = "list") {
	if (i === "grid") {
		let r = Array.from(e.querySelectorAll("[data-sortable-slot]")).filter((t) => t.closest("[data-sortable-container]") === e).find((e) => {
			let r = e.getBoundingClientRect();
			return t >= r.left && t < r.right && n >= r.top && n < r.bottom;
		});
		if (!r) return -1;
		let i = Number(r.getAttribute("data-sortable-slot"));
		return Number.isInteger(i) && i >= 0 ? i : -1;
	}
	let a = Re(e, r), o = a.findIndex((e) => n < e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2);
	return o < 0 ? a.length : o;
}
function Be(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function Ve(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = Z(!1), o = Z(null), s = Z(null), c = Z(-1), l = Z(null), u = Z(-1), d = Z(!1), f = null, p = 0, m = 0, h = null, g = 0, _ = null;
	function v(e, t, n, r) {
		if (e.button !== void 0 && e.button !== 0) return;
		let i = e.currentTarget.closest("[data-sortable-key]");
		i && (h = {
			x: e.clientX,
			y: e.clientY,
			item: t,
			group: n,
			index: r,
			sourceEl: i
		}, document.addEventListener("pointermove", y), document.addEventListener("pointerup", C), document.addEventListener("pointercancel", C), window.addEventListener("keydown", w, !0), e.preventDefault());
	}
	function y(e) {
		if (!a.value) {
			if (!h) return;
			let t = e.clientX - h.x, n = e.clientY - h.y;
			if (Math.hypot(t, n) < $) return;
			b();
		}
		x(e.clientX, e.clientY), S(e.clientX, e.clientY);
	}
	function b() {
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
		}), v.classList.add("sortable-ghost"), document.body.appendChild(v), f = v, o.value = i, s.value = r, c.value = d, l.value = i, u.value = d, a.value = !0, document.body.classList.add("sortable-dragging"), x(t, n);
	}
	function x(e, t) {
		f && (f.style.transform = `translate3d(${e - p}px, ${t - m}px, 0)`);
	}
	function S(e, r) {
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
		let f = s.value ? String(n(s.value)) : null, p = ze(c, e, r, f, t[d].layout);
		p < 0 || i && !i({
			item: s.value,
			fromGroup: o.value,
			toGroup: d,
			toIndex: p
		}) || (l.value = d, u.value = p);
	}
	function C(e) {
		if (e?.type === "pointercancel") {
			T();
			return;
		}
		if (!a.value) {
			T();
			return;
		}
		let t = {
			item: s.value,
			fromGroup: o.value,
			fromIndex: c.value,
			toGroup: l.value,
			toIndex: u.value
		};
		T(), t.toGroup != null && r?.(t);
	}
	function w(e) {
		e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), T());
	}
	function T() {
		let e = a.value;
		document.removeEventListener("pointermove", y), document.removeEventListener("pointerup", C), document.removeEventListener("pointercancel", C), window.removeEventListener("keydown", w, !0), f &&= (f.remove(), null), document.body.classList.remove("sortable-dragging"), a.value = !1, o.value = null, s.value = null, c.value = -1, l.value = null, u.value = -1, h = null, e && (g = Date.now() + 250, d.value = !0, clearTimeout(_), _ = setTimeout(() => {
			d.value = !1, _ = null;
		}, 250));
	}
	function E() {
		return Date.now() < g;
	}
	function D(e) {
		return a.value && s.value && n(s.value) === n(e);
	}
	function O(e) {
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
	return Pe(() => {
		T(), clearTimeout(_), d.value = !1;
	}), {
		dragging: a,
		sourceItem: s,
		sourceGroup: o,
		targetGroup: l,
		targetIndex: u,
		suppressNextClick: d,
		startDrag: v,
		shouldSuppressClick: E,
		isSource: D,
		displayItems: O
	};
}
//#endregion
//#region src/composables/useSheetSubpages.js
var He = "cubic-bezier(.2, 0, 0, 1)", Ue = 320;
function We() {
	let e = Z("detail"), t = Z(0), n = Z(!1), r = 1, i = null, a = Y(() => n.value ? `transform ${Ue}ms ${He}` : "none"), o = Y(() => ({
		transform: `translateX(${(-t.value * 100).toFixed(3)}%)`,
		transition: a.value
	})), s = Y(() => ({
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
function Ge(e, t, n, r) {
	let i = [0];
	for (let a of e) i.push(i.at(-1) + (r.get(t(a)) || Math.max(1, n(a))));
	return i;
}
function Ke(e, t, n, r = 6) {
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
function qe(e, t, { key: n, estimateSize: r = () => 70, threshold: i = 80, overscan: a = 6 } = {}) {
	let o = Ie(/* @__PURE__ */ new Map()), s = Z(0), c = Z(0), l = Z(null), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f = Y(() => Le(e) || []), p = Y(() => Ge(f.value, n, r, o.value)), m = Y(() => new Map(f.value.map((e, t) => [n(e), t]))), h = Y(() => f.value.length > i), g = Y(() => h.value ? Ke(p.value, s.value, c.value || 600, a) : {
		start: 0,
		end: f.value.length
	}), _ = Y(() => {
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
	}), v = Y(() => p.value.at(-1) - (_.value.length ? p.value[_.value.at(-1).index + 1] : 0)), y, b, x, S, C;
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
	return Q(t, (e) => {
		k(), x = e, e?.addEventListener("scroll", T, { passive: !0 }), e?.addEventListener("focusin", E), e?.addEventListener("focusout", D), e && b?.observe(e), X(w);
	}, {
		immediate: !0,
		flush: "post"
	}), Q(m, (e) => {
		o.value = new Map([...o.value].filter(([t]) => e.has(t))), e.has(l.value) || (l.value = null), X(w);
	}), Fe(() => {
		k(), y?.disconnect(), S != null && cancelAnimationFrame(S);
	}), {
		visibleItems: _,
		paddingAfter: v,
		setItemRef: O,
		totalSize: Y(() => p.value.at(-1))
	};
}
//#endregion
export { Te as ACTION_MENU_GAP, P as ACTION_MENU_MARGIN, O as AccountMenu, N as ActionButton, q as ActionMenu, q as RowActionMenu, M as ActionMenuItem, M as RowActionItem, U as ActionMenuSubmenu, U as RowActionSubmenu, ke as AddButton, v as AppModal, a as AppModalFrame, n as AppShell, S as AppSidebar, i as AppSlider, ie as BasePopover, K as BaseTile, F as ColorPresetPicker, w as CompactCheckbox, T as ConfirmDialog, re as ContentRow, Se as DatePicker, pe as DetailSection, b as EditorPanel, g as EditorSection, _ as EditorSectionTitle, W as EditorTotal, de as FloatingTooltip, Ae as FormActionButtons, Ee as FormField, te as FormNumberInput, R as FormSelect, ae as FormTextInput, B as FormTextarea, we as GuidedTour, be as IconPicker, le as InlineEdit, s as LoadingIndicator, I as LoadingState, Oe as ModalShell, C as MorphSheet, o as MorphTile, y as MorphTileHeader, je as MultiToggle, H as OptionList, Ce as PRESET_COLORS, J as PromptDialog, J as TextPromptDialog, L as ROW_ACTION_GAP, ge as ROW_ACTION_MARGIN, oe as RemoveButton, D as RichContent, d as RichTextEditor, ve as SearchMultiSelect, Me as SectionLabel, E as SectionList, De as SegmentDonutChart, h as SidebarBrand, f as SidebarGroup, l as SidebarNavItem, Ne as SidebarToggle, he as SkeletonBlock, ne as SlidingTabs, se as StatBar, c as TileAccentStrip, z as ToggleSwitch, e as ValueSelect, ue as computeActionMenuPlacement, V as computeRowActionPlacement, k as createRichNodeHtml, u as decodeRichNodePayload, m as encodeRichNodePayload, _e as escapeHtml, fe as isValidHexColor, p as plainTextToRichHtml, ye as randomPreset, j as readRichNode, Be as reorderByDrop, G as restoreFocus, A as sanitizeRichHtml, ee as sanitizeRichTextColor, x as sanitizeRichTextUrl, r as useContainerMorph, t as useFullscreenViewportHeight, ce as useGuidedTour, me as useIsMobile, xe as useMediaQuery, We as useSheetSubpages, Ve as useSortable, qe as useVirtualList };
