define(
			de[3966],
			he([1, 0, 85, 25, 42, 241, 22, 124, 17, 90, 204, 33, 74, 83]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$G8b = void 0);
				let n = class {
					constructor(f, b, s, l, y, $, v) {
						(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.d = l),
							(this.e = y),
							(this.f = $),
							(this.g = v);
					}
					async call(f, b, s, l) {}
					async finish(f, b, s, l) {
						if (!b)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						if (b.relativeWorkspacePath === void 0)
							throw new Error("Need to give the path to know where to edit.");
						const y = await this.d.getMagicURIForText(b.relativeWorkspacePath);
						if (!y)
							throw new Error(
								`Could not find file ${b.relativeWorkspacePath} in the workspace.`,
							);
						let $;
						try {
							$ = await this.c.createModelReference(y);
							const v = new a.$Ce();
							s.signal.addEventListener("abort", () => {
								v.cancel();
							});
							const I = (
								await this.g.getOrCreate($.object.textEditorModel, v.token)
							).getTopLevelSymbols();
							let T = p(I, b.includeChildren);
							return (
								b.lineRange &&
									(T = T.filter((P) =>
										P.range
											? b.lineRange
												? !(
														P.range.startLineNumber <
															b.lineRange.startLineNumber ||
														P.range.endLineNumber >
															b.lineRange.endLineNumberInclusive
													)
												: !0
											: !1,
									)),
								new d.$Mz({ symbols: T })
							);
						} finally {
							$?.dispose();
						}
					}
				};
				(e.$G8b = n),
					(e.$G8b = n =
						Ne(
							[
								j(0, t.$kZ),
								j(1, i.$Vi),
								j(2, w.$MO),
								j(3, E.$q8b),
								j(4, C.$ll),
								j(5, r.$aM),
								j(6, u.$9Db),
							],
							n,
						));
				function g(o) {
					switch (o) {
						case h.SymbolKind.File:
							return c.DocumentSymbol_SymbolKind.FILE;
						case h.SymbolKind.Module:
							return c.DocumentSymbol_SymbolKind.MODULE;
						case h.SymbolKind.Namespace:
							return c.DocumentSymbol_SymbolKind.NAMESPACE;
						case h.SymbolKind.Package:
							return c.DocumentSymbol_SymbolKind.PACKAGE;
						case h.SymbolKind.Class:
							return c.DocumentSymbol_SymbolKind.CLASS;
						case h.SymbolKind.Method:
							return c.DocumentSymbol_SymbolKind.METHOD;
						case h.SymbolKind.Property:
							return c.DocumentSymbol_SymbolKind.PROPERTY;
						case h.SymbolKind.Field:
							return c.DocumentSymbol_SymbolKind.FIELD;
						case h.SymbolKind.Constructor:
							return c.DocumentSymbol_SymbolKind.CONSTRUCTOR;
						case h.SymbolKind.Enum:
							return c.DocumentSymbol_SymbolKind.ENUM;
						case h.SymbolKind.Interface:
							return c.DocumentSymbol_SymbolKind.INTERFACE;
						case h.SymbolKind.Function:
							return c.DocumentSymbol_SymbolKind.FUNCTION;
						case h.SymbolKind.Variable:
							return c.DocumentSymbol_SymbolKind.VARIABLE;
						case h.SymbolKind.Constant:
							return c.DocumentSymbol_SymbolKind.CONSTANT;
						case h.SymbolKind.String:
							return c.DocumentSymbol_SymbolKind.STRING;
						case h.SymbolKind.Number:
							return c.DocumentSymbol_SymbolKind.NUMBER;
						case h.SymbolKind.Boolean:
							return c.DocumentSymbol_SymbolKind.BOOLEAN;
						case h.SymbolKind.Array:
							return c.DocumentSymbol_SymbolKind.ARRAY;
						case h.SymbolKind.Object:
							return c.DocumentSymbol_SymbolKind.OBJECT;
						case h.SymbolKind.Key:
							return c.DocumentSymbol_SymbolKind.KEY;
						case h.SymbolKind.Null:
							return c.DocumentSymbol_SymbolKind.NULL;
						case h.SymbolKind.EnumMember:
							return c.DocumentSymbol_SymbolKind.ENUM_MEMBER;
						case h.SymbolKind.Struct:
							return c.DocumentSymbol_SymbolKind.STRUCT;
						case h.SymbolKind.Event:
							return c.DocumentSymbol_SymbolKind.EVENT;
						case h.SymbolKind.Operator:
							return c.DocumentSymbol_SymbolKind.OPERATOR;
						case h.SymbolKind.TypeParameter:
							return c.DocumentSymbol_SymbolKind.TYPE_PARAMETER;
						default:
							return c.DocumentSymbol_SymbolKind.UNSPECIFIED;
					}
				}
				function p(o, f) {
					return o.map(
						(b) =>
							new c.$8s({
								name: b.name,
								kind: g(b.kind),
								range: b.range
									? new m.$iL(
											b.range.startLineNumber,
											b.range.startColumn,
											b.range.endLineNumber,
											b.range.endColumn,
										)
									: void 0,
								selectionRange: b.selectionRange
									? new m.$iL(
											b.selectionRange.startLineNumber,
											b.selectionRange.startColumn,
											b.selectionRange.endLineNumber,
											b.selectionRange.endColumn,
										)
									: void 0,
								children: f && b.children ? p(b.children, f) : void 0,
							}),
					);
				}
			},
		),
		