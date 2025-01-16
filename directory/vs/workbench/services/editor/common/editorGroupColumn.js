define(de[446], he([1, 0, 66, 18]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$a8 = w),
				(e.$b8 = E);
			function w(C, d, m = i.$JY) {
				if (m === i.$JY || m === i.$KY) return m;
				let r = C.getGroups(t.GroupsOrder.GRID_APPEARANCE)[m];
				if (!r && m < 9) {
					for (let u = 0; u <= m; u++) {
						const a = C.getGroups(t.GroupsOrder.GRID_APPEARANCE);
						a[u] || C.addGroup(a[u - 1], (0, t.$HY)(d));
					}
					r = C.getGroups(t.GroupsOrder.GRID_APPEARANCE)[m];
				}
				return r?.id ?? i.$KY;
			}
			function E(C, d) {
				const m = typeof d == "number" ? C.getGroup(d) : d;
				return C.getGroups(t.GroupsOrder.GRID_APPEARANCE).indexOf(
					m ?? C.activeGroup,
				);
			}
		}),
		define(
			de[1291],
			he([1, 0, 10, 116, 44, 66, 18]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ydc = d);
				function d(c, n, g) {
					const p = c.get(E.$EY),
						o = c.get(t.$gj),
						f = r(n, g, p, o);
					return f instanceof Promise
						? f.then((b) => m(b, n, g, p))
						: m(f, n, g, p);
				}
				function m(c, n, g, p) {
					let o;
					return (
						p.activeGroup !== c &&
							n.options &&
							!n.options.inactive &&
							n.options.preserveFocus &&
							typeof n.options.activation != "number" &&
							g !== C.$KY &&
							(o = i.EditorActivation.ACTIVATE),
						[c, o]
					);
				}
				function r(c, n, g, p) {
					let o;
					const f = (0, w.$v1)(c) ? c.editor : c,
						b = c.options;
					if (n && typeof n != "number") o = n;
					else if (typeof n == "number" && n >= 0) o = g.getGroup(n);
					else if (n === C.$KY) {
						const s = (0, E.$HY)(p);
						let l = g.findGroup({ direction: s });
						(!l || u(l, f)) && (l = g.addGroup(g.activeGroup, s)), (o = l);
					} else if (n === C.$LY)
						o = g.createAuxiliaryEditorPart().then((s) => s.activeGroup);
					else if (!b || typeof b.index != "number") {
						const s = g.getGroups(E.GroupsOrder.MOST_RECENTLY_ACTIVE);
						if (b?.revealIfVisible) {
							for (const l of s)
								if (a(l, f)) {
									o = l;
									break;
								}
						}
						if (
							!o &&
							(b?.revealIfOpened ||
								p.getValue("workbench.editor.revealIfOpen") ||
								((0, w.$r1)(f) &&
									f.hasCapability(w.EditorInputCapabilities.Singleton)))
						) {
							let l, y;
							for (const $ of s)
								if (
									(h($, f) && (y || (y = $), !l && $.isActive(f) && (l = $)),
									y && l)
								)
									break;
							o = l || y;
						}
					}
					if (!o) {
						let s = g.activeGroup;
						if (u(s, f)) {
							for (const l of g.getGroups(E.GroupsOrder.MOST_RECENTLY_ACTIVE))
								if (!u(l, f)) {
									s = l;
									break;
								}
							u(s, f) ? (o = g.addGroup(s, (0, E.$HY)(p))) : (o = s);
						} else o = s;
					}
					return o;
				}
				function u(c, n) {
					return !(!c.isLocked || h(c, n));
				}
				function a(c, n) {
					return c.activeEditor ? c.activeEditor.matches(n) : !1;
				}
				function h(c, n) {
					for (const g of c.editors) if (g.matches(n)) return !0;
					return !1;
				}
			},
		),
		