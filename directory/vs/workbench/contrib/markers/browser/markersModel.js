import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/core/range.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/map.js';
import '../../../../base/common/event.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/strings.js';
import '../../../../platform/markers/common/markerService.js';
define(
			de[988],
			he([1, 0, 19, 17, 90, 24, 59, 6, 136, 37, 667]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wRc = e.$vRc = e.$uRc = e.$tRc = e.$sRc = void 0),
					(e.$rRc = a);
				function a(f, b) {
					return t.$dh.compare(f.resource, b.resource);
				}
				function h(f, b) {
					const [s] = f.markers,
						[l] = b.markers;
					let y = 0;
					return (
						s &&
							l &&
							(y = w.MarkerSeverity.compare(
								s.marker.severity,
								l.marker.severity,
							)),
						y === 0 &&
							(y =
								f.path.localeCompare(b.path) || f.name.localeCompare(b.name)),
						y
					);
				}
				class c {
					constructor(b, s) {
						(this.id = b),
							(this.resource = s),
							(this.c = new C.$Gc()),
							(this.e = 0),
							(this.path = this.resource.fsPath),
							(this.name = (0, t.$kh)(this.resource));
					}
					get markers() {
						return (
							this.d || (this.d = [...this.c.values()].flat().sort(c.f)), this.d
						);
					}
					has(b) {
						return this.c.has(b);
					}
					set(b, s) {
						this.delete(b),
							(0, E.$Pb)(s) &&
								(this.c.set(b, s), (this.e += s.length), (this.d = void 0));
					}
					delete(b) {
						const s = this.c.get(b);
						s && ((this.e -= s.length), (this.d = void 0), this.c.delete(b));
					}
					get total() {
						return this.e;
					}
					static f(b, s) {
						return (
							w.MarkerSeverity.compare(b.marker.severity, s.marker.severity) ||
							t.$dh.compare(b.resource, s.resource) ||
							i.$iL.compareRangesUsingStarts(b.marker, s.marker)
						);
					}
				}
				e.$sRc = c;
				class n {
					get resource() {
						return this.marker.resource;
					}
					get range() {
						return this.marker;
					}
					get lines() {
						return this.c || (this.c = (0, r.$zf)(this.marker.message)), this.c;
					}
					constructor(b, s, l = []) {
						(this.id = b), (this.marker = s), (this.relatedInformation = l);
					}
					toString() {
						return JSON.stringify(
							{
								...this.marker,
								resource: this.marker.resource.path,
								relatedInformation: this.relatedInformation.length
									? this.relatedInformation.map((b) => ({
											...b.raw,
											resource: b.raw.resource.path,
										}))
									: void 0,
							},
							null,
							"	",
						);
					}
				}
				e.$tRc = n;
				class g extends n {
					constructor(b, s, l, y, $, v) {
						super(b.id, b.marker, b.relatedInformation),
							(this.sourceMatches = s),
							(this.codeMatches = l),
							(this.messageMatches = y),
							(this.fileMatches = $),
							(this.ownerMatches = v);
					}
				}
				e.$uRc = g;
				class p {
					constructor(b, s, l) {
						(this.id = b), (this.marker = s), (this.raw = l);
					}
				}
				e.$vRc = p;
				class o {
					get resourceMarkers() {
						return this.d || (this.d = [...this.f.values()].sort(h)), this.d;
					}
					constructor() {
						(this.d = void 0),
							(this.e = new d.$re()),
							(this.onDidChange = this.e.event),
							(this.g = 0),
							(this.f = new Map());
					}
					reset() {
						const b = new Set();
						for (const s of this.f.values()) b.add(s);
						this.f.clear(),
							(this.g = 0),
							this.e.fire({ removed: b, added: new Set(), updated: new Set() });
					}
					get total() {
						return this.g;
					}
					getResourceMarkers(b) {
						return this.f.get(t.$dh.getComparisonKey(b, !0)) ?? null;
					}
					setResourceMarkers(b) {
						const s = {
							added: new Set(),
							removed: new Set(),
							updated: new Set(),
						};
						for (const [l, y] of b) {
							if (u.$jic.has(l.scheme)) continue;
							const $ = t.$dh.getComparisonKey(l, !0);
							let v = this.f.get($);
							if ((0, E.$Pb)(y)) {
								if (v) s.updated.add(v);
								else {
									const T = this.h(l.toString());
									(v = new c(T, l.with({ fragment: null }))),
										this.f.set($, v),
										s.added.add(v);
								}
								const S = new Map(),
									I = y.map((T) => {
										const P = w.IMarkerData.makeKey(T),
											k = S.get(P) || 0;
										S.set(P, k + 1);
										const L = this.h(v.id, P, k, T.resource.toString());
										let D;
										return (
											T.relatedInformation &&
												(D = T.relatedInformation.map(
													(M, N) =>
														new p(
															this.h(
																L,
																M.resource.toString(),
																M.startLineNumber,
																M.startColumn,
																M.endLineNumber,
																M.endColumn,
																N,
															),
															T,
															M,
														),
												)),
											new n(L, T, D)
										);
									});
								(this.g -= v.total), v.set(l, I), (this.g += v.total);
							} else
								v &&
									((this.g -= v.total),
									v.delete(l),
									(this.g += v.total),
									v.total === 0
										? (this.f.delete($), s.removed.add(v))
										: s.updated.add(v));
						}
						(this.d = void 0),
							(s.added.size || s.removed.size || s.updated.size) &&
								this.e.fire(s);
					}
					h(...b) {
						const s = new m.$Ej();
						for (const l of b) s.hash(l);
						return `${s.value}`;
					}
					dispose() {
						this.e.dispose(), this.f.clear();
					}
				}
				e.$wRc = o;
			},
		),
		