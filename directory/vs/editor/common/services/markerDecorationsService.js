import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/markers/common/markers.js';
import '../../../base/common/lifecycle.js';
import '../model.js';
import '../model/intervalTree.js';
import '../../../platform/theme/common/themeService.js';
import '../core/editorColorRegistry.js';
import './model.js';
import '../core/range.js';
import '../../../base/common/network.js';
import '../../../base/common/event.js';
import '../../../platform/theme/common/colorRegistry.js';
import '../../../base/common/constants.js';
import '../../../base/common/map.js';
import '../../../base/common/collections.js';
define(
			de[2855],
			he([1, 0, 90, 3, 64, 946, 35, 307, 67, 17, 23, 6, 51, 58, 59, 456]),
			function (ce /*require*/,
 e /*exports*/,
 t /*markers*/,
 i /*lifecycle*/,
 w /*model*/,
 E /*intervalTree*/,
 C /*themeService*/,
 d /*editorColorRegistry*/,
 m /*model*/,
 r /*range*/,
 u /*network*/,
 a /*event*/,
 h /*colorRegistry*/,
 c /*constants*/,
 n /*map*/,
 g /*collections*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RAc = void 0);
				let p = class extends i.$1c {
					constructor(b, s) {
						super(),
							(this.c = s),
							(this.a = this.D(new a.$re())),
							(this.onDidChangeMarker = this.a.event),
							(this.b = new n.$Gc()),
							(this.q = null),
							b.getModels().forEach((l) => this.g(l)),
							this.D(b.onModelAdded(this.g, this)),
							this.D(b.onModelRemoved(this.h, this)),
							this.D(this.c.onMarkerChanged(this.f, this));
					}
					dispose() {
						super.dispose(), this.b.forEach((b) => b.dispose()), this.b.clear();
					}
					getMarker(b, s) {
						const l = this.b.get(b);
						return (l && l.getMarker(s)) || null;
					}
					getLiveMarkers(b) {
						const s = this.b.get(b);
						return s ? s.getMarkers() : [];
					}
					f(b) {
						b.forEach((s) => {
							const l = this.b.get(s);
							l && this.j(l);
						});
					}
					g(b) {
						const s = new o(b);
						this.b.set(b.uri, s), this.j(s);
					}
					h(b) {
						const s = this.b.get(b.uri);
						s && (s.dispose(), this.b.delete(b.uri)),
							(b.uri.scheme === u.Schemas.inMemory ||
								b.uri.scheme === u.Schemas.internal ||
								b.uri.scheme === u.Schemas.vscode) &&
								this.c
									?.read({ resource: b.uri })
									.map((l) => l.owner)
									.forEach((l) => this.c.remove(l, [b.uri]));
					}
					j(b) {
						const s = this.c.read({ resource: b.model.uri, take: 500 });
						b.update(s) && this.a.fire(b.model);
					}
					addInsertIntoChatCallback(b) {
						return (
							(this.m = b),
							(0, i.$Yc)(() => {
								this.m = void 0;
							})
						);
					}
					callInsertIntoChatCallback(b) {
						this.m && this.m(b);
					}
					addInsertErrorIntoChatCallback(b) {
						return (
							(this.n = b),
							(0, i.$Yc)(() => {
								this.n = void 0;
							})
						);
					}
					callInsertErrorIntoChatCallback(b) {
						this.n && this.n(b);
					}
					addInsertExplainSymbolIntoChatCallback(b) {
						return (
							(this.q = b),
							(0, i.$Yc)(() => {
								this.q = null;
							})
						);
					}
					callInsertExplainSymbolChatCallback(b) {
						this.q
							? this.q(b)
							: console.warn(
									"No callback registered for insertExplainSymbolIntoChatCallback",
								);
					}
				};
				(e.$RAc = p), (e.$RAc = p = Ne([j(0, m.$QO), j(1, t.$aM)], p));
				class o extends i.$1c {
					constructor(b) {
						super(),
							(this.model = b),
							(this.a = new n.$Mc()),
							this.D(
								(0, i.$Yc)(() => {
									this.model.deltaDecorations([...this.a.values()], []),
										this.a.clear();
								}),
							);
					}
					update(b) {
						const { added: s, removed: l } = (0, g.$f)(
							new Set(this.a.keys()),
							new Set(b),
						);
						if (s.length === 0 && l.length === 0) return !1;
						const y = l.map((S) => this.a.get(S)),
							$ = s.map((S) => ({
								range: this.b(this.model, S),
								options: this.c(S),
							})),
							v = this.model.deltaDecorations(y, $);
						for (const S of l) this.a.delete(S);
						for (let S = 0; S < v.length; S++) this.a.set(s[S], v[S]);
						return !0;
					}
					getMarker(b) {
						return this.a.getKey(b.id);
					}
					getMarkers() {
						const b = [];
						return (
							this.a.forEach((s, l) => {
								const y = this.model.getDecorationRange(s);
								y && b.push([y, l]);
							}),
							b
						);
					}
					b(b, s) {
						let l = r.$iL.lift(s);
						if (
							(s.severity === t.MarkerSeverity.Hint &&
								!this.f(s, t.MarkerTag.Unnecessary) &&
								!this.f(s, t.MarkerTag.Deprecated) &&
								(l = l.setEndPosition(l.startLineNumber, l.startColumn + 2)),
							(l = b.validateRange(l)),
							l.isEmpty())
						) {
							const y =
								b.getLineLastNonWhitespaceColumn(l.startLineNumber) ||
								b.getLineMaxColumn(l.startLineNumber);
							if (y === 1 || l.endColumn >= y) return l;
							const $ = b.getWordAtPosition(l.getStartPosition());
							$ &&
								(l = new r.$iL(
									l.startLineNumber,
									$.startColumn,
									l.endLineNumber,
									$.endColumn,
								));
						} else if (
							s.endColumn === Number.MAX_VALUE &&
							s.startColumn === 1 &&
							l.startLineNumber === l.endLineNumber
						) {
							const y = b.getLineFirstNonWhitespaceColumn(s.startLineNumber);
							y < l.endColumn &&
								((l = new r.$iL(
									l.startLineNumber,
									y,
									l.endLineNumber,
									l.endColumn,
								)),
								(s.startColumn = y));
						}
						return l;
					}
					c(b) {
						let s, l, y, $, v;
						switch (b.severity) {
							case t.MarkerSeverity.Hint:
								this.f(b, t.MarkerTag.Deprecated)
									? (s = void 0)
									: this.f(b, t.MarkerTag.Unnecessary)
										? (s = E.ClassName.EditorUnnecessaryDecoration)
										: (s = E.ClassName.EditorHintDecoration),
									(y = 0);
								break;
							case t.MarkerSeverity.AI:
								(s = E.ClassName.EditorAIDecoration),
									(l = (0, C.$jP)(h.$RP)),
									(y = 20),
									(v = {
										color: (0, C.$jP)(h.$RP),
										position: w.MinimapPosition.Inline,
									});
								break;
							case t.MarkerSeverity.Info:
								(s = E.ClassName.EditorInfoDecoration),
									(l = (0, C.$jP)(d.$$T)),
									(y = 10),
									(v = {
										color: (0, C.$jP)(h.$DR),
										position: w.MinimapPosition.Inline,
									});
								break;
							case t.MarkerSeverity.Warning:
								(s = E.ClassName.EditorWarningDecoration),
									(l = (0, C.$jP)(d.$0T)),
									(y = 20),
									(v = {
										color: (0, C.$jP)(h.$ER),
										position: w.MinimapPosition.Inline,
									});
								break;
							case t.MarkerSeverity.Error:
							default:
								(s = E.ClassName.EditorErrorDecoration),
									(l = (0, C.$jP)(d.$9T)),
									(y = 30),
									(v = {
										color: (0, C.$jP)(h.$FR),
										position: w.MinimapPosition.Inline,
									});
								break;
						}
						return (
							b.tags &&
								(b.tags.indexOf(t.MarkerTag.Unnecessary) !== -1 &&
									($ = E.ClassName.EditorUnnecessaryInlineDecoration),
								b.tags.indexOf(t.MarkerTag.Deprecated) !== -1 &&
									($ = E.ClassName.EditorDeprecatedInlineDecoration)),
							{
								description: c.$AV,
								stickiness:
									w.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								className: s,
								showIfCollapsed: !0,
								overviewRuler: {
									color: l,
									position: w.OverviewRulerLane.Right,
								},
								minimap: v,
								zIndex: y,
								inlineClassName: $,
							}
						);
					}
					f(b, s) {
						return b.tags ? b.tags.indexOf(s) >= 0 : !1;
					}
				}
			},
		),
		