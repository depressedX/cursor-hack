import '../../../../require.js';
import '../../../../exports.js';
import './uriIdentity.js';
import '../../instantiation/common/extensions.js';
import '../../files/common/files.js';
import '../../../base/common/resources.js';
import '../../../base/common/skipList.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
define(
			de[2880],
			he([1, 0, 68, 20, 22, 19, 2223, 6, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uriIdentity*/,
 i /*extensions*/,
 w /*files*/,
 E /*resources*/,
 C /*skipList*/,
 d /*event*/,
 m /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oK = void 0);
				class r {
					static {
						this._clock = 0;
					}
					constructor(h) {
						(this.uri = h), (this.time = r._clock++);
					}
					touch() {
						return (this.time = r._clock++), this;
					}
				}
				let u = class {
					constructor(h) {
						(this.g = h), (this.c = new m.$Zc()), (this.f = 2 ** 16);
						const c = new Map(),
							n = (g) => {
								let p = c.get(g.scheme);
								return (
									p === void 0 &&
										((p =
											h.hasProvider(g) &&
											!this.g.hasCapability(
												g,
												w.FileSystemProviderCapabilities.PathCaseSensitive,
											)),
										c.set(g.scheme, p)),
									p
								);
							};
						this.c.add(
							d.Event.any(
								h.onDidChangeFileSystemProviderRegistrations,
								h.onDidChangeFileSystemProviderCapabilities,
							)((g) => {
								c.delete(g.scheme);
							}),
						),
							(this.extUri = new E.$ch(n)),
							(this.d = new C.$nK(
								(g, p) => this.extUri.compare(g, p, !0),
								this.f,
							));
					}
					dispose() {
						this.c.dispose(), this.d.clear();
					}
					asCanonicalUri(h) {
						this.g.hasProvider(h) && (h = (0, E.$oh)(h));
						const c = this.d.get(h);
						return c
							? c.touch().uri.with({ fragment: h.fragment })
							: (this.d.set(h, new r(h)), this.h(), h);
					}
					h() {
						if (this.d.size < this.f) return;
						const h = [...this.d.entries()].sort((n, g) =>
							n[1].time < g[1].time ? 1 : n[1].time > g[1].time ? -1 : 0,
						);
						(r._clock = 0), this.d.clear();
						const c = this.f * 0.5;
						for (let n = 0; n < c; n++) this.d.set(h[n][0], h[n][1].touch());
					}
				};
				(e.$oK = u),
					(e.$oK = u = Ne([j(0, w.$ll)], u)),
					(0, i.$lK)(t.$Vl, u, i.InstantiationType.Delayed);
			},
		)
