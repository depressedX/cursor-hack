import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../common/editor.js';
import '../../path/common/pathService.js';
import './storedFileWorkingCopy.js';
import './workingCopyHistory.js';
import './workingCopyService.js';
import '../../../../base/common/network.js';
import '../../../common/resources.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/files/common/files.js';
define(
			de[3913],
			he([
				1, 0, 4, 15, 33, 3, 59, 10, 155, 68, 44, 165, 1052, 717, 227, 23, 970,
				25, 22,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$E5c = void 0);
				let s = class extends E.$1c {
					static {
						b = this;
					}
					static {
						this.a = {
							ENABLED: "workbench.localHistory.enabled",
							SIZE_LIMIT: "workbench.localHistory.maxFileSize",
							EXCLUDES: "workbench.localHistory.exclude",
						};
					}
					static {
						this.b = u.$p1.registerSource(
							"undoRedo.source",
							(0, t.localize)(13153, null),
						);
					}
					constructor(y, $, v, S, I, T, P, k) {
						super(),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.r = S),
							(this.s = I),
							(this.t = T),
							(this.u = P),
							(this.w = k),
							(this.c = this.D(new i.$Sh(c.$b2c))),
							(this.f = this.D(
								new i.$6h(() =>
									this.D(
										new p.$0Y(
											(D) => this.s.getValue(b.a.EXCLUDES, { resource: D }),
											(D) => D.affectsConfiguration(b.a.EXCLUDES),
											this.u,
											this.s,
										),
									),
								),
							)),
							(this.g = new C.$Gc((L) => this.q.extUri.getComparisonKey(L))),
							(this.h = new C.$Gc((L) => this.q.extUri.getComparisonKey(L))),
							(this.j = new C.$Gc((L) => this.q.extUri.getComparisonKey(L))),
							this.y();
					}
					y() {
						this.D(this.w.onDidRunOperation((y) => this.z(y))),
							this.D(this.m.onDidChangeContent((y) => this.C(y))),
							this.D(this.m.onDidSave((y) => this.G(y)));
					}
					async z(y) {
						if (!this.J(y)) return;
						const $ = y.resource,
							v = y.target.resource,
							S = await this.n.moveEntries($, v);
						for (const I of S) {
							const T = this.F(I);
							this.j.set(I, T);
						}
					}
					C(y) {
						const $ = this.F(y.resource);
						this.h.set(y.resource, $ + 1);
					}
					F(y) {
						return this.h.get(y) || 0;
					}
					G(y) {
						if (!this.I(y)) return;
						const $ = this.F(y.workingCopy.resource);
						if (this.j.get(y.workingCopy.resource) === $) return;
						this.g.get(y.workingCopy.resource)?.dispose(!0);
						const v = new w.$Ce();
						this.g.set(y.workingCopy.resource, v),
							this.c.queue(async () => {
								if (v.token.isCancellationRequested) return;
								const S = this.F(y.workingCopy.resource);
								let I = y.source;
								y.source || (I = this.H(y)),
									await this.n.addEntry(
										{
											resource: y.workingCopy.resource,
											source: I,
											timestamp: y.stat.mtime,
										},
										v.token,
									),
									this.j.set(y.workingCopy.resource, S),
									!v.token.isCancellationRequested &&
										this.g.delete(y.workingCopy.resource);
							});
					}
					H(y) {
						const $ = this.t.getLastElement(y.workingCopy.resource);
						if ($)
							return $.code === "undoredo.textBufferEdit" ? void 0 : $.label;
						const v = this.t.getElements(y.workingCopy.resource);
						if (v.future.length > 0 || v.past.length > 0) return b.b;
					}
					I(y) {
						return (0, h.$fZ)(y) ? this.L(y.workingCopy.resource, y.stat) : !1;
					}
					J(y) {
						return y.isOperation(f.FileOperation.MOVE)
							? this.L(y.target.resource, y.target)
							: !1;
					}
					L(y, $) {
						if (
							y.scheme !== this.r.defaultUriScheme &&
							y.scheme !== g.Schemas.vscodeUserData &&
							y.scheme !== g.Schemas.inMemory
						)
							return !1;
						const v = 1024 * this.s.getValue(b.a.SIZE_LIMIT, { resource: y });
						return $.size > v ||
							this.s.getValue(b.a.ENABLED, { resource: y }) === !1
							? !1
							: !this.f.value.matches(y);
					}
				};
				(e.$E5c = s),
					(e.$E5c =
						s =
						b =
							Ne(
								[
									j(0, n.$gY),
									j(1, c.$a2c),
									j(2, r.$Vl),
									j(3, a.$I8),
									j(4, d.$gj),
									j(5, m.$GN),
									j(6, o.$Vi),
									j(7, f.$ll),
								],
								s,
							));
			},
		),
		