import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/network.js';
import '../../../browser/editorExtensions.js';
import '../../../common/services/languageFeatures.js';
import './referencesModel.js';
import '../../../../platform/tracing/common/tracing.js';
define(
			de[414],
			he([1, 0, 24, 33, 29, 23, 46, 69, 541, 216]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$POb = h),
					(e.$QOb = c),
					(e.$ROb = n),
					(e.$SOb = g),
					(e.$TOb = p),
					(e.$UOb = o);
				function u(f, b) {
					return b.uri.scheme === f.uri.scheme
						? !0
						: !(0, E.$Wg)(
								b.uri,
								E.Schemas.walkThroughSnippet,
								E.Schemas.vscodeChatCodeBlock,
								E.Schemas.vscodeChatCodeCompareBlock,
							);
				}
				async function a(f, b, s, l, y) {
					const v = s.ordered(f, l).map((I) =>
							Promise.resolve(y(I, f, b)).then(void 0, (T) => {
								(0, w.$5)(T);
							}),
						),
						S = await Promise.all(v);
					return (0, t.$Lb)(S.flat()).filter((I) => u(f, I));
				}
				function h(f, b, s, l, y) {
					return (0, r.$JOb)("gotoSymbol.getDefinitionsAtPosition", () =>
						a(b, s, f, l, ($, v, S) => $.provideDefinition(v, S, y)),
					);
				}
				function c(f, b, s, l, y) {
					return (0, r.$JOb)("gotoSymbol.getDeclarationsAtPosition", () =>
						a(b, s, f, l, ($, v, S) => $.provideDeclaration(v, S, y)),
					);
				}
				function n(f, b, s, l, y) {
					return (0, r.$JOb)("gotoSymbol.getImplementationsAtPosition", () =>
						a(b, s, f, l, ($, v, S) => $.provideImplementation(v, S, y)),
					);
				}
				function g(f, b, s, l, y) {
					return (0, r.$JOb)("gotoSymbol.getTypeDefinitionsAtPosition", () =>
						a(b, s, f, l, ($, v, S) => $.provideTypeDefinition(v, S, y)),
					);
				}
				function p(f, b, s, l, y, $) {
					return (0, r.$JOb)("gotoSymbol.getReferencesAtPosition", () =>
						a(b, s, f, y, async (v, S, I) => {
							const T = (
								await v.provideReferences(S, I, { includeDeclaration: !0 }, $)
							)?.filter((k) => u(S, k));
							if (!l || !T || T.length !== 2) return T;
							const P = (
								await v.provideReferences(S, I, { includeDeclaration: !1 }, $)
							)?.filter((k) => u(S, k));
							return P && P.length === 1 ? P : T;
						}),
					);
				}
				async function o(f) {
					const b = await f(),
						s = new m.$pNb(b, ""),
						l = s.references.map((y) => y.link);
					return s.dispose(), l;
				}
				(0, C.$ltb)("_executeDefinitionProvider", (f, b, s) => {
					const l = f.get(d.$k3),
						y = h(l.definitionProvider, b, s, !1, i.CancellationToken.None);
					return o(() => y);
				}),
					(0, C.$ltb)("_executeDefinitionProvider_recursive", (f, b, s) => {
						const l = f.get(d.$k3),
							y = h(l.definitionProvider, b, s, !0, i.CancellationToken.None);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeTypeDefinitionProvider", (f, b, s) => {
						const l = f.get(d.$k3),
							y = g(
								l.typeDefinitionProvider,
								b,
								s,
								!1,
								i.CancellationToken.None,
							);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeTypeDefinitionProvider_recursive", (f, b, s) => {
						const l = f.get(d.$k3),
							y = g(
								l.typeDefinitionProvider,
								b,
								s,
								!0,
								i.CancellationToken.None,
							);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeDeclarationProvider", (f, b, s) => {
						const l = f.get(d.$k3),
							y = c(l.declarationProvider, b, s, !1, i.CancellationToken.None);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeDeclarationProvider_recursive", (f, b, s) => {
						const l = f.get(d.$k3),
							y = c(l.declarationProvider, b, s, !0, i.CancellationToken.None);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeReferenceProvider", (f, b, s) => {
						const l = f.get(d.$k3),
							y = p(
								l.referenceProvider,
								b,
								s,
								!1,
								!1,
								i.CancellationToken.None,
							);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeReferenceProvider_recursive", (f, b, s) => {
						const l = f.get(d.$k3),
							y = p(
								l.referenceProvider,
								b,
								s,
								!1,
								!0,
								i.CancellationToken.None,
							);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeImplementationProvider", (f, b, s) => {
						const l = f.get(d.$k3),
							y = n(
								l.implementationProvider,
								b,
								s,
								!1,
								i.CancellationToken.None,
							);
						return o(() => y);
					}),
					(0, C.$ltb)("_executeImplementationProvider_recursive", (f, b, s) => {
						const l = f.get(d.$k3),
							y = n(
								l.implementationProvider,
								b,
								s,
								!0,
								i.CancellationToken.None,
							);
						return o(() => y);
					});
			},
		),
		