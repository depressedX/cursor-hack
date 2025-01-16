define(de[562], he([1, 0, 12, 54, 189]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$0Vc = E),
				(e.$$Vc = C),
				(e.$_Vc = d),
				(e.$aWc = m),
				(e.$bWc = r),
				(e.$cWc = u);
			function E(a, h, c, n) {
				const g = {
					start: { x: c.startColumn, y: c.startLineNumber + n },
					end: { x: c.endColumn - 1, y: c.endLineNumber + n },
				};
				let p = 0;
				const o = Math.ceil(c.startColumn / h);
				for (let s = 0; s < Math.min(o); s++) {
					const l = Math.min(h, c.startColumn - 1 - s * h);
					let y = 0;
					const $ = a[s];
					if (!$) break;
					for (let v = 0; v < Math.min(h, l + y); v++) {
						const S = $.getCell(v);
						if (!S) break;
						S.getWidth() === 2 && y++;
						const T = S.getChars();
						T.length > 1 && (y -= T.length - 1);
					}
					p += y;
				}
				let f = 0;
				const b = Math.ceil(c.endColumn / h);
				for (let s = Math.max(0, o - 1); s < b; s++) {
					const l = s === o - 1 ? (c.startColumn - 1 + p) % h : 0,
						y = Math.min(h, c.endColumn + p - s * h);
					let $ = 0;
					const v = a[s];
					if (!v) break;
					for (let S = l; S < Math.min(h, y + $); S++) {
						const I = v.getCell(S);
						if (!I) break;
						const T = I.getWidth(),
							P = I.getChars();
						T === 2 && $++,
							S === h - 1 && P === "" && $++,
							P.length > 1 && ($ -= P.length - 1);
					}
					f += $;
				}
				for (g.start.x += p, g.end.x += p + f; g.start.x > h; )
					(g.start.x -= h), g.start.y++;
				for (; g.end.x > h; ) (g.end.x -= h), g.end.y++;
				return g;
			}
			function C(a, h) {
				return {
					start: { x: a.start.x - 1, y: a.start.y - h - 1 },
					end: { x: a.end.x - 1, y: a.end.y - h - 1 },
				};
			}
			function d(a, h, c, n, g = !0) {
				const p = Math.max(2048, n * 2);
				c = Math.min(c, h + p);
				let o = "";
				for (let f = h; f <= c; f++) {
					const b = a.getLine(f);
					b && (o += b.translateToString(g, 0, n));
				}
				return o;
			}
			function m(a, h, c, n) {
				let g,
					p = -1,
					o = -1;
				const f = [];
				for (let b = h; b <= c; b++) {
					const s = a.getLine(b);
					if (s)
						for (let l = 0; l < n; l++) {
							const y = s.getCell(l);
							if (!y) break;
							const $ =
									y.isBold() |
									y.isInverse() |
									y.isStrikethrough() |
									y.isUnderline(),
								v = y.isDim() | y.isItalic();
							if (p === -1 || o === -1) g = { x: l, y: b };
							else if (p !== $ || o !== v) {
								const S = { x: l, y: b };
								f.push({ start: g, end: S }), (g = { x: l, y: b });
							}
							(p = $), (o = v);
						}
				}
				return f;
			}
			function r(a, h, c, n, g) {
				const p = a
					.get(w.TerminalCapability.CommandDetection)
					?.getCwdForLine(h);
				if (
					(g.trace("terminalLinkHelpers#updateLinkWithRelativeCwd cwd", p), !p)
				)
					return;
				const o = [],
					f = n.sep;
				if (!c.includes(f)) o.push(n.resolve(p + f + c));
				else {
					let b = 0,
						s = 0;
					const l = p.split(f).reverse(),
						y = c.split(f);
					for (
						;
						s < l.length &&
						(o.push(n.resolve(p + f + y.slice(b).join(f))), l[s] === y[s]);
					) {
						b++;
						s++;
					}
				}
				return o;
			}
			function u(a) {
				return a === t.OperatingSystem.Windows ? i.$kc : i.$lc;
			}
		}),
		