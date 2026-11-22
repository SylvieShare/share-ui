import { $ as e, A as t, At as n, B as r, Bt as i, C as a, Ct as o, D as s, Dt as c, E as l, Et as u, F as d, Ft as f, G as p, Gt as m, H as h, Ht as g, I as _, It as v, J as y, K as b, Kt as x, L as S, Lt as C, M as w, Mt as T, N as E, Nt as D, O, Ot as k, P as A, Pt as j, Q as M, R as N, Rt as P, S as F, St as ee, T as te, Tt as ne, U as re, Ut as ie, V as ae, Vt as oe, W as se, Wt as ce, X as le, Y as I, Z as L, _ as R, _t as z, a as B, at as V, b as H, bt as U, c as W, ct as ue, d as de, dt as fe, et as pe, f as me, ft as he, g as ge, gt as _e, h as ve, ht as ye, i as be, it as xe, j as Se, jt as Ce, k as we, kt as Te, l as Ee, lt as De, m as Oe, mt as G, n as ke, nt as Ae, o as je, ot as Me, p as Ne, pt as Pe, q as Fe, qt as Ie, r as Le, rt as Re, s as ze, st as Be, t as Ve, tt as He, u as Ue, ut as We, v as Ge, vt as K, w as Ke, wt as qe, x as Je, xt as Ye, y as Xe, yt as q, z as Ze, zt as Qe } from "./PageReport-DdXSBfON.js";
import { computed as J, nextTick as Y, onBeforeUnmount as $e, onScopeDispose as et, ref as X, shallowRef as tt, toValue as nt, watch as Z } from "vue";
//#region src/internal/sortableGhost.js
var rt = 0;
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
var it = /* @__PURE__ */ new Set([
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
	return (t === "href" || t === "xlink:href") && e.startsWith("#") ? n.has(e.slice(1)) ? `#${n.get(e.slice(1))}` : e : it.has(t) ? e.replace(/\S+/g, (e) => n.get(e) || e) : e.replace(/url\(\s*(['"]?)#([^\s'"\)]+)\1\s*\)/g, (e, t, r) => n.has(r) ? `url(${t}#${n.get(r)}${t})` : e);
}
function at(e) {
	let t = e.cloneNode(!0), n = [t, ...t.querySelectorAll("*")], r = /* @__PURE__ */ new Map();
	for (let e of n) {
		if (!e.id) continue;
		let t;
		do
			t = `share-sortable-ghost-${++rt}`;
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
function ot(e, { getKey: t, sourceItem: n, removeSource: r, insertAt: i }) {
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
var st = 4, ct = 8;
function lt(e, t = null) {
	return Array.from(e.querySelectorAll("[data-sortable-key]")).filter((t) => t.closest("[data-sortable-container]") === e).filter((e) => e.getAttribute("data-sortable-key") !== t);
}
function ut(e, t, n, r, i = "list", a = "exact") {
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
	let o = lt(e, r), s = o.findIndex((e) => n < e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2);
	return s < 0 ? o.length : s;
}
function dt(e, t, n) {
	if (t < 0) return e.slice();
	let r = e.slice(), [i] = r.splice(t, 1);
	return r.splice(Math.min(n, r.length), 0, i), r;
}
function ft(e) {
	let { groups: t, getKey: n, onDrop: r, canDropAt: i } = e, a = Number.isFinite(e.activationDelay) ? Math.max(0, e.activationDelay) : 0, o = X(!1), s = X(null), c = X(null), l = X(-1), u = X(null), d = X(-1), f = X(!1), p = null, m = 0, h = 0, g = null, v = null, y = 0, b = null, x = null;
	function S(e, t, n, r) {
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
		}, v?.(), a || (v = _()), document.addEventListener("pointermove", C), document.addEventListener("pointerup", A), document.addEventListener("pointercancel", A), window.addEventListener("keydown", j, !0), window.addEventListener("blur", E), a ? (document.addEventListener("touchmove", w, { passive: !1 }), document.addEventListener("contextmenu", T, !0), x = setTimeout(() => {
			if (x = null, !g?.sourceEl.isConnected) {
				M();
				return;
			}
			v = _(), D();
		}, a)) : e.preventDefault());
	}
	function C(e) {
		if (!(g?.pointerId && e.pointerId && g.pointerId !== e.pointerId)) {
			if (!o.value) {
				if (!g) return;
				let t = e.clientX - g.x, n = e.clientY - g.y;
				if (a) {
					Math.hypot(t, n) > ct && M(!0);
					return;
				}
				if (Math.hypot(t, n) < st) return;
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
		o.value && g?.pointerType === "touch" && e.cancelable && e.preventDefault();
	}
	function T(e) {
		(g || o.value) && e.preventDefault();
	}
	function E() {
		M();
	}
	function D() {
		let { sourceEl: e, x: t, y: n, item: r, group: i, index: a } = g, f = e.getBoundingClientRect();
		m = t - f.left, h = n - f.top;
		let _ = at(e), v = _;
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
		let f = c.value ? String(n(c.value)) : null, p = ut(o, e, r, f, t[l].layout, t[l].hitTest);
		p < 0 || i && !i({
			item: c.value,
			fromGroup: s.value,
			toGroup: l,
			toIndex: p
		}) || (u.value = l, d.value = p);
	}
	function A(e) {
		if (g?.pointerId && e?.pointerId && g.pointerId !== e.pointerId) return;
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
		clearTimeout(x), x = null, document.removeEventListener("pointermove", C), document.removeEventListener("pointerup", A), document.removeEventListener("pointercancel", A), window.removeEventListener("keydown", j, !0), window.removeEventListener("blur", E), document.removeEventListener("touchmove", w), document.removeEventListener("contextmenu", T, !0), p &&= (p.remove(), null), document.body.classList.remove("sortable-dragging"), o.value = !1, s.value = null, c.value = null, l.value = -1, u.value = null, d.value = -1, g = null, v?.(), v = null, t && (y = Date.now() + 250, f.value = !0, clearTimeout(b), b = setTimeout(() => {
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
		return r.layout === "grid" || !o.value ? i : ot(i, {
			getKey: n,
			sourceItem: c.value,
			removeSource: s.value === e,
			insertAt: u.value === e ? d.value : null
		});
	}
	return $e(() => {
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
var pt = "cubic-bezier(.2, 0, 0, 1)", mt = 320;
function ht() {
	let e = X("detail"), t = X(0), n = X(!1), r = 1, i = null, a = J(() => n.value ? `transform ${mt}ms ${pt}` : "none"), o = J(() => ({
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
function gt(e, t, n, r) {
	let i = [0];
	for (let a of e) i.push(i.at(-1) + (r.get(t(a)) || Math.max(1, n(a))));
	return i;
}
function _t(e, t, n, r = 6) {
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
function vt(e, t, { key: n, estimateSize: r = () => 70, threshold: i = 80, overscan: a = 6 } = {}) {
	let o = tt(/* @__PURE__ */ new Map()), s = X(0), c = X(0), l = X(null), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f = J(() => nt(e) || []), p = J(() => gt(f.value, n, r, o.value)), m = J(() => new Map(f.value.map((e, t) => [n(e), t]))), h = J(() => f.value.length > i), g = J(() => h.value ? _t(p.value, s.value, c.value || 600, a) : {
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
	}), et(() => {
		k(), y?.disconnect(), S != null && cancelAnimationFrame(S);
	}), {
		visibleItems: _,
		paddingAfter: v,
		setItemRef: O,
		totalSize: J(() => p.value.at(-1))
	};
}
//#endregion
export { U as ACTION_MENU_GAP, Ye as ACTION_MENU_MARGIN, y as AccountMenu, ve as ActionButton, q as ActionMenu, q as RowActionMenu, K as ActionMenuItem, K as RowActionItem, G as ActionMenuSubmenu, G as RowActionSubmenu, f as AddButton, d as AppDrawer, w as AppModal, Se as AppModalFrame, Fe as AppShell, p as AppSidebar, j as AppSlider, g as AvatarFrame, ye as BasePopover, i as BaseTile, ie as BlurBackdrop, Ie as ChoiceCard, We as ColorPresetPicker, D as CompactCheckbox, we as ConfirmDialog, W as ContentRow, be as DatePicker, Ee as DetailSection, ae as EditorPanel, Ze as EditorSection, r as EditorSectionTitle, N as EditorTotal, oe as FitContent, B as FloatingTooltip, te as FormActionButtons, F as FormField, Je as FormNumberInput, H as FormSelect, Ke as FormTextInput, Xe as FormTextarea, Ne as GuidedTour, k as IconNavigation, Ue as IconPicker, Oe as IconToggleButton, Ge as InlineEdit, t as LoadingIndicator, ge as LoadingState, O as ModalShell, l as MorphSheet, P as MorphTile, Qe as MorphTileHeader, T as MultiToggle, ze as OptionList, fe as PRESET_COLORS, Ve as PageReport, a as PromptDialog, a as TextPromptDialog, ee as ROW_ACTION_GAP, o as ROW_ACTION_MARGIN, Ce as RemoveButton, le as RichContent, I as RichTextEditor, je as SearchMultiSelect, n as SectionLabel, v as SectionList, Te as SegmentDonutChart, se as SidebarBrand, re as SidebarGroup, h as SidebarNavItem, b as SidebarToggle, R as SkeletonBlock, c as SlidingTabs, ke as StarRating, de as StatBar, C as TileAccentStrip, Le as TimelineGroup, u as ToggleSwitch, Me as ValueSelect, ce as applyBackdropBlur, m as backdropBlurStyle, x as blurFilter, Be as canShowHoverHint, qe as computeActionMenuPlacement, ne as computeRowActionPlacement, L as createRichNodeHtml, M as decodeRichNodePayload, e as encodeRichNodePayload, pe as escapeHtml, ue as installPointerInput, De as isMousePointer, S as isSortableGestureActive, he as isValidHexColor, He as plainTextToRichHtml, Pe as randomPreset, Ae as readRichNode, dt as reorderByDrop, E as restoreFocus, Re as sanitizeRichHtml, xe as sanitizeRichTextColor, V as sanitizeRichTextUrl, s as useContainerMorph, A as useFullscreenViewportHeight, me as useGuidedTour, _e as useIsMobile, z as useMediaQuery, ht as useSheetSubpages, ft as useSortable, vt as useVirtualList };
