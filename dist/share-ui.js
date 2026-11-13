import { $ as e, A as t, At as n, B as r, C as i, Ct as a, D as o, Dt as s, E as c, Et as l, F as u, Ft as d, G as f, H as p, I as m, It as h, J as g, K as _, L as v, Lt as y, M as b, Mt as x, N as S, Nt as C, O as w, Ot as T, P as E, Pt as D, Q as O, R as k, Rt as A, S as j, St as M, T as N, Tt as P, U as F, V as I, W as ee, X as te, Y as ne, Z as re, _ as ie, _t as ae, a as oe, at as se, b as ce, bt as L, c as R, ct as z, d as B, dt as V, et as H, f as U, ft as W, g as G, gt as le, h as ue, ht as de, i as fe, it as pe, j as me, jt as he, k as ge, kt as _e, l as ve, lt as ye, m as be, mt as xe, n as Se, nt as Ce, o as we, ot as Te, p as Ee, pt as K, q as De, r as Oe, rt as ke, s as Ae, st as je, t as Me, tt as Ne, u as Pe, ut as Fe, v as Ie, vt as Le, w as Re, wt as ze, x as Be, xt as Ve, y as He, yt as Ue, z as We, zt as Ge } from "./StarRating-CufCRZKR.js";
import { computed as q, nextTick as J, onBeforeUnmount as Ke, onScopeDispose as qe, ref as Y, shallowRef as Je, toValue as Ye, watch as X } from "vue";
//#region src/internal/sortableGesture.js
var Z = /* @__PURE__ */ new Set();
function Q() {
	let e = Symbol("sortable-gesture");
	return Z.add(e), () => Z.delete(e);
}
function Xe() {
	return Z.size > 0;
}
//#endregion
//#region src/composables/useSortable.js
var Ze = 4, $ = 8;
function Qe(e, t = null) {
	return Array.from(e.querySelectorAll("[data-sortable-key]")).filter((t) => t.closest("[data-sortable-container]") === e).filter((e) => e.getAttribute("data-sortable-key") !== t);
}
function $e(e, t, n, r, i = "list") {
	if (i === "grid") {
		let r = Array.from(e.querySelectorAll("[data-sortable-slot]")).filter((t) => t.closest("[data-sortable-container]") === e).find((e) => {
			let r = e.getBoundingClientRect();
			return t >= r.left && t < r.right && n >= r.top && n < r.bottom;
		});
		if (!r) return -1;
		let i = Number(r.getAttribute("data-sortable-slot"));
		return Number.isInteger(i) && i >= 0 ? i : -1;
	}
	let a = Qe(e, r), o = a.findIndex((e) => n < e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2);
	return o < 0 ? a.length : o;
}
function et(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function tt(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = Number.isFinite(e.activationDelay) ? Math.max(0, e.activationDelay) : 0, o = Y(!1), s = Y(null), c = Y(null), l = Y(-1), u = Y(null), d = Y(-1), f = Y(!1), p = null, m = 0, h = 0, g = null, _ = null, v = 0, y = null, b = null;
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
		}, _?.(), a || (_ = Q()), document.addEventListener("pointermove", S), document.addEventListener("pointerup", k), document.addEventListener("pointercancel", k), window.addEventListener("keydown", A, !0), window.addEventListener("blur", T), a ? (document.addEventListener("touchmove", C, { passive: !1 }), document.addEventListener("contextmenu", w, !0), b = setTimeout(() => {
			if (b = null, !g?.sourceEl.isConnected) {
				j();
				return;
			}
			_ = Q(), E();
		}, a)) : e.preventDefault());
	}
	function S(e) {
		if (!(g?.pointerId && e.pointerId && g.pointerId !== e.pointerId)) {
			if (!o.value) {
				if (!g) return;
				let t = e.clientX - g.x, n = e.clientY - g.y;
				if (a) {
					Math.hypot(t, n) > $ && j(!0);
					return;
				}
				if (Math.hypot(t, n) < Ze) return;
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
		}), v.classList.add("sortable-ghost"), v.setAttribute("aria-hidden", "true"), document.body.appendChild(v), p = v, s.value = i, c.value = r, l.value = a, u.value = i, d.value = a, o.value = !0, document.body.classList.add("sortable-dragging"), D(t, n);
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
		let f = c.value ? String(n(c.value)) : null, p = $e(o, e, r, f, t[l].layout);
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
		if (r.layout === "grid" || !o.value) return i;
		let a = i;
		if (s.value === e) {
			let e = n(c.value);
			a = i.filter((t) => n(t) !== e);
		}
		if (u.value === e && c.value) {
			let e = Math.min(d.value, a.length);
			a = [
				...a.slice(0, e),
				c.value,
				...a.slice(e)
			];
		}
		return a;
	}
	return Ke(() => {
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
var nt = "cubic-bezier(.2, 0, 0, 1)", rt = 320;
function it() {
	let e = Y("detail"), t = Y(0), n = Y(!1), r = 1, i = null, a = q(() => n.value ? `transform ${rt}ms ${nt}` : "none"), o = q(() => ({
		transform: `translateX(${(-t.value * 100).toFixed(3)}%)`,
		transition: a.value
	})), s = q(() => ({
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
function at(e, t, n, r) {
	let i = [0];
	for (let a of e) i.push(i.at(-1) + (r.get(t(a)) || Math.max(1, n(a))));
	return i;
}
function ot(e, t, n, r = 6) {
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
function st(e, t, { key: n, estimateSize: r = () => 70, threshold: i = 80, overscan: a = 6 } = {}) {
	let o = Je(/* @__PURE__ */ new Map()), s = Y(0), c = Y(0), l = Y(null), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f = q(() => Ye(e) || []), p = q(() => at(f.value, n, r, o.value)), m = q(() => new Map(f.value.map((e, t) => [n(e), t]))), h = q(() => f.value.length > i), g = q(() => h.value ? ot(p.value, s.value, c.value || 600, a) : {
		start: 0,
		end: f.value.length
	}), _ = q(() => {
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
	}), v = q(() => p.value.at(-1) - (_.value.length ? p.value[_.value.at(-1).index + 1] : 0)), y, b, x, S, C;
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
	return X(t, (e) => {
		k(), x = e, e?.addEventListener("scroll", T, { passive: !0 }), e?.addEventListener("focusin", E), e?.addEventListener("focusout", D), e && b?.observe(e), J(w);
	}, {
		immediate: !0,
		flush: "post"
	}), X(m, (e) => {
		o.value = new Map([...o.value].filter(([t]) => e.has(t))), e.has(l.value) || (l.value = null), J(w);
	}), qe(() => {
		k(), y?.disconnect(), S != null && cancelAnimationFrame(S);
	}), {
		visibleItems: _,
		paddingAfter: v,
		setItemRef: O,
		totalSize: q(() => p.value.at(-1))
	};
}
//#endregion
export { xe as ACTION_MENU_GAP, de as ACTION_MENU_MARGIN, f as AccountMenu, be as ActionButton, K as ActionMenu, K as RowActionMenu, W as ActionMenuItem, W as RowActionItem, z as ActionMenuSubmenu, z as RowActionSubmenu, _e as AddButton, E as AppDrawer, me as AppModal, t as AppModalFrame, ee as AppShell, p as AppSidebar, T as AppSlider, ye as BasePopover, D as BaseTile, d as BlurBackdrop, Ge as ChoiceCard, pe as ColorPresetPicker, s as CompactCheckbox, w as ConfirmDialog, Ae as ContentRow, Oe as DatePicker, R as DetailSection, k as EditorPanel, m as EditorSection, v as EditorSectionTitle, u as EditorTotal, fe as FloatingTooltip, Re as FormActionButtons, Be as FormField, ce as FormNumberInput, He as FormSelect, i as FormTextInput, Ie as FormTextarea, U as GuidedTour, M as IconNavigation, ve as IconPicker, Ee as IconToggleButton, ie as InlineEdit, ge as LoadingIndicator, ue as LoadingState, o as ModalShell, N as MorphSheet, x as MorphTile, C as MorphTileHeader, l as MultiToggle, we as OptionList, se as PRESET_COLORS, j as PromptDialog, j as TextPromptDialog, le as ROW_ACTION_GAP, ae as ROW_ACTION_MARGIN, P as RemoveButton, De as RichContent, _ as RichTextEditor, oe as SearchMultiSelect, ze as SectionLabel, n as SectionList, a as SegmentDonutChart, I as SidebarBrand, r as SidebarGroup, We as SidebarNavItem, F as SidebarToggle, G as SkeletonBlock, Ve as SlidingTabs, Me as StarRating, Pe as StatBar, he as TileAccentStrip, Se as TimelineGroup, L as ToggleSwitch, ke as ValueSelect, h as applyBackdropBlur, y as backdropBlurStyle, A as blurFilter, Le as computeActionMenuPlacement, Ue as computeRowActionPlacement, g as createRichNodeHtml, ne as decodeRichNodePayload, te as encodeRichNodePayload, re as escapeHtml, Xe as isSortableGestureActive, Te as isValidHexColor, O as plainTextToRichHtml, je as randomPreset, e as readRichNode, et as reorderByDrop, b as restoreFocus, H as sanitizeRichHtml, Ne as sanitizeRichTextColor, Ce as sanitizeRichTextUrl, c as useContainerMorph, S as useFullscreenViewportHeight, B as useGuidedTour, Fe as useIsMobile, V as useMediaQuery, it as useSheetSubpages, tt as useSortable, st as useVirtualList };
