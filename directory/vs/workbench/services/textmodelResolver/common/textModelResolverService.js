import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/model.js';
import '../../../common/editor/textResourceEditorModel.js';
import '../../textfile/common/textfiles.js';
import '../../../../base/common/network.js';
import '../../../../editor/common/services/resolverService.js';
import '../../textfile/common/textFileEditorModel.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../editor/common/services/modelUndoRedoParticipant.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../untitled/common/untitledTextEditorModel.js';
define(
			de[3875],
			he([
				1, 0, 9, 5, 3, 67, 1827, 85, 23, 42, 1920, 22, 20, 155, 2875, 68, 1339,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zvc = void 0);
				let o = class extends w.$6c {
					constructor(s, l, y, $) {
						super(),
							(this.h = s),
							(this.j = l),
							(this.m = y),
							(this.n = $),
							(this.f = new Map()),
							(this.g = new Set());
					}
					b(s) {
						return this.r(s);
					}
					async r(s, l) {
						this.g.delete(s);
						const y = t.URI.parse(s);
						if (y.scheme === m.Schemas.inMemory) {
							if (!this.n.getModel(y))
								throw new Error(`Unable to resolve inMemory resource ${s}`);
							const v = this.h.createInstance(C.$Q1b, y);
							if (this.s(v, s)) return v;
						}
						if (y.scheme === m.Schemas.untitled) {
							const $ = await this.j.untitled.resolve({ untitledResource: y });
							if (this.s($, s)) return $;
						}
						if (this.m.hasProvider(y)) {
							const $ = await this.j.files.resolve(y, {
								reason: d.TextFileResolveReason.REFERENCE,
							});
							if (this.s($, s)) return $;
						}
						if (this.f.has(y.scheme)) {
							await this.u(s);
							const $ = this.h.createInstance(C.$Q1b, y);
							if (this.s($, s)) return $;
						}
						if (!l)
							return await this.m.activateProvider(y.scheme), this.r(s, !0);
						throw new Error(`Unable to resolve resource ${s}`);
					}
					s(s, l) {
						if ((0, r.$NO)(s)) return !0;
						throw new Error(`Unable to resolve resource ${l}`);
					}
					c(s, l) {
						t.URI.parse(s).scheme !== m.Schemas.inMemory &&
							(this.g.add(s),
							(async () => {
								try {
									const $ = await l;
									if (
										!this.g.has(s) ||
										($ instanceof u.$xvc
											? await this.j.files.canDispose($)
											: $ instanceof p.$6Y &&
												(await this.j.untitled.canDispose($)),
										!this.g.has(s))
									)
										return;
									$.dispose();
								} catch {
								} finally {
									this.g.delete(s);
								}
							})());
					}
					registerTextModelContentProvider(s, l) {
						let y = this.f.get(s);
						return (
							y || ((y = []), this.f.set(s, y)),
							y.unshift(l),
							(0, w.$Yc)(() => {
								const $ = this.f.get(s);
								if (!$) return;
								const v = $.indexOf(l);
								v !== -1 &&
									($.splice(v, 1), $.length === 0 && this.f.delete(s));
							})
						);
					}
					hasTextModelContentProvider(s) {
						return this.f.get(s) !== void 0;
					}
					async u(s) {
						const l = t.URI.parse(s),
							y = this.f.get(l.scheme) || [];
						for (const $ of y) {
							const v = await $.provideTextContent(l);
							if (v) return v;
						}
						throw new Error(
							`Unable to resolve text model content for resource ${s}`,
						);
					}
				};
				o = Ne([j(0, i.$Li), j(1, d.$kZ), j(2, a.$ll), j(3, E.$QO)], o);
				let f = class extends w.$1c {
					get b() {
						return this.a || (this.a = this.g.createInstance(o)), this.a;
					}
					get f() {
						return this.c || (this.c = new w.$7c(this.b)), this.c;
					}
					constructor(s, l, y, $, v) {
						super(),
							(this.g = s),
							(this.h = l),
							(this.j = y),
							(this.m = $),
							(this.n = v),
							(this.a = void 0),
							(this.c = void 0),
							this.D(new n.$yvc(this.m, this, this.j));
					}
					async createModelReference(s) {
						return (
							(s = this.n.asCanonicalUri(s)), await this.f.acquire(s.toString())
						);
					}
					registerTextModelContentProvider(s, l) {
						return this.b.registerTextModelContentProvider(s, l);
					}
					canHandleResource(s) {
						return this.h.hasProvider(s) ||
							s.scheme === m.Schemas.untitled ||
							s.scheme === m.Schemas.inMemory
							? !0
							: this.b.hasTextModelContentProvider(s.scheme);
					}
				};
				(e.$zvc = f),
					(e.$zvc = f =
						Ne(
							[j(0, i.$Li), j(1, a.$ll), j(2, c.$GN), j(3, E.$QO), j(4, g.$Vl)],
							f,
						)),
					(0, h.$lK)(r.$MO, f, h.InstantiationType.Delayed);
			},
		),
		