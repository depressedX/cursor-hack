import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/linkedList.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/uri.js';
import '../../../common/core/range.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/configuration/common/configuration.js';
define(
			de[1622],
			he([1, 0, 24, 6, 3, 273, 37, 9, 17, 20, 5, 90, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1hc = e.$Zhc = e.$Yhc = void 0);
				class c {
					constructor(o, f, b) {
						(this.marker = o), (this.index = f), (this.total = b);
					}
				}
				e.$Yhc = c;
				let n = class {
					constructor(o, f, b) {
						(this.h = f),
							(this.j = b),
							(this.c = new i.$re()),
							(this.onDidChange = this.c.event),
							(this.e = new w.$Zc()),
							(this.f = []),
							(this.g = -1),
							d.URI.isUri(o)
								? (this.d = ($) => $.toString() === o.toString())
								: o && (this.d = o);
						const s = this.j.getValue("problems.sortOrder"),
							l = ($, v) => {
								let S = (0, C.$Ff)(
									$.resource.toString(),
									v.resource.toString(),
								);
								return (
									S === 0 &&
										(s === "position"
											? (S =
													m.$iL.compareRangesUsingStarts($, v) ||
													a.MarkerSeverity.compare($.severity, v.severity))
											: (S =
													a.MarkerSeverity.compare($.severity, v.severity) ||
													m.$iL.compareRangesUsingStarts($, v))),
									S
								);
							},
							y = () => {
								(this.f = this.h.read({
									resource: d.URI.isUri(o) ? o : void 0,
									severities:
										a.MarkerSeverity.Error |
										a.MarkerSeverity.Warning |
										a.MarkerSeverity.Info |
										a.MarkerSeverity.AI,
								})),
									typeof o == "function" &&
										(this.f = this.f.filter(($) => this.d($.resource))),
									this.f.sort(l);
							};
						y(),
							this.e.add(
								f.onMarkerChanged(($) => {
									(!this.d || $.some((v) => this.d(v))) &&
										(y(), (this.g = -1), this.c.fire());
								}),
							);
					}
					dispose() {
						this.e.dispose(), this.c.dispose();
					}
					matches(o) {
						return !this.d && !o ? !0 : !this.d || !o ? !1 : this.d(o);
					}
					get selected() {
						const o = this.f[this.g];
						return o && new c(o, this.g + 1, this.f.length);
					}
					k(o, f, b, s) {
						let l = !1,
							y = this.f.findIndex(
								($) => $.resource.toString() === o.uri.toString(),
							);
						y < 0 &&
							((y = (0, t.$Ab)(this.f, { resource: o.uri }, ($, v) =>
								(0, C.$Ff)($.resource.toString(), v.resource.toString()),
							)),
							y < 0 && (y = ~y));
						for (let $ = y; $ < this.f.length; $++) {
							let v = m.$iL.lift(this.f[$]);
							if (v.isEmpty()) {
								const S = o.getWordAtPosition(v.getStartPosition());
								S &&
									(v = new m.$iL(
										v.startLineNumber,
										S.startColumn,
										v.startLineNumber,
										S.endColumn,
									));
							}
							if (
								f &&
								(v.containsPosition(f) ||
									(!s && f.isBeforeOrEqual(v.getStartPosition())))
							) {
								(this.g = $), (l = !0);
								break;
							}
							if (this.f[$].resource.toString() !== o.uri.toString()) break;
						}
						if (!l) {
							if (s) return this.k(o, f, b, !1);
							this.g = b ? 0 : this.f.length - 1;
						}
						this.g < 0 && (this.g = this.f.length - 1);
					}
					resetIndex() {
						this.g = -1;
					}
					move(o, f, b, s) {
						if (this.f.length === 0) return !1;
						const l = this.g;
						return (
							this.g === -1
								? this.k(f, b, o, s)
								: o
									? (this.g = (this.g + 1) % this.f.length)
									: o ||
										(this.g = (this.g - 1 + this.f.length) % this.f.length),
							l !== this.g
						);
					}
					find(o, f) {
						let b = this.f.findIndex(
							(s) => s.resource.toString() === o.toString(),
						);
						if (!(b < 0)) {
							for (; b < this.f.length; b++)
								if (m.$iL.containsPosition(this.f[b], f))
									return new c(this.f[b], b + 1, this.f.length);
						}
					}
				};
				(e.$Zhc = n),
					(e.$Zhc = n = Ne([j(1, a.$aM), j(2, h.$gj)], n)),
					(e.$1hc = (0, u.$Mi)("IMarkerNavigationService"));
				let g = class {
					constructor(o, f) {
						(this.d = o), (this.e = f), (this.c = new E.$$c());
					}
					registerProvider(o) {
						const f = this.c.unshift(o);
						return (0, w.$Yc)(() => f());
					}
					getMarkerList(o) {
						for (const f of this.c) {
							const b = f.getMarkerList(o);
							if (b) return b;
						}
						return new n(o, this.d, this.e);
					}
				};
				(g = Ne([j(0, a.$aM), j(1, h.$gj)], g)),
					(0, r.$lK)(e.$1hc, g, r.InstantiationType.Delayed);
			},
		),
		