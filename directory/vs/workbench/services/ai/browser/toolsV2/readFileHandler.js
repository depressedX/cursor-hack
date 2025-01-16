define(
			de[4362],
			he([
				1, 0, 124, 33, 3, 22, 5, 63, 25, 721, 819, 287, 398, 241, 42, 821, 54,
				271,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4yc = void 0);
				let f = class extends h.$Xyc {
					constructor(l, y, $, v, S, I, T, P) {
						super(),
							(this.b = l),
							(this.c = y),
							(this.d = $),
							(this.e = v),
							(this.g = S),
							(this.h = I),
							(this.i = T),
							(this.j = P),
							(this.a = this.h.createInstance(r.$S9b));
					}
					async k(l, y) {
						const $ = new i.$Ce();
						try {
							const v = await this.a.doGetPicksPublic(
								l,
								{
									enableEditorSymbolSearch: !1,
									excludeNotepads: !0,
									excludeSemanticSearch: !0,
									excludeCursorIgnore: !0,
								},
								new w.$Zc(),
								$.token,
							);
							let S = [];
							if ((0, u.$R_b)(v)) {
								const [I, T] = await Promise.all([
									Promise.resolve(v.picks),
									v.additionalPicks,
								]);
								S = [...b(I), ...b(T)].map((k) => k.uri);
							} else if (v instanceof Promise) {
								const I = await v;
								S = b(I).map((P) => P.uri);
							} else S = b(v).map((T) => T.uri);
							return S.filter(
								(I) => I.scheme === "file" || I.scheme === "vscode-remote",
							)
								.slice(0, y)
								.map((I) => this.i.asRelativePath(I));
						} catch (v) {
							return console.error("Error finding similar files:", v), [];
						} finally {
							$.dispose();
						}
					}
					async call(l, y, $) {
						if (!l)
							throw new Error(
								"No read file parameters provided. Need to give at least the path.",
							);
						const v = await this.b.getMagicURIForText(l.relativeWorkspacePath);
						if (v && this.j.shouldIgnoreUri(v))
							throw new Error(
								`Could not find file ${l.relativeWorkspacePath} in the workspace.`,
							);
						if (!v) {
							const k = await this.k(l.relativeWorkspacePath, 3),
								L =
									k.length > 0
										? `Could not find file '${l.relativeWorkspacePath}'. Did you mean one of:
${k
	.map((D) => `- ${D}`)
	.join(`
`)}`
										: `Could not find file '${l.relativeWorkspacePath}' in the workspace.`;
							throw new g.$3yc({
								clientVisibleErrorMessage: L,
								modelVisibleErrorMessage: L,
								actualErrorMessage: `File not found: ${l.relativeWorkspacePath}`,
							});
						}
						const S =
								this.e.getCachedConfig("readFilesToolMaxFileSizeInBytes") ??
								2e6,
							I = (S / 1e6).toFixed(2),
							T = await this.c.stat(v);
						if (T.size > S)
							throw new g.$3yc({
								clientVisibleErrorMessage: `File is too large, >${I}MB`,
								modelVisibleErrorMessage: `The file is too large to read, was >${I}MB`,
								actualErrorMessage: `File is too large to read, was >${I}MB, size: ${T.size} bytes`,
							});
						let P;
						try {
							P = await this.d.createModelReference(v);
							const k = P.object.textEditorModel.getValue(),
								L = k.split(`
`),
								D = "readFilesToolMaxLines",
								M = "readFileToolMaxChars";
							this.e.maybeRefreshConfig(D), this.e.maybeRefreshConfig(M);
							const N = this.e.getCachedConfig(D) ?? 250,
								A = this.e.getCachedConfig(M) ?? 1e5,
								R = !(l.readEntireFile && l.fileIsAllowedToBeReadEntirely),
								O = l.readEntireFile && !l.fileIsAllowedToBeReadEntirely;
							let B = !1;
							if (R) {
								let U,
									z,
									F,
									x = !1;
								O
									? ((U = l.startLineOneIndexed ?? 1),
										(z = l.endLineOneIndexedInclusive ?? N + U - 1),
										(F = !1))
									: l.endLineOneIndexedInclusive === void 0 ||
											l.startLineOneIndexed === void 0
										? ((x = !0), (U = 1), (z = N), (F = !1))
										: l.endLineOneIndexedInclusive - l.startLineOneIndexed > N
											? ((U = l.startLineOneIndexed),
												(z = l.startLineOneIndexed + N),
												(F = !0))
											: ((U = l.startLineOneIndexed),
												(z = l.endLineOneIndexedInclusive),
												(F = !1));
								const H = Math.max(U, 1),
									q = Math.min(z, L.length);
								let V = L.slice(H - 1, q).join(`
`);
								return (
									V.length > A &&
										((B = !0),
										(V = V.slice(0, A)),
										(V = V.split(`
`)
											.slice(0, -1)
											.join(`
`))),
									new t.$5x({
										contents: V,
										didDowngradeToLineRange: O,
										didShortenLineRange: F,
										didShortenCharRange: B,
										didSetDefaultLineRange: x,
										fullFileContents: k,
										startLineOneIndexed: H,
										endLineOneIndexedInclusive: q,
										relativeWorkspacePath: l.relativeWorkspacePath,
									})
								);
							} else {
								let U = k;
								return (
									U.length > A &&
										((B = !0),
										(U = U.slice(0, A)),
										(U = U.split(`
`)
											.slice(0, -1)
											.join(`
`))),
									new t.$5x({
										contents: U,
										fullFileContents: k,
										didDowngradeToLineRange: !1,
										didShortenCharRange: B,
									})
								);
							}
						} finally {
							P?.dispose();
						}
					}
				};
				(e.$4yc = f),
					(e.$4yc = f =
						Ne(
							[
								j(0, c.$q8b),
								j(1, E.$ll),
								j(2, n.$MO),
								j(3, a.$H7b),
								j(4, d.$DJ),
								j(5, C.$Li),
								j(6, m.$Vi),
								j(7, o.$Q9b),
							],
							f,
						));
				function b(s) {
					return (
						(0, u.$S_b)(s) && (s = s.items),
						s
							.filter((l) => "resource" in l && l.resource !== void 0)
							.map((l) => ({
								uri: l.resource,
								fileName: (0, p.$sc)(l.resource.fsPath),
								isCurrentFile: !1,
								labelMatches: l.highlights?.label || [],
								descriptionMatches: l.highlights?.description || [],
							}))
					);
				}
			},
		),
		