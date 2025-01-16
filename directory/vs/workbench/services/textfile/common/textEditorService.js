define(
			de[719],
			he([
				1, 0, 6, 30, 59, 5, 44, 631, 23, 296, 313, 478, 628, 19, 9, 68, 22, 231,
				3, 20,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Adc = e.$zdc = void 0),
					(e.$zdc = (0, E.$Mi)("textEditorService"));
				let s = class extends f.$1c {
					constructor(y, $, v, S, I) {
						super(),
							(this.c = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.j = I),
							(this.a = new w.$Gc()),
							(this.b = i.$Io.as(C.$a1.EditorFactory).getFileEditorFactory()),
							this.m();
					}
					m() {
						this.D(
							this.j.registerEditor(
								"*",
								{
									id: C.$b1.id,
									label: C.$b1.displayName,
									detail: C.$b1.providerDisplayName,
									priority: o.RegisteredEditorPriority.builtin,
								},
								{},
								{
									createEditorInput: (y) => ({
										editor: this.createTextEditor(y),
									}),
									createUntitledEditorInput: (y) => ({
										editor: this.createTextEditor(y),
									}),
									createDiffEditorInput: (y) => ({
										editor: this.createTextEditor(y),
									}),
								},
							),
						);
					}
					async resolveTextEditor(y) {
						return this.createTextEditor(y);
					}
					createTextEditor(y) {
						if ((0, C.$o1)(y)) return this.createTextEditor(y.result);
						if ((0, C.$j1)(y)) {
							const S = this.createTextEditor(y.original),
								I = this.createTextEditor(y.modified);
							return this.f.createInstance(
								r.$GVb,
								y.label,
								y.description,
								S,
								I,
								void 0,
							);
						}
						if ((0, C.$m1)(y)) {
							const S = this.createTextEditor(y.primary),
								I = this.createTextEditor(y.secondary);
							return this.f.createInstance(u.$iY, y.label, y.description, I, S);
						}
						const $ = y;
						if (
							$.forceUntitled ||
							!$.resource ||
							$.resource.scheme === m.Schemas.untitled
						) {
							const S = {
								languageId: $.languageId,
								initialValue: $.contents,
								encoding: $.encoding,
							};
							let I;
							return (
								$.resource?.scheme === m.Schemas.untitled
									? (I = this.c.create({ untitledResource: $.resource, ...S }))
									: (I = this.c.create({
											associatedResource: $.resource,
											...S,
										})),
								this.n(I.resource, () => this.f.createInstance(h.$T1b, I))
							);
						}
						const v = y;
						if (v.resource instanceof n.URI) {
							const S = v.label || (0, c.$kh)(v.resource),
								I = v.resource,
								T = this.g.asCanonicalUri(I);
							return this.n(
								T,
								() =>
									v.forceFile || this.h.hasProvider(T)
										? this.b.createFileEditor(
												T,
												I,
												v.label,
												v.description,
												v.encoding,
												v.languageId,
												v.contents,
												this.f,
											)
										: this.f.createInstance(
												a.$S1b,
												T,
												v.label,
												v.description,
												v.languageId,
												v.contents,
											),
								(P) => {
									P instanceof h.$T1b ||
										(P instanceof a.$S1b
											? (S && P.setName(S),
												v.description && P.setDescription(v.description),
												v.languageId && P.setPreferredLanguageId(v.languageId),
												typeof v.contents == "string" &&
													P.setPreferredContents(v.contents))
											: (P.setPreferredResource(I),
												v.label && P.setPreferredName(v.label),
												v.description &&
													P.setPreferredDescription(v.description),
												v.encoding && P.setPreferredEncoding(v.encoding),
												v.languageId && P.setPreferredLanguageId(v.languageId),
												typeof v.contents == "string" &&
													P.setPreferredContents(v.contents)));
								},
							);
						}
						throw new Error(
							`ITextEditorService: Unable to create texteditor from ${JSON.stringify(y)}`,
						);
					}
					n(y, $, v) {
						let S = this.a.get(y);
						return S
							? (v?.(S), S)
							: ((S = $()),
								this.a.set(y, S),
								t.Event.once(S.onWillDispose)(() => this.a.delete(y)),
								S);
					}
				};
				(e.$Adc = s),
					(e.$Adc = s =
						Ne(
							[j(0, d.$7Y), j(1, E.$Li), j(2, g.$Vl), j(3, p.$ll), j(4, o.$E6)],
							s,
						)),
					(0, b.$lK)(e.$zdc, s, b.InstantiationType.Eager);
			},
		),
		